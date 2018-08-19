/*!
 * dom-ponyfills.js
 * https://github.com/yomotsu/dom-ponyfills
 * (c) 2018 @yomotsu
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.domPonyfills = {})));
}(this, (function (exports) { 'use strict';

	function matches(el, selector) {
	    if (!!Element.prototype.matches) {
	        return el.matches(selector);
	    }
	    if (!!Element.prototype.webkitMatchesSelector) {
	        return el.webkitMatchesSelector(selector);
	    }
	    if (!!Element.prototype.msMatchesSelector) {
	        return el.msMatchesSelector(selector);
	    }
	    return false;
	}

	function closest(el, selector) {
	    if (!!Element.prototype.closest) {
	        return el.closest(selector);
	    }
	    var parent = el.parentNode;
	    while (parent && parent !== document) {
	        if (matches(parent, selector))
	            return parent;
	        parent = parent.parentNode;
	    }
	    return null;
	}

	exports.matches = matches;
	exports.closest = closest;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
