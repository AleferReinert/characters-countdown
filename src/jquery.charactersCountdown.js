/*! jquery.charactersCountdown v1.0.0 | */
$.fn.charactersCountdown = function(options) {

    var d = {
        output: '.characters-countdown-output',
        warningColor:   '#f00',
        warningLength:  5
    }

    var s = $.extend({}, d, options);

    return this.each(function() {

        var m     = $(this).attr('maxlength'),
            v     = $(this).attr('value'),
            c     = 0;

        if(v)
            c     = v.length;

        var l    = m-c,
            dop  = $(this).data('output'),
            dopc = ((typeof dop == undefined || typeof dop == "undefined") ? s.output : dop),
            dl  = $(this).data('warning-length'),
            dlc = ((typeof dl == undefined || typeof dl == "undefined") ? s.warningLength : dl),
            dc  = $(this).data('warning-color'),
            dcc = ((typeof dc == undefined || typeof dc == "undefined") ? s.warningColor : dc);

        $(dopc).text(l.toString());

        $(this).keyup(function(i) {
            var m = $(this).attr('maxlength'),
                v = $(this).attr('value'),
                c = 0;
            if(v)
                c = v.length;

            var l = m-c;

            $(dopc).text(l.toString());

            if(l <= dlc){
                $(dopc).css('color', dcc);
            } else {
                $(dopc).css('color', 'inherit');
            }
            return this;
        });
    });
    return this;
};