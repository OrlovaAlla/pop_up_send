<?php
if(isset($_POST['f_e_mailv']) && isset($_POST['f_phonev'])){

    $f_e_mailv = $_POST['f_e_mailv'];
    $f_phonev = $_POST['f_phonev'];

    
    $theme = "=?utf-8?B?".base64_encode("Заявка Орлова")."?=";
    $headers = "From: \r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("alla.nest.1@yandex.ru", $theme, $f_e_mailv ,$f_phonev, $headers);
    echo $success;

    

}
?>