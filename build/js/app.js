(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
