import React, { useState } from 'react';

interface BookDetail {
    title: string;
    category: string;
    format: string;
    author: string;
    isbn: string;
    pages: number;
    price: number;
    description: string;
    contents: string[];
    likes: number;
    images: string[];
}

interface Review {
    reviewer: string;
    date: string;
    content: string;
}

const BookDetail: React.FC = () => {
    // 임시 데이터 (API 연결 전)
    const book: BookDetail = {
        title: 'milk and honey',
        category: '소설',
        format: '종이책',
        author: 'BOB',
        isbn: '12345567678',
        pages: 240,
        price: 28000,
        description:
            'This book is known for its captivating storyline and its thought-provoking themes. It is a popular choice for those who enjoy a gripping and immersive reading experience.',
        contents: [
            '프롤로그 - 보자기들, 흩어지는, 홀로 서는',
            '제1장 K는 대한민국이 아니다',
            'K 프레임에, 국혼을 사로잡다',
            '사람들은 왜 우리를 보지 못하나?',
            '우리가 알지 못하는 새로운 세계',
            '국민과 국혼의 운명을 아끼어',
            '이 세상에 존재하지 않을 것',
            '홀로의 여행이 또 한번 필요하다',
        ],
        likes: 100,
        images: ['https://via.placeholder.com/300'],
    };

    const reviews: Review[] = [
        {
            reviewer: 'bob****',
            date: '2023-01-01',
            content:
                'This book is known for its captivating storyline and its thought-provoking themes. It is a popular choice for those who enjoy a gripping and immersive reading experience.',
        },
        {
            reviewer: 'bob****',
            date: '2023-01-01',
            content:
                'This book is known for its captivating storyline and its thought-provoking themes. It is a popular choice for those who enjoy a gripping and immersive reading experience.',
        },
    ];

    const bestBooks = [
        {
            id: 1,
            title: '책 제목',
            author: 'bob',
            price: 28000,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'bob',
            price: 28000,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Pride and Prejudice',
            author: 'bob',
            price: 28000,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: '1984',
            author: 'bob',
            price: 28000,
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className='container mx-auto p-6'>
            {/* 기본 책 정보 및 구매 버튼 */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='flex flex-col items-center'>
                    <img
                        src={book.images[0]}
                        alt={book.title}
                        className='w-full h-96 object-cover mb-4'
                    />
                    <button className='bg-gray-300 text-black px-4 py-2 rounded'>
                        크게보기
                    </button>
                </div>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>{book.title}</h1>
                    <p className='text-lg'>
                        카테고리: {book.category} <br />
                        포맷: {book.format} <br />
                        작가: {book.author} <br />
                        ISBN: {book.isbn} <br />
                        쪽수: {book.pages}쪽
                    </p>
                    <p className='mt-4'>{book.description}</p>
                    <div className='flex items-center justify-between mt-6'>
                        <div className='flex items-center space-x-2'>
                            <button className='border px-2 py-1'>-</button>
                            <span>1</span>
                            <button className='border px-2 py-1'>+</button>
                        </div>
                        <span className='text-2xl font-bold'>
                            {book.price.toLocaleString()}원
                        </span>
                    </div>
                    <div className='flex space-x-4 mt-4'>
                        <button className='flex items-center space-x-2 border px-4 py-2 rounded'>
                            <span className='material-icons'>favorite</span>
                            <span>{book.likes}</span>
                        </button>
                        <button className='bg-black text-white px-6 py-2 rounded'>
                            장바구니에 담기
                        </button>
                    </div>
                </div>
            </div>

            {/* 상세 설명 */}
            <div className='mt-12'>
                <h2 className='text-2xl font-bold mb-4'>상세설명</h2>
                <p>{book.description}</p>

                <h2 className='text-2xl font-bold mt-8 mb-4'>목차</h2>
                <ul className='list-disc ml-5'>
                    {book.contents.map((item, index) => (
                        <li key={index} className='mb-2'>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 리뷰 섹션 */}
            <div className='mt-12'>
                <h2 className='text-2xl font-bold mb-4'>
                    리뷰({reviews.length})
                </h2>
                {reviews.map((review, index) => (
                    <div key={index} className='border p-4 rounded-lg mb-4'>
                        <p className='font-bold'>
                            {review.reviewer} {review.date}
                        </p>
                        <p className='mt-2'>{review.content}</p>
                    </div>
                ))}
            </div>

            {/* 이 분야의 베스트 섹션 */}
            <div className='mt-12'>
                <h2 className='text-2xl font-bold mb-4'>이 분야의 베스트</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {bestBooks.map((book) => (
                        <div key={book.id} className='border rounded-lg p-4'>
                            <img
                                src={book.imageUrl}
                                alt={book.title}
                                className='w-full h-48 object-cover mb-2'
                            />
                            <h3 className='text-lg font-bold'>{book.title}</h3>
                            <p className='text-sm text-gray-500'>
                                {book.author}
                            </p>
                            <p className='text-lg font-bold'>
                                {book.price.toLocaleString()}원
                            </p>
                            <button className='bg-black text-white w-full mt-2 py-2 rounded'>
                                장바구니 담기
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
