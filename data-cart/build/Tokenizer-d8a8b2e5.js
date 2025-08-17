import { g as registerIcon, s as scopedHtml, i as ifDefined, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, B as getTheme, f as fetchI18nBundle, E as EventProvider, h as classMap, u as repeat, a as styleMap, I as Integer } from './Icons-85d4abff.js';
import { g as getI18nBundle, w as isBackSpace, Q as isDelete, c as isSpace, T as TOKEN_ARIA_DELETABLE, S as supportsTouch, U as MULTIINPUT_SHOW_MORE_TOKENS, W as TOKENIZER_ARIA_LABEL, X as TOKENIZER_POPOVER_REMOVE, p as isPhone, Y as TOKENIZER_ARIA_CONTAIN_TOKEN, Z as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN, _ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS } from './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import { I as Icon } from './Button-7dc82d4c.js';
import { R as ResizeHandler } from './Popover-0d784de7.js';
import { I as ItemNavigation } from './debounce-bf42cc69.js';
import { a as animationConfig, b as animate } from './animate-55fc3ba3.js';
import { V as ValueState } from './ValueState-a7516d8f.js';
import { R as ResponsivePopover } from './ResponsivePopover-cdfbc391.js';
import { b as List, S as StandardListItem } from './StandardListItem-6305d5b8.js';
import { R as ResponsivePopoverCommonCss, V as ValueStateMessageCss } from './Input-0ee3a2d0.js';

const name = "sys-cancel";
const pathData = "M512 256q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256t20.5-100 55-81.5T157 20t99-20q53 0 100 20t81.5 54.5T492 156t20 100zm-32 0q0-47-17.5-87.5t-48-71-71.5-48T256 32t-87 18-71.5 48.5-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5q47 0 88-17.5t71-47.5 47.5-71 17.5-88zm-186-7q-5 3-1 9l89 89q9 8 0 17l-16 17q-8 4-9 4t-9-4l-89-89q-1-2-4-2-4 0-5 2l-88 89q-6 4-9 4-1 0-9-4l-16-17q-8-9 0-17l88-89q5-5 0-9l-88-89q-8-9 0-17l16-17q4-4 9-4t9 4l88 89q2 2 5 2 2 0 4-2l89-89q4-4 9-4t9 4l16 17q9 8 0 17z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

const sysCancel = { pathData };

const block0$2 = (context) => { return scopedHtml`<div tabindex="${ifDefined(context._tabIndex)}" @click="${context._handleSelect}" @keydown="${context._keydown}" class="ui5-token--wrapper" dir="${ifDefined(context.effectiveDir)}" role="option" aria-selected="${ifDefined(context.selected)}"><span class="ui5-token--text">${ifDefined(context.text)}</span>${ !context.readonly ? block1$2(context) : undefined }</div>`; };
const block1$2 = (context) => { return scopedHtml`<div class="ui5-token--icon" @click="${context._delete}">${ context.closeIcon.length ? block2$2(context) : block3$1(context) }</div>`; };
const block2$2 = (context) => { return scopedHtml`<slot name="closeIcon"></slot>`; };
const block3$1 = (context) => { return scopedHtml`<ui5-icon name="${ifDefined(context.iconURI)}" accessible-name="${ifDefined(context.tokenDeletableText)}" show-tooltip></ui5-icon>`; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles$1 = ":host{display:inline-block;background:var(--sapButton_Background);border-width:1px;border-style:solid;border-color:var(--sapButton_TokenBorderColor);border-radius:var(--_ui5_token_border_radius);color:var(--_ui5_token_text_color);height:var(--_ui5_token_height);box-sizing:border-box}:host([overflows]){visibility:hidden}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background);border-color:var(--sapButton_Hover_BorderColor)}:host([selected]:not([readonly])){color:var(--sapButton_Selected_TextColor);background:var(--sapButton_Selected_Background);border:1px solid var(--sapButton_Selected_BorderColor)}:host([selected]:not([readonly]):hover){background:var(--sapButton_Selected_Hover_Background);border:1px solid var(--sapButton_Selected_Hover_BorderColor)}:host([readonly]){color:var(--sapContent_ForegroundTextColor)}:host([readonly]) .ui5-token--wrapper{padding-right:.3125rem}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5_token_focus_outline_width) dotted var(--sapContent_ContrastFocusColor)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:default;padding:.25rem 0;padding-left:.3125rem;box-sizing:border-box;font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);user-select:none}.ui5-token--wrapper:focus{outline-offset:-2px;outline:var(--_ui5_token_focus_outline_width) dotted var(--sapContent_FocusColor)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5_token_icon_size);height:var(--_ui5_token_icon_size);padding:var(--_ui5_token_icon_padding);color:var(--_ui5_token_icon_color)}:host(:not([readonly])) .ui5-token--wrapper[dir=rtl]{padding-right:var(--_ui5_token_wrapper_right_padding);padding-left:var(--_ui5_token_wrapper_left_padding)}";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-token",
	languageAware: true,
	managedSlots: true,
	properties: /** @lends sap.ui.webcomponents.main.Token.prototype */ {

		/**
		 * Defines the text of the token.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		text: { type: String },

		/**
		 * Defines whether the <code>ui5-token</code> is read-only.
		 * <br><br>
		 * <b>Note:</b> A read-only <code>ui5-token</code> can not be deleted or selected,
		 * but still provides visual feedback upon user interaction.
		 *
		 * @type {boolean}
		 * @public
		 */
		readonly: { type: Boolean },

		/**
		 * Set by the tokenizer when a token is in the "more" area (overflowing)
		 * @type {boolean}
		 * @private
		 */
		overflows: { type: Boolean },

		/** Defines whether the <code>ui5-token</code> is selected or not.
		 *
		 * @type {boolean}
		 * @public
		 */
		selected: { type: Boolean },

		/**
		 * Defines the tabIndex of the component.
		 * @type {string}
		 * @private
		 */
		_tabIndex: { type: String, defaultValue: "-1", noAttribute: true },
	},

	slots: /** @lends  sap.ui.webcomponents.main.Token.prototype */ {

		/**
		 * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used.
		 * Accepts <code>ui5-icon</code>
		 *
		 * @type {sap.ui.webcomponents.main.IIcon}
		 * @slot
		 * @public
		 * @since 1.0.0-rc.9
		 */
		closeIcon: {
			type: HTMLElement,
		},
	},

	events: /** @lends sap.ui.webcomponents.main.Token.prototype */ {

		/**
		 * Fired when the backspace, delete or close icon of the token is pressed
		 *
		 * @event
		 * @param {boolean} backSpace indicates whether token is deleted by backspace key
		 * @param {boolean} delete indicates whether token is deleted by delete key
		 * @private
		 */
		"delete": {
			detail: {
				"backSpace": { type: Boolean },
				"delete": { type: Boolean },
			},
		},

		/**
		 * Fired when the a <code>ui5-token</code> is selected by user interaction with mouse or clicking space.
		 *
		 * @event
		 * @public
		 */
		select: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Token.js";</code>
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Token
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-token
 * @since 1.0.0-rc.9
 * @implements sap.ui.webcomponents.main.IToken
 * @public
 */
class Token extends UI5Element {
	static get metadata() {
		return metadata$1;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$2;
	}

	static get styles() {
		return styles$1;
	}

	constructor() {
		super();

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	_handleSelect() {
		this.selected = !this.selected;
		this.fireEvent("select");
	}

	 _delete() {
		this.fireEvent("delete");
	 }

	 _keydown(event) {
		const isBS = isBackSpace(event);
		const isD = isDelete(event);

		if (!this.readonly && (isBS || isD)) {
			event.preventDefault();

			this.fireEvent("delete", {
				backSpace: isBS,
				"delete": isD,
			});
		}

		if (isSpace(event)) {
			event.preventDefault();

			this._handleSelect();
		}
	}

	get tokenDeletableText() {
		return this.i18nBundle.getText(TOKEN_ARIA_DELETABLE);
	}

	get iconURI() {
		return getTheme() === "sap_fiori_3" ? "decline" : "sys-cancel";
	}

	static get dependencies() {
		return [Icon];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

Token.define();

const scroll = ({
	element = animationConfig.element,
	duration = animationConfig.duration,
	progress: progressCallback = animationConfig.identity,
	dx = 0,
	dy = 0,
}) => {
	let scrollLeft;
	let scrollTop;

	return animate({
		beforeStart: () => {
			scrollLeft = element.scrollLeft;
			scrollTop = element.scrollTop;
		},
		duration,
		element,
		progress: progress => {
			progressCallback(progress);

			element.scrollLeft = scrollLeft + (progress * dx); // easing - linear
			element.scrollTop = scrollTop + (progress * dy); // easing - linear
		},
	});
};

const scrollEventName = "scroll";
const touchEndEventName = supportsTouch() ? "touchend" : "mouseup";

class ScrollEnablement extends EventProvider {
	constructor(containerComponent) {
		super();
		this.containerComponent = containerComponent;
		this.mouseMove = this.ontouchmove.bind(this);
		this.mouseUp = this.ontouchend.bind(this);
		this.touchStart = this.ontouchstart.bind(this);

		this.supportsTouch = supportsTouch();

		// On Android devices touchmove is thrown one more time than neccessary (together with touchend)
		// so we have to cache the previus coordinates in order to provide correct parameters in the
		// event for Android
		this.cachedValue = {};

		// In components like Carousel you need to know if the user has clicked on something or swiped
		// in order to throw the needed event or not
		this.startX = 0;
		this.startY = 0;

		if (this.supportsTouch) {
			containerComponent.addEventListener("touchstart", this.touchStart, { passive: true });
			containerComponent.addEventListener("touchmove", this.mouseMove, { passive: true });
			containerComponent.addEventListener("touchend", this.mouseUp, { passive: true });
		} else {
			containerComponent.addEventListener("mousedown", this.touchStart, { passive: true });
		}
	}

	set scrollContainer(container) {
		this._container = container;
	}

	get scrollContainer() {
		return this._container;
	}

	/**
	 * Scrolls the container to the left/top position, retrying retryCount times, if the container is not yet painted
	 *
	 * @param left
	 * @param top
	 * @param retryCount
	 * @param retryInterval
	 * @returns {Promise<void>} resolved when scrolled successfully
	 */
	async scrollTo(left, top, retryCount = 0, retryInterval = 0) {
		let containerPainted = this.scrollContainer.clientHeight > 0 && this.scrollContainer.clientWidth > 0;

		/* eslint-disable no-loop-func, no-await-in-loop */
		while (!containerPainted && retryCount > 0) {
			await new Promise(resolve => {
				setTimeout(() => {
					containerPainted = this.scrollContainer.clientHeight > 0 && this.scrollContainer.clientWidth > 0;
					retryCount--;
					resolve();
				}, retryInterval);
			});
		}
		/* eslint-disable no-loop-func, no-await-in-loop */

		this._container.scrollLeft = left;
		this._container.scrollTop = top;
	}

	move(dx, dy) {
		return scroll({
			element: this._container,
			dx,
			dy,
		});
	}

	getScrollLeft() {
		return this._container.scrollLeft;
	}

	getScrollTop() {
		return this._container.scrollTop;
	}

	_isTouchInside(touch) {
		const rect = this._container.getBoundingClientRect();
		const x = this.supportsTouch ? touch.clientX : touch.x;
		const y = this.supportsTouch ? touch.clientY : touch.y;

		return x >= rect.left && x <= rect.right
			&& y >= rect.top && y <= rect.bottom;
	}

	ontouchstart(event) {
		const touch = this.supportsTouch ? event.touches[0] : null;

		if (!this.supportsTouch) {
			document.addEventListener("mouseup", this.mouseUp, { passive: true });
			document.addEventListener("mousemove", this.mouseMove, { passive: true });
		} else {
			// Needed only on mobile
			this.startX = touch.pageX;
			this.startY = touch.pageY;
		}

		this._prevDragX = this.supportsTouch ? touch.pageX : event.x;
		this._prevDragY = this.supportsTouch ? touch.pageY : event.y;

		this._canScroll = this._isTouchInside(this.supportsTouch ? touch : event);
	}

	ontouchmove(event) {
		if (!this._canScroll) {
			return;
		}

		const container = this._container;
		const touch = this.supportsTouch ? event.touches[0] : null;

		const dragX = this.supportsTouch ? touch.pageX : event.x;
		const dragY = this.supportsTouch ? touch.pageY : event.y;

		container.scrollLeft += this._prevDragX - dragX;
		container.scrollTop += this._prevDragY - dragY;

		this.fireEvent(scrollEventName, {
			isLeft: dragX > this._prevDragX,
			isRight: dragX < this._prevDragX,
		});

		this.cachedValue.dragX = this._prevDragX;
		this.cachedValue.dragY = this._prevDragY;

		this._prevDragX = dragX;
		this._prevDragY = dragY;
	}

	ontouchend(event) {
		if (this.supportsTouch) {
			const deltaX = Math.abs(event.changedTouches[0].pageX - this.startX);
			const deltaY = Math.abs(event.changedTouches[0].pageY - this.startY);

			if (deltaX < 10 && deltaY < 10) {
				return;
			}
		}

		if (!this._canScroll) {
			return;
		}

		const container = this._container;
		const dragX = this.supportsTouch ? event.changedTouches[0].pageX : event.x;
		const dragY = this.supportsTouch ? event.changedTouches[0].pageY : event.y;

		container.scrollLeft += this._prevDragX - dragX;
		container.scrollTop += this._prevDragY - dragY;

		const useCachedValues = dragX === this._prevDragX;
		const _dragX = useCachedValues ? this.cachedValue.dragX : dragX;
		// const _dragY = useCachedValues ? this.cachedValue.dragY : dragY; add if needed

		this.fireEvent(touchEndEventName, {
			isLeft: _dragX < this._prevDragX,
			isRight: _dragX > this._prevDragX,
		});

		this._prevDragX = dragX;
		this._prevDragY = dragY;

		if (!this.supportsTouch) {
			document.removeEventListener("mousemove", this.mouseMove, { passive: true });
			document.removeEventListener("mouseup", this.mouseUp);
		}
	}
}

const block0$1 = (context) => { return scopedHtml`<div dir="${ifDefined(context.effectiveDir)}" class="${classMap(context.classes.wrapper)}"><span id="${ifDefined(context._id)}-hiddenText" class="ui5-hidden-text">${ifDefined(context.tokenizerLabel)}</span><div class="${classMap(context.classes.content)}" @ui5-delete="${ifDefined(context._tokenDelete)}" @click="${context._click}" @mousedown="${context._onmousedown}" @keydown="${context._onkeydown}" role="listbox" aria-labelledby="${ifDefined(context._id)}-hiddenText">${ repeat(context.tokens, (item, index) => item._id || index, (item, index) => block1$1(item, index, context)) }</div>${ context.showNMore ? block2$1(context) : undefined }</div>`; };
const block1$1 = (item, index, context) => { return scopedHtml`<slot name="${ifDefined(item._individualSlot)}"></slot>`; };
const block2$1 = (context) => { return scopedHtml`<span @click="${context._openOverflowPopover}" class="ui5-tokenizer-more-text">${ifDefined(context._nMoreText)}</span>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

const block0 = (context) => { return scopedHtml`<ui5-responsive-popover tokenizer-popover="true" style=${styleMap(context.styles.popover)} header-text=${ifDefined(context.morePopoverTitle)} ?content-only-on-desktop="${context.hasValueState}" no-arrow placement-type="Bottom" horizontal-align="Left">${ !context.hasValueState ? block1(context) : undefined }<ui5-list class="ui5-tokenizer-list" mode="Delete" @ui5-item-delete=${ifDefined(context.itemDelete)}>${ repeat(context._tokens, (item, index) => item._id || index, (item, index) => block4(item, index, context)) }</ui5-list>${ context._isPhone ? block5(context) : undefined }</ui5-responsive-popover>`; };
const block1 = (context) => { return scopedHtml`<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(context.styles.popoverHeader)}">${ context._isPhone ? block2(context) : undefined }<div class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverValueStateMessage)}">${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3(item, index, context)) }</div></div>`; };
const block2 = (context) => { return scopedHtml`<div class="row" style="${styleMap(context.styles.popoverHeaderTitle)}"><ui5-title level="H5" class="ui5-responsive-popover-header-text">Remove</ui5-title><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context.closeMorePopover}"></ui5-button></div>`; };
const block3 = (item, index, context) => { return scopedHtml`${ifDefined(item)}`; };
const block4 = (item, index, context) => { return scopedHtml`<ui5-li .tokenRef=${ifDefined(item)}>${ifDefined(item.text)}</ui5-li>`; };
const block5 = (context) => { return scopedHtml`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${context.closeMorePopover}">OK</ui5-button></div>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host{display:inline-block;box-sizing:border-box;border:1px solid #000;height:2.25rem}.ui5-tokenizer-root{height:100%;display:flex;align-items:center;padding:var(--_ui5_tokenizer_root_padding);overflow-x:scroll;box-sizing:border-box;font-family:\"72override\",var(--sapFontFamily)}.ui5-tokenizer-no-padding{padding:0}.ui5-tokenizer-root.ui5-tokenizer-nmore--wrapper{overflow-x:hidden}.ui5-tokenizer--token--wrapper{display:inline-flex;align-items:center;box-sizing:border-box;height:100%}:host([expanded]) .ui5-tokenizer--content{display:inline-block;white-space:nowrap}.ui5-tokenizer--content{display:flex;flex-wrap:nowrap;align-items:center;overflow:auto}.ui5-tokenizer--content.ui5-tokenizer-nmore--content{overflow:hidden}.ui5-tokenizer-more-text{display:inline-block;margin-left:.25rem;cursor:pointer;white-space:nowrap;font-size:var(--sapFontSize)}:host([expanded]) .ui5-tokenizer--content{overflow:hidden;justify-content:flex-end}::slotted([ui5-token]){margin-left:.25rem}[dir=rtl] .ui5-tokenizer-more-text{margin-right:.25rem;margin-left:0}[dir=rtl] ::slotted([ui5-token]){margin-right:.25rem;margin-left:0}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-tokenizer",
	languageAware: true,
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.Tokenizer.prototype */ {
		"default": {
			propertyName: "tokens",
			type: HTMLElement,
			individualSlots: true,
		},
		"valueStateMessage": {
			propertyName: "valueStateMessage",
			type: HTMLElement,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.Tokenizer.prototype */ {
		showMore: { type: Boolean },

		disabled: { type: Boolean },

		/**
		 * Indicates if the tokenizer should show all tokens or n more label instead
		 *
		 * @private
		 */
		expanded: { type: Boolean },

		morePopoverOpener: { type: Object },

		popoverMinWidth: {
			type: Integer,
		},

		/**
		 * Indicates the value state of the related input component.
		 *
		 * @type {ValueState}
		 * @defaultvalue "None"
		 * @private
		 */
		valueState: {
			type: ValueState,
			defaultValue: ValueState.None,
		},

		_nMoreCount: { type: Integer },
	},
	events: /** @lends sap.ui.webcomponents.main.Tokenizer.prototype */ {
		"token-delete": {
			detail: {
				ref: { type: HTMLElement },
			},
		},

		"show-more-items-press": {
			detail: {
				ref: { type: HTMLElement },
			},
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * A container for tokens.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Tokenizer
 * @extends UI5Element
 * @tagname ui5-tokenizer
 * @usestextcontent
 * @private
 */
class Tokenizer extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$1;
	}

	static get styles() {
		return styles;
	}

	static get staticAreaStyles() {
		return [ResponsivePopoverCommonCss, ValueStateMessageCss];
	}

	static get staticAreaTemplate() {
		return main;
	}

	_handleResize() {
		this._nMoreCount = this.overflownTokens.length;
	}

	constructor() {
		super();

		this._resizeHandler = this._handleResize.bind(this);

		this._itemNav = new ItemNavigation(this, {
			currentIndex: "-1",
			getItemsCallback: this._getVisibleTokens.bind(this),
		});

		this._scrollEnablement = new ScrollEnablement(this);
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	async onBeforeRendering() {
		if (this.showPopover && !this._getTokens().length) {
			const popover = await this.getPopover();
			popover.close();
		}
	}

	onEnterDOM() {
		ResizeHandler.register(this.shadowRoot.querySelector(".ui5-tokenizer--content"), this._resizeHandler);
	}

	onExitDOM() {
		ResizeHandler.deregister(this.shadowRoot.querySelector(".ui5-tokenizer--content"), this._resizeHandler);
	}

	async _openOverflowPopover() {
		if (this.showPopover) {
			const popover = await this.getPopover();

			popover.open(this.morePopoverOpener || this);
		}

		this.fireEvent("show-more-items-press");
	}

	_getTokens() {
		return this.getSlottedNodes("tokens");
	}

	get _tokens() {
		return this.getSlottedNodes("tokens");
	}

	get showPopover() {
		return Object.keys(this.morePopoverOpener).length;
	}

	_getVisibleTokens() {
		if (this.disabled) {
			return [];
		}

		return this._tokens.filter((token, index) => {
			return index < (this._tokens.length - this._nMoreCount);
		});
	}

	onAfterRendering() {
		this._nMoreCount = this.overflownTokens.length;
		this._scrollEnablement.scrollContainer = this.expanded ? this.contentDom : this;
	}

	_tokenDelete(event) {
		let nextTokenIndex; // The index of the next token that needs to be focused next due to the deletion
		const deletedTokenIndex = this._getVisibleTokens().indexOf(event.target); // The index of the token that just got deleted

		if (event.detail && event.detail.backSpace) { // on backspace key select the previous item (unless deleting the first)
			nextTokenIndex = deletedTokenIndex === 0 ? deletedTokenIndex + 1 : deletedTokenIndex - 1;
		} else { // on delete key or mouse click on the "x" select the next item (unless deleting the last)
			nextTokenIndex = deletedTokenIndex === this._getVisibleTokens().length - 1 ? deletedTokenIndex - 1 : deletedTokenIndex + 1;
		}
		const nextToken = this._getVisibleTokens()[nextTokenIndex]; // if the last item was deleted this will be undefined
		this._itemNav.setCurrentItem(nextToken); // update the item navigation with the new token or undefined, if the last was deleted

		if (nextToken) {
			setTimeout(() => {
				nextToken.focus();
			}, 0);
		}

		this.fireEvent("token-delete", { ref: event.target });
	}

	itemDelete(event) {
		const token = event.detail.item.tokenRef;

		this.fireEvent("token-delete", { ref: token });
	}

	_onkeydown(event) {
		if (isSpace(event)) {
			event.preventDefault();

			this._handleTokenSelection(event);
		}
	}

	_click(event) {
		this._handleTokenSelection(event);
	}

	_onmousedown(event) {
		this._itemNav.setCurrentItem(event.target);
	}

	_handleTokenSelection(event) {
		if (event.target.localName === "ui5-token") {
			this._tokens.forEach(token => {
				if (token !== event.target) {
					token.selected = false;
				}
			});
		}
	}

	/**
	 * Scrolls the container of the tokens to its beginning.
	 * This method is used by MultiInput and MultiComboBox.
	 * @private
	 */
	scrollToStart() {
		this.contentDom.scrollLeft = 0;
	}

	async closeMorePopover() {
		const popover = await this.getPopover();

		popover.close();
	}

	get _nMoreText() {
		return this.i18nBundle.getText(MULTIINPUT_SHOW_MORE_TOKENS, [this._nMoreCount]);
	}

	get showNMore() {
		return !this.expanded && this.showMore && this.overflownTokens.length;
	}

	get contentDom() {
		return this.shadowRoot.querySelector(".ui5-tokenizer--content");
	}

	get tokenizerLabel() {
		return this.i18nBundle.getText(TOKENIZER_ARIA_LABEL);
	}

	get morePopoverTitle() {
		return this.i18nBundle.getText(TOKENIZER_POPOVER_REMOVE);
	}

	get overflownTokens() {
		if (!this.contentDom) {
			return [];
		}

		return this._getTokens().filter(token => {
			const isRTL = this.effectiveDir === "rtl";
			const elementEnd = isRTL ? "left" : "right";
			const parentRect = this.contentDom.getBoundingClientRect();
			const tokenRect = token.getBoundingClientRect();
			const tokenEnd = tokenRect[elementEnd];
			const parentEnd = parentRect[elementEnd];

			token.overflows = isRTL ? ((tokenEnd < parentEnd) && !this.expanded) : ((tokenEnd > parentEnd) && !this.expanded);

			return token.overflows;
		});
	}

	get hasValueState() {
		return this.valueState === ValueState.None || this.valueState === ValueState.Success;
	}

	get valueStateMessageText() {
		return this.getSlottedNodes("valueStateMessage").map(el => el.cloneNode(true));
	}

	get _isPhone() {
		return isPhone();
	}

	get classes() {
		return {
			wrapper: {
				"ui5-tokenizer-root": true,
				"ui5-tokenizer-nmore--wrapper": this.showMore,
				"ui5-tokenizer-no-padding": !this._getTokens().length,
			},
			content: {
				"ui5-tokenizer--content": true,
				"ui5-tokenizer-nmore--content": this.showMore,
			},
			popoverValueState: {
				"ui5-valuestatemessage-root": true,
				"ui5-responsive-popover-header": this.showPopover,
				"ui5-valuestatemessage--success": this.valueState === ValueState.Success,
				"ui5-valuestatemessage--error": this.valueState === ValueState.Error,
				"ui5-valuestatemessage--warning": this.valueState === ValueState.Warning,
				"ui5-valuestatemessage--information": this.valueState === ValueState.Information,
			},
		};
	}

	get styles() {
		return {
			popover: {
				"min-width": `${this.popoverMinWidth}px`,
			},
			popoverValueStateMessage: {
				"width": isPhone() ? "100%" : `${this.popoverMinWidth}px`,
				"min-height": "2rem",
				"padding": isPhone() ? "0.25rem 1rem" : "0.3rem 0.625rem",
			},
			popoverHeader: {
				"min-height": "2rem",
			},
			popoverHeaderTitle: {
				"justify-content": "left",
			},
		};
	}

	_tokensCountText() {
		const iTokenCount = this._getTokens().length;

		if (iTokenCount === 0) {
			return this.i18nBundle.getText(TOKENIZER_ARIA_CONTAIN_TOKEN);
		}

		if (iTokenCount === 1) {
			return this.i18nBundle.getText(TOKENIZER_ARIA_CONTAIN_ONE_TOKEN);
		}

		return this.i18nBundle.getText(TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS, iTokenCount);
	}

	/**
	 * @protected
	 */
	_focusLastToken() {
		if (this.tokens.length === 0) {
			return;
		}

		const lastToken = this.tokens[this.tokens.length - 1];
		lastToken.focus();
		this._itemNav.setCurrentItem(lastToken);
	}

	static get dependencies() {
		return [
			ResponsivePopover,
			List,
			StandardListItem,
		];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}

	async getPopover() {
		return (await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]");
	}
}

Tokenizer.define();

export { Tokenizer as T, Token as a };
