pongNum = 0
imgShown = true
function showMessage() {
    document.getElementById("message").innerText = "Pong number: " + counter();
}

// Just a function to see if function calls and shit work
function counter() {
    pongNum++;
    return pongNum;
}

function showImage() {
    var img = document.getElementById("shrek");
    img.src = 'images/shrek.jpg';
    if (imgShown){
        img.style.display = 'none';
        imgShown = false;
        }
    else {
        img.style.display = 'block';
        imgShown = true;
    }
}

function nextPage() {
    pagenr = parseInt(document.querySelector('body').id);
    pagenr++;
    newPage = 'page' + pagenr + '.html';
    location.replace(newPage);
}

function prevPage() {
    pagenr = parseInt(document.querySelector('body').id);
    pagenr -= 1;
    if (pagenr <= 1) newPage = 'index.html';
    else {
        newPage = 'page' + pagenr + '.html';
    }

    location.replace(newPage);
}