MetronicApp.controller('FacturaDetalleController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', 'facturaService', 'DatosService', '$state','$translate',
    function ($rootScope, $scope, settings, $log, $sessionStorage, $localStorage, facturaService, DatosService, $state,$translate) {
        $scope.session = $sessionStorage;
        $scope.local = $localStorage;
        $scope.$log = $log;
        $scope.version = new Date().getTime();   
        $scope.$on('$viewContentLoaded', function () {
            if (angular.isUndefined($sessionStorage.login)) {
                $state.go('login');
            }
        });
        
          
    }]);    