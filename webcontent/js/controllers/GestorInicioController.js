MetronicApp.controller('GestorInicioController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
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
        
        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.setCurrentPage = function (currentPage) {
            $scope.currentPage = currentPage;
        }

        $scope.getNumberAsArray = function (num) {
            return new Array(num);
        };

        $scope.numberOfPages = function () {
            if ($scope.$eval("session.modificaciones | orderBy: '-id'") != undefined)
                return Math.ceil($scope.$eval("session.modificaciones  | orderBy: '-id'").length / $scope.pageSize);
        };

        $scope.numberOfRecords = function () {
            if ($scope.$eval("session.modificaciones  | orderBy: '-id'") != undefined)
                return Math.ceil($scope.$eval("session.modificaciones | orderBy: '-id'").length);
        };

        $scope.desplegarFila = function(posicion){
            posicion.expanded = !posicion.expanded;
        }

        $scope.$on('$viewContentLoaded', function () {
            App.initAjax();
            if ($sessionStorage.posicion !== undefined) {
                $sessionStorage.posicion.usuario = $sessionStorage.login;
                $sessionStorage.posicion.aplicacion = "Inicio";
                $sessionStorage.posicion.horaEntrada = new Date().getTime();
                UsuariosService.ping($sessionStorage.posicion);
            }
            
            var referidos = [];
            referidos.push({
                campo: 'json',
                valor: 1476611701339
            })
            var users = [$sessionStorage.login.login];
            UsuariosService.getModificados($sessionStorage.login.login, $sessionStorage.login.password, "prueba1").then(function (resultado) {
                $sessionStorage.modificaciones = resultado.data.modificados;
                for (var i = 0; i < $sessionStorage.modificaciones.length; i++) {
                    var modificacion = JSON.parse($sessionStorage.modificaciones[i].json);
                    modificacion.usuario = $sessionStorage.modificaciones[i].usuario;
                    modificacion.columnas = modificacion.columnas.sort(dynamicSortNumber('orden'));
                    $sessionStorage.modificaciones[i] = modificacion;
                }
            }).catch(function (resultado) {
                App.unblockUI('.portlet-body');
                var error = resultado.data;
                if (error.mensaje !== undefined && error.mensaje === 'NODATA') {
                    $sessionStorage.contratos = [];
                } else {
                    $scope.error = true;
                    $scope.mensajeError = "Error obteniendo datos.";
                }
            });

        });

         $scope.cambioRealizado=function(fila){
            console.log("Datos enviados:id:"+fila.datosTitular.id+",usuario:"+fila.datosTitular.email+",clave:"+fila.clave);
            UsuariosService.putCambioRealizadoModificados(fila.datosTitular.id,fila.datosTitular.email,fila.clave).then(function(filaActualizada){
                // console.log("idFila:"+JSON.stringify(filaActualizada.data.id));
                $sessionStorage.modificaciones.forEach((fila,index)=>{
                    console.log(JSON.stringify(fila.datosTitular.id));
                    console.log("filas:"+fila.id+"-"+filaActualizada.data.id);
                    if(fila.datosTitular.id==filaActualizada.data.id)
                    {
                        console.log("index:"+index);
                        $scope.session.modificaciones[index].estadoModificacion=$sessionStorage.modificaciones[index].estadoModificacion=false;
                        
                    }
                });

            });
        }
                    }]);       