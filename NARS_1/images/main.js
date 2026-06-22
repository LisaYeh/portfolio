/* 回版頭 */
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() >300){ //設定大於300px才顯示浮層
            jQuery('#gotop').stop(true,true).fadeIn("fast");
        } else {
            jQuery('#gotop').stop(true,true).fadeOut("fast");
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

/*我是JS_TimeSwitch指定時間開關物件
  -----------------------------------------------
  啟動器: data-TimeSwitch_start="2018/2/12 00:00:00" data-TimeSwitch_end="2018/2/20 23:59:59" data-TimeSwitch_Myswitch="0"
  說明:
  data-TimeSwitch_start		開始時間
  data-TimeSwitch_end		結束時間
  data-TimeSwitch_Myswitch	動作 0刪除、1打開
  -----------------------------------------------*/
$(function() {
	$("[data-TimeSwitch_start]").each(function() {
		var TimeSwitch = new Date();
		var TimeSwitchmonth  = TimeSwitch.getMonth()+1; //月
		var TimeSwitchday    = TimeSwitch.getDate(); //日
		var TimeSwitchhour   = TimeSwitch.getHours();  //時
		var TimeSwitchminute = TimeSwitch.getMinutes();  //分
		var TimeSwitchsecond = TimeSwitch.getSeconds();  //秒
		var TimeSwitchweek   = TimeSwitch.getDay(); //星期0~6 
		if( TimeSwitchmonth < 10 ){TimeSwitchmonth = '0' + TimeSwitchmonth;}  
		if( TimeSwitchday   < 10 ){TimeSwitchday   = '0' + TimeSwitchday;}  
		//範圍時間
		var Mydate_start = new Date( $(this).attr('data-TimeSwitch_start') );
		var Mydate_end   = new Date( $(this).attr('data-TimeSwitch_end') );
		var Myswitch     = $(this).attr('data-TimeSwitch_Myswitch') ;
		//Myswitch = 0 隱藏
		if ( Myswitch == 0){
				if ( Mydate_start <= TimeSwitch && TimeSwitch <= Mydate_end ) {
						$(this).remove();  //Myswitch:0, 時間內,刪除
				} else {
						$(this).show();  //Myswitch:0, 時間外,打開
				}
		}
		//Myswitch = 1 打開
		if ( Myswitch == 1){
				if ( Mydate_start <= TimeSwitch && TimeSwitch <= Mydate_end ) {
						$(this).show();   //Myswitch:1, 時間內,打開
				} else {
						$(this).remove();   //Myswitch:1, 時間外,刪除
				}
		}
	});
});



/* 浮層*/
function agree(val) {
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 70 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	
	
    /*折價券_延遲載圖*/
	$(function () {  
            imglazyload();
        });
	function imglazyload() { 
	  var imglazy = ".agree_coupon img.lazy" ; 
	  $(imglazy).show().lazyload({
		  threshold: 500,
		  //failure_limit: 10,
		  effect : "fadeIn",
		  container:$('#agree')
	  });
};

    /*折價券_延遲載圖*/
	$(function () {  
            imglazyload_02();
        });
	function imglazyload_02() { 
	  var imglazy_02 = ".agree_momocard img.lazy" ; 
	  $(imglazy_02).show().lazyload({
		  threshold: 6000,
		  //failure_limit: 10,
		  effect : "fadeIn",
		  container:$('#agree')
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



/*換圖片*/
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


/*
 * Autumn
 * 指定時間開關物件 TimeSwitch-v2.3
 *******************************************************************
 * 啟動器-精準時間  : style="display:none;" data-ts="{'mode':'show', 'start':'2021/1/1 00:00:00', 'end':'2021/1/9 23:00:00'}"
 * 啟動器-時間區間  : style="display:none;" data-ts="{'mode':'show', 'start':'2021/1/1 12:00:00', 'end':['1','時']}"
 * 啟動器-區間Class: data-ts="{'mode':'addclass', 'start':'2021/1/1 12:00:00', 'end':['1','時']}"
 * 測試時間: data-ts-test="2020/1/20 00:00:00"
 * 說明:
 * 'mode' :'show'                  開關模式 show=顯示 hide=隱藏 addclass=區間加Class(ts_pre=尚未開始 ts_ing=進行中 ts_end=已結束)
 * 'start':'2021/1/1 00:00:00'     開始時間 (00:00:00可不寫)
 * 'end'  :'2021/1/9 23:00:00'     結束時間 (23:59:59可不寫)
 * 'end'  :['1','天']              時間區間 [整數,區間] 區間=年/月/週/天/時/分/秒 
 *******************************************************************
 */
$(function() {
  //時間加減元件
  function DateAdd(interval, num, date) {
      switch (interval) {
        case "年": {date.setFullYear(date.getFullYear() + num); return date; break;}
        case "月": { date.setMonth(date.getMonth() + num);      return date; break;}
        case "週": { date.setDate(date.getDate() + num * 7);    return date; break;}
        case "天": { date.setDate(date.getDate() + num);        return date; break;}
        case "時": { date.setHours(date.getHours() + num);      return date; break;}
        case "分": { date.setMinutes(date.getMinutes() + num);  return date; break;}
        case "秒": { date.setSeconds(date.getSeconds() + num);  return date; break;}
        default: { date.setDate(date.getDate() + num);          return date; break;}
      }
  }

  //測試時間
  var ts_test = $("[data-ts-test]").attr('data-ts-test');
  if(ts_test){
    ts_now = new Date(ts_test);
    alert('測試時間打開中，請注意!! ' + ts_test)
  } else {
    ts_now = new Date();
  }

  $("[data-ts]").each(function(index) {
    var $self = $(this);
    //引號轉換
    var StrFy = JSON.stringify($self.attr('data-ts'));
    var _StrFy = StrFy.replace(/(["])/g,"").replace(/(['])/g,'\"'); 
    
    var ts_self = JSON.parse(_StrFy),
        ts_mode = ts_self.mode,
        ts_start  = new Date(ts_self.start);

    //end是陣列時計算區間的結束時間
    if( Array.isArray(ts_self.end) ){ 
      for( var i=0 ; i < ts_self.end.length; i++) {
        var num = parseInt(ts_self.end[0]),
            interval = ts_self.end[1];
      }
      var ts_end = new Date(ts_self.start);
      ts_end = DateAdd( interval, num, ts_end );
    }else{ //end是一般時間
      var ts_end = new Date(ts_self.end);
      //結束時間沒填時間補上23:59:59  
      ( ts_self.end.length < 12) && (ts_end = new Date( ts_self.end + " 23:59:59"));
    }
    //ts_mode = show 打開
    if( ts_mode === 'show'){ 
     ( ts_start <= ts_now && ts_now <= ts_end) ? ($self.show()) : ($self.remove());
    }
    //ts_mode = hide 關閉
    if( ts_mode === 'hide'){ 
      ( ts_start <= ts_now && ts_now <= ts_end) ? ($self.remove()) : ($self.show());
    }
    //ts_mode = addclass
    if( ts_mode === 'addclass'){
      ( ts_now < ts_start ) && ( $self.addClass('ts_pre') ) ;//未開始
      ( ts_start <= ts_now && ts_now < ts_end ) && ( $self.addClass('ts_ing') );//進行中
      ( ts_now >= ts_end ) && ( $self.addClass('ts_end') );//已結束
    }
    
    //console.log(index, '編號'+ index +'開始時間',ts_start)
    //console.log(index, '編號'+ index +'結束時間',ts_end)
    //$(this).html('編號'+ index + StrFy);
  });
});
  
 
