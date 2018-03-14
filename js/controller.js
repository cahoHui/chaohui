/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.controller('waterfallController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
	console.log('测试路由和控制器');
}]);
testproject.controller('tubiaoController',['$state','$timeout','$stateParams', 'testProService', function($state,$timeout,$stateParams,testProService){
	console.log('测试路由和控制器');
	var selctor = $('#examData'),
		titleText = 'zuoyezhengquelv',
		xAxisData = ['23','24'],
		seriesData = [['23','24','25'],['23','25','26']];
	console.log(selctor)
	testProService.getExamDatas(selctor,titleText,xAxisData,seriesData);
}]);