<?php
//сделать проверку на наличие сессии и переодресовывать на админку
session_start();
if($_SESSION['role']==1){
    header('Location: http://p98795a3.beget.tech/college/admin/');
}
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Авторизация</title>
    <link rel="stylesheet" href="../style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;1,300&family=IBM+Plex+Serif:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <script src = "https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src = "script/ajax.js"></script>
</head>
<body>
        <div class="aut">
        <form id='ajax_form' method="POST">
            <input type="text" placeholder="Логин" name="login">
            <input type="password" placeholder="Пароль" name="pass">
            <input type="button" id = 'btn' value = "Войти">
            <div id="response"></div>
        </form>
    </div>
</body>
</html>