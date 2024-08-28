import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import action from "../action";
import Swal from "sweetalert2";

const SystemBalance = () => {
    const [balance, setBalance] = useState(null);

    const formattedNum = balance ? balance.toLocaleString("en-US") : "";

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Authorization': `bearer ${localStorage.getItem('token')}`,
                'X-Auth-Secret-Key': 'ROADTOSDET'
            };

            const config = {
                headers: headers
            };

            try {
                const response = await action.get('/transaction/balance/SYSTEM', config);
                //console.log(response.data.balance);
                setBalance(response.data.balance);
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

        fetchData();
    }, [localStorage.getItem('token')]);


    return <>
        <div className="card">
            <div className="card-body">
                <h3>This is Our System Balance: {formattedNum} TK</h3>
            </div>
        </div>
    </>
}

export default adminLayout(SystemBalance);