/*
* data: 2017/08/22
* author: zhangchaohui

*/
testproject.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('standard')
	$stateProvider
		//js瀑布流
		.state('waterfall', {
			url: '/waterfall',
			templateUrl: 'tpls/waterfall.html',
			controller: 'waterfallController'
		})
		.state('tubiao', {
			url: '/tubiao',
			templateUrl: 'tpls/tubiao.html',
			controller: 'tubiaoController'
		})
		.state('standard', {
			url: '/standard',
			templateUrl: 'tpls/standard.html',
			controller: 'standardController'
		})
		.state('git', {
			url: '/git',
			templateUrl: 'tpls/git.html',
			controller: 'gitController'
		})
		.state('plugins', {
			url: '/plugins',
			templateUrl: 'tpls/plugins.html',
			controller: 'pluginsController'
		})
		.state('monitor', {
			url: '/monitor',
			templateUrl: 'tpls/monitor.html',
			controller: 'monitorController'
		})
}]);