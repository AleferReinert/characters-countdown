/*! jquery.charactersCountdown v1.0.0 | */
$.fn.charactersCountdown = function(options) {

    var defaults = {
        warningColor:   '#f00',
        warningLength:  5
    }

    var settings = $.extend({}, defaults, options);

    return this.each(function() {

        var max     = $(this).attr('maxlength'),
            val     = $(this).attr('value'),
            cur     = 0;

        if(val)
            cur     = val.length;

        var left    = max-cur,
            output  = $(this).data('target');

        $(output).text(left.toString());

        $(this).keyup(function(i) {
            var max = $(this).attr('maxlength'),
                val = $(this).attr('value'),
                cur = 0;
            if(val)
                cur = val.length;

            var left = max-cur;

            $(output).text(left.toString());

            if(left <= settings.warningLength){
                $(output).css('color', settings.warningColor);
            } else {
                $(output).css('color', 'inherit');
            }
            return this;
        });
    });
    return this;
};