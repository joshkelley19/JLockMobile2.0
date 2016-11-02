angular.module('JLock.controllers2', [])
    .controller('ManagePasswordsCtrl', function ($stateParams, $http, $location, Account, Requests) {
        
        var self = this;
        self.allPasswords = {};
        var requests = Requests.getRequests();
        console.log(requests);
        $http.get(requests.springBoot+requests.entries+"1")
            .then(function (response) {
            console.log(response);
            self.allPasswords = response.data;
            console.log(self.allPasswords);
        }, function (error) {
            
        });
//        var allPasswords = Account.account.entries;
        self.entryIndex = $stateParams.index;
        var name = "Mike";
        self.goToNewEntryPage = function () {
            $location.path("account/newentry");
        };
    
        self.deleteJLockEntry = function (id) {
            $http.delete(requests.springBoot+requests.deleteEntry+id)
                .then(function (response) {
                console.log(response.data);
            }, function (error) {
                console.log(error);
            });
        };
    });