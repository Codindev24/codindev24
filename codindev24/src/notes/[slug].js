import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import createClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Parallax, Background } from 'react-parallax';
import "../sass/single.scss"

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
 return builder.image(source);
}

export default function Noteslug() {
 const [postData, setPostData] = useState(null);
 const { slug } = useParams();

useEffect(() => {
 createClient.fetch(
  `*[slug.current == $slug]{
   title,
   category,
   slug,
   mainImage{
    asset->{
     _id,
     url
    }
   },
   body,
   "name": author->name,
   "authorImage": author->image
  }`,
  { slug }
 )
 .then((data) => setPostData(data[0]))
 .catch(console.error);
}, [slug]);

if (!postData) return <div className="loading">Loading...</div>;

 return (
    <div className="defaultpost">

        <div className="single">

        <Parallax
        className="defaultpost"
        blur={0}
        bgImage={urlFor(postData.mainImage).url()}
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content">

     
        <div className="datax flex justify-center">

          {/* <img src={urlFor(postData.authorImage).url()} alt="authorimage" /> */}

           <div className="category">{postData.category}</div>

            <div className="title">{postData.title}</div>

            <div className="author">{postData.name}</div>

          <span>
           {/* <BlockContent
           blocks={postData.body}
           projectId={createClient.clientConfig.projectId}
           dataset={createClient.clientConfig.dataset}
           /> */}
           </span>

           </div>{/* .datax */}

        </div>{/* .content */}

      </Parallax>

           </div>{/* .defaultpost */}
    </div>
 )
}