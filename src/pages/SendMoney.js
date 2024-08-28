import React, { useState, useEffect } from "react";
import action from "../action";
import Swal from 'sweetalert2'
import adminLayout from "../hoc/adminLayout"

const SendMoney = () => {
    const [to_account, settoAccount] = useState(null);
    const [amount, setAmount] = useState(null);
    const [balance, setBalance] = useState(0);

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const from_account = user.phone_number;

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Authorization': `bearer ${localStorage.getItem('token')}`,
                'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
            };

            const config = {
                headers: headers
            };

            await action.get(`/transaction/balance/${from_account}`, config)
                .then((response) => {
                    //console.log(response.data);
                    setBalance(response?.data?.balance);
                })
                .catch((error) => {
                    //console.log(error);
                });
        }

        fetchData();
    }, [localStorage.getItem('token')]);

    const handleSubmit = async event => {
        event.preventDefault();

        const data = {
            from_account: from_account,
            to_account: to_account,
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
            icon: 'warning',
            html:
                '<b>' + 'Do you confirm to send money?' + '</b>' + '<br>' +
                'Amount: ' + formattedAmount + ' TK' + '<br>' +
                'Current Balance: ' + formattedBal + ' TK',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Send'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await action.post('/transaction/sendmoney', data, {
                        headers: {
                            'Authorization': `bearer ${localStorage.getItem('token')}`,
                            'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
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
                    } else {
                        Swal.fire(
                            'Warning!',
                            r?.message,
                            'warning'
                        );
                    }

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
                                <input type="text" className="form-control" id="to_account"
                                    placeholder="Enter Your Account Number" value={to_account || ''} 
                                    onChange={e => settoAccount(e.target.value)} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <label className="form-label">Amount</label>
                            </div>
                            <div className="col-3">
                                <div className="form-outline mb-3">
                                    <input type="number" className="form-control" id="amount"
                                        placeholder="Enter Number of Amount" value={amount || ''} 
                                        onChange={e => setAmount(e.target.value)} required/>
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