import React from "react";
import {graphql} from 'gatsby';
import MainLayout from "../layouts/MainLayout";
import BlogList from "../components/Sections/BlogList/BlogList";

export default function blog({data, pageContext}) {
   const posts = data.allStrapiBlog.nodes;
   return (
      <MainLayout>
         <BlogList 
            posts={posts} 
            pageContext={pageContext}
         />
      </MainLayout>
    
   )
 }

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
  }
`