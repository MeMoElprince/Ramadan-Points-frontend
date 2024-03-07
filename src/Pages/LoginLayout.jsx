import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Login({children}) {
  return (
    <section className='mainPage pb-10 min-h-screen text-white flex flex-col'>
      <header className='ml-6 lg:ml-14 flex justify-between items-center'>
        <div className='pr-8'>
          <Link to='/'>
            <img src="Logo.png" className='w-28 h-28' alt="Logo" />
          </Link>
        </div>
        <div className='bg-[#CBA947] p-3 rounded-lg'>
          <IoIosArrowBack color='black' size={30}/>
        </div>
      </header>
      <main className='loginbg max-w-[500px] self-center flex-grow h-full mainMargin  flex justify-center items-center'>
        {children}
      </main>
    </section>
  )
}
