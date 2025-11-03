import "./skills.css";
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Skills() {    
    return (
        <div id="Skills">
        <h1 id="title_skills">Навыки</h1>
            <div id="container_skills">
                <div className="skill">
                    <h1>Front-end</h1>
                    <p>HTML, CSS (Grid/Flex/Animation), JS, React</p>
                </div>
                <div className="skill">
                    <h1>Back-end</h1>
                    <p>PHP, MySQL, Node.js, API</p>
                </div>
                <div className="skill">
                    <h1>Tools</h1>
                    <p>Интеграция фронта и бэка, DevOps, CI/CD, оптимизация</p>
                </div>
            </div>
        </div>
        );
            }