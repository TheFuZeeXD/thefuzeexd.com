type ComponentKeys = "Header" | "Content" | "About" | "Navigator" | "Preview" | 
                     "Project" | "Skills" | "Contact" | "Footer";
                     
const LanguagePack_en: Partial<Record<ComponentKeys, any>> = {};

LanguagePack_en.Header = {
    list_1: "Home",
    list_2: "Projects",
    list_3: "Skills",
    list_4: "Contact"
}

LanguagePack_en.Content = {
    uptitle: "Hello, my name is",
    title: <>I"m <m>TheFuZeeXD</m> — I create vibrant web interfaces</>,
    description: "Frontend developer with a focus on animations, UI/UX, and performance. I love neon aesthetics and smooth micro-interactions.",
    button_1: "Projects",
    button_2: "Contact",
};

LanguagePack_en.About = {
    title: "About Me",
    description: "I am a frontend developer specializing in the art of digital motion and experiential interfaces. My work centers on the belief that exceptional frontend engineering lives at the intersection of three core pillars: performant code, intuitive UX, and expressive animation.",
    span_1: "years of experience",
    span_2: "completed tasks",
    span_3: "public repositories",
    stats: "Tools"
};

LanguagePack_en.Preview = {
    title: "Your Assistant on Discord",
    description: "This bot combines everything essential: from powerful moderation tools to maintain order, to advanced AI features for communication and creativity. You also get a full-fledged game economy with currency and a shop, a high-quality music module for voice channel streams, and a huge collection of entertainment commands so your community never gets bored.",
    title_2: "Customize Your Bot to Taste",
    description_2: "Create your own rules from scratch. Set up triggers for automatic actions, personalized greetings, auto-roles, event logging, and smart filters. The bot becomes a precise reflection of your server's needs, not a generic overseer.",
    warning_footer: "just don't repeat what's in the video"
};

LanguagePack_en.Project = {
    title: "Projects",
    wonderix: {
        description: "Wonderix — an instant online image converter. Change formats (JPG, PNG, WebP, SVG, and more) quickly, for free, and without installing software. Just upload, choose a format, and download!",
        button: "Go to Website"
    },
    edrax: {
        description: "Edrax: AI at Your Fingertips. The power of artificial intelligence is now available in one app. Ask, create, transform — the future is on your smartphone.",
        button: "Install"
    },
    uwucat: {
        description: "Bored in a voice channel? Want to spice up the chat with cuteness and fun? UwUCat isn't just a bot; it's a fluffy ball of joy with a bunch of cool features!",
        button: "Add to Server"
    },
    aliucord: {
        description: "Aliucord Themes — customization to the max. A collection of the most stylish, trendy, and simply beautiful themes for Aliucord. Updated by and for the community.",
        button: "Learn More"
    },
    brh: {
        description: "BR-Helper is a userscript that automates daily tasks and adds new features, making navigation and communication more convenient.",
        button: "Learn More"
    },
    aether: {
        description: "A professional extension for deep personalization of the Google Chrome interface.",
        button: "Learn More"
    }
};

LanguagePack_en.Skills = {
    title: "Skills",
    skill_py: "Frontend and Backend Integration (API bridges, middleware)"
};

LanguagePack_en.Contact = {
    title: "Contact",
    label_1: "Enter your email",
    label_2: "Description",
    textarea: "Maximum 800 characters...",
    submit: "Send"
};

LanguagePack_en.Footer = {
    title: "© 2026 TheFuZeeXD. All rights reserved."
};
export default LanguagePack_en;
