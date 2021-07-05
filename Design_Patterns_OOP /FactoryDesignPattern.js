const FactoryPatternClass = function (width,height){
  return {
    width:width,
    height:height,
    draw: function(){
      console.log(`The Area of the Rectangle is ${this.width * this.height}`)
    }
  }
}

export default FactoryPatternClass
