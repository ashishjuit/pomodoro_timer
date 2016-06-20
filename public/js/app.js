$(document).ready(function(){
  var start=$('#start');
  var minutes=$('#minutes');
  var seconds=$('#seconds');

  start.on('click', startCountdown);

  function startCountdown(){
    setInterval(function(){
      var secondsVal=+seconds.text(); //the plus makes it behave like a number
      if(secondsVal===0){
        seconds.text(59);
      }else {
        seconds.text(secondsVal - 1);
      }

    }, 1000);
  }
});
