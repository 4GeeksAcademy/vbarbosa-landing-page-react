// index.css'
import '../styles/index.css'

export default function Card() {
    return (
        <div className="card text-center mb-3">
            <img src="https://picsum.photos/500/325?random=1" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text p-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta unde aperiam tenetur.</p>
            </div>
            <div className="card-footer bg-light">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}