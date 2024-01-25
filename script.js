song1 = "";
song2 = "";
function setup()
{
    canvas = createCanvas(600,600);
    canavs.cenetr();

    video = createCapture(600,500);
    video.Hide();
}

function draw()
{
    image(video, 0, 0, 600 , 500);  
}