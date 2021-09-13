<?php
if(isset($_POST['f_e_mailv']) && isset($_POST['f_phonev'])){

    $f_e_mailv = $_POST['f_e_mailv'];
    $f_phonev = $_POST['f_phonev'];

    $message = '
                <html>
                    <head>
                        <title>'. $theme .'</title>
                    </head>
                    <body>
                        <p>email: '. $f_e_mailv .'</p>
                        <p>Телефон: '. $f_phonev .'</p>                       
                    </body>
                </html> ';
    $theme = "=?utf-8?B?".base64_encode("Заявка Орлова")."?=";
    $headers = "From: \r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("order@salesgenerator.pro",  $theme, $message, $headers);
    echo $success;

    

}
?>