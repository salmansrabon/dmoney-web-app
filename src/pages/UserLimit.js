import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import axios from "axios";
import Swal from "sweetalert2";

const UserLimit = () => {
  // const [customer_phone_number, setPhoneNumber] = useState("");
  const [limit, setLimit] = useState(null);

  const handleLimit = async () => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const customer_phone_number = user.phone_number;

    

    try {
      const response = await axios.get(`/transaction/limit/${customer_phone_number}`, {
        headers: {
          'Authorization': `${localStorage.getItem('token')}`,
          'X-Auth-Secret-Key': 'ROADTOSDET'
        }
      });
      setLimit(response.data.limit);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message || 'Something went wrong';
      Swal.fire('Error', errorMessage, 'error');
      console.error(error);
    }
  };

  return <>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-5">
            <button type="button" className="btn btn-primary" onClick={handleLimit}>Check Limit</button>&nbsp;&nbsp;
            <span style={{ fontSize: "19px", fontWeight: "bold" }}>{limit && <>Limit: {limit} TK</>}</span>
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  </>
}

export default adminLayout(UserLimit);