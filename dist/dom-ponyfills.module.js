/*!
 * dom-ponyfills.js
 * https://github.com/yomotsu/dom-ponyfills
 * (c) 2018 @yomotsu
 * Released under the MIT License.
 */
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

export { matches, closest };
