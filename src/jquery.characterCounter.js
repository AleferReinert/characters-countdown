jQuery.fn.characterCountdown = function(options) {
    $(this).each(function() {
        var max     = $(this).attr('maxlength'),
            val     = $(this).attr('value'),
            cur     = 0;

        if(val)
            cur     = val.length;

        var left    = max-cur,
            output  = $(this).data('character-countdown');

        $(output).text(left.toString());

        $(this).keyup(function(i) {
            var max = $(this).attr('maxlength'),
                val = $(this).attr('value'),
                cur = 0;
            if(val)
                cur = val.length;

            var left = max-cur;

            $(output).text(left.toString());

            if(left <= 5){
                $(output).css('color', '#ff0000');
            } else {
                $(output).css('color', 'inherit');
            }
            return this;
        });
    });
    return this;
};