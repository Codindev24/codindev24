import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createClient from "./client.js"
import imageUrlBuilder from "@sanity/image-url";
import "./sass/posts.scss"


const builder = imageUrlBuilder(createClient);
function urlFor(source) {
 return builder.image(source);
}

function Posts() {
const [allPostsData, setAllPosts] = useState(null);

useEffect(() => {
 createClient.fetch(
  `*[_type == "post"]{
    title,
    slug,
    mainImage{
     asset->{
      _id,
      url 
     }  
    }
  }` 
 )
 .then((data) => setAllPosts(data))
 .catch(console.error);
}, []);

if (!allPostsData) return <div>Loading...</div>;

  return (
    <div className="posts">
      <div className="between flex justify-between">
        <div className="posttitle">
          Posts
        </div>{ /* .posttitle */ }
        <ul className="grid grid-cols-6 gap-0">
            {allPostsData &&
            allPostsData.map((post, index) =>( 
            <li key={index}>

                    <div className="post">
                    <img src={urlFor(post.mainImage).url()} alt="" />
                    <div className="flex justify-between">
                      <span>{post.title}</span>
                      <Link to={'/' + post.slug.current} key={post.slug.current}>View</Link>
                    </div>
                    </div>{/* .post */}
            </li>
          ))}
        </ul>
        </div>{/* .between */}
      </div>
  );
}

export default Posts;