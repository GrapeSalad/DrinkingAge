//BUSINESS LOGIC
var availableRides = function(heightReq) {
  if (heightReq === 5) {
    return rideChoice = 5;
  }
  else if (heightReq === 4) {
    return rideChoice = 4;
  }
  else {
    return rideChoice = 3;
  }
};



// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#stats").submit(function(event) {
    event.preventDefault();

    // var heightReq = $("#heightFeet").val();
    var heightReq = parseInt($("#heightFeet").val());

    var rideChoice = availableRides(heightReq);
    console.log(rideChoice);

    if (rideChoice === 5) {
      console.log("Trying to Add class");
      $("div#ride5").addClass(".bgHighlight");
    };

  });

});
