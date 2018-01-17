window.musicFn =(function(){
    function audios(name) {//播放暂停音频
        var myAudio =document.getElementById(name);
        if(myAudio.paused){
            myAudio.play();
        }else{
            myAudio.pause();
        }
    }
    function toggleName(node,name){
        var classval = node.className;
        if(classval.indexOf(name)>-1){
            node.className = classval.replace(name,'');
        }else{
            node.className = classval + ' '+name;
        }
    }
    function toggleImg(node,url1,url2){
        var url = node.src;
        if(url.indexOf(url1) > -1 ){
            node.src = url2;
        }else{
            node.src = url1;
        }
    }
    function beginMusic(node,musicBtn,musicBgUrl){
        var shapeAudio=document.getElementById(node),
            btn = document.getElementsByClassName(musicBtn);
        btn[0].classList.add('circle');
        btn[0].src = musicBgUrl;  
        shapeAudio.pause();
        shapeAudio.play();
    }
    
    function start(){
        var audioImg = document.getElementsByClassName('js-audioImg');
        var begin = document.getElementsByClassName('js-begin');

        audioImg[0].addEventListener('click',function(){//右上角音乐小图片
            toggleName(this,'circle');
            audios('js-music');
            toggleImg(this,'/images/bg-music.png','/images/bg-music2.png');
        });

        begin[0].addEventListener('click',function(){//开始按钮
            beginMusic('js-music','js-audioImg','/images/bg-music2.png');
        });
    }      
    return {
        audios : audios,
        toggleName : toggleName,
        beginMusic : beginMusic,
        start : start
    }  
})().start();