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
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor expedita sequi nostrum quibusdam possimus, vero aliquam ut debitis illum optio alias veniam error voluptatum.</p>
        </div>
      </div>
  </section>
   );
}
 
export default StickyHero;