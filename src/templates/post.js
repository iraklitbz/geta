import React from 'react';
import MainLayout from "../layouts/MainLayout";
import SocialShare from '../components/Sections/SocialShare/SocialShare';
import ReactMarkdown from 'react-markdown';
const post = ({pageContext: {data: post} }) => {

  return ( 
    <MainLayout>
      <article className="padding-y-lg">
        <header className="container max-width-xs margin-bottom-lg">
          <div className="text-component text-center line-height-lg text-space-y-md margin-bottom-md">
            <h1>{post.title}</h1>
            <p className="color-contrast-medium text-md">{post.description}</p>
          </div>

          <div className="flex justify-center">
            <div className="author author--meta">
              <a href="#0" className="author__img-wrapper">
                <img src="https://codyhouse.co/app/assets/img/author-img-1.jpg" alt="Author picture" />
              </a>

              <div className="author__content text-component text-space-y-xxs">
                <h4 className="text-base"><a href="#0" rel="author">Olivia Gribben</a></h4>
                <p className="text-sm color-contrast-medium"><time>May 15</time> &mdash; 5 min read</p>
              </div>
            </div>
          </div>
        </header>

        <figure className="container max-width-lg margin-bottom-lg">
          <img className="block width-100% radius-lg" src="https://codyhouse.co/app/assets/img/article-img-1.jpg" alt="Image description" />
        </figure>

        <div className="container max-width-adaptive-sm">
          <div className="text-component line-height-lg text-space-y-md">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>
     <SocialShare post={post} />
    </MainLayout>
   );
}
 
export default post;