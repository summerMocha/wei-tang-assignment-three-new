/**
 * Created by weitang on 5/25/17.
 */

(function() {
    angular
        .module("WAM", [])
        .controller('loginController', loginController);//we should remove this part as an external file

    function loginController($scope) {
        $scope.login = function () {
            console.log('loginC clicked');

        }

    }
}
)();




