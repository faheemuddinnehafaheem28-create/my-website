import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if(email === '' || password === ''){
            alert("Please fill all fields!")    
    }else{
        try{
            const response = await fetch('http://localhost:7000/api/auth/login', {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({email, password})
            });
            const data = await response.json();
            if(data.success){
                localStorage.setItem("token", data.token);
                alert("Login successfully");
                navigate("")
            }else{
                alert(data.message);
            }
        }catch(err){
            setLoading(false);
            alert("Backend connected failed! Server is on?" + err.message);
        }
    }
}


return(
    <div style={{minHeight: '80vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', padding: '40px 20px', 
        background: '#f8fdf9'
    }}>
        <div style={{textAlign: 'center', marginBottom: '24px'}}>
            <h1 style={{fontSize: '36px', margin: 0, fontWeight: 'bold'}}>Welcome Back.</h1>
            <p style={{color: '#666', marginTop: '6px'}}>Login to find your Perfect Plant.</p>
            </div>
            <div style={{
                border: '2px solid #bbf7d0',
                padding: '32px',
                borderRadius: '20px',
                width: '100%',
                maxWidth: '380px',
                background: 'white',
                boxShadow: '0 4px 2px rgba(0,0,0,0.5)',
                boxSizing: 'border-box'
            }}>
                    <h3 style={{textAlign: 'center', margin: 0, marginBottom: '20px'}}>PlantMatch 🌱</h3>

                    <input type="email" 
                    placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    style={{width: '100%', padding: '12px', marginBottom: '15px',
                     borderRadius: '10px', border: '1px solid #ddd', boxSizing: 'border-box',
                     fontSize: '14px'}}/>

                    <div style={{position: 'relative', width: '100%', marginBottom: '15px'}}>
                    <input type={showPass ? "text":"password"} placeholder="Enter your password"
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    style={{width: '100%', padding: '12px', borderRadius: '10px',
                     border: '1px solid #ddd', boxSizing: 'border-box', fontSize: '14px'}}/>

                    <span onClick={()=> setShowPass(!showPass)} style={{position: 'absolute',
                        right: '12px', top: '50%', transform: 'translateY(-50%)' ,cursor: 'pointer'
                    }}>👁️</span></div>
                

                <button onClick={handleLogin} style={{width: '100%', padding: '12px', 
                    backgroundColor: '#16a34a', color: 'white', border: 'none', 
                    borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px'}}>
                        {loading ? "Logging in...":"Login"}
                      </button>

                      <div style={{display: 'flex', justifyContent: 'space-between',
                         marginTop: '18px', fontSize: '14px'}}>
                            <Link to="/forgot-password" style={{color: '#16a34a',
                                 textDecoration: 'none'}}>
                            Forgot Password?</Link>
                            <Link to="/signup" style={{color: '#16a34a', fontWeight: 'bold',
                                textDecoration: 'none'
                            }}>
                            Create Account</Link>
                         </div>

                         <p style={{textAlign: 'center', marginTop: '16px', fontSize: '13px',
                             color: '#555'}}>
                            Don't have an account? <Link to="/signup" style={{color: '#16a34a',
                                fontWeight: 'bold'}}>Signup here</Link>
                         </p>
         </div>
         
         </div>
)    
}
    export default Login
