$(document).ready(function() {

  if ($('body').hasClass('template-index')) {

    var balls = ui.select('.ball');
    balls.each(function(ball) {
      ball.set({
        values: {
          opacity: 0,
          y: 1000
        }
      })
    })

    var $body = $('body');

    var showBall = new ui.Tween({
      values: {
        y: 0,
        opacity: 1
      }
    });

    var trackBall = new ui.Track({
      values: {
        x: {},
        y: {}
      }
    });

    var springBack = new ui.Simulate({
      simulate: 'spring',
      spring: 500,
      friction: 0.2,
      values: {
        x: {
          to: 0
        },
        y: {
          to: 0
        }
      }
    });

    $body.on('mousedown touchstart', '.ball', function(event) {
      event.stopPropagation();
      event.preventDefault();

      activeBall = ui.select(this);
      activeBall.start(trackBall.extend({
        smooth: 30
      }), event);

      $body.on('mouseup touchend', function(event) {
        event.stopPropagation();
        event.preventDefault();
        activeBall.start(springBack);
      });
    });

    $(".test-area").each(function(i, el) {
      balls.members[i].start(showBall.extend({
        duration: 400,
        delay: 500,
        ease: 'backOut'
      }))
    });

  }

})
