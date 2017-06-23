<?php
	$asunto = "Contacto de CEIMTUN" ;
	$destino = "locoex123@gmail.com";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$mensaje = $_POST["mensaje"];
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje ;
	$headers = "From: " . $nombre . "  <" . $destino . ">\r\n" ;
	$headers .= "Reply-To:" . $destino ."\r\n";
	$headers .= "Return-path: " . $destino  . "\r\n";
	$headers .= "Cc: locoex123@gmail.com\r\n"; 
	$headers .= "Bcc: locoex123@gmail.com\r\n"; 
	mail($destino,$asunto,utf8_decode($contenido),$headers);
	header("location:http://ikaro.epizy.com");
?>