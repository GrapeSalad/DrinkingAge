//BACK END
var areTheyOver21 = function(dateOfBirth){
  var userYear = parseInt(dateOfBirth.slice(0,4));
  var userMonth = parseInt(dateOfBirth.slice(5,7));
  var userDay = parseInt(dateOfBirth.slice(8,10));
  // today's date
  var today = new Date();
  var todayDay = parseInt(today.getDate());
  var todayMonth = parseInt(today.getMonth()+1);
  var todayYear= parseInt(today.getFullYear());
  //calculation
  if (todayYear - userYear < 21){
    // areTheyOver21 = "fail"
    var is21 = ("YOU SHALL NOT PASS");
    return is21;
  }

  if (todayYear - userYear > 21){
    var is21 = ("You may pass");
    return is21;
  }

  if (todayYear - userYear === 21 ) {
    console.log("Year fail");
    //check month to see if it's over ...
    if (todayMonth - userMonth === 0) {
      console.log("Month fail");
      //check day to see if its over ...
      if (todayDay - userDay === 0 ) {
        console.log("happy birthday!  Find a designated driver.");
        var is21 = ("happy birthday!  Find a designated driver.");
        return is21;
      }
    }
  }

};
//FRONT END
$(document).ready(function(){
  $("form#calculateDob").submit(function(event){
    event.preventDefault();
    var dateOfBirth = $("#born").val();
    var result = areTheyOver21(dateOfBirth);
    console.log(result, typeof(result));
    $("#output").text(result);
    // console.log(success);
  });
});
