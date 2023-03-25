import React, { useEffect, useState } from 'react';
import adminLayout from "../hoc/adminLayout"
import action from "../action";
import './User.css';
import Swal from "sweetalert2";

const Transaction = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);

  const [balance, setBalance] = useState(null);
  const [isChecked, setIsChecked] = useState(false);



  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  const customer_phone_number = user?.phone_number;

  useEffect(() => {
    async function fetchData() {
      const headers = {
        'Authorization': localStorage.getItem('token'),
        'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
      };

      const config = {
        headers: headers
      };

      try {
        const response = await action.get('/transaction/list', config);
        setUsers(response.data.transactions);
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
        setIsLoading(false);
        setMessage('Error fetching data');
        Swal.fire(
          'Error',
          error.response.data.message || 'Something went wrong',
          'error'
        );
      }
    }

    fetchData();
  }, [localStorage.getItem('token')]);

  const handleSort = (key) => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    setSortConfig({ key, direction });
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const filteredData = users.filter(item => {
    return item.account.toLowerCase().includes(searchText.toLowerCase())
      || item.description.toLowerCase().includes(searchText.toLowerCase())
      || item.id.toString().toLowerCase().includes(searchText.toLowerCase());
  });

  const sortedData = filteredData.sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }

    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <>
    <div className="card">
      <div className="card-body">
        <div className="row mb-2">
          <div className="col">
            <h5 className="pb-2 mb-0">Transaction List</h5>
          </div>
          <div className='col'>
            {/* <div>
              <h2>Balance: {balance}</h2>
            </div> */}
          </div>
          <div className='col'>
            <input type="text" className="form-control" placeholder="Search list" value={searchText} onChange={e => setSearchText(e.target.value)} />
          </div>
        </div>
        <div className="d-flex text-muted">
          {isLoading ? <p>Loading...</p> :
            message ? <p>{message}</p> :
              <table className="table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort('id')}><i className="fa fa-sort" aria-hidden="true"></i>Id</th>
                    <th onClick={() => handleSort('account')}><i className="fa fa-sort" aria-hidden="true"></i>Account</th>
                    <th onClick={() => handleSort('from_account')}><i className="fa fa-sort" aria-hidden="true"></i>From</th>
                    <th onClick={() => handleSort('to_account')}><i className="fa fa-sort" aria-hidden="true"></i>To</th>
                    <th onClick={() => handleSort('description')}> <i className="fa fa-sort" aria-hidden="true"></i>Description</th>
                    <th onClick={() => handleSort('trnxId')}> <i className="fa fa-sort" aria-hidden="true"></i>Trnx Id</th>
                    <th onClick={() => handleSort('debit')}><i className="fa fa-sort" aria-hidden="true"></i>Debit</th>
                    <th onClick={() => handleSort('credit')}><i className="fa fa-sort" aria-hidden="true"></i>Credit</th>
                    <th>Created</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.account}</td>
                      <td>{item.from_account}</td>
                      <td>{item.to_account}</td>
                      <td>{item.description}</td>
                      <td>{item.trnxId}</td>
                      <td>{item.debit.toLocaleString('en-US')} TK</td>
                      <td>{item.credit.toLocaleString('en-US')} TK</td>
                      <td>{formatDate(item.createdAt)}</td>
                      <td>{formatDate(item.updatedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          }
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
  </>
}

export default adminLayout(Transaction);