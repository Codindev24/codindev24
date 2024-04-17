import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import createClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Parallax, Background } from 'react-parallax';
import "../sass/singlenote.scss";

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
 return builder.image(source);
}

export default function Noteslug() {
 const [noteData, setNoteData] = useState(null);
 const { slug } = useParams();

useEffect(() => {
 createClient.fetch(
  `*[slug.current == $slug]{
   title,
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
 .then((data) => setNoteData(data[0]))
 .catch(console.error);
}, [slug]);

if (!noteData) return <div>Loading...</div>;

 return (
    <div className="defaultpost">

        <div className="single">

        <Parallax
        className="defaultpost"
        blur={0}
        bgImage={urlFor(noteData.mainImage).url()}
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content">

     
        <div className="datax flex justify-center">

          {/* <img src={urlFor(postData.authorImage).url()} alt="authorimage" /> */}

           <div className="category">{noteData.category.title}</div>

            <div className="title">{noteData.title}</div>

            <div className="author">{noteData.name}</div>

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