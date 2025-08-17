import { v as getI18nBundleData } from './Icons-85d4abff.js';

const KeyCodes = {
	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,
	SHIFT: 16,
	CONTROL: 17,
	ALT: 18,
	BREAK: 19,
	CAPS_LOCK: 20,
	ESCAPE: 27,
	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	ARROW_LEFT: 37,
	ARROW_UP: 38,
	ARROW_RIGHT: 39,
	ARROW_DOWN: 40,
	PRINT: 44,
	INSERT: 45,
	DELETE: 46,
	DIGIT_0: 48,
	DIGIT_1: 49,
	DIGIT_2: 50,
	DIGIT_3: 51,
	DIGIT_4: 52,
	DIGIT_5: 53,
	DIGIT_6: 54,
	DIGIT_7: 55,
	DIGIT_8: 56,
	DIGIT_9: 57,
	A: 65,
	B: 66,
	C: 67,
	D: 68,
	E: 69,
	F: 70,
	G: 71,
	H: 72,
	I: 73,
	J: 74,
	K: 75,
	L: 76,
	M: 77,
	N: 78,
	O: 79,
	P: 80,
	Q: 81,
	R: 82,
	S: 83,
	T: 84,
	U: 85,
	V: 86,
	W: 87,
	X: 88,
	Y: 89,
	Z: 90,
	WINDOWS: 91,
	CONTEXT_MENU: 93,
	TURN_OFF: 94,
	SLEEP: 95,
	NUMPAD_0: 96,
	NUMPAD_1: 97,
	NUMPAD_2: 98,
	NUMPAD_3: 99,
	NUMPAD_4: 100,
	NUMPAD_5: 101,
	NUMPAD_6: 102,
	NUMPAD_7: 103,
	NUMPAD_8: 104,
	NUMPAD_9: 105,
	NUMPAD_ASTERISK: 106,
	NUMPAD_PLUS: 107,
	NUMPAD_MINUS: 109,
	NUMPAD_COMMA: 110,
	NUMPAD_SLASH: 111,
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,
	NUM_LOCK: 144,
	SCROLL_LOCK: 145,
	OPEN_BRACKET: 186,
	PLUS: 187,
	COMMA: 188,
	SLASH: 189,
	DOT: 190,
	PIPE: 191,
	SEMICOLON: 192,
	MINUS: 219,
	GREAT_ACCENT: 220,
	EQUALS: 221,
	SINGLE_QUOTE: 222,
	BACKSLASH: 226,
};

const isEnter = event => (event.key ? event.key === "Enter" : event.keyCode === KeyCodes.ENTER) && !hasModifierKeys(event);

const isEnterShift = event => (event.key ? event.key === "Enter" : event.keyCode === KeyCodes.ENTER) && checkModifierKeys(event, false, false, true);

const isSpace = event => (event.key ? (event.key === "Spacebar" || event.key === " ") : event.keyCode === KeyCodes.SPACE) && !hasModifierKeys(event);

const isSpaceShift = event => (event.key ? (event.key === "Spacebar" || event.key === " ") : event.keyCode === KeyCodes.SPACE) && checkModifierKeys(event, false, false, true);

const isLeft = event => (event.key ? (event.key === "ArrowLeft" || event.key === "Left") : event.keyCode === KeyCodes.ARROW_LEFT) && !hasModifierKeys(event);

const isRight = event => (event.key ? (event.key === "ArrowRight" || event.key === "Right") : event.keyCode === KeyCodes.ARROW_RIGHT) && !hasModifierKeys(event);

const isUp = event => (event.key ? (event.key === "ArrowUp" || event.key === "Up") : event.keyCode === KeyCodes.ARROW_UP) && !hasModifierKeys(event);

const isDown = event => (event.key ? (event.key === "ArrowDown" || event.key === "Down") : event.keyCode === KeyCodes.ARROW_DOWN) && !hasModifierKeys(event);

const isLeftCtrl = event => (event.key ? (event.key === "ArrowLeft" || event.key === "Left") : event.keyCode === KeyCodes.ARROW_LEFT) && checkModifierKeys(event, true, false, false);

const isRightCtrl = event => (event.key ? (event.key === "ArrowRight" || event.key === "Right") : event.keyCode === KeyCodes.ARROW_RIGHT) && checkModifierKeys(event, true, false, false);

const isUpCtrl = event => (event.key ? (event.key === "ArrowUp" || event.key === "Up") : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, true, false, false);

const isDownCtrl = event => (event.key ? (event.key === "ArrowDown" || event.key === "Down") : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, true, false, false);

const isUpShift = event => (event.key ? (event.key === "ArrowUp" || event.key === "Up") : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, false, false, true);

const isDownShift = event => (event.key ? (event.key === "ArrowDown" || event.key === "Down") : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, false, false, true);

const isUpShiftCtrl = event => (event.key ? (event.key === "ArrowUp" || event.key === "Up") : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, true, false, true);

const isDownShiftCtrl = event => (event.key ? (event.key === "ArrowDown" || event.key === "Down") : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, true, false, true);

const isHome = event => (event.key ? event.key === "Home" : event.keyCode === KeyCodes.HOME) && !hasModifierKeys(event);

const isEnd = event => (event.key ? event.key === "End" : event.keyCode === KeyCodes.END) && !hasModifierKeys(event);

const isHomeCtrl = event => (event.key ? event.key === "Home" : event.keyCode === KeyCodes.HOME) && checkModifierKeys(event, true, false, false);

const isEndCtrl = event => (event.key ? event.key === "End" : event.keyCode === KeyCodes.END) && checkModifierKeys(event, true, false, false);

const isEscape = event => (event.key ? event.key === "Escape" || event.key === "Esc" : event.keyCode === KeyCodes.ESCAPE) && !hasModifierKeys(event);

const isTabNext = event => (event.key ? event.key === "Tab" : event.keyCode === KeyCodes.TAB) && !hasModifierKeys(event);

const isTabPrevious = event => (event.key ? event.key === "Tab" : event.keyCode === KeyCodes.TAB) && checkModifierKeys(event, /* Ctrl */ false, /* Alt */ false, /* Shift */ true);

const isBackSpace = event => (event.key ? event.key === "Backspace" : event.keyCode === KeyCodes.BACKSPACE) && !hasModifierKeys(event);

const isDelete = event => (event.key ? event.key === "Delete" : event.keyCode === KeyCodes.DELETE) && !hasModifierKeys(event);

const isPageUp = event => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && !hasModifierKeys(event);

const isPageDown = event => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && !hasModifierKeys(event);

const isPageUpShift = event => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && checkModifierKeys(event, false, false, true);

const isPageDownShift = event => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && checkModifierKeys(event, false, false, true);

const isPageUpShiftCtrl = event => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && checkModifierKeys(event, true, false, true);

const isPageDownShiftCtrl = event => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && checkModifierKeys(event, true, false, true);

const isPlus = event => (event.key ? event.key === "+" : event.keyCode === KeyCodes.PLUS) || (event.keyCode === KeyCodes.NUMPAD_PLUS && !hasModifierKeys(event));

const isMinus = event => (event.key ? event.key === "-" : event.keyCode === KeyCodes.MINUS) || (event.keyCode === KeyCodes.NUMPAD_MINUS && !hasModifierKeys(event));

const isShow = event => {
	if (event.key) {
		return isF4(event) || isShowByArrows(event);
	}

	return (event.keyCode === KeyCodes.F4 && !hasModifierKeys(event)) || (event.keyCode === KeyCodes.ARROW_DOWN && checkModifierKeys(event, /* Ctrl */ false, /* Alt */ true, /* Shift */ false));
};

const isF4 = event => {
	return event.key === "F4" && !hasModifierKeys(event);
};

const isF4Shift = event => (event.key ? event.key === "F4" : event.keyCode === KeyCodes.F4) && checkModifierKeys(event, false, false, true);

const isShowByArrows = event => {
	return ((event.key === "ArrowDown" || event.key === "Down") || (event.key === "ArrowUp" || event.key === "Up")) && checkModifierKeys(event, /* Ctrl */ false, /* Alt */ true, /* Shift */ false);
};

const hasModifierKeys = event => event.shiftKey || event.altKey || getCtrlKey(event);

const getCtrlKey = event => !!(event.metaKey || event.ctrlKey); // double negation doesn't have effect on boolean but ensures null and undefined are equivalent to false.

const checkModifierKeys = (event, bCtrlKey, bAltKey, bShiftKey) => event.shiftKey === bShiftKey && event.altKey === bAltKey && getCtrlKey(event) === bCtrlKey;

const ua = navigator.userAgent;
const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
const ie = /(msie|trident)/i.test(ua);
const chrome = !ie && /(Chrome|CriOS)/.test(ua);
const safari = !ie && !chrome && /(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(ua);
const webkit = !ie && /webkit/.test(ua);
const windows = navigator.platform.indexOf("Win") !== -1;
const android = !windows && /Android/.test(ua);
const androidPhone = android && /(?=android)(?=.*mobile)/i.test(ua);
const ipad = /ipad/i.test(ua);

let windowsVersion;
let webkitVersion;
let tablet;

const isWindows8OrAbove = () => {
	if (!windows) {
		return false;
	}

	if (windowsVersion === undefined) {
		const matches = ua.match(/Windows NT (\d+).(\d)/);
		windowsVersion = matches ? parseFloat(matches[1]) : 0;
	}

	return windowsVersion >= 8;
};

const isWebkit537OrAbove = () => {
	if (!webkit) {
		return false;
	}

	if (webkitVersion === undefined) {
		const matches = ua.match(/(webkit)[ /]([\w.]+)/);
		webkitVersion = matches ? parseFloat(matches[1]) : 0;
	}

	return webkitVersion >= 537.10;
};

const detectTablet = () => {
	if (tablet !== undefined) {
		return;
	}

	if (ipad) {
		tablet = true;
		return;
	}

	if (touch) {
		if (isWindows8OrAbove()) {
			tablet = true;
			return;
		}

		if (chrome && android) {
			tablet = !/Mobile Safari\/[.0-9]+/.test(ua);
			return;
		}

		let densityFactor = window.devicePixelRatio ? window.devicePixelRatio : 1; // may be undefined in Windows Phone devices
		if (android && isWebkit537OrAbove()) {
			densityFactor = 1;
		}

		tablet = (Math.min(window.screen.width / densityFactor, window.screen.height / densityFactor) >= 600);
		return;
	}

	tablet = (ie && ua.indexOf("Touch") !== -1) || (android && !androidPhone);
};

const supportsTouch = () => touch;
const isIE = () => ie;
const isSafari = () => safari;

const isTablet = () => {
	detectTablet();
	return (touch || isWindows8OrAbove()) && tablet;
};

const isPhone = () => {
	detectTablet();
	return touch && !tablet;
};

const isDesktop = () => {
	return (!isTablet() && !isPhone()) || isWindows8OrAbove();
};

const findNodeOwner = node => {
	if (!(node instanceof HTMLElement)) {
		throw new Error("Argument node should be of type HTMLElement");
	}

	const ownerTypes = [HTMLHtmlElement, HTMLIFrameElement];
	let currentShadowRootFlag = true;
	let currentCustomElementFlag = true;

	while (node) {
		if (node.toString() === "[object ShadowRoot]") {
			// Web Component
			// or the shadow root of web component with attached shadow root
			if (currentShadowRootFlag) {
				currentShadowRootFlag = false;
			}
			if (!currentCustomElementFlag && !currentShadowRootFlag) {
				return node;
			}
		} else if (node.tagName && node.tagName.indexOf("-") > -1) {
			if (currentCustomElementFlag) {
				currentCustomElementFlag = false;
			} else {
				return node;
			}
		} else if (ownerTypes.indexOf(node.constructor) > -1) {
			// Document or Iframe reached
			return node;
		}

		node = node.parentNode || node.host;
	}
};

const getEffectiveAriaLabelText = el => {
	if (!el.ariaLabelledby) {
		if (el.ariaLabel) {
			return el.ariaLabel;
		}

		return undefined;
	}

	return getAriaLabelledByTexts(el);
};

/**
 *
 * @param {HTMLElement} el Defines the HTMLElement, for which you need to get all related texts
 * @param {HTMLElement} ownerDocument (Optional) Defines the HTMLElement(might document or custom element) where the you want to search for the texts.
 * @param {String} readyIds (Optional) Defines a string of elements ids. The text of these elements will be returned. If used you should provide either el or ownerDocument
 */
const getAriaLabelledByTexts = (el, ownerDocument, readyIds = "") => {
	const ids = (readyIds && readyIds.split(" ")) || el.ariaLabelledby.split(" ");
	const owner = ownerDocument || findNodeOwner(el);
	let result = "";

	ids.forEach((elementId, index) => {
		const element = owner.querySelector(`[id='${elementId}']`);
		result += `${element ? element.textContent : ""}`;

		if (index < ids.length - 1) {
			result += " ";
		}
	});

	return result;
};

const messageFormatRegEX = /('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g;

const formatMessage = (text, values) => {
	values = values || [];

	return text.replace(messageFormatRegEX, ($0, $1, $2, $3, offset) => {
		if ($1) {
			return '\''; /* eslint-disable-line */
		}

		if ($2) {
			return $2.replace(/''/g, '\''); /* eslint-disable-line */
		}

		if ($3) {
			return String(values[parseInt($3)]);
		}

		throw new Error(`[i18n]: pattern syntax error at pos ${offset}`);
	});
};

const I18nBundleInstances = new Map();

/**
 * @class
 * @public
 */
class I18nBundle {
	constructor(packageName) {
		this.packageName = packageName;
	}

	/**
	 * Returns a text in the currently loaded language
	 *
	 * @param {Object|String} textObj key/defaultText pair or just the key
	 * @param params Values for the placeholders
	 * @returns {*}
	 */
	getText(textObj, ...params) {
		if (typeof textObj === "string") {
			textObj = { key: textObj, defaultText: textObj };
		}

		if (!textObj || !textObj.key) {
			return "";
		}

		const bundle = getI18nBundleData(this.packageName);
		if (bundle && !bundle[textObj.key]) {
			console.warn(`Key ${textObj.key} not found in the i18n bundle, the default text will be used`); // eslint-disable-line
		}
		const messageText = bundle && bundle[textObj.key] ? bundle[textObj.key] : (textObj.defaultText || textObj.key);

		return formatMessage(messageText, params);
	}
}

const getI18nBundle = packageName => {
	if (I18nBundleInstances.has(packageName)) {
		return I18nBundleInstances.get(packageName);
	}

	const i18nBundle = new I18nBundle(packageName);
	I18nBundleInstances.set(packageName, i18nBundle);
	return i18nBundle;
};

const ARIA_LABEL_CARD_CONTENT = {key: "ARIA_LABEL_CARD_CONTENT", defaultText: "Card Content"};const ARIA_ROLEDESCRIPTION_CARD = {key: "ARIA_ROLEDESCRIPTION_CARD", defaultText: "Card"};const ARIA_ROLEDESCRIPTION_CARD_HEADER = {key: "ARIA_ROLEDESCRIPTION_CARD_HEADER", defaultText: "Card Header"};const ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER = {key: "ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER", defaultText: "Interactive Card Header"};const AVATAR_TOOLTIP = {key: "AVATAR_TOOLTIP", defaultText: "Avatar"};const BADGE_DESCRIPTION = {key: "BADGE_DESCRIPTION", defaultText: "Badge"};const BUSY_INDICATOR_TITLE = {key: "BUSY_INDICATOR_TITLE", defaultText: "Please wait"};const BUTTON_ARIA_TYPE_ACCEPT = {key: "BUTTON_ARIA_TYPE_ACCEPT", defaultText: "Positive Action"};const BUTTON_ARIA_TYPE_REJECT = {key: "BUTTON_ARIA_TYPE_REJECT", defaultText: "Negative Action"};const BUTTON_ARIA_TYPE_EMPHASIZED = {key: "BUTTON_ARIA_TYPE_EMPHASIZED", defaultText: "Emphasized"};const CAROUSEL_OF_TEXT = {key: "CAROUSEL_OF_TEXT", defaultText: "of"};const CAROUSEL_DOT_TEXT = {key: "CAROUSEL_DOT_TEXT", defaultText: "Item {0} of {1} displayed"};const CAROUSEL_PREVIOUS_ARROW_TEXT = {key: "CAROUSEL_PREVIOUS_ARROW_TEXT", defaultText: "Previous Page"};const CAROUSEL_NEXT_ARROW_TEXT = {key: "CAROUSEL_NEXT_ARROW_TEXT", defaultText: "Next Page"};const COLORPALETTE_CONTAINER_LABEL = {key: "COLORPALETTE_CONTAINER_LABEL", defaultText: "Color Palette - Predefined Colors"};const COLORPALETTE_COLOR_LABEL = {key: "COLORPALETTE_COLOR_LABEL", defaultText: "Color"};const COLOR_PALETTE_DIALOG_CANCEL_BUTTON = {key: "COLOR_PALETTE_DIALOG_CANCEL_BUTTON", defaultText: "Cancel"};const COLOR_PALETTE_DIALOG_OK_BUTTON = {key: "COLOR_PALETTE_DIALOG_OK_BUTTON", defaultText: "OK"};const COLOR_PALETTE_DIALOG_TITLE = {key: "COLOR_PALETTE_DIALOG_TITLE", defaultText: "Change Color"};const COLOR_PALETTE_MORE_COLORS_TEXT = {key: "COLOR_PALETTE_MORE_COLORS_TEXT", defaultText: "More Colors..."};const DATEPICKER_OPEN_ICON_TITLE = {key: "DATEPICKER_OPEN_ICON_TITLE", defaultText: "Open Picker"};const DATEPICKER_DATE_DESCRIPTION = {key: "DATEPICKER_DATE_DESCRIPTION", defaultText: "Date Input"};const DELETE = {key: "DELETE", defaultText: "Delete"};const FILEUPLOAD_BROWSE = {key: "FILEUPLOAD_BROWSE", defaultText: "Browse..."};const FILEUPLOADER_TITLE = {key: "FILEUPLOADER_TITLE", defaultText: "Upload File"};const GROUP_HEADER_TEXT = {key: "GROUP_HEADER_TEXT", defaultText: "Group Header"};const SELECT_OPTIONS = {key: "SELECT_OPTIONS", defaultText: "Select Options"};const INPUT_SUGGESTIONS = {key: "INPUT_SUGGESTIONS", defaultText: "Suggestions Available"};const INPUT_SUGGESTIONS_TITLE = {key: "INPUT_SUGGESTIONS_TITLE", defaultText: "Select"};const INPUT_SUGGESTIONS_ONE_HIT = {key: "INPUT_SUGGESTIONS_ONE_HIT", defaultText: "1 result available"};const INPUT_SUGGESTIONS_MORE_HITS = {key: "INPUT_SUGGESTIONS_MORE_HITS", defaultText: "{0} results are available"};const INPUT_SUGGESTIONS_NO_HIT = {key: "INPUT_SUGGESTIONS_NO_HIT", defaultText: "No results"};const LINK_SUBTLE = {key: "LINK_SUBTLE", defaultText: "Subtle"};const LINK_EMPHASIZED = {key: "LINK_EMPHASIZED", defaultText: "Emphasized"};const LIST_ITEM_POSITION = {key: "LIST_ITEM_POSITION", defaultText: "List item {0} of {1}"};const LIST_ITEM_SELECTED = {key: "LIST_ITEM_SELECTED", defaultText: "Selected"};const ARIA_LABEL_LIST_ITEM_CHECKBOX = {key: "ARIA_LABEL_LIST_ITEM_CHECKBOX", defaultText: "Multiple Selection Mode"};const MESSAGE_STRIP_CLOSE_BUTTON = {key: "MESSAGE_STRIP_CLOSE_BUTTON", defaultText: "Message Strip Close"};const MULTICOMBOBOX_DIALOG_OK_BUTTON = {key: "MULTICOMBOBOX_DIALOG_OK_BUTTON", defaultText: "OK"};const MULTIINPUT_ROLEDESCRIPTION_TEXT = {key: "MULTIINPUT_ROLEDESCRIPTION_TEXT", defaultText: "Multi Value Input"};const MULTIINPUT_SHOW_MORE_TOKENS = {key: "MULTIINPUT_SHOW_MORE_TOKENS", defaultText: "{0} More"};const PANEL_ICON = {key: "PANEL_ICON", defaultText: "Expand/Collapse"};const RANGE_SLIDER_ARIA_DESCRIPTION = {key: "RANGE_SLIDER_ARIA_DESCRIPTION", defaultText: "Range"};const RANGE_SLIDER_START_HANDLE_DESCRIPTION = {key: "RANGE_SLIDER_START_HANDLE_DESCRIPTION", defaultText: "Left handle"};const RANGE_SLIDER_END_HANDLE_DESCRIPTION = {key: "RANGE_SLIDER_END_HANDLE_DESCRIPTION", defaultText: "Right handle"};const RATING_INDICATOR_TOOLTIP_TEXT = {key: "RATING_INDICATOR_TOOLTIP_TEXT", defaultText: "Rating"};const RATING_INDICATOR_TEXT = {key: "RATING_INDICATOR_TEXT", defaultText: "Rating Indicator"};const RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON = {key: "RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON", defaultText: "Decline"};const SEGMENTEDBUTTON_ARIA_DESCRIPTION = {key: "SEGMENTEDBUTTON_ARIA_DESCRIPTION", defaultText: "Segmented Button"};const SLIDER_ARIA_DESCRIPTION = {key: "SLIDER_ARIA_DESCRIPTION", defaultText: "Slider handle"};const SWITCH_ON = {key: "SWITCH_ON", defaultText: "On"};const SWITCH_OFF = {key: "SWITCH_OFF", defaultText: "Off"};const LOAD_MORE_TEXT = {key: "LOAD_MORE_TEXT", defaultText: "More"};const TABCONTAINER_NEXT_ICON_ACC_NAME = {key: "TABCONTAINER_NEXT_ICON_ACC_NAME", defaultText: "Next"};const TABCONTAINER_PREVIOUS_ICON_ACC_NAME = {key: "TABCONTAINER_PREVIOUS_ICON_ACC_NAME", defaultText: "Previous"};const TABCONTAINER_OVERFLOW_MENU_TITLE = {key: "TABCONTAINER_OVERFLOW_MENU_TITLE", defaultText: "Overflow Menu"};const TEXTAREA_CHARACTERS_LEFT = {key: "TEXTAREA_CHARACTERS_LEFT", defaultText: "{0} characters remaining"};const TEXTAREA_CHARACTERS_EXCEEDED = {key: "TEXTAREA_CHARACTERS_EXCEEDED", defaultText: "{0} characters over limit"};const TIMEPICKER_HOURS_LABEL = {key: "TIMEPICKER_HOURS_LABEL", defaultText: "Hours"};const TIMEPICKER_MINUTES_LABEL = {key: "TIMEPICKER_MINUTES_LABEL", defaultText: "Minutes"};const TIMEPICKER_SECONDS_LABEL = {key: "TIMEPICKER_SECONDS_LABEL", defaultText: "Seconds"};const TIMEPICKER_PERIODS_LABEL = {key: "TIMEPICKER_PERIODS_LABEL", defaultText: "AM/PM"};const TIMEPICKER_SUBMIT_BUTTON = {key: "TIMEPICKER_SUBMIT_BUTTON", defaultText: "OK"};const TIMEPICKER_CANCEL_BUTTON = {key: "TIMEPICKER_CANCEL_BUTTON", defaultText: "Cancel"};const DATETIME_PICKER_DATE_BUTTON = {key: "DATETIME_PICKER_DATE_BUTTON", defaultText: "Date"};const DATETIME_PICKER_TIME_BUTTON = {key: "DATETIME_PICKER_TIME_BUTTON", defaultText: "Time"};const TOKEN_ARIA_DELETABLE = {key: "TOKEN_ARIA_DELETABLE", defaultText: "Deletable"};const TOKENIZER_ARIA_CONTAIN_TOKEN = {key: "TOKENIZER_ARIA_CONTAIN_TOKEN", defaultText: "No Tokens"};const TOKENIZER_ARIA_CONTAIN_ONE_TOKEN = {key: "TOKENIZER_ARIA_CONTAIN_ONE_TOKEN", defaultText: "Contains 1 token"};const TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS = {key: "TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS", defaultText: "Contains {0} tokens"};const TOKENIZER_ARIA_LABEL = {key: "TOKENIZER_ARIA_LABEL", defaultText: "Tokenizer"};const TOKENIZER_POPOVER_REMOVE = {key: "TOKENIZER_POPOVER_REMOVE", defaultText: "Remove"};const TREE_ITEM_ARIA_LABEL = {key: "TREE_ITEM_ARIA_LABEL", defaultText: "Tree Item"};const TREE_ITEM_EXPAND_NODE = {key: "TREE_ITEM_EXPAND_NODE", defaultText: "Expand Node"};const TREE_ITEM_COLLAPSE_NODE = {key: "TREE_ITEM_COLLAPSE_NODE", defaultText: "Collapse Node"};const VALUE_STATE_ERROR = {key: "VALUE_STATE_ERROR", defaultText: "Invalid entry"};const VALUE_STATE_WARNING = {key: "VALUE_STATE_WARNING", defaultText: "Warning issued"};const VALUE_STATE_INFORMATION = {key: "VALUE_STATE_INFORMATION", defaultText: "Informative entry"};const VALUE_STATE_SUCCESS = {key: "VALUE_STATE_SUCCESS", defaultText: "Entry successfully validated"};const CALENDAR_HEADER_NEXT_BUTTON = {key: "CALENDAR_HEADER_NEXT_BUTTON", defaultText: "Next"};const CALENDAR_HEADER_PREVIOUS_BUTTON = {key: "CALENDAR_HEADER_PREVIOUS_BUTTON", defaultText: "Previous"};const DAY_PICKER_WEEK_NUMBER_TEXT = {key: "DAY_PICKER_WEEK_NUMBER_TEXT", defaultText: "Week Number"};const DAY_PICKER_NON_WORKING_DAY = {key: "DAY_PICKER_NON_WORKING_DAY", defaultText: "Non-Working Day"};const DAY_PICKER_TODAY = {key: "DAY_PICKER_TODAY", defaultText: "Today"};const STEPINPUT_DEC_ICON_TITLE = {key: "STEPINPUT_DEC_ICON_TITLE", defaultText: "Decrease"};const STEPINPUT_INC_ICON_TITLE = {key: "STEPINPUT_INC_ICON_TITLE", defaultText: "Increase"};

export { CALENDAR_HEADER_PREVIOUS_BUTTON as $, ARIA_LABEL_LIST_ITEM_CHECKBOX as A, BUSY_INDICATOR_TITLE as B, LIST_ITEM_SELECTED as C, DELETE as D, isSafari as E, VALUE_STATE_SUCCESS as F, GROUP_HEADER_TEXT as G, VALUE_STATE_INFORMATION as H, INPUT_SUGGESTIONS_TITLE as I, INPUT_SUGGESTIONS as J, INPUT_SUGGESTIONS_MORE_HITS as K, LOAD_MORE_TEXT as L, MESSAGE_STRIP_CLOSE_BUTTON as M, INPUT_SUGGESTIONS_ONE_HIT as N, INPUT_SUGGESTIONS_NO_HIT as O, PANEL_ICON as P, isDelete as Q, RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON as R, supportsTouch as S, TOKEN_ARIA_DELETABLE as T, MULTIINPUT_SHOW_MORE_TOKENS as U, VALUE_STATE_ERROR as V, TOKENIZER_ARIA_LABEL as W, TOKENIZER_POPOVER_REMOVE as X, TOKENIZER_ARIA_CONTAIN_TOKEN as Y, TOKENIZER_ARIA_CONTAIN_ONE_TOKEN as Z, TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS as _, getEffectiveAriaLabelText as a, CALENDAR_HEADER_NEXT_BUTTON as a0, DAY_PICKER_NON_WORKING_DAY as a1, DAY_PICKER_TODAY as a2, DAY_PICKER_WEEK_NUMBER_TEXT as a3, isEnterShift as a4, isSpaceShift as a5, isPageUp as a6, isPageDown as a7, isPageUpShift as a8, isPageDownShift as a9, isPageUpShiftCtrl as aa, isPageDownShiftCtrl as ab, isHomeCtrl as ac, isEndCtrl as ad, isF4 as ae, isF4Shift as af, DATEPICKER_OPEN_ICON_TITLE as ag, DATEPICKER_DATE_DESCRIPTION as ah, SELECT_OPTIONS as ai, MULTICOMBOBOX_DIALOG_OK_BUTTON as aj, FILEUPLOAD_BROWSE as ak, FILEUPLOADER_TITLE as al, SWITCH_ON as am, SWITCH_OFF as an, isTabNext as b, isSpace as c, isEnter as d, isTabPrevious as e, isDown as f, getI18nBundle as g, isRight as h, isIE as i, isUp as j, isLeft as k, VALUE_STATE_WARNING as l, isDesktop as m, AVATAR_TOOLTIP as n, isEscape as o, isPhone as p, isHome as q, isEnd as r, isTablet as s, BUTTON_ARIA_TYPE_ACCEPT as t, BUTTON_ARIA_TYPE_REJECT as u, BUTTON_ARIA_TYPE_EMPHASIZED as v, isBackSpace as w, isShow as x, MULTIINPUT_ROLEDESCRIPTION_TEXT as y, LIST_ITEM_POSITION as z };
