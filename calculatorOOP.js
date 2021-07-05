//New OOP Project Calculator
const Calculator = function(numberOne,numberTwo){ 
  this.numberOne = numberOne;
  this.numberTwo = numberTwo;

  this.addition = () =>{
    const sum = numberOne + numberTwo
    const result = `${numberOne} + ${numberTwo} = ${sum}`
    console.log(result) 
  }
  this.substraction = () =>{
    const minus = numberOne - numberTwo;
    const result = `${numberOne} - ${numberTwo}  = ${minus}`;
    console.log(result);
  }
  this.multiplication = () =>{
    const multiply = numberOne * numberTwo;
    const result = `${numberOne} x ${numberTwo}  = ${multiply}`;
    console.log(result);
  }
  this.division = () =>{
    const division = numberOne / numberTwo;
    const result = `${numberOne} x ${numberTwo}  = ${division}`;
    console.log(result);
  }
  
}



export default Calculator;

