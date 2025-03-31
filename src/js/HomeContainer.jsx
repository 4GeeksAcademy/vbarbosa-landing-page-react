// index.css'
import '../styles/index.css'

//components
import Jumbotron from "./Jumbotron";
import Card from "./Card";

export default function HomeContainer() {
    return (
        <div className="container w-85">
            <div className="row">
                <div className="col-12">
                    <Jumbotron/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card/>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Card/>
                </div>
            </div>
        </div>
    );
}