import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import adminLayout from "../hoc/adminLayout"

const Withdraw = () => {
    const [toAccount, settoAccount] = useState(null);
    const [amount, setAmount] = useState(null);

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const fromAccount = user.phone_number;

    const handleSubmit = async event => {
        event.preventDefault();

        const data = {
            from_account: fromAccount,
            to_account: toAccount,
            amount: Number(amount)
        };

        Swal.fire({
            title: 'Are you sure to do withdraw?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Withdraw!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post(`/transaction/withdraw`, data, {
                        headers: {
                            'Authorization': `${localStorage.getItem('token')}`,
                            'X-Auth-Secret-Key': 'ROADTOSDET'
                        }
                    });
                    //console.log(response.data);
                    var r = response.data;
                    if(r.currentBalance){
                        Swal.fire(
                            r?.message,
                            'You current balance is ' + r?.currentBalance + 'TK', + ' Fee: ' + r?.fee + ' Trnx ID: ' + r?.trnxId,
                            'success'
                        );
                    }else{
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
          })
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <h5>Withdraw</h5><hr />
                    <div className="row mt-4">
                        <div className="col-1">
                            <label className="form-label">To Agent</label>
                        </div>
                        <div className="col-3">
                            <div className="form-outline mb-3">
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Account Number" value={toAccount || ''} onChange={e => settoAccount(e.target.value)} />
                            </div>
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
                    <div className="mt-2">
                        <button type="submit" className="btn btn-primary">Withdraw</button>
                    </div>
                </div>
            </div>
        </form>
    </>
}

export default adminLayout(Withdraw);