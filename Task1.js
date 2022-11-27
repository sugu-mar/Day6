class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;

    if (rating == null || rating == "") {
      return (this.rating = "PG");
    } else {
      return (this.rating = rating);
    }
  }
  getPG() {
    var flim = arrayMovie.filter((element) => element.rating == "PG");
    return flim;
  }
  getMOVIES() {
    var flim1 = `The movie title ${this.title} and its rating is ${this.rating} and its studio is ${this.studio}`;
    return flim1;
  }
}

var movie1 = new Movie("Suspect x", "Fuji TV", "PG");
var movie2 = new Movie("Interstellar", "Paramount Pictures", "PG");
var movie3 = new Movie("TOP GUN MAVERICK", "Skydance Media", "MA15+");
var movie4 = new Movie("Ponniyin Selvan: I", "Lyca Productions", "PG");
var movie5 = new Movie("Vikram Vedha", "YNOT Studios");
var movie6 = new Movie("Kaithi", "Dream Warrior Pictures", "PG");
var movie7 = new Movie("Vada Chennai", "Lyca Productions", "MA15+");

const arrayMovie = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

var getPGMovie = [];

var getMovieDetails = [];

//  Using Loop to print all movies that have PG

for (const key in arrayMovie) {
  var result = arrayMovie[key].getPG();
  if (result[key] != undefined) {
    getPGMovie.push(result[key]);

    getMovieDetails.push(arrayMovie[key].getMOVIES());
  }
}
console.log(`\n\n getPG:\n\n`);

console.log(getPGMovie);

console.log(`\n\n getMOVIES:\n\n`);

console.log(getMovieDetails);