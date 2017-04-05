/***
GLobal Directives
***/

// Route State Load Spinner(used on page or content load)
MetronicApp.directive('ngSpinnerBar', ['$rootScope', '$state',
    function ($rootScope, $state) {
        return {
            link: function (scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function () {
                    element.removeClass('hide'); // show spinner bar
                });

                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function () {
                    element.addClass('hide'); // hide spinner bar
                    $('body').removeClass('page-on-load'); // remove page loading indicator
                    Layout.setAngularJsSidebarMenuActiveLink('match', null, $state); // activate selected link in the sidebar menu

                    // auto scorll to page top
                    setTimeout(function () {
                        App.scrollTop(); // scroll to the top on content load
                    }, $rootScope.settings.layout.pageAutoScrollOnLoad);
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function () {
                    element.addClass('hide'); // hide spinner bar
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function () {
                    element.addClass('hide'); // hide spinner bar
                });
            }
        };
    }
])

MetronicApp.filter('startFrom', function () {
    return function (input, start) {
        if (input !== undefined)
            return input.slice(start);
    }
});

MetronicApp.directive('postRepeatDirective', ['$timeout', '$log', 'TimeTracker',
  function ($timeout, $log, TimeTracker) {
        return function (scope, element, attrs) {
            if (scope.$last) {
                $timeout(function () {
                    var timeFinishedLoadingList = TimeTracker.reviewListLoaded();
                    var ref = new Date(timeFinishedLoadingList);
                    var end = new Date();
                    $log.debug("## DOM rendering list took: " + (end - ref) + " ms");
                });
            }
        };
  }
]);

MetronicApp.directive('starRating', function starRating() {
    return {
        restrict: 'EA',
        template: '<ul class="star-rating" ng-class="{readonly: readonly}">' +
            '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
            '    <i class="fa fa-star"></i>' + // or &#9733
            '  </li>' +
            '</ul>',
        scope: {
            ratingValue: '=ngModel',
            max: '=?', // optional (default is 5)
            onRatingSelect: '&?',
            readonly: '=?'
        },
        link: function (scope, element, attributes) {
            if (scope.max == undefined) {
                scope.max = 5;
            }

            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: false
                });
            }

            function updateStars() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };
            scope.toggle = function (index) {
                if (scope.readonly == undefined || scope.readonly === false) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelect({
                        rating: index + 1
                    });
                }
            };
            scope.$watch('ratingValue', function (oldValue, newValue) {
                updateStars();
            });
        }
    };
});

// Handle global LINK click
MetronicApp.directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function (e) {
                    e.preventDefault(); // prevent link click for above criteria
                });
            }
        }
    };
});

// Handle Dropdown Hover Plugin Integration
MetronicApp.directive('dropdownMenuHover', function () {
    return {
        link: function (scope, elem) {
            elem.dropdownHover();
        }
    };
});



MetronicApp.directive('daterangepickerpredefinido', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var jquery_element = $(element);
            jquery_element.daterangepicker({
                startDate: moment(),
                endData: moment(),
                autoUpdateInput: false,
                ranges: {
                    'Hoy': [moment(), moment()],
                    'Ayer': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Hace 7 días': [moment().subtract(6, 'days'), moment()],
                    'Hace 30 días': [moment().subtract(29, 'days'), moment()],
                    'Este mes': [moment().startOf('month'), moment().endOf('month')],
                    'Anterior mes': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                locale: {
                    'format': 'DD/MM/YYYY',
                    "applyLabel": 'Aplicar',
                    "cancelLabel": 'Cancelar',
                    "customRangeLabel": 'Rango personalizado'
                }
            })
            jquery_element.on('apply.daterangepicker', function (ev, picker) {
                var dias = Math.round((picker.endDate - picker.startDate) / (1000 * 60 * 60 * 24));
                var val = picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY') + " - " + dias + " días";
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();
            });
        }
    }
            }]);

MetronicApp.directive('daterangepicker', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var jquery_element = $(element);
            jquery_element.daterangepicker({
                minDate: attrs.minDate,
                maxDate: moment(),
                startDate: attrs.startDate,
                autoUpdateInput: false,
                locale: {
                    'format': 'DD/MM/YYYY',
                    "applyLabel": 'Aplicar',
                    "cancelLabel": 'Borrar'
                }
            })

            jquery_element.on('apply.daterangepicker', function (ev, picker) {
                var dias = Math.round((picker.endDate - picker.startDate) / (1000 * 60 * 60 * 24));
                dias--;
                var val = picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY') + " - " + dias + " días";
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();
            });

        }
    }
}]);

MetronicApp.directive('codigopostal', ['$log', function ($log) {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {

            delete $.jMaskGlobals.translation['0'];
            delete $.jMaskGlobals.translation['9'];

            var jquery_element = $(element);

            var options = {
                clearIfNotMatch: true
            };

            attrs.$observe('provincia', function (val) {
                var prefijo = buscarPrefijo(val);
                jquery_element.mask(prefijo + "###", options);
            });



            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function () {
                var val = $(this).val();
                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

            })

        }
    }
}]);

function buscarPrefijo(provincia) {
    for (var i = 0; i < codigosPostales.length; i++) {
        var item = codigosPostales[i];
        if (item.provincia === provincia)
            return item.prefijo;
    }
    return "";
}



MetronicApp.directive('mask2decimales', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var options = {
                clearIfNotMatch: false,
                reverse: true
            };
            var jquery_element = $(element);
            jquery_element.mask("#####.##", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function () {
                var val = $(this).val();

                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

            })

        }
    }
}]);

MetronicApp.directive('mask3decimales', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var options = {
                clearIfNotMatch: false,
                reverse: true
            };
            var jquery_element = $(element);
            jquery_element.mask("#####.###", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function () {
                var val = $(this).val();

                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

            })

        }
    }
}]);

MetronicApp.directive('telefono', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var options = {
                clearIfNotMatch: false
            };
            var jquery_element = $(element);
            jquery_element.mask("#########", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function () {
                var val = $(this).val();

                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

            })

        }
    }
}]);

MetronicApp.directive('entero', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var options = {
                clearIfNotMatch: false,
                reverse: true
            };
            var jquery_element = $(element);
            jquery_element.mask("#####", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function () {
                var val = $(this).val();

                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

            })

        }
    }
}]);

MetronicApp.directive('porcentaje', [function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {
            var options = {
                clearIfNotMatch: false,
                reverse: false
            };
            var jquery_element = $(element);
            jquery_element.mask("##.##", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function () {
                var val = $(this).val();

                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();

            })

        }
    }
}]);

var morris;

MetronicApp.directive('barchart', ['$log', function ($log, $window) {

    return {

        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function ($scope, element, attrs) {


            angular.element($window).bind('resize', function () {
                if (morris) {
                    morris.redraw();
                }
            });

            $(window).resize(function () {
                morris.redraw();
            });

            attrs.$observe('value', function (val) {
                if (val.length == 0) {
                    val = [
                        {
                            comparativa: 'Energia',
                            precioAnterior: 0,
                            precioSunair: 0
                                            },
                        {
                            comparativa: 'Potencia',
                            precioAnterior: 0,
                            precioSunair: 0
                                            },
                        {
                            comparativa: 'Importe total',
                            precioAnterior: 0,
                            precioSunair: 0
                                            }
                                        ];
                }
                if (!morris) {
                    morris = Morris.Bar({
                        element: element,
                        data: angular.fromJson(val),
                        barColors: ['#34495E', 'orange'],
                        hoverCallback: function (index, options, content) {
                            var data = options.data[index];
                            var texto = "<b>Importe Sunair </b>: " + data.precioSunair + " €" + "<br/> <b>Importe anterior </b>: " + data.precioAnterior + " €<br/>";
                            return texto;
                        },
                        xkey: 'comparativa',
                        ykeys: ['precioAnterior', 'precioSunair'],
                        labels: ['Precio anterior', 'Precio Sunair'],
                        resize: true,
                        redraw: true
                    });

                } else if (val.length > 0) {
                    morris.setData(angular.fromJson(val));
                    morris.redraw();
                }
            });


        }

    };

            }]);

MetronicApp.directive("passwordVerify", function () {
    return {
        require: "ngModel",
        scope: {
            passwordVerify: '='
        },
        link: function (scope, element, attrs, ctrl) {
            scope.$watch(function () {
                var combined;

                if (scope.passwordVerify || ctrl.$viewValue) {
                    combined = scope.passwordVerify + '_' + ctrl.$viewValue;
                }
                return combined;
            }, function (value) {
                if (value) {
                    ctrl.$parsers.unshift(function (viewValue) {
                        var origin = scope.passwordVerify;
                        if (origin !== viewValue) {
                            ctrl.$setValidity("passwordVerify", false);
                            return undefined;
                        } else {
                            ctrl.$setValidity("passwordVerify", true);
                            return viewValue;
                        }
                    });
                }
            });
        }
    };
});

MetronicApp.directive('maskdni', function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {

            var jquery_element = $(element);

            var options = {
                translation: {
                    'W': {
                        pattern: /[x,y,z,X,Y,Z,0-9]/,
                        optional: true
                    },
                    'Y': {
                        pattern: /[A-Z]/,
                        optional: false
                    }
                },
                clearIfNotMatch: false
            };

            jquery_element.mask("W#######Y", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function (event) {
                var val = $(this).val();
                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();
            })

        }
    }
});

MetronicApp.directive('maskcups', function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {

            delete $.jMaskGlobals.translation['S'];

            var jquery_element = $(element);

            var options = {
                translation: {
                    'W': {
                        pattern: /[F,P,C,X]/,
                        optional: true
                    },
                    'Y': {
                        pattern: /[A-Z]/,
                        optional: false
                    }
                },
                placeholder: "ES ____ ____ ____ ____ __??",
                clearIfNotMatch: false
            };

            jquery_element.mask("ES################YY#W", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function (event) {
                var val = $(this).val();
                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();
            })

        }
    }
});

MetronicApp.directive('convertToNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (val) {
                return val != null ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function (val) {
                return val != null ? '' + val : null;
            });
        }
    };
});

MetronicApp.directive('maskcc', function () {
    return {
        require: 'ngModel', // requiring ng-model directive on the element
        link: function (scope, element, attrs, ngModelCtrl) {

            delete $.jMaskGlobals.translation['S'];

            var jquery_element = $(element);

            var options = {
                clearIfNotMatch: true
            };

            jquery_element.mask("ES##", options);

            //listen for events on text element
            jquery_element.on('keyup paste focus blur', function (event) {
                var val = $(this).val();
                // update the ng-model value
                ngModelCtrl.$setViewValue(val);
                ngModelCtrl.$render();
            })

        }
    }
});

MetronicApp.directive('autoTabTo', [function () {
    return {
        restrict: "A",
        link: function (scope, el, attrs) {
            el.bind('keyup', function (e) {
                if (this.value.length === this.maxLength) {
                    var element = document.getElementById(attrs.autoTabTo);
                    if (element)
                        element.focus();
                }
            });
        }
    }
}]);

MetronicApp.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});

MetronicApp.directive('autofocus', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                $element[0].focus();
                $('html, body').animate({
                    scrollTop: $element.offset().top
                }, 1);
            });
        }
    }
}]);

MetronicApp.filter('timeAgo', function () {
    return function (input) {
        if (input == null) return "";
        return jQuery.timeago(input);
    };
});

MetronicApp.directive('validFile',function(){
    return {
        require:'ngModel',
        link:function(scope,el,attrs,ctrl){
            ctrl.$setValidity('validFile', el.val() != '');
            //change event is fired when file is selected
            el.bind('change',function(){
                ctrl.$setValidity('validFile', el.val() != '');
                scope.$apply(function(){
                    ctrl.$setViewValue(el.val());
                    ctrl.$render();
                });
            });
        }
    }
});


MetronicApp.directive('itemdetalle',function(){
    return {                        
        restrict:'E',  
        link:function(scope,element,attrs){
            $(".item-detalle-factura");
        },  
        templateUrl:'tpl/itemDetalle.html'
    }
});