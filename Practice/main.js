// // alert('Hello, bitch');

// // const result = confirm("Press this button");
// // console.log(result);

// const category = 'toys';

// console.log(`https://thisurl.com/${category}/5`);

// const user = "Slava";

// alert(`Hello, ${user}`);

let numberOfFilms = +prompt("How many films have you watched?", "");

alert(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt("One of the last watched movies", ""),
          secondQuestion = prompt("How do you rate it?", "");

    if (firstQuestion != null && secondQuestion != null && firstQuestion != "" && secondQuestion != "" && firstQuestion < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
        console.log(personalMovieDB);
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("You have watched not so many films");

} else if 
(personalMovieDB.count > 10 && personalMovieDB.count <30) {
    alert("You  are ordinary viewer");

} else if 
(personalMovieDB.count > 30) {
    alert("You  are flim lover");

} else {
    alert("Error ocured");
}

personalMovieDB.count < 10 ? alert("You have watched not so many films") : 
personalMovieDB.count > 10 && personalMovieDB.count <30 ? alert("You  are ordinary viewer") :
personalMovieDB.count > 30 ? alert("You  are flim lover") :
alert("Error ocured");

switch (personalMovieDB.count) {
    case personalMovieDB.count < 10:
        alert("You have watched not so many films");
        break;

    case personalMovieDB.count > 10 && personalMovieDB.count <30:
        alert("You  are ordinary viewer");
        break;

    case personalMovieDB.count > 30:
        alert("You  are flim lover");
        break;

    default:
        alert("Error ocured");   
}


