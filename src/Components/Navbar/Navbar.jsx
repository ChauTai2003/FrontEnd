import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../contexts/StoreContext';
import foodLogo from '../../assets/food-logo-template.png';  

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  }

  return (
    <div className='navbar'>
      

<Link to='/'>
  <img src={foodLogo} alt="Logo" className="logo" />
</Link>

      <div className={`navbar-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <li>
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          </li>
          <li>
            <a href='#app-download' onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>Mobile</a>
          </li>
          <li>
            <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? 
          <button onClick={() => setShowLogin(true)}>Sign in</button> 
          : 
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
        <button className="navbar-menu-toggle" onClick={toggleMobileMenu}>
          <img src={assets.menu_icon} alt="Menu" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
