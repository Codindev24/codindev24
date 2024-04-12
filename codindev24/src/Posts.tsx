import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import createClient from "./client.js"

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

  return (
    <div className="posts">
        <ul className="uk-slider-items uk-grid-match uk-text-center uk-child-width-1-1 uk-child-width-1-3@m">
            {allPostsData &&
            allPostsData.map((post, index) =>( 
            <li key={index}>
                    {post.title}
                    <Link to={'/' + post.slug.current} key={post.slug.current}>View🖇️</Link>
                  
            </li>
          ))}
        </ul>
      </div>
  );
}

export default Posts;