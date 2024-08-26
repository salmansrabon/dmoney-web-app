import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import action from "../action";
import Swal from "sweetalert2";

const UserLimit = () => {
  // const [customer_phone_number, setPhoneNumber] = useState("");
  const [limit, setLimit] = useState(null);

  const handleLimit = async () => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const customer_phone_number = user.phone_number;

    

    try {
      const response = await action.get(`/transaction/limit/${customer_phone_number}`, {
        headers: {
          'Authorization': `bearer ${localStorage.getItem('token')}`,
          'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
        }
      });
      setLimit(response.data.limit);
    } catch (error) {
      if(error.response.status === 401){
        window.location.href = '/login';
        return;
    }
      const errorMessage = error.response?.data?.error || error.message || 'Something went wrong';
      Swal.fire('Error', errorMessage, 'error');
      //console.error(error);
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