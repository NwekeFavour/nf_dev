/* eslint-disable no-unused-vars */
import React from 'react';

import Marquee from 'react-fast-marquee';
const skills = () => {
    return (
        <div>
            <Marquee  className='w-full' speed={100} autoFill={false} gradient={false}>
                <span className=" md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 text-gray-300 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab text-[16px] fa-html5'></i>
                    </div>
                    <div>
                        HTML
                    </div>
                </span>

                <span className="md:text-xl bg-[#F2F2F2] text-gray-800 text-xs font-medium me-7 px-5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab  text-[16px] fa-css3-alt'></i>
                    </div>
                    <div>
                        CSS
                    </div>
                </span>

                <span className=" md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 text-gray-300 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab  text-[16px] fa-bootstrap'></i>
                    </div>
                    <div>
                        Bootstrap
                    </div>
                </span>

                <span className="md:text-xl text-gray-800 text-xs font-medium me-7 px-5 py-0.5 rounded bg-[#F2F2F2] dark:text-gray-300 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" fill="currentColor"></path></svg>
                    </div>
                    <div>
                        Tailwind CSS
                    </div>
                </span>

                <span className="md:text-xl text-gray-300 text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 dark:text-gray-300 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fas  text-[16px] fa-bolt'></i>
                    </div>
                    <div>
                        Chakra UI
                    </div>
                </span>

                <span className="md:text-xl bg-[#F2F2F2] text-xs font-medium me-7 px-5 py-0.5 rounded text-gray-800 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab  text-[16px] fa-js-square'></i>
                    </div>
                    <div>
                        JavaScript
                    </div>
                </span>


                 <span className=" md:text-xl bg-gray-700 text-gray-300 text-xs font-medium me-7 px-5 py-0.5 rounded  dark:text-gray-300 border border-gray-500 flex
                 items-center justify-center gap-2">
                    <div>
                        <i className='fab  text-[16px] fa-react'></i>
                    </div>
                    <div>
                        JQuery
                    </div>
                </span>                

                <span className=" md:text-xl bg-[#F2F2F2] text-gray-800 text-xs font-medium me-7 px-5 py-0.5 rounded  dark:text-gray-800 border border-gray-500 flex
                 items-center justify-center gap-2">
                    <div>
                        <i className='fab  text-[16px] fa-react'></i>
                    </div>
                    <div>
                        React JS
                    </div>
                </span>

                <span className=" md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 text-gray-200 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab text-[16px] fa-vuejs'></i>
                    </div>
                    <div>
                        Vue JS
                    </div>    
                </span>

                <span className="md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-[#F2F2F2] text-gray-800 border border-gray-500 flex tems-center justify-center gap-2">
                    <div>
                        <i className='fab text-[16px] fa-node-js'></i>
                    </div>
                    <div>
                        Node JS
                    </div>
                </span>

                <span className=" md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 text-gray-200 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500"><path fill="currentColor" d="M208 96V32a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 88H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 232v-64h64a8 8 0 0 0 5.31-14L149 104h51a8 8 0 0 0 8-8Zm-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V104h61Zm13-64h-61L77 40h115Z"></path></svg>
                    </div>
                    <div>
                        Framer Motion
                    </div>
                </span>

                <span className="md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-[#F2F2F2] text-gray-800 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab text-[16px] fa-github'></i>
                    </div>
                    <div>
                        Github
                    </div>
                </span>

                <span className="md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 text-gray-200 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500"><path fill="currentColor" fillRule="evenodd" d="m256 48l240 416H16Z"></path></svg>
                    </div>
                    <div>
                        Vercel
                    </div>
                </span>

                <span className="md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-[#F2F2F2] text-gray-700 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab text-[16px] fa-figma'></i>
                    </div>
                    <div>
                        Figma
                    </div>
                </span>

                <span className="md:text-xl text-xs font-medium me-7 px-5 py-0.5 rounded bg-gray-700 text-gray-200 border border-gray-500 flex items-center justify-center gap-2">
                    <div>
                        <i className='fab text-[16px] fa-github'></i>
                    </div>
                    <div>
                        Vite
                    </div>
                </span>
            </Marquee>
        </div>
    );
};

export default skills;