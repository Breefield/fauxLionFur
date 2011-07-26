
// remember to change every instance of "fauxLionMane" to the name of your plugin!
(function($) {

    // here it goes!
    $.fn.fauxLionMane = function(method) {

        // public methods
        // to keep the $.fn namespace uncluttered, collect all of the plugin's methods in an object literal and call
        // them by passing the string name of the method to the plugin
        //
        // public methods can be called as
        // element.fauxLionMane('methodName', arg1, arg2, ... argn)
        // where "element" is the element the plugin is attached to, "fauxLionMane" is the name of your plugin and
        // "methodName" is the name of a function available in the "methods" object below; arg1 ... argn are arguments
        // to be passed to the method
        //
        // or, from inside the plugin:
        // methods.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available in the "methods" object below
        var methods = {

            // this the constructor method that gets called when the object is created
            init : function(options) {

                // the plugin's final properties are the merged default and user-provided properties (if any)
                // this has the advantage of not polluting the defaults, making them re-usable
                this.fauxLionMane.settings = $.extend({}, this.fauxLionMane.defaults, options);

                if(navigator.userAgent.match(/10_7/)) {

                    $('head').append($('<style/>', {type: 'text/css'}).html('.sc-scrollbar:before{content: "";position: absolute;width: 7px;height: 50px;top: 2px;right: 2px;border-radius: 4px;background-color: rgba(0,0,0,.5);-webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);}'));
                    // iterate through all the DOM elements we are attaching the plugin to
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

        // if a method as the given argument exists
        if (methods[method]) {

            // call the respective method
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

        // if an object is given as method OR nothing is given as argument
        } else if (typeof method === 'object' || !method) {

            // call the initialization method
            return methods.init.apply(this, arguments);

        // otherwise
        } else {

            // trigger an error
            $.error( 'Method "' +  method + '" does not exist in fauxLionMane plugin!');

        }

    }

    // plugin's default options
    $.fn.fauxLionMane.defaults = {
    }

    // this will hold the merged default and user-provided options
    // you will have access to these options like:
    // this.fauxLionMane.settings.propertyName from inside the plugin or
    // element.fauxLionMane.settings.propertyName from outside the plugin, where "element" is the element the
    // plugin is attached to;
    $.fn.fauxLionMane.settings = {}

})(jQuery);