// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Attach click event listener to the "Convert" button
    document.getElementById('convertButton').addEventListener('click', function() {
        // Get the value entered by the user
        let temperature = parseFloat(document.getElementById('temperatureInput').value);
        
        // Get the selected unit from the dropdown
        let unit = document.getElementById('unitInput').value;
        
        // Variable to store the result
        let result = '';

        // Validate that the input is a number
        if (isNaN(temperature)) {
            result = 'Please enter a valid number!';
        } else {
            // Perform conversion based on the selected unit
            switch (unit) {
                case 'celsius':
                    result = `${temperature}°C = ${(temperature * 9/5) + 32}°F = ${(temperature + 273.15).toFixed(2)}K`;
                    break;
                case 'fahrenheit':
                    result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
                    break;
                case 'kelvin':
                    result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                    break;
            }
        }

        // Display the result in the result div
        document.getElementById('result').innerText = result;
    });
});
