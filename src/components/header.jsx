import { Navbar } from 'flowbite-react';
import Code from './icons/code';
const header = (props) => {
    return (
        <div>
            <Navbar className='bg-transparent md:p-0 md:border md:border-white md:my-10 my-3  lg:w-[50%] md:w-[60%] mx-auto  md:flex items-center justify-center text-white' fluid rounded>
                <div className=' md:block hidden absolute start-0 lg:top-[-20px] md:top-[-10px]'>
                   <Code/>
                </div>
                <Navbar.Brand className='lg:hidden md:hidden block'>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">{ props.dev }</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className=' text-gray-400 md:flex'>
                    <span className="self-center md:block md:flex items-center justify-center hidden lg:text-[30px] md:px-4 whitespace-nowrap text-xl font-semibold dark:text-white ">
                        <div>
                            <Code/>
                        </div>
                        <div>
                            { props.dev }
                        </div>
                    </span>
                    <Navbar.Link className=' md:border-l-2 lg:text-[20px]  md:py-7 md:ps-5 text-white' href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link className='text-white lg:text-[20px] md:border-l-2 md:py-7 md:ps-5' href="#">About //</Navbar.Link>
                    <Navbar.Link className='text-white lg:text-[20px] md:border-l-2 md:py-7 md:ps-5' href="#">Services</Navbar.Link>
                </Navbar.Collapse>
                <div className='absolute md:block hidden end-0 lg:top-[50px] md:top-[60px]'>
                   <Code/>
                </div>
            </Navbar>
        </div>
    );
};

export default header;