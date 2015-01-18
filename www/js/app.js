angular.module('sociogram', ['ionic', 'openfb','objectFilters','sociogram.controllers','sociogram.services','ionic.contrib.ui.cards'])

    .run(function ($rootScope, $state, $ionicPlatform, $window, OpenFB) {

        // OpenFB.init('1474435556106076');

 // alert($window.StatusBar);
    // StatusBar.styleDefault();
      // alert($cordovaStatusbar);
      // alert(StatusBar);
        // alert('here');
        // alert(window.StatusBar);
        // alert(StatusBar.hide);
//         if(window.StatusBar) {
//             alert("here");
//             StatusBar.backgroundColorByName("red");
//   // org.apache.cordova.statusbar required
//    // StatusBar.styleDefault(); // this should set it white
// }

// alert(wino);
  $ionicPlatform.ready(function () {
            if (window.StatusBar) {
              // alert('ere');
                // StatusBar.hide();
                // StatusBar.styleLightContent();
                // alert($cordovaStatusBar);
                // $cordovaStatusBar.style(1);
                // StatusBar.backgroundColorByName("green");
                StatusBar.overlaysWebView(true);
                // StatusBar.styleLightContent();
                StatusBar.styleDefault();
            }
// && toState.name !== "app.logout"
        });

        // $rootScope.$on('$stateChangeStart', function(event, toState) {

        //     if (toState.name !== "app.login" && toState.name !== "app.loading") {
        //         $state.go('app.login');
        //         event.preventDefault();
        //     }
        // });

        // $rootScope.$on('OAuthException', function() {
        //     $state.go('app.login');
        // });

    })


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

          .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: "AppCtrl"
            })

            .state('app.login', {
                        url: "/login",
                        views: {
                            'login': {
                                templateUrl: "templates/login.html",
                                controller: "LoginCtrl"
                            }
                        }
                 })

             .state('app.eventDetail', {
                      url: "/eventDetail",
                      views: {
                        'login': {
                          templateUrl: 'templates/eventDetail.html',
                          controller: "LoginCtrl"
                        }
                      }
                  })
                  .state('app.loginPrompt', {
                      url: "/loginPrompt",
                      views: {
                        'loginPrompt': {
                          templateUrl: 'templates/loginPrompt.html',
                          controller: "LoginCtrl"
                        }
                      }
                  })
                    .state('app.shop', {
                      url: "/shop",
                      views: {
                        'shop': {
                          templateUrl: 'templates/shop.html',
                          controller: "LoginCtrl"
                        }
                      }
                  })
                         .state('app.shopDetail', {
                      url: "/shopDetail",
                      views: {
                        'shop': {
                          templateUrl: 'templates/shopDetail.html',
                          controller: "LoginCtrl"
                        }
                      }
                  })
            .state('app.logout', {
                url: "/logout",
                views: {
                    'login': {
                        templateUrl: "templates/logout.html",
                        controller: "LogoutCtrl"
                    }
                }
            })
              .state('app.friends', {
                url: "/friends",
                views: {
                    'login': {
                        templateUrl: "templates/friends.html",
                        controller: "FeedCtrl"
                    }
                }
            })

            .state('app.profile', {
                url: "/profile",
                views: {
                    'login': {
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            })
            .state('app.about', {
                      url: '/about',
                      views: {
                        'login': {
                          templateUrl: 'templates/about.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                    .state('app.login2', {
                      url: '/login2',
                      views: {
                        'login': {
                          templateUrl: 'templates/login2.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                     .state('app.loading', {
                      url: '/loading',
                      views: {
                        'login': {
                          templateUrl: 'templates/loading.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                    .state('app.help', {
                      url: '/help',
                      views: {
                        'login': {
                          templateUrl: 'templates/help.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                     .state('app.privacy', {
                      url: '/privacy',
                      views: {
                        'login': {
                          templateUrl: 'templates/privacy.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                        .state('app.addAnEvent', {
                      url: '/addAnEvent',
                      views: {
                        'login': {
                          templateUrl: 'templates/addAnEvent.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                        .state('app.newEventForm', {
                      url: '/newEventForm',
                      views: {
                        'newEventForm': {
                          templateUrl: 'templates/newEventForm.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })

            .state('app.person', {
                url: "/person/:personId",
                views: {
                    'login': {
                        templateUrl: "templates/person.html",
                        controller: "LoginCtrl"
                    }
                }
            })
            .state('app.feed', {
                url: "/person/:personId/feed",
                views: {
                    'login': {
                        templateUrl: "templates/feed.html",
                        controller: "LoginCtrl"
                    }
                }
            });

        // fallback route
        $urlRouterProvider.otherwise('/app/login');

    });
