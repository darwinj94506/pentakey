MetronicApp
    .constant('BASE_URL', configuracion.host)
    .controller(
        'CrearController', [
						'BASE_URL',
						'$rootScope',
						'$scope',
						'settings',
						'$log',
						'$sessionStorage',
						'$localStorage',
						'$state',
						'UsuariosService',
						'$timeout',
						'DatosService',
                        'ContratoService',
						'SweetAlert',
                        'Upload',
						function (BASE_URL, $rootScope, $scope, settings, $log,
                $sessionStorage, $localStorage, $state,
                UsuariosService, $timeout, DatosService, ContratoService, SweetAlert, Upload) {

                var vm = this;
                $scope.session = $sessionStorage;
                $scope.local = $localStorage;
                $scope.$log = $log;
                $sessionStorage.aplicacion = {};
                $sessionStorage.aplicacion.nombre = "crear";
                $localStorage.idContrato = new Date().getTime();

                $scope.cambiaNif = function () {
                    if ($sessionStorage.usuario.nif !== undefined && $sessionStorage.usuario.nif.length > 0) {
                        if (isNaN(parseInt($sessionStorage.usuario.nif.charAt(0))) && $sessionStorage.usuario.nif.charAt(0).toUpperCase() !== 'X' && $sessionStorage.usuario.nif.charAt(0).toUpperCase() !== 'Y' && $sessionStorage.usuario.nif.charAt(0).toUpperCase() !== 'Z') {
                            $sessionStorage.usuario.tipo = 'empresa';
                        } else {
                            $sessionStorage.usuario.tipo = 'particular';
                        }
                    }
                }

                $scope.sorterColumnasFunc = function (columna) {
                    return parseInt(columna.orden);
                };

                $scope.enviarArchivos = function (nombre) {
                    if (nombre.$valid) {
                        DatosService.nifCorrecto($sessionStorage.usuario.nif).then(function () {
                            DatosService.ccCorrecta($sessionStorage.usuario.cc).then(function () {
                                var options = {
                                    title: "Documentación enviada correctamente",
                                    text: "Proceso de envío de documentación finalizado",
                                    type: "success",
                                    showCancelButton: false,
                                    confirmButtonColor: "green",
                                    confirmButtonText: "Salir del sistema",
                                    closeOnConfirm: true
                                }

                                $scope.factura1.upload = Upload.upload({
                                    url: BASE_URL + "/interface/UploadContratacion?idContrato=" + $localStorage.idContrato,
                                    data: {
                                        tipo: 'factura1',
                                        file: $scope.factura1
                                    },
                                });

                                var respuesta = 0;

                                $scope.factura1.upload.then(function (response) {
                                    $log.info("enviado");
                                }, function (response) {
                                    respuesta = response.status + respuesta;
                                    //if (response.status > 0)
                                    //    $scope.errorMsg = response.status + ': ' + response.data;
                                }, function (evt) {
                                    // Math.min is to fix IE which reports 200% sometimes
                                    //file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                                });

                                $scope.factura2.upload = Upload.upload({
                                    url: BASE_URL + "/interface/UploadContratacion?idContrato=" + $localStorage.idContrato,
                                    data: {
                                        tipo: 'factura2',
                                        file: $scope.factura2
                                    },
                                });

                                $scope.factura2.upload.then(function (response) {
                                    $log.info("enviado");
                                }, function (response) {
                                    respuesta = response.status + respuesta;
                                }, function (evt) {
                                    // Math.min is to fix IE which reports 200% sometimes
                                    //file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                                });

                                $scope.dni1.upload = Upload.upload({
                                    url: BASE_URL + "/interface/UploadContratacion?idContrato=" + $localStorage.idContrato,
                                    data: {
                                        tipo: 'dni1',
                                        file: $scope.dni1
                                    },
                                });

                                $scope.dni1.upload.then(function (response) {
                                    $log.info("enviado");
                                }, function (response) {
                                    respuesta = response.status + respuesta;
                                }, function (evt) {
                                    // Math.min is to fix IE which reports 200% sometimes
                                    //file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                                });

                                $scope.dni2.upload = Upload.upload({
                                    url: BASE_URL + "/interface/UploadContratacion?idContrato=" + $localStorage.idContrato,
                                    data: {
                                        tipo: 'dni2',
                                        file: $scope.dni2
                                    },
                                });

                                $scope.dni2.upload.then(function (response) {
                                    $log.info("enviado");
                                }, function (response) {
                                    respuesta = response.status + respuesta;
                                }, function (evt) {
                                    // Math.min is to fix IE which reports 200% sometimes
                                    //file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                                });

                                if ($sessionStorage.usuario.tipo === 'empresa') {
                                    $scope.cif.upload = Upload.upload({
                                        url: BASE_URL + "/interface/UploadContratacion?idContrato=" + $localStorage.idContrato,
                                        data: {
                                            tipo: 'cif',
                                            file: $scope.cif
                                        },
                                    });

                                    $scope.cif.upload.then(function (response) {
                                        $log.info("enviado");
                                    }, function (response) {
                                        respuesta = response.status + respuesta;
                                    }, function (evt) {
                                        // Math.min is to fix IE which reports 200% sometimes
                                        //file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                                    });
                                }

                                if (respuesta > 0) {
                                    App.alert({
                                        container: '#alerta',
                                        place: 'append',
                                        type: 'danger',
                                        message: 'Subida de archivos incorrecta',
                                        close: true,
                                        reset: true,
                                        focus: true,
                                        closeInSeconds: '4',
                                        icon: 'fa fa-exclamation-triangle'
                                    });
                                } else {
                                    DatosService.getDato("informe", "prueba13", "1475652673182").then(function (resultado) {
                                        $scope.propuesta = JSON.parse(resultado.data.json);
                                        $scope.propuesta.columnas = $scope.$eval('propuesta.columnas | orderBy:sorterColumnasFunc');
                                        $scope.propuesta.id = new Date().getTime();
                                        $scope.propuesta.idInforme = 1475652673182;
                                        DatosService.getDato("informe", "prueba13", "1476611701339").then(function (resultado) {
                                            $scope.contrato = JSON.parse(resultado.data.json);
                                            $scope.contrato.columnas = $scope.$eval('contrato.columnas | orderBy:sorterColumnasFunc');
                                            $scope.contrato.columnas[36].value = $scope.propuesta.id;
                                            $scope.contrato.id = $localStorage.idContrato;
                                            ContratoService.crearContrato("fila", "prueba13", [$sessionStorage.login.login], $scope.contrato).then(function (resultado) {
                                                if ($sessionStorage.usuario.tipo === 'empresa') {
                                                    $scope.propuesta.columnas[0].value = $sessionStorage.usuario.nombreNegocio;
                                                    $scope.contrato.columnas[0].value = $sessionStorage.usuario.nombreNegocio;
                                                    $scope.contrato.columnas[38].value = $sessionStorage.usuario.nombreNegocio;
                                                    $scope.contrato.columnas[39].value = "cvn";
                                                } else {
                                                    $scope.propuesta.columnas[0].value = $sessionStorage.usuario.nombreUsuario;
                                                    $scope.contrato.columnas[0].value = $sessionStorage.usuario.nombreUsuario;
                                                    $scope.contrato.columnas[38].value = $sessionStorage.usuario.nombreUsuario;
                                                    $scope.contrato.columnas[39].value = "cvr";
                                                }
                                                $scope.propuesta.columnas[1].value = $sessionStorage.eleccion;
                                                $scope.propuesta.columnas[17].value = "0.0016";
                                                $scope.propuesta.columnas[23].value = "0";

                                                $scope.contrato.columnas[1].value = $sessionStorage.usuario.tipo;
                                                $scope.contrato.columnas[2].value = $sessionStorage.usuario.nif;
                                                $scope.contrato.columnas[3].value = $sessionStorage.usuario.nombreRepresentante;
                                                $scope.contrato.columnas[6].value = resultado.data.direccionCliente;
                                                $scope.contrato.columnas[12].value = $sessionStorage.usuario.movil;
                                                $scope.contrato.columnas[13].value = $sessionStorage.usuario.correo;
                                                $scope.contrato.columnas[14].value = resultado.data.direccionCliente;
                                                $scope.contrato.columnas[19].value = resultado.data.cups;
                                                $scope.contrato.columnas[20].value = resultado.data.direccionCliente;
                                                $scope.contrato.columnas[26].value = $sessionStorage.usuario.cc;
                                                $scope.contrato.columnas[29].value = "SI";
                                                $scope.contrato.columnas[30].value = "SUMINISTRO";
                                                $scope.contrato.columnas[34].value = $localStorage.idContrato;
                                                $scope.contrato.columnas[43].value = "mensual";
                                                $scope.contrato.columnas[35].value = "En proceso";
                                                $scope.contrato.idInforme = 1476611701339;
                                                DatosService.insertarDato("fila", "prueba13", [$sessionStorage.login.login], $scope.contrato);
                                                DatosService.insertarDato("fila", "prueba13", [$sessionStorage.login.login], $scope.propuesta);
                                            }).catch(function (resultado) {
                                                App.alert({
                                                    container: '#alerta',
                                                    place: 'append',
                                                    type: 'danger',
                                                    message: 'Error al crear el contrato',
                                                    close: true,
                                                    reset: true,
                                                    focus: true,
                                                    closeInSeconds: '4',
                                                    icon: 'fa fa-exclamation-triangle'
                                                });
                                            });
                                        });
                                    });
                                }

                                SweetAlert.swal(options,
                                    function () {
                                        $scope.salir();
                                    });
                            }).catch(function (resultado) {
                                if (resultado.data.mensaje !== undefined && resultado.data.mensaje === 'CCINVALIDA') {
                                    App.alert({
                                        container: '#alerta',
                                        place: 'append',
                                        type: 'danger',
                                        message: 'Número de cuenta  bancaria incorrecto',
                                        close: true,
                                        reset: true,
                                        focus: true,
                                        closeInSeconds: '4',
                                        icon: 'fa fa-exclamation-triangle'
                                    });
                                } else {
                                    $scope.error = true;
                                    $scope.mensajeError = "Error obteniendo properties.";
                                }
                            });
                        }).catch(function (resultado) {
                            if (resultado.data.mensaje !== undefined && resultado.data.mensaje === 'NIFINVALIDO') {
                                App.alert({
                                    container: '#alerta',
                                    place: 'append',
                                    type: 'danger',
                                    message: 'Número de NIF incorrecto',
                                    close: true,
                                    reset: true,
                                    focus: true,
                                    closeInSeconds: '4',
                                    icon: 'fa fa-exclamation-triangle'
                                });
                            } else {
                                $scope.error = true;
                                $scope.mensajeError = "Error obteniendo properties.";
                            }
                        });
                    } else {
                        App.alert({
                            container: '#alerta',
                            place: 'append',
                            type: 'danger',
                            message: 'Faltan datos por introducir',
                            close: true,
                            reset: true,
                            focus: true,
                            closeInSeconds: '5',
                            icon: 'fa fa-exclamation-triangle'
                        });
                    }
                }


                $scope
                    .$on(
                        '$viewContentLoaded',
                        function () {
                            App.initAjax();
                            $sessionStorage.eleccion = "negocio";
                            $sessionStorage.usuario = {
                                tipo: 'empresa'
                            };
                            if ($sessionStorage.posicion !== undefined) {
                                $sessionStorage.posicion.usuario = $sessionStorage.login;
                                $sessionStorage.posicion.aplicacion = "Inicio";
                                $sessionStorage.posicion.horaEntrada = new Date()
                                    .getTime();
                                UsuariosService
                                    .ping($sessionStorage.posicion);
                            }


                        });

                }]);