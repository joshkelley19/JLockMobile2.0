angular.module('JLock.controllers', [])
    .controller('CreatePasswordsCtrl', function ($stateParams, $http, Account, Requests) {
        
        var getRandomPassword = function () {
            $http.get(Requests.passwordRequest())
                .then(function (response) {
                
                }, function (error) {
                
                });
        };

        var getScheme = function () {
            $http.get(Requests.)
                .then(function (response) {
                
                }, function (error) {
                
                });
        };


    });