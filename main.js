
    
    function setup(){
        canvas=createCanvas(480, 440);
        canvas.center();
        canvas.position(520, 240);
        video=createCapture(VIDEO);
        video.hide();
    }
    
    function draw(){
        image(video, 0, 0, 480, 480);
    }
    