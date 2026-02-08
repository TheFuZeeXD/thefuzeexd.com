import "./content.css"
import Logo from "/image/avatar.gif"
import LanguagePack from "../../assets/lang"
import { HTMLDoom } from "../../assets/client"
import { useEffect, useState, useRef } from 'react';
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function Content() {
  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    const array = [
      document.getElementById("title_project"), 
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
    if (positions.length > 1 && positions[1]) {
      window.scrollTo({
        top: positions[1].top,
        behavior: 'smooth'
      });
    }
  };



    return (
    <main>
        <div className="content_text">
                <div>
                <span>{LanguagePack.Content.uptitle}</span>
                <span>{LanguagePack.Content.title}</span>
                <p>{LanguagePack.Content.description}</p>
                </div>
                <div>
                    <button onClick={onClick_1}>{LanguagePack.Content.button_1}</button>
                    <button onClick={onClick_2}>{LanguagePack.Content.button_2}</button>
                </div>
                <ul>
                <li>UX/UI Designer</li>
                <li>Open-source lover</li>
                <li>Based in Russia</li>
                </ul>
            </div>

            <div id="content_title_main" className="content_card">
                <div className="content_card_image"></div>
                <div className="content_card_info">
                <div id="content_card_info_name">
                    <span>TheFuZeeXD</span>
                    <span>Frontend • Animations • Pixel-perfect</span>
                </div>
                <div id="content_card_info_buttons">
                    <button onClick={() => {window.location.href = 'https://github.com/TheFuZeeXD';}}>GitHub</button>
                    <button onClick={() => {window.location.href = 'https://steamcommunity.com/id/thefuzeexd/';}}>Steam</button>
                </div>
                </div>
                <div id="content_card_info_socials">
                    <span onClick={() => {window.location.href = 'https://t.me/TheFuZeeXD';}}>Telegram</span>
                    <span onClick={() => {window.location.href = 'https://open.spotify.com/artist/1IIzSwdVqBnhrbtUvNODqe?si=KNR1i0xpRvCbG_L_ZV9-EA';}}>Spotify</span>
                    <span onClick={() => {window.location.href = 'https://www.youtube.com/@TheFuZeeXD';}}>YouTube</span>
                </div>
            </div>
      </main>
    )
}