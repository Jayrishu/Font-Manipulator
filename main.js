function setup(){
    canvas = createCanvas(550,510);
    canvas.position(560,150);
    background(255,255,0);
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(10,150)
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is ready");
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
    }
}
function draw(){
    background(255,255,0)
}

