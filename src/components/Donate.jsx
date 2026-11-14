import { useState } from "react";
const popupStyle = {
    overlay: {position: 'fixed', left: '0', top: '0', bottom: '0', width: '100%',
        height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: '999999999',
        padding: '20px'
    },
    box: {background: 'white', width: '100%', maxWidth: '300px', borderRadius: '14px',
        padding: '18px', textAlign: 'center'
    },
    title: {
        margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700'
    },
    text: {fontSize: '12px', color: '#666', margin: '0 0 12px 0'},
    infoBox: {background: '#f0fdf4', padding: '10px 12px', borderRadius: '10px', 
        textAlign: 'left'},
        line: {margin: '5px 0', fontSize: '12px', display: 'flex', justifyContent: 'space-between'
        },
        minBtn: {width: '100%', background: '#111827', color: 'white', padding: '9px', 
            borderRadius: '8px', border: 'none', marginTop: '14px', fontWeight: 'bold',
            fontSize: '13px', cursor: 'pointer'
        },
        cancelBtn: {width: '100%', background: '#f9fafb', color: '#555', padding: '8px',
            borderRadius: '8px', border: '1px solid #ddd', marginTop: '8px', fontSize: '12px',
            cursor: 'pointer'
        }
};

function Donate(){

    const [showModel, setShowModel] = useState(false);
    const [showThanks, setShowThanks] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');

    const plans = [
        {title: 'Seed Supporter', icon: '🌱', price: '500', impact: 'Plants 5 trees in Karachi',
            color: '#f0fdf4'},
         {title: 'Tree Guardian', icon: '🌳', price: '1000', 
            impact: 'Plant 12 Trees + care for 1 month', color: '#dcfce7', popular: 'true'},
         {title: 'Garden Builder', icon: '🌴', price: '2500',
             impact: 'Plants 30 trees + certification', color: '#f0fdf4'}

    ];
    const handleConfirmPayment = async () => {
        try{
            const selectedPlan = plans.find(p => p.price === selectedAmount);

            const response = await fetch("http://localhost:7000/api/donate/post", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: "Neha",
                    email: "test@gmail.com",
                    amount: selectedAmount,
                    plans: selectedPlan?.title,
                    message: selectedPlan?.impact
                })
            });

            const data = await response.json();
            console.log("Donate save successfully", data);

            setShowModel(false);
            setShowThanks(true);
            setTimeout (() => setShowThanks(false), 4000);

        }catch(error){
            console.log("Error", error);
            alert("Error");
        }
    };
    return(
        <section id="donate" style={{padding: '80px 20px', background: '#ffffff'}}>
            <style>
                {`
                @keyframes pop {0% {transform: scale(0);} 80% {transform: scale(1.2); }100%
                {transform: scale(1) translateY(0); opacity: 1;} }
                @keyframes grow {0% {transform: scale(0.5) translateY (20px); opacity: 0;}100%
                {transform: sacle(1) translate(0); opacity: 1; 1}}
                @keyframes confetti { 0%{transform: translateY (-100px) rotate(0deg);}100%
                {transform: translateY(300px) rotate(720deg); } }
                .donate-card {transition: all 0.3 ease; cursor: pointer;}
                .donate-card: <hover>transform: translateY(-12px) scale(1.03) !important; box-shadow:
                 0 25px 50px rgba(34, 197, 94, 0.3) !important;
                `}</style>

            <div style={{maxWidth: '1100px', margin: '0 auto', textAlign: 'center'}}>
                <span style={{background: '#dcfce7', color: '#15803d', padding: '6px 14px',
                 borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px'
                }}>SUPPORT OUR MISSION</span>
                <h2 style={{fontSize: '36px', fontWeight: '800', marginTop: '15px',
                    marginBottom: '12px', color: '#111827'
                }}>Make Pakistan Greener</h2>
                <p style={{color: '#6b7280', maxWidth: '600px', margin: '0 auto 50px auto',
                    fontSize: '16px', lineHeight: '1.6', textAlign: 'center'
                }}>Every donation directly funds plantation drive in Karachi and interior Sindh.
                100% tranparent, 100% green impact.</p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px', alignItems: 'center'
                }}>{plans.map((plans)=> (
                    <div key={plans.price} className="donate-card"
                    style={{background: 'white', borderRadius: '20px', padding: '35px 25px',
                        border: plans.popular ? '2px solid #22c55e' : '5px solid #c8e6c9',
                        boxShadow: plans.popular ? '0 20px 40px rgba (34, 197, 94, 0.18)' :
                         '0 10px 25px rgba(0,0,0,0.08)', transform: plans.popular ? 'scale(1.05)' : 'none',
                         position: 'relative', textAlign: 'left', transition: 'all 0.3s ease',
                         cursor: 'pointer', boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = plans.popular ? 'scale (1.05) translateY(-12px)': 
                        'translateY(-12px)';
                        e.currentTarget.style.boxShadow = '0 25px 50px rgba(34, 197, 94, 0.3)';
                    }}
                    onMouseLeave={(e) =>{
                        e.currentTarget.style.transform = plans.popular ? 'scale(1.05)' : 'none';
                         e.currentTarget.style.boxShadow = plans.popular ?
                          '0 20px 40px rgba(34, 197, 94, 0.15)': '0 4px 20px rgba(0,0,0,0.05)';
                    }}
                    >
                        {plans.popular && (
                            <div style={{position: 'absolute', top: '-12px', left: '50%',
                                transform: 'translate(-50%)', background: '#22c55e',color: 'white',
                                padding: '4px 12px', borderRadius: '20px', fontSize: '11px', 
                                fontWeight: 'bold'
                            }}>MOST CHOSEN</div>
                        )}
                        <div style={{width: '50px', height: '50px', background: 'plans.color',
                            borderRadius: '12px', display: 'flex', alignItems: 'center', 
                            justifyContent: 'center', fontSize: '24px', marginBottom: '20px'
                        }}>{plans.icon}</div>
                        <h3 style={{fontSize: '18px', fontWeight: '700', margin: '0 0 8px',}}>
                            {plans.title}
                        </h3>
                        <div style={{display: 'flex', alignItems: 'baseline', gap: '4px',
                             marginBottom: '12px'}}><span style={{fontSize: '14px', color: '#6b7280'
                             }}>Rs.</span>
                             <span style={{fontSize: '32px', fontWeight: '800', color: '#111827'
                             }}>{plans.price}</span></div>
                             <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '25px',
                                minHeight: '20px'
                             }}>{plans.impact}</p>
                             <button onClick={() => {setSelectedAmount(plans.price); setShowModel(true);}}
                                style={{width: '100%', background: plans.popular ? '#111827' : '#22c55e',
                                    color: 'white', border: 'none', padding: '12px',
                                     borderRadius: '10px', fontWeight: '600', cursor: 'pointer',
                                     fontSize: '14px'
                                }}> Donate Now </button>
                    </div>
                ))}
                </div>
                <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center',
                    gap: '20px', fontSize: '13px', color: 'black'
                }}>
                 </div>
                </div>
                {/*Payment Popup*/}
                {showModel && (
                    <div onClick={()=> setShowModel(false)}
                    style={popupStyle.overlay
                    }>
                        <div
                        style={popupStyle.box}>
                            <h3 style={popupStyle.title}>Donate Rs. {selectedAmount} 💚</h3>
                                <p style={popupStyle.text}>Thank you for your supporting! Please send via:</p>

                                <div style={popupStyle.infoBox}>
                                    <p style={popupStyle.line}><b>JazzCash</b>
                                    03XX-XXXXXXX</p>
                                    <p style={popupStyle.line}><b>EasyPaisa</b>
                                    <span>03XX-XXXXXXX</span></p>
                                    <p style={popupStyle.line}><b>Bank</b>
                                    PlantMatch - XXXX</p>
                                </div>
                                <button onClick={handleConfirmPayment}
                                 style={popupStyle.minBtn}>I Have Paid ✅</button>

                  <button onClick={() => setShowModel(false)} 
                  style={popupStyle.cancelBtn}>Cancel</button>
               
                        </div>
                    </div>
                )}
                {/*Thank You Animation Popup*/}
                {showThanks &&(
                    <div style={{position: 'fixed', top: 0, left: 0, width: '100%',
                         height: '100%', background: 'rgba(255, 255, 255, 0.95)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: '1000', overflow: 'hidden'}}>
                            {/*Confetti*/}
                           {[...Array(12).map((_, i)=>(
                                  <div key={i} style={{
                                    position: 'absolute',
                                    left: `${i * 8 + 5}%`,
                                    top: '-20px',
                                    fontSize: '20px',
                                    animation: `confetti $ {2 + i * 0.2}s linear infinite`,
                                    animationDelay: `$ {i * 0.11}`
                                  }}>
                                    {['🌱', '🌿', '☘️', '🌳'][i % 4]}
                                  </div>
                           ))]}
                           <div style={{textAlign: 'center', animation: 'grow 0.6s ease-out'}}>
                            <div style={{width: '90%', height: '90%', background: '#22c55e',
                                borderRadius: '50%', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', margin: '0 auto 20px', fontSize: '45px',
                                color: 'white', animation: 'pop 0.5s ease-out'
                            }}>✓</div>
                            <h2 style={{fontSize: '28px', fontWeight: '800', color: '#111827'
                            }}>Thank You! 💚</h2>
                            <p style={{fontSize: '16px', color: '#15803d', fontWeight: '600',
                                marginTop: '8px'
                            }}>You planted hope for Pakistan!</p>
                            <p style={{fontSize: '14px', color: '#6b7280', marginTop: '5px'
                            }}>Rs. {selectedAmount} received. {selectedAmount == '500' ? '5':
                            selectedAmount == '1000' ? '12' : '30'}trees will be planted soon!</p>
                            <div style={{fontSize: '40px', marginTop: '15px',
                                 animation: 'pop 0.8s ease-out 0.3s both'}}>🌱 → 🌳</div>
                           </div>
                        
                        </div>
                )}
        </section>
    );
};
export default Donate