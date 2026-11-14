import React, {useState} from "react";

const FitScoreQuiz = ({plants, onResult}) => {
    const [answer, setAnswer] = useState({
        light: '',
        place: '', 
        care: '',
        pet: ''
    });
    const questions = [
        {
            id: 'light',
            q: 'What is the light condition at your place?',
            options: ['Low light', 'Bright light', 'Direct sunlight']
        },
        {
            id: 'place',
            q: 'Where do you want to place the plant?',
            options: ['Bedroom corner', 'Living room', 'Bathroom', 'Balcony']
        },
        {
            id: 'care',
            q: 'How much care can you provide?',
            options: ['Low care', 'Medium care', 'High care']
        },
        {
            id: 'pet',
            q: 'Do you have pets or small children at home?',
            options: ['Yes', 'No']
        }
    ];
    const calculateFitScore = () => {
    const scoredPlants = plants.map(plant => {
        let score = 0;
        const ansLight = (answer.light || '').toLowerCase();
        const ansPlace = (answer.place || '').toLowerCase();
        const ansCare = (answer.care || '').toLowerCase();
        const pName = (answer.name || '').toLowerCase();

        if(pName.includes('snake')){
            if(ansLight.includes('low')) score += 40;
            else if(ansLight.includes('bright')) score += 20;
            if(ansPlace.includes('bedroom')) score += 30;
            else if(ansPlace.includes('living')) score += 10;
            if(ansCare.includes('low')) score += 20;
            else if (ansCare.includes('medium')) score += 10;
            if(answer.pet === 'No') score += 10;
        }
        else if (pName.includes('money')){
            if(ansLight.includes('bright')) score += 40;
            else if (ansLight.includes('low')) score += 20;
            if (ansPlace.includes('bathroom')) score += 30;
            else if(ansPlace.includes('living')) score += 20;
            if(ansCare.includes('low')) score += 20;
            if (answer.pet) score += 10;
        }
        else if(pName.includes('aloe')) {
            if(ansLight.includes('direct')) score += 40;
            else if(ansLight.includes('bright')) score += 20;
             if (ansPlace.includes('balcony')) score += 30;
            else if(ansPlace.includes('living')) score += 20;
            if(ansCare.includes('medium')) score += 20;
            else if(ansCare.includes('low')) score += 10;
            if (answer.pet) score += 10;
        }
        else if(pName.includes('peace')) {
            if(ansLight.includes('bright')) score += 40;
            else if(ansLight.includes('low')) score += 20;
             if (ansPlace.includes('living')) score += 30;
            else if(ansPlace.includes('bedroom')) score += 20;
            if(ansCare.includes('high')) score += 20;
            else if(ansCare.includes('medium')) score += 10;
            if (answer.pet === 'No') score += 10;
        } else{
            score = 50;
        }
        if(score > 100) score = 100;
        return{...plant, fitScore: score};      
    });
       const sorted = scoredPlants.sort((a, b) => b.fitScore - a.fitScore);
       onResult(sorted);
    };
    return(
        <div style={{padding: '24px', border: '2px solid #2e7d32', borderRadius: '12px',
            background: '#f1f8e9', marginBottom: '25px'}}>
                <h2 style={{color: '#2e7d32'}}>🌿 Find Your Perfect Plant Match</h2>
                <p>Answer 4 questions and we will find the best plant for you.</p>

                {questions.map(ques => (
                    <div key={ques.id} style={{marginBottom: '16px'}}>
                        <p><strong>{ques.q}</strong></p>
                        {ques.options.map(opt => (
                            <label key={opt} style={{marginRight: '18px', cursor: 'pointer'}}>
                                <input type="radio" 
                                name={ques.id}
                                value={opt}
                                onChange={(e) => setAnswer 
                                ({...answer, [ques.id]: e.target.value})}
                                />{opt}
                            </label>
                        ))}
                    </div>
                ))}
                <button onClick={calculateFitScore}
                style={{background: '#2e7d32', color: 'white', padding: '12px 24px',
                    border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '10px',
                    fontWeight: 'bold'
                }}>Show My FitScore</button>
            </div>
    );  
};
export default FitScoreQuiz;