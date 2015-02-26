friday = angular.module('friday',[
]).controller('MainCtrl', [
    '$scope',
    function($scope){
      $http.get('/').success(function(data){
        console.log(data);
        $scope.test = data;
      });
    }]);