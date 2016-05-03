/**
 * 
 */
function option0 () {
    return {
        title : {
            text: '2014年年末营运公共汽电车辆数（台）',
            subtext: '数据来自于2015年城市客运发展报告',
            x:'right',
            y: 'top'
        },
        tooltip : {
            trigger: 'item'
        },
        dataRange: {
            min: 300,
            max: 65000,
            orient: 'horizontal',
            color:['red','yellow'],
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true,
            x: 'center',
            y: 'bottom',
            textStyle: {
                color: 'orange'
            }
        },
        toolbox: {
            show : true,
            //orient : 'vertical',
            x: 'left',
            y: 'top',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        grid:{
            x: 50,
            borderWidth:0
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                name: '（台）',
                splitLine: {show:true},
                boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                axisLabel: {
                    interval:0
                },
                data : ['西藏','青海','海南','宁夏','贵州','新疆','甘肃','云南','江西','内蒙古','广西','山西','吉林','天津','福建','陕西','安徽','重庆','湖南','黑龙江','湖北','上海','河南','四川','辽宁','河北','浙江','北京','江苏','山东','广东']
            }
        ],
        series : [
            {
                name: '2014年年末营运公共汽电车辆数',
                type: 'map',
                mapType: 'china',
                itemSdtyle:{
                    normal:{label:{show:true}}
                },
                mapLocation: {
                    x: 'right',
                    y: 80
                },
                data:[
                    {name:'西藏', value:317},
                    {name:'青海', value:1943},
                    {name:'海南', value:2235},
                    {name:'宁夏', value:3078},
                    {name:'贵州', value:3921},
                    {name:'新疆', value:4662},
                    {name:'甘肃', value:5159},
                    {name:'云南', value:6402},
                    {name:'江西', value:7093},
                    {name:'内蒙古', value:7427},
                    {name:'广西', value:7527},
                    {name:'山西', value:7529},
                    {name:'吉林', value:8129},
                    {name:'天津', value:9670},
                    {name:'福建', value:11036},
                    {name:'陕西', value:11282},
                    {name:'安徽', value:12051},
                    {name:'重庆', value:12088},
                    {name:'湖南', value:12376},
                    {name:'黑龙江', value:12804},
                    {name:'湖北', value:14523},
                    {name:'上海', value:16717},
                    {name:'河南', value:16919},
                    {name:'四川', value:18474},
                    {name:'辽宁', value:18884},
                    {name:'河北', value:20175},
                    {name:'浙江', value:20531},
                    {name:'北京', value:23592},
                    {name:'江苏', value:27145},
                    {name:'山东', value:27669},
                    {name:'广东', value:62943}
                ]
            },
            {
                type: 'bar',
                itemStyle : {
                    normal : {
                        color : (function (){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 80, 0, 500,
                                [[0, 'red'],[0.2, 'orange'],[1, 'yellow']]
                            )
                        })(),
                        label : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            textStyle : {
                                color : 'orange',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {name:'西藏', value:317},
                    {name:'青海', value:1943},
                    {name:'海南', value:2235},
                    {name:'宁夏', value:3078},
                    {name:'贵州', value:3921},
                    {name:'新疆', value:4662},
                    {name:'甘肃', value:5159},
                    {name:'云南', value:6402},
                    {name:'江西', value:7093},
                    {name:'内蒙古', value:7427},
                    {name:'广西', value:7527},
                    {name:'山西', value:7529},
                    {name:'吉林', value:8129},
                    {name:'天津', value:9670},
                    {name:'福建', value:11036},
                    {name:'陕西', value:11282},
                    {name:'安徽', value:12051},
                    {name:'重庆', value:12088},
                    {name:'湖南', value:12376},
                    {name:'黑龙江', value:12804},
                    {name:'湖北', value:14523},
                    {name:'上海', value:16717},
                    {name:'河南', value:16919},
                    {name:'四川', value:18474},
                    {name:'辽宁', value:18884},
                    {name:'河北', value:20175},
                    {name:'浙江', value:20531},
                    {name:'北京', value:23592},
                    {name:'江苏', value:27145},
                    {name:'山东', value:27669},
                    {name:'广东', value:62943}
                ]
            }
        ]
    };
}