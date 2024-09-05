/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import LaptopEcom from '../assets/image/laptop-ecom.png'
import Schoolville from '../assets/image/Schoolville.png'
import PGQ from '../assets/image/pigin.png'
import Tesla from '../assets/image/tesla.png'
class projects extends Component {
    state= {
        project : [
            {
                id:0, name: "Laptop Ecommerce App", description:"The laptop-ecom project is an e-commerce site for laptops with a catalog, cart, and authentication.", url:LaptopEcom
            },
            {
                id:1, name:"SchoolVille Web App Clone", description:"The Schoolville Webapp features a clean, responsive landing page showcasing modern frontend technologies and a professional design.", url:Schoolville
            },
            {
                id:2, name:"Pidgin Quote Generator", description:"The Pidgin Quote Generator is a web app that delivers random, engaging Pidgin quotes.", url:PGQ
            },
            {
                id:3, name:"Tesla Web-App(EV Web App)", description:"The Tesla Credit Landing Page is a sleek, responsive site showcasing Tesla's credit offerings with modern web techniques.",url: Tesla
            }
        ]
    }
    render() {
        return (
            <div>
                <div className='md:my-5 md:mx-4 mx-5'>
                    <h2 className='lg:text-[42px] text-[24px] font-bold'>Recent Projects</h2>
                    <div className='bg-gray-700 md:w-[100px] w-[50px] h-[2px] md:h-[3px]'>
                    </div>
                </div>
                <div className='hidden md:mx-8 projects md:grid grid-cols-2 justify-self-center gap-4'>
                    {
                        this.state.project.map((Growth) => (
                            <div className='flex flex-colrounded-lg shadow md:flex-row md:max-w-xl' key={Growth.id}>
                                <div className='flex items-center'>
                                    <div className='md:mx-5'>
                                        <div>
                                            <h4 className='lg:text-[25px] md:text-[20px] text-gray-800 font-semibold'>{Growth.name}</h4>
                                        </div>
                                        <div className='lg:text-[18px] text-[17px] opacity-[0.7] text-gray-800'>{ Growth.description}</div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='w-full h-full object-cover' src={Growth.url} alt="" />
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center justify-center">
                    <div className='md:hidden '>
                        {
                            this.state.project.map((Growth) => (
                                <div key={Growth.id} className="max-w-sm md:mx-0 mx-5 md:my-0 my-4 rounded-lg shadow ">
                                    <div className='flex items-center justify-center'>
                                        <img className='w-full h-full object-cover' src={Growth.url} alt="" />
                                    </div>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Growth.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Growth.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default projects;