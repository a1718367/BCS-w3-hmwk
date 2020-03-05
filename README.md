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

<h4>Pseudo-code</h4>
<li>user set length via slder</li>
<li>for loop to generate password till length = pwlength</li>
<li>if statement to only include user selected criteria</li>
<li>to select at random selected criteria arrays</li>
<li>to select at random character in the selected array</li>
<li>add character to password</li>
