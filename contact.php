<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'matrix.lab@outlook.com';
    $headers = "From :".$mailFrom;
    $text = "E-mail from".$name."\ntelephone:".%phone\n".$message;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html?mailsend")
}