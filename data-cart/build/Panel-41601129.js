import { p as getAnimationMode$1, D as DataType, s as scopedHtml, i as ifDefined, h as classMap, a as styleMap, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, f as fetchI18nBundle } from './Icons-85d4abff.js';
import { a as animationConfig, b as animate } from './animate-55fc3ba3.js';
import { g as getI18nBundle, d as isEnter, c as isSpace, P as PANEL_ICON } from './i18n-defaults-dca87248.js';
import './slim-arrow-right-08785783.js';
import { B as Button } from './Button-7dc82d4c.js';
import { T as TitleLevel } from './TitleLevel-a10fe215.js';

const slideDown = ({
	element = animationConfig.element,
	duration = animationConfig.defaultDuration,
	progress: progressCallback = animationConfig.identity,
}) => {
	let computedStyles,
		paddingTop,
		paddingBottom,
		marginTop,
		marginBottom,
		height;
	let storedOverflow,
		storedPaddingTop,
		storedPaddingBottom,
		storedMarginTop,
		storedMarginBottom,
		storedHeight;

	const animation = animate({
		beforeStart: () => {
			// Show the element to measure its properties
			element.style.display = "block";

			// Get Computed styles
			computedStyles = getComputedStyle(element);
			paddingTop = parseFloat(computedStyles.paddingTop);
			paddingBottom = parseFloat(computedStyles.paddingBottom);
			marginTop = parseFloat(computedStyles.marginTop);
			marginBottom = parseFloat(computedStyles.marginBottom);
			height = parseFloat(computedStyles.height);

			// Store inline styles
			storedOverflow = element.style.overflow;
			storedPaddingTop = element.style.paddingTop;
			storedPaddingBottom = element.style.paddingBottom;
			storedMarginTop = element.style.marginTop;
			storedMarginBottom = element.style.marginBottom;
			storedHeight = element.style.height;

			element.style.overflow = "hidden";
			element.style.paddingTop = 0;
			element.style.paddingBottom = 0;
			element.style.marginTop = 0;
			element.style.marginBottom = 0;
			element.style.height = 0;
		},
		duration,
		element,
		progress(progress) {
			progressCallback(progress);

			// WORKAROUND
			element.style.display = "block";
			// END OF WORKAROUND

			/* eslint-disable */
			element.style.paddingTop = 0 + (paddingTop * progress) + "px";
			element.style.paddingBottom = 0 + (paddingBottom * progress) + "px";
			element.style.marginTop = 0 + (marginTop * progress) + "px";
			element.style.marginBottom = 0 + (marginBottom * progress) + "px";
			element.style.height = 0 + (height * progress) + "px";
			/* eslint-enable */
		},
	});

	animation.promise().then(() => {
		element.style.overflow = storedOverflow;
		element.style.paddingTop = storedPaddingTop;
		element.style.paddingBottom = storedPaddingBottom;
		element.style.marginTop = storedMarginTop;
		element.style.marginBottom = storedMarginBottom;
		element.style.height = storedHeight;
	});

	return animation;
};

const slideUp = ({
	element = animationConfig.element,
	duration = animationConfig.defaultDuration,
	progress: progressCallback = animationConfig.identity,
}) => {
	// Get Computed styles
	let computedStyles,
		paddingTop,
		paddingBottom,
		marginTop,
		marginBottom,
		height;

	// Store inline styles
	let storedOverflow,
		storedPaddingTop,
		storedPaddingBottom,
		storedMarginTop,
		storedMarginBottom,
		storedHeight;

	const animation = animate({
		beforeStart: () => {
			// Get Computed styles
			computedStyles = getComputedStyle(element);
			paddingTop = parseFloat(computedStyles.paddingTop);
			paddingBottom = parseFloat(computedStyles.paddingBottom);
			marginTop = parseFloat(computedStyles.marginTop);
			marginBottom = parseFloat(computedStyles.marginBottom);
			height = parseFloat(computedStyles.height);

			// Store inline styles
			storedOverflow = element.style.overflow;
			storedPaddingTop = element.style.paddingTop;
			storedPaddingBottom = element.style.paddingBottom;
			storedMarginTop = element.style.marginTop;
			storedMarginBottom = element.style.marginBottom;
			storedHeight = element.style.height;

			element.style.overflow = "hidden";
		},
		duration,
		element,
		progress(progress) {
			progressCallback(progress);

			element.style.paddingTop = `${paddingTop - (paddingTop * progress)}px`;
			element.style.paddingBottom = `${paddingBottom - (paddingBottom * progress)}px`;
			element.style.marginTop = `${marginTop - (marginTop * progress)}px`;
			element.style.marginBottom = `${marginBottom - (marginBottom * progress)}px`;
			element.style.height = `${height - (height * progress)}px`;
		},
	});

	animation.promise().then(oReason => {
		if (!(oReason instanceof Error)) {
			element.style.overflow = storedOverflow;
			element.style.paddingTop = storedPaddingTop;
			element.style.paddingBottom = storedPaddingBottom;
			element.style.marginTop = storedMarginTop;
			element.style.marginBottom = storedMarginBottom;
			element.style.height = storedHeight;
			element.style.display = "none";
		}
	});

	return animation;
};

const AnimationMode = {
	Full: "full",
	Basic: "basic",
	Minimal: "minimal",
	None: "none",
};

let animationMode;

const getAnimationMode = () => {
	if (animationMode === undefined) {
		animationMode = getAnimationMode$1();
	}

	return animationMode;
};

const setAnimationMode = newAnimationMode => {
	if (Object.values(AnimationMode).includes(newAnimationMode)) {
		animationMode = newAnimationMode;
	}
};

/**
 * @lends sap.ui.webcomponents.main.types.PanelAccessibleRole.prototype
 * @public
 */
const PanelAccessibleRoles = {

	/**
	 * Represents the ARIA role <code>complementary</code>. A section of the page, designed to be complementary to the main content at a similar level in the DOM hierarchy.
	 * @public
	 * @type {Complementary}
	 */
	Complementary: "Complementary",

	/**
	 * Represents the ARIA role <code>Form</code>. A landmark region that contains a collection of items and objects that, as a whole, create a form.
	 * @public
	 * @type {Form}
	 */
	Form: "Form",

	/**
	 * Represents the ARIA role <code>Region</code>. A section of a page, that is important enough to be included in a page summary or table of contents.
	 * @public
	 * @type {Region}
	 */
	Region: "Region",
};

/**
 * @class
 * Available Panel Accessible Landmark Roles.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.PanelAccessibleRole
 * @public
 * @enum {string}
 */
class PanelAccessibleRole extends DataType {
	static isValid(value) {
		return !!PanelAccessibleRoles[value];
	}
}

PanelAccessibleRole.generateTypeAccessors(PanelAccessibleRoles);

const block0 = (context) => { return scopedHtml`<div data-sap-ui-fastnavgroup="true" class="ui5-panel-root" role="${ifDefined(context.accRole)}" aria-label="${ifDefined(context.effectiveAccessibleName)}"><!-- header: either header or h1 with header text --><div @click="${context._headerClick}" @keydown="${context._headerKeyDown}" @keyup="${context._headerKeyUp}" class="ui5-panel-header" tabindex="${ifDefined(context.headerTabIndex)}" role="${ifDefined(context.accInfo.role)}" aria-expanded="${ifDefined(context.accInfo.ariaExpanded)}" aria-controls="${ifDefined(context.accInfo.ariaControls)}" aria-labelledby="${ifDefined(context.accInfo.ariaLabelledby)}">${ !context.fixed ? block1(context) : undefined }${ context._hasHeader ? block4(context) : block5(context) }</div><!-- content area --><div class="ui5-panel-content" id="${ifDefined(context._id)}-content" tabindex="-1" style="${styleMap(context.styles.content)}"><slot></slot></div></div>`; };
const block1 = (context) => { return scopedHtml`<div class="ui5-panel-header-button-root">${ context._hasHeader ? block2(context) : block3(context) }</div>`; };
const block2 = (context) => { return scopedHtml`<ui5-button design="Transparent" class="ui5-panel-header-button ${classMap(context.classes.headerBtn)}" icon="slim-arrow-right" @click="${context._toggleButtonClick}" ._buttonAccInfo="${ifDefined(context.accInfo.button)}" aria-label="${ifDefined(context.accInfo.button.ariaLabelButton)}"></ui5-button>`; };
const block3 = (context) => { return scopedHtml`<ui5-icon class="ui5-panel-header-button ui5-panel-header-icon ${classMap(context.classes.headerBtn)}" name="slim-arrow-right"></ui5-icon>`; };
const block4 = (context) => { return scopedHtml`<slot name="header"></slot>`; };
const block5 = (context) => { return scopedHtml`<div id="${ifDefined(context._id)}-header-title" role="heading" aria-level="${ifDefined(context.headerAriaLevel)}" class="ui5-panel-header-title">${ifDefined(context.headerText)}</div>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const panelCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host(:not([hidden])){display:block}:host{font-family:\"72override\",var(--sapFontFamily);background-color:var(--sapGroup_TitleBackground);border-bottom:1px solid var(--sapGroup_TitleBorderColor)}:host([fixed]) .ui5-panel-header{padding-left:1rem}.ui5-panel-header{height:var(--_ui5_panel_header_height);width:100%;display:flex;justify-content:flex-start;align-items:center;outline:none;box-sizing:border-box;padding-right:1rem;padding-left:.25rem;border-bottom:1px solid transparent}.ui5-panel-header-icon{color:var(--sapContent_IconColor)}.ui5-panel-header-button-animated{transition:transform .4s ease-out}:host(:not([_has-header])) .ui5-panel-header-button{pointer-events:none}:host(:not([_has-header]):not([fixed])){cursor:pointer}:host(:not([_has-header]):not([fixed])) .ui5-panel-header:focus{outline:var(--_ui5_panel_focus_border);outline-offset:-3px}:host(:not([collapsed])) .ui5-panel-header-button{transform:rotate(90deg)}:host([fixed]) .ui5-panel-header-title{width:100%}.ui5-panel-header-title{width:calc(100% - var(--_ui5_panel_button_root_width));overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"72override\",var(--sapFontHeaderFamily);font-size:var(--sapFontHeader5Size);font-weight:400;color:var(--sapGroup_TitleTextColor)}.ui5-panel-content{padding:.625rem 1rem 1.375rem 1rem;background-color:var(--sapGroup_ContentBackground);outline:none}.ui5-panel-header-button-root{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:var(--_ui5_panel_button_root_width);margin-right:.25rem}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-panel",
	languageAware: true,
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.Panel.prototype */ {

		/**
		 * Defines the <code>ui5-panel</code> header area.
		 * <br><br>
		 * <b>Note:</b> When a header is provided, the <code>headerText</code> property is ignored.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		header: {
			type: HTMLElement,
		},

		/**
		 * Determines the content of the <code>ui5-panel</code>.
		 * The content is visible only when the <code>ui5-panel</code> is expanded.
		 *
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: HTMLElement,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.Panel.prototype */ {

		/**
		 * This property is used to set the header text of the <code>ui5-panel</code>.
		 * The text is visible in both expanded and collapsed states.
		 * <br><br>
		 * <b>Note:</b> This property is overridden by the <code>header</code> slot.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		headerText: {
			type: String,
		},

		/**
		 * Determines whether the <code>ui5-panel</code> is in a fixed state that is not
		 * expandable/collapsible by user interaction.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		fixed: {
			type: Boolean,
		},

		/**
		 * Indicates whether the <code>ui5-panel</code> is collapsed and only the header is displayed.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		collapsed: {
			type: Boolean,
		},

		/**
		 * Sets the accessible aria role of the <code>ui5-panel</code>.
		 * Depending on the usage, you can change the role from the default <code>Form</code>
		 * to <code>Region</code> or <code>Complementary</code>.
		 *
		 * @type {PanelAccessibleRole}
		 * @defaultvalue "Form"
		 * @public
		 */
		accessibleRole: {
			type: PanelAccessibleRole,
			defaultValue: PanelAccessibleRole.Form,
		},

		/**
		 * Defines the "aria-level" of <code>ui5-panel</code> heading,
		 * set by the <code>headerText</code>.
		 * <br><br>
		 * Available options are: <code>"H6"</code> to <code>"H1"</code>.
		 * @type {TitleLevel}
		 * @defaultvalue "H2"
		 * @public
		*/
		headerLevel: {
			type: TitleLevel,
			defaultValue: TitleLevel.H2,
		},

		/**
		 * Sets the accessible aria name of the <code>ui5-panel</code>.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		accessibleName: {
			type: String,
		},

		/**
		 * When set to <code>true</code>, the <code>accessibleName</code> property will be
		 * applied not only on the panel root itself, but on its toggle button too.
		 * <b>Note:</b> This property only has effect if <code>accessibleName</code> is set and a header slot is provided.
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
 		 */
		useAccessibleNameForToggleButton: {
			type: Boolean,
		},

		/**
		 * @private
		 */
		_hasHeader: {
			type: Boolean,
		},

		_header: {
			type: Object,
		},

		_contentExpanded: {
			type: Boolean,
			noAttribute: true,
		},

		_animationRunning: {
			type: Boolean,
			noAttribute: true,
		},

		_buttonAccInfo: {
			type: Object,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Panel.prototype */ {

		/**
		 * Fired when the ui5-panel is expanded/collapsed by user interaction.
		 *
		 * @event
		 * @public
		 */
		toggle: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-panel</code> component is a container which has a header and a
 * content area and is used
 * for grouping and displaying information. It can be collapsed to save space on the screen.
 *
 * <h3>Guidelines:</h3>
 * <ul>
 * <li>Nesting two or more panels is not recommended.</li>
 * <li>Do not stack too many panels on one page.</li>
 * </ul>
 *
 * <h3>Structure</h3>
 * A panel consists of a title bar with a header text or custom header.
 * <br>
 * The content area can contain an arbitrary set of controls.
 * The header is clickable and can be used to toggle between the expanded and collapsed state.
 * It includes an icon which rotates depending on the state.
 * <br>
 * The custom header can be set through the <code>header</code> slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.
 * <br><b>Note:</b> the custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.
 *
 * <h3>Responsive Behavior</h3>
 * <ul>
 * <li>If the width of the panel is set to 100% (default), the panel and its children are
 * resized responsively,
 * depending on its parent container.</li>
 * <li>If the panel has a fixed height, it will take up the space even if the panel is
 * collapsed.</li>
 * <li>When the panel is expandable (the <code>fixed</code> property is set to <code>false</code>),
 * an arrow icon (pointing to the right) appears in front of the header.</li>
 * <li>When the animation is activated, expand/collapse uses a smooth animation to open or
 * close the content area.</li>
 * <li>When the panel expands/collapses, the arrow icon rotates 90 degrees
 * clockwise/counter-clockwise.</li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Panel";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Panel
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-panel
 * @public
 */
class Panel extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main;
	}

	static get styles() {
		return panelCss;
	}

	constructor() {
		super();

		this._header = {};
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	onBeforeRendering() {
		// If the animation is running, it will set the content expanded state at the end
		if (!this._animationRunning) {
			this._contentExpanded = !this.collapsed;
		}

		this._hasHeader = !!this.header.length;
	}

	shouldToggle(node) {
		const customContent = this.header.length;
		if (customContent) {
			return node.classList.contains("ui5-panel-header-button");
		}
		return true;
	}

	shouldAnimate() {
		return getAnimationMode() !== AnimationMode.None;
	}

	_headerClick(event) {
		if (!this.shouldToggle(event.target)) {
			return;
		}

		this._toggleOpen();
	}

	_toggleButtonClick(event) {
		if (event.x === 0 && event.y === 0) {
			event.stopImmediatePropagation();
		}
	}

	_headerKeyDown(event) {
		if (!this.shouldToggle(event.target)) {
			return;
		}

		if (isEnter(event)) {
			this._toggleOpen();
		}

		if (isSpace(event)) {
			event.preventDefault();
		}
	}

	_headerKeyUp(event) {
		if (!this.shouldToggle(event.target)) {
			return;
		}

		if (isSpace(event)) {
			this._toggleOpen();
		}
	}

	_toggleOpen() {
		if (this.fixed) {
			return;
		}

		this.collapsed = !this.collapsed;

		if (!this.shouldAnimate()) {
			this.fireEvent("toggle");
			return;
		}

		this._animationRunning = true;

		const elements = this.getDomRef().querySelectorAll(".ui5-panel-content");
		const animations = [];

		[].forEach.call(elements, oElement => {
			if (this.collapsed) {
				animations.push(slideUp({
					element: oElement,
				}).promise());
			} else {
				animations.push(slideDown({
					element: oElement,
				}).promise());
			}
		});

		Promise.all(animations).then(_ => {
			this._animationRunning = false;
			this._contentExpanded = !this.collapsed;
			this.fireEvent("toggle");
		});
	}

	_headerOnTarget(target) {
		return target.classList.contains("sapMPanelWrappingDiv");
	}

	get classes() {
		return {
			headerBtn: {
				"ui5-panel-header-button-animated": this.shouldAnimate(),
			},
		};
	}

	get toggleButtonTitle() {
		return this.i18nBundle.getText(PANEL_ICON);
	}

	get expanded() {
		return !this.collapsed;
	}

	get accRole() {
		return this.accessibleRole.toLowerCase();
	}

	get effectiveAccessibleName() {
		return typeof this.accessibleName === "string" && this.accessibleName.length ? this.accessibleName : undefined;
	}

	get accInfo() {
		return {
			"button": {
				"ariaExpanded": this.expanded,
				"ariaControls": `${this._id}-content`,
				"title": this.toggleButtonTitle,
				"ariaLabelButton": !this.nonFocusableButton && this.useAccessibleNameForToggleButton ? this.effectiveAccessibleName : undefined,
			},
			"ariaExpanded": this.nonFixedInternalHeader ? this.expanded : undefined,
			"ariaControls": this.nonFixedInternalHeader ? `${this._id}-content` : undefined,
			"ariaLabelledby": this.nonFocusableButton ? this.ariaLabelledbyReference : undefined,
			"role": this.nonFixedInternalHeader ? "button" : undefined,
		};
	}

	get ariaLabelledbyReference() {
		return (this.nonFocusableButton && this.headerText) ? `${this._id}-header-title` : undefined;
	}

	get header() {
		return this.getDomRef().querySelector(`#${this._id}-header-title`);
	}

	get headerAriaLevel() {
		return this.headerLevel.slice(1);
	}

	get headerTabIndex() {
		return (this.header.length || this.fixed) ? "-1" : "0";
	}

	get nonFixedInternalHeader() {
		return !this._hasHeader && !this.fixed;
	}

	get nonFocusableButton() {
		return !this.header.length;
	}

	get shouldRenderH1() {
		return !this.header.length && (this.headerText || !this.fixed);
	}

	get styles() {
		return {
			content: {
				display: this._contentExpanded ? "block" : "none",
			},
		};
	}

	static get dependencies() {
		return [Button];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

Panel.define();
