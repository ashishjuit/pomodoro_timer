$(document).ready(function(){
  var start=$('#start');
  var minutes=$('#minutes');
  var seconds=$('#seconds');
  var breakBtn=$('#break');

  start.on('click', startCountdown);
  breakBtn.on('click' ,takeABreak);

  function takeABreak(){
    minutes.text('05');
    seconds.text('00');
    startCountdown();
  }

  function startCountdown(){
    var countdown = setInterval(function(){
      var secondsVal=+seconds.text(); //the plus makes it behave like a number
      var minutesVal=+minutes.text();
      if(secondsVal===0 && minutesVal===0){
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
        clearInterval(countdown); 
        return;
      }

      if(secondsVal===0){
        seconds.text(59);
      }else {
        if(secondsVal<11){
          seconds.text("0" + (secondsVal -1))
        }
        else{
          seconds.text(secondsVal - 1);
        }

      }

      if(secondsVal===0){
        if(minutesVal<11){
          minutes.text("0" + (minutesVal - 1))
        }
        else{
          minutes.text(minutesVal-1);
        }
      }

    }, 1000);
  }
});
