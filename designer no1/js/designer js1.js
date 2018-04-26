var button_one = document.getElementById('css_button');
var chop_one = document.getElementById('css_chop');
var tran_button = document.getElementById('tran_button');
var tran_one = document.getElementById('tran_one');
button_one.onclick = function(){
    let has = hasClass(chop_one,'chop-in');
    chop_one.className =has?'css-chop chop-out':'css-chop chop-in';
}
tran_button.onclick = function(){
    let has = hasClass(tran_one,'css-tran');
    tran_one.className =has?'tran-one':'tran-one css-tran';
}
function hasClass(elem,str){
    let index = elem.className.indexOf(str);
    if (index != '-1') {
        return true;
    } else{
        return false;
    };
}
