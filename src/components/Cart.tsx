import React, { useState } from 'react';

interface CartItem {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            title: '책 제목',
            price: 28000,
            imageUrl: 'https://via.placeholder.com/150',
            quantity: 1,
        },
        {
            id: 2,
            title: '책 제목',
            price: 28000,
            imageUrl: 'https://via.placeholder.com/150',
            quantity: 1,
        },
    ]);

    const [selectedItems, setSelectedItems] = useState<number[]>([1]); // 선택된 상품 ID

    const handleSelect = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleRemove = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    };

    const totalProductPrice = selectedItems.reduce((total, itemId) => {
        const item = cartItems.find((item) => item.id === itemId);
        return total + (item ? item.price * item.quantity : 0);
    }, 0);

    const shippingCost = totalProductPrice > 0 ? 3000 : 0; // 3,000원 배송비

    const totalCost = totalProductPrice + shippingCost;

    return (
        <div className='container mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>장바구니</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* 장바구니 항목 리스트 */}
                <div className='lg:col-span-2 space-y-4'>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className='flex items-center border p-4 rounded-lg space-x-4'
                        >
                            <input
                                type='checkbox'
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelect(item.id)}
                                className='w-5 h-5'
                            />
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className='w-20 h-20 object-cover rounded-lg'
                            />
                            <div className='flex-grow'>
                                <h2 className='text-lg font-semibold'>
                                    {item.title}
                                </h2>
                                <p className='text-gray-500'>28,000 원</p>
                            </div>
                            <button
                                onClick={() => handleRemove(item.id)}
                                className='text-red-500 border px-4 py-2 rounded-lg hover:bg-red-100'
                            >
                                장바구니 삭제
                            </button>
                        </div>
                    ))}
                </div>

                {/* 결제 정보 */}
                <div className='border p-6 rounded-lg space-y-4'>
                    <p className='text-lg'>
                        상품 금액: {totalProductPrice.toLocaleString()} 원
                    </p>
                    <p className='text-lg'>
                        배송비: {shippingCost.toLocaleString()} 원
                    </p>
                    <hr />
                    <p className='text-xl font-bold'>
                        결제 예정 금액: {totalCost.toLocaleString()} 원
                    </p>
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-lg w-full mt-4'>
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
