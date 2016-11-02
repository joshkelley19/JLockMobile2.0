"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('JLock', ['ionic', 'JLock.controllers', 'JLock.services1', 'JLock.services2', 'JLock.services3', 'JLock.controllers1', 'JLock.controllers2' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('account', {//account
    url: '/account',
    abstract: true,
    templateUrl: 'JLock/account.html'
  })

  // Each tab has its own nav history stack:

  .state('account.welcome', {//welcome
    url: '/welcome',
    views: {
      'account-welcome': {
        templateUrl: 'JLock/welcome.html',
        controller: 'WelcomeCtrl'
      }
    }
  })
  .state('account.vault', {//vault
    url: '/vault',
    views: {
      'account-vault': {
        templateUrl: 'JLock/vault.html',
        controller: 'ManagePasswordsCtrl'
      }
    }
  })

  .state('account.entry', {//vault.entry
      url: '/vault/:entryWebsite',
      views: {
        'account-vault': {
          templateUrl: 'JLock/vault-entry.html',
          controller: 'ManagePasswordsCtrl'
        }
      }
    })
  .state('account.newentry', {//vault
    url: '/vault',
    views: {
      'new-entry': {
        templateUrl: 'JLock/createentry.html',
        controller: 'CreatePasswordsCtrl'
      }
    }
  })
    .state('account.settings', {//settings
      url: '/settings',
      views: {
        'account-settings': {
          templateUrl: 'JLock/settings.html',
          controller: 'CreatePasswordsCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/account/welcome');//sign in

});
