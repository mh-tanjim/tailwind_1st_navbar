import React from 'react'

const Navbar3 = () => {
  return (
    <>
      <nav className='py-5 mt-12 bg-[#C75B7A] '>
        <div className="container">
            <div className="menuRow flex justify-between items-center text-zinc-50 font-semibold">
            <input class="placeholder-shown:border-[#98DED9] bg-transparent  ..." placeholder="Search here" />
                <div>
                    <ul className='flex gap-11'>
                        <li><a className='hover:text-white hover:bg-[#FCDE70] transition duration-300' href="#">Home</a></li>
                        <li><a className='hover:text-white hover:bg-[#FCDE70] transition duration-300'href="#">About Us</a></li>
                        <li><a className='hover:text-white hover:bg-[#FCDE70] transition duration-300'href="#">Blog</a></li>
                        <li><a className='hover:text-white hover:bg-[#FCDE70] transition duration-300'href="#">Gallery</a></li>
                        <li><a className='hover:text-white hover:bg-[#FCDE70] transition duration-300'href="#">Address</a></li>
                    </ul>
                </div>
                <div className="menuImage w-9"><img src="images/logo3.png" alt="logo" /></div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar3
