import React from "react";
import { useEffect } from "react"; 
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const MainLayout = ({children, className}) => {
  useEffect(() => {
    document.getElementsByTagName("html")[0].className += " js";
  }, []);
  return ( 
   <div className={`main ${className || ''}`}>
     <Header />
     { children }
     <Footer />
   </div>
   );
}
 
export default MainLayout;