(function () {
    angular
        .module('WebAppMaker')
        .controller('LoginController', LoginController);

    function LoginController($location, userService) {

        var model = this;//why this alias in html is different as in controller,It calls model in controller, ut it also called vm in view

        model.login = function (username, password) {
            var found = userService.findUserByCredentials(username, password)
            if (found !== null) {
                $location.url('/user/' + found._id);
                //model.message = "Welcome " + username;
            } else {
                model.message = "Username " + username + " not found. Please try again.";
            }
        };
    }
})();
