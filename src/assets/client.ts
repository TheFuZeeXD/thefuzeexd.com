// HTML Elements
import Header from "@components/header/Header"
import Footer from "@components/footer/Footer"
import Content from "@components/content/Content"
import About from "@components/content/about/About"
import Project from "@components/content/projects/Project"
import Skills from "@components/content/skills/Skills"
import Contact from "@components/content/contact/Contact"
import Navigator from "@components/content/navigator/Navigator"
import Preview from "@components/content/preview/Preview"

export const HTMLDoom: object = {
    Header,
    Footer,
    Content,
    About,
    Project,
    Skills,
    Contact,
    Navigator,
    Preview
}

// Themes and Time
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

export const configSettings: object = {
    time: {
        hours,
        minutes,
        seconds
    }
};



