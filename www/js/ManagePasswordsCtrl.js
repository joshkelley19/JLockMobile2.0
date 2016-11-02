angular.module('JLock.controllers2', [])
    .controller('ManagePasswordsCtrl', function ($stateParams, $http, Account, Requests) {
        var currentUser = Requests.passwordRequest(1);
        console.log(currentUser);
    });