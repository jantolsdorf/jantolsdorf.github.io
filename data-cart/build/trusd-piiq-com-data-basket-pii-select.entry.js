import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import { r as registerLocaleDataLoader } from './DatePicker-7ba473c2.js';
import { r as registerThemePropertiesLoader, q as registerI18nLoader, s as scopedHtml, h as classMap, i as ifDefined, b as setTags, c as setSuffix, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, f as fetchI18nBundle } from './Icons-85d4abff.js';
import './Assets-3df9fab1.js';
import './MultiComboBox-28b17a8b.js';
import './Popover-0d784de7.js';
import { g as getI18nBundle, c as isSpace, d as isEnter, m as isDesktop, am as SWITCH_ON, an as SWITCH_OFF } from './i18n-defaults-dca87248.js';
import './StandardListItem-6305d5b8.js';
import './decline-a03835ab.js';
import { I as Icon } from './Button-7dc82d4c.js';
import { l as language } from './de-DE-5564f65b.js';
import { s as state } from './store-9032fc40.js';
import { g as getParentDataCategories, j as getUniqueSetOfCategoriesOfDataFromProcessingRecord, f as findProcessingRecordEntryByID } from './utils-8ebcd8ca.js';
import { v as v4 } from './index-912d1a21.js';
import './ValueState-a7516d8f.js';
import './ResponsivePopover-cdfbc391.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './slim-arrow-right-08785783.js';
import './Input-0ee3a2d0.js';
import './Tokenizer-d8a8b2e5.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './BusyIndicator-60b0b9ee.js';
import './index-de766dcc.js';

const availableLocales = ["ar","ar_EG","ar_SA","bg","ca","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"];

const importCldrJson = async (localeId) => {
	switch (localeId) {
		case "ar": return (await import('./ar-7c535936.js')).default;
		case "ar_EG": return (await import('./ar_EG-0a4fa5a6.js')).default;
		case "ar_SA": return (await import('./ar_SA-cafcde13.js')).default;
		case "bg": return (await import('./bg-cfc0455d.js')).default;
		case "ca": return (await import('./ca-e797c056.js')).default;
		case "cs": return (await import('./cs-821d9e95.js')).default;
		case "da": return (await import('./da-d18382c4.js')).default;
		case "de": return (await import('./de-abc5c5e9.js')).default;
		case "de_AT": return (await import('./de_AT-3cd2b96d.js')).default;
		case "de_CH": return (await import('./de_CH-4233c3f1.js')).default;
		case "el": return (await import('./el-9e602f49.js')).default;
		case "el_CY": return (await import('./el_CY-d824970d.js')).default;
		case "en": return (await import('./en-1eb9c462.js')).default;
		case "en_AU": return (await import('./en_AU-58ef607b.js')).default;
		case "en_GB": return (await import('./en_GB-3d92232a.js')).default;
		case "en_HK": return (await import('./en_HK-f78dcf63.js')).default;
		case "en_IE": return (await import('./en_IE-bb6bbc4f.js')).default;
		case "en_IN": return (await import('./en_IN-78627f73.js')).default;
		case "en_NZ": return (await import('./en_NZ-dec6dd62.js')).default;
		case "en_PG": return (await import('./en_PG-07f60fe8.js')).default;
		case "en_SG": return (await import('./en_SG-1c81df7f.js')).default;
		case "en_ZA": return (await import('./en_ZA-8f511efd.js')).default;
		case "es": return (await import('./es-a75ec453.js')).default;
		case "es_AR": return (await import('./es_AR-a5e54b65.js')).default;
		case "es_BO": return (await import('./es_BO-48760f0a.js')).default;
		case "es_CL": return (await import('./es_CL-601ee3f5.js')).default;
		case "es_CO": return (await import('./es_CO-ad568b25.js')).default;
		case "es_MX": return (await import('./es_MX-fe783458.js')).default;
		case "es_PE": return (await import('./es_PE-1268ae09.js')).default;
		case "es_UY": return (await import('./es_UY-29d126e2.js')).default;
		case "es_VE": return (await import('./es_VE-1a7c00e6.js')).default;
		case "et": return (await import('./et-823707a6.js')).default;
		case "fa": return (await import('./fa-dbca30e5.js')).default;
		case "fi": return (await import('./fi-27b43d21.js')).default;
		case "fr": return (await import('./fr-ee41acca.js')).default;
		case "fr_BE": return (await import('./fr_BE-f19a1ed7.js')).default;
		case "fr_CA": return (await import('./fr_CA-89c3c1ea.js')).default;
		case "fr_CH": return (await import('./fr_CH-9c1daf93.js')).default;
		case "fr_LU": return (await import('./fr_LU-3c0ffe2f.js')).default;
		case "he": return (await import('./he-7ebf6301.js')).default;
		case "hi": return (await import('./hi-9e02c7bc.js')).default;
		case "hr": return (await import('./hr-f31567f7.js')).default;
		case "hu": return (await import('./hu-bfd49d74.js')).default;
		case "id": return (await import('./id-b2c823d4.js')).default;
		case "it": return (await import('./it-a105d0da.js')).default;
		case "it_CH": return (await import('./it_CH-233d65a2.js')).default;
		case "ja": return (await import('./ja-f5d1a0a0.js')).default;
		case "kk": return (await import('./kk-6ca13336.js')).default;
		case "ko": return (await import('./ko-ad34081b.js')).default;
		case "lt": return (await import('./lt-ead0cdef.js')).default;
		case "lv": return (await import('./lv-7a0fd216.js')).default;
		case "ms": return (await import('./ms-38e37580.js')).default;
		case "nb": return (await import('./nb-50d0c090.js')).default;
		case "nl": return (await import('./nl-a7e5e59d.js')).default;
		case "nl_BE": return (await import('./nl_BE-318330b3.js')).default;
		case "pl": return (await import('./pl-5b1e167e.js')).default;
		case "pt": return (await import('./pt-080e02fc.js')).default;
		case "pt_PT": return (await import('./pt_PT-090a7b45.js')).default;
		case "ro": return (await import('./ro-b4825252.js')).default;
		case "ru": return (await import('./ru-0dd59259.js')).default;
		case "ru_UA": return (await import('./ru_UA-4b46c5d9.js')).default;
		case "sk": return (await import('./sk-a8586396.js')).default;
		case "sl": return (await import('./sl-af759b24.js')).default;
		case "sr": return (await import('./sr-90399c32.js')).default;
		case "sv": return (await import('./sv-7eeef14a.js')).default;
		case "th": return (await import('./th-cf6fffac.js')).default;
		case "tr": return (await import('./tr-a5720ba7.js')).default;
		case "uk": return (await import('./uk-ea616eaa.js')).default;
		case "vi": return (await import('./vi-74cf4c22.js')).default;
		case "zh_CN": return (await import('./zh_CN-39b75f18.js')).default;
		case "zh_HK": return (await import('./zh_HK-5aa22cd7.js')).default;
		case "zh_SG": return (await import('./zh_SG-8efb7871.js')).default;
		case "zh_TW": return (await import('./zh_TW-88e65c8a.js')).default;
		default: throw "unknown locale"
	}
};

const importAndCheck$1 = async (localeId) => {
	const data = await importCldrJson(localeId);
	if (typeof data === "string" && data.endsWith(".json")) {
        throw new Error(`[LocaleData] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
	}
	return data;
};

availableLocales.forEach(localeId => registerLocaleDataLoader(localeId, importAndCheck$1));

// Currently the base package provides CLDR assets only

const loadThemeProperties$1 = async (themeName) => {
	switch (themeName) {
		case "sap_belize": return (await import('./parameters-bundle.css-237dbc69.js')).default;
		case "sap_belize_hcb": return (await import('./parameters-bundle.css-b47abeb1.js')).default;
		case "sap_belize_hcw": return (await import('./parameters-bundle.css-acc9fa8b.js')).default;
		case "sap_fiori_3": return (await import('./parameters-bundle.css-cc772b42.js')).default;
		case "sap_fiori_3_dark": return (await import('./parameters-bundle.css-95cf0de8.js')).default;
		case "sap_fiori_3_hcb": return (await import('./parameters-bundle.css-e268cf07.js')).default;
		case "sap_fiori_3_hcw": return (await import('./parameters-bundle.css-fc76d7db.js')).default;
		default: throw "unknown theme"
	}
};

const loadAndCheck$1 = async (themeName) => {
	const data = await loadThemeProperties$1(themeName);
	if (typeof data === "string" && data.endsWith(".json")) {
		throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
	}
	return data;
};

["sap_belize", "sap_belize_hcb", "sap_belize_hcw", "sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw"]
  .forEach(themeName => registerThemePropertiesLoader("@ui5/webcomponents-theme-base", themeName, loadAndCheck$1));

// The theme-base package provides theming assets only

const loadThemeProperties = async (themeName) => {
	switch (themeName) {
		case "sap_belize": return (await import('./parameters-bundle.css-166edf37.js')).default;
		case "sap_belize_hcb": return (await import('./parameters-bundle.css-5734e55e.js')).default;
		case "sap_belize_hcw": return (await import('./parameters-bundle.css-b144c453.js')).default;
		case "sap_fiori_3": return (await import('./parameters-bundle.css-8957c6dc.js')).default;
		case "sap_fiori_3_dark": return (await import('./parameters-bundle.css-7d5b0dc9.js')).default;
		case "sap_fiori_3_hcb": return (await import('./parameters-bundle.css-c23f9ef3.js')).default;
		case "sap_fiori_3_hcw": return (await import('./parameters-bundle.css-23115a47.js')).default;
		default: throw "unknown theme"
	}
};

const loadAndCheck = async (themeName) => {
	const data = await loadThemeProperties(themeName);
	if (typeof data === "string" && data.endsWith(".json")) {
		throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
	}
	return data;
};

["sap_belize", "sap_belize_hcb", "sap_belize_hcw", "sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw"]
  .forEach(themeName => registerThemePropertiesLoader("@ui5/webcomponents", themeName, loadAndCheck));

const importMessageBundle = async (localeId) => {
		switch (localeId) {
			case "ar": return (await import('./messagebundle_ar-fea46275.js')).default;
		case "bg": return (await import('./messagebundle_bg-b3450bf1.js')).default;
		case "ca": return (await import('./messagebundle_ca-bbc31c24.js')).default;
		case "cs": return (await import('./messagebundle_cs-263ff3f4.js')).default;
		case "cy": return (await import('./messagebundle_cy-8b79e1e7.js')).default;
		case "da": return (await import('./messagebundle_da-ce78d43f.js')).default;
		case "de": return (await import('./messagebundle_de-b6bc4fd6.js')).default;
		case "el": return (await import('./messagebundle_el-fa88657e.js')).default;
		case "en": return (await import('./messagebundle_en-a2eac775.js')).default;
		case "en_GB": return (await import('./messagebundle_en_GB-b4ef7f79.js')).default;
		case "en_US_sappsd": return (await import('./messagebundle_en_US_sappsd-d36ea595.js')).default;
		case "en_US_saprigi": return (await import('./messagebundle_en_US_saprigi-7b21d85b.js')).default;
		case "en_US_saptrc": return (await import('./messagebundle_en_US_saptrc-53fb7860.js')).default;
		case "es": return (await import('./messagebundle_es-f9d93e9e.js')).default;
		case "es_MX": return (await import('./messagebundle_es_MX-5f9bd551.js')).default;
		case "et": return (await import('./messagebundle_et-892a9f39.js')).default;
		case "fi": return (await import('./messagebundle_fi-71861cba.js')).default;
		case "fr": return (await import('./messagebundle_fr-e30eda69.js')).default;
		case "fr_CA": return (await import('./messagebundle_fr_CA-3049d70c.js')).default;
		case "hi": return (await import('./messagebundle_hi-6f2604b4.js')).default;
		case "hr": return (await import('./messagebundle_hr-74d37a9d.js')).default;
		case "hu": return (await import('./messagebundle_hu-21fa0c92.js')).default;
		case "in": return (await import('./messagebundle_in-e4224883.js')).default;
		case "it": return (await import('./messagebundle_it-7d39ce2b.js')).default;
		case "iw": return (await import('./messagebundle_iw-196abae4.js')).default;
		case "ja": return (await import('./messagebundle_ja-168baaf2.js')).default;
		case "kk": return (await import('./messagebundle_kk-ce40eb4e.js')).default;
		case "ko": return (await import('./messagebundle_ko-8efe7fd8.js')).default;
		case "lt": return (await import('./messagebundle_lt-7e727048.js')).default;
		case "lv": return (await import('./messagebundle_lv-10d80130.js')).default;
		case "ms": return (await import('./messagebundle_ms-4970af8e.js')).default;
		case "nl": return (await import('./messagebundle_nl-bd210c49.js')).default;
		case "no": return (await import('./messagebundle_no-20c2da38.js')).default;
		case "pl": return (await import('./messagebundle_pl-63463baf.js')).default;
		case "pt": return (await import('./messagebundle_pt-c97aafb9.js')).default;
		case "pt_PT": return (await import('./messagebundle_pt_PT-f9c743d6.js')).default;
		case "ro": return (await import('./messagebundle_ro-647e76e8.js')).default;
		case "ru": return (await import('./messagebundle_ru-10255117.js')).default;
		case "sh": return (await import('./messagebundle_sh-3bac0adf.js')).default;
		case "sk": return (await import('./messagebundle_sk-47f79ab7.js')).default;
		case "sl": return (await import('./messagebundle_sl-7621fea5.js')).default;
		case "sv": return (await import('./messagebundle_sv-1d883b16.js')).default;
		case "th": return (await import('./messagebundle_th-b810ce9f.js')).default;
		case "tr": return (await import('./messagebundle_tr-c70b6e59.js')).default;
		case "uk": return (await import('./messagebundle_uk-b09753e7.js')).default;
		case "vi": return (await import('./messagebundle_vi-ea706015.js')).default;
		case "zh_CN": return (await import('./messagebundle_zh_CN-ebdd4017.js')).default;
		case "zh_TW": return (await import('./messagebundle_zh_TW-47013395.js')).default;
			default: throw "unknown locale"
		}
	};

	const importAndCheck = async (localeId) => {
		const data = await importMessageBundle(localeId);
		if (typeof data === "string" && data.endsWith(".json")) {
			throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
		}
		return data;
	};

	const localeIds = ["ar",
	"bg",
	"ca",
	"cs",
	"cy",
	"da",
	"de",
	"el",
	"en",
	"en_GB",
	"en_US_sappsd",
	"en_US_saprigi",
	"en_US_saptrc",
	"es",
	"es_MX",
	"et",
	"fi",
	"fr",
	"fr_CA",
	"hi",
	"hr",
	"hu",
	"in",
	"it",
	"iw",
	"ja",
	"kk",
	"ko",
	"lt",
	"lv",
	"ms",
	"nl",
	"no",
	"pl",
	"pt",
	"pt_PT",
	"ro",
	"ru",
	"sh",
	"sk",
	"sl",
	"sv",
	"th",
	"tr",
	"uk",
	"vi",
	"zh_CN",
	"zh_TW",];

	localeIds.forEach(localeId => {
		registerI18nLoader("@ui5/webcomponents", localeId, importAndCheck);
	});

const block0 = (context) => { return scopedHtml`<div class="ui5-switch-root ${classMap(context.classes.main)}" role="checkbox" aria-checked="${ifDefined(context.checked)}" aria-disabled="${ifDefined(context.ariaDisabled)}" aria-labelledby="${ifDefined(context._id)}-hiddenText" @click="${context._onclick}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" tabindex="${ifDefined(context.tabIndex)}" dir="${ifDefined(context.effectiveDir)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${ context.graphical ? block1(context) : block2(context) }<span class="ui5-switch-handle" part="handle"></span></div></div></div><input type='checkbox' ?checked="${context.checked}" class="ui5-switch-input" data-sap-no-tab-ref/><span id="${ifDefined(context._id)}-hiddenText" class="ui5-hidden-text">${ifDefined(context.hiddenText)}</span></div>`; };
const block1 = (context) => { return scopedHtml`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" dir="ltr" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`; };
const block2 = (context) => { return scopedHtml`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${ifDefined(context._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${ifDefined(context._textOff)}</span>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const switchCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}:host(:not([hidden])){display:inline-block}.ui5-switch-root{position:relative;width:100%;height:var(--_ui5_switch_height);min-width:var(--_ui5_switch_width);cursor:pointer;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ui5-switch-root.ui5-switch--no-label{min-width:var(--_ui5_switch_no_label_width)}.ui5-switch-inner{display:flex;align-items:center;justify-content:center;height:100%;overflow:hidden;pointer-events:none;will-change:transform}.ui5-switch-track{height:var(--_ui5_switch_track_height);width:100%;display:flex;align-items:center;background:var(--sapButton_Track_Background);border:1px solid;border-color:var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5_switch_track_border_radius);box-sizing:border-box}.ui5-switch--no-label .ui5-switch-track{height:var(--_ui5_switch_track_no_label_height)}.ui5-switch-slider{position:relative;height:var(--_ui5_switch_height);width:100%;transition:transform .1s ease-in;transform-origin:top left}.ui5-switch-handle{position:absolute;left:-1px;width:var(--_ui5_switch_handle_width);height:var(--_ui5_switch_handle_height);background:var(--_ui5_switch_handle_bg);border:var(--_ui5_switch_handle_border_width) solid var(--sapContent_ForegroundBorderColor);border-radius:var(--_ui5_switch_handle_border_radius);box-sizing:border-box}.ui5-switch-text{display:flex;justify-content:center;position:absolute;min-width:1.625rem;padding:0 .125rem;font-size:var(--sapFontSmallSize);font-family:\"72override\",var(--sapFontFamily);text-transform:uppercase;text-align:center;color:var(--sapTextColor);white-space:nowrap;user-select:none;-webkit-user-select:none;-ms-user-select:none}.ui5-switch-text--on{left:var(--_ui5_switch_text_on_left)}.ui5-switch-text--off{right:0}.ui5-switch-handle,.ui5-switch-text{top:50%;transform:translateY(-50%)}.ui5-switch-desktop.ui5-switch-root:focus:after{content:\"\";position:absolute;left:-var(--_ui5_switch_outline);top:0;bottom:0;left:0;right:0;border:var(--_ui5_switch_outline) dotted var(--sapContent_FocusColor);pointer-events:none}.ui5-switch-root .ui5-switch-input{position:absolute;left:0;width:0;height:0;margin:0;visibility:hidden;-webkit-appearance:none}.ui5-switch-root.ui5-switch--disabled{opacity:.4;cursor:default}.ui5-switch-root.ui5-switch--disabled.ui5-switch--checked .ui5-switch-track{background:var(--_ui5_switch_track_disabled_checked_bg)}.ui5-switch-root.ui5-switch--disabled.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5_switch_handle_disabled_checked_bg)}.ui5-switch-root.ui5-switch--disabled .ui5-switch-handle{background:var(--_ui5_switch_handle_disabled_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-track{background:var(--_ui5_switch_track_disabled_semantic_checked_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-handle{background:var(--_ui5_switch_handle_disabled_semantic_checked_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5_switch_track_disabled_semantic_bg)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--sapButton_Background)}.ui5-switch-root.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5_switch_handle_checked_bg);border-color:var(--_ui5_switch_handle_checked_border_color)}.ui5-switch-root.ui5-switch--checked .ui5-switch-track{background:var(--sapButton_Track_Selected_Background)}.ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5_switch_slide_transform)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled) .ui5-switch-text--on,.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off{color:var(--sapButton_Track_Selected_TextColor)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-handle,.ui5-switch-root.ui5-switch--semantic .ui5-switch-track{border-color:var(--sapSuccessBorderColor)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-track{background:var(--sapSuccessBackground)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-handle{background:var(--sapButton_Background)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-text{justify-content:center;font-size:var(--sapFontSmallSize)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on{width:.75rem;height:.75rem}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on{color:var(--sapPositiveElementColor)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off{color:var(--sapNegativeElementColor)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle,.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{border-color:var(--sapErrorBorderColor)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{background:var(--sapErrorBackground)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--sapButton_Background)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--sapButton_Hover_BorderColor);background:var(--sapButton_Track_Background)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--sapButton_Hover_Background);border-color:var(--sapButton_Hover_BorderColor)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Hover_BorderColor)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--sapButton_Hover_BorderColor);background:var(--_ui5_switch_track_hover_checked_background_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_hover_bg);border-color:var(--_ui5_switch_handle_semantic_hover_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--_ui5_switch_handle_semantic_hover_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_checked_hover_bg);border-color:var(--_ui5_switch_handle_semantic_checked_hover_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{border-color:var(--_ui5_switch_handle_semantic_checked_hover_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-icon--on,.ui5-switch-root.ui5-switch--semantic:hover .ui5-switch-icon--on{color:var(--_ui5_switch_text_on_semantic_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--disabled .ui5-switch-icon--off,.ui5-switch-root.ui5-switch--semantic:hover .ui5-switch-icon--off{color:var(--_ui5_switch_text_off_semantic_color)}[dir=rtl].ui5-switch-root .ui5-switch-handle{left:0;right:-1px}[dir=rtl].ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5_switch_rtl_transform)}[dir=rtl].ui5-switch-root .ui5-switch-text--on{right:var(--_ui5_switch_text_right);left:auto}[dir=rtl].ui5-switch-root .ui5-switch-text--off{right:auto;left:0}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-switch",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.Switch.prototype */ {

		/**
		 * Defines if the <code>ui5-switch</code> is checked.
		 * <br><br>
		 * <b>Note:</b> The property can be changed with user interaction,
		 * either by cliking/tapping on the <code>ui5-switch</code>, or by
		 * pressing the <code>Enter</code> or <code>Space</code> key.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		checked: {
			type: Boolean,
		},

		/**
		 * Defines whether the <code>ui5-switch</code> is disabled.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-switch</code> is noninteractive.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Defines the text of the <code>ui5-switch</code> when switched on.
		 *
		 * <br><br>
		 * <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		textOn: {
			type: String,
		},

		/**
		 * Defines the text of the <code>ui5-switch</code> when switched off.
		 * <br><br>
		 * <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		textOff: {
			type: String,
		},

		/**
		 * Defines the <code>ui5-switch</code> type.
		 * <br><br>
		 * <b>Note:</b> If <code>graphical</code> type is set,
		 * positive and negative icons will replace the <code>textOn</code> and <code>textOff</code>.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		graphical: {
			type: Boolean,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.Switch.prototype */ {

		/**
		 * Fired when the <code>ui5-switch</code> checked state changes.
		 *
		 * @public
		 * @event
		 */
		change: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * The <code>ui5-switch</code> component is used for changing between binary states.
 * <br>
 * The component can display texts, that will be switched, based on the component state, via the <code>textOn</code> and <code>textOff</code> properties,
 * but texts longer than 3 letters will be cutted off.
 * <br>
 * However, users are able to customize the width of <code>ui5-switch</code> with pure CSS (&lt;ui5-switch style="width: 200px">), and set widths, depending on the texts they would use.
 * <br>
 * Note: the component would not automatically stretch to fit the whole text width.
 *
 * <h3>Keyboard Handling</h3>
 * The state can be changed by pressing the Space and Enter keys.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Switch";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Switch
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-switch
 * @public
 * @since 0.8.0
 */
class Switch extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return switchCss;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main;
	}

	constructor() {
		super();

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	_onclick(event) {
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
		if (!this.disabled) {
			this.checked = !this.checked;
			this.fireEvent("change");
			// Angular two way data binding;
			this.fireEvent("value-changed");
		}
	}

	get _textOn() {
		return this.graphical ? "" : this.textOn;
	}

	get _textOff() {
		return this.graphical ? "" : this.textOff;
	}

	get tabIndex() {
		return this.disabled ? undefined : "0";
	}

	get classes() {
		const hasLabel = this.graphical || this.textOn || this.textOff;

		return {
			main: {
				"ui5-switch-desktop": isDesktop(),
				"ui5-switch--disabled": this.disabled,
				"ui5-switch--checked": this.checked,
				"ui5-switch--semantic": this.graphical,
				"ui5-switch--no-label": !hasLabel,
			},
		};
	}

	get ariaDisabled() {
		return this.disabled ? "true" : undefined;
	}

	get accessibilityOnText() {
		return this._textOn || this.i18nBundle.getText(SWITCH_ON);
	}

	get accessibilityOffText() {
		return this._textOff || this.i18nBundle.getText(SWITCH_OFF);
	}

	get hiddenText() {
		return this.checked ? this.accessibilityOnText : this.accessibilityOffText;
	}

	static get dependencies() {
		return [Icon];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

Switch.define();

class VOPIISelect {
  constructor(dataCategory) {
    /**
     * @description Should only consent be requested, but no data?
     */
    this.isConsentOnly = false;
    /**
     * @description If latest, the data subject is asked to provide the latest data.
     */
    this.versionOption = "LATEST";
    this.id = v4();
    this.dataCategory = dataCategory;
  }
}

const comDataBasketSelectDataAndSubjectsCss = ".tooltips.sc-trusd-piiq-com-data-basket-pii-select .tooltiptext.sc-trusd-piiq-com-data-basket-pii-select{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-pii-select .tooltiptext.sc-trusd-piiq-com-data-basket-pii-select::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-pii-select:hover .tooltiptext.sc-trusd-piiq-com-data-basket-pii-select{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-pii-select,.privacy-tooltip.sc-trusd-piiq-com-data-basket-pii-select+.tooltip.sc-trusd-piiq-com-data-basket-pii-select>.tooltip-inner.sc-trusd-piiq-com-data-basket-pii-select{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-pii-select{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-pii-select{cursor:help}button.sc-trusd-piiq-com-data-basket-pii-select:disabled{cursor:not-allowed;pointer-events:all !important}html.sc-trusd-piiq-com-data-basket-pii-select{scroll-behavior:smooth}.sc-trusd-piiq-com-data-basket-pii-select-h{display:block}.data-basket-scroll-list-col.sc-trusd-piiq-com-data-basket-pii-select{height:400px}.data-basket-scroll-list.sc-trusd-piiq-com-data-basket-pii-select{max-height:400px;min-height:400px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}.data-basket-modal-scroll-list.sc-trusd-piiq-com-data-basket-pii-select{max-height:300px;min-height:300px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}*.sc-trusd-piiq-com-data-basket-pii-select{text-align:left}.star.sc-trusd-piiq-com-data-basket-pii-select{visibility:hidden;cursor:pointer;font-size:20px;right:0;margin-right:10px;top:5px;left:auto}.star.sc-trusd-piiq-com-data-basket-pii-select:before{content:\"\\2606\";position:absolute;visibility:visible}.star.sc-trusd-piiq-com-data-basket-pii-select:checked:before{content:\"\\2605\";position:absolute}.calDayContainer.sc-trusd-piiq-com-data-basket-pii-select{bottom:100%}.person-table.sc-trusd-piiq-com-data-basket-pii-select{overflow-y:auto;height:50vh}.person-table.sc-trusd-piiq-com-data-basket-pii-select thead.sc-trusd-piiq-com-data-basket-pii-select th.sc-trusd-piiq-com-data-basket-pii-select{position:sticky;top:0}table.sc-trusd-piiq-com-data-basket-pii-select{border-collapse:collapse;width:100%}th.sc-trusd-piiq-com-data-basket-pii-select,td.sc-trusd-piiq-com-data-basket-pii-select{padding:8px 16px;border:0px solid #ccc}th.sc-trusd-piiq-com-data-basket-pii-select{background-color:white}.person-table.sc-trusd-piiq-com-data-basket-pii-select tbody.sc-trusd-piiq-com-data-basket-pii-select>tr.sc-trusd-piiq-com-data-basket-pii-select,.person-table.sc-trusd-piiq-com-data-basket-pii-select tbody.sc-trusd-piiq-com-data-basket-pii-select input.sc-trusd-piiq-com-data-basket-pii-select,.person-table.sc-trusd-piiq-com-data-basket-pii-select th.sc-trusd-piiq-com-data-basket-pii-select input.sc-trusd-piiq-com-data-basket-pii-select{cursor:pointer}#exTab2.sc-trusd-piiq-com-data-basket-pii-select h3.sc-trusd-piiq-com-data-basket-pii-select{color:white;background-color:#428bca;padding:5px 15px}.data-subject-select.sc-trusd-piiq-com-data-basket-pii-select{z-index:1000 !important}.data-subject-select-modal-tab.sc-trusd-piiq-com-data-basket-pii-select{min-height:400px}.trusd-data-basket-selection-pii-data-subjects.sc-trusd-piiq-com-data-basket-pii-select{min-height:250px}#overlay.sc-trusd-piiq-com-data-basket-pii-select{position:absolute;background-color:rgba(255, 255, 255, 0.75);z-index:9999;cursor:wait;left:0;right:0;top:0;bottom:0;margin-left:-15px;margin-right:-15px;margin-top:-10px;margin-bottom:-10px}";

const PIISelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeItem = createEvent(this, "removeItem", 7);
    this.trusdPiiqSelectedDataChanged = createEvent(this, "trusdPiiqSelectedDataChanged", 7);
    this.preselectedPersonalData = [];
    this.selectedDataCategory = "";
    this.selectedData = [];
    this.customDataCategories = [];
    /**
     * States whether the current selection is a favorite data template.
     */
    this.isFavoriteDataTemplate = false;
    /**
     * @description: Stores the data templates.
     * @example: [{template_name: "Vorlage1", template_data: {...}}]
     */
    this.dataTemplates = [];
    /* FORMS */
    this.formModalTabPaneState = "ALL";
    this.searchStringPII = "";
    this.formNewPII = "";
  }
  onSelectedDataChange() {
    this.trusdPiiqSelectedDataChanged.emit(this.selectedData);
  }
  onDataTemplatesChange() {
  }
  /* METHODS */
  update() {
    this.updateCounter++;
  }
  updateIsFavoriteDataTemplate() {
    let tmpIsFav = false;
    // update if current selection is a favorite data template:
    if (!this.selectedData ||
      this.selectedData.length < 1 ||
      !this.dataTemplates ||
      this.dataTemplates.length < 1) {
      tmpIsFav = false;
    }
    else {
      this.dataTemplates.forEach((template) => {
        let isMatchTemplate = true;
        // check if template includes all selected:
        this.selectedData.forEach((datacategory) => {
          if (template.template_data.findIndex(sel => sel.dataCategory.id.value === datacategory.dataCategory.id.value) < 0) {
            isMatchTemplate = false;
          }
        });
        // check if selected include all from template:
        template.template_data.forEach((datacategory) => {
          if (this.selectedData.findIndex(sel => sel.dataCategory.id.value === datacategory.dataCategory.id.value) < 0) {
            isMatchTemplate = false;
          }
        });
        if (isMatchTemplate) {
          tmpIsFav = true;
          return;
        }
      });
    }
    this.isFavoriteDataTemplate = tmpIsFav;
    return;
  }
  addSelectedDataCategory(dataCategory) {
    if (this.selectedData.find(d => d.dataCategory.id.value === dataCategory.id.value))
      return;
    this.selectedData = [...this.selectedData, new VOPIISelect(dataCategory)];
  }
  removeSelectedDataCategory(dataCategory) {
    if (!this.selectedData.find(d => d.dataCategory.id.value == dataCategory.id.value))
      return;
    this.selectedData = this.selectedData.filter(d => d.dataCategory.id.value !== dataCategory.id.value);
  }
  /**
   *
   * @returns An array with different categories of data
   */
  getHigherOrderCategoriesOfCategoriesOfData() {
    let data = getParentDataCategories(getUniqueSetOfCategoriesOfDataFromProcessingRecord(findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID)));
    // sort alphabetically:
    data = data.sort(function (a, b) {
      if (a.friendlyName < b.friendlyName)
        return -1;
      if (b.friendlyName > a.friendlyName)
        return 1;
      return 0;
    });
    return data;
  }
  /**
   *
   * @returns An array containing the individual categories of data linked to a higher order category.
   */
  getCategoriesOfData(filtered) {
    let data = [];
    if (!this.dataBasket)
      return data;
    // get data categories without parent categories
    data = data.filter(edc => getParentDataCategories(state.dbEDataCategory)
      .find(pdc => pdc.id.value === edc.id.value) ?
      false : true);
    data = getUniqueSetOfCategoriesOfDataFromProcessingRecord(findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID));
    data = [...data, ...this.customDataCategories];
    // text search: 
    if (filtered && this.searchStringPII) {
      this.searchStringPII.split(" ").forEach((searchString) => {
        data = data.filter((d) => {
          return (d.friendlyName.toLowerCase().includes(searchString.toLowerCase()));
        });
      });
    }
    // sort alphabetically:
    data = data.sort(function (a, b) {
      if (a.friendlyName < b.friendlyName)
        return -1;
      if (b.friendlyName > a.friendlyName)
        return 1;
      return 0;
    });
    return data;
  }
  /**
   * saves this.selectedData as new template
   */
  saveDataTemplate() {
    let name = document.getElementById('dataTemplateName').value;
    let template = {
      template_name: name,
      template_data: [...this.selectedData]
    };
    this.dataTemplates = [...this.dataTemplates, template];
    document.getElementById('dataTemplateName').value = "";
  }
  /* STENCIL LIFECYCLE METHODS */
  componentWillLoad() {
    this.selectedData = this.preselectedPersonalData;
  }
  componentWillRender() {
    this.updateIsFavoriteDataTemplate();
  }
  render() {
    return (h("div", null, h("div", { class: "container-flex" }, h("div", { class: "row w-100 m-0" }, h("div", { class: "col" }, h("h6", { class: "font-weight-light" }, "Personenbezogene Daten \u00A0\u00A0", this.selectedData.length > 0 ?
      h("span", { class: "badge badge-secondary" }, this.selectedData.length, " ausgew\u00E4hlt") : ""))), h("div", { class: "row w-100 m-0" }, h("div", { class: "col-12 data-basket-scroll-list-col my-auto text-center" }, this.selectedData.length > 0 ?
      h("ul", { class: "list-group list-group-flush data-basket-scroll-list" }, this.selectedData.map((dataCategory) => h("li", { class: "list-group-item list-group-item-action" }, h("div", { class: "row" }, h("div", { class: "col-6  text-truncate", title: "Name der Kategorie von personenbezogenen Daten" }, dataCategory.dataCategory.friendlyName), h("div", { class: "col d-flex justify-content-end align-middle p-0" }, h("button", { type: "button", id: "btn-calendar-" + dataCategory.id, class: "btn btn-outline-secondary btn-sm", title: "Gew\u00FCnschte Version der Daten", onClick: () => document.getElementById("popover-calendar-" + dataCategory.id).openBy(document.getElementById("btn-calendar-" + dataCategory.id)) }, h("small", null, h("i", { class: "far fa-calendar-alt" }), " ", (dataCategory.versionOption === "PICK_DATE" && dataCategory.versionDate && dataCategory.versionDate !== "") ? dataCategory.versionDate : "aktuellste")), h("ui5-popover", { id: "popover-calendar-" + dataCategory.id, "header-text": "Version ausw\u00E4hlen" }, h("div", { class: "popover-content" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col" }, h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "radio", name: "popoverVersionOption" + dataCategory.id, id: "popoverVersionOptionLatest" + dataCategory.id, checked: dataCategory.versionOption === "LATEST", onChange: () => { dataCategory.versionOption = "LATEST"; this.update(); } }), h("label", { class: "form-check-label" }, "Aktuellste")), h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "radio", name: "popoverVersionOption" + dataCategory.id, id: "popoverVersionOptionDatePick" + dataCategory.id, checked: dataCategory.versionOption === "PICK_DATE", onChange: () => { dataCategory.versionOption = "PICK_DATE"; this.update(); } }), h("label", { class: "form-check-label" }, h("ui5-date-picker", { id: "datepicker-calendar-" + dataCategory.id, placeholder: "MM JJJJ", "format-pattern": 'MM yyyy', value: dataCategory.versionDate ? dataCategory.versionDate : "", disabled: dataCategory.versionOption !== "PICK_DATE" }))), h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "checkbox", value: "", id: "popoverSelectVersionPiiForAll" + dataCategory.id }), h("label", { class: "form-check-label", htmlFor: "popoverSelectVersionPiiForAll" + dataCategory.id }, "F\u00FCr alle pers. Daten \u00FCbernehmen")))))), h("div", { slot: "footer", class: "popover-footer" }, h("div", { class: "text-right" }, h("p", null), h("button", { type: "button", class: "btn btn-secondary btn-sm", title: "Versionsauswahl abbrechen", onClick: () => document.getElementById("popover-calendar-" + dataCategory.id).close() }, "Abbrechen"), "\u00A0\u00A0", h("button", { type: "button", class: "btn btn-primary btn-sm", title: "Versionsauswahl \u00FCbernehmen", onClick: () => {
          let isSetAll = document.getElementById("popoverSelectVersionPiiForAll" + dataCategory.id).checked;
          let datepicker = document.getElementById("datepicker-calendar-" + dataCategory.id);
          dataCategory.versionDate = datepicker.value;
          if (isSetAll) {
            this.selectedData.forEach((el) => {
              el.versionOption = dataCategory.versionOption;
              el.versionDate = dataCategory.versionDate;
            });
          }
          document.getElementById("popover-calendar-" + dataCategory.id).close();
          this.update();
        } }, "\u00DCbernehmen"), h("p", null))))), h("div", { class: "col-1 p-0" }, h("button", { type: "button", class: "btn close", title: "Aus Auswahl entfernen", onClick: () => this.removeSelectedDataCategory(dataCategory.dataCategory) }, h("span", { "aria-hidden": "true" }, "\u00D7")))))))
      :
        h("div", { class: "d-flex align-items-center justify-content-center w-100 h-100" }, h("div", { class: "btn-group-vertical w-50" }, h("button", { class: "btn btn-light border w-100 h-25 text-secondary mb-1", onClick: () => this.modalEditPII.toggleAttribute("open"), title: "Ausw\u00E4hlen, welche Kategorien von Daten hinzugef\u00FCgt werden sollen." }, h("i", { class: "far fa-plus-square fa-3x" }), h("br", null), "Ausw\u00E4hlen und hinzuf\u00FCgen"), h("button", { class: "btn btn-light border w-100 h-25 text-secondary mt-1", onClick: () => this.getCategoriesOfData(true).map(dataCategory => this.addSelectedDataCategory(dataCategory)), title: "Alle Kategorien von Daten hinzuf\u00FCgen, die verarbeitet werden d\u00FCrfen." }, h("i", { class: "far fa-plus-square fa-3x" }), h("br", null), "Alle hinzuf\u00FCgen"))))), h("div", { class: "row w-100 mt-auto m-0" }, h("div", { class: "col-12" }, h("div", { class: "btn-group d-flex", role: "group" }, h("button", { class: "btn btn-outline-primary btn-sm w-100", onClick: () => this.modalEditPII.toggleAttribute("open"), title: "Weitere Kategorien von Daten hinzuf\u00FCgen oder die Auswahl \u00E4ndern." }, "+ Hinzuf\u00FCgen / \u00C4ndern"), h("button", { type: "button", class: "btn btn-outline-primary btn-sm w-20" + (this.isFavoriteDataTemplate ? " active" : ""), title: "Favoriten ausw\u00E4hlen oder hinzuf\u00FCgen", onClick: (ev) => document.getElementById("popover-favorite-data-categories").openBy(ev.target) }, this.isFavoriteDataTemplate ?
      h("i", { class: "fas fa-star" }) :
      h("i", { class: "far fa-star" })), h("button", { type: "button", title: "Alle entfernen", class: "btn btn-outline-danger btn-sm w-20", onClick: () => this.selectedData = [] }, h("i", { class: "fas fa-trash" })))))), h("ui5-popover", { id: "popover-favorite-data-categories", placementType: "Top", "header-text": "Favoriten", style: { maxWidth: "300px" } }, h("div", { class: "popover-content" }, h("div", { class: "" }, this.dataTemplates.length > 0 ?
      this.dataTemplates.map((el) => h("a", { class: "dropdown-item", href: "#", onClick: () => {
          document.getElementById("popover-favorite-data-categories").close();
          this.selectedData = this.dataTemplates.find((dT) => { return dT.template_name === el.template_name; }).template_data;
        } }, el.template_name)) :
      h("small", { class: "text-muted" }, "F\u00FCr diese Verarbeitungst\u00E4tigkeit sind keine Favoriten verf\u00FCgbar."))), h("div", { slot: "footer", class: "popover-footer" }, h("div", { class: "col p-1" }, h("button", { type: "button", class: "btn btn-outline-secondary btn-sm w-100", disabled: this.selectedData.length < 1, onClick: () => this.modalNewFav.toggleAttribute("open") }, "+ Auswahl als Favorit hinzuf\u00FCgen")))), h("trusd-com-modal-window", { ref: (el) => this.modalEditPII = el }, h("span", { slot: "modal-title" }, "Personenbezogene Daten ausw\u00E4hlen"), h("div", { slot: "modal-content" }, h("ul", { class: "nav nav-tabs" }, h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formModalTabPaneState === "ALL" ? " active" : ""), onClick: () => this.formModalTabPaneState = "ALL" }, "Alle (unsortiert)")), h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formModalTabPaneState === "BY_CATEGORY" ? " active" : ""), onClick: () => this.formModalTabPaneState = "BY_CATEGORY" }, "Nach Kategorien"))), h("div", { class: "tab-content data-subject-select-modal-tab" }, h("div", { class: "tab-pane container" + (this.formModalTabPaneState === "ALL" ? " active" : "") }, h("div", { class: "row pt-3" }, h("input", { class: "form-control", id: "person_search", type: "search", placeholder: "Suche", onInput: (ev) => this.searchStringPII = ev.target.value })), h("div", { class: "row pt-3" }, this.getCategoriesOfData(true).map((dataCategory) => h("div", { class: "col-3 cursor-pointer border list-group-item list-group-item-action m-1" + (this.selectedData.find((el) => el.dataCategory.id.value === dataCategory.id.value) ? " bg-light" : ""), onClick: (ev) => {
        let htmlEl = (ev.target.type && ev.target.type === "checkbox") ?
          ev.target :
          ev.target.firstChild;
        if (htmlEl.value === "true") {
          this.removeSelectedDataCategory(dataCategory);
        }
        else {
          this.addSelectedDataCategory(dataCategory);
        }
      } }, h("div", { class: "pl-2" }, h("input", { class: "form-check-input pr-1 me-1", type: "checkbox", value: this.selectedData.find((el) => el.dataCategory.id.value === dataCategory.id.value) ? "true" : "false", checked: this.selectedData.find((el) => el.dataCategory.id.value === dataCategory.id.value) ? true : false }), dataCategory.friendlyName))), h("div", { class: "col-3 cursor-pointer border list-group-item list-group-item-action m-1", onClick: (ev) => document.getElementById("popover-new-data-categories").openBy(ev.target) }, h("div", { class: "pl-2 d-flex align-items-center" }, h("i", { class: "far fa-plus-square fa-2x" }), " ", h("span", { class: "pl-2" }, "Neu hinzuf\u00FCgen")), h("ui5-popover", { id: "popover-new-data-categories", placementType: "Top", "header-text": "Neue Kategorie hinzuf\u00FCgen", style: { maxWidth: "300px" } }, h("div", { class: "popover-content" }, h("div", { class: "" }, h("input", { class: "form-control", type: "text", placeholder: "z.B.: Arbeitserlaubnis", onInput: (ev) => this.formNewPII = ev.target.value, onKeyUp: (ev) => {
        if (ev.key === "Enter") {
          let x = state.dbEDataCategory.find(dc => dc.friendlyName === this.formNewPII);
          if (x) {
            this.customDataCategories = [...this.customDataCategories, x];
          }
          else {
            this.customDataCategories = [...this.customDataCategories, { id: { value: "ext-" + this.customDataCategories.length }, friendlyName: this.formNewPII, typeOf: [] }];
          }
        }
      } }))), h("div", { slot: "footer", class: "popover-footer" }, h("div", { class: "col p-1" }, h("button", { type: "button", class: "btn btn-outline-primary btn-sm w-100", disabled: this.formNewPII === "", onClick: () => {
        let x = state.dbEDataCategory.find(dc => dc.friendlyName === this.formNewPII);
        if (x) {
          this.customDataCategories = [...this.customDataCategories, x];
        }
        else {
          this.customDataCategories = [...this.customDataCategories, { id: { value: "ext-" + this.customDataCategories.length }, friendlyName: this.formNewPII, typeOf: [] }];
        }
      } }, language.btnSave))))))), h("div", { class: "tab-pane container" + (this.formModalTabPaneState === "BY_CATEGORY" ? " active" : ""), id: "data-subject-select-modal-tab-external" }, this.getHigherOrderCategoriesOfCategoriesOfData().map((higherOrderDataCategory) => h("div", null, h("div", { class: "row" }, h("hr", { class: "w-100" })), h("div", { class: "row" }, h("h7", null, higherOrderDataCategory.friendlyName)), h("div", { class: "row" }, this.getCategoriesOfData().map((dataCategory) => {
      if (dataCategory.typeOf && dataCategory.typeOf.find(t => t.value === higherOrderDataCategory.id.value)) {
        return (h("div", { class: "col-3 cursor-pointer border list-group-item list-group-item-action m-1" + (this.selectedData.find((el) => el.dataCategory.id.value === dataCategory.id.value) ? " bg-light" : ""), onClick: (ev) => {
            let htmlEl = (ev.target.type && ev.target.type === "checkbox") ?
              ev.target :
              ev.target.firstChild;
            if (htmlEl.checked) {
              this.removeSelectedDataCategory(dataCategory);
            }
            else {
              this.addSelectedDataCategory(dataCategory);
            }
          } }, h("div", { class: "pl-2" }, h("input", { class: "form-check-input pr-1 me-1", type: "checkbox", checked: this.selectedData.find((el) => el.dataCategory.id.value === dataCategory.id.value) ? true : false, "aria-label": "..." }), dataCategory.friendlyName)));
      }
    }))))))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalEditPII.toggleAttribute("open"); } }, language.btnCancel), "\u00A0", h("button", { type: "button", class: "btn btn-primary", onClick: () => this.modalEditPII.toggleAttribute("open") }, language.btnSave))), h("trusd-com-modal-window", { ref: (el) => this.modalNewFav = el }, h("span", { slot: "modal-title" }, "Neuen Favoriten hinzuf\u00FCgen"), h("div", { slot: "modal-content" }, h("div", { class: "input-group mb-3" }, h("input", { id: "dataTemplateName", type: "text", class: "form-control", placeholder: "Name", "aria-label": "Name" }))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalNewFav.toggleAttribute("open"); } }, language.btnCancel), "\u00A0", h("button", { class: "btn btn-primary float-right", type: "button", onClick: () => { this.saveDataTemplate(); this.modalNewFav.toggleAttribute("open"); } }, "Hinzuf\u00FCgen")))));
  }
  static get watchers() { return {
    "selectedData": ["onSelectedDataChange"],
    "dataTemplates": ["onDataTemplatesChange"]
  }; }
};
PIISelect.style = comDataBasketSelectDataAndSubjectsCss;

export { PIISelect as trusd_piiq_com_data_basket_pii_select };
