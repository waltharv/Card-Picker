// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
  
  $rootScope.cardImgs = [];
  $rootScope.deck = [];

  
  var faceValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  var suits = ['clubs', 'diamonds', 'spades', 'hearts'];

  
  for (var i = 0; i < suits.length; i++) {
    var s = suits[i];
    for (var j = 0; j < faceValues.length; j++) {
      var v = faceValues[j];
      
      $rootScope.cardImgs.push({ url : 'img/cards/' + ((i*13)+j+1) + '.png',
          value : v,
          suit: s
       });
      
    }
    
  }

  
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.add', {
    url: '/add',
    views: {
      'tab-add': {
        templateUrl: 'templates/tab-add.html',
        controller: 'AddCtrl'
      }
    }
  })

  .state('tab.pick', {
      url: '/pick',
      views: {
        'tab-pick': {
          templateUrl: 'templates/tab-pick.html',
          controller: 'PickCtrl'
        }
      }
    })

    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })


  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/add');

});
