/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.controller('waterfallController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
	console.log('测试路由和控制器');
}]);
testproject.controller('tubiaoController',['$state','$timeout','$stateParams', 'testProService', function($state,$timeout,$stateParams,testProService){
	console.log('测试路由和控制器');
	var seclecter = $('#examData'),
		names = ['识记','理解','分析','综合'],
        titles = '能力结构曲线',
        xAxisDate = ["11/25", "11/28","12/06"],
        datas = [[22,24,25],[33,24,35],[44,35,46],[26,36,30]],
        seriesDateName = ["11.12测试试卷10", "华师一附中2016年新起点思品测试卷","12.06测试试卷","12.20"],
        seriesDateTime = ["2016/11/25", "2016/11/28","2016/12/06","2016/12/20"],
        lineColors = ['#4572a7','#c0504d','#E6BD00','#E043BD','#9043DF','#4468E1','#44A7E0','#44E0D3','#B4E043'],
        seriesArr = []; 
    for(var i=0;i<names.length;i++){
        var seriesData = {
            name : names[i],
            data : datas[i],
            color: lineColors[i],
            marker: {
                radius: 4,
                symbol: 'circle',
                lineWidth: 3,
                fillColor: '#fff',
                lineColor: lineColors[i]
            }
        }
        seriesArr.push(seriesData);
    }
    testProService.getExamDatas(seclecter,titles,xAxisDate,seriesArr,seriesDateName,seriesDateTime);
    $('.first.circle').circleProgress({
        value: 0.35,
        animation: false,
        fill: { gradient: ['#ff1e41', '#ff5f43'] }
    });

    $('.second.circle').circleProgress({
        value: 0.6
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(100 * progress) + ' <i>%</i>');
    });

    $('.third.circle').circleProgress({
        value: 0.75,
        fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });

    $('.forth.circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: .5,
        lineCap: 'round',
        fill: { color: '#ffa500' }
    });

    $('.fifth.circle').circleProgress({
        value: 0.7,
        size: 60,
        thickness: 20,
        animationStartValue: 1.0,
        fill: {
            color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
            image: 'http://i.imgur.com/pT0i89v.png'
        },
        reverse: true
    });



    $('#demo-reset').click(function(){
        $('.first.circle').circleProgress({
            value: 0
        });
        $('.second.circle').circleProgress({
        value: 0
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(parseInt(0 * progress) + ' <i>%</i>');
        });
        $('.third.circle').circleProgress({
        value: 0,
        fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
        });
        $('.forth.circle').circleProgress({
            startAngle: -Math.PI / 4 * 3,
            value: 0,
            lineCap: 'round',
            fill: { color: '#ffa500' }
        });
        $('.fifth.circle').circleProgress({
            value: 0,
            size: 60,
            thickness: 20,
            animationStartValue: 1.0,
            fill: {
                color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
                image: 'http://i.imgur.com/pT0i89v.png'
            },
            reverse: true
        });
    });

    $('#demo-play').click(function(){
        $('.first.circle').circleProgress({
        value: 0.35,
        animation: false,
        fill: { gradient: ['#ff1e41', '#ff5f43'] }
    });

    $('.second.circle').circleProgress({
        value: 0.6
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(100 * progress) + ' <i>%</i>');
    });

    $('.third.circle').circleProgress({
        value: 0.75,
        fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });

    $('.forth.circle').circleProgress({
        startAngle: -Math.PI / 4 * 3,
        value: .5,
        lineCap: 'round',
        fill: { color: '#ffa500' }
    });

    $('.fifth.circle').circleProgress({
        value: 0.7,
        size: 60,
        thickness: 20,
        animationStartValue: 1.0,
        fill: {
            color: 'rgba(0, 0, 0, .1)', // fallback color when image is not loaded
            image: 'http://i.imgur.com/pT0i89v.png'
        },
        reverse: true
    });
    });
}]);
testproject.controller('standardController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
    console.log('测试路由和控制器');
}]);
testproject.controller('gitController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
    console.log('测试路由和控制器');
}]);
testproject.controller('pluginsController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
    console.log('测试路由和控制器');
    $('.container').monitor('.scroll', {
       dirWrap: '.anchor',
       triggerClass: 'cur'
    });
}]);
testproject.controller('monitorController',['$state','$timeout','$stateParams', function($state,$timeout,$stateParams){
    console.log('测试路由和控制器');
    $('.container').monitorFixed('.fixed');
}]);







