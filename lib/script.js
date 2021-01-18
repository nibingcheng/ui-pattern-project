console.log('hello!')
let year = Math.round(Math.random()*40+1980); //Random starting year
let month = Math.round(Math.random()*12); //Random starting month
let day = Math.round(Math.random()*28); //Random starting day

// add event listener to all buttons (tabs)
let buttonEl = document.querySelectorAll('.button');

let startDate;
let startDatePlus1;
let startDatePlus2;
let startDatePlus3;

newDate(year, month, day);

function newDate(yr, mo, da) {
    startDate = new Date (`${yr}`, `${mo-1}`, `${da}`);  //second number is monthIndex, so 0 is January
    buttonEl[0].innerText = startDate.getFullYear() + "-" + `${startDate.getMonth()+1}` + "-" + startDate.getDate();
    
    startDatePlus1 = startDate;
    startDatePlus1.setDate(startDate.getDate() + 1);
    buttonEl[1].innerText = startDatePlus1.getFullYear() + "-" + `${startDatePlus1.getMonth()+1}` + "-" + startDatePlus1.getDate();
    
    startDatePlus2 = startDatePlus1;
    startDatePlus2.setDate(startDatePlus1.getDate() + 1);
    buttonEl[2].innerText = startDatePlus2.getFullYear() + "-" + `${startDatePlus2.getMonth()+1}` + "-" + startDatePlus2.getDate();
    
    startDatePlus3 = startDatePlus2;
    startDatePlus3.setDate(startDatePlus2.getDate() + 1);
    buttonEl[3].innerText = startDatePlus3.getFullYear() + "-" + `${startDatePlus3.getMonth()+1}` + "-" + startDatePlus3.getDate();
    
    // add event listener for every tabs individually (tried to use loop but it did not work)
    // if the fetch operation is put inside the loop
    let dateString0 = buttonEl[0].innerText;  // a date in year-month-day
    urlString0 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString0;
    let dateString1 = buttonEl[1].innerText;
    urlString1 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString1;
    let dateString2 = buttonEl[2].innerText;
    urlString2 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString2;
    let dateString3 = buttonEl[3].innerText;
    urlString3 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString3;    
}

// GET data from API
buttonEl[0].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(urlString0)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);
        
        let title = document.querySelector(".title");
        title.innerText = json.title + "\n" + json.date;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;

        for (let j = 0; j < buttonEl.length; j++) {
            buttonEl[j].classList.remove("active");            
        }
        buttonEl[0].classList.add("active");
    })
    .catch(err => console.log('oops something went wrong', err))
})
     
buttonEl[1].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(urlString1)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);

        let title = document.querySelector(".title");
        title.innerText = json.title + "\n" + json.date;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;

        for (let j = 0; j < buttonEl.length; j++) {
            buttonEl[j].classList.remove("active");            
        }
        buttonEl[1].classList.add("active");
    })
    .catch(err => console.log('oops something went wrong', err))
})

buttonEl[2].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(urlString2)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);

        let title = document.querySelector(".title");
        title.innerText = json.title + "\n" + json.date;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;

        for (let j = 0; j < buttonEl.length; j++) {
            buttonEl[j].classList.remove("active");            
        }
        buttonEl[2].classList.add("active");
    })
    .catch(err => console.log('oops something went wrong', err))
})

buttonEl[3].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(urlString3)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);

        let title = document.querySelector(".title");
        title.innerText = json.title + " \n" + json.date;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;

        for (let j = 0; j < buttonEl.length; j++) {
            buttonEl[j].classList.remove("active");            
        }
        buttonEl[3].classList.add("active");
    })
    .catch(err => console.log('oops something went wrong', err))
})

// The following code loads initial page
let nasaImage = document.querySelector(".url");
nasaImage.src = "/Users/bn64191/Documents/personal/100_1384.jpg";

// Add event listener to user selected date (form submit)
let form = document.querySelector('#form')
form.addEventListener('submit', handleSubmit)

// Handle form submit input click
function handleSubmit(e) {
  e.preventDefault()

  let userInputDate = e.target[0].value;   //a string in yyyy-mm-dd format
  let parsedInputDate = userInputDate.split('-');
  year = parsedInputDate[0];
  month = parsedInputDate[1];
  day = parsedInputDate[2];
  newDate(year, month, day);
}

// if CORS error is thrown, prepend this  https://cors-anywhere.herokuapp.com/