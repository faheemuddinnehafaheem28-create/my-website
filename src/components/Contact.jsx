import { useState } from "react";

function Contact() {
    const [form, setForm] = useState ({name: '', email: '', message: ''});
    const [sent, setSent] = useState (false);

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form data:", form)

    if(!form.name || !form.email || !form.message){
        alert("Please fill all required fields");
        return;
    }
    try{
        const res = await fetch("http://localhost:7000/api/contact/post", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if(data.success){
            setSent(true);
            setTimeout(() =>{
                setForm({name: '', email: '', message: ''});
                alert(`${form.name}! Your message received! We will reply soon💚`);
            }, 1200);
            console.log("Contact save successfully:", data);
        }
    }catch(err){
        console.log(err);
        alert("Error, Backend check please!")
    }
};
return(
    <div id="contact" style={{padding: '60px 20px', backgroundColor: '#e9f7ec',
        display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap',
        boxSizing: 'border-box'
    }}>
        <style>
            {`
            keyframes fadeUp{
            from {opacity: 0; transform: translateY(20px); }
            to {opacity: 1; transform: translateY(0); }
            }`}
        </style>
        {/*Left Text*/}
        <div style={{ width: '100%',maxWidth: '380px', animation: 'faedUp 0.8 ease',
            textAlign: 'center'
        }}>
            <h2 style={{fontSize: '32px', fontWeight: '800', margin: '0 0 10px 0'
            }}>Let's Talk Plant 🌱</h2>
            <p style={{color: '#666', fontSize: '13px', lineHeight: '1.6'}}>Have an question
                about plants? Want to collaborate for Pakistan's green future?
                <br/><br/>
                We reply within 24 hours soon.
            </p>
            <div style={{marginTop: '20px', fontSize: '13px', color: '#333'}}>
                <p>📩 plantmatch.pk@gmail.com</p>
                <p>🎯 Karachi, Pakistan</p>
                <p>📱03XX-XXXXXX</p>
            </div>
        </div>
        {/*Right Form*/}
        <form onSubmit={handleSubmit} style={{
            background: 'white', borderRadius: '20px', padding: '30px 25px', width: '100%',
            maxWidth: '450px', boxSizing: 'border-box', 
            border: '1px solid #c8e6c9', borderTop: '5px solid #22c55e',
            boxShadow: '0 12px 30px rgba(0,0,0,0.08)', animation: 'fadeUp 0.8s ease 0.2s both',
        }}>
            <h3 style={{margin: '0 0 20px 0', fontSize: '18px'}}>Send Message</h3>
            <input type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm ({...form, name: e.target.value})}
            style={{width: '100%', padding: '14px 15px', borderRadius: '12px',
                 border:  '2px solid #a7d8a9', background: '#f9f9f9', color: '#111',
                marginBottom: '15px', outline: 'none', fontSize: '14px', boxSizing: 'border-box'
            }} required/>
            
             <input type="text" 
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm ({...form, email: e.target.value})}
            style={{width: '100%', padding: '14px 15px', borderRadius: '12px',
                 border: '2px solid #a7d8a9', background: '#f9f9f9', color: '#111',
                marginBottom: '15px', outline: 'none', fontSize: '14px', boxSizing: 'border-box'
            }} required/>

            <textarea 
            placeholder="How can we help you?"
            rows={4}
            value={form.meassage}
            onChange={(e) => setForm ({...form, message: e.target.value})}
            style={{width: '100%', padding: '14px 15px', borderRadius: '12px',
                 border:  '2px solid #a7d8a9', background: '#f9f9f9', color: '#111',
                 minHeight: '110px', 
                marginBottom: '15px', outline: 'none', fontSize: '14px', boxSizing: 'border-box'
            }} required></textarea>

            <button type="submit"
            style={{width: '100%', background: sent ? '#16a34a' : 'black',
                color: 'white', border: 'none', padding: '12px', borderRadius: '12px',
                fontWeight: 'bold', cursor: 'pointer', transition: '0.3s'
            }}>
                {sent ? 'Sending...✅' : 'Send Message 🚀'}
            </button>

            <p style={{fontSize: '11px', color: '#555', textAlign: 'center',
                marginTop: '10px'
            }}>We respect your privacy, no spam!</p>
            

        </form>
    </div>
);
}

export default Contact