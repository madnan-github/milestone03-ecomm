'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/components/hero/hero3/data';

export default function Page() {
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b py-4">
              <Image src={item.image} alt={item.title} width={100} height={100} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(3)}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 px-2 py-1 rounded-l">-</button>
                <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 px-2 py-1 rounded-r">+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="ml-4 text-red-600">Remove</button>
            </div>
          ))}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Total: ${totalAmount.toFixed(3)}</h2>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Proceed to Checkout
          </button>
        </>
      )}
      <Link href="/product" className="mt-8 text-blue-600 hover:underline inline-block ml-5">
        ← Continue Shopping
      </Link>
    </div>
  );
}