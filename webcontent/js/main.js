/*******************************************************************************
 * Metronic AngularJS App Main Script
 ******************************************************************************/

var dependencias = [ 'ngStorage', 'ui.router', 'ui.bootstrap', 'oc.lazyLoad',
		'ngSanitize', 'datatables', 'datatables.buttons',
		'datatables.columnfilter', 'datetimepicker', 'ui.calendar',
		'angularFileUpload', 'pascalprecht.translate', 'oitozero.ngSweetAlert' ];

/* Metronic App */
dependencias.push('ngMockE2E');
var PentakeyApp = angular.module("PentakeyApp", dependencias);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
PentakeyApp.config([ '$ocLazyLoadProvider', function($ocLazyLoadProvider) {
	$ocLazyLoadProvider.config({
	// global configs go here
	});
} ]);

// AngularJS v1.3.x workaround for old style controller declarition in HTML
PentakeyApp.config([ '$controllerProvider', function($controllerProvider) {
	// this option might be handy for migrating old apps, but please don't use
	// it
	// in new ones!
	$controllerProvider.allowGlobals();
} ]);

/*******************************************************************************
 * END: BREAKING CHANGE in AngularJS v1.3.x:
 ******************************************************************************/

/* Setup global settings */
PentakeyApp.factory('settings', [ '$rootScope', function($rootScope) {
	// supported languages
	var settings = {
		layout : {
			pageSidebarClosed : false, // sidebar menu state
			pageContentWhite : true, // set page content layout
			pageBodySolid : false, // solid body color state
			pageAutoScrollOnLoad : 1000
		// auto scroll to top on page load
		},
		assetsPath : 'assets',
		globalPath : 'assets/global',
		layoutPath : 'assets/layouts/layout',
	};

	$rootScope.settings = settings;
	return settings;
} ]);

/* Setup App Main Controller */
PentakeyApp.controller('AppController', [ '$scope', '$rootScope', '$translate',
		'$httpBackend', function($scope, $rootScope, $translate, $httpBackend) {

			$scope.root = $scope;

			$scope.root.cambiarIdioma = function(idioma) {
				$translate.use(idioma);
			}

			angular.module('ngMockE2E');
			$httpBackend.whenGET(function(url) {
				return (url.indexOf('views') !== -1);
			}).passThrough();
			$httpBackend.whenPOST(function(url) {
				return (url.indexOf('ip-api.com') !== -1);
			}).passThrough();

			$httpBackend.whenGET(function(url) {
				return (url.indexOf('tpl/') !== -1);
			}).passThrough();

			$scope.$on('$viewContentLoaded', function() {

			});
		} ]);

/* Setup Rounting For All Pages */
PentakeyApp
		.config([
				'$stateProvider',
				'$urlRouterProvider',
				'$locationProvider',
				'$translateProvider',
				function($stateProvider, $urlRouterProvider, $locationProvider,
						$translateProvider) {
					// Redirect any unmatched url
					$urlRouterProvider.otherwise("/inicio.html");

					$stateProvider
							.state(
									'inicio',
									{
										url : "/inicio.html",
										templateUrl : "views/home.html"
												,
										data : {
											pageTitle : 'Menú de inicio'
										}
										// controller : "InicioController"

									})

							.state(
									'perfil',
									{
										url : "/inicio/home",
										templateUrl : "views/perfil.html",
						
										data : {
											pageTitle : 'Menú de inicio'
										},
										// controller : "InicioController"

									})
					
								

				} ]);
                
/* Init global settings and run the app */
PentakeyApp
		.run([
				"$rootScope",
				"settings",
				"$state",
				"$window",
				"$translate",
				function($rootScope, settings, $state, $window, $translate) {
					$rootScope.$state = $state; // state to be accessed from
					// view
					$rootScope.$settings = settings; // state to be accessed
					// from
					var language = ($window.navigator.userLanguage || $window.navigator.language);
					if (language.indexOf("en") == 0)
						$translate.use("en-us");
					else if (language.indexOf("cn") == 0)
						$translate.use("cn");
					else
						$translate.use("es-es");
				} ]);