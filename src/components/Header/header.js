import React, {useContext} from "react";
import './header.css';
import music from '../../assets/music.jpg'
import avatar from '../../assets/Avatar.png'
import AuthContext from "../../Users/usercheck/checkauth";
import { NavLink, useNavigate} from "react-router-dom";


const Header = () => {
    const authCnt = useContext(AuthContext);
    const token = authCnt.token;
    const navigation = useNavigate();

    const logout = () => {
        navigation('/')
        return authCnt.Logout();
    }

    return (
        <React.Fragment>
            <div className="head-tag">
                {!token && <div></div>}
                {token && 
                <div className="side-bar">
                    <a className="a-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </a>

                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <img src={avatar} className="img-align" width="150" height="150" id="offcanvasExampleLabel" alt="avatar"/>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            <ul className="show-list">
                                <li className="text-reset" data-bs-dismiss="offcanvas"><NavLink to='/profile'>My Profile</NavLink></li>
                                <li className="text-reset" data-bs-dismiss="offcanvas"><NavLink to='/playlist'>Playlist</NavLink></li>
                                <li className="text-reset" data-bs-dismiss="offcanvas" onClick={logout}>Logout</li>
                            </ul>
                        </div>
                        {/* <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div> */}
                    </div>
                    </div>
                </div>}
                <div className="header">
                    <img className="" width="90" height="90" src={music} alt="Music"/>
                    <span className="font-stylish">Rhythm</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header