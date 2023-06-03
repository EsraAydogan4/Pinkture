import "./loginForm.css";
import { useState } from "react";


const LoginForm=()=>{
    const [popupStyle, showPopup] = useState("hide")
    
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    const popup2 = () => {
        showPopup("register-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }
    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }
    return(
        <div className='cover'>
            <h2>Log In</h2>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <div className="login-btn" onClick={popup}>Login</div>
            
            <p className="text">Or login using</p>
            <div className="alt-login">
                <div className="google"></div>
            </div>
            <h4>Don't you have an account? Register Here.</h4>
            <input type="text" placeholder='name and surname'/>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <input type="email" placeholder='yourmail.@gmail.com'/>
           
            <div className="register-btn" onClick={popup2}>Register</div>
            
            <div className={popupStyle}>
                {/* <h3> Failed</h3>
                <p>Something is incorrect</p> */}
                 <h3> Successful</h3>
                
            </div>
            
        </div>
    )
}
export default LoginForm