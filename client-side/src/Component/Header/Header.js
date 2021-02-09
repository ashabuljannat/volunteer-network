import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'

const Header = () => {

   const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
 

    return (
        <div>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
            <a  className="navbar-brand" href="/">
            <img src={logo} width="180" height="50" alt="" loading="lazy"/></a>
            <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span  className="navbar-toggler-icon"></span>
            </button>
            <ul  className="navbar-nav ml-auto">
            <li  className="nav-item active">
              <a  className="nav-link" href="/">Home <span  className="sr-only">(current)</span></a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="/">Donation</a>
            </li>
            <li  className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Events
              </a>
              <div  className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a  className="dropdown-item" href="/">Action</a>
                <a  className="dropdown-item" href="/">Another action</a>
                <a  className="dropdown-item" href="/">Something else here</a>
                <a  className="dropdown-item" href="/">Action</a>
                <a  className="dropdown-item" href="/">Another action</a>
                <a  className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="/">Blogs</a>
              </li>
             <h6>{loggedInUser.name}</h6>
             <Link to="/registration"><button  className="btn btn-outline-info ml-1" >Registration</button></Link>
              <button  className="btn btn-outline-dark ml-1" >Admin</button>
          </ul>
          </nav>
         </div>
    );
};

export default Header;