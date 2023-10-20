/* Xự kiện Load*/
var text = document.querySelector('h3');
var div = document.querySelector('div#load');
var parentDiv = document.querySelector('div.container');
var num = document.querySelector('h5');
var trangthai = "motcham";
var lx = 0;
var lw = 0;
var loading = setInterval(cham,200);
var numberplus = setInterval(chay,20);
var container =  document.querySelector('div');
var main = document.querySelector('#main');
var divplus = setInterval(daira,20);
var mainlib = document.querySelector('div.calllib');
var script = document.createElement('script');

function cham(){
    if(trangthai == 'motcham'){
    text.innerHTML = 'Loading' + '.';
    trangthai = 'haicham';
    }
    else if(trangthai == 'haicham'){
    text.innerHTML = 'Loading' + '..';
    trangthai = 'bacham';
    }
    else if(trangthai == 'bacham'){
    text.innerHTML = 'Loading' + '...';
    trangthai = 'motcham';
    }
    if(lx == 100 && trangthai == 'motcham'){
        clearInterval(loading);
    }

}
function chay() {
    main.style.visibility = "hidden";
    main.style.opacity = "0";
    lx++;
    num.innerHTML = lx + '%';
    if(lx == 100){
        clearInterval(numberplus);

        script.setAttribute('src', 'main.js');
        document.body.appendChild(script);

        main.style.visibility = "visible";
        main.style.opacity = "1";
        parentDiv.parentNode.removeChild(parentDiv);
    }
}
function daira(){
    lw += 2;
    div.style.width = lw +'px';
    if(lw == 200){
        clearInterval(divplus);
    }
}