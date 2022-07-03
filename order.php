<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name-popup"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = $_POST["email-popup"];
    $number = trim($_POST["number-popup"]);
    $coffeetype = trim($_POST["coffee-type"]);
    $coffeeweight = trim($_POST["coffee-weight"]);
    $coffeenumbers = trim($_POST["coffee-numbers"]);
    

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "order@vargaar.coffee";

    // Set the email subject.
    $subject = "New order from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
	$email_content .= "number: $number\n\n";
    $email_content .= "Email: $email\n\n";

    $email_content .= "type: $coffeetype\n\n";
    $email_content .= "weight: $coffeeweight\n\n";
    $email_content .= "Coffee Numbers: $coffeenumbers\n\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: http://www.vargaar.coffee/products.html?success=1");

?>