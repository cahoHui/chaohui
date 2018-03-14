/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.directive('squareBannerDirective', [function(){
	return {
		link: function(scope, ele, attrs){
			console.log(scope);
		}
	}
}])