import React, {useState, useContext} from "react";
import './login.css';
import AuthContext from "../../Users/usercheck/checkauth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    
    const authCnt = useContext(AuthContext);
    const navigate = useNavigate();

    const userInputs = {username:'',password:''};
    const [formvalue, setFormvalue] = useState(userInputs);
    const [formError, setFormError] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormvalue({...formvalue, [name]:value})
        console.log(formvalue);
    }

    const submission = (e) => {
        e.preventDefault();
        setFormError(validation(formvalue));
        axios.get(`${process.env.REACT_APP_APILINK}/user`, {
            params: {
                username: formvalue.username,
                password:formvalue.password
            }
          }).then( (response) => {
            if(response.data.data){
                authCnt.Login(response);
                navigate('/home')
            }            
        });
        
    }

    const validation = (inputValues) => {
        const errorMsg = {};
        if(!inputValues.username){
            errorMsg.username = 'Email Address is required';
        }
        if(!inputValues.password){
            errorMsg.password = 'Password is required';
        }

        return errorMsg;
    }

        return (
            <React.Fragment>
                <form onSubmit={submission}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="username" name="username" onChange={handleInput} value={formvalue.username}/>
                    <p className="error">{formError.username}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleInput} value={formvalue.password}/>
                    <p className="error">{formError.password}</p>
                </div>
                    <button type="submit" className="btn btn-submit">Login</button>
                </form>
        </React.Fragment>
        )
    }

export default Login