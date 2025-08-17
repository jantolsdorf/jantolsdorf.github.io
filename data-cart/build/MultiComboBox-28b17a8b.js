import { g as registerIcon, U as UI5Element, s as scopedHtml, i as ifDefined, a as styleMap, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, w as isLegacyBrowser, u as repeat, h as classMap, I as Integer, l as litRender, f as fetchI18nBundle } from './Icons-85d4abff.js';
import { R as ResizeHandler } from './Popover-0d784de7.js';
import { V as ValueState } from './ValueState-a7516d8f.js';
import { g as getI18nBundle, p as isPhone, i as isIE, k as isLeft, x as isShow, f as isDown, w as isBackSpace, h as isRight, c as isSpace, F as VALUE_STATE_SUCCESS, V as VALUE_STATE_ERROR, l as VALUE_STATE_WARNING, I as INPUT_SUGGESTIONS_TITLE, ai as SELECT_OPTIONS, aj as MULTICOMBOBOX_DIALOG_OK_BUTTON } from './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import { T as Tokenizer, a as Token } from './Tokenizer-d8a8b2e5.js';
import { B as Button, I as Icon } from './Button-7dc82d4c.js';
import { R as ResponsivePopover } from './ResponsivePopover-cdfbc391.js';
import { b as List, S as StandardListItem } from './StandardListItem-6305d5b8.js';
import { R as ResponsivePopoverCommonCss, V as ValueStateMessageCss } from './Input-0ee3a2d0.js';

const name$1 = "slim-arrow-down";
const pathData$1 = "M420.5 187q11-12 23 0 5 5 5 11t-5 11l-165 165q-10 9-23 9t-22-9l-166-165q-5-5-5-11.5t5-11.5 11.5-5 11.5 5l160 160q5 6 11 0z";
const ltr$1 = false;
const collection$1 = "SAP-icons";
const packageName$1 = "@ui5/webcomponents-icons";

registerIcon(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

const slimArrowDown = { pathData: pathData$1 };

const name = "multiselect-all";
const pathData = "M92 472l80-97 20 19L92 512l-60-59 20-20zm80-285l20 19L92 323l-60-59 20-19 40 38zm0-187l20 19L92 137 32 78l20-21 40 40zm292 65q16 0 16 16 0 6-4.5 11T464 97H273q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h191zm0 191q16 0 16 16 0 6-4.5 11t-11.5 5H273q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h191zm0 192q16 0 16 16 0 6-4.5 11t-11.5 5H273q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h191z";
const ltr = true;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

const multiselectAll = { pathData };

/**
 * @public
 */
const metadata$3 = {
	tag: "ui5-cb-item",
	properties: /** @lends  sap.ui.webcomponents.main.ComboBoxItem.prototype */ {
		/**
		 * Defines the text of the <code>ui5-cb-item</code>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		text: { type: String },
		/**
		 * Defines the additional text of the <code>ui5-cb-item</code>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @since 1.0.0-rc.11
		 * @public
		 */
		additionalText: { type: String },
	},
};

/**
 * @class
 * The <code>ui5-cb-item</code> represents the item for a <code>ui5-combobox</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ComboBoxItem
 * @extends UI5Element
 * @tagname ui5-cb-item
 * @implements sap.ui.webcomponents.main.IComboBoxItem
 * @public
 */
class ComboBoxItem extends UI5Element {
	static get metadata() {
		return metadata$3;
	}
}

ComboBoxItem.define();

/**
 * @public
 */
const metadata$2 = {
	tag: "ui5-mcb-item",
	properties: /** @lends  sap.ui.webcomponents.main.MultiComboBoxItem.prototype */ {
		/**
		 * Defines the selected state of the <code>ui5-mcb-item</code>.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		selected: { type: Boolean },

		/**
		 * Defines the stable selector that you can use via getStableDomRef method.
		 * @public
		 * @type {string}
		 * @since 1.0.0-rc.11
		 */
		stableDomRef: {
			type: String,
		},
	},
};

/**
 * @class
 * The <code>ui5-mcb-item</code> represents the item for a <code>ui5-multi-combobox</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.MultiComboBoxItem
 * @extends ComboBoxItem
 * @tagname ui5-mcb-item
 * @implements sap.ui.webcomponents.main.IMultiComboBoxItem
 * @public
 */
class MultiComboBoxItem extends ComboBoxItem {
	static get metadata() {
		return metadata$2;
	}
}

MultiComboBoxItem.define();

const block0$2 = (context) => { return scopedHtml`<button type="button" class="ui5-button-root" ?disabled="${context.disabled}" data-sap-focus-ref  aria-pressed="${ifDefined(context.pressed)}"  dir="${ifDefined(context.effectiveDir)}" @focusout=${context._onfocusout} @focusin=${context._onfocusin} @click=${context._onclick} @mousedown=${context._onmousedown} @mouseup=${context._onmouseup} @keydown=${context._onkeydown} @keyup=${context._onkeyup} @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" tabindex=${ifDefined(context.tabIndexValue)} aria-expanded="${ifDefined(context.accInfo.ariaExpanded)}" aria-controls="${ifDefined(context.accInfo.ariaControls)}" aria-haspopup="${ifDefined(context.accInfo.ariaHaspopup)}" aria-label="${ifDefined(context.ariaLabelText)}" title="${ifDefined(context.accInfo.title)}" part="button">${ context.icon ? block1$2(context) : undefined }<span id="${ifDefined(context._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${ context.hasButtonType ? block2$2(context) : undefined }</button> `; };
const block1$2 = (context) => { return scopedHtml`<ui5-icon style="${styleMap(context.styles.icon)}" class="ui5-button-icon" name="${ifDefined(context.icon)}" ?show-tooltip=${context.showIconTooltip}></ui5-icon>`; };
const block2$2 = (context) => { return scopedHtml`<span class="ui5-hidden-text">${ifDefined(context.buttonTypeText)}</span>`; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const toggleBtnCss = ":host(:not([hidden])){display:inline-block}:host([disabled]){pointer-events:none}:host([design=Positive][pressed]),:host([design=Positive][pressed]:hover),:host([design=Positive][pressed][focused]){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Selected_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}:host([design=Positive][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Positive][pressed][active]){background:var(--sapButton_Accept_Selected_Hover_Background)}:host([design=Negative][pressed]),:host([design=Negative][pressed]:hover),:host([design=Negative][pressed][focused]){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Selected_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}:host([design=Negative][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Negative][pressed][active]){background:var(--sapButton_Reject_Selected_Hover_Background)}:host([design=Emphasized][pressed]),:host([design=Emphasized][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Transparent][pressed]),:host([design=Transparent][pressed]:hover),:host([pressed]),:host([pressed]:hover),:host([pressed][focused]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([pressed][active]){background:var(--sapButton_Selected_Hover_Background)}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const toggleBtnIECss = "[ui5-togglebutton][focused]{outline:none}[ui5-togglebutton][focused] .ui5-button-root{position:relative}[ui5-togglebutton][focused] .ui5-button-root:after{content:\"\";position:absolute;border-width:1px;border-style:dotted;border-color:var(--_ui5_button_focus_color);top:var(--_ui5_button_focus_offset);bottom:var(--_ui5_button_focus_offset);left:var(--_ui5_button_focus_offset);right:var(--_ui5_button_focus_offset)}[ui5-togglebutton][active] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-togglebutton][design=Positive][focused] .ui5-button-root:after{border-color:var(--_ui5_button_positive_border_focus_hover_color)}[ui5-togglebutton][design=Positive][active][focused] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-togglebutton][design=Negative][focused] .ui5-button-root:after{border-color:var(--_ui5_button_positive_border_focus_hover_color)}[ui5-togglebutton][design=Negative][active][focused] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-togglebutton][design=Emphasized][focused] .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor)}[ui5-togglebutton] [ui5-icon].ui5-button-icon{height:var(--_ui5_button_icon_font_size);top:0}";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-togglebutton",
	properties: /** @lends  sap.ui.webcomponents.main.ToggleButton.prototype */ {
		/**
		 * Determines whether the <code>ui5-togglebutton</code> is displayed as pressed.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		pressed: {
			type: Boolean,
		},
	},
};

/**
 * @class
 *
 *<h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-togglebutton</code> component is an enhanced <code>ui5-button</code>
 * that can be toggled between pressed and normal states.
 * Users can use the <code>ui5-togglebutton</code> as a switch to turn a setting on or off.
 * It can also be used to represent an independent choice similar to a check box.
 * <br><br>
 * Clicking or tapping on a <code>ui5-togglebutton</code> changes its state to <code>pressed</code>. The button returns to
 * its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any <code>ui5-togglebutton</code>.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/ToggleButton";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ToggleButton
 * @extends Button
 * @tagname ui5-togglebutton
 * @public
 */
class ToggleButton extends Button {
	static get metadata() {
		return metadata$1;
	}

	static get template() {
		return main$2;
	}

	static get styles() {
		return [Button.styles, toggleBtnCss, isLegacyBrowser() && toggleBtnIECss];
	}

	_onclick() {
		this.pressed = !this.pressed;
	}
}

ToggleButton.define();

const escapeReg = /[[\]{}()*+?.\\^$|]/g;

const escapeRegExp = str => {
	return str.replace(escapeReg, "\\$&");
};

const StartsWith = (value, items) => {
	return items.filter(item => {
		const lowerText = item.text.toLowerCase();

		return lowerText.startsWith(value.toLowerCase());
	});
};

const StartsWithPerTerm = (value, items) => {
	const reg = new RegExp(`(^|\\s)${escapeRegExp(value.toLowerCase())}.*`, "g");

	return items.filter(item => {
		reg.lastIndex = 0;

		return reg.test(item.text.toLowerCase());
	});
};

const Contains = (value, items) => {
	return items.filter(item => {
		const lowerText = item.text.toLowerCase();

		return lowerText.includes(value.toLowerCase());
	});
};

const None = (_, items) => items;

const Filters = /*#__PURE__*/Object.freeze({
	__proto__: null,
	StartsWithPerTerm: StartsWithPerTerm,
	StartsWith: StartsWith,
	Contains: Contains,
	None: None
});

const block0$1 = (context) => { return scopedHtml`<div class="ui5-multi-combobox-root"><span id="${ifDefined(context._id)}-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(context._tokensCountText)}</span>${ context.hasValueState ? block1$1(context) : undefined }<ui5-tokenizer slot="_beginContent" show-more class="ui5-multi-combobox-tokenizer" ?disabled="${context.disabled}" @ui5-show-more-items-press="${ifDefined(context._showMorePopover)}" @ui5-token-delete="${ifDefined(context._tokenDelete)}" @focusout="${context._tokenizerFocusOut}" @focusin="${context._tokenizerFocusIn}" @click=${context._click} @keydown="${context._onTokenizerKeydown}" ?expanded="${context._tokenizerExpanded}">${ repeat(context.items, (item, index) => item._id || index, (item, index) => block2$1(item, index, context)) }</ui5-tokenizer><input id="ui5-multi-combobox-input" .value="${ifDefined(context.value)}" inner-input placeholder=${ifDefined(context._getPlaceholder)} ?disabled=${context.disabled} ?readonly=${context.readonly} value-state="${ifDefined(context.valueState)}" @input="${context._inputLiveChange}" @change=${context._inputChange} @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click=${context._click} @focusin=${context.inputFocusIn} @focusout=${context.inputFocusOut} role="combobox" aria-haspopup="listbox" aria-expanded="${ifDefined(context.open)}" aria-autocomplete="both" aria-describedby="${ifDefined(context.ariaDescribedByText)}" aria-required="${ifDefined(context.required)}" />${ context.icon ? block4$1(context) : undefined }${ !context.readonly ? block5$1(context) : undefined }</div>`; };
const block1$1 = (context) => { return scopedHtml`<span id="${ifDefined(context._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(context.valueStateText)}</span>`; };
const block2$1 = (item, index, context) => { return scopedHtml`${ item.selected ? block3$1(item, index, context) : undefined }`; };
const block3$1 = (item, index, context) => { return scopedHtml`<ui5-token ?readonly="${context.readonly}" class="ui5-multi-combobox-token" data-ui5-id="${ifDefined(item._id)}" part="token-${index}" text="${ifDefined(item.text)}"></ui5-token>`; };
const block4$1 = (context) => { return scopedHtml`<slot name="icon"></slot>`; };
const block5$1 = (context) => { return scopedHtml`<ui5-icon name="slim-arrow-down" input-icon slot="icon" tabindex="-1" @click="${context.togglePopover}" @mousedown="${context._onIconMousedown}" ?pressed="${context.open}" dir="${ifDefined(context.effectiveDir)}" accessible-name="${ifDefined(context._iconAccessibleNameText)}"></ui5-icon>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

const block0 = (context) => { return scopedHtml`<ui5-responsive-popover placement-type="Bottom" horizontal-align="Left" class="ui5-multi-combobox-all-items-responsive-popover" no-arrow _disable-initial-focus @ui5-selection-change=${ifDefined(context._listSelectionChange)} @ui5-after-close=${ifDefined(context._toggle)} @ui5-after-open=${ifDefined(context._toggle)}>${ context._isPhone ? block1(context) : undefined }${ !context._isPhone ? block6(context) : undefined }<ui5-list separators="None" mode="MultiSelect" class="ui5-multi-combobox-all-items-list">${ repeat(context._filteredItems, (item, index) => item._id || index, (item, index) => block11(item, index, context)) }</ui5-list>${ context._isPhone ? block12(context) : undefined }</ui5-responsive-popover>${ context.hasValueStateMessage ? block13(context) : undefined } `; };
const block1 = (context) => { return scopedHtml`<div slot="header" class="ui5-responsive-popover-header" style="${styleMap(context.styles.popoverHeader)}"><div class="row"><span>${ifDefined(context._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context.togglePopover}"></ui5-button></div><div class="row"><div slot="header" class="input-root-phone" value-state="${ifDefined(context.valueState)}"><input .value="${ifDefined(context.value)}" inner-input placeholder="${ifDefined(context.placeholder)}" value-state="${ifDefined(context.valueState)}" @input="${context._inputLiveChange}" @change=${context._inputChange} aria-autocomplete="both" aria-labelledby="${ifDefined(context._id)}-hiddenText-nMore" aria-describedby="${ifDefined(context._id)}-valueStateDesc" /></div><ui5-togglebutton slot="header" class="ui5-multi-combobox-toggle-button" icon="multiselect-all" design="Transparent" ?pressed=${context._showAllItemsButtonPressed} ?disabled=${context.allItemsSelected} @click="${context.filterSelectedItems}"></ui5-togglebutton></div>${ context.hasValueStateMessage ? block2(context) : undefined }</div></div>`; };
const block2 = (context) => { return scopedHtml`<div class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverValueStateMessage)}">${ context.shouldDisplayDefaultValueStateMessage ? block3(context) : block4(context) }</div>`; };
const block3 = (context) => { return scopedHtml`${ifDefined(context.valueStateText)}`; };
const block4 = (context) => { return scopedHtml`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block5(item, index, context)) }`; };
const block5 = (item, index, context) => { return scopedHtml`${ifDefined(item)}`; };
const block6 = (context) => { return scopedHtml`${ context.hasValueStateMessage ? block7(context) : undefined }`; };
const block7 = (context) => { return scopedHtml`<div slot="header" class="ui5-responsive-popover-header ${classMap(context.classes.popoverValueState)}" style=${styleMap(context.styles.popoverValueStateMessage)}>${ context.shouldDisplayDefaultValueStateMessage ? block8(context) : block9(context) }</div>`; };
const block8 = (context) => { return scopedHtml`${ifDefined(context.valueStateText)}`; };
const block9 = (context) => { return scopedHtml`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block10(item, index, context)) }`; };
const block10 = (item, index, context) => { return scopedHtml`${ifDefined(item)}`; };
const block11 = (item, index, context) => { return scopedHtml`<ui5-li type="${ifDefined(context._listItemsType)}" info=${ifDefined(item.additionalText)} ?selected=${item.selected} data-ui5-token-id="${ifDefined(item._id)}" data-ui5-stable="${ifDefined(item.stableDomRef)}">${ifDefined(item.text)}</ui5-li>`; };
const block12 = (context) => { return scopedHtml`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${context.togglePopover}">${ifDefined(context._dialogOkButton)}</ui5-button></div>`; };
const block13 = (context) => { return scopedHtml`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore no-padding no-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverHeader)}">${ context.shouldDisplayDefaultValueStateMessage ? block14(context) : block15(context) }</div></ui5-popover>`; };
const block14 = (context) => { return scopedHtml`${ifDefined(context.valueStateText)}`; };
const block15 = (context) => { return scopedHtml`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block16(item, index, context)) }`; };
const block16 = (item, index, context) => { return scopedHtml`${ifDefined(item)}`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host{width:var(--_ui5_input_width);min-width:var(--_ui5_input_width);height:var(--_ui5_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);font-style:normal;background-color:var(--sapField_Background);border:1px solid var(--sapField_BorderColor);border-radius:var(--_ui5_input_wrapper_border_radius);box-sizing:border-box;line-height:normal;letter-spacing:normal;word-spacing:normal;text-align:start}:host([focused]){outline:var(--_ui5_input_focus_border_width) dotted var(--sapContent_FocusColor);outline-offset:-3px}:host([value-state]:not([value-state=None])[focused]){outline:var(--_ui5_input_focus_border_width) dotted var(--sapContent_FocusColor);outline-offset:-4px}.ui5-input-root{width:100%;height:100%;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit}:host([disabled]){opacity:var(--_ui5_input_disabled_opacity);cursor:default;pointer-events:none;background:var(--sapField_ReadOnly_Background);border-color:var(--sapField_ReadOnly_BorderColor)}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5_input_inner_padding);box-sizing:border-box;min-width:inherit;width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5_input_inner_padding_with_icon)}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor);padding-right:.125rem}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-moz-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor);padding-right:.125rem}:host([disabled]) [inner-input]:-ms-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]:-ms-input-placeholder{visibility:hidden}[inner-input]:-ms-input-placeholder{font-style:italic;color:var(--sapField_PlaceholderTextColor);padding-right:.125rem}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit}:host([readonly]){border-color:var(--sapField_ReadOnly_BorderColor);background:var(--sapField_ReadOnly_Background)}:host(:not([value-state]):not([readonly]):hover){background-color:var(--sapField_Hover_Background);border:1px solid var(--sapField_Hover_BorderColor)}:host([value-state=None]:not([readonly]):hover){background-color:var(--sapField_Hover_Background);border:1px solid var(--sapField_Hover_BorderColor)}:host([value-state]:not([value-state=None])){border-width:var(--_ui5_input_state_border_width)}:host([value-state=Error]) [inner-input],:host([value-state=Warning]) [inner-input]{font-style:var(--_ui5_input_error_warning_font_style)}:host([value-state=Error]) [inner-input]{font-weight:var(--_ui5_input_error_font_weight)}:host([value-state=Error]:not([readonly])){background-color:var(--sapField_InvalidBackground);border-color:var(--sapField_InvalidColor)}:host([value-state=Error]:not([readonly]):not([disabled])),:host([value-state=Information]:not([readonly]):not([disabled])),:host([value-state=Warning]:not([readonly]):not([disabled])){border-style:var(--_ui5_input_error_warning_border_style)}:host([value-state=Warning]:not([readonly])){background-color:var(--sapField_WarningBackground);border-color:var(--sapField_WarningColor)}:host([value-state=Success]:not([readonly])){background-color:var(--sapField_SuccessBackground);border-color:var(--sapField_SuccessColor);border-width:1px}:host([value-state=Information]:not([readonly])){background-color:var(--sapField_InformationBackground);border-color:var(--sapField_InformationColor);border-width:var(--_ui5-input-information_border_width)}[inner-input]::-ms-clear{height:0;width:0}.ui5-input-icon-root{min-width:var(--_ui5_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot=icon]){padding:var(--_ui5_input_icon_padding)}[inner-input]::-webkit-inner-spin-button,[inner-input]::-webkit-outer-spin-button{-webkit-appearance:inherit;margin:inherit}[input-icon]{color:var(--sapContent_IconColor);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-left:1px solid transparent;min-width:1rem;min-height:1rem}[input-icon][pressed]{background:var(--sapButton_Selected_Background);color:var(--sapButton_Active_TextColor)}[input-icon]:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}[input-icon]:not([pressed]):not(:active):hover{background:var(--sapButton_Lite_Hover_Background)}[input-icon]:hover{border-left:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]:hover{border-left:none;border-right:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]{border-left:none;border-right:1px solid transparent}:host(:not([hidden])){display:inline-block;--_ui5_popup_content_padding:0}.ui5-multi-combobox-root{display:flex;overflow:hidden;width:100%;height:100%}.ui5-multi-combobox-tokenizer{max-width:calc(100% - 3rem - var(--_ui5_input_icon_min_width));border:none;width:auto;min-width:0;height:100%}[ui5-multi-combobox]{width:100%}[ui5-multi-combobox] [ui5-tokenizer]{flex:3}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-multi-combobox",
	languageAware: true,
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.MultiComboBox.prototype */ {
		/**
		 * Defines the <code>ui5-multi-combobox</code> items.
		 * <br><br>
		 * Example: <br>
		 * &lt;ui5-multi-combobox><br>
		 * &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #1&lt;/ui5-li><br>
		 * &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #2&lt;/ui5-li><br>
		 * &lt;/ui5-multi-combobox>
		 * <br> <br>
		 *
		 * @type {sap.ui.webcomponents.main.IMultiComboBoxItem[]}
		 * @slot items
		 * @public
		 */
		"default": {
			propertyName: "items",
			type: HTMLElement,
			invalidateOnChildChange: true,
		},

		/**
		* Defines the icon to be displayed in the <code>ui5-multi-combobox</code>.
		*
		* @type {sap.ui.webcomponents.main.IIcon}
		* @slot
		* @public
		* @since 1.0.0-rc.9
		*/
		icon: {
			type: HTMLElement,
		},

		/**
		 * Defines the value state message that will be displayed as pop up under the <code>ui5-multi-combobox</code>.
		 * <br><br>
		 *
		 * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
		 * <br>
		 * <b>Note:</b> The <code>valueStateMessage</code> would be displayed,
		 * when the <code>ui5-multi-combobox</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
		 * @type {HTMLElement[]}
		 * @since 1.0.0-rc.9
		 * @slot
		 * @public
		 */
		valueStateMessage: {
			type: HTMLElement,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.MultiComboBox.prototype */ {
		/**
		 * Defines the value of the <code>ui5-multi-combobox</code>.
		 * <br><br>
		 * <b>Note:</b> The property is updated upon typing.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		value: {
			type: String,
			defaultValue: "",
		},

		/**
		 * Defines a short hint intended to aid the user with data entry when the
		 * <code>ui5-multi-combobox</code> has no value.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		placeholder: {
			type: String,
			defaultValue: "",
		},

		/**
		 * Defines if the user input will be prevented, if no matching item has been found
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		allowCustomValues: {
			type: Boolean,
		},

		/**
		 * Defines whether <code>ui5-multi-combobox</code> is in disabled state.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-multi-combobox</code> is completely noninteractive.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines the value state of the <code>ui5-multi-combobox</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>None</code></li>
		 * <li><code>Error</code></li>
		 * <li><code>Warning</code></li>
		 * <li><code>Success</code></li>
		 * <li><code>Information</code></li>
		 * </ul>
		 *
		 * @type {ValueState}
		 * @defaultvalue "None"
		 * @public
		 */
		valueState: {
			type: ValueState,
			defaultValue: ValueState.None,
		},

		/**
		 * Defines whether the <code>ui5-multi-combobox</code> is read-only.
		 * <br><br>
		 * <b>Note:</b> A read-only <code>ui5-multi-combobox</code> is not editable,
		 * but still provides visual feedback upon user interaction.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		readonly: {
			type: Boolean,
		},

		/**
		 * Defines whether the <code>ui5-multi-combobox</code> is required.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.5
		 */
		required: {
			type: Boolean,
		},

		/**
		 * Defines the filter type of the <code>ui5-multi-combobox</code>.
		 * Available options are: <code>StartsWithPerTerm</code>, <code>StartsWith</code>, <code>Contains</code> and <code>None</code>.
		 *
		 * @type {string}
		 * @defaultvalue "StartsWithPerTerm"
		 * @public
		 */
		filter: {
			type: String,
			defaultValue: "StartsWithPerTerm",
		},

		/**
		 * Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @since 1.0.0-rc.5
		 * @public
		 */
		open: {
			type: Boolean,
		},

		_filteredItems: {
			type: Object,
		},

		filterSelected: {
			type: Boolean,
		},

		focused: {
			type: Boolean,
		},

		_tokenizerFocused: {
			type: Boolean,
		},

		_iconPressed: {
			type: Boolean,
			noAttribute: true,
		},

		_inputWidth: {
			type: Integer,
			noAttribute: true,
		},

		_listWidth: {
			type: Integer,
			defaultValue: 0,
			noAttribute: true,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.MultiComboBox.prototype */ {
		/**
		 * Fired when the input operation has finished by pressing Enter or on focusout.
		 *
		 * @event
		 * @public
		 */
		change: {},

		/**
		 * Fired when the value of the <code>ui5-multi-combobox</code> changes at each keystroke.
		 *
		 * @event
		 * @public
		 */
		input: {},

		/**
		 * Fired when the dropdown is opened or closed.
		 *
		 * @event sap.ui.webcomponents.main.MultiComboBox#open-change
		 * @since 1.0.0-rc.5
		 * @public
		 */
		"open-change": {},

		/**
		 * Fired when selection is changed by user interaction
		 * in <code>SingleSelect</code> and <code>MultiSelect</code> modes.
		 *
		 * @event sap.ui.webcomponents.main.MultiComboBox#selection-change
		 * @param {Array} items an array of the selected items.
		 * @public
		 */
		"selection-change": {
			detail: {
				items: { type: Array },
			},
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-multi-combobox</code> component provides a list box with items and a text field allowing the user to either type a value directly into the control, or choose from the list of existing items.
 *
 * It is a drop-down list for selecting and filtering values, commonly used to enable users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow of available options.
 * The select options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.
 * <h3>Structure</h3>
 * The <code>ui5-multi-combobox</code> consists of the following elements:
 * <ul>
 * <li> Tokenizer - a list of tokens with selected options.
 * <li> Input field - displays the selected option/s as token/s. Users can type to filter the list.
 * <li> Drop-down arrow - expands\collapses the option list.</li>
 * <li> Option list - the list of available options.</li>
 * </ul>
 * <h3>Keyboard Handling</h3>
 *
 * The <code>ui5-multi-combobox</code> provides advanced keyboard handling.
 *
 * <h4>Picker</h4>
 * If the <code>ui5-multi-combobox</code> is focused,
 * you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys.
 * Once the drop-down is opened, you can use the <code>UP</code> and <code>DOWN</code> arrow keys
 * to navigate through the available options and select one by pressing the <code>Space</code> or <code>Enter</code> keys.
 * <br>
 *
 * <h4>Tokens</h4>
 * <ul>
 * <li> Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available). </li>
 * <li> Delete -  deletes the token and focuses the previous token. </li>
 * <li> Backspace -  deletes the token and focus the next token. </li>
 * </ul>
 *
 * In the context of <code>ui5-multi-combobox</code>, you can provide a custom stable DOM ref for:
 * <ul>
 * <li>Every <code>ui5-mcb-item</code> that you provide.
 * Example: <code><ui5-mcb-item stable-dom-ref="item1"></ui5-mcb-item></code></li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/MultiComboBox";</code>
 *
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.MultiComboBox
 * @extends UI5Element
 * @tagname ui5-multi-combobox
 * @public
 * @appenddocs MultiComboBoxItem
 * @since 0.11.0
 */
class MultiComboBox extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$1;
	}

	static get staticAreaTemplate() {
		return main;
	}

	static get styles() {
		return styles;
	}

	static get staticAreaStyles() {
		return [ResponsivePopoverCommonCss, ValueStateMessageCss];
	}

	static get dependencies() {
		return [
			MultiComboBoxItem,
			Tokenizer,
			Token,
			Icon,
			ResponsivePopover,
			List,
			StandardListItem,
			ToggleButton,
			Button,
		];
	}

	constructor() {
		super();

		this._filteredItems = [];
		this.selectedValues = [];
		this._inputLastValue = "";
		this._deleting = false;
		this._validationTimeout = null;
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
		this._handleResizeBound = this._handleResize.bind(this);
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._handleResizeBound);
	}

	onExitDOM() {
		ResizeHandler.deregister(this, this._handleResizeBound);
	}

	_handleResize() {
		this._inputWidth = this.offsetWidth;
	}

	_inputChange() {
		this.fireEvent("change");
	}

	_showMorePopover() {
		this.filterSelected = true;
		this._toggleRespPopover();
	}

	togglePopover() {
		if (!isPhone()) {
			this._inputDom.focus();
		}

		this._toggleRespPopover();
	}

	filterSelectedItems(event) {
		if (this.allItemsSelected) {
			this.filterSelected = true;
			return;
		}

		this.filterSelected = event.target.pressed;
	}

	get _showAllItemsButtonPressed() {
		return this.filterSelected || this.allItemsSelected;
	}

	get allItemsSelected() {
		return this.items.length === this.selectedValues.length;
	}

	get _inputDom() {
		return this.shadowRoot.querySelector("#ui5-multi-combobox-input");
	}

	_inputLiveChange(event) {
		const input = event.target;
		const value = input.value;
		const filteredItems = this._filterItems(value);
		const oldValueState = this.valueState;

		/* skip calling change event when an input with a placeholder is focused on IE
			- value of the host and the internal input should be differnt in case of actual input
			- input is called when a key is pressed => keyup should not be called yet
		*/
		const skipFiring = (this._inputDom.value === this.value) && isIE() && !this._keyDown && !!this.placeholder;

		if (skipFiring) {
			event.preventDefault();

			return;
		}

		if (this._validationTimeout) {
			input.value = this._inputLastValue;
			return;
		}

		if (!filteredItems.length && value && !this.allowCustomValues) {
			input.value = this._inputLastValue;
			this.valueState = "Error";

			this._validationTimeout = setTimeout(() => {
				this.valueState = oldValueState;
				this._validationTimeout = null;
			}, 2000);

			return;
		}

		this._inputLastValue = input.value;
		this.value = input.value;
		this._filteredItems = filteredItems;

		if (!isPhone()) {
			if (filteredItems.length === 0) {
				this.allItemsPopover.close();
			} else {
				this.allItemsPopover.open(this);
			}
		}

		this.fireEvent("input");
	}

	_tokenDelete(event) {
		const token = event.detail.ref;
		const deletingItem = this.items.find(item => item._id === token.getAttribute("data-ui5-id"));

		deletingItem.selected = false;
		this._deleting = true;

		this.fireSelectionChange();
	}

	get _getPlaceholder() {
		if (this._tokenizer && this._tokenizer.tokens.length) {
			return "";
		}

		return this.placeholder;
	}

	_handleLeft() {
		const cursorPosition = this.getDomRef().querySelector(`input`).selectionStart;

		if (cursorPosition === 0) {
			this._tokenizer._focusLastToken();
		}
	}

	_tokenizerFocusOut(event) {
		this._tokenizerFocused = false;

		const tokensCount = this._tokenizer.tokens.length - 1;

		if (!event.relatedTarget || event.relatedTarget.localName !== "ui5-token") {
			this._tokenizer.tokens.forEach(token => { token.selected = false; });
			this._tokenizer.scrollToStart();
		}

		if (tokensCount === 0 && this._deleting) {
			setTimeout(() => {
				if (!isPhone()) {
					this.shadowRoot.querySelector("input").focus();
				}

				this._deleting = false;
			}, 0);
		}
	}

	_tokenizerFocusIn() {
		this._tokenizerFocused = true;
		this.focused = false;
	}

	_onkeyup() {
		this._keyDown = false;
	}

	async _onkeydown(event) {
		if (isLeft(event)) {
			this._handleLeft(event);
		}

		if (isShow(event) && !this.readonly && !this.disabled) {
			event.preventDefault();
			this._toggleRespPopover();
		}

		if (isDown(event) && this.allItemsPopover.opened && this.items.length) {
			event.preventDefault();
			await this._getList();
			const firstListItem = this.list.items[0];
			this.list._itemNavigation.setCurrentItem(firstListItem);
			firstListItem.focus();
		}

		if (isBackSpace(event) && event.target.value === "") {
			event.preventDefault();

			this._tokenizer._focusLastToken();
		}

		this._keyDown = true;
	}

	_onTokenizerKeydown(event) {
		if (isRight(event)) {
			const lastTokenIndex = this._tokenizer.tokens.length - 1;

			if (this._tokenizer.tokens[lastTokenIndex] === document.activeElement.shadowRoot.activeElement) {
				setTimeout(() => {
					this.shadowRoot.querySelector("input").focus();
				}, 0);
			}
		}
	}

	_filterItems(str) {
		return (Filters[this.filter] || StartsWithPerTerm)(str, this.items);
	}

	_toggle() {
		this.open = !this.open;
		this.fireEvent("open-change");

		if (!this.open) {
			this._afterClosePopover();
		}
	}

	_getSelectedItems() {
		// Angular 2 way data binding
		this.selectedValues = this.items.filter(item => item.selected);
		return this.selectedValues;
	}

	_listSelectionChange(event) {
		event.target.items.forEach(item => {
			this.items.forEach(mcbItem => {
				if (mcbItem._id === item.getAttribute("data-ui5-token-id")) {
					mcbItem.selected = item.selected;
				}
			});
		});

		this.fireSelectionChange();

		if (!event.detail.selectionComponentPressed && !isSpace(event.detail)) {
			this.allItemsPopover.close();
			this.value = "";
			this.fireEvent("input");
		}
	}

	fireSelectionChange() {
		this.fireEvent("selection-change", { items: this._getSelectedItems() });
		// Angular 2 way data binding
		this.fireEvent("value-changed");
	}

	async _getRespPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		this.allItemsPopover = staticAreaItem.querySelector(`.ui5-multi-combobox-all-items-responsive-popover`);
	}

	async _getList() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		this.list = staticAreaItem.querySelector(".ui5-multi-combobox-all-items-list");
	}

	_toggleRespPopover() {
		this.allItemsPopover.toggle(this);
	}

	_click(event) {
		if (isPhone() && !this.readonly && !this._showMorePressed) {
			this.allItemsPopover.open(this);
		}

		this._showMorePressed = false;
	}

	_afterClosePopover() {
		// close device's keyboard and prevent further typing
		if (isPhone()) {
			this.blur();
		}

		this._iconPressed = false;
		this.filterSelected = false;
	}

	onBeforeRendering() {
		const input = this.shadowRoot.querySelector("input");
		this._inputLastValue = this.value;

		if (input && !input.value) {
			this._filteredItems = this.items;
		}

		const filteredItems = this._filterItems(this.value);
		this._filteredItems = filteredItems;

		if (isPhone() && this.allItemsPopover && this.allItemsPopover.opened) {
			// Set initial focus to the dialog
			this.allItemsPopover.focus();
		}
	}

	async onAfterRendering() {
		await this._getRespPopover();
		await this._getList();

		this.toggle(this.shouldDisplayOnlyValueStateMessage);
		this.storeResponsivePopoverWidth();
	}

	get _isPhone() {
		return isPhone();
	}

	_onIconMousedown() {
		this._iconPressed = true;
	}

	storeResponsivePopoverWidth() {
		if (this.open && !this._listWidth) {
			this._listWidth = this.list.offsetWidth;
		}
	}

	toggle(isToggled) {
		if (isToggled && !this.open) {
			this.openPopover();
		} else {
			this.closePopover();
		}
	}

	async openPopover() {
		const popover = await this._getPopover();

		if (popover) {
			popover.openBy(this);
		}
	}

	async closePopover() {
		const popover = await this._getPopover();

		popover && popover.close();
	}

	async _getPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector("[ui5-popover]");
	}

	get _tokenizer() {
		return this.shadowRoot.querySelector("[ui5-tokenizer]");
	}

	inputFocusIn() {
		if (!isPhone()) {
			this.focused = true;
		}
	}

	inputFocusOut(event) {
		if (!this.shadowRoot.contains(event.relatedTarget) && !this._deleting) {
			this.focused = false;
		}
	}

	get editable() {
		return !this.readonly;
	}

	get _isFocusInside() {
		return this.focused || this._tokenizerFocused;
	}

	get selectedItemsListMode() {
		return this.readonly ? "None" : "MultiSelect";
	}

	get _listItemsType() {
		return this.readonly ? "Inactive" : "Active";
	}

	get hasValueState() {
		return this.valueState !== ValueState.None;
	}

	get hasValueStateMessage() {
		return this.hasValueState && this.valueState !== ValueState.Success;
	}

	get valueStateText() {
		return this.valueStateTextMappings[this.valueState];
	}

	get valueStateTextId() {
		return this.hasValueState ? `${this._id}-valueStateDesc` : undefined;
	}

	get valueStateMessageText() {
		return this.getSlottedNodes("valueStateMessage").map(el => el.cloneNode(true));
	}

	get _tokensCountText() {
		if (!this._tokenizer) {
			return;
		}
		return this._tokenizer._tokensCountText();
	}

	get _tokensCountTextId() {
		return `${this._id}-hiddenText-nMore`;
	}

	get ariaDescribedByText() {
		return this.valueStateTextId ? `${this._tokensCountTextId} ${this.valueStateTextId}` : `${this._tokensCountTextId}`;
	}

	get shouldDisplayDefaultValueStateMessage() {
		return !this.valueStateMessage.length && this.hasValueStateMessage;
	}

	get shouldDisplayOnlyValueStateMessage() {
		return this.focused && this.hasValueStateMessage && !this._iconPressed;
	}

	get valueStateTextMappings() {
		return {
			"Success": this.i18nBundle.getText(VALUE_STATE_SUCCESS),
			"Error": this.i18nBundle.getText(VALUE_STATE_ERROR),
			"Warning": this.i18nBundle.getText(VALUE_STATE_WARNING),
		};
	}

	get _innerInput() {
		if (isPhone()) {
			if (this.allItemsPopover.opened) {
				return this.allItemsPopover.querySelector("input");
			}
		}

		return this.getDomRef().querySelector("#ui5-multi-combobox-input");
	}

	get _headerTitleText() {
		return this.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
	}

	get _iconAccessibleNameText() {
		return this.i18nBundle.getText(SELECT_OPTIONS);
	}

	get _dialogOkButton() {
		return this.i18nBundle.getText(MULTICOMBOBOX_DIALOG_OK_BUTTON);
	}

	get _tokenizerExpanded() {
		return (this._isFocusInside || this.open) && !this.readonly;
	}

	get classes() {
		return {
			popoverValueState: {
				"ui5-valuestatemessage-root": true,
				"ui5-valuestatemessage--success": this.valueState === ValueState.Success,
				"ui5-valuestatemessage--error": this.valueState === ValueState.Error,
				"ui5-valuestatemessage--warning": this.valueState === ValueState.Warning,
				"ui5-valuestatemessage--information": this.valueState === ValueState.Information,
			},
		};
	}

	get styles() {
		return {
			popoverValueStateMessage: {
				"width": `${this._listWidth}px`,
				"display": this._listWidth === 0 ? "none" : "inline-block",
				"padding": "0.9125rem 1rem",
			},
			popoverHeader: {
				"max-width": `${this._inputWidth}px`,
			},
		};
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

MultiComboBox.define();
