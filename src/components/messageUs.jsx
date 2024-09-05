import FrameThree from '../assets/image/frame15.svg'

const messageUs = () => {
    return (
        <div>
            <div className='flex items-center justify-end'> 
                <button className='rounded-full bg-gray-800 text-gray-100 py-2.5 px-5 me-2 mb-2 text-lg font-medium focus:outline-none  border border-gray-200 transition-transform dark:border-gray-600 message'>send us message</button>
                <div>
                    <img className='lg:w-[30px] w-[30px]' src={ FrameThree } alt="" />
                </div>
            </div>
        </div>
    );
};

export default messageUs;