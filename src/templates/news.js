import React from "react";
import {graphql} from 'gatsby';
import MainLayout from "../layouts/MainLayout";
import BlogList from "../components/Sections/BlogList/BlogList";
import { useIntl } from "gatsby-plugin-intl";

 const Blog = ({data, pageContext}) => {
    const intl = useIntl();
    let posts = {};

    if(intl.locale === 'en') {
      posts = data.allStrapiBlog.nodes;
    } else if(intl.locale === 'ge') {
      posts = data.allStrapiGe.nodes;
    }

  return (
      <MainLayout>
        <BlogList 
            posts={posts}
            pageContext={pageContext}
        />
        
      </MainLayout>
    
  )
 }
  
 export default Blog;


 export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiBlog(
      skip: $skip
      limit: $limit
      sort: {fields:createdAt, order: DESC}
      ) {
      nodes {
        id
        title
        url
        content
        description
        thumb {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiGe(
      skip: $skip
      limit: $limit
      sort: {fields:createdAt, order: DESC}
      ) {
      nodes {
        id
        title
        url
        content
        description
        thumb {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`