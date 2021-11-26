import React from "react";
import Headline3D from "../Headline3D/Headline3D";
const Hero = () => {
  return ( 
    <section className="position-relative z-index-1 padding-top-header padding-bottom-xl" data-theme="dark">
        <div className="container max-width-xl position-relative z-index-2">
          <div className="radius-md padding-top-xxxxl padding-x-sm padding-bottom-sm shadow-lg">
            <div className="grid justify-end@sm">
              <div className="col-6@sm col-4@lg">
               <Headline3D />
          
              </div>
            </div>
          
            <div className="video-feature__video-wrapper" aria-hidden="true">
              
             
            </div>
          </div>
        </div>

        <figure className="bg-decoration-v3 z-index-1" aria-hidden="true">
          <svg className="bg-decoration-v3__svg top-0 left-50% -translate-x-50% color-contrast-higher opacity-10%" viewBox="0 0 1920 500">
            <defs>  
              <linearGradient id="bg-dec-v3-gradient-2" gradientTransform="rotate(90)">  
                <stop offset="0" stop-color="white" stop-opacity="1" />  
                <stop offset="1" stop-color="white" stop-opacity="0" />  
              </linearGradient>
            
              <mask id="bg-dec-v3-gradient-mask-2">  
                <rect x="0" y="0" width="1920" height="500" fill="url(#bg-dec-v3-gradient-2)"  />  
              </mask>  
            </defs>
      
            <g fill="none" stroke="currentColor" stroke-miterlimit="10" mask="url(#bg-dec-v3-gradient-mask-2)">
              <circle cx="960" cy="234" r="254" />
              <circle cx="960" cy="190.545" r="277.818" />
              <circle cx="960" cy="147.091" r="301.636" />
              <circle cx="960" cy="103.636" r="325.455" />
              <circle cx="960" cy="60.182" r="349.273" />
              <circle cx="960" cy="16.727" r="373.091" />
              <circle cx="960" cy="-26.727" r="396.909" />
              <circle cx="960" cy="-70.182" r="420.727" />
              <circle cx="960" cy="-113.636" r="444.545" />
              <circle cx="960" cy="-157.091" r="468.364" />
              <circle cx="960" cy="-200.545" r="492.182" />
              <circle cx="960" cy="-244" r="516" />
            </g>
          </svg>
        </figure>
      </section>
   );
}
 
export default Hero;