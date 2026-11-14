import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        if(name === '' || email === '' || password === ''){
            alert("Please fill all fields!");
            }else{
                try{
                    const res = await fetch("http://localhost:7000/api/auth/signup",{
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({name, email, password})
                    });
                    const data = await res.json();
                    if(data.success){
                        alert("Signup successfully!");
                        navigate("/login");
                    }else{
                        alert(data.message || data.message);
                    }
                }catch(err){
                    alert("Backend is off" + err.message);
            }finally{
                setLoading(false);
            }
        }
    }

    return(
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 20px',
            backgroundColor: 'white'
        }}>
            <div style={{
               textAlign: 'center',
               marginBottom: '24px'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    margin: 0,
                    color: '#16a34a',
                    fontWeight: 'bold'}}>
                        Join PlantMatch☘️</h2>
                    <p style={{color: '#666', margin: '6px'}}
                        >Create your PlantMatch account.</p>

                    <div style={{
                        border: '2px solid #bbf7d0',
                        padding: '32px',
                        borderRadius: '20px',
                        width: '100%',
                        maxWidth: '380px',
                        background: 'white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        boxSizing: 'border-box'
                    }}>

                        <input type="text" 
                        placeholder="Full Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            boxSizing: 'border-box',
                            fontSize: '14px'
                            }}/>

                            <input type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            boxSizing: 'border-box',
                            fontSize: '14px'}}/>

                        <input type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '15px',
                            borderRadius: '10px',
                            border: '1px solid #ddd',
                            boxSizing: 'border-box',
                            fontSize: '14px'}}/>

                            <button onClick={handleSignup}
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#16a34a',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '15px'
                            }}>
                            {loading ? "Creating..." : "Create Account"}</button>

                            <p style={{
                                textAlign: 'center',
                                marginTop: '16px',
                                fontSize: '14px',
                                color: '#555'}}>
                                    Already have an account?
                                <Link to="/login" style={{
                                    color: '#16a34a',
                                    fontWeight: 'bold',
                                    textDecoration: 'none'}}>Login</Link></p></div>
            </div>
        </div>
    );
}
export default Signup;