var activeClass = {};
var loc = {};
loc.img = './doc';
$('#head')[0].innerHTML =
    '<div class="container">'
        + '<div class="navbar-header">'
          + '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
            + '<span class="sr-only">Toggle navigation</span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
          + '</button>'
          + '<a class="navbar-brand" href="#">POI MAP</a>'
        + '</div>'
        + '<div class="navbar-collapse collapse" id="nav-wrap">'
        + '<ul class="nav navbar-nav navbar-right" id="nav" style="max-width:100%;">'
        +'<li class="dropdown ' + (activeClass.doc || activeClass.option || '') + '">'
        + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">导航<b class="caret"></b></a>'
        + '<ul class="dropdown-menu">'
          + '<li class=""><a href="#">地图</a></li>'
        + '</ul>'
      + '</li>'
      + '</ul>'
        + '</div><!--/.nav-collapse -->'
        + '</div>';



function back2Top() {
    $("body,html").animate({scrollTop:0},1000);
    return false;
}


var $footer = $('#footer');
if ($footer.length) {
    $footer[0].style.marginTop = '50px';
    $footer[0].innerHTML =
         '<div class="container">'
            + '<div class="row" style="padding-bottom:20px;">'
                + '<div class="col-md-3">'
                    + '<p>GTI团队出品</p>'
                    + '<ul>'
                        + '<li><a href="#" target="_blank">GTI研究小组</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3">'
                    + '<p>更多</p>'
                    + '<ul>'
                        + '<li><a href="https://github.com/jireh-he/GTI-BUS/master/LICENSE.txt" target="_blank">License</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3">'
                    + '<p>联系我们</p>'
                    + '<ul>'
                        + '<li><a href="https://github.com/jireh-he/GTI-BUS" target="_blank"> Github</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3 flogo">'
                    + '<a href="javascript:void(0)" onclick="back2Top()" title="回到顶部"><img src="'+ (loc.img || '.')+ '/asset/img/echarts-logo2.png" alt="GTI"/></a>'
                + '</div>'
            + '</div>'
            + '<p class="pull-right"><a href="javascript:void(0)" onclick="back2Top()" >Back to top</a></p>'
            + '<p>&copy; 2016 <a href="#" target="_blank">Ato&Jireh</a></p>'
        + '</div>';
};
var getRandomColor = function(){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
  }
function makeLegend(legendlist){
	legendnum=legendlist.length;	
	var legendhtml=''
	for(var i=0;i<legendnum;i++){
		legendhtml+='<div class="legend-item">'
			+'<div class="colorbox" style="background-color:'
			+getRandomColor()+';">'
			+'<div class="item-checkbox">'
			+'<span class="glyphicon glyphicon-ok">'
			+'</span></div></div><div class="legend-item-text">'
			+'<strong><span class="pull-right stats_count" id="stats_count_'+i+'">'
			+'0</span> </strong><span class="item-title">'
			+legendlist[i]+'</span></div></div>';
			
	}
	return legendhtml;
}

