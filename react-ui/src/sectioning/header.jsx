import React from 'react';
import { NavLink } from 'react-router-dom';
import data from "../navs/navs.json";
import logo from "../navs/home.json";

const Header = () => {
  console.log(logo[0].src)
  const home = logo.map(logo => <NavLink key={logo.href} to={logo.href}><img src={logo.src} /> </NavLink>);
  const navs = data.map(nav => <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>);
  
  return (
    <header>
      <div className='y-wrap y-navs'>{home}{navs}</div>
    </header>
  )
};

export default Header;
