'use client';
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { FiShoppingCart } from "react-icons/fi"; // Import a cart icon from react-icons

const Header = () => {
     const router = useRouter();

     return (
          <header className="flex items-center justify-between p-4 bg-gray-600 text-white">
               {/* Logo  */}
               <div className="flex items-center space-x-2 px-3">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={2}
                         stroke="currentColor"
                         className="w-8 h-8"
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
                         />
                    </svg>
               </div>

               {/* Center navigation buttons */}
               <nav className="space-x-4">
                    <button className="hover:text-gray-400" onClick={() => {
                         router.push('/');
                    }}>Products</button>
                    <button className="hover:text-gray-400">New Launch</button>
                    <button className="hover:text-gray-400">About Us</button>
                    <button className="hover:text-gray-400">Contact</button>
               </nav>

               {/* Avatar and Cart on the right */}
               <div className="flex items-center space-x-4">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth={2}
                         stroke="currentColor"
                         className="w-8 h-8"
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                         />
                    </svg>

                    <button className="relative bg-white p-2 rounded-2xl" onClick={() => {
                         router.push('/cart');
                    }}>
                         <span className="">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40.998" height="40.34"><g fill="#1a171b"><path d="M47.273 0h-6.544a.728.728 0 0 0-.712.58L38.63 7.219H.727a.727.727 0 0 0-.7.912l4.6 17.5c.006.021.019.037.026.059a.792.792 0 0 0 .042.094.747.747 0 0 0 .092.135.831.831 0 0 0 .065.068.626.626 0 0 0 .167.107.285.285 0 0 0 .045.029l13.106 5.145-5.754 2.184a4.382 4.382 0 1 0 .535 1.353l7.234-2.746 6.866 2.7A4.684 4.684 0 1 0 27.6 33.4l-5.39-2.113 13.613-5.164c.013-.006.021-.016.033-.021a.712.712 0 0 0 .188-.119.625.625 0 0 0 .063-.072.654.654 0 0 0 .095-.135.58.58 0 0 0 .04-.1.73.73 0 0 0 .033-.084l5.042-24.137h5.953a.728.728 0 0 0 0-1.455zM8.443 38.885a3.151 3.151 0 1 1 3.152-3.15 3.155 3.155 0 0 1-3.152 3.15zm23.1-6.3a3.151 3.151 0 1 1-3.143 3.149 3.155 3.155 0 0 1 3.148-3.152zM25.98 8.672l-.538 7.3H14.661l-.677-7.295zm-.645 8.75-.535 7.293h-9.328l-.672-7.293zM1.671 8.672h10.853l.677 7.3h-9.61zm2.3 8.75h9.362l.677 7.293H5.892zM20.2 30.5 9.175 26.17H31.6zm14.778-5.781h-8.722l.537-7.293h9.7zm1.822-8.752h-9.9l.537-7.295h10.889z" /><circle cx="8.443" cy="35.734" r=".728" /><circle cx="31.548" cy="35.734" r=".728" /></g></svg>
                         </span>
                    </button>
               </div>
          </header>
     );
};

export default Header;
