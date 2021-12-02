import React from "react";
import Pagination from "../Pagination/Pagination";
import { Link } from "gatsby-plugin-intl";
const BlogList = ({posts, pageContext}) => {
  return ( 
    <section className="position-relative z-index-1 padding-y-xl">
      <div className="articles-v2">
        <div className="container max-width-adaptive-lg">
          <div className="grid gap-md">
            <article className="story-v2 story-v2--featured padding-bottom-lg border-bottom border-3 border-contrast-lower">
              <div className="grid justify-center@md">
                <div className="col-9@md">
                  <div className="story-v2__meta text-sm margin-bottom-sm">
                    <p>By <a href="#0" rel="author">Geta</a> <span role="separator"></span> <time>May 10, 2020</time> </p>
                  </div>
                
                  <div className="text-component">
                    <h2 className="story-v2__headline text-xxxl@md"><Link to={`/${posts[0].url}`}>{posts[0].title}</Link></h2>
                    <p className="story-v2__excerpt">{posts[0].content.substring(0,170) + " ..."}</p>
                  </div>
                </div>
              </div>
            
              <a href="#0" className="story-v2__img margin-top-lg">
                <figure>
                  <img src="https://codyhouse.co/app/assets/img/article-preview-v2-img-1.jpg" alt="Image description" />
                </figure>
              </a>
            </article>

            {posts.slice(1).map((element) => (
              <article key={element.id} className="story-v2 padding-y-lg border-bottom border-3 border-contrast-lower col-6@md col-4@xl">
                <div className="story-v2__meta text-sm margin-bottom-sm">
                  <p>By <a href="#0" rel="author">Geta</a> <span role="separator"></span> <time>May 20, 2020</time> </p>
                </div>
        
                <div className="text-component">
                  <h2 className="story-v2__headline"><Link to={`/${element.url}`}>{element.title}</Link></h2>
                  <p className="story-v2__excerpt">{element.content.substring(0,130) + " ..."}</p>
                </div>
              </article>
            ))}
      
          
          </div>
      
         <Pagination pageContext={pageContext} />
        </div>
      </div>
  </section>
   );
}
 
export default BlogList;