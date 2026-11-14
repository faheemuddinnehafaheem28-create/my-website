import { useContext, useEffect, useState} from "react";
import { CartContext } from "./CartContext";
import ReviewBox from "./ReviewBox";
import FitScoreQuiz from "./FitScoreQuiz";

function Plant({search}){
    const [plants, setPlants] = useState([]);
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizResult, setQuizResult] = useState(null);
    const {addToCart} = useContext(CartContext);
    const [wishlistIds, setWishlistIds] = useState([]);
    const [sortBy, setSortBy] = useState('match');
    const searchFiltered = plants.filter((p)=>
    p.name.toLowerCase().includes((search || "").toLowerCase()));
    const filteredPlants = quizResult ? quizResult : searchFiltered;
    //Sorting Logic
    const sortedPlants = [...filteredPlants].sort((a, b)=>{
        if(sortBy === 'price') return a.price - b.price; //sasta uper
        return (b.fitScore || 0) - (a.fitScore || 0); //Best Match uper
    });


    useEffect(() =>{
        fetch("http://localhost:7000/api/plants")
            .then(res => res.json())
            .then(data =>{
                console.log("Data from backend", data);         
             setPlants(data);
            })
            .catch(err => console.log("backend error",err));
    }, []);

    const handleWishlist = async (singlePlant) => {
        try{
            const data = {
                plantId: singlePlant._id,
                plantName: singlePlant.name,
                plantPrice: singlePlant.price || 500
            };
            await fetch("http://localhost:7000/api/wishlist/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            setWishlistIds([...wishlistIds, singlePlant._id]);
            alert(`${singlePlant.name} Added to your Wishlist❤️`)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div id= "plant"  style={{padding: '40px 20px', background: '#e9f7ec'}}>
            <h2 style={{textAlign: 'center', marginBottom: '20px', fontWeight: 'bold'}}>
                Our-Plants <span style={{color: '#22c55e', }}>- From Backend</span></h2>

                <p style={{textAlign: 'center', color: '#666', marginBottom: '30px'
                }}>Live plants from your backend</p>

                {/*FitScore Quiz Section*/}
                 <div style={{textAlign: 'center', marginBottom: '20px'}}>
                    {!showQuiz ? (
                        <button onClick={()=> setShowQuiz(true)} style={{
                            background: '#2e7d32', color: 'white', padding: '10px 20px',
                            borderRadius: '8px', border: 'none', cursor: 'pointer',
                            fontWeight: 'bold'}}>
                            🌿 Find My Perfect Plant - Take Quiz
                            </button>
                    ) : (
                        <FitScoreQuiz
                        plants={plants}
                        onResult={(result)=>{
                            setQuizResult(result);
                            setShowQuiz(false)
                        }}/>
                    )}
                    {quizResult && (
                        <button onClick={() => setQuizResult(null)} style={{marginLeft: '10px',
                            padding: '8px 15px', cursor: 'pointer'
                        }}>Clear Filter / Show All</button>
                    )}
                 </div>
                 {/*Sorting Buttons*/}
                 <div style={{textAlign: 'center', marginBottom: '20px', marginTop: '10px',
                    display: 'flex', gap: '10px', justifyContent: 'center'}}>
                        <button onClick={()=> setSortBy('match')} style={{padding: '8px 16px',
                            borderRadius: '20px', border: '1px solid #22c55e',
                             background: sortBy==='match' ? '#22c55e':'white',
                             color: sortBy==='match' ? 'white':'#22c55e', cursor: 'pointer'
                        }}>Best Match</button>
                        <button onClick={()=> setSortBy('price')} style={{padding: '8px 16px',
                            borderRadius: '20px', border: '1px solid #22c55e',
                             background: sortBy==='price' ? '#22c55e':'white',
                             color: sortBy==='price' ? 'white':'#22c55e', cursor: 'pointer'
                        }}>Price Low to High</button>


                    </div>

            {plants.length === 0 && ( <p style={{textAlign: 'center'}}>
                Loadind Plants from backend...<br/>
                 If not showing , check backend terminal is running.</p>)}

                 

                 <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px',
                     justifyContent: 'center', maxWidth: '1100px', margin: '0 auto'}}>

                        {filteredPlants.length === 0 ? (
                          <p style={{textAlign: 'center', width: '100%', marginTop: '20px',
                            fontSize: '18px', color: 'green'
                          }}>No plant found ☘️ Try another name!</p>
                        ) : (
            sortedPlants.map((singlePlant)=> (
                <div
                key={singlePlant._id}
               
                style={{width: '280px', background: '#ffffff', borderRadius: '16px', padding: '0',
                    cursor: 'pointer', border: '2px solid #22c55e',
                     boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 8px rgba(34, 197, 94, 0.15'
                     , overflow: 'hidden',
                      textAlign: 'left', display: 'flex', flexDirection: 'column'
                }}
                >
                    <div style={{height: '160px', background: '#bbf7d0', display: 'flex', 
                        justifyContent: 'center', alignItems: 'center', fontSize: '70px',
                        borderBottom: '2px solid #22c55e'
                    }}>🌿</div>
                    <div style={{padding: '15px', display: 'flex', flexDirection: 'column',
                        flex: 1
                    }}>
                        <h3 style={{margin: '0 0 10px', fontSize: '18px', color: '#111',
                        fontWeight: '800'
                        }}>{singlePlant.name}</h3>

                        <p style={{margin: '0 0 10px', fontSize: '13px', color: '#444',
                            lineHeight: '1.4', minHeight: '36px'
                        }}>{singlePlant.description}</p>

                        <p style={{margin: "0 0 5px", fontSize: "18px",
                             color: "#15803d", fontWeight: "bold"}}>
                         Rs.{singlePlant.price}
                        </p>

                        {singlePlant.stock === 0 ? (
                            <p style={{margin: "0 0 10px", fontSize: "13px", color: "white",
                                background: "#ef4444", padding: "3px 8px", borderRadius: "10px",
                                display: "inline-block"
                            }}>🔴 Out of Stock</p>
                        ) : singlePlant.stock <= 3 ? (
                            <p style={{margin: "0 0 10px", fontSize: "13px", color: "#92400e",
                                background: "#fef3c7", padding: "3px 8px", borderRadius: "10px",
                                display: "inline-block"}}>⚠️ Only {singlePlant.stock} left!</p>
                        ) : (
                            <p style={{margin: "0 0 10px", fontSize: "13px", color: "#065f46",
                                background: "#fef3c7", padding: "3px 8px", borderRadius: "10px",
                                display: "inline-block"}}>✅ In Stock: {singlePlant.stock}</p>
                        )}

                        <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap',
                            marginBottom: '10px'
                        }}><span style={{background: '#dcfce7', color: '#15803d',
                            padding: '4px 8px', borderRadius: '12px', fontSize: '11px'
                        }}>💡{singlePlant.light}</span>

                        <span style={{background: '#fef9c3', color: '#854d0e',
                             padding: '4px 8px', borderRadius: '12px', fontSize: '11px',
                              fontWeight: 'bold'}}>📏{singlePlant.space}</span>

                              <span style={{background: '#e0e7ff', color: '#3730a3', 
                                padding: '4px 8px', borderRadius: '12px', fontSize: '11px',
                                fontWeight: 'bold'
                              }}>Match:  {singlePlant.fitScore ?? 0}%
                              </span>

                              <div style={{display: "flex", gap: "8px", marginTop: "10px",
                                alignItems: "center"
                              }}>
                                <button onClick={() => handleWishlist(singlePlant)}
                                    style={{background: "white", border: "1px solid #ddd",
                                        padding: "8px 12px", borderRadius: "8px", cursor: "pointer",
                                        fontSize: "16px"
                                    }}>{wishlistIds.includes
                                    (singlePlant._id)? "❤️" : "🤍"}</button>

                              <button onClick={(e) => {
                                if(singlePlant.stock === 0) return alert(`${singlePlant.name}
                                     is Out of Stock!`);
                                     alert("Button Clicked"+ singlePlant.name);
                                     console.log("Plant", singlePlant)
                                     addToCart(singlePlant);
                              }}
                              style={{background: singlePlant.stock === 0 ? "#9ca3af" : "#22c55e",
                                color: "white", border: "none", padding: "8px 16px", 
                                borderRadius: "8px",
                                cursor: singlePlant.stock === 0 ? "not-allowed" : "pointer",
                                 fontWeight: "bold", marginTop: "10px", width: "100%"
                              }}
                              disabled={singlePlant.stock === 0}
                              >{singlePlant.stock === 0 ? "Sold Out" : "Add to Cart"}</button>
                              </div>
                              <div style={{marginTop: '12px', borderTop: '2px solid #dcfce7',
                                maxHeight: '110px', overflowY: 'auto', paddingTop: '10px'
                              }}>
                              <ReviewBox plantId={singlePlant._id}
                               plantName={singlePlant.name}/>
                               </div>
                        </div>
                    </div>
                </div>  
                    
                   ))
                )}
        </div>
        </div>
         );
}
export default Plant;
