import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import createClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Parallax, Background } from 'react-parallax';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Moment from 'react-moment';
import "../sass/singlepost.scss"

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
 return builder.image(source);
}

export default function Slug() {
 const [postData, setPostData] = useState(null);
 const { slug } = useParams();

useEffect(() => {
 createClient.fetch(
  `*[slug.current == $slug]{
   title,
   "categories": categories[]->title,
   publishedAt,
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

if (!postData) return <div className="loading flex justify-center">Loading...</div>;

 return (
    <div className="defaultpost">

        <div className="single">

        <Parallax
        className="defaultpost"
        blur={0}
        bgImage={urlFor(postData.mainImage).url()}
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content">

     
        <div className="datax flex justify-center">

        <div className="flex-none">
        <div className="category">
            {postData.categories.map((c, i) => (
                <p className='inline'>{c} </p>
            ))}
            {/* <span>Web Development <span className="second">improvements</span></span> */}
            </div>
            
            <div className="posttitle">
              {postData.title}
            </div>

            <div className="flex justify-right">
            <div className="authorimg">
             <img className="rounded-full" src={urlFor(postData.authorImage).url()} alt="authorimage" />
            </div>{/* .authorimg */}

            <div className="author">
             {postData.name}
            </div>{/* .author */}

            <div className="time">
            <AccessTimeIcon /> {postData.publishedAt}
            </div>{/* .time */}
            </div>
        </div>

           </div>{/* .datax */}

           <div className="bottom">

           <div className=" bakk flex justify-center">

          <div className="authorstuff flex">
          <div className="auth">
             <span>author</span>
            </div>{/* .auth */}

            <div className="authorimg">
             <img className="" src={urlFor(postData.authorImage).url()} alt="authorimage" />
            </div>{/* .authorimg */}

            <div className="author">
             {postData.name}
            </div>{/* .author */}
          </div>{/* .authorstuff */}

            <div className="time flex">
            <div className="cal">
            <CalendarMonthIcon/>
            <Moment className="mr-2" format="DD/MM/YY">{postData.publishedAt}</Moment>
            </div>{/* .cal */}

            <div className="clock">
            <AccessTimeIcon /> 
            <Moment format="HH:MM">
            { postData.publishedAt }
            </Moment>
            </div>{/* .clock */}

            </div>{/* .time */}

            </div>

           </div>{/* .bottom */}

        </div>{/* .content */}

      </Parallax>

      <div className="body flex justify-center">
      <BlockContent blocks={postData.body} projectId="fr3rfp8i" dataset="production" />
      </div>{/* .body */}

           </div>{/* .defaultpost */}
    </div>
 )
}