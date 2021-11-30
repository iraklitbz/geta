import React from "react";
const Diagonal = () => {
  return ( 

      <section className="diagonal-section-bottom bg-contrast-lower bg-opacity-50%" data-theme="dark">
        <div className="container max-width-adaptive-sm padding-y-xxl">
          <div className="text-center">
            <div className="text-sm opacity-90% margin-bottom-xxs">Welcome</div>
      
            <div className="text-component margin-bottom-sm">
              <h1 className="text-shadow-sm text-xxxl"><em>CodyHouse UI</em> Starter Template</h1>
              <p>Virgo is a free HTML, CSS, JS template powered by CodyFrame.</p>
            </div>
        
            <div className="flex flex-wrap flex-center gap-sm">
              <a className="btn btn--primary" href="https://github.com/CodyHouse/virgo-template">Download</a>

              <a className="link-fx-1 color-contrast-higher" href="https://codyhouse.co/template/virgo">
                <span>Learn more</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="15.5"/><line x1="10" y1="18" x2="16" y2="12"/><line x1="16" y1="12" x2="22" y2="18" /></g></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default Diagonal;