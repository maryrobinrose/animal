$(document).ready(function() {
  $(".animalChoice").submit(function(){
    $(".info").hide();
    console.log("user clilcked submit");
    event.preventDefault();
    var selection = $("#bar").val();
    console.log("selection: "+selection);

    if (selection === "cats") {
      $("#catInfo").show();
    }
    if (selection === "volvo") {
      $("#dogInfo").show();
    }
  })
});
