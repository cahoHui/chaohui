/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.directive('waterfallDirective', ['$timeout', function($timeout){
	return {
		link: function(scope, ele, attrs){
			console.log(scope);
			$timeout(function(){
				// $('.container img:last').onload(function(){
					imglocation('container' ,'box');
				// })
				
			},1000);
			// imglocation('container' ,'box');
		    var imgData = {'data': [{'src':'2.jpg'},{'src':'1.jpg'},{'src':'3.jpg'},{'src':'5.jpg'},{'src':'4.jpg'}]};
		    window.onscroll = function(){
		        if(checkFlag()){
		            var cparent = document.getElementById('container');
		            for(var i= 0; i<imgData.data.length; i++){
		                var ccontent = document.createElement('div');
		                ccontent.className = 'box';
		                cparent.appendChild(ccontent);
		                var boximg = document.createElement('div');
		                boximg.className = 'box-img';
		                ccontent.appendChild(boximg);
		                var img = document.createElement('img');
		                img.src = '../imgs/'+ imgData.data[i].src;
		                boximg.appendChild(img);
		            }
		            imglocation('container' ,'box');
		        }
		    }

			function checkFlag(){
			    var cparent = document.getElementById('container');
			    var ccontent = getChildElement(cparent, 'box');
			    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
			    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
			    console.log(lastContentHeight,scrollTop,pageHeight )
			    if(lastContentHeight < scrollTop + pageHeight){
			        return true;
			    }
			}

			function imglocation(parent, content){
			    var cparent = document.getElementById(parent);
			    var ccontent = getChildElement(cparent, content);
			    var imgWidth = ccontent[0].offsetWidth;
			    var num = Math.floor(document.documentElement.clientWidth / imgWidth);//一行可放下的图片个数
			    console.log(num);
			    cparent.style.cssText = 'width:' + imgWidth*num + 'px;margin:0 auto;';
			    var boxHeigthArr = []; //所有图片高度
			    for(var i = 0; i<ccontent.length; i++){
			        if(i < num){
			            boxHeigthArr[i] =  ccontent[i].offsetHeight; 
			            console.log(boxHeigthArr) 
			       }else{
			            var minheight = Math.min.apply(null, boxHeigthArr); //所有图片高度中的最小高度
			            var minIndex = getminheigthLocation(boxHeigthArr, minheight);// 最小高度的图片位置
			            ccontent[i].style.position = 'absolute';
			            ccontent[i].style.top = minheight + 'px';
			            ccontent[i].style.left = ccontent[minIndex].offsetLeft+'px';
			            boxHeigthArr[minIndex] = boxHeigthArr[minIndex] + ccontent[i].offsetHeight;// 图片最小高度累加，避免重叠
			       }
			    }
			}

			function getChildElement(parent, content){
			    var contentArr = [];
			    var allcontent = parent.getElementsByTagName('*');
			    for(var i = 0;i<allcontent.length;i++){
			        if(allcontent[i].className == content){
			            contentArr.push(allcontent[i]);
			        }
			    }
			    return contentArr;
			}
			function getminheigthLocation(boxHeigthArr, minheight){
			    for (var i in boxHeigthArr){
			        if(boxHeigthArr[i] == minheight){
			            return i;
			        }
			    }
			}
		}
	}
}]);
testproject.directive('tubiaoDataDirective', ['testProService', function(testProService){
	return {
		link: function(scope, ele, attrs){
			console.log(scope)
		}
	}
}]);





























