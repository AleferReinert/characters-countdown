# Characters Countdown
Displays the amount of remaining characters defined in the maxlength attribute.

## Getting started
### Installation
Include script after the jQuery library:

    <script src="dist/jquery.charactersCountdown.min.js"></script>

### Usage
Call the initializer function:

    $('.selector').charactersCountdown();

The maxlength is required.

Example:

    <input class="selector" type="text" maxlength="30">
    <p class="characters-countdown-output"></p>

## Options

<table width="100%">
    <thead align="left">
        <tr>
            <th>option</th>
            <th>type</th>
            <th>default</th>
            <th>required</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>output</td>
            <td>string</td>
            <td>.characters-countdown-output</td>
            <td>true</td>
            <td>The output to characters countdown.</td>
        </tr>
        <tr>
            <td>warningColor</td>
            <td>string</td>
            <td>#f00</td>
            <td>false</td>
            <td>The text color changes when closer to the limit</td>
        </tr>
        <tr>
            <td>warningLength</td>
            <td>number</td>
            <td>5</td>
            <td>false</td>
            <td>Number of characters to tell which is near the limit.</td>
        </tr>
    </tbody>
</table>