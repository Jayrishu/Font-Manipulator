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
leftWristX = 0;
rightWristX=0;
difference = 0;
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist x - "+leftWristX+" , Right Wrist x - "+rightWristX);
    }
}
function draw(){
    background(255,255,0);
    textSize(difference);
    stroke(128,0,128);
    fill(255,0,255);
    text("Jayaditya",50,400);
    document.getElementById("font_size").innerHTML = "Font Size will be "+difference+" px";
}

