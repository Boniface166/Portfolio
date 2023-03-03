// jQuery
$(document).ready(function() {
    var text = "Hello, My name is!"; // Text to be typed
    var speed = 50; // Typing speed in milliseconds
    
    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        $('#typing').html(text.substring(0, i+1));
        setTimeout(function() {
          typeWriter(text, i+1, fnCallback)
        }, speed);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000);
      }
    }
    
    function startTyping() {
      if (typeof text === 'string') {
        typeWriter(text, 0, function() {
          startTyping();
        });
      }
    }
    
    startTyping();
  });
  