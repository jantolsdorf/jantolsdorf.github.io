import { s as scopedHtml, i as ifDefined, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, I as Integer, U as UI5Element, l as litRender, u as repeat, h as classMap, F as Float, f as fetchI18nBundle } from './Icons-85d4abff.js';
import { c as isSpace, d as isEnter, g as getI18nBundle, p as isPhone, a as getEffectiveAriaLabelText } from './i18n-defaults-dca87248.js';
import { I as ItemNavigation, N as NavigationMode, d as debounce } from './debounce-bf42cc69.js';
import { R as ResizeHandler } from './Popover-0d784de7.js';
import { I as Icon, B as Button } from './Button-7dc82d4c.js';
import { R as ResponsivePopover } from './ResponsivePopover-cdfbc391.js';

const FCL_START_COLUMN_TXT = {key: "FCL_START_COLUMN_TXT", defaultText: "First column"};const FCL_MIDDLE_COLUMN_TXT = {key: "FCL_MIDDLE_COLUMN_TXT", defaultText: "Middle column"};const FCL_END_COLUMN_TXT = {key: "FCL_END_COLUMN_TXT", defaultText: "Last column"};const FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP = {key: "FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP", defaultText: "Expand the first column"};const FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP = {key: "FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP", defaultText: "Collapse the first column"};const FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP = {key: "FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP", defaultText: "Expand the last column"};const FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP = {key: "FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP", defaultText: "Collapse the last column"};const NOTIFICATION_LIST_ITEM_TXT = {key: "NOTIFICATION_LIST_ITEM_TXT", defaultText: "Notification"};const NOTIFICATION_LIST_ITEM_SHOW_MORE = {key: "NOTIFICATION_LIST_ITEM_SHOW_MORE", defaultText: "Show More"};const NOTIFICATION_LIST_ITEM_SHOW_LESS = {key: "NOTIFICATION_LIST_ITEM_SHOW_LESS", defaultText: "Show Less"};const NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE = {key: "NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE", defaultText: "More"};const NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE = {key: "NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE", defaultText: "Close"};const NOTIFICATION_LIST_ITEM_READ = {key: "NOTIFICATION_LIST_ITEM_READ", defaultText: "Read"};const NOTIFICATION_LIST_ITEM_UNREAD = {key: "NOTIFICATION_LIST_ITEM_UNREAD", defaultText: "Unread"};const NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT = {key: "NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT", defaultText: "High Priority"};const NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT = {key: "NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT", defaultText: "Medium Priority"};const NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT = {key: "NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT", defaultText: "Low Priority"};const NOTIFICATION_LIST_GROUP_ITEM_TXT = {key: "NOTIFICATION_LIST_GROUP_ITEM_TXT", defaultText: "Notification Group"};const NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT = {key: "NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT", defaultText: "Counter"};const NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE = {key: "NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE", defaultText: "Close All"};const NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE = {key: "NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE", defaultText: "Collapse Group"};const NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE = {key: "NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE", defaultText: "Expand Group"};const TIMELINE_ARIA_LABEL = {key: "TIMELINE_ARIA_LABEL", defaultText: "Timeline"};const UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT", defaultText: "Cancel"};const UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT", defaultText: "Rename"};const UPLOADCOLLECTIONITEM_ERROR_STATE = {key: "UPLOADCOLLECTIONITEM_ERROR_STATE", defaultText: "Terminated"};const UPLOADCOLLECTIONITEM_READY_STATE = {key: "UPLOADCOLLECTIONITEM_READY_STATE", defaultText: "Pending"};const UPLOADCOLLECTIONITEM_UPLOADING_STATE = {key: "UPLOADCOLLECTIONITEM_UPLOADING_STATE", defaultText: "Uploading"};const UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT", defaultText: "Terminate"};const UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT", defaultText: "Retry"};const UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT", defaultText: "Edit"};const UPLOADCOLLECTION_NO_DATA_TEXT = {key: "UPLOADCOLLECTION_NO_DATA_TEXT", defaultText: "No files found."};const UPLOADCOLLECTION_NO_DATA_DESCRIPTION = {key: "UPLOADCOLLECTION_NO_DATA_DESCRIPTION", defaultText: "Drop files to upload them or use the \"Upload\" button."};const UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION = {key: "UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION", defaultText: "Upload Collection"};const UPLOADCOLLECTION_DRAG_FILE_INDICATOR = {key: "UPLOADCOLLECTION_DRAG_FILE_INDICATOR", defaultText: "Drag files here."};const UPLOADCOLLECTION_DROP_FILE_INDICATOR = {key: "UPLOADCOLLECTION_DROP_FILE_INDICATOR", defaultText: "Drop files to upload them."};const SHELLBAR_LABEL = {key: "SHELLBAR_LABEL", defaultText: "Shell Bar"};const SHELLBAR_LOGO = {key: "SHELLBAR_LOGO", defaultText: "Logo"};const SHELLBAR_COPILOT = {key: "SHELLBAR_COPILOT", defaultText: "CoPilot"};const SHELLBAR_NOTIFICATIONS = {key: "SHELLBAR_NOTIFICATIONS", defaultText: "{0} Notifications"};const SHELLBAR_PROFILE = {key: "SHELLBAR_PROFILE", defaultText: "Profile"};const SHELLBAR_PRODUCTS = {key: "SHELLBAR_PRODUCTS", defaultText: "Products"};const SHELLBAR_SEARCH = {key: "SHELLBAR_SEARCH", defaultText: "Search"};const SHELLBAR_OVERFLOW = {key: "SHELLBAR_OVERFLOW", defaultText: "More"};const SHELLBAR_CANCEL = {key: "SHELLBAR_CANCEL", defaultText: "Cancel"};const WIZARD_NAV_ARIA_ROLE_DESCRIPTION = {key: "WIZARD_NAV_ARIA_ROLE_DESCRIPTION", defaultText: "Wizard"};const WIZARD_NAV_STEP_DEFAULT_HEADING = {key: "WIZARD_NAV_STEP_DEFAULT_HEADING", defaultText: "Step"};

const block0$2 = (context) => { return scopedHtml`<div class="ui5-wiz-step-root" role="${ifDefined(context.role)}" tabindex="${ifDefined(context.tabIndex)}" aria-current="${ifDefined(context.ariaCurrent)}" aria-setsize="${ifDefined(context.ariaSetsize)}" aria-posinset="${ifDefined(context.ariaPosinset)}" aria-disabled="${ifDefined(context.ariaDisabled)}" aria-label="${ifDefined(context.ariaLabel)}" aria-roledescription="${ifDefined(context.ariaRoledescription)}" @click="${context._onclick}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @focusin="${context._onfocusin}"><div class="ui5-wiz-step-main"><div class="ui5-wiz-step-icon-circle">${ context.icon ? block1$2(context) : block2$1(context) }</div>${ context.hasTexts ? block3(context) : undefined }</div>${ !context.hideSeparator ? block4(context) : undefined }</div>`; };
const block1$2 = (context) => { return scopedHtml`<ui5-icon class="ui5-wiz-step-icon" name="${ifDefined(context.icon)}"></ui5-icon>`; };
const block2$1 = (context) => { return scopedHtml`<span class="ui5-wiz-step-number">${ifDefined(context.number)}</span>`; };
const block3 = (context) => { return scopedHtml`<div class="ui5-wiz-step-texts"><div class="ui5-wiz-step-heading">${ifDefined(context.heading)}</div><div class="ui5-wiz-step-subheading">${ifDefined(context.subheading)}</div></div>`; };
const block4 = (context) => { return scopedHtml`<div class="ui5-wiz-step-hr"></div>`; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

const defaultTheme = ":root{--_ui5_bar_base_height:2.75rem;--_ui5_bar_subheader_height:3rem}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_bar_base_height:2.5rem;--_ui5_bar_subheader_height:2.25rem}:root{--_ui5_fcl_solid_bg:var(--sapShell_Background);--_ui5_fcl_column_border:none;--_ui5_fcl_decoration_top:linear-gradient(0deg,var(--sapHighlightColor),#f3f4f5);--_ui5_fcl_decoration_bottom:linear-gradient(180deg,var(--sapHighlightColor),#f3f4f5);--_ui5_page_list_bg:var(--sapGroup_ContentBackground);--_ui5_product_switch_item_width:11.25rem;--_ui5_product_switch_item_height:7rem;--_ui5_product_switch_item_outline_width:.0625rem;--_ui5_product_switch_item_outline_color:var(--sapContent_FocusColor);--_ui5_product_switch_item_outline:var(--_ui5_product_switch_item_outline_width) var(--_ui5_product_switch_item_outline_color) dotted;--_ui5_product_switch_item_active_outline_color:var(--sapContent_ContrastFocusColor);--_ui5_product_switch_item_outline_offset:-.1875rem;--_ui5_product_switch_item_outline_offset_positive:.1875rem;--_ui5_TimelineItem_arrow_size:1.625rem;--_ui5_TimelineItem_bubble_outline_width:0.0625rem;--_ui5_TimelineItem_bubble_outline_top:-0.125rem;--_ui5_TimelineItem_bubble_outline_right:-0.125rem;--_ui5_TimelineItem_bubble_outline_bottom:-0.125rem;--_ui5_TimelineItem_bubble_outline_left:-0.625rem;--_ui5_TimelineItem_bubble_rtl_left_offset:-0.125rem;--_ui5_TimelineItem_bubble_rtl_right_offset:-0.625rem;--ui5_upload_collection_level_2Size:1.375rem;--ui5_upload_collection_level_5Size:1rem;--ui5_upload_collection_drag_overlay_border:0.125rem dashed var(--sapContent_ForegroundBorderColor);--ui5_upload_collection_drop_overlay_border:0.125rem solid var(--sapContent_DragAndDropActiveColor);--ui5_upload_collection_drop_overlay_background:transparent;--_ui5_wiz_tab_focus_outline:1px dotted var(--sapContent_FocusColor);--_ui5_wiz_tab_selected_bg:var(--sapSelectedColor);--_ui5_wiz_tab_border:1px solid var(--sapSelectedColor);--_ui5_wiz_tab_selection_line:var(--sapSelectedColor);--_ui5_wiz_tab_icon_color:var(--sapSelectedColor);--_ui5_wiz_tab_active_separator_color:var(--sapSelectedColor)}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => defaultTheme);
const WizardTabCss = ":host(:not([hidden])){min-width:1px}:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle{background:var(--_ui5_wiz_tab_selected_bg)}:host([selected]:not([disabled])) .ui5-wiz-step-icon-circle:after{content:\"\";position:absolute;border-bottom:.25rem solid var(--_ui5_wiz_tab_selection_line);border-top-left-radius:.1875rem;border-top-right-radius:.1875rem;left:0;right:0;bottom:-1rem}:host([selected]:not([disabled])) .ui5-wiz-step-icon{color:var(--sapList_Active_TextColor)}:host([selected]:not([disabled])) .ui5-wiz-step-number{color:var(--sapList_Active_TextColor)}:host([disabled]) .ui5-wiz-step-icon-circle{border-color:var(--sapList_BorderColor);background:var(--sapObjectHeader_Background)}:host([disabled]) .ui5-wiz-step-icon{color:var(--sapContent_LabelColor)}:host([disabled]) .ui5-wiz-step-number{color:var(--sapContent_LabelColor)}.ui5-wiz-step-root{display:flex;align-items:center;flex-direction:row;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);outline:none}.ui5-wiz-step-main{text-align:center;white-space:nowrap}:host(:not([disabled])) .ui5-wiz-step-main{cursor:pointer}.ui5-wiz-step-root:focus .ui5-wiz-step-main{outline:var(--_ui5_wiz_tab_focus_outline);outline-offset:1px}.ui5-wiz-step-icon-circle{display:inline-block;box-sizing:border-box;vertical-align:middle;text-align:center;width:2rem;height:2rem;margin:0 .1875rem;line-height:1.625rem;border-radius:50%;background:var(--sapObjectHeader_Background);border:var(--_ui5_wiz_tab_border);position:relative}.ui5-wiz-step-icon{width:1rem;height:1rem;color:var(--_ui5_wiz_tab_icon_color);pointer-events:none;vertical-align:middle}.ui5-wiz-step-number{color:var(--_ui5_wiz_tab_icon_color)}.ui5-wiz-step-texts{display:inline-block;vertical-align:middle;text-align:left;padding:0 .5rem 0 .1875rem;max-height:3rem;overflow:hidden;background:var(--sapObjectHeader_Background)}.ui5-wiz-step-heading,.ui5-wiz-step-subheading{color:var(--sapContent_LabelColor);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host([data-ui5-wizard-expanded-tab-prev=true]) .ui5-wiz-step-heading,:host([data-ui5-wizard-expanded-tab-prev=true]) .ui5-wiz-step-subheading,:host([data-ui5-wizard-expanded-tab=false]) .ui5-wiz-step-heading,:host([data-ui5-wizard-expanded-tab=false]) .ui5-wiz-step-subheading,:host([data-ui5-wizard-expanded-tab=false]) .ui5-wiz-step-texts{display:none}.ui5-wiz-step-subheading{font-size:var(--sapFontSmallSize)}.ui5-wiz-step-hr{display:inline-block;border-bottom-color:var(--sapList_BorderColor);border-bottom-width:1px;border-bottom-style:solid;height:1px;flex-grow:1;margin-right:.25rem}:host([active-separator]) .ui5-wiz-step-hr{border-bottom-color:var(--_ui5_wiz_tab_active_separator_color)}:host([branching-separator]) .ui5-wiz-step-hr{border-bottom-style:dashed}[ui5-wizard-tab] .ui5-wiz-step-main{pointer-events:none}:host([data-ui5-wizard-expanded-tab=false]) .ui5-wiz-step-root{display:inline;position:absolute;top:0}:host([data-ui5-wizard-after-current-tab=true]) .ui5-wiz-step-root{right:0}:host([data-ui5-wizard-expanded-tab=false]) .ui5-wiz-step-hr{display:none}";

const metadata$2 = {
	tag: "ui5-wizard-tab",
	properties: /** @lends sap.ui.webcomponents.fiori.WizardTab.prototype */ {
		/**
		 * Defines the <code>icon</code> of the step.
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 */
		icon: {
			type: String,
		},

		/**
		 * Defines the <code>heading</code> of the step.
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 */
		heading: {
			type: String,
		},

		/**
		 * Defines the <code>subheading</code> of the step.
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 */
		subheading: {
			type: String,
		},

		/**
		 * Defines the number that will be displayed in place of the <code>icon</code>, when it's missing.
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 */
		number: {
			type: String,
		},

		/**
		 * Defines if the step is <code>disabled</code> - the step is not responding to user interaction.
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines if the step is <selected>selected</code>.
		 * <br><br>
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		selected: {
			type: Boolean,
		},

		/**
		 * Defines if the step's separator is hidden or not.
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		hideSeparator: {
			type: Boolean,
		},

		/**
		 * Defines if the step's separator is active or not.
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		activeSeparator: {
			type: Boolean,
		},

		/**
		 * Defines if the step's separator is dashed or not.
		 * @type {boolean}
		 * @defaultvalue false
		 * @private
		 */
		branchingSeparator: {
			type: Boolean,
		},

		/**
		 * Defines the role of the step.
		 * @type {boolean}
		 * @defaultvalue listitem
		 * @private
		 */
		role: {
			type: String,
			defaultValue: "listitem",
		},

		/**
		 * Defines the aria-roledescription of the step.
		 * @type {boolean}
		 * @defaultvalue ""
		 * @private
		 */
		ariaRoledescription: {
			type: String,
		},

		/**
		 * Defines the aria-label of the step.
		 * @type {boolean}
		 * @defaultvalue undefined
		 * @private
		 */
		ariaLabel: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * Defines the aria-labelledby of the step.
		 * @type {boolean}
		 * @defaultvalue undefined
		 * @private
		 */
		ariaLabelledby: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * Defines the aria-setsize of the step.
		 * @type {boolean}
		 * @defaultvalue undefined
		 * @private
		 */
		ariaSetsize: {
			type: Integer,
		},

		/**
		 * Defines the aria-posinset of the step.
		 * @type {boolean}
		 * @defaultvalue undefined
		 * @private
		 */
		ariaPosinset: {
			type: Integer,
		},

		/**
		 * Defines the tabindex of the step.
		 * @type {String}
		 * @defaultvalue -1
		 * @private
		 */
		_tabIndex: {
			type: String,
			defaultValue: "-1",
		},
	},
	slots: /** @lends sap.ui.webcomponents.fiori.WizardTab.prototype */ {
	},
	events: /** @lends sap.ui.webcomponents.fiori.WizardTab.prototype */ {
		/**
		 * Fired when clicking on none disabled step.
		 *
		 * @event sap.ui.webcomponents.fiori.WizardTab#selection-change-requested
		 * @private
		 */
		"selection-change-requested": {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * Private component, used internally by the <code>ui5-wizard</code>
 * to represent a "step" in the navigation header of the <code>ui5-wizard</code>.
 *
 * <h3>Usage</h3>
 *
 * For the <code>ui5-wizard-tap</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/WizardTab.js";</code> (imported with <ui5-wizard>)
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.fiori.WizardTab
 * @extends UI5Element
 * @tagname ui5-wizard-tab
 * @private
 */
class WizardTab extends UI5Element {
	static get metadata() {
		return metadata$2;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return WizardTabCss;
	}

	static get template() {
		return main$2;
	}

	static get dependencies() {
		return [Icon];
	}

	_onclick() {
		if (!this.disabled) {
			this.fireEvent("selection-change-requested");
		}
	}

	_onkeydown(event) {
		if (this.disabled) {
			return;
		}

		if (isSpace(event)) {
			event.preventDefault();
		}

		if (isEnter(event)) {
			this.fireEvent("selection-change-requested");
		}
	}

	_onkeyup(event) {
		if (this.disabled) {
			return;
		}

		if (isSpace(event)) {
			this.fireEvent("selection-change-requested");
		}
	}

	_onfocusin() {
		if (this.disabled) {
			return;
		}

		this.fireEvent("focused");
	}

	get tabIndex() {
		return this.disabled ? undefined : this._tabIndex;
	}

	get ariaCurrent() {
		return this.selected ? "step" : undefined;
	}

	get ariaDisabled() {
		return this.disabled ? "true" : undefined;
	}

	get hasTexts() {
		return this.heading || this.subheading;
	}
}

WizardTab.define();

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-wizard-step",
	properties: /** @lends sap.ui.webcomponents.fiori.WizardStep.prototype */ {
		/**
		 * Defines the <code>heading</code> of the step.
		 * <br><br>
		 *
		 * <b>Note:</b> the text is displayed in the <code>ui5-wizard</code> navigation header.
		 * <br>
		 * <b>Note:</b> the text will hide on small sizes (about 559 px).
		 * @type {String}
		 * @defaultvalue ""
		 * @public
		 */
		heading: {
			type: String,
		},

		/**
		 * Defines the <code>subheading</code> of the step.
		 * <br><br>
		 *
		 * <b>Note:</b> the text is displayed in the <code>ui5-wizard</code> navigation header.
		 * <br>
		 * <b>Note:</b> the text will hide on small sizes (about 559 px).
		 * @type {String}
		 * @defaultvalue ""
		 * @public
		 */
		subheading: {
			type: String,
		},

		/**
		 * Defines the <code>icon</code> of the step.
		 * <br><br>
		 *
		 * <b>Note:</b> the icon is displayed in the <code>ui5-wizard</code> navigation header.
		 * <br><br>
		 *
		 * The SAP-icons font provides numerous options.
		 * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
		 * @type {String}
		 * @defaultvalue ""
		 * @public
		 */
		icon: {
			type: String,
		},

		/**
		 * Defines if the step is <code>disabled</code>. When disabled the step is displayed,
		 * but the user can't select the step by clicking or navigate to it with scrolling.
		 * <br><br>
		 *
		 * <b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time.
		 * In this case the <code>selected</code> property would take precedence.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines the step's <code>selected</code> state - the step that is currently active.
		 * <br><br>
		 *
		 * <b>Note:</b> Step can't be <code>selected</code> and <code>disabled</code> at the same time.
		 * In this case the <code>selected</code> property would take precedence.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		selected: {
			type: Boolean,
		},

		/**
		 * When <code>branching</code> is enabled a dashed line would be displayed after the step,
		 * meant to indicate that the next step is not yet known and depends on user choice in the current step.
		 * <br><br>
		 *
		 * <b>Note:</b> It is recommended to use <code>branching</code> on the last known step
		 * and later add new steps when it becomes clear how the wizard flow should continue.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		branching: {
			type: Boolean,
		},

		/**
		 * Defines the aria-label of the step.
		 * @type {boolean}
		 * @defaultvalue ""
		 * @private
		 */
		ariaLabel: {
			type: String,
		},

		/**
		 * Defines the aria-labelledby of the step.
		 * @type {boolean}
		 * @defaultvalue ""
		 * @private
		 */
		ariaLabelledby: {
			type: String,
		},
	},
	slots: /** @lends sap.ui.webcomponents.fiori.WizardStep.prototype */ {
		/**
		 * Defines the step content.
		 * @type {Node[]}
		 * @slot
		 * @public
		 */
		"default": {
			type: Node,
		},
	},
	events: /** @lends sap.ui.webcomponents.fiori.WizardStep.prototype */ {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * A component that represents a logical step as part of the <code>ui5-wizard</code>.
 * It is meant to aggregate arbitrary HTML elements that forms the content of a single step.
 *
 * <h3>Structure</h3>
 * <ul>
 * <li>Each wizard step has arbitrary content</li>
 * <li>Each wizard step might have texts - defined by the <code>heading</code> and <code>subheading</code> properties</li>
 * <li>Each wizard step might have an icon - defined by the <code>icon</code> property</li>
 * <li>Each wizard step might display a number in place of the <code>icon</code>, when it's missing</li>
 * </ul>
 *
 * <h3>Usage</h3>
 * The <code>ui5-wizard-step</code> component should be used only as slot of the <code>ui5-wizard</code> component
 * and should not be used standalone.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.fiori.WizardStep
 * @extends UI5Element
 * @tagname ui5-wizard-step
 * @since 1.0.0-rc.10
 * @implements sap.ui.webcomponents.fiori.IWizardStep
 * @public
 */
class WizardStep extends UI5Element {
	static get metadata() {
		return metadata$1;
	}
}

WizardStep.define();

const block0$1 = (context) => { return scopedHtml`<div class="ui5-wiz-root" aria-label="${ifDefined(context.ariaLabelText)}"><nav class="ui5-wiz-nav" role="navigation" aria-roledescription="${ifDefined(context.navAriaRoleDescription)}" tabindex="-1"><ul class="ui5-wiz-nav-list" role="list">${ repeat(context._stepsInHeader, (item, index) => item._id || index, (item, index) => block1$1(item, index, context)) }</ul></nav><div class="ui5-wiz-content" @scroll="${context.onScroll}">${ repeat(context._steps, (item, index) => item._id || index, (item, index) => block2(item, index, context)) }</div></div>`; };
const block1$1 = (item, index, context) => { return scopedHtml`<ui5-wizard-tab heading="${ifDefined(item.heading)}" subheading="${ifDefined(item.subheading)}" icon="${ifDefined(item.icon)}" number="${ifDefined(item.number)}" ?disabled="${item.disabled}" ?selected="${item.selected}" ?hide-separator="${item.hideSeparator}" ?active-separator="${item.activeSeparator}" ?branching-separator="${item.branchingSeparator}" role="listitem" aria-posinset="${ifDefined(item.pos)}" aria-setsize="${ifDefined(item.size)}" aria-roledescription="${ifDefined(item.roleDescription)}" aria-label="${ifDefined(item.ariaLabel)}" data-ui5-content-ref-id="${ifDefined(item.refStepId)}" data-ui5-index="${ifDefined(item.pos)}" _tab-index="${ifDefined(item.tabIndex)}" @ui5-selection-change-requested="${ifDefined(context.onSelectionChangeRequested)}" @ui5-focused="${ifDefined(context.onStepInHeaderFocused)}" @click="${context._onGroupedTabClick}" style=${ifDefined(item.styles)}></ui5-wizard-tab>`; };
const block2 = (item, index, context) => { return scopedHtml`<div class="ui5-wiz-content-item" ?hidden="${item.disabled}" ?selected="${item.selected}" ?stretch="${item.stretch}" data-ui5-content-item-ref-id="${ifDefined(item._id)}"><slot name="${ifDefined(item._individualSlot)}"></slot></div>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

const block0 = (context) => { return scopedHtml`<ui5-responsive-popover horizontal-align="Center" placement-type="Bottom" class="${classMap(context.classes.popover)}" @ui5-after-close=${ifDefined(context._afterClosePopover)} content-only-on-desktop prevent-focus-restore with-padding _hide-header><ul class="ui5-wizard-responsive-popover-list">${ repeat(context._groupedTabs, (item, index) => item._id || index, (item, index) => block1(item, index, context)) }</ul><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${context._closeRespPopover}">Cancel</ui5-button></div></ui5-responsive-popover>`; };
const block1 = (item, index, context) => { return scopedHtml`<li><ui5-button icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${ifDefined(item.ariaPosinset)}" @click="${context._onOverflowStepButtonClick}">${ifDefined(item.heading)}</ui5-button></li>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => defaultTheme);
const WizardCss = ":host(:not([hidden])){display:block;height:100%;width:100%;overflow:auto}.ui5-wiz-root{height:100%;width:100%;position:relative}.ui5-wiz-content{position:relative;overflow:auto;height:calc(100% - 4rem);box-sizing:border-box;background:var(--sapBackgroundColor)}.ui5-wiz-content-item{display:block;box-sizing:border-box;padding-bottom:2rem}.ui5-wiz-content-item[hidden]{display:none}.ui5-wiz-content-item[stretch]{min-height:calc(100% + 2rem)}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=true]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:2rem;padding-left:.5rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem;padding:0}.ui5-wiz-nav-list{display:table;table-layout:fixed;position:relative;list-style:none;margin:0;box-sizing:border-box;width:100%;height:2rem;padding:0}[ui5-wizard-tab]{display:table-cell;position:relative}.ui5-wiz-nav{box-sizing:border-box;height:4rem;padding:.875rem 1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--sapObjectHeader_Background);font-size:.875rem;box-shadow:var(--sapContent_HeaderShadow);outline:none;display:flex;align-items:center}[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]{width:.25rem}[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true],[ui5-wizard-tab][data-ui5-wizard-expanded-tab=false]+[ui5-wizard-tab][data-ui5-wizard-expanded-tab-prev=true]{width:2rem;padding-right:.75rem}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => defaultTheme);
const WizardPopoverCss = ".ui5-wizard-responsive-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-wizard-responsive-popover-list{list-style:none;margin:0;padding:0}.ui5-wizard-popover .ui5-wizard-responsive-popover-list [ui5-button]{width:200px}.ui5-wizard-dialog .ui5-wizard-responsive-popover-list [ui5-button]{width:100%}";

const MIN_STEP_WIDTH_NO_TITLE = 64;
const MIN_STEP_WIDTH_WITH_TITLE = 200;

const EXPANDED_STEP = "data-ui5-wizard-expanded-tab";
const AFTER_EXPANDED_STEP = "data-ui5-wizard-expanded-tab-next";
const AFTER_CURRENT_STEP = "data-ui5-wizard-after-current-tab";
const BEFORE_EXPANDED_STEP = "data-ui5-wizard-expanded-tab-prev";

/**
 * @public
 */
const metadata = {
	tag: "ui5-wizard",
	managedSlots: true,
	properties: /** @lends sap.ui.webcomponents.fiori.Wizard.prototype */ {
		/**
		 * Defines the aria-label text of the <code>ui5-wizard</code>.
		 *
		 * @type {String}
		 * @defaultvalue undefined
		 * @private
		 */
		ariaLabel: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * Defines the width of the <code>ui5-wizard</code>.
		 * @private
		 */
		width: {
			type: Float,
		},

		/**
		 * Defines the threshold to switch between steps upon user scrolling.
		 * <br><br>
		 *
		 * <b>For Example:</b>
		 * <br>
		 * (1) To switch to the next step, when half of the step is scrolled out - set <code>step-switch-threshold="0.5"</code>.
		 * (2) To switch to the next step, when the entire current step is scrolled out - set <code>step-switch-threshold="1"</code>.
		 *
		 * <br><br>
		 * <b>Note:</b> Supported values are between 0.5 and 1
		 * and values out of the range will be normalized to 0.5 and 1 respectively.
		 * @private
		 * @type {Float}
		 * @defaultvalue 0.7
		 * @since 1.0.0-rc.13
		 */
		 stepSwitchThreshold: {
			type: Float,
			defaultValue: 0.7,
		},

		/**
		 * Defines the height of the <code>ui5-wizard</code> content.
		 * @private
		 */
		contentHeight: {
			type: Float,
		},

		_groupedTabs: {
			type: String,
			multiple: true,
		},
	},
	slots: /** @lends sap.ui.webcomponents.fiori.Wizard.prototype */ {
		/**
		 * Defines the steps.
		 * <br><br>
		 * <b>Note:</b> Use the available <code>ui5-wizard-step</code> component.
		 *
		 * @type {sap.ui.webcomponents.fiori.IWizardStep[]}
		 * @public
		 * @slot steps
		 */
		"default": {
			propertyName: "steps",
			type: HTMLElement,
			"individualSlots": true,
			invalidateOnChildChange: true,
		},
	},
	events: /** @lends sap.ui.webcomponents.fiori.Wizard.prototype */ {
		/**
		 * Fired when the step selection is changed by user interaction - either with scrolling,
		 * or by clicking on the steps within the component header.
		 *
		 * @event sap.ui.webcomponents.fiori.Wizard#selection-change
		 * @param {HTMLElement} selectedStep the newly selected step
		 * @param {HTMLElement} previouslySelectedStep the previously selected step
		 * @param {Boolean} changeWithClick the selection changed due to user's click on step within the navigation
		 * @public
		 */
		"selection-change": {
			detail: {
				selectedStep: { type: HTMLElement },
				previouslySelectedStep: { type: HTMLElement },
				changeWithClick: { Boolean },
			},
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-wizard</code> helps users complete a complex task by dividing it into sections and guiding the user through it.
 * It has two main areas - a navigation area at the top showing the step sequence and a content area below it.
 *
 * <h3>Structure</h3>
 * <h4>Navigation area</h4>
 * The top most area of the <code>ui5-wizard</code> is occupied by the navigation area.
 * It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.
 * <ul>
 * <li> Steps can have different visual representations - numbers or icons.
 * <li> Steps might have labels for better readability - heading and subheding.</li>
 * <li> Steps are defined by using the <code>ui5-wizard-step</code> as slotted element within the <code>ui5-wizard</code></li>
 * </ul>
 *
 * <b>Note:</b> If no selected step is defined, the first step will be auto selected.
 * <br>
 * <b>Note:</b> If multiple selected steps are defined, the last step will be selected.
 *
 * <h4>Content</h4>
 * The content occupies the main part of the page. It can hold any type of HTML elements.
 * It's defined by using the <code>ui5-wizard-step</code> as slotted element within the <code>ui5-wizard</code>.
 *
 * <h3>Scrolling</h3>
 * The component handles user scrolling by selecting the closest step, based on the current scroll position
 * and scrolls to particular place, when the user clicks on the step within the navigation area.
 * <br><br>
 *
 * <b>Important:</b> In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.
 * The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.
 * <br><br>
 * <b>For example:</b>
 * <br><br>
 * <code>&lt;ui5-dialog style="height: 80%"&gt;<br></code>
 * <code>&#9;&lt;ui5-wizard&gt;&lt;/ui5-wizard&gt;<br></code>
 * <code>&lt;/ui5-dialog&gt;</code>
 *
 * <h4>Moving to next step</h4>
 * The <code>ui5-wizard-step</code> provides the necessary API and it's up to the user of the component to use it to move to the next step.
 * You have to set its <code>selected</code> property (and remove the <code>disabled</code> one if set) to <code>true</code>.
 * And, the <code>ui5-wizard</code> will automatically scroll to the content of the newly selected step.
 * <br><br>
 *
 * The Fiori 3 guidelines recommends having a "nextStep" button in the content area.
 * You can place a button, or any other type of element to trigger step change, inside the <code>ui5-wizard-step</code>,
 * and show/hide it when certain fields are filled or user defined criteria is met.
 *
 * <h3>Usage</h3>
 * <h4>When to use:</h4>
 * When the user has to accomplish a long set of tasks.
 * <h4>When not to use:</h4>
 * When the task has less than 3 steps.
 *
 * <h3>Responsive Behavior</h3>
 * On small widths the step's heading, subheading and separators in the navigation area
 * will start truncate and shrink and from particular point they will hide to free as much space as possible.
 *
 * <h3>ES6 Module Import</h3>
 * <code>import @ui5/webcomponents-fiori/dist/Wizard.js";</code> (includes <ui5-wizard-step>)
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.fiori.Wizard
 * @extends UI5Element
 * @tagname ui5-wizard
 * @since 1.0.0-rc.10
 * @appenddocs WizardStep
 * @public
 */
class Wizard extends UI5Element {
	constructor() {
		super();

		// Stores the scroll offsets of the steps,
		// e.g. the steps' starting point.
		this.stepScrollOffsets = [];

		// Stores references to the grouped steps.
		this._groupedTabs = [];

		// Keeps track of the currently selected step index.
		this.selectedStepIndex = 0;

		// Keeps track of the previously selected step index.
		this.previouslySelectedStepIndex = 0;

		// Indicates that selection will be changed
		// due to user click.
		this.selectionRequestedByClick = false;

		// Stores the previous width
		this._prevWidth = 0;

		// Stores the previous height
		this._prevContentHeight = 0;

		// Indicates that selection will be changed
		// due to user scroll.
		this.selectionRequestedByScroll = false;

		this._itemNavigation = new ItemNavigation(this, {
			navigationMode: NavigationMode.Horizontal,
			getItemsCallback: () => this.enabledStepsInHeaderDOM,
		});

		this._onStepResize = this.onStepResize.bind(this);

		this.i18nBundle = getI18nBundle("@ui5/webcomponents-fiori");
	}

	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	get classes() {
		return {
			popover: {
				"ui5-wizard-responsive-popover": true,
				"ui5-wizard-popover": !isPhone(),
				"ui5-wizard-dialog": isPhone(),
			},
		};
	}

	static get styles() {
		return WizardCss;
	}

	static get staticAreaStyles() {
		return WizardPopoverCss;
	}

	static get template() {
		return main$1;
	}

	static get dependencies() {
		return [
			WizardTab,
			WizardStep,
			ResponsivePopover,
			Button,
		];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents-fiori");
	}

	static get PHONE_BREAKPOINT() {
		return 599;
	}

	static get SCROLL_DEBOUNCE_RATE() {
		return 25;
	}

	static get CONTENT_TOP_OFFSET() {
		return 32;
	}

	static get staticAreaTemplate() {
		return main;
	}

	onExitDOM() {
		this.detachStepsResizeObserver();
	}

	onBeforeRendering() {
		this.syncSelection();
	}

	onAfterRendering() {
		this.storeStepScrollOffsets();

		if (this.previouslySelectedStepIndex !== this.selectedStepIndex) {
			this.scrollToSelectedStep();
		}

		this.attachStepsResizeObserver();
		this.previouslySelectedStepIndex = this.selectedStepIndex;
	}

	/**
	 * Normalizes the step selection as follows:
	 * (1) If there is no selected step - the first step is going to be selected.
	 * (2) If the selected steps are more than one - the last step is going to be selected.
	 * (3) If the selected step is also disabled - log a warning.
	 * @private
	 */
	syncSelection() {
		if (this.stepsCount === 0) {
			return;
		}

		// If no selected steps -> select the first step.
		if (this.selectedStepsCount === 0) {
			this.selectFirstStep();
			console.warn("Selecting the first step: no selected step is defined."); // eslint-disable-line
		}

		// If there are multiple selected steps -> keep the last selected one.
		if (this.selectedStepsCount > 1) {
			this.selectLastSelectedStep();
			console.warn(`Selecting the last step defined as selected: multiple selected steps are defined.`); // eslint-disable-line
		}

		// If the selected step is defined as disabled - log warning.
		if (this.selectedStep && this.selectedStep.disabled) {
			console.warn("The selected step is disabled: you need to enable it in order to interact with the step."); // eslint-disable-line
		}

		// Place for improvement: If the selected step is not the first, enable all the prior steps
		this.selectedStepIndex = this.getSelectedStepIndex();
	}

	/**
	 * Selects the first step.
	 * @private
	 */
	selectFirstStep() {
		this.deselectAll();
		this.slottedSteps[0].selected = true;
		this.slottedSteps[0].disabled = false;
	}

	/**
	 * Selects the last step from multiple selected ones.
	 * @private
	 */
	selectLastSelectedStep() {
		const lastSelectedStep = this.lastSelectedStep;

		if (lastSelectedStep) {
			this.deselectAll();
			lastSelectedStep.selected = true;
			lastSelectedStep.disabled = false;
		}
	}

	/**
	 * Deselects all steps.
	 * @private
	 */
	deselectAll() {
		this.slottedSteps.forEach(step => {
			step.selected = false;
		});
	}

	/**
	 * Stores the scroll offsets of the steps,
	 * e.g. the steps' starting point.
	 *
	 * <b>Note:</b> the disabled ones has negative offsets.
	 * @private
	 */
	storeStepScrollOffsets() {
		this.stepScrollOffsets = this.slottedSteps.map(step => {
			const contentItem = this.getStepWrapperByRefId(step._id);
			return contentItem.offsetTop + contentItem.offsetHeight - Wizard.CONTENT_TOP_OFFSET;
		});
	}

	/**
	 * Handles user click on steps' tabs within the header.
	 * <b>Note:</b> the handler is bound in the template.
	 * @param {Event} event
	 * @private
	 */
	onSelectionChangeRequested(event) {
		this.selectionRequestedByClick = true;
		this.changeSelectionByStepClick(event.target);
	}

	/**
	 * Handles user scrolling with debouncing.
	 * <b>Note:</b> the handler is bound in the template.
	 * @param {Event} event
	 * @private
	 */
	onScroll(event) {
		if (this.selectionRequestedByClick) {
			this.selectionRequestedByClick = false;
			return;
		}

		debounce(this.changeSelectionByScroll.bind(this, event.target.scrollTop), Wizard.SCROLL_DEBOUNCE_RATE);
	}

	/**
	 * Handles when a step in the header is focused in order to update the <code>ItemNavigation</code>.
	 * <b>Note:</b> the handler is bound in the template.
	 * @param {Event} event
	 * @private
	 */
	onStepInHeaderFocused(event) {
		this._itemNavigation.setCurrentItem(event.target);
	}

	/**
	 * Handles resize in order to:
	 * (1) sync steps' scroll offset and selection
	 * (2) adapt navition step header
	 * @private
	 */
	onStepResize() {
		this.width = this.getBoundingClientRect().width;
		this.contentHeight = this.getContentHeight();

		if (this._prevWidth !== this.width || this.contentHeight !== this._prevContentHeight) {
			this._closeRespPopover();
		}

		this._prevWidth = this.width;
		this._prevContentHeight = this.contentHeight;
	}

	attachStepsResizeObserver() {
		this.stepsDOM.forEach(stepDOM => {
			ResizeHandler.deregister(stepDOM, this._onStepResize);
			ResizeHandler.register(stepDOM, this._onStepResize);
		});
	}

	detachStepsResizeObserver() {
		this.stepsDOM.forEach(stepDOM => {
			ResizeHandler.deregister(stepDOM, this._onStepResize);
		});
	}

	/**
	 * Updates the expanded attribute for each ui5-wizard-tab based on the ui5-wizard width
	 * @private
	 */
	_adjustHeaderOverflow() {
		let counter = 0;
		let isForward = true;
		const iWidth = this.width;
		const iCurrStep = this.getSelectedStepIndex();
		const iStepsToShow = this.steps.length ? Math.floor(iWidth / MIN_STEP_WIDTH_WITH_TITLE) : Math.floor(iWidth / MIN_STEP_WIDTH_NO_TITLE);

		const tabs = this.shadowRoot.querySelectorAll("[ui5-wizard-tab]");

		if (!tabs.length) {
			return;
		}

		[].forEach.call(tabs, (step, index) => {
			step.setAttribute(EXPANDED_STEP, false);
			step.setAttribute(BEFORE_EXPANDED_STEP, false);
			step.setAttribute(AFTER_EXPANDED_STEP, false);

			// Add "data-ui5-wizard-after-current-tab" to all tabs after the current one
			if (index > iCurrStep) {
				tabs[index].setAttribute(AFTER_CURRENT_STEP, true);
			} else {
				tabs[index].removeAttribute(AFTER_CURRENT_STEP);
			}
		});

		// Add "data-ui5-wizard-expanded-tab" to the current step
		if (tabs[iCurrStep]) {
			tabs[iCurrStep].setAttribute(EXPANDED_STEP, true);
		}

		// Set the "data-ui5-wizard-expanded-tab" to the steps that are expanded
		// The algorithm is as follows:
		// 1. A step towards the end is expanded
		// 	1.2. If there are no available steps towards the end a step towards the beginning is expanded
		// 2. A step towards the beginning is expanded
		// 	2.2. If there are no available steps towards the beginning a step towards the end is expanded
		for (let i = 1; i < iStepsToShow; i++) {
			if (isForward) {
				counter += 1;
			}

			if (isForward && tabs[iCurrStep + counter]) {
				tabs[iCurrStep + counter].setAttribute(EXPANDED_STEP, true);
				isForward = !isForward;
			} else if (!isForward && tabs[iCurrStep - counter]) {
				tabs[iCurrStep - counter].setAttribute(EXPANDED_STEP, true);
				isForward = !isForward;
			} else if (tabs[iCurrStep + counter + 1]) {
				counter += 1;
				tabs[iCurrStep + counter].setAttribute(EXPANDED_STEP, true);
				isForward = true;
			} else if (tabs[iCurrStep - counter]) {
				tabs[iCurrStep - counter].setAttribute(EXPANDED_STEP, true);
				counter += 1;
				isForward = false;
			}
		}

		// mark the topmost steps of both groups (in the beginning and the end),
		// using the "data-ui5-wizard-after-current-tab" and "data-ui5-wizard-expanded-tab-prev" attributes
		for (let i = 0; i < tabs.length; i++) {
			if (tabs[i].getAttribute(EXPANDED_STEP) === "true" && tabs[i - 1] && tabs[i - 1].getAttribute(EXPANDED_STEP) === "false") {
				tabs[i - 1].setAttribute(BEFORE_EXPANDED_STEP, true);
			}

			if (tabs[i].getAttribute(EXPANDED_STEP) === "false" && tabs[i - 1] && tabs[i - 1].getAttribute(EXPANDED_STEP) === "true") {
				tabs[i].setAttribute(AFTER_EXPANDED_STEP, true);
				break;
			}
		}
	}

	_isGroupAtStart(selectedStep) {
		const iStepNumber = this.stepsInHeaderDOM.indexOf(selectedStep);

		return selectedStep.getAttribute(EXPANDED_STEP) === "false" && selectedStep.getAttribute(BEFORE_EXPANDED_STEP) === "true" && iStepNumber > 0;
	}

	_isGroupAtEnd(selectedStep) {
		const iStepNumber = this.stepsInHeaderDOM.indexOf(selectedStep);

		return selectedStep.getAttribute(EXPANDED_STEP) === "false" && selectedStep.getAttribute(AFTER_EXPANDED_STEP) === "true" && (iStepNumber + 1 < this.steps.length);
	}

	async _showPopover(oDomTarget, bAtStart) {
		const tabs = Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"));
		this._groupedTabs = [];

		const iFromStep = bAtStart ? 0 : this.stepsInHeaderDOM.indexOf(oDomTarget);
		const iToStep = bAtStart ? this.stepsInHeaderDOM.indexOf(oDomTarget) : tabs.length - 1;

		for (let i = iFromStep; i <= iToStep; i++) {
			this._groupedTabs.push(tabs[i]);
		}

		const responsivePopover = await this._respPopover();
		responsivePopover.open(oDomTarget);
	}

	async _onGroupedTabClick(event) {
		if (this._isGroupAtStart(event.target)) {
			return this._showPopover(event.target, true);
		}

		if (this._isGroupAtEnd(event.target)) {
			return this._showPopover(event.target, false);
		}
	}

	_onOverflowStepButtonClick(event) {
		const tabs = Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"));
		const stepRefId = event.target.getAttribute("data-ui5-header-tab-ref-id");
		const stepToSelect = this.slottedSteps[stepRefId - 1];
		const selectedStep = this.selectedStep;
		const newlySelectedIndex = this.slottedSteps.indexOf(stepToSelect);

		this.switchSelectionFromOldToNewStep(selectedStep, stepToSelect, newlySelectedIndex, true);
		this._closeRespPopover();
		tabs[newlySelectedIndex].focus();
	}

	async _closeRespPopover() {
		const responsivePopover = await this._respPopover();
		responsivePopover && responsivePopover.close();
	}

	async _respPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(`.ui5-wizard-responsive-popover`);
	}

	/**
	 * Called upon <code>onScroll</code>.
	 * Selects the closest step, based on the user scroll position.
	 * @param {Integer} scrollPos the current scroll position
	 * @private
	 */
	changeSelectionByScroll(scrollPos) {
		const newlySelectedIndex = this.getClosestStepIndexByScrollPos(scrollPos);

		// Skip if already selected - stop.
		if (this.selectedStepIndex === newlySelectedIndex) {
			return;
		}

		// If the calculated index is in range,
		// change selection and fire "selection-change".
		if (newlySelectedIndex >= 0 && newlySelectedIndex <= this.stepsCount - 1) {
			const stepToSelect = this.slottedSteps[newlySelectedIndex];

			this.switchSelectionFromOldToNewStep(this.selectedStep, stepToSelect, newlySelectedIndex, false);
			this.selectionRequestedByScroll = true;
		}
	}

	/**
	 * Called upon <code>onSelectionChangeRequested</code>.
	 * Selects the external step (ui5-wizard-step),
	 * based on the clicked step in the header (ui5-wizard-tab).
	 * @param {HTMLElement} stepInHeader the step equivalent in the header
	 * @private
	 */
	changeSelectionByStepClick(stepInHeader) {
		const stepRefId = stepInHeader.getAttribute("data-ui5-content-ref-id");
		const selectedStep = this.selectedStep;
		const stepToSelect = this.getStepByRefId(stepRefId);
		const bExpanded = stepInHeader.getAttribute(EXPANDED_STEP) === "true";
		const newlySelectedIndex = this.slottedSteps.indexOf(stepToSelect);

		// If the currently selected (active) step is clicked,
		// just scroll to its starting point and stop.
		if (selectedStep === stepToSelect) {
			this.scrollToContentItem(this.selectedStepIndex);
			return;
		}

		if (bExpanded || (!bExpanded && (newlySelectedIndex === 0 || newlySelectedIndex === this.steps.length - 1))) {
			// Change selection and fire "selection-change".
			this.switchSelectionFromOldToNewStep(selectedStep, stepToSelect, newlySelectedIndex, true);
		}
	}

	getContentHeight() {
		let contentHeight = 0;

		this.stepsDOM.forEach(step => {
			contentHeight += step.getBoundingClientRect().height;
		});

		return contentHeight;
	}

	get stepsDOM() {
		return Array.from(this.shadowRoot.querySelectorAll(".ui5-wiz-content-item"));
	}

	get _stepsInHeader() {
		return this.getStepsInfo();
	}

	get _steps() {
		const lastEnabledStepIndex = this.getLastEnabledStepIndex();

		return this.steps.map((step, idx) => {
			step.stretch = idx === lastEnabledStepIndex;
			return step;
		});
	}

	get stepsCount() {
		return this.slottedSteps.length;
	}

	get selectedStep() {
		if (this.selectedStepsCount) {
			return this.selectedSteps[0];
		}

		return null;
	}

	get lastSelectedStep() {
		if (this.selectedStepsCount) {
			return this.selectedSteps[this.selectedStepsCount - 1];
		}

		return null;
	}

	get selectedSteps() {
		return this.slottedSteps.filter(step => step.selected);
	}

	get enabledSteps() {
		return this.slottedSteps.filter(step => !step.disabled);
	}

	get selectedStepsCount() {
		return this.selectedSteps.length;
	}

	get slottedSteps() {
		return this.getSlottedNodes("steps");
	}

	get contentDOM() {
		return this.shadowRoot.querySelector(`.ui5-wiz-content`);
	}

	get stepsInHeaderDOM() {
		return Array.from(this.shadowRoot.querySelectorAll("[ui5-wizard-tab]"));
	}

	get enabledStepsInHeaderDOM() {
		return this.stepsInHeaderDOM.filter(step => !step.disabled);
	}

	get phoneMode() {
		if (isPhone()) {
			return true;
		}

		return this.width <= Wizard.PHONE_BREAKPOINT;
	}

	get navAriaRoleDescription() {
		return this.i18nBundle.getText(WIZARD_NAV_ARIA_ROLE_DESCRIPTION);
	}

	get navStepDefaultHeading() {
		return this.i18nBundle.getText(WIZARD_NAV_STEP_DEFAULT_HEADING);
	}

	get ariaLabelText() {
		return this.ariaLabel || this.i18nBundle.getText(WIZARD_NAV_ARIA_ROLE_DESCRIPTION);
	}

	get effectiveStepSwitchThreshold() {
		if (this.stepSwitchThreshold < 0.5) {
			return 0.5;
		}

		if (this.stepSwitchThreshold > 1) {
			return 1;
		}

		return this.stepSwitchThreshold;
	}

	/**
	 * Returns an array of data objects, based on the user defined steps
	 * to later build the steps (tabs) within the header.
	 * @returns {Array<Object>}
	 * @private
	 */
	getStepsInfo() {
		const lastEnabledStepIndex = this.getLastEnabledStepIndex();
		const stepsCount = this.stepsCount;
		const selectedStepIndex = this.getSelectedStepIndex();
		let inintialZIndex = this.steps.length + 10;

		this._adjustHeaderOverflow();

		return this.steps.map((step, idx) => {
			const pos = idx + 1;

			// Hide separator if it's the last step and it's not a branching one
			const hideSeparator = (idx === stepsCount - 1) && !step.branching;

			// Calculate the step's aria-roledectioption: "1. heading" or "Step 1".
			const roleDescription = step.heading ? `${pos}. ${step.heading}` : `${this.navStepDefaultHeading} ${pos}`;
			const isAfterCurrent = (idx > selectedStepIndex);

			return {
				icon: step.icon,
				heading: step.heading,
				subheading: step.subheading,
				number: pos,
				selected: step.selected,
				disabled: step.disabled,
				hideSeparator,
				activeSeparator: (idx < lastEnabledStepIndex) && !step.disabled,
				branchingSeparator: step.branching,
				pos,
				size: stepsCount,
				roleDescription,
				ariaLabel: getEffectiveAriaLabelText(step),
				refStepId: step._id,
				tabIndex: this.selectedStepIndex === idx ? "0" : "-1",
				styles: `z-index: ${isAfterCurrent ? --inintialZIndex : 1}`,
			};
		});
	}

	/**
	 * Returns the index of the selected step.
	 * @returns {Integer}
	 * @private
	 */
	getSelectedStepIndex() {
		if (this.selectedStep) {
			return this.slottedSteps.indexOf(this.selectedStep);
		}
		return 0;
	}

	/**
	 * Returns the index of the last enabled step.
	 * @returns {Integer}
	 * @private
	 */
	getLastEnabledStepIndex() {
		let lastEnabledStepIndex = 0;

		this.slottedSteps.forEach((step, idx) => {
			if (!step.disabled) {
				lastEnabledStepIndex = idx;
			}
		});

		return lastEnabledStepIndex;
	}

	getStepByRefId(refId) {
		return this.slottedSteps.find(step => step._id === refId);
	}

	getStepWrapperByRefId(refId) {
		return this.shadowRoot.querySelector(`[data-ui5-content-item-ref-id=${refId}]`);
	}

	getStepWrapperByIdx(idx) {
		return this.getStepWrapperByRefId(this.steps[idx]._id);
	}

	/**
	 * Scrolls to the content of the selected step, used in <code>onAfterRendering</cod>.
	 * @private
	 */
	scrollToSelectedStep() {
		if (!this.selectionRequestedByScroll) {
			this.scrollToContentItem(this.selectedStepIndex);
		}
		this.selectionRequestedByScroll = false;
	}

	/**
	 * Scrolls to the content item within the <code>ui5-wizard</code> shadowDOM
	 * by given step index.
	 *
	 * @private
	 * @param {Integer} stepIndex the index of a step
	 */
	scrollToContentItem(stepIndex) {
		this.contentDOM.scrollTop = this.getClosestScrollPosByStepIndex(stepIndex);
	}

	/**
	 * Returns to closest scroll position for the given step index.
	 *
	 * @private
	 * @param {Integer} stepIndex the index of a step
	 */
	getClosestScrollPosByStepIndex(stepIndex) {
		if (stepIndex === 0) {
			return 0;
		}

		// It's possible to have [enabled - 0, disabled - 1, enabled - 2, disabled - 3] step definition and similar.
		// Consider selection of the third step at index 2, the wizard should scroll where the previous step ends,
		// but in this case the 2nd step is disabled, so we have to fallback to the first possible step.
		for (let closestStepIndex = stepIndex - 1; closestStepIndex >= 0; closestStepIndex--) {
			if (this.stepScrollOffsets[closestStepIndex] > 0) {
				return this.stepScrollOffsets[closestStepIndex];
			}
		}

		return 0;
	}

	/**
	 * Returns the closest step index by given scroll position.
	 * @private
	 * @param {Integer} scrollPos the scroll position
	 */
	getClosestStepIndexByScrollPos(scrollPos) {
		for (let closestStepIndex = 0; closestStepIndex <= this.stepScrollOffsets.length - 1; closestStepIndex++) {
			const stepScrollOffset = this.stepScrollOffsets[closestStepIndex];
			const step = this.getStepWrapperByIdx(closestStepIndex);
			const switchStepBoundary = step.offsetTop + (step.offsetHeight * this.effectiveStepSwitchThreshold);

			if (stepScrollOffset > 0 && scrollPos < stepScrollOffset) {
				if (scrollPos > switchStepBoundary) {
					return closestStepIndex + 1;
				}

				return closestStepIndex;
			}
		}

		return this.selectedStepIndex;
	}

	/**
	 * Switches the selection from the old step to the newly selected step.
	 *
	 * @param {HTMLElement} selectedStep the old step
	 * @param {HTMLElement} stepToSelect the step to be selected
	 * @param {Integer} stepToSelectIndex the index of the newly selected step
	 * @param {Boolean} changeWithClick the selection changed due to user click in the step navigation
	 * @private
	 */
	switchSelectionFromOldToNewStep(selectedStep, stepToSelect, stepToSelectIndex, changeWithClick) {
		if (selectedStep && stepToSelect) {
			selectedStep.selected = false;
			stepToSelect.selected = true;

			this.fireEvent("selection-change", {
				selectedStep: stepToSelect,
				previouslySelectedStep: selectedStep,
				changeWithClick,
			});

			this.selectedStepIndex = stepToSelectIndex;
		}
	}

	/**
	 * Sorter method for sorting an array in ascending order.
	 * @private
	 */
	sortAscending(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	}
}

Wizard.define();
