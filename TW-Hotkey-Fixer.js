// ==UserScript==
// @name         TW Hotkey-fixer
// @version      0.4
// @description  Fixes the behaviour of the TW hotkeys when on the recruiting pages
// @author       MagicLegend
// @include      https://*.tribalwars.*/game.php*
// ==/UserScript==

/** LICENCE:
 * TW Hotkey-fixer v0.2 © 2016 MagicLegend
 * This work is under the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) Licence.
 * More info can be found here: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en (Human readable, not the actual licence) & https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode (Actual licence)
 *
 * v0.1		Initial work, first working version
 * v0.2     Added scrolling to the w and s buttons
 * v0.3     Added a backspace function to the numpad .
 * v0.4     Fixed the . removing two characters because of a character limit on the inputbox. Also added a reworked version with a function to remove the character, but it seems too fast for the browser to register. Might get fixed one day.
 */

if (location.href.match(/(nl|zz|en).*\.tribalwars\.(nl|net)\/game\.php(\?|.*\&)screen\=train(\?|.*\&)mode\=train/)) {
    $(".vis").keydown(function (e) {
        //console.log("Handler for .keydown() called.");
        switch(e.which) {
            case 65:
                console.log("a");
                var direction = $("#village_switch_left").attr("href");
                document.location.replace(direction);
            break;
            case 68:
                console.log("d");
                var direction = $("#village_switch_right").attr("href");
                document.location.replace(direction);
            break;
            case 83:
                console.log("s");
                window.scrollTo(0,document.body.scrollHeight);
                setTimeout(
                    function() {
                        $('input:focus').val(
                            function(index, value){
                                return value.substr(0, value.length - 1);
                            }
                        );
                    }, 20);
                break;
            case 87:
                console.log("w");
                window.scrollTo(0, 0);
                break;
            case 110:
                setTimeout(
                    function() {
                        $('input:focus').val(
                            function(index, value){
                                if (value.indexOf(".") > 0) {
                                    return value.substr(0, value.length - 2);
                                } else {
                                    return value.substr(0, value.length - 1);
                                }
                            }
                        );
                    }, 20);
                break;
        }
    });
}

/*
if (location.href.match(/(nl|zz|en).*\.tribalwars\.(nl|net)\/game\.php(\?|.*\&)screen\=train(\?|.*\&)mode\=train/)) {
    $(".vis").keydown(function (e) {
        console.log("Handler for .keydown() called.");
        switch(e.which) {
            case 65:
                console.log("a");
                var direction = $("#village_switch_left").attr("href");
                document.location.replace(direction);
            break;
            case 68:
                console.log("d");
                var direction = $("#village_switch_right").attr("href");
                document.location.replace(direction);
            break;
            case 83:
                console.log("s");
                window.scrollTo(0,document.body.scrollHeight);
                setTimeout(removeChar(1), 20);
                break;
            case 87:
                console.log("w");
                window.scrollTo(0, 0);
                break;
            case 110:
                setTimeout(removeChar(2), 250);
                break;
        }
    });
}

function removeChar(amount) {
    $('input:focus').val(
        function(index, value){
            return value.substr(0, value.length - amount);
        }
    );
}*/
