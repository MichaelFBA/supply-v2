$(document).ready(function() {

  //video
  var isPlaying = false;
  var video = $("video");

  video.on('click', function() {
    if (isPlaying) {
      $(this)[0].pause()
      isPlaying = false;
    } else {
      $(this)[0].play()
      isPlaying = true;
    }
  });

  //
  $("#video").on('click', function(e) {
    if ($(e.target).is('#video')) {
      $(this).addClass('transitionOffScreen')
      video[0].pause()
    }
  })

  if ($('body').hasClass('template-index')) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('#video').addClass('transitionOffScreen')
        video[0].pause()
      }
    });
  }

  // init Packery
  var $grid = $('.grid').packery({
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    containerStyle: {
      padding: '10px'
    }
  });
  // layout Packery after each image loads
  $grid.imagesLoaded(function() {
    $grid.packery();
    $('.grid').addClass('loaded');
  });


})
