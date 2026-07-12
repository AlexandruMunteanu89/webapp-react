import { Link } from "react-router-dom";


export default function Home() {

  return (
    <>

      <section> <p>"Welcome to the Movie Reviews Site" content="Discover and share your favorite movies with our community. Read reviews, rate movies, and connect with fellow movie lovers. Start your journey today!"</p></section>

        <Link className="btn btn-primary btn-lg" to="/">
          Explore Movies
        </Link>
      
        <div>
          <img src="https://res.cloudinary.com/jerrick/image/upload/v1677326270/63f9f7be3abad9001c86c281.png" alt="Movie theater" className="img-fluid rounded shadow"/>
        </div>
      <section>
        <div className="container">
          <p className="lead">Join our community and start sharing your movie reviews today! You can leave public reviews, rate movies, and connect with other film lovers. Be respectful and considerate in your interactions to foster a positive environment for everyone..</p>
        </div>
      </section>
    </>

  )
}