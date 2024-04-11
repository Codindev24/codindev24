import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import Swr from './Swr.tsx';
import "./sass/hero.scss";

export default function Home() {
  return (
    <div className="hero flex">
      
     <div className="utanum flex justify-between">

     <div className="left">
        left
     </div>

     </div>

     <div className="right">
        right
     </div>

    </div>
  );
}
