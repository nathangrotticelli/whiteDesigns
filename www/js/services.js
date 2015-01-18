angular.module('sociogram.services', [])
.factory('PetService', function() {
  var events = {};
  var watchList = [];
        // {
        //     "watchName": "Amazon Product Number 42222",
        //     "watchPhoto": "http://i01.i.aliimg.com/wsphoto/v0/2044502801_1/2014-font-b-Bewell-b-font-Women-Dress-font-b-Watch-b-font-Super-Hot-font.jpg",
        //     "watchPrice": "$10",
        //     "watchLink": "http://www.google.com",
        //     "watchLikes": []
        // },
        // {
        //     "watchName": "Amazon Product Number 52222",
        //     "watchPhoto": "http://i.ebayimg.com/00/s/MTYwMFgxNDY2/z/-NsAAOxygPtSp-vc/$_35.JPG",
        //     "watchPrice": "$11",
        //     "watchLink": "http://www.google.com",
        //     "watchLikes": []
        // }
    // ];

  var single = {};
  var shopCatList = [
        {
            "catName": "Techie",
            "catPhoto": "http://i57.tinypic.com/10ek1p3.jpg"
        },
        {
            "catName": "Minimalist",
            "catPhoto": "http://i62.tinypic.com/5ys3nk.jpg"
        },
        {
            "catName": "Adventurous",
            "catPhoto": "http://i58.tinypic.com/mw6zhw.jpg"
        },
        {
            "catName": "Stylish",
            "catPhoto": "http://i61.tinypic.com/2rcy24z.jpg"
        },
        {
            "catName": "Modern",
            "catPhoto": "http://i62.tinypic.com/2821ism.jpg"
        },
        {
            "catName": "Under $20",
            "catPhoto": "http://i57.tinypic.com/wu3406.jpg"
        },
        {
            "catName": "Boyfriendy",
            "catPhoto": "http://i57.tinypic.com/2iuzw9l.jpg"
        },
        {
            "catName": "Outdoorsy",
            "catPhoto": "http://i59.tinypic.com/1zzt5i0.jpg"
        }
      ];
  var privateList = {};
  var userItem = {};
  var school = "";
  var unFriends = [];
  // var userProfId = "";
  var newUser = "no";
  var newNot = false;
 var tinderView = false;
  var singleView = false;
 var startCard = true;
 var userPic = "";
 var tabs = true;
  var backBtn = false;
 var cards = ["start"];
 var followCount = 0;


  var foll9 = function(watchList,event){

      // alert(watchedIndex);&&watchList[i].start_time==event.start_time
      for(i=0;i<watchList.length;i++){
        // alert(JSON.stringify(watchList));
      // alert(watchList[i].watched);
         if(watchList[i].name==event.name&&watchList[i].watched){
          // alert('yes');
           return true;
          }
        }
        // return false;
      };
 // var cardIndex = undefined;



  // var unFriends = [];
  // var notifications = {};

  return {
    getCache: function () {
                return profileCache;
            },
             getCatList: function () {
                return shopCatList;
            },
            getWatchList: function () {
                return watchList;
            },
            setWatchList: function(value) {
                watchList = value;
            },
          getEvents: function () {
                return events;
            },
            getSingle: function () {
                return single;
            },
            setSingle: function(event) {
                single = event;
            },
            setEvents: function(value) {
                events = value;
            },
            setFollowCount: function(value) {
                followCount = value;
            },
            getFollowCount: function(){
              return followCount;
            },
            setTabs: function(value) {
                tabs = value;
            },
            getTabs: function(){
              return tabs;
            },
            setBack: function(value) {
                backBtn = value;
            },
            getBack: function(){
              return backBtn;
            },
            setSchool: function(schoolName) {
                school = schoolName;
            },
            getSchool: function () {
                return school;
            },
              setPrivateList: function(list) {
                privateList = list;
            },
            getPrivateList: function () {
                return privateList;
            },
             setNewNot: function(value) {
                newNot = value;
            },
            getNewNot: function () {
                return newNot;
            },
             setStart: function(value) {
                startCard = value;
            },
            getStart: function () {
                return startCard;
            },
            setTinderView: function(value) {
                tinderView = value;
            },
            getTinderView: function () {
                return tinderView;
            },
             setSingleView: function(value) {
                singleView = value;
            },
            getSingleView: function () {
                return singleView;
            },
            setCards: function(value) {
                cards = value;
            },
            getCards: function () {
              // event.watched=foll9(userItem.watchList,event);
              // if(cards[0]=="empty" && cards.length>1){
              //   cards.splice(0, 1);
              // }
              // || cards[0]=="empty"
              // if(cards[0] == "empty" && cards.length >1 ){

              // }
            if( cards[0]=="start"){
                // var answerArray = [];||cards[0] == "empty"
                // alert('here');
                // var a3 = events;
                cards = [];

                for(var key in events){
                  // events[key].watched3 = foll9(userItem.watchList, events[key]);

                   if(foll9(userItem.watchList, events[key])!= true){
                      // alert(cards[0]);
                      cards.push(events[key]);
                    }

                  }

                }
                else if(cards[0] == "empty"&&cards.length>1){
                  cards.splice(0, 1);
                }

                if(cards.length==0){
                 cards = ["empty"];
                }
               return cards;

            },
            flipWatched: function(event){
              events[event.name].watched=!events[event.name].watched;
            },
             getWatched: function(event){
              return events[event.name].watched;
            },
             setUNFriends: function(friends) {
                // alert('setting id');
                // alert(userProfId);
                unFriends = friends;

            },
            getUNFriends: function () {
                return unFriends;
            },
             setUser: function(uI) {
                // alert('setting id');
                // alert(userProfId);
                userItem = uI;

            },
            getUser: function () {
                return userItem;
            },
            setNewUser: function(userIs){
              newUser = userIs;

            },
            getUserPic: function () {
                return userPic;
            },
            setUserPic: function(value){
              userPic = value;
            },
            getNew: function () {
                return newUser;
            },
             logOut: function () {
                events = {};
                single = {};
                privateList = {};
                userItem = {};
                school = "";
                unFriends = [];
                // var userProfId = "";
                newUser = "no";
                // newNot = false;
                tinderView = false;
                singleView = false;
                startCard = true;
                cards = ["start"];
                followCount = 0;
            },
             refreshWatches: function(value) {
                var newWatchList = [];
                  for(a=0;a<value.length;a++){
                      if(newWatchList.indexOf(value[a])==-1){
                        newWatchList.push(value[a]);
                      }
                    }
                watchList = newWatchList;
          }
        //       refreshWatches: function(value) {
        //         var newWatchList = [];
        //           for(a=0;a<value.length;a++){
        //               if(newWatchList.indexOf(value[a])<0){
        //                 // alert(watchList.indexOf(value[a]));
        //               alert('new event');
        //                 newWatchList.push(value[a]);
        //               }
        //             }
        //         watchList = newWatchList;
        //   }
        // }
        }
});
