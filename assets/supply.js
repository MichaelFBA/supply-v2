$(document).ready(function() {

  if ($('body').hasClass('template-index')) {

    var balls = ui.select('.ball');
    balls.each(function(ball) {
      ball.set({
        values: {
          opacity: 1,
          y: 0,
          scale: 1
        }
      })
    })

    var $body = $('body');

    var grow = new ui.Tween({
        duration: 300,
        ease: 'anticipate',
        values: {
            scale: 1.2
        }
    })

    var springBack = new ui.Simulate({
      duration: 1000,
      values: {
          scale: {
              simulate: 'spring',
              start: 1.2,
              to: 1,
              spring: 600,
              stopSpeed: 0,
              friction: .3
          }
      }
    });

    $body.on('mouseover touchstart', '.ball', function(event) {
      event.stopPropagation();
      event.preventDefault();
      activeBall = ui.select(this);
      activeBall.start(grow);
    });

    $body.on('mouseleave touchend', '.ball', function(event) {
      event.stopPropagation();
      event.preventDefault();
      activeBall.start(springBack);
    });

  }

})
