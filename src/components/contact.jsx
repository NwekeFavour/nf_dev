import MessageUs from './messageUs';
import Frame from '../assets/image/frame.svg'
import FrameTwo from '../assets/image/frame2.svg'

const contact = () => {
    return (
        <div>
            <div className='md:flex block justify-around lg:mx-0  lg:my-0 md:my-20 my-6 md:mx-6 mx-5 items-center lg:py-14'>
                <div>
                    <div className='flex items-center justify-start'>
                        <span>
                            <p className='lg:text-[40px] text-[30px]'>Have idea about project?</p>
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
        </div>
    );
};

export default contact;