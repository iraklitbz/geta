import React from "react";

const HeroText = () => {
  return ( 
    <section className="position-relative z-index-1" data-theme="dark">
      <div className="container max-width-adaptive-md padding-bottom-xl">
        <div className="grid gap-sm">
          <div className="col-4@md col-5@lg">
            <h1 className="text-xxxl@lg">Sobre nosotros</h1>
          </div>

          <div className="col-8@md col-7@lg">
            <div className="text-component">
              <p>A pesar de muchos siglos de experiencia en el campo de la vinificación, nuestro país sigue en una etapa temprana del desarollo del enoturismo.</p>
      
              <p>Para ayudar a este campo y pasar a la etapa de desarollo sistemático, se ha fundado la Asosiacion GETA, que desde el dia de su fundación tiene como objetivo establecer un sistema de gestion eficaz y democrático, donde todos los miembros tendrán derecho a votar.</p>
      
      
      
              <p>
                <a className="link-fx-3" href="about.html">
                  <span>Más info</span>
                  <svg className="icon" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="6" x2="3.5" y2="11.5"/><line x1="3.5" y1="0.5" x2="9" y2="6"/></svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default HeroText;