import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import useSWR from 'swr';
import Swr from './Swr.tsx';
import Notes from './Notes.tsx';
import Hero from './Hero.tsx';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Home() {
  return (
    <div className="home">
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
          <span>Codindev <AccessTimeIcon /> 14:52 11 april 2024</span>
          </h1>
        </div>

        </div>{/* .content */}

      </Parallax>
      <div className="notes">
      <Notes />
      </div>
    </div>
  );
}
