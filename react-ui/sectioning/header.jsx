import React from 'react';
import { NavLink } from 'react-router-dom';
import data from "../navs/navs.json"

const Header = () => {

  const navs = data.map(nav => <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>);
  return (
    <header>
<<<<<<< HEAD
      <div className='y-wrap y-navs'>{navs}</div>
=======
      <div className='y-wrap y-navs' >{navs}</div>
>>>>>>> 547138c (add leanin in addition to leanin props, and fix merge)
    </header>
  )
};

export default Header;
