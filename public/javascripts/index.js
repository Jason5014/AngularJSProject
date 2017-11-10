var app = angular.module('myApp', []);
app.controller('MainCtrl', ['$http', function($http){
    var self = this;
    self.items = [];
    $http.get('/api/note').then(function(res){
        self.items = res.data;
    }, function(err){
        console.error('Error while fetching notes');
    });
}]);