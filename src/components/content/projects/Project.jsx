import "./project.css";
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Project() {

    return (
        <div id="Project">
            <h1 id="title_project">Проекты</h1>
            <div id="container_projects">
                <div className="project fade-in" id="Fluffy">
                    <div id="fluffy_img"/>
                    <h1>Fluffy</h1>
                    <p>Fluffy — это умный и доброжелательный Discord-бот, созданный, чтобы сделать ваш сервер живым, уютным и уникальным.</p>
                    <div className="project_footer">
                        <span>Discord.js</span>
                        <button onClick={() => {window.location.href = 'https://thefuzeexd.com/fluffy/main';}}>Подробнее</button>
                        </div></div>
                <div className="project fade-in" id="Wonderix">
                    <div id="Wonderix_img"/>
                    <h1>Wonderix</h1>
                    <p>Fluffy — это умный и доброжелательный Discord-бот, созданный, чтобы сделать ваш сервер живым, уютным и уникальным.</p>
                    <div className="project_footer">
                        <div><span>React</span>
                        <span>PHP</span></div>
                        <button onClick={() => {window.location.href = 'https://wonderix.ru';}}>Подробнее</button>
                        </div></div>
                <div className="project fade-in" id="AliThemes">
                    <div id="AliThemes_img"/>
                    <h1>Aliucord-Themes</h1>
                    <p>Fluffy — это умный и доброжелательный Discord-бот, созданный, чтобы сделать ваш сервер живым, уютным и уникальным.</p>
                    <div className="project_footer">
                        <span>JSON</span>
                        <button onClick={() => {window.location.href = 'https://github.com/TheFuZeeXD/Aliucord-Themes';}}>Подробнее</button>
                        </div></div>
            </div>
        </div>
    );
}