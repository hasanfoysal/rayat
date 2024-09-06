
import {  Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const nav = <>
   <NavLink to='/'><li className="text-l hover:text-green-400 lg:text-white"><a>Home</a></li></NavLink>
   <NavLink to='/about'><li  className="text-l hover:text-green-400 lg:text-white"><a>About</a></li></NavLink>
   <NavLink to='/skills'><li  className="text-l hover:text-green-400 lg:text-white"><a>Skills</a></li></NavLink>
   <NavLink to='/projects'><li  className="text-l hover:text-green-400 lg:text-white"><a>Projects</a></li></NavLink>
   <NavLink to='/contact'><li  className="text-l hover:text-green-400 lg:text-white"><a>Contact</a></li></NavLink>
  
  </>
 
    return (
        <div>
            <div className="navbar lg:max-w-[1400px] bg-black text-white   mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>
    <h1 className="btn btn-ghost lg:text-3xl text-2xl  text-white font-bold">HOSSAIN <span className="text-4xl text-green-400 font-extrabold">.</span></h1>
  </div>
  
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nav}
    </ul>
  </div>
  <Link to='/contact'><h1 className="bg-green-400 shadow-sm   shadow-green-400  p-2 px-3 text-black font-semibold rounded-full">Hire Me</h1></Link>
    {/* <Link to='/contact'><h1 className="bg-green-400 shadow-sm   shadow-green-400  p-2 px-3 text-black font-semibold rounded-full">Hire Me</h1></Link> */}
  </div>
</div>

        </div>
    );
};

export default Navbar;