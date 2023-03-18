import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const userRole = localStorage.getItem('role');
    const userEmail = localStorage.getItem('email');
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
      };
      if(userRole === 'Admin'){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item"><a data-bs-toggle="modal" data-bs-target="#add-lead-modal"  className="nav-link highlighted-text" href="#!">{userEmail}</a></li>
                        <li className="nav-item dropdown notifications">
                            <a className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false"><i className="fa fa-user-circle" aria-hidden="true" ></i></a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            {/* <Link className="dropdown-item" to="/profile">Edit Profile</Link> */}
                            <Link className="dropdown-item" to="/my-profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      }
      if(userRole === 'Agent'){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item"><a data-bs-toggle="modal" data-bs-target="#add-lead-modal"  className="nav-link highlighted-text" href="#!">{userEmail}</a></li>
                        <li className="nav-item dropdown notifications">
                            <a className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false"><i className="fa fa-user-circle" aria-hidden="true" ></i></a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/my-profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      }
      if(userRole === 'Customer'){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item"><a data-bs-toggle="modal" data-bs-target="#add-lead-modal"  className="nav-link highlighted-text" href="#!">{userEmail}</a></li>
                        <li className="nav-item dropdown notifications">
                            <a className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false"><i className="fa fa-user-circle" aria-hidden="true" ></i></a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/my-profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      }
      if(userRole === 'Merchant'){
        return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item"><a data-bs-toggle="modal" data-bs-target="#add-lead-modal"  className="nav-link highlighted-text" href="#!">{userEmail}</a></li>
                        <li className="nav-item dropdown notifications">
                            <a className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false"><i className="fa fa-user-circle" aria-hidden="true" ></i></a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/my-profile"><i class="fa fa-user" aria-hidden="true"></i> Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      }
        
}

export default Header;