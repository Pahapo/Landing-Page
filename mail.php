<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]); 
	$admin_email  = trim($_POST["admin_email"]); 
	$form_subject = trim($_POST["form_subject"]); 
	$form_subject_text = trim($_POST["form_subject_text"]); 

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
				<h3 style='margin:35px 0 10px 0; color:#8d8d8d;'>$key</h3>
				<h2 style='margin:0; font-weight:400;'>$value</h2>
			 ";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);
	$form_subject_text = trim($_GET["form_subject_text"]); 

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
			 	<h3 style='margin:35px 0 10px 0; color:#8d8d8d;'>$key</h3>
			 	<h2 style='margin:0; font-weight:400; color:#000;'>$value</h2>
			 ";
		}
	}
}

$message = "<body><h1 style='font-size:24px; color:#707070; font-weight:600; line-height:30px; margin-top:35px;'>$form_subject_text</h1>$message</body>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );