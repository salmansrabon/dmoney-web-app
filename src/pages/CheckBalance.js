import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import axios from "axios";
import Swal from "sweetalert2";

const CheckBalance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchData() {

      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString);
      const customer_phone_number = user.phone_number;

      try {
        const response = await axios.get(`/transaction/balance/${customer_phone_number}`, {
          headers: {
            'Authorization': `${localStorage.getItem('token')}`,
            'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
          }
        });
        setBalance(response.data.balance);
      } catch (error) {
        if(error.response.status === 401){
          window.location.href = '/login';
          return;
      }
        const errorMessage = error.response.data.message || error.response?.data?.error || error.message || 'Something went wrong';
        Swal.fire('Error', errorMessage, 'error');
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return <>
    <h5>{balance && <h6>Your Current Balance: {balance}</h6>}</h5>
  </>
}

export default adminLayout(CheckBalance);