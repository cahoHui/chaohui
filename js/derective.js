//
testProject.directive('waterfallDirective', [function(){
	return {
		link: function(scope, ele, attrs){
			console.log('test project');
		}
	}
}])