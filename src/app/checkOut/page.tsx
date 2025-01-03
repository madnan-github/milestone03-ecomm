
"use client"
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  quantity: number;
  packaging: string;
  image: string;
}

const CheckoutPage = () => {
  // Initialize products state
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Way Kambas Mini Ebony",
      price: 1024000,
      oldPrice: 1260000,
      quantity: 2,
      packaging: "Wooden Packaging (Rp 50.000)",
      image: "/images/hero/w1.png",
    },
    {
      id: 2,
      title: "Sikka (Ebony & Maple)",
      price: 1264000,
      oldPrice: 1312000,
      quantity: 1,
      packaging: "Default Packaging (Free)",
      image: "/images/hero/sikka.png",
    },
    {
        id: 3,
        title: "Singo Maple",
        price: 500.000,
        oldPrice: 1.264000 ,
        quantity: 1,
        packaging: "Default Packaging (Free)",
        image: "/images/hero/h3-1.png",      
      },
      {
        id: 4,
        title: "Singo Ebony",
        price: 500.000,
        oldPrice: 1.264000 ,
        quantity: 1,
        packaging: "Default Packaging (Free)",
        image: "/images/hero/h3-2.png",
      },
      {
        id: 5,
        title: "Rakai Ebony",
        price: 1280.000,
        oldPrice: 1.118000 ,
        quantity: 1,
        packaging: "Default Packaging (Free)",
        image: "/images/hero/h3-3.png",
      },
      {
        id: 6,
        title: "Way Kambas Mini Maple",
        price: 500.000,
        oldPrice:1.024000  ,
        quantity: 1,
        packaging: "Default Packaging (Free)",
        image: "/images/hero/h3-4.png",
      },

      
  ]);

  const [promoCode, setPromoCode] = useState<string>("INDONESIA");
  const [promoDiscount, setPromoDiscount] = useState<number>(35); // 35% Discount
  const shippingCost = 500000;

  // Subtotal Calculation
  const calculateSubtotal = () =>
    products.reduce((total, product) => total + product.price * product.quantity, 0);

  // Total Calculation
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + shippingCost - (subtotal * promoDiscount) / 100;
  };

  // Handle Quantity Increase
  const handleIncreaseQuantity = (id: number) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setProducts(updatedProducts);
  };

  // Handle Quantity Decrease
  const handleDecreaseQuantity = (id: number) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  // Handle Remove Product
  const handleRemoveProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="bg-gray-100  px-5">
      <div className="max-w-3xl mx-auto grid  gap-10">
        {/* Product List */}
        <div className="bg-white p-5 shadow-md rounded-lg">
          {products.map((product) => (
            <div key={product.id} className="border-b pb-5 mb-5">
              <div className="flex gap-5">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  width={70.49}
                  height={100}
                  className="w-[70.49px] h-[100px] object-cover"
                />
                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.packaging}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-red-500">
                      Rp {product.oldPrice.toLocaleString()}
                    </p>
                    <p className="line-through text-gray-500 text-sm">
                      Rp {product.price.toLocaleString()}
                    </p>
                  </div>
                  {/* Quantity Control */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3">{product.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}

          {/* Promo Code */}
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="border px-3 py-2 rounded-md flex-1"
            />
            <p className="text-green-500 font-bold ml-2">{promoDiscount}% OFF</p>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-red-500 text-white py-3 mt-5 rounded-md hover:bg-red-600">
            Checkout
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-5 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-5">Detail Order</h2>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>Rp {calculateSubtotal().toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping Cost</p>
            <p>Rp {shippingCost.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p>Promo Code</p>
            <p>-Rp {((calculateSubtotal() * promoDiscount) / 100).toLocaleString()}</p>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold">
            <p>Grand Total</p>
            <p>Rp {calculateTotal().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
