const form = document.querySelector(".search form");

const apiKey ="03d806aa369e626c741e11cd7be9daf6";
// take input from form and save it to a variable
form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
})


const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

// makes api call
// async function doAjaxStuff(){
//     let result;
//     try {
//         result = await $.ajax({
//             url: url,
//             type: 'POST',
//             data: inputVal
//         });

//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// }

async function asyncCall(){
    data = await fetch(
        url,
        {
            method: 'GET'
        }
    );

    const { main, title, sys, weather } = data;

    const icon = `https://openweathermap.org/img/wn/${
    weather[0]["icon"]
    }@2x.png`;

    const li = document.createElement("li"); 
    li.classList.add("city");
    const markup = `
        <h2 class="city-name" data-name="${title},${sys.country}"> 
        <span>${title}</span> 
        <sup>${sys.country}</sup> 
        </h2> 
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> 
        </div> 
        <figure> 
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}> 
        <figcaption>${weather[0]["description"]}</figcaption> 
        </figure>
    `;
    li.innerHTML = markup;
    list.appendChild(li);
}


form.reset();
input.focus();