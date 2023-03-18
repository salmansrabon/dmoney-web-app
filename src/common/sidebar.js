import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const userRole = localStorage.getItem('role');
    const navigate = useNavigate();

        if(userRole === 'Admin'){
            // use the full return
            return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <h5>Dmoney</h5>
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/user-list">
                        <i class="fa fa-users" aria-hidden="true"></i> User List
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/create-user">
                        <i class="fa fa-user-plus" aria-hidden="true"></i> Create User
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/transaction">
                        <i class="fa fa-exchange" aria-hidden="true"></i> Transaction
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/system-balance">
                        <i class="fa fa-money" aria-hidden="true"></i> System Balance
                        </Link>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
        }
        else if(userRole === 'Agent'){
            // use the full return
            return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    {/* <img alt="Alt content" src={require('./../assets/images/logo.png')} /> */}
                    <h5>Dmoney</h5>
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                <li className="mb-1">
                        <Link tag="a" className="" to="/statement">
                        <i class="fa fa-file-text-o" aria-hidden="true"></i> Statement
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/payment">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Payment
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/deposit">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Deposit
                        </Link>
                    </li>
                    
                </ul>
            </PerfectScrollbar>
        </div>
        }
        else if(userRole === 'Customer'){
            // use the full return
            return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    {/* <img alt="Alt content" src={require('./../assets/images/logo.png')} /> */}
                    <h5>Dmoney</h5>
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                <li className="mb-1">
                        <Link tag="a" className="" to="/statement">
                        <i class="fa fa-file-text-o" aria-hidden="true"></i> Statement
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/send-money">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Send Money
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/withdraw">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Withdraw
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/payment">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Payment
                        </Link>
                    </li>
                    
                    <li className="mb-1">
                        <Link tag="a" className="" to="/user-limit">
                        <i class="fa fa-ban" aria-hidden="true"></i> Limit
                        </Link>
                    </li>
                    
                </ul>
            </PerfectScrollbar>
        </div>
        }
        else if(userRole === 'Merchant'){
            // use the full return
            return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    {/* <img alt="Alt content" src={require('./../assets/images/logo.png')} /> */}
                    <h5>Dmoney</h5>
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                <li className="mb-1">
                        <Link tag="a" className="" to="/statement">
                        <i class="fa fa-file-text-o" aria-hidden="true"></i> Statement
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/withdraw">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Withdraw
                        </Link>
                    </li>
                    
                </ul>
            </PerfectScrollbar>
        </div>
        }
        else{
            navigate("/login");
        }

}

export default Sidebar;