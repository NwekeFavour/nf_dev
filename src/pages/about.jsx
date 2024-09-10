/* eslint-disable no-unused-vars */
import React, {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Abouts from '../assets/image/About_me.svg'
import Profile from '../assets/image/profile.svg'
import Header from '../components/header';
import 'aos/dist/aos.css'
import grained from '../grained';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Aos from 'aos';
const About = () => {
    const containerRef = useRef(null);
    const [nav, setNav] =  useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    useEffect(() => {
        const applyGrain = () => {
            if (containerRef.current) {
                const options = {
                    animate: true,
                    patternWidth: 377.81,
                    patternHeight: 100,
                    grainOpacity: 0.14,
                    grainDensity: 1,
                    grainWidth: 1,
                    grainHeight: 1  ,
                };
                grained(containerRef.current, options);
            }
        };

        // Delay the effect slightly to ensure the DOM is fully ready
        const timeoutId = setTimeout(() => {
            applyGrain();
        }, 100); // Adjust delay if necessary

        // Cleanup on unmount
        return () => clearTimeout(timeoutId);
    }, []);

    function sidebarToggle() {
        setNav(!nav)
    }

    return (
        <div className='h-screen' >
            <div ref={containerRef}  id='set'>
                <div className='relative'>
                    <Header dev="Nw"/>
                </div>            
                <div className='flex md:mt-10 items-center justify-center'>
                    <h5 className='text-gray-100 font-semibold md:text-[40px] '>
                        About Us
                    </h5>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <div>
                        <Link className='text-gray-100 md:text-[20px]' to={"/"}>Home</Link>
                    </div>
                    <div className='text-gray-100'>
                        {"/"}
                    </div>
                    <div className=''>
                        <Link className='text-gray-100 md:text-[20px]' to={"/about"}>About</Link>
                    </div>
                </div>
                <div className='sm:flex items-center sm:mx-2 md:my-5 gap-x-7 justify-around'>
                    <div className='md:w-[40%] w-full md:mx-0  md:my-0 my-4'>
                        <div className='md:my-3 md:mx-0 mx-3'>
                            <img src={ Abouts} className='md:w-[200px] w-[160px]' alt="" />
                            <div className="md:border-b-4 border-b-2 border-gray-400 mt-2 md:mt-2 w-24"></div>
                        </div>
                        <div className='relative md:mx-0 mx-3'>
                            <p className='text-gray-50 md:text-[18px] text-[20px]'>
                                My name is Nweke Favour, and I’m a frontend developer with over 2years+ of experience specializing in React.js and Node.js. I’m skilled in JavaScript, HTML, CSS, backend integration, and responsive design. I have experience deploying applications, optimizing performance, and using version control with GitHub.
                            </p>
                        </div>
                        <div className='relative md:my-3 my-2 md:mx-0 mx-3'>
                            <button type="button" className="py-2.5 w-[120px] md:w-[120px] lg:w-[140px] md:px-5 px-6 me-2 mb-2 text-lg font-medium text-gray-900 md:text-[20px] focus:outline-none border-gray-200 hover:bg-[#3C3C3C] hover:text-gray-300    dark:text-gray-400 bg-[#8C8C8C] dark:border-gray-600 dark:hover:text-white ">Resume</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className='relative  md:w-1/3 flex items-center justify-center'>
                        <img src={ Profile } className='sm:w-[400px] w-[320px]' alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Contact/>
            </div>
            <div className='flex items-center md:my-3    gap-x-6 justify-center'>
                <div>
                    <a href="https://github.com/NwekeFavour" className='cursor-pointer'>
                        <i className="text-[#D2B48C] md:text-[30px] text-[24px] fa-brands fa-square-github"></i>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/favour-nweke-42209425a/" className='cursor-pointer'>
                        <i className="text-[#D2B48C] md:text-[30px] text-[24px] fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div>
                    <a href="https://x.com/Nweke19_" className='cursor-pointer'>
                        <i className="text-[#D2B48C] md:text-[30px] text-[24px]  fa-brands fa-x-twitter"></i>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;