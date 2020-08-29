export default class ScrollSpy {
	constructor(wrapper, menu, options = {}, activeCallback = undefined) {
		if (!menu) {
			throw new Error('First argument is query selector to your navigation.')
		}

		if (typeof options !== 'object') {
			throw new Error('Second argument must be instance of Object.')
		}

		let defaultOptions = {
			sectionClass: '.scrollspy',
			menuActiveTarget: 'li > a',
			offset: 0,
			hrefAttribute: 'href',
			activeClass: 'active'
		}
		
		this.wrapper = wrapper;
		this.activeCallback = activeCallback;
		this.menuList = menu instanceof HTMLElement ? menu : this.wrapper.querySelector(menu);	 
		this.options = Object.assign({}, defaultOptions, options);	
		this.sections = this.wrapper.querySelectorAll(this.options.sectionClass); 
	}

	onScroll() {
		const section = this.getSectionInView(); 
		const menuItem = this.getMenuItemBySection(section);

		if (menuItem) {
			this.removeCurrentActive({ ignore: menuItem });
			this.setActive(menuItem);
		}
	}

	getMenuItemBySection(section) {
		if (!section || !this.menuList) return;
		const sectionId = section.getAttribute('id');
		return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${sectionId}"]`);
	}

	getSectionInView() {
		for (let i = 0; i < this.sections.length; i++) { 
			const startAt = this.sections[i].offsetTop;
			const endAt = startAt + this.sections[i].offsetHeight;
			const currentPosition = (this.wrapper.scrollTop) + this.options.offset; 
			const isInView = currentPosition > startAt && currentPosition <= endAt;
			if (isInView) return this.sections[i];
		}
	}

	setActive(activeItem) {
		const isActive = activeItem.classList.contains(this.options.activeClass)
		if (!isActive) {
			activeItem.classList.add(this.options.activeClass);
			if(this.activeCallback)
				this.activeCallback(activeItem);
		}
	}

	removeCurrentActive({ ignore }) {
		const { hrefAttribute, menuActiveTarget } = this.options
		const items = `${menuActiveTarget}.active:not([${hrefAttribute}="${ignore.getAttribute(hrefAttribute)}"])`;
		const menuItems = this.menuList.querySelectorAll(items);

		menuItems.forEach((item) => item.classList.remove(this.options.activeClass));
	}
}
