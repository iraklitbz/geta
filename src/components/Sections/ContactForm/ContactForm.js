import React from "react";
const ContactForm = () => {
  return ( 
    <section className="position-relative z-index-1 padding-y-xxl" data-theme="dark">
        <div className="container max-width-sm position-relative z-index-2">
          <div className="text-component text-center margin-bottom-xl">
            <h1>Get in touch</h1>
            <p className="color-contrast-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus eos impedit nesciunt voluptates magni vero itaque.</p>
          </div>

          <form>
            <fieldset className="margin-bottom-md">
              <legend className="form-legend">Form Legend</legend>
          
              <div className="grid gap-sm">
                <div className="col-6@md">
                  <label className="form-label margin-bottom-xxs" for="input-name">Name</label>
                  <input className="form-control width-100%" type="text" name="input-name" id="input-name" required />
                </div>
            
                <div className="col-6@md">
                  <label className="form-label margin-bottom-xxs" for="input-email">Email</label>
                  <input className="form-control width-100%" type="email" name="input-email" id="input-email" placeholder="email@myemail.com" />
                  <div className="bg-error bg-opacity-20% padding-xs radius-md text-sm color-contrast-higher margin-top-xxs" role="alert"><p><strong>Error:</strong> this is an error message</p></div>
                </div>
          

                
                <div>
                  <label className="form-label margin-bottom-xxs" for="textarea">Textarea</label>
                  <textarea className="form-control width-100%" name="textarea" id="textarea"></textarea>
                  <p className="text-xs color-contrast-medium margin-top-xxs">Use helper text to provide additional information.</p>
                </div>
              </div>
            </fieldset>
      
          
            <fieldset className="margin-bottom-md">
              <legend className="form-legend">Checkboxes</legend>
          
              <div className="flex flex-wrap gap-md">
                <div>
                  <input className="checkbox" type="checkbox" id="checkbox-1" />
                  <label for="checkbox-1">Option 1</label>
                </div>
          
               
              </div>
            </fieldset>
          
            <div>
              <button className="btn btn--primary">Submit</button>
            </div>
          </form>
        </div>

      </section>
   );
}
 
export default ContactForm;