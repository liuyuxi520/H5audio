var App = window.App || {};
App.crossScreenJs = function(className){
    //判断手机横竖屏状态： add by lyx on 2018.1.19
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            document.getElementsByClassName(className)[0].style.display = 'none';
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            document.getElementsByClassName(className)[0].style.display = 'block';
        }
    }, false);
};