import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createClient from "./client.js"
import imageUrlBuilder from "@sanity/image-url";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "./sass/postsmain.scss"


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
    "categories": categories[]->title,
    publishedAt,
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

if (!allPostsData) return <div className="loading flex justify-center">Loading...</div>;

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
                    <img className="rounded-md" src={urlFor(post.mainImage).url()} alt="" />
                    <div className="titlelink flex justify-between">
                      <span>{post.title}</span>
                      <Link to={'/' + post.slug.current} key={post.slug.current}>View</Link>
                    </div>
                    {post.categories.map((c, i) => (
                      <p className='inline'>{c} </p>
                      ))}
                      <br />
                     <span className="time"> <AccessTimeIcon /> { post.publishedAt }</span> 
                    </div>{/* .post */}
            </li>
          ))}
        </ul>
        </div>{/* .between */}
      </div>
  );
}

export default Posts;