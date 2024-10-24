import React from 'react'

const Navbar5 = () => {
  return (
    <>
      <nav className='py-5 mt-12 bg-[#6EACDA] '>
        <div className="container">
            <div className="menuRow flex justify-between items-center text-zinc-50 font-semibold">
                <div className="menuImage w-14"><img src="images/logo5.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-11'>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300' href="#">Home</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">About Us</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Blog</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Gallery</a></li>
                        <li><a className='hover:text-sky-400 hover:bg-white transition duration-300'href="#">Address</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar5