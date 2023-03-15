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
                             User List
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/create-user">
                             Create User
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/transaction">
                            Transaction
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
                             Statement
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/payment">
                            Payment
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/deposit">
                            Deposit
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
                             Statement
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/send-money">
                            Send Money
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/withdraw">
                             Withdraw
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/payment">
                            Payment
                        </Link>
                    </li>
                    
                    <li className="mb-1">
                        <Link tag="a" className="" to="/user-limit">
                             Limit
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
                             Statement
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/withdraw">
                             Withdraw
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