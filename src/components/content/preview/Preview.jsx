import "./preview.css"
import discord_logo from "/image/icons/discord_icon.png"
import uwucat from "/image/icon_uwucat.png"
import LanguagePack from "../../../assets/lang"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

function Preview() {
   
    return (<>
        <div id="preview">
            <div className="preview_container_text">
                <h1><img src={uwucat} alt="" width="40px" className="uwucat_logo"/><span id='uwu-span'>UwU</span><span id='cat-span'>Cat</span> <pre> - </pre>{LanguagePack.Preview.title}</h1>
                <p>{LanguagePack.Preview.description}</p>
            </div>
            <div className="preview_container_video">
                <video autoPlay loop muted playsInline>
                    <source src="/video/preview.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео тег.
                </video>
            </div>
        </div>
    
            <div id="preview" className="nth2preview">
            
                        <div className="preview_container_video">
                <video autoPlay loop muted playsInline>
                    <source src="/video/preview2.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео тег.
                </video>
            </div>
            <div className="preview_container_text">
                <h1>{LanguagePack.Preview.title_2}</h1>
                <p>{LanguagePack.Preview.description_2} <sub>{LanguagePack.Preview.warning_footer}</sub></p>
            </div>
        </div>
    </>);
}

export default Preview;