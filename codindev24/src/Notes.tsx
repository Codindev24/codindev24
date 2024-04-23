import {React, useEffect, useState } from 'react'
import createClient from "./client.js"
import Moment from 'react-moment';
import 'moment-timezone';
import "./sass/notes.scss";
import { Link } from "react-router-dom";

function Notes() {
 const [allNotesData, setAllNotes] = useState(null);

 useEffect(() => {
  createClient.fetch(
   `*[_type == "notes"]{
     title,
     slug,
     publishedAt,
     mainImage{
      asset->{
       _id,
       url 
      }  
     }
   }` 
  )
  .then((data) => setAllNotes(data))
  .catch(console.error);
 }, []);

 if (!allNotesData) return <div className="loading flex justify-center">Loading...</div>;

 return (

  <div className="notes">
     
     <div className="notepost flex justify-between">
     
     <div className="notetitle">
       Notes
     </div>{ /* .notetitle */ }

     <ul className="grid grid-cols-6 gap-2">
     {allNotesData &&
      allNotesData.map((note, index) => ( 

       <li key={index}>

       <div className="note sm:grid-cols-12">

       <div className="title items-center text-center">
       {/* <a href="#" onClick={() => router.push(`/notes/${notes.slug.current}`)} key={index}>
         {notes.title}
       </a> */}
       <Link to={'/' + note.slug} key={note.slug}>{ note.title }</Link>

       </div>{ /* .title */ }

       <div className="date items-center text-center">

       { note.publishedAt }

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