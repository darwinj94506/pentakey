MetronicApp.controller('LoginController', ['$scope','$sessionStorage','$localStorage'
,function ($scope, $sessionStorage, $localStorage) {
        $scope.session = $sessionStorage;
        $scope.local = $localStorage;
        $scope.$on('$viewContentLoaded', function () {
            if (angular.isUndefined($sessionStorage.login)) {
                $state.go('login');
            }
        });
   
}]);
