(function ($) {
    $.fn.corner = function (options) {
        var defaults = {
            topLeftShape: 'round',
            topRightShape: 'round',
            bottomRightShape: 'round',
            bottomLeftShape: 'round',
            topLeftRadius: '1em',
            topRightRadius: '1em',
            bottomRightRadius: '1em',
            bottomLeftRadius: '1em',
            unit: 'em',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent',
            boxShadow: 'none',
            topLeftCustomPath: '',
            topRightCustomPath: '',
            bottomRightCustomPath: '',
            bottomLeftCustomPath: '',
            clipContent: false,
            borderImage: '',
            gradient: '',
            shadow: '',
            outline: '',
            animation: '',
        };

        options = $.extend({}, defaults, options);

        return this.each(function () {
            var $this = $(this);

            function createCornerStyle(corner, options) {
                var style = '';
                switch (options[corner + 'Shape']) {
                    case 'round':
                        style += 'border-radius: ' + options[corner + 'Radius'] + options.unit;
                        break;
                    case 'ellipse':
                        // Implement ellipse logic
                        break;
                    case 'custom':
                        style += 'clip-path: path("' + options[corner + 'CustomPath'] + '")';
                        break;
                }
                style += ' border-style: ' + options.borderStyle;
                style += ' border-width: ' + options.borderWidth;
                style += ' border-color: ' + options.borderColor;
                style += ' box-shadow: ' + options.boxShadow;
                style += ' border-image: ' + options.borderImage;
                style += ' background-image: ' + options.gradient;
                style += ' outline: ' + options.outline;
                style += ' animation: ' + options.animation;
                return style;
            }

            $this.css({
                'border-top-left-radius': createCornerStyle('topLeft', options),
                'border-top-right-radius': createCornerStyle('topRight', options),
                'border-bottom-right-radius': createCornerStyle('bottomRight', options),
                'border-bottom-left-radius': createCornerStyle('bottomLeft', options),
            });

            if (options.clipContent) {
                $this.css('overflow', 'hidden');
                $this.prepend('<div class="corner-clip"></div>');
                $this.find('.corner-clip').css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                });
            }
        });
    };
})(jQuery);
