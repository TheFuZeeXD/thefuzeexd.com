import '../index.css'
import { useEffect } from "react";
import { HTMLDoom } from '../assets/client';
import { usePreloader } from '/types/usePreloader.d';
import Banner from "/image/banner.gif"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function App() {
  const { isLoading, showContent } = usePreloader(30000, 30 * 60 * 1000); 
  useEffect(() => {
    setTimeout(() => { 
      try {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("LoadHidden");
      } catch {}
    const bodycompleteload = document.querySelector("body");
    bodycompleteload.classList.add("LoadHidden");
}, 3500);

const element = document.querySelector('.nth2preview');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const knot = document.getElementById("knot-2")
      knot.classList.add('visible');
    }
  });
}, {
  threshold: 0.5 
});

observer.observe(element);

}, []);
  return (
    <>
      {isLoading && (<div id="preloader">
        <div className="preloader-container">
          <div className="text-glow"></div>
          <div className="fz-text">
            <span className="f-letter" data-char="F">F</span>
            <span className="z-letter" data-char="Z">Z</span>
          </div>
        </div>
        <div className="scene">
        </div>
        <div id="LoadPage"><div></div></div>
      </div>)}

      <div id="knot"></div>
      <div id="knot-2"></div>
      <div className='content-body'>
        <HTMLDoom.Header />
        <HTMLDoom.Content />
        <HTMLDoom.About />
        <HTMLDoom.Navigator />
        <HTMLDoom.Preview />
        <HTMLDoom.Project />
        <HTMLDoom.Skills />
        <HTMLDoom.Contact />
        <HTMLDoom.Footer />
      </div>
    </>
  )
}

