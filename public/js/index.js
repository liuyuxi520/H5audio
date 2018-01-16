window.musicFn =(function(){
    function audios(name) {//播放暂停音频
        var myAudio =document.getElementById(name);
        if(myAudio.paused){
            myAudio.play();
        }else{
            myAudio.pause();
        }
    }
    function toggleName(node,classname){
        node.toggleClass(classname);
    }
    function toggleImg(node,url1,url2){
        var url = node.attr('src');
        if(url.indexOf(url1) > -1 ){
            node.attr('src',url2);
        }else{
            node.attr('src',url1);
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
        $('.js-audioImg').on('click',function(e){//右上角音乐小图片
            var $this = $(this),
                target = $(e.target);
            toggleName($this,'circle');
            audios('js-music');
            toggleImg(target,'/images/bg-music.png','/images/bg-music2.png');
        });
        
        $('.js-begin').on('click',function(){//开始按钮
            beginMusic('js-music','js-audioImg','/images/bg-music.png');
        });
    }      
    return {
        audios : audios,
        toggleName : toggleName,
        beginMusic : beginMusic,
        start : start
    }  
})().start();