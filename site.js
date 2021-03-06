/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
// 
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//    
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating 
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const my_app = new Vue({
      el: '#my_app',
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],

            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + Rich's Top 8 Movies.",
            owner: "Rich",
            github: "https://github.com/RichardFebres/rfebres-p3"
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            //I don't like date time objects so I chose to use a 3rd party library for this to make it more succint
            makeTextDate(dateArray) {
                  let textDate = moment("" + dateArray[0] + dateArray[1] + dateArray[2]).calendar();
                  return textDate;
            },

            like(movie) {
                  movie.likes++;
            },

            dislike(movie) {
                  movie.dislikes++;
            },

            //Increment movie poster index
            posterClick(movie) {
                  if (movie.posterindex >= movie.posters.length - 1) {
                        movie.posterindex = 0;
                  } else {
                        movie.posterindex++;
                  }
            },

            //Convert raw runtime into hours & minutes
            timeText(minutes) {
                  let mins = Math.round(minutes % 60);
                  let hours = minutes / 60;
                  return Math.trunc(hours) + " hour(s) and " + mins + " minutes";
            }
      }
});
	

