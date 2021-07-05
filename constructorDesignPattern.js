//Constructor Design Pattern
const rectangle = function(width,height) {
  this.width = width;
  this.height = height;

  this.areaOfRectangle = function(){
    console.log(`The Area of the Rectangle is ${this.width * this.height}`)
  }
  
  this.add = function(){
    console.log(`Sum: ${this.width * this.height}`)
  }
}

const newRect = new rectangle(1,3)
//End of Constructor pattern 

export default newRect;