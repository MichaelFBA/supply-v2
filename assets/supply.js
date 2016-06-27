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

  $("#video").on('click', function(e) {
    if ($(e.target).is('#video')) {
      $('video').addClass('transitionOffScreen')
      $(this).addClass('transitionOffScreen')
      video[0].pause()
    }
  })
})
