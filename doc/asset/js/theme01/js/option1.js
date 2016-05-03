/**
 * 
 */
function option1 (curSelected) {
    var option = {
        color: ['#87cefa','#ff7f50','#da70d6','#32cd32','#6495ed',
                '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
                '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
                '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'],
        title : {
            subtext: '数据来自于中国城市建设统计年鉴'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data : ['NOBTV','LOBTR','TNAPT','BBTVTTP','ATInv','UAPD'],
            selected : curSelected
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        grid : {
            y : 80,
            y2 : 100,
        },
        xAxis : [
            {
                type : 'category',
                axisLabel: {
                    interval: 0
                },
                data : [
                    '北京','\n天津','河北','\n山西','内蒙古','\n辽宁',
                    '吉林','\n黑龙江','上海','\n江苏','浙江','\n安徽',
                    '福建','\n江西','山东','\n河南','湖北','\n湖南',
                    '广东','\n广西','海南','\n重庆','四川','\n贵州',
                    '云南','\n西藏','陕西','\n甘肃','青海','\n宁夏','新疆'
                ]
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : 'NOBTV（vehicle）/LOBTR(km)',
                max: 53500,
                splitArea : {show : true}
            },
            {
                type : 'value',
                name : 'Other',
                splitArea : {show : true}
            }
        ],
        series : [
            {
                name:'NOBTV',
                _name: 'NOBTV',
                type:'bar',
                markLine: {
                    symbol : ['arrow','none'],symbolSize : [4, 2],itemStyle : {normal: {
                        lineStyle: {color:'orange'},
                        borderColor:'orange',
                        label:{position:'left',formatter:function(params){return Math.round(params.value)},
                        textStyle:{color:"orange"}
                    }}},
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            },
            {
                name:'LOBTR',
                _name: 'LOBTR',
                yAxisIndex: 0,
                type:'bar'
            },
            {
                name:'TNAPT',
                _name: 'TNAPT',
                yAxisIndex: 1,
                type:'bar'
            },
            {
                name:'ABTVTTP',
                _name: 'ABTVTTP',
                yAxisIndex: 1,
                type:'bar'
            },
            {
                name:'ATInv',
                _name: 'ATInv',
                yAxisIndex: 1,
                type:'bar'
            },
            {
                name:'UAPD',
                _name: 'UAPD',
                yAxisIndex: 1,
                type:'bar'
            }
        ]
    };
    
    var timelineOption = {
        timeline : {
            data : (function(){
                var a = [];
                for (var i = 2001; i <= 2016; i+5) {
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
    option.title.text = curYear + '年全国公共汽电车营运指标'
    for (var i = 0, l = option.series.length; i < l; i++) {
        option.series[i].data =  dataMap['data' + option.series[i]._name][curYear]
    }
    timelineOption.options.push(option);
    //这个地方年度数据有修改
    for (curYear = 2006; curYear <= 2016; curYear+5) {
        var newSeries = [
                {
                    name:'NOBTV',
                    _name: 'NOBTV'
                },
                {
                    name:'LOBTR',
                    _name: 'LOBTR',
                    yAxisIndex: 1
                },
                {
                    name:'TNAPT',
                    _name: 'TNAPT',
                    yAxisIndex: 1
                },
                {
                    name:'ABTVTTP',
                    _name: 'ABTVTTP',
                    yAxisIndex: 1
                },
                {
                    name:'ATInv',
                    _name: 'ATInv',
                    yAxisIndex: 1
                },
                {
                    name:'UAPD',
                    _name: 'UAPD',
                    yAxisIndex: 1
                }
            ];
        
        for (var i = 0, l = newSeries.length; i < l; i++) {
            newSeries[i].data =  dataMap['data' + newSeries[i]._name][curYear]
        }
        timelineOption.options.push({
            title : {
                text : curYear + '年全国宏观经济指标'
            },
            series : newSeries
        })
    }
    return timelineOption;
}