import React, { useState, useEffect } from "react";
import adminLayout from "../hoc/adminLayout"
import './User.css';
import axios from "axios";
import Swal from 'sweetalert2'
import './User.css';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [balance, setBalance] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const formattedNum = balance ? balance.toLocaleString("en-US") : "";

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  const customer_phone_number = user?.phone_number;

  const navigate = useNavigate();

  const handleUpdateUser = (id) => {
    navigate(`/profile/${id}`);
  }

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
        const response = await axios.get('/user/list', config);
        setUsers(response.data.users);


        await axios.get(`/transaction/balance/${customer_phone_number}`, config)
          .then((response) => {
            console.log(response.data);
            setBalance(response?.data?.balance);
          })
          .catch((error) => {
            console.log('hi');
            console.log(error);
            if(error.response.status === 401){
              window.location.href = '/login';
              return;
          }
          });

      } catch (error) {
        console.log(error);
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

  const deleteUserData = async (id) => {
    const config = {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`,
        'X-Auth-Secret-Key': process.env.REACT_APP_API_KEY
      }
    };

    try {
      const response = await axios.delete(`/user/delete/${id}`, config);
      Swal.fire(
        'Success',
        'User deleted successfully',
        'success'
      );
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
  };

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
    const id = item.id ? item.id.toString().toLowerCase() : '';
    const name = item.name ? item.name.toLowerCase() : '';
    const email = item.email ? item.email.toLowerCase() : '';
    const phone_number = item.phone_number ? item.phone_number.toLowerCase() : '';
    const role = item.role ? item.role.toLowerCase() : '';
    const nid = item.nid ? item.nid.toLowerCase() : '';
  
    return id.includes(searchText.toLowerCase())
      || name.includes(searchText.toLowerCase())
      || email.includes(searchText.toLowerCase())
      || phone_number.includes(searchText.toLowerCase())
      || role.includes(searchText.toLowerCase())
      || nid.includes(searchText.toLowerCase());
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

return <>
    <div className="card">
      <div className="card-body">
        <div className="row mb-2">
          <div className="col-4">
            <h5>User List</h5>
          </div>
          <div className="col">
            <div>
              <div>
              <h2>Balance: {formattedNum || 0} TK</h2>
            </div>
            </div>
          </div>
          <div className="col text-right">
                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Export</button>
                  </div>
        </div>
        <div className="row mt-2">
        <div className="col-9"></div>
        <div className='col'>
            <input type="text" className="form-control" placeholder="Search list" value={searchText} onChange={e => setSearchText(e.target.value)} />
          </div>
        </div>
        <div className="mt-2">
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}><i className="fa fa-sort" aria-hidden="true"></i> ID</th>
                <th onClick={() => handleSort('name')}><i className="fa fa-sort" aria-hidden="true"></i> Name</th>
                <th onClick={() => handleSort('email')}><i className="fa fa-sort" aria-hidden="true"></i> Email</th>
                <th onClick={() => handleSort('phone_number')}><i className="fa fa-sort" aria-hidden="true"></i> Phone Number</th>
                <th onClick={() => handleSort('role')}><i className="fa fa-sort" aria-hidden="true"></i> Role</th>
                <th onClick={() => handleSort('nid')}><i className="fa fa-sort" aria-hidden="true"></i> NID</th>
                <th onClick={() => handleSort('balance')}><i className="fa fa-sort" aria-hidden="true"></i> Balance</th>

              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.role}</td>
                  <td>{item.nid}</td>
                  <td>{item.balance}</td>
                  <td>
                    <i className="fa fa-pencil" aria-hidden="true"
                      onClick={() => handleUpdateUser(item.id)}></i>&nbsp;&nbsp;
                    <i className="fa fa-trash" aria-hidden="true"
                      onClick={() => deleteUserData(item.id)}></i>
                  </td>
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
  </>
}

export default adminLayout(UserList);