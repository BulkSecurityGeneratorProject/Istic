/**
 * Created by steve on 01/11/16.
 */


(function() {
    'use strict';

    angular
        .module('projetcrmApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('mailing', {
            abstract: true,
            parent: 'app'
        });
    }
})();
