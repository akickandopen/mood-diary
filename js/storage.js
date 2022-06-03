function saveMood(val) {
    let link = document.getElementById("continue");
    let img = document.getElementById("face");
    let mood = val.value;

    // Change image depending on chosen mood
    if(mood == "happy"){
        img.src = "images/face-joy.png";
    } else if(mood == "sad"){
        img.src = "images/face-sad.png";
    } else if(mood == "stressed"){
        img.src = "images/face-stressed.png";
    } else if(mood == "bored"){
        img.src = "images/face-bored.png";
    }

    // Display continue link
    if (link.style.display == "none") {
        link.style.display = "block";

        // Save mood value in local storage 
        localStorage.setItem("mood", mood);
    }
}

function saveEntry(){
    let title = document.getElementById('inputTitle').value;
    let body = document.getElementById('inputBody').value;

    let save = document.getElementById('save');
    let next = document.getElementById('next');
    
    if (title == '' && body == ''){
        alert("Add an entry.");
    } else {
        localStorage.setItem("title", title);
        localStorage.setItem("body", body);

        if(next.style.display == "none"){
            next.style.display = "block";
            save.style.display = "none";
        }
    }
}