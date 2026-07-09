import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // per link attivi
import { Link } from "react-router-dom"

function Header() {

 const menu = [
    {
      id: 1,
      label: 'Home',
      path: '/'
    },
    {
      id: 2,
      label: 'Movies',
      path: '/movies'
    },
    {
      id: 3,
      label: 'About',
      path: '/about'
    },
    {
      id: 4,
      label: 'Contact',
      path: '/contact'  
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // stopa aggiornamento
    if(searchTerm.trim() !== '') {
        console.log("Cerchi:", searchTerm);
        navigate(`/search?query=${searchTerm}`); // ti porta alla pagina search
        setSearchTerm(''); // svuota l'input 
    }
  }
  
  return (
    <header>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Movies Reviews</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-menu"
            aria-controls="main-menu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              
              {
              menu.map(item =>  (
                  <li key={item.id} className="nav-item"> 
                    <NavLink className="nav-link" to={item.path}>{item.label}</NavLink>
                  </li>
                ))
              }          

            </ul>
            <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header