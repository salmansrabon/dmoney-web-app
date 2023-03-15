import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';

const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const ProfilePage = lazy(() => import('./pages/profile/ProfilePage'));
const Transaction = lazy(() => import('./pages/Transaction'));
const Withdraw = lazy(() => import('./pages/Withdraw'));
const SendMoney = lazy(() => import('./pages/SendMoney'));
const Payment = lazy(() => import('./pages/Payment'));
const Deposit = lazy(() => import('./pages/Deposit'));
const UserList = lazy(() => import('./pages/UserList'));
const CreateUser = lazy(() => import('./pages/CreateUser'));
const CustomerStatement = lazy(() => import('./pages/CustomerStatement'));
const UserLimit = lazy(() => import('./pages/UserLimit'));
const SystemBalance = lazy(() => import('./pages/SystemBalance'));
const Profile = lazy(() => import('./pages/profile/Profile'));

function App() {
    const userRole = localStorage.getItem('role');

    return (
        <Router forceRefresh={true}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path='/' element={<LoginPage />} />
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/deposit' element={userRole === 'Agent' ? <Deposit /> : <LoginPage />} />
                    <Route exact path='/profile/:id' element={userRole === 'Admin' ? <ProfilePage /> : <LoginPage />} />
                    <Route exact path='/user-list' element={userRole === 'Admin' ? <UserList /> : <LoginPage /> } />
                    <Route exact path='/transaction' element={userRole === 'Admin' ? <Transaction /> : <LoginPage />} />
                    <Route exact path='/send-money' element={userRole === 'Customer' ? <SendMoney /> : <LoginPage />} />
                    <Route exact path='/payment' element={userRole === 'Customer' || userRole === 'Agent' ? <Payment /> : <LoginPage />} />
                    <Route exact path='/withdraw' element={userRole === 'Customer' || userRole === 'Merchant' ? <Withdraw /> : <LoginPage />} />
                    {/* <Route exact path='/check-balance' element={userRole === 'Customer' || userRole === 'Agent' ? <CheckBalance /> : <LoginPage />} /> */}
                    <Route exact path='/create-user' element={userRole === 'Admin' ? <CreateUser /> : <LoginPage />} />
                    <Route exact path='/deposit' element={userRole === 'Customer' || userRole === 'Agent' ? <Deposit /> : <LoginPage />} />
                    <Route exact path='/user-list' element={userRole === 'Admin' ? <UserList /> : <LoginPage />} />
                    <Route exact path='/statement' element={userRole === 'Customer' || userRole === 'Agent' || userRole === 'Merchant' ? <CustomerStatement /> : <LoginPage />} />
                    <Route exact path='/user-limit' element={userRole === 'Customer' ? <UserLimit /> : <LoginPage />} />
                    <Route exact path='/my-profile' element={userRole === 'Customer' || userRole === 'Admin' || userRole === 'Agent' || userRole === 'Merchant' ? <Profile /> : <LoginPage />} />
                    {/* <Route exact path='/system-balance' element={userRole === 'Admin' ? <SystemBalance /> : <LoginPage />} /> */}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;