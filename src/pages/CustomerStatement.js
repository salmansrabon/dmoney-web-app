import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import axios from "axios";
import Swal from "sweetalert2";

const CustomerStatement = () => {
    const [transactions, setBalance] = useState([]);

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const handleStatement = async () => {
        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);
        const customer_phone_number = user.phone_number;

        try {
            const response = await axios.get(`/transaction/statement/${customer_phone_number}`, {
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`,
                    'X-Auth-Secret-Key': 'ROADTOSDET'
                }
            });
            setBalance(response.data.transactions);
        } catch (error) {
            Swal.fire('Error', error.response.data.message || 'Something went wrong', 'error')
            console.log(error);
        }
    };


    return <>
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={handleStatement}>Check Statement</button>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Phone Number</th>
                                    <th>Account</th>
                                    <th>From Account</th>
                                    <th>To Account</th>
                                    <th>TRNXID</th>
                                    <th>Debit</th>
                                    <th>Credit</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>

                                </tr>
                            </thead>
                            <tbody>
                                {transactions && transactions.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.account}</td>
                                        <td>{item.description}</td>
                                        <td>{item.from_account}</td>
                                        <td>{item.to_account}</td>
                                        <td>{item.trnxId}</td>
                                        <td>{item.debit}</td>
                                        <td>{item.credit}</td>
                                        <td>{formatDate(item.createdAt)}</td>
                                        <td>{formatDate(item.updatedAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default adminLayout(CustomerStatement);