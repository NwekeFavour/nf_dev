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
            <Navbar className='bg-transparent lg:mx-3 my-3' fluid  rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <span className="self-center lg:ms-0 ms-2 whitespace-nowrap text-xl font-semibold text-white">{ props.dev }</span>
                </NavbarBrand>
                <div className="flex md:order-3">
                    <div className='w-full md:hidden lg:flex hidden justify-center'>
                        <i className='fa fa-envelope flex items-center text-[20px] text-white'></i>
                    </div>
                    <div className='lg:flex md:hidden hidden items-center mx-3'>
                        <span className='text-white w-[90px]'>{ props.test }</span>
                    </div>
                    {/* <NavbarToggle /> */}
                    <span className="md:hidden flex items-center mx-2 capitalize text-white"> menu</span>
                    <button onClick={toggleNavigation} data-testid="flowbite-navbar-toggle" className="block items-center rounded-lg p-2 text-sm text-black focus:outline-none dark:text-gray-400 md:h-[40px] h-[47px] dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:block md:w-[50px] lg:hidden  w-[45px]">
                        <span className="sr-only">Open main menu</span>
                        <span className="w-[60%] block mx-auto bg-white h-[2px]"></span>
                        <span className="bar my-2 w-full h-[2px]"></span>
                        <span className="w-[60%] block ms-1 bg-white h-[2px]"></span>
                    </button>
                </div>
                <div className={`lg:flex md:w-auto w-full ${navigation ? 'block' : 'hidden'}`} data-testid="flowbite-navbar-collapse">
                    <div className="w-full md:w-auto md:flex">
                        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 bg-cyan-700 dark:text-white lg:text-[18px] md:bg-transparent md:text-cyan-700 text-white" to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 lg:text-[18px] dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-white" to={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 lg:text-[18px] dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-white" to={"#"}>Shelf</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 lg:text-[18px] dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-white" to={"#"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;