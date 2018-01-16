(function(){
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
    $('.js-audioImg').on('click',function(){
        var $this = $(this);
        toggleName($this,'circle');
        audios('js-music');
    });

    function beginMusic(node,musicBtn){
        var shapeAudio=document.getElementById(node),
            btn = document.getElementsByClassName(musicBtn);
        btn[0].classList.add('circle');  
        shapeAudio.pause();
        shapeAudio.play();
    }
    
    $('.js-begin').on('click',function(){
        beginMusic('js-music','js-audioImg');
    });      
        
})();