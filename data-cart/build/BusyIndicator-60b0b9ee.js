import { D as DataType, s as scopedHtml, i as ifDefined, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, h as classMap, f as fetchI18nBundle } from './Icons-85d4abff.js';
import { g as getI18nBundle, B as BUSY_INDICATOR_TITLE, i as isIE } from './i18n-defaults-dca87248.js';

/**
 * @lends sap.ui.webcomponents.main.types.BusyIndicatorSize.prototype
 * @public
 */
const BusyIndicatorSizes = {
	/**
	 * small size
	 * @public
	 * @type {Small}
	 */
	Small: "Small",

	/**
	 * medium size
	 * @public
	 * @type {Medium}
	 */
	Medium: "Medium",

	/**
	 * large size
	 * @public
	 * @type {Large}
	 */
	Large: "Large",
};

/**
 * @class
 * Different types of BusyIndicator.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.BusyIndicatorSize
 * @public
 * @enum {string}
 */
class BusyIndicatorSize extends DataType {
	static isValid(value) {
		return !!BusyIndicatorSizes[value];
	}
}

BusyIndicatorSize.generateTypeAccessors(BusyIndicatorSizes);

const block0$1 = (context) => { return scopedHtml`<label class="ui5-label-root" dir="${ifDefined(context.effectiveDir)}" @click=${context._onclick} for="${ifDefined(context.for)}"><span class="ui5-label-text-wrapper"><bdi id="${ifDefined(context._id)}-bdi"><slot></slot></bdi></span><span class="ui5-label-required-colon"></span></label>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const labelCss = ":host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%}:host(:not([wrap])) .ui5-label-root{font-weight:inherit;display:inline-block;white-space:nowrap;cursor:inherit;overflow:hidden}bdi{content:\"\";padding-right:.15625rem}:host(:not([wrap])) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;max-width:100%}:host(:not([wrap])[required][show-colon]) .ui5-label-text-wrapper{max-width:calc(100% - .85rem)}:host(:not([wrap])[required]) .ui5-label-text-wrapper{max-width:calc(100% - .475rem)}:host(:not([wrap])[show-colon]) .ui5-label-text-wrapper{max-width:calc(100% - .2rem)}:host([show-colon]) .ui5-label-required-colon:before{content:\":\"}:host([required]) .ui5-label-required-colon:after{content:\"*\";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}:host([required][show-colon]) .ui5-label-required-colon:after{margin-right:0;margin-left:.125rem}:host([required][show-colon]) [dir=rtl] .ui5-label-required-colon:after{margin-right:.125rem;margin-left:0}";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-label",
	properties: /** @lends sap.ui.webcomponents.main.Label.prototype */  {

		/**
		 * Defines whether an asterisk character is added to the <code>ui5-label</code> text.
		 * <br><br>
		 * <b>Note:</b> Usually indicates that user input is required.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		required: {
			type: Boolean,
		},

		/**
		 * Determines whether the <code>ui5-label</code> should wrap, when there is not enough space.
		 * <br><br>
		 * <b>Note:</b> By default the text would truncate.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		wrap: {
			type: Boolean,
		},

		/**
		 * Defines whether semi-colon is added to the <code>ui5-label</code> text.
		 * <br><br>
		 * <b>Note:</b> Usually used in forms.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */

		showColon: {
			type: Boolean,
		},

		/**
		 * Defines the labeled input by providing its ID.
		 * <br><br>
		 * <b>Note:</b> Can be used with both <code>ui5-input</code> and native input.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		"for": {
			type: String,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.Label.prototype */ {
		/**
		 * Defines the text of the <code>ui5-label</code>.
		 * <br><b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: Node,
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-label</code> is a component used to represent a label,
 * providing valuable information to the user.
 * Usually it is placed next to a value holder, such as a text field.
 * It informs the user about what data is displayed or expected in the value holder.
 * <br><br>
 * The <code>ui5-label</code> appearance can be influenced by properties,
 * such as <code>required</code> and <code>wrap</code>.
 * The appearance of the Label can be configured in a limited way by using the design property.
 * For a broader choice of designs, you can use custom styles.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Label";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Label
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-label
 * @public
 */
class Label extends UI5Element {
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
		return labelCss;
	}

	_onclick() {
		const elementToFocus = document.getElementById(this.for);
		if (elementToFocus) {
			elementToFocus.focus();
		}
	}
}

Label.define();

const block0 = (context) => { return scopedHtml`<div class="${classMap(context.classes.root)}">${ context.active ? block1(context) : undefined }<slot tabindex="${ifDefined(context.slotTabIndex)}"></slot></div>`; };
const block1 = (context) => { return scopedHtml`<div class="ui5-busyindicator-busy-area" title="${ifDefined(context.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${ifDefined(context._id)}-label"><div class="ui5-busyindicator-circles-wrapper"><div class="ui5-busyindicator-circle circle-animation-0"></div><div class="ui5-busyindicator-circle circle-animation-1"></div><div class="ui5-busyindicator-circle circle-animation-2"></div></div>${ context.text ? block2(context) : undefined }</div>`; };
const block2 = (context) => { return scopedHtml`<ui5-label id="${ifDefined(context._id)}-label" class="ui5-busyindicator-text">${ifDefined(context.text)}</ui5-label>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const busyIndicatorCss = ":host(:not([hidden])){display:inline-block}:host([active]){color:var(--sapContent_IconColor)}:host([active]) :not(.ui5-busyindicator-root--ie) ::slotted(:not([class^=ui5-busyindicator-])){opacity:.6}:host([active]) .ui5-busyindicator-root--ie ::slotted(:not([class^=ui5-busyindicator-])){opacity:.95}:host([size=Small]) .ui5-busyindicator-root{min-width:1.5em;min-height:.5rem}:host([size=Small][text]:not([text=\"\"])) .ui5-busyindicator-root{min-height:1.75rem}:host([size=Small]) .ui5-busyindicator-circle{width:.5rem;height:.5rem}:host(:not([size])) .ui5-busyindicator-root,:host([size=Medium]) .ui5-busyindicator-root{min-width:3rem;min-height:1rem}:host(:not([size])[text]:not([text=\"\"])) .ui5-busyindicator-root,:host([size=Medium][text]:not([text=\"\"])) .ui5-busyindicator-root{min-height:2.25rem}:host(:not([size])) .ui5-busyindicator-circle,:host([size=Medium]) .ui5-busyindicator-circle{width:1rem;height:1rem}:host([size=Large]) .ui5-busyindicator-root{min-width:6rem;min-height:2rem}:host([size=Large][text]:not([text=\"\"])) .ui5-busyindicator-root{min-height:3.25rem}:host([size=Large]) .ui5-busyindicator-circle{width:2rem;height:2rem}.ui5-busyindicator-root{display:flex;justify-content:center;align-items:center;position:relative;background-color:inherit}.ui5-busyindicator-busy-area{position:absolute;z-index:99;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:inherit;flex-direction:column}.ui5-busyindicator-busy-area:focus{outline:1px dotted var(--sapContent_FocusColor);outline-offset:-2px}.ui5-busyindicator-circles-wrapper{line-height:0}.ui5-busyindicator-circle{display:inline-block;background-color:currentColor;border-radius:50%}.ui5-busyindicator-circle:before{content:\"\";width:100%;height:100%;border-radius:100%}.circle-animation-0{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite}.circle-animation-1{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite;animation-delay:.2s}.circle-animation-2{animation:grow 1.6s cubic-bezier(.32,.06,.85,1.11) infinite;animation-delay:.4s}.ui5-busyindicator-text{width:100%;margin-top:.25rem;text-align:center}@keyframes grow{0%,50%,to{-webkit-transform:scale(.5);-moz-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}25%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-busyindicator",
	languageAware: true,
	slots: /** @lends sap.ui.webcomponents.main.BusyIndicator.prototype */ {

		/**
		 * Determines the content over which the <code>ui5-busyindicator</code> will appear.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: Node,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.BusyIndicator.prototype */ {

		/**
		 * Defines text to be displayed below the busy indicator. It can be used to inform the user of the current operation.
		 * @type {String}
		 * @public
		 * @defaultvalue ""
		 * @since 1.0.0-rc.7
		 */
		text: {
			type: String,
		},

		/**
		 * Defines the size of the <code>ui5-busyindicator</code>.
		 * <br><br>
		 * <b>Note:</b> Available options are "Small", "Medium", and "Large".
		 *
		 * @type {BusyIndicatorSize}
		 * @defaultvalue "Medium"
		 * @public
		 */
		size: {
			type: BusyIndicatorSize,
			defaultValue: BusyIndicatorSize.Medium,
		},

		/**
		 * Defines if the busy indicator is visible on the screen. By default it is not.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		active: {
			type: Boolean,
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-busyindicator</code> signals that some operation is going on and that the
 *  user must wait. It does not block the current UI screen so other operations could be
 *  triggered in parallel.
 *
 * <h3>Usage</h3>
 * For the <code>ui5-busyindicator</code> you can define the size of the indicator, as well
 * as whether it is shown or hidden. In order to hide it, use the html attribute <code>hidden</code> or <code>display: none;</code>
 * <br><br>
 * In order to show busy state for an HTML element, simply nest the HTML element in a <code>ui5-busyindicator</code> instance.
 * <br>
 * <b>Note:</b> Since <code>ui5-busyindicator</code> has <code>display: inline-block;</code> by default and no width of its own,
 * whenever you need to wrap a block-level element, you should set <code>display: block</code> to the busy indicator as well.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/BusyIndicator";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.BusyIndicator
 * @extends UI5Element
 * @tagname ui5-busyindicator
 * @public
 * @since 0.12.0
 */
class BusyIndicator extends UI5Element {
	constructor() {
		super();

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
		this._preventHandler = this._preventEvent.bind(this);
	}

	onEnterDOM() {
		this.addEventListener("keyup", this._preventHandler, {
			capture: true,
		});

		this.addEventListener("keydown", this._preventHandler, {
			capture: true,
		});
	}

	onExitDOM() {
		this.removeEventListener("keyup", this._preventHandler, true);
		this.removeEventListener("keydown", this._preventHandler, true);
	}

	static get metadata() {
		return metadata;
	}

	static get styles() {
		return busyIndicatorCss;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main;
	}

	static get dependencies() {
		return [Label];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}

	get ariaTitle() {
		return this.i18nBundle.getText(BUSY_INDICATOR_TITLE);
	}

	get classes() {
		return {
			root: {
				"ui5-busyindicator-root": true,
				"ui5-busyindicator-root--ie": isIE(),
			},
		};
	}

	get slotTabIndex() {
		return this.active ? -1 : 0;
	}

	_preventEvent(event) {
		if (this.active) {
			event.stopImmediatePropagation();
		}
	}
}

BusyIndicator.define();

export { BusyIndicator as B, Label as L };
