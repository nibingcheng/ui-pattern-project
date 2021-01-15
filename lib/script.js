console.log('hello!')
let year = 2008, month = 2, day = 29; //default starting date
const startDate = new Date (`${year}`, `${month-1}`, `${day}`);  //second number is monthIndex, so 00 is January

const startDatePlus1 = startDate;
startDatePlus1.setDate(startDate.getDate() + 1);

const startDatePlus2 = startDate;
startDatePlus1.setDate(startDate.getDate() + 2);

const startDatePlus3 = startDate;
startDatePlus1.setDate(startDate.getDate() + 3);

// console.log(startDatePlus1.getFullYear(), startDatePlus1.getMonth()+1, startDatePlus1.getDate());

let url = `https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=${year}-${month}-${day}`;

let ul = document.querySelector('ul');
fetch(url)
    .then(a => a.json())
    .then(json => {
        // for (let i=0; i<json.results.length; i++) {
        //     let li = document.createElement('li');
        //     li.innerText = json.results[i].name;
        //     ul.appendChild(li);
        // }
        /*
        json.results.forEach(function(ship) {                    
            let li = document.createElement('li');
            li.innerText = ship.name;
            ul.appendChild(li);
        });
        */
       console.log(json.date);
       console.log(json.explanation);
       console.log(json.title);
       console.log(json.url);
    })
    .catch(err => console.log('oops something went wrong', err))
