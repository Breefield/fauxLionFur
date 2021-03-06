(function($) {

    $.fn.fauxLionMane = function(method) {
        var methods = {

            init : function(options) {

                this.fauxLionMane.settings = $.extend({}, this.fauxLionMane.defaults, options);

                if(navigator.userAgent.match(/10_7/)) {

                    $('head').append($('<style/>', {type: 'text/css'}).html('.sc-scrollbar:before{content: "";position: absolute;width: 7px;height: 50px;top: 2px;right: 2px;border-radius: 4px;background-color: rgba(0,0,0,.5);-webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);}'));
                    return this.each(function() {

                        var $element = $(this), // reference to the jQuery version of the current DOM element
                        element = this;     // reference to the actual DOM element

                        var contents = $element.html();
                        $element.empty();
                        $element.html('<div class="sc-contents">' + contents + '</div>');
                        var contents = $element.find('.sc-contents');
                        console.log(contents.height(), $element.height());
                        if(contents.height() > $element.height()) {
                            if(contents.width() >= $element.width()) {
                                $element.addClass('sc-scrollbar');
                                $element.bind('scroll', function() {
                                    if($element.scrollTop() <= 0) {
                                        $element.unbind('mouseleave').bind('mouseleave', function() {
                                            $element.addClass('sc-scrollbar');
                                        });
                                    } else {
                                        $element.removeClass('sc-scrollbar');
                                    }
                                });
                            }
                        }
                    
                    });
                }

            }
        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in fauxLionMane plugin!');
        }

    }

    $.fn.fauxLionMane.defaults = {}
    $.fn.fauxLionMane.settings = {}

})(jQuery);