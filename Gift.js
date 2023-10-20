var HopQua = document.querySelector('div.Gift');
var Than= document.querySelector('img#than');
var Nap = document.querySelector('img#nap');
var No = document.querySelector('img#no');
var video_gift = document.querySelector('#video');
var count = 0;


function MoHop(){
    count++;
    if(count == 1)
    {
        function Xoa(){
            No.style.visibility = "hidden";
            No.style.opacity = "0";
        }
        No.style.animation = "GiftMove 1s";
        setTimeout(Xoa,500);
    }
    if(count==2)
    {
        function Xoa(){
            Nap.style.visibility = "hidden";
            Nap.style.opacity = "0";
        }
        Nap.style.rotate = "45deg";
        Nap.style.animation="GiftMove 1s";
        setTimeout(Xoa,500);
    }
    if(count==3){
        video_gift.style.animation="VideoGift";
        Than.style.visibility = "hidden";
        video_gift.style.visibility = "visible";
        video_gift.play();
    }
    
}
HopQua.addEventListener("click", MoHop)