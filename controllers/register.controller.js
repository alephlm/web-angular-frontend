(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService', 'AuthenticationService'];
    function RegisterController(UserService, $location, $rootScope, FlashService, AuthenticationService) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (!response.success) {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    } else {
                        AuthenticationService.Login(vm.user.username, vm.user.password, function (authresponse) {
                            if (authresponse.success) {
                                AuthenticationService.SetCredentials(vm.user.username, vm.user.password);
                                $location.path('/');
                            } else {
                                FlashService.Error(authresponse.message);
                                vm.dataLoading = false;
                            }
                        });
                    }
                });
        }
    }

})();
