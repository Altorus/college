<?php
    session_start();
    include('../db.php');
    $error='';
    
    if(isset($_POST["login"])){
       $login = $_POST["login"];
       if(empty($login)){
           $error .= '<p>Введите логин</p>';
       }
    }
    
    if(isset($_POST["pass"])){
       $pass = $_POST["pass"];
       if(empty($pass)){
           $error .= '<p>Введите пароль</p>';
       }
    }
    
    if(isset($login) && isset($pass)){
        if($error == ''){
            $sql = $db ->query("SELECT * FROM `users` WHERE `login` = '$login'");
            $rez = mysqli_fetch_array($sql);
            if($rez){
                $hash = $rez["password"];
                if (password_verify($pass, $hash)) {
                    $_SESSION['name'] = $rez["username"];
                    $_SESSION['role'] = $rez["role"];
                    
                    // header("Location: http://p98795a3.beget.tech/college/admin/index.php");
                }
                else {
                    $error.= 'Не верный пароль';
                    
                } 
            }
            else{
                $error .= '<p>Данного пользователя не существует</p>';
            }
        }
    }
    
    $request = array(
        "error" => $error
    );
    
    echo json_encode($request);