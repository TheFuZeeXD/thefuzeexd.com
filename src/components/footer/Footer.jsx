import "./footer.css"
import LanguagePack from "../../assets/lang";
import Logo from "/image/favicon.png"
import GitHub_icon from "/image/icons/github_icon.png"
import YouTube_icon from "/image/icons/youtube_icon.png"
import Spotify_icon from "/image/icons/spotify_icon.png"
import Steam_icon from "/image/icons/steam_icon.png"
import EMail_icon from "/image/icons/email_icon.png"
// Created by TheFuZeeXD
// 2026 © TheFuZeeXD All rights reserved.


export default function Footer() {
  return (
    <footer>
                      <ul>
                    <a href="https://github.com/TheFuZeeXD"><img src={GitHub_icon} alt="" /></a>
                    <a href="https://open.spotify.com/artist/1IIzSwdVqBnhrbtUvNODqe?si=KNR1i0xpRvCbG_L_ZV9-EA"><img src={Spotify_icon} alt="" /></a>
                    <a href="https://steamcommunity.com/id/thefuzeexd/"><img src={Steam_icon} alt="" /></a>
                    <a href="https://www.youtube.com/@TheFuZeeXD"><img src={YouTube_icon} alt="" /></a>
                    <a href="mailto:contact@thefuzeexd.com"><img src={EMail_icon} alt="" /></a>
                </ul>
      <div id="main_footer_container">
      <div id="line1"></div>
      <div id="link_thefuzeexd"><a href="https://beget.com">prod by Beget</a><span>{LanguagePack.Footer.title}</span><a href="https://thefuzeexd.com">thefuzeexd.com</a></div>
      <div id="ImgBox">
      </div>
      </div>

    </footer>
  )
}