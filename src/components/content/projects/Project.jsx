import "./project.css";
import LanguagePack from "../../../assets/lang"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function Project() {

    return (
        <div id="Project">
            <h1 id="title_project">{LanguagePack.Project.title}</h1>
            <div id="container_projects">
                <div className="project fade-in" id="Fluffy">
                    <div id="Wonderix_img"/>
                    <h1>Wonderix</h1>
                    <p>{LanguagePack.Project.wonderix.description}</p>
                    <div className="project_footer">
                        <div><span>React</span> <span>PHP</span></div>
                        <button onClick={() => {window.location.href = 'https://wonderix.ru';}}>{LanguagePack.Project.wonderix.button}</button>
                        </div></div>
                <div className="project fade-in" id="Wonderix">
                    <div id="Edrax_img"/>
                    <h1>Edrax App</h1>
                    <p>{LanguagePack.Project.edrax.description}</p>
                    <div className="project_footer">
                        <span>JavaScript</span>
                        <button onClick={() => {window.location.href = '404.html';}}>{LanguagePack.Project.edrax.button}</button>
                        </div></div>
                <div className="project fade-in" id="AliThemes">
                    <div id="uwucat_img"/>
                    <h1>uwucat Discord</h1>
                    <p>{LanguagePack.Project.uwucat.description}</p>
                    <div className="project_footer">
                        <span>JavaScript</span>
                        <button onClick={() => {window.location.href = 'https://discord.com/oauth2/authorize?client_id=1469473623860576367';}}>{LanguagePack.Project.uwucat.button}</button>
                        </div></div>
            </div>
                        <div id="container_projects">
                <div className="project fade-in" id="Fluffy">
                    <div id="AliThemes_img"/>
                    <h1>Aliucord-Themes</h1>
                    <p>{LanguagePack.Project.aliucord.description}</p>
                    <div className="project_footer">
                        <div><span>React</span> <span>PHP</span></div>
                        <button onClick={() => {window.location.href = 'https://github.com/TheFuZeeXD/Aliucord-Themes';}}>{LanguagePack.Project.aliucord.button}</button>
                        </div></div>
                <div className="project fade-in" id="Wonderix">
                    <div id="brh_img"/>
                    <h1>BR-Helper</h1>
                    <p>{LanguagePack.Project.brh.description}</p>
                    <div className="project_footer">
                        <span>JavaScript</span>
                        <button onClick={() => {window.location.href = 'https://github.com/TheFuZeeXD/BR-Helper';}}>{LanguagePack.Project.brh.button}</button>
                        </div></div>
                <div className="project fade-in" id="AliThemes">
                    <div id="aether_img"/>
                    <h1>Aether Theme</h1>
                    <p>{LanguagePack.Project.aether.description}</p>
                    <div className="project_footer">
                        <span>JavaScript</span>
                        <button onClick={() => {window.location.href = '404.html';}}>{LanguagePack.Project.aether.button}</button>
                        </div></div>
            </div>
        </div>
    );
}