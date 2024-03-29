const API_KEY = '46ad7457603b9b0104e633e78cd60e16';

/**
 * searchTemperature is called when the user clicks the search button.
 * @description: Event listener for search button
 * @param {event}
 * @returns {void}
 */

const searchTemprature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayWeather(data);
        });
};
/**
 * setInnerText is used to set the innerText of an element.
 * @param {*} id
 * @param {*} text
 */

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};
/**
 * displayweather is called when the user clicks the search button.
 * @description: Event listener for search button
 * @param {event}
 * @returns {void}
 * @param {*} temperature
 */

const displayWeather = (temperature) => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    setInnerText('country', temperature.sys.country);
    setInnerText('feels-like', temperature.main.feels_like);
    // set weater icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}; // end of displayWeather
