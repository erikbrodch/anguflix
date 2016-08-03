app.controller('allMovieCntrl', function($scope, movieServices) {

  $scope.allMovies = movieServices.allMovies
});