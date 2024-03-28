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
        bgImage="https://i.abcnewsfe.com/a/4de35c35-2698-43e6-b30a-01ff4d549425/iceland-volcano-eruption-03-ap-jef-231220_1703083482338_hpMain.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="content flex justify-center">
          <Notes />
          {/* <Swr /> */}
        </div>
        {/* .content */}
      </Parallax>
    </div>
  );
}
