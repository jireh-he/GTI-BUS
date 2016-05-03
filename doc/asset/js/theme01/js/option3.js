/**
 * 
 */
function option3 (name) {

    var option = {
        title : {
            text: name,
            subtext: '数据来中国城市建设统计年鉴',
            x:'right',
            textStyle:{}
        },
        tooltip : {
            trigger: 'item'
        },
        dataRange: {
            min: 0,
         max : dataMap['data' + name][2016 + 'max'],
            //max:65000,//2015-6-2改动。不然上面的语句报错。
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true,
            x: 'left'
        },
        series : [
            {
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    y: 'top',
                    height : 340
                },
                itemStyle:{
                    normal:{label:{show:true}}
                }
            }
        ]
    };

    option.title.text =  eNameMap[name];
    var color = eColorMap[name];
    option.title.textStyle.color = color;
    option.dataRange.color = [
        color, 
        require('zrender/tool/color').lift(color, -0.9)
    ];
    // console.log(option.dataRange.color,name)

    var timelineOption = {
        timeline : {
            data : (function(){
                var a = [];
                for (var i = 2001; i <= 2016; i=i+5) {
                    a.push(i + '-01-01');
                }
                return a;
            })(),
            label : {
                formatter : function(s) {
                    return s.slice(0, 4);
                }
            },
            playInterval : 1000
        },
        options : []
    };
  
    var curYear = 2001;
    option.series[0].name = eNameMap[name] + '(' + curYear + ')';
    option.series[0].data =  dataMap['data' + name][curYear]

    timelineOption.options.push(option);
    for (curYear = 2006; curYear <= 2016; curYear=curYear+5 ) {
        var newSeries = {
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}}
                }
            };
        newSeries.name =  eNameMap[name] + '(' + curYear + ')';
        newSeries.data =  dataMap['data' + name][curYear]
        timelineOption.options.push({
            series : [newSeries]
        });
       
    }
    return timelineOption;
}