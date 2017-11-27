const myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('hello from controller!');
    const refresh = function() {
        $http.get('/sourceList').success(function(res) {
            console.log('got data');
            $scope.sourceList = res;
            $scope.source = '';
        });
    }
    refresh();
    $scope.addSource = function() {
        console.log($scope.source + 'is adding');
        $http.post('/sourceList', $scope.source).success(function(res) {
            console.log(res + 'is add ');
            refresh();
        });
    };
    $scope.removeSource = function(id) {
        console.log('remove' + id);
        $http.delete('/sourceList/' + id).success(function() {
            console.log('$scope.removSource ');
            refresh();
        });
    };
    $scope.editSource = function(id) {
        console.log(id + ' is editting');
        $http.get('/sourceList/' + id).success(function(res) {
            $scope.source = res;
        });
    };
    $scope.update = function(id) {
        console.log($scope.source._id + 'is updating');
        $http.put('/sourceList/' + $scope.source.id, $scope.source).success(function(response) {
            refresh();
        });
    };
    $scope.deselect = function() {
        $scope.source = '';
    };

}]);