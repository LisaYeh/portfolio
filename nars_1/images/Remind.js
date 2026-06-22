/*
 *
 * 活動提醒按鈕JS
 * 4j 2019.10.14
 * 
 */

//Ready 
momoj(document).ready(function() {
  momoj.each(remindPromo, function(index){
    var promoRemined = '#promo0_' + index+"Remined" ;
    momoj(promoRemined).attr('href','javascript:remind("'+index+'");');
    edmShare.isApp() ? momoj(promoRemined).show():momoj(promoRemined).hide();
  });
});
 
//活動提醒
function remind(index){
  if(edmShare.isApp()){
    var now = new Date();
    var Time = remindPromo[index].promoTime;
    var alarmTime = new Date(remindPromo[index].promoTime).getTime();
    var show = new momoAppBridge("shop");
    var isExpired = (alarmTime - Date.now())>0; //>0 還沒過期
    var obj = {
      "notificationId":index,           // unique id
      "alarmTime" : alarmTime - 300000,         // 提前5分鐘提醒(5m*60s*1000)
      "alert" : {
        "title" : remindPromo[index].promoTitle,          // alert title
        "content" : '您設提醒的'+Time+'【'+remindPromo[index].promoContent+'】要開始囉！還不手刀前往！'
      },   // alert message
      "action" : {
        "actionType" :1,  // actionType, open Web Page, Goods Page, Category Page…
        "actionValue" : remindPromo[index].url
      }
    };
    if (isExpired){
      show.notifyApp("setNotification",JSON.stringify(obj)); // URL, GoodsCode, CategoryCode…
    }else{
      alert("此提醒已經過期");
    }
  }else{
    alert("此功能限APP使用");
  }
}