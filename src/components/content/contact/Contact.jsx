import "./contact.css"
import GitHub_icon from "/image/icons/github_icon.png"
import YouTube_icon from "/image/icons/youtube_icon.png"
import Pinterest_icon from "/image/icons/pinterest_icon.png"
import Steam_icon from "/image/icons/steam_icon.png"
import EMail_icon from "/image/icons/email_icon.png"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.

export default function Contact() {
    return( 
        <div id="Contact">
            <h1 id="title_contact">Связаться</h1>
            <div id="container_contact">
            <div className="form_contact">
                <form method="POST" action="verify_email.php" enctype="application/x-www-form-urlencoded">
                    <label htmlFor="mail">Введите свой эл.почту</label>
                    <input type="email" name="mail" id="inpt" placeholder="example@example.com" maxLength={100}/>
                    <label htmlFor="description" >Описание</label>
                     <textarea placeholder="Максимально 800 символов..." name="description" maxLength={800}/>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div className="info_contact">
                <h1>Информация</h1>
                <ul>
                    <a href="https://github.com/TheFuZeeXD"><img src={GitHub_icon} alt="" />GitHub</a>
                    <a href="https://ru.pinterest.com/TheFuZeeXD/"><img src={Pinterest_icon} alt="" />Pinterest</a>
                    <a href="https://steamcommunity.com/id/thefuzeexd/"><img src={Steam_icon} alt="" />Steam</a>
                    <a href="https://www.youtube.com/@TheFuZeeXD"><img src={YouTube_icon} alt="" />YouTube</a>
                    <a href="mailto:contact@thefuzeexd.com"><img src={EMail_icon} alt="" />contact@thefuzeexd.com</a>
                </ul>
            </div>
        </div>  
        </div>
    )
}