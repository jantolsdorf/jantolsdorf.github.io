import { s as scopedHtml, i as ifDefined, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender } from './Icons-85d4abff.js';
import { T as TitleLevel } from './TitleLevel-a10fe215.js';

const block0 = (context) => { return scopedHtml`${ context.h1 ? block1(context) : undefined }${ context.h2 ? block2(context) : undefined }${ context.h3 ? block3(context) : undefined }${ context.h4 ? block4(context) : undefined }${ context.h5 ? block5(context) : undefined }${ context.h6 ? block6(context) : undefined }`; };
const block1 = (context) => { return scopedHtml`<h1 class="ui5-title-root"><span id="${ifDefined(context._id)}-inner"><slot></slot></span></h1>`; };
const block2 = (context) => { return scopedHtml`<h2 class="ui5-title-root"><span id="${ifDefined(context._id)}-inner"><slot></slot></span></h2>`; };
const block3 = (context) => { return scopedHtml`<h3 class="ui5-title-root"><span id="${ifDefined(context._id)}-inner"><slot></slot></span></h3>`; };
const block4 = (context) => { return scopedHtml`<h4 class="ui5-title-root"><span id="${ifDefined(context._id)}-inner"><slot></slot></span></h4>`; };
const block5 = (context) => { return scopedHtml`<h5 class="ui5-title-root"><span id="${ifDefined(context._id)}-inner"><slot></slot></span></h5>`; };
const block6 = (context) => { return scopedHtml`<h6 class="ui5-title-root"><span id="${ifDefined(context._id)}-inner"><slot></slot></span></h6>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const titleCss = ":host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--ui5_title_level_2Size);font-family:\"72override\",var(--sapFontFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host([wrap]) .ui5-title-root{white-space:pre-line}:host([level=H1]){font-size:var(--ui5_title_level_1Size)}:host([level=H2]){font-size:var(--ui5_title_level_2Size)}:host([level=H3]){font-size:var(--ui5_title_level_3Size)}:host([level=H4]){font-size:var(--ui5_title_level_4Size)}:host([level=H5]){font-size:var(--ui5_title_level_5Size)}:host([level=H6]){font-size:var(--ui5_title_level_6Size)}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-title",
	properties: /** @lends sap.ui.webcomponents.main.Title.prototype */ {

		/**
		 * Defines whether the <code>ui5-title</code> would wrap.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		*/
		wrap: {
			type: Boolean,
		},

		/**
		 * Defines the <code>ui5-title</code> level.
		 * Available options are: <code>"H6"</code> to <code>"H1"</code>.
		 *
		 * @type {TitleLevel}
		 * @defaultvalue "H2"
		 * @public
		*/
		level: {
			type: TitleLevel,
			defaultValue: TitleLevel.H2,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.Title.prototype */ {
		/**
		 * Defines the text of the <code>ui5-title</code>.
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
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-title</code> component is used to display titles inside a page.
 * It is a simple, large-sized text with explicit header/title semantics.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Title";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Title
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-title
 * @public
 */
class Title extends UI5Element {
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
		return titleCss;
	}

	get normalizedLevel() {
		return this.level.toLowerCase();
	}

	get h1() {
		return this.normalizedLevel === "h1";
	}

	get h2() {
		return this.normalizedLevel === "h2";
	}

	get h3() {
		return this.normalizedLevel === "h3";
	}

	get h4() {
		return this.normalizedLevel === "h4";
	}

	get h5() {
		return this.normalizedLevel === "h5";
	}

	get h6() {
		return this.normalizedLevel === "h6";
	}
}

Title.define();

export { Title as T };
