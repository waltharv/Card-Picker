angular.module('starter.controllers', [])

.controller('AddCtrl', function($scope, $ionicPopup, $rootScope) {
  
  $scope.card = { value : "", suit : "" };
  
  
  $scope.faceValueSelect = function (event) {
    $scope.card.value = event.target.innerHTML.trim();
    
    
  };
  
  $scope.suitSelect = function (suit) {
    $scope.card.suit = suit;
    
  };
  
  $scope.addCard  = function () {
    //check card is set
    if ( $scope.card.value == '' ||  $scope.card.suit == '') {
      
    }else{
      
       
      for (var index = 0; index < $rootScope.cardImgs.length; index++) {
        var card = $rootScope.cardImgs[index];
        if (card.value === $scope.card.value 
        && card.suit === $scope.card.suit) {
          $rootScope.deck.push( $rootScope.cardImgs[index]);
        }
      }
      
      
      $scope.card = { value : "", suit : "" };
  
    }
    
  };
  
   $scope.valueShow = function (valString) {
    
    if ($scope.card.value === valString) {
      return true;
    }
    if ($scope.card.value === ''  && $scope.card.suit === '' ) {
      return true;
    }
     if ($scope.card.suit !== '' && $scope.card.value === '') {
       var toShow = true;
       var selectedSuit = $scope.card.suit;
       for (var index = 0; index < $rootScope.deck.length; index++) {
         if ($rootScope.deck[index].suit === selectedSuit  && $rootScope.deck[index].value === valString) {
            toShow = false;
         }
       }
       if (!toShow) {
         return false;
       }else{return true;}
      
    }
    
    return false;
  };
  $scope.suitShow = function (suitString) {
    
    if ($scope.card.suit === suitString) {
      return true;
    }
    if ($scope.card.suit === ''  && $scope.card.value === '' ) {
      return true;
    }
     if ($scope.card.value !== '' && $scope.card.suit === '') {
       var toShow = true;
       var selectedValue = $scope.card.value;
       for (var index = 0; index < $rootScope.deck.length; index++) {
         if ($rootScope.deck[index].value === selectedValue  && $rootScope.deck[index].suit === suitString) {
            toShow = false;
         }
       }
       if (!toShow) {
         return false;
       }else{return true;}
      
    }
    
    return false;
  };
  
  
  $scope.addReset = function () {
    $scope.card = { value : "", suit : "" };
  };
  
})

.controller('PickCtrl', function($scope, $rootScope) {
  $scope.pickCard = function() {
    
    //check if deck is declared
    if ($rootScope.deck && $rootScope.deck.length > 0) {
      var randomI = Math.floor(Math.random() * $rootScope.deck.length);
     
      $scope.picked = $rootScope.deck.splice(randomI, 1)[0];
         
    }else{
      
      
    }
  };
})


.controller('SettingsCtrl', function($scope, $ionicPopup, $rootScope) {
  $scope.shownCards = true;
  
  $scope.resetSelected = function () {
    if (!$rootScope.deck) {
      return;
    }
    var selectedCount = $rootScope.deck.length;
    for (var index = 0; index < selectedCount; index++) {
       $rootScope.deck.pop();      
    }
   
  };
  
  
  $scope.toggleShown = function() {
    if ($scope.isCardsShown()) {
      $scope.shownCards = false;
    } else {
      $scope.shownCards = true;
    }
  };
  $scope.isCardsShown = function() {
    return $scope.shownCards;
  };
 
});


