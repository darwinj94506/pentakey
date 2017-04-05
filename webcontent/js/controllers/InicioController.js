MetronicApp.controller('InicioController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', '$state', 'UsuariosService', '$timeout', 'DatosService',
    function ($rootScope, $scope, settings, $log, $sessionStorage, $localStorage, $state, UsuariosService, $timeout, DatosService) {

        var vm = this;
        $scope.session = $sessionStorage;
        $scope.local = $localStorage;
        $scope.$log = $log;
        $sessionStorage.aplicacion = {};
        $sessionStorage.aplicacion.nombre = "Inicio";
        vm.selected = {};
        vm.selectAll = false;

        vm.toggleAll = function () {
            for (var i = 0; i < $sessionStorage.posiciones.length; i++) {
                $sessionStorage.posiciones[i].selected = vm.selectAll;
            }
        }

        $scope.desplegarFila = function(posicion){
            posicion.expanded = !posicion.expanded;
        }

        $scope.enviarMensaje = function(){
            for(var i=0;i<$sessionStorage.posiciones.length;i++) {
                var posicion = $sessionStorage.posiciones[i];
                if(posicion.selected) {
                    DatosService.ponerMensaje(posicion.usuario.login, $sessionStorage.login.login, "Mensaje privado", $localStorage.mensaje, 10000).then(function (resultado) {
                        $localStorage.mensaje = "";
                        App.alert({
                            container: '#alerta',
                            place: 'append',
                            type: 'success',
                            message: 'Mensaje enviado correctamente.',
                            close: true,
                            reset: true,
                            focus: true,
                            closeInSeconds: '4',
                            icon: 'fa fa-exclamation-triangle'
                        });
                    });
                }
            }
        }

        $scope.$on('$viewContentLoaded', function () {
            App.initAjax();
            if ($sessionStorage.posicion !== undefined) {
                $sessionStorage.posicion.usuario = $sessionStorage.login;
                $sessionStorage.posicion.aplicacion = "Inicio";
                $sessionStorage.posicion.horaEntrada = new Date().getTime();
                UsuariosService.ping($sessionStorage.posicion);
            }

        });


                    }]);