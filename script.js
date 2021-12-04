//function preload() {}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(400, 400);
    camera.hide();
    poseNet = ml5.poseNet(camera, modelLoaded);
    poseNet.on('pose', poses);
}

function draw() {
    image(camera, 0, 0, 400, 400);
}

function takePicture() {
    save("picture.png");
}

function modelLoaded() {
    console.log("inside modelLoaded function");
}

function poses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("the x coordinate of your nose is: " + results[0].pose.nose.x);
        console.log("the y coordinate of your nose is: " + results[0].pose.nose.y);
    }
}