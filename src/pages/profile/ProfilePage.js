import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/userProfileLayout";
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nid, setNid] = useState('');
    const [role, setRole] = useState('');

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Authorization': localStorage.getItem('token'),
                'X-Auth-Secret-Key': 'ROADTOSDET'
            };

            const config = {
                headers: headers
            };

            try {
                const response = await axios.get('/user/search/id/' + id, config);
                setName(response.data.user.name);
                setEmail(response.data.user.email);
                setPassword(response.data.user.password);
                setPhoneNumber(response.data.user.phone_number);
                setNid(response.data.user.nid);
                setRole(response.data.user.role);

            } catch (error) {
                setName('');
                setEmail('');
                setPassword('');
                setPhoneNumber('');
                setNid('');
                setRole('');
                console.log(error);
                Swal.fire(
                    'Error',
                    error.response.data.message || 'Something went wrong',
                    'error'
                );
            }
        }


        fetchData();
    }, [localStorage.getItem('token')]);

    const handleSubmit = async event => {
        event.preventDefault();

        const data = {
            name,
            email,
            password,
            phone_number: phoneNumber,
            nid,
            role
        };

        const config = {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'X-Auth-Secret-Key': 'ROADTOSDET'
            }
        };

        try {
            const response = await axios.put(`/user/update/${id}`, data, config);
            console.log(response.data);
            Swal.fire(
                'Successfuly Saved User!',
                'You clicked the button!',
                'success'
            );
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
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0 mb-3">Personal Info</h6>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Name</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Email address</label>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email Address"
                                name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name="password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Phone Number</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Phone Number" name="phoneNumber"
                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label className="form-label">NID</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="NID" name="nid"
                                value={nid} onChange={(e) => setNid(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Role</label>
                        <select className="form-select" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Admin">Admin</option>
                            <option value="Customer">Customer</option>
                            <option value="Agent">Agent</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>

    </>
}

export default userProfileLayout(ProfilePage);