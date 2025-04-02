// index.css'
import '../styles/index.css'

//components
import {FooterWeb} from "./FooterWeb";
import {HomeContainer} from "./HomeContainer";
import {Navbar} from "./Navbar";

export const Home = () =>{
    return (
        <div className="container-fluid p-0">
            <Navbar/>
            <div className="container">
                <HomeContainer/>
            </div>
            <FooterWeb/>
        </div>
    );
}