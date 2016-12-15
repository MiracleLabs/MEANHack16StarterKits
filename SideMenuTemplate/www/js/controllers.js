angular.module('starter.controllers', [])

//controller for Login
.controller('LoginCtrl', function($scope, $location, $ionicPopup) {
  $scope.Login = function() {
    var uname = document.getElementById('name').value;
    var pword = document.getElementById('pswd').value;
    if (uname == "Admin" && pword == "Admin") {
      $location.path('/app/SampleForm');
    } else {
      $ionicPopup.confirm({
        title: "Miracle ME alerts you",
        content: "Invalid username and password."
      })
    }
  }
})

//controller for Sample Form
.controller('SampleFormCtrl', function($scope, $http) {


})

//controller for Sample AJAX
.controller('SampleAJAXCtrl', function($scope) {

})

//controller for Sample List
.controller('SampleListCtrl', function($scope) {

})

//controller for Logout
.controller('LogoutCtrl', function($scope, $location) {
  $scope.logout = function() {
    $location.path('/login');
  }
});
