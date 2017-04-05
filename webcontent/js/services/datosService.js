/*global angular*/
angular
    .module('MetronicApp')
    .constant('BASE_URL', configuracion.host)
    .factory(
        'DatosService', [
						'BASE_URL',
						'$http',
						'$httpBackend',
						'$location',
						'$window',
						function (BASE_URL, $http, $httpBackend, $location,
                $window, ngProgressFactory) {
                'use strict';

                try {
                    angular.module('ngMockE2E');

                    $httpBackend
                        .whenPOST(
                            BASE_URL + '/rest/data/recogerMensajes')
                        .respond(200, []);

                    $httpBackend
                        .whenPOST(
                            BASE_URL + '/rest/data/recogerMensajes')
                        .respond(200, []);

                    $httpBackend
                        .whenPOST(
                            BASE_URL + '/rest/data/getDatos')
                        .passThrough();

                    $httpBackend
                        .whenPOST(
                            BASE_URL + '/rest/data/nifCorrecto')
                        .respond(200, []);

                    $httpBackend
                        .whenPOST(
                            BASE_URL + '/rest/data/ccCorrecta')
                        .respond(200, []);


                } catch (err) {};

                return {

                    getGeo: function () {
                        var req = {
                            method: 'POST',
                            url: '//ip-api.com/json?callback=?'
                        }
                        return $http(req);
                    },
                    ponerMensaje: function (to, from, subject,
                        body, caducidad) {
                        var data = {
                            to: to,
                            from: from,
                            subject: subject,
                            body: body,
                            caducidad: caducidad
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/ponerMensaje',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    recogerMensajes: function (to) {
                        var data = {
                            to: to
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/recogerMensajes',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    leerMensajes: function (to, from) {
                        var data = {
                            to: to,
                            from: from
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/leerMensajes',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    hacerLlamada: function (telefono, extension) {
                        var req = {
                            method: 'GET',
                            url: BASE_URL + '/interface/llamada?telefono=' + telefono + '&extension=' + extension
                        }
                        return $http(req);
                    },
                    encuentraCoincidencia: function (entidad,
                        licencia, grupoFilas, filaId) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            grupoFilas: grupoFilas,
                            filaId: filaId
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/encontrarCoincidencia',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    insertarDato: function (entidad, licencia,
                        usuarios, dato) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            usuarios: usuarios,
                            idDato: dato.id,
                            dato: angular.toJson(dato)
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/insertarDato',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    borrarItem: function (patron) {
                        var data = {
                            entidad: 'fichero',
                            licencia: '',
                            idDato: patron
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/borrarDato',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    borrarDato: function (entidad, licencia, idDato) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            idDato: idDato
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/borrarDato',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    getDatoIndex: function (entidad, licencia,
                        idDato, index) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            idDato: idDato
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getDato',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req).then(function (response) {
                            return {
                                data: response.data,
                                index: index
                            }
                        });
                    },
                    getDato: function (entidad, licencia, idDato) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            idDato: idDato
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getDato',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    getDatosReferido: function (entidad, licencia,
                        usuarios, referidos, min, max, creacion) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            usuarios: usuarios,
                            referidos: referidos,
                            min: min,
                            max: max,
                            creacion: creacion
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getDatos',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    getExcel: function (entidad, licencia,
                        usuarios, referidos) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            usuarios: usuarios,
                            referidos: referidos
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getExcel',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    getExcelFilas: function (filas) {
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getExcelFilas',
                            data: filas,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    nifCorrecto: function (cuenta) {
                        var data = {
                            nombre: cuenta
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/nifCorrecto',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    ccCorrecta: function (cuenta) {
                        var data = {
                            nombre: cuenta
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/ccCorrecta',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    getDatos: function (entidad, licencia, usuarios) {
                        var data = {
                            entidad: entidad,
                            licencia: licencia,
                            usuarios: usuarios
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getDatos',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    getProperties: function (nombre) {
                        var data = {
                            nombre: nombre
                        }
                        var req = {
                            method: 'POST',
                            url: BASE_URL + '/rest/data/getProperties',
                            data: data,
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }
                        return $http(req);
                    },
                    borrarByAttr: function (arr, attr, value) {
                        var i = arr.length;
                        while (i--) {
                            if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
                                arr.splice(i, 1);
                            }
                        }
                        return arr;
                    },
                    borrarByAttrAdelante: function (arr, attr,
                        value) {
                        var i = arr.length;
                        var contador = 1;
                        while (i--) {
                            if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
                                arr.splice(i, contador);
                            } else {
                                contador++;
                            }
                        }
                        return arr;
                    },
                    findIndexInData: function (data, property,
                        value) {
                        var result = -1;
                        data.some(function (item, i) {
                            if (item[property] === value) {
                                result = i;
                                return true;
                            }
                        });
                        return result;
                    }
                };
						}]);