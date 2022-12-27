nose_x=0;
nose_y=0;

function preload()
{
    clown_nose=loadImage("https://i.postimg.cc/SKJ7nz7W/Png-Item-1708055.png");
}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("PoseNet is initialized");

}

function draw()
{
image(video,0,0,300,300);

image(clown_nose,nose_x,nose_y,80,60);
}

function take_snapshot()
{
save("Image.png")
}

function gotPoses(results)
{
     console.log(results);
     nose_x=results[0].pose.nose.x-39;
     nose_y=results[0].pose.nose.y-35;
     console.log("Nose x="+results[0].pose.nose.x);
     console.log("Nose y="+results[0].pose.nose.y);
}