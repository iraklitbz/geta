import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
const Navbar = () => {
  const intl = useIntl();
  return ( 
    <ul className="f-header__list flex-grow flex-basis-0 justify-center@md">
      <li className="f-header__item"><Link to="/" className="f-header__link" activeClassName="active">{intl.formatMessage({ id: "home" })}</Link></li>
      <li className="f-header__item"><Link to="/news" className="f-header__link" activeClassName="active">{intl.formatMessage({ id: "news" })}</Link></li>
      <li className="f-header__item"><Link to="/about" className="f-header__link" activeClassName="active">{intl.formatMessage({ id: "aboutus" })}</Link></li>
      <li className="f-header__item"><Link to="/contact" className="f-header__link" activeClassName="active">{intl.formatMessage({ id: "contact" })}</Link></li>
    </ul>
   );
}
 
export default Navbar;