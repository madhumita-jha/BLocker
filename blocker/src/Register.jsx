import React, {useState} from "react";
import "./Login"
import "./register.css"
import { Link } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail]= useState('')
    const [pw, setPassword]= useState('')
    const [name, setName]= useState('')
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(

    <>
    <div className="label">
        <h3>START.SAVE.SECURE<br></br><br></br>
        SIGN UP TODAY FOR B LOCKER</h3><br></br><br></br><br></br>
        <form onSubmit={handlesubmit}>
    
        <div className="image">
    
    <div className="signup">
        
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Email">
                </input>
                <br>
                </br>
                <br>
                </br>
            
                    <input value={pw} type="text" onChange={(e) => setPassword(e.target.value)} name="Set Password" id="SetPassword" placeholder="Choose a strong password">
                    </input>
                    <br>
                </br>
                <br>
                </br>
           
                        <input type="text" name="Username" id="username" placeholder="Username">
                        </input>
                        <br>
        </br>
        <br>
        </br>
        <div className="agree">
        <input type="checkbox" id="agreement" name="agreement"/></div>
        <br>
        </br>
        <br>
        </br>
        <div className="agreement">
        <label for="agreement">I agree to all terms and conditions.</label>
        </div>
        <br>
        </br>
        <br>
        </br>
        {/* <button onClick={() => props.onFormSwitch('login')} type="submit" className="button2" formAction="Register">SIGN UP</button> */}
        <button className="button3"><Link to= "./Login">Sign Up</Link></button></div>
        <br>
        </br>
        <br>
        </br>
    </div>
    </form>
    {/* <button onClick={() => props.onFormSwitch('login')} type="submit" className="button2" formAction="Register">Go Back</button> */}
    <button className="button4"><Link to= "./Login">Go back</Link></button></div>
    </>
    )
}
export default Register;