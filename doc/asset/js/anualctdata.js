/**
 * 
 */
/*var placeList = [
    {name:'海门', geoCoord:[121.15, 31.89]},
    {name:'鄂尔多斯', geoCoord:[109.781327, 39.608266]},
    {name:'招远', geoCoord:[120.38, 37.35]},
    {name:'舟山', geoCoord:[122.207216, 29.985295]},
    {name:'齐齐哈尔', geoCoord:[123.97, 47.33]},
    {name:'盐城', geoCoord:[120.13, 33.38]},
    {name:'赤峰', geoCoord:[118.87, 42.28]},
    {name:'青岛', geoCoord:[120.33, 36.07]},
    {name:'乳山', geoCoord:[121.52, 36.89]},
    {name:'金昌', geoCoord:[102.188043, 38.520089]},
    {name:'泉州', geoCoord:[118.58, 24.93]},
    {name:'莱西', geoCoord:[120.53, 36.86]},
    {name:'日照', geoCoord:[119.46, 35.42]},
    {name:'胶南', geoCoord:[119.97, 35.88]},
    {name:'南通', geoCoord:[121.05, 32.08]},
    {name:'拉萨', geoCoord:[91.11, 29.97]},
    {name:'云浮', geoCoord:[112.02, 22.93]},
    {name:'梅州', geoCoord:[116.1, 24.55]},
    {name:'文登', geoCoord:[122.05, 37.2]},
    {name:'上海', geoCoord:[121.48, 31.22]},
    {name:'攀枝花', geoCoord:[101.718637, 26.582347]},
    {name:'威海', geoCoord:[122.1, 37.5]},
    {name:'承德', geoCoord:[117.93, 40.97]},
    {name:'厦门', geoCoord:[118.1, 24.46]},
    {name:'汕尾', geoCoord:[115.375279, 22.786211]},
    {name:'潮州', geoCoord:[116.63, 23.68]},
    {name:'丹东', geoCoord:[124.37, 40.13]},
    {name:'太仓', geoCoord:[121.1, 31.45]},
    {name:'曲靖', geoCoord:[103.79, 25.51]},
    {name:'烟台', geoCoord:[121.39, 37.52]},
    {name:'福州', geoCoord:[119.3, 26.08]},
    {name:'瓦房店', geoCoord:[121.979603, 39.627114]},
    {name:'即墨', geoCoord:[120.45, 36.38]},
    {name:'抚顺', geoCoord:[123.97, 41.97]},
    {name:'玉溪', geoCoord:[102.52, 24.35]},
    {name:'张家口', geoCoord:[114.87, 40.82]},
    {name:'阳泉', geoCoord:[113.57, 37.85]},
    {name:'莱州', geoCoord:[119.942327, 37.177017]},
    {name:'湖州', geoCoord:[120.1, 30.86]},
    {name:'汕头', geoCoord:[116.69, 23.39]},
    {name:'昆山', geoCoord:[120.95, 31.39]},
    {name:'宁波', geoCoord:[121.56, 29.86]},
    {name:'湛江', geoCoord:[110.359377, 21.270708]},
    {name:'揭阳', geoCoord:[116.35, 23.55]},
    {name:'荣成', geoCoord:[122.41, 37.16]},
    {name:'连云港', geoCoord:[119.16, 34.59]},
    {name:'葫芦岛', geoCoord:[120.836932, 40.711052]},
    {name:'常熟', geoCoord:[120.74, 31.64]},
    {name:'东莞', geoCoord:[113.75, 23.04]},
    {name:'河源', geoCoord:[114.68, 23.73]},
    {name:'淮安', geoCoord:[119.15, 33.5]},
    {name:'泰州', geoCoord:[119.9, 32.49]},
    {name:'南宁', geoCoord:[108.33, 22.84]},
    {name:'营口', geoCoord:[122.18, 40.65]},
    {name:'惠州', geoCoord:[114.4, 23.09]},
    {name:'江阴', geoCoord:[120.26, 31.91]},
    {name:'蓬莱', geoCoord:[120.75, 37.8]},
    {name:'韶关', geoCoord:[113.62, 24.84]},
    {name:'嘉峪关', geoCoord:[98.289152, 39.77313]},
    {name:'广州', geoCoord:[113.23, 23.16]},
    {name:'延安', geoCoord:[109.47, 36.6]},
    {name:'太原', geoCoord:[112.53, 37.87]},
    {name:'清远', geoCoord:[113.01, 23.7]},
    {name:'中山', geoCoord:[113.38, 22.52]},
    {name:'昆明', geoCoord:[102.73, 25.04]},
    {name:'寿光', geoCoord:[118.73, 36.86]},
    {name:'盘锦', geoCoord:[122.070714, 41.119997]},
    {name:'长治', geoCoord:[113.08, 36.18]},
    {name:'深圳', geoCoord:[114.07, 22.62]},
    {name:'珠海', geoCoord:[113.52, 22.3]},
    {name:'宿迁', geoCoord:[118.3, 33.96]},
    {name:'咸阳', geoCoord:[108.72, 34.36]},
    {name:'铜川', geoCoord:[109.11, 35.09]},
    {name:'平度', geoCoord:[119.97, 36.77]},
    {name:'佛山', geoCoord:[113.11, 23.05]},
    {name:'海口', geoCoord:[110.35, 20.02]},
    {name:'江门', geoCoord:[113.06, 22.61]},
    {name:'章丘', geoCoord:[117.53, 36.72]},
    {name:'肇庆', geoCoord:[112.44, 23.05]},
    {name:'大连', geoCoord:[121.62, 38.92]},
    {name:'临汾', geoCoord:[111.5, 36.08]},
    {name:'吴江', geoCoord:[120.63, 31.16]},
    {name:'石嘴山', geoCoord:[106.39, 39.04]},
    {name:'沈阳', geoCoord:[123.38, 41.8]},
    {name:'苏州', geoCoord:[120.62, 31.32]},
    {name:'茂名', geoCoord:[110.88, 21.68]},
    {name:'嘉兴', geoCoord:[120.76, 30.77]},
    {name:'长春', geoCoord:[125.35, 43.88]},
    {name:'胶州', geoCoord:[120.03336, 36.264622]},
    {name:'银川', geoCoord:[106.27, 38.47]},
    {name:'张家港', geoCoord:[120.555821, 31.875428]},
    {name:'三门峡', geoCoord:[111.19, 34.76]},
    {name:'锦州', geoCoord:[121.15, 41.13]},
    {name:'南昌', geoCoord:[115.89, 28.68]},
    {name:'柳州', geoCoord:[109.4, 24.33]},
    {name:'三亚', geoCoord:[109.511909, 18.252847]},
    {name:'自贡', geoCoord:[104.778442, 29.33903]},
    {name:'吉林', geoCoord:[126.57, 43.87]},
    {name:'阳江', geoCoord:[111.95, 21.85]},
    {name:'泸州', geoCoord:[105.39, 28.91]},
    {name:'西宁', geoCoord:[101.74, 36.56]},
    {name:'宜宾', geoCoord:[104.56, 29.77]},
    {name:'呼和浩特', geoCoord:[111.65, 40.82]},
    {name:'成都', geoCoord:[104.06, 30.67]},
    {name:'大同', geoCoord:[113.3, 40.12]},
    {name:'镇江', geoCoord:[119.44, 32.2]},
    {name:'桂林', geoCoord:[110.28, 25.29]},
    {name:'张家界', geoCoord:[110.479191, 29.117096]},
    {name:'宜兴', geoCoord:[119.82, 31.36]},
    {name:'北海', geoCoord:[109.12, 21.49]},
    {name:'西安', geoCoord:[108.95, 34.27]},
    {name:'金坛', geoCoord:[119.56, 31.74]},
    {name:'东营', geoCoord:[118.49, 37.46]},
    {name:'牡丹江', geoCoord:[129.58, 44.6]},
    {name:'遵义', geoCoord:[106.9, 27.7]},
    {name:'绍兴', geoCoord:[120.58, 30.01]},
    {name:'扬州', geoCoord:[119.42, 32.39]},
    {name:'常州', geoCoord:[119.95, 31.79]},
    {name:'潍坊', geoCoord:[119.1, 36.62]},
    {name:'重庆', geoCoord:[106.54, 29.59]},
    {name:'台州', geoCoord:[121.420757, 28.656386]},
    {name:'南京', geoCoord:[118.78, 32.04]},
    {name:'滨州', geoCoord:[118.03, 37.36]},
    {name:'贵阳', geoCoord:[106.71, 26.57]},
    {name:'无锡', geoCoord:[120.29, 31.59]},
    {name:'本溪', geoCoord:[123.73, 41.3]},
    {name:'克拉玛依', geoCoord:[84.77, 45.59]},
    {name:'渭南', geoCoord:[109.5, 34.52]},
    {name:'马鞍山', geoCoord:[118.48, 31.56]},
    {name:'宝鸡', geoCoord:[107.15, 34.38]},
    {name:'焦作', geoCoord:[113.21, 35.24]},
    {name:'句容', geoCoord:[119.16, 31.95]},
    {name:'北京', geoCoord:[116.46, 39.92]},
    {name:'徐州', geoCoord:[117.2, 34.26]},
    {name:'衡水', geoCoord:[115.72, 37.72]},
    {name:'包头', geoCoord:[110, 40.58]},
    {name:'绵阳', geoCoord:[104.73, 31.48]},
    {name:'乌鲁木齐', geoCoord:[87.68, 43.77]},
    {name:'枣庄', geoCoord:[117.57, 34.86]},
    {name:'杭州', geoCoord:[120.19, 30.26]},
    {name:'淄博', geoCoord:[118.05, 36.78]},
    {name:'鞍山', geoCoord:[122.85, 41.12]},
    {name:'溧阳', geoCoord:[119.48, 31.43]},
    {name:'库尔勒', geoCoord:[86.06, 41.68]},
    {name:'安阳', geoCoord:[114.35, 36.1]},
    {name:'开封', geoCoord:[114.35, 34.79]},
    {name:'济南', geoCoord:[117, 36.65]},
    {name:'德阳', geoCoord:[104.37, 31.13]},
    {name:'温州', geoCoord:[120.65, 28.01]},
    {name:'九江', geoCoord:[115.97, 29.71]},
    {name:'邯郸', geoCoord:[114.47, 36.6]},
    {name:'临安', geoCoord:[119.72, 30.23]},
    {name:'兰州', geoCoord:[103.73, 36.03]},
    {name:'沧州', geoCoord:[116.83, 38.33]},
    {name:'临沂', geoCoord:[118.35, 35.05]},
    {name:'南充', geoCoord:[106.110698, 30.837793]},
    {name:'天津', geoCoord:[117.2, 39.13]},
    {name:'富阳', geoCoord:[119.95, 30.07]},
    {name:'泰安', geoCoord:[117.13, 36.18]},
    {name:'诸暨', geoCoord:[120.23, 29.71]},
    {name:'郑州', geoCoord:[113.65, 34.76]},
    {name:'哈尔滨', geoCoord:[126.63, 45.75]},
    {name:'聊城', geoCoord:[115.97, 36.45]},
    {name:'芜湖', geoCoord:[118.38, 31.33]},
    {name:'唐山', geoCoord:[118.02, 39.63]},
    {name:'平顶山', geoCoord:[113.29, 33.75]},
    {name:'邢台', geoCoord:[114.48, 37.05]},
    {name:'德州', geoCoord:[116.29, 37.45]},
    {name:'济宁', geoCoord:[116.59, 35.38]},
    {name:'荆州', geoCoord:[112.239741, 30.335165]},
    {name:'宜昌', geoCoord:[111.3, 30.7]},
    {name:'义乌', geoCoord:[120.06, 29.32]},
    {name:'丽水', geoCoord:[119.92, 28.45]},
    {name:'洛阳', geoCoord:[112.44, 34.7]},
    {name:'秦皇岛', geoCoord:[119.57, 39.95]},
    {name:'株洲', geoCoord:[113.16, 27.83]},
    {name:'石家庄', geoCoord:[114.48, 38.03]},
    {name:'莱芜', geoCoord:[117.67, 36.19]},
    {name:'常德', geoCoord:[111.69, 29.05]},
    {name:'保定', geoCoord:[115.48, 38.85]},
    {name:'湘潭', geoCoord:[112.91, 27.87]},
    {name:'金华', geoCoord:[119.64, 29.12]},
    {name:'岳阳', geoCoord:[113.09, 29.37]},
    {name:'长沙', geoCoord:[113, 28.21]},
    {name:'衢州', geoCoord:[118.88, 28.97]},
    {name:'廊坊', geoCoord:[116.7, 39.53]},
    {name:'菏泽', geoCoord:[115.480656, 35.23375]},
    {name:'合肥', geoCoord:[117.27, 31.86]},
    {name:'武汉', geoCoord:[114.31, 30.52]},
    {name:'大庆', geoCoord:[125.03, 46.58]}
]
option = {
    backgroundColor: '#1b1b1b',
    color: [
        'rgba(255, 255, 255, 0.8)',
        'rgba(14, 241, 242, 0.8)',
        'rgba(37, 140, 249, 0.8)'
    ],
    title : {
        text: '大规模MarkPoint特效',
        subtext: '纯属虚构',
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['强','中','弱'],
        textStyle : {
            color: '#fff'
        }
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name: '弱',
            type: 'map',
            mapType: 'china',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:1.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data : [],
            markPoint : {
                symbolSize: 2,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = 3000;
                    var geoCoord
                    while(len--) {
                        geoCoord = placeList[len % placeList.length].geoCoord;
                        data.push({
                            name : placeList[len % placeList.length].name + len,
                            value : 10,
                            geoCoord : [
                                geoCoord[0] + Math.random() * 5 - 2.5,
                                geoCoord[1] + Math.random() * 3 - 1.5
                            ]
                        })
                    }
                    return data;
                })()
            }
        },
        {
            name: '中',
            type: 'map',
            mapType: 'china',
            data : [],
            markPoint : {
                symbolSize: 3,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = 1000;
                    var geoCoord
                    while(len--) {
                        geoCoord = placeList[len % placeList.length].geoCoord;
                        data.push({
                            name : placeList[len % placeList.length].name + len,
                            value : 50,
                            geoCoord : [
                                geoCoord[0] + Math.random() * 5 - 2.5,
                                geoCoord[1] + Math.random() * 3 - 1.5
                            ]
                        })
                    }
                    return data;
                })()
            }
        },
        {
            name: '强',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam:true,
            data : [],
            markPoint : {
                symbol : 'diamond',
                symbolSize: 6,
                large: true,
                effect : {
                    show: true
                },
                data : (function(){
                    var data = [];
                    var len = placeList.length;
                    while(len--) {
                        data.push({
                            name : placeList[len].name,
                            value : 90,
                            geoCoord : placeList[len].geoCoord
                        })
                    }
                    return data;
                })()
            }
        }
    ]
};
//var myChart = echarts.init(document.getElementById('anulmap')); 
//myChart.setOption(option);  
require(
			['echarts',
			 'echarts/chart/map'],
			 function(ec){
					var AnuMap=ec.init(document.getElementById('anulmap'));
					AnuMap.setOption(option, true);
					AnuMap.setOption(option, true);			
				
			}
	);*/



///////////////////

var anuloption = {
    title : {
        text: '2013年上半年上证指数'
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params) {
            var res = params[0].name;
            for (var i = params.length - 1; i >= 0; i--) {
                if (params[i].value instanceof Array) {
                    res += '<br/>' + params[i].seriesName;
                    res += '<br/>  开盘 : ' + params[i].value[0] + '  最高 : ' + params[i].value[3];
                    res += '<br/>  收盘 : ' + params[i].value[1] + '  最低 : ' + params[i].value[2];
                }
                else {
                    res += '<br/>' + params[i].seriesName;
                    res += ' : ' + params[i].value;
                }
            }
            return res;
        }
    },
    legend: {
        data:['上证指数','成交金额(万)']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        show : true,
        realtime: true,
        start : 50,
        end : 100
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            axisTick: {onGap:false},
            splitLine: {show:false},
            data : [
                "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
                "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
                "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
                "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
                "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
                "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
                "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
                "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
                "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
                "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
                "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
                "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
                "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
                "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
                "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
                "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
                "2013/6/6", "2013/6/7", "2013/6/13"
            ]
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            splitNumber: 5,
            boundaryGap: [0.01, 0.01]
        },
        {
            type : 'value',
            scale:true,
            splitNumber: 5,
            boundaryGap: [0.05, 0.05],
            axisLabel: {
                formatter: function (v) {
                    return Math.round(v/10000) + ' 万'
                }
            }
        }
    ],
    series : [
        {
            name:'成交金额(万)',
            type:'line',
            yAxisIndex: 1,
            symbol: 'none',
            data:[
                13560434, 8026738.5, 11691637, 12491697, 12485603, 
                11620504, 12555496, 15253370, 12709611, 10458354, 
                10933507, 9896523, 10365702, 10633095, 9722230, 
                12662783, 8757982, 7764234, 10591719, 8826293, 
                11591827, 11153111, 14304651, 11672120, 12536480, 
                12608589, 8843860, 7391994.5, 10063709, 7768895.5, 
                6921859, 10157810, 8148617.5, 7551207, 11397426, 
                10478607, 8595132, 8541862, 9181132, 8570842, 
                10759351, 7335819, 6699753.5, 7759666.5, 6880135.5, 
                7366616.5, 7313504, 7109021.5, 6213270, 5619688, 
                5816217.5, 6695584.5, 5998655.5, 6188812.5, 9538301,
                8224500, 8221751.5, 7897721, 8448324, 6525151, 
                5987761, 7831570, 8162560.5, 7904092, 8139084.5, 
                9116529, 8128014, 7919148, 7566047, 6665826.5, 
                10225527, 11124881, 12884353, 11302521, 11529046, 
                11105205, 9202153, 9992016, 12035250, 11431155, 
                10354677, 10070399, 9164861, 9237718, 7114268, 
                7526158.5, 8105835, 7971452.5
            ],
            markPoint : {
                symbol: 'emptyPin',
                itemStyle : {
                    normal : {
                        color:'#1e90ff',
                        label : {
                            show:true,
                            position:'top',
                            formatter: function (param) {
                                return Math.round(param.value/10000) + ' 万'
                            }
                        }
                    }
                },
                data : [
                    {type : 'max', name: '最大值', symbolSize:5},
                    {type : 'min', name: '最小值', symbolSize:5}
                ]
            },
            markLine : {
                symbol : 'none',
                itemStyle : {
                    normal : {
                        color:'#1e90ff',
                        label : {
                            show:true,
                            formatter: function (param) {
                                return Math.round(param.value/10000) + ' 万'
                            }
                        }
                    }
                },
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'上证指数',
            type:'k',
            data:[ // 开盘，收盘，最低，最高
                [2320.26,2302.6,2287.3,2362.94],
                [2300,2291.3,2288.26,2308.38],
                [2295.35,2346.5,2295.35,2346.92],
                [2347.22,2358.98,2337.35,2363.8],
                [2360.75,2382.48,2347.89,2383.76],
                [2383.43,2385.42,2371.23,2391.82],
                [2377.41,2419.02,2369.57,2421.15],
                [2425.92,2428.15,2417.58,2440.38],
                [2411,2433.13,2403.3,2437.42],
                [2432.68,2434.48,2427.7,2441.73],
                [2430.69,2418.53,2394.22,2433.89],
                [2416.62,2432.4,2414.4,2443.03],
                [2441.91,2421.56,2415.43,2444.8],
                [2420.26,2382.91,2373.53,2427.07],
                [2383.49,2397.18,2370.61,2397.94],
                [2378.82,2325.95,2309.17,2378.82],
                [2322.94,2314.16,2308.76,2330.88],
                [2320.62,2325.82,2315.01,2338.78],
                [2313.74,2293.34,2289.89,2340.71],
                [2297.77,2313.22,2292.03,2324.63],
                [2322.32,2365.59,2308.92,2366.16],
                [2364.54,2359.51,2330.86,2369.65],
                [2332.08,2273.4,2259.25,2333.54],
                [2274.81,2326.31,2270.1,2328.14],
                [2333.61,2347.18,2321.6,2351.44],
                [2340.44,2324.29,2304.27,2352.02],
                [2326.42,2318.61,2314.59,2333.67],
                [2314.68,2310.59,2296.58,2320.96],
                [2309.16,2286.6,2264.83,2333.29],
                [2282.17,2263.97,2253.25,2286.33],
                [2255.77,2270.28,2253.31,2276.22],
                [2269.31,2278.4,2250,2312.08],
                [2267.29,2240.02,2239.21,2276.05],
                [2244.26,2257.43,2232.02,2261.31],
                [2257.74,2317.37,2257.42,2317.86],
                [2318.21,2324.24,2311.6,2330.81],
                [2321.4,2328.28,2314.97,2332],
                [2334.74,2326.72,2319.91,2344.89],
                [2318.58,2297.67,2281.12,2319.99],
                [2299.38,2301.26,2289,2323.48],
                [2273.55,2236.3,2232.91,2273.55],
                [2238.49,2236.62,2228.81,2246.87],
                [2229.46,2234.4,2227.31,2243.95],
                [2234.9,2227.74,2220.44,2253.42],
                [2232.69,2225.29,2217.25,2241.34],
                [2196.24,2211.59,2180.67,2212.59],
                [2215.47,2225.77,2215.47,2234.73],
                [2224.93,2226.13,2212.56,2233.04],
                [2236.98,2219.55,2217.26,2242.48],
                [2218.09,2206.78,2204.44,2226.26],
                [2199.91,2181.94,2177.39,2204.99],
                [2169.63,2194.85,2165.78,2196.43],
                [2195.03,2193.8,2178.47,2197.51],
                [2181.82,2197.6,2175.44,2206.03],
                [2201.12,2244.64,2200.58,2250.11],
                [2236.4,2242.17,2232.26,2245.12],
                [2242.62,2184.54,2182.81,2242.62],
                [2187.35,2218.32,2184.11,2226.12],
                [2213.19,2199.31,2191.85,2224.63],
                [2203.89,2177.91,2173.86,2210.58],
                [2170.78,2174.12,2161.14,2179.65],
                [2179.05,2205.5,2179.05,2222.81],
                [2212.5,2231.17,2212.5,2236.07],
                [2227.86,2235.57,2219.44,2240.26],
                [2242.39,2246.3,2235.42,2255.21],
                [2246.96,2232.97,2221.38,2247.86],
                [2228.82,2246.83,2225.81,2247.67],
                [2247.68,2241.92,2231.36,2250.85],
                [2238.9,2217.01,2205.87,2239.93],
                [2217.09,2224.8,2213.58,2225.19],
                [2221.34,2251.81,2210.77,2252.87],
                [2249.81,2282.87,2248.41,2288.09],
                [2286.33,2299.99,2281.9,2309.39],
                [2297.11,2305.11,2290.12,2305.3],
                [2303.75,2302.4,2292.43,2314.18],
                [2293.81,2275.67,2274.1,2304.95],
                [2281.45,2288.53,2270.25,2292.59],
                [2286.66,2293.08,2283.94,2301.7],
                [2293.4,2321.32,2281.47,2322.1],
                [2323.54,2324.02,2321.17,2334.33],
                [2316.25,2317.75,2310.49,2325.72],
                [2320.74,2300.59,2299.37,2325.53],
                [2300.21,2299.25,2294.11,2313.43],
                [2297.1,2272.42,2264.76,2297.1],
                [2270.71,2270.93,2260.87,2276.86],
                [2264.43,2242.11,2240.07,2266.69],
                [2242.26,2210.9,2205.07,2250.63],
                [2190.1,2148.35,2126.22,2190.1]
            ]
        }
    ]
};
  
require(
        [
            'echarts',
	    'echarts/chart/bar',
	    'echarts/chart/k',
            'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('anulmap')); 
                       // 为echarts对象加载数据 
            myChart.setOption(anuloption); 
        }
    );



