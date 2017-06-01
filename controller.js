/**
 * Created by CS-5 on 4/5/2017.
 */
var app = angular
    .module('midwaydental', []);


app.controller('RecipeController', ['$http','$scope','$location','$timeout', function ($http, $scope, $location, $timeout) {
    $scope.list1='chetas';

$scope.fname = '';
    $scope.list = null;


    $http.get('directory/directory.JSON').success(function (response) {
       $scope.list = response;

       console.log($scope.list);

    });


    $scope.propertyName = '';
    $scope.reverse = true;
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };



}]);



