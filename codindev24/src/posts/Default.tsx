import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import createClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
 return builder.image(source);
}

export default function OneSlider() {
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

if (!postData) return <div>Loading...</div>;

 return (
    <div className="singleslider">

        <div className="uk-card-media-top">
        <div className="imagetitle">
        <img src={postData.mainImage} alt="sliderimage"/>
         </div>
        </div>

        <div className="uk-card-body">
        <div className="author flex justify-space-between">
          {/* <img src={urlFor(postData.authorImage).url()} alt="authorimage" /> */}
          <span>{postData.name}</span>
          </div>
          <h3 className="uk-card-title">{postData.title}</h3>
          <span className="category">{postData.category}</span>

          <span>
           {/* <BlockContent
           blocks={postData.body}
           projectId={createClient.clientConfig.projectId}
           dataset={createClient.clientConfig.dataset}
           /> */}

           </span>
        </div>
    </div>
 )
}