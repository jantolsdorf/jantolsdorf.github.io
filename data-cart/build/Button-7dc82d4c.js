import { s as scopedHtml, i as ifDefined, j as scopedSvg, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, w as isLegacyBrowser, n as createStyleInHead, x as getIconDataSync, y as getIconData, v as getI18nBundleData, f as fetchI18nBundle, D as DataType, a as styleMap, k as getFeature } from './Icons-85d4abff.js';
import { d as isEnter, c as isSpace, g as getI18nBundle, p as isPhone, s as isTablet, a as getEffectiveAriaLabelText, t as BUTTON_ARIA_TYPE_ACCEPT, u as BUTTON_ARIA_TYPE_REJECT, v as BUTTON_ARIA_TYPE_EMPHASIZED } from './i18n-defaults-dca87248.js';

const block0$1 = (context) => { return scopedHtml`<svg class="ui5-icon-root" tabindex="${ifDefined(context.tabIndex)}" dir="${ifDefined(context._dir)}" viewBox="0 0 512 512" role="${ifDefined(context.role)}" focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="${ifDefined(context.effectiveAccessibleName)}" xmlns="http://www.w3.org/2000/svg" @focusin=${context._onfocusin} @focusout=${context._onfocusout} @keydown=${context._onkeydown} @keyup=${context._onkeyup} @click=${context._onclick}>${blockSVG1(context)}</svg>`; };
const block1$1 = (context) => { return scopedSvg`<title id="${ifDefined(context._id)}-tooltip">${ifDefined(context.effectiveAccessibleName)}</title>`; };

const blockSVG1 = (context) => {return scopedSvg`${ context.hasIconTooltip ? block1$1(context) : undefined }<g role="presentation"><path d="${ifDefined(context.pathData)}"/></g>`};

const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const iconCss = ":host([hidden]){display:none}:host([invalid]){display:none}:host(:not([hidden]).ui5_hovered){opacity:.7}:host{display:inline-block;width:1rem;height:1rem;color:var(--sapContent_NonInteractiveIconColor);fill:currentColor;outline:none}:host([interactive][focused]) .ui5-icon-root{outline:1px dotted var(--sapContent_FocusColor)}.ui5-icon-root{display:flex;outline:none;vertical-align:top}:host(:not([dir=ltr])) .ui5-icon-root[dir=rtl]{transform:scaleX(-1);transform-origin:center}";

const ICON_NOT_FOUND = "ICON_NOT_FOUND";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-icon",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.Icon.prototype */ {
		/**
		 * Defines if the icon is interactive (focusable and pressable)
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.8
		 */
		interactive: {
			type: Boolean,
		},

		/**
		 * Defines the unique identifier (icon name) of each <code>ui5-icon</code>.
		 * <br>
		 *
		 * To browse all available icons, see the
		 * <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 * <br>
		 *
		 * Example:
		 * <br>
		 * <code>name='add'</code>, <code>name='delete'</code>, <code>name='employee'</code>.
		 * <br><br>
		 *
		 * <b>Note:</b> To use the SAP Fiori Tools icons,
		 * you need to set the <code>tnt</code> prefix in front of the icon's name.
		 * <br>
		 *
		 * Example:
		 * <br>
		 * <code>name='tnt/antenna'</code>, <code>name='tnt/actor'</code>, <code>name='tnt/api'</code>.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		*/
		name: {
			type: String,
		},

		/**
		 * Defines the text alternative of the <code>ui5-icon</code>.
		 * If not provided a default text alternative will be set, if present.
		 * <br><br>
		 * <b>Note:</b> Every icon should have a text alternative in order to
		 * calculate its accessible name.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		accessibleName: {
			type: String,
		},

		/**
		 * Defines whether the <code>ui5-icon</code> should have a tooltip.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		showTooltip: {
			type: Boolean,
		},

		/**
		 * @private
		 */
		pathData: {
			type: String,
			noAttribute: true,
		},

		/**
		 * @private
		 */
		accData: {
			type: Object,
			noAttribute: true,
		},

		/**
		 * @private
		 */
		focused: {
			type: Boolean,
		},

		/**
		* @private
		*/
		invalid: {
			type: Boolean,
		},

		/**
		 * @private
		 */
		effectiveAccessibleName: {
			type: String,
			noAttribute: true,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Icon.prototype */ {
		/**
		 * Fired on mouseup, space and enter if icon is interactive
		 * @private
		 * @since 1.0.0-rc.8
		 */
		click: {},
	},
};

/**
 * @class
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-icon</code> component represents an SVG icon.
 * There are two main scenarios how the <code>ui5-icon</code> component is used:
 * as a purely decorative element; or as a visually appealing clickable area in the form of an icon button.
 * <br><br>
 * A large set of built-in icons is available
 * and they can be used by setting the <code>name</code> property on the <code>ui5-icon</code>.
 * But before using an icon, you need to import the desired icon.
 * <br>
 *
 * For the standard icon collection, you have to import an icon from the <code>@ui5/webcomponents-icons</code> package:
 * <br>
 * <code>import "@ui5/webcomponents-icons/dist/employee.js";</code>
 * <br>
 *
 * For the SAP Fiori Tools icon collection (supported since 1.0.0-rc.10), you have to import an icon from the <code>@ui5/webcomponents-icons-tnt</code> package:
 * <br>
 * <code>import "@ui5/webcomponents-icons-tnt/dist/antenna.js";</code>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Icon.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Icon
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-icon
 * @implements sap.ui.webcomponents.main.IIcon
 * @public
 */
class Icon extends UI5Element {
	static get metadata() {
		return metadata$1;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$1;
	}

	static get styles() {
		return iconCss;
	}

	static async onDefine() {
		this.createGlobalStyle(); // hide all icons until the first icon has rendered (and added the Icon.css)
	}

	_onfocusin(event) {
		if (this.interactive) {
			this.focused = true;
		}
	}

	_onfocusout(event) {
		this.focused = false;
	}

	_onkeydown(event) {
		if (!this.interactive) {
			return;
		}

		if (isEnter(event)) {
			this.fireEvent("click");
		}

		if (isSpace(event)) {
			event.preventDefault(); // prevent scrolling
		}
	}

	_onkeyup(event) {
		if (this.interactive && isSpace(event)) {
			this.fireEvent("click");
		}
	}

	_onclick(event) {
		if (this.interactive) {
			// prevent the native event and fire custom event to ensure the noConfict "ui5-click" is fired
			event.stopPropagation();
			this.fireEvent("click");
		}
	}

	get _dir() {
		if (!this.effectiveDir) {
			return;
		}

		if (this.ltr) {
			return "ltr";
		}

		return this.effectiveDir;
	}

	get tabIndex() {
		return this.interactive ? "0" : "-1";
	}

	get role() {
		if (this.interactive) {
			return "button";
		}

		return this.effectiveAccessibleName ? "img" : "presentation";
	}

	static createGlobalStyle() {
		if (isLegacyBrowser()) {
			const styleElement = document.head.querySelector(`style[data-ui5-icon-global]`);
			if (!styleElement) {
				createStyleInHead(`ui5-icon { display: none !important; }`, { "data-ui5-icon-global": "" });
			}
		}
	}

	static removeGlobalStyle() {
		if (isLegacyBrowser()) {
			const styleElement = document.head.querySelector(`style[data-ui5-icon-global]`);
			if (styleElement) {
				document.head.removeChild(styleElement);
			}
		}
	}

	async onBeforeRendering() {
		const name = this.name;
		if (!name) {
			/* eslint-disable-next-line */
			return console.warn("Icon name property is required", this);
		}
		let iconData = getIconDataSync(name);
		if (!iconData) {
			iconData = await getIconData(name);
		}

		if (iconData === ICON_NOT_FOUND) {
			this.invalid = true;
			/* eslint-disable-next-line */
			return console.warn(`Required icon is not registered. You can either import the icon as a module in order to use it e.g. "@ui5/webcomponents-icons/dist/${name.replace("sap-icon://", "")}.js", or setup a JSON build step and import "@ui5/webcomponents-icons/dist/Assets.js".`);
		}

		if (!iconData) {
			this.invalid = true;
			/* eslint-disable-next-line */
			return console.warn(`Required icon is not registered. Invalid icon name: ${this.name}`);
		}

		// in case a new valid name is set, show the icon
		this.invalid = false;
		this.pathData = iconData.pathData;
		this.accData = iconData.accData;
		this.ltr = iconData.ltr;
		this.packageName = iconData.packageName;

		if (this.accessibleName) {
			this.effectiveAccessibleName = this.accessibleName;
		} else if (this.accData) {
			if (!getI18nBundleData(this.packageName)) {
				await fetchI18nBundle(this.packageName);
			}
			const i18nBundle = getI18nBundle(this.packageName);
			this.effectiveAccessibleName = i18nBundle.getText(this.accData) || undefined;
		}
	}

	get hasIconTooltip() {
		return this.showTooltip && this.effectiveAccessibleName;
	}

	async onEnterDOM() {
		setTimeout(() => {
			this.constructor.removeGlobalStyle(); // remove the global style as Icon.css is already in place
		}, 0);
	}
}

Icon.define();

/**
 * @lends sap.ui.webcomponents.main.types.ButtonDesign.prototype
 * @public
 */
const ButtonTypes = {
	/**
	 * default type (no special styling)
	 * @public
	 * @type {Default}
	 */
	Default: "Default",

	/**
	 * accept type (green button)
	 * @public
	 * @type {Positive}
	 */
	Positive: "Positive",

	/**
	 * reject style (red button)
	 * @public
	 * @type {Negative}
	 */
	Negative: "Negative",

	/**
	 * transparent type
	 * @public
	 * @type {Transparent}
	 */
	Transparent: "Transparent",

	/**
	 * emphasized type
	 * @public
	 * @type {Emphasized}
	 */
	Emphasized: "Emphasized",
};

/**
 * @class
 * Different types of Button.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.ButtonDesign
 * @public
 * @enum {string}
 */
class ButtonDesign extends DataType {
	static isValid(value) {
		return !!ButtonTypes[value];
	}
}

ButtonDesign.generateTypeAccessors(ButtonTypes);

const block0 = (context) => { return scopedHtml`<button type="button" class="ui5-button-root" ?disabled="${context.disabled}" data-sap-focus-ref  dir="${ifDefined(context.effectiveDir)}" @focusout=${context._onfocusout} @focusin=${context._onfocusin} @click=${context._onclick} @mousedown=${context._onmousedown} @mouseup=${context._onmouseup} @keydown=${context._onkeydown} @keyup=${context._onkeyup} @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" tabindex=${ifDefined(context.tabIndexValue)} aria-expanded="${ifDefined(context.accInfo.ariaExpanded)}" aria-controls="${ifDefined(context.accInfo.ariaControls)}" aria-haspopup="${ifDefined(context.accInfo.ariaHaspopup)}" aria-label="${ifDefined(context.ariaLabelText)}" title="${ifDefined(context.accInfo.title)}" part="button">${ context.icon ? block1(context) : undefined }<span id="${ifDefined(context._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${ context.hasButtonType ? block2(context) : undefined }</button> `; };
const block1 = (context) => { return scopedHtml`<ui5-icon style="${styleMap(context.styles.icon)}" class="ui5-button-icon" name="${ifDefined(context.icon)}" ?show-tooltip=${context.showIconTooltip}></ui5-icon>`; };
const block2 = (context) => { return scopedHtml`<span class="ui5-hidden-text">${ifDefined(context.buttonTypeText)}</span>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const buttonCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5_button_base_min_width);height:var(--_ui5_button_base_height);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5_button_text_shadow);border-radius:var(--_ui5_button_border_radius);border-width:.0625rem;cursor:pointer;background-color:var(--sapButton_Background);border:1px solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([has-icon]) button[dir=rtl].ui5-button-root .ui5-button-text{margin-right:var(--_ui5_button_base_icon_margin);margin-left:0}:host([has-icon][icon-end]) button[dir=rtl].ui5-button-root .ui5-button-icon{margin-right:var(--_ui5_button_base_icon_margin);margin-left:0}.ui5-button-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):hover),:host(:not([hidden]).ui5_hovered){background:var(--sapButton_Hover_Background)}.ui5-button-icon{color:inherit;flex-shrink:0}:host([icon-end]) .ui5-button-root{flex-direction:row-reverse}:host([icon-end]) .ui5-button-icon{margin-left:var(--_ui5_button_base_icon_margin)}:host([icon-only]) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-button-text{margin-left:var(--_ui5_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-button-text{margin-left:0}:host([disabled]){opacity:.5;pointer-events:none}:host([focused]){outline:var(--_ui5_button_outline);outline-offset:var(--_ui5_button_outline_offset)}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-image:none;background-color:var(--sapButton_Active_Background);border-color:var(--_ui5_button_active_border_color);color:var(--sapButton_Active_TextColor);text-shadow:none}:host([active]:not([_is-touch])){outline-color:var(--sapContent_ContrastFocusColor)}:host([design=Positive]){background-color:var(--sapButton_Accept_Background);border-color:var(--_ui5_button_positive_border_color);color:var(--sapButton_Accept_TextColor);text-shadow:var(--_ui5_button_text_shadow)}:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):hover){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--_ui5_button_positive_border_hover_color)}:host([ui5-button][_is-touch][design=Positive][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--_ui5_button_positive_border_active_color);color:var(--sapButton_Active_TextColor);text-shadow:none}:host([design=Positive][focused]:not([_is-touch])){outline-color:var(--_ui5_button_positive_border_focus_hover_color);border-color:var(--_ui5_button_positive_focus_border_color)}:host([design=Positive][active][focused]){outline-color:var(--sapContent_ContrastFocusColor)}:host([design=Negative]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor);text-shadow:var(--_ui5_button_text_shadow)}:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):hover){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor)}:host([design=Negative][focused]){border-color:var(--_ui5_button_negative_focus_border_color);outline-color:var(--_ui5_button_positive_border_focus_hover_color)}:host([ui5-button][design=Negative][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--_ui5_button_negative_active_border_color);color:var(--sapButton_Active_TextColor);text-shadow:none}:host([design=Negative][active][focused]){outline-color:var(--sapContent_ContrastFocusColor)}:host([design=Emphasized]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);color:var(--sapButton_Emphasized_TextColor);text-shadow:0 0 .125rem var(--sapButton_Emphasized_TextShadow);font-weight:var(--_ui5_button_emphasized_font_weight)}:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):hover){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor)}:host([ui5-button][design=Empasized][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Active_TextColor);text-shadow:none}:host([design=Emphasized][focused]){outline-color:var(--sapContent_ContrastFocusColor);border-color:var(--_ui5_button_emphasized_focused_border_color)}:host([design=Transparent]){background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);text-shadow:var(--_ui5_button_text_shadow);border-color:var(--_ui5_button_transparent_border_color)}:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):hover){background-color:var(--sapButton_Lite_Hover_Background)}:host([ui5-button][design=Transparent][active]:not([non-interactive])){background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor);text-shadow:none}:host([design=Transparent]:not([active]):hover){border-color:var(--_ui5_button_transparent_hover_border_color)}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const buttonIECss = "[ui5-button][focused]{outline:none}[ui5-button][focused] .ui5-button-root{position:relative}[ui5-button][focused] .ui5-button-root:after{content:\"\";position:absolute;border-width:1px;border-style:dotted;border-color:var(--_ui5_button_focus_color);top:var(--_ui5_button_focus_offset);bottom:var(--_ui5_button_focus_offset);left:var(--_ui5_button_focus_offset);right:var(--_ui5_button_focus_offset)}[ui5-button][active] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-button][design=Positive][focused] .ui5-button-root:after{border-color:var(--_ui5_button_positive_border_focus_hover_color)}[ui5-button][design=Positive][active][focused] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-button][design=Negative][focused] .ui5-button-root:after{border-color:var(--_ui5_button_positive_border_focus_hover_color)}[ui5-button][design=Negative][active][focused] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-button][design=Emphasized][focused] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-button] [ui5-icon].ui5-button-icon{height:var(--_ui5_button_icon_font_size);top:0}";

let isGlobalHandlerAttached = false;
let activeButton = null;

/**
 * @public
 */
const metadata = {
	tag: "ui5-button",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.Button.prototype */ {

		/**
		 * Defines the <code>ui5-button</code> design.
		 * <br><br>
		 * <b>Note:</b> Available options are "Default", "Emphasized", "Positive",
		 * "Negative", and "Transparent".
		 *
		 * @type {ButtonDesign}
		 * @defaultvalue "Default"
		 * @public
		 */
		design: {
			type: ButtonDesign,
			defaultValue: ButtonDesign.Default,
		},

		/**
		 * Defines whether the <code>ui5-button</code> is disabled
		 * (default is set to <code>false</code>).
		 * A disabled <code>ui5-button</code> can't be pressed or
		 * focused, and it is not in the tab chain.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines the icon to be displayed as graphical element within the <code>ui5-button</code>.
		 * The SAP-icons font provides numerous options.
		 * <br><br>
		 * Example:
		 * <br>
		 * <pre>ui5-button icon="palette"</pre>
		 *
		 * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		icon: {
			type: String,
		},

		/**
		 * Defines whether the icon should be displayed after the <code>ui5-button</code> text.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		iconEnd: {
			type: Boolean,
		},

		/**
		 * Defines the size of the icon inside the <code>ui5-button</code>.
		 *
		 * @type {string}
		 * @defaultvalue undefined
		 * @public
		 * @since 1.0.0-rc.8
		 */
		iconSize: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * When set to <code>true</code>, the <code>ui5-button</code> will
		 * automatically submit the nearest form element upon <code>press</code>.
		 * <br><br>
		 * <b>Important:</b> For the <code>submits</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		submits: {
			type: Boolean,
		},

		/**
		 * Defines the tooltip of the button.
		 * <br>
		 * <b>Important:</b> Tooltips should only be set to icon only buttons.
		 * @type {string}
		 * @defaultvalue: ""
		 * @private
		 * @since 1.0.0-rc.11
		 */
		title: {
			type: String,
		},

		/**
		 * Used to switch the active state (pressed or not) of the <code>ui5-button</code>.
		 * @private
		 */
		active: {
			type: Boolean,
		},

		/**
		 * Defines if a content has been added to the default slot
		 * @private
		 */
		iconOnly: {
			type: Boolean,
		},

		/**
		 * Indicates if the elements is on focus
		 * @private
		 */
		focused: {
			type: Boolean,
		},

		/**
		 * Indicates if the elements has a slotted icon
		 * @private
		 */
		hasIcon: {
			type: Boolean,
		},

		/**
		 * Defines the aria-label attribute for the button
		 * @type {String}
		 * @defaultvalue: ""
		 * @private
		 * @since 1.0.0-rc.7
		 */
		ariaLabel: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * Receives id(or many ids) of the elements that label the button
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.7
		 */
		ariaLabelledby: {
			type: String,
			defaultValue: "",
		},

		/**
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.8
		 */
		ariaExpanded: {
			type: String,
		},

		/**
		 * Indicates if the element if focusable
		 * @private
		 */
		nonInteractive: {
			type: Boolean,
		},

		_iconSettings: {
			type: Object,
		},

		_buttonAccInfo: {
			type: Object,
		},

		/**
		 * Defines the tabIndex of the component.
		 * @private
		 */
		_tabIndex: {
			type: String,
			defaultValue: "0",
			noAttribute: true,
		},

		/**
		 * @since 1.0.0-rc.13
		 * @private
		 */
		_isTouch: {
			type: Boolean,
		},
	},
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.Button.prototype */ {
		/**
		 * Defines the text of the <code>ui5-button</code>.
		 * <br><br>
		 * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: Node,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Button.prototype */ {

		/**
		 * Fired when the <code>ui5-button</code> is activated either with a
		 * mouse/tap or by using the Enter or Space key.
		 * <br><br>
		 * <b>Note:</b> The event will not be fired if the <code>disabled</code>
		 * property is set to <code>true</code>.
		 *
		 * @event
		 * @public
		 * @native
		 */
		click: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-button</code> component represents a simple push button.
 * It enables users to trigger actions by clicking or tapping the <code>ui5-button</code>, or by pressing
 * certain keyboard keys, such as Enter.
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-button</code> UI, you can define text, icon, or both. You can also specify
 * whether the text or the icon is displayed first.
 * <br><br>
 * You can choose from a set of predefined types that offer different
 * styling to correspond to the triggered action.
 * <br><br>
 * You can set the <code>ui5-button</code> as enabled or disabled. An enabled
 * <code>ui5-button</code> can be pressed by clicking or tapping it. The button changes
 * its style to provide visual feedback to the user that it is pressed or hovered over with
 * the mouse cursor. A disabled <code>ui5-button</code> appears inactive and cannot be pressed.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Button";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Button
 * @extends UI5Element
 * @tagname ui5-button
 * @implements sap.ui.webcomponents.main.IButton
 * @public
 */
class Button extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return [buttonCss, isLegacyBrowser() && buttonIECss];
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main;
	}

	static get dependencies() {
		return [Icon];
	}

	constructor() {
		super();

		this._deactivate = () => {
			if (activeButton) {
				activeButton.active = false;
			}
		};

		if (!isGlobalHandlerAttached) {
			document.addEventListener("mouseup", this._deactivate);

			isGlobalHandlerAttached = true;
		}

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	onEnterDOM() {
		this._isTouch = isPhone() || isTablet();
	}

	onBeforeRendering() {
		const FormSupport = getFeature("FormSupport");
		if (this.submits && !FormSupport) {
			console.warn(`In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}

		this.iconOnly = this.isIconOnly;
		this.hasIcon = !!this.icon;
	}

	_onclick(event) {
		if (this.nonInteractive) {
			return;
		}
		event.isMarked = "button";
		const FormSupport = getFeature("FormSupport");
		if (FormSupport) {
			FormSupport.triggerFormSubmit(this);
		}
	}

	_onmousedown(event) {
		if (this.nonInteractive || this._isTouch) {
			return;
		}

		event.isMarked = "button";
		this.active = true;
		activeButton = this; // eslint-disable-line
	}

	_ontouchstart(event) {
		event.isMarked = "button";
		if (this.nonInteractive) {
			return;
		}

		this.active = true;
	}

	_ontouchend(event) {
		this.active = false;

		if (activeButton) {
			activeButton.active = false;
		}
	}

	_onmouseup(event) {
		event.isMarked = "button";
	}

	_onkeydown(event) {
		event.isMarked = "button";

		if (isSpace(event) || isEnter(event)) {
			this.active = true;
		}
	}

	_onkeyup(event) {
		if (isSpace(event) || isEnter(event)) {
			this.active = false;
		}
	}

	_onfocusout(_event) {
		if (this.nonInteractive) {
			return;
		}
		this.active = false;
		this.focused = false;
	}

	_onfocusin(event) {
		if (this.nonInteractive) {
			return;
		}

		event.isMarked = "button";
		this.focused = true;
	}

	get hasButtonType() {
		return this.design !== ButtonDesign.Default && this.design !== ButtonDesign.Transparent;
	}

	get isIconOnly() {
		return !Array.from(this.childNodes).filter(node => {
			return node.nodeType !== Node.COMMENT_NODE
			&& (node.nodeType !== Node.TEXT_NODE || node.nodeValue.trim().length !== 0);
		}).length;
	}

	get accInfo() {
		return {
			"ariaExpanded": this.ariaExpanded || (this._buttonAccInfo && this._buttonAccInfo.ariaExpanded),
			"ariaControls": this._buttonAccInfo && this._buttonAccInfo.ariaControls,
			"ariaHaspopup": this._buttonAccInfo && this._buttonAccInfo.ariaHaspopup,
			"title": this.title || (this._buttonAccInfo && this._buttonAccInfo.title),
		};
	}

	get ariaLabelText() {
		return getEffectiveAriaLabelText(this);
	}

	static typeTextMappings() {
		return {
			"Positive": BUTTON_ARIA_TYPE_ACCEPT,
			"Negative": BUTTON_ARIA_TYPE_REJECT,
			"Emphasized": BUTTON_ARIA_TYPE_EMPHASIZED,
		};
	}

	get buttonTypeText() {
		return this.i18nBundle.getText(Button.typeTextMappings()[this.design]);
	}

	get tabIndexValue() {
		const tabindex = this.getAttribute("tabindex");

		if (tabindex) {
			return tabindex;
		}

		return this.nonInteractive ? "-1" : this._tabIndex;
	}

	get showIconTooltip() {
		return this.iconOnly && !this.title;
	}

	get styles() {
		return {
			icon: {
				width: this.iconSize,
				height: this.iconSize,
			},
		};
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

Button.define();

export { Button as B, Icon as I };
