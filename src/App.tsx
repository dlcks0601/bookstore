import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/Booklist'; // 책 목록 컴포넌트
import BookDetail from './components/BookDetail'; // 책 상세 컴포넌트
import Cart from './components/Cart'; // 장바구니 컴포넌트
import Header from './components/Header'; // 헤더 컴포넌트

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<BookList />} />
                <Route path='/book/:id' element={<BookDetail />} />
                <Route path='/cart' element={<Cart />} />{' '}
                {/* 장바구니 경로 추가 */}
            </Routes>
        </Router>
    );
};

export default App;
