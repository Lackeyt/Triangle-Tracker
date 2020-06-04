$(document).ready(function() {
  $("#lengthEntry").submit(function(event) {
    event.preventDefault();

    const sideOne = parseInt($("input#sideOne").val());
    const sideTwo = parseInt($("input#sideTwo").val());
    const sideThree = parseInt($("input#sideThree").val());
//Business Logic:

    function validateTriangle(sideOne, sideTwo, sideThree)  {
      let yesTriangle;
      event.preventDefault();
      if (sideOne && sideTwo && sideThree) {
        //Logic to check if sides can make a triangle
        if (sideOne > sideTwo && sideOne > sideThree){
          if ((sideTwo + sideThree) > sideOne) {
            yesTriangle = true;
          } else{
            yesTriangle = false;
          };
        } else if (sideTwo > sideOne && sideTwo > sideThree){
          if ((sideOne + sideThree) > sideTwo) {
            yesTriangle = true;
          } else{
            yesTriangle = false;
          };
        } else if (sideThree > sideTwo && sideThree > sideOne){
          if ((sideTwo + sideOne) > sideThree) {
            yesTriangle = true;
          } else{
            yesTriangle = false;
          };
        } else if (sideOne === sideTwo && sideOne === sideThree){
          yesTriangle = true;
        } else if (sideOne === sideTwo && sideOne !== sideThree){
          yesTriangle = true;
        } else if (sideOne === sideThree && sideOne !== sideTwo){
          yesTriangle = true;
        } else if (sideThree === sideTwo && sideOne !== sideThree){
          yesTriangle = true;
        };
      } else {
        alert("Please enter valid numbers");
      };
      return yesTriangle;
    }

    function triType() {
      //Determining Type of triangle
      let yesTriangle = validateTriangle(sideOne, sideTwo, sideThree);
      let triangleType;
      event.preventDefault();

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
      return triangleType
    };

  //User Interface

    //Output side lengths
    $(".lengths").text(sideOne + ", " + sideTwo + ", and " + sideThree)
    //Output triangle type string
    if (!validateTriangle(sideOne, sideTwo, sideThree)) {
      $(".triType").text("cannot make a");
    } else {
      $(".triType").text("is a(n) " + triType());
    };


  });
});