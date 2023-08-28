import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../navs/navs.json';
import logo from '../navs/home.json';
import { UseSelector, useSelector } from 'react-redux';

// const Header = () => {
//   console.log(logo[0].src)
//   const home = logo.map(logo => <NavLink key={logo.href} to={logo.href}><img src={logo.src} /> </NavLink>);

//   const navs = data
//     .map( nav => {
//       if(isLoggedIn === true) {
//         return <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>
//       } else {
//         if(nav.name === "Account" && nav.name === "Feedback" && nav.name === "Create Game" && nav.name === "Play" && nav.name === "Support") {
//           return
//         } else {
//           return <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>
//         }
//         }
//     });
//   return (
//     <header>
//       <div className='y-wrap y-navs'>{home}{navs}</div>
//     </header>
//   )
// };

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return <div className="header">
    {!isLoggedIn && <ul> 
  <li><NavLink> Sign-Up</NavLink></li>
  <li><NavLink>Sign In </NavLink></li>
  <li><NavLink> About Us</NavLink></li>
  <li><NavLink> Rules </NavLink></li></ul>}
  
  {isLoggedIn && 
    <ul>
      <li><NavLink> Feedback </NavLink></li>
      <li><NavLink> Account </NavLink></li>
      <li><NavLink> Play </NavLink></li>
      <li><NavLink> Create Game </NavLink></li>
      <li><NavLink> Support </NavLink></li>
    </ul>}
  </div>;
};
export default Header;
