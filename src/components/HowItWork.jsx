



function HowItWork(){
    return(
        <div id="howitworks" style={{
            padding: '60px 20px',
           textAlign: 'center',
           background: '#e9f7ec'
        }}>
            <div style={{
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto 25px'
            }}>
                <p style={{
                    color: '#16a34a',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    fontSize: '14px'
                }}>HOW IT WORK</p>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: '#111827',
                    marginTop: '10px',
                    lineHeight: '1.2'
                }}>Find Your Green Match in 3 Easy Steps</h1>
                <p style={{
                    color: '#6b7280',
                    marginTop: '15px',
                    fontSize: '16px'}}>We make plant parenting simple. No more guessing,
                    just thriving greens.</p>
            </div>

            <div style={{display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap',
                maxWidth: '1100px',
                margin: '0 auto'
            }}>
                {/*Step 1*/}
                <div style={{
                    background: 'white',
                    border: '1px solid #c8e6c9',
                    borderTop: '5px solid #22c55e',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    padding: '25px 20px',
                    borderRadius: '20px',
                    width: '100%', maxWidth: '300px', boxSizing: 'border-box',
                    textAlign: 'left'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: '#dcfce7',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px'
                    }}>🔍</div>
                    <h3 style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        fontWeight: '700'
                    }}>1.Tell us your space</h3>
                    <p style={{
                        color: '#6b7280',
                        fontSize: '14px',
                        marginTop: '10px',lineHeight: '1.6'
                    }}>Search any plant or answer 3 quick question about your light,
                    space & lifeStyle.</p>
                </div>

                {/*Step 2*/}
                <div style={{
                     background: 'white',
                    border: '1px solid #c8e6c9',
                    borderTop: '5px solid #22c55e',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                    padding: '25px 20px',
                    borderRadius: '20px',
                    width: '100%', maxWidth: '300px', boxSizing: 'border-box',
                    textAlign: 'left'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: '#bbf7d0',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px'
                    }}>📊</div>
                    <h3 style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        fontWeight: '700'
                    }}>2. Check your FitScore</h3>
                    <p style={{
                         color: '#6b7280',
                        fontSize: '14px',
                        marginTop: '10px',lineHeight: '1.6'
                    }}>We check how well a plant fits your climate, care level, and
                    vibe before you buy.</p>
                </div>

                {/* {Step 3} */}
                <div style={{
                    background: '#14532d',
                    color: 'white',
                    padding: '25px 20px',
                    borderRadius: '20px',
                    width: '100%', maxWidth: '300px', boxSizing: 'border-box',
                    textAlign: 'left',
                    border: '1px solid #14532d', 
                    borderTop: '5px solid #4ade80',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.20)'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        background: '#16a34a',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px'
                    }}>☘️</div>
                    <h3 style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        fontWeight: '700'
                    }}>3. Grow with confidence</h3>
                    <p style={{
                         color: '#d1fae5',
                        fontSize: '14px',
                        marginTop: '10px',lineHeight: '1.6'
                    }}>Get your perfect plant match and start your green journey with 
                    our care guides.</p>
                    </div>
                   </div>
            </div>
     );
     }
export default HowItWork;

