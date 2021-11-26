import React from "react";
import { Link } from "gatsby";
const Navbar = () => {
  return ( 
    <ul className="f-header__list flex-grow flex-basis-0 justify-center@md">
      <li className="f-header__item"><Link to="/" className="f-header__link" activeClassName="active">Home</Link></li>
      <li className="f-header__item"><Link href="#0" className="f-header__link" activeClassName="active">News</Link></li>
      <li className="f-header__item"><Link href="/about" className="f-header__link" activeClassName="active">About us</Link></li>
      <li className="f-header__item"><Link href="/contact" className="f-header__link" activeClassName="active">Contact</Link></li>
    </ul>
   );
}
 
export default Navbar;