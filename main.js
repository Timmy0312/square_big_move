noseX=0
noseY=0
difference=0
leftWristX=0
rightWristX=0

function setup(){

video=createCapture(VIDEO)
video.size(510,500)

canvas=createCanvas(510,500)
canvas.position(600,100)

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
 
}

function modelLoaded(){

console.log('PoseNet Is Initialized')

}

function gotPoses(results)
{

if(results.length > 0){

console.log(results);

noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
console.log('noseX'+ noseX + 'noseY' + noseY)

rightWristX=results[0].pose.rightWrist.x
leftWristX=results[0].pose.leftWrist.x
console.log('rightWristX' + rightWristX + 'leftWristX' + leftWristX)
difference= floor(leftWristX-rightWristX)
}

}

function draw(){

background('lime')

document.getElementById("square_side").innerHTML="The side of the square is equal to" + difference + "pixels"

fill("pink")
stroke("lightblue")
square(noseX,noseY,difference)
}


