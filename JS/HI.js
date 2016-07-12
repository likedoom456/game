/**
 * Created by Administrator on 2016/7/11.
 */
var birthday;

function input() {
    birthday = prompt("输入你的生日");

timedCount();
}
function timedCount() {
var b=new Date(birthday);
    var d=new Date(b.setFullYear(b.getFullYear()+80));
    var today=new Date;
  var c=((d.getTime()-today.getTime())/1000).toFixed(0);
  document.getElementById("txt").innerHTML="你还有"+c+"秒就挂了哦";
    t=setTimeout('timedCount()',500);
}
