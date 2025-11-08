import "./footer.css"
import LanguagePack from "../../../lang";
import Logo from "/image/favicon.png"
// Created by TheFuZeeXD
// 2025 © TheFuZeeXD All rights reserved.


export default function Footer() {
  return (
    <footer>
      <div id="main_footer_container">

      <div id="line1"></div>
      <div id="link_thefuzeexd"><a href="https://thefuzeexd.com/fluffy/main">prod by Fluffy</a><span>{LanguagePack.footer.title}</span><a href="https://thefuzeexd.com">thefuzeexd.com</a></div>
      <div id="ImgBox">
      </div>
      </div>
    </footer>
  )
}