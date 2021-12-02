import React from "react";
import {StaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image";
const Image = ({fileName, alt}) => {
 return (
   <StaticQuery 
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
               
                  }
                }
              }
            }
          }
        }
   `}
   render={data => {
     const image = data.images.edges.find(image => {
       return image.node.relativePath.includes(fileName)
     })

     if(!image) return null;
     return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
   }}
   />
 )
}
 
export default Image;