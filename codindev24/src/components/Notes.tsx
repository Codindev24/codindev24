import {React, useEffect, useState } from 'react'

import sanityClient from "../client.js"
import Moment from 'react-moment';
import 'moment-timezone';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import "../sass/notes.scss";
import { useHistory } from "react-router-dom";

const Notes = ({ notes }) => {
 const [allNotesData, setAllNotes] = useState(null);

 useEffect(() => {
  sanityClient.fetch(
   `*[_type == "notes"]{
     title,
     slug,
     author,
     categories,
     publishedAt,
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
       <a href="#" onClick={() => router.push(`/notes/${notes.slug.current}`)} key={index}>
         {notes.title}
       </a>
       </div>{ /* .title */ }

       <div className="date items-center text-center">

       { notes.publishedAt }

       </div>{ /* .date */ }

       <div className="body">
        
       { notes.body }
       { notes.code}

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