"use client"
import { useState } from 'react';
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
const AddToCartBtn = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center justify-center my-4">
      <button
        className="w-10 h-10 border border-gray-400 flex items-center justify-center"
        onClick={() => setCount(count - 1)}
      >
        - 
      </button>
      <span className="mx-4 text-2xl">{count}</span>
      <button
        className="w-10 h-10 bg-btn text-white flex items-center justify-center"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default AddToCartBtn;
