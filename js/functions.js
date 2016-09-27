var index = ["Adriana Lima",
"Angelina Jolie",
"Beyonce",
"Britney Spears",
"Cameron Diaz",
"Eva Mendes",
"George Clooney",
"Jennifer Aniston",
"Jennifer Lawrence",
"Jessica Alba",
"Johnathan Meyers",
"Julianne Moore",
"Julia Stiles",
"Kate Moss",
"Kate Wislet",
"Katy Perry",
"Keira Knightley",
"Kim Cattrall",
"Kim Kardashian",
"Kristen Stuart",
"Lady Gaga",
"Laila Rouass",
"Lindsay Lohan",
"Madonna",
"Matthew Macfay",
"Megan Fox",
"Naomi Watts",
"Nicolette Sheirda",
"Penelope Cruz",
"Rachel Mcadam",
"Rachel Weisz",
"Scarlett Johansson",
"Thom Yorke",
"Tina Fey",
"Tyra Banks",
"Others",];


// determining how many photos per person
var multiplePhotos = [];
for(var i=0; i<index.length; i++) {
  multiplePhotos[i] = 1;
}

//setting additional photos;
setPhotoQuantity("Britney Spears",2);
setPhotoQuantity("Madonna",2);



function setPhotoQuantity(name, quantity) {
  multiplePhotos[index.indexOf(name)] =quantity;
}



function msmudge(chance) {

  if ( _y >= 0 && _x >= 0) {
    for(var y=ly*4; y<uy*4; y+=4) {
      for ( var x = (mouseX - int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x < (mouseX + int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x+=4) {
        var loc = (x + ( width*y));
        var x2 = x + _x*4;
        var y2 = y + _y*4;
  
        var loc2 = int(x2 + ( width*y2));
       
        if( loc2> 0  && loc>0  && loc< (width*height)*4 && loc2< (width*height)*4 ) {
          if(random(1)>chance) { 
            pixels[loc] = pixels[loc2]; 
            pixels[loc+1] = pixels[loc2+1]; 
            pixels[loc+2] = pixels[loc2+2]; 
            pixels[loc+3] = pixels[loc2+3]; 

          }

        }
      }
    }
  }

  if ( _y <= 0 && _x >= 0) {
    for(var y=uy*4; y>ly*4; y-=4) {
      for ( var x = (mouseX - int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x < (mouseX + int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x+=4) {
        var loc = (x + ( width*y));
        var x2 = x + _x*4;
        var y2 = y + _y*4;
  
        var loc2 = int(x2 + ( width*y2));
       
        if( loc2> 0  && loc>0  && loc< (width*height)*4 && loc2< (width*height)*4 ) {
          if(random(10)>chance) { 
            pixels[loc] = pixels[loc2]; 
            pixels[loc+1] = pixels[loc2+1]; 
            pixels[loc+2] = pixels[loc2+2]; 
            pixels[loc+3] = pixels[loc2+3]; 

          }

        }
      }
    }
  }

  if ( _y >= 0 && _x <= 0) {
    for(var y=ly*4; y<uy*4; y+=4) {
      for ( var x = (mouseX + int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x > (mouseX - int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x-=4) {
        var loc = (x + ( width*y));
        var x2 = x + _x*4;
        var y2 = y + _y*4;
  
        var loc2 = int(x2 + ( width*y2));
       
        if( loc2> 0  && loc>0  && loc< (width*height)*4 && loc2< (width*height)*4 ) {
          if(random(10)>chance) { 
            pixels[loc] = pixels[loc2]; 
            pixels[loc+1] = pixels[loc2+1]; 
            pixels[loc+2] = pixels[loc2+2]; 
            pixels[loc+3] = pixels[loc2+3]; 

          }

        }
      }
    }
  }

  if ( _y <= 0 && _x <= 0) {
    for(var y=uy*4; y>ly*4; y-=4) {
      for ( var x = (mouseX + int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x > (mouseX - int(r*sin( PI * (y-(mouseY*4)+r*4)/(r*2*4) )))*4; x-=4) {
        var loc = (x + ( width*y));
        var x2 = x + _x*4;
        var y2 = y + _y*4;
  
        var loc2 = int(x2 + ( width*y2));
       
        if( loc2> 0  && loc>0  && loc< (width*height)*4 && loc2< (width*height)*4 ) {
          if(random(10)>chance) { 
            pixels[loc] = pixels[loc2]; 
            pixels[loc+1] = pixels[loc2+1]; 
            pixels[loc+2] = pixels[loc2+2]; 
            pixels[loc+3] = pixels[loc2+3]; 

          }

        }
      }
    }
  }


}

//text class


function PointText(_stringArray,_align,_x,_y,_textSize,_tracking,_textLeading) {
  this.s = _stringArray;
  this.stringArray = _stringArray;

  //always input strings as arrays;
  //check if string is one line;
  if ( this.stringArray.length == 1) {
    this.s = this.stringArray[0];
  }

  this.align = _align;
  this.y = _y;
  this.x = _x;
  this.tSize = _textSize;
  this.tracking = _tracking;
  this.tLeading = _textLeading;
  this.largestString =  this.stringArray[0];
  this.url = "";

  //optional vars
  this.clickable = false;
  this.pinned = false;

  //calculate pixel height of object
  this.h = (this.tSize+this.tLeading)*(this.stringArray.length)-this.tLeading;
  
  for (var i = 0 ; i < this.stringArray.length; i++) {
    console.log(i);
    if (this.largestString.length < this.stringArray[i].length){
      console.log(i);
      this.largestString = this.stringArray[i];
    }
  }
  textSize(this.tSize);
  this.w = textWidth(this.largestString+this.tSize);

  this.pin = function(side, displace){
    this.pinned = true;
    if(side == "LEFT") {
      this.x = displace;
    }
    else if(side == "RIGHT") {
      this.x = width - displace;
    }
    else if(side == "TOP") {
      this.y = displace;
    }
    else if(side == "BOTTOM") {
      this.y = height - displace;
    }
    else if(side == "CENTERX") {
      this.x = width/2;
    }
    else if(side == "CENTERY") {
      this.y = height/2 - this.h/2 - displace;
    }
  }

  this.display = function(){
    textSize(this.tSize);
    textLeading(this.tLeading);
    textAlign(this.align);
    for ( var i = 0; i< this.stringArray.length; i++){
      text(this.stringArray[i], this.x, this.y+(this.tSize+this.tLeading)*i);
    }


    // diagram
    // noFill();
    // stroke(255,0,0);
    // rect(this.x - this.w/2 ,this.y-this.tSize,this.w,this.h);
    // noStroke();
    
    
  }

  this.setURL = function(urlString){
    this.url = urlString;
  }

  this.cursor = function(type) {
    if(this.clickable) {
      if(this.mouseCheck()){
        document.getElementsByTagName("BODY")[0].style.cursor = type;
      }  
    }  
  }

  this.clicked = function() {
    if (this.mouseCheck()) {
      window.location.href = this.url;
    }
  }

  this.mouseCheck = function(){
      if (this.align = CENTER) {
        if(mouseX > this.x-this.w/2 && mouseX < this.x + this.w/2) {
          if (mouseY > this.y - this.h && mouseY < this.y+this.h) {
            return true;
          } 
        }
      } 
  }

  this.setToUpperCase = function() {
    for ( var i=0; i < this.stringArray.length; i++ ) {
      this.stringArray[i] = this.stringArray[i].toUpperCase();
    }
  }



}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

var setCursor = function(type){
  document.getElementsByTagName("BODY")[0].style.cursor = type;
}