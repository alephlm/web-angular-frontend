(function () {
    'use strict';

    angular
        .module('app')
        .controller('FilmeController', FilmeController);

    FilmeController.$inject = ['FilmeService', '$rootScope', '$location', '$window', 'SweetAlert'];
    function FilmeController(FilmeService, $rootScope, $location, $window, SweetAlert) {
        var vm = this;

        vm.filme = null;
        vm.filmes = [];
        vm.delete = deleteFilme;
        vm.insert = insertFilme;

        initController();

        function initController() {
            loadAllFilmes();
        }

        function loadAllFilmes() {
            FilmeService.GetAll()
                .then(function (filmes) {
                    vm.filmes = filmes;
                });
        }

        function deleteFilme(filme){
            SweetAlert.swal({
              title: "Tem certeza?",
              text: "Você não vai poder recuperar esse item.",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Deletar",
              cancelButtonText: "Cancelar",
              closeOnConfirm: false,
              closeOnCancel: false
            },
            function(isConfirm){
              if (isConfirm) {
                FilmeService.Delete(filme.id).then(function(){
                    SweetAlert.swal({
                                      title: "Deletado",
                                      text: "Filme deletado.",
                                      closeOnConfirm: true
                                    },
                                    function(){
                                        $window.location.reload();
                                    });
                })
              } else {
                swal("Cancelado", "O item não foi deletado.", "error");
              }
            });
        }

        function insertFilme(filme){
            FilmeService.Create(filme).then(function(){
                $location.path('/filmes');
            })
        }
    }

})();