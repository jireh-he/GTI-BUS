var version = '2.2.7';
var sp = location.pathname.lastIndexOf('/');
var ep = location.pathname.lastIndexOf('.html');
var curPage = sp < ep ? location.pathname.slice(sp + 1, ep) : 'index';
var enVersion = location.href.indexOf('-en.html') != -1
    // for example: http://ecomfe.github.io/echarts/doc/example/force2.html#-en
    || (location.pathname.indexOf('doc/example/') >= 0
        && location.hash
        && location.hash.indexOf('-en') != -1
    );

var activeClass = {};
var loc = {};
var forkWidth = 149;
curPage = curPage.replace('-en', '');
var isExample = false;
switch (curPage) {
    case 'index' :
        activeClass[curPage] = 'active';
        loc[curPage] = '.';
        loc.feature = './doc';
        loc.example = './doc';
        loc.doc = './doc';
        loc.about = './doc';
        loc.changelog = './doc';
        loc.option = './doc';
        loc.spreadsheet = './doc';
        loc.start = './doc';
        loc.img = './doc';
        loc.schema = './docv';
        break;
    case 'feature' :
    case 'example' :
    case 'theme2':
    case 'doc' :
    case 'about' :
    case 'changelog' :
    case 'start' :
        activeClass[curPage] = 'active';
        loc.index = '..';
        break;
    case 'option' :
    case 'spreadsheet' :
        forkWidth = 60;
        activeClass[curPage] = 'active';
        loc.index = '..';
        break;
    default :
        isExample = true;
        forkWidth = 60;
        activeClass['example'] = 'active';
        var extSub = location.href.indexOf('extension') != -1 ? '../' : '';
        loc.index = extSub + '../..';
        loc.feature = extSub + '../../doc';
        loc.example = extSub + '../../doc';
        loc.doc = extSub + '../../doc';
        loc.about = extSub + '../../doc';
        loc.changelog = extSub + '../../doc';
        loc.option = extSub + '../../doc';
        loc.spreadsheet = extSub + '../../doc';
        loc.start = extSub + '../../doc';
        loc.img = extSub + '../../doc';
        loc.schema = extSub + '../../docv';
        break;
}

// Those pages only exist in echarts-www project,
// but not in http://ecomfe.github.io/echarts/ and doc in echarts project.
if (location.href.indexOf('.baidu.com') < 0) {
    loc.option = 'http://echarts.baidu.com/doc';
    loc.spreadsheet = 'http://echarts.baidu.com/doc';
    loc.schema = 'http://echarts.baidu.com/docv';
}

$('#head')[0].innerHTML =
    '<div class="container">'
        + '<div class="navbar-header">'
          + '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'
            + '<span class="sr-only">Toggle navigation</span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
          + '</button>'
          + '<a class="navbar-brand" href="http://jireh-he.github.io/GTI-BUS/index'
          + (enVersion ? '-en': '')
          + '.html">GTI</a>'
        + '</div>'
        + '<a href="https://github.com/jireh-he/GTI-BUS" target="_blank">'
            + '<img id="fork-image" style="position:absolute;top:0;right:0;border:0;z-index:1000;width:' + forkWidth + 'px" src="'+ (loc.img || '.') + '/asset/img/fork.png" alt="Fork me on GitHub">'
        + '</a>'
        + '<div class="navbar-collapse collapse" id="nav-wrap">'
          + '<ul class="nav navbar-nav navbar-right" id="nav" style="max-width:100%;">'
           +'<li class="dropdown ' + (activeClass.doc || activeClass.option || '') + '">'
            + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' + (enVersion ? 'example' : '实例') + '<b class="caret"></b></a>'
            + '<ul class="dropdown-menu">'
              + '<li class=""><a href="' + (loc.example || '.') + '/example' + (enVersion ? '-en.html">example1' : '.html">实例1') + '</a></li>'
              + '<li class=""><a href="' + (loc.example || '.') + '/theme2' + (enVersion ? '-en.html">example2' : '.html">实例2') + '</a></li>'
            + '</ul>'
          + '</li>'
            
            + '<li class="dropdown ' + (activeClass.doc || activeClass.option || '') + '">'
              + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' + (enVersion ? 'API & Doc' : '文档') + '<b class="caret"></b></a>'
              + '<ul class="dropdown-menu">'
                + '<li class=""><a href="' + (loc.doc || '.') + '/doc' + (enVersion ? '-en.html">Base Document' : '.html">参考手册') + '</a></li>'
                + '<li class=""><a href="' + (loc.option || '.') + '/option' + (enVersion ? '-en.html">Option Manual' : '.html">配置项查找工具') + '</a></li>'
              + '</ul>'
            + '</li>'
            + (enVersion
               ? ('<li class="' + (activeClass.about || '') + '"><a href="' + (loc.about || '.') + '/about-en.html">About Us</a></li>')
               : ('<li class="' + (activeClass.about || '') + '"><a href="' + (loc.about || '.') + '/about.html">关于我们</a></li>')
            )
            + '<li><a href="javascript:void()" onclick="changeVersion()">' + (enVersion ? '中文' : 'English') + '</a></li>'
          + '</ul>'
        + '</div><!--/.nav-collapse -->'
        + '</div>';

$('#head').on('click', '.ec-secret-dropdown', function (e) {
    $(e.currentTarget).find('.ec-secret-item')[e.altKey ? 'show' : 'hide']();
});

function back2Top() {
    $("body,html").animate({scrollTop:0},1000);
    return false;
}

function changeVersion() {
    if (!isExample) {
        window.location = curPage + (enVersion ? '' : '-en') + '.html'
    }
    else {
        window.location = curPage + '.html' + (enVersion ? '' : '#-en');
        if (enVersion) {
            window.location.hash = window.location.hash.replace('-en', '');
        }
        window.location.reload();
    }
}

var $footer = $('#footer');
if ($footer.length) {
    $footer[0].style.marginTop = '50px';
    $footer[0].innerHTML =
         '<div class="container">'
            + '<div class="row" style="padding-bottom:20px;">'
                + '<div class="col-md-3">'
                    + '<p>' + (enVersion ? 'Link' : 'GTI团队出品') + '</p>'
                    + '<ul>'
                        + '<li><a href="#" target="_blank">GTI研究小组</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3">'
                    + '<p>' + (enVersion ? 'More' : '更多') + '</p>'
                    + '<ul>'
                        + '<li><a href="https://github.com/jireh-he/GTI-BUS/master/LICENSE.txt" target="_blank">License</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3">'
                    + '<p>' + (enVersion ? 'Contact Us' : '联系我们') + '</p>'
                    + '<ul>'
                        + '<li><a href="https://github.com/jireh-he/GTI-BUS" target="_blank"> Github</a></li>'
                    + '</ul>'
                + '</div>'
                + '<div class="col-md-3 flogo">'
                    + '<a href="javascript:void(0)" onclick="back2Top()" title="' + (enVersion ? 'Back to top' : '回到顶部') + '"><img src="'+ (loc.img || '.')+ '/asset/img/echarts-logo2.png" alt="GTI"/></a>'
                + '</div>'
            + '</div>'
            + '<p class="pull-right"><a href="javascript:void(0)" onclick="back2Top()" >Back to top</a></p>'
            + '<p>&copy; 2016 <a href="#" target="_blank">Ato&Jireh</a></p>'
        + '</div>';
}

if (document.location.href.indexOf('local') == -1) {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?4bad1df23f079e0d12bdbef5e65b072f";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
}

function fixFork () {
    var navMarginRight = 0;
    var bodyWidth = document.body.offsetWidth;
    var contnetWidth = $('#nav-wrap')[0].offsetWidth;
    if (bodyWidth < 1440) {
        navMarginRight = 150 - (bodyWidth - contnetWidth) / 2;
    }
    $('#nav')[0].style.marginRight = navMarginRight + 'px';
    $('#fork-image')[0].style.width = (document.body.offsetWidth < 768 ? 1 : forkWidth) + 'px';
};
fixFork();
$(window).on('resize', fixFork);