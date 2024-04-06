import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
import useSWR from 'swr';
import Swr from './Swr.tsx';
import Notes from './components/Notes.tsx';

export default function Home() {
  return (
    <div className="home">
      <Parallax
        className="welcome"
        blur={0}
        bgImage="https://wallpapers.com/images/hd/coding-background-l9pvpgogyoukpp2k.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content flex justify-between">
          <Notes />
          {/* <Swr /> */}
        </div>
        {/* .content */}
      </Parallax>
    </div>
  );
}
