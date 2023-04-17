import React, {useState} from "react";
import "./Style.css"
import { Link } from "react-router-dom";
import ethers from 'ethers';
export const Login = (props) => {
    const [email, setEmail]= useState('')
    const [pw, setPassword]= useState('')

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    
        
    return(
        <>
        <h2>GET STARTED WITH</h2>
        <h1 className="blocker">B Locker</h1>
    <form onSubmit={handlesubmit}>
            <div className="banner">
            
        {/* <label htmlfor="username">UserName:</label> */}
        <div className="bannerin">

        
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="UserName" id="email" name="email"/>
        
        <br>
        </br>
        <br>
        </br>
        <div>
        {/* <label htmlfor="password">PASSWORD:</label> */}
        <input value={pw} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" id="password" name="password"/>
        <br>
                </br>
                <br>
                </br>
                <div className="btn">
                {/* <button onClick={() => props.onFormSwitch('Login')} type="submit" className="button1" formAction="mediaPage">Login</button>
                <button onClick={() => props.onFormSwitch('Register')} type="submit" className="button2" formAction="Register">Sign Up</button>  */}

                <button className="button1"><Link to= "/mediaPage" >Login</Link></button>
                <button className="button2"><Link to= "/Register">Sign Up</Link></button>
                </div>
                </div>
                

        </div>

        </div>
        
        
                
    </form>
    
</>
    )
}
export default Login;
