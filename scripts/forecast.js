const apiKey = 'iOZ1lpgEkZPyLmb2Gq5jrkGgAKGz3gGk';

const getCityCode = async (cityName) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${cityName}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getCurrentConditions = async (cityKey) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${apiKey}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}


// getCityCode('solapur')
//     .then(data => {
//         return getCurrentConditions(data.Key);
//     }).then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });
