import { r as registerInstance, h } from './index-dee1f973.js';
import { E as EDataBasket, b as EnumStatus } from './EDataBasket-f2b29bfe.js';
import { f as findProcessingRecordEntryByID } from './utils-8ebcd8ca.js';
import { s as state } from './store-9032fc40.js';
import './StandardListItem-6305d5b8.js';
import { g as getNextZIndex } from './Popover-0d784de7.js';
import { D as DataType, s as scopedHtml, a as styleMap, i as ifDefined, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, I as Integer, U as UI5Element, l as litRender } from './Icons-85d4abff.js';
import { C as ComDataBasketGrid } from './trusd-piiq-com-data-basket-grid-d7060e45.js';
import { l as language } from './de-DE-5564f65b.js';

/**
 * @lends sap.ui.webcomponents.main.types.ToastPlacement.prototype
 * @public
 */
const ToastPlacements = {

	/**
	 * <code>ui5-toast</code> is placed at the <code>TopStart</code> position of its container.
	 * @public
	 * @type {TopStart}
	 */
	TopStart: "TopStart",

	/**
	 * <code>ui5-toast</code> is placed at the <code>TopCenter</code> position of its container.
	 * @public
	 * @type {TopCenter}
	 */
	TopCenter: "TopCenter",

	/**
	 * <code>ui5-toast</code> is placed at the <code>TopEnd</code> position of its container.
	 * @public
	 * @type {TopEnd}
	 */
	TopEnd: "TopEnd",

	/**
	 * <code>ui5-toast</code> is placed at the <code>MiddleStart</code> position of its container.
	 * @public
	 * @type {MiddleStart}
	 */
	MiddleStart: "MiddleStart",

	/**
	 * <code>ui5-toast</code> is placed at the <code>MiddleCenter</code> position of its container.
	 * @public
	 * @type {MiddleCenter}
	 */
	MiddleCenter: "MiddleCenter",

	/**
	 * <code>ui5-toast</code> is placed at the <code>MiddleEnd</code> position of its container.
	 * @public
	 * @type {MiddleEnd}
	 */
	MiddleEnd: "MiddleEnd",

	/**
	 * <code>ui5-toast</code> is placed at the <code>BottomStart</code> position of its container.
	 * @public
	 * @type {BottomStart}
	 */
	BottomStart: "BottomStart",

	/**
	 * <code>ui5-toast</code> is placed at the <code>BottomCenter</code> position of its container.
	 * Default placement (no selection)
	 * @public
	 * @type {BottomCenter}
	 */
	BottomCenter: "BottomCenter",

	/**
	 * <code>ui5-toast</code> is placed at the <code>BottomEnd</code> position of its container.
	 * @public
	 * @type {BottomEnd}
	 */
	BottomEnd: "BottomEnd",
};

/**
 * @class
 * Defines where the <code>ui5-toast</code> will be placed.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.ToastPlacement
 * @public
 * @enum {string}
 */
class ToastPlacement extends DataType {
	static isValid(value) {
		return !!ToastPlacements[value];
	}
}

ToastPlacement.generateTypeAccessors(ToastPlacements);

const block0 = (context) => { return scopedHtml`<div class="ui5-toast-root" role="alert" style="${styleMap(context.styles.root)}" dir="${ifDefined(context.effectiveDir)}" @mouseover="${context._onmouseover}" @mouseleave="${context._onmouseleave}" @transitionend="${context._ontransitionend}"><bdi><slot></slot></bdi></div>`; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const ToastCss = ":host{font-family:\"72override\",var(--sapFontFamily);color:var(--sapTextColor);font-size:var(--sapFontSize)}:host([open]) .ui5-toast-root{display:block}.ui5-toast-root{position:fixed;display:none;box-sizing:border-box;max-width:15rem;overflow:hidden;padding:1rem;background:var(--_ui5_toast_background);box-shadow:var(--_ui5_toast_shadow);border-radius:.25rem;transition-property:opacity;opacity:1;font-family:inherit;color:inherit;font-weight:inherit;font-size:inherit;word-wrap:break-word;text-align:center;text-overflow:ellipsis;white-space:pre-line}@media screen and (-ms-high-contrast:active){.ui5-toast-root{border:1px solid var(--sapPageFooter_BorderColor)}}:host(:not([placement])) .ui5-toast-root{bottom:var(--_ui5_toast_vertical_offset);left:50%;transform:translateX(-50%)}:host([placement=TopStart]) .ui5-toast-root{top:var(--_ui5_toast_vertical_offset);left:var(--_ui5_toast_horizontal_offset)}:host([placement=MiddleStart]) .ui5-toast-root{left:var(--_ui5_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement=BottomStart]) .ui5-toast-root{left:var(--_ui5_toast_horizontal_offset);bottom:var(--_ui5_toast_vertical_offset)}:host([placement=TopCenter]) .ui5-toast-root{top:var(--_ui5_toast_vertical_offset);left:50%;transform:translateX(-50%)}:host([placement=MiddleCenter]) .ui5-toast-root{left:50%;top:50%;transform:translate(-50%,-50%)}:host([placement=BottomCenter]) .ui5-toast-root{bottom:var(--_ui5_toast_vertical_offset);left:50%;transform:translateX(-50%)}:host([placement=TopEnd]) .ui5-toast-root{right:var(--_ui5_toast_horizontal_offset);top:var(--_ui5_toast_vertical_offset)}:host([placement=MiddleEnd]) .ui5-toast-root{right:var(--_ui5_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement=BottomEnd]) .ui5-toast-root{right:var(--_ui5_toast_horizontal_offset);bottom:var(--_ui5_toast_vertical_offset)}";

// Constants
const MIN_DURATION = 500;
const MAX_DURATION = 1000;

/**
 * @public
 */
const metadata = {
	tag: "ui5-toast",
	properties: /** @lends sap.ui.webcomponents.main.Toast.prototype */ {

		/**
		 * Defines the duration in milliseconds for which <code>ui5-toast</code>
		 * remains on the screen before it's automatically closed.
		 * <br><br>
		 * <b>Note:</b> The minimum supported value is <code>500</code> ms
		 * and even if a lower value is set, the duration would remain <code>500</code> ms.
		 *
		 * @type {Integer}
		 * @defaultvalue 3000
		 * @public
		 */
		duration: {
			type: Integer,
			defaultValue: 3000,
		},

		/**
		 * Defines the placement of the <code>ui5-toast</code> web component.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>TopStart</code></li>
		 * <li><code>TopCenter</code></li>
		 * <li><code>TopEnd</code></li>
		 * <li><code>MiddleStart</code></li>
		 * <li><code>MiddleCenter</code></li>
		 * <li><code>MiddleEnd</code></li>
		 * <li><code>BottomStart</code></li>
		 * <li><code>BottomCenter</code></li>
		 * <li><code>BottomEnd</code></li>
		 * </ul>
		 *
		 * @type {ToastPlacement}
		 * @defaultvalue "BottomCenter"
		 * @public
		 */
		placement: {
			type: ToastPlacement,
			defaultValue: ToastPlacement.BottomCenter,
		},

		/**
		 * Indicates whether <code>ui5-toast</code> is open (visible).
		 * @type {boolean}
		 * @private
		 */
		open: {
			type: Boolean,
		},

		/**
		 * Indicates whether <code>ui5-toast</code> is hovered.
		 * @type {boolean}
		 * @private
		 */
		hover: {
			type: Boolean,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.Toast.prototype */ {
		/**
		 * Defines the text of the <code>ui5-toast</code> web component.
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
 * The <code>ui5-toast</code> is a small, non-disruptive popup for success or information messages that
 * disappears automatically after a few seconds.
 *
 *
 * <h3>Usage</h3>
 *
 * <h4>When to use:</h4>
 * <ul>
 * <li>You want to display a short success or information message.</li>
 * <li>You do not want to interrupt users while they are performing an action.</li>
 * <li>You want to confirm a successful action.</li>
 * </ul>
 * <h4>When not to use:</h4>
 * <ul>
 * <li>You want to display error or warning message.</li>
 * <li>You want to interrupt users while they are performing an action.</li>
 * <li>You want to make sure that users read the message before they leave the page.</li>
 * <li>You want users to be able to copy some part of the message text.</li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Toast";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Toast
 * @extends UI5Element
 * @tagname ui5-toast
 * @public
 * @since 1.0.0-rc.6
 */
class Toast extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get styles() {
		return ToastCss;
	}

	static get template() {
		return main;
	}

	onAfterRendering() {
		if (this._reopen) {
			this._reopen = false;
			this._initiateOpening();
		}
	}

	/**
	 * Shows the <code>ui5-toast</code>.
	 * @public
	 */
	show() {
		if (this.open) {
			// If the Toast is already opened, we set the _reopen flag to true, in
			// order to trigger re-rendering after an animation frame
			// in the onAfterRendering hook.
			// This is needed for properly resetting the opacity transition.
			this._reopen = true;
			this.open = false;
		} else {
			this._initiateOpening();
		}
	}

	/**
	 * If the minimum duration is lower than 500ms, we force
	 * it to be 500ms, as described in the documentation.
	 * @private
	 * @returns {*}
	 */
	get effectiveDuration() {
		return this.duration < MIN_DURATION ? MIN_DURATION : this.duration;
	}

	get styles() {
		// Transition duration (animation) should be a third of the duration
		// property, but not bigger than the maximum allowed (1000ms).
		const transitionDuration = Math.min(this.effectiveDuration / 3, MAX_DURATION);

		return {
			root: {
				"transition-duration": this.open ? `${transitionDuration}ms` : "",

				// Transition delay is the duration property minus the
				// transition duration (animation).
				"transition-delay": this.open ? `${this.effectiveDuration - transitionDuration}ms` : "",

				// We alter the opacity property, in order to trigger transition
				"opacity": this.open && !this.hover ? "0" : "",

				"z-index": getNextZIndex(),
			},
		};
	}

	_initiateOpening() {
		requestAnimationFrame(_ => {
			this.open = true;
		});
	}

	_ontransitionend() {
		if (this.hover) {
			return;
		}
		this.open = false;
	}

	_onmouseover() {
		this.hover = true;
	}

	_onmouseleave() {
		this.hover = false;
	}
}

Toast.define();

const comDataBasketImportEditCss = "";

const DataBasketImportEdit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    /* HTML FORM */
    this.formWidgetOutdatedData = 0;
    this.formTabPaneState = "PERSONAL_DATA";
    this.formMessageNew = "";
  }
  /* METHODS */
  getDataSet() {
    this.dataBasket.dataSets.forEach(ds => {
      ds.pii.forEach(data => {
        data.data_consent = language.labelNotAvailable,
          data.data_delete_date = '2023-01-01',
          data.data_source = language.labelUnkown,
          data.data_last_change = new Date('August 19, 1975 23:15:30');
      });
    });
    return this.dataBasket.dataSets;
  }
  getActuality() {
    var actuality = "latest";
    this.dataBasket.dataSets.forEach(ds => {
      ds.pii.forEach(data => {
        if (actuality == "latest") {
          actuality = data.data_last_change.toString();
        }
        else {
          actuality = data.data_last_change.toString();
        }
      });
    });
    return actuality;
  }
  getDeleteDate() {
    var deleteDate = "never";
    this.getDataSet().forEach(ds => {
      ds.pii.forEach(data => {
        if (deleteDate == "never") {
          if (data.data_delete_date != "never") {
            deleteDate = data.data_delete_date;
          }
        }
        else {
          if (data.data_delete_date < deleteDate) {
            deleteDate = data.data_delete_date;
          }
        }
      });
    });
    return deleteDate;
  }
  countData() {
    var count = 0;
    this.dataBasket.dataSets.forEach(ds => {
      ds.pii.forEach(data => {
        data;
        count++;
      });
    });
    return count;
  }
  componentWillLoad() {
    if (!this.dataBasket) {
      this.dataBasket = state.importedFromForm;
      if (!this.dataBasket)
        console.log("Error: no data basket");
    }
    this.dataBasket.dataSets.map((s) => {
      if (EDataBasket.checkOutdatedPII(this.dataBasket, s) === "OUTDATED" && this.formWidgetOutdatedData > -1) {
        this.formWidgetOutdatedData += 1;
      }
      else if (EDataBasket.checkOutdatedPII(this.dataBasket, s) === "UNKNOWN") {
        this.formWidgetOutdatedData = -1;
      }
    });
  }
  componentWillRender() {
    //this.dataBasket.numMessagesUnread = 1
  }
  componentDidLoad() {
  }
  componentDidRender() {
    $("[data-toggle='tooltip']").tooltip();
    console.log(this.dataBasket);
  }
  render() {
    return (h("div", { class: "container" }, this.dataBasket.status === EnumStatus.DRAFTING ?
      h("div", { class: "row p-2 mt-3" }, h("div", { class: "col-12" }, h("ui5-messagestrip", { type: "Warning", "no-close-button": true }, h("b", null, language.labelInProgress, " ."), " ", language.labelDataBasketNotActive), h("diV", null))) : "", h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Ausgew\u00E4hlte Verarbeitungst\u00E4tigkeit"), h("div", { class: "row", hidden: true }, h("ui5-radiobutton", { text: "Standard (bereits genehmigte Zwecke)", selected: !this.dataBasket.isNewProcessingRecordEntry, onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { isNewProcessingRecordEntry: false }), name: "GroupPurposeSelection" }), h("ui5-radiobutton", { text: "Neuer Zweck oder Zweck selbst festlegen", selected: this.dataBasket.isNewProcessingRecordEntry, onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { isNewProcessingRecordEntry: true }), name: "GroupPurposeSelection" })), !this.dataBasket.isNewProcessingRecordEntry ?
      h("div", null, this.dataBasket.selectedProcessingRecordID === "" ?
        h("div", { class: "col-12 card-block text-center trusd-button-select", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, h("div", { class: "file text-center align-middle" }, h("p", null), h("span", { class: "text-primary" }, h("i", { class: "fas fa-hand-pointer" }), "\u00A0\u00A0Zweck oder Grundlage ausw\u00E4hlen"), h("p", null)))
        :
          h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-list", { mode: "Delete" }, h("ui5-li", { class: "col-12", selected: true, description: findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).purposes.map((str) => " " + str.displayName) }, findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).friendlyName))), h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))))
      :
        h("div", null, h("ui5-messagestrip", { type: "Information", "no-icon": true, "no-close-button": true }, h("p", null, h("b", null, "Hinweis")), "Neue Zwecke m\u00FCssen durch den Datenschutzbeauftragten gepr\u00FCft und genehmigt werden. Sie sollten diese Option daher nur w\u00E4hlen, wenn Ihre geplante Verarbeitungsaktivit\u00E4t noch nicht im Verzeichnis hinterlegt ist.")))), h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Name der geplanten Datenverarbeitungst\u00E4tigkeit"), h("div", { class: "row" }, h("div", { class: "col" }, h("input", { type: "text", class: "form-control", value: this.dataBasket.title, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { title: ev.target.value }), placeholder: "z. B.: Abschlussbericht, Forschungsantrag Projekt, Einstellung Frau Freudscheidt, ..." })), this.dataBasket.title !== "" ?
      h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))
      : ""))), h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Beschreibung des Zwecks der geplanten Datenverarbeitungsaktivit\u00E4t"), h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.description, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { description: ev.target.value }), placeholder: "z. B.: Erstellen und Verwalten der Teilnehmerliste f\u00FCr die Veranstaltung am Donnerstag." })), this.dataBasket.description !== "" ?
      h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))
      : ""))), h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Betroffene Personen und personenbezogene Daten "), 
    // We only show progress on personal data collection when the data basket is used to collect the data. Otherwise, this does not make any sense.
    this.dataBasket.requestDataRequestedFrom === "SELF" ? "" :
      h("div", { class: "col-12" }, h("div", { class: "row w-100 pt-3" }, (this.dataBasket.progressCompletenessPersonalData < 100 && this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT") ?
        h("div", { class: "col ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die angefragten Daten sind erst zu " + this.dataBasket.progressCompletenessPersonalData + "% vollständig." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { Type: "percent", ProgressMax: 100, ProgressCurrent: this.dataBasket.progressCompletenessPersonalData }))), h("div", { class: "col-9 text-center" }, h("h6", { class: "font-weight-light" }, "Datenvollst\u00E4ndigkeit:"), h("small", { class: "badge badge-warning " }, "unvollst\u00E4ndig")))))
        : (this.dataBasket.progressCompletenessPersonalData < 100 && this.dataBasket.progressCompletenessPersonalDataOtherDepartment == 100) ?
          h("div", { class: "col ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Alle angefragten Daten stehen in einer anderen Abteilung zur Verfügung und werden Ihnen zur Verfügung gestellt." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { ProgressColor: "#dc3545", Type: "percent", ProgressMax: 100, ProgressCurrent: this.dataBasket.progressCompletenessPersonalData }))), h("div", { class: "col-9 text-center" }, h("h6", { class: "font-weight-light" }, "Datenvollst\u00E4ndigkeit:"), h("small", { class: "badge badge-warning" }, "unvollst\u00E4ndig"), "\u00A0", h("small", { class: "badge badge-success " }, "vorr\u00E4tig")))))
          :
            h("div", { class: "col ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Alle angefragten Daten sind vollständig und stehen Ihnen sofort zur Verfügung." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { Type: "percent", ProgressMax: 100, ProgressCurrent: this.dataBasket.progressCompletenessPersonalData }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenvollst\u00E4ndigkeit:"), h("small", { class: "font-weight-light" }, "vollst\u00E4ndig"))))), this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
        h("div", { class: "col ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Sie haben die Daten bei" + (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ? " den betroffenen Personen angefragt" : " einer Abteilung oder bestimmten Person angefragt") }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "fas fa-user-friends fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Anfragen bei:"), this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ?
          h("small", { class: "font-weight-light" }, "betroffene Personen")
          :
            h("small", { class: "font-weight-light", style: { lineHeight: "90%" } }, this.dataBasket.dataSourcePersonOrDepartment.last_name + ", " + this.dataBasket.dataSourcePersonOrDepartment.first_name))))) : "", this.formWidgetOutdatedData == -1 ?
        h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die Aktualität der Daten konnte nicht ermittelt werden." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "far fa-calendar-times fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenaktualit\u00E4t:"), h("small", { class: "font-weight-light" }, "unbekannt")))))
        :
          this.formWidgetOutdatedData > 0 ?
            h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Bei " + this.formWidgetOutdatedData + " Person(en) sind die verfügbaren personenbezogenen Daten eventuell veraltet." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "far fa-calendar-times fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenaktualit\u00E4t:"), h("small", { class: "badge badge-warning" }, "\u00E4lter als 180 Tage")))))
            :
              h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die personenbezogenen Daten sind aktuell." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "fas fa-calendar-check fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenaktualit\u00E4t:"), h("small", { class: "font-weight-light" }, "aktuell"))))), h("div", { class: "col ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die von Ihnen angegebene Frist, bis zu der Sie die Daten benötigen." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "far fa-calendar-alt fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light" }, "R\u00FCckmeldefrist:"), h("small", { class: "font-weight-light" }, this.dataBasket.deadline !== "" ? this.dataBasket.deadline : "Keine Frist festgelgt"))))))), (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER") ?
      h("div", null, this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ?
        h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Pers\u00F6nliche Nachricht an die ", h("b", null, "betroffenen Personen"), " (optional):"), h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.requestPersonalMessageToDataSubjects, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestPersonalMessageToDataSubjects: ev.target.value }) })), this.dataBasket.requestPersonalMessageToDataSubjects && this.dataBasket.requestPersonalMessageToDataSubjects !== "" ?
          h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : "")))
        : this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
          h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Pers\u00F6nliche Nachricht an die ausgew\u00E4hlte ", h("b", null, "Kontaktperson oder Abteilung"), " (optional):"), h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.requestPersonalMessageToPersonOrDepartment, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestPersonalMessageToPersonOrDepartment: ev.target.value }) })), this.dataBasket.requestPersonalMessageToPersonOrDepartment && this.dataBasket.requestPersonalMessageToPersonOrDepartment !== "" ?
            h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""))) : "") : "", h("div", { class: "col-12 pt-3" }, h("hr", { class: "bg-primary" })), h("div", { class: "col-12 pt-3" }, h("details", { open: true }, h("summary", { class: "pl-2 btn-outline-primary border rounded" }, this.dataBasket.dataSets.length, " betroffene Person(en) anzeigen"), this.dataBasket.dataSets.length > 0 ?
      h("div", { class: "row p-3 m-0 bg-light overflow-auto", style: { maxHeight: "400px" } }, h("trusd-piiq-com-data-basket-data-subject-list", { class: "w-100", hideSendMessage: true, dataBasket: this.dataBasket })) :
      h("div", { class: "row" }, h("div", { class: "col-3" }), h("div", { class: "col-6" }, h("p", { class: "text-center font-italic w-100" }, "Bitte w\u00E4hlen Sie oben die personenbezogenen Daten und die betroffenen Personen aus und f\u00FCgen Sie Ihre Auswahl anschlie\u00DFend dem Datenkorb hinzu.")), h("div", { class: "col-3" })))))), this.dataBasket.status === EnumStatus.DRAFTING ?
      h("div", { class: "row d-flex justify-content-end" }, h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-outline-danger ", onClick: () => state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID)] }, "Verwerfen")), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-outline-primary", onClick: () => {
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.DRAFTING });
          this.dataBasket = EDataBasket.updateProgress(this.dataBasket);
          state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID), this.dataBasket];
          document.getElementById("toast-data-basket-import-save-draft").show();
        } }, "Als Entwurf Speichern")), h("ui5-toast", { id: "toast-data-basket-import-save-draft" }, h("ui5-messagestrip", { type: "Positive", "no-close-button": true }, h("b", null, "Gespeichert!"))), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-success", onClick: () => {
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.ACTIVE });
          this.dataBasket = EDataBasket.updateProgress(this.dataBasket);
          state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID), this.dataBasket];
          // navigate to active data basket:
          window.location.href = state.baseURL + ComDataBasketGrid.route + "/" + this.dataBasket.ID;
        } }, this.dataBasket.ID.startsWith("d003b03f") ?
        h("span", null, "Personenbezogene Daten erfassen")
        :
          h("span", null, h("i", { class: "fas fa-paper-plane" }), " Anfragen versenden und Datenkorb aktivieren")))) : ""));
  }
};
DataBasketImportEdit.route = "/vorlagen/datenkorb/import";
DataBasketImportEdit.style = comDataBasketImportEditCss;

export { DataBasketImportEdit as D };
