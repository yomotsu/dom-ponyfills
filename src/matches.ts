export function matches( el: Element, selector: string ): boolean {

	if ( !! Element.prototype.matches ) {

		return el.matches( selector );

	}

	if ( !! Element.prototype.webkitMatchesSelector ) {

		return el.webkitMatchesSelector( selector );

	}

	if ( !! Element.prototype.msMatchesSelector ) {

		return el.msMatchesSelector( selector );

	}

	return false;

}
