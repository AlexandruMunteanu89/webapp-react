import { Link } from "react-router-dom";

// import del context per il loader
import { useGlobal } from "../contexts/GlobalContext";



function About(){

    // prendiamo dal context il valore che ci serve
    const {setIsLoading} = useGlobal();
    // funzione di disattivazione loader
    const loadingFalse = () => {
    // settiamo il loading attivo
    setIsLoading(false)
    }

    // settiamo il loading attivo
        setIsLoading(true);
        
        setTimeout(loadingFalse, 1500)

  return (

<>
      <section> <p>"Welcome to our Movie Reviews Site! We are passionate about movies and believe in the power of sharing knowledge and experiences through reviews. Our platform allows people to discover new movies, share their thoughts, and connect with fellow movie enthusiasts. Join our community and be part of the conversation!"!"</p>

        <Link className="btn btn-primary btn-lg" to="/">
          Explore Movies
        </Link>
      </section>

      <section>
        <div className="container">
          <p className="lead">
            We are a no-profit organization dedicated to promoting cinema and a love for movies. 
            Our team is made up of passionate film buffs, critics, and educators who are committed to creating a welcoming space for movie lovers of all ages. 
            We believe that films have the power to inspire, educate, and bring people together, and we strive to foster a community where everyone can share their passion for cinema..
          </p>
        </div>
      </section>
      <Link className="btn btn-secondary me-3" to="/">Back to Home</Link>

    </>
 )
}
    export default About