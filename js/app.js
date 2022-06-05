function getJoke() {
    let search_input = document.getElementById("searchJoke").value;
    let insert_joke = document.getElementById("insertJoke");
    let api_key = "1cbff9ca97ee48a8926fb9ed6effbf1f"; // Your api key

    let url = `https://api.humorapi.com/jokes/search?number=1&keywords=${search_input}&max-length=250&exclude-tags=nsfw,dark&api-key=${api_key}`;

    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
        console.log(data.jokes[0].joke);
        insert_joke.innerHTML = data.jokes[0].joke;
    })
    .catch(err => console.error(err));
}

function renderJoke(mood) {
    let html = "";
    let htmlSegment = `<h1>Feeling ${mood}</h1>
    <p>let's keep the fun going!</p>
    <div class="search">
        <input type="text" name="search-joke" id="searchJoke" placeholder="Search for a joke" class="me-2">
        <button type="button" onclick="getJoke()"><i class="bi bi-search-heart-fill fs-5"></i></button>
    </div>
    <div class="joke mt-4 mb-4 p-4">
        <p id="insertJoke"></p>
    </div>
    <a href="get-result.html">Continue</a>`;

    html += htmlSegment;

    let container = document.getElementById("moodResult");
    container.innerHTML = html;
}

async function getDog(){
    let url = "https://dog.ceo/api/breeds/image/random";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderDog(mood){
    let dog = await getDog();
    let html = "";
    let htmlSegment = `<h1>Feeling: ${mood}</h1>
    <p>hopefully this dog can cheer you up a little</p>

    <div class="box mb-4 p-4">
        <img src="${dog.message}" alt="" class="img-fluid">
    </div>

    <a href="get-result.html">Continue</a>`;

    html += htmlSegment;

    let container = document.getElementById("moodResult");
    container.innerHTML = html;
}

async function getRandomGIF(){
    let api_key = "8574c95d949f4bfcbfd507e384e8ce9d"; // Your api key
    let url = `https://api.giphy.com/v1/gifs/random?tag=breathing%20calm&rating=g&api_key=${api_key}`;

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderRandomGIF(mood){
    let gif = await getRandomGIF();
    console.log(gif.data.images.fixed_height.url);

    let html = "";
    let htmlSegment = `<h1>Feeling: ${mood}</h1>
    <p>rest a little and take a breather</p>

    <div class="box mb-4 p-4">
        <img src="${gif.data.images.fixed_height.url}" alt="" class="img-fluid">
    </div>

    <a href="get-result.html">Continue</a>`;

    html += htmlSegment;

    let container = document.getElementById("moodResult");
    container.innerHTML = html;
}

function embedGame(mood){
    let html = "";
    let htmlSegment = `<h1>Feeling: ${mood}</h1>
    <p>here's something you can play while you think of something else to do</p>

    <iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/633/latest" 
    frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" 
    referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
    <p class="link-game mt-2">Play the game <a href="https://www.construct.net/en/free-online-games/yetanotherworld-633/play">here</a></p>
    
    <a href="get-result.html">Continue</a>`;
    html += htmlSegment;

    let container = document.getElementById("moodResult");
    container.innerHTML = html;
}

function getMood(){
    const mood = localStorage.getItem("mood");

    if(mood == "happy"){
        renderJoke(mood);
    } else if(mood == "sad"){
        renderDog(mood);
    } else if(mood == "stressed"){
        renderRandomGIF(mood);
    } else if(mood == "bored"){
        embedGame(mood);
    }
}


