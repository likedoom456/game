/**
 * Created by Administrator on 2016/7/12.
 */
var n=0;
function color(id) {
    if (n%2==0) {
        document.getElementById(id).style.backgroundColor='red';
        n++;
    }
    else {
        color2(id);
    }

}
function color2(id) {
    document.getElementById(id).style.backgroundColor='blue';
    n++;
}