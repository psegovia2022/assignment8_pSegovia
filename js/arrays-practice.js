//STEP 1
// var movies = ["Dancer in the dark", "Machuca", "Gorillas in the mist", "Jurassic Park", "Outbreak"];
// console.log(movies[1]);

//STEP 2
// var movies = new Array(5);
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// console.log(movies[0]);
// console.log(movies);

//STEP 3
// var movies = new Array(5);
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";

// movies.splice(2, 0, "Tesis");

// console.log(movies.length);

//STEP 4
// var movies = [];
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";

// movies.shift();
// console.log(movies);

//STEP 5

// Array.prototype.name = function() {

// };

// var index;
// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// for (index in movies) {
//     if(movies.hasOwnProperty(index)) {
//         console.log(movies[index]);
//     }
// }

//STEP 6

// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// for (let i of movies) {

//     console.log(i);
// }

//STEP 7
// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// movies.sort();
// for (let i of movies) {

//     console.log((i));
// }


//STEP 8

// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "The Circle"];

// console.log(`Movies I like: \n\n${movies[0]} \n${movies[1]} \n${movies[2]} \n${movies[3]} \n${movies[4]} \n${movies[5]} \n${movies[6]}\n\nMovies I regret watching: \n\n${leastFavMovies[0]} \n${leastFavMovies[1]} \n${leastFavMovies[2]}` )


//STEP 9
// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "The Circle"];
// var allMovies = movies.concat(leastFavMovies);

// console.log(allMovies.reverse());

//STEP 10
// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "The Circle"];
// var allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.pop());

//STEP 11

// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "The Circle"];
// var allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.shift());

//STEP 12
// var movies = []
// movies[0] = "Dancer in the dark";
// movies[1] = "Machuca";
// movies[2] =  "Gorillas in the mist";
// movies[3] = "Jurassic Park";
// movies[4] = "Outbreak";
// movies[5] = "Tesis";
// movies[6] = "Braveheart";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "The Circle"];
// var allMovies = movies.concat(leastFavMovies);

// allMovies.splice(7, 9, "La vida de los otros");
// console.log(allMovies);

// //STEP 13
// var movies = [
//     ["Gorillas in the mist", 1], 
//     ["Outbreak", 2], 
//     ["Machuca", 3], 
//     ["Dancer in the dark", 4], 
//     ["Tesis", 5]];

//     movies.forEach(function (movies) {
//         var movieNames = movies.filter(function(names){
//         return typeof names !== "number";}); 
//         console.log(movieNames);
//         })



//STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployees = function(employees) {
//     console.log(`Employees: \n\n`);
//     employees.forEach(function(employees) {
//         console.log(`${employees.toUpperCase()}`);
//     })};

// showEmployees(employees);

//STEP 15


// function filterValues(array) {
//     array = array.filter(isEligible);
//     return array;
// } 

// function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//STEP 16
// let numbers = [1, 2, 20, 94, 5, 67, 7, 8, 9, 10];
// function anyNumber(numbers) {
//     return numbers[Math.floor(Math.random()*numbers.length)];
// } ;

// console.log(anyNumber(numbers));

//STEP 17

let numbers = [1, 29, 20, 294, 5, 670, 7, 8, 9, 10];
let largestNumber = numbers.reduce(function (accumulatedValue, currentValue) {
    return Math.max(accumulatedValue, currentValue);
});

console.log(`The largest number: ${largestNumber}`);