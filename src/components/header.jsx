/* eslint-disable react/prop-types */
import { Navbar, NavbarBrand } from 'flowbite-react';
import '../index.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTrail, a } from 'react-spring';

const Trail = ({ navigation, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: navigation ? 1 : 0,
        x: navigation ? 0 : 20,
        height: navigation ? 40 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    return (
        <div className='trail'>
            {trail.map(({ height, x, opacity }, index) => (
            <a.div
                key={index}
                style={{
                opacity,
                transform: x.to(x => `translate3d(0,${x}px,0)`),
                }}
            >
                <a.div style={{ height }}>
                {items[index]}
                </a.div>
            </a.div>
            ))}
      </div>
    )
  }

const Header = (props) => {

    const [navigation, hideNavigation] = useState(false)
    
    const toggleNavigation = () => {
        hideNavigation(!navigation);
    }

    const container = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1, // Stagger effect for children
          },
        },
      };

    const wave = {
        hidden: { y: 0 },
        visible: {
          y: [0, -20, 0], // Creates a wave motion
          transition: {
            repeat: Infinity,
            repeatDelay: 0.5,
            staggerChildren: 0.1,
          },
        },
    };

    return (
        <div>
            <Navbar className=' bg-transparent lg:mx-3 mx-5 my-3' fluid  rounded>
                <NavbarBrand href="">
                    <span className="self-center lg:ms-0 ms-2 whitespace-nowrap font-semibold text-[#111827] lg:text-[40px] text-[30px] brand">
                        <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'flex' }}
                        >
                            {`${props.dev}`.split('').map((char, index) => (
                                <motion.span key={index} variants={wave} style={{ display: 'inline-block' }}>
                                {char}
                                </motion.span>
                            ))}
                        </motion.h1>    
                    </span>
                </NavbarBrand>
                <div className="flex md:order-3">
                    <div className='lg:flex md:hidden hidden items-center mx-3'>
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-gray-300 rounded-lg border border-gray-200  hover:text-cyan-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 uppercase leading-snug cursor-pointer">Resume</button>
                    </div>
                    {/* <NavbarToggle /> */}
                    <span className="md:hidden flex items-center mx-2 capitalize text-[#111827] font-semibold"> menu</span>
                    <button onClick={() => toggleNavigation(state => !state)} data-testid="flowbite-navbar-toggle" className={`${navigation ? 'hidden navbtn': 'block'}   items-center rounded-lg p-2 text-sm  text-black focus:outline-none  dark:text-gray-400 md:h-[40px] h-[47px] dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:block md:w-[50px] lg:hidden  w-[45px] pointer-events-auto`}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-10 h-8" aria-hidden="true" fill="#111827" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex md:w-auto w-full ${navigation ? 'block' : 'hidden'}`} data-testid="flowbite-navbar-collapse">
                    <div className="w-full md:w-auto  md:flex">
                        <ul className="mt-4 navi z-10 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            <div className='navbars flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 lg:text-[20px] font-semibold md:bg-transparent  text-[#111827] home" to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 hover:bg-gray-50 dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white  md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 hover:bg-gray-50  dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white  md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"/lib/shelf"}>Shelf</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 hover:bg-gray-50  dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"#"}>Contact</Link>
                                </li>
                            </div>
                            <Trail navigation={navigation} className="relative trail">
                                <div className='closebtn absolute right-0 '>
                                    {
                                        navigation &&
                                        (
                                            <button onClick={toggleNavigation} data-testid="flowbite-navbar-toggle" className="block  items-center rounded-lg p-2 text-sm text-black focus:outline-none  dark:text-gray-400 md:h-[40px] h-[47px] dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:block md:w-[50px] lg:hidden  w-[45px] pointer-events-auto">
                                                <i className='fas fa-xmark text-gray-800 font-semibold text-[20px]'></i>
                                            </button>
                                        )
                                    }                                    
                                </div>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 lg:text-[20px] font-semibold md:bg-transparent  text-[#111827]" to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 hover:bg-gray-50 dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white  md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 hover:bg-gray-50  dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white  md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"/lib/shelf"}>Shelf</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 pl-3 pr-4 md:p-0 hover:bg-gray-50  dark:text-gray-400 lg:text-[20px] font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-[#111827]" to={"#"}>Contact</Link>
                                </li>
                                <div className='flex items-center gap-4 justify-end mx-2'>
                                    <div>
                                        <a href="https://github.com/NwekeFavour" className='cursor-pointer'>
                                            <i className="text-gray-800 md:text-[20px] fa-brands fa-square-github"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/favour-nweke-42209425a/" className='cursor-pointer'>
                                            <i className="text-gray-800 md:text-[20px] fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://x.com/Nweke19_" className='cursor-pointer'>
                                            <i className="text-gray-800 md:text-[20px]  fa-brands fa-x-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </Trail>
                        </ul>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;