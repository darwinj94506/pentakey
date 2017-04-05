MetronicApp.controller('EnvioController', ['$rootScope', '$scope', 'settings', '$log', '$sessionStorage',
				'$localStorage', '$state', 'UsuariosService', '$timeout', 'DatosService',
    function ($rootScope, $scope, settings, $log, $sessionStorage, $localStorage, $state, UsuariosService, $timeout, DatosService) {

        var vm = this;
        $scope.session = $sessionStorage;
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
        const datosActuales={
														"nombre" : $scope.session.login.datosTitular.nombre,
														"apellidos" : $scope.session.login.datosTitular.apellidos,
														"email" : $scope.session.login.datosTitular.email,
														//"mobile" : "627523769",
														"rutaImagen" :$scope.session.login.datosTitular.rutaImagen,	
														"poblacion" : $scope.session.login.datosTitular.poblacion,
														"provincia" : $scope.session.login.datosTitular.provincia,
														"direccion" : $scope.session.login.datosTitular.direccion, //nombre de calle
														"numeroCalle":$scope.session.login.datosTitular.numeroCalle,
														"codigoPostal":$scope.session.login.datosTitular.codigoPostal,
														"fax":$scope.session.login.datosTitular.fax,
														"telefonoFijo" : $scope.session.login.datosTitular.telefonoFijo,
														"telefonoMovil" : $scope.session.login.datosTitular.telefonoMovil,
														"extension" : $scope.session.login.datosTitular.extension,
														"dni" : $scope.session.login.datosTitular.dni, //numero de identificacion
														"aclarador":$scope.session.login.datosTitular.aclarador, //Campo agregado
														"cups":$scope.session.login.datosTitular.cups,
														"id" : $scope.session.login.datosTitular.id //numero cliente
													} ;    
        var cambiosEnvio={};
        $scope.$watch('session.login.datosTitular.nombre',function(nombre,anterior){                                   
            if(nombre!==datosActuales.nombre){
                cambiosEnvio.nombre=nombre;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.apellidos',function(apellidos,anterior){                                   
            if(apellidos!==datosActuales.apellidos){
                cambiosEnvio.apellidos=apellidos;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.email',function(email,anterior){                                   
            if(email!==datosActuales.email){
                cambiosEnvio.email=email;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.rutaImagen',function(rutaImagen,anterior){                                   
            if(rutaImagen!==datosActuales.rutaImagen){
                cambiosEnvio.rutaImagen=rutaImagen;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.poblacion',function(poblacion,anterior){                                   
            if(poblacion!==datosActuales.poblacion){
                cambiosEnvio.poblacion=poblacion;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.provincia',function(provincia,anterior){                                   
            if(provincia!==datosActuales.provincia){
                cambiosEnvio.provincia=provincia;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.direccion',function(direccion,anterior){                                   
            if(direccion!==datosActuales.direccion){
                cambiosEnvio.direccion=direccion;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.numeroCalle',function(numeroCalle,anterior){                                   
            if(numeroCalle!==datosActuales.numeroCalle){
                cambiosEnvio.numeroCalle=numeroCalle;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.codigoPostal',function(codigoPostal,anterior){                                   
            if(codigoPostal!==datosActuales.codigoPostal){
                cambiosEnvio.nombre=codigoPostal;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.fax',function(fax,anterior){                                   
            if(fax!==datosActuales.fax){
                cambiosEnvio.fax=fax;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.telefonoFijo',function(telefonoFijo,anterior){                                   
            if(telefonoFijo!==datosActuales.telefonoFijo){
                cambiosEnvio.telefonoFijo=telefonoFijo;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.telefonoMovil',function(telefonoMovil,anterior){                                   
            if(telefonoMovil!==datosActuales.telefonoMovil){
                cambiosEnvio.telefonoMovil=telefonoMovil;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.extension',function(extension,anterior){                                   
            if(extension!==datosActuales.extension){
                cambiosEnvio.extension=extension;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.dni',function(dni,anterior){                                   
            if(dni!==datosActuales.dni){
                cambiosEnvio.dni=dni;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.aclarador',function(aclarador,anterior){                                   
            if(aclarador!==datosActuales.aclarador){
                cambiosEnvio.aclarador=aclarador;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.cups',function(cups,anterior){                                   
            if(cups!==datosActuales.cups){
                cambiosEnvio.cups=cups;                
            }                                
        });
        $scope.$watch('session.login.datosTitular.id',function(id,anterior){                                   
            if(id!==datosActuales.id){
                cambiosEnvio.id=id;                
            }                                
        });        
        $scope.enviarArchivos=function(data){
            UsuariosService.postModificacion($scope.session.datosTitular.id,$scope.session.datosTitular.email,$scope.session.clave,cambiosEnvio,"datosEnvio").then(function(cambios){
                console.log(JSON.stringify(cambios.data));
            });
        }
 }]);