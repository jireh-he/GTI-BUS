/**
 * 2016-5-30
 * By Jireh
 * 
 */
var BMapExt,map,container,myChart;
(function () {
require.config({
    paths: {

    	echarts:'./doc/asset/js',
    },
    packages: [
               {
                   name: 'BMap',
                   location: './doc/asset/js/BMap/src',
                   main: 'main'
               }
           ]
});
var cityname='厦门';
require(
	    [
	        'echarts',
	        'BMap',
	        'echarts/chart/map'
	    ],
	    function (echarts, BMapExtension) {

	        // 初始化地图
	        BMapExt = new BMapExtension($('#allmap')[0], BMap, echarts,{
	            enableMapClick: true
	        });
	        map = BMapExt.getMap();
	        container = BMapExt.getEchartsContainer();
	        map.centerAndZoom(cityname,12);
	        map.enableScrollWheelZoom(true);
	    }
	    );
var legendItems=['公园','银行'];
$("#legend-list").html(makeLegend(legendItems));
$(".legend-item").on('click',function(){
		$(this).find('.item-checkbox').toggle();
		var checked=$(this).find('.item-checkbox').css('display');
		if(checked=='block'){
			cityPoi(cityname, $(this));
		}
		if(checked=='none'){
			if(myChart){
				var option=myChart.getOption();
				var searchStr=$(this).find('.item-title').text();
				var series=option.series;
				var newseries=[];
		  		for(var k=0;k<series.length;k++){
        			if(series[k].name!=searchStr)
        				newseries.push(series[k]);
        		}
		  		option.series=newseries;
		  		BMapExt.setOption(option, true);
			}
		}
});

})();
var cityPoi=function(cityname,legendItem){
				var searchStr=legendItem.find('.item-title').text();
				
		        poiSearch(map, searchStr, 
		        		function(g){
		        	var checked=legendItem.find('.item-checkbox').css('display');
		        	if(checked=='none')
		        		return;
		        	if(myChart){
		        		var option=myChart.getOption();
		        		var series=option.series;
		        		var exist=false;
		        		var k=0;
		        		for(k=0;k<series.length;k++){
		        			if(series[k].name==searchStr)
		        				break;
		        		}
	        			var newoption=makeOption(cityname+'POI展示', g, legendItem);
	        			series[k]=newoption.series[0];
		
		        	}else{
		        		myChart = BMapExt.initECharts(container);
		        		var option=makeOption(cityname+'POI展示',g,legendItem);
		        	}
			        window.onresize = myChart.resize;
			        
			        BMapExt.setOption(option, true);
		        		
		        		});
};
var poiSearch=function(map,searchstr,optionCallback){
	var s={};
	var j=1;
	var options = {
			pageCapacity:50,
			onSearchComplete: function(results){
				// 判断状态是否正确
				if (local.getStatus() == BMAP_STATUS_SUCCESS){
					for (var i = 0; i < results.getCurrentNumPois(); i ++){
						s[results.getPoi(i).title]=[results.getPoi(i).point.lng,results.getPoi(i).point.lat];
						
					}
	                if(results.getPageIndex!=results.getNumPages())  
	                {
	                        local.gotoPage(j);
	                        j=j+1;
	                }   
	                
					optionCallback(s);
				}
			}
		};
		var local = new BMap.LocalSearch(map, options);
		
		local.search(searchstr);
};

var makeOption=function(title,geolist,legendItem){
	var searchStr=legendItem.find('.item-title').text();
	var color=legendItem.find('.colorbox').css('background-color');
	var d=[];
    for(var key in geolist){
    	d.push({name:key});
    }
    legendItem.find('.stats_count').text(d.length);
	return option={
		title:{
			text:title,
			x:'center'
		},
		tooltip:{
			trigger:'item'
		},
		toolbox:{
			show:true,
			orient:'vertical',
			x:'right',
			y:'center',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
		},
		series:[
		    {
		    	name:searchStr,
		    	type:'map',
		    	mapType:'none',
		    	data:[],
		    	geoCoord:geolist,
		    	markPoint:{
		    		symbol:'emptyCircle',
		            symbolSize : 3,
	                effect : {
	                    show: true,
	                    shadowBlur : 0
	                },
	                itemStyle:{
	                    normal:{
	                        label:{show:false},
	                        color:color,
	                    }
	                },
	                data:d,
		    	}
		    }    
		        ]
		
	};
}

