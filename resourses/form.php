<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST['name']));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $number = trim($_POST["number"]);
    $message = trim($_POST["textarea"]);

   

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "info@vargaar.coffee";

    // Set the email subject.
    $subject = "New contact from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    $email_content .= "number:\n$number\n";
    // Build the email headers.
    $email_headers = "From: $name <$email>";

	$sent = mail($recipient, $subject, $email_content, $email_headers);
 
    
    if ($sent)
{
    header("Location: http://www.vargaar.coffee/index.php?success=1#form");
}
else
{
    header("Location: http://www.vargaar.coffee/index.php?success=-1#form");
}
   
?>