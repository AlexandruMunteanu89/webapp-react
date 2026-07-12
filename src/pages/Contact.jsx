import { Link } from "react-router-dom";


function Contact(){



  return (
<>
      <section> <p>"We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us."</p>

        <Link className="btn btn-primary btn-lg" to="/">
          Explore Movies
        </Link>
      </section>

       <section className="my-5">
        <div className="container">
          <p className="lead">
            If you have any questions, feedback, or just want to say hello, feel free to reach out to us. We value your input and look forward to hearing from you!
          </p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
      <Link className="btn btn-secondary me-3" to="/">Back to Home</Link>

    </>

 )
}
    export default Contact