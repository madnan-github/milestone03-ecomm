"use client"
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '../../../components/hero/hero3/data';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

    const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = existingCart.find((item: any) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Item added to cart!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/product" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image src={product.image} alt={product.title} width={400} height={400} className="object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-green-600 mb-4">{product.discount}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">${product.price.toFixed(3)}</span>
            <span className="text-lg text-gray-500 line-through">${product.oldprice.toFixed(3)}</span>
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors ml-5"
          >
           <Link href={'/cart'} className=''> Your Cart</Link>
          </button>
          
        </div>
      </div>
    </div>
  );
}
