import React from 'react'

const Navbar4 = () => {
  return (
    <>
      <nav className='py-5 mt-12 bg-[#A04747]'>
        <div className="container">
            <div className="menuRow flex justify-between items-center text-zinc-50 font-semibold">
                <div className="menuImage w-14"><img src="images/logo4.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-11'>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300' href="#">Home</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">About Us</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Blog</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Gallery</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Address</a></li>
                    </ul>
                </div>
                <div className="menuImage w-9"><h1 className='font-bold text-2xl text-[#F6E96B]'>Google</h1></div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar4