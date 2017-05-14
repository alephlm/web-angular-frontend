(function () {
    'use strict';

    angular
        .module('app')
        .factory('FilmeService', FilmeService);

    FilmeService.$inject = ['$http', 'API_URL'];
    function FilmeService($http, API_URL) {
        var service = {};

        service.GetAll = GetAll;
        service.Create = Create;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(API_URL + '/filme/list/').then(handleSuccess, handleError('Erro a ao receber filmes.'));
        }

        function Create(filme) {
            return $http.post(API_URL + '/filme/inserir/', filme).then(handleSuccess, handleError('Erro ao inserir filme.'));
        }

        function Delete(filmeId) {
            return $http.post(API_URL + '/filme/delete/' + filmeId).then(handleSuccess, handleError('Erro ao excluir filme.'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
