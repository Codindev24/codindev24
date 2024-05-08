import {React, useEffect, useState } from 'react'
import createClient from "./client.js"
import imageUrlBuilder from "@sanity/image-url";
import Moment from 'react-moment';
import 'moment-timezone';
import "./sass/notes.scss";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
 return builder.image(source);
}

function Notes({ note }) {
 const [allPostsData, setAllPosts] = useState(null);

 useEffect(() => {
  createClient.fetch(
   `*[_type == "notes"]{
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

  <div className="notes">
     
     <div className="notepost flex justify-between">
     
     <div className="notetitle">
       Notes
     </div>{ /* .notetitle */ }

     <ul className="grid grid-cols-6 gap-2">
     {allPostsData &&
      allPostsData.map((post, index) => ( 

       <li key={index}>
        

       <div className="note sm:grid-cols-12">

       <div className="title items-center text-center">
       {/* <a href="#" onClick={() => router.push(`/notes/${notes.slug.current}`)} key={index}>
         {notes.title}
       </a> */}
       <Link to={'/notes/' + post.slug.current} key={post.slug.current}>{ post.title }</Link>
       </div>{ /* .title */ }

       <ul className="cats flex justify-center">
       <li><span>{ post.categories }</span></li>
       </ul>

       {/* {note.categories !== null && (
       <ul>
       {note.categories.map((category, i) => (
       <li key={i}><p className='inline'>{category.title}</p></li>
        ))}
      </ul>
      )} */}

       <div className="date items-center text-center">

       { post.publishedAt }

       </div>{ /* .date */ }

       </div>{ /* .note */ }

       </li>

      ))}
      </ul>

      </div>{ /* .notepost */ }
   
  </div>/* .notes */

 )
}

export default Notes;