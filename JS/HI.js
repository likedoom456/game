/**
 * Created by Administrator on 2016/7/11.
 */
var year;
var month;
var day;

function input() {
    var name = prompt("输入你的生日");
    year = name[0] + name[1] + name[2] + name[3];
    month = name[4] + name[5];
    day = name[6] + name[7];
timedCount();
}
function timedCount() {
var d=new Date();
    d.setFullYear(year+80,month,day);
    d.setHours(0,0,0,0);
  var c=((d.getTime()-new Date().getTime())/1000).toFixed(0);
  document.getElementById("txt").innerHTML="你还有"+c+"秒就挂了哦";
    t=setTimeout('timedCount()','1000');
}
