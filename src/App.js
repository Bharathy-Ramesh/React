import React, {useContext} from 'react'; 
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Auth from './Users/authentication/auth.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Users/Home/home';
import AuthContext from './Users/usercheck/checkauth';
import Playlist from './components/Playlist/playlist';
import Profile from './components/MyProfile/profile';



function App() {
  const authCnt = useContext(AuthContext);

  const islogged = authCnt.isLoggedIn; 
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header></Header>
      {islogged &&  
        <Routes>      
          <Route index path='/home' element={<Home/>}/>
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="playlist" element={<Playlist />} />
        </Routes> 
      }

      {!islogged &&
      <Routes> 
          <Route path='/' element={<Auth/>}/>
        </Routes> 
      }   
      </BrowserRouter>   
    </React.Fragment>
  );
}

export default App;
