//deafult city
window.onload = () => {
    city = "Surat";
    getTemp(city);
}
//varible section
let resTmp;
let container = document.querySelector('.container');
let currTime = document.querySelector('.currTime');
let name = document.querySelector('.name');
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function getTemp(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a47c21b98bmsh6987a4f15c16b40p1dfc57jsn419081c312b7',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            resTmp = response.temp;
            if (response.wind_speed == undefined) {
                alert('City Not Found, Try Again...')
            }
            else {
                head.innerHTML = `Weather Details of ${city}`;
                cityname.innerHTML = city;
                tempCal.innerHTML = `${response.temp}&deg;`;
                Wspeed.innerHTML = `${response.wind_speed} Km/h`;
                humidity.innerHTML = `${response.humidity} %`;
                cloudy.innerHTML = `${response.cloud_pct} %`;
            }
        }
        )
        .catch(err => console.error(err));
}
//for static city wheather
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a47c21b98bmsh6987a4f15c16b40p1dfc57jsn419081c312b7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gandhinagar', options)
    .then(response => response.json())
    .then(response => {
        GNDW.innerHTML = `${response.temp}&deg;C`;
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=rajkot', options)
    .then(response => response.json())
    .then(response => {
        AMDW.innerHTML = `${response.temp}&deg;C`;
    })
    .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=vadodara', options)
    .then(response => response.json())
    .then(response => {
        VDRW.innerHTML = `${response.temp}&deg;C`;
    })
    .catch(err => console.error(err));

//what happen if user cilick on submit
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (entercity.value == '') {
        alert('Please Enter City');
    }
    else {
        getTemp(entercity.value);
    }
})

//getting time 
setInterval(() => {
    let date = new Date();
    dt.innerHTML = `${date.getDate()}  ${monthNames[date.getMonth()]}  ${date.getFullYear()}`;
    currTime.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} GMT+0530 (India Standard Time)`;
    //changing background according time
    let hour = date.getHours();
    if (resTmp < 10) {
        container.style.backgroundImage = "url('snowfall.gif')";
    }
    else {
        if (hour >= 6 && hour < 14) {
            container.style.backgroundImage = "url('morningTimeBg.jpg')";
            name.style.color="black";
            currTime.style.color="black";
            img.classList.add('blackImg');
        }
        else if (hour >= 14 && hour <= 19) {
            container.style.backgroundImage = "url('AfterNoonBg.jpg')";
        }
        else if (hour >= 0 && hour < 6) {
            container.style.backgroundImage = "url('NigthTimeBg.jpg')";
        }
        else if (hour > 19) {
            container.style.backgroundImage = "url('NigthTimeBg.jpg')";
        }
        else {

        }
    }
}, 1000)
