/* eslint-disable no-unused-vars */
import React from 'react';

const home = (props) => {
    return (
        <div className='home'>
            <div className='md:m-[100px] md:w-[500px] '>
                <div className='text-purple-100 font-[400]   md:text-[50px]'>
                    <h1 className=''>{props.title}</h1>
                    <span>{ props.contd }</span>
                </div>
                <div className='md:w-[400px]'>
                    <p className='text-gray-400'>Specializing in creating responsive, visually appealing web interfaces with clean, efficient code using modern web technologies.</p>
                </div>
                <div>
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-gray-900 md:text-[20px] focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700    dark:text-gray-400 bg-[#8C8C8C] dark:border-gray-600 dark:hover:text-white ">Resume</button>
                </div>
            </div> 
        </div>
    );
};

export default home;