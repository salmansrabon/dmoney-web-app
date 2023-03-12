import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import axios from "axios";
import Swal from "sweetalert2";

const SystemBalance = () => {
    const [balance, setBalance] = useState(null);

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
                const response = await axios.get('/transaction/balance/SYSTEM', config);
                console.log(response.data.balance);
                setBalance(response.data.balance);
            } catch (error) {
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


    return <>
        <div className="card">
            <div className="card-body">
                <h3>This is Our System Balance: {balance}</h3>
            </div>
        </div>
    </>
}

export default adminLayout(SystemBalance);