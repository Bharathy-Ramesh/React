import React, {useState} from "react";
import '../Login/login.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    
    const userValue = {username:'',email:'',phoneNumber:'',password:''};
    const [formValues, setFormValues] = useState(userValue);
    const [formErrors, setFormErrors] = useState({});
    const submitSuccess = {isValid:true};

    const handleInputs = (e) => {
        const { name, value} = e.target;
        if(name === 'phoneNumber'){
            const re = /^[0-9\b]+$/;
            if(e.target.value === '' || (re.test(e.target.value) && e.target.value.length <= 10)){
                setFormValues({...formValues, [name]:value});
                return true;
            }else{
                return false
            }
        }
        setFormValues({...formValues, [name]:value});
    }

    const handleUser = (e) => {
        e.preventDefault();
        debugger;
        setFormErrors(validation(formValues))
        if(Object.values(formErrors).length === 0){
            submitSuccess.isValid = false;
            axios.post(`${process.env.REACT_APP_APILINK}/user`, formValues).then((response) => {
               if(response.status === 200){
                   toast('Success');
                   setFormValues({username:'',email:'',phoneNumber:'',password:''})
               }else{
                   toast('Failed')
               }
            })
        }
    }

    const validation = (inputs) => {
        const err = {};
        if(!inputs.username){
            err.username = 'Name is required';
        }
        if(!inputs.email){
            err.email = 'Email is required';
        }
        if(!inputs.phoneNumber){
            err.phoneNumber = 'Mobile Number is required';
        }
        if(!inputs.password){
            err.password = 'Password is required';
        }
        return err;
    }

    return (
        <React.Fragment>
                <form onSubmit={handleUser}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" className="form-control" name="username" id="username" onChange={handleInputs} value={formValues.name}/>
                    <p className="error">{formErrors.username}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="email" onChange={handleInputs} value={formValues.email}/>
                    <p className="error">{formErrors.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" onChange={handleInputs} value={formValues.phoneNumber}/>
                    <p className="error">{formErrors.phoneNumber}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={handleInputs} value={formValues.password}/>
                    <p className="error">{formErrors.password}</p>
                </div>
                    <button type="submit" className="btn btn-submit">Sign Up</button>
                </form>
                <ToastContainer autoClose={2000} position="top-center" className="toast-container" toastClassName="dark-toast"/>
        </React.Fragment>
    )
}

export default Register