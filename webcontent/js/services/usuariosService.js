/*global angular*/
angular
		.module('MetronicApp')
		.constant('BASE_URL', configuracion.host)
		.factory(
				'UsuariosService',
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
										.whenPOST(
												BASE_URL
														+ '/rest/users/getDiferidos')
										.respond(
												200,
												{
													"usuarios" : [ {
														"login" : "andreafamiliaburgosanz@gmail.com",
														"email" : "andreafamiliaburgosanz@gmail.com",
														"mobile" : null,
														"zip":"78958",
														"fechaAlta" : 1488190639000,
														"fechaAcceso" : 1488993014000,
														"activo" : true,
														"nombre" : "ANDREA",
														"apellidos" : "SANZ SERRANO",
														"rutaImagen" : "http://www.cheap-accountants-in-london.co.uk/wp-content/uploads/2015/07/User-Avatar.png",
														"aplicaciones" : [
																{
																	"nombre" : "propuestas",
																	"license" : "prueba14",
																	"description" : "Calculo ahorro",
																	"rutaIcono" : "fa-area-chart",
																	"rutaAcceso" : "menu.propuestas",
																	"orden" : 14
																},
																{
																	"nombre" : "consultaContratos",
																	"license" : "prueba15",
																	"description" : "Consulta contratos",
																	"rutaIcono" : "fa-briefcase",
																	"rutaAcceso" : "menu.consultaContratos",
																	"orden" : 15
																},
																{
																	"nombre" : "consultaPropuestas",
																	"license" : "prueba16",
																	"description" : "Consulta ahorro",
																	"rutaIcono" : "fa-bar-chart",
																	"rutaAcceso" : "menu.consultaPropuestas",
																	"orden" : 16
																} ],
														"roles" : [ {
															"nombre" : "usuario",
															"importancia" : 3
														} ],
														"miembroDurante" : null,
														"ultimoAcceso" : null,
														"poblacion" : "ZARAGOZA",
														"provincia" : "ZARAGOZA",
														"direccion" : null,
														"telefonoFijo" : null,
														"telefonoMovil" : "643333532",
														"extension" : null,
														"responsable" : "balbinoponcelas@gmail.com",
														"avatarResponsable" : "http://www.cheap-accountants-in-london.co.uk/wp-content/uploads/2015/07/User-Avatar.png",
														"permisos" : [
																"PROPUESTADETAIL",
																"CONTRATODETAIL" ],
														"clave" : "bMEpGZFTpiF6sX8A88SgpBBWgIw=",
														"canal" : {
															"id" : 4,
															"nombre" : "Lumen",
															"descripcion" : null,
															"consecutivo" : null,
															"prefijo" : "LUMEN"
														},
														"dni" : "7.747.042-N",
														"entidad" : "FACTOO",
														"id" : 397
													} ]
												});

								$httpBackend
										.whenPOST(
												BASE_URL
														+ '/rest/users/getAplicaciones')
										.respond([ {
											"nombre" : "modificación",
											"license" : null,
											"description" : "Modificación",
											"rutaIcono" : null,
											"rutaAcceso" : null,
											"orden" : 1
										} ]);

							$httpBackend
										.whenPOST(
												BASE_URL + '/rest/users/login')
										.respond(
												200,
												{
													"datosTitular":{
														"nombre" : "David",
														"apellidos" : "Robledo",
														"email" : "nombre.apellidos@prueba.com",
														//"mobile" : "627523769",
														"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
														"poblacion" : "Salou",
														"provincia" : "TARRAGONA",
														"direccion" : "Via Roma 28", //nombre de calle
														"numeroCalle":"42",
														"codigoPostal":"78958",
														"fax":"14578652",
														"telefonoFijo" : "",
														"telefonoMovil" : "627523769",
														"extension" : "222",
														"dni" : "50854640F", //numero de identificacion
														"aclarador":"Julian P", //Campo agregado
														"cups":"ES0021000008307009FG0P",
														"id" : 666, //numero cliente
													},
													"datosFacturacion":[
														{
														//Nuevos Campos
														"pago": {
															"metodoActualPago" : "DOMICILIARIO BSH",
															"formaPago" : "DOMICILIARIO ACTUAL"
														}
														},
														{
														"CC":{
															"banco":"0081",
															"sucursal":5228,
															"digitoControl":25,
															"cuenta":"0001291237"
														}
														},
														{
														"IBAN":{
															"paisControl":"ES",
															"identificadorNacional1":"-",
															"identificadorNacional2":"-",
															"identificadorNacional3":"-",
															"identificadorNacional4":"-",
															"identificadorNacional5":"-",
															"CEE":"-"
														}
														},
														{
														"entidadBancaria":"BANCO DE SABADELL SA"
															//Fin de Nuevos Campos	
														}
													],

													"datosContrato":{
														"idContrato":"hola",
														"numeroPoliza":"8000000",
														"fechaAltaContrato":"30-11-2015",
														"fechaBajaContrato":"",
														"domiciliacionBancaria":5065605659565,
														"titular":"SERPOREP, SL",
														"tarifa":2.1,
														"periodos":1,
														"potencia":13.856,
														"DH":"1",
														"reactiva":"Si",
														"maximetro":"Si",
														"modo":2,
														"tension":"000000380",
													},

													"detallesFactura":[
															{
															"numeroFactura":"33333333",
															"fecha":"10-03-2016",                                        
															"periodo":{"inicio":"04/03/2016","fin":"04/03/2016"},
															"base":98.30,
															"iva":20.68,
															"total":118.98,
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
														}
														//,
														// {
														// 	"numeroFactura":"170011940",
														// 	"fecha":"27-03-2017",                                        
														// 	"periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
														// 	"base":98.25,
														// 	"iva":20.63,
														// 	"total":118.88,
														// 	"urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
														// },
														// {
														// 	"numeroFactura":"170011940",
														// 	"fecha":"27-03-2017",                                        
														// 	"periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
														// 	"base":98.25,
														// 	"iva":20.63,
														// 	"total":118.88,
														// 	"urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
														// },
														// {
														// 	"numeroFactura":"170011940",
														// 	"fecha":"27-03-2017",                                        
														// 	"periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
														// 	"base":98.25,
														// 	"iva":20.63,
														// 	"total":118.88,
														// 	"urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
														// },
														// {
														// 	"numeroFactura":"170011940",
														// 	"fecha":"27-03-2017",                                        
														// 	"periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
														// 	"base":98.25,
														// 	"iva":20.63,
														// 	"total":118.88,
														// 	"urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
														// },
														// {
														// 	"numeroFactura":"170011940",
														// 	"fecha":"27-03-2017",                                        
														// 	"periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
														// 	"base":98.25,
														// 	"iva":20.63,
														// 	"total":118.88,
														// 	"urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
														// },
														// {
														// 	"numeroFactura":"170011940",
														// 	"fecha":"27-03-2017",                                        
														// 	"periodo":{"inicio":"04/02/2017","fin":"05/03/2017"},
														// 	"base":98.25,
														// 	"iva":20.63,
														// 	"total":118.88,
														// 	"urlPDF":"http://serautonomo.net/wp-content/uploads/2008/11/factura-de-ventas.pdf"
														// }
													],
	
													"login" : "nombre.apellidos@prueba.com",
													"fechaAlta" : 1470061026000,
													"fechaAcceso" : 1488648106096,
													"fechaUltimaMod":"12-12-2017",
													"activo" : true,
																												
													"aplicaciones" : [ {
														"nombre" : "modificacion",
														"license" : "prueba1",
														"description" : "Modificación datos",
														"rutaIcono" : "fa-users",
														"rutaAcceso" : "menu.datos",
														"orden" : 1
													},{
														"nombre" : "informacion",
														"license" : "prueba1",
														"description" : "Información",
														"rutaIcono" : "fa-info",
														"rutaAcceso" : "menu.informacion",
														"orden" : 1
													}
													 ,{
														"nombre" : "sugerencias",
														"license" : "prueba1",
														"description" : "Sugerencias",
														"rutaIcono" : "fa-question",
														"rutaAcceso" : "menu.sugerencias",
														"orden" : 1
													}],
													"roles" : [ {
														"nombre" : "cliente",
														"importancia" : 1
													}],
													
													"miembroDurante" : null,
													"ultimoAcceso" : null,
													
													"responsable" : null,
													"avatarResponsable" : null,
													"permisos" : [
															"HONORARIOS4",
															"CVR",
															"HONORARIOS2",
															"DESR", "CVN",
															"CCN", "UPDAPP",
															"CONTRATODETAIL",
															"UPDCODECOMERCIAL",
															"DELETEREPORT",
															"SCVR", "GESPERM",
															"SCVN", "GESROL",
															"ADDREPORT", "CCR",
															"CHAT", "ADDUSER",
															"ADDRESP",
															"UPDREPORT",
															"HONORARIO025",
															"SCCR", "SCCN",
															"ATRN",
															"DELETEUSER",
															"ALLUSERS",
															"HONORARIOSALL",
															"UPDROLES",
															"ALLREPORTS",
															"OPENREPORT",
															"PROPUESTADETAIL",
															"MERGEREPORTS",
															"GETPOS",
															"DOWNLOADCONTRACT",
															"ATRR",
															"BLOCKUSER",
															"CHANGECANAL",
															"OPENRECORD",
															"HONORARIOS0" ],
													"clave" : "R2aiz3g/MPQk1Tynb+IXA4DP9AA=",										
													"canal" : {
														"id" : 1,
														"nombre" : "Interno",
														"descripcion" : null,
														"consecutivo" : null,
														"prefijo" : "IN"
													},
													
													"entidad" : "Signmethod",
													"comercializadora":"SUNAIR ONE ENERGY SL",
													"distribuidora":"IBERDROLA DISTRIBUCION ELECTRICA S.A. ",
													
													"nombreRepresentante":"Brandon Robles",
													"dniRepresentante":"148448188",
																																				
												});

								$httpBackend.whenPOST(
										BASE_URL + '/rest/users/ping').respond(200,'v1.0');

								$httpBackend
										.whenPOST(
												BASE_URL
														+ '/rest/users/getPosiciones')
										.respond(
												200,
												[ {
													"geo" : {
														"as" : "AS3352 Telefonica De Espana",
														"city" : "Málaga",
														"country" : "Spain",
														"countryCode" : "ES",
														"isp" : "Telefonica de Espana",
														"lat" : "36.7267",
														"lon" : "-4.4348",
														"org" : "Telefonica de Espana",
														"query" : "2.138.236.18",
														"region" : "AN",
														"regionName" : "Andalusia",
														"status" : "success",
														"timezone" : "Europe/Madrid",
														"zip" : "29001"
													},
													"usuario" : {
														"login" : "telefonia@olivareradeltrabuco.com",
														"email" : "telefonia@olivareradeltrabuco.com",
														"mobile" : null,
														"fechaAlta" : 1480278337000,
														"fechaAcceso" : 1489045154616,
														"activo" : true,
														"nombre" : "ROCIO",
														"apellidos" : "MORENO MORENO",
														"rutaImagen" : "http://www.cheap-accountants-in-london.co.uk/wp-content/uploads/2015/07/User-Avatar.png",
														"aplicaciones" : [
																{
																	"nombre" : "propuestas",
																	"license" : "prueba14",
																	"description" : "Calculo ahorro",
																	"rutaIcono" : "fa-area-chart",
																	"rutaAcceso" : "menu.propuestas",
																	"orden" : 14
																},
																{
																	"nombre" : "consultaContratos",
																	"license" : "prueba15",
																	"description" : "Consulta contratos",
																	"rutaIcono" : "fa-briefcase",
																	"rutaAcceso" : "menu.consultaContratos",
																	"orden" : 15
																},
																{
																	"nombre" : "consultaPropuestas",
																	"license" : "prueba16",
																	"description" : "Consulta ahorro",
																	"rutaIcono" : "fa-bar-chart",
																	"rutaAcceso" : "menu.consultaPropuestas",
																	"orden" : 16
																} ],
														"roles" : [
																{
																	"nombre" : "dcoop",
																	"importancia" : 4
																},
																{
																	"nombre" : "usuario",
																	"importancia" : 3
																} ],
														"miembroDurante" : null,
														"ultimoAcceso" : null,
														"poblacion" : "TRABUCO",
														"provincia" : "MALAGA",
														"direccion" : "DESCONOCIDO",
														"telefonoFijo" : "952752512",
														"telefonoMovil" : "665763011",
														"extension" : null,
														"responsable" : "manuel.martin@dcoop.es",
														"avatarResponsable" : "http://www.cheap-accountants-in-london.co.uk/wp-content/uploads/2015/07/User-Avatar.png",
														"permisos" : [
																"HONORARIO4",
																"PROPUESTADETAIL",
																"CONTRATODETAIL",
																"HONORARIO045" ],
														"clave" : "dUzVk7SyVfj1gImU8HILYxMhFmk=",
														"canal" : {
															"id" : 2,
															"nombre" : "DCOOP",
															"descripcion" : null,
															"consecutivo" : null,
															"prefijo" : "DCOOP"
														},
														"dni" : "25344743 P",
														"entidad" : "OLIVARERA DEL TRABUCO",
														"id" : 66
													},
													"horaEntrada" : "1489045164272",
													"aplicacion" : "propuestas",
													"version" : "v2.6",
													"versionServidor" : null
												}]);

							} catch (err) {
								console.log("Error " + err);
							}
/* GET MODIFICADOS */
$httpBackend
										.whenPOST(
												BASE_URL + '/rest/users/getModificados')
										.respond(
												200,												
													{"modificados":[
														{		
															"datosTitular":{
														"nombre" : "Byron",
														"apellidos" : "Rosas",
														"email" : "nombre.apellidos@prueba.com",
														//"mobile" : "627523769",
														"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
														"poblacion" : "Salou",
														"provincia" : "TARRAGONA",
														"direccion" : "Via Roma 28", //nombre de calle
														"numeroCalle":"42",
														"codigoPostal":"78958",
														"fax":"14578652",
														"telefonoFijo" : "",
														"telefonoMovil" : "627523769",
														"extension" : "222",
														"dni" : "50854640F", //numero de identificacion
														"aclarador":"Julian P", //Campo agregado
														"cups":"ES0021000008307009FG0P",
                            							"id" : 666, //numero cliente
													},
													"fechaUltimaMod":"12-01-2017",	
													"estadoModificacion":true,										
													"datosModificados":{
																"Titular":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 555, //numero cliente
															},
															"Envio":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 333, //numero cliente
															},
															"Pagador":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Facturacion":[
															{
															//Nuevos Campos
															"pago": {
																"metodoActualPago" : "DOMICILIARIO BSH",
																"formaPago" : "DOMICILIARIO ACTUAL"
															}
															},
															{
															"CC":{
																"banco":"0081",
																"sucursal":5228,
																"digitoControl":25,
																"cuenta":"0001291237"
															}
															},
															{
															"IBAN":{
																"paisControl":"ES",
																"identificadorNacional1":"",
																"identificadorNacional2":"",
																"identificadorNacional3":"",
																"identificadorNacional4":"",
																"identificadorNacional5":"",
																"CEE":""
															}
															},
															{
															"entidadBancaria":"BANCO DE SABADELL SA"
																//Fin de Nuevos Campos	
															},
															
														],
													}
														
													,
													

													"datosContrato":{
                            							"idContrato":"001",
														"numeroPoliza":"8000000",
														"fechaAltaContrato":"30-11-2015",
														"fechaBajaContrato":"",
														"domiciliacionBancaria":5065605659565,
														"titular":"SERPOREP, SL",
														"tarifa":2.1,
														"periodos":1,
														"potencia":13.856,
														"DH":"1",
														"reactiva":"Si",
														"maximetro":"Si",
														"modo":2,
														"tension":"000000380",
													},													
													"login" : "nombre.apellidos@prueba.com",
													"fechaAlta" : 1470061026000,
													"fechaAcceso" : 1488648106096,
													"activo" : true,
													
													"miembroDurante" : null,
													"ultimoAcceso" : null,
													"responsable" : null,
													"avatarResponsable" : null,													
													"clave" : "R2aiz3g/MPQk1Tynb+IXA4DP9AA=",										
													"canal" : {
														"id" : 1,
														"nombre" : "Interno",
														"descripcion" : null,
														"consecutivo" : null,
														"prefijo" : "IN"
													},
													"entidad" : "Signmethod",
													"comercializadora":"SUNAIR ONE ENERGY SL",
													"distribuidora":"IBERDROLA DISTRIBUCION ELECTRICA S.A. ",
													"nombreRepresentante":"Brandon Robles",
													"dniRepresentante":"148448188",
												},//Usuario dos
												{		
															"datosTitular":{
														"nombre" : "David",
														"apellidos" : "Robledo",
														"email" : "nombre.apellidos@prueba.com",
														//"mobile" : "627523769",
														"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
														"poblacion" : "Salou",
														"provincia" : "TARRAGONA",
														"direccion" : "Via Roma 28", //nombre de calle
														"numeroCalle":"42",
														"codigoPostal":"78958",
														"fax":"14578652",
														"telefonoFijo" : "",
														"telefonoMovil" : "627523769",
														"extension" : "222",
														"dni" : "50854640F", //numero de identificacion
														"aclarador":"Julian P", //Campo agregado
														"cups":"ES0021000008307009FG0P",
                            							"id" : 452, //numero cliente
													},
													"fechaUltimaMod":"12-01-2017",
													"estadoModificacion":true,											
													"datosModificados":{
																"Titular":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Envio":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Pagador":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Facturacion":[
															{
															//Nuevos Campos
															"pago": {
																"metodoActualPago" : "DOMICILIARIO BSH",
																"formaPago" : "DOMICILIARIO ACTUAL"
															}
															},
															{
															"CC":{
																"banco":"0081",
																"sucursal":5228,
																"digitoControl":25,
																"cuenta":"0001291237",
																"estado":true																
															}
															},
															{
															"IBAN":{
																"paisControl":"ES",
																"identificadorNacional1":"",
																"identificadorNacional2":"",
																"identificadorNacional3":"",
																"identificadorNacional4":"",
																"identificadorNacional5":"",
																"CEE":"",
																"estado":false
															}
															},
															{
															"entidadBancaria":"BANCO DE SABADELL SA"
																//Fin de Nuevos Campos	
															},
															
														],
													}
														
													,
													

													"datosContrato":{
                            							"idContrato":"001",
														"numeroPoliza":"8000000",
														"fechaAltaContrato":"30-11-2015",
														"fechaBajaContrato":"",
														"domiciliacionBancaria":5065605659565,
														"titular":"SERPOREP, SL",
														"tarifa":2.1,
														"periodos":1,
														"potencia":13.856,
														"DH":"1",
														"reactiva":"Si",
														"maximetro":"Si",
														"modo":2,
														"tension":"000000380",
													},													
													"login" : "nombre.apellidos@prueba.com",
													"fechaAlta" : 1470061026000,
													"fechaAcceso" : 1488648106096,
													"activo" : true,
													
													"miembroDurante" : null,
													"ultimoAcceso" : null,
													"responsable" : null,
													"avatarResponsable" : null,													
													"clave" : "R2aiz3g/MPQk1Tynb+IXA4DP9AA=",										
													"canal" : {
														"id" : 1,
														"nombre" : "Interno",
														"descripcion" : null,
														"consecutivo" : null,
														"prefijo" : "IN"
													},
													"entidad" : "Signmethod",
													"comercializadora":"SUNAIR ONE ENERGY SL",
													"distribuidora":"IBERDROLA DISTRIBUCION ELECTRICA S.A. ",
													"nombreRepresentante":"Brandon Robles",
													"dniRepresentante":"148448188",
												},//USUARIO 3
												{		
															"datosTitular":{
														"nombre" : "David",
														"apellidos" : "Robledo",
														"email" : "nombre.apellidos@prueba.com",
														//"mobile" : "627523769",
														"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
														"poblacion" : "Salou",
														"provincia" : "TARRAGONA",
														"direccion" : "Via Roma 28", //nombre de calle
														"numeroCalle":"42",
														"codigoPostal":"78958",
														"fax":"14578652",
														"telefonoFijo" : "",
														"telefonoMovil" : "627523769",
														"extension" : "222",
														"dni" : "50854640F", //numero de identificacion
														"aclarador":"Julian P", //Campo agregado
														"cups":"ES0021000008307009FG0P",
                            							"id" : 789, //numero cliente
													},
													"fechaUltimaMod":"12-01-2017",	
													"estadoModificacion":true,										
													"datosModificados":{
																"Titular":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Envio":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Pagador":{
																"nombre" : "David",
																"apellidos" : "Robledo",
																"email" : "nombre.apellidos@prueba.com",
																//"mobile" : "627523769",
																"rutaImagen" : "https://image.freepik.com/free-icon/user-avatar-main-picture_318-85015.jpg",	
																"poblacion" : "Salou",
																"provincia" : "TARRAGONA",
																"direccion" : "Via Roma 28", //nombre de calle
																"numeroCalle":"42",
																"codigoPostal":"78958",
																"fax":"14578652",
																"telefonoFijo" : "",
																"telefonoMovil" : "627523769",
																"extension" : "222",
																"dni" : "50854640F", //numero de identificacion
																"aclarador":"Julian P", //Campo agregado
																"cups":"ES0021000008307009FG0P",
																"id" : 666, //numero cliente
															},
															"Facturacion":[
															{
															//Nuevos Campos
															"pago": {
																"metodoActualPago" : "DOMICILIARIO BSH",
																"formaPago" : "DOMICILIARIO ACTUAL"
															}
															},
															{
															"CC":{
																"banco":"0081",
																"sucursal":5228,
																"digitoControl":25,
																"cuenta":"0001291237"
															}
															},
															{
															"IBAN":{
																"paisControl":"ES",
																"identificadorNacional1":"",
																"identificadorNacional2":"",
																"identificadorNacional3":"",
																"identificadorNacional4":"",
																"identificadorNacional5":"",
																"CEE":""
															}
															},
															{
															"entidadBancaria":"BANCO DE SABADELL SA"
																//Fin de Nuevos Campos	
															},
															
														],
													}
														
													,
													

													"datosContrato":{
                            							"idContrato":"001",
														"numeroPoliza":"8000000",
														"fechaAltaContrato":"30-11-2015",
														"fechaBajaContrato":"",
														"domiciliacionBancaria":5065605659565,
														"titular":"SERPOREP, SL",
														"tarifa":2.1,
														"periodos":1,
														"potencia":13.856,
														"DH":"1",
														"reactiva":"Si",
														"maximetro":"Si",
														"modo":2,
														"tension":"000000380",
													},													
													"login" : "nombre.apellidos@prueba.com",
													"fechaAlta" : 1470061026000,
													"fechaAcceso" : 1488648106096,
													"activo" : true,
													
													"miembroDurante" : null,
													"ultimoAcceso" : null,
													"responsable" : null,
													"avatarResponsable" : null,													
													"clave" : "R2aiz3g/MPQk1Tynb+IXA4DP9AA=",										
													"canal" : {
														"id" : 1,
														"nombre" : "Interno",
														"descripcion" : null,
														"consecutivo" : null,
														"prefijo" : "IN"
													},
													"entidad" : "Signmethod",
													"comercializadora":"SUNAIR ONE ENERGY SL",
													"distribuidora":"IBERDROLA DISTRIBUCION ELECTRICA S.A. ",
													"nombreRepresentante":"Brandon Robles",
													"dniRepresentante":"148448188",
												}												

														]
													}												
											
												);	
							/*Simulacion modificados */
							$httpBackend
										.whenPOST(BASE_URL
												+ '/rest/users/putCambioModificados')
							.respond(function(method, url, data, headers, params) {								
							return [200,data];
							});
							
							$httpBackend
										.whenPOST(BASE_URL
												+ '/rest/users/postModificacion')
							.respond(function(method, url, data, headers, params) {								
							return [200,data];
							});
						
							return {
								/*Crear modificacion */
								postModificacion:function(id,usuario,clave,cambio,seccion){
									var dataObj = {
										id:id,
										seccion:seccion,
										login : usuario,
										password : clave,
										cambio:cambio																						
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/postModificacion',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req); 
								},
								/*Cambia de estado las modificaciones realizadas por los clientes */
								putCambioRealizadoModificados:function(id,usuario,clave){
									var dataObj = {
										login : usuario,
										password : clave,
										id:id												
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/putCambioModificados',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getModificados : function(usuario, clave,licencia) {
									var dataObj = {
										login : usuario,
										password : clave,
										licencia : licencia
										
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getModificados',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								ping : function(data) {
									var req = {
										method : 'POST',
										data : data,
										url : BASE_URL + '/rest/users/ping',
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getPosiciones : function(usuario, clave) {
									var dataObj = {
										login : usuario,
										password : clave
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getPosiciones',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								login : function(usuario, clave) {
									var dataObj = {
										login : usuario,
										password : clave
									};
									var req = {
										method : 'POST',
										url : BASE_URL + '/rest/users/login',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getDiferidos : function(login, clave, licencia) {
									var dataObj = {
										login : login,
										password : clave,
										licencia : licencia
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getDiferidos',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getResponsable : function(login, clave,
										licencia) {
									var dataObj = {
										login : login,
										password : clave,
										licencia : licencia
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getResponsable',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getUsuarios : function(login, clave, licencia) {
									var dataObj = {
										login : login,
										password : clave,
										licencia : licencia
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getUsuarios',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getCanal : function(idCanal) {
									var req = {
										method : 'POST',
										url : BASE_URL + '/rest/users/getCanal',
										data : idCanal,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getCanales : function() {
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getCanales',
										data : '',
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getAplicaciones : function(email, clave,
										licencia) {
									var dataObj = {
										login : email,
										password : clave,
										licencia : licencia
									};
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/getAplicaciones',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								getRoles : function(email, clave, licencia) {
									var dataObj = {
										login : email,
										password : clave,
										licencia : licencia
									};
									var req = {
										method : 'POST',
										url : BASE_URL + '/rest/users/getRoles',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								},
								salvarPerfil : function(email, clave, licencia,
										usuario) {
									var dataObj = {
										login : email,
										password : clave,
										licencia : licencia,
										usuario : usuario
									}
									var req = {
										method : 'POST',
										url : BASE_URL
												+ '/rest/users/salvarPerfil',
										data : dataObj,
										headers : {
											'Content-Type' : 'text/plain'
										}
									}
									return $http(req);
								}
							};
						} ]);