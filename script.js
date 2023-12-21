function citylist() {
    alert("Loading weather report...");
}

function erase(element){
    element.remove();
}

let tempParagraphs = document.querySelectorAll('.temps');

console.log(tempParagraphs);

for (let i = 0; i < tempParagraphs.length; i++) {
    let value = parseInt(tempParagraphs[i].innerText);
    console.log(typeof value);
    let fahrenheit = (value * 9) / 5 + 32;
    tempParagraphs[i].innerText = Math.floor(fahrenheit);
}