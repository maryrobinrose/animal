$(function(){
  $("#snuffles").click(function(event) {
    $("#catInfo").toggle();
    $(event).eventDefault();
  });
  $("#dogs").click(function(event) {
    $("#dogInfo").toggle();
    $(event).eventDefault();
  });
});
