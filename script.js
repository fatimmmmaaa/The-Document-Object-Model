// console.log(dom)

// const app = document.getElementById('app');


//songs

const songsByGenre = {
    HipHop: [
        { title: "Middle Child", artist: "J.Cole", votes: 0 },
        { title: "YONKERS", artist: "Tyler the Creator", votes: 0 },
        { title: "Backseat Freestyle", artist: "Kendrick Lamar", votes: 0 },
        { title: "Hypnotize", artist: "Biggie Smalls", votes: 0 },
        { title: "The Real Slim Shady", artist: "Eminem", votes: 0 },
        { title: "Hail Mary", artist: "Tupac", votes: 0 }
    ],
    Pop: [
        { title: "Espresso", artist: "Sabrina Carpenter", votes: 0 },
        { title: "The Climb", artist: "Miley Cyrus", votes: 0 },
        { title: "24k Magic", artist: "Bruno Mars", votes: 0 },
        { title: "What Do You Mean?", artist: "Justin Beiber", votes: 0 },
        { title: "Thank U, Next", artist: "Ariana Grande", votes: 0 },
        { title: "Hips Dont Lie", artist: "Shakira", votes: 0 }
    ],
    RnB: [
        { title: "Novocane", artist: "Frank Ocean", votes: 0 },
        { title: "Adorn", artist: "Miguel", votes: 0 },
        { title: "No Guidance", artist: "Chris Brown", votes: 0 },
        { title: "S&M", artist: "Rihanna", votes: 0 },
        { title: "Get You", artist: "Daniel Caesar", votes: 0 },
        { title: "Redbone", artist: "Childish Gambino", votes: 0 }
    ]
};


const musicContainer = document.getElementById("musicContainer");

const songContainer = document.querySelector("#songContainer");
const buttonContainer = document.querySelector("#buttonContainer");


// //getElementbyID
// const title = document.getElementById('title');
// title.textContent = "Top Songs by Genre";


const genres = document.querySelectorAll("ul");
genres.forEach(genre => {
    genre.style.backgroundColor = "pink";
});


//childNode 
if (genres.length > 0) {
console.log (genres[0].parentNode);
}

