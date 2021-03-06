import React from "react";
import { useEffect } from "react";
import {useStaticQuery, graphql} from 'gatsby';
import revelarJS from "../../../../static/js/revelarJS";
import { useIntl, Link } from "gatsby-plugin-intl";
const BlogHome = () => {
  const intl = useIntl();
  const result = useStaticQuery(graphql`
      query getPost {
        allStrapiBlog(
          limit: 4 
          sort: {fields:createdAt, order: DESC}) 
          {
          nodes {
            id
            title
            url
            description
            thumb {
              localFile {
                publicURL
              }
            }
          }
        }
        allStrapiGe(
          limit: 4 
          sort: {fields:createdAt, order: DESC}) 
          {
          nodes {
            id
            title
            url
            description
            thumb {
              localFile {
                publicURL
              }
            }
          }
        }
      }
  `);
  let newsList = {};
  if(intl.locale === 'en') {
    newsList = result.allStrapiBlog.nodes;
  } else if(intl.locale === 'ge') {
    newsList = result.allStrapiGe.nodes;
  }
  useEffect(() => {
    revelarJS();
  },[])
  return ( 
    <section className="position-relative z-index-1 padding-y-xl">
        <div className="container max-width-xl">
          <div className="grid gap-md items-start@md">
            <div className="col-4@md position-sticky@md top-xl@md">
              <div className="text-component v-space-sm">
                <h1>Noticias actuales</h1>
                <p className="color-contrast-medium">Sigue nuestras noticias más actuales</p>
                <p>
                  <Link className="link-fx-3 color-contrast-higher" to="/news">
                    <span>Ver todas las noticias</span>
                    <svg className="icon" viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="6" x2="3.5" y2="11.5"/><line x1="3.5" y1="0.5" x2="9" y2="6"/></svg>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-8@md">
              <div className="grid gap-sm card-list">
                {newsList.map((element => (
                  <Link key={element.id} className="card-v11 radius-md reveal-fx reveal-fx--translate-up col-6@md" to={`/${element.url}`} aria-label="Explore Yoga classNamees">
                    <div className="card-v11__box width-100%">
                      <div className="padding-sm">
                        <p className="text-sm opacity-60% margin-bottom-xxs">date</p>
                        <h2 className="text-lg color-inherit">{element.title}</h2>
                      </div>
              
                      <div className="card-v11__btn padding-x-sm">
                        <svg className="card-v11__icon icon" viewBox="0 0 48 48">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="37" y1="14" x2="47" y2="24" />
                            <line x1="47" y1="24" x2="37" y2="34" />
                            <line x1="47" y1="24" x2="1.5" y2="24" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Link>
                )))}
                
  
              </div>
       
            </div>
          </div>
        </div>

        <div className="corner-decoration corner-decoration--right bg" aria-hidden="true"></div>
      </section>
   );
}
 
export default BlogHome;