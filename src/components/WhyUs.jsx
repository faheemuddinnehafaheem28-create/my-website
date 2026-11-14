import React from "react";

const WhyUs = () =>{
    return(
        <div id="why-us" style={{
            padding: '80px 20px',
            background: '#e9f7ec',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '32px',
                fontWeight: '800'
            }}>Why choose <span style={{color: '#22c55e'}}>PlantMatch?☘️</span></h2>
            <p style={{color: 'gray', marginTop: '10px', marginBottom: '50px'}}>We make plant
                parenting easy, fun and stress-free. </p>

                <div style={{display: 'flex', gap: '20px', justifyContent: 'center',
                    flexWrap: 'wrap'}}>

            {/*Card 1*/}
            <div style={{background: 'white', padding: '30px', borderRadius: '16px',
                width: '300px', boxSizing: 'border-box', border: '1px solid #c8e6c9',
                borderTop: '5px solid #22c55e', boxShadow: '0 12px 30px rgba(0,0,0,0.12)'}}>
                    <div style={{fontSize: '30px', background: '#dcfce7', width: '60px',
                        height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', margin: '0 auto 15px'}}>☘️</div>
                        <h3>Perfect Match</h3>
                        <p style={{color: '#555', fontSize: '14px', marginTop: '8px'}}>
                        Our smart FitScore check your light & space to find your perfect plant.
                        No more guesswork!
                        </p>
                </div>
                {/*Card 2*/}
                <div style={{background: 'white', padding: '30px', borderRadius: '16px',
                    width: '300px',boxSizing: 'border-box', border: '1px solid #c8e6c9',
                borderTop: '5px solid #22c55e', boxShadow: '0 12px 30px rgba(0,0,0,0.12)'}}>
                        <div style={{fontSize: '30px', background: '#dcfce7', width: '60px',
                        height: '60px',
                            borderRadius: '50%', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', margin: '0 auto 15px'
                        }}>📚</div> 
                        <h3>Care Made Simple</h3>
                        <p style={{color: '#555', fontSize: '14px', marginTop: '8px'}}>Get
                            easy care tips with every plant so your green friend always stays happy
                            and healthy.
                        </p>
                    </div>
                    {/*Card 3*/}
                    <div style={{background: 'white', padding: '30px', borderRadius: '16px',
                    width: '300px', boxSizing: 'border-box', border: '1px solid #c8e6c9',
                borderTop: '5px solid #22c55e', boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                        }}>
                       <div style={{fontSize: '30px', background: '#dcfce7', width: '60px',
                                height: '60px',borderRadius: '50%',display: 'flex',
                                 alignItems: 'center',justifyContent: 'center', margin: '0 auto 15px',
                            }}>🌍</div>
                        
                        <h3>Green & Sustainable</h3>
                        <p style={{color: '#555', fontSize: '14px', marginTop: '8px'}}>We promote 
                            eco-friendly plants that make your home beautiful and our planet happier.
                        </p>
                        </div>
                        </div> 
                        </div>
                                                                             
    );
};
export default WhyUs