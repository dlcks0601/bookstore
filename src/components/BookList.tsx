import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link 추가

const categories = ['전체', '소설', '인문', '건강', 'IT', '자기계발'];
const viewOptions = ['8개 보기', '16개 보기', '24개 보기'];

const books = [
    {
        id: 1,
        title: '책 제목',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        title: 'Pride and Prejudice',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        title: '1984',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
        title: 'To the Lighthouse',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 7,
        title: 'Moby-Dick',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 8,
        title: 'The Lord of the Rings',
        author: 'bob',
        price: 28000,
        likes: 220,
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const BookList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedViewOption, setSelectedViewOption] = useState(
        viewOptions[0]
    );
    const [viewMode, setViewMode] = useState('grid'); // grid or list

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const handleViewOptionChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedViewOption(e.target.value);
    };

    const handleViewModeChange = (mode: string) => {
        setViewMode(mode);
    };

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>도서 검색 결과</h1>

            {/* 검색창과 카테고리 버튼 */}
            <div className='flex justify-between items-center mb-6'>
                <div className='flex space-x-2'>
                    <input
                        type='text'
                        placeholder='검색어 입력'
                        className='border p-2 rounded w-1/3'
                    />
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-6 py-2 text-lg font-semibold rounded min-w-[80px] text-center whitespace-nowrap ${
                                selectedCategory === category
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-700'
                            } transition-colors duration-300 ease-in-out`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* 보기 옵션 및 모드 선택 */}
                <div className='flex items-center space-x-4'>
                    {/* 보기 개수 선택 */}
                    <select
                        value={selectedViewOption}
                        onChange={handleViewOptionChange}
                        className='border p-2 rounded'
                    >
                        {viewOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    {/* 보기 모드 선택 */}
                    <button
                        onClick={() => handleViewModeChange('grid')}
                        className={`border p-2 rounded ${
                            viewMode === 'grid' ? 'bg-black text-white' : ''
                        }`}
                    >
                        대형보기
                    </button>
                    <button
                        onClick={() => handleViewModeChange('list')}
                        className={`border p-2 rounded ${
                            viewMode === 'list' ? 'bg-black text-white' : ''
                        }`}
                    >
                        목록보기
                    </button>
                </div>
            </div>

            {/* 도서 목록 - 제목과 이미지를 클릭하면 상세 페이지로 이동 */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-6`}>
                {books.map((book) => (
                    <div
                        key={book.id}
                        className='border rounded-lg shadow-lg p-4'
                    >
                        {/* 이미지를 클릭하면 상세 페이지로 이동 */}
                        <Link to={`/book/${book.id}`}>
                            <img
                                src={book.imageUrl}
                                alt={book.title}
                                className='w-full h-48 object-cover mb-4'
                            />
                        </Link>
                        {/* 제목을 클릭하면 상세 페이지로 이동 */}
                        <Link to={`/book/${book.id}`}>
                            <h2 className='text-lg font-bold'>{book.title}</h2>
                        </Link>
                        <p className='text-sm text-gray-500'>
                            작가: {book.author}
                        </p>
                        <p className='text-lg font-bold mt-2'>
                            {book.price.toLocaleString()}원
                        </p>
                        <div className='flex justify-between items-center mt-4'>
                            <span className='text-gray-500'>
                                좋아요 {book.likes}
                            </span>
                            <button className='flex items-center space-x-1'>
                                <span className='material-icons'>
                                    favorite_border
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* 페이지네이션 */}
            <div className='flex justify-center mt-8 space-x-2'>
                <button className='px-4 py-2 border rounded'>{'<'}</button>
                <button className='px-4 py-2 border rounded'>1</button>
                <button className='px-4 py-2 border rounded'>2</button>
                <button className='px-4 py-2 border rounded'>3</button>
                <button className='px-4 py-2 border rounded'>4</button>
                <button className='px-4 py-2 border rounded'>5</button>
                <button className='px-4 py-2 border rounded'>{'>'}</button>
            </div>
        </div>
    );
};

export default BookList;
