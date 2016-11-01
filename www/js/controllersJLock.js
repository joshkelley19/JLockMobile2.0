angular.module('starter.controllers', [])

    .controller('WelcomeCtrl', function ($scope, $firebaseArray, $ionicModal, $stateParams) {
        $ionicModal.fromTemplateUrl('JLock/sign-in.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
    
        var firebase = new Firebase("https://jlock-84864.firebaseio.com/");
        var holder = $firebaseArray(firebase);
        $scope.firebaseDatabase = holder;
    
        $scope.$on("$ionicView.enter", function () {
            $scope.modal.show();
        });
    
        $scope.signIn = function () {
            $scope.modal.hide();
        };
    
    })

    .controller('VaultCtrl', function ($scope, $ionicModal, $firebaseArray, $http) {       $ionicModal.fromTemplateUrl('JLock/createentry.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
        });

        $scope.openModal = function () {
            $scope.modal.show();
        };
        //connect to spring boot
        var entriesFBDatabase = new Firebase("https://jlock-84864.firebaseio.com/joshkelley19").child('entries');
    
        var dbEntries = $firebaseArray(entriesFBDatabase);
    
        $scope.entry = {
            website: '',
            userName: '',
            password: ''
        };
    
        $scope.entriesFromFB = dbEntries;
    
//    *********************************************************
    
        $scope.passwordToBeGenerated = true;
        $scope.invalid = '';
        $scope.passLength = 10;
        $scope.letters = true;
        $scope.numbers = true;
        $scope.chars = true;
        var scheme = '';
        var choice = 1;
    
        $scope.allowPasswordGeneration = function () {
            $scope.passwordToBeGenerated = !$scope.passwordToBeGenerated;
        };
        var isInvalid = function(letter,number,charr) {
            $scope.invalid =(!letter&&!number&&!charr)?'Invalid! Select a Character Type':"";
            if($scope.invalid==="")return false;
            return true;
        };
        var theSwitch = function (num,letter,number,charr) {
            $scope.myLetter;
            switch (num) {
            case 1: $scope.myLetter = (letter)? 'R' : null; break;
            case 2: $scope.myLetter = (number)? 'N' : null; break;
            case 3: $scope.myLetter = (charr)? '!' : null; break;
            default: $scope.myLetter = null;
            }
            return $scope.myLetter;
        };
    
        $scope.generatePassword = function (passwordLength, letter, number, charr) {
            if (isInvalid(letter, number, charr)) return;
            var howLong = passwordLength, scheme = '', chosenSchemeLetter;
            for (var i = 0;i < howLong;i++) {
                chosenSchemeLetter = '';
                do{
                    choice = Math.ceil(Math.random()*3);
                    chosenSchemeLetter = theSwitch(choice,letter,number,charr);
                }while(chosenSchemeLetter === null);
            scheme += chosenSchemeLetter;
        };
            $http.get("http://www.passwordrandom.com/query?command=password&scheme="+scheme+"&format=json&count=1")
            .then(function (response) {
            $scope.entry.password = response.data.char.toString();
            //gives "no access control allow origin header" error
            });
        }
//    *****************************************************
    $scope.addEntry = function() {
        $scope.entriesFromFB.$add($scope.entry);
        
        $scope.entry = {
        website: '',
        userName: '',
        password: ''
        }
    };
    $scope.allowSubmit = function(){
        return $scope.entry.website===''||$scope.entry.userName===''||$scope.entry.password===''?true:false;
    };
    $scope.closeModal = function(){
        $scope.modal.hide();
    };
    //$http adds http service. will request json from JLock Java
    //$scope.entries = Entries.all();
//    $http.get("/JLockentries.json")
//    .then(function(response) {//loads json objects to entries array
//        $scope.entries = response.data;})
    })

    .controller('EntryCtrl', function ($scope, $firebaseArray, $stateParams) {
    
        var entriesFBDatabase0 = new Firebase("https://jlock-84864.firebaseio.com/joshkelley19").child("entries");
    
    var entryHolder = $firebaseArray(entriesFBDatabase0);
    
    $scope.dbEntries = entryHolder;
        
    $scope.test = $stateParams.entryWebsite;
    $scope.deleteJLockEntry = function (index){
       $scope.dbEntries.$remove(index);
//        $state.go("account-vault");
    };
        
})

.controller('SettingsCtrl', function($scope, $stateParams, $http) {
    
});
//voice recognition for passwords