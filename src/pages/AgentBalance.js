import React,{useState, useEffect} from "react";
import adminLayout from "../hoc/adminLayout"
import axios from "axios";
import Swal from "sweetalert2";

const AgentBalance = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [balance, setBalance] = useState(null);
    
    const handleStatement = async (customer_phone_number) => {
        try {
            const response = await axios.get(`/transaction/statement/${{customer_phone_number}}`, {
                headers: {
                    'Authorization': `${localStorage.getItem('token')}`,
                    'X-Auth-Secret-Key': 'ROADTOSDET'
                }
            });
            setBalance(response.data.balance);
        } catch (error) {
            Swal.fire('Error', error.response.data.message || 'Something went wrong', 'error')
            console.log(error);
        }
      };

        return <>
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-3">
                    <input type="text" className="form-control" placeholder="Enter phone number" value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-primary" onClick={handleStatement}>Submit</button>
                    </div>
                    <div className="col">
                    </div>
                </div>
                </div>
            </div>
        </>
    }

export default adminLayout(AgentBalance);