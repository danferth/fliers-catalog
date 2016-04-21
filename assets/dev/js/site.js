var app = angular.module('APP', []);

app.controller('catalog', ['$scope', '$http', function($scope, $http){
    $http.get('assets/build/json/fliers.json').then(function(res){
        $scope.data = res.data;
        
        $scope.thActive = true;
        $scope.listActive = false;
        
    });
}]);