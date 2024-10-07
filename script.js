// console.log(DOM)

const app = document.getElementById('app');
console.log

//getElementbyID
const title = document.getElementById('title');
title.style.backgroundColor = "gray";
title.style.textAlign = "center";

// comsole.log(title);


//querySelector 
const genres = document.querySelectorAll("ul");

genres.forEach(genre => {
    genre.style.backgroundColor = "pink";
});