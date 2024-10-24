import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='py-5 bg-green-700 '>
        <div className="container">
            <div className="menuRow flex justify-between items-center text-zinc-50 font-semibold">
                <div className="menuImage w-14"><img src="images/logo.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-11'>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300' href="#">Home</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">About Us</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Blog</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Gallery</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Address</a></li>
                    </ul>
                </div>
                <div className="menuImage w-9"><img src="images/headIcon.png" alt="logo" /></div>
            </div>
        </div>
      </nav>
            <h1 className='container text-sky-600 font-bold text lg mt-4'> Hi , it's Mehedi. How can i help you?</h1>
    </>
  )
}

export default Navbar
