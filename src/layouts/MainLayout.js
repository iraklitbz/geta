import React from "react";
import { useEffect } from "react"; 
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { css, Global } from '@emotion/react';
import { useIntl } from "gatsby-plugin-intl";

    


const MainLayout = ({children, className}) => {
  const intl = useIntl();
  useEffect(() => {
    if(!document.getElementsByTagName("html")[0].classList.contains('js'))
    document.getElementsByTagName("html")[0].className += " js";
  }, []);
  return ( 
      <div className={`main ${className || ''}`}> 

    { intl.locale === 'en' ? 
       <Global styles={css`
          :root {
            --font-primary: 'Montserrat', sans-serif;
          }
      `} /> 
      
      :  
      <Global styles={css`
        :root {
          --font-primary: 'Noto Serif Georgian', serif;
        }
      `} /> 
    }
      
     
     <Header />
     { children }
     <Footer />
    </div>
   );
}
 
export default MainLayout;