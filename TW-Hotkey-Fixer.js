// ==UserScript==
// @name         TW Hotkey-fixer
// @version      0.1
// @description  Fixes the behaviour of the TW hotkeys when on the recruiting pages
// @author       MagicLegend
// @include      https://*.tribalwars.*/game.php*
// ==/UserScript==

/** LICENCE:
 * TW Hotkey-fixer v0.1 © 2016 MagicLegend
 * This work is under the Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) Licence.
 * More info can be found here: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en (Human readable, not the actual licence) & https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode (Actual licence)
 *
 * v0.1		Initial work, first working version
 */

if (location.href.match(/(nl|zz|en).*\.tribalwars\.(nl|net)\/game\.php(\?|.*\&)screen\=train(\?|.*\&)mode\=train/)) {
    $(".vis").keydown(function (e) {
        console.log("Handler for .keydown() called.");
        if (e.which == 65) {
            console.log("a");
            var direction = $("#village_switch_right").attr("href");
            document.location.replace(direction);
        } else if (e.which == 68) {
            console.log("d");
            var direction = $("#village_switch_left").attr("href");
            document.location.replace(direction);
        } else if (e.which == 83) {
            console.log("s");
            window.scrollTo(0,document.body.scrollHeight);
        } else if (e.which == 87) {
            console.log("w");
            window.scrollTo(0, 0);
        };
    });
};
