<?php
	$asunto = "Contacto de CEIMTUN" ;
	$destino = "ceimtun@unal.edu.co";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$mensaje = $_POST["mensaje"];
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje ;
	$headers = "From: " . $nombre . "  <" . $destino . ">\r\n" ;
	$headers .= "Reply-To:" . $destino ."\r\n";
	$headers .= "Return-path: " . $destino  . "\r\n";
	$headers .= "Cc: mediosceimtun@gmail.com\r\n"; 
	$headers .= "Bcc: mediosceimtungmail.com\r\n"; 
	mail($destino,$asunto,utf8_decode($contenido),$headers);
	header("location:http://ceimtun.hol.es");
?>