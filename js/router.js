/*
* data: 2017/08/22
* author: zhangchaohui

*/
testProject.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
		//js瀑布流
		.state('/waterfall', {
			url: '/waterfall',
			templateUrl: '../tpls/waterfall.html',
			controller: waterfallController
		})
}])