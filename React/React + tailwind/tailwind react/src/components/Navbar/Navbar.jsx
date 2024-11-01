import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=" flex p-5 justify-between items-center h-24 mx-auto px-4">
      <div className="logo text-white font-bold text-3xl">Sam.</div>
      <ul className=" text-white gap-3 hidden md:flex">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose className='text-white' size={20}/> : <AiOutlineMenu className='text-white' size={20}/>}
      </div>
      <div className={nav ? 'text-white fixed left-0 top-0 h-full w-[50%] border-r border-r-gray-700 bg-gray-700 ease-in-out duration-700' : 'fixed left-[-100%]'}>
      <div className="logo text-white font-bold text-3xl p-4">Sam.</div>

        <ul className='pt-24 uppercase'>
        <li className='p-4 border-b border-b-black'>Home</li>
        <li className='p-4 border-b border-b-black'>Company</li>
        <li className='p-4 border-b border-b-black'>Resources</li>
        <li className='p-4 border-b border-b-black'>Blog</li>
        <li className='p-4 border-b border-b-black'>About</li>
        <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
