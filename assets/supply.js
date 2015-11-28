var balls = ui.select('.ball');
console.log('balls', balls)

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

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

function ballsInView(event) {
  $(".test-area").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      console.log(i)
      balls.members[i].start(showBall.extend({
        duration: 400,
        delay: 500,
        ease: 'backOut'
      }))
    }
  });
}

$(window).scroll(function(event) {
  ballsInView(event);
});

ballsInView()
