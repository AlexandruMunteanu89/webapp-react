import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // per link attivi
import { Link } from "react-router-dom"

function Header() {

 const menu = [
    { path: '/', label: 'Home' },
    { path: '/movies', label: 'Movies' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // stopa aggiornamento
    if(searchTerm.trim() !== '') {
        
        navigate(`/search?query=${searchTerm}`); // ti porta alla pagina search
        setSearchTerm(''); // svuota l'input 
    }
  }
  
  return (
    <header className="bg-light border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-2">
        
        {/* 1. BRAND - stanga */}
        <a className="navbar-brand fw-semibold me-4" href="#">
          Movies Reviews
        </a>

        {/* 2. MENIU - mijloc */}
        <ul className="navbar-nav d-flex flex-row gap-3 mb-0 me-auto">
          {menu.map((item) => (
            <li className="nav-item" key={item.path}>
              <NavLink 
                className={({isActive}) => 
                  `nav-link px-2 ${isActive ? 'fw-bold text-success' : 'text-dark'}`
                } 
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
            <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{width: '180px'}}
              />
              <button className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        
    </header>
  )
}

export default Header