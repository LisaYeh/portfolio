/*回版頭*/
$(function(){
  var $gotop = $('#gotop');
  $gotop.click(function(){
    $("html,body").stop(true,false).animate({scrollTop:0}); //設定回頁面頂端
    return false;
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300){ //設定大於300px才顯示浮層
      $gotop.addClass('cate-open');
    } else {
      $gotop.removeClass('cate-open');
    }
  });
}); 

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}

//延遲載圖
var lazyLoadInstance = new LazyLoad({
  elements_selector: '.articleList .lazy', //物件
  threshold: 0, //預載量 預設300
  //thresholds: '300px 0px', //觸發外距 預設null
   load_delay: 100, //進入視角延遲顯示
});


/*開關PC黏人精*/
$(function(){
	var $fixed_Area = $('.fixed_Area');
	//預設進場
	setTimeout( function(){ $fixed_Area.toggleClass('fixed_Area_hide') } ,1500)
	//點擊切換
	$fixed_Area.find('.js-fixed_Area_hide').click(function(){
		$fixed_Area.toggleClass('fixed_Area_hide');
	})
});


/** 頁面分頁籤01 **/
$(function(){
    //基本設定

    var advtabTitle =".Area02 li";
    var advContent = ".Area02 .PD_layout";


  var now = new Date();
  var now_d = now.getDate(); //時
  var now_activeIndex = 0;
  if( now_d >= 15 ){ now_activeIndex = 0;};
  if( now_d >= 16 ){ now_activeIndex = 1;};
  if( now_d >= 17 ){ now_activeIndex = 2;};
  if( now_d >= 18 ){ now_activeIndex = 3;};
  if( now_d >= 19 ){ now_activeIndex = 4;};
  if( now_d >= 20 ){ now_activeIndex = 5;};
  if( now_d >= 21 ){ now_activeIndex = 6;};
  
	$(advtabTitle).eq(now_activeIndex).addClass("selected");
	$(advContent).hide().eq(now_activeIndex).show();
	$(advtabTitle).unbind("click").bind("click", function(){
		$(this).siblings("li").removeClass("selected").end().addClass("selected");
		var index = $(advtabTitle).index( $(this) );
		$(advContent).eq(index).siblings(advContent).hide().end().fadeIn("slow").find('img.lazy').show().lazyload({threshold: 1000,failure_limit: 1000,});
	});
	
});	


/* 浮層區*/
function agree(val) {
	var blackBox = $(".blackBox");
	$(blackBox).fadeOut();
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 60 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});
 
 
 
/* 浮層區2(浮層不限高度，內容全部顯示)*/
function agree2(val) {
	$(val).css('opacity','1');
	$(val).css('pointer-events','auto');
	imglazyload();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	var this_agreeH = $(val).find('.agreeArea').height();
	$(val).height( $('body').height() );
	
	//浮層top定位
	if( this_agreeH < winH ){
		//內容小於裝置高度，居中
		$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	} else {
		//內容大於裝置高度，置上
		$('.agreeArea').css('top', winST + winH/100*2 );
	}

}
$(function(){
	var blackBox2 = $(".blackBox2");
	var blackBox2_close = $(".close2 , .but-close2");
	var blackBox2_BOXclose = ".Boxclose2 ";
	//點按鈕關閉
	blackBox2_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox2).attr('style','');
		$(blackBox2).find('.agreeArea').attr('style','');
		e.preventDefault();
	});
	//點黑區關閉
	blackBox2.delegate( blackBox2_BOXclose ,"touchstart click",function(e){
		$(blackBox2).attr('style','');
		$(blackBox2).find('.agreeArea').attr('style','');
		e.preventDefault();
	});
}); 
 
/*滑入切換圖*/
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


//GSAP基本設定
var is_forPC = document.body.clientWidth > 767; //forPC
var is_trigger = false; //重覆觸發


/* 浮層區*/
function agree(val) {
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 70 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
    /*延遲載圖*/
	$(function () {  
            imglazyload();
        });
	function imglazyload() { 
	  var imglazy = ".agree_coupon img.lazy"; 
	  $(imglazy).show().lazyload({
		  threshold: 500,
		  //failure_limit: 10,
		  effect : "fadeIn",
		  container:$('#more_02')
	  });
};
}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});


/*背景互動--PC背景-背景00捲動物件*/
$.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
$.throttle = function(func, wait) {
  var context, args, timeout, throttling, more, result;
  var whenDone = $.debounce(function() {
    more = throttling = false;
  }, wait);
  return function() {
    context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (more) func.apply(context, args);
      whenDone();
    };
    if (!timeout) timeout = setTimeout(later, wait);

    if (throttling) {
      more = true;
    } else {
      result = func.apply(context, args);
    };
    whenDone();
    throttling = true;
    return result;
  };
};
function bgscroll(val,top,num) { //背景互動(物件,起始top位置,速度)
  var $win = $(window);
  var $doc = $(document);
  var $bg  = $(val);
  var handler = $.throttle(function(e) {
    var dTop = $doc.scrollTop()
    highLight(dTop);
  }, 100);
  function highLight(docTop) {
    $bg.css('background-position', 'center '+  -1*( top + docTop * num) +'px' );
  };
  $win.scroll(handler)
};
$(function(){ 
  bgscroll('.js-Area_bgtop_00',0,0.2);
  //bgscroll('.js-Area_bgtop_01',-500,0.25);
});



//輪播★v5.2.1★
var sw = {};
sw.init= function(){
  var _this = this;
  var _el;
  function _name(name){
    return '.'+ name +' '
  };

  /*直播-選單*/
  Area_PDlive_nav(['Area_PDlive_nav'],_this);
  function Area_PDlive_nav(e,_this){
    e.forEach(function(name,i){
      var _el = _name(name);
      var $el = $(_name(name));
      $el.find('.PD_layout ul').addClass('swiper-wrapper').find('> li').addClass('swiper-slide');
      _this[name] = {
        name: name,
          sw: new Swiper(_el +'.PD_layout .btclassXX',{
            //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
            pagination: {
              el: _el +'.swiper-pagination',
              clickable: true, //觸擊切換
            },
            //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
            navigation:{
              nextEl: _el +'.swiper-button-next',
              prevEl: _el +'.swiper-button-prev',
            },
            //★5.2.1★基本
            //initialSlide: Math.floor( Math.random() * $(_el +'.swiper-slide').length ) , //初始險是第幾個(亂數)
            watchOverflow: true, //只有1個slide時，不啟動swiper
            roundLengths: true, //寬高四捨五入不出現小數點
            //抵亢反彈
            freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
            freeModeSticky: true, //取消只滑動1格時也可貼齊
            freeModeMomentumVelocityRatio: 0.1, //移動慣性-滑行速度
            //排版
            centeredSlides: true, //當前區塊居中
            centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
            slidesPerView: 3.6, //顯示幾個
            spaceBetween: 0, //間距
            //★5.2.1★RWD(換成大於)
            breakpoints: {
              768: {
                slidesPerView: 5.4, //顯示幾個
                spaceBetween: 5, //間距
              },
            },
          }),
      };
    });
  };



//*新增*區塊開啟網址欄時間測試
  var Area_PDlive_ts_now = new Date();
  var domainQur = window.location.search.substring(1); // domainQur = npn=1vEK1psAv1Uo&n=1&code=3
  if(domainQur !== '' && (location.protocol).indexOf('http') !== 0){
    var params = JSON.parse('{"'+ decodeURI(domainQur).replace(/"/g, '\\"').replace(/=/g, '":"').replace(/&/g, '","') +'"}');// {npn: 1vEK1psAv1Uo , n : 1, code : 3}
    var tstest = params.tstest;
    if(tstest !== undefined) {
      if(tstest){ Area_PDlive_ts_now = new Date(tstest) };
    }
  };


  /*直播-內容*/
  Area_PDlive_PD(['Area_PDlive_PD'],_this);
  function Area_PDlive_PD(e,_this){
    e.forEach(function(name,i){
      var _el = _name(name);
      var $el = $(_name(name));
      $el.find('.AreaY1 ul').addClass('swiper-wrapper').find('> li').addClass('swiper-slide');
      _this[name] = {
        name: name,
          sw: new Swiper(_el +'.AreaY1 .btclass',{
            //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
            pagination: {
              el: _el +'.swiper-pagination',
              clickable: true, //觸擊切換
            },
            //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
            navigation:{
              nextEl: _el +'.swiper-button-next',
              prevEl: _el +'.swiper-button-prev',
            },
            //★5.2.1★基本
            //initialSlide: Math.floor( Math.random() * $(_el +'.swiper-slide').length ) , //初始險是第幾個(亂數)
            watchOverflow: true, //只有1個slide時，不啟動swiper
            roundLengths: true, //寬高四捨五入不出現小數點
            //抵亢反彈
            freeMode: true, //取消只滑動1格,但不會貼齊(要貼齊要再加Sticky)
            freeModeSticky: true, //取消只滑動1格時也可貼齊
            freeModeMomentumVelocityRatio: 0.1, //移動慣性-滑行速度
            //排版
            centeredSlides: true, //當前區塊居中
            centeredSlidesBounds: true, //當前區塊居中還可以貼齊左右邊
            // slidesPerView: 3.2, //顯示幾個
            spaceBetween: 10, //間距
            //★5.2.1★自動撥放
            // autoplay: {
            //   delay: 2500,
            //   disableOnInteraction: false, //觸擊後不再自動輪播
            //   //stopOnLastSlide: true, //切換到最後時停止自動切換
            //   //reverseDirection: true, //反向自動輪播
            // },            
            //★5.2.1★RWD(換成大於)
            breakpoints: {
              768: {
                slidesPerView: 2.2, //顯示幾個
                spaceBetween: 2, //間距
              },              
              0: {
                slidesPerView: 2, //顯示幾個
                spaceBetween: 2, //間距
              },
            },
            //★5.2.1★↓動作↓
            on: {
              //初始化
              init: function() {
                $(sw.Area_PDlive_nav.sw.slides).eq(this.activeIndex).addClass('cate-hover');
                sw.Area_PDlive_nav.sw.slides.on('click',function(){  //直播選單切換
                  var i = $(this).index();
                  sw.Area_PDlive_PD.sw.slideTo(i , 300); //移動到點擊卡
                });

                //*新增*時間判斷滑動到第n卡
                $(window).on('load',function(){
                  sw.Area_PDlive_nav.sw.slideTo(Area_PDlive_ts_now.getDate()-1,0);//切換到第n個slide，速度為0秒
                  var i = Area_PDlive_ts_now.getDate()-1;
                  sw.Area_PDlive_PD.sw.slideTo(i , 0); //移動到點擊卡
                });
                
              },
              //輪播開始時觸發
              transitionStart: function() {
                $(sw.Area_PDlive_nav.sw.slides).removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');
                sw.Area_PDlive_nav.sw.slideTo(this.activeIndex , 300);
              },               
              //輪播停止時觸發
              transitionEnd: function() {
                $(sw.Area_PDlive_nav.sw.slides).removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');
                sw.Area_PDlive_nav.sw.slideTo(this.activeIndex , 300);
              },
            }, //↑動作↑
          }),
      };
    });
  };


};

/* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  //針對ECM入稿區(輪播開始前先處理)
  //ecmWriter_removeArea('.fixarea'); //針對ECM入稿區 (0)編輯模式時刪除
  //PdLayout_removeLi('.Area_AD, .Area_addbuy, .Area_PD1, .Area_momocard .box_PD, .Area_hoteven1, .Area_hoteven2'); //針對ECM入稿區 (1)沒入品隱藏
  //PdLayout_removeArea('.Area_AD'); //針對ECM入稿區 (2)全部品都沒有時整區隱藏
  sw.init(); //輪播★v5.2.1★
});
