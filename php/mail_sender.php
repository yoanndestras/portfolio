<?php

//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$tel= $_POST['tel'];
$message= $_POST['message'];
$to = "yoanndestras@gmail.com";
$subject = "Mail From Portfolio";
$txt ="Name = ". $name . "\r\n Email = " . $email . "\r\n Tel =" . $tel . "\r\n Message =" . $message;
$headers = "From: noreply@ydestras.fr.fo" . "\r\n";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

//redirect
$message = "L'email a été envoyé avec succés !";

echo $message;

?>