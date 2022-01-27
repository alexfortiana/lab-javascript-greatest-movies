// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let allDirector = movies.map((element)=>{
    return element.director
  })
  return allDirector
}
 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let stevenMovies = movies.filter((dramaMovies) => {
    return dramaMovies.director === "Steven Spielberg" && dramaMovies.genre.includes("Drama") 

  })
  return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let totalAverage = movies.reduce((accumulator, element) => {
    if (element.score === undefined){
      return accumulator
    } else {
      return accumulator + element.score / movies.length
      
    }
    
    
  }, 0)
  return Number(totalAverage.toFixed(2))
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let filterDrama = movies.filter((element)=>{
    return element.genre.includes("Drama")
  })
  let totalDrama = filterDrama.reduce((accumulator, element)=> {
    if (element.score === undefined){
      return accumulator
    } else {
      return accumulator + element.score / filterDrama.length
      
    }
    
    
  }, 0)
  return Number(totalDrama.toFixed(2))
  }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyArr = JSON.parse(JSON.stringify(movies)) 
  let sortedMovies = copyArr.sort((first, second) => {
    if(first.year > second.year) {
      return 1
    } else {
      return -1
    }
  })
  return sortedMovies
}

/*
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newFilms = movies.filter((element) => {
    return movies.slice(0, 20)
  })
  
  let orderFirst20 = newFilms.sort(first, second){
    if(first.title > second.title){
      return 1
    } else if(first.title < second.title){
      return -1
    }
    return 0
  } 
  let twentyMovies = newFilms.sort(orderFirst20)

  return twentyMovies

}
*/

 


  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
