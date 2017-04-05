angular
		.module('MetronicApp')
		.constant('BASE_URL', configuracion.host)
		.factory(
				'facturaService',
				[
						'BASE_URL',
						'$http',
						'$httpBackend',
						'$location',
						'$window',
						function(BASE_URL, $http, $httpBackend, $location,
								$window, ngProgressFactory) {                                    
                            'use strict';                                    
                            try {
								angular.module('ngMockE2E');                                
								$httpBackend
                                    .whenGET(BASE_URL
														+ '/rest/factura/getDetalleFactura')
                                    .respond(200,[{
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                    {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                     {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                     {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                     {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                     {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                     {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    },
                                    {
                                        "numeroFactura":"170011940",
                                        "fecha":"27-03-2017",                                        
                                        "periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
                                        "base":98.25,
                                        "iva":20.63,
                                        "total":118.88,
                                        "urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
                                    }]);
							} catch (err) {
								console.log("Error " + err);
							}

                            return {
                                getDetalleFactura:function(){
                                    var req = {
										method : 'GET',									
										url : BASE_URL + '/rest/factura/getDetalleFactura',
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
                                    return $http(req);
                                }
                            }
        
                        }]);