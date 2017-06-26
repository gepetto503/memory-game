$(function(){
  var clickArray = [];
  var matcher1 = 0;
  var matcher2 = 0;

  $('.card').click(function(){
    var clickedCard = $(this);
    var cardBack = $(this).find('.card-back');
    cardBack.hide();
    clickedCard.addClass('selected');

    if ($(this).hasClass('one')) {
      matcher1 = 1;
    }
  });

  $('.card').click(function(){
    var clickedCard = $(this);
    var cardBack = $(this).find('.card-back');
    if ($(this).hasClass('one') && (!$(this).hasClass('selected'))) {
      matcher2 = 1;
      console.log(matcher2);
    }

    if (matcher1 === matcher2) {
      alert("hey!");
      console.log(matcher1, matcher2);
    }
  });



  // $(".card-back").click(function(){
  //   var clickValue = parseInt($(this)[0].id);
  //   console.log(clickValue);
  //   clickArray.push(clickValue);
  //   if(clickArray[clickArray.length-1] == clickArray.length-2){
  //     $(".card-back#clickValue").hide();
  //   }else {
  //     $(".card-back#clickArray[clickArray.lengt")
  //   }
  //
  //
  // });
});
