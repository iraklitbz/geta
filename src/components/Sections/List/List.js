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
                <p className="color-contrast-medium">Es importante destacar que la red de socios de GETA es grande desde el inicio. Tenemos ya planeado firmar convenios de cooperación con estructuras estatales y empresas privadas. Por un lado tenemos grandes empresas e instituciones educativas y por el otro lado, pequeñas y medianas bodegas familiares y hoteles.</p>
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
                <p className="color-contrast-medium">GETA recibió su forma juridica el 22 de marzo de 2021, y a través de tramites acelerados con la participación activa de nuestros socios europeos, ya ha logrado registrarse como miembro oficial de la Asociación Mundial de Enoturismo, lo que es una nueva oportunidad no solo para nosotros sino  también para Georgia.</p>
              
              </div>
            </div>
          </li>
        
          <li>
            <div className="margin-bottom-xs">
              <h4 className="list-v2__title font-primary">
                <div className="list-v2__bullet"></div>El equipo de GETA
              </h4>
            </div>
        
            <div className="list-v2__content">
              <div className="text-component">
                <p className="color-contrast-medium">Tiene una amplia experiencia en gestión de negocios internacionales, finanzas, turismo, viticultura, asociaciones público-privadas, administración pública, monitoreo y evaluación.</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
   );
}
 
export default List;