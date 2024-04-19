<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Save data to a file or send it via email
    $file = 'contact_form_data.txt'; // File to save data
    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

    // Save data to file
    file_put_contents($file, $data, FILE_APPEND);

    // Alternatively, you can send the data via email

    $to = "ce.divyanshrai@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
}
?>
