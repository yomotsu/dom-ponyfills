import { matches } from './matches';

export function closest( el: HTMLElement, selector: string ): Element | null {

	if ( !! Element.prototype.closest ) {

		return el.closest( selector );

	}

	let parent: Node | null = el.parentNode;

	while ( parent && parent !== document ) {

		if ( matches( parent as Element, selector ) ) return parent as Element;

		parent = parent.parentNode;

	}

	return null;

}
