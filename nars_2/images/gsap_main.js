
/* --------------------------------------
 * 版頭背景動畫
 * -------------------------------------- */

//滑動觸發-背景
gsap.registerPlugin(ScrollTrigger);

function gsap_bgtop(){
    
    var tl = new TimelineLite({
      //delay: .1, //延遲
    });

    
    
     //主標
    gsap.set('.title01',{
      opacity: 0, //透明度
      x:0,
      y:-50,
	  scale:0, 
    });
    tl.to('.title01',{
      delay: 0, //延遲
      duration: 1, //時間
      opacity: 1, //透明度
      x:0,
      y:0,
	  scale:1,
	  skewX: 0,
      ease: Bounce.easeOut,
    },0); 
    
    
        
    
     //主標
    gsap.set('.pc_title_swiper',{
      opacity: 0, //透明度
      x:0,
      y:10,
    });
    tl.to('.pc_title_swiper',{
      delay: 0, //延遲
      duration: 1, //時間
      opacity: 1, //透明度
      x:0,
      y:0,
      repeat: 0, //重複次數
      ease: Linear.easeOut,
    },0.5); 
    
            
    
     //主標
    gsap.set('.title03',{
      opacity: 0, //透明度
      x:0,
      y:10,
    });
    tl.to('.title03',{
      delay: 0, //延遲
      duration: 1, //時間
      opacity: 1, //透明度
      x:0,
      y:0,
      repeat: 0, //重複次數
      ease: Linear.easeOut,
    },1); 


}

function m_gsap_bgtop(){
    
 var tl = new TimelineLite({
      //delay: .1, //延遲
    });
    
    
     
     //主標
    gsap.set('.title01',{
      opacity: 0, //透明度
      x:0,
      y:-50,
	  scale:0,
    });
    tl.to('.title01',{
      delay: 0, //延遲
      duration: 1, //時間
      opacity: 1, //透明度
      x:0,
      y:0,
	  scale:1,
	  skewX: 0,
      ease: Bounce.easeOut,
    },0); 
    
    
        
    
     //主標
    gsap.set('.pc_title_swiper',{
      opacity: 0, //透明度
      x:0,
      y:10,
    });
    tl.to('.pc_title_swiper',{
      delay: 0, //延遲
      duration: 1, //時間
      opacity: 1, //透明度
      x:0,
      y:0,
      repeat: 0, //重複次數
      ease: Linear.easeOut,
    },0.5); 
    
            
    
     //主標
    gsap.set('.title03',{
      opacity: 0, //透明度
      x:0,
      y:10,
    });
    tl.to('.title03',{
      delay: 0, //延遲
      duration: 1, //時間
      opacity: 1, //透明度
      x:0,
      y:0,
      repeat: 0, //重複次數
      ease: Linear.easeOut,
    },1); 
    
  
  
}    
   
if(is_forPC){
  gsap_bgtop();
} else {
  m_gsap_bgtop();
}
//載入完成後執行
$(window).on('load',function(){
});

