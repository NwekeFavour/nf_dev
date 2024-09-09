import Header from "../components/header";
import Error from '../assets/image/404page.svg'

const shelf = () => {
    return (
        <div>
            <div>
                <Header dev="Nw"/>
            </div>
            <div className="flex items-center sm:my-4 my-3 justify-center">
                <h5 className="sm:text-[40px] text-[20px] text-gray-900 font-semibold">No Books Available Yet!!</h5>
            </div>
            <div className="flex items-center justify-center">
                <img className="sm:w-[320px] w-[200px]" src={Error} alt="" />
            </div>
        </div>
    );
};

export default shelf;