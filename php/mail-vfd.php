<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Varitec</title>
</head>
<body>
<?php
require 'class.phpmailer.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
//$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom($_REQUEST['email'], $_REQUEST['fname'], $_REQUEST['lname']);
//Set who the message is to be sent to
$mail->addAddress('kellieh@varitecsolutions.com');
//$mail->addAddress('jacob@yanocreative.com');
//Set the subject line
$mail->Subject = 'New Contact form filled out!';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$message =  '<div style="padding: 64px; background-color: #9ebc42; border-bottom: 4px solid #83a90d; max-width: 480px; margin: 0 auto; text-align: center;">'.
            '<p style="color: #fff; font-size: 24px;"><strong>Somebody contacted you!</strong></p>'.
            '<p style="color: #fff; font-size: 24px;"><strong>Name:</strong> '.$_REQUEST['fname'].' '.$_REQUEST['lname'].'</p>'.
            '<p style="color: #fff; font-size: 24px;"><strong>Company Name:</strong> '.$_REQUEST['cname'].'</p>'.
            '<p style="color: #fff; font-size: 24px;"><strong>Email Address:</strong> '.$_REQUEST['email'].'</p>'.
            '<p style="color: #fff; font-size: 24px;"><strong>Phone:</strong> '.$_REQUEST['usrtel'].'</p>'.
            '</div>';
$mail->msgHTML($message);
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo '<script>window.location = "success-vfd.html";</script>';
}
?>
</body>
</html>
