import React from "react";
import { useEffect } from "react";
import revelarJS from "../../../../static/js/revelarJS";
const BlogHome = () => {
  useEffect(() => {
    revelarJS();
  },[])
  return ( 
    <section className="position-relative z-index-1 padding-y-xl">
        <div className="container max-width-xl">
          <div className="grid gap-md items-start@md">
            <div className="col-4@md position-sticky@md top-md@md">
              <div className="text-component v-space-sm">
                <h1>Our classNamees</h1>
                <p className="color-contrast-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nostrum, saepe enim amet.</p>
                <p>
                  <a className="link-fx-3 color-contrast-higher" href="timetable.html">
                    <span>View Timetable</span>
                    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="6" x2="3.5" y2="11.5"/><line x1="3.5" y1="0.5" x2="9" y2="6"/></svg>
                  </a>
                </p>
              </div>
            </div>

            <div className="col-8@md">
              <div className="grid gap-sm card-list">
                <a className="card-v11 radius-md reveal-fx reveal-fx--translate-up col-6@md" href="classNamees.html#yoga-classNamees" aria-label="Explore Yoga classNamees">
                  <div className="card-v11__box width-100%">
                    <div className="padding-sm">
                      <p className="text-sm opacity-60% margin-bottom-xxs">Meditate</p>
                      <h2 className="text-lg color-inherit">Explore Yoga classNamees</h2>
                    </div>
            
                    <div className="card-v11__btn padding-x-sm">
                      <svg className="card-v11__icon icon" viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="37" y1="14" x2="47" y2="24" />
                          <line x1="47" y1="24" x2="37" y2="34" />
                          <line x1="47" y1="24" x2="1.5" y2="24" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
            
                <a className="card-v11 radius-md reveal-fx reveal-fx--translate-up col-6@md" href="classNamees.html#cardio-classNamees" aria-label="Explore Cardio classNamees">
                  <div className="card-v11__box width-100%">
                    <div className="padding-sm">
                      <p className="text-sm opacity-60% margin-bottom-xxs">Sweat</p>
                      <h2 className="text-lg color-inherit">Explore Cardio classNamees</h2>
                    </div>
            
                    <div className="card-v11__btn padding-x-sm">
                      <svg className="card-v11__icon icon" viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="37" y1="14" x2="47" y2="24" />
                          <line x1="47" y1="24" x2="37" y2="34" />
                          <line x1="47" y1="24" x2="1.5" y2="24" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
            
                <a className="card-v11 radius-md reveal-fx reveal-fx--translate-up col-6@md" href="classNamees.html#boxing-classNamees" aria-label="Explore Boxing classNamees">
                  <div className="card-v11__box width-100%">
                    <div className="padding-sm">
                      <p className="text-sm opacity-60% margin-bottom-xxs">Fight</p>
                      <h2 className="text-lg color-inherit">Explore Boxing classNamees</h2>
                    </div>
            
                    <div className="card-v11__btn padding-x-sm">
                      <svg className="card-v11__icon icon" viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="37" y1="14" x2="47" y2="24" />
                          <line x1="47" y1="24" x2="37" y2="34" />
                          <line x1="47" y1="24" x2="1.5" y2="24" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
            
                <a className="card-v11 radius-md reveal-fx reveal-fx--translate-up col-6@md" href="classNamees.html#crossfit-classNamees" aria-label="Explore Crossfit classNamees">
                  <div className="card-v11__box width-100%">
                    <div className="padding-sm">
                      <p className="text-sm opacity-60% margin-bottom-xxs">Lift</p>
                      <h2 className="text-lg color-inherit">Explore Crossfit classNamees</h2>
                    </div>
            
                    <div className="card-v11__btn padding-x-sm">
                      <svg className="card-v11__icon icon" viewBox="0 0 48 48">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="37" y1="14" x2="47" y2="24" />
                          <line x1="47" y1="24" x2="37" y2="34" />
                          <line x1="47" y1="24" x2="1.5" y2="24" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
       
            </div>
          </div>
        </div>

        <div className="corner-decoration corner-decoration--right bg" aria-hidden="true"></div>
      </section>
   );
}
 
export default BlogHome;