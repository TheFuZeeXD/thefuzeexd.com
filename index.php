<?php 
$error = $_GET['mail_status'];
$errorTitle = "Произошла ошибка!";
$errorDescription = "Неизвестная ошибка. Пожалуйста, попробуйте позже.";

if ($error === 'invalid email') {
    $errorTitle = "Произошла ошибка!";
    $errorDescription = "Email который вы указали либо не существует либо недействителен. Попробуйте снова.";
} elseif ($error === 'empty description') {
    $errorTitle = "Произошла ошибка!";
    $errorDescription = "Вы не указали описание. Пожалуйста заполните это поле и попробуйте снова.";
} elseif ($error === 'rate limit exceeded') {
    $errorTitle = "Произошла ошибка!";
    $errorDescription = "Вы превысили максимальное количество попыток отправки формы. Повторите попытку позже.";
} elseif ($error === 'database error save') {
    $errorTitle = "Уведомление";
    $errorDescription = "Произошла ошибка при сохранении ваших данных. Повторите попытку позже.";
} elseif ($error === 'complete') {
    $errorTitle = "Уведомление";
    $errorDescription = "Контактная форма была отправлена!";
}
?>



<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="theme-color" content="#386cfc">
  <title>TheFuZeeXD | Full Stack Creator | Разрабатываю сайты с продуманным UX, высокой скоростью и уникальным визуальным стилем.</title>
  <meta name="title" content="TheFuZeeXD | Full Stack Creator | Разрабатываю сайты с продуманным UX, высокой скоростью и уникальным визуальным стилем.">
  <meta name="description"
    content="TheFuZeeXD — личное портфолио фронтенд-разработчика.
    Здесь собраны мои проекты, демонстрирующие навыки в создании современных, быстрых и функциональных веб-приложений.
    Я работаю с HTML, CSS, JavaScript, PHP и MySQL, уделяя внимание структуре кода, адаптивности и стабильности работы.
    Разрабатываю сайты с нуля — от идеи и дизайна до готового интерфейса и серверной логики.">
  <meta name="keywords" content=" thefuzeexd, the,
    fuzeexd, fusee, fuzexd, fuseexd, web development, frontend, backend, JavaScript, React, Node.js, PHP, Python, 
    creativity, innovation, fun, high-quality, creative solutions, design thinking, breakthrough ideas, 
    cutting-edge innovation, future trends, disruptive creativity, idea generation, experimental projects, 
    visionary concepts, next-level creativity, interactive experiences, gamification, viral content, 
    meme culture, digital entertainment, playful design, social media trends, engaging content, 
    fun challenges, immersive experiences, elite creativity, world-class innovation, premium content, 
    expert insights, top-notch design, flawless execution, high-end creativity, industry-leading ideas, 
    superior quality, masterful innovation, how to boost creativity, best creative tools, innovation in 2025, 
    creativity hacks, fun business ideas, creative marketing strategies, viral innovation techniques, 
    top creative agencies, future of entertainment, next-gen creative solutions, 
    Discord bots, bot development, Nginx, Arch Linux, Linux server setup, 
    modern web apps, responsive design, UI/UX, TypeScript, Vite, MySQL, database optimization, 
    SEO optimization, meta tags, dynamic content, multilingual websites">
  <meta name="author" content="fuzeexd">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap" rel="stylesheet">
  <meta property="og:title" content="TheFuZeeXD | Full Stack Creator | Разрабатываю сайты с продуманным UX, высокой скоростью и уникальным визуальным стилем.">
  <meta property="og:description"
    content="TheFuZeeXD — личное портфолио фронтенд-разработчика.
    Здесь собраны мои проекты, демонстрирующие навыки в создании современных, быстрых и функциональных веб-приложений.
    Я работаю с HTML, CSS, JavaScript, PHP и MySQL, уделяя внимание структуре кода, адаптивности и стабильности работы.
    Разрабатываю сайты с нуля — от идеи и дизайна до готового интерфейса и серверной логики.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://thefuzeexd.com">
  <meta property="og:image" content="https://thefuzeexd.com/image/favicon.png">
  <link rel="icon" type="image/png" href="/image/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://thefuzeexd.com" />
</head>
<body>
  <!-- Created by TheFuZeeXD ʕ ᵔᴥᵔ ʔ
    Source code: https://github.com/TheFuZeeXD/thefuzeexd.com
    2025 © TheFuZeeXD All rights reserved. -->
  <div id="root"></div>
<?php if (!empty($error)) { ?>
    <aside>
        <div class="notif">
            <h1><?php echo $errorTitle?></h1>
            <p><?php echo $errorDescription?></p>
        </div>
    </aside>
<?php } ?>
  <script type="module" src="/src/main.jsx"></script>
  <noscript>
    Oh no. You have JavaScript disabled! Please enable it and reload the page.
  </noscript>
</body>

</html>
