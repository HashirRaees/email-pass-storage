// For storing user credentials

// empty arrays goes here for the credentials
var emails = [];
var passwords = [];

// get the number of attempts, user want to make which is max 5
let credNo = +prompt("Please tell the number of emails and password (max 5):")

let isFound = false

// the logical code goes here
for (var i = 1; i <= credNo; i++) {

    // getting the emails and passwords from the user here
    let userEmails = prompt("Enter the email address: ")
    let userPasswords = prompt("Enter the password of the given email: ")

    // check if the given input is email or not
    for (var j = 0; j <= userEmails.length; j++) {
        if (userEmails[j] === "@") {
            emails.push(userEmails);
            passwords.push(userPasswords);
            isFound = true;
            alert("Email and password stored successfully!");
            break;
        }
    }
}
if (!isFound) {
    alert("Please enter a valid email address.");
}

document.writeln("<h1>Stored Emails and Passwords</h1>")
// displaying the stored credentials
document.writeln("<h2>Emails</h2>")
for (var k = 0; k < emails.length; k++) {
    document.writeln(emails[k] + "<br>");
}
document.writeln("<h2>Passwords</h2>")
for (var l = 0; l < passwords.length; l++) {
    document.writeln(passwords[l] + "<br>");
}

if (emails.length !== 0) {
    // Login Credentials
    let loginEmail = prompt("Enter your email to login: ");
    let loginPassword = prompt("Enter the password of the given email: ");
    let isCred = false;
    for (var m = 0; m < emails.length; m++) {
        if (loginEmail === emails[m] && loginPassword === passwords[m]) {
            isCred = true
            alert("Logged in successfully!")
        }
    }
    if (!isCred) {
        alert("Login Failed")
    }
}