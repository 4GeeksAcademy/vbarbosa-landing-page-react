// index.css'
import '../styles/index.css'

export default function Navbar() {
    return (
        <div className="container-fluid mb-4 m-0 p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            <a className="nav-link" href="#about">About</a>
                            <a className="nav-link" href="#services">Services</a>
                            <a className="nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav> 
        </div>
    );
}