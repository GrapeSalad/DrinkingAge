//FRONT END
$(document).ready(function(){

  $("form#calculateDob").submit(function(event){
    event.preventDefault();
    var dateOfBirth = $("#born").val();
    console.log(typeof(dateOfBirth), dateOfBirth);
    console.log(dateOfBirth.slice(0,4));
    console.log(dateOfBirth.slice(5,7));
    console.log(dateOfBirth.slice(8,10));
  });
});

//BACK END
var userYear = parseInt(dateOfBirth.slice(0,4));
var userMonth = parseInt(dateOfBirth.slice(5,7));
var userDay = parseInt(dateOfBirth.slice(8,10));

// today's date
var today = new Date();
var todayDay = parseInt(today.getDate());
var todayMonth = parseInt(today.getMonth()+1);
var todayYear= parseInt(today.getFullYear());

//calculation
if (todayYear - userYear <= 21 ) {
  //check month to see if it's over ...
  else if (todayMonth - userMonth <= 0) {
      else if (todayDay - userDay <=0 ) {

      }
      }
  }
  }
}
