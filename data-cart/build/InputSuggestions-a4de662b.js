import { s as scopedHtml, i as ifDefined, u as repeat, a as styleMap, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, l as litRender, h as classMap, f as fetchI18nBundle, U as UI5Element, z as registerFeature } from './Icons-85d4abff.js';
import { k as isLeft, w as isBackSpace, x as isShow, h as isRight, y as MULTIINPUT_ROLEDESCRIPTION_TEXT, g as getI18nBundle, G as GROUP_HEADER_TEXT, z as LIST_ITEM_POSITION, C as LIST_ITEM_SELECTED } from './i18n-defaults-dca87248.js';
import { I as Input } from './Input-0ee3a2d0.js';
import { T as Tokenizer, a as Token } from './Tokenizer-d8a8b2e5.js';
import { I as Icon, B as Button } from './Button-7dc82d4c.js';
import { S as StandardListItem, L as ListItemBase, a as ListItemType, b as List } from './StandardListItem-6305d5b8.js';
import { R as ResponsivePopover } from './ResponsivePopover-cdfbc391.js';
import { V as ValueState } from './ValueState-a7516d8f.js';

var flat = flatten;
flatten.flatten = flatten;
flatten.unflatten = unflatten;

function isBuffer (obj) {
  return obj &&
    obj.constructor &&
    (typeof obj.constructor.isBuffer === 'function') &&
    obj.constructor.isBuffer(obj)
}

function keyIdentity (key) {
  return key
}

function flatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const maxDepth = opts.maxDepth;
  const transformKey = opts.transformKey || keyIdentity;
  const output = {};

  function step (object, prev, currentDepth) {
    currentDepth = currentDepth || 1;
    Object.keys(object).forEach(function (key) {
      const value = object[key];
      const isarray = opts.safe && Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key);

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output
}

function unflatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const overwrite = opts.overwrite || false;
  const transformKey = opts.transformKey || keyIdentity;
  const result = {};

  const isbuffer = isBuffer(target);
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey (key) {
    const parsedKey = Number(key);

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1 ||
      opts.object
    ) ? key
      : parsedKey
  }

  function addKeys (keyPrefix, recipient, target) {
    return Object.keys(target).reduce(function (result, key) {
      result[keyPrefix + delimiter + key] = target[key];

      return result
    }, recipient)
  }

  function isEmpty (val) {
    const type = Object.prototype.toString.call(val);
    const isArray = type === '[object Array]';
    const isObject = type === '[object Object]';

    if (!val) {
      return true
    } else if (isArray) {
      return !val.length
    } else if (isObject) {
      return !Object.keys(val).length
    }
  }

  target = Object.keys(target).reduce(function (result, key) {
    const type = Object.prototype.toString.call(target[key]);
    const isObject = (type === '[object Object]' || type === '[object Array]');
    if (!isObject || isEmpty(target[key])) {
      result[key] = target[key];
      return result
    } else {
      return addKeys(
        key,
        result,
        flatten(target[key], opts)
      )
    }
  }, {});

  Object.keys(target).forEach(function (key) {
    const split = key.split(delimiter).map(transformKey);
    let key1 = getkey(split.shift());
    let key2 = getkey(split[0]);
    let recipient = result;

    while (key2 !== undefined) {
      if (key1 === '__proto__') {
        return
      }

      const type = Object.prototype.toString.call(recipient[key1]);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        );
      }

      recipient = recipient[key1];
      if (split.length > 0) {
        key1 = getkey(split.shift());
        key2 = getkey(split[0]);
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts);
  });

  return result
}

const block0$2 = (context) => { return scopedHtml`<div class="ui5-input-root" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}"><div class="ui5-input-content"><span id="${ifDefined(context._id)}-hiddenText-nMore" class="ui5-hidden-text">${ifDefined(context._tokensCountText)}</span><ui5-tokenizer class="ui5-multi-input-tokenizer" .morePopoverOpener=${ifDefined(context)} .popoverMinWidth=${ifDefined(context._inputWidth)} .valueState=${ifDefined(context.valueState)} ?expanded="${context.expandedTokenizer}" show-more @keydown="${context._onTokenizerKeydown}" @show-more-items-press=${context.showMorePress} @token-delete=${context.tokenDelete} @focusout="${context._tokenizerFocusOut}"><slot name="tokens"></slot><div slot="valueStateMessage">${ context.shouldDisplayDefaultValueStateMessage ? block1$1(context) : block2$1(context) }</div></ui5-tokenizer><input id="${ifDefined(context._id)}-inner" class="ui5-input-inner" style="${styleMap(context.styles.innerInput)}" type="${ifDefined(context.inputType)}" inner-input ?inner-input-with-icon="${context.icon.length}" ?disabled="${context.disabled}" ?readonly="${context._readonly}" .value="${ifDefined(context.value)}" placeholder="${ifDefined(context._placeholder)}" maxlength="${ifDefined(context.maxlength)}" role="${ifDefined(context.accInfo.input.role)}" aria-owns="${ifDefined(context.accInfo.input.ariaOwns)}" ?aria-invalid="${context.accInfo.input.ariaInvalid}" aria-haspopup="${ifDefined(context.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(context.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(context.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(context.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(context.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(context.accInfo.input.ariaLabel)}" aria-required="${ifDefined(context.required)}" @input="${context._handleInput}" @change="${context._handleChange}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click=${context._click} @focusin=${context.innerFocusIn} data-sap-no-tab-ref data-sap-focus-ref step="${ifDefined(context.nativeInputAttributes.step)}" min="${ifDefined(context.nativeInputAttributes.min)}" max="${ifDefined(context.nativeInputAttributes.max)}" />${ context.icon.length ? block4$1(context) : undefined }${ context.showValueHelpIcon ? block5$1(context) : undefined }${ context.showSuggestions ? block6$1(context) : undefined }${ context.accInfo.input.ariaDescription ? block7$1(context) : undefined }${ context.hasValueState ? block8$1(context) : undefined }</div><slot name="formSupport"></slot></div> `; };
const block1$1 = (context) => { return scopedHtml`${ifDefined(context.valueStateText)}`; };
const block2$1 = (context) => { return scopedHtml`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3$1(item, index, context)) }`; };
const block3$1 = (item, index, context) => { return scopedHtml`${ifDefined(item)}`; };
const block4$1 = (context) => { return scopedHtml`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`; };
const block5$1 = (context) => { return scopedHtml`<ui5-icon @click=${context.valueHelpPress} @mousedown=${context.valueHelpMouseDown} @mouseup=${context.valueHelpMouseUp} input-icon name="value-help"></ui5-icon>`; };
const block6$1 = (context) => { return scopedHtml`<span id="${ifDefined(context._id)}-suggestionsText" class="ui5-hidden-text">${ifDefined(context.suggestionsText)}</span><span id="${ifDefined(context._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${ifDefined(context._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${ifDefined(context.availableSuggestionsCount)}</span>`; };
const block7$1 = (context) => { return scopedHtml`<span id="${ifDefined(context._id)}-descr" class="ui5-hidden-text">${ifDefined(context.accInfo.input.ariaDescription)}</span>`; };
const block8$1 = (context) => { return scopedHtml`<span id="${ifDefined(context._id)}-valueStateDesc" class="ui5-hidden-text">${ifDefined(context.ariaValueStateHiddenText)}</span>`; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles = "[input-icon]{color:var(--sapContent_IconColor);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-left:1px solid transparent;min-width:1rem;min-height:1rem}[input-icon][pressed]{background:var(--sapButton_Selected_Background);color:var(--sapButton_Active_TextColor)}[input-icon]:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}[input-icon]:not([pressed]):not(:active):hover{background:var(--sapButton_Lite_Hover_Background)}[input-icon]:hover{border-left:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]:hover{border-left:none;border-right:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]{border-left:none;border-right:1px solid transparent}.ui5-multi-input-tokenizer{max-width:calc(100% - 3rem - var(--_ui5_input_icon_min_width));border:none;width:auto;min-width:0;height:100%}[ui5-multi-input] [ui5-tokenizer]{flex:3}";

/**
 * @public
 */
const metadata$3 = {
	tag: "ui5-multi-input",
	properties: /** @lends sap.ui.webcomponents.main.MultiInput.prototype */ {
		/**
		 * Determines whether a value help icon will be should in the end of the input.
		 * Pressing the icon will fire <code>value-help-trigger</code> event.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		showValueHelpIcon: {
			type: Boolean,
		},

		/**
		 * Indicates whether the tokenizer is expanded or collapsed(shows the n more label)
		 * @private
		 */
		expandedTokenizer: {
			type: Boolean,
		},
	},
	slots: /** @lends  sap.ui.webcomponents.main.MultiInput.prototype */ {
		/**
		 * Defines the <code>ui5-multi-input</code> tokens.
		 * <br><br>
		 * Example: <br>
		 * &lt;ui5-multi-input><br>
		 * &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-token slot="tokens" text="Token 1">&lt;/ui5-token><br>
		 * &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-token slot="tokens" text="Token 2">&lt;/ui5-token><br>
		 * &lt;/ui5-multi-input>
		 * <br> <br>
		 *
		 * @type {sap.ui.webcomponents.main.IToken[]}
		 * @slot
		 * @public
		 */
		tokens: {
			type: HTMLElement,
			multiple: true,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.MultiInput.prototype */ {
		/**
		 * Fired when the value help icon is pressed
		 * and F4 or ALT/OPTION + ARROW_UP/ARROW_DOWN keyboard keys are used.
		 *
		 * @event sap.ui.webcomponents.main.MultiInput#value-help-trigger
		 * @public
		 */
		"value-help-trigger": {},

		/**
		 * Fired when a token is about to be deleted.
		 *
		 * @event sap.ui.webcomponents.main.MultiInput#token-delete
		 * @param {HTMLElement} token deleted token.
		 * @public
		 */
		"token-delete": {
			detail: {
				token: { type: HTMLElement },
			},
		},
	},
};

/**
 * @class
 * <h3>Overview</h3>
 * A <code>ui5-multi-input</code> field allows the user to enter multiple values, which are displayed as <code>ui5-token</code>.
 *
 * User can choose interaction for creating tokens.
 * Fiori Guidelines say that user should create tokens when:
 * <ul>
 * <li>Type a value in the input and press enter or focus out the input field (<code>change</code> event is fired)
 * <li>Select a value from the suggestion list</li> (<code>suggestion-item-select</code> event is fired)
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/MultiInput";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.MultiInput
 * @extends Input
 * @tagname ui5-multi-input
 * @appenddocs Token
 * @since 1.0.0-rc.9
 * @public
 */
class MultiInput extends Input {
	static get metadata() {
		return metadata$3;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$2;
	}

	static get styles() {
		return [Input.styles, styles];
	}

	constructor() {
		super();

		// Prevent suggestions' opening.
		this._skipOpenSuggestions = false;
	}

	valueHelpPress(event) {
		this.closePopover();
		this.fireEvent("value-help-trigger", {});
	}

	showMorePress(event) {
		this.expandedTokenizer = false;
		this.focus();
	}

	tokenDelete(event) {
		this.fireEvent("token-delete", {
			token: event.detail.ref,
		});

		this.focus();
	}

	valueHelpMouseDown(event) {
		this.closePopover();
		this.tokenizer.closeMorePopover();
		this._valueHelpIconPressed = true;
		event.target.focus();
	}

	_tokenizerFocusOut(event) {
		if (!this.contains(event.relatedTarget)) {
			this.tokenizer._tokens.forEach(token => { token.selected = false; });
			this.tokenizer.scrollToStart();
		}
	}

	valueHelpMouseUp(event) {
		setTimeout(() => {
			this._valueHelpIconPressed = false;
		}, 0);
	}

	innerFocusIn() {
		this.expandedTokenizer = true;
	}

	_onkeydown(event) {
		super._onkeydown(event);

		if (isLeft(event)) {
			this._skipOpenSuggestions = true; // Prevent input focus when navigating through the tokens.

			return this._handleLeft(event);
		}

		this._skipOpenSuggestions = false;
		if (isBackSpace(event) && event.target.value === "") {
			event.preventDefault();

			this.tokenizer._focusLastToken();
		}

		if (isShow(event)) {
			this.valueHelpPress();
		}
	}

	_onTokenizerKeydown(event) {
		if (isRight(event)) {
			const lastTokenIndex = this.tokenizer._tokens.length - 1;

			if (this.tokenizer._tokens[lastTokenIndex] === document.activeElement) {
				setTimeout(() => {
					this.focus();
				}, 0);
			}
		}
	}

	_handleLeft() {
		const cursorPosition = this.getDomRef().querySelector(`input`).selectionStart;

		if (cursorPosition === 0) {
			this.tokenizer._focusLastToken();
		}
	}

	_onfocusout(event) {
		super._onfocusout(event);
		const relatedTarget = event.relatedTarget;
		const insideDOM = this.contains(relatedTarget);
		const insideShadowDom = this.shadowRoot.contains(relatedTarget);

		if (!insideDOM && !insideShadowDom) {
			this.expandedTokenizer = false;
		}
	}

	/**
	 * @override
	 */
	async _onfocusin(event) {
		const inputDomRef = await this.getInputDOMRef();

		if (event.target === inputDomRef) {
			await super._onfocusin(event);
		}
	}

	shouldOpenSuggestions() {
		const parent = super.shouldOpenSuggestions();
		const valueHelpPressed = this._valueHelpIconPressed;
		const nonEmptyValue = this.value !== "";

		return parent && nonEmptyValue && !valueHelpPressed && !this._skipOpenSuggestions;
	}

	lastItemDeleted() {
		setTimeout(() => {
			this.focus();
		}, 0);
	}

	get tokenizer() {
		return this.shadowRoot.querySelector("[ui5-tokenizer]");
	}

	get _tokensCountText() {
		if (!this.tokenizer) {
			return;
		}
		return this.tokenizer._tokensCountText();
	}

	get _tokensCountTextId() {
		return `${this._id}-hiddenText-nMore`;
	}

	/**
	 * Returns the placeholder value when there are no tokens.
	 * @protected
	 */
	get _placeholder() {
		if (this.tokenizer && this.tokenizer._tokens.length) {
			return "";
		}

		return this.placeholder;
	}

	get accInfo() {
		const ariaDescribedBy = `${this._tokensCountTextId} ${this.suggestionsTextId} ${this.valueStateTextId} ${this.suggestionsCount}`.trim();
		return {
			"input": {
				...super.accInfo.input,
				"ariaRoledescription": this.ariaRoleDescription,
				"ariaDescribedBy": ariaDescribedBy,
			},
		};
	}

	get ariaRoleDescription() {
		return this.i18nBundle.getText(MULTIINPUT_ROLEDESCRIPTION_TEXT);
	}

	static get dependencies() {
		return [
			...Input.dependencies,
			Tokenizer,
			Token,
			Icon,
		];
	}
}

MultiInput.define();

const block0$1 = (context) => { return scopedHtml`<li tabindex="${ifDefined(context.tabIndex)}" class="${classMap(context.classes.main)}" dir="${ifDefined(context.effectiveDir)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" @mouseup="${context._onmouseup}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" @click="${context._onclick}" aria-selected="${ifDefined(context.ariaSelected)}" role="${ifDefined(context._accInfo.role)}" aria-expanded="${ifDefined(context._accInfo.ariaExpanded)}" aria-level="${ifDefined(context._accInfo.ariaLevel)}" aria-posinset="${ifDefined(context._accInfo.posinset)}" aria-setsize="${ifDefined(context._accInfo.setsize)}" aria-labelledby="${ifDefined(context._id)}-invisibleText ${ifDefined(context._id)}-content" aria-disabled="${ifDefined(context.ariaDisabled)}" style="list-style-type: none;">${ context.placeSelectionElementBefore ? block1(context) : undefined }<div id="${ifDefined(context._id)}-content" class="ui5-li-content">${ context.displayImage ? block5(context) : undefined }${ context.displayIconBegin ? block6(context) : undefined }<div class="ui5-li-text-wrapper">${ context.hasTitle ? block7(context) : undefined }${ context.hasDescription ? block8(context) : undefined }${ !context.typeActive ? block12(context) : undefined }</div>${ !context.hasDescription ? block13(context) : undefined }</div>${ context.displayIconEnd ? block15(context) : undefined }${ context.typeDetail ? block16(context) : undefined }${ context.placeSelectionElementAfter ? block17(context) : undefined }<span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context._accInfo.listItemAriaLabel)}</span></li> `; };
const block1 = (context) => { return scopedHtml`${ context.modeSingleSelect ? block2(context) : undefined }${ context.modeMultiSelect ? block3(context) : undefined }${ context.modeDelete ? block4(context) : undefined }`; };
const block2 = (context) => { return scopedHtml`<ui5-radiobutton ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?selected="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radiobutton>`; };
const block3 = (context) => { return scopedHtml`<ui5-checkbox ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`; };
const block4 = (context) => { return scopedHtml`<div class="ui5-li-deletebtn"><ui5-button id="${ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${ifDefined(context.deleteText)}"></ui5-button></div>`; };
const block5 = (context) => { return scopedHtml`<ui5-avatar image="${ifDefined(context.image)}" image-fit-type="Contain" shape="Square" class="ui5-li-img"></ui5-avatar>`; };
const block6 = (context) => { return scopedHtml`<ui5-icon part="icon" name="${ifDefined(context.icon)}" class="ui5-li-icon"></ui5-icon>`; };
const block7 = (context) => { return scopedHtml`<span part="title" class="ui5-li-title"><slot></slot></span>`; };
const block8 = (context) => { return scopedHtml`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${ context.richDescription.length ? block9(context) : block10(context) }</span>${ context.info ? block11(context) : undefined }</div>`; };
const block9 = (context) => { return scopedHtml`<slot name="richDescription"></slot>`; };
const block10 = (context) => { return scopedHtml`${ifDefined(context.description)}`; };
const block11 = (context) => { return scopedHtml`<span part="info" class="ui5-li-info">${ifDefined(context.info)}</span>`; };
const block12 = (context) => { return scopedHtml`<span class="ui5-hidden-text">${ifDefined(context.type)}</span>`; };
const block13 = (context) => { return scopedHtml`${ context.info ? block14(context) : undefined }`; };
const block14 = (context) => { return scopedHtml`<span part="info" class="ui5-li-info">${ifDefined(context.info)}</span>`; };
const block15 = (context) => { return scopedHtml`<ui5-icon part="icon" name="${ifDefined(context.icon)}" class="ui5-li-icon"></ui5-icon>`; };
const block16 = (context) => { return scopedHtml`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${context.onDetailClick}"></ui5-button></div>`; };
const block17 = (context) => { return scopedHtml`${ context.modeSingleSelect ? block18(context) : undefined }${ context.modeMultiSelect ? block19(context) : undefined }${ context.modeDelete ? block20(context) : undefined }`; };
const block18 = (context) => { return scopedHtml`<ui5-radiobutton ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?selected="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radiobutton>`; };
const block19 = (context) => { return scopedHtml`<ui5-checkbox ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`; };
const block20 = (context) => { return scopedHtml`<div class="ui5-li-deletebtn"><ui5-button id="${ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${ifDefined(context.deleteText)}"></ui5-button></div>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

/**
 * @public
 */
const metadata$2 = {
	tag: "ui5-li-suggestion-item",
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.SuggestionListItem.prototype */ {
		/**
		 * Defines a description that can contain HTML.
		 * <b>Note:</b> If not specified, the <code>description</code> property will be used.
		 * <br>
		 * @type {HTMLElement}
		 * @since 1.0.0-rc.8
		 * @slot
		 * @public
		 */
		richDescription: {
			type: HTMLElement,
		},
		"default": {
			propertyName: "title",
		},
	},
};

/**
 * @class
 * The <code>ui5-li-suggestion-item</code> represents the suggestion item in the <code>ui5-input</code>
 * suggestion popover.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.SuggestionListItem
 * @extends StandardListItem
 * @tagname ui5-li-suggestion-item
 */
class SuggestionListItem extends StandardListItem {
	static get metadata() {
		return metadata$2;
	}

	static get template() {
		return main$1;
	}

	onBeforeRendering(...params) {
		super.onBeforeRendering(...params);
		this.hasTitle = !!this.title.length;
	}

	get effectiveTitle() {
		return this.title.map(el => el.textContent).join("");
	}

	get hasDescription() {
		return this.richDescription.length || this.description;
	}
}

SuggestionListItem.define();

const block0 = (context) => { return scopedHtml`<li tabindex="${ifDefined(context._tabIndex)}" class="ui5-ghli-root ${classMap(context.classes.main)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" role="option" style="list-style-type: none;"><span class="ui5-hidden-text">${ifDefined(context.groupHeaderText)}</span><div id="${ifDefined(context._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></li>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const groupheaderListItemCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host{background:var(--ui5-group-header-listitem-background-color);border-bottom:1px solid var(--sapList_TableGroupHeaderBorderColor);color:var(--sapList_TableGroupHeaderTextColor)}.ui5-li-root.ui5-ghli-root{padding-top:1rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-li-groupheader",
	languageAware: true,
	properties: /** @lends  sap.ui.webcomponents.main.GroupHeaderListItem.prototype */ {
	},
	slots: /** @lends sap.ui.webcomponents.main.GroupHeaderListItem.prototype */ {
		/**
		 * Defines the text of the <code>ui5-li-groupheader</code>.
		 * <br>
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
	events: /** @lends  sap.ui.webcomponents.main.GroupHeaderListItem.prototype */ {
	},
};

/**
 * @class
 * The <code>ui5-li-groupheader</code> is a special list item, used only to separate other list items into logical groups.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.GroupHeaderListItem
 * @extends ListItemBase
 * @tagname ui5-li-groupheader
 * @implements sap.ui.webcomponents.main.IListItem
 * @public
 */
class GroupHeaderListItem extends ListItemBase {
	static get template() {
		return main;
	}

	static get metadata() {
		return metadata$1;
	}

	static get styles() {
		return [ListItemBase.styles, groupheaderListItemCss];
	}

	constructor() {
		super();

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	get group() {
		return true;
	}

	get groupHeaderText() {
		return this.i18nBundle.getText(GROUP_HEADER_TEXT);
	}

	static async onDefine() {
		await Promise.all([
			fetchI18nBundle("@ui5/webcomponents"),
		]);
	}
}

GroupHeaderListItem.define();

/**
 * @public
 */
const metadata = {
	tag: "ui5-suggestion-item",
	properties: /** @lends  sap.ui.webcomponents.main.SuggestionItem.prototype */ {
		/**
		 * Defines the text of the <code>ui5-suggestion-item</code>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		text: {
			type: String,
		},

		/**
		 * Defines the visual indication and behavior of the item.
		 * Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>.
		 * <br><br>
		 * <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover,
		 * while when <code>Inactive</code> or <code>Detail</code> - will not.
		 *
		 * @type {ListItemType}
		 * @defaultvalue "Active"
		 * @public
		 * @since 1.0.0-rc.8
		*/
		type: {
			type: ListItemType,
			defaultValue: ListItemType.Active,
		},

		/**
		 * Defines the description displayed right under the item text, if such is present.
		 * @type {string}
		 * @defaultvalue: ""
		 * @public
		 */
		description: {
			type: String,
		},

		/**
		 * Defines the <code>icon</code> source URI.
		 * <br><br>
		 * <b>Note:</b>
		 * SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
		 * <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 *
		 * @type {string}
		 * @public
		 */
		icon: {
			type: String,
		},

		/**
		 * Defines whether the <code>icon</code> should be displayed in the beginning of the item or in the end.
		 * <br><br>
		 * <b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		iconEnd: {
			type: Boolean,
		},

		/**
		 * Defines the <code>image</code> source URI.
		 * <br><br>
		 * <b>Note:</b> The <code>image</code> would be displayed in the beginning of the item.
		 *
		 * @type {string}
		 * @public
		 */
		image: {
			type: String,
		},

		/**
		 * Defines the <code>info</code>, displayed in the end of the item.
		 * @type {string}
		 * @public
		 */
		info: {
			type: String,
		},

		/**
		 * Defines the state of the <code>info</code>.
		 * <br><br>
		 * Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code> and <code>"Erorr"</code>.
		 * @type {ValueState}
         * @defaultvalue "None"
		 * @public
		 */
		infoState: {
			type: ValueState,
			defaultValue: ValueState.None,
		},

		/**
		 * Defines the item to be displayed as a group item.
		 * <br><br>
		 * <b>Note:</b>
		 * When set, the other properties, such as <code>image</code>, <code>icon</code>, <code>description</code>, etc. will be omitted
		 * and only the <code>text</code> will be displayed.
		 * @type {boolean}
         * @defaultvalue false
		 * @public
		 */
		group: {
			type: Boolean,
		},
	},
	slots: /** @lends  sap.ui.webcomponents.main.SuggestionItem.prototype */ {
	},
	events: /** @lends  sap.ui.webcomponents.main.SuggestionItem.prototype */ {
	},
};

/**
 * @class
 * The <code>ui5-suggestion-item</code> represents the suggestion item of the <code>ui5-input</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.SuggestionItem
 * @extends UI5Element
 * @tagname ui5-suggestion-item
 * @implements sap.ui.webcomponents.main.IInputSuggestionItem
 * @public
 */
class SuggestionItem extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get dependencies() {
		return [
			SuggestionListItem,
			GroupHeaderListItem,
		];
	}
}

SuggestionItem.define();

/**
 * A class to manage the <code>Input</code suggestion items.
 *
 * @class
 * @private
 * @author SAP SE
 */
class Suggestions {
	constructor(component, slotName, highlight, handleFocus) {
		// The component, that the suggestion would plug into.
		this.component = component;

		// Defines the items` slot name.
		this.slotName = slotName;

		// Defines, if the focus will be moved via the arrow keys.
		this.handleFocus = handleFocus;

		// Defines, if the suggestions should highlight.
		this.highlight = highlight;

		// Press and Focus handlers
		this.fnOnSuggestionItemPress = this.onItemPress.bind(this);
		this.fnOnSuggestionItemFocus = this.onItemFocused.bind(this);
		this.fnOnSuggestionItemMouseOver = this.onItemMouseOver.bind(this);
		this.fnOnSuggestionItemMouseOut = this.onItemMouseOut.bind(this);

		// An integer value to store the currently selected item position,
		// that changes due to user interaction.
		this.selectedItemIndex = null;

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");

		this.accInfo = {};
	}

	/* Public methods */
	defaultSlotProperties(hightlightValue) {
		const inputSuggestionItems = this._getComponent().suggestionItems;
		const highlight = this.highlight && !!hightlightValue;
		const suggestions = [];

		inputSuggestionItems.map((suggestion, idx) => {
			const text = highlight ? this.getHighlightedText(suggestion, hightlightValue) : this.getRowText(suggestion);
			const description = highlight ? this.getHighlightedDesc(suggestion, hightlightValue) : this.getRowDesc(suggestion);

			return suggestions.push({
				text,
				description,
				image: suggestion.image || undefined,
				icon: suggestion.icon || undefined,
				type: suggestion.type || undefined,
				info: suggestion.info || undefined,
				infoState: suggestion.infoState,
				group: suggestion.group,
				key: idx,
			});
		});

		return suggestions;
	}

	onUp(event) {
		event.preventDefault();
		this._handleItemNavigation(false /* forward */);
		return true;
	}

	onDown(event) {
		event.preventDefault();
		this._handleItemNavigation(true /* forward */);
		return true;
	}

	onSpace(event) {
		if (this._isItemOnTarget()) {
			event.preventDefault();
			this.onItemSelected(null, true /* keyboardUsed */);
			return true;
		}
		return false;
	}

	onEnter(event) {
		if (this._isItemOnTarget()) {
			this.onItemSelected(null, true /* keyboardUsed */);
			return true;
		}
		return false;
	}

	toggle(bToggle, { preventFocusRestore }) {
		const toggle = bToggle !== undefined ? bToggle : !this.isOpened();

		if (toggle) {
			this.open();
		} else {
			this.close(preventFocusRestore);
		}
	}

	async _isScrollable() {
		const sc = await this._getScrollContainer();
		return sc.offsetHeight < sc.scrollHeight;
	}

	async open() {
		this.responsivePopover = await this._respPopover();
		this._beforeOpen();

		if (this._getItems().length) {
			this.responsivePopover.open(this._getComponent());
		}
	}

	async close(preventFocusRestore = false) {
		this.responsivePopover = await this._respPopover();
		this.responsivePopover.close(false, false, preventFocusRestore);
	}

	updateSelectedItemPosition(pos) {
		this.selectedItemIndex = pos;
	}

	/* Interface methods */
	onItemFocused() {
		this._getComponent().onItemFocused();
	}

	onItemMouseOver(event) {
		this._getComponent().onItemMouseOver(event);
	}

	onItemMouseOut(event) {
		this._getComponent().onItemMouseOut(event);
	}

	onItemSelected(selectedItem, keyboardUsed) {
		const allItems = this._getItems();
		const item = selectedItem || allItems[this.selectedItemIndex];

		this.selectedItemIndex = allItems.indexOf(item);

		this.accInfo = {
			currentPos: this.selectedItemIndex + 1,
			listSize: allItems.length,
			itemText: item.textContent,
		};

		// If the item is "Inactive", prevent selection with SPACE or ENTER
		// to have consistency with the way "Inactive" items behave in the ui5-list
		if (item.type === "Inactive") {
			return;
		}

		if (item.group) {
			return;
		}

		this._getComponent().onItemSelected(this._getRealItems()[this.selectedItemIndex], keyboardUsed);
		item.selected = false;
		this.close();
	}

	onItemPreviewed(item) {
		this._getComponent().onItemPreviewed(item);
	}

	/* Private methods */
	onItemPress(oEvent) {
		this.onItemSelected(oEvent.detail.item, false /* keyboardUsed */);
	}

	_beforeOpen() {
		this._attachItemsListeners();
		this._attachPopupListeners();
	}

	async _attachItemsListeners() {
		const list = await this._getList();
		list.removeEventListener("ui5-item-press", this.fnOnSuggestionItemPress);
		list.addEventListener("ui5-item-press", this.fnOnSuggestionItemPress);
		list.removeEventListener("ui5-item-focused", this.fnOnSuggestionItemFocus);
		list.addEventListener("ui5-item-focused", this.fnOnSuggestionItemFocus);
		list.removeEventListener("mouseover", this.fnOnSuggestionItemMouseOver);
		list.addEventListener("mouseover", this.fnOnSuggestionItemMouseOver);
		list.removeEventListener("mouseout", this.fnOnSuggestionItemMouseOut);
		list.addEventListener("mouseout", this.fnOnSuggestionItemMouseOut);
	}

	_attachPopupListeners() {
		if (!this.handleFocus) {
			return;
		}

		if (!this.attachedAfterOpened) {
			this._respPopover.addEventListener("ui5-after-open", this._onOpen.bind(this));
			this.attachedAfterOpened = true;
		}

		if (!this.attachedAfterClose) {
			this._respPopover.addEventListener("ui5-after-close", this._onClose.bind(this));
			this.attachedAfterClose = true;
		}
	}

	_onOpen() {
		this._applyFocus();
		this._getComponent().onOpen();
	}

	_onClose() {
		this._getComponent().onClose();
	}

	_applyFocus() {
		if (this.selectedItemIndex) {
			this._getItems()[this.selectedItemIndex].focus();
		}
	}

	_isItemOnTarget() {
		return this.isOpened() && this.selectedItemIndex !== null;
	}

	isOpened() {
		return !!(this.responsivePopover && this.responsivePopover.opened);
	}

	_handleItemNavigation(forward) {
		if (!this._getItems().length) {
			return;
		}

		if (forward) {
			this._selectNextItem();
		} else {
			this._selectPreviousItem();
		}
	}

	_selectNextItem() {
		const itemsCount = this._getItems().length;
		const previousSelectedIdx = this.selectedItemIndex;

		if ((this.selectedItemIndex === null) || (++this.selectedItemIndex > itemsCount - 1)) {
			this.selectedItemIndex = 0;
		}

		this._moveItemSelection(previousSelectedIdx, this.selectedItemIndex);
	}

	_selectPreviousItem() {
		const itemsCount = this._getItems().length;
		const previousSelectedIdx = this.selectedItemIndex;

		if ((this.selectedItemIndex === null) || (--this.selectedItemIndex < 0)) {
			this.selectedItemIndex = itemsCount - 1;
		}

		this._moveItemSelection(previousSelectedIdx, this.selectedItemIndex);
	}

	_moveItemSelection(previousIdx, nextIdx) {
		const items = this._getItems();
		const currentItem = items[nextIdx];
		const previousItem = items[previousIdx];

		this.accInfo = {
			currentPos: nextIdx + 1,
			listSize: items.length,
			itemText: currentItem.textContent,
		};

		if (previousItem) {
			previousItem.selected = false;
		}

		if (currentItem) {
			currentItem.selected = true;

			if (this.handleFocus) {
				currentItem.focus();
			}
		}

		this.onItemPreviewed(currentItem);

		if (!this._isItemIntoView(currentItem)) {
			this._scrollItemIntoView(currentItem);
		}
	}

	_deselectItems() {
		const items = this._getItems();
		items.forEach(item => {
			item.selected = false;
		});
	}

	_isItemIntoView(item) {
		const rectItem = item.getDomRef().getBoundingClientRect();
		const rectInput = this._getComponent().getDomRef().getBoundingClientRect();
		const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

		return (rectItem.top + Suggestions.SCROLL_STEP <= windowHeight) && (rectItem.top >= rectInput.top);
	}

	async _scrollItemIntoView(item) {
		const pos = item.getDomRef().offsetTop;
		const scrollContainer = await this._getScrollContainer();
		scrollContainer.scrollTop = pos;
	}

	async _getScrollContainer() {
		if (!this._scrollContainer) {
			await this._respPopover();
			this._scrollContainer = this.responsivePopover.shadowRoot.querySelector(".ui5-popup-content");
		}

		return this._scrollContainer;
	}

	_getItems() {
		return [...this.responsivePopover.querySelector("[ui5-list]").children];
	}

	_getComponent() {
		return this.component;
	}

	async _getList() {
		this.responsivePopover = await this._respPopover();
		return this.responsivePopover.querySelector("[ui5-list]");
	}

	async _getListWidth() {
		const list = await this._getList();
		return list.offsetWidth;
	}

	_getRealItems() {
		return this._getComponent().getSlottedNodes(this.slotName);
	}

	async _respPopover() {
		if (this.responsivePopover) {
			return this.responsivePopover;
		}

		const staticAreaItem = await this._getComponent().getStaticAreaItemDomRef();
		this.responsivePopover = staticAreaItem.querySelector("[ui5-responsive-popover]");
		return this.responsivePopover;
	}

	get itemSelectionAnnounce() {
		const i18nBundle = this.i18nBundle,
			itemPositionText = i18nBundle.getText(LIST_ITEM_POSITION, [this.accInfo.currentPos], [this.accInfo.listSize]),
			itemSelectionText = i18nBundle.getText(LIST_ITEM_SELECTED);

		return `${itemPositionText} ${this.accInfo.itemText} ${itemSelectionText}`;
	}

	getRowText(suggestion) {
		return this.sanitizeText(suggestion.text || suggestion.textContent);
	}

	getRowDesc(suggestion) {
		if (suggestion.description) {
			return this.sanitizeText(suggestion.description);
		}
	}

	getHighlightedText(suggestion, input) {
		let text = suggestion.text || suggestion.textContent;
		text = this.sanitizeText(text);

		return this.hightlightInput(text, input);
	}

	getHighlightedDesc(suggestion, input) {
		let text = suggestion.description;
		text = this.sanitizeText(text);

		return this.hightlightInput(text, input);
	}

	hightlightInput(text, input) {
		if (!text) {
			return text;
		}

		const inputEscaped = input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		const regEx = new RegExp(inputEscaped, "ig");
		return text.replace(regEx, match => `<b>${match}</b>`);
	}

	sanitizeText(text) {
		return text && text.replace("<", "&lt");
	}

	static get dependencies() {
		return [
			SuggestionItem,
			ResponsivePopover,
			List,
			SuggestionListItem,
			GroupHeaderListItem,
			Button,
		];
	}
}

Suggestions.SCROLL_STEP = 60;

// Add suggestions support to the global features registry so that Input.js can use it
registerFeature("InputSuggestions", Suggestions);

export { flat as f };
