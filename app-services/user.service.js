(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', 'API_URL'];
    function UserService($http, API_URL) {
        var service = {};

        service.GetLoggedUser = GetLoggedUser;
        service.Create = Create;

        return service;

        function GetLoggedUser() {
            return $http.get(API_URL + '/user/user/').then(handleSuccess, handleError('Erro a ao efetuar login.'));
        }

        function Create(user) {
            return $http.post(API_URL + '/user/registration/', user)
                .then(function successCallback(response) {
                    return response = { success: true, data: user};
                  }, function errorCallback(response) {
                    return handleError(response);
                });
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(err) {
            return function () {
                return { success: false, message: err };
            };
        }
    }

})();
