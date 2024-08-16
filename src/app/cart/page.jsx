'use client';
import { useCart } from '../../CartContext/ProductContext.jsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation.js';
import Image from 'next/image.js';

const CartPage = () => {
     const { cart, removeFromCart, updateQuantity } = useCart();
     const route = useRouter();

     const [discnt1, setDiscnt1] = useState(false);
     const [discnt2, setDiscnt2] = useState(false);



     if (!cart) {
          return <p className=' text-centre text-blue-400 font-bold '>
               Loading...
          </p>
     }

     const cartItems = cart || [];
     const calculateTotal = () => {
          return cart.reduce((total, item) => total + item.price * item.quantity, 0);
     };

     return (
          <div className="container  mx-auto mt-7">
               <h1 className="text-3xl text-center mt-2 border py-4 rounded-2xl shadow-lg font-bold mb-6">Shopping Cart</h1>
               {cart.length === 0 ? (
                    <p className=' text-centre text-blue-400 font-bold '>Your cart is empty</p>
               ) : (
                    <div className='p-2 pb-40'>
                         {cart.map((item) => (


                              <div className='border rounded-lg shadow-md shadow-slate-500 my-3 px-4 py-3'>
                                   <div className="flex items-center justify-between mb-4">
                                        <Image src={item.image} alt={item.name} className="w-auto h-40 object-cover" />
                                        <div className='w-72'>
                                             <h2 className="text-lg font-bold">{item.title}</h2>
                                             <p>${item.price.toFixed(2)}</p>
                                             <div className="flex items-center">
                                                  <button
                                                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                       className="px-2 py-1 bg-gray-300 rounded"
                                                  >
                                                       -
                                                  </button>
                                                  <span className="px-4">{item.quantity}</span>
                                                  <button
                                                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                       className="px-2 py-1 bg-gray-300 rounded"
                                                  >
                                                       +
                                                  </button>
                                             </div>
                                        </div>
                                        <button
                                             onClick={() => removeFromCart(item.id)}
                                             className="border shadow-sm bg-blue-200 text-black p-2 rounded-lg"
                                        >
                                             Remove
                                        </button>
                                   </div>
                              </div>
                         ))}
                         <div className='mt-6 bottom-0 fixed border-t-2 w-full left-0 py-4 px-12  bg-white'>
                              <div className=" bg-white flex justify-between">
                                   <h2 className="text-xl font-bold">Total:</h2>
                                   <div>

                                        <h2 className="text-xl font-bold"> ${calculateTotal().toFixed(2) -
                                             ((discnt1) ? calculateTotal().toFixed(2) * 0.1 : 0) - ((discnt2) ? 10 : 0)
                                        }
                                        </h2>
                                   </div>

                              </div>
                              <div className='flex justify-between font-semibold'>
                                   Discount1 (get 10% off)
                                   <input type="checkbox" onClick={() => {
                                        setDiscnt1(!discnt1);
                                   }} />

                              </div>
                              <div className='flex justify-between font-semibold'>
                                   discount1 (get 10$ off)
                                   <input type="checkbox" onClick={() => {
                                        setDiscnt2(!discnt2);
                                   }} />

                              </div>                              <div className='flex justify-center items-center'>
                                   <button className='border p-2 rounded-md bg-blue-700 text-white font-bold' onClick={() => {
                                        alert('Thank you for shopping with us')
                                        route.push('/')
                                   }}>Checkout</button>

                              </div>
                         </div>

                    </div>
               )}
          </div>
     );
};

export default CartPage;