app.controller('allMovieCntrl', function($scope, movieServices) {
//connect allmovies section to array
  $scope.allMovies = movieServices.allMovies
//connect mycollection in html to services
  $scope.myMovies = movieServices.myMovies

    $scope.budget = movieServices.budget

  //add movies to my collection

  $scope.addMovieToMyMovies = function(index) {
  movieServices.addMovieToMyMovies(index)

  }

//remove movies from my collection

$scope.removeMovieFromCollection = function(index) {
  movieServices.removeMovieFromCollection(index)
}

//adjust budget


});