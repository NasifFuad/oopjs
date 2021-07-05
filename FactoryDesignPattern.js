const rectangleFactory = function (width,height){
  return {
    width:width,
    height:height,
    draw: function(){
      console.log(`The Area of the Rectangle is ${this.width * this.height}`)
    }
  }
}
const factoryPattern = new rectangleFactory(1,3)
