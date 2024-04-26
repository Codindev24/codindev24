import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import useSWR from 'swr';
import Swr from './Swr.tsx';
import Notes from './Notes.tsx';
import Posts from './Posts.tsx';
import Countdown from 'react-countdown';
import Hero from './Hero.tsx';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Avatar from '@mui/material/Avatar';
// firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
 
  const logout = async () => {
 
  };
  
  return (
    <div className="home">
      <div className="features flex justify-between">
        <div className="html"><h1>Html</h1></div>
        <div className="js"><h1>Js</h1></div>
        <div className="css"><h1>Css / Scss</h1></div>
        <div className="plugins"><h1>Plugins / Scripts</h1></div>
      </div>{/* .feature */}
      <Parallax
        className="welcome"
        blur={0}
        bgImage="https://images.unsplash.com/photo-1712414951449-424e662f6e74?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content flex justify-between">

        <div className="left">
          The beouty is in the <span>CODE</span>
        </div>

        <div className="right">
         <div className="cata"><span className="dev">Development</span> <span className="news">News</span></div>
          <h1>Next<small>js</small> React<small>js</small> The library for web and native user interfaces. <br />
          Next.js is built on the latest React features, including Server Components and Actions. <br />
          Development. <br />
          <span>
          <div className="avatar">
          <div className="w-5 rounded-full">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocLKsL_BMoM1Evk4fcwUwCFmTvhhrTZd0ahxBBsDjD9AIGEtQTaumA=s288-c-no" />
          </div>
        </div>
          <span className="name">Codindev</span> <AccessTimeIcon /> 14:52 11 april 2024</span>
          </h1>
          {!user ? (
          <p>You need to be logged in to view this content!</p>
          ) : (  
          <div className="spanarferdslide flex">
        <div className="eventtitle">Events:</div>
        <div className="event">
        <h1>
        <span className="name">Spánarferð eftir </span>
        <span className="count"><Countdown date={Date.now() + 4233600000} /> <span className="name">daga....</span></span>
      
      </h1>
      </div>
      </div>
      )}
        </div>
        </div>{/* .content */}
      </Parallax>

      <div className="notes">
      <Notes />
      </div>
      <div className="devs">
      <Parallax
        className="devs"
        blur={0}
        bgImage="https://images.unsplash.com/photo-1712414951449-424e662f6e74?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content flex justify-between">

       <div className="next">
       <h1>Next <br />
        <small>For more complex projects.</small>
        </h1>
       </div>{/* .next */}

       <div className='react'>
       <h1>React <br />
        <small>Prefered choise.</small>
        </h1>
       </div>{/* .react */}

       <div className='other'>
       <h1>Scripts <br />
        <small>libraries, Cms. Anything's possible.</small>
        </h1>
       </div>{/* .other */}

       <div className='scss'>
       <h1>scss <br />
        <small>prev Stylus, css anything goes.</small>
        </h1>
       </div>{/* .scss */}

        </div>{/* .content */}

      </Parallax>
      </div>{/* .devs */}
      <div className="posts">
      <Posts />
      </div>{/* .posts */}
       
       { /* .experience ///////////////////////////////////////////////////////////////////////////////////////////////// */ }
       <Parallax
        className="experience"
        blur={0}
        bgImage="https://i.natgeofe.com/n/8a4cd21e-3906-4c9d-8838-b13ef85f4b6e/tpc18-outdoor-gallery-1002418-12000351_01.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content grid grid-cols-6">

        <div className="left col-span-4">

          <div className="postone">
          <h1>
            <img src="https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg" alt="" />
              How to host website on any hosting provider?
              <br />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />
              Iure, quidem! Accusantium amet earum cumque mollitia repellat, 
              <br />
              impedit itaque? Illum rerum esse placeat itaque ex expedita 
              <br />
              temporibus quis nulla odio deleniti.</span>
            </h1>
          </div>{ /* .postone */ }
          
        </div>{ /* .left */ }

        <div className="right col-span-2">

        <div className="posttwo">
            2
        </div>{ /* .posttwo */ }

        <div className="postthree">
            3
        </div>{ /* .postthree */ }

        </div>{ /* .right */ }

        </div>{/* .content */}
      </Parallax>

    </div>
  );
}
