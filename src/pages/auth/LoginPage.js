import React, { useState } from "react";
import "../../assets/css/login.css";
import authLayout from "../../hoc/authLayout";
import axios from "axios";
import Swal from 'sweetalert2';

const LoginPage = () => {
    localStorage.clear();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('email', email);

        try {
            const response = await axios.post('/user/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('token', response.data.token);
            console.log(response.data.role);
            localStorage.setItem('role', response.data.role);
            await axios.get(`/user/list`, {
                headers: {
                    'Authorization': response?.data?.token,
                    'X-Auth-Secret-Key': 'ROADTOSDET'
                }
            })
                .then((response) => {
                    console.log(response.data);
                    const user = response.data?.users?.find((user) => user.email === email);
                    if (user) {
                        localStorage.setItem('user', JSON.stringify(user));
                    } else {
                        localStorage.setItem('user', null);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    localStorage.setItem('user', null);
                });
            if (response.data.role === "Admin") {
                window.location.href = '/user-list';
            }
            else if (response.data.role === 'Agent') {
                window.location.href = '/statement';
            }
            else if (response.data.role === 'Customer') {
                window.location.href = '/statement';
            }
            else if (response.data.role === 'Merchant') {
                window.location.href = '/statement';
            }
            else {
                localStorage.clear();
                window.location.href = '/login';
            }
        } catch (error) {
            console.log(error);
            Swal.fire(
                'Error',
                error.response.data.message || 'Something went wrong',
                'error'
            );
        }
    };

    return <>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="d-flex align-items-center my-4">
                <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" name="username"
                    value={email} onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Password</label>
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            {/* <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Role</label>
                <select className="form-select form-select-lg" value={role} onChange={handleSelectChange}>
                    <option value="Admin">Admin</option>
                    <option value="Agent">Agent</option>
                    <option value="Customer">Customer</option>

                </select>
            </div> */}
            <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                    <Link to="/register" className="link-danger">Register</Link></p> */}
            </div>
        </form>
    </>
}

export default authLayout(LoginPage);