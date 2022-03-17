
var img, r, lx, ux, ly, uy, _x, _y, s, strenght;


//string & text
var tTitle, sTitle,tAbout, sAbout,tAdd,sAdd;
var images = []

// function preload() {
  // for( var i = 0 ; i < 20; i++) {
  //   indexNum = int(random(index.length));
	 //  url = index[indexNum];
  //   var picNum = multiplePhotos[indexNum];
	 //  //url = index[0];
	 //  url = url.replace(/\s+/g, '');
  //   for(var j=0; j<picNum; j++) {
  // 	  img = loadImage("data/"+url+"/0"+j+".jpg");
  // 	  images[i] = img;
  //   }
  // }
  
// }

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  sTitle = ["Dasha", "Chernova", "Graphic","Designer"];
  sAbout = ["?"];
  sAdd = ["+"];
  
  r = 60;
  strength = 2.0;

  //text
  margin = 20;

  //smooth();
  background(255);

  //fill with images
  
 //  for(var i=0; i<width; i+=img.width*height/img.height) {
 //    image(img,i,0,img.width * height/img.height, height);
 //  }

 //  imageMode(CENTER);
 //  for( var j=0; j<4; j++) {
	//   for ( var i=0; i<images.length; i++){
	//   	image(images[i],random(width),random(height),random(images[i].width/5,images[i].width),random(images[i].height/5,images[i].height));
	//   }
	// }


  //set text
  var margin = 50;
  tTitle = new PointText(sTitle,CENTER,width/2,margin,min(height/5,width/10),10,12);
  tTitle.setToUpperCase();
  //tTitle.pin("CENTERY",10);
  tTitle.y = height/2-tTitle.h/4;
  tTitle.clickable = true;
  tTitle.setURL("about/index.html");




  fill(0);
  noStroke();
  textStyle(BOLD);
  tTitle.display();


  

}

function draw() {
  setCursor("auto");
  //image(img,0,0);
  var pink = color(255,102,204);
  lx = mouseX - r;
   ux = mouseX + r;
   ly = mouseY - r;
   uy = mouseY +r;
  
   _x = constrain(pmouseX-mouseX,-strength,strength);
   _y = constrain(pmouseY-mouseY,-strength,strength);
  //image(img,0,0);
 

  //text
  tTitle.cursor("pointer");


   loadPixels();

  msmudge(0);

   updatePixels();




}





function mouseClicked() {
  // tTitle.clicked();
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}  