import React from 'react';
import { NavLink } from 'react-router-dom';
import data from "../navs/navs.json";
import logo from "../navs/home.json";

const Header = () => {
  const home = logo.map(nav => <NavLink key={nav.href} to={nav.href}><img className="logo" src={nav.src} /> </NavLink>);
  const navs = data.map(nav => <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>);
  
  return (
    <header>
        <div className='y-wrap y-navs'>{home}{navs}</div>
    </header>
  )
};

export default Header;
