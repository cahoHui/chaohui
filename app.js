/*app.js
	data: 2017/8/22
	author: zhangchaohui
*/
var testProject = angular.module('huiproject',['ui.router']);

testProject.run(['$rootScope', '$state', '$stateParams', '$templateCache', '$location', '$http', function(){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}])
