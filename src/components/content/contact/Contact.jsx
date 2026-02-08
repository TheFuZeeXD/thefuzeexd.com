import "./contact.css"
import LanguagePack from "../../../assets/lang"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.

export default function Contact() {
    return( 
        <div id="Contact">
            

            <div className="container_contact">
            <div id="knot_container">
<iframe src='https://my.spline.design/glassknotvortex-hpaWAqfrsp76wauCkBgCThiw/' frameborder='0' width='100%' height='112%'></iframe>
</div>
            <div className="form_contact">
                <h1 id="title_contact">{LanguagePack.Contact.title}</h1>
                <form method="POST" action="auth/verify_email.php" enctype="application/x-www-form-urlencoded">
                    <label htmlFor="mail">{LanguagePack.Contact.label_1}</label>
                    <input type="email" name="mail" id="inpt" placeholder="example@example.com" maxLength={100}/>
                    <label htmlFor="description" >{LanguagePack.Contact.label_2}</label>
                     <textarea placeholder={LanguagePack.Contact.textarea} name="description" maxLength={800}/>
                    <button type="submit">{LanguagePack.Contact.submit}</button>
                </form>
            </div>
        </div>  
        </div>
    )
}