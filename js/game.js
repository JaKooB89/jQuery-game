/**
 * @author Jakub Czaja <jakoob89@gmail.com>
 * Copyright (c) 2018 Jakub Czaja
 **/

// Initial Variables
var pointsTracker = 0
var count = 10
var sound = true

$(function () {
  // Preloads Game Assets
  $.preload([
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg',
    'images/bg5.jpg',
    'images/bg6.jpg',
    'images/bg7.jpg',
    'images/bg8.jpg',
    'audio/click.mp3',
    'audio/click2.mp3',
    'audio/swoosh.mp3',
    'audio/shutter.mp3'
  ])

  // Difficulty Level Choice
  $('.btnDif').click(function () {
    var btnId = $(this).attr('data-dif-id')
    count = btnId
    $('.btnDif').addClass('disabled')
    $(this).removeClass('disabled')
    $('#btnStart').removeAttr('disabled')
  })

  // Button Sounds
  $('#gameContainer button').click(function () {
    if (sound === true) {
      $.playSound('audio/click.mp3')
    };
  })
  $('.btnDif').click(function () {
    if (sound === true) {
      $.stopSound()
      $.playSound('audio/click2.mp3')
    };
  })
  $('.btnSlide').click(function () {
    if (sound === true) {
      $.playSound('audio/swoosh.mp3')
    };
  })

  // Mute Function
  $('#btnMute').click(function () {
    if (sound === true) {
      sound = false
      $('#btnMute svg').addClass('fa-volume-off')
    } else {
      sound = true
      $('#btnMute svg').addClass('fa-volume-up')
    };
  })

  // Screen Changer
  $('.scrChange').on('click', function () {
    var scrId = $(this).attr('data-scr-id')
    $('.screen').fadeOut(300, function () {
      setTimeout(function () {
        $('#screen' + scrId).fadeIn()
      }, 301)
    })
  })

  // Background Changer
  $('.backThumb').on('click', function () {
    var bgId = $(this).attr('data-bg-id')
    $('#gameContainer').css('background-image', 'url(images/bg' + bgId + '.jpg)')
    if (sound === true) {
      $.playSound('audio/shutter.mp3')
    };
  })
})
