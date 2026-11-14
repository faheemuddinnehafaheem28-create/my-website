import { useState } from "react";

const PlantQuiz = () => {
    const [sunlight, setSunLight] = useState("");
    const [water, setWater] = useState("");
    const [budget, setBudget] = useState("");
    const [result, setResult] = useState(null);

    const findPlant = () => {
        if(!sunlight || !water || !budget){
            alert("Please select all 3 questions!");
            return;
        }
        let plant = "";
        let reason = "";

        if(sunlight === "low" && water === "weekly"){
            plant ="Snake Plant🐍";
            reason = "Thrives in low light and needs watering only once a week. Perfect for beginners.";
        }else if(sunlight === "full" && water === "daily"){
            plant = "Money Plant💰";
            reason = "Grows fast in bright sunlight with regular watering. Great for balconies."
        }else if (budget === "low"){
            plant = "Aloe Vera🌵",
            reason = "Affordable, low-maintanance and has medicinal benefits.";
        }else {
            plant = "Peace Lilly🌺";
            reason = "Elegant indoor plant that does well in medium light and weekly watering.";
        }
        setResult({plant, reason});
    };
    return(
        <div style={{background: "#f0fdf4", padding: "30px", borderRadius: "15px",
            margin: "40px 20px", textAlign: "center"
        }}>
            <h2 style={{color: "#166534"}}>Find your Perfect Plant</h2>
            <p style={{color: "#666"}}>Answer 3 quick questions and we will recommend the
                 best plant for you.</p>
                 {/*Q1*/}
                 <div style={{margin: "20px 0"}}>
                    <h4>1. How much sunlight do you have?</h4>
                    <button onClick={()=> setSunLight("full")} style={{margin: "5px",
                        background: sunlight==="full"?"#16a34a":"white",
                         color: sunlight==="full"?"white": "black", padding: "8px 15px",
                         borderRadius: "20px", border: "1px solid green", cursor: "pointer"
                    }}>Full Sun</button>
                    <button onClick={()=> setSunLight("low")} style={{margin: "5px",
                        background: sunlight==="low"?"#16a34a":"white",
                         color: sunlight==="low"?"white": "black", padding: "8px 15px",
                         borderRadius: "20px", border: "1px solid green", cursor: "pointer"
                    }}>Low Light</button>
                 </div>
                 {/*Q2*/}
                 <div style={{margin: "20px 0"}}>
                    <h4>2. How often can you water?</h4>
                    <button onClick={()=> setWater("daily")} style={{margin: "5px",
                        background: water==="daily"?"#16a34a":"white",
                         color: water==="daily"?"white": "black", padding: "8px 15px",
                         borderRadius: "20px", border: "1px solid green", cursor: "pointer"
                    }}>Daily</button>
                    <button onClick={()=> setWater("weekly")} style={{margin: "5px",
                        background: water==="weekly"?"#16a34a":"white",
                         color: water==="weekly"?"white": "black", padding: "8px 15px",
                         borderRadius: "20px", border: "1px solid green", cursor: "pointer"
                    }}>Weekly</button>
                 </div>
                 {/*Q3*/}
                 <div style={{margin: "20px 0"}}>
                    <h4>3. What is your budget?</h4>
                    <button onClick={()=> setBudget("low")} style={{margin: "5px",
                        background: budget==="low"?"#16a34a":"white",
                         color: budget==="low"?"white": "black", padding: "8px 15px",
                         borderRadius: "20px", border: "1px solid green", cursor: "pointer"
                    }}>Under Rs 500</button>
                    <button onClick={()=> setBudget("high")} style={{margin: "5px",
                        background: budget==="high"?"#16a34a":"white",
                         color: budget==="high"?"white": "black", padding: "8px 15px",
                         borderRadius: "20px", border: "1px solid green", cursor: "pointer"
                    }}>Above Rs 500</button>
                 </div>

                 <button onClick={findPlant}style={{background: "#166534", color: "white",
                    padding: "12px 30px", border: "none", borderRadius: "25px",fontSize: "16px",
                    cursor: "pointer", marginTop: "15px"
                 }}>Show My Plant</button>

                 {result && (
                    <div style={{background: "white", padding: "20px", borderRadius: "15px",
                        marginTop: "25px", border: "2px solid #16a34a"
                    }}>
                       <h2 style={{color: "#166534"}}>{result.plant}</h2>
                        <p style={{color: "#444"}}>{result.reason}</p>
                        <p style={{fontWeight: "bold", color: "#166534"}}>
                            Perfect match for your space!</p>
                            <button onClick={() => setResult(null)} style={{marginTop: "10px",
                                background: "white", border: "1px solid #16a34a", 
                                padding: "6px 15px", borderRadius: "20px", cursor: "pointer"
                            }}>Try Again</button>
                    </div>
                 )}
        </div>
    );
};
export default PlantQuiz;