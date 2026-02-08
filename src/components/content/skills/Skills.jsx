import "./skills.css";
import LanguagePack from "../../../assets/lang"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function Skills() {    
    return (
        <div id="Skills">
        <h1 id="title_skills">{LanguagePack.Skills.title}</h1>
            <div id="container_skills">
                <div className="skill">
                    <h1>Front-end</h1>
                    <p>HTML, CSS, JS, React</p>
                </div>
                <div className="skill">
                    <h1>Back-end</h1>
                    <p>PHP, MySQL, Node.js, API</p>
                </div>
                <div className="skill">
                    <h1>Python</h1>
                    <p>{LanguagePack.Skills.skill_py}</p>
                </div>
            </div>
        </div>
        );
}