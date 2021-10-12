function preload(){
	
}
function setup(){
	canvas = createCanvas(500,500);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(200,200);
	video.hide();
	poseNet = ml5.poseNet(video,modelloaded);
	poseNet.on('pose', gotPoses);
}
function modelloaded(){
	console.log("poseNet fired");
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		console.log("nose x "+results[0].pose.nose.x+" nose y "+results[0].pose.nose.y);
		rect(results[0].pose.nose.x,results[0].pose.nose.y,55,55)
	}
}
function draw(){
	image(video,0,0,500,500)
	
}
function take_snapshot(){
	save("pic.png");
}