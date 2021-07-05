//Constructor Design Pattern
const ConstructorPatternClass = function(width,height) {
  this.width = width;
  this.height = height;

  this.areaOfRectangle = function(){
    console.log(`The Area of the Rectangle is ${this.width * this.height}`)
  }
  
  this.add = function(){
    console.log(`Sum: ${this.width * this.height}`)
  }
}


//End of Constructor pattern 

export default ConstructorPatternClass;