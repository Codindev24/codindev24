import {React, useEffect, useState } from 'react'
import createClient from "./client.js"
import Moment from 'react-moment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import 'moment-timezone';
import "./sass/notesmain.scss";
import { Link } from "react-router-dom";

function Notes({ note }) {
 const [allPostsData, setAllPosts] = useState(null);

 useEffect(() => {
  createClient.fetch(
   `*[_type == "notes"]{
     id,
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

  <div className="notesmain flex justify-between">

    <div className="sidebar flex justify-center">
     <h1>Notes</h1>
    </div>{/* .sidebar */}

    <div className="notesmain">

    <ul className="notee grid grid-cols-4 gap-2">
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
       <li className="cats"><span><CategoryIcon />{ post.categories }</span></li>
       </ul>

       <div className="date items-center text-center">

      <div className="datetime">
       <CalendarMonthIcon/>
      <Moment format="DD/MM/YY">
       { post.publishedAt }
       </Moment>

       <AccessTimeIcon/>
       <Moment format="HH:MM">
       { post.publishedAt }
       </Moment>
        </div>{/* .datetime */}

       </div>{ /* .date */ }

       </div>{ /* .note */ }

       </li>

      ))}
      </ul>

    </div>{/* .notesmain */}

    <div className="right">

    <div className="categorys">
      categoyrs here
    </div>{/* .categorys */}
        
    </div>{/* .right */}
   
  </div>/* .notes */

 )
}

export default Notes;