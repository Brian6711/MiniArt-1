
function setup() {
    createCanvas(windowWidth, windowHeight);
}
  

function draw() {
    background(0);
fill(255)
   rect(0,0,windowWidth/6,windowHeight);
   rect((windowWidth/6)*2,0,windowWidth/6,windowHeight)
   rect((windowWidth/6)*4,0,windowWidth/6,windowHeight)

strokeWeight(0)
fill(0,0,255)
triangle(0,0,windowWidth,0,windowWidth/2,windowHeight/2)


fill(255,215,0)
triangle(windowWidth/15,0,(windowWidth/15)*14,0,windowWidth/2,(windowHeight/14)*6)

fill(0,0,255)
triangle((windowWidth/15)*2,0,(windowWidth/15)*13,0,windowWidth/2,(windowHeight/14)*5)

fill(255,215,0)
triangle((windowWidth/15)*3,0,(windowWidth/15)*12,0,windowWidth/2,(windowHeight/14)*4)

fill(0,0,255)
triangle((windowWidth/15)*4,0,(windowWidth/15)*11,0,windowWidth/2,(windowHeight/14)*3)

fill(255,215,0)
triangle((windowWidth/15)*5,0,(windowWidth/15)*10,0,windowWidth/2,(windowHeight/14)*2)


strokeWeight(5)
stroke(255,0,0)
line(0,(windowHeight)*2/3, windowWidth, (windowHeight)/6)

strokeWeight(5)
stroke(200,255,99)
line(0,(windowHeight)/4, windowWidth, (windowHeight)*7/9)

strokeWeight(5)
stroke(0,100,255)
line(0,(windowHeight)/2, windowWidth, (windowHeight)*3/5)

strokeWeight(5)
stroke(255,215,255)
line(0,(windowHeight)*9/10, windowWidth, (windowHeight)/4)

strokeWeight(5)
stroke(255,20,150)
line(0,(windowHeight)/10, windowWidth, (windowHeight)/2)

strokeWeight(5)
stroke(0,255,0)
line(0,(windowHeight)*7/10, windowWidth, (windowHeight)*4/10)

strokeWeight(5)
stroke(100,200,255)
line(0,(windowHeight)/5, windowWidth, (windowHeight)*9/10)

strokeWeight(5)
stroke(255,215,0)
line(0,(windowHeight)*4/10, windowWidth, (windowHeight)*19/20)

stroke(0)







strokeWeight(5)
stroke(255,0,0)
line((windowWidth)*2/3, 0,  (windowWidth)/6,windowHeight)

strokeWeight(5)
stroke(200,255,99)
line((windowWidth)/4, 0,  (windowWidth)*7/9,windowHeight)

strokeWeight(5)
stroke(0,100,255)
line((windowWidth)/2, 0,  (windowWidth)*3/5,windowHeight)

strokeWeight(5)
stroke(255,210,255)
line((windowWidth)*9/10, 0,  (windowWidth)/4,windowHeight)

strokeWeight(5)
stroke(255,20,150)
line((windowWidth)/10, 0,  (windowWidth)/2,windowHeight)

strokeWeight(5)
stroke(0,255,0)
line((windowWidth)*7/10, 0,  (windowWidth)*4/10,windowHeight)

strokeWeight(5)
stroke(100,200,255)
line((windowWidth)/5, 0,  (windowWidth)*9/10,windowHeight)

strokeWeight(5)
stroke(255,210,0)
line((windowWidth)*4/10, 0,  (windowWidth)*19/20,windowHeight)

stroke(0)
}

