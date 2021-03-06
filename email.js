<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="style.css">
<title>Contact | Lighthouse Bistro</title>
<meta charset="utf-8">
</head>


<body>
<!-- Include SMTPJS 3rd Party Code -->
<title>Give Us Your Feedback</title>
<script src="https://smtpjs.com/v3/smtp.js"></script>  

<!-- META TAGE -->
<meta charset="utf-8">
<meta name="author" content="Michael Minervino">
<meta name="description" content="ISOM215 Feedback">
<meta name="keywords" content="Feedback Rating">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                     Cascading Style Sheets (CSS) Styles
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
-->
<style>
label{
 margin-left: 10px;
 font-size:22px;
}
h2 {
  text-align: center;  
}

</style>

<script src="text/javascript">
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                            ValidateEmail()
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


function ValidateEmail() 
{
var email_to_send_to = document.getElementById("email_address").value;
//console.log("in ValidateEmail...");

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_to_send_to))
  {
    return (true)
  }
    alert("Invalid email address entered.")
    return (false)
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                            sendEmail()
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function sendEmail() {
		
var email_to_send_to = document.getElementById("email_address").value;

// Check email address entered and make sure valid	
if (ValidateEmail())
  {
    //console.log("in sendEmail...");
  
    Email.send({
    SecureToken : "98bca931-c2ae-45da-8b0b-a1c0569a8591",
    To : "mminervino@su.suffolk.edu",  
    From : "DoNotReply@gmail.com",
    Cc : email_to_send_to,
    Subject : "Feedback Received",
    Body : "<h2 style=color:#228B22>We got your feedback!</h2><hr>"+
	"Name: "+
	document.getElementById("submitter_name").value+
	"<br>Contact Notes: "+document.getElementById("mytextarea").value+"<br>"+
	"<hr>"
   })
  .then(function(message){alert("Email successfully sent.")});
  }}
</script>


<h3>Contact Form</h3>

<div class="container">
  <form action="/email.js">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>

</body>