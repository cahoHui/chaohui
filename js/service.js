/*
*	data: 2017/08/22
*	autoer: zhangchaohui
*/
testproject.factory('testProHttpService',[function(){
	var service = {};
	service.getExamData = function(){

	}
	return service;
}]);
testproject.factory('testProService', [function(){
	var service = {};
	service.getExamDatas = function(selector,titleText,xAxisData,seriesData,names,datas){
        selector.highcharts({
            chart: {
                plotBackgroundColor: {//绘图区域背景色渐变
                    linearGradient: [0, 0, 0, 500],
                    stops: [
                        [0, '#fff'],
                        [1, '#F7FBFF']
                    ]
                },
                type: 'line'
            },
            title: {
                text: titleText,
                style:{
                    fontSize:'24px',
                    fontFamily:'MicrosoftYaHei',
                    color:'#e0e0e0'
                }
            },
            xAxis: {
                tickLength: 0,//刻度线
                lineColor:'#E4EAF0',
                gridLineDashStyle:'Dash',
                gridLineWidth:'1',
                gridLineColor:'#E4EAF0',
                title: {
                    text: '',
                    align:'high'
                },
                labels: {
                    useHTML: true,
                    formatter: function (){
                        return '<span class="fontFamily">'+this.value+'</span>';
                    }
                },
                categories: xAxisData
            },
            yAxis: {
                max: 100,
                min:0,
                gridLineWidth:'0',
                tickInterval: 20,//设置Y轴的间隔刻度值
                title: {
                    text: ''
                },
                labels: {
                    useHTML: true,
                    formatter: function (){
                        return '<span class="fontFamily">'+this.value+'%</span>';
                    }
                }
            },
            legend: {
                itemStyle:{
                    color:'#999'
                },
                align: 'center',
                verticalAlign: 'bottom',
                itemWidth:130,//设置每个图例项的宽度
                symbolPadding:10,//图标和文本之间的距离
                symbolWidth: 10//设置是否显示横线
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        style:{
                            "textShadow":"5"
                        }
                    }
                }
            },
            colors:['#22D6A5','#FEB70B'],
            series: seriesData
        })
    };
    return service;
}]);



























