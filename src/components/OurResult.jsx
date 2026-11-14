import React, {useState, useEffect, useRef} from "react";

function OurResult (){
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);
    const [c3, setC3] = useState(0);
  

    useEffect (() => {
        let n1 = 0, n2 = 0, n3 = 0;
        const timer = setInterval(() =>{
            if (n1 < 5000) {n1 += 50; setC1(n1); }
            if (n2 < 98) {n2 += 1; setC2(n2); }
            if (n3 < 10) {n3 += 1; setC3(n3); }
            if (n1 <= 5000 && n2 >= 98 && n3 >= 10) clearInterval(timer);
        }, 30);
        return () => clearInterval(timer);
    }, []);
return(
    <div id="OurResult" style={{padding: '60px 20px', background: '#16a34a', color: 'white',
        textAlign: 'center'
    }}>
        <h2 style={{fontSize: '32px', fontWeight: '800'}}>Our Green Impact</h2>
        <div style={{display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap',
        marginTop: '40px'
        }}>
            <div><h1 style={{fontSize: '48px', margin: '0'}}>{c1}+</h1><p>PlantMatch</p></div>
            <div><h1 style={{fontSize: '48px', margin: '0'}}>{c2}%+</h1><p>Happy Customer</p></div>
            <div><h1 style={{fontSize: '48px', margin: '0'}}>{c3}k</h1><p>Home Greened</p></div>
            <div><h1 style={{fontSize: '48px', margin: '0'}}>4.9/5</h1><p>User Rating</p></div>
        </div>
    </div>
);
}
export default OurResult