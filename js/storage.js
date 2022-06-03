function saveMood(val) {
    let link = document.getElementById("continue");
    let mood = val.value;

    if (link.style.display == "none") {
        link.style.display = "block";

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