import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import action from "../action";
import './User.css';
import Swal from "sweetalert2";

const CustomerStatement = () => {
    const [transactions, setTransaction] = useState([]);
    const [balance, setBalance] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const formattedNum = balance ? balance.toLocaleString("en-US") : "";

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      }

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);
    
      const totalPages = Math.ceil(transactions.length / itemsPerPage);

    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    const customer_phone_number = user?.phone_number;

    useEffect(() => {
        async function fetchData() {
          const headers = {
            'Authorization': `bearer ${localStorage.getItem('token')}`,
            'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
          };
      
          const config = {
            headers: headers
          };
      
          try {
            const response = await action.get(`/transaction/statement/${customer_phone_number}`, config);
             setTransaction(response.data.transactions);
             setIsLoading(false);
            if (response.data.length === 0) {
             setMessage('No data found');
             }
            await action.get(`/transaction/balance/${customer_phone_number}`, config)
              .then((response) => {
                //console.log(response.data);
                setBalance(response?.data?.balance);
              })
              .catch((error) => {
                //console.log(error);
              });
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
                <div className="row">
                    {/* <div className="col">
                        <button type="button" className="btn btn-primary" onClick={handleStatement}>Check Statement</button>
                    </div> */}
                    <div className="col">
                     <h2 style={{fontWeight: "bold"}}>Balance: {formattedNum || 0}&nbsp;TK</h2>
                  </div>
                  <div className="col text-right">
                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Export</button>
                  </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Phone Number</th>
                                    <th>Description</th>
                                    <th>From Account</th>
                                    <th>To Account</th>
                                    <th>TRNXID</th>
                                    <th>Debit</th>
                                    <th>Credit</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>

                                </tr>
                            </thead>
                            <tbody>
                                {currentItems && currentItems.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.account}</td>
                                        <td>{item.description}</td>
                                        <td>{item.from_account}</td>
                                        <td>{item.to_account}</td>
                                        <td>{item.trnxId}</td>
                                        <td>{item.debit.toLocaleString('en-US')} TK</td>
                                        <td>{item.credit.toLocaleString('en-US')} TK</td>
                                        <td>{formatDate(item.createdAt)}</td>
                                        <td>{formatDate(item.updatedAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
          <button className="pagination__button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            Prev</button>{currentPage > 3 && (
              <button className="pagination__button" onClick={() => handlePageChange(1)}>1</button>)}
          {currentPage > 4 && <span className="pagination__ellipsis">...</span>}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (pageNumber) =>
                pageNumber === 1 ||
                pageNumber === totalPages ||
                Math.abs(pageNumber - currentPage) < 2 ||
                (currentPage < 4 && pageNumber < 6) ||
                (currentPage > totalPages - 4 && pageNumber > totalPages - 6)
            )
            .map((pageNumber) => (
              <button
                key={pageNumber}
                className={`pagination__button ${pageNumber === currentPage ? "pagination__button--active" : ""
                  }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          {currentPage < totalPages - 3 && (
            <span className="pagination__ellipsis">...</span>
          )}
          {currentPage < totalPages - 2 && (
            <button
              className="pagination__button"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          )}
          <button
            className="pagination__button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
                </div>
            </div>
        </div>
    </>
}

export default adminLayout(CustomerStatement);