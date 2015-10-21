# Character Countdown
Displays the amount of remaining characters defined in the maxlength attribute.

## Getting started
### Installation
Include script after the jQuery library

    <script src="dist/jquery.characterCounter.min.js"></script>

### Usage
Call the initializer function

    $('[data-character-countdown]').characterCountdown();

Use a data-character-countdown to set where show the characters counter. The maxlength is required.

Example:

    <input type="text" data-character-countdown="#example" maxlength="300">
    <p id="example"></p>