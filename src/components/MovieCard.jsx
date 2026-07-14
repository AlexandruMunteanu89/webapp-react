import { Link } from "react-router-dom"

function MovieCard({ movie }){

    const { title, director, genre, release_year, abstract, image, id} = movie;

    return (
        <div className="card h-100 d-flex flex-column mb-4">
            {image && <img src={image} className="card-img-top object-fit-cover" alt={title} style={{ height: '450px' }} />}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{genre}</p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-warning mt-auto">See more</Link>
            </div>
        </div>
    )
}
export default MovieCard