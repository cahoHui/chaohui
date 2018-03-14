/*
*	data: 2017/08/22
*	author: zhangchaohui
*/
var testproject = angular.module('huiproject',['ui.router']);

testproject.run(['$rootScope', '$state', '$stateParams','$templateCache', '$location', '$http', function($rootScope, $state, $stateParams, $templateCache, $location, $http){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

}]);
