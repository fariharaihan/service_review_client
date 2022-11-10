import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .then()
    }

    const menuItems = <>
        <li className='font-semibold'> <Link to='/'>Home</Link></li>
        <li className='font-semibold'> <Link to='/servicesDetail'>Services</Link></li>
        <li className='font-semibold'> <Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'> <Link to='/reviews'>My review</Link></li>
                    <li className='font-semibold'> <Link to='/addservices'>Add Services</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogout} className='btn btn-ghost'>Log Out</button></li>
                </>
                :
                <li className='font-semibold'> <Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-12 mb-5 pt-8 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-10 h-10' src='https://img.freepik.com/free-photo/cupcakes_74190-20.jpg?size=626&ext=jpg&ga=GA1.2.1952607280.1664416482&semt=sph' alt='' />
                <Link to="/" className="btn btn-ghost normal-case  text-xl">Candle cake</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <p className='px-2'> {user?.displayName}</p>
                {user?.photoURL
                    ?
                    <img className='w-16 rounded-full  dark:bg-gray-500'
                        src={user?.photoURL
                        }></img>
                    : <FaUserCircle className='w-10 h-10'></FaUserCircle>
                }
            </div>
        </div>
    );
};

export default Header;