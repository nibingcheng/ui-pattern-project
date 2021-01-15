console.log('hello!')
let url = "https://api.nasa.gov/planetary/apod?api_key=hYFdlmCqBaG2Ai5Qt7pzr72dChzGsbodHcmDDLlX&date=2019-01-06";

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
