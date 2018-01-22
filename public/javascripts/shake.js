/**
 * Created by liufeifeng on 1/22/18.
 */
var App = window.App || {};
App.shakeJs = function(className){
    try {
        window.addEventListener("deviceorientation", orientationHandler, false);
        function orientationHandler(event) {
            var shake = document.getElementById("js-shake");
            var text = "";
            text += "左右旋转：rotate alpha{" + Math.round(event.alpha) + "deg)<p>";
            text += "前后旋转：rotate beta{" + Math.round(event.beta) + "deg)<p>";
            text += "扭转设备：rotate gamma{" + Math.round(event.gamma) + "deg)<p>";
            shake.innerHTML = text;
        }
    }
    catch (e) {
        shake.innerHTML = e.message;
    }
};
App.shakeJs();