/**
 * 2016-5-30
 * By Jireh
 * 
 */

$(document).ready(function(){
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
	//初始化半径slider
	$('#rad').slider({
		formatter: function(value) {
			return '当前半径: ' + value+'KM';
		}
	});
	loadChinaMap();


});

var loadChinaMap=function(){
	require(
		    [
		        'echarts',
		        'echarts/chart/map'
		    ],
		    function (ec) {
		    	mapChart=ec.init($('#allmap')[0]);
		    	mapChart.setOption(mapoption, true);
		    	mapChart.on('mapSelected', function (param){
		    	    var len = mapType.length;
		    	    var mt = mapType[curIndx % len];

		    	    if (mt == 'china') {
		    	        // 在全国地图中选择区域
		    	        var selected = param.selected;
		    	        for (var i in selected) {
		    	   
		    	        	if (selected[i]) {
		    	                mt = i; 
		    	                while (len--) {
		    	                    if (mapType[len] == mt) {
		    	                        curIndx = len;
		    	                    }
		    	                }
		    	            }
		    	        }
			    	    mapoption.series[0].mapType = mt;
			    	    mapoption.title.subtext = mt + ' （点击切换）';
			    	    mapChart.setOption(mapoption, true);
		    	    }
		    	    else {
		    	        var selected = param.selected;
		    	        for (var i in selected) {
		    	   
		    	        	if (selected[i]) {
		    	                mt = i; 
		    	                break;
		    	            }
		    	        }
		    	        if(mapChart)
		    	        	mapChart.clear();
		    	        loadBDExtMap(mt);
		    	        
		    	    }

		    	});
		    });
}

var goAllmap=function(){
	$('#allmap').empty();
	if(myChart)
		myChart.clear();
	mapoption.series[0].mapType = 'china';
    mapoption.title.subtext =  '全国地图 （点击切换）';
	curIndx=0;
	loadChinaMap();
}

var loadBDExtMap=function(cityname){
	$('#allmap').empty();
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
		     // 创建地址解析器实例
		    	var myGeo = new BMap.Geocoder();
		    	myGeo.getPoint(cityname,function(point){
		    		if(point){
		    			searchPoint=point;
		    			map.centerAndZoom(point,12);
		    			var myIcon = new BMap.Icon("./doc/asset/img/marker-icon.png", new BMap.Size(25,41));
		    			var marker=new BMap.Marker(point,{icon:myIcon});
		    			marker.enableDragging();
		    			map.addOverlay(marker);
		    			marker.addEventListener("dragend",function(e){
		    				searchPoint=e.point;
		    				$(".legend-item").map(function(){
		    					legendItemSearch($(this),cityname);
		    				});
		    			});
		    			
		    		}
		    	},cityname);
		    }
		    );



	$("#legend-list").html(makeLegend(legendItems));
	$(".legend-item").on('click',function(){
			$(this).find('.item-checkbox').toggle();
			legendItemSearch($(this),cityname);
	});


	var circle;
	
	$('#rad').on('slideStart',function(e){
		
		radius=1000*parseInt(e.value,0);
		circle=new BMap.Circle(searchPoint,radius);
		map.addOverlay(circle);
		
	}).on('slideStop',function(e){
		map.removeOverlay(circle);
		
	}).on('change',function(e){
		$('#radius').text(e.value.newValue);
		radius=1000*parseInt(e.value.newValue,0);
		$(".legend-item").map(function(){
			legendItemSearch($(this),cityname);
		});
	});
};

var legendItemSearch=function(legendItem,cityname){
	var checked=legendItem.find('.item-checkbox').css('display');
	if(checked=='block'){
		cityPoi(cityname, legendItem,radius);
	}
	if(checked=='none'){
		if(myChart&myChart!=undefined){
			var option=myChart.getOption();
			var searchStr=legendItem.find('.item-title').text();
			var series=option.series;
			var newseries=[];
	  		for(var k=0;k<series.length;k++){
    			if(series[k].name!=searchStr)
    				newseries.push(series[k]);
    		}
	  		option.series=newseries;
	  		BMapExt.setOption(option, true);
	  		legendItem.find('.stats_count').text('0');
		}
	}
};


var cityPoi=function(cityname,legendItem,radius){
				var searchStr=legendItem.find('.item-title').text();
				
		        poiSearch(searchPoint, searchStr,radius, 
		        		function(g){
		        	var checked=legendItem.find('.item-checkbox').css('display');
		        	if(checked=='none')
		        	{
		        		return;
		        	}
		        	if(myChart!=undefined){
		        		var option=myChart.getOption();
		        		var series=option.series;
		        		var exist=false;
		        		var k=0;
		        		for(k=0;k<series.length;k++){
		        			if(series[k].name==searchStr)
		        				break;
		        		}
	        			var newoption=makeOption(cityname+'POI展示', g, legendItem);
	        			if(k<=series.length)
	        				series[k]=newoption.series[0];
		
		        	}else{
		        		myChart = BMapExt.initECharts(container);
		        		var option=makeOption(cityname+'POI展示',g,legendItem);
		        	}
			        window.onresize = myChart.resize;
			        
			        BMapExt.setOption(option, true);
		        		
		        		});
};
var poiSearch=function(searchPoint,searchstr,radius,optionCallback){
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
		var local = new BMap.LocalSearch(searchPoint, options);
		
		//local.search(searchstr);
		local.searchNearby(searchstr,searchPoint,radius);
};

var makeOption=function(title,geolist,legendItem){
	var searchStr=legendItem.find('.item-title').text();
	var color=legendItem.find('.colorbox').css('background-color');
	var d=[];
    for(var key in geolist){
    	d.push({name:key});
    }
    legendItem.find('.stats_count').text(d.length);
    var total_cnt=0;
    var itemval=$('.stats_count');
    //console.log(itemval[0].innerText);
    for(var i=0;i<itemval.length;i++){
    	if(itemval[i].innerText)
    		total_cnt+=parseInt(itemval[i].innerText);
    }
    //console.log(total_cnt);
    $('#total_cnt').html(total_cnt);
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
var downLoadData=function(alink){
	if(myChart!=undefined&&myChart.getSeries()){
		var csv=[];
		var series=myChart.getSeries();
		for(var i in series){
			var geo=series[i].geoCoord;
			for(var g in geo)
			{
				var poi=[];
				poi.push(series[i].name);
				poi.push(g);
				poi.push(geo[g][0]);
				poi.push(geo[g][1]);
				csv.push(poi.join(','));
			}
			
		}
		var csvstr=csv.join('\n');
		csvstr=encodeURIComponent(csvstr);
		alink.href="data:text/csv;charset=utf-8,\ufeff"+csvstr; 
		alink.click();
		
	}
}

