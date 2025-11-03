import "./content.css"
import Logo from "/image/avatar.gif"
import LanguagePack from "../../../lang"
import { HTMLDoom } from "../../assets/client"
import { useEffect } from "react"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Content() {
let positionArray = [];
  useEffect(() => {

    const array = [
    document.getElementById("title_project"), 
    document.getElementById("title_contact")
].filter(element => element !== null);

array.forEach((e) => {
    const rect = e.getBoundingClientRect();
    positionArray.push({
        top: rect.top + window.pageYOffset,
    });
});



}, []);

const onClick_1 = () => {
    if (positionArray.length > 0) {
        window.scrollTo({
            top: positionArray[0].top, 
            behavior: 'smooth'
        });
    }
};


const onClick_2 = () => {
    if (positionArray.length > 0) {
        window.scrollTo({
            top: positionArray[1].top, 
            behavior: 'smooth'
        });
    }
};

    return (
    <main>
        <div className="content_text">
                <div>
                <span>привет, меня зовут</span>
                <span>Я <m>TheFuZeeXD</m> — создаю яркие веб-интерфейсы</span>
                <p>Фронтенд-разработчик с акцентом на анимации, UI/UX и производительность. Люблю неоновую эстетику и плавные микровзаимодействия.</p>
                </div>
                <div>
                    <button onClick={onClick_1}>Проекты</button>
                    <button onClick={onClick_2}>Связаться</button>
                </div>
                <ul>
                <li>UX/UI Designer</li>
                <li>Open-source lover</li>
                <li>Based in Russia</li>
                </ul>
            </div>

            <div className="content_card">
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
                    <span onClick={() => {window.location.href = 'https://discord.com/oauth2/authorize?client_id=1429847066863210568';}}>Discord</span>
                    <span onClick={() => {window.location.href = 'https://ru.pinterest.com/TheFuZeeXD/';}}>Pinterest</span>
                    <span onClick={() => {window.location.href = 'https://www.youtube.com/@TheFuZeeXD';}}>YouTube</span>
                </div>
            </div>
      </main>
    )
}
