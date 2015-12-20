'use strict';

/* Directives */

angular.module('myApp.directives', []).
directive('spinnerOnLoad', function() {
    return {
        restrict: 'A',
        link: function(scope,element){
            element.on('load', function() {
                element.parent().parent().find('div').remove();
                element.removeClass('spinner-hide');
                element.addClass('spinner-show');
            });
            scope.$watch('ngSrc', function() {
                element.addClass('spinner-hide');
                element.parent().parent().append('<div class="atebits-loader">Loading...</div>');
            });
        }
    }
});
