/**
 * 
 */
//经济指标命名映射
var eNameMap = {
    'NOBTV': '营运公交车辆数',
    'LOBTR' : '营运线路里程',
    'TNAPT' : '年客运量',
    'ABTVTTP' : '万人公共汽电车辆保有量',
    'ATInv' : '公共交通固定资产投资',
    'UAPD' : '城区人口密度'
};
//颜色映射
var eColorMap = {
		'NOBTV': '#1e90ff',
		'LOBTR' : '#ff7f50',
		'TNAPT' : '#da70d6',
		 'ABTVTTP': '#32cd32',
		 'ATInv': '#6495ed',
		 'UAPD': '#ff69b4'
};
//---------


require.config({
    paths: {
        //echarts: '../../www/js'
    	echarts:'./asset/js',
    	zrender:'./asset/js/zrender',
    }
});
launchExample();


var EC_READY = false;
var myChart0;

var isExampleLaunched;
function launchExample() {
    if (isExampleLaunched) {
        return;
    }

    // 按需加载
    isExampleLaunched = 1;
    require(
        [
            'echarts',
            'echarts/chart/line',
            'echarts/chart/bar',
            'echarts/chart/scatter',
            'echarts/chart/pie',
            'echarts/chart/radar',
            'echarts/chart/map'
        ],
        function (ec) {
            EC_READY = true;
            myChart0 = ec.init(document.getElementById('g0')).setOption(option0()); 
            //showTabContent(1);
        }
    );
}


var curTabIdx = 1;
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    // e.target // activated tab
    // e.relatedTarget // previous tab
    if (!EC_READY) {
        return;
    }
    hideTabContent(curTabIdx);
    curTabIdx = e.target.id.replace('tab','');
 
    showTabContent(curTabIdx);
});

var curYear = '2001';
$('button').on('click', function (e) {
    $('#' + curYear)[0].className = 'btn btn-info';
    curYear = e.target.id;
    $('#' + curYear)[0].className = 'btn btn-success';
    showTabContent(curTabIdx);
});

var curEIndex = 'NOBTV';
$('input:radio[name="optionsRadios"]').on('change', function (e) {
    curRange = false;
    curEIndex = e.target.value;
    showTabContent(curTabIdx);
});

var functionMap = {};
function showTabContent(idx) {
	
    functionMap['chart' + idx](idx);
}
function hideTabContent(idx) {
    functionMap['chart' + idx + 'dispose'](idx);
}

// last chart
var myChart3;
var curSelected = {
	'NOBTV'  : true,
	'LOBTR' : false,
	'TNAPT': true,
	'ABTVTTP' : false,
	'ATInv' : false,
	'UAPD' : false
};
functionMap.chart3 = function (idx) {
    functionMap.chart3dispose();
    myChart3 = require('echarts').init(document.getElementById('g' + idx));
    myChart3.setOption(option1(curSelected));
    // 图例状态保持
    myChart3.on(require('echarts/config').EVENT.LEGEND_SELECTED, function (param){
        curSelected = param.selected;
    });
}
functionMap.chart3dispose = function () {
    if (myChart3) {
        myChart3.dispose();
        myChart3 = false;
    }
}

// second chart
var myChart20;
var myChart21;
var myChart22;
var myChart23;
var myChart24;
var myChart25;
functionMap.chart2 = function (idx) {

    functionMap.chart2dispose();
    var ec = require('echarts');
    myChart20 = ec.init(document.getElementById('g20'));
    
    myChart21 = ec.init(document.getElementById('g21'));
    myChart22 = ec.init(document.getElementById('g22'));
    myChart23 = ec.init(document.getElementById('g23'));
    myChart24 = ec.init(document.getElementById('g24'));
    myChart25 = ec.init(document.getElementById('g25'));
    
    myChart20.setOption(option2('NOBTV'));
    myChart21.setOption(option2('LOBTR'));
    myChart22.setOption(option2('TNAPT'));
    myChart23.setOption(option2('ABTVTTP'));
    myChart24.setOption(option2('ATInv'));
    myChart25.setOption(option2('UAPD'));
}
functionMap.chart2dispose = function () {
    if (myChart20) {
        myChart20.dispose();
        myChart21.dispose();
        myChart22.dispose();
        myChart23.dispose();
        myChart24.dispose();
        myChart25.dispose();
        myChart20 = false; 
        myChart21 = false;
        myChart22 = false;
        myChart23 = false;
        myChart24 = false;
        myChart25 = false;
    }
}

// first chart
var myChart1;
var curRange = false;
functionMap.chart1 = function (idx) {

    functionMap.chart1dispose(idx);
    myChart1 = require('echarts').init(document.getElementById('g' + idx));
    myChart1.setOption(option3(curEIndex));
}
functionMap.chart1dispose = function () {
    if (myChart1) {
        myChart1.dispose();
        myChart1 = false; 
    }
}
var resizeTicket;
window.onload = function () {
    window.onresize = function () {
        clearTimeout(resizeTicket);
        resizeTicket = setTimeout(function (){
            myChart0.resize();
            if (curTabIdx == 1) {
                myChart1.resize();
            }
            else if (curTabIdx == 2) {
                myChart20.resize();
                myChart21.resize();
                myChart22.resize();
                myChart23.resize();
                myChart24.resize();
                myChart25.resize();
            }
            else {
                
                myChart3.resize();
            }
        },200);
    }
}
