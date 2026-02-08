import "./about.css";
import LanguagePack from "../../../assets/lang"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function About() {
    return (
  <div id="container_about">
                <div className="about">
                    <h1>{LanguagePack.About.title}</h1>
                    <p>{LanguagePack.About.description}</p> 
                    <div className="stats">
                        <div><h2>2+</h2><span>{LanguagePack.About.span_1}</span></div>
                        <div><h2>30+</h2><span>{LanguagePack.About.span_2}</span></div>
                        <div><h2>5+</h2><span>{LanguagePack.About.span_3}</span></div>
                    </div>
                </div>
                <div className="instruments">
                    <h1>{LanguagePack.About.stats}</h1>
                    <div id="container_bars">
                    <div className="TaskBar"><span>HTML</span>
                    <div className="bar"><div></div></div>
                    </div>
                    <div className="TaskBar"><span>CSS</span>
                    <div className="bar"><div></div></div>
                    </div>
                    <div className="TaskBar"><span>JavaScript</span>
                    <div className="bar"><div></div></div>
                    </div>
                    <div className="TaskBar"><span>PHP</span>
                    <div className="bar"><div></div></div>
                    </div>
                    </div>
                </div>
                
            </div>
)}