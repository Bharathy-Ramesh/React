import React, { useState } from "react";
import './auth.css';
import welcome from '../../assets/welcome.gif';
import Login from "../../components/Login/login";
import Register from '../../components/Register/register.js';

const Auth = () => {
    const [move, setMove] = useState(true);

    const handleUser = () => {
        setMove(!move)
    }

    return(
        <React.Fragment>
           <div className="container">
            <div className="mx-auto col-md-4 w-30">
                <div className="welcome-logo">
                    <img src={welcome} alt="welcome"/>
                </div>

                { move && <Login/> }
                { move && <p className="user-handler">Don't have account?&nbsp; &nbsp; <span onClick={handleUser}>Click here</span></p> } 

                { !move && <Register/>}
                { !move && <p className="user-handler">Already have an account?&nbsp; &nbsp; <span onClick={handleUser}>Login</span></p>}  


            </div>
          </div> 
         </React.Fragment> 
    )
}

export default Auth