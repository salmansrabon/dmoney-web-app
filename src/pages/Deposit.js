import React, { useState, useEffect } from "react";
import axios from 'axios';
import adminLayout from "../hoc/adminLayout"
import Swal from 'sweetalert2'

const Deposit = () => {
    const [toAccount, settoAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const fromAccount = user.phone_number;

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Authorization': localStorage.getItem('token'),
                'X-Auth-Secret-Key': 'ROADTOSDET'
            };

            const config = {
                headers: headers
            };

            await axios.get(`/transaction/balance/${fromAccount}`, config)
                .then((response) => {
                    console.log(response.data);
                    setBalance(response?.data?.balance);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        fetchData();
    }, [localStorage.getItem('token')]);

    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
            from_account: fromAccount,
            to_account: toAccount,
            amount: Number(amount)
        };
        const formattedAmount = amount.toLocaleString('en-US');
        const formattedBal = balance.toLocaleString('en-US');

        if (amount > balance) {
            Swal.fire({
                icon: 'warning',
                title: 'Insufficient balance!',
                html:
                    'Entered Amount: ' + formattedAmount + ' TK' + '<br>' +
                    'Current Balance: ' + formattedBal + ' TK'
            });
            return;
        }
        Swal.fire({
            title: 'Are you sure to do deposit?',
            icon: 'warning',
            html:
            'Amount: ' + formattedAmount + ' TK' + '<br>' +
            'Current Balance: ' + formattedBal + ' TK',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deposit!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post(`/transaction/deposit`, data, {
                        headers: {
                            'Authorization': `${localStorage.getItem('token')}`,
                            'X-Auth-Secret-Key': 'ROADTOSDET'
                        }
                    });
                    console.log(response.data);
                    var r = response.data;
                    if (r?.currentBalance) {
                        const formattedBalance = r.currentBalance.toLocaleString('en-US');
                        const fee = r.fee || 0;
                        setBalance(r.currentBalance);
                        Swal.fire(
                            r.message,
                            `Your current balance is ${formattedBalance} TK ${fee ? `Fee ${fee} TK` : ''} Trnx ID: ${r.trnxId}`,
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
                    <h5><i class="fa fa-paper-plane" aria-hidden="true"></i> Deposit</h5><hr />
                    <div className="row mt-4">
                        <div className="col-1">
                            <label className="form-label">Customer A/C</label>
                        </div>
                        <div className="col-3">
                            <div className="form-outline mb-3">
                                <input type="text" className="form-control"
                                    placeholder="To Account" value={toAccount || ''} 
                                    onChange={e => settoAccount(e.target.value)} required/>
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
                                    placeholder="Enter Number of Amount" value={amount || ''} 
                                    onChange={e => setAmount(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button type="submit" className="btn btn-primary" style={{borderRadius: "3px"}}>Deposit 
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </>
}

export default adminLayout(Deposit);