import React from "react";

const HeroText = () => {
  return ( 
    <section className="position-relative z-index-1" data-theme="dark">
      <div className="container max-width-adaptive-md padding-bottom-xl">
        <div className="grid gap-sm">
          <div className="col-4@md col-5@lg">
            <h1 className="text-xxxl@lg">Wine & Culture</h1>
          </div>

          <div className="col-8@md col-7@lg">
            <div className="text-component">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quia blanditiis nulla odio nisi est neque voluptates minus unde voluptatem?</p>
      
              <p>Soluta debitis dolorem, labore beatae ad ipsa ea architecto voluptatem nesciunt facilis, laboriosam doloremque! Omnis culpa, molestiae, unde suscipit odit vero provident atque inventore laborum velit ratione quidem sed ipsa aliquid tenetur rerum accusantium aut optio voluptates quam laboriosam assumenda labore corrupti! Quisquam illo delectus veritatis dolores voluptates veniam vero enim maxime.</p>
      
              <p>In fuga, ut voluptates impedit laudantium exercitationem sapiente sit, ipsum beatae mollitia libero possimus ea tenetur laboriosam quam dolore voluptatibus nihil doloribus!</p>
      
              <p>
                <a className="link-fx-3" href="about.html">
                  <span>Learn More</span>
                  <svg className="icon" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="6" x2="3.5" y2="11.5"/><line x1="3.5" y1="0.5" x2="9" y2="6"/></svg>
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