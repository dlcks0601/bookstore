import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className='bg-white shadow-md p-4 flex justify-between items-center'>
            <div className='text-2xl font-bold'>
                <Link to='/'>BOOK STORE</Link>
            </div>
            <div className='flex space-x-2'>
                <Link
                    to='/cart'
                    className='flex items-center border p-2 rounded'
                >
                    <span className='material-icons'>shopping_cart</span>
                    <span className='ml-2'>장바구니</span>
                </Link>
                <Link
                    to='/profile'
                    className='flex items-center border p-2 rounded'
                >
                    <span className='material-icons'>account_circle</span>
                    <span className='ml-2'>내정보</span>
                </Link>
                <Link
                    to='/logout'
                    className='flex items-center border p-2 rounded'
                >
                    <span className='material-icons'>logout</span>
                    <span className='ml-2'>로그아웃</span>
                </Link>
                <Link
                    to='/signup'
                    className='flex items-center border p-2 rounded'
                >
                    <span className='material-icons'>person_add</span>
                    <span className='ml-2'>회원가입</span>
                </Link>
                <Link
                    to='/login'
                    className='flex items-center border p-2 rounded'
                >
                    <span className='material-icons'>login</span>
                    <span className='ml-2'>로그인</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
