var showdown = require('showdown'),
    converter = new showdown.Converter();
angular.module('myApp', []).directive('markdown', function() {
    var converter = new Showdown.converter();​
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    }
});