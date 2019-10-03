alert('Warning! This is not an actual web form page. This was only built to demonstrate front-end developer skills using HTML, CSS, JavaScript for validation, and responsive design through flexbox grid. Fields that are filled in will not be submitted to a server upon clicking the "Submit Form" button at the very bottom of the page.');
function formValidation() {
  //First Name Validation
  checkForFirstName();
  //Last Name Validation
  checkForLastName();
  //Gender Validation
  checkForGender();
  //Birthdate Validation
  checkForBirthDate();
  //Phone Number Validation
  checkPhoneNum();
  //Email Address Validation
  checkForEmail();
  //Username Validation
  checkForUsername();
  //Password Validation
  checkForPassword();
}
//Declared Functions
//=====================================================================================
//Checks to see whether user entered first name
function checkForFirstName() {
  var fName = document.getElementById("first").value;
    if (fName.length === 0) {
      alert("Please enter your first name.");
      return false;
    }
  }
//-------------------------------------------------------------------------------------
////Checks to see whether user entered last name 
function checkForLastName() {
  var lName = document.getElementById("last").value;
  if (lName.length === 0) {
    alert("Please enter your last name.");
	return false;
  }
}
//-------------------------------------------------------------------------------------
//Checks to make sure that user chose a gender 
function checkForGender() {
var radioMale = document.getElementById("male");
var radioFemale = document.getElementById("female");	
  if (radioMale.checked === false && radioFemale.checked === false) {
  alert("Please select your gender.");
  return false;
  }
}
//This item will not validate correctly
/*function checkForGender() {
	var radiosGender = document.getElementsByName("gender-radio");
	for (var i = 0; i < radiosGender.length; i++) {
		if (radiosGender[i].checked === false) {
		alert("Please select your gender.");
		return false;
	}
  }
}*/
//-------------------------------------------------------------------------------------
//Checks to make sure user chsoe a birthdate
function checkForBirthDate() { 
var birthDate = document.getElementById("birthdate").value;
if (birthDate.length === 0) {
  alert("Please select your date of birth.");
  return false;
  }
}
//-------------------------------------------------------------------------------------
//Phone Number Validation Function
function checkPhoneNum() {
var phNumberEntered = document.getElementById("phone").value; 
var phNumCorrPatt = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
if (phNumberEntered.length === 0) {
  alert("Please enter your phone number.");
  return false;
}
else if (!(phNumberEntered).match(phNumCorrPatt)) {
  alert("Incorrect phone number format. Please enter phone number as (123) 456-7890, 123-456-7890, or 123456789");
  return false;
  }
}
//-------------------------------------------------------------------------------------
//Email Address Validation Function
function checkForEmail() { 
  var emailEntered = document.getElementById("email").value;
  var emailCorrPatt = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-Z0-9]{2,4}$/; 
  if (emailEntered.length === 0) {
    alert("Please enter your email address.");
    return false;
  }
  else if (!(emailEntered.match(emailCorrPatt))) {
	alert("Invalid email format. Please re-enter your email address.");
    return false;
  }
}
//----------------------------------------------------------------------------------
//Username validation function
function checkForUsername() {
var username = document.getElementById("username").value;
if (username.length < 5) {
    alert("Please create a username of at least 5 characters.");
	return false;
  }
}
//Password Validation Function
function checkForPassword() {  // Password must be at least 8 characters with at least one uppercase letter, one lowercase letter, a number, and a special character. 
var passwordChar = document.getElementById("password").value;
var passwordCorrPatt = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
if (passwordChar.length === 0) {
  alert("Please create a password.");
  return false;
}
else if (!(passwordChar.match(passwordCorrPatt))) {
    alert("Invalid password format. Password must have 8 characters including a capital and lower case letter, number, and special character.");
    return false;
  }
}












