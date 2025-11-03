import "./header.css"
import Logo from "/image/favicon.png"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Header() {
    return (
        <header>
           <div className="container_header"><div id="avatar_header">FZ</div>
           
           <div id="logo_header"><span>TheFuZeeXD</span>
           <span>Web Dev • F-S Developer</span></div>
           </div>

            <div className="container_header">
           <ul>
            <li onClick={() => {
                            window.scrollTo({
        top:128,          
        behavior: 'smooth'  
    });
                    }}>Главное</li>
            <li onClick={() => {
                            window.scrollTo({
        top:719,          
        behavior: 'smooth'  
    });
                    }}>Проекты</li>
            <li onClick={() => {
                            window.scrollTo({
        top:908,          
        behavior: 'smooth'  
    });
                    }}>Навыки</li>
            <li onClick={() => {
                            window.scrollTo({
        top:document.documentElement.scrollHeight,          
        behavior: 'smooth'  
    });
                    }}>Контакты</li>
           </ul>
           </div>
        </header >
    )
}
