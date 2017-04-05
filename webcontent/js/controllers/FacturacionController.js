MetronicApp.controller('FacturacionController', ['$scope','$sessionStorage','$localStorage'
,function ($scope, $sessionStorage, $localStorage) {
        $scope.session = $sessionStorage;
        $scope.local = $localStorage;
        $scope.$on('$viewContentLoaded', function () {
            if (angular.isUndefined($sessionStorage.login)) {
                $state.go('login');
            }
        });
    //$scope para cambiar colores y validar radio  button
     $scope.estadoCCIBAN=true;
     $scope.estadoCCIBAN2=false;
     $scope.estadoCCIBAN3=true;
     $scope.estiloCC={
            'background':'#E9F8F6'
        }
    $scope.estiloIBAN={
            'background':'#e3e8e3'
        }
    $scope.mostrar = function(){
        $scope.estadoCCIBAN=true;
        $scope.estadoCCIBAN2=false;
        $scope.estiloCC={
            'background':'#E9F8F6'
        }
    $scope.estiloIBAN={
            'background':'#e3e8e3'
        }
    }
    $scope.ocultar = function(){
        $scope.estadoCCIBAN=false;
        $scope.estadoCCIBAN2=true;
          $scope.estiloCC={
            'background':'#e3e8e3'
        }
        $scope.estiloIBAN={
            'background':'#E9F8F6'
        }      
    }
     $scope.mostrar2 = function(){
        $scope.estadoCCIBAN3=false;
    }
     $scope.ocultar2 = function(){
        $scope.estadoCCIBAN3=true;
    }   


    /*cambios de modificacion */
    if($scope.session.facturacion[1].CC.estado)
    {
        
    }else if($scope.session.facturacion[1].IBAN.estado){

    }
}]);
