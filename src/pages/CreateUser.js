import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout"
import axios from "axios";
import Swal from 'sweetalert2'

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nid, setNid] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name,
            email,
            password,
            phone_number: phoneNumber,
            nid,
            role
        };

        try {
            const response = await axios.post(`/user/create`, data, {
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`,
                    'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
                }
            });
            console.log(response.data);
            if (response.status === 201) {
                Swal.fire(
                    'Success',
                    response.data.message,
                    'success'
                );
            } else if (response.status === 208) {
                Swal.fire(
                    'Warning',
                    response.data.message,
                    'warning'
                );
            }
            event.target.reset();
        } catch (error) {
            console.log(error);
            if(error.response.status === 401){
                window.location.href = '/login';
                return;
            }
            Swal.fire(
                'Error',
                error.response.data.message || 'Something went wrong',
                'error'
            );
        }
    };

    return <>
        <div class="card">
            <div class="card-body">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center">
                        <h1 className="text-center fw-normal mb-3 me-3">Create User</h1>
                    </div>
                    {/* <!-- Name input --> */}
                    <div className="row">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Name</label>
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter Your Full Name" value={name} onChange={e => setName(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col">
                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" value={email} onChange={e => setEmail(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col">
                            {/* <!-- Phone Number input --> */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example5">Phone</label>
                                <input type="text" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter Your Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- NID input --> */}
                    <div className="row">
                        <div className="col">
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example6">NID</label>
                                <input type="text" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter Your NID" value={nid} onChange={e => setNid(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example6">User Role</label>
                                <select className="form-select form-select-lg" value={role} onChange={e => setRole(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="Customer">Customer</option>
                                    <option value="Agent">Agent</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Merchant">Merchant</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default adminLayout(CreateUser);