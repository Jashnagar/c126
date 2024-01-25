difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
   video = createCapture(VIDEO);
   video.size(550,500);

   canvas = createCanvas(600,420);
   canvas.position(590,110);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#5B4EFF');
    textSize(difference);
    stroke('black');
    fill('white')
    text('Hello World', 50 , 250);
}
function modelLoaded()
{
    console.log('PoseNet is Intialized!!!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor(leftWristX - rightWristX);
        console.log("leftwristx"+leftWristX+"rightwristx"+rightWristX+"difference"+difference);
    }
}
