import { useState, createContext } from "react";


const AuthContext = createContext({
    token : '',
    isLoggedIn : '',
    Login : (token) => {},
    Logout : () => {}

});

export const CheckAuthProvider = (props) => { 
    let tokenvalue = localStorage.getItem('token') || null;
    const [token, setToken] = useState(tokenvalue);

    const userLoggedIn = !!token;

    const loginhandler = (detail) => {
        localStorage.setItem('token',detail.data.token);
        localStorage.setItem('users', JSON.stringify(detail.data.data));
        setToken(detail.data.token);
    }

    const logouthandler = () => {
        localStorage.clear();
        setToken(null);
    }
    // const login = (user) => {
       
    // }

    // const logout = () => {
    //     localStorage.removeItem('Status');
    //     setUser(null);
    // }

    const contextValues = {
        token: token,
        isLoggedIn: userLoggedIn,
        Login: loginhandler,
        Logout: logouthandler
    }

    return (
        <AuthContext.Provider value={contextValues}>
          {props.children}
        </AuthContext.Provider>
    )

    // return {token, login, logout}


}

export default AuthContext;
// export const useAuth = () => {
//     return useContext(AuthContext);
// }