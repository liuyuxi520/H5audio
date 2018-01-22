/**
 * Created by liufeifeng on 1/22/18.
 */
var App = window.App || {};
var isFunction = function(fun) {
    return Object.prototype.toString.apply(fun).indexOf('Function') > -1;
};
App.shakeJs = function(shakeFn,noshakeFn){
    var SHAKE_THRESHOLD = 1000,// 定义一个摇动的阀值
    last_update = 0,// 定义一个变量保存上次更新的时间
    x,y,z,last_x,last_y,last_z;  // 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间  
    if (window.DeviceMotionEvent) {
        console.log(0)
        // 移动浏览器支持运动传感事件
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else{
        console.log(1)
        // 移动浏览器不支持运动传感事件
        if(isFunction(noshakeFn)){
            noshakeFn();
        }
    }
    function deviceMotionHandler(eventData) {
        console.log('2', eventData)
        // document.getElementById('yaoyiyaoresult').innerHTML = 'init';
    
        // 获取含重力的加速度
        var acceleration = eventData.accelerationIncludingGravity;
        // 获取当前时间
        var curTime = new Date().getTime(),
           diffTime = curTime -last_update;
           // 固定时间段
        if (diffTime > 100) {
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
                // TODO:在此处可以实现摇一摇之后所要进行的数据逻辑操作
                if (isFunction(shakeFn)) {
                    shakeFn();
                }
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
    }
    // try {
    //     window.addEventListener("deviceorientation", orientationHandler, false);
    //     function orientationHandler(event) {
    //         var shake = document.getElementById("js-shake");
    //         var text = "";
    //         text += "左右旋转：rotate alpha{" + Math.round(event.alpha) + "deg)<p>";
    //         text += "前后旋转：rotate beta{" + Math.round(event.beta) + "deg)<p>";
    //         text += "扭转设备：rotate gamma{" + Math.round(event.gamma) + "deg)<p>";
    //         shake.innerHTML = text;
    //     }
    // }
    // catch (e) {
    //     shake.innerHTML = e.message;
    // }
};
var i = 0;
App.shakeJs(function(){
    document.getElementById('yaoyiyaoresult').innerHTML = 'success' + (++i);
    var shakeSound = document.getElementById('js-shakeSound');
    shakeSound.pause();
    shakeSound.play();
});
document.getElementById('body').addEventListener('click',function(){
    document.getElementById('js-shakeSound').pause();
});
