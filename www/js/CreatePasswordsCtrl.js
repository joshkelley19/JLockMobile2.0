angular.module('JLock.controllers1', [])
    .controller('CreatePasswordsCtrl', function ($stateParams, $http, Account, Requests) {
        
        var getRandomPassword = function () {
            $http.get(Requests.passwordRequest())
                .then(function (response) {
                
                }, function (error) {
                
                });
        };

        var getScheme = function () {
            $http.get(Requests.scheme)
                .then(function (response) {
                
                }, function (error) {
                
                });
        };


    });