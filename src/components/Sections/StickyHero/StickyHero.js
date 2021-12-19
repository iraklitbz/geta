import React from "react";
import { useEffect } from "react";
import stickyJS from "../../../../static/js/stickyJS";
const StickyHero = () => {
  useEffect(() => {
    stickyJS()
  },[])
  return ( 
    <section className="sticky-hero sticky-hero--scale margin-bottom-xl js-sticky-hero">
      <div className="sticky-hero__media" aria-hidden="true"></div>
    
      <div className="sticky-hero__content bg-transparent" data-theme="dark">
        <div className="container max-width-sm text-component">
          <h2>La Asociación de Enoturismo de Georgia comienza a contratar una base de formadores para la cooperación futura.</h2>
          <p>Si eres un formador experimentado o novato en viticultura-enología y enoturismo, déjanos tus datos a través del formulario de registro.</p>
          <a className="link-fx-3 color-contrast-higher" target="_blank" href="https://forms.gle/EHd6ndj9DYVvJuWS8">
            <span>Formulario de resgistro</span>
            <svg className="icon" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="6" x2="3.5" y2="11.5"/><line x1="3.5" y1="0.5" x2="9" y2="6"/></svg>
          </a>
        </div>
      </div>
  </section>
   );
}
 
export default StickyHero;