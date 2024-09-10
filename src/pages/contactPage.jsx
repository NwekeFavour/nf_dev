import Contact from "../components/contact";
import Header from "../components/header";
import 'aos/dist/aos.css'
import Footer from "../components/footer";
function contact() {
    return (
        <div>
            <div>
                <Header dev="Nw"/>
            </div>
            <Contact/>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default contact;