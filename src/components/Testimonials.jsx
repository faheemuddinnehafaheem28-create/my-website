import {useState} from "react";

const Testimonials = () => {
    const [showForm, setShowForm] = useState(false);
    const [story, setStory] = useState('');

    const handleSubmit = async () => {
        try{
            const res = await fetch("http://localhost:7000/api/testimonial/post", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: "Saima Plant Lover",
                    message: story,
                    rating: 5
                })
            });

            const data = await res.json();
            console.log("Testimonial saved", data);
            alert("Testimonial save successfully!");
            setStory('');
            setShowForm(false);

        }catch(error){
            console.log(error);
        }
    };
    return(
        <div id="testimonials" style={{
            padding: '40px 20px', background: 'white', textAlign: 'center'
        }}>
            <h2 style={{fontSize: '32px', fontWeight: '800'}}>What Our <span style={{
                color: '#22c55e'}}>Plant Lovers</span> Say</h2>
                <p style={{color: 'gray', marginTop: '10px', marginBottom: '50px'}}>Real
                stories from our happy green family.</p>

                <div style={{display: 'flex', gap: '15px', justifyContent: 'center',
                    flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto'
                }}>
                    {/*Review 1*/}
                    <div style={{background: '#f6fef8', padding: '30px', borderRadius: '16px',
                        width: '280px', textAlign: 'left', border: '1px solid gray'
                    }}>
                        <p style={{color: '#facc15', fontSize: '18px'}}>⭐⭐⭐⭐⭐</p>
                        <p style={{fontSize: '14px', color: '#333', margin: '10px',
                            fontStyle: 'italic'
                        }}>Mene money plants liya tha, MASHALLAH itna pyara grow ho raha
                        hai! Care tips ne meri bhot help ki.</p>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px',
                            marginTop: '20px' }}>
                                <div style={{width: '40px', height: '40px', background: '#22c55e',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: 'white', fontWeight: 'bold'
                                }}>A</div><div>
                                <h4 style={{margin: '0', fontSize: '14px'}}>Ayesha Khan</h4>
                                <p style={{margin: '0', fontSize: '12px', color: 'gray'
                                }}>Karachi</p>
                            </div>
                    </div>
                </div>
                 {/*Review 2*/}
                    <div style={{background: '#f6fef8', padding: '30px', borderRadius: '16px',
                        width: '280px', textAlign: 'left', border: '1px solid gray'
                    }}>
                        <p style={{color: '#facc15', fontSize: '18px'}}>⭐⭐⭐⭐⭐</p>
                        <p style={{fontSize: '14px', color: '#333', margin: '10px',
                            fontStyle: 'italic'
                        }}>PlantMatch ka FitScore kamaal hai! Mere kam light wale room k liye
                        perfect plant mila!</p>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px',
                            marginTop: '20px' }}>
                                <div style={{width: '40px', height: '40px', background: '#22c55e',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: 'white', fontWeight: 'bold'
                                }}>S</div>
                                <div>
                                <h4 style={{margin: '0', fontSize: '14px'}}>Sara Ahmed</h4>
                                <p style={{margin: '0', fontSize: '12px', color: 'gray'
                                }}>Lahore</p></div>
                    </div>
                    
                </div>
                
                 {/*Review 3*/}
                    <div style={{background: '#f6fef8', padding: '30px', borderRadius: '16px',
                        width: '280px', textAlign: 'left', border: '1px solid gray'
                    }}>
                        <p style={{color: '#facc15', fontSize: '18px'}}>⭐⭐⭐⭐⭐</p>
                        <p style={{fontSize: '14px', color: '#333', margin: '10px',
                            fontStyle: 'italic'
                        }}>Best wishes for beginner! Ab mera ghar jungle jaisa hara bhara lagta hai.
                        Thank you PlantMatch!</p>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px',
                            marginTop: '20px' }}>
                                <div style={{width: '40px', height: '40px', background: '#22c55e',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: 'white', fontWeight: 'bold'
                                }}>F</div>
                                <div>
                                <h4 style={{margin: '0', fontSize: '14px'}}>Fatima Ali</h4>
                                <p style={{margin: '0', fontSize: '12px', color: 'gray'
                                }}>Islamabad</p>
                            </div>
                          </div>
                        </div>
                        </div>

                        <div style={{marginTop: '40px'}}>
                            <button onClick= {()=> setShowForm(true)} style={{background: '#22c55e', color: 'white',
                                padding: '12px 30px', borderRadius: '25px', border: 'none',
                                fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
                            }}>Share Your Green Story☘️</button>
                        </div>

                        {showForm && (
                            <div style={{position: 'fixed', top: '0', left: '0', width: '100%',
                                height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex',
                                justifyContent: 'center', alignItems: 'center', zIndex: '2000'
                            }}>
                                <div style={{background: 'white', padding: '25px',
                                     borderRadius: '15px',width: '90%', maxWidth: '400px',
                                     textAlign: 'left'}}>
                                <h3 style={{marginTop: '0'}}>Share Your Story 💚</h3>
                                <p style={{fontSize: '13px', color: '#666'}}>We'd love to hear
                                    your plant story</p>
                                    <input type="text" placeholder="Your name" style={{
                                        width: '100%', padding: '10px', borderRadius: '8px',
                                        border: '1px solid #ddd', marginBottom: '10px', 
                                        boxSizing: 'border-box'
                                    }} />
                                    <input type="text" placeholder="Your city(Karachi / Lahore)"
                                    style={{width: '100%', padding: '10px', borderRadius: '8px',
                                        border: '1px solid #ddd', marginBottom: '10px',
                                         boxSizing: 'border-box'
                                    }} />
                                    <textarea name="" id="" placeholder="Write your green story!" value={story}
                                    onChange={(e)=> setStory(e.target.value)} style={{width: '100%',
                                        padding: '10px', borderRadius: '8px', border: '1px solid #ddd',
                                        height: '80px', boxSizing: 'border-box'
                                    }}></textarea>
                                    <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                                        <button onClick={handleSubmit} style={{flex: '1', background: '#22c55e', color: 'white',
                                                border: 'none', padding: '10px', borderRadius: '8px',fontWeight: 'bold',
                                                cursor: 'pointer'
                                         }}>Submit</button>
                                         <button onClick={()=> setShowForm(false)} style={{
                                            flex: '1', background: '#eee', border: 'none',
                                            padding: '10px', borderRadius: '8px', cursor: 'pointer'
                                         }}>Close</button>
                                    </div>
                                     </div>
                            </div>
                        )}
                        </div>                                   
    )
};
export default Testimonials