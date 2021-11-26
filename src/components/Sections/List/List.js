import React from "react";
const List = () => {
  return ( 
    <section className="margin-y-xl position-relative z-index-1 bg-contrast-lower padding-y-xxl padding-y-xxl@lg">
      <div className="container max-width-sm">
        <ol className="list-v2 list-v2--ol">
          <li>
            <div className="margin-bottom-xs">
              <h4 className="list-v2__title font-primary">
                <div className="list-v2__bullet"></div>CSS Framework
              </h4>
            </div>
        
            <div className="list-v2__content">
              <div className="text-component">
                <p className="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum rerum repudiandae nobis quae, autem minima eius doloribus recusandae minus?</p>
              </div>
            </div>
          </li>
        
          <li>
            <div className="margin-bottom-xs">
              <h4 className="list-v2__title font-primary">
                <div className="list-v2__bullet"></div>Components
              </h4>
            </div>
        
            <div className="list-v2__content">
              <div className="text-component">
                <p className="color-contrast-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eum tempora maxime, praesentium veritatis consectetur quia laudantium pariatur.</p>
                <p className="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente unde explicabo natus consequuntur laborum dolores, asperiores sint, eveniet deserunt porro illum aut ab earum non ducimus, cumque nam qui minima itaque ipsam ad esse. Atque architecto molestiae assumenda inventore dignissimos.</p>
              </div>
            </div>
          </li>
        
          <li>
            <div className="margin-bottom-xs">
              <h4 className="list-v2__title font-primary">
                <div className="list-v2__bullet"></div>Global Editors
              </h4>
            </div>
        
            <div className="list-v2__content">
              <div className="text-component">
                <p className="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus totam deleniti corporis cupiditate non aperiam adipisci quasi repellendus possimus.</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
   );
}
 
export default List;