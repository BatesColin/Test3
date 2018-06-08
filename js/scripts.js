$(function(){
  $("#form-one").submit(function(event){
  event.preventDefault();
  var replacement1 = "3";
  var replacement2 = "1";
  var replacement3 = "0";
  var replacements = ("3", "1", "0", "2", "4", "5", "6", "7", "8", "9");
  //var replacement4 = "2", "4", "5", "6", "7", "8", "9"
  var input = parseInt($("#input").val());

 var inputSplit = input.toString().split("");



  for(var index = 0; inputSplit<9; index++){
  //  var value = replacements [index];
 if (inputSplit === "replacements".indexOf["0"]){
      //colsole.log(3)
      console.log(input)
   }
//  colsole.log()
 }

});

});
