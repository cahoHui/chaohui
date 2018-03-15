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
	service.getExamDatas = function(seclecter,titles,xAxisDate,seriesArr,seriesDateName,seriesDateTime){
		
        seclecter.highcharts({
            chart: {
                plotBackgroundColor: {
                    linearGradient: [0,0,0,500],
                    stops: [
                        [0,'#fff'],
                        [1,'#F7FBFF']
                    ]
                },
                type: 'line'
            },
            title: {
                text: titles,
                y: 20, //center
                x:20,
                style:{
                    fontSize:'22px',
                    fontFamily:'MicrosoftYaHei',
                    color:'#e0e0e0'
                }
            }, 
            xAxis: {
                categories: xAxisDate,
                tickWidth: 0,//刻度线的宽度设置为0不显示
                lineColor:'#E4EAF0',
                gridLineDashStyle: 'Dash',
                gridLineWidth: '1',
                gridLineColor: '#E4EAF0',
                labels: {
                    useHTML: true,
                    formatter: function (){
                        return '<span class="fontFamily">'+this.value+'</span>';
                    }
                }
            },
            yAxis: {
                min:0,
                max:100,
                tickPixelInterval: 50 ,//设置Y轴的间隔刻度值
                gridLineWidth: '0',
                title: {
                    text: ''
                },
                labels: {
                    useHTML: true,
                    formatter: function (){
                        return '<span class="fontFamily">'+this.value+'%</span>';
                    }
                }, 
            },
            navigation: {//取消右上角按钮
                    buttonOptions: {
                        enabled: false
                    }
                },
            tooltip: {
                useHTML:true,
                borderColor:'#ececec',
                backgroundColor:"#fff",
                borderRadius:20,
                style:{
                    "width":"200px"
                },
                formatter: function() {
                    console.log(this)
                    return '<div class="fontFamily" style="z-index:1010;"><div style="text-align:center;font-size:20px;color:#999; margin-bottom:10px;">'+Math.floor(this.y)+'%</div><div style="font-size:14px;color:d0d0d0;">'+seriesDateName[this.point.index]+'</div><div style="font-size:12px;color:d0d0d0;"><span style="padding-top:10px;">'+ seriesDateTime[this.point.index]+ '</span><div></div>';
                }
            },
            legend: {
                itemStyle: {
                    color: '#999'
                },
                align: 'center',
                verticalAlign: 'bottom',
                // borderWidth: 0
                iewmWidth : 130, //设置每个图列项的宽度
                symbolPadding: 10, // 图表和文本之间的距离
                symbolWidth: 10 // 设置是否显示横线
          
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        style: {
                            "textShadow": '5'
                        }
                    }
                    
                }
            },
            series: seriesArr
        })
    };
    return service;
}]);



























