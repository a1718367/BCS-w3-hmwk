# BCS-w3-hmwrk
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

<h4>User's guide</h4>
<li>User input password length
    <li>must be number</li>
    <li>must be between 8 and 128</li>
    <li>cannot be blank</li>
    </li>
<li>User select at least 1 criteria</li>
<li>User prompted if conditions is not met</li>
<li>Press generate button to generate password</li>
<li>Password is shown in result box</li>
<li>Previous generated password is shown in previous password display</li>
<li>Previous generated password is listed as length + pw</li>
