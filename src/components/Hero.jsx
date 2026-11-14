import {useEffect, useState} from 'react';
import bgImage from "../assets/bg2.jpg";
import PlantQuiz from "./PlantQuiz";

function Hero(){
    const [search , setsearch] = useState('')
    const [showQuiz, setShowQuiz] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(()=>{
        const handleResize = () => setIsMobile(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const goToPlants = ()=>{
        const sec = document.getElementById('plants');
        if(sec){
            sec.scrollIntoView({behavior: 'smooth'})
        }else{
            alert("Plnat section found! Scroll down to see your plants!")
        }
    }
    return (
       <div style={{padding: '20px 40px', backgroundColor: '#fffaf5'}}>
        {/*Animation */}
        <style>{`
        @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(25px); }
        100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
        0% { tranform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
        } 
        @media (max-width: 768px){
         .banner-area{
         height: auto !important;
         min-height: auto !important;
         flex-direction: column !important;
         align-items: center !important;
         justify-content: center !important;
         padding: 14px !important;
         gap: 12px !important;
         background-size: cover !important;
         background-position: center bottom !important;
         border-radius: 16px !important;
         }
         .banner-card{
         width: 90% !important;
         max-width: 300px !important;
         padding: 14px 12px !important;
         border-radius: 12px !important;
         box-shadow: 0 5px 18px rgba(0,0,0,0.12) !important;
         transform: none !important;
         margin: 0 !important;
        }
         .banner-card h3, .banner-card h2{
         font-size: 15px !important;
         
         }
         .banner-card p{
         font-size: 12.5px !important;
         line-height: 1.4 !important;
         }
         }
        `}
        </style>
        {/*Top Text*/}
        <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '10px',
                 animation: 'fadeUp 0.8 ease-out', color: 'darkgreen'}}>
                Find the Perfect Plant for your space.
            </h1>
            <p style={{color: '#666', fontSize: '13px', maxWidth: '500px',
                 margin: '0 auto 15px auto', animation: 'fadeUp 0.8 ease-out 0.2s both'}}>
                Answer a few simple questions and discover plant that match your light,<br />
                space, and lifestyle - no guesswork needed.
            </p>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center',
                animation: 'fadeUp 0.8 ease-out 0.4s both'
            }}>
                <button onClick= {goToPlants}
                 style={{backgroundColor: 'darkgreen', color: 'white', borderRadius: '20px',
                    padding: '8px 18px', border: 'none', fontSize: '12px', cursor: 'pointer'
                }}>Get Started Now</button>

                <button onClick= {()=> setShowQuiz(true)}
                style={{backgroundColor: 'lightgreen', color: 'black', borderRadius: '20px',
                    padding: '8px 18px', border: '1px solid #ddd', fontSize: '12px ', 
                    cursor: 'pointer'
                }}>Start Quiz Now</button>
            </div>
            
        </div>
        {/*Banner image area*/}
        <div className='banner-area' style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '300px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '20px',
            paddingBottom: '40px',
            animation: 'fadeUp 1s ease-out 0.6s both'

        }}>
            <div className='banner-card' style={{backgroundColor: 'white', borderRadius: '15px', padding: '20px', 
                width: '340px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                animation: 'float 3.5s ease-in-out infinte'}}>

                    <h3 style={{margin: '0 0 5px 0', fontSize: '16px'}}>Will Plant Work?</h3>
                    <p style={{fontSize: '12px', color: '#666', margin: '0 0 15px 0'}}>
                        Check how well plant fits your climate, space, and your vibe before you buy,
                    </p>

                    <div style={{display: 'flex', flexDirection: 'column',
                     gap: '10px',  alignItems: 'center', width: '100%'}}>

                            <div style={{display: 'flex', gap: '5px', alignItems: 'center',
                                backgroundColor: '#f5f5f5', borderRadius: '12px',
                                 padding: '12px', width: '100%', minWidth: '0',
                                 boxSizing: 'border-box'
                            }}>
                            <span style={{fontSize: '12px', fontWeight: 'bold',
                                flexShrink: 0
                            }}>☘️</span>
                    <input type="text" placeholder='Search any plant' value={search} 
                    onChange={(e)=>setsearch(e.target.value)}
                    style={{border: 'none', background: 'transparent', outline: 'none',
                     fontSize: isMobile ? '11px': '13px',width: '100%', minWidth: '0'}} />
                     </div>
                    <button onClick= {goToPlants} 
                    style={{backgroundColor: '#1a3d3d',color:  'white', cursor: 'pointer', 
                        border: 'none',
                        borderRadius: '10px', padding: '12px 18px', 
                        fontSize: '14px',
                        fontWeight: '700', whiteSpace: 'nowrap', width: '100%',
                        flexShrink: 0
                    }}>Check Fit Score now</button>
                        </div>
                        <p style={{fontSize: isMobile ?'9px' :'10px', color: 'gray',
                             marginTop: '10px'}}>
                            Trending search: Monstera, Basil, Peonies
                        </p>
                </div>

                <div style={{backgroundColor: 'white', borderRadius: '15px', padding: '20px',
                            width: isMobile ? '100%': '280px', maxWidth: '320px',
                             boxSizing: 'border-box', textAlign: 'center', flexShrink: 0,
                              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                              flexWrap: 'wrap', justifyContent: 'center',
                              alignItems: 'center',
                            animation: 'float 3.5 ease-in-out 0.5s infinite'}}>
                       <h3 style={{margin: '0 0 5px 0', fontSize: '14px'}}>Not sure what to grow?</h3>
                       <p style={{fontSize: '12px', color: '#666', margin: '0 0 15px 0'}}>
                        Let's find your perfect plant match!
                       </p>
                       <button onClick= {()=> setShowQuiz(true)}
                       style={{backgroundColor: 'lightgreen', cursor: 'pointer',
                         border: '1px solid #ddd', borderRadius: '15px',
                        padding: '5px 12px', fontSize: '10px'}}>Start Quiz now</button>
                            </div>
        </div>
        {showQuiz && (
            <div style={{position: "fixed", top: "0", left: 0, width: "100%", height: "100%",
                background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center",
                alignItems: "center", zIndex: 9999
            }}>
                <div style={{background: "white", borderRadius: "20px", width: "90%", 
                    maxWidth: "600px", maxHeight: "90vh", overflow: "auto"
                }}>
                    <div style={{textAlign: "right", padding: "10px"}}>
                        <button onClick={() => setShowQuiz(false)} style={{
                            background: "red", color: "white", border: "none", borderRadius: "50%",
                            padding: "5px 10px", cursor: "pointer"
                        }}>X</button>
                    </div>
                    <PlantQuiz/>
                </div>
            </div>
        )}
       </div>
       
    )
}
export default Hero