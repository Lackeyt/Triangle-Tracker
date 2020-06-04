$(document).ready(function() {
  $("#lengthEntry").submit(function(event) {
    event.preventDefault();

    const sideOne = parseInt($("input#sideOne").val());
    const sideTwo = parseInt($("input#sideTwo").val());
    const sideThree = parseInt($("input#sideThree").val());
//Business Logic:

    let yesTriangle;
    let triangleType;
    if (sideOne && sideTwo && sideThree) {
      //Logic to check if sides can make a triangle
      if (sideOne > sideTwo && sideOne > sideThree){
        if ((sideTwo + sideThree) > sideOne) {
          yesTriangle = true;
        } else{
          yesTriangle = false;
        }
      } else if (sideTwo > sideOne && sideTwo > sideThree){
        if ((sideOne + sideThree) > sideTwo) {
          yesTriangle = true;
        } else{
          yesTriangle = false;
        }
      } else if (sideThree > sideTwo && sideThree > sideOne){
        if ((sideTwo + sideOne) > sideThree) {
          yesTriangle = true;
        } else{
          yesTriangle = false;
        }
      }
      //Determining Type of triangle
      if (yesTriangle && sideOne === sideTwo && sideOne === sideThree) {
        triangleType = "Equilateral";
      } else if (yesTriangle && sideOne !== sideTwo && sideOne !== sideThree && sideTwo !== sideThree){
        triangleType = "Scalene";
      } else if (yesTriangle && sideOne === sideTwo && sideOne !== sideThree) {
        triangleType = "Isosceles";
      } else if (yesTriangle && sideOne === sideThree && sideOne !== sideTwo) {
        triangleType = "Isosceles";
      } else if (yesTriangle && sideThree === sideTwo && sideOne !== sideThree) {
        triangleType = "Isosceles";
      }
    }
    
    alert(yesTriangle)
  });
});