'use strict';

(function () {

    angular.module('Twitty', []).controller('StreamController', ['$scope', '$http', function ($scope, $http) {
        var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        var twitchUrl = 'https://wind-bow.gomix.me/twitch-api/';

        $scope.test = 'test string';
        $scope.users = [];
        $scope.online = [];
        $scope.offline = [];
        /**
         * I wanted to use two controllers but was not able to figure out how to share
         * the filter object properly
         */

        // this will filter out the online or offline users during .activate()
        $scope.filter = {};
        $scope.navItems = [{
            name: 'all',
            active: true
        }, {
            name: 'online',
            active: false
        }, {
            name: 'offline',
            active: false
        }];

        $scope.activate = function (index) {
            angular.forEach($scope.navItems, function (obj) {
                obj.active = false;
            });
            $scope.navItems[index].active = true;
            if ($scope.navItems[index].name === 'online') {
                $scope.filter = { status: true };
            } else if ($scope.navItems[index].name === 'offline') {
                $scope.filter = { status: false };
            } else {
                $scope.filter = {};
            }
        };

        streams.forEach(function (stream) {
            // build a user object for each streamer
            var user = {};
            user.url = 'https://www.twitch.tv/' + stream;

            $http.get(twitchUrl + 'streams/' + stream).then(function (response) {
                // .then() success
                user.account = true;
                if (response.data.stream) {
                    // online
                    user.status = true;
                    console.log(response.data.stream.game);
                    user.game = response.data.stream.game;
                } else {
                    user.status = false;
                }
            }, function (response) {
                // .then() fails
                user.account = false;
            });

            $http.get(twitchUrl + 'users/' + stream).then(function (response) {
                user.displayName = response.data.display_name;
                user.bio = response.data.bio || 'This user has no bio, sorry';
                user.logo = response.data.logo;
            });

            $scope.users.push(user);
            user.status ? $scope.online.push(user) : $scope.offline.push(user);
        });
    }]);

})();
$(document).ready(() => {
    let $main = $('main');
    $main.on('click', '#ohNo', function() {
        $(this).closest('li').find('.img-rounded').toggle('bounce');
        if ($(this).html() == 'Click Me, I got lost!') {
            $(this).html('Please Do Not Click');
        } else {
            $(this).html('Click Me, I got lost!');
        }
    });

    $('.navbar-right').on('click', 'li', function() {
        $main.find('li').show('size');
        $main.find('.img-rounded').show('blind');
    });

    $main.on('click', 'h2', function() {
        $(this).closest('li').hide('puff');
    });

    $main.on('click', '#bio', function() {
        $(this).closest('li').hide('clip');
    });

    $main.on('click', '.img-rounded', function() {
        $(this).hide('slide');
    });
});
//# sourceMappingURL=app.js.map
