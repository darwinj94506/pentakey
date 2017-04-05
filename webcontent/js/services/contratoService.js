/*global angular*/
angular.module('MetronicApp').constant('BASE_URL', configuracion.host).factory(
    'ContratoService', [
				'BASE_URL',
				'$http',
				'$httpBackend',
				'$location',
				'$window',
				function (BASE_URL, $http, $httpBackend, $location, $window,
            ngProgressFactory) {
            'use strict';

            $httpBackend
                .whenPOST(
                    BASE_URL + '/rest/contract/crearContratoOCR')
                .passThrough();

            return {
                crearContrato: function (entidad, licencia, usuarios, informe) {
                    var data = {
                        entidad: entidad,
                        licencia: licencia,
                        usuarios: usuarios,
                        idDato: informe.id,
                        dato: angular.toJson(informe)
                    }
                    var req = {
                        method: 'POST',
                        url: BASE_URL + '/rest/contract/crearContratoOCR',
                        data: data,
                        headers: {
                            'Content-Type': 'text/plain'
                        }
                    }
                    return $http(req);
                }
            };
				}]);