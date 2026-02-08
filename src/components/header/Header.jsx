import "./header.css"
import { useEffect, useState, useRef } from 'react';
import LanguagePack from "../../assets/lang";
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function Header() {
     const [positions, setPositions] = useState([]);
      
      useEffect(() => {
        const array = [
          document.getElementById("content_title_main"), 
          document.querySelector("#title_project"),
          document.getElementById("AliThemes_img"), 
          document.getElementById("title_contact")
        ].filter(element => element !== null);
    
        const calculatedPositions = array.map((e) => {
          const rect = e.getBoundingClientRect();
          return {
            top: rect.top + window.scrollY, 
          };
        });
    
        setPositions(calculatedPositions);
      }, []); 
    
      const onClick_1 = () => {
        if (positions.length > 0 && positions[0]) {
          window.scrollTo({
            top: positions[0].top,
            behavior: 'smooth'
          });
        }
      };
    
      const onClick_2 = () => {
        if (positions.length > 0 && positions[1]) {
          window.scrollTo({
            top: positions[1].top,
            behavior: 'smooth'
          });
        }
      };

      const onClick_3 = () => {
        if (positions.length > 0 && positions[2]) {
          window.scrollTo({
            top: positions[2].top,
            behavior: 'smooth'
          });
        }
      };

      const onClick_4 = () => {
        if (positions.length > 0 && positions[3]) {
          window.scrollTo({
            top: positions[3].top,
            behavior: 'smooth'
          });
        }
      }
    return (
        <header>
            <div id="main_container_header">
           <div className="container_header"><div id="avatar_header">FZ</div>
           
           <div id="logo_header"><span>TheFuZeeXD</span>
           <span>Web Dev • F-S Developer</span></div>
           </div>

            <div className="container_header">
           <ul>
            <li onClick={() => {onClick_1()}}>{LanguagePack.Header.list_1}</li>
            <li onClick={() => {onClick_2()}}>{LanguagePack.Header.list_2}</li>
            <li onClick={() => {onClick_3()}}>{LanguagePack.Header.list_3}</li>
            <li onClick={() => {onClick_4()}}>{LanguagePack.Header.list_4}</li>
           </ul>
           </div>
           </div>
        </header >
    )
}