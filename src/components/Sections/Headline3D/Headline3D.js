import React from "react";
const Headline3D = () => {
  return ( 
    <section className="position-relative z-index-1 padding-top-xl">
    <div className="container max-width-adaptive-lg">
      <h1 className="sr-only">Join us</h1>
  
      <div className="text-xl text-xxl@xs font-bold">
        <p className="color-contrast-higher font-secondary">Be better,</p>
        <p className="margin-bottom-xxs color-contrast-higher font-secondary">Be stronger.</p>
  
        <a className="td-text-block font-secondary" href="#0" aria-label="Join our club">
          <span className="td-text-block__wrapper">
            <em className="td-text-block__front-text">Who we are &rarr;</em>
            <em className="td-text-block__final-text">Who we are &rarr;</em>
          </span>
        </a>
      </div>
    </div>
  </section>
   );
}
 
export default Headline3D;