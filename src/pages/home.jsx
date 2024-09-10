/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Skills from '../components/skills';
import Dev from '../assets/image/REACTJS_DEVELOPER.svg'
import Vector_one from '../assets/image/dmr.svg'
import Group from '../assets/image/Group.svg'
import grained from '../grained'
import LightBulb from '../assets/image/lightbulb.svg'
import Size from '../assets/image/Size7.svg'
import { TypeAnimation } from 'react-type-animation';
import Component from '../assets/image/Component11.svg'
import ProjectsComp from '../components/projects';
import Contact from '../components/contact';
import MessageUs from '../components/messageUs';
import Frame from '../assets/image/frame.svg'
import FrameTwo from '../assets/image/frame2.svg'
import Footer from '../components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from '../components/header';

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    const containerRef = useRef(null);

    const [mode, setMode] = useState(false)
    

    const changeMode = () => {}


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
                    grainHeight: 1,
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

    return (
        <div className=''>
            <Header dev="Nw" test="Let's Talk"/>
            <Parallax className='animation' pages={5.4}>
                <div className=' animation_layer  lg:mb-5 md:h-[850px] h-[600px]'>
                    <div className='  top-4 body absolute'>
                        <div className='home'>                           
                            <div className='block section1 md:flex gap-7 items-center justify-between md:m-[50px]  md:p-0'>
                                <div className='md:mx-0 block mx-3'>
                                    <div>
                                        <p className='text-[#111827] font-semibold text-[17px] lg:text-[20px] capitalize'>
                                            <TypeAnimation
                                                sequence={[
                                                    'Hi, my name is Nweke Favour',
                                                    1000,
                                                    'Hi',
                                                    1000
                                                ]}
                                                cursor={true}
                                                speed={30}
                                                repeat={Infinity}
                                                deletionSpeed={80}
                                            >

                                            </TypeAnimation>
                                        </p>
                                    </div>
                                    <div>
                                        <img className='lg:w-[400px] md:w-[250px] w-[250px]' src={Dev} alt="devstack" />  
                                    </div>
                                    {/* <h1 className=''>{props.title}</h1> */}
                                    {/* <span>{ props.contd }</span> */}
                                    <div className='lg:mt-6 mt-4 flex  items-center lg:justify-start'>
                                        <div>
                                            <button type="button" className="py-2.5 w-[170px]  lg:w-[200px] px-5 me-2 mb-2 text-lg font-medium text-gray-200 rounded-r-lg md:text-[20px] focus:outline-none border-gray-200 hover:bg-[#3C3C3C] hover:text-gray-300    dark:text-gray-400 bg-[#111827] dark:border-gray-600 dark:hover:text-white ">Download CV</button>
                                        </div>
                                    </div>      
                                </div>  
                                <div data-aos="fade-down" className='relative md:mx-0 mx-auto md:w-[424px] w-[60%]'>
                                    <img className='md:w-[424px] w-[350px]' src={Vector_one} alt="" />
                                    <div className='absolute group lg:top-[200px] md:top-[160px] lg:left-[120px] top-[120px] left-[50px] md:left-[90px]'>
                                        <img className='lg:w-[300px] md:[300px] w-[200px]' src={ Group } alt="" />
                                    </div>
                                </div>
                            </div> 
                        </div>                        
                        <div className='relative lg:top-[-10px] top-[110px] lg:my-14'>
                            <div className='z-[-1] md:my-5 my-20 md:mt-[25px] mt-[10rem] absolute block'>
                                <Skills/>
                            </div>
                             <div className='bulb md:hidden'>
                                <img src={ LightBulb } alt="" />
                            </div>
                        </div>                        
                    </div>
                </div>
                <ParallaxLayer  className='bg2' offset={1} speed={0.4}>
                    <div className=' md:px-3 md:py-3 py-6'> 
                        <div >
                            <div className='md-mx-0 mx-3'>
                                <h5 className='lg:text-[40px] text-[30px] font-medium
                                 text-gray-700'>about.</h5>
                            </div>
                            <div  className='md:w-[60%]'>
                                <p className='md:text-[24px] md:mx-0 mx-5 md:my-0 my-4 about text-gray-600 text-[20px]'>I am a frontend developer with 2+ years of experience, specializing in React.js and Node.js. Skilled in JavaScript, HTML, CSS, and backend integration, with expertise in deploying applications and using GitHub for version control.
                                </p>
                            </div>
                        </div>
                        <div className='flex  items-center justify-end'>
                            <div>
                                <div className='md-mx-0 mx-3 flex items-center justify-end'>
                                    <h5 className='lg:text-[40px] text-[30px] font-medium
                                    text-gray-700'>services.</h5>
                                </div>
                                <div className='md:w-[60%] absolute right-[5px]'>
                                    <p className='md:text-[24px] text-end md:mx-0 mx-5 md:my-0 my-4 text-gray-600 service text-[20px]'>
                                        I offer clear technical communication, effective problem-solving, project management, and team collaboration. I can also provide leadership and mentoring, with adaptability to new technologies and flexibility in meeting client needs.
                                    </p>
                                </div>
                            </div>
                        </div>  
                        <div className='relative mainProcess top-[240px] md:top-[150px]'>
                            <div className='md-mx-0 mx-3'>
                                <h5 className='lg:text-[40px] text-[30px] font-medium
                                 text-gray-700'>process.</h5>
                            </div>
                            <div className='md:w-[60%]'>
                                <p className='md:text-[24px] md:mx-0 mx-5 md:my-0 my-4 text-gray-600 text-[18px] process'>I follow a process that includes gathering requirements, defining scope, planning with a roadmap, designing prototypes, developing frontend and backend, conducting thorough testing, deploying the application, and providing post-launch support and improvements.
                                </p>
                            </div>
                        </div>                        
                    </div>
                </ParallaxLayer>
                <ParallaxLayer  offset={2} speed={0.64}>
                    <div ref={containerRef}  id='container'  className='h-[700px] w-[100%] z-1  bg-gray-200'>
                        <div className='text-center md:m-10 m-5'>
                            <p className='md:text-[30px] text-[25px] font-semibold text-gray-800'>
                                Let’s work together and make everything<br/> super unique and super useful.
                            </p>
                        </div>
                        <div  className='md:m-4 m-2 flex items-center justify-center'>
                            <img className='md:w-[600px]' src={ Size } alt="" />
                        </div>
                    </div>
                    {/* contact */}
                    <div className='md:flex block justify-around lg:mx-0 lg:mt-0 mt-[19.5rem]  lg:my-0 md:my-20 my-6 md:mx-6 mx-5 items-center lg:py-14'>
                        <div>
                            <div className='flex items-center justify-start'>
                                <span>
                                    <p className='lg:text-[40px] text-[#111827] text-[30px]'>Have idea about project?</p>
                                </span>
                                <img src={ Frame } alt="fame-two" />
                            </div>
                            <div className='lg:w-[450px]'>
                                <h5 className='lg:text-[20px] text-gray-100'>
                                    {" Let's collaborate to bring your vision to life, leveraging modern technologies and creative solutions."}
                                </h5>
                            </div>
                            <MessageUs/>
                        </div>
                        <div>
                            <img className='lg:w-[300px] w-[250px] mx-auto' src={ FrameTwo } width={300} alt="frame-two" />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className='section3' offset={3} speed={1.4}>
                    <div className='lg:my-5 my-3'>
                        <img src={ Component } alt="" />
                    </div>
                    <div>
                        <ProjectsComp/>
                    </div>                    
                </ParallaxLayer>   
                <ParallaxLayer className='z-[-1] contact' offset={4} speed={0.5}>
                    <div className='contactUs'>
                        <Contact/>
                    </div> 
                    <div className='relative'>
                        <Footer/>
                    </div>
                </ParallaxLayer>             
            </Parallax>
        </div>
    );
};
export default Home;