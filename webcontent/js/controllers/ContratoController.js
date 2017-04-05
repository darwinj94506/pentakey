MetronicApp.controller('ContratoController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', '$state', 'UsuariosService', '$timeout', 'DatosService','SweetAlert',
    function ($rootScope, $scope, settings, $log, $sessionStorage, $localStorage, $state, UsuariosService, $timeout, DatosService,SweetAlert) {

        var vm = this;
        $scope.session = $sessionStorage;
        $scope.session.login.nombretitular=$scope.session.login.nombre+" "+$scope.session.login.apellidos
        if($scope.session.login.fechaBajaContrato=="" )
            $scope.session.login.fechaBajaContrato="------";

        $scope.local = $localStorage;
        $scope.$log = $log;
        $sessionStorage.aplicacion = {};
        $sessionStorage.aplicacion.nombre = "Inicio";
        
        $scope.$on('$viewContentLoaded', function () {
            App.initAjax();
            if ($sessionStorage.posicion !== undefined) {
                $sessionStorage.posicion.usuario = $sessionStorage.login;
                $sessionStorage.posicion.aplicacion = "Inicio";
                $sessionStorage.posicion.horaEntrada = new Date().getTime();
                UsuariosService.ping($sessionStorage.posicion);
            }

        });
var options = {
                                    title: "Documentación enviada correctamente",
                                    text: "Proceso de envío de documentación finalizado",
                                    type: "success",
                                    showCancelButton: false,
                                    confirmButtonColor: "green",
                                    confirmButtonText: "Salir del sistema",
                                    closeOnConfirm: true
                                }
        $scope.enviarArchivos = function (nombre) {
                    SweetAlert.swal(options,
                                    function () {
                                        $scope.salir();
                                    });
                }
                    }]);