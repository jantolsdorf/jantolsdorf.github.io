import { p as isPhone, m as isDesktop, g as getI18nBundle, R as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON } from './i18n-defaults-dca87248.js';
import { P as Popup, b as browserScrollbarCSS, c as PopupsCommonCss, R as ResizeHandler, d as clamp, e as Popover, g as getNextZIndex } from './Popover-0d784de7.js';
import { s as scopedHtml, i as ifDefined, a as styleMap, h as classMap, b as setTags, c as setSuffix, g as registerIcon, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, f as fetchI18nBundle } from './Icons-85d4abff.js';
import { I as Icon, B as Button } from './Button-7dc82d4c.js';
import { T as Title } from './Title-cbf0fa30.js';
import './decline-a03835ab.js';

const block0$1 = (context) => { return scopedHtml`${ context._isPhone ? block1$1(context) : block6(context) }`; };
const block1$1 = (context) => { return scopedHtml`<ui5-dialog ?with-padding=${context.withPadding} stretch _disable-initial-focus @ui5-before-open="${ifDefined(context._propagateDialogEvent)}" @ui5-after-open="${ifDefined(context._afterDialogOpen)}" @ui5-before-close="${ifDefined(context._propagateDialogEvent)}" @ui5-after-close="${ifDefined(context._afterDialogClose)}">${ !context._hideHeader ? block2$1(context) : undefined }<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`; };
const block2$1 = (context) => { return scopedHtml`${ context.header.length ? block3$1(context) : block4$1(context) }`; };
const block3$1 = (context) => { return scopedHtml`<slot slot="header" name="header"></slot>`; };
const block4$1 = (context) => { return scopedHtml`<header class="${ifDefined(context.dialogClasses.header)}">${ context.headerText ? block5$1(context) : undefined }<ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(context._closeDialogAriaLabel)}" @click="${context.close}"></ui5-button></header>`; };
const block5$1 = (context) => { return scopedHtml`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(context.headerText)}</ui5-title>`; };
const block6 = (context) => { return scopedHtml`<section style="${styleMap(context.styles.root)}" class="${classMap(context.classes.root)}" role="dialog" aria-modal="${ifDefined(context._ariaModal)}" aria-label="${ifDefined(context._ariaLabel)}" aria-labelledby="${ifDefined(context._ariaLabelledBy)}" dir="${ifDefined(context.effectiveDir)}" tabindex="-1" @keydown=${context._onkeydown} @focusout=${context._onfocusout}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(context.styles.arrow)}"></span>${ context._displayHeader ? block7(context) : undefined }<div style="${styleMap(context.styles.content)}" class="${classMap(context.classes.content)}"  @scroll="${context._scroll}"><slot></slot></div>${ context._displayFooter ? block10(context) : undefined }<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToFirst}></span></section>`; };
const block7 = (context) => { return scopedHtml`<header class="ui5-popup-header-root" id="ui5-popup-header">${ context.header.length ? block8(context) : block9(context) }</header>`; };
const block8 = (context) => { return scopedHtml`<slot name="header"></slot>`; };
const block9 = (context) => { return scopedHtml`<h2 class="ui5-popup-header-text">${ifDefined(context.headerText)}</h2>`; };
const block10 = (context) => { return scopedHtml`${ context.footer.length ? block11(context) : undefined }`; };
const block11 = (context) => { return scopedHtml`<footer class="ui5-popup-footer-root"><slot name="footer"></slot></footer>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

const name = "resize-corner";
const pathData = "M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

const resizeCorner = { pathData };

const block0 = (context) => { return scopedHtml`<section style="${styleMap(context.styles.root)}" class="${classMap(context.classes.root)}" role="dialog" aria-modal="${ifDefined(context._ariaModal)}" aria-label="${ifDefined(context._ariaLabel)}" aria-labelledby="${ifDefined(context._ariaLabelledBy)}" dir="${ifDefined(context.effectiveDir)}" tabindex="-1" @keydown=${context._onkeydown} @focusout=${context._onfocusout}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToLast}></span>${ context._displayHeader ? block1(context) : undefined }<div style="${styleMap(context.styles.content)}" class="${classMap(context.classes.content)}"  @scroll="${context._scroll}"><slot></slot></div>${ context.footer.length ? block4(context) : undefined }${ context.resizable ? block5(context) : undefined }<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${context.forwardToFirst}></span></section> `; };
const block1 = (context) => { return scopedHtml`<header class="ui5-popup-header-root" id="ui5-popup-header" @mousedown="${context._onDragMouseDown}">${ context.header.length ? block2(context) : block3(context) }</header>`; };
const block2 = (context) => { return scopedHtml`<slot name="header"></slot>`; };
const block3 = (context) => { return scopedHtml`<h2 id="ui5-popup-header-text" class="ui5-popup-header-text">${ifDefined(context.headerText)}</h2>`; };
const block4 = (context) => { return scopedHtml`<footer class="ui5-popup-footer-root"><slot name="footer"></slot></footer>`; };
const block5 = (context) => { return scopedHtml`<ui5-icon name="resize-corner" dir="${ifDefined(context.effectiveDir)}" class="ui5-popup-resize-handle" @mousedown="${context._onResizeMouseDown}"></ui5-icon>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const dialogCSS = ":host{min-width:20rem;min-height:6rem;box-shadow:var(--sapContent_Shadow3)}:host([stretch]){width:90%;height:90%}:host([stretch][on-phone]){width:100%;height:100%}:host([stretch][on-phone]) .ui5-popup-root{max-height:100vh;max-width:100vw}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot=header]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:-.0625rem;right:-.25rem;cursor:se-resize;color:var(--_ui5_dialog_resize_handle_color)}.ui5-popup-resize-handle[dir=rtl]{left:-.25rem;right:unset;cursor:sw-resize}";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-dialog",
	slots: /** @lends  sap.ui.webcomponents.main.Dialog.prototype */ {
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
	properties: /** @lends  sap.ui.webcomponents.main.Dialog.prototype */ {
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
		 * Determines whether the <code>ui5-dialog</code> should be stretched to fullscreen.
		 * <br><br>
		 * <b>Note:</b> The <code>ui5-dialog</code> will be stretched to approximately
		 * 90% of the viewport.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		stretch: {
			type: Boolean,
		},

		/**
		 * Determines whether the <code>ui5-dialog</code> is draggable.
		 * If this property is set to true, the Dialog will be draggable by its header.
		 * <br><br>
		 * <b>Note:</b> The <code>ui5-dialog</code> can be draggable only in desktop mode.
		 * @type {boolean}
		 * @defaultvalue false
		 * @since 1.0.0-rc.9
		 * @public
		 */
		draggable: {
			type: Boolean,
		},

		/**
		 * Configures the <code>ui5-dialog</code> to be resizable.
		 * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
		 * In RTL languages, the resize handle will be placed in the bottom left corner.
		 * <br><br>
		 * <b>Note:</b> The <code>ui5-dialog</code> can be resizable only in desktop mode.
		 * <br>
		 * <b>Note:</b> Upon resizing, externally defined height and width styling will be ignored.
		 * @type {boolean}
		 * @defaultvalue false
		 * @since 1.0.0-rc.10
		 * @public
		 */
		resizable: {
			type: Boolean,
		},

		/**
		 * @private
		 */
		onPhone: {
			type: Boolean,
		},

		/**
		 * @private
		 */
		onDesktop: {
			type: Boolean,
		},
	},
};

/**
 * @class
 * <h3 class="comment-api-title">Overview</h3>
 * The <code>ui5-dialog</code> component is used to temporarily display some information in a
 * size-limited window in front of the regular app screen.
 * It is used to prompt the user for an action or a confirmation.
 * The <code>ui5-dialog</code> interrupts the current app processing as it is the only focused UI element and
 * the main screen is dimmed/blocked.
 * The dialog combines concepts known from other technologies where the windows have
 * names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
 * <br><br>
 * The <code>ui5-dialog</code> is modal, which means that user action is required before returning to the parent window is possible.
 * The content of the <code>ui5-dialog</code> is fully customizable.
 *
 * <h3>Structure</h3>
 * A <code>ui5-dialog</code> consists of a header, content, and a footer for action buttons.
 * The <code>ui5-dialog</code> is usually displayed at the center of the screen.
 * Its position can be changed by the user. To enable this, you need to set the property <code>draggable</code> accordingly.

 *
 * <h3>Responsive Behavior</h3>
 * The <code>stretch</code> property can be used to stretch the
 * <code>ui5-dialog</code> on full screen.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Dialog";</code>
 *
 * <b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside <code>ui5-dialog</code>.
 * Ideally you should create all popups on the same level inside your HTML page and just open them from one another, rather than nesting them.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Dialog
 * @extends Popup
 * @tagname ui5-dialog
 * @public
 */
class Dialog extends Popup {
	constructor() {
		super();

		this._screenResizeHandler = this._center.bind(this);

		this._dragMouseMoveHandler = this._onDragMouseMove.bind(this);
		this._dragMouseUpHandler = this._onDragMouseUp.bind(this);

		this._resizeMouseMoveHandler = this._onResizeMouseMove.bind(this);
		this._resizeMouseUpHandler = this._onResizeMouseUp.bind(this);
	}

	static get metadata() {
		return metadata$1;
	}

	static get dependencies() {
		return [
			Icon,
		];
	}

	static get template() {
		return main;
	}

	static get styles() {
		return [browserScrollbarCSS, PopupsCommonCss, dialogCSS];
	}

	/**
	 * Opens the dialog
	 *
	 * @param {boolean} preventInitialFocus prevents applying the focus inside the popup
	 * @async
	 * @returns {Promise} Resolves when the dialog is open
	 * @public
	 */
	async open(preventInitialFocus) {
		await super.open(preventInitialFocus);
	}

	get isModal() { // Required by Popup.js
		return true;
	}

	get shouldHideBackdrop() { // Required by Popup.js
		return false;
	}

	get _ariaLabelledBy() { // Required by Popup.js
		return (this.ariaLabel || this.header.length) ? undefined : "ui5-popup-header-text";
	}

	get _ariaModal() { // Required by Popup.js
		return true;
	}

	get _displayProp() {
		return "flex";
	}

	get _displayHeader() {
		return this.header.length || this.headerText;
	}

	show() {
		super.show();
		this._center();
	}

	onBeforeRendering() {
		this._isRTL = this.effectiveDir === "rtl";
		this.onPhone = isPhone();
		this.onDesktop = isDesktop();
	}

	onEnterDOM() {
		super.onEnterDOM();

		ResizeHandler.register(this, this._screenResizeHandler);
		ResizeHandler.register(document.body, this._screenResizeHandler);
	}

	onExitDOM() {
		super.onExitDOM();

		ResizeHandler.deregister(this, this._screenResizeHandler);
		ResizeHandler.deregister(document.body, this._screenResizeHandler);
	}

	_center() {
		const height = window.innerHeight - this.offsetHeight,
			width = window.innerWidth - this.offsetWidth;

		Object.assign(this.style, {
			top: `${Math.round(height / 2)}px`,
			left: `${Math.round(width / 2)}px`,
		});
	}

	_revertSize() {
		Object.assign(this.style, {
			top: "",
			left: "",
			width: "",
			height: "",
		});
		this.removeEventListener("ui5-before-close", this._revertSize);
	}

	/**
	 * Event handlers
	 */
	_onDragMouseDown(event) {
		if (!(this.draggable && this.onDesktop)) {
			return;
		}

		// only allow dragging on the header's whitespace
		if (!event.target.classList.contains("ui5-popup-header-root")
			&& event.target.getAttribute("slot") !== "header") {
			return;
		}

		event.preventDefault();

		const {
			top,
			left,
		} = this.getBoundingClientRect();
		const {
			width,
			height,
		} = window.getComputedStyle(this);

		Object.assign(this.style, {
			top: `${top}px`,
			left: `${left}px`,
			width: `${Math.round(Number.parseFloat(width) * 100) / 100}px`,
			height: `${Math.round(Number.parseFloat(height) * 100) / 100}px`,
		});

		this._x = event.clientX;
		this._y = event.clientY;

		this._attachDragHandlers();
	}

	_onDragMouseMove(event) {
		event.preventDefault();

		const calcX = this._x - event.clientX;
		const calcY = this._y - event.clientY;
		const {
			left,
			top,
		} = this.getBoundingClientRect();

		Object.assign(this.style, {
			left: `${Math.floor(left - calcX)}px`,
			top: `${Math.floor(top - calcY)}px`,
		});

		this._x = event.clientX;
		this._y = event.clientY;
	}

	_onDragMouseUp() {
		this._x = null;
		this._y = null;

		this._detachDragHandlers();
	}

	_attachDragHandlers() {
		ResizeHandler.deregister(this, this._screenResizeHandler);
		ResizeHandler.deregister(document.body, this._screenResizeHandler);

		window.addEventListener("mousemove", this._dragMouseMoveHandler);
		window.addEventListener("mouseup", this._dragMouseUpHandler);
	}

	_detachDragHandlers() {
		window.removeEventListener("mousemove", this._dragMouseMoveHandler);
		window.removeEventListener("mouseup", this._dragMouseUpHandler);
	}

	_onResizeMouseDown(event) {
		if (!(this.resizable && this.onDesktop)) {
			return;
		}

		event.preventDefault();

		const {
			top,
			left,
		} = this.getBoundingClientRect();
		const {
			width,
			height,
			minWidth,
			minHeight,
		} = window.getComputedStyle(this);

		this._initialX = event.clientX;
		this._initialY = event.clientY;
		this._initialWidth = Number.parseFloat(width);
		this._initialHeight = Number.parseFloat(height);
		this._initialTop = top;
		this._initialLeft = left;
		this._minWidth = Number.parseFloat(minWidth);
		this._minHeight = Number.parseFloat(minHeight);

		Object.assign(this.style, {
			top: `${top}px`,
			left: `${left}px`,
		});

		this._attachResizeHandlers();
	}

	_onResizeMouseMove(event) {
		const { clientX, clientY } = event;

		let newWidth;
		let newLeft;

		if (this._isRTL) {
			newWidth = clamp(
				this._initialWidth - (clientX - this._initialX),
				this._minWidth,
				this._initialLeft + this._initialWidth,
			);

			newLeft = clamp(
				this._initialLeft + (clientX - this._initialX),
				0,
				this._initialX + this._initialWidth - this._minWidth,
			);
		} else {
			newWidth = clamp(
				this._initialWidth + (clientX - this._initialX),
				this._minWidth,
				window.innerWidth - this._initialLeft,
			);
		}

		const newHeight = clamp(
			this._initialHeight + (clientY - this._initialY),
			this._minHeight,
			window.innerHeight - this._initialTop,
		);

		Object.assign(this.style, {
			height: `${newHeight}px`,
			width: `${newWidth}px`,
			left: newLeft ? `${newLeft}px` : undefined,
		});
	}

	_onResizeMouseUp() {
		this._initialX = null;
		this._initialY = null;
		this._initialWidth = null;
		this._initialHeight = null;
		this._initialTop = null;
		this._initialLeft = null;
		this._minWidth = null;
		this._minHeight = null;

		this._detachResizeHandlers();
	}

	_attachResizeHandlers() {
		ResizeHandler.deregister(this, this._screenResizeHandler);
		ResizeHandler.deregister(document.body, this._screenResizeHandler);

		window.addEventListener("mousemove", this._resizeMouseMoveHandler);
		window.addEventListener("mouseup", this._resizeMouseUpHandler);
		this.addEventListener("ui5-before-close", this._revertSize);
	}

	_detachResizeHandlers() {
		window.removeEventListener("mousemove", this._resizeMouseMoveHandler);
		window.removeEventListener("mouseup", this._resizeMouseUpHandler);
	}
}

Dialog.define();

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const ResponsivePopoverCss = ":host{--_ui5_input_width:100%;min-width:6.25rem;min-height:2rem}:host(:not([with-padding])){--_ui5_popup_content_padding:0}:host([opened]){display:inline-block}.ui5-responsive-popover-header{height:var(--_ui5-responsive_popover_header_height);display:flex;justify-content:space-between;align-items:center;padding:0 1rem;box-shadow:var(--sapContent_HeaderShadow)}:host [dir=rtl] .ui5-responsive-popover-header{padding:0 1rem 0 0}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}";

const POPOVER_MIN_WIDTH = 100;

/**
 * @public
 */
const metadata = {
	tag: "ui5-responsive-popover",
	properties: /** @lends sap.ui.webcomponents.main.ResponsivePopover.prototype */ {

		/**
		 * Defines whether the component will stretch to fit its content.
		 * <br/><b>Note:</b> by default the popover will be as wide as its opener component and will grow if the content is not fitting.
		 * <br/><b>Note:</b> if set to true, it will take only as much space as it needs.
		 * @private
		 */
		noStretch: {
			type: Boolean,
		},

		/**
		 * Defines if padding would be added around the content.
		 * @private
		 */
		withPadding: {
			type: Boolean,
		},

		/**
		 * Defines if only the content would be displayed (without header and footer) in the popover on Desktop.
		 * By default both the header and footer would be displayed.
		 * @private
		 */
		contentOnlyOnDesktop: {
			type: Boolean,
		},

		/**
		 * Used internaly for controls which must not have header.
		 * @private
		 */
		_hideHeader: {
			type: Boolean,
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * The <code>ui5-responsive-popover</code> acts as a Popover on desktop and tablet, while on phone it acts as a Dialog.
 * The component improves tremendously the user experience on mobile.
 *
 * <h3>Usage</h3>
 * Use it when you want to make sure that all the content is visible on any device.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ResponsivePopover
 * @extends Popover
 * @tagname ui5-responsive-popover
 * @since 1.0.0-rc.6
 * @public
 */
class ResponsivePopover extends Popover {
	constructor() {
		super();
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	static get metadata() {
		return metadata;
	}

	static get styles() {
		return [Popover.styles, ResponsivePopoverCss];
	}

	get dialogClasses() {
		return {
			header: {
				"ui5-responsive-popover-header": true,
				"ui5-responsive-popover-header-no-title": !this.headerText,
			},
		};
	}

	static get template() {
		return main$1;
	}

	static get dependencies() {
		return [
			Button,
			Dialog,
			Title,
		];
	}

	/**
	 * Opens popover on desktop and dialog on mobile.
	 * @param {HTMLElement} opener the element that the popover is opened by
	 * @public
	 * @async
	 * @returns {Promise} Resolves when the responsive popover is open
	 */
	async open(opener) {
		this.style.display = this._isPhone ? "contents" : "";

		if (this.isOpen() || (this._dialog && this._dialog.isOpen())) {
			return;
		}

		if (!isPhone()) {
			// make popover width be >= of the opener's width
			if (!this.noStretch) {
				this._minWidth = Math.max(POPOVER_MIN_WIDTH, opener.getBoundingClientRect().width);
			}

			await this.openBy(opener);
		} else {
			this.style.zIndex = getNextZIndex();
			await this._dialog.open();
		}
	}

	/**
	 * Closes the popover/dialog.
	 * @public
	 */
	close(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
		if (!isPhone()) {
			super.close(escPressed, preventRegistryUpdate, preventFocusRestore);
		} else {
			this._dialog.close();
		}
	}

	toggle(opener) {
		if (this.isOpen()) {
			return this.close();
		}

		this.open(opener);
	}

	/**
	 * Tells if the responsive popover is open
	 * @public
	 * @returns {boolean}
	 */
	isOpen() {
		return isPhone() ? this._dialog.isOpen() : super.isOpen();
	}

	get styles() {
		const popoverStyles = super.styles;

		popoverStyles.root = {
			"min-width": `${this._minWidth}px`,
		};

		return popoverStyles;
	}

	get _dialog() {
		return this.shadowRoot.querySelector("[ui5-dialog]");
	}

	get _isPhone() {
		return isPhone();
	}

	get _displayHeader() {
		return (this._isPhone || !this.contentOnlyOnDesktop) && super._displayHeader;
	}

	get _displayFooter() {
		return this._isPhone || !this.contentOnlyOnDesktop;
	}

	get _closeDialogAriaLabel() {
		return this.i18nBundle.getText(RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON);
	}

	_afterDialogOpen(event) {
		this.opened = true;
		this._propagateDialogEvent(event);
	}

	_afterDialogClose(event) {
		this.opened = false;
		this._propagateDialogEvent(event);
	}

	_propagateDialogEvent(event) {
		const type = event.type.replace("ui5-", "");

		this.fireEvent(type, event.detail);
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

ResponsivePopover.define();

export { ResponsivePopover as R };
