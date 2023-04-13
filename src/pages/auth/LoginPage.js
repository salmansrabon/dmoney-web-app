import React, { useState } from "react";
import "../../assets/css/login.css";
import authLayout from "../../hoc/authLayout";
import action from "../../action";
import Swal from 'sweetalert2';

const LoginPage = () => {
    localStorage.clear();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem('email', email);

        try {
            const response = await action.post('/user/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('token', response.data.token);
            //console.log(response.data.role);
            localStorage.setItem('role', response.data.role);
            await action.get(`/user/list`, {
                headers: {
                    'Authorization': response?.data?.token,
                    'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
                }
            })
                .then((response) => {
                  //  console.log(response.data);
                    const user = response.data?.users?.find((user) => user.email === email);
                    if (user) {
                        localStorage.setItem('user', JSON.stringify(user));
                    } else {
                        localStorage.setItem('user', null);
                    }
                })
                .catch((error) => {
                   // console.log(error);
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
            //console.log(error);
            Swal.fire(
                'Error',
                error.response.data.message || 'Something went wrong',
                'error'
            );
        }
    };

    return <>
        <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="mt-5">Welcome to D-money Finance</h1>
            <div className="d-flex align-items-center my-4 mt-5">
                <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="email" id="email" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" name="email"
                    value={email} onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control form-control-lg"
                    placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
            </div>
        </form>
    </>
}

export default authLayout(LoginPage);