import {React, useEffect, useState } from 'react'
import createClient from "./client.js"
import Moment from 'react-moment';
import 'moment-timezone';
import Button from '@material-ui/core/Button';
import "./sass/notes.scss";
import { Link } from "react-router-dom";

const Notes = ({ notes, postsPerPage, totalPosts }) => {
 const [allNotesData, setAllNotes] = useState(null);
 const slug = notes?.slug;

 useEffect(() => {
  createClient.fetch(
   `*[_type == "notes"]{
     title,
     slug,
     author,
     categories,
     publishedAt,
     code,
     body,
     mainImage{
      asset->{
       _id,
       url 
      }  
     },
   }` 
  )
  .then((data) => setAllNotes(data))
  .catch(console.error);
 }, []);

 for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i);
}

 return (

  <div className="notes">
     
     <div className="notepost">
     
     <div className="notetitle">
       Notes
     </div>{ /* .notetitle */ }

     <ul className="grid grid-cols-6 gap-2">
     {allNotesData &&
      allNotesData.map((notes, index) => ( 

       <li key={index}>

       <div className="note sm:grid-cols-12">

       <div className="title items-center text-center">
        {/* <Link to={`/notes/${notes.slug}`}>{notes.title}</Link> */}
       <a href="" onClick={() => router.push(`/notes/${notes.slug.current}`)} key={index}>
         {notes.title}
       </a>

       {/* <Link to={`/notes/${notes.slug.current}`}>
         {notes.title}
       </Link> */}

       </div>{ /* .title */ }

       <div className="date items-center text-center">

       { notes.publishedAt }

       </div>{ /* .date */ }

       <div className="body">
        
       { notes.Body }
       { notes.Code}

       </div>{ /* .body */ }

       <div className="link">
        {/* <Link href={'/' + post.slug.current} key={post.slug.current}>
         <button>Read</button>
        </Link> */}
       </div>{ /* .link */ }

       </div>{ /* .note */ }

       </li>

      ))}
      </ul>

      </div>{ /* .notepost */ }
   
  </div>/* .notes */

 )
}

export default Notes