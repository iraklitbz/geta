const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Fetch your items (blog posts, categories, etc).
  const posts = await graphql(`
      query getPost {
        allStrapiBlog(sort: {fields:createdAt, order: DESC}) {
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
  `);
  const postsgeo = await graphql(`
      query getPost {
        allStrapiGe(sort: {fields:createdAt, order: DESC}) {
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
  `);
    // Create your paginated pages
    paginate({
      createPage,
      items: posts.data.allStrapiBlog.nodes,
      itemsPerPage: 4, // How many items you want per page
      pathPrefix: '/news', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve(`src/templates/news.js`), // Just like `createPage()`
    });

    posts.data.allStrapiBlog.nodes.forEach(element => {
      createPage({
        path: `/${element.url}`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          data: element
        }
      })
    });

    // posts in geo
    paginate({
      createPage,
      items: postsgeo.data.allStrapiGe.nodes,
      itemsPerPage: 4, // How many items you want per page
      pathPrefix: '/news', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve(`src/templates/news.js`), // Just like `createPage()`
    });

    postsgeo.data.allStrapiGe.nodes.forEach(element => {
      createPage({
        path: `/${element.url}`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          data: element
        }
      })
    });
}