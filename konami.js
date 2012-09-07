/*
 *  A jQuery plugin to bind a function trigger to user entering the Konami code
 *  <Up>, <Up>, <Down>, <Down>, <Left>, <Right>, <Left>, <Right>, <B>, <A>,
 *  <Enter> in the window
 *
 *  Github: http://github.com/aenoble/
 *
 *  Author: Andrew Noble
 *  Twitter: @aenoble
 */

(function( $ ) {
    $.konami = function(callback) {
        var konami_code = [38,38,40,40,37,39,37,39,66,65,13];
        var entered_code = [];
        $(window).keydown(function(event){
            var key_code = event.keyCode;
            entered_code.push(key_code);
            if($(konami_code).not(entered_code).length == 0 &&
               $(entered_code).not(konami_code).length == 0)
            {
                $(callback);
            }
        });
    }
})( jQuery );
