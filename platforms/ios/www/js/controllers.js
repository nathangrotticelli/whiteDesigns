angular.module('sociogram.controllers', ['ionic'])

  //for side menu
  .controller('AppCtrl', function ($scope, $state,$location,PetService, OpenFB, $timeout) {

      // $scope.main={};
      // alert($state.current.name);
      // $scope.main.tabs = false;
      $scope.shouldHide = function () {
        if($state.current.name=='app.loginPrompt') {
                return true;
        }
        else{
          return false;
        }
    }
      // $scope.main.dragContent = true;
      // $scope.main.backBtn = false;


    //logout functionality
    // $scope.logout = function () {

    //   // if(!$state.is('app.login')){
    //     OpenFB.logout();
    //     PetService.logOut();

    //   $state.go('app.login');
    //   // }

    // };

      // $scope.loginPrompt = function() {
      //        $location.path('/app/loginPrompt');
      //        PetService.setTabs(false);
      //        StatusBar.styleDefault();
      //      };

    // $scope.goEvents = function(){
    //   $timeout(function() {

    // },100);
    //   $location.path('/app/person/me/feed');
    //   //allows for scroll position on the event feed to be maintained. Think about doing this for the other menu buttons
    // };

    //   $scope.goEvents = function(){

    // if(PetService.getSingleView()==true){
    //   $location.path('/app/event-detail');
    //    $scope.main.backBtn = true;
    // }else{
    //   // PetService.setBack(false);
    //     StatusBar.styleLightContent();
    //   $location.path('/app/login');
    // }

    // };

//       $scope.goShop = function() {
// //this is lagging, why?
//     // $state.go("app.feed");
//     // $state.go("app.feed");
//     // $timeout(function() {

//     // },100);

//     // if(PetService.getShopView()==true){
//       // $location.path('/app/shop-detail');
//     // } else{
//       $location.path('/app/shop');
//     // }

//  //     // myPopup.close(); //close the popup after 3 seconds for some reason
//  //  }, 500);
//     };

    // $scope.goAdd = function(){
    //   $state.go('app.addAnEvent');
    // };

    // $scope.goHelp = function(){
    //   $state.go('app.help');
    // };

     $scope.shareBtn = function(a,b,c,d){
      analytics.trackEvent('button', 'click', 'share button', 1);
      // ga('send', 'event', 'button', 'click', 'share button', 1);
     window.plugins.socialsharing.share(a,b,c,d);
    };



  })
.controller('BackCtrl', function ($scope, $ionicModal, $ionicPlatform, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicPopup, $http, $location, $ionicLoading ,OpenFB, $state, $stateParams, PetService) {


    $scope.goBack = function(){
         // PetService.setSingleView(false);
         // alert("here");
         // PetService.setSingleView(false);
         // alert("here");
         $event.stopPropagation();
          $ionicNavBarDelegate.back();
          // alert("here");
          // $ionicNavBarDelegate.showBackButton(false);
          // $scope.main.backBtn = false;
    };
    $scope.closeMe = function(){
        // alert('here');
        // $event.stopPropagation();
        $ionicNavBarDelegate.back();

        // $scope.goBack();
              // alert($ionicHistory.backView());
      };
       $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

       $scope.joinDimepiece = function(){
        $scope.modal.show();

      };



  //     $scope.openModal = function() {

  // };
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


  }) // end of back controller

  .controller('LoginCtrl', function ($scope, $ionicPlatform, $ionicNavBarDelegate, $ionicScrollDelegate, $ionicPopup, $http, $location, $ionicLoading ,OpenFB, $state, $stateParams, PetService) {
    // $scope.main = {};
    // alert(window.StatusBar);
$scope.goAmazon = function(link){
  window.open(link,"_system");
};

$scope.goCat = function(link){
        // PetService.setShopSingle($scope.watchEx);
         // $scope.main.backBtn = false;
          // $state.go("app.shopDetail");
       $location.path('/app/shopDetail');
};

     $scope.refreshWatches = function(){
      // var userItem = $scope.userItem;
      // var notCount = $scope.userItem.notifications.length;
      // alert($scope.doAlert);
      // if($scope.doAlert == true){
        // alert("here");
      // $scope.doAlert = false;
      // var schoolName = $scope.userItem.userSchool;
      // var userEmail = $scope.userItem.userEmail;
    $http.post('http://stark-eyrie-6720.herokuapp.com/watchesGet',
          {testInfo: 'testInfo recieved'}).error(function(err){
            // alert(err);
            $scope.showAlert("Internet connection could not be acheived at this time. Try again later.",null);
          }).then(function (res1) {
          // alert(res1.data.watchList.listName);

          // $scope.events2 = res1.data.watchList.watchIndex;
          PetService.refreshWatches(res1.data.watchList.watchesIndex);

          // PetService.setWatchList(res1.data.watchList.watchesIndex);
          // $scope.watchList = res1.data.watchList.watchesIndex;
         // alert(res1.data.watchList.watchesIndex);
       }).then(function(){
              $scope.watchList = PetService.getWatchList();
             $scope.$broadcast('scroll.refreshComplete');
       });

        // alert(schoolName);
        //  $http.post('http://stark-eyrie-6720.herokuapp.com/watchesGet', {testInfo: 'testInfo recieved'})
        //  .error(function(err){
        //     alert(err);
        //        // $scope.scopeCards();
        //      // $scope.doAlert = true;
        //    $scope.$broadcast('scroll.refreshComplete');
        //   }).success(function(res2){
        //     // alert('here1');
        //   // alert(res.Item.schoolName)

        // // alert(PetService.refreshWatches());
        // alert(res2.data);
        //   // $scope.watchList = PetService.getWatches();
        //     $scope.$broadcast('scroll.refreshComplete');
        // })

    };
// window.open('http://apache.org', '_blank', 'location=yes');

    $scope.getCover = function(watchCover){
  if(watchCover==undefined){
    return "http://i62.tinypic.com/2zznq55.jpg";
  }
  else{
    return watchCover;
  }
    // PetService.setStart(false);
    // $scope.startCard = false;
    // alert($scope.cards[1]);
  };

     //allows sharing functionaility
    $scope.shareBtn = function(a,b,c,d){
      // analytics.trackEvent('button', 'click', 'share button', 1);
      // ga('send', 'event', 'button', 'click', 'share button', 1);
     window.plugins.socialsharing.share(a,b,c,d);
    };

    $scope.getWatches = function(){

          $http.post('http://stark-eyrie-6720.herokuapp.com/watchesGet',
          {testInfo: 'testInfo recieved'}).then(function (res1) {
          // alert(res1.data.watchList.listName);

          // $scope.events2 = res1.data.watchList.watchIndex;
          PetService.setWatchList(res1.data.watchList.watchesIndex);
          $scope.watchList = res1.data.watchList.watchesIndex;
         // alert(res1.data.watchList.watchesIndex);
       });

    };
// $scope.setTabs = function(){}

      $scope.loginPrompt = function() {

           $location.path('/app/loginPrompt');
             // PetService.setTabs(false);
             StatusBar.styleDefault();

//this is lagging, why?
    // $state.go("app.feed");
    // $state.go("app.feed");
    // $timeout(function() {

    // },100);
    };
      $scope.goLogin = function(){

    if(PetService.getSingleView()==true){
      $location.path('/app/event-detail');
       // $scope.main.backBtn = true;
    }
    else{
      // PetService.setBack(false);
        StatusBar.styleLightContent();
      $location.path('/app/login');
    }

    };

    //   $scope.goBack = function(){
    //     // PetService.setBack(false);
    //    $ionicNavBarDelegate.back();
    //    // $scope.main.backBtn = true;
    // };

        //expands single event
    $scope.go_here = function (watch) {
          // $scope.scroll = $ionicScrollDelegate.getScrollPosition().top;
      PetService.setSingle(watch);
        // PetService.setBack(true);
      // PetService.setSingleView(true);
       // StatusBar.styleDefault();
       // PetService.setBack(true);
      $location.path('/app/eventDetail');
      // $scope.main.backBtn = true;
        // $ionicScrollDelegate.scrollTop(false);
    };


      // window.StatusBar.backgroundColorByName("red");

    // $cordovaStatusbar.overlaysWebView(true);

  // $cordovaStatusBar.style(1); //Light

     // $scope.events2 = [];




     $scope.expandPrice= function(event) {
     event.showPrice = !event.showPrice;
    };
     $scope.addWish= function(watch) {
     watch.watchLiked = true;
     watch.watchLikes.push({"name":"Nathan"});
    };
     $scope.removeWish= function(watch) {
      watch.watchLiked = false;
      watch.watchLikes.pop();
    };
    //used to throw better looking popup messages to user
    $scope.showAlert = function(message,title) {
      if(title==undefined){
        title=null;
      }
      $ionicPopup.alert({
        title: title,
        content: message
      }).then(function(res) {
        // console.log('Alert Shown.');
      });
    };

    $scope.alert2 = function(){
      $location.path('/app/loading');
    };

    setTimeout(function() {
      navigator.splashscreen.hide();
    }, 500);

    // $scope.noPop='false';
    // queryGo=false;
      // $scope.main.dragContent = false;
      // $scope.main.tabs = true;
      // $scope.main.tabs = PetService.getTabs();
      // $scope.main.backBtn = PetService.getBack();

      // PetService.setTabs(true);
       // PetService.setBack(false);
      // $ionicScrollDelegate.scrollTop(false);
     // $scope.singleView = PetService.getSingleView();
     $scope.singleWatch = PetService.getSingle();

      $scope.singleShopWatch = PetService.getSingle();

    // if(PetService.getEvents2().length<1){
      // $scope.getWatches();
    // }
    // else{
    if(PetService.getWatchList().length==0){
      $scope.getWatches();
    }
    $scope.watchList = PetService.getWatchList();
    $scope.shopCatList = PetService.getCatList();
    // }
    // $scope.doThis2=function(){
    //   // $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
    //   $scope.showAlert("We couldn't verify that as a valid university email. Make sure you are on the right portal for your respective university, and that you entered your OWN valid email. If you are in fact a student at this school, and continue to experience trouble, shoot us an email at UNightlifeTeam@gmail.com.");
    //   $scope.showAlert('Facebook connection failed.');
    //   $scope.showAlert("Event Added to Your Calendar.");
    // }

  }) // end of login controller

  //controller for an expanded single event
  // .controller('PetDetailCtrl', function($state,) {
  //   // $scope.main = {};
  //   $scope.main.dragContent = true;
  //   // alert(main.dragContent);
  //   //retrieves single event info


  // })
// .controller('CardCtrl', function ($scope, $ionicSwipeCardDelegate) {
//   $scope.goAway = function() {
//     var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);GGFgo
//     card.swipe();
//   };
// })

  //controller for event feed, starts analytics when people enter
  .controller('FeedCtrl', function ($scope,$timeout,$state,$http,$ionicSwipeCardDelegate,$ionicNavBarDelegate,$ionicScrollDelegate, $ionicPopup, $ionicPopover,$stateParams, OpenFB, PetService, $location, $ionicLoading) {

    // initial scope setup

    // alert('here');
    // $scope.predicate=event.timeOfEvent;
    // $scope.predicate2 = ;
    // $scope.loadFeed();

$scope.findFriends2 = function(){
  var userProfId = $scope.userProfId;
  var userName = $scope.userItem.userName;
var userSchool = $scope.userItem.userSchool;
 // alert(userSchool);
 //  alert(userName);
 //  alert(userProfId);

  OpenFB.get("/"+userProfId+"?fields=friends",{limit:1300}).success(function(red){
        fbFriends = red.friends.data;//this is an array with friend objects
        $http.post('http://stark-eyrie-6720.herokuapp.com/findFriends', {userProfId:userProfId,userSchool:userSchool,fbFriends:fbFriends}).error(function(){}).success(function(res){
            if(res.userIds.length==0){
            PetService.setUNFriends(["none"]);
          }else{
            PetService.setUNFriends(res.userIds);
          }
            PetService.setNewUser("no");
            $http.post('http://stark-eyrie-6720.herokuapp.com/newFriend', {fbFriends:res.userIds,userName:userName,userProfId:userProfId}).error(function(){}).success(function(idc){})
        });
   });
};

// $scope.countFollowers = function(){

//   // var userItem = $scope.userItem;
//   var userProfId = $scope.userProfId;
//   // alert('here222');
//   $http.post('http://stark-eyrie-6720.herokuapp.com/followCount',
//         {userProfId:userProfId}).error(function(){
//           // $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
//         }).success(function(res){
//           // return res.count;
//           // count = res.count;
//           // alert(res.count);
//            // alert('here2223');
//            // PetService.setFollowCount(res.count);
//            $scope.followCount = res.count;
//           // $scope.followCount = res.count;
//           // $state.go("app.friends");
//           // alert("worked!");
//           // alert();
//         });
//   };

  //   $scope.getUnwatchedCards = function(){

  //   //   if($scope.cards[0].name != $scope.singleEvent.name){

  //   // }
  //     // alert('here');
  //     // if($scope.cards == undefined){
  //     //   $scope.cards == PetService.getCards();
  //     // }
  //     var answerArray12 = [];
  //     var allCards = PetService.getCards();

  //     // if( PetService.getStart()== );
  //     // $scope.startCard == false;)

  //   allCards.forEach(function(indCard) {
  //       if ($scope.foll9($scope.userItem.watchList, indCard)!=true){
  //     answerArray12.push(indCard);
  //         //   friend.education.forEach(function(schoolObj){
  //         // })
  //     }
  //   });
  //   return answerArray12;
  //     // return answerArray12;

  // };

      // alert(indCard);
      // alert($scope.singleEvent);
      // alert(indCard==$scope.singleEvent);
            // alert();
          // function isNotEmpty(o){
          //     for(var i in o){
          //         if(o.hasOwnProperty(i)){
          //             return true;
          //         }
          //     }
          //     return false;
          // };
          // var a00 = PetService.getCards();
          // var positionOfCard = $scope.arrayObjectIndexOf(a00, indCard.name, "name");


      // alert(positionOfCard);
      // var positionOfCard = $scope.arrayObjectIndexOf($scope.cards, undefined, "name");
      // alert($scope.cards.length);

  //     if (positionOfCard > -1) {
  // // alert(index);
  //       $scope.cards.splice(positionOfCard, 1);
  //       PetService.setCards($scope.cards);
  //       $scope.tinderSwipe(card);
  //        // $scop
  // //     }
  //   if($scope.cards&&$scope.cards.length==0){
  //     // alert('hellay');
  //     // alert('here');
  //     // alert($scope.cards[positionOfCard].name);
  //     // alert($scope.cards);
  //     // alert(JSON.stringify($scope.cards));

  //   }else{
  //   }



          // }
          // || ($scope.cards[positionOfCard].name == indCard.name)
// (isNotEmpty($scope.singleEvent)&&indCard.name==$scope.singleEvent.name)
// $scope.currentCard =PetService.getStart() == false &&|| $scope.cards && indCard.name == $scope.cards[0].name


      // if($scope.cards!=undefined){
      //   alert($scope.cards[0].name);
      // }

      // alert(a00[0].name);
       // alert($scope.startCard);
       // if($scope.cards&&$scope.cards.length>0){
        // alert(PetService.getCards()[0].name);
        // alert(PetService.getCards()[positionOfCard].name);
       // }


      // alert();

      // alert('indCard==$scope.singleEvent');
      // $scope.cards.push(indCard);


      // else{
      //   // alert(indCard.name);
      //   // alert(PetService.getStart());
      //   // alert(PetService.getCards()[0].name);

      //   // alert(indCard.name == PetService.getCards()[0].name);

      //   if(indCard.name == PetService.getCards()[0].name){
      //     alert(indCard.name);
      //   }
      // }


          // alert('event is watched');
            // console.log
           // return i;
      // PetService.setCards(answerArray12);



   $scope.startSwipe = function(){
    PetService.setStart(false);
    $scope.startCard = false;
    // alert($scope.cards[1]);
   };

    $scope.scopeCards = function(){
      // PetService.setStart(true);
      // $scope.startCard == true;
      PetService.setCards(["start"]);
      // $scope.startCard == true;
      $scope.cards = PetService.getCards();
      // $scope.loading=false;
      // $scope.startCard == false;

    //   $timeout(function() {
    //        $scope.loading=false;
    // }, 500);
      // PetService.setCards($scope.cards);
      // PetService.setCards($scope.cards);
      // PetService.setCards($scope.cards);
    };
    // $scope.scopeCards2 = function(){
    //   // PetService.setStart(true);
    //   // $scope.startCard == true;
    //   // PetService.setCards(["start"]);
    //   // $scope.startCard == true;
    //   // $scope.cards = PetService.getCards();
    //   // $scope.loading=false;
    //   // $scope.startCard == false;

    //   $timeout(function() {
    //        $scope.loading=false;
    // }, 500);
    //   // PetService.setCards($scope.cards);
    //   // PetService.setCards($scope.cards);
    //   // PetService.setCards($scope.cards);
    // };
      // .then(function() {
      //   alert('Alert Shown.');
      //   $scope.cards = $scope.getUnwatchedCards();
      // });
      // if(PetService.getCards()==){
      //   //ii am a herereh
      // }
 $scope.getCover = function(eventCover){
  if(eventCover==undefined){
    return "http://i62.tinypic.com/2zznq55.jpg";
  }
  else{
    return eventCover;
  }
    // PetService.setStart(false);
    // $scope.startCard = false;
    // alert($scope.cards[1]);
  };

     // $scope.cards = PetService.getCards();

      //  for(i = 0; i < $scope.cards.length; i++) {
      //   if ($scope.cards[i].watched){
      //     alert('event is watched');
      //       // console.log
      //      // return i;
      //   }
      // }
        // if ($scope.foll9($scope.userItem.watchList,$scope.cards[i])){
        //   alert('event is watched');
        //     // console.log
        //    // return i;
        // }


    // if(events[key].watched==true)

    // $scope.startCard = false;
    // alert($scope.cards[1]);
   // };

   $scope.getDateInit = function(event){
    if(event.timeString){
        var a = event.start_time+' '+event.timeString.substr(0, 5)+' '+event.timeString.substr(5,6);
        var b = Date.parse(a, "mm/dd/yyyy hh:mm tt");
    }
    else{
      var b = Date.parse(event.start_time,"mm/dd/yyyy");
    }
    return b;
   };


//  for (x=0;x<c.length;x++){
//     // if(c[x]){
//     if(c[x].time){
//         a = c[x].date+' '+c[x].time.substr(0, 5)+' '+c[x].time.substr(5,6);
//         // console.log(a);
//         c[x].eventDate = Date.parse(a, "mm/dd/yyyy hh:mm tt");
//     }
//     else{
//       c[x].eventDate = Date.parse(c[x].date,"mm/dd/yyyy");
//     }
// // }

// }

   // alert($scope.cardTypes.length);
   // var a4 = $scope.cardTypes;
  // $scope.cards = a4.slice.call(a4, 0);
  // alert($scope.cards.length);

// alert('here2');

$scope.arrayObjectIndexOf=function(myArray, searchTerm, property) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm){
            console.log
           return i;
        }
    }
    return -1;
};

    // $scope.scrollTop = function() {
    // $state.go('app.feed');
    // };
    $scope.goTicket = function() {
      //go to ticket link
      window.open($scope.singleEvent.ticketLink,"_system");
       var schoolName = PetService.getSchool();

      $http.post('http://stark-eyrie-6720.herokuapp.com/ticketCount', {schoolName:schoolName}).success(function(){
        // alert("worked!");
      })
      //add one to counter
    // $location.path('/app/person/me/feed');
    };

    $scope.goBack = function() {
//this is lagging, why?
    // $state.go("app.feed");
    // $state.go("app.feed");
  $timeout(function() {

    }, 100);

  PetService.setSingleView(false);

$location.path('/app/person/me/feed');

 //     // myPopup.close(); //close the popup after 3 seconds for some reason
 //  }, 500);
    };


    // Show a custom alertDismissed
    //
    $scope.showAlert1 = function() {
        navigator.notification.alert(
            'You are the winner!',  // message
            alert('hi'),         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    };


    $scope.mapThis = function(){
      var link = "maps://?q="+$scope.singleEvent.location;
      window.location.href = link;
    }

     $scope.showAlert = function(message,title) {
      if(title==undefined){
      title=null;
      }
      $ionicPopup.alert({
      title: title,
      content: message
      }).then(function(res) {
      console.log('Alert Shown.');
      });
    };
    //in progress add to calendar
    $scope.calAdd = function() {

        //replace these with times and then the thing below
        var year=$scope.singleEvent.start_time.split("/")[2];
        var month=$scope.singleEvent.start_time.split("/")[0];
        var month=month-1;
        var day=$scope.singleEvent.start_time.split("/")[1];
        var hour=$scope.singleEvent.timeOfEvent.split(":")[0];
        var hour=Math.floor(hour);
        var ending=minute=$scope.singleEvent.timeOfEvent.split(":")[1].slice(2,4);
        var ending=ending.toLowerCase();
        if(ending=="pm"&&hour!=12){
          hour=hour+=12;
          if(hour!=24){
           endHour=hour+1;
          }
          else{
           endHour=24;
          }
        }
        else{
           endHour=hour+1;
        }
        var minute=$scope.singleEvent.timeOfEvent.split(":")[1].slice(0,2);
        var startDate = new Date(year,month,day,hour,minute);
        var endDate = new Date(year,month,day,endHour,minute);
        var title = $scope.singleEvent.name;
        var location = $scope.singleEvent.location;
        var notes = null;

        var success = function(message) {
         $scope.showAlert("Event Added to Your Calendar.");
        };

        // var success2 = function(message) { alert('hi'); };
        var error = function(message) { console.log("Calendar Error: " + message); };

        window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);
    }

    $scope.expandEvent= function(theDiv) {
     $scope.showEventDesc = !$scope.showEventDesc;
    };
    //allows sharing functionaility
    $scope.shareBtn = function(a,b,c,d){
      analytics.trackEvent('button', 'click', 'share button', 1);
      // ga('send', 'event', 'button', 'click', 'share button', 1);
     window.plugins.socialsharing.share(a,b,c,d);
    };

  $scope.tinderSwipe = function(card) {
    // alert(card);

      // alert(card.name);
      // var positionOfCard = 0;

      // alert(cardName);
      // var index = $scope.arrayObjectIndexOf($scope.cards, card.name, "name");

// alert('index here');
// alert(index);
// if (index > -1) {
//   // alert(index);
//   $scope.cards.splice(index, 1);
//   alert('index here2');
// }
// else{
//   // alert(index);
//   alert('no card destroyed');
// }
if(card!=undefined){
  // alert("card is undefined");


// else if(card=="undefined"){
//   alert("card is string");
//   return true;
// }

      var positionOfCard = $scope.arrayObjectIndexOf($scope.cards, card.name, "name");
      // alert(positionOfCard);
      // var positionOfCard = $scope.arrayObjectIndexOf($scope.cards, undefined, "name");
      // alert($scope.cards.length);

      if (positionOfCard > -1) {
  // alert(index);
        $scope.cards.splice(positionOfCard, 1);
        PetService.setCards($scope.cards);
        $scope.tinderSwipe(card);
         // $scop
      }
      // else{
      //   // $scope.card(card);
      //   $scope.cards = $scope.cards;
      //   // $scope.cards[positionOfCard];
      // }
        // function11();

  // alert('index here2');


}




    // else{
    //   alert('card is undefined');
    // }


    // alert(index)
    // if(index==undefined){
    //   index=0;
    // }


 // alert(positionOfCard);// 1
// console.log(a);
    // var newCar = index;
    // alert('here22222');
    // $scope.card = $scope.cards[positionOfCard];
    // alert(newCard.name);

    // newCard.id = Math.random();
    // $scope.cards.push(newCard);
  };

// $scope.card = $scope.tinderSwipe(card);

// alert('here2');
   $scope.shareBtn = function(a,b,c,d){
      analytics.trackEvent('button', 'click', 'share button', 1);
      // ga('send', 'event', 'button', 'click', 'share button', 1);
     window.plugins.socialsharing.share(a,b,c,d);
    };

    $scope.foll6 = function(timestamp){
      return new Date (timestamp).toDateString();
    };

  $scope.openPopover = function($event) {
    $scope.newNot=false;
    PetService.setNewNot(false);
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
// alert('here3');
  $scope.followNot = function(not){
    var userProfId = $scope.userProfId;
    var userName = $scope.userName;

if(not.date){
     var a = new Date( not.date);
  var b = new Date(Date.now());
  var c = a.setDate(a.getDate() + 1);
// alert(c);
if(c>=b){
  var presEvent = true;
}
else{
  var presEvent = false;
}

}


// alert(c>=b);
    // var a = new Date(not.date);

    // var eventDate = new Date(not.date1);
 // eventDate2 = "11/06/2014";
// var d = new Date("2012-02-29")
// console.log(d)
// Wed Feb 29 2012 11:00:00 GMT+1100 (EST)


  // ale/rt(a);
 // alert(b);
 // if(a>=b){

 // }





// var b = Date.now();
// var Xmas95 = new Date(a).getDate();
// var day2 = new Date(Date.now()).getDate();
// var day = Xmas95.getDate();

// console.log(day>=day2);
    // alert(tap);

//call follow function with user object
    if(not.tap=="follow"){
      //follow the userId
      // for(i=0;i<$scope.unFriends.length;i++){
      //   if($scope.unFriends[i].userProfId==not.followId){
          // alert("he1111");
          // if($scope.unFriends[i].followers.indexOf(userProfId)>-1){
          //   // alert('not followed');
          // }
          // else{
            // alert('hwe233333');

              var followingId = not.followId;
              var notDate = Date.now();
              var message = $scope.userName+" just followed you.";
         // alert(message);
         // alert
         // $scope.notifications.push({message:message,date:date});
            $http.post('http://stark-eyrie-6720.herokuapp.com/follow',
        {userProfId:userProfId,
          followingId:followingId,
          message:message,
          notDate:notDate}).error(function(){
          $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
        }).success(function(res){
          // alert("Followed yall!");
          // alert(res.success);
          // if(res.success!='follow already'){
          //    $scope.followCount++;
          // }

           // add notification that you added a follower

          // $state.go("app.friends");
          // alert(res.success);
          // alert();$scope.unFriends[q].followers.
        });
        //  var message = userName+" just followed you.";
        //    var notDate = "fake Dte 9/1021/12";

        // $http.post('http://stark-eyrie-6720.herokuapp.com/follow',
        // {userProfId:userProfId,
        //   followingId:followingId,
        //   message:message,
        //   notDate:notDate}).error(function(){
        //   $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
        // }).success(function(res){
        //    // alert(res.success);
        //    if(res.success=='followed'){

        //     $scope.unFriends[q].followers.push(userProfId);
        //     $scope.followCount++;
        //    }
        //    // add notification that you added a follower

        //   // $state.go("app.friends");
        //   // alert("worked!");
        //   // alert();
        // });

          // }
      //   }
      // }


    }

    else if(not.tap=="event"&&presEvent==true){
      // alert('event');
      // &&not.date>Date.now()
       // alert(not.message.split(": ")[1]);

       var i = not.message.indexOf(': ');
var splits = not.message.slice(i+1);
// alert("here");
// alert(splits);
// alert("12345.00.".slice(0,-1));
var eventName = splits.slice(0,-1);
// alert(PetService.getEvents());
// alert(eventName);
// alert(PetService.getEvents());
// alert(JSON.stringify($scope.events));
// alert(eventName);
for(event in $scope.events){
  // alert($scope.events[event].name);
  // alert(eventName);
  // alert($scope.events[event].name.slice(0,0));
  // alert(eventName.slice(0,0));
  // alert($scope.events[event].name.indexOf(eventName)>-1);
   // alert(eventName.indexOf($scope.events[event].name)>-1);
  // alert($scope.events[event]==eventName);
  // alert(event.start_time);
  if(eventName.indexOf($scope.events[event].name.slice(0,-1))>-1){
    // alert($scope.events[event].name);
    // alert(eventName);
     $scope.go_here($scope.events[event]);
  }

}
// alert($scope.event[eventName]);
// alert($scope.events[eventName].name);
// $scope.events = PetService.getEvents()
 // $scope.go_here($scope.events[0,$scope.events.indexOf({"name":eventName})]);
//  console.log(a[0,a.indexOf('2')])
// for(x=0;x<$scope.events.length;x++){
//   alert(eventName);
//   alert($scope.events[x].name);
//   if($scope.events[x].name==eventName){


//      $scope.go_here($scope.events[x]);
//   }
// }

    }
    else if(not.tap==undefined){
    }
    else{
      // alert((not.tap=="event"));
      // alert(not.eventDate);
      // alert(new Date(not.eventDate).getDate() >= new Date(Date.now()).getDate());
      //do nothing
      $scope.showAlert("The date for this event has passed.","Bummer!");
    }

  };
// alert('here4');


// alert('here5');

  $scope.findFriends = function(){
    // var nU = PetService.getNew();

    // alert('fdfdd');
    // $scope.unFriends = PetService.getUNFriends();
    var userProfId = $scope.userProfId;
    var userSchool = $scope.userItem.userSchool;
    // alert(userProfId);
    // alert(userSchool);
         // alert("error");
     OpenFB.get("/"+userProfId+"?fields=friends",{limit:1300}).success(function(red){
      // alert('here1');
      fbFriends = red.friends.data;//this is an array with friend objects
         $http.post('http://stark-eyrie-6720.herokuapp.com/findFriends', {userProfId:userProfId,userSchool:userSchool, fbFriends:fbFriends}).error(function(){
          // alert("error");
        }).success(function(res){
          // alert("success");
          // alert(userProfId);
          // alert(res);
          // alert(res.userIds);
          // alert(res.userIds[0].userName);
          // alert(res.userIds[1].userName);
        //   if(nU=="yes"){
        //     PetService.setNewUser("no");
        //     $http.post('http://stark-eyrie-6720.herokuapp.com/newFriend', {fbFriends:res.userIds,userName:userName,userProfId:userProfId}).error(function(){
        //   // alert("error");
        // }).success(function(idc){
          // alert('yay');
        // })
        //   }
          // res.userIds = [];
          // alert($scope.);
          if(res.userIds.length==0){
            PetService.setUNFriends(["none"]);
            $scope.unFriends = PetService.getUNFriends();
          }else{
            PetService.setUNFriends(res.userIds);
            $scope.unFriends = PetService.getUNFriends();
          }


          // .success(function(res){

          // });
           // $scope.unFriends = res.userIds;
          // $state.go("app.friends");
          // alert(res.userIds[2].userName);
           // res.json({Item: user});
        });
     })

    //send an array of all fb friends in a request that returns an array of user objects that match existing people

    //set the list in services and display that list
  };

  $scope.goFriends = function(){
    $state.go("app.friends");
  };


    $scope.userAlert = function(thing){
      alert(thing);
    };

// $scope.watched = false;

    $scope.foll9 = function(watchList,event){
      // alert(watchedIndex);
      for(i=0;i<watchList.length;i++){
        // if(event.name=="INVASION 9.0"){
// alert(watchList[i].name);
//         alert(event.name);
        // }

         if(watchList[i].name==event.name&&watchList[i].start_time==event.start_time){
          // alert('yes');
           return true;
          }
        }

  // if(friendFollowIndex>-1){
  //   return true;
  // }
  // else{
  //   return false;
  // }
};



    // $scope.watchEvent = function(){
    //   // alert('here');
    //   // $state.go("app.feed");
    //   $scope.watched = true;
    // };

    $scope.newEventSend = function(name,email,date,time,address,info){
      if(name==undefined||date==undefined||time==undefined||address==undefined){
       $scope.showAlert("Please make sure you haven't left any fields empty.","Missing Fields.");
      }
      else if(email==undefined||email.indexOf('@')<0&&email.indexOf('.')<0){
       $scope.showAlert("Please make sure you have entered a valid email.","Invalid Email");
      }
      else{
        $http.post('http://stark-eyrie-6720.herokuapp.com/userEventSubmit',
        {userName: userName,
        userEmail: userEmail,
        userSchool: schoolItem.schoolName,
        eventName: name,
        eventEmail: email,
        eventDate: date,
        eventTime: time,
        eventInfo: info,
        eventAddress: address
        }).success(function(){
          $scope.showAlert("Your event was submitted, we'll be in touch shortly via email.","Success!");
          $location.path('/app/person/me/feed');
        }).error(function(){
         $scope.showAlert("Connection to the server could not be acheived at this time, make sure you have internet connection.","Failed.");
        })
      }
    };

    //expands single event
    $scope.go_here = function (eventName) {
      PetService.setSingle(eventName);
      // $scope.singleView = true;
      PetService.setSingleView(true);
      $location.path('/app/event-detail');

      //changes page and controller
      // $state.go("app.event-detail");
    };
// $scope.followed1 = friendFollowed(friend)

//     $scope.friendFollowed = function (friend) {

//          if(friend.followers.indexOf(userProfId)>-1){//if u follow them
//           for(q=0;q<$scope.unFriends.length;q++){
//             if($scope.unFriends[q].userProfId == friend.userProfId){
//                return true;
//             }

//         //display as followed

//         //
//       }
//     }
//     else{
//                 return false;
//           }
// };


  // var followingId = friend.userProfId;
      // var count=0;

// alert('here7');

// $scope.getNotifications = function(){
//   $scope.notifications = 'n/a';
//   $http.post('http://stark-eyrie-6720.herokuapp.com/notifications',
//         {userProfId:userProfId}).error(function(){
//           $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
//         }).success(function(res){
//           // return res.count;
//           $scope.notifications = res.notifications;
//           // count = res.count;
//           // alert(res.count);
//           // alert(res.notifications[0].message);
//           // $scope.followCount = res.count;
//           // $state.go("app.friends");
//           // alert("worked!");
//           // alert();
//         });

// }
$scope.doThis = function(){
  alert('hi');
};






$scope.tinderYes = function(){
  $scope.tinderView = true;
  $scope.main.dragContent = false;
  PetService.setTinderView(true);
};
$scope.tinderNo = function(){
  $scope.tinderView = false;
  $scope.main.dragContent = true;
  PetService.setTinderView(false);
};
$scope.friendYes = function(){
  $scope.friendView = true;
   // alert($scope.unFriends);
  // $scope.main.dragContent = false;
  // PetService.setTinderView(true);
};
$scope.friendNo = function(){
  $scope.friendView = false;
 // alert($scope.unFriends);
   // $scope.main.dragContent = true;
  // PetService.setTinderView(false);
};

$scope.foll8 = function(friendFollowIndex){

  if(friendFollowIndex>-1){
    return true;
  }
  else{
    return false;
  }
};

// alert('here8');
    $scope.watchAction = function (event) {
      // alert($scope.userItem.watchList[0]);
         // alert(event.name);
         // alert(event.watched);

         // alert($scope.event.watched);
      // notDate = "19/29/1993";

      var tap = "event";
      var userProfId = $scope.userProfId;
      // alert(userName);
      var userName = $scope.userName;

       // alert(userName);
      // alert(userWatchList[0]);
       // for(i=0;i<userWatchList.length;i++){
       //   if(userWatchList[i].name==event.name){
       //    alert('yes');
       //     event.watched=true;
       //    }
       //  }
      // unFriends = PetService.getUNFriends();
      // alert(unFriends[0].userName);
      // alert(JSON.stringify(unFriends[0]));
      // alert(unFriends[key]);
      // alert(unFriends[friend.userName].userName);


    //   // var unFriends = PetService.getUNFriends();
    //   alert(friend.userName);
    //   alert(friend.followers.indexOf(userProfId)>-1);
    //   if(friend.followers.indexOf(userProfId)>-1){//if you follow them
    //     alert(friend.userName);
    //    // add to array locally,
    //    for(i=0;i<$scope.unFriends.length;i++){//for all un friends
    //       if($scope.unFriends[i].followers.indexOf(userProfId)>-1){//if
    //          // alert(friend.followers.indexOf(userProfId)>-1);

    //      $scope.unFriends[i].followers.pop(userProfId);
    //      PetService.setUNFriends($scope.unFriends);
    //      alert($scope.unFriends[i].userName);
    //      alert($scope.unFriends[i].followers);
    //      // PetService.setUNFriends(unFriends);

    //        // $scope.unFriends = unFriends;
    //     //
    //   }
    //  }
    // }
    // alert('here');
    // var userProfId = PetService.getUserId();
    if(event.name[event.name.length-1].indexOf("!")>-1||event.name[event.name.length-1].indexOf(".")>-1||event.name[event.name.length-1].indexOf("?")>-1){
      // alert(event.name);
         var message = "You watched the event: "+event.name;
         var message2 = userName+" watched the event: "+event.name;

    }
else{
     var message = "You watched the event: "+event.name+".";
     var message2 = userName+" watched the event: "+event.name+".";
}


    // alert(event.name);
    // alert(event);
    // alert(message);
    // alert(message2);
    // alert($scope.foll9(userWatchList,event));
 // alert('here2');
    if(event.watched){

      // alert('here');
      // alert($scope.userItem.watchList.length);
       // for(m=0;m<$scope.userItem.watchList.length;m++){

        // alert(event.name);
        // if($scope.userItem.watchList[m]==event){

          // $scope.singleEvent.watched=!$scope.singleEvent.watched;

           // alert('here2');

        // }
        // $scope.userItem.watchList.push(event);
      // }

         var answer99 = null;
         for (var i = 0, len = $scope.userItem.watchList.length; i < len; i++) {
              if($scope.userItem.watchList[i].name==event.name){
                    answer99 = $scope.userItem.watchList[i];
              }
          }
          // alert(answer99);

          // console.log(b);
         $scope.userItem.watchList.splice($scope.userItem.watchList.indexOf(answer99),1);
         // alert($scope.userItem.watchList.indexOf(answer99));
         $scope.userItem.notifications = $scope.userItem.notifications.filter(function (el) {
                        if(el.message==message){
                          // alert(message);

                        }
                        // else{
                        //      if(el.notDate!==notDate){
                        //       return true;
                        //   }
                        // }
                        return el.message !== message;
                       });

         $scope.events[event.name].watched = false;

           // $scope.userItem.notifications = $scope.notifications;
          // alert('here3');

          // .splice({message:message,notDate:notDate});
          // $scope.events[event.name.replace(/\./g,"")].watched=!$scope.events[event.name.replace(/\./g,"")].watched;

          PetService.setUser($scope.userItem);
          // PetService.setEvents($scope.events);
          // $scope.userItem = PetService.getUser();
          // PetService.setEvents($scope.events);
          // $scope.userItem = PetService.getUser();

           // $scope.userItem = PetService.getUser();
        // });
        // $scope.cards.
        // PetService.setUser($scope.userItem);
 // alert('here4');
      //unwatch event
       $http.post('http://stark-eyrie-6720.herokuapp.com/unwatchEvent',
        {userProfId:userProfId,
          message:message,
          message2:message2,
          eventObj:event
        }).error(function(){
          // $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
        }).success(function(res){
           // alert('here5');


      })
    }
    else{
      // alert('not watched event');
      //generate notDate to current timestamp
      var notDate = Date.now();

      // $scope.events[event.name.replace(/\./g,"")].watched=true;
      // alert('here3');
          // var hI = $scope.events[event.name];


      $scope.userItem.watchList.push($scope.events[event.name]);
      var answer98 = null;
         for (var i = 0, len = $scope.userItem.watchList.length; i < len; i++) {
              if($scope.userItem.watchList[i].name==event.name){
                    answer98 = $scope.userItem.watchList[i];
              }
          }
      // alert(answer98==hI);
      ;
      $scope.userItem.notifications.push({message:message,date:notDate,tap:tap});
      $scope.newNot2=true;



      // $scope.events[event.name.replace(/\./g,"")].watched=!$scope.events[event.name.replace(/\./g,"")].watched;
      // PetService.setEvents($scope.events);
      $scope.events[event.name].watched = true;

      PetService.setUser($scope.userItem);

      // PetService.setEvents($scope.events);



      // $scope.userItem = PetService.getUser();
      // $scope.userItem = PetService.getUser();
      // $scope.newChecked();
      setTimeout(function() {
       $scope.newNot2=false;
      }, 50);


      // }, 500);

      // $scope.singleEvent.watched=false;

      // alert('here5');
      //


      $http.post('http://stark-eyrie-6720.herokuapp.com/watchEvent',
        {userProfId:userProfId,
          message:message,
          tap:tap,
          message2:message2,
          notDate:notDate,
          eventObj:event
        }).error(function(){
          // $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
        }).success(function(res){
          // alert('hi');





          // PetService.flipWatched(event);
           // event.watched=!event.watched;
           // alert('here');
           // alert($scope.events[event.name].watched);
          // $scope.events[event.name].watched = !event.watched;
          // alert($scope.events[event.name].watched);
          // PetService.setEvents($scope.events);
          // $scope.loadFeed();
          // PetService.setEvents($scope.events);
          // alert(res.success);
          // $state.go("app.friends");
          // alert("worked!");
          // alert();
        });

      // alert('event watched');
    }
      // for(q=0;q<$scope.unFriends.length;q++){
     //    if($scope.unFriends[q].userProfId==followingId){
     //      if($scope.unFriends[q].followers.indexOf(userProfId)>-1){
     //        $scope.unFriends[q].followers.pop(userProfId);
     //        $http.post('http://stark-eyrie-6720.herokuapp.com/unfollow',
     //    {userProfId:userProfId,
     //      message:message,
     //      followingId:followingId}).error(function(){
     //      $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
     //    }).success(function(res){
     //      // $state.go("app.friends");
     //      // alert("worked!");
     //      // alert();
     //    });
     //   }
     //        else{

     //     $scope.unFriends[q].followers.push(userProfId);
     //     var notDate = "9/17/1995";
     //     // alert(message);
     //     // alert
     //     // $scope.notifications.push({message:message,date:date});
     //        $http.post('http://stark-eyrie-6720.herokuapp.com/follow',
     //    {userProfId:userProfId,
     //      followingId:followingId,
     //      message:message,
     //      notDate:notDate}).error(function(){
     //      $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
     //    }).success(function(res){
     //       // add notification that you added a follower

     //      // $state.go("app.friends");
     //      // alert(res.success);
     //      // alert();
     //    });

     //  }
     // }
    // }
   };

// $http.post('http://stark-eyrie-6720.herokuapp.com/unwatchEvent',
//         {userProfId:userProfId,
//           message:message,
//           message2:message2,
//           eventObj:event
//         }).error(function(){
//           // $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
//         }).success(function(res){
//            // alert('here5');


//       });

//       $http.post('http://stark-eyrie-6720.herokuapp.com/watchEvent',
//         {userProfId:userProfId,
//           message:message,
//           tap:tap,
//           message2:message2,
//           notDate:notDate,
//           eventObj:event
//         }).error(function(){
//           // $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
//         }).success(function(res){

//         });
            // $scope.followed1 = friendFollowed(friend);
      // alert();
      //check if friend is followed,
      //add to both arrays, then change
      //   $http.post('http://stark-eyrie-6720.herokuapp.com/getSchool', {schoolName:schoolName}).error(function(){
      //     $scope.$broadcast('scroll.refreshComplete');
      //   }).success(function(res){})

      // PetService.setSingle(eventName);
      // //changes page and controller
      // $state.go("app.event-detail");

      $scope.getWatch = function(event){
        return PetService.getWatched(event);
      };

    $scope.followAction = function (friend) {
      // unFriends = PetService.getUNFriends();
      // alert(unFriends[0].userName);
      // alert(JSON.stringify(unFriends[0]));
      // alert(unFriends[key]);
      // alert(unFriends[friend.userName].userName);


    //   // var unFriends = PetService.getUNFriends();
    //   alert(friend.userName);
    //   alert(friend.followers.indexOf(userProfId)>-1);
    //   if(friend.followers.indexOf(userProfId)>-1){//if you follow them
    //     alert(friend.userName);
    //    // add to array locally,
    //    for(i=0;i<$scope.unFriends.length;i++){//for all un friends
    //       if($scope.unFriends[i].followers.indexOf(userProfId)>-1){//if
    //          // alert(friend.followers.indexOf(userProfId)>-1);

    //      $scope.unFriends[i].followers.pop(userProfId);
    //      PetService.setUNFriends($scope.unFriends);
    //      alert($scope.unFriends[i].userName);
    //      alert($scope.unFriends[i].followers);
    //      // PetService.setUNFriends(unFriends);

    //        // $scope.unFriends = unFriends;
    //     //
    //   }
    //  }
    // }
    var followingId = friend.userProfId;
    var message = $scope.userName+" just followed you.";
    var userProfId = $scope.userProfId;


      for(q=0;q<$scope.unFriends.length;q++){
        if($scope.unFriends[q].userProfId==followingId){
          if($scope.unFriends[q].followers.indexOf(userProfId)>-1){
            $scope.unFriends[q].followers.splice($scope.unFriends[q].followers.indexOf(userProfId),1);
            $scope.userItem.following.splice($scope.userItem.following.indexOf(followingId),1);
            $http.post('http://stark-eyrie-6720.herokuapp.com/unfollow',
        {userProfId:userProfId,
          message:message,
          followingId:followingId}).error(function(){
          $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
        }).success(function(res){
          // $state.go("app.friends");
          // alert("worked!");
          // alert();
        });
       }
            else{

         $scope.unFriends[q].followers.push(userProfId);
         $scope.userItem.following.push(followingId);
         var notDate = Date.now();
         // alert(message);
         // alert
         // $scope.notifications.push({message:message,date:date});
            $http.post('http://stark-eyrie-6720.herokuapp.com/follow',
        {userProfId:userProfId,
          followingId:followingId,
          message:message,
          notDate:notDate}).error(function(){
          $scope.showAlert("Connection to the server could not be acheived at this time. Increase your WiFi/service or try again later.","Failed.");
        }).success(function(res){
           // add notification that you added a follower

          // $state.go("app.friends");
          // alert(res.success);
          // alert();
        });

      }
     }
    }

   };
// alert('here9');
$scope.doAlert = true;

     $scope.alert3 = function(){
      // var userItem = $scope.userItem;
      // var notCount = $scope.userItem.notifications.length;
      // alert($scope.doAlert);
      if($scope.doAlert == true){
        // alert("here");
      $scope.doAlert = false;
      var schoolName = $scope.userItem.userSchool;
      var userEmail = $scope.userItem.userEmail;
      // alert($scope.doAlert);

      // var doSC = false;
      // alert($scope.cards.length);
      // if(doSC == true){
        // alert('here');

        // doSC = false;
        // alert($scope.cards.length);
        // alert($scope.cards[0].name);
      // }
      // alert($scope.cards.length);

      // if($scope.cards.length>0){
      //    $scope.scopeCards();
      //    doSC = true;
      // }
      // alert(notCount);
      // alert(userEmail);
      // alert(schoolName);

      $http.post('http://stark-eyrie-6720.herokuapp.com/getUser',{userEmail: userEmail, userSchool:schoolName}).success(function(red){
            // userItem = red.Item;
            // alert('here');

            // alert('here2');
            if(red.Item.banned==="banned"){
              $scope.showAlert('This account has been banned for violating our Terms of Use. Contact us at UNightlifeTeam@gmail.com if you think is a mistake.');
              $state.go('app.login');
            }
            else{
              var notCount = $scope.userItem.notifications.length;
              PetService.setUser(red.Item);
              $scope.userItem = red.Item;
              // $scope.notifications = $scope.userItem.notifications;
            // $scope.userItem.notifications = red.Item.notifications;
              var notCount2 = $scope.userItem.notifications.length;
                // alert(notCount2);
              if(notCount2>notCount){
                $scope.newNot = true;
                PetService.setNewNot(true);
                // alert("New Notification");
              }

            }

          });
      // $http.post('http://stark-eyrie-6720.herokuapp.com/getN', {schoolName:schoolName}).error(function(){



        // alert(schoolName);
         $http.post('http://stark-eyrie-6720.herokuapp.com/getSchool', {schoolName:schoolName}).error(function(){
          $scope.scopeCards();
          $scope.doAlert = true;
          $scope.$broadcast('scroll.refreshComplete');
        }).success(function(res){
          // alert(res.Item.schoolName);

          currentList = {};
          var today = new Date();
          var currentDay = today.getDate();
          var currentMonth = today.getMonth()+1; //January is 0
          var currentYear = today.getFullYear();
          var schoolItem = res.Item;
          // alert(schoolItem.schoolName);
          //start the fb login
          // fbLoginFlow();
        for(var key in schoolItem.schoolEvents){
          // alert(schoolItem.schoolName);



            var startDay = schoolItem.schoolEvents[key].start_time.split('/')[1];
            var startYear = schoolItem.schoolEvents[key].start_time.split('/')[2];
            var startMonth = schoolItem.schoolEvents[key].start_time.split('/')[0];
            schoolItem.schoolEvents[key].startYear = startYear;

        if(schoolItem.schoolEvents[key].timeOfEvent!=undefined){
           // alert(schoolItem.schoolName);
           if(schoolItem.schoolEvents[key].timeOfEvent.length<7){
                schoolItem.schoolEvents[key].timeString = '0'+schoolItem.schoolEvents[key].timeOfEvent;
                // alert('hi');
              }
              else{
                schoolItem.schoolEvents[key].timeString = schoolItem.schoolEvents[key].timeOfEvent;
                // alert('hi22');
              }
        }
         else{
          // alert("null");
             schoolItem.schoolEvents[key].timeString = null;
          }

            if (Math.floor(startYear)>Math.floor(currentYear)){
               // alert('here12');
              currentList[key] = schoolItem.schoolEvents[key];
            }
            else if(Math.floor(startYear)==Math.floor(currentYear)){
              // alert(startYear);
              if(Math.floor(startMonth)>Math.floor(currentMonth)){
                 // alert('here122');
                currentList[key] = schoolItem.schoolEvents[key];
              }
              else if(Math.floor(startMonth)==Math.floor(currentMonth)){
                if(Math.floor(startDay)>=Math.floor(currentDay)){
                  // alert('here1');
                 currentList[key] = schoolItem.schoolEvents[key];
                }
              }
            }

        }
        PetService.refreshEvents(currentList);
        }).success(function(){
           $scope.events = PetService.getEvents();
           if($scope.cards[0]=="empty"){
             $scope.scopeCards();
            }
          $scope.doAlert = true;
          $scope.$broadcast('scroll.refreshComplete');
        })

      //   for(key in $scope.events){
      //   if($scope.events[key].watched!=true){
      //     if($scope.cards[0]=="empty"){

      //       $scope.scopeCards();
      //     }
      //   }
      // }

      }
    };

    $scope.go_event = function () {
      $state.go("app.newEventForm");
    };

    $scope.goAdd = function () {
     $state.go("app.addAnEvent");
    };

    $scope.sortByKey=function(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    };

    $scope.cardFunc = function(card){
      // var cardsArray = $scope.cards;
      // for (x=0;x<cardsArray.length;x++){
    // if(c[x]){
          if(card.timeString){
              a = card.start_time+' '+card.timeString.substr(0, 5)+' '+card.timeString.substr(5,6);
              // console.log(a);
              card.eventDate = Date.parse(a, "mm/dd/yyyy hh:mm tt");
          }
          else{
            card.eventDate = Date.parse(card.start_time,"mm/dd/yyyy");
          }
    // }
    // $scope.cards  $scope.sortByKey(cardsArray,'eventDate');

  };

  $scope.orderCheck =function(){
    $http.post('https://api.zinc.io/v0/order',{
  "client_token": "public",
  "retailer": "amazon",
  "products": [{"product_id": "B002CHH8OK", "quantity": 1}],
  "max_price": 2300,
  "shipping_address": {
    "first_name": "Tim",
    "last_name": "Beaver",
    "address_line1": "77 Massachusetts Avenue",
    "address_line2": "",
    "zip_code": "02139",
    "city": "Cambridge",
    "state": "MA",
    "country": "US",
    "phone_number": "5551230101"
  },
  "is_gift": true,
  "gift_message": "Here's your package, Tim! Enjoy!",
  "shipping_method": "cheapest",
  "payment_method": {
    "name_on_card": "Ben Bitdiddle",
    "number": "5555555555554444",
    "security_code": "123",
    "expiration_month": 1,
    "expiration_year": 2015,
    "use_gift": false
  },
  "billing_address": {
    "first_name": "William",
    "last_name": "Rogers",
    "address_line1": "84 Massachusetts Ave",
    "address_line2": "",
    "zip_code": "02139",
    "city": "Cambridge",
    "state": "MA",
    "country": "US",
    "phone_number": "5551234567"
  },
  "retailer_credentials": {
    "email": "timbeaver@gmail.com",
    "password": "myAmazonPassword"
  },
  "webhooks": {
    "order_placed": "http://mywebsite.com/zinc/order_placed",
    "order_failed": "http://mywebsite.com/zinc/order_failed",
    "tracking_obtained": "http://mywebsite.com/zinc/tracking_obtained"
  },
  "client_notes": {
    "our_internal_order_id": "abc123"
  }
}).error(function(){
      alert('error');
    }).success(function(idc){
      alert('res');
      alert(idc);
      alert(JSON.stringify(idc));
             })

  };

 // $timeout(function() {

 //     // myPopup.close(); //close the popup after 3 seconds for some reason
 //  }, 500);

    // alert('here2');

 // setTimeout(function () {
        // $scope.$apply(function () {
        // Google Analytics Trackers
    analytics.startTrackerWithId('UA-53156722-1');
    analytics.trackView('Event Feed Accessed');


    $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    // $scope.userItem = PetService.getUser();
    // $scope.startCard=PetService.getStart();
    // alert($scope.startCard);
    // $scope.events = PetService.getEvents();
    // var allCards1 = PetService.getCards();
    $scope.tinderView = PetService.getTinderView();
    $scope.friendView = false;
    $scope.singleView = PetService.getSingleView();

    $scope.newNot = PetService.getNewNot();

    // alert($scope.cards.length);
     // result.friends.data.forEach(function(friend){
     //      if (friend.education){
     //        friend.education.forEach(function(schoolObj){


        // $scope.cards = $scope.getUnwatchedCards();


        // alert()

    // $scope.cards = PetService.getCards();

    // alert($scope.cards.length);

    // PetService.getCards();
    $scope.singleEvent = PetService.getSingle();

    // $scope.cards = PetService.getCards();
    // alert($scope.cards)
    // PetService.setCards($scope.cards);

$scope.loading=false;

$scope.newNot2=false;

 // $scope.noFriends = false;
// alert(PetService.getUNFriends());

// if(PetService.getUNFriends())
// $scope.findFriends();
// $scope.userPic1 = PetService.getUserPic();
$scope.userPic1 = '';

  if($scope.tinderView != true){
    $scope.main.dragContent = true;
  }
  else{
    $scope.main.dragContent = false;
  }

    $scope.predicate1 = '-date';
    $scope.showEventDesc = false;

    // $scope.userName = $scope.userItem.userName;
    // $scope.notifications = $scope.userItem.notifications;
    // alert('here');

    // $scope.userProfId = $scope.userItem.userProfId;
    // $scope.followCount = $scope.userItem.following.length;
     // var nU = PetService.getNew();
    // $scope.unFriends = PetService.getUNFriends();
    // alert($scope.unFriends);
    // if($scope.unFriends.length==0&&$scope.unFriends[0]!="none"&&nU!="yes"){
    //   // alert('h2222');
    //   // $scope.findFriends();

    // }
    // else if(nU=="yes"){
    //     // $scope.findFriends2();
    // }
     // alert($scope.unFriends);
            // $scope.message = "Timeout called!";
        // });
    // }, 1000);

    // setTimeout(function() {

    // }
    // alert($scope.followCount);
    // if($scope.followCount == 0){
    //   $scope.countFollowers();
    // }

  });
