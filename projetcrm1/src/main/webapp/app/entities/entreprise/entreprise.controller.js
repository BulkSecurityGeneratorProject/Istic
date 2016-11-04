(function() {
    'use strict';

    angular
        .module('projetcrm1App')
        .controller('EntrepriseController', EntrepriseController);

    EntrepriseController.$inject = ['$scope', '$state', 'Entreprise'];

    function EntrepriseController ($scope, $state, Entreprise) {
        var vm = this;
        
        vm.entreprises = [];

        loadAll();

        function loadAll() {
            Entreprise.query(function(result) {
                vm.entreprises = result;
            });
        }
    }
})();
