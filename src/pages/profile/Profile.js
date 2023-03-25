import React, { useState, useEffect } from "react"
import userProfileLayout from "../../hoc/userProfileLayout";
import action from "../../action";
import Swal from "sweetalert2";

const Profile = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nid, setNid] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        async function fetchData() {
            var user = JSON.parse(localStorage.getItem('user'));
            if(user){
                setName(user.name);
                setEmail(user.email);
                setPassword(user.password);
                setPhoneNumber(user.phone_number);
                setNid(user.nid);
                setRole(user.role);
                setId(user.id);
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
                'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
            }
        };

        try {
            const response = await action.put(`/user/update/${id}`, data, config);
            //console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            Swal.fire(
                'Success',
                'Successfuly update the user!',
                'success'
            );
        } catch (error) {
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
    return<>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0 mb-3">My Profile</h6>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Name</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Name"
                                value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Email address</label>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email Address"
                                name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name="password"
                                value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Phone Number</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Phone Number" name="phoneNumber"
                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label className="form-label">NID</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="NID" name="nid"
                                value={nid} onChange={(e) => setNid(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="col">
                        <label className="form-label">Role</label>
                        <input type="text" className="form-control" value={role} readOnly></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-default">Update</button>
            </form>
        </div>
    </>
}

export default userProfileLayout(Profile);