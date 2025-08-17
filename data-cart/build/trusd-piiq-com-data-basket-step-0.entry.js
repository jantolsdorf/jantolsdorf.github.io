import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import { s as scopedHtml, i as ifDefined, b as setTags, c as setSuffix, h as classMap, a as styleMap, u as repeat, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, U as UI5Element, l as litRender, k as getFeature, f as fetchI18nBundle } from './Icons-85d4abff.js';
import { V as ValueState } from './ValueState-a7516d8f.js';
import { g as getI18nBundle, d as isEnter, c as isSpace, ak as FILEUPLOAD_BROWSE, al as FILEUPLOADER_TITLE, F as VALUE_STATE_SUCCESS, H as VALUE_STATE_INFORMATION, V as VALUE_STATE_ERROR, l as VALUE_STATE_WARNING } from './i18n-defaults-dca87248.js';
import { R as ResponsivePopoverCommonCss, V as ValueStateMessageCss, I as Input } from './Input-0ee3a2d0.js';
import { e as Popover } from './Popover-0d784de7.js';
import { l as language } from './de-DE-5564f65b.js';
import { s as state } from './store-9032fc40.js';
import './decline-a03835ab.js';

const block0$1 = (context) => { return scopedHtml`<div class="ui5-file-uploader-root" @mouseover="${context._onmouseover}" @mouseout="${context._onmouseout}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}"><div class="ui5-file-uploader-mask">${ !context.hideInput ? block1$1(context) : undefined }<slot></slot></div>${ context._keepInputInShadowDOM ? block2$1(context) : block3$1(context) }</div>`; };
const block1$1 = (context) => { return scopedHtml`<ui5-input value="${ifDefined(context.value)}" value-state="${ifDefined(context.valueState)}" placeholder="${ifDefined(context.placeholder)}" ?disabled="${context.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`; };
const block2$1 = (context) => { return scopedHtml`<input type="file" title="${ifDefined(context.titleText)}" accept="${ifDefined(context.accept)}" ?multiple="${context.multiple}" ?disabled="${context.disabled}" @change="${context._onChange}" aria-hidden="true" tabindex="-1">`; };
const block3$1 = (context) => { return scopedHtml`<slot name="formSupport"></slot>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

const block0 = (context) => { return scopedHtml`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore no-padding no-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${classMap(context.classes.popoverValueState)}" style="${styleMap(context.styles.popoverHeader)}">${ context.shouldDisplayDefaultValueStateMessage ? block1(context) : block2(context) }</div></ui5-popover>`; };
const block1 = (context) => { return scopedHtml`${ifDefined(context.valueStateText)}`; };
const block2 = (context) => { return scopedHtml`${ repeat(context.valueStateMessageText, (item, index) => item._id || index, (item, index) => block3(item, index, context)) }`; };
const block3 = (item, index, context) => { return scopedHtml`${ifDefined(item)}`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const FileUploaderCss = ":host{display:inline-block}.ui5-file-uploader-root{position:relative}.ui5-file-uploader-root input[type=file]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%}.ui5-file-uploader-root input[type=file]:not([disabled]){cursor:pointer}.ui5-file-uploader-mask{display:flex}.ui5-file-uploader-mask [ui5-input]{margin-right:.25rem}:host(:not([value-state]):not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);border:1px solid var(--sapField_Hover_BorderColor)}:host(:not([disabled]):active) [ui5-button]{background-color:var(--sapButton_Active_Background);border-color:var(--_ui5_button_active_border_color);color:var(--sapButton_Active_TextColor);text-shadow:none}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-file-uploader",
	languageAware: true,
	properties: /** @lends sap.ui.webcomponents.main.FileUploader.prototype */ {
		/**
		 * Comma-separated list of file types that the <code>ui5-file-uploader</code> should accept.
		 * <br><br>
		 * <b>Note:</b> Please make sure you are adding the <code>.</code> in front on the file type, e.g. <code>.png</code> in case you want to accept png's only.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		accept: {
			type: String,
		},

		/**
		 * If set to "true", the input field of <code>ui5-file-uploader</code> will not be rendered. Only the default slot that is passed will be rendered.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		hideInput: {
			type: Boolean,
		},

		/**
		 * Defines whether <code>ui5-file-uploader</code> is in disabled state.
		 * <br><br>
		 * <b>Note:</b> A disabled <code>ui5-file-uploader</code> is completely noninteractive.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Allows multiple files to be chosen.
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		multiple: {
			type: Boolean,
		},

		/**
		 * Determines the name with which the <code>ui5-file-uploader</code> will be submitted in an HTML form.
		 *
		 * <br><br>
		 * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * <br><br>
		 * <b>Note:</b> When set, a native <code>input</code> HTML element
		 * will be created inside the <code>ui5-file-uploader</code> so that it can be submitted as
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
		 * Defines a short hint intended to aid the user with data entry when the <code>ui5-file-uploader</code> has no value.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		placeholder: {
			type: String,
		},

		/**
		 * Defines the name/names of the file/files to upload.
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		value: {
			type: String,
		},

		/**
		 * Defines the value state of the <code>ui5-file-uploader</code>.
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
		 * @private
		 */
		focused: {
			type: Boolean,
		},
	},
	managedSlots: true,
	slots: /** @lends sap.ui.webcomponents.main.FileUploader.prototype */ {
		/**
		 * By default the <code>ui5-file-uploader</code> contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.
		 *
		 * @type {HTMLElement[]}
		 * @slot content
		 * @public
		 */
		"default": {
			propertyName: "content",
			type: HTMLElement,
		},

		/**
		 * Defines the value state message that will be displayed as pop up under the <code>ui5-file-uploader</code>.
		 * <br><br>
		 *
		 * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
		 * <br>
		 * <b>Note:</b> The <code>valueStateMessage</code> would be displayed,
		 * when the <code>ui5-file-uploader</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
		 * @type {HTMLElement[]}
		 * @since 1.0.0-rc.9
		 * @slot
		 * @public
		 */
		valueStateMessage: {
			type: HTMLElement,
		},

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
	events: /** @lends sap.ui.webcomponents.main.FileUploader.prototype */ {
		/**
		 * Event is fired when the value of the file path has been changed.
		 * <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.
		 *
		 * @event
		 * @param {FileList} files The current files.
		 * @public
		 */
		change: {
			detail: {
				files: { type: FileList },
			},
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-file-uploader</code> opens a file explorer dialog and enables users to upload files.
 * The component consists of input field, but you can provide an HTML element by your choice
 * to trigger the file upload, by using the default slot.
 * Furthermore, you can set the property "hideInput" to "true" to hide the input field.
 * <br>
 * To get all selected files, you can simply use the read-only "files" property.
 * To restrict the types of files the user can select, you can use the "accept" property.
 * <br>
 * And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.
 *
 * For the <code>ui5-file-uploader</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/FileUploader.js";</code>
 *
 * @constructor
 * @since 1.0.0-rc.6
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.FileUploader
 * @extends UI5Element
 * @tagname ui5-file-uploader
 * @public
 */
class FileUploader extends UI5Element {
	static get formAssociated() {
		return true;
	}

	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return FileUploaderCss;
	}

	static get template() {
		return main$1;
	}

	static get staticAreaTemplate() {
		return main;
	}

	static get staticAreaStyles() {
		return [ResponsivePopoverCommonCss, ValueStateMessageCss];
	}

	constructor() {
		super();
		if (this._canUseNativeFormSupport) {
			this._internals = this.attachInternals();
		}

		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	_onmouseover() {
		this.content.forEach(item => {
			item.classList.add("ui5_hovered");
		});
	}

	_onmouseout() {
		this.content.forEach(item => {
			item.classList.remove("ui5_hovered");
		});
	}

	_onkeydown(event) {
		if (isEnter(event)) {
			this._input.click(event);
		}
	}

	_onkeyup(event) {
		if (isSpace(event)) {
			this._input.click(event);
		}
	}

	_onfocusin() {
		this.focused = true;
	}

	_onfocusout() {
		this.focused = false;
	}

	/**
	 * FileList of all selected files.
	 * @readonly
	 * @type { FileList }
	 * @public
	 */
	get files() {
		if (this._input) {
			return this._input.files;
		}

		return FileUploader._emptyFilesList;
	}

	onBeforeRendering() {
		this._enableFormSupport();
	}

	onAfterRendering() {
		if (!this.value) {
			this._input.value = "";
		}

		this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover);
	}

	_enableFormSupport() {
		const FormSupport = getFeature("FormSupport");

		if (FormSupport) {
			if (this._canUseNativeFormSupport) {
				this._setFormValue();
			} else {
				FormSupport.syncNativeFileInput(
					this,
					(element, nativeInput) => {
						nativeInput.disabled = element.disabled;
					},
					this._onChange.bind(this),
				);
			}
		} else if (this.name) {
			console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}
	}

	_onChange(event) {
		this._updateValue(event.target.files);
		this.fireEvent("change", {
			files: event.target.files,
		});
	}

	_updateValue(files) {
		this.value = Array.from(files).reduce((acc, currFile) => {
			return `${acc}"${currFile.name}" `;
		}, "");
	}

	_setFormValue() {
		const formData = new FormData();

		for (let i = 0; i < this.files.length; i++) {
			formData.append(this.name, this.files[i]);
		}

		this._internals.setFormValue(formData);
	}

	toggleValueStatePopover(open) {
		if (open) {
			this.openValueStatePopover();
		} else {
			this.closeValueStatePopover();
		}
	}

	async openValueStatePopover() {
		const popover = await this._getPopover();

		if (popover) {
			popover.openBy(this);
		}
	}

	async closeValueStatePopover() {
		const popover = await this._getPopover();

		if (popover) {
			popover.close();
		}
	}

	async _getPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector(".ui5-valuestatemessage-popover");
	}

	/**
	 * in case when ui5-file-uploader is not placed in the DOM, return empty FileList, like native input would do
	 * @private
	 */
	static get _emptyFilesList() {
		if (!this.emptyInput) {
			this.emptyInput = document.createElement("input");
			this.emptyInput.type = "file";
		}
		return this.emptyInput.files;
	}

	get browseText() {
		return this.i18nBundle.getText(FILEUPLOAD_BROWSE);
	}

	get titleText() {
		return this.i18nBundle.getText(FILEUPLOADER_TITLE);
	}

	get _canUseNativeFormSupport() {
		return !!this.attachInternals;
	}

	get _keepInputInShadowDOM() {
		// only put input in the light dom when ui5-file-uploader is placed inside form and there is no support for form elements
		return this._canUseNativeFormSupport || !this.name;
	}

	get _input() {
		return this.shadowRoot.querySelector("input[type=file]") || this.querySelector("input[type=file][data-ui5-form-support]");
	}

	/**
	 * Determines input helper type in forms.
	 * @private
	 */
	get _type() {
		return "file";
	}

	get valueStateTextMappings() {
		const i18nBundle = this.i18nBundle;

		return {
			"Success": i18nBundle.getText(VALUE_STATE_SUCCESS),
			"Information": i18nBundle.getText(VALUE_STATE_INFORMATION),
			"Error": i18nBundle.getText(VALUE_STATE_ERROR),
			"Warning": i18nBundle.getText(VALUE_STATE_WARNING),
		};
	}

	get valueStateText() {
		return this.valueStateTextMappings[this.valueState];
	}

	get hasValueState() {
		return this.valueState !== ValueState.None;
	}

	get hasValueStateText() {
		return this.hasValueState && this.valueState !== ValueState.Success;
	}

	get valueStateMessageText() {
		return this.getSlottedNodes("valueStateMessage").map(el => el.cloneNode(true));
	}

	get shouldDisplayDefaultValueStateMessage() {
		return !this.valueStateMessage.length && this.hasValueStateText;
	}

	get shouldOpenValueStateMessagePopover() {
		return this.focused && this.hasValueStateText && !this.hideInput;
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
			popoverHeader: {
				"width": `${this.ui5Input ? this.ui5Input.offsetWidth : 0}px`,
			},
		};
	}

	get ui5Input() {
		return this.shadowRoot.querySelector(".ui5-file-uploader-input");
	}

	static get dependencies() {
		return [Input, Popover];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}
}

FileUploader.define();

const e_imported_data_basket =  {
        "ID": "d003b03f-fd93-4995-85e9-91e77f9dc83d",
        "title": "Erfindungsmeldung \"Datenbanken für personenbezogene Daten\"",
        "status": "DRAFTING",
        "state": "WAITING",
        "type": "DATABASKET",
        "requestingDataProcessor": {
          "id": "0fb0832c-c1f9-4ce1-8c02-3ad65e8e6c2b",
          "type": "INTERNAL",
          "first_name": "Verena",
          "last_name": "Wagner-Müller",
          "full_name": "",
          "email": "",
          "faculty": "R01 Wissenschafts- und Technologietransfer",
          "job": "",
          "title": "",
          "roles": []
        },
        "selectedProcessingRecordID": "uuid-2",
        "topicAssignments": [],
        "template": "",
        "dataSets": [
          {
            "id": "e85332d9-45c9-43cd-9827-fa13eb27b5f1",
            "person": {
              "type": "INDIVIDUAL",
              "id": "572169b4-97fc-4eb6-a326-cbc937c0a110",
              "dataSubject": {
                "first_name": "Karl",
                "last_name": "Beer",
                "title": "Prof.",
                "job": "Professor/in",
                "faculty": "F01 Sozialwissenschaften",
                "id": "8241373d-215a-3c35-97a7-83d57562ffe8",
                "full_name": "Karl Beer",
                "type": "INTERNAL",
                "roles": [
                  "Professor/in"
                ],
                "email": "Karl.Beer@hochschule.de"
              }
            },
            "pii": [
              {
                "versionOption": "LATEST",
                "id": "c642875a-1e2f-4496-906b-f8a3965ed5b7",
                "dataCategory": {
                  "friendlyName": "Vorname",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_63"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "1b78c428-8163-473f-924e-f38c9837a5fb",
                "dataCategory": {
                  "friendlyName": "Nachname",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_64"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "a2be0662-8a8c-453b-a2ca-d6ec8a916fbd",
                "dataCategory": {
                  "friendlyName": "Titel",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_112"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "9043f556-32de-4258-aeb5-f1df8b9823aa",
                "dataCategory": {
                  "friendlyName": "Staatsangehörigkeit",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_71"
                  },
                  "isCriminalRecord": "FALSE"
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "edf6cfe0-bea7-4ed9-af61-4fb46635003b",
                "dataCategory": {
                  "friendlyName": "Adresse (Privat)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_14"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "85df9c42-ef3c-436e-a527-dfed646d4796",
                "dataCategory": {
                  "friendlyName": "Telefonnummer (Privat)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_12"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "354da6ab-d99b-457b-957e-328abc214a4b",
                "dataCategory": {
                  "friendlyName": "Beruf / Tätigkeit",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_35"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "fb49e60e-94b5-458f-9683-9f7ab073cf47",
                "dataCategory": {
                  "friendlyName": "Dienstliche Adresse",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_111"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "70732492-d22c-4e23-bb16-5f73ce72fe3e",
                "dataCategory": {
                  "friendlyName": "Telefonnummer (Beruflich)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_67"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "d00589d4-867f-457d-ab6b-66fdc58e9d62",
                "dataCategory": {
                  "friendlyName": "E-Mail-Adresse Beruflich",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_66"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              }
            ]
          },
          {
            "id": "7c74eec6-0c18-4b7b-9f38-115d977ad7b2",
            "person": {
                "type": "INDIVIDUAL",
                "id": "f1ad48b9-c4cf-4919-8afa-d67695da397d",
                "dataSubject": {
                    "id": "70baf2d4-a815-3131-bd11-706693f4fd6b",
                    "type": "EXTERNAL",
                    "first_name": "Sonja",
                    "last_name": "May",
                    "full_name": "Sonja May",
                    "email": "s.may@uni-versität.de",
                    "faculty": "",
                    "job": "",
                    "title": "Prof. Dr.",
                    "roles": []
                }
            },
            "pii": [
              {
                "versionOption": "LATEST",
                "id": "c642875a-1e2f-4496-906b-f8a3965ed5b7",
                "dataCategory": {
                  "friendlyName": "Vorname",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_63"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "1b78c428-8163-473f-924e-f38c9837a5fb",
                "dataCategory": {
                  "friendlyName": "Nachname",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_64"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "a2be0662-8a8c-453b-a2ca-d6ec8a916fbd",
                "dataCategory": {
                  "friendlyName": "Titel",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_112"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "9043f556-32de-4258-aeb5-f1df8b9823aa",
                "dataCategory": {
                  "friendlyName": "Staatsangehörigkeit",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_71"
                  },
                  "isCriminalRecord": "FALSE"
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "edf6cfe0-bea7-4ed9-af61-4fb46635003b",
                "dataCategory": {
                  "friendlyName": "Adresse (Privat)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_14"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "85df9c42-ef3c-436e-a527-dfed646d4796",
                "dataCategory": {
                  "friendlyName": "Telefonnummer (Privat)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_12"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "354da6ab-d99b-457b-957e-328abc214a4b",
                "dataCategory": {
                  "friendlyName": "Beruf / Tätigkeit",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_35"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "fb49e60e-94b5-458f-9683-9f7ab073cf47",
                "dataCategory": {
                  "friendlyName": "Dienstliche Adresse",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_111"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "70732492-d22c-4e23-bb16-5f73ce72fe3e",
                "dataCategory": {
                  "friendlyName": "Telefonnummer (Beruflich)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_67"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "d00589d4-867f-457d-ab6b-66fdc58e9d62",
                "dataCategory": {
                  "friendlyName": "E-Mail-Adresse Beruflich",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_66"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              }
            ]
          },
          {
            "id": "de78fa59-ff82-4f2a-b606-adfd2a4ff1c4",
            "person": {
              "type": "INDIVIDUAL",
              "id": "49d294a8-f88d-4608-9a72-c79506fc218e",
              "dataSubject": {
                "first_name": "Ibrahim",
                "last_name": "Göbel",
                "title": "Dr.",
                "job": "Wissenschaftliche/r Mitarbeiter/in",
                "faculty": "F02 Informatik",
                "id": "600dae60-44d8-3991-926b-cce61a530622",
                "full_name": "Ibrahim Göbel",
                "type": "INTERNAL",
                "roles": [
                  "Wissenschaftliche/r Mitarbeiter/in"
                ],
                "email": "Ibrahim.Göbel@hochschule.de"
              }
            },
            "pii": [
              {
                "versionOption": "LATEST",
                "id": "c642875a-1e2f-4496-906b-f8a3965ed5b7",
                "dataCategory": {
                  "friendlyName": "Vorname",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_63"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "1b78c428-8163-473f-924e-f38c9837a5fb",
                "dataCategory": {
                  "friendlyName": "Nachname",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_64"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "a2be0662-8a8c-453b-a2ca-d6ec8a916fbd",
                "dataCategory": {
                  "friendlyName": "Titel",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_112"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "9043f556-32de-4258-aeb5-f1df8b9823aa",
                "dataCategory": {
                  "friendlyName": "Staatsangehörigkeit",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_71"
                  },
                  "isCriminalRecord": "FALSE"
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "edf6cfe0-bea7-4ed9-af61-4fb46635003b",
                "dataCategory": {
                  "friendlyName": "Adresse (Privat)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_14"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_114"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "85df9c42-ef3c-436e-a527-dfed646d4796",
                "dataCategory": {
                  "friendlyName": "Telefonnummer (Privat)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_12"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "354da6ab-d99b-457b-957e-328abc214a4b",
                "dataCategory": {
                  "friendlyName": "Beruf / Tätigkeit",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_35"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "fb49e60e-94b5-458f-9683-9f7ab073cf47",
                "dataCategory": {
                  "friendlyName": "Dienstliche Adresse",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_111"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "70732492-d22c-4e23-bb16-5f73ce72fe3e",
                "dataCategory": {
                  "friendlyName": "Telefonnummer (Beruflich)",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_67"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              },
              {
                "versionOption": "LATEST",
                "id": "d00589d4-867f-457d-ab6b-66fdc58e9d62",
                "dataCategory": {
                  "friendlyName": "E-Mail-Adresse Beruflich",
                  "id": {
                    "type": "VODataCategoryID",
                    "value": "dat_cat_66"
                  },
                  "isCriminalRecord": "FALSE",
                  "typeOf": [
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_94"
                    },
                    {
                      "type": "VODataCategoryID",
                      "value": "dat_cat_96"
                    }
                  ]
                },
                "data_consent": "nicht vorhanden",
                "data_delete_date": "2023-01-01",
                "data_source": "Unbekannt",
                "data_last_change": "1975-08-19T22:15:30.000Z"
              }
            ]
          }
        ],
        "deadline": "",
        "description": "",
        "processing": "",
        "transmissionChannel": [
          "FILE_UPLOAD",
          "EMAIL"
        ],
        "lastActionDate": "",
        "numMessagesUnread": 0,
        "numIssues": 0,
        "progress": 100,
        "progressCompletenessPersonalData": 100,
        "progressCompletenessPersonalDataOtherDepartment": 0,
        "progressCompletenessPermissions": 100,
        "conversation": [],
        "personalMessageToDataSubjects": "",
        "personalMessageToPersonOrDepartment": "",
        "piiSource": "DATA_SUBJECT",
        "isAskToUpdateOutdatedPII": false,
        "dataSourcePersonOrDepartment": null
      };

const comDataBasketStep0Css = ".tooltips.sc-trusd-piiq-com-data-basket-step-0 .tooltiptext.sc-trusd-piiq-com-data-basket-step-0{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-step-0 .tooltiptext.sc-trusd-piiq-com-data-basket-step-0::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-step-0:hover .tooltiptext.sc-trusd-piiq-com-data-basket-step-0{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-step-0,.privacy-tooltip.sc-trusd-piiq-com-data-basket-step-0+.tooltip.sc-trusd-piiq-com-data-basket-step-0>.tooltip-inner.sc-trusd-piiq-com-data-basket-step-0{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-step-0{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-step-0{cursor:help}button.sc-trusd-piiq-com-data-basket-step-0:disabled{cursor:not-allowed;pointer-events:all !important}.file.sc-trusd-piiq-com-data-basket-step-0{margin:auto;width:100% !important;height:100%}.file-upload.sc-trusd-piiq-com-data-basket-step-0{height:100%}.border.border-primary.sc-trusd-piiq-com-data-basket-step-0{border-style:dashed !important}ui5-file-uploader.sc-trusd-piiq-com-data-basket-step-0{width:100% !important;height:100%}.card-block.sc-trusd-piiq-com-data-basket-step-0{border:1px solid lightgrey;border-radius:5px !important;background-color:#FAFAFA;padding:10px}.data-basket-option.sc-trusd-piiq-com-data-basket-step-0:hover{cursor:pointer;border:1px solid #007BFF}div.data-basket-option.sc-trusd-piiq-com-data-basket-step-0>a.sc-trusd-piiq-com-data-basket-step-0{font-style:italic !important}.progress-bar.sc-trusd-piiq-com-data-basket-step-0{width:0%}#overlay.sc-trusd-piiq-com-data-basket-step-0{position:absolute;background-color:rgba(255, 255, 255, 0.9);z-index:9999;cursor:wait;left:0;right:0;top:0;bottom:0}";

const DataBasketToolSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completed = createEvent(this, "completed", 7);
    this.data = {
      title: "",
      selectedProcessingRecordID: "",
      topicAssignments: [],
      template: ""
    };
    /**
     * @description The current status of the upload progress.
     */
    this.formUploadStatus = "NONE";
    /**
     * @description The progress of the upload (used for the progress bar).
     */
    this.formUploadProgress = 0;
  }
  /**
   * @description Handles file uploads for drop events.
   * @param ev drop event
   */
  formUploadDropHandler(ev) {
    // Prevent default browser behavior:
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      this.formUpload();
    }
  }
  /**
   * @description Handles file uploads for select file events.
   * @param ev select handler event
   */
  formUploadSelectHandler(ev) {
    ev = ev;
    this.formUpload();
  }
  /**
   * @description Mimmicks a form upload.
   */
  formUpload() {
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    this.formUploadStatus = "UPLOADING";
    sleep(500)
      .then(() => this.formUploadProgress = 5)
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => this.formUploadStatus = "DETECTING_FORM")
      .then(() => sleep(500).then(() => this.formUploadProgress += 10))
      .then(() => this.formUploadStatus = "EXTRACTING_PII")
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => this.formUploadStatus = "CREATE_DATA_BASKET")
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => sleep(500).then(() => this.formUploadProgress += 5))
      .then(() => this.formUploadStatus = "DONE")
      .then(() => this.formUploadProgress += 100)
      .then(() => this.completed.emit({ type: "FROM_FORM", databasket: e_imported_data_basket }));
  }
  render() {
    return (h("div", { class: "container-fluid" }, h("div", null, h("div", { class: "row justify-content-center text-center p-2 mb-2" }, this.formUploadStatus !== "NONE" ?
      h("div", { id: "overlay", class: "d-flex align-items-center justify-content-center" }, h("div", { class: "container-flex" }, h("div", { class: "row" }, h("div", { class: "col-12 text-center" }, h("div", { class: "file-upload" }, this.formUploadStatus == "UPLOADING" ? "Lade hoch" :
        this.formUploadStatus == "DETECTING_FORM" ? "Analysiere das Formular" :
          this.formUploadStatus == "EXTRACTING_PII" ? "Extrahiere personenbezogene Daten" :
            this.formUploadStatus == "CREATE_DATA_BASKET" ? "Erstelle Datenkorb" : "Fertig", h("div", { class: "progress" }, h("div", { style: { width: this.formUploadProgress + "%" }, class: "progress-bar", role: "progressbar", "aria-valuenow": "0", "aria-valuemin": "0", "aria-valuemax": "100" }))))), h("div", { class: "row" }, h("div", { class: "col-12 text-center" }, h("span", { class: "lead" }, "Importieren eines Formulars"), h("br", null), h("small", null, "Sie werden gleich weitergeleitet."))))) : "", h("div", { class: "col-xs-12  col-sm-8 col-md-5 col-lg-4 card-block text-center data-basket-option", onClick: () => {
        state.wizard = null;
        this.completed.emit({ type: "WIZARD" });
      } }, h("div", { class: "file text-center align-middle" }, h("p", { class: "text-primary" }, h("i", { class: "fa fa-magic fa-2x" })), h("p", { class: "text-primary" }, h("a", null, "Datenkorb selbst erstellen")), h("p", { class: "text-left" }, h("ul", null, h("li", null, "Gezielt pers. Daten abfragen"), h("li", null, "Einwilligungen einholen"), h("li", null, "Planen der Verarbeitung von pers. Daten"))))), h("div", { class: "col-auto text-center", style: { display: "table-cell", verticalAlign: "middle", paddingTop: "9%" } }, "oder"), h("div", { class: "col-xs-12 col-sm-8 col-md-5 col-lg-4 card-block text-center data-basket-option" }, h("div", { class: "border border-primary file-upload bg-light", onDrop: (ev) => this.formUploadDropHandler(ev), onDragOver: (ev) => ev.preventDefault() }, h("ui5-file-uploader", { accept: ".pdf,.doc,docx", "hide-input": true, onChange: (ev) => this.formUploadSelectHandler(ev) }, h("div", { class: "file text-center align-middle" }, h("p", null, h("a", null, "Formular hochladen und in Datenkorb umwandeln")), h("span", { class: "btn btn-outline-primary", style: { zIndex: "100" } }, h("i", { class: "fas fa-upload fa-1x" }), " Formular-Datei ausw\u00E4hlen"), h("br", null), h("span", { class: "small" }, "... oder hierhin ziehen"), h("br", null), h("p", { class: "small" }, h("i", { class: "fas fa-file-word" }), " Word (doc, docx)\u00A0\u00A0", h("i", { class: "fas fa-file-pdf" }), " PDF (z. B. Scan)")))))), h("div", { class: "row justify-content-center" }, h("div", { class: "col" }, h("p", { class: "text-muted" }, language.newDataBasketTipContinue))))));
  }
};
DataBasketToolSwitch.style = comDataBasketStep0Css;

export { DataBasketToolSwitch as trusd_piiq_com_data_basket_step_0 };
