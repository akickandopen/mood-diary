// Set variables for elements from html
const txtTitle = document.getElementById("title");
const txtBody = document.getElementById("body");
const txtMood = document.getElementById("mood");
const txtDate = document.getElementById("date");

// Get values from local storage
const title = localStorage.getItem("title");
const body = localStorage.getItem("body");
const mood = localStorage.getItem("mood");

// Get today's date
const date = new Date();
date.getFullYear();
date.getMonth();
date.getDay();

// Set values in html elements to values from local storage
txtTitle.innerHTML = title;
txtBody.innerHTML = body;
txtMood.innerHTML = "Feeling: " + mood;
txtDate.innerHTML = date.toDateString();

console.log(title);
console.log(body);
console.log(mood);

async function createImage(){

    // Define HTML and CSS with JSON object
    const json = {
        html: `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <div class="daily-entry">
            <div class="">
                <p id="date" class="col mb-3">${date.toDateString()}</p>
                <h5 id="title" class="mb-3">${title}</h5>
                <p id="body">${body}</p>
            </div>
            <div class="row">
                <p id="mood" class="col fw-bold">Feeling: ${mood}</p>
                <p class="col text-end">Mood Diary 2022</p>
            </div>
        </div>
        `,
        css: `
        body { 
            background-color: transparent;
        }
        .daily-entry {
            width: 629px;
            height: 336px;
            background: #FFFBF6;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 50px;
            padding: 30px;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            font-family: "Poppins", sans-serif;
        }
        `,
        google_fonts: "Poppins"
    };

    const user_id = ""; // Your user id
    const api_key = ""; // Your api key

    const options = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(user_id + ":" + api_key)
        }
    }

    // Create a POST request to the API to create the image by using the fetch API
    fetch('https://hcti.io/v1/image', options) 
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(res.status);
            }
        })
        .then(data => {
            // Image URL is available here
            console.log(data.url);
            downloadImage(data.url); // Pass image url to function
        })
        .catch(err => console.error(err));
}

async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc); // fetch image url
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'mooddiary';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}