import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import adminLayout from "../hoc/adminLayout"

const SendMoney = () => {
    const [to_account, settoAccount] = useState(null);
    const [amount, setAmount] = useState(null);
    const [balance, setBalance] = useState(0);

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const from_account = user.phone_number;

    const handleSubmit = async event => {
        event.preventDefault();

        const data = {
            from_account: from_account,
            to_account: to_account,
            amount: Number(amount)
        };

        Swal.fire({
            text: 'Are you sure to do transaction?',
            icon: 'warning',
            html:
                'Amount: ' + amount + '<br>' +
                'Current Balance: ' + balance,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post('/transaction/sendmoney', data, {
                        headers: {
                            'Authorization': `${localStorage.getItem('token')}`,
                            'X-Auth-Secret-Key': 'ROADTOSDET'
                        }
                    });
                    console.log(response.data);
                    var r = response.data;
                    if (r?.currentBalance) {
                        setBalance(r.currentBalance);
                        Swal.fire({
                            title: r?.message || 'Operation successful',
                            icon: 'success',
                            html:
                                'Current balance: ' + r?.currentBalance + ' TK' + '<br>' +
                                'Fee: ' + r?.fee + ' TK' + '<br>' +
                                'Trnx ID: ' + r?.trnxId,
                        });
                    } else {
                        Swal.fire(
                            'Warning!',
                            r?.message,
                            'warning'
                        );
                    }

                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Error',
                        error.response.data.message || 'Something went wrong',
                        'error'
                    );
                }
            }
        });
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <h5>Send Money</h5><hr />
                    <div className="row mt-4">
                        <div className="col-1">
                            <label className="form-label">To Account</label>
                        </div>
                        <div className="col-3">
                            <div className="form-outline mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Account Number" value={to_account || ''} onChange={e => settoAccount(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <label className="form-label">Amount</label>
                            </div>
                            <div className="col-3">
                                <div className="form-outline mb-3">
                                    <input type="number" className="form-control"
                                        placeholder="Enter Number of Amount" value={amount || ''} onChange={e => setAmount(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mt-2">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </form>
    </>
}

export default adminLayout(SendMoney);