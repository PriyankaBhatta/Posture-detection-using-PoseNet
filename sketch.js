let capture;
let posenet;
let singlePose, skeleton;
let actor_img;
let specs, smoke;

function setup(){
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        
    }

    console.log(noseX = " " + noseY);
}

function modelLoaded(){
    console.log('Model has loaded');
}

function draw(){

    //images and videos(Webcam)
    image(capture, 0, 0);
    fill(255, 0, 0);
    
    if(singlePose){
        for (let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }
        
        stroke(255, 255, 255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }

        image(smoke, singlePose.nose.x-40, singlePose.nose.y+30, 50, 50);
    }   
}



















// All the code below were used for initial practice to get a better understanding of p5.js.

//alert("Hello world!")

//let shahrukh_img;
//let capture;

/*function setup(){ //prints one time
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.hide();
    //shahrukh_img = loadImage('images/shahrukh.png')
    //console.log('Setup function');
}

function draw(){

    //images and videos(webcam)
    image(capture, 0,0, 800, 600);
}
*/

/*
function draw(){

    //images and videos(webcam)
    image(shahrukh_img, mouseX, mouseY, 100, 100, 100, 100);
}
*/

/*
// generates random numbers
function getRandomArbitrary(min, max){
    return Math.random() * (max - min) + min;
}

function draw(){ //prints infinitely
    r = getRandomArbitrary(0,255);
    g = getRandomArbitrary(0,255);
    b = getRandomArbitrary(0,255);
    fill(r,g,b);
    ellipse(mouseX, mouseY, 50, 50);
}
*/
/*function draw(){
    background(200);


    //stroke and color
    
    fill(132,100,34, 100)
    stroke(255, 0, 0, 255);
    strokeWeight(5);
    ellipse(100,200,100,100);
    ellipse(250,200,100,100);
    stroke(0, 255, 0, 10);
    ellipse(400,200,100,100);
    stroke(0, 0, 255, 100);
    ellipse(550,200,100,100);
    ellipse(700,200,100,100); 
    
    
    //1. point
    //point(200,200);
    //2. line
    //line(200,200,300,300);
    //3. triangle
    //triangle(100,200,300,400,150,450);
    //4. rectangle
    //rect(500,200,200,100);
    //5. circle
    //ellipse(600,300,100,100);
} 
*/