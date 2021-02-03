const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const icon = document.querySelector('.icon img');
const time = document.querySelector('img.time');
const details = document.querySelector('.details');

const updateUI = data => {
    details.innerHTML = `
        <h5 class="my-3">${data.cityDetails.EnglishName}</h5>
        <div class="my-3">${data.cityCurrentConditions.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${data.cityCurrentConditions.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    let timeSrc = null;
    if (data.cityCurrentConditions.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    let iconSrc = `img/icons/${data.cityCurrentConditions.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {
    const cityDetails = await getCityCode(city);
    const cityCurrentConditions = await getCurrentConditions(cityDetails.Key);
    return {
        // cityDetails: cityDetails,
        // cityCurrentConditions: cityCurrentConditions
        //obj short hand
        cityDetails,
        cityCurrentConditions
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    updateCity(cityForm.city.value.trim())
        .then(data => {
            updateUI(data);
        }).catch(err => {
            console.log(err);
        });
    cityForm.reset();
})