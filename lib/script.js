console.log('hello!')
let year = Math.round(Math.random()*40+1980); //Random starting year
let month = Math.round(Math.random()*12); //Random starting month
let day = Math.round(Math.random()*28); //Random starting day

let buttonEl = document.querySelectorAll('button');

let startDate = new Date (`${year}`, `${month-1}`, `${day}`);  //second number is monthIndex, so 0 is January
buttonEl[0].innerText = startDate.getFullYear() + "-" + `${startDate.getMonth()+1}` + "-" + startDate.getDate();

let startDatePlus1 = startDate;
startDatePlus1.setDate(startDate.getDate() + 1);
buttonEl[1].innerText = startDatePlus1.getFullYear() + "-" + `${startDatePlus1.getMonth()+1}` + "-" + startDatePlus1.getDate();

let startDatePlus2 = startDatePlus1;
startDatePlus2.setDate(startDatePlus1.getDate() + 1);
buttonEl[2].innerText = startDatePlus2.getFullYear() + "-" + `${startDatePlus2.getMonth()+1}` + "-" + startDatePlus2.getDate();

let startDatePlus3 = startDatePlus2;
startDatePlus3.setDate(startDatePlus2.getDate() + 1);
buttonEl[3].innerText = startDatePlus3.getFullYear() + "-" + `${startDatePlus3.getMonth()+1}` + "-" + startDatePlus3.getDate();

// add event listener for every tabs individually (tried to use loop but it did not work)
// if the fetch operation is put inside the loop
let dateString0 = buttonEl[0].innerText;
url0 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString0;

buttonEl[0].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(url0)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);
        let title = document.querySelector(".title");
        title.innerText = json.title;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;
    })
    .catch(err => console.log('oops something went wrong', err))
})
     
let dateString1 = buttonEl[1].innerText;
url1 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString1;

buttonEl[1].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(url1)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);
        let title = document.querySelector(".title");
        title.innerText = json.title;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;
    })
    .catch(err => console.log('oops something went wrong', err))
})

let dateString2 = buttonEl[2].innerText;
url2 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString2;

buttonEl[2].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(url2)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);
        let title = document.querySelector(".title");
        title.innerText = json.title;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;
    })
    .catch(err => console.log('oops something went wrong', err))
})

let dateString3 = buttonEl[3].innerText;
url3 = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=` + dateString3;

buttonEl[3].addEventListener('click', function(e) {
    e.preventDefault();
    fetch(url3)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);
        let title = document.querySelector(".title");
        title.innerText = json.title;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;
    })
    .catch(err => console.log('oops something went wrong', err))
})


// initial page load up
    fetch(url0)
    .then(a => a.json())
    .then(json => {
        
        console.log(json.date);
        console.log(json.explanation);
        console.log(json.title);
        console.log(json.url);
        let title = document.querySelector(".title");
        title.innerText = json.title;
        let explanation = document.querySelector(".explanation");
        explanation.innerText = json.explanation;
        let nasaImage = document.querySelector(".url");
        nasaImage.src = json.url;
    })
    .catch(err => console.log('oops something went wrong', err))