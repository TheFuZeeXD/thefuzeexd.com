import LanguagePack_en from "../../resource/language/en_US";
import LanguagePack_ru from "../../resource/language/ru_RU";
let x;
if (navigator.language == "ru" || navigator.language == "ru_RU" || navigator.language == "ru-RU") {
    document.title = "TheFuZeeXD | Web Dev & Code Art | Веб разработчик без границ"
    x = {...LanguagePack_ru};
} else {
    document.title = "TheFuZeeXD | Web Dev & Code Art | Web Developer Without Borders"
    x = {...LanguagePack_en};
}

const LanguagePack: object = {
...x
}
export default LanguagePack;