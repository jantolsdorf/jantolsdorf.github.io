import { m as getSharedResource, k as getFeature, s as scopedHtml, a as styleMap, h as classMap, i as ifDefined, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, n as createStyleInHead, U as UI5Element, l as litRender, o as renderFinished, D as DataType, I as Integer } from './Icons-85d4abff.js';
import { o as isEscape, e as isTabPrevious } from './i18n-defaults-dca87248.js';

let resizeObserver;
const observedElements = new Map();

const getResizeObserver = () => {
	if (!resizeObserver) {
		resizeObserver = new window.ResizeObserver(entries => {
			entries.forEach(entry => {
				const callbacks = observedElements.get(entry.target);
				callbacks.forEach(callback => callback());
			});
		});
	}
	return resizeObserver;
};

let observe = (element, callback) => {
	const callbacks = observedElements.get(element) || [];

	// if no callbacks have been added for this element - start observing it
	if (!callbacks.length) {
		getResizeObserver().observe(element);
	}

	// save the callbacks in an array
	observedElements.set(element, [...callbacks, callback]);
};

let unobserve = (element, callback) => {
	const callbacks = observedElements.get(element) || [];
	if (callbacks.length === 0) {
		return;
	}

	const filteredCallbacks = callbacks.filter(fn => fn !== callback);
	if (filteredCallbacks.length === 0) {
		getResizeObserver().unobserve(element);
		observedElements.delete(element);
	} else {
		observedElements.set(element, filteredCallbacks);
	}
};

/**
 * Allows to register/deregister resize observers for a DOM element
 *
 * @public
 * @class
  */
class ResizeHandler {
	/**
	 * @static
	 * @public
	 * @param {*} element UI5 Web Component or DOM Element to be observed
	 * @param {*} callback Callback to be executed
	 */
	static register(element, callback) {
		if (element.isUI5Element) {
			element = element.getDomRef();
		}

		if (element instanceof HTMLElement) {
			observe(element, callback);
		} else {
			console.warn("Cannot register ResizeHandler for element", element); // eslint-disable-line
		}
	}

	/**
	 * @static
	 * @public
	 * @param {*} element UI5 Web Component or DOM Element to be unobserved
	 * @param {*} callback Callback to be removed
	 */
	static deregister(element, callback) {
		if (element.isUI5Element) {
			element = element.getDomRef();
		}

		if (element instanceof HTMLElement) {
			unobserve(element, callback);
		} else {
			console.warn("Cannot deregister ResizeHandler for element", element); // eslint-disable-line
		}
	}
}

/**
 * Set a function to be executed whenever a DOM node needs to be observed for size change.
 * @public
 * @param fn
 */
const setResizeHandlerObserveFn = fn => {
	observe = fn;
};

/**
 * Set a function to be executed whenever a DOM node needs to no longer be observed for size changes
 * @public
 * @param fn
 */
const setResizeHandlerUnobserveFn = fn => {
	unobserve = fn;
};

const getActiveElement = () => {
	let element = document.activeElement;

	while (element && element.shadowRoot && element.shadowRoot.activeElement) {
		element = element.shadowRoot.activeElement;
	}

	return element;
};

const isNodeHidden = node => {
	if (node.nodeName === "SLOT") {
		return false;
	}

	return (node.offsetWidth <= 0 && node.offsetHeight <= 0) || node.style.visibility === "hidden";
};

const PopupUtilsData = getSharedResource("PopupUtilsData", {});
PopupUtilsData.currentZIndex = PopupUtilsData.currentZIndex || 100;

const getFocusedElement = () => {
	const element = getActiveElement();
	return (element && typeof element.focus === "function") ? element : null;
};

const isFocusedElementWithinNode = node => {
	const fe = getFocusedElement();

	if (fe) {
		return isNodeContainedWithin(node, fe);
	}

	return false;
};

const isNodeContainedWithin = (parent, child) => {
	let currentNode = parent;

	if (currentNode.shadowRoot) {
		currentNode = Array.from(currentNode.shadowRoot.children).find(n => n.localName !== "style");
	}

	if (currentNode === child) {
		return true;
	}

	const childNodes = currentNode.localName === "slot" ? currentNode.assignedNodes() : currentNode.children;

	if (childNodes) {
		return Array.from(childNodes).some(n => isNodeContainedWithin(n, child));
	}
};

const isPointInRect = (x, y, rect) => {
	return x >= rect.left && x <= rect.right
		&& y >= rect.top && y <= rect.bottom;
};

const isClickInRect = (event, rect) => {
	let x;
	let y;

	if (event.touches) {
		const touch = event.touches[0];
		x = touch.clientX;
		y = touch.clientY;
	} else {
		x = event.clientX;
		y = event.clientY;
	}

	return isPointInRect(x, y, rect);
};

const getClosedPopupParent = el => {
	const parent = el.parentElement || (el.getRootNode && el.getRootNode().host);

	if (parent && ((parent.openBy && parent.isUI5Element) || (parent.open && parent.isUI5Element) || parent === document.documentElement)) {
		return parent;
	}

	return getClosedPopupParent(parent);
};

const getNextZIndex = () => {
	const OpenUI5Support = getFeature("OpenUI5Support");
	if (OpenUI5Support && OpenUI5Support.isLoaded()) { // use OpenUI5 for getting z-index values, if loaded
		return OpenUI5Support.getNextZIndex();
	}

	PopupUtilsData.currentZIndex += 2;
	return PopupUtilsData.currentZIndex;
};

const getCurrentZIndex = () => {
	return PopupUtilsData.currentZIndex;
};

/**
 * Returns a value clamped between an upper bound 'max' and lower bound 'min'.
 * @param {number} val value
 * @param {number} min lower bound
 * @param {number} max upper bound
 * @returns {number}
 */
const clamp = (val, min, max) => {
	return Math.min(Math.max(val, min), max);
};

const rClickable = /^(?:a|area)$/i;
const rFocusable = /^(?:input|select|textarea|button)$/i;

const isNodeClickable = node => {
	if (node.disabled) {
		return false;
	}

	const tabIndex = node.getAttribute("tabindex");
	if (tabIndex !== null && tabIndex !== undefined) {
		return parseInt(tabIndex) >= 0;
	}

	return rFocusable.test(node.nodeName)
		|| (rClickable.test(node.nodeName)
		&& node.href);
};

const isFocusTrap = el => {
	return el.hasAttribute("data-ui5-focus-trap");
};

const getFirstFocusableElement = async container => {
	if (!container || isNodeHidden(container)) {
		return null;
	}

	return findFocusableElement(container, true);
};

const getLastFocusableElement = async container => {
	if (!container || isNodeHidden(container)) {
		return null;
	}

	return findFocusableElement(container, false);
};

const findFocusableElement = async (container, forward) => {
	let child;

	if (container.shadowRoot) {
		child = forward ? container.shadowRoot.firstChild : container.shadowRoot.lastChild;
	} else if (container.assignedNodes && container.assignedNodes()) {
		const assignedElements = container.assignedNodes();
		child = forward ? assignedElements[0] : assignedElements[assignedElements.length - 1];
	} else {
		child = forward ? container.firstChild : container.lastChild;
	}

	let focusableDescendant;

	/* eslint-disable no-await-in-loop */

	while (child) {
		const originalChild = child;

		if (child.isUI5Element) {
			child = await child.getFocusDomRefAsync();
		}

		if (!child) {
			return null;
		}

		if (child.nodeType === 1 && !isNodeHidden(child) && !isFocusTrap(child)) {
			if (isNodeClickable(child)) {
				return (child && typeof child.focus === "function") ? child : null;
			}

			focusableDescendant = await findFocusableElement(child, forward);
			if (focusableDescendant) {
				return (focusableDescendant && typeof focusableDescendant.focus === "function") ? focusableDescendant : null;
			}
		}

		child = forward ? originalChild.nextSibling : originalChild.previousSibling;
	}

	/* eslint-enable no-await-in-loop */

	return null;
};

const block0$2 = (context) => { return scopedHtml`<section style="${styleMap(context.styles.root)}" class="${classMap(context.classes.root)}" role="dialog" aria-modal="${ifDefined(context._ariaModal)}" aria-label="${ifDefined(context._ariaLabel)}" aria-labelledby="${ifDefined(context._ariaLabelledBy)}" dir="${ifDefined(context.effectiveDir)}" tabindex="-1" @keydown=${context._onkeydown} @focusout=${context._onfocusout}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToLast}></span><div style="${styleMap(context.styles.content)}" class="${classMap(context.classes.content)}"  @scroll="${context._scroll}"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToFirst}></span></section> `; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

const block0$1 = (context) => { return scopedHtml`<div class="ui5-block-layer" ?hidden=${context._blockLayerHidden} tabindex="1" style="${styleMap(context.styles.blockLayer)}" @keydown="${context._preventBlockLayerFocus}" @mousedown="${context._preventBlockLayerFocus}"></div>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

let openedRegistry$1 = [];

const addOpenedPopup = (instance, parentPopovers = []) => {
	if (!openedRegistry$1.includes(instance)) {
		openedRegistry$1.push({
			instance,
			parentPopovers,
		});
	}

	if (openedRegistry$1.length === 1) {
		attachGlobalListener();
	}
};

const removeOpenedPopup = instance => {
	openedRegistry$1 = openedRegistry$1.filter(el => {
		return el.instance !== instance;
	});

	if (!openedRegistry$1.length) {
		detachGlobalListener();
	}
};

const getOpenedPopups = () => {
	return [...openedRegistry$1];
};

const _keydownListener = event => {
	if (!openedRegistry$1.length) {
		return;
	}

	if (isEscape(event)) {
		openedRegistry$1.pop().instance.close(true);
	}
};

const attachGlobalListener = () => {
	document.addEventListener("keydown", _keydownListener);
};

const detachGlobalListener = () => {
	document.removeEventListener("keydown", _keydownListener);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles = ":host{min-width:1px;display:none;position:fixed}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const staticAreaStyles = ".ui5-block-layer{display:none;position:fixed;background-color:var(--sapBlockLayer_Background);opacity:.6;top:-500px;left:-500px;right:-500px;bottom:-500px;outline:none;pointer-events:all;z-index:-1}.ui5-block-layer:not([hidden]){display:inline-block}";

/**
 * @public
 */
const metadata$1 = {
	managedSlots: true,
	slots: /** @lends  sap.ui.webcomponents.main.Popup.prototype */ {

		/**
		 * Defines the content of the Popup.
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: HTMLElement,
			propertyName: "content",
		},
	},
	properties: /** @lends  sap.ui.webcomponents.main.Popup.prototype */ {
		/**
		 * Defines the ID of the HTML Element, which will get the initial focus.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		initialFocus: {
			type: String,
		},

		/**
		 * Defines if the focus should be returned to the previously focused element,
		 * when the popup closes.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.8
		*/
		preventFocusRestore: {
			type: Boolean,
		},

		/**
		 * Indicates if the element is open
		 * @private
		 * @type {boolean}
		 * @defaultvalue false
		 */
		opened: {
			type: Boolean,
		},

		/**
		 * Defines the aria-label attribute for the popup
		 *
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.8
		 */
		ariaLabel: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * @private
		 */
		_disableInitialFocus: {
			type: Boolean,
		},

		_blockLayerHidden: {
			type: Boolean,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.Popup.prototype */ {

		/**
		 * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.
		 *
		 * @public
		 * @event sap.ui.webcomponents.main.Popup#before-open
		 * @allowPreventDefault
		 */
		"before-open": {},

		/**
		 * Fired after the component is opened. This event does not bubble.
		 *
		 * @public
		 * @event sap.ui.webcomponents.main.Popup#after-open
		 */
		"after-open": {},

		/**
		 * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. This event does not bubble.
		 *
		 * @public
		 * @event sap.ui.webcomponents.main.Popup#before-close
		 * @allowPreventDefault
		 * @param {boolean} escPressed Indicates that <code>ESC</code> key has triggered the event.
		 */
		"before-close": {
			detail: {
				escPressed: { type: Boolean },
			},
		},

		/**
		 * Fired after the component is closed. This event does not bubble.
		 *
		 * @public
		 * @event sap.ui.webcomponents.main.Popup#after-close
		 */
		"after-close": {},

		/**
		 * Fired whenever the popup content area is scrolled
		 *
		 * @private
		 * @event sap.ui.webcomponents.main.Popup#scroll
		 */
		"scroll": {},
	},
};

let customBlockingStyleInserted = false;

const createBlockingStyle = () => {
	if (customBlockingStyleInserted) {
		return;
	}

	createStyleInHead(`
		.ui5-popup-scroll-blocker {
			width: 100%;
			height: 100%;
			position: fixed;
			overflow: hidden;
		}
	`, { "data-ui5-popup-scroll-blocker": "" });

	customBlockingStyleInserted = true;
};

createBlockingStyle();

/**
 * @class
 * <h3 class="comment-api-title">Overview</h3>
 * Base class for all popup Web Components.
 *
 * If you need to create your own popup-like custom UI5 Web Components, it is highly recommended that you extend
 * at least Popup in order to have consistency with other popups in terms of modal behavior and z-index management.
 *
 * 1. The Popup class handles modality:
 *  - The "isModal" getter can be overridden by derivatives to provide their own conditions when they are modal or not
 *  - Derivatives may call the "blockBodyScrolling" and "unblockBodyScrolling" static methods to temporarily remove scrollbars on the body
 *  - Derivatives may call the "open" and "close" methods which handle focus, manage the popup registry and for modal popups, manage the blocking layer
 *
 *  2. Provides blocking layer (relevant for modal popups only):
 *   - It is in the static area
 *   - Controlled by the "open" and "close" methods
 *
 * 3. The Popup class "traps" focus:
 *  - Derivatives may call the "applyInitialFocus" method (usually when opening, to transfer focus inside the popup)
 *
 * 4. The Popup class automatically assigns "z-index"
 *  - Each time a popup is opened, it gets a higher than the previously opened popup z-index
 *
 * 5. The template of this component exposes two inline partials you can override in derivatives:
 *  - beforeContent (upper part of the box, useful for header/title/close button)
 *  - afterContent (lower part, useful for footer/action buttons)
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Popup
 * @extends sap.ui.webcomponents.base.UI5Element
 * @public
 */
class Popup extends UI5Element {
	static get metadata() {
		return metadata$1;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return styles;
	}

	static get template() {
		return main$2;
	}

	static get staticAreaTemplate() {
		return main$1;
	}

	static get staticAreaStyles() {
		return staticAreaStyles;
	}

	onEnterDOM() {
		if (!this.isOpen()) {
			this._blockLayerHidden = true;
		}
	}

	onExitDOM() {
		if (this.isOpen()) {
			Popup.unblockBodyScrolling();
			this._removeOpenedPopup();
		}
	}

	get _displayProp() {
		return "block";
	}

	/**
	 * Prevents the user from interacting with the content under the block layer
	 */
	_preventBlockLayerFocus(event) {
		event.preventDefault();
	}

	/**
	 * Temporarily removes scrollbars from the body
	 * @protected
	 */
	static blockBodyScrolling() {
		document.body.style.top = `-${window.pageYOffset}px`;
		document.body.classList.add("ui5-popup-scroll-blocker");
	}

	/**
	 * Restores scrollbars on the body, if needed
	 * @protected
	 */
	static unblockBodyScrolling() {
		document.body.classList.remove("ui5-popup-scroll-blocker");
		window.scrollTo(0, -parseFloat(document.body.style.top));
		document.body.style.top = "";
	}

	_scroll(e) {
		this.fireEvent("scroll", {
			scrollTop: e.target.scrollTop,
			targetRef: e.target,
		});
	}

	_onkeydown(e) {
		if (e.target === this._root && isTabPrevious(e)) {
			e.preventDefault();
		}
	}

	_onfocusout(e) {
		// relatedTarget is the element, which will get focus. If no such element exists, focus the root
		if (!e.relatedTarget) {
			this._root.focus();
		}
	}

	/**
	 * Focus trapping
	 * @private
	 */
	async forwardToFirst() {
		const firstFocusable = await getFirstFocusableElement(this);

		if (firstFocusable) {
			firstFocusable.focus();
		} else {
			this._root.focus();
		}
	}

	/**
	 * Focus trapping
	 * @private
	 */
	async forwardToLast() {
		const lastFocusable = await getLastFocusableElement(this);

		if (lastFocusable) {
			lastFocusable.focus();
		} else {
			this._root.focus();
		}
	}

	/**
	 * Use this method to focus the element denoted by "initialFocus", if provided, or the first focusable element otherwise.
	 * @protected
	 */
	async applyInitialFocus() {
		await this.applyFocus();
	}

	/**
	 * Focuses the element denoted by <code>initialFocus</code>, if provided,
	 * or the first focusable element otherwise.
	 * @public
	 * @async
	 * @returns {Promise} Promise that resolves when the focus is applied
	 */
	async applyFocus() {
		await this._waitForDomRef();

		const element = this.getRootNode().getElementById(this.initialFocus)
			|| document.getElementById(this.initialFocus)
			|| await getFirstFocusableElement(this)
			|| this._root; // in case of no focusable content focus the root

		if (element) {
			element.focus();
		}
	}

	/**
	 * Tells if the component is open
	 * @public
	 * @returns {boolean}
	 */
	isOpen() {
		return this.opened;
	}

	isFocusWithin() {
		return isFocusedElementWithinNode(this.shadowRoot.querySelector(".ui5-popup-root"));
	}

	/**
	 * Shows the block layer (for modal popups only) and sets the correct z-index for the purpose of popup stacking
	 * @protected
	 */
	async open(preventInitialFocus) {
		const prevented = !this.fireEvent("before-open", {}, true, false);
		if (prevented) {
			return;
		}

		if (this.isModal && !this.shouldHideBackdrop) {
			// create static area item ref for block layer
			this.getStaticAreaItemDomRef();
			this._blockLayerHidden = false;
			Popup.blockBodyScrolling();
		}

		this._zIndex = getNextZIndex();
		this.style.zIndex = this._zIndex;
		this._focusedElementBeforeOpen = getFocusedElement();

		this.show();

		if (!this._disableInitialFocus && !preventInitialFocus) {
			this.applyInitialFocus();
		}

		this._addOpenedPopup();

		this.opened = true;

		await renderFinished();
		this.fireEvent("after-open", {}, false, false);
	}

	/**
	 * Adds the popup to the "opened popups registry"
	 * @protected
	 */
	_addOpenedPopup() {
		addOpenedPopup(this);
	}

	/**
	 * Hides the block layer (for modal popups only)
	 * @public
	 */
	close(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
		if (!this.opened) {
			return;
		}

		const prevented = !this.fireEvent("before-close", { escPressed }, true, false);
		if (prevented) {
			return;
		}

		if (this.isModal) {
			this._blockLayerHidden = true;
			Popup.unblockBodyScrolling();
		}

		this.hide();
		this.opened = false;

		if (!preventRegistryUpdate) {
			this._removeOpenedPopup();
		}

		if (!this.preventFocusRestore && !preventFocusRestore) {
			this.resetFocus();
		}

		this.fireEvent("after-close", {}, false, false);
	}

	/**
	 * Removes the popup from the "opened popups registry"
	 * @protected
	 */
	_removeOpenedPopup() {
		removeOpenedPopup(this);
	}

	/**
	 * Returns the focus to the previously focused element
	 * @protected
	 */
	resetFocus() {
		if (!this._focusedElementBeforeOpen) {
			return;
		}

		this._focusedElementBeforeOpen.focus();
		this._focusedElementBeforeOpen = null;
	}

	/**
	 * Sets "block" display to the popup. The property can be overriden by derivatives of Popup.
	 * @protected
	 */
	show() {
		this.style.display = this._displayProp;
	}

	/**
	 * Sets "none" display to the popup
	 * @protected
	 */
	hide() {
		this.style.display = "none";
	}

	/**
	 * Implement this getter with relevant logic regarding the modality of the popup (e.g. based on a public property)
	 *
	 * @protected
	 * @abstract
	 * @returns {boolean}
	 */
	get isModal() {} // eslint-disable-line

	/**
	 * Implement this getter with relevant logic in order to hide the block layer (f.e. based on a public property)
	 *
	 * @protected
	 * @abstract
	 * @returns {boolean}
	 */
	get shouldHideBackdrop() {} // eslint-disable-line

	/**
	 * Return the ID of an element in the shadow DOM that is going to label this popup
	 *
	 * @protected
	 * @abstract
	 * @returns {String}
	 */
	get _ariaLabelledBy() {} // eslint-disable-line

	/**
	 * Return the value for aria-modal for this popup
	 *
	 * @protected
	 * @abstract
	 * @returns {String}
	 */
	get _ariaModal() {} // eslint-disable-line

	/**
	 * Ensures ariaLabel is never null or empty string
	 * @returns {String|undefined}
	 * @protected
	 */
	get _ariaLabel() {
		return this.ariaLabel || undefined;
	}

	get _root() {
		return this.shadowRoot.querySelector(".ui5-popup-root");
	}

	get styles() {
		return {
			root: {},
			content: {},
			blockLayer: {
				"zIndex": (this._zIndex - 1),
			},
		};
	}

	get classes() {
		return {
			root: {
				"ui5-popup-root": true,
			},
			content: {
				"ui5-popup-content": true,
			},
		};
	}
}

/**
 * @lends sap.ui.webcomponents.main.types.PopoverPlacementType.prototype
 * @public
 */
const PopoverPlacementTypes = {
	/**
	 * Popover will be placed at the left side of the reference element.
	 * @public
	 * @type {Left}
	 */
	Left: "Left",

	/**
	 * Popover will be placed at the right side of the reference element.
	 * @public
	 * @type {Right}
	 */
	Right: "Right",

	/**
	 * Popover will be placed at the top of the reference element.
	 * @public
	 * @type {Top}
	 */
	Top: "Top",

	/**
	 * Popover will be placed at the bottom of the reference element.
	 * @public
	 * @type {Bottom}
	 */
	Bottom: "Bottom",
};

/**
 * @class
 * Types for the placement of Popover control.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.PopoverPlacementType
 * @public
 * @enum {string}
 */
class PopoverPlacementType extends DataType {
	static isValid(value) {
		return !!PopoverPlacementTypes[value];
	}
}

PopoverPlacementType.generateTypeAccessors(PopoverPlacementTypes);

/**
 * @lends sap.ui.webcomponents.main.types.PopoverVerticalAlign.prototype
 * @public
 */
const PopoverVerticalAligns = {
	/**
	 *
	 * @public
	 * @type {Center}
	 */
	Center: "Center",

	/**
	 * Popover will be placed at the top of the reference control.
	 * @public
	 * @type {Top}
	 */
	Top: "Top",

	/**
	 * Popover will be placed at the bottom of the reference control.
	 * @public
	 * @type {Bottom}
	 */
	Bottom: "Bottom",

	/**
	 * Popover will be streched
	 * @public
	 * @type {Stretch}
	 */
	Stretch: "Stretch",
};

/**
 * @class
 * Types for the placement of message Popover control.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.PopoverVerticalAlign
 * @public
 * @enum {string}
 */
class PopoverVerticalAlign extends DataType {
	static isValid(value) {
		return !!PopoverVerticalAligns[value];
	}
}

PopoverVerticalAlign.generateTypeAccessors(PopoverVerticalAligns);

/**
 * @lends sap.ui.webcomponents.main.types.PopoverHorizontalAlign.prototype
 * @public
 */
const PopoverHorizontalAligns = {
	/**
	 * Popover is centered
	 * @public
	 * @type {Center}
	 */
	Center: "Center",

	/**
	 * Popover opens on the left side of the target
	 * @public
	 * @type {Left}
	 */
	Left: "Left",

	/**
	 * Popover opens on the right side of the target
	 * @public
	 * @type {Right}
	 */
	Right: "Right",

	/**
	 * Popover is stretched
	 * @public
	 * @type {Stretch}
	 */
	Stretch: "Stretch",
};

/**
 * @class
 * Defines the horizontal alignment of <code>ui5-popover</code>
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.PopoverHorizontalAlign
 * @public
 * @enum {string}
 */
class PopoverHorizontalAlign extends DataType {
	static isValid(value) {
		return !!PopoverHorizontalAligns[value];
	}
}

PopoverHorizontalAlign.generateTypeAccessors(PopoverHorizontalAligns);

let updateInterval = null;
const intervalTimeout = 300;
const openedRegistry = [];

const repositionPopovers = event => {
	openedRegistry.forEach(popover => {
		popover.instance.reposition();
	});
};

const attachGlobalScrollHandler = () => {
	document.body.addEventListener("scroll", repositionPopovers, true);
};

const detachGlobalScrollHandler = () => {
	document.body.removeEventListener("scroll", repositionPopovers, true);
};

const runUpdateInterval = () => {
	updateInterval = setInterval(() => {
		repositionPopovers();
	}, intervalTimeout);
};

const stopUpdateInterval = () => {
	clearInterval(updateInterval);
};

const attachGlobalClickHandler = () => {
	document.addEventListener("mousedown", clickHandler);
};

const detachGlobalClickHandler = () => {
	document.removeEventListener("mousedown", clickHandler);
};

const clickHandler = event => {
	const openedPopups = getOpenedPopups();
	const isTopPopupPopover = openedPopups[openedPopups.length - 1].instance.openBy;

	if (openedPopups.length === 0 || !isTopPopupPopover) {
		return;
	}

	// loop all open popovers
	for (let i = (openedPopups.length - 1); i !== -1; i--) {
		const popup = openedPopups[i].instance;

		// if popup is modal, opener is clicked, popup is dialog skip closing
		if (popup.isModal || popup.isOpenerClicked(event)) {
			return;
		}

		if (isClickInRect(event, popup.getBoundingClientRect())) {
			break;
		}

		popup.close();
	}
};

const attachScrollHandler = popover => {
	popover && popover.shadowRoot.addEventListener("scroll", repositionPopovers, true);
};

const detachScrollHandler = popover => {
	popover && popover.shadowRoot.removeEventListener("scroll", repositionPopovers);
};

const addOpenedPopover = instance => {
	const parentPopovers = getParentPopoversIfNested(instance);

	addOpenedPopup(instance, parentPopovers);
	openedRegistry.push({
		instance,
		parentPopovers,
	});

	attachScrollHandler(instance);

	if (openedRegistry.length === 1) {
		attachGlobalScrollHandler();
		attachGlobalClickHandler();
		runUpdateInterval();
	}
};

const removeOpenedPopover = instance => {
	const popoversToClose = [instance];

	for (let i = 0; i < openedRegistry.length; i++) {
		const indexOfCurrentInstance = openedRegistry[i].parentPopovers.indexOf(instance);
		if (openedRegistry[i].parentPopovers.length > 0 && indexOfCurrentInstance > -1) {
			popoversToClose.push(openedRegistry[i].instance);
		}
	}

	for (let i = popoversToClose.length - 1; i >= 0; i--) {
		for (let j = 0; j < openedRegistry.length; j++) {
			let indexOfItemToRemove;
			if (popoversToClose[i] === openedRegistry[j].instance) {
				indexOfItemToRemove = j;
			}

			if (indexOfItemToRemove >= 0) {
				removeOpenedPopup(openedRegistry[indexOfItemToRemove].instance);
				detachScrollHandler(openedRegistry[indexOfItemToRemove].instance);
				const itemToClose = openedRegistry.splice(indexOfItemToRemove, 1);
				itemToClose[0].instance.close(false, true);
			}
		}
	}

	if (!openedRegistry.length) {
		detachGlobalScrollHandler();
		detachGlobalClickHandler();
		stopUpdateInterval();
	}
};

const getRegistry = () => {
	return openedRegistry;
};

const getParentPopoversIfNested = instance => {
	let currentElement = instance.parentNode;
	const parentPopovers = [];

	while (currentElement.parentNode) {
		for (let i = 0; i < openedRegistry.length; i++) {
			if (currentElement && currentElement === openedRegistry[i].instance) {
				parentPopovers.push(currentElement);
			}
		}

		currentElement = currentElement.parentNode;
	}

	return parentPopovers;
};

const block0 = (context) => { return scopedHtml`<section style="${styleMap(context.styles.root)}" class="${classMap(context.classes.root)}" role="dialog" aria-modal="${ifDefined(context._ariaModal)}" aria-label="${ifDefined(context._ariaLabel)}" aria-labelledby="${ifDefined(context._ariaLabelledBy)}" dir="${ifDefined(context.effectiveDir)}" tabindex="-1" @keydown=${context._onkeydown} @focusout=${context._onfocusout}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(context.styles.arrow)}"></span>${ context._displayHeader ? block1(context) : undefined }<div style="${styleMap(context.styles.content)}" class="${classMap(context.classes.content)}"  @scroll="${context._scroll}"><slot></slot></div>${ context._displayFooter ? block4(context) : undefined }<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToFirst}></span></section> `; };
const block1 = (context) => { return scopedHtml`<header class="ui5-popup-header-root" id="ui5-popup-header">${ context.header.length ? block2(context) : block3(context) }</header>`; };
const block2 = (context) => { return scopedHtml`<slot name="header"></slot>`; };
const block3 = (context) => { return scopedHtml`<h2 class="ui5-popup-header-text">${ifDefined(context.headerText)}</h2>`; };
const block4 = (context) => { return scopedHtml`${ context.footer.length ? block5(context) : undefined }`; };
const block5 = (context) => { return scopedHtml`<footer class="ui5-popup-footer-root"><slot name="footer"></slot></footer>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const browserScrollbarCSS = "::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor)}::-webkit-scrollbar-thumb{background-color:var(--sapScrollBar_FaceColor)}::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const PopupsCommonCss = ":host{display:none;position:fixed;min-width:6.25rem;background:var(--sapGroup_ContentBackground);box-shadow:var(--sapContent_Shadow2);border-radius:.25rem;min-height:2rem;box-sizing:border-box}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;max-height:94vh;max-width:90vw;outline:none}@media screen and (-ms-high-contrast:active){.ui5-popup-root{border:1px solid var(--sapPageFooter_BorderColor)}}.ui5-popup-root .ui5-popup-header-root{box-shadow:var(--sapContent_Shadow0);margin-bottom:.125rem}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-footer-root,.ui5-popup-header-root,:host([header-text]) .ui5-popup-header-text{margin:0;color:var(--sapPageHeader_TextColor);font-size:1rem;font-weight:400;font-family:\"72override\",var(--sapFontFamily);display:flex;justify-content:center;align-items:center}.ui5-popup-content{overflow:auto;padding:var(--_ui5_popup_content_padding);box-sizing:border-box}:host([no-padding]) .ui5-popup-content{padding:0}:host([header-text]) .ui5-popup-header-text{padding:0 .25rem;text-align:center;min-height:3rem;max-height:3rem;line-height:3rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([disable-scrolling]) .ui5-popup-content{overflow:hidden}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const PopoverCss = ".ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:\"\";display:block;width:.7rem;height:.7rem;background-color:var(--sapGroup_ContentBackground);box-shadow:var(--sapContent_Shadow3);transform:rotate(-45deg)}:host([actual-placement-type=Bottom]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5625rem}:host([actual-placement-type=Bottom]) .ui5-popover-arrow:after{margin:.1875rem 0 0 .1875rem}:host([actual-placement-type=Left]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement-type=Left]) .ui5-popover-arrow:after{margin:.1875rem 0 0 -.375rem}:host([actual-placement-type=Left]) [dir=rtl] .ui5-popover-arrow:after{margin:.1875rem .25rem 0 0}:host([actual-placement-type=Bottom]) [dir=rtl] .ui5-popover-arrow:after{margin:.1875rem .125rem 0 0}:host([actual-placement-type=Top]) [dir=rtl] .ui5-popover-arrow:after{margin:-.4375rem .125rem 0 0}:host([actual-placement-type=Top]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;bottom:calc(var(--_ui5_popup_content_padding)*-1 + -2px)}:host([actual-placement-type=Top]) .ui5-popover-arrow:after{margin:-.375rem 0 0 .125rem}:host(:not([actual-placement-type])) .ui5-popover-arrow,:host([actual-placement-type=Right]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement-type])) .ui5-popover-arrow:after,:host([actual-placement-type=Right]) .ui5-popover-arrow:after{margin:.125rem 0 0 .25rem}:host(:not([actual-placement-type])) [dir=rtl] .ui5-popover-arrow:after,:host([actual-placement-type=Right]) [dir=rtl] .ui5-popover-arrow:after{margin:.1875rem -.375rem 0 0}:host([no-arrow]) .ui5-popover-arrow{display:none}";

const arrowSize = 8;

/**
 * @public
 */
const metadata = {
	tag: "ui5-popover",
	properties: /** @lends sap.ui.webcomponents.main.Popover.prototype */ {
		/**
		 * Defines the header text.
		 * <br><br>
		 * <b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		headerText: {
			type: String,
		},

		/**
		 * Determines on which side the <code>ui5-popover</code> is placed at.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Left</code></li>
		 * <li><code>Right</code></li>
		 * <li><code>Top</code></li>
		 * <li><code>Bottom</code></li>
		 * </ul>
		 *
		 * @type {PopoverPlacementType}
		 * @defaultvalue "Right"
		 * @public
		 */
		placementType: {
			type: PopoverPlacementType,
			defaultValue: PopoverPlacementType.Right,
		},

		/**
		 * Determines the horizontal alignment of the <code>ui5-popover</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Center</code></li>
		 * <li><code>Left</code></li>
		 * <li><code>Right</code></li>
		 * <li><code>Stretch</code></li>
		 * </ul>
		 *
		 * @type {PopoverHorizontalAlign}
		 * @defaultvalue "Center"
		 * @public
		 */
		horizontalAlign: {
			type: PopoverHorizontalAlign,
			defaultValue: PopoverHorizontalAlign.Center,
		},

		/**
		 * Determines the vertical alignment of the <code>ui5-popover</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Center</code></li>
		 * <li><code>Top</code></li>
		 * <li><code>Bottom</code></li>
		 * <li><code>Stretch</code></li>
		 * </ul>
		 *
		 * @type {PopoverVerticalAlign}
		 * @defaultvalue "Center"
		 * @public
		 */
		verticalAlign: {
			type: PopoverVerticalAlign,
			defaultValue: PopoverVerticalAlign.Center,
		},

		/**
		 * Defines whether the <code>ui5-popover</code> should close when
		 * clicking/tapping outside of the popover.
		 * If enabled, it blocks any interaction with the background.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		modal: {
			type: Boolean,
		},

		/**
		 * Defines whether the block layer will be shown if modal property is set to true.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.10
		 */
		hideBackdrop: {
			type: Boolean,
		},

		/**
		 * Determines whether the <code>ui5-popover</code> arrow is hidden.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		noArrow: {
			type: Boolean,
		},

		/**
		 * Determines if there is no enough space, the <code>ui5-popover</code> can be placed
		 * over the target.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		allowTargetOverlap: {
			type: Boolean,
		},

		/**
		 * Defines whether the content is scrollable.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		disableScrolling: {
			type: Boolean,
		},

		/**
		 * Sets the X translation of the arrow
		 *
		 * @private
		 */
		arrowTranslateX: {
			type: Integer,
			defaultValue: 0,
			noAttribute: true,
		},

		/**
		 * Sets the Y translation of the arrow
		 *
		 * @private
		 */
		arrowTranslateY: {
			type: Integer,
			defaultValue: 0,
			noAttribute: true,
		},

		/**
		 * Returns the calculated placement depending on the free space
		 *
		 * @private
		 */
		actualPlacementType: {
			type: PopoverPlacementType,
			defaultValue: PopoverPlacementType.Right,
		},

		_maxContentHeight: { type: Integer },
	},
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.Popover.prototype */ {
		/**
		 * Defines the header HTML Element.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		header: {
			type: HTMLElement,
		},

		/**
		 * Defines the footer HTML Element.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		footer: {
			type: HTMLElement,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Popover.prototype */ {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-popover</code> component displays additional information for an object
 * in a compact way and without leaving the page.
 * The Popover can contain various UI elements, such as fields, tables, images, and charts.
 * It can also include actions in the footer.
 *
 * <h3>Structure</h3>
 *
 * The popover has three main areas:
 * <ul>
 * <li>Header (optional)</li>
 * <li>Content</li>
 * <li>Footer (optional)</li>
 * </ul>
 *
 * <b>Note:</b> The <code>ui5-popover</code> is closed when the user clicks
 * or taps outside the popover
 * or selects an action within the popover. You can prevent this with the
 * <code>modal</code> property.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Popover.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Popover
 * @extends Popup
 * @tagname ui5-popover
 * @since 1.0.0-rc.6
 * @public
 */
class Popover extends Popup {
	constructor() {
		super();

		this._handleResize = this.handleResize.bind(this);
	}

	static get metadata() {
		return metadata;
	}

	static get styles() {
		return [browserScrollbarCSS, PopupsCommonCss, PopoverCss];
	}

	static get template() {
		return main;
	}

	static get MIN_OFFSET() {
		return 10; // px
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._handleResize);
	}

	onExitDOM() {
		ResizeHandler.deregister(this, this._handleResize);
	}

	isOpenerClicked(event) {
		const target = event.target;
		return target === this._opener || (target.getFocusDomRef && target.getFocusDomRef() === this._opener) || event.composedPath().indexOf(this._opener) > -1;
	}

	/**
	 * Opens the popover.
	 * @param {HTMLElement} opener the element that the popover is opened by
	 * @param {boolean} preventInitialFocus prevents applying the focus inside the popover
	 * @public
	 * @async
	 * @returns {Promise} Resolved when the popover is open
	 */
	async openBy(opener, preventInitialFocus = false) {
		if (!opener || this.opened) {
			return;
		}

		this._opener = opener;
		this._openerRect = opener.getBoundingClientRect();

		await super.open(preventInitialFocus);
	}

	/**
	 * Override for the _addOpenedPopup hook, which would otherwise just call addOpenedPopup(this)
	 * @private
	 */
	_addOpenedPopup() {
		addOpenedPopover(this);
	}

	/**
	 * Override for the _removeOpenedPopup hook, which would otherwise just call removeOpenedPopup(this)
	 * @private
	 */
	_removeOpenedPopup() {
		removeOpenedPopover(this);
	}

	shouldCloseDueToOverflow(placement, openerRect) {
		const threshold = 32;
		const limits = {
			"Right": openerRect.right,
			"Left": openerRect.left,
			"Top": openerRect.top,
			"Bottom": openerRect.bottom,
		};

		const closedPopupParent = getClosedPopupParent(this._opener);
		let overflowsBottom = false;
		let overflowsTop = false;

		if (closedPopupParent.openBy) {
			const contentRect = closedPopupParent.contentDOM.getBoundingClientRect();
			overflowsBottom = openerRect.top > (contentRect.top + contentRect.height);
			overflowsTop = (openerRect.top + openerRect.height) < contentRect.top;
		}

		return (limits[placement] < 0 || (limits[placement] + threshold > closedPopupParent.innerHeight)) || overflowsBottom || overflowsTop;
	}

	shouldCloseDueToNoOpener(openerRect) {
		return openerRect.top === 0
			&& openerRect.bottom === 0
			&& openerRect.left === 0
			&& openerRect.right === 0;
	}

	handleResize() {
		if (this.opened) {
			this.reposition();
		}
	}

	reposition() {
		this.show();
	}

	show() {
		let placement;
		const popoverSize = this.getPopoverSize();

		if (popoverSize.width === 0 || popoverSize.height === 0) {
			// size can not be determined properly at this point, popover will be shown with the next reposition
			return;
		}

		if (this.isOpen()) {
			// update opener rect if it was changed during the popover being opened
			this._openerRect = this._opener.getBoundingClientRect();
		}

		if (this.shouldCloseDueToNoOpener(this._openerRect) && this.isFocusWithin()) {
			// reuse the old placement as the opener is not available,
			// but keep the popover open as the focus is within
			placement = this._oldPlacement;
		} else {
			placement = this.calcPlacement(this._openerRect, popoverSize);
		}

		const stretching = this.horizontalAlign === PopoverHorizontalAlign.Stretch;

		if (this._preventRepositionAndClose) {
			return this.close();
		}

		if (this._oldPlacement && (this._oldPlacement.left === placement.left) && (this._oldPlacement.top === placement.top) && stretching) {
			super.show();
			this.style.width = this._width;
			return;
		}

		this._oldPlacement = placement;

		const left = clamp(
			this._left,
			Popover.MIN_OFFSET,
			document.documentElement.clientWidth - popoverSize.width - Popover.MIN_OFFSET,
		);

		const top = clamp(
			this._top,
			Popover.MIN_OFFSET,
			document.documentElement.clientHeight - popoverSize.height - Popover.MIN_OFFSET,
		);

		let { arrowX, arrowY } = placement;

		const popoverOnLeftBorder = this._left === 0;
		const popoverOnRightBorder = this._left + popoverSize.width >= document.documentElement.clientWidth;
		if (popoverOnLeftBorder) {
			arrowX -= Popover.MIN_OFFSET;
		} else if (popoverOnRightBorder) {
			arrowX += Popover.MIN_OFFSET;
		}
		this.arrowTranslateX = arrowX;

		const popoverOnTopBorder = this._top === 0;
		const popoverOnBottomBorder = this._top + popoverSize.height >= document.documentElement.clientHeight;
		if (popoverOnTopBorder) {
			arrowY -= Popover.MIN_OFFSET;
		} else if (popoverOnBottomBorder) {
			arrowY += Popover.MIN_OFFSET;
		}
		this.arrowTranslateY = arrowY;

		this.actualPlacementType = placement.placementType;

		Object.assign(this.style, {
			top: `${top}px`,
			left: `${left}px`,
		});
		super.show();

		if (stretching && this._width) {
			this.style.width = this._width;
		}
	}

	getPopoverSize() {
		if (!this.opened) {
			Object.assign(this.style, {
				display: "block",
				top: "-10000px",
				left: "-10000px",
			});
		}

		const rect = this.getBoundingClientRect(),
			width = rect.width,
			height = rect.height;

		return { width, height };
	}

	get contentDOM() {
		return this.shadowRoot.querySelector(".ui5-popup-content");
	}

	get arrowDOM() {
		return this.shadowRoot.querySelector(".ui5-popover-arrow");
	}

	calcPlacement(targetRect, popoverSize) {
		let left = 0;
		let top = 0;
		const allowTargetOverlap = this.allowTargetOverlap;

		const clientWidth = document.documentElement.clientWidth;
		const clientHeight = document.documentElement.clientHeight;

		let maxHeight = clientHeight;

		let width = "";
		let height = "";

		const placementType = this.getActualPlacementType(targetRect, popoverSize);

		this._preventRepositionAndClose = this.shouldCloseDueToNoOpener(targetRect) || this.shouldCloseDueToOverflow(placementType, targetRect);

		const isVertical = placementType === PopoverPlacementType.Top
			|| placementType === PopoverPlacementType.Bottom;

		if (this.horizontalAlign === PopoverHorizontalAlign.Stretch && isVertical) {
			popoverSize.width = targetRect.width;
			width = `${targetRect.width}px`;
		} else if (this.verticalAlign === PopoverVerticalAlign.Stretch && !isVertical) {
			popoverSize.height = targetRect.height;
			height = `${targetRect.height}px`;
		}

		this._width = width;
		this._height = height;

		const arrowOffset = this.noArrow ? 0 : arrowSize;

		// calc popover positions
		switch (placementType) {
		case PopoverPlacementType.Top:
			left = this.getVerticalLeft(targetRect, popoverSize);
			top = Math.max(targetRect.top - popoverSize.height - arrowOffset, 0);

			if (!allowTargetOverlap) {
				maxHeight = targetRect.top - arrowOffset;
			}
			break;
		case PopoverPlacementType.Bottom:
			left = this.getVerticalLeft(targetRect, popoverSize);

			if (allowTargetOverlap) {
				top = Math.max(Math.min(targetRect.bottom + arrowOffset, clientHeight - popoverSize.height), 0);
			} else {
				top = targetRect.bottom + arrowOffset;
				maxHeight = clientHeight - targetRect.bottom - arrowOffset;
			}
			break;
		case PopoverPlacementType.Left:
			left = Math.max(targetRect.left - popoverSize.width - arrowOffset, 0);
			top = this.getHorizontalTop(targetRect, popoverSize);
			break;
		case PopoverPlacementType.Right:
			if (allowTargetOverlap) {
				left = Math.max(Math.min(targetRect.left + targetRect.width + arrowOffset, clientWidth - popoverSize.width), 0);
			} else {
				left = targetRect.left + targetRect.width + arrowOffset;
			}

			top = this.getHorizontalTop(targetRect, popoverSize);
			break;
		}

		// correct popover positions
		if (isVertical) {
			if (popoverSize.width > clientWidth || left < 0) {
				left = 0;
			} else if (left + popoverSize.width > clientWidth) {
				left -= left + popoverSize.width - clientWidth;
			}
		} else {
			if (popoverSize.height > clientHeight || top < 0) { // eslint-disable-line
				top = 0;
			} else if (top + popoverSize.height > clientHeight) {
				top -= top + popoverSize.height - clientHeight;
			}
		}

		let maxContentHeight = Math.round(maxHeight);

		if (this._displayHeader) {
			const headerDomRef = this.shadowRoot.querySelector(".ui5-popup-header-root")
				|| this.shadowRoot.querySelector(".ui5-popup-header-text");

			if (headerDomRef) {
				maxContentHeight = Math.round(maxHeight - headerDomRef.offsetHeight);
			}
		}

		this._maxContentHeight = maxContentHeight;

		const arrowPos = this.getArrowPosition(targetRect, popoverSize, left, top, isVertical);

		if (this._left === undefined || Math.abs(this._left - left) > 1.5) {
			this._left = Math.round(left);
		}

		if (this._top === undefined || Math.abs(this._top - top) > 1.5) {
			this._top = Math.round(top);
		}

		return {
			arrowX: arrowPos.x,
			arrowY: arrowPos.y,
			top: this._top,
			left: this._left,
			placementType,
		};
	}

	/**
	 * Calculates the position for the arrow.
	 * @private
	 * @param targetRect BoundingClientRect of the target element
	 * @param popoverSize Width and height of the popover
	 * @param left Left offset of the popover
	 * @param top Top offset of the popover
	 * @param isVertical if the popover is positioned vertically to the target element
	 * @returns {{x: number, y: number}} Arrow's coordinates
	 */
	getArrowPosition(targetRect, popoverSize, left, top, isVertical) {
		let arrowXCentered = this.horizontalAlign === PopoverHorizontalAlign.Center || this.horizontalAlign === PopoverHorizontalAlign.Stretch;

		if (this.horizontalAlign === PopoverHorizontalAlign.Right && left <= targetRect.left) {
			arrowXCentered = true;
		}

		if (this.horizontalAlign === PopoverHorizontalAlign.Left && left + popoverSize.width >= targetRect.left + targetRect.width) {
			arrowXCentered = true;
		}

		let arrowTranslateX = 0;
		if (isVertical && arrowXCentered) {
			arrowTranslateX = targetRect.left + targetRect.width / 2 - left - popoverSize.width / 2;
		}

		let arrowTranslateY = 0;
		if (!isVertical) {
			arrowTranslateY = targetRect.top + targetRect.height / 2 - top - popoverSize.height / 2;
		}

		return {
			x: Math.round(arrowTranslateX),
			y: Math.round(arrowTranslateY),
		};
	}

	/**
	 * Fallbacks to new placement, prioritizing <code>Left</code> and <code>Right</code> placements.
	 * @private
	 */
	fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) {
		if (targetRect.left > popoverSize.width) {
			return PopoverPlacementType.Left;
		}

		if (clientWidth - targetRect.right > targetRect.left) {
			return PopoverPlacementType.Right;
		}

		if (clientHeight - targetRect.bottom > popoverSize.height) {
			return PopoverPlacementType.Bottom;
		}

		if (clientHeight - targetRect.bottom < targetRect.top) {
			return PopoverPlacementType.Top;
		}
	}

	getActualPlacementType(targetRect, popoverSize) {
		const placementType = this.placementType;
		let actualPlacementType = placementType;

		const clientWidth = document.documentElement.clientWidth;
		const clientHeight = document.documentElement.clientHeight;

		switch (placementType) {
		case PopoverPlacementType.Top:
			if (targetRect.top < popoverSize.height
				&& targetRect.top < clientHeight - targetRect.bottom) {
				actualPlacementType = PopoverPlacementType.Bottom;
			}
			break;
		case PopoverPlacementType.Bottom:
			if (clientHeight - targetRect.bottom < popoverSize.height
				&& clientHeight - targetRect.bottom < targetRect.top) {
				actualPlacementType = PopoverPlacementType.Top;
			}
			break;
		case PopoverPlacementType.Left:
			if (targetRect.left < popoverSize.width) {
				actualPlacementType = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placementType;
			}
			break;
		case PopoverPlacementType.Right:
			if (clientWidth - targetRect.right < popoverSize.width) {
				actualPlacementType = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placementType;
			}
			break;
		}

		return actualPlacementType;
	}

	getVerticalLeft(targetRect, popoverSize) {
		let left;

		switch (this.horizontalAlign) {
		case PopoverHorizontalAlign.Center:
		case PopoverHorizontalAlign.Stretch:

			left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
			break;
		case PopoverHorizontalAlign.Left:
			left = targetRect.left;
			break;
		case PopoverHorizontalAlign.Right:
			left = targetRect.right - popoverSize.width;
			break;
		}

		return left;
	}

	getHorizontalTop(targetRect, popoverSize) {
		let top;

		switch (this.verticalAlign) {
		case PopoverVerticalAlign.Center:
		case PopoverVerticalAlign.Stretch:
			top = targetRect.top - (popoverSize.height - targetRect.height) / 2;
			break;
		case PopoverVerticalAlign.Top:
			top = targetRect.top;
			break;
		case PopoverVerticalAlign.Bottom:
			top = targetRect.bottom - popoverSize.height;
			break;
		}

		return top;
	}

	get isModal() { // Required by Popup.js
		return this.modal;
	}

	get shouldHideBackdrop() { // Required by Popup.js
		return this.hideBackdrop;
	}

	get _ariaLabelledBy() { // Required by Popup.js
		return this.ariaLabel ? undefined : "ui5-popup-header";
	}

	get _ariaModal() { // Required by Popup.js
		return true;
	}

	get styles() {
		return {
			...super.styles,
			content: {
				"max-height": `${this._maxContentHeight}px`,
			},
			arrow: {
				transform: `translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`,
			},
		};
	}

	/**
	 * Hook for descendants to hide header.
	 */
	get _displayHeader() {
		return this.header.length || this.headerText;
	}

	/**
	 * Hook for descendants to hide footer.
	 */
	get _displayFooter() {
		return true;
	}
}

Popover.define();

export { Popup as P, ResizeHandler as R, getActiveElement as a, browserScrollbarCSS as b, PopupsCommonCss as c, clamp as d, Popover as e, getNextZIndex as g, isNodeHidden as i };
