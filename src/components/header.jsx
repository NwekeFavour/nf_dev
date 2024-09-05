/* eslint-disable react/prop-types */
import { Navbar, NavbarBrand } from 'flowbite-react';
import '../index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = (props) => {

    const [navigation, hideNavigation] = useState(false)
    
    const toggleNavigation = (e) => {
        e.preventDefault()
        hideNavigation(true)
        if (navigation === true) {
           hideNavigation(false)
        }


    }

    return (
        <div>
            <Navbar className=' bg-transparent lg:mx-3 my-3' fluid  rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <span className="self-center lg:ms-0 ms-2 whitespace-nowrap text-xl font-semibold text-[#111827] lg:text-[40px]">{ props.dev }</span>
                </NavbarBrand>
                <div className="flex md:order-3">
                    <div className='lg:flex md:hidden hidden items-center mx-3'>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200  hover:text-cyan-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase leading-snug">Resume</button>
                    </div>
                    {/* <NavbarToggle /> */}
                    <span className="md:hidden flex items-center mx-2 capitalize text-[#111827] font-semibold"> menu</span>
                    <button onClick={toggleNavigation} data-testid="flowbite-navbar-toggle" className="block  items-center rounded-lg p-2 text-sm text-black focus:outline-none  dark:text-gray-400 md:h-[40px] h-[47px] dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:block md:w-[50px] lg:hidden  w-[45px] pointer-events-auto">
                        <span className="sr-only">Open main menu</span>
                        <span className={`w-[60%] block  mx-auto ${navigation ? 'barOne' : ''} bg-[#111827] h-[2px]`}></span>
                        <span className={`bar ${navigation ? 'hidden' : 'block'} my-2 w-full h-[2px]`}></span>
                        <span className={`w-[60%] ${navigation ? 'barTwo': ''} block ms-1 bg-[#111827] h-[2px]`}></span>
                    </button>
                </div>
                <div className={`lg:flex md:w-auto w-full ${navigation ? 'block' : 'hidden'}`} data-testid="flowbite-navbar-collapse">
                    <div className="w-full md:w-auto md:flex">
                        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 bg-cyan-700  lg:text-[20px] font-semibold md:bg-transparent  text-[#111827]" to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"#"}>Shelf</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"#"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;