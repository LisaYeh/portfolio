
	
$(function () { 
	
 //版頭品輪播★v5.2.1★
var swiper_main = function swiper_main(){
  
  /*版頭品--RWD版*/
  var box_PD = new Swiper('.Area01 .box_PD .btclass', {
    //★5.2.1★基本
    initialSlide: Math.floor( Math.random() * ($('.Area01 .box_PD .swiper-slide').size()) ) , //初始險是第幾個(亂數)
    //watchOverflow: true, //只有1個slide時，不啟動swipers
    speed: 300, //滑動速度(300)
        //★5.2.1★自動撥放
		//autoplay: false,
		autoplay: {
        delay: 3000,
        disableOnInteraction: false ,//觸擊後不再自動輪播
		},
		loop: false, //無限循環    loopAdditionalSlides: 1, //前後多複製幾個
    loopedSlides: 3, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
    //★5.2.1★切換特效(淡化)
    effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
  });   
};


/* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  swiper_main(); //輪播★v5.2.1★
});

	
  var bank = new Swiper('.pc_title_swiper', {
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.pc_title_swiper .swiper-pagination',
      clickable: true, //觸擊切換
    },
    //左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
    nextButton: '.swiper-button-next', 
    prevButton: '.swiper-button-prev',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },    
	
	
	//★5.2.1★自動撥放
	autoplay: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false, //觸擊後不再自動輪播
		//stopOnLastSlide: true, //切換到最後時停止自動切換
	},
	
   //★5.2.1★切換特效(翻牌)
    effect: 'flip', //切換特效 cube(立方體) coverflow(3D) flip(翻牌)
    centeredSlides: true, //目前區塊居中
    slidesPerView: 'auto', //顯示改回自動
    direction: 'vertical', //滑動方向-垂直(預設水平horizontal) 
    flipEffect: {
      //slideShadows : false, //slides的陰影。默認true。
      //limitRotation : false, //限制最大旋轉角度為180度，默認true。
    },
		
  });		

	

var rwd_brand_swiper  = new Swiper('.newpd ', {
	//★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
	pagination: {
	  el: '.newpd .swiper-pagination',
	  clickable: true, //觸擊切換
	},
	//★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
	navigation:{
	  nextEl: '.rwd_brand_swiper .swiper-button-next',
	  prevEl: '.rwd_brand_swiper .swiper-button-prev',
	},
	//★5.2.1★自動撥放
	autoplay: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false, //觸擊後不再自動輪播
		//stopOnLastSlide: true, //切換到最後時停止自動切換
	},
    //循環
    loop: true, //無限循環
    loopAdditionalSlides: 10, //前後多複製幾個
    loopedSlides: 12, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
    
    //★5.2.1★切換特效(3D)--改深度
    effect: 'coverflow', //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    centeredSlides: true, //目前區塊居中
    slidesPerView: 7, //顯示改回自動
    coverflowEffect: {
      rotate: 0,  //slide旋轉時Y軸的旋轉角度
      stretch: 0,  //slide之間的拉伸值，越大slide靠得越緊
      depth: 0,    //slide的位置深度
      modifier: 0.8, //depth和rotate和stretch的倍率
      slideShadows : false,  //slide陰影
    },



    //★5.2.1★RWD(換成大於)
    breakpoints: {
		0: {
		//排版
		slidesPerView: 1.8, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 0, //間距
		slidesPerColumn: 1, //一次顯示幾行
		},
      768: {
        slidesPerView: 4, //顯示幾個
        slidesPerGroup: 1, //一次切換幾個
        spaceBetween: 300, //間距
        slidesPerColumn: 1, //一次顯示幾行
      },
    },

    //★5.2.1★↓動作↓
    on: {
      //初始化
      init: function() {
		  lazyLoadInstance.update();
      },
    }, //↑動作↑
		
  });			
	
})



