import "./about.css";
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function About() {
    return (
  <div id="container_about">
                <div className="about">
                    <h1>Обо мне</h1>
                    <p>Я занимаюсь созданием интерактивных веб-интерфейсов: от концепта до поставки. В проектах использую современные стандарты HTML/CSS/JS, внимание к доступности и анимациям, которые не отвлекают, но создают характер.</p> 
                    <div className="stats">
                        <div><h2>2+</h2><span>года опыта</span></div>
                        <div><h2>30+</h2><span>завершённых задач</span></div>
                        <div><h2>5+</h2><span>публичных репозиториев</span></div>
                    </div>
                </div>
                <div className="instruments">
                    <h1>Инструменты</h1>
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

    ) }