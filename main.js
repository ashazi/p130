song="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftWrist=0;
scoreRightWrist=0;
function preload()
{
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
    
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("FF0000")
    if(scoreleftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song.play();
        song2.stop();
       
        
    }
    if(scoreRightWrist > 0.2)
{
circle(rightWristX, rightWristy, 20);
song2.play();
song.stop();     
       


    }
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded()
{
    console.log('poseNet is Initialized')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristY=results[0].pose.leftWrist.y;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY")


        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY");

        scoreleftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;

    }
}