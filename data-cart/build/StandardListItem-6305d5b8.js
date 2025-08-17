import { D as DataType, s as scopedHtml, i as ifDefined, a as styleMap, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, f as fetchI18nBundle, g as registerIcon, h as classMap, j as scopedSvg, k as getFeature } from './Icons-85d4abff.js';
import { i as isNodeHidden, R as ResizeHandler } from './Popover-0d784de7.js';
import { I as ItemNavigation, N as NavigationMode, d as debounce } from './debounce-bf42cc69.js';
import { g as getI18nBundle, a as getEffectiveAriaLabelText, i as isIE, L as LOAD_MORE_TEXT, b as isTabNext, c as isSpace, d as isEnter, e as isTabPrevious, f as isDown, h as isRight, j as isUp, k as isLeft, V as VALUE_STATE_ERROR, l as VALUE_STATE_WARNING, m as isDesktop, D as DELETE, A as ARIA_LABEL_LIST_ITEM_CHECKBOX, n as AVATAR_TOOLTIP } from './i18n-defaults-dca87248.js';
import { B as BusyIndicator, L as Label } from './BusyIndicator-60b0b9ee.js';
import { V as ValueState } from './ValueState-a7516d8f.js';
import './decline-a03835ab.js';
import { I as Icon, B as Button } from './Button-7dc82d4c.js';

const isNodeTabbable = node => {
	if (!node) {
		return false;
	}

	const nodeName = node.nodeName.toLowerCase();

	if (node.hasAttribute("data-sap-no-tab-ref")) {
		return false;
	}

	if (isNodeHidden(node)) {
		return false;
	}

	if (nodeName === "a" || /input|select|textarea|button|object/.test(nodeName)) {
		return !node.disabled;
	}

	const tabIndex = node.getAttribute("tabindex");
	if (tabIndex !== null && tabIndex !== undefined) {
		return parseInt(tabIndex) >= 0;
	}
};

const getTabbableElements = node => {
	return getTabbables(node.children);
};

const getLastTabbableElement = node => {
	const tabbables = getTabbables(node.children);
	return tabbables.length ? tabbables[tabbables.length - 1] : null;
};

const getTabbables = (nodes, tabbables) => {
	const tabbablesNodes = tabbables || [];

	if (!nodes) {
		return tabbablesNodes;
	}

	Array.from(nodes).forEach(currentNode => {
		if (currentNode.nodeType === Node.TEXT_NODE || currentNode.nodeType === Node.COMMENT_NODE) {
			return;
		}

		if (currentNode.shadowRoot) {
			// get the root node of the ShadowDom (1st none style tag)
			const children = currentNode.shadowRoot.children;
			currentNode = Array.from(children).find(node => node.tagName !== "STYLE");
		}

		if (isNodeTabbable(currentNode)) {
			tabbablesNodes.push(currentNode);
		}

		if (currentNode.tagName === "SLOT") {
			getTabbables(currentNode.assignedNodes(), tabbablesNodes);
		} else {
			getTabbables(currentNode.children, tabbablesNodes);
		}
	});

	return tabbablesNodes;
};

/**
 * Determines if the element is within the viewport.
 * @param el {HTMLElement}
 */
const isElementInView = el => {
	const rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 && rect.left >= 0
			&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

/**
 * @lends sap.ui.webcomponents.main.types.ListMode.prototype
 * @public
 */
const ListModes = {
	/**
	 * Default mode (no selection).
	 * @public
	 * @type {None}
	 */
	None: "None",

	/**
	 * Right-positioned single selection mode (only one list item can be selected).
	 * @public
	 * @type {SingleSelect}
	 */
	SingleSelect: "SingleSelect",

	/**
	 * Left-positioned single selection mode (only one list item can be selected).
	 * @public
	 * @type {SingleSelectBegin}
	 */
	SingleSelectBegin: "SingleSelectBegin",

	/**
	 * Selected item is highlighted but no selection element is visible
	 * (only one list item can be selected).
	 * @public
	 * @type {SingleSelectEnd}
	 */
	SingleSelectEnd: "SingleSelectEnd",

	/**
	 * Selected item is highlighted and selection is changed upon arrow navigation
	 * (only one list item can be selected - this is always the focused item).
	 * @public
	 * @type {SingleSelectAuto}
	 */
	SingleSelectAuto: "SingleSelectAuto",

	/**
	 * Multi selection mode (more than one list item can be selected).
	 * @public
	 * @type {MultiSelect}
	 */
	MultiSelect: "MultiSelect",

	/**
	 * Delete mode (only one list item can be deleted via provided delete button)
	 * @public
	 * @type {Delete}
	 */
	Delete: "Delete",
};

/**
 * @class
 * Defines the type of <code>ui5-list</code>.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.ListMode
 * @public
 * @enum {string}
 */
class ListMode extends DataType {
	static isValid(value) {
		return !!ListModes[value];
	}
}

ListMode.generateTypeAccessors(ListModes);

/**
 * @lends sap.ui.webcomponents.main.types.GrowingMode.prototype
 * @public
 */
const GrowingModes = {
	/**
	 * Component's <code>load-more</code> is fired upon pressing a "More" button.
	 * at the bottom.
	 * @public
	 * @type {Button}
	 */
	Button: "Button",

	/**
	 * Component's <code>load-more</code> is fired upon scroll.
	 * @public
	 * @type {Scroll}
	 */
	Scroll: "Scroll",

	/**
	 * Component's growing is not enabled.
	 * @public
	 * @type {None}
	 */
	None: "None",
};

/**
 * @class
 * Defines the growing mode of the component.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.GrowingMode
 * @public
 * @enum {string}
 */
class GrowingMode extends DataType {
	static isValid(value) {
		return !!GrowingModes[value];
	}
}

GrowingMode.generateTypeAccessors(GrowingModes);

/**
 * @class
 * Defines the growing mode, used in the <code>ui5-List</code>.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.ListGrowingMode
 * @public
 * @enum {string}
 */
class ListGrowingMode extends GrowingMode {
}

/**
 * @lends sap.ui.webcomponents.main.types.ListSeparators.prototype
 * @public
 */
const ListSeparatorsTypes = {
	/**
	 * Separators between the items including the last and the first one.
	 * @public
	 * @type {All}
	 */
	All: "All",
	/**
	 * Separators between the items.
	 * <b>Note:</b> This enumeration depends on the theme.
	 * @public
	 * @type {Inner}
	 */
	Inner: "Inner",
	/**
	 * No item separators.
	 * @public
	 * @type {None}
	 */
	None: "None",
};

/**
 * @class
 * Defines which separator style will be applied for the list items.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.ListSeparators
 * @public
 * @enum {string}
 */
class ListSeparators extends DataType {
	static isValid(value) {
		return !!ListSeparatorsTypes[value];
	}
}

ListSeparators.generateTypeAccessors(ListSeparatorsTypes);

const block0$4 = (context) => { return scopedHtml`<div class="ui5-list-root" @focusin="${context._onfocusin}" @keydown="${context._onkeydown}"><div class="ui5-list-scroll-container"><!-- header -->${ context.header.length ? block1$4(context) : undefined }${ context.shouldRenderH1 ? block2$4(context) : undefined }${ context.hasData ? block3$3(context) : undefined }<ul id="${ifDefined(context._id)}-listUl" class="ui5-list-ul" role="${ifDefined(context.accRole)}" aria-label="${ifDefined(context.ariaLabelТxt)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}" aria-multiselectable="${ifDefined(context.isMultiSelect)}"><slot></slot>${ context.showNoDataText ? block4$2(context) : undefined }</ul>${ context.growsWithButton ? block5$2(context) : undefined }${ context.footerText ? block6$1(context) : undefined }${ context.hasData ? block7$1(context) : undefined }<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${ context.busy ? block8$1(context) : undefined }</div>`; };
const block1$4 = (context) => { return scopedHtml`<slot name="header" />`; };
const block2$4 = (context) => { return scopedHtml`<header id="${ifDefined(context.headerID)}" class="ui5-list-header">${ifDefined(context.headerText)}</header>`; };
const block3$3 = (context) => { return scopedHtml`<div id="${ifDefined(context._id)}-before" tabindex="0" class="ui5-list-focusarea"></div>`; };
const block4$2 = (context) => { return scopedHtml`<li id="${ifDefined(context._id)}-nodata" class="ui5-list-nodata" tabindex="${ifDefined(context.noDataTabIndex)}" style="list-style-type: none;"><div id="${ifDefined(context._id)}-nodata-text" class="ui5-list-nodata-text">${ifDefined(context.noDataText)}</div></li>`; };
const block5$2 = (context) => { return scopedHtml`<div load-more><div tabindex="0" role="button" aria-labelledby="${ifDefined(context._id)}-showMore-text" ?active="${context._loadMoreActive}" @click="${context._onLoadMoreClick}" @keydown="${context._onLoadMoreKeydown}" @keyup="${context._onLoadMoreKeyup}" @mousedown="${context._onLoadMoreMousedown}" @mouseup="${context._onLoadMoreMouseup}" load-more-inner><span id="${ifDefined(context._id)}-showMore-text" load-more-text>${ifDefined(context._moreText)}</span></div></div>`; };
const block6$1 = (context) => { return scopedHtml`<footer id="${ifDefined(context._id)}-footer" class="ui5-list-footer">${ifDefined(context.footerText)}</footer>`; };
const block7$1 = (context) => { return scopedHtml`<div id="${ifDefined(context._id)}-after" tabindex="0" class="ui5-list-focusarea"></div>`; };
const block8$1 = (context) => { return scopedHtml`<div class="ui5-list-busy-row"><ui5-busyindicator active size="Medium" class="ui5-list-busy-ind" style="${styleMap(context.styles.busyInd)}"></ui5-busyindicator></div>`; };


const main$4 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$4(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const listCss = "[load-more]{display:flex;align-items:center;padding:var(--_ui5_load_more_padding);border-top:1px solid var(--sapList_BorderColor);box-sizing:border-box;cursor:pointer;outline:none}[load-more-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5_load_more_border);border-radius:var(--_ui5_load_more_border_radius);box-sizing:border-box}[load-more-inner]:focus{outline:var(--_ui5_load_more_outline_width) dotted var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[load-more-inner]:hover{background-color:var(--sapList_Hover_Background)}[load-more-inner]:active,[load-more-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[load-more-inner]:active>*,[load-more-inner][active]>*{color:var(--sapList_Active_TextColor)}[load-more-subtext],[load-more-text]{width:100%;text-align:center;font-family:\"72override\",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[load-more-text]{height:var(--_ui5_load_more_text_height);padding:.875rem 1rem 0 1rem;font-size:var(--_ui5_load_more_text_font_size);font-weight:700}[load-more-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5_load_more_desc_padding)}:host(:not([hidden])){display:block;max-width:100%;width:100%}:host([inset]) .ui5-list-root{padding:2rem}:host([separators=None]) .ui5-list-nodata{border-bottom:0}:host([busy]){opacity:.72}:host([busy]) .ui5-list-busy-row{position:absolute;left:0;right:0;bottom:0;top:0;outline:none}:host([busy]) .ui5-list-busy-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.ui5-list-root{width:100%;height:100%;position:relative;box-sizing:border-box}.ui5-list-scroll-container{overflow:auto;height:100%}.ui5-list-ul{list-style-type:none;padding:0;margin:0}.ui5-list-ul:focus{outline:none}.ui5-list-focusarea{position:fixed}.ui5-list-header{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;font-size:var(--sapFontHeader4Size);font-family:\"72override\",var(--sapFontFamily);color:var(--sapGroup_TitleTextColor);height:3rem;line-height:3rem;padding:0 1rem;background-color:var(--sapGroup_TitleBackground);border-bottom:1px solid var(--sapGroup_TitleBorderColor)}.ui5-list-footer{height:2rem;box-sizing:border-box;-webkit-text-size-adjust:none;font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);line-height:2rem;background-color:var(--sapList_FooterBackground);color:var(--ui5_list_footer_text_color);padding:0 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-list-nodata{list-style-type:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--sapTextColor);background-color:var(--sapList_Background);border-bottom:1px solid var(--sapList_BorderColor);padding:0 1rem!important;height:var(--_ui5_list_no_data_height);font-size:var(--sapFontSize)}.ui5-list-nodata-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const INFINITE_SCROLL_DEBOUNCE_RATE = 250; // ms

/**
 * @public
 */
const metadata$6 = {
	tag: "ui5-list",
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.List.prototype */ {

		/**
		 * Defines the <code>ui5-list</code> header.
		 * <br><br>
		 * <b>Note:</b> When <code>header</code> is set, the
		 * <code>headerText</code> property is ignored.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		header: {
			type: HTMLElement,
		},

		/**
		 * Defines the items of the <code>ui5-list</code>.
		 * <br><br>
		 * <b>Note:</b> Use <code>ui5-li</code>, <code>ui5-li-custom</code>, and <code>ui5-li-groupheader</code> for the intended design.
		 *
		 * @type {sap.ui.webcomponents.main.IListItem[]}
		 * @slot items
		 * @public
		 */
		"default": {
			propertyName: "items",
			type: HTMLElement,
		},
	},
	properties: /** @lends  sap.ui.webcomponents.main.List.prototype */ {

		/**
		 * Defines the <code>ui5-list</code> header text.
		 * <br><br>
		 * <b>Note:</b> If <code>header</code> is set this property is ignored.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		headerText: {
			type: String,
		},

		/**
		 * Defines the footer text.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		footerText: {
			type: String,
		},

		/**
		 * Determines whether the list items are indented.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		inset: {
			type: Boolean,
		},

		/**
		 * Defines the mode of the <code>ui5-list</code>.
		 * <br><br>
		 * <b>Note:</b> Available options are <code>None</code>, <code>SingleSelect</code>, <code>SingleSelectBegin</code>,
		 * <code>SingleSelectEnd</code>, <code>MultiSelect</code>, and <code>Delete</code>.
		 *
		 * @type {ListMode}
		 * @defaultvalue "None"
		 * @public
		 */
		mode: {
			type: ListMode,
			defaultValue: ListMode.None,
		},

		/**
		 * Defines the text that is displayed when the <code>ui5-list</code> contains no items.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		noDataText: {
			type: String,
		},

		/**
		 * Defines the item separator style that is used.
		 * <br><br>
		 * <b>Notes:</b>
		 * <ul>
		 * <li>Avalaible options are <code>All</code>, <code>Inner</code>, and <code>None</code>.</li>
		 * <li>When set to <code>None</code>, none of the items are separated by horizontal lines.</li>
		 * <li>When set to <code>Inner</code>, the first item doesn't have a top separator and the last
		 * item doesn't have a bottom separator.</li>
		 * </ul>
		 *
		 * @type {ListSeparators}
		 * @defaultvalue "All"
		 * @public
		 */
		separators: {
			type: ListSeparators,
			defaultValue: ListSeparators.All,
		},

		/**
		 * Defines whether the <code>ui5-list</code> will have growing capability either by pressing a <code>More</code> button,
		 * or via user scroll. In both cases <code>load-more</code> event is fired.
		 * <br><br>
		 *
		 * Available options:
		 * <br><br>
		 * <code>Button</code> - Shows a <code>More</code> button at the bottom of the list,
		 * pressing of which triggers the <code>load-more</code> event.
		 * <br>
		 * <code>Scroll</code> - The <code>load-more</code> event is triggered when the user scrolls to the bottom of the list;
		 * <br>
		 * <code>None</code> (default) - The growing is off.
		 * <br><br>
		 *
		 * <b>Limitations:</b> <code>growing="Scroll"</code> is not supported for Internet Explorer,
		 * on IE the component will fallback to <code>growing="Button"</code>.
		 * @type {ListGrowingMode}
		 * @defaultvalue "None"
		 * @since 1.0.0-rc.13
		 * @public
		 */
		 growing: {
			type: ListGrowingMode,
			defaultValue: ListGrowingMode.None,
		},

		/**
		 * Defines if the component would display a loading indicator over the list.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.6
		 */
		busy: {
			type: Boolean,
		},

		/**
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.8
		 */
		ariaLabel: {
			type: String,
		},

		/**
		 * Receives id(or many ids) of the elements that label the input
		 *
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.8
		 */
		ariaLabelledby: {
			type: String,
			defaultValue: "",
		},

		/**
		 * Used to externally manipulate the role of the list
		 *
		 * @private
		 * @type {String}
		 * @defaultvalue "listbox"
		 * @since 1.0.0-rc.9
		 */
		accRole: {
			type: String,
			defaultValue: "listbox",
		},

		/**
		 * Defines if the entire list is in view port.
		 * @private
		 */
		 _inViewport: {
			type: Boolean,
		},

		/**
		 * Defines the active state of the <code>More</code> button.
		 * @private
		 */
		 _loadMoreActive: {
			type: Boolean,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.List.prototype */ {

		/**
		 * Fired when an item is activated, unless the item's <code>type</code> property
		 * is set to <code>Inactive</code>.
		 *
		 * @event sap.ui.webcomponents.main.List#item-click
		 * @param {HTMLElement} item the clicked item.
		 * @public
		 */
		"item-click": {
			detail: {
				item: { type: HTMLElement },
			},
		},

		/**
		 * Fired when the <code>Close</code> button of any item is clicked
		 * <br><br>
		 * <b>Note:</b> This event is applicable to <code>ui5-li-notification</code> items only,
		 * not to be confused with <code>item-delete</code>.
		 *
		 * @event sap.ui.webcomponents.main.List#item-close
		 * @param {HTMLElement} item the item about to be closed.
		 * @public
		 * @since 1.0.0-rc.8
		 */
		"item-close": {
			detail: {
				item: { type: HTMLElement },
			},
		},

		/**
		 * Fired when the <code>Toggle</code> button of any item is clicked.
		 * <br><br>
		 * <b>Note:</b> This event is applicable to <code>ui5-li-notification-group</code> items only.
		 *
		 * @event sap.ui.webcomponents.main.List#item-toggle
		 * @param {HTMLElement} item the toggled item.
		 * @public
		 * @since 1.0.0-rc.8
		 */
		"item-toggle": {
			detail: {
				item: { type: HTMLElement },
			},
		},

		/**
		 * Fired when the Delete button of any item is pressed.
		 * <br><br>
		 * <b>Note:</b> A Delete button is displayed on each item,
		 * when the <code>ui5-list</code> <code>mode</code> property is set to <code>Delete</code>.
		 *
		 * @event sap.ui.webcomponents.main.List#item-delete
		 * @param {HTMLElement} item the deleted item.
		 * @public
		 */
		"item-delete": {
			detail: {
				item: { type: HTMLElement },
			},
		},

		/**
		 * Fired when selection is changed by user interaction
		 * in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.
		 *
		 * @event sap.ui.webcomponents.main.List#selection-change
		 * @param {Array} selectedItems An array of the selected items.
		 * @param {Array} previouslySelectedItems An array of the previously selected items.
		 * @public
		 */
		"selection-change": {
			detail: {
				selectedItems: { type: Array },
				previouslySelectedItems: { type: Array },
				selectionComponentPressed: { type: Boolean }, // protected, indicates if the user used the selection components to change the selection
			},
		},

		/**
		 * Fired when the user scrolls to the bottom of the list.
		 * <br><br>
		 * <b>Note:</b> The event is fired when the <code>growing='Scroll'</code> property is enabled.
		 *
		 * @event sap.ui.webcomponents.main.List#load-more
		 * @public
		 * @since 1.0.0-rc.6
		 */
		"load-more": {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-list</code> component allows displaying a list of items, advanced keyboard
 * handling support for navigating between items, and predefined modes to improve the development efficiency.
 * <br><br>
 * The <code>ui5-list</code> is а container for the available list items:
 * <ul>
 * <li><code>ui5-li</code></li>
 * <li><code>ui5-li-custom</code></li>
 * <li><code>ui5-li-groupheader</code></li>
 * </ul>
 * <br><br>
 * To benefit from the built-in selection mechanism, you can use the available
 * selection modes, such as
 * <code>SingleSelect</code>, <code>MultiSelect</code> and <code>Delete</code>.
 * <br><br>
 * Additionally, the <code>ui5-list</code> provides header, footer, and customization for the list item separators.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/List.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents/dist/StandardListItem.js";</code> (for <code>ui5-li</code>)
 * <br>
 * <code>import "@ui5/webcomponents/dist/CustomListItem.js";</code> (for <code>ui5-li-custom</code>)
 * <br>
 * <code>import "@ui5/webcomponents/dist/GroupHeaderListItem.js";</code> (for <code>ui5-li-groupheader</code>)
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.List
 * @extends UI5Element
 * @tagname ui5-list
 * @appenddocs StandardListItem CustomListItem GroupHeaderListItem
 * @public
 */
class List extends UI5Element {
	static get metadata() {
		return metadata$6;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$4;
	}

	static get styles() {
		return listCss;
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}

	static get dependencies() {
		return [BusyIndicator];
	}

	constructor() {
		super();
		this.initItemNavigation();

		// Stores the last focused item within the internal ul element.
		this._previouslyFocusedItem = null;

		// Indicates that the List is forwarding the focus before or after the internal ul.
		this._forwardingFocus = false;

		this._previouslySelectedItem = null;

		// Indicates that the List has already subscribed for resize.
		this.resizeListenerAttached = false;

		// Indicates if the IntersectionObserver started observing the List
		this.listEndObserved = false;

		this.addEventListener("ui5-_press", this.onItemPress.bind(this));
		this.addEventListener("ui5-close", this.onItemClose.bind(this));
		this.addEventListener("ui5-toggle", this.onItemToggle.bind(this));
		this.addEventListener("ui5-_focused", this.onItemFocused.bind(this));
		this.addEventListener("ui5-_forward-after", this.onForwardAfter.bind(this));
		this.addEventListener("ui5-_forward-before", this.onForwardBefore.bind(this));
		this.addEventListener("ui5-_selection-requested", this.onSelectionRequested.bind(this));
		this.addEventListener("ui5-_focus-requested", this.focusUploadCollectionItem.bind(this));

		this._handleResize = this.checkListInViewport.bind(this);
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	onExitDOM() {
		this.unobserveListEnd();
		this.resizeListenerAttached = false;
		ResizeHandler.deregister(this.getDomRef(), this._handleResize);
	}

	onBeforeRendering() {
		this.prepareListItems();
	}

	onAfterRendering() {
		if (this.growsOnScroll) {
			this.observeListEnd();
		} else if (this.listEndObserved) {
			this.unobserveListEnd();
		}

		if (this.grows) {
			this.checkListInViewport();
			this.attachForResize();
		}
	}

	attachForResize() {
		if (!this.resizeListenerAttached) {
			this.resizeListenerAttached = true;
			ResizeHandler.register(this.getDomRef(), this._handleResize);
		}
	}

	get shouldRenderH1() {
		return !this.header.length && this.headerText;
	}

	get headerID() {
		return `${this._id}-header`;
	}

	get listEndDOM() {
		return this.shadowRoot.querySelector(".ui5-list-end-marker");
	}

	get hasData() {
		return this.getSlottedNodes("items").length !== 0;
	}

	get showNoDataText() {
		return !this.hasData && this.noDataText;
	}

	get isMultiSelect() {
		return this.mode === ListMode.MultiSelect;
	}

	get ariaLabelledBy() {
		if (this.ariaLabelledby || this.ariaLabel) {
			return undefined;
		}

		return this.shouldRenderH1 ? this.headerID : undefined;
	}

	get ariaLabelТxt() {
		return getEffectiveAriaLabelText(this);
	}

	get grows() {
		return this.growing !== ListGrowingMode.None;
	}

	get growsOnScroll() {
		return this.growing === ListGrowingMode.Scroll && !isIE();
	}

	get growsWithButton() {
		if (isIE()) {
			// On IE fallback to "More" button, even if growing of type "Scroll" is set.
			return this.grows;
		}

		return this.growing === ListGrowingMode.Button;
	}

	get _moreText() {
		return this.i18nBundle.getText(LOAD_MORE_TEXT);
	}

	get busyIndPosition() {
		if (isIE() || !this.grows) {
			return "absolute";
		}

		return this._inViewport ? "absolute" : "sticky";
	}

	get styles() {
		return {
			busyInd: {
				position: this.busyIndPosition,
			},
		};
	}

	initItemNavigation() {
		this._itemNavigation = new ItemNavigation(this, {
			navigationMode: NavigationMode.Vertical,
			getItemsCallback: () => this.getEnabledItems(),
		});
	}

	prepareListItems() {
		const slottedItems = this.getSlottedNodes("items");

		slottedItems.forEach((item, key) => {
			const isLastChild = key === slottedItems.length - 1;
			const showBottomBorder = this.separators === ListSeparators.All
				|| (this.separators === ListSeparators.Inner && !isLastChild);

			item._mode = this.mode;
			item.hasBorder = showBottomBorder;
		});

		this._previouslySelectedItem = null;
	}

	observeListEnd() {
		if (!this.listEndObserved) {
			this.getIntersectionObserver().observe(this.listEndDOM);
			this.listEndObserved = true;
		}
	}

	unobserveListEnd() {
		if (this.growingIntersectionObserver) {
			this.growingIntersectionObserver.disconnect();
			this.growingIntersectionObserver = null;
			this.listEndObserved = false;
		}
	}

	onInteresection(entries) {
		if (entries.some(entry => entry.isIntersecting)) {
			debounce(this.loadMore.bind(this), INFINITE_SCROLL_DEBOUNCE_RATE);
		}
	}

	/*
	* ITEM SELECTION BASED ON THE CURRENT MODE
	*/
	onSelectionRequested(event) {
		const previouslySelectedItems = this.getSelectedItems();
		let selectionChange = false;
		this._selectionRequested = true;

		if (this[`handle${this.mode}`]) {
			selectionChange = this[`handle${this.mode}`](event.detail.item, event.detail.selected);
		}

		if (selectionChange) {
			this.fireEvent("selection-change", {
				selectedItems: this.getSelectedItems(),
				previouslySelectedItems,
				selectionComponentPressed: event.detail.selectionComponentPressed,
				key: event.detail.key,
			});
		}
	}

	handleSingleSelect(item) {
		if (item.selected) {
			return false;
		}

		this.deselectSelectedItems();
		item.selected = true;

		return true;
	}

	handleSingleSelectBegin(item) {
		return this.handleSingleSelect(item);
	}

	handleSingleSelectEnd(item) {
		return this.handleSingleSelect(item);
	}

	handleSingleSelectAuto(item) {
		return this.handleSingleSelect(item);
	}

	handleMultiSelect(item, selected) {
		item.selected = selected;
		return true;
	}

	handleDelete(item) {
		this.fireEvent("item-delete", { item });
	}

	deselectSelectedItems() {
		this.getSelectedItems().forEach(item => { item.selected = false; });
	}

	getSelectedItems() {
		return this.getSlottedNodes("items").filter(item => item.selected);
	}

	getEnabledItems() {
		return this.getSlottedNodes("items").filter(item => !item.disabled);
	}

	_onkeydown(event) {
		if (isTabNext(event)) {
			this._handleTabNext(event);
		}
	}

	_onLoadMoreKeydown(event) {
		if (isSpace(event)) {
			event.preventDefault();
			this._loadMoreActive = true;
		}

		if (isEnter(event)) {
			this._onLoadMoreClick();
			this._loadMoreActive = true;
		}
	}

	_onLoadMoreKeyup(event) {
		if (isSpace(event)) {
			this._onLoadMoreClick();
		}
		this._loadMoreActive = false;
	}

	_onLoadMoreMousedown() {
		this._loadMoreActive = true;
	}

	_onLoadMoreMouseup() {
		this._loadMoreActive = false;
	}

	_onLoadMoreClick() {
		this.loadMore();
	}

	checkListInViewport() {
		this._inViewport = isElementInView(this.getDomRef());
	}

	loadMore() {
		this.fireEvent("load-more");
	}

	/*
	* KEYBOARD SUPPORT
	*/
	_handleTabNext(event) {
		// If forward navigation is performed, we check if the List has headerToolbar.
		// If yes - we check if the target is at the last tabbable element of the headerToolbar
		// to forward correctly the focus to the selected, previously focused or to the first list item.
		let lastTabbableEl;
		const target = this.getNormalizedTarget(event.target);

		if (this.headerToolbar) {
			lastTabbableEl = this.getHeaderToolbarLastTabbableElement();
		}

		if (!lastTabbableEl) {
			return;
		}

		if (lastTabbableEl === target) {
			if (this.getFirstItem(x => x.selected && !x.disabled)) {
				this.focusFirstSelectedItem();
			} else if (this.getPreviouslyFocusedItem()) {
				this.focusPreviouslyFocusedItem();
			} else {
				this.focusFirstItem();
			}

			event.stopImmediatePropagation();
			event.preventDefault();
		}
	}

	_onfocusin(event) {
		// If the focusin event does not origin from one of the 'triggers' - ignore it.
		if (!this.isForwardElement(this.getNormalizedTarget(event.target))) {
			event.stopImmediatePropagation();
			return;
		}

		// The focus arrives in the List for the first time.
		// If there is selected item - focus it or focus the first item.
		if (!this.getPreviouslyFocusedItem()) {
			if (this.getFirstItem(x => x.selected && !x.disabled)) {
				this.focusFirstSelectedItem();
			} else {
				this.focusFirstItem();
			}

			event.stopImmediatePropagation();
			return;
		}

		// The focus returns to the List,
		// focus the first selected item or the previously focused element.
		if (!this.getForwardingFocus()) {
			if (this.getFirstItem(x => x.selected && !x.disabled)) {
				this.focusFirstSelectedItem();
			} else {
				this.focusPreviouslyFocusedItem();
			}
		}

		this.setForwardingFocus(false);
	}

	isForwardElement(node) {
		const nodeId = node.id;
		const afterElement = this.getAfterElement();
		const beforeElement = this.getBeforeElement();

		if (this._id === nodeId || (beforeElement && beforeElement.id === nodeId)) {
			return true;
		}

		return afterElement && afterElement.id === nodeId;
	}

	onItemFocused(event) {
		const target = event.target;

		this._itemNavigation.setCurrentItem(target);
		this.fireEvent("item-focused", { item: target });

		if (this.mode === ListMode.SingleSelectAuto) {
			this.onSelectionRequested({
				detail: {
					item: target,
					selectionComponentPressed: false,
					selected: true,
					key: event.detail.key,
				},
			});
		}
	}

	onItemPress(event) {
		const pressedItem = event.detail.item;

		if (!this._selectionRequested && this.mode !== ListMode.Delete) {
			this._selectionRequested = true;
			this.onSelectionRequested({
				detail: {
					item: pressedItem,
					selectionComponentPressed: false,
					selected: !pressedItem.selected,
					key: event.detail.key,
				},
			});
		}

		this.fireEvent("item-press", { item: pressedItem });
		this.fireEvent("item-click", { item: pressedItem });

		this._selectionRequested = false;
	}

	// This is applicable to NoficationListItem
	onItemClose(event) {
		this.fireEvent("item-close", { item: event.detail.item });
	}

	onItemToggle(event) {
		this.fireEvent("item-toggle", { item: event.detail.item });
	}

	onForwardBefore(event) {
		this.setPreviouslyFocusedItem(event.target);
		this.focusBeforeElement();
	}

	onForwardAfter(event) {
		this.setPreviouslyFocusedItem(event.target);

		if (!this.growsWithButton) {
			this.focusAfterElement();
		}
	}

	focusBeforeElement() {
		this.setForwardingFocus(true);
		this.getBeforeElement().focus();
	}

	focusAfterElement() {
		this.setForwardingFocus(true);
		this.getAfterElement().focus();
	}

	focusFirstItem() {
		// only enabled items are focusable
		const firstItem = this.getFirstItem(x => !x.disabled);

		if (firstItem) {
			firstItem.focus();
		}
	}

	focusPreviouslyFocusedItem() {
		const previouslyFocusedItem = this.getPreviouslyFocusedItem();

		if (previouslyFocusedItem) {
			previouslyFocusedItem.focus();
		}
	}

	focusFirstSelectedItem() {
		// only enabled items are focusable
		const firstSelectedItem = this.getFirstItem(x => x.selected && !x.disabled);

		if (firstSelectedItem) {
			firstSelectedItem.focus();
		}
	}

	/**
	 * Focuses a list item and sets its tabindex to "0" via the ItemNavigation
	 * @protected
	 * @param item
	 */
	focusItem(item) {
		this._itemNavigation.setCurrentItem(item);
		item.focus();
	}

	focusUploadCollectionItem(event) {
		setTimeout(() => {
			this.setPreviouslyFocusedItem(event.target);
			this.focusPreviouslyFocusedItem();
		}, 0);
	}

	setForwardingFocus(forwardingFocus) {
		this._forwardingFocus = forwardingFocus;
	}

	getForwardingFocus() {
		return this._forwardingFocus;
	}

	setPreviouslyFocusedItem(item) {
		this._previouslyFocusedItem = item;
	}

	getPreviouslyFocusedItem() {
		return this._previouslyFocusedItem;
	}

	getFirstItem(filter) {
		const slottedItems = this.getSlottedNodes("items");
		let firstItem = null;

		if (!filter) {
			return !!slottedItems.length && slottedItems[0];
		}

		for (let i = 0; i < slottedItems.length; i++) {
			if (filter(slottedItems[i])) {
				firstItem = slottedItems[i];
				break;
			}
		}

		return firstItem;
	}

	getAfterElement() {
		if (!this._afterElement) {
			this._afterElement = this.shadowRoot.querySelector(`#${this._id}-after`);
		}
		return this._afterElement;
	}

	getBeforeElement() {
		if (!this._beforeElement) {
			this._beforeElement = this.shadowRoot.querySelector(`#${this._id}-before`);
		}
		return this._beforeElement;
	}

	getHeaderToolbarLastTabbableElement() {
		return getLastTabbableElement(this.headerToolbar.getDomRef()) || this.headerToolbar.getDomRef();
	}

	getNormalizedTarget(target) {
		let focused = target;

		if (target.shadowRoot && target.shadowRoot.activeElement) {
			focused = target.shadowRoot.activeElement;
		}

		return focused;
	}

	getIntersectionObserver() {
		if (!this.growingIntersectionObserver) {
			this.growingIntersectionObserver = new IntersectionObserver(this.onInteresection.bind(this), {
				root: null,
				rootMargin: "0px",
				threshold: 1.0,
			});
		}

		return this.growingIntersectionObserver;
	}
}

List.define();

const name$1 = "edit";
const pathData$1 = "M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z";
const ltr$1 = false;
const collection$1 = "SAP-icons";
const packageName$1 = "@ui5/webcomponents-icons";

registerIcon(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

const edit = { pathData: pathData$1 };

/**
 * @lends sap.ui.webcomponents.main.types.ListItemType.prototype
 * @public
 */
const ListItemTypes = {
	/**
	 * Indicates the list item does not have any active feedback when item is pressed.
	 * @public
	 * @type {Inactive}
	 */
	Inactive: "Inactive",

	/**
	 * Indicates that the item is clickable via active feedback when item is pressed.
	 * @public
	 * @type {Active}
	 */
	Active: "Active",

	/**
	 * Enables detail button of the list item that fires detail-click event.
	 * @public
	 * @type {Detail}
	 */
	Detail: "Detail",
};

/**
 * @class
 * Different types of ListItem.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.ListItemType
 * @public
 * @enum {string}
 */
class ListItemType extends DataType {
	static isValid(value) {
		return !!ListItemTypes[value];
	}
}

ListItemType.generateTypeAccessors(ListItemTypes);

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles$1 = ":host(:not([hidden])){display:block}:host{height:var(--_ui5_list_item_base_height);background:var(--ui5-listitem-background-color);box-sizing:border-box;border-bottom:1px solid transparent}:host([selected]){background:var(--sapList_SelectionBackgroundColor)}:host([has-border]){border-bottom:var(--ui5-listitem-border-bottom)}:host([selected]){border-bottom:var(--ui5-listitem-selected-border-bottom)}:host([selected][has-border]){border-bottom:var(--ui5-listitem-selected-border-bottom)}.ui5-li-root{position:relative;display:flex;align-items:center;width:100%;height:100%;padding:0 1rem 0 1rem;box-sizing:border-box}:host([focused]) .ui5-li-root.ui5-li--focusable{outline:none}:host([focused]) .ui5-li-root.ui5-li--focusable:after{content:\"\";border:var(--_ui5_listitembase_focus_width) dotted var(--sapContent_FocusColor);position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}:host([focused]) .ui5-li-content:focus:after{content:\"\";border:var(--_ui5_listitembase_focus_width) dotted var(--sapContent_FocusColor);position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}:host([active][focused]) .ui5-li-root.ui5-li--focusable:after{border-color:var(--sapContent_ContrastFocusColor)}:host([disabled]){opacity:var(--_ui5-listitembase_disabled_opacity);pointer-events:none}.ui5-li-content{max-width:100%;min-height:1px;font-family:\"72override\",var(--sapFontFamily);pointer-events:none}";

/**
 * @public
 */
const metadata$5 = {
	properties: /** @lends  sap.ui.webcomponents.main.ListItemBase.prototype */  {

		/**
		 * Defines the selected state of the <code>ListItem</code>.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		selected: {
			type: Boolean,
		},

		/**
		* Defines if the list item should display its bottom border.
		* @private
		*/
		hasBorder: {
			type: Boolean,
		},

		_tabIndex: {
			type: String,
			defaultValue: "-1",
			noAttribute: true,
		},

		/**
		 * Defines whether <code>ui5-li</code> is in disabled state.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-li</code> is noninteractive.
		 * @type {boolean}
		 * @defaultvalue false
		 * @protected
		 * @since 1.0.0-rc.12
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Indicates if the element is on focus
		 * @private
		 */
		focused: {
			type: Boolean,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.ListItemBase.prototype */  {
		_focused: {},
		"_forward-after": {},
		"_forward-before": {},
	},
};

/**
 * A class to serve as a foundation
 * for the <code>ListItem</code> and <code>GroupHeaderListItem</code> classes.
 *
 * @abstract
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ListItemBase
 * @extends UI5Element
 * @public
 */
class ListItemBase extends UI5Element {
	static get metadata() {
		return metadata$5;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return styles$1;
	}

	_onfocusin(event) {
		if (event.isMarked === "button" || event.isMarked === "link") {
			return;
		}

		this.focused = true;
		this.fireEvent("_focused", event);
	}

	_onfocusout(_event) {
		this.focused = false;
	}

	_onkeydown(event) {
		if (isTabNext(event)) {
			return this._handleTabNext(event);
		}

		if (isTabPrevious(event)) {
			return this._handleTabPrevious(event);
		}
	}

	_onkeyup() {}

	_handleTabNext(event) {
		const target = event.target;

		if (this.shouldForwardTabAfter(target)) {
			this.fireEvent("_forward-after", { item: target });
		}
	}

	_handleTabPrevious(event) {
		const target = event.target;

		if (this.shouldForwardTabBefore(target)) {
			const eventData = event;
			eventData.item = target;
			this.fireEvent("_forward-before", eventData);
		}
	}

	/*
	* Determines if th current list item either has no tabbable content or
	* [TAB] is performed onto the last tabbale content item.
	*/
	shouldForwardTabAfter(target) {
		const aContent = getTabbableElements(this.getDomRef());

		if (target.getFocusDomRef) {
			target = target.getFocusDomRef();
		}

		return !aContent.length || (aContent[aContent.length - 1] === target);
	}

	/*
	* Determines if the current list item is target of [SHIFT+TAB].
	*/
	shouldForwardTabBefore(target) {
		return this.getDomRef() === target;
	}

	get classes() {
		return {
			main: {
				"ui5-li-root": true,
				"ui5-li--focusable": !this.disabled,
			},
		};
	}

	get ariaDisabled() {
		return this.disabled ? "true" : undefined;
	}

	get tabIndex() {
		if (this.disabled) {
			return -1;
		}
		if (this.selected) {
			return 0;
		}
		return this._tabIndex;
	}
}

class RadioButtonGroup {
	static hasGroup(groupName) {
		return this.groups.has(groupName);
	}

	static getGroup(groupName) {
		return this.groups.get(groupName);
	}

	static getSelectedRadioFromGroup(groupName) {
		return this.selectedRadios.get(groupName);
	}

	static removeGroup(groupName) {
		this.selectedRadios.delete(groupName);
		return this.groups.delete(groupName);
	}

	static addToGroup(radioBtn, groupName) {
		if (this.hasGroup(groupName)) {
			this.enforceSingleSelection(radioBtn, groupName);
			this.getGroup(groupName).push(radioBtn);
		} else {
			this.createGroup(radioBtn, groupName);
		}

		this.updateTabOrder(groupName);
	}

	static removeFromGroup(radioBtn, groupName) {
		if (!this.hasGroup(groupName)) {
			return;
		}

		const group = this.getGroup(groupName);
		const selectedRadio = this.getSelectedRadioFromGroup(groupName);

		// Remove the radio button from the given group
		group.forEach((_radioBtn, idx, arr) => {
			if (radioBtn._id === _radioBtn._id) {
				return arr.splice(idx, 1);
			}
		});

		if (selectedRadio === radioBtn) {
			this.selectedRadios.set(groupName, null);
		}

		// Remove the group if it is empty
		if (!group.length) {
			this.removeGroup(groupName);
		}

		this.updateTabOrder(groupName);
	}

	static createGroup(radioBtn, groupName) {
		if (radioBtn.selected) {
			this.selectedRadios.set(groupName, radioBtn);
		}

		this.groups.set(groupName, [radioBtn]);
	}

	static selectNextItem(item, groupName) {
		const group = this.getGroup(groupName),
			groupLength = group.length,
			currentItemPosition = group.indexOf(item);

		if (groupLength <= 1) {
			return;
		}

		const nextItemToSelect = this._nextSelectable(currentItemPosition, group);

		this.updateSelectionInGroup(nextItemToSelect, groupName);
	}

	static updateTabOrder(groupName) {
		if (!this.hasGroup(groupName)) {
			return;
		}

		const group = this.getGroup(groupName);
		const hasSelectedRadio = group.some(radioBtn => radioBtn.selected);

		group.filter(radioBtn => !radioBtn.disabled).forEach((radioBtn, idx) => {
			if (hasSelectedRadio) {
				radioBtn._tabIndex = radioBtn.selected ? "0" : "-1";
			} else {
				radioBtn._tabIndex = idx === 0 ? "0" : "-1";
			}
		});
	}

	static selectPreviousItem(item, groupName) {
		const group = this.getGroup(groupName),
			groupLength = group.length,
			currentItemPosition = group.indexOf(item);

		if (groupLength <= 1) {
			return;
		}

		const previousItemToSelect = this._previousSelectable(currentItemPosition, group);

		this.updateSelectionInGroup(previousItemToSelect, groupName);
	}

	static selectItem(item, groupName) {
		this.updateSelectionInGroup(item, groupName);
		this.updateTabOrder(groupName);
	}

	static updateSelectionInGroup(radioBtnToSelect, groupName) {
		const selectedRadio = this.getSelectedRadioFromGroup(groupName);

		this._deselectRadio(selectedRadio);
		this._selectRadio(radioBtnToSelect);
		this.selectedRadios.set(groupName, radioBtnToSelect);
	}

	static _deselectRadio(radioBtn) {
		if (radioBtn) {
			radioBtn.selected = false;
		}
	}

	static _selectRadio(radioBtn) {
		if (radioBtn) {
			radioBtn.focus();
			radioBtn.selected = true;
			radioBtn._selected = true;
			radioBtn.fireEvent("select");
		}
	}

	static _nextSelectable(pos, group) {
		const groupLength = group.length;
		let nextRadioToSelect = null;

		if (pos === groupLength - 1) {
			if (group[0].disabled || group[0].readonly) {
				return this._nextSelectable(1, group);
			}
			nextRadioToSelect = group[0];
		} else if (group[pos + 1].disabled || group[pos + 1].readonly) {
			return this._nextSelectable(pos + 1, group);
		} else {
			nextRadioToSelect = group[pos + 1];
		}

		return nextRadioToSelect;
	}

	static _previousSelectable(pos, group) {
		const groupLength = group.length;
		let previousRadioToSelect = null;
		if (pos === 0) {
			if (group[groupLength - 1].disabled || group[groupLength - 1].readonly) {
				return this._previousSelectable(groupLength - 1, group);
			}
			previousRadioToSelect = group[groupLength - 1];
		} else if (group[pos - 1].disabled || group[pos - 1].readonly) {
			return this._previousSelectable(pos - 1, group);
		} else {
			previousRadioToSelect = group[pos - 1];
		}

		return previousRadioToSelect;
	}

	static enforceSingleSelection(radioBtn, groupName) {
		const selectedRadio = this.getSelectedRadioFromGroup(groupName);

		if (radioBtn.selected) {
			if (!selectedRadio) {
				this.selectedRadios.set(groupName, radioBtn);
			} else if (radioBtn !== selectedRadio) {
				this._deselectRadio(selectedRadio);
				this.selectedRadios.set(groupName, radioBtn);
			}
		} else if (radioBtn === selectedRadio) {
			this.selectedRadios.set(groupName, null);
		}

		this.updateTabOrder(groupName);
	}

	static get groups() {
		if (!this._groups) {
			this._groups = new Map();
		}
		return this._groups;
	}

	static get selectedRadios() {
		if (!this._selectedRadios) {
			this._selectedRadios = new Map();
		}
		return this._selectedRadios;
	}
}

const block0$3 = (context) => { return scopedHtml`<div class="ui5-radio-root ${classMap(context.classes.main)}" role="radio" aria-checked="${ifDefined(context.selected)}" aria-readonly="${ifDefined(context.ariaReadonly)}" aria-disabled="${ifDefined(context.ariaDisabled)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}" aria-describedby="${ifDefined(context.ariaDescribedBy)}" tabindex="${ifDefined(context.tabIndex)}" dir="${ifDefined(context.effectiveDir)}" @click="${context._onclick}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}"><div class='ui5-radio-inner ${classMap(context.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${blockSVG1(context)}</svg><input type='radio' ?checked="${context.selected}" ?readonly="${context.readonly}" ?disabled="${context.disabled}" name="${ifDefined(context.name)}" data-sap-no-tab-ref/></div>${ context.text ? block1$3(context) : undefined }${ context.hasValueState ? block2$3(context) : undefined }</div>`; };
const block1$3 = (context) => { return scopedHtml`<ui5-label id="${ifDefined(context._id)}-label" class="ui5-radio-label" for="${ifDefined(context._id)}" ?wrap="${context.wrap}">${ifDefined(context.text)}</ui5-label>`; };
const block2$3 = (context) => { return scopedHtml`<span id="${ifDefined(context._id)}-descr" class="ui5-hidden-text">${ifDefined(context.valueStateText)}</span>`; };

const blockSVG1 = (context) => {return scopedSvg`<circle class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle class="ui5-radio-svg-inner" cx="50%" cy="50%" r="22%" />`};

const main$3 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$3(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const radioButtonCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5_radiobutton_min_width);max-width:100%;text-overflow:ellipsis;overflow:hidden;color:var(--sapField_BorderColor)}:host([selected]){color:var(--_ui5_radiobutton_selected_fill)}:host([selected]) .ui5-radio-svg-inner{fill:currentColor}:host([selected]) .ui5-radio-svg-outer{stroke:var(--sapField_BorderColor)}:host([disabled]) .ui5-radio-root{opacity:var(--sapContent_DisabledOpacity)}:host(:not([disabled])) .ui5-radio-root:focus:before{content:\"\";display:block;position:absolute;top:var(--_ui5_rb_focus_dist);bottom:var(--_ui5_rb_focus_dist);left:var(--_ui5_rb_focus_dist);right:var(--_ui5_rb_focus_dist);pointer-events:none;border:var(--_ui5_radiobutton_border_width) dotted var(--sapContent_FocusColor)}:host(:not([value-state=Error]):not([value-state=Warning])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5_radiobutton_hover_fill);stroke:var(--sapField_Hover_BorderColor)}:host([text]) .ui5-radio-root:focus:before{right:0}:host([selected][readonly]) .ui5-radio-svg-inner{fill:var(--sapContent_NonInteractiveIconColor)}:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer{fill:var(--sapField_ReadOnly_Background);stroke:var(--sapField_ReadOnly_BorderColor)}:host([value-state=Error]) .ui5-radio-svg-outer,:host([value-state=Warning]) .ui5-radio-svg-outer{stroke-width:2}:host([value-state=Error][selected]) .ui5-radio-svg-inner{fill:var(--_ui5_radiobutton_selected_error_fill)}:host([value-state=Error]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer,:host([value-state=Error]) .ui5-radio-svg-outer{stroke:var(--sapField_InvalidColor);fill:var(--sapField_InvalidBackground)}:host([value-state=Warning][selected]) .ui5-radio-svg-inner{fill:var(--_ui5_radiobutton_selected_warning_fill)}:host([value-state=Warning]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer,:host([value-state=Warning]) .ui5-radio-svg-outer{stroke:var(--sapField_WarningColor);fill:var(--sapField_WarningBackground)}:host([value-state=Error]) .ui5-radio-root,:host([value-state=Information]) .ui5-radio-root,:host([value-state=Warning]) .ui5-radio-root{stroke-dasharray:var(--_ui5_radiobutton_warning_error_border_dash)}.ui5-radio-root{height:var(--_ui5_rb_height);position:relative;display:flex;flex-wrap:nowrap;outline:none;max-width:100%}.ui5-radio-inner{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--_ui5_rb_inner_size);height:var(--_ui5_rb_inner_size);font-size:1rem;pointer-events:none;vertical-align:top}.ui5-radio-inner:focus{outline:none}.ui5-radio-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}[ui5-label].ui5-radio-label{display:flex;align-items:center;width:var(--_ui5_rb_label_width);padding-right:1px;vertical-align:top;cursor:default;max-width:100%;text-overflow:ellipsis;overflow:hidden;pointer-events:none}:host([wrap][text]) .ui5-radio-root{height:auto}:host([wrap][text]) [ui5-label].ui5-radio-label{padding:var(--_ui5_rb_label_side_padding) 0;word-break:break-all}.ui5-radio-svg{height:var(--_ui5_rb_svg_size);width:var(--_ui5_rb_svg_size);overflow:visible;pointer-events:none}.ui5-radio-svg-outer{fill:var(--sapField_Background);stroke:currentColor;stroke-width:1}.ui5-radio-svg-inner{fill:none}.ui5-radio-svg-inner,.ui5-radio-svg-outer{flex-shrink:0}:host([text]) [dir=rtl].ui5-radio-root:focus:before{left:0;right:var(--_ui5_rb_rtl_focus_right)}:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer{fill:var(--sapList_Background)}";

/**
 * @public
 */
const metadata$4 = {
	tag: "ui5-radiobutton",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.RadioButton.prototype */ {

		/**
		 * Determines whether the <code>ui5-radiobutton</code> is disabled.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-radiobutton</code> is completely noninteractive.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Determines whether the <code>ui5-radiobutton</code> is read-only.
		 * <br><br>
		 * <b>Note:</b> A read-only <code>ui5-radiobutton</code> is not editable,
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
		 * Determines whether the <code>ui5-radiobutton</code> is selected or not.
		 * <br><br>
		 * <b>Note:</b> The property value can be changed with user interaction,
		 * either by cliking/tapping on the <code>ui5-radiobutton</code>,
		 * or by using the Space or Enter key.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		selected: {
			type: Boolean,
		},

		/**
		 * Defines the text of the <code>ui5-radiobutton</code>.
		 *
		 * @type  {string}
		 * @defaultvalue ""
		 * @public
		 */
		text: {
			type: String,
		},

		/**
		 * Defines the value state of the <code>ui5-radiobutton</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>None</code></li>
		 * <li><code>Error</code></li>
		 * <li><code>Warning</code></li>
		 * </ul>
		 *
		 * @type {ValueState}
		 * @defaultvalue "None"
		 * @public
		 */
		valueState: {
			defaultValue: ValueState.None,
			type: ValueState,
		},

		/**
		 * Defines the name of the <code>ui5-radiobutton</code>.
		 * Radio buttons with the same <code>name</code> will form a radio button group.
		 *
		 * <br><br>
		 * <b>Note:</b>
		 * The selection can be changed with <code>ARROW_UP/DOWN</code> and <code>ARROW_LEFT/RIGHT</code> keys between radio buttons in same group.
		 *
		 * <br><br>
		 * <b>Note:</b>
		 * Only one radio button can be selected per group.
		 *
		 * <br><br>
		 * <b>Important:</b> For the <code>name</code> property to have effect when submitting forms, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * <br><br>
		 * <b>Note:</b> When set, a native <code>input</code> HTML element
		 * will be created inside the <code>ui5-radiobutton</code> so that it can be submitted as
		 * part of an HTML form.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		name: {
			type: String,
		},

		/**
		 * Defines the form value of the <code>ui5-radiobutton</code>.
		 * When a form with a radio button group is submitted, the group's value
		 * will be the value of the currently selected radio button.
		 * <br>
		 * <b>Important:</b> For the <code>value</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		value: {
			type: String,
		},

		/**
		 * Defines whether the <code>ui5-radiobutton</code> text wraps when there is not enough space.
		 * <br><br>
		 * <b>Note:</b> By default, the text truncates when there is not enough space.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		wrap: {
			type: Boolean,
		},

		_tabIndex: {
			type: String,
			defaultValue: "-1",
			noAttribute: true,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.RadioButton.prototype */ {
		/**
		 * The slot is used to render native <code>input</code> HTML element within Light DOM to enable form submit,
		 * when <code>name</code> property is set.
		 * @type {HTMLElement[]}
		 * @slot
		 * @private
		 */
		formSupport: {
			type: HTMLElement,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.RadioButton.prototype */ {

		/**
		 * Fired when the <code>ui5-radiobutton</code> selected state changes.
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
 * The <code>ui5-radiobutton</code> component enables users to select a single option from a set of options.
 * When a <code>ui5-radiobutton</code> is selected by the user, the
 * <code>select</code> event is fired.
 * When a <code>ui5-radiobutton</code> that is within a group is selected, the one
 * that was previously selected gets automatically deselected. You can group radio buttons by using the <code>name</code> property.
 * <br>
 * <b>Note:</b> If <code>ui5-radiobutton</code> is not part of a group, it can be selected once, but can not be deselected back.
 *
 * <h3>Keyboard Handling</h3>
 *
 * Once the <code>ui5-radiobutton</code> is on focus, it might be selected by pressing the Space and Enter keys.
 * <br>
 * The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group,
 * while TAB and SHIFT + TAB can be used to enter or leave the radio button group.
 * <br>
 * <b>Note:</b> On entering radio button group, the focus goes to the currently selected radio button.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/RadioButton";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.RadioButton
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-radiobutton
 * @public
 */
class RadioButton extends UI5Element {
	constructor() {
		super();

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	static get metadata() {
		return metadata$4;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$3;
	}

	static get styles() {
		return radioButtonCss;
	}

	static get dependencies() {
		return [Label];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}

	onBeforeRendering() {
		this.syncGroup();
		this._enableFormSupport();
	}

	syncGroup() {
		const oldGroup = this._name;
		const currentGroup = this.name;
		const oldSelected = this._selected;
		const currentSelected = this.selected;

		if (currentGroup !== oldGroup) {
			if (oldGroup) {
				// remove the control from the previous group
				RadioButtonGroup.removeFromGroup(this, oldGroup);
			}

			if (currentGroup) {
				// add the control to the existing group
				RadioButtonGroup.addToGroup(this, currentGroup);
			}
		} else if (currentGroup) {
			RadioButtonGroup.enforceSingleSelection(this, currentGroup);
		}

		if (this.name && currentSelected !== oldSelected) {
			RadioButtonGroup.updateTabOrder(this.name);
		}

		this._name = this.name;
		this._selected = this.selected;
	}

	_enableFormSupport() {
		const FormSupport = getFeature("FormSupport");
		if (FormSupport) {
			FormSupport.syncNativeHiddenInput(this, (element, nativeInput) => {
				nativeInput.disabled = element.disabled || !element.selected;
				nativeInput.value = element.selected ? element.value : "";
			});
		} else if (this.value) {
			console.warn(`In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}
	}

	_onclick() {
		return this.toggle();
	}

	_handleDown(event) {
		const currentGroup = this.name;

		if (!currentGroup) {
			return;
		}

		event.preventDefault();
		RadioButtonGroup.selectNextItem(this, currentGroup);
	}

	_handleUp(event) {
		const currentGroup = this.name;

		if (!currentGroup) {
			return;
		}

		event.preventDefault();
		RadioButtonGroup.selectPreviousItem(this, currentGroup);
	}

	_onkeydown(event) {
		if (isSpace(event)) {
			return event.preventDefault();
		}

		if (isEnter(event)) {
			return this.toggle();
		}

		if (isDown(event) || isRight(event)) {
			this._handleDown(event);
		}

		if (isUp(event) || isLeft(event)) {
			this._handleUp(event);
		}
	}

	_onkeyup(event) {
		if (isSpace(event)) {
			this.toggle();
		}
	}

	toggle() {
		if (!this.canToggle()) {
			return this;
		}

		if (!this.name) {
			this.selected = !this.selected;
			this.fireEvent("select");
			return this;
		}

		RadioButtonGroup.selectItem(this, this.name);
		return this;
	}

	canToggle() {
		return !(this.disabled || this.readonly || this.selected);
	}

	valueStateTextMappings() {
		const i18nBundle = this.i18nBundle;

		return {
			"Error": i18nBundle.getText(VALUE_STATE_ERROR),
			"Warning": i18nBundle.getText(VALUE_STATE_WARNING),
		};
	}

	get classes() {
		return {
			inner: {
				"ui5-radio-inner--hoverable": !this.disabled && !this.readonly && isDesktop(),
			},
		};
	}

	get ariaReadonly() {
		return this.readonly ? "true" : undefined;
	}

	get ariaDisabled() {
		return this.disabled ? "true" : undefined;
	}

	get ariaLabelledBy() {
		return this.text ? `${this._id}-label` : undefined;
	}

	get ariaDescribedBy() {
		return this.hasValueState ? `${this._id}-descr` : undefined;
	}

	get hasValueState() {
		return this.valueState !== ValueState.None;
	}

	get valueStateText() {
		return this.valueStateTextMappings()[this.valueState];
	}

	get tabIndex() {
		const tabindex = this.getAttribute("tabindex");

		if (this.disabled) {
			return "-1";
		}

		if (this.name) {
			return this._tabIndex;
		}

		return tabindex || "0";
	}

	get strokeWidth() {
		return this.valueState === "None" ? "1" : "2";
	}
}

RadioButton.define();

const name = "accept";
const pathData = "M455.8 94q9 9 3 19l-222 326q-4 8-12 9t-14-5l-151-167q-5-5-4.5-11t5.5-11l25-25q12-12 23 0l96 96q5 5 13 4.5t12-8.5l175-249q4-7 11.5-8t13.5 4z";
const ltr = true;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

const accept = { pathData };

const block0$2 = (context) => { return scopedHtml`<div class="ui5-checkbox-root ${classMap(context.classes.main)}" role="checkbox" aria-checked="${ifDefined(context.checked)}" aria-readonly="${ifDefined(context.ariaReadonly)}" aria-disabled="${ifDefined(context.ariaDisabled)}" aria-label="${ifDefined(context.ariaLabelText)}" aria-labelledby="${ifDefined(context.ariaLabelledBy)}" aria-describedby="${ifDefined(context.ariaDescribedBy)}" tabindex="${ifDefined(context.tabIndex)}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click="${context._onclick}" dir="${ifDefined(context.effectiveDir)}"><div id="${ifDefined(context._id)}-CbBg" class="ui5-checkbox-inner">${ context.checked ? block1$2(context) : undefined }<input id="${ifDefined(context._id)}-CB" type='checkbox' ?checked="${context.checked}" ?readonly="${context.readonly}" ?disabled="${context.disabled}" aria-hidden="true" data-sap-no-tab-ref /></div>${ context._label.text ? block2$2(context) : undefined }${ context.hasValueState ? block3$2(context) : undefined }<slot name="formSupport"></slot></div>`; };
const block1$2 = (context) => { return scopedHtml`<ui5-icon name="accept" class="ui5-checkbox-icon"></ui5-icon>`; };
const block2$2 = (context) => { return scopedHtml`<ui5-label id="${ifDefined(context._id)}-label" class="ui5-checkbox-label" ?wrap="${context._label.wrap}">${ifDefined(context._label.text)}</ui5-label>`; };
const block3$2 = (context) => { return scopedHtml`<span id="${ifDefined(context._id)}-descr" class="ui5-hidden-text">${ifDefined(context.valueStateText)}</span>`; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const checkboxCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host(:not([hidden])){display:inline-block}:host{overflow:hidden;max-width:100%;outline:none}:host([disabled]) .ui5-checkbox-root{opacity:.5}:host([readonly]:not([value-state=Warning]):not([value-state=Error])) .ui5-checkbox-inner{background:var(--sapField_ReadOnly_Background);border:var(--_ui5_checkbox_inner_readonly_border);color:var(--sapContent_NonInteractiveIconColor)}:host([wrap][text]) .ui5-checkbox-root{min-height:auto;box-sizing:border-box;align-items:flex-start;padding-top:var(--_ui5_checkbox_root_side_padding);padding-bottom:var(--_ui5_checkbox_root_side_padding)}:host([wrap][text]) .ui5-checkbox-root .ui5-checkbox-inner,:host([wrap][text]) .ui5-checkbox-root .ui5-checkbox-label{margin-top:var(--_ui5_checkbox_wrapped_content_margin_top)}:host([wrap][text]) .ui5-checkbox-root .ui5-checkbox-label{word-break:break-all;align-self:center}:host([wrap]) .ui5-checkbox-root:focus:before{bottom:var(--_ui5_checkbox_wrapped_focus_left_top_bottom_position)}:host([value-state=Error]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Error]) .ui5-checkbox-inner{background:var(--sapField_InvalidBackground);border:var(--_ui5_checkbox_inner_error_border);color:var(--sapField_InvalidColor)}:host([value-state=Warning]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Warning]) .ui5-checkbox-inner{background:var(--sapField_WarningBackground);border:var(--_ui5_checkbox_inner_warning_border);color:var(--sapField_WarningColor)}:host([value-state=Information]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Information]) .ui5-checkbox-inner{background:var(--sapField_InformationBackground);border:var(--_ui5_checkbox_inner_information_border);color:var(--sapField_InformationColor)}:host([value-state=Warning]) .ui5-checkbox-icon{color:var(--_ui5_checkbox_checkmark_warning_color)}:host([text]) .ui5-checkbox-root{padding-right:0}:host([text]) .ui5-checkbox-root:focus:before{right:0}.ui5-checkbox-root{position:relative;display:inline-flex;align-items:center;justify-content:center;width:100%;min-height:var(--_ui5_checkbox_width_height);min-width:var(--_ui5_checkbox_width_height);padding:0 var(--_ui5_checkbox_wrapper_padding);box-sizing:border-box;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ui5-checkbox-root:after{content:\"\";min-height:inherit;font-size:0}.ui5-checkbox-root:focus:before{content:\"\";position:absolute;top:var(--_ui5_checkbox_focus_position);left:var(--_ui5_checkbox_focus_position);right:var(--_ui5_checkbox_focus_position);bottom:var(--_ui5_checkbox_focus_position);border:var(--_ui5_checkbox_focus_outline)}.ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_hover_background);border-color:var(--sapField_Hover_BorderColor)}.ui5-checkbox-inner{display:flex;justify-content:center;align-items:center;min-width:var(--_ui5_checkbox_inner_width_height);max-width:var(--_ui5_checkbox_inner_width_height);height:var(--_ui5_checkbox_inner_width_height);max-height:var(--_ui5_checkbox_inner_width_height);border:var(--_ui5_checkbox_inner_border);border-radius:var(--_ui5_checkbox_inner_border_radius);background:var(--sapField_Background);color:var(--_ui5_checkbox_checkmark_color);box-sizing:border-box;position:relative;cursor:default;pointer-events:none}.ui5-checkbox-icon{color:currentColor;cursor:default}.ui5-checkbox-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit}.ui5-checkbox-root .ui5-checkbox-label{margin-left:var(--_ui5_checkbox_wrapper_padding);cursor:default;text-overflow:ellipsis;overflow:hidden;pointer-events:none;user-select:none;-ms-user-select:none;-webkit-user-select:none}.ui5-checkbox-icon{width:var(--_ui5_checkbox_icon_size);height:var(--_ui5_checkbox_icon_size)}:host([text]) [dir=rtl].ui5-checkbox-root{padding-left:0;padding-right:var(--_ui5_checkbox_wrapper_padding)}:host([text]) [dir=rtl].ui5-checkbox-root:focus:before{left:0;right:var(--_ui5_checkbox_focus_position)}:host([text]) [dir=rtl].ui5-checkbox-root .ui5-checkbox-label{margin-left:0;margin-right:var(--_ui5_checkbox_compact_wrapper_padding)}";

/**
 * @public
 */
const metadata$3 = {
	tag: "ui5-checkbox",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.CheckBox.prototype */ {

		/**
		 * Defines whether the <code>ui5-checkbox</code> is disabled.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-checkbox</code> is completely noninteractive.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines whether the <code>ui5-checkbox</code> is read-only.
		 * <br><br>
		 * <b>Note:</b> A red-only <code>ui5-checkbox</code> is not editable,
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
		 * Defines if the <code>ui5-checkbox</code> is checked.
		 * <br><br>
		 * <b>Note:</b> The property can be changed with user interaction,
		 * either by cliking/tapping on the <code>ui5-checkbox</code>, or by
		 * pressing the Enter or Space key.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		checked: {
			type: Boolean,
		},

		/**
		 * Defines the text of the <code>ui5-checkbox</code>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		text: {
			type: String,
		},

		/**
		 * Defines the value state of the <code>ui5-checkbox</code>.
		 * <br><br>
		 * <b>Note:</b> Available options are <code>Warning</code>, <code>Error</code>, and <code>None</code> (default).
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
		 * Defines whether the <code>ui5-checkbox</code> text wraps when there is not enough space.
		 * <br><br>
		 * <b>Note:</b> By default, the text truncates when there is not enough space.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		wrap: {
			type: Boolean,
		},

		/**
		 * Determines the name with which the <code>ui5-checkbox</code> will be submitted in an HTML form.
		 *
		 * <br><br>
		 * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * <br><br>
		 * <b>Note:</b> When set, a native <code>input</code> HTML element
		 * will be created inside the <code>ui5-checkbox</code> so that it can be submitted as
		 * part of an HTML form. Do not use this property unless you need to submit a form.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		name: {
			type: String,
		},

		/**
		 * Determines the <code>aria-label</code>, set on the component root tag.
		 * @type {string}
		 * @defaultvalue undefined
		 * @private
		 * @since 1.0.0-rc.8
		 */
		ariaLabel: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * Receives id(or many ids) of the elements that label the checkbox
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.9
		 */
		ariaLabelledby: {
			type: String,
			defaultValue: "",
		},

		_label: {
			type: Object,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.CheckBox.prototype */ {

		/**
		 * Fired when the <code>ui5-checkbox</code> checked state changes.
		 *
		 * @public
		 * @event
		 */
		change: {},
	},
	slots: /** @lends sap.ui.webcomponents.main.CheckBox.prototype */ {
		/**
		 * The slot is used to render native <code>input</code> HTML element within Light DOM to enable form submit,
		 * when <code>name</code> property is set.
		 * @type {HTMLElement[]}
		 * @slot
		 * @private
		 */
		formSupport: {
			type: HTMLElement,
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 * <br><br>
 * The <code>ui5-checkbox</code> component consists of a box and a label that describes its purpose.
 * If it's checked, an indicator is displayed inside the box.
 * To check/uncheck the <code>ui5-checkbox</code>, the user has to click or tap the square
 * box or its label.
 * <br><br>
 * The <code>ui5-checkbox</code> component only has 2 states - checked and unchecked.
 * Clicking or tapping toggles the <code>ui5-checkbox</code> between checked and unchecked state.
 *
 * <h3>Usage</h3>
 *
 * You can manually set the width of the element containing the box and the label using the <code>width</code> property.
 * If the text exceeds the available width, it is truncated.
 * The touchable area for toggling the <code>ui5-checkbox</code> ends where the text ends.
 * <br><br>
 * You can disable the <code>ui5-checkbox</code> by setting the <code>disabled</code> property to
 * <code>true</code>,
 * or use the <code>ui5-checkbox</code> in read-only mode by setting the <code>readonly</code>
 * property to <code>true</code>.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/CheckBox";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.CheckBox
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-checkbox
 * @public
 */
class CheckBox extends UI5Element {
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
		return checkboxCss;
	}

	constructor() {
		super();

		this._label = {};
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	onBeforeRendering() {
		this.syncLabel();

		this._enableFormSupport();
	}

	syncLabel() {
		this._label = { ...this._label };
		this._label.text = this.text;
		this._label.wrap = this.wrap;
		this._label.textDirection = this.textDirection;
	}

	_enableFormSupport() {
		const FormSupport = getFeature("FormSupport");
		if (FormSupport) {
			FormSupport.syncNativeHiddenInput(this, (element, nativeInput) => {
				nativeInput.disabled = element.disabled || !element.checked;
				nativeInput.value = element.checked ? "on" : "";
			});
		} else if (this.name) {
			console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}
	}

	_onclick() {
		this.toggle();
	}

	_onkeydown(event) {
		if (isSpace(event)) {
			event.preventDefault();
		}

		if (isEnter(event)) {
			this.toggle();
		}
	}

	_onkeyup(event) {
		if (isSpace(event)) {
			this.toggle();
		}
	}

	toggle() {
		if (this.canToggle()) {
			this.checked = !this.checked;
			this.fireEvent("change");
			// Angular two way data binding
			this.fireEvent("value-changed");
		}
		return this;
	}

	canToggle() {
		return !(this.disabled || this.readonly);
	}

	valueStateTextMappings() {
		const i18nBundle = this.i18nBundle;

		return {
			"Error": i18nBundle.getText(VALUE_STATE_ERROR),
			"Warning": i18nBundle.getText(VALUE_STATE_WARNING),
		};
	}

	get classes() {
		return {
			main: {
				"ui5-checkbox--hoverable": !this.disabled && !this.readonly && isDesktop(),
			},
		};
	}

	get ariaReadonly() {
		return this.readonly ? "true" : undefined;
	}

	get ariaDisabled() {
		return this.disabled ? "true" : undefined;
	}

	get ariaLabelText() {
		return getEffectiveAriaLabelText(this);
	}

	get ariaLabelledBy() {
		if (!this.ariaLabelText) {
			return this.text ? `${this._id}-label` : undefined;
		}

		return undefined;
	}

	get ariaDescribedBy() {
		return this.hasValueState ? `${this._id}-descr` : undefined;
	}

	get hasValueState() {
		return this.valueState !== ValueState.None;
	}

	get valueStateText() {
		return this.valueStateTextMappings()[this.valueState];
	}

	get tabIndex() {
		const tabindex = this.getAttribute("tabindex");
		return this.disabled ? undefined : tabindex || "0";
	}

	static get dependencies() {
		return [
			Label,
			Icon,
		];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

CheckBox.define();

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host([actionable]:not([disabled])){cursor:pointer}:host([selected][actionable]:not([active]):hover){background:var(--sapList_Hover_SelectionBackground)}:host([active][actionable]),:host([selected][active][actionable]){background:var(--sapList_Active_Background)}:host([actionable]:not([active]):not([selected]):hover){background:var(--sapList_Hover_Background)}:host([active][actionable]) .ui5-li-root.ui5-li--focusable .ui5-li-content:focus,:host([active][actionable]) .ui5-li-root.ui5-li--focusable:focus{outline-color:var(--sapContent_ContrastFocusColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-info,:host([active][actionable]) .ui5-li-title{color:var(--sapList_Active_TextColor)}:host([info-state=Warning]) .ui5-li-info{color:var(--sapCriticalTextColor)}:host([info-state=Success]) .ui5-li-info{color:var(--sapPositiveTextColor)}:host([info-state=Error]) .ui5-li-info{color:var(--sapNegativeTextColor)}:host([info-state=Information]) .ui5-li-info{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([image]) .ui5-li-content{height:3rem}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{display:flex;flex-direction:column;flex:auto;min-width:1px;line-height:normal}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-title{color:var(--sapTextColor);font-size:var(--_ui5_list_item_title_size)}.ui5-li-desc,.ui5-li-info,.ui5-li-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}.ui5-li-info{margin:0 .25rem;color:var(--sapNeutralTextColor);font-size:.875rem;min-width:6rem;text-align:right;max-width:40%}:host([description]) .ui5-li-info{align-self:flex-end}.ui5-li-img{width:var(--_ui5_list_item_img_size);min-width:var(--_ui5_list_item_img_size);height:var(--_ui5_list_item_img_size);min-height:var(--_ui5_list_item_img_size);margin:var(--_ui5_list_item_img_margin);border-radius:.25rem}.ui5-li-icon{min-width:var(--_ui5_list_item_icon_size);min-height:var(--_ui5_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-right:.5rem}.ui5-li-content{display:flex;align-items:center;flex:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}.ui5-li-deletebtn{display:flex;align-items:center}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5_list_item_selection_btn_margin_top)}:host([_mode=SingleSelectBegin]) .ui5-li-root{padding-right:1rem;padding-left:0}:host([_mode=MultiSelect]) .ui5-li-root{padding-right:1rem;padding-left:0}:host([_mode=SingleSelectEnd]) .ui5-li-root{padding-right:0;padding-left:1rem}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5_list_item_cb_margin_right)}:host [dir=rtl] .ui5-li-icon{padding-left:.5rem;padding-right:0}:host [dir=rtl] .ui5-li-img{margin:.5rem 0 .5rem .75rem}[dir=rtl] .ui5-li-info{text-align:left}:host([_mode=SingleSelectBegin]) [dir=rtl].ui5-li-root{padding-right:0;padding-left:1rem}:host([_mode=MultiSelect]) [dir=rtl].ui5-li-root{padding-right:0;padding-left:1rem}:host([_mode=SingleSelectEnd]) [dir=rtl].ui5-li-root{padding-right:1rem;padding-left:0}";

/**
 * @public
 */
const metadata$2 = {
	languageAware: true,
	properties: /** @lends  sap.ui.webcomponents.main.ListItem.prototype */ {

		/**
		 * Defines the visual indication and behavior of the list items.
		 * Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>.
		 * <br><br>
		 * <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover,
		 * while with type <code>Inactive</code> and <code>Detail</code> - will not.
		 *
		 * @type {ListItemType}
		 * @defaultvalue "Active"
		 * @public
		*/
		type: {
			type: ListItemType,
			defaultValue: ListItemType.Active,
		},

		/**
		 * Indicates if the list item is active, e.g pressed down with the mouse or the keyboard keys.
		 *
		 * @type {boolean}
		 * @private
		*/
		active: {
			type: Boolean,
		},

		/**
		 * Indicates if the list item is actionable, e.g has hover and pressed effects.
		 *
		 * @type {boolean}
		 * @private
		*/
		actionable: {
			type: Boolean,
		},

		/**
		 * Used to define the role of the list item.
		 *
		 * @private
		 * @type {String}
		 * @defaultvalue "option"
		 * @since 1.0.0-rc.9
		 *
		 */
		role: {
			type: String,
			defaultValue: "option",
		},

		_mode: {
			type: ListMode,
			defaultValue: ListMode.None,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.ListItem.prototype */ {
		/**
		 * Fired when the user clicks on the detail button when type is <code>Detail</code>.
		 *
		 * @event sap.ui.webcomponents.main.ListItem#detail-click
		 * @public
		 */
		"detail-click": {},
		_press: {},
		_focused: {},
		"_selection-requested": {},
	},
};

/**
 * @class
 * A class to serve as a base
 * for the <code>StandardListItem</code> and <code>CustomListItem</code> classes.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.ListItem
 * @extends ListItemBase
 * @public
 */
class ListItem extends ListItemBase {
	static get metadata() {
		return metadata$2;
	}

	static get styles() {
		return [ListItemBase.styles, styles];
	}

	static get dependencies() {
		return [
			Button,
			RadioButton,
			CheckBox,
		];
	}

	constructor() {
		super();

		this.deactivateByKey = event => {
			if (isEnter(event)) {
				this.deactivate();
			}
		};

		this.deactivate = () => {
			if (this.active) {
				this.active = false;
			}
		};

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	onBeforeRendering(...params) {
		this.actionable = (this.type === ListItemType.Active) && (this._mode !== ListMode.Delete);
	}

	onEnterDOM() {
		document.addEventListener("mouseup", this.deactivate);
		document.addEventListener("touchend", this.deactivate);
		document.addEventListener("keyup", this.deactivateByKey);
	}

	onExitDOM() {
		document.removeEventListener("mouseup", this.deactivate);
		document.removeEventListener("keyup", this.deactivateByKey);
		document.removeEventListener("touchend", this.deactivate);
	}

	_onkeydown(event) {
		super._onkeydown(event);

		const itemActive = this.type === ListItemType.Active;

		if (isSpace(event)) {
			event.preventDefault();
		}

		if ((isSpace(event) || isEnter(event)) && itemActive) {
			this.activate();
		}

		if (isEnter(event)) {
			this.fireItemPress(event);
		}
	}

	_onkeyup(event) {
		if (isSpace(event) || isEnter(event)) {
			this.deactivate();
		}

		if (isSpace(event)) {
			this.fireItemPress(event);
		}
	}

	_onmousedown(event) {
		if (event.isMarked === "button") {
			return;
		}
		this.activate();
	}

	_onmouseup(event) {
		if (event.isMarked === "button") {
			return;
		}
		this.deactivate();
	}

	_ontouchstart(event) {
		this._onmousedown(event);
	}

	_ontouchend(event) {
		this._onmouseup(event);
	}

	_onfocusout() {
		super._onfocusout();
		this.deactivate();
	}

	_onclick(event) {
		if (event.isMarked === "button") {
			return;
		}
		this.fireItemPress(event);
	}

	/*
	 * Called when selection components in Single (ui5-radiobutton)
	 * and Multi (ui5-checkbox) selection modes are used.
	 */
	onMultiSelectionComponentPress(event) {
		if (this.isInactive) {
			return;
		}

		this.fireEvent("_selection-requested", { item: this, selected: event.target.checked, selectionComponentPressed: true });
	}

	onSingleSelectionComponentPress(event) {
		if (this.isInactive) {
			return;
		}

		this.fireEvent("_selection-requested", { item: this, selected: !event.target.selected, selectionComponentPressed: true });
	}

	activate() {
		if (this.type === ListItemType.Active) {
			this.active = true;
		}
	}

	onDelete(event) {
		this.fireEvent("_selection-requested", { item: this, selectionComponentPressed: false });
	}

	onDetailClick(event) {
		this.fireEvent("detail-click", { item: this, selected: this.selected });
	}

	fireItemPress(event) {
		if (this.isInactive) {
			return;
		}

		this.fireEvent("_press", { item: this, selected: this.selected, key: event.key });
	}

	get isInactive() {
		return this.type === ListItemType.Inactive || this.type === ListItemType.Detail;
	}

	get placeSelectionElementBefore() {
		return this._mode === ListMode.MultiSelect
			|| this._mode === ListMode.SingleSelectBegin;
	}

	get placeSelectionElementAfter() {
		return !this.placeSelectionElementBefore
			&& (this._mode === ListMode.SingleSelectEnd || this._mode === ListMode.Delete);
	}

	get modeSingleSelect() {
		return [
			ListMode.SingleSelectBegin,
			ListMode.SingleSelectEnd,
			ListMode.SingleSelect,
		].includes(this._mode);
	}

	get modeMultiSelect() {
		return this._mode === ListMode.MultiSelect;
	}

	get modeDelete() {
		return this._mode === ListMode.Delete;
	}

	/**
	 * Used in UploadCollectionItem
	 */
	get disableDeleteButton() {
		return false;
	}

	get typeDetail() {
		return this.type === ListItemType.Detail;
	}

	get typeActive() {
		return this.type === ListItemType.Active;
	}

	get ariaSelected() {
		if (this.modeMultiSelect || this.modeSingleSelect) {
			return this.selected;
		}

		return undefined;
	}

	get deleteText() {
		return this.i18nBundle.getText(DELETE);
	}

	get _accInfo() {
		return {
			role: this.role,
			ariaExpanded: undefined,
			ariaLevel: undefined,
			ariaLabel: this.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_CHECKBOX),
			listItemAriaLabel: undefined,
		};
	}

	static async onDefine() {
		await Promise.all([
			fetchI18nBundle("@ui5/webcomponents"),
		]);
	}
}

const rCSS = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g; // eslint-disable-line

const toHex = (iChar, iLength) => {
	let sHex = iChar.toString(16);
	if (iLength) {
		sHex = sHex.padStart(iLength, "0");
	}
	return sHex;
};

const fnCSS = sChar => {
	const iChar = sChar.charCodeAt(0);
	if (sChar.length === 1) {
		return `\\${toHex(iChar)}`;
	}

	return `\\${toHex(iChar)} ${sChar.substr(1)}`;
};

const encodeCSS = string => {
	return string.replace(rCSS, fnCSS);
};

const block0$1 = (context) => { return scopedHtml`<div class="ui5-avatar-root" tabindex="${ifDefined(context.tabindex)}" data-sap-focus-ref @keyup=${context._onkeyup} @keydown=${context._onkeydown} @focusout=${context._onfocusout} @focusin=${context._onfocusin} @click=${context._onclick}>${ context.image ? block1$1(context) : block2$1(context) }</div>`; };
const block1$1 = (context) => { return scopedHtml`<span class="ui5-avatar-img" style="${styleMap(context.styles.img)}" role="img" aria-label="${ifDefined(context.accessibleNameText)}"></span>`; };
const block2$1 = (context) => { return scopedHtml`${ context.icon ? block3$1(context) : block4$1(context) }`; };
const block3$1 = (context) => { return scopedHtml`<ui5-icon class="ui5-avatar-icon" name="${ifDefined(context.icon)}" accessible-name="${ifDefined(context.accessibleNameText)}"></ui5-icon>`; };
const block4$1 = (context) => { return scopedHtml`${ context.initials ? block5$1(context) : undefined }`; };
const block5$1 = (context) => { return scopedHtml`<span class="ui5-avatar-initials">${ifDefined(context.validInitials)}</span>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const AvatarCss = ":host(:not([hidden])){display:inline-block;box-sizing:border-box}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([focused]){outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset)}:host([interactive]){cursor:pointer}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-avatar-initials-border);outline:none;color:var(--ui5-avatar-initials-color)}:host([shape=Square]){border-radius:.25rem}:host([shape=Square]) .ui5-avatar-root{border-radius:inherit}:host([shape=Square]) .ui5-avatar-img{border-radius:inherit}:host([_size=XS]),:host([size=XS]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:.75rem}:host([_size=S]),:host([size=S]){min-height:3rem;min-width:3rem;font-size:1.125rem}:host([_size=M]),:host([size=M]){min-height:4rem;min-width:4rem;font-size:1.625rem}:host([_size=L]),:host([size=L]){min-height:5rem;min-width:5rem;font-size:2rem}:host([_size=XL]),:host([size=XL]){min-height:7rem;min-width:7rem;font-size:2.75rem}:host .ui5-avatar-icon{height:1.5rem;width:1.5rem;color:inherit}:host([_size=XS]) .ui5-avatar-icon,:host([size=XS]) .ui5-avatar-icon{height:1rem;width:1rem}:host([_size=S]) .ui5-avatar-icon,:host([size=S]) .ui5-avatar-icon{height:1.5rem;width:1.5rem}:host([_size=M]) .ui5-avatar-icon,:host([size=M]) .ui5-avatar-icon{height:2rem;width:2rem}:host([_size=L]) .ui5-avatar-icon,:host([size=L]) .ui5-avatar-icon{height:2.5rem;width:2.5rem}:host([_size=XL]) .ui5-avatar-icon,:host([size=XL]) .ui5-avatar-icon{height:3rem;width:3rem}:host(:not([image])){background-color:var(--ui5-avatar-accent6)}:host([_background-color=Accent1]),:host([background-color=Accent1]){background-color:var(--ui5-avatar-accent1)}:host([_background-color=Accent2]),:host([background-color=Accent2]){background-color:var(--ui5-avatar-accent2)}:host([_background-color=Accent3]),:host([background-color=Accent3]){background-color:var(--ui5-avatar-accent3)}:host([_background-color=Accent4]),:host([background-color=Accent4]){background-color:var(--ui5-avatar-accent4)}:host([_background-color=Accent5]),:host([background-color=Accent5]){background-color:var(--ui5-avatar-accent5)}:host([_background-color=Accent6]),:host([background-color=Accent6]){background-color:var(--ui5-avatar-accent6)}:host([_background-color=Accent7]),:host([background-color=Accent7]){background-color:var(--ui5-avatar-accent7)}:host([_background-color=Accent8]),:host([background-color=Accent8]){background-color:var(--ui5-avatar-accent8)}:host([_background-color=Accent9]),:host([background-color=Accent9]){background-color:var(--ui5-avatar-accent9)}:host([_background-color=Accent10]),:host([background-color=Accent10]){background-color:var(--ui5-avatar-accent10)}:host([_background-color=Placeholder]),:host([background-color=Placeholder]){background-color:var(--ui5-avatar-placeholder)}:host([image-fit-type=Contain]) .ui5-avatar-img{background-size:contain}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none}.ui5-avatar-img,.ui5-avatar-root{height:100%;width:100%;border-radius:50%}.ui5-avatar-img{background-repeat:no-repeat;background-position:50%;background-size:cover}.ui5-avatar-initials{color:inherit}";

/**
 * Different types of AvatarSize.
 * @lends sap.ui.webcomponents.main.types.AvatarSize.prototype
 * @public
 */
const AvatarSizes = {
	/**
	 * component size - 2rem
	 * font size - 1rem
	 * @public
	 * @type {XS}
	 */
	XS: "XS",

	/**
	 * component size - 3rem
	 * font size - 1.5rem
	 * @public
	 * @type {S}
	 */
	S: "S",

	/**
	 * component size - 4rem
	 * font size - 2rem
	 * @public
	 * @type {M}
	 */
	M: "M",

	/**
	 * component size - 5rem
	 * font size - 2.5rem
	 * @public
	 * @type {L}
	 */
	L: "L",

	/**
	 * component size - 7rem
	 * font size - 3rem
	 * @public
	 * @type {XL}
	 */
	XL: "XL",
};

/**
 * @class
 * Different types of AvatarSize.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.AvatarSize
 * @public
 * @enum {string}
 */
class AvatarSize extends DataType {
	static isValid(value) {
		return !!AvatarSizes[value];
	}
}

AvatarSize.generateTypeAccessors(AvatarSizes);

/**
 * Different types of AvatarShape.
 * @lends sap.ui.webcomponents.main.types.AvatarShape.prototype
 * @public
 */
const AvatarShapes = {
	/**
	 * Circular shape.
	 * @public
	 * @type {Circle}
	 */
	Circle: "Circle",

	/**
	 * Square shape.
	 * @public
	 * @type {Square}
	 */
	Square: "Square",
};

/**
 * @class
 * Different types of AvatarShape.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.AvatarShape
 * @public
 * @enum {string}
 */
class AvatarShape extends DataType {
	static isValid(value) {
		return !!AvatarShapes[value];
	}
}

AvatarShape.generateTypeAccessors(AvatarShapes);

/**
 * Different types of AvatarFitType.
 * @lends sap.ui.webcomponents.main.types.AvatarFitType.prototype
 * @public
 */
const AvatarFitTypes = {
	/**
	 *
	 * @type {Cover}
	 * @public
	 */
	Cover: "Cover",

	/**
	 * @type {Contain}
	 * @public
	 */
	Contain: "Contain",
};

/**
 * @class
 * Different types of AvatarFitType.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.AvatarFitType
 * @public
 * @enum {string}
 */
class AvatarFitType extends DataType {
	static isValid(value) {
		return !!AvatarFitTypes[value];
	}
}

AvatarFitType.generateTypeAccessors(AvatarFitTypes);

/**
 * Different types of AvatarBackgroundColor.
 * @lends sap.ui.webcomponents.main.types.AvatarBackgroundColor.prototype
 * @public
 */
const AvatarBackGroundColors = {
	/**
	 *
	 * @public
	 * @type {Accent1}
	 */
	Accent1: "Accent1",

	/**
	 *
	 * @public
	 * @type {Accent2}
	 */
	Accent2: "Accent2",

	/**
	 *
	 * @public
	 * @type {Accent3}
	 */
	Accent3: "Accent3",

	/**
	 *
	 * @public
	 * @type {Accent4}
	 */
	Accent4: "Accent4",

	/**
	 *
	 * @public
	 * @type {Accent5}
	 */
	Accent5: "Accent5",

	/**
	 *
	 * @public
	 * @type {Accent6}
	 */
	Accent6: "Accent6",

	/**
	 *
	 * @public
	 * @type {Accent7}
	 */
	Accent7: "Accent7",

	/**
	 *
	 * @public
	 * @type {Accent8}
	 */
	Accent8: "Accent8",

	/**
	 *
	 * @public
	 * @type {Accent9}
	 */
	Accent9: "Accent9",

	/**
	 *
	 * @public
	 * @type {Accent10}
	 */
	Accent10: "Accent10",

	/**
	 *
	 * @public
	 * @type {Placeholder}
	 */
	Placeholder: "Placeholder",
};

/**
 * @class
 * Different types of AvatarBackgroundColor.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.AvatarBackgroundColor
 * @public
 * @enum {string}
 */
class AvatarBackgroundColor extends DataType {
	static isValid(value) {
		return !!AvatarBackGroundColors[value];
	}
}

AvatarBackgroundColor.generateTypeAccessors(AvatarBackGroundColors);

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-avatar",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.Avatar.prototype */ {

		/**
		 * Defines if the avatar is interactive (focusable and pressable)
		 * @type {boolean}
		 * @defaultValue false
		 * @public
		 */
		interactive: {
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
		 * Defines the source path to the desired image.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		image: {
			type: String,
		},

		/**
		 * Defines the name of the UI5 Icon, that would be displayed.
		 * <br>
		 * <b>Note:</b> If <code>image</code> is set, the property would be ignored.
		 * <br>
		 * <b>Note:</b> You should import the desired icon first, then use its name as "icon".
		 * <br><br>
		 * import "@ui5/webcomponents-icons/dist/{icon_name}.js"
		 * <br>
		 * <pre>&lt;ui5-avatar icon-src="employee"></pre>
		 *
		 * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		icon: {
			type: String,
		},

		/**
		 * Defines the displayed initials.
		 * <br>
		 * Up to two Latin letters can be displayed as initials in a <code>ui5-avatar</code>.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		initials: {
			type: String,
		},

		/**
		 * Defines the shape of the <code>ui5-avatar</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Circle</code></li>
		 * <li><code>Square</code></li>
		 * </ul>
		 * @type {AvatarShape}
		 * @defaultvalue "Circle"
		 * @public
		 */
		shape: {
			type: AvatarShape,
			defaultValue: AvatarShape.Circle,
		},

		/**
		 * Defines predefined size of the <code>ui5-avatar</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>XS</code></li>
		 * <li><code>S</code></li>
		 * <li><code>M</code></li>
		 * <li><code>L</code></li>
		 * <li><code>XL</code></li>
		 * </ul>
		 * @type {AvatarSize}
		 * @defaultvalue "S"
		 * @public
		 */
		size: {
			type: AvatarSize,
			defaultValue: AvatarSize.S,
		},

		/**
		 * @private
		 */
		_size: {
			type: String,
			defaultValue: AvatarSize.S,
		},

		/**
		 * Defines the fit type of the desired image.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Cover</code></li>
		 * <li><code>Contain</code></li>
		 * </ul>
		 * @type {AvatarFitType}
		 * @defaultvalue "Cover"
		 * @public
		 */
		imageFitType: {
			type: AvatarFitType,
			defaultValue: AvatarFitType.Cover,
		},

		/**
		 * Defines the background color of the desired image.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>Accent1</code></li>
		 * <li><code>Accent2</code></li>
		 * <li><code>Accent3</code></li>
		 * <li><code>Accent4</code></li>
		 * <li><code>Accent5</code></li>
		 * <li><code>Accent6</code></li>
		 * <li><code>Accent7</code></li>
		 * <li><code>Accent8</code></li>
		 * <li><code>Accent9</code></li>
		 * <li><code>Accent10</code></li>
		 * <li><code>Placeholder</code></li>
		 * </ul>
		 * @type {AvatarBackgroundColor}
		 * @defaultvalue "Accent6"
		 * @public
		 */
		backgroundColor: {
			type: AvatarBackgroundColor,
			defaultValue: AvatarBackgroundColor.Accent6,
		},

		/**
		 * @private
		 */
		_backgroundColor: {
			type: String,
			defaultValue: AvatarBackgroundColor.Accent6,
		},

		/**
		 * Defines the text alternative of the <code>ui5-avatar</code>.
		 * If not provided a default text alternative will be set, if present.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 * @since 1.0.0-rc.7
		 */
		accessibleName: {
			type: String,
		},

		_tabIndex: {
			type: String,
			noAttribute: true,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.Avatar.prototype */ {
	},
	events: /** @lends sap.ui.webcomponents.main.Avatar.prototype */ {
		/**
		* Fired on mouseup, space and enter if avatar is interactive
		*
		* @event
		* @private
		* @since 1.0.0-rc.11
		*/
		click: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * An image-like control that has different display options for representing images and icons
 * in different shapes and sizes, depending on the use case.
 *
 * The shape can be circular or square. There are several predefined sizes, as well as an option to
 * set a custom size.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Avatar.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Avatar
 * @extends UI5Element
 * @tagname ui5-avatar
 * @since 1.0.0-rc.6
 * @implements sap.ui.webcomponents.main.IAvatar
 * @public
 */
class Avatar extends UI5Element {
	constructor() {
		super();
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	static get metadata() {
		return metadata$1;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return AvatarCss;
	}

	static get template() {
		return main$1;
	}

	static get dependencies() {
		return [Icon];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}

	get tabindex() {
		return this._tabIndex || (this.interactive ? "0" : "-1");
	}

	/**
	 * Returns the effective avatar size.
	 * @readonly
	 * @type { String }
	 * @defaultValue "S"
	 * @private
	 */
	get _effectiveSize() {
		// we read the attribute, because the "size" property will always have a default value
		return this.getAttribute("size") || this._size;
	}

	/**
	 * Returns the effective background color.
	 * @readonly
	 * @type { String }
	 * @defaultValue "Accent6"
	 * @private
	 */
	get _effectiveBackgroundColor() {
		// we read the attribute, because the "background-color" property will always have a default value
		return this.getAttribute("background-color") || this._backgroundColor;
	}

	get validInitials() {
		const validInitials = /^[a-zA-Z]{1,2}$/;

		if (this.initials && validInitials.test(this.initials)) {
			return this.initials;
		}

		return null;
	}

	get accessibleNameText() {
		if (this.accessibleName) {
			return this.accessibleName;
		}

		return this.i18nBundle.getText(AVATAR_TOOLTIP) || undefined;
	}

	get styles() {
		return {
			img: {
				"background-image": `url("${encodeCSS(this.image)}")`,
			},
		};
	}

	_onclick(event) {
		if (this.interactive) {
			// prevent the native event and fire custom event to ensure the noConfict "ui5-click" is fired
			event.stopPropagation();
			this.fireEvent("click");
		}
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
		if (this.interactive && !event.shiftKey && isSpace(event)) {
			this.fireEvent("click");
		}
	}

	_onfocusout() {
		this.focused = false;
	}

	_onfocusin() {
		if (this.interactive) {
			this.focused = true;
		}
	}
}

Avatar.define();

const block0 = (context) => { return scopedHtml`<li tabindex="${ifDefined(context.tabIndex)}" class="${classMap(context.classes.main)}" dir="${ifDefined(context.effectiveDir)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" @mouseup="${context._onmouseup}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" @click="${context._onclick}" aria-selected="${ifDefined(context.ariaSelected)}" role="${ifDefined(context._accInfo.role)}" aria-expanded="${ifDefined(context._accInfo.ariaExpanded)}" aria-level="${ifDefined(context._accInfo.ariaLevel)}" aria-posinset="${ifDefined(context._accInfo.posinset)}" aria-setsize="${ifDefined(context._accInfo.setsize)}" aria-labelledby="${ifDefined(context._id)}-invisibleText ${ifDefined(context._id)}-content" aria-disabled="${ifDefined(context.ariaDisabled)}" style="list-style-type: none;">${ context.placeSelectionElementBefore ? block1(context) : undefined }<div id="${ifDefined(context._id)}-content" class="ui5-li-content">${ context.displayImage ? block5(context) : undefined }${ context.displayIconBegin ? block6(context) : undefined }<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${ context.description ? block7(context) : undefined }${ !context.typeActive ? block9(context) : undefined }</div>${ !context.description ? block10(context) : undefined }</div>${ context.displayIconEnd ? block12(context) : undefined }${ context.typeDetail ? block13(context) : undefined }${ context.placeSelectionElementAfter ? block14(context) : undefined }<span id="${ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(context._accInfo.listItemAriaLabel)}</span></li> `; };
const block1 = (context) => { return scopedHtml`${ context.modeSingleSelect ? block2(context) : undefined }${ context.modeMultiSelect ? block3(context) : undefined }${ context.modeDelete ? block4(context) : undefined }`; };
const block2 = (context) => { return scopedHtml`<ui5-radiobutton ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?selected="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radiobutton>`; };
const block3 = (context) => { return scopedHtml`<ui5-checkbox ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`; };
const block4 = (context) => { return scopedHtml`<div class="ui5-li-deletebtn"><ui5-button id="${ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${ifDefined(context.deleteText)}"></ui5-button></div>`; };
const block5 = (context) => { return scopedHtml`<ui5-avatar image="${ifDefined(context.image)}" image-fit-type="Contain" shape="Square" class="ui5-li-img"></ui5-avatar>`; };
const block6 = (context) => { return scopedHtml`<ui5-icon part="icon" name="${ifDefined(context.icon)}" class="ui5-li-icon"></ui5-icon>`; };
const block7 = (context) => { return scopedHtml`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${ifDefined(context.description)}</span>${ context.info ? block8(context) : undefined }</div>`; };
const block8 = (context) => { return scopedHtml`<span part="info" class="ui5-li-info">${ifDefined(context.info)}</span>`; };
const block9 = (context) => { return scopedHtml`<span class="ui5-hidden-text">${ifDefined(context.type)}</span>`; };
const block10 = (context) => { return scopedHtml`${ context.info ? block11(context) : undefined }`; };
const block11 = (context) => { return scopedHtml`<span part="info" class="ui5-li-info">${ifDefined(context.info)}</span>`; };
const block12 = (context) => { return scopedHtml`<ui5-icon part="icon" name="${ifDefined(context.icon)}" class="ui5-li-icon"></ui5-icon>`; };
const block13 = (context) => { return scopedHtml`<div class="ui5-li-detailbtn"><ui5-button design="Transparent" icon="edit" @click="${context.onDetailClick}"></ui5-button></div>`; };
const block14 = (context) => { return scopedHtml`${ context.modeSingleSelect ? block15(context) : undefined }${ context.modeMultiSelect ? block16(context) : undefined }${ context.modeDelete ? block17(context) : undefined }`; };
const block15 = (context) => { return scopedHtml`<ui5-radiobutton ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?selected="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></ui5-radiobutton>`; };
const block16 = (context) => { return scopedHtml`<ui5-checkbox ?disabled="${context.isInactive}" tabindex="-1" id="${ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></ui5-checkbox>`; };
const block17 = (context) => { return scopedHtml`<div class="ui5-li-deletebtn"><ui5-button id="${ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${ifDefined(context.deleteText)}"></ui5-button></div>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

/**
 * @public
 */
const metadata = {
	tag: "ui5-li",
	properties: /** @lends sap.ui.webcomponents.main.StandardListItem.prototype */ {

		/**
		 * Defines the description displayed right under the item text, if such is present.
		 * @type {string}
		 * @defaultvalue: ""
		 * @public
		 * @since 0.8.0
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
		 * Defines whether the <code>icon</code> should be displayed in the beginning of the list item or in the end.
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
		 * <b>Note:</b> The <code>image</code> would be displayed in the beginning of the list item.
		 *
		 * @type {string}
		 * @public
		 */
		image: {
			type: String,
		},

		/**
		 * Defines the <code>info</code>, displayed in the end of the list item.
		 * @type {string}
		 * @public
		 * @since 0.13.0
		 */
		info: {
			type: String,
		},

		/**
		 * Defines the state of the <code>info</code>.
		 * <br>
		 * Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Erorr"</code>.
		 * @type {ValueState}
		 * @defaultvalue "None"
		 * @public
		 * @since 0.13.0
		 */
		infoState: {
			type: ValueState,
			defaultValue: ValueState.None,
		},

		/**
		 * Indicates if the list item has text content.
		 * @type {boolean}
		 * @private
		 */
		hasTitle: {
			type: Boolean,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.StandardListItem.prototype */ {
		/**
		 * Defines the text of the <code>ui5-li</code>.
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
};

/**
 * @class
 * The <code>ui5-li</code> represents the simplest type of item for a <code>ui5-list</code>.
 *
 * This is a list item,
 * providing the most common use cases such as <code>text</code>,
 * <code>image</code> and <code>icon</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.StandardListItem
 * @extends ListItem
 * @tagname ui5-li
 * @implements sap.ui.webcomponents.main.IListItem
 * @public
 */
class StandardListItem extends ListItem {
	static get template() {
		return main;
	}

	static get metadata() {
		return metadata;
	}

	onBeforeRendering(...params) {
		super.onBeforeRendering(...params);
		this.hasTitle = !!this.textContent;
	}

	get displayImage() {
		return !!this.image;
	}

	get displayIconBegin() {
		return (this.icon && !this.iconEnd);
	}

	get displayIconEnd() {
		return (this.icon && this.iconEnd);
	}

	static get dependencies() {
		return [
			...ListItem.dependencies,
			Icon,
			Avatar,
		];
	}
}

StandardListItem.define();

export { ListItemBase as L, StandardListItem as S, ListItemType as a, List as b };
