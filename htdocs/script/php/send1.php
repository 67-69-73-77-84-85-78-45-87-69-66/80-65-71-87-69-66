<?php
 
	require(“class.phpmailer.php”);
	$mail = new PHPMailer();
	$mail->Host = “localhost”;
	$mail->From = “remite@email.com”;
	$mail->FromName = “Nombre del Remitente”;
	$mail->Subject = “Subject del correo”;
	$mail->AddAddress(“destino1@correo.com”,”Nombre 01″);
	$mail->AddAddress(“destino2@correo.com”,”Nombre 02″);
	$mail->AddCC(“usuariocopia@correo.com”);
	$mail->AddBCC(“usuariocopiaoculta@correo.com”);
	$body = “Hola amigo
	“;
	$body .= “probando PHPMailer.
	“;
	$body .= “Saludos“;
	$mail->Body = $body;
	$mail->AltBody = “Hola amigo\nprobando PHPMailer\n\nSaludos”;
	$mail->Send();
 
?>