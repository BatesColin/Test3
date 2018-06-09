$(function(){
  $("#form-one").submit(function(event){
  event.preventDefault();





  var input = parseInt($("input#input").val());

  console.log(input)
  var outPut = []



  //var inputNumber = concat.input
  for(var i =0; i<=input; i++){
    console.log(i);
    var temp = i.toString();
    if(i % 3 === 0){
      outPut.push("I'm sorry, Dave. I'm afraid I can't do that.");

    }else if(temp.includes(1)){
      outPut.push("Boop!");

    }else if(temp.includes(0)){
      outPut.push("Beep!");
    }
    else{
      outPut.push(i);
    }
  }

  for(i=0; i<outPut.length; i++){
  $("#list").append("<li>" + outPut[i] + "</li>");
}
  //for(index<inputLength; var input=0: index++){
  //for(var index = input; index <= inputLength; index++){
});
});



// var output = input.map(input(input) {
// outPut.push(number-1);
