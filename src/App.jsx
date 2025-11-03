import './index.css'
import { useEffect } from "react";
import { HTMLDoom } from './assets/client';
import Banner from "/image/banner.gif"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function App() {
  useEffect(() => {
    setTimeout(() => {    let preloader = document.getElementById("preloader");
    preloader.classList.add("LoadHidden");
    let bodycompleteload = document.querySelector("body");
    bodycompleteload.classList.add("LoadHidden");
}, 1500);
}, []);
  return (
    <>
      <div id="preloader">
        <div className="preloader-container">
          <div className="text-glow"></div>
          <div className="fz-text">
            <span className="f-letter" data-char="F">F</span>
            <span className="z-letter" data-char="Z">Z</span>
          </div>
        </div>
        <div className="scene">
        </div>
        <div className="loader"></div>
      </div>
      <div className='content-body'>
        <HTMLDoom.Header />
        <HTMLDoom.Content />
        <HTMLDoom.About />
        <HTMLDoom.Project />
        <HTMLDoom.Skills />
        <HTMLDoom.Contact />
        <HTMLDoom.Footer />
      </div>
    </>
  )
}

