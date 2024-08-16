'use client';

import { useCart } from '../CartContext/ProductContext.jsx';
import { useState, useEffect } from 'react';
import Image from 'next/image.js';

const HomePage = () => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch the products')
        }

        const data = await response.json();
        setProducts(data);
      } catch {
        console.log(error)
      }
      finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const addedCart = ({ product }) => {
    addToCart(product);
    alert('Added to Cart')
  }

  if (loading) {
    return (
      <>

        <p className='font-bold text-center text-blue-400 mt-14'>
          Loading...
        </p></>
    )
  }
  if (error) {
    return <p>Error: {error.message}</p>
  }
  return (
    <div className="container mx-auto mt-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-5  ">
        {products.map((product) => (
          <div >

            <div className='items-center text-left  justify-center border p-4 rounded-lg shadow-md hover:cursor-pointer'>
              <div key={product.id} className=" p-4 rounded-lg">
                <div className='flex justify-center'>
                  <Image src={product.image} alt={product.title} className="w-auto h-60 object-cover" />
                </div>
                <h2 className="mt-10 text-lg font-bold">
                  {product.title.length > 25 ? `${product.title.slice(0, 25)}...` : product.title}
                </h2>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>

              </div>


              {/* Button */}
              <div className='flex justify-between align-baseline px-5'>
                <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
                  Buy Now
                </button>
                <button
                  onClick={() =>
                    addedCart({ product })
                  }
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded "
                >
                  Add to Cart
                </button>
              </div>
            </div>


          </div>
        ))}
      </div>
    </div >
  );
};

export default HomePage;
