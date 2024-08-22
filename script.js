document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convertButton').addEventListener('click', function() {
        let temperature = parseFloat(document.getElementById('temperatureInput').value);
        let unit = document.getElementById('unitInput').value;
        let result = '';

        if (isNaN(temperature)) {
            result = 'Please enter a valid number!';
            document.getElementById('result').style.backgroundColor = '#ffebee'; // Light red background for error
            document.getElementById('result').style.color = '#c62828'; // Dark red text for error
        } else {
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
            document.getElementById('result').style.backgroundColor = '#e8f5e9'; // Light green background for success
            document.getElementById('result').style.color = '#2c6b2f'; // Dark green text for success
        }

        document.getElementById('result').innerText = result;
    });
});
