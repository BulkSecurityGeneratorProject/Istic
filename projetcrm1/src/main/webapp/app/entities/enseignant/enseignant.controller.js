(function() {
    'use strict';

    angular
        .module('projetcrm1App')
        .controller('EnseignantController', EnseignantController);

    EnseignantController.$inject = ['$scope', '$state', 'Enseignant'];

    function EnseignantController ($scope, $state, Enseignant) {
        var vm = this;
        
        vm.enseignants = [];

        loadAll();

        function loadAll() {
            Enseignant.query(function(result) {
                vm.enseignants = result;
            });
        }
    }
})();
