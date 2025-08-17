import { r as registerInstance, i as createEvent, h, g as getElement } from './index-dee1f973.js';
import { f as flat } from './InputSuggestions-a4de662b.js';
import { l as language } from './de-DE-5564f65b.js';
import { E as EDataBasket } from './EDataBasket-f2b29bfe.js';
import { s as state } from './store-9032fc40.js';
import './Input-0ee3a2d0.js';
import './StandardListItem-6305d5b8.js';
import './Button-7dc82d4c.js';
import './MessageStrip-d043c32b.js';
import { f as findProcessingRecordEntryByID, a as extractDataSubjectCategories, b as extractPIICategories, e as extractLegalFoundations } from './utils-8ebcd8ca.js';
import './Icons-85d4abff.js';
import './i18n-defaults-dca87248.js';
import './Tokenizer-d8a8b2e5.js';
import './decline-a03835ab.js';
import './Popover-0d784de7.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './ValueState-a7516d8f.js';
import './ResponsivePopover-cdfbc391.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './index-912d1a21.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';
import './BusyIndicator-60b0b9ee.js';
import './index-de766dcc.js';

const comDataBasketStep1Css = ".tooltips.sc-trusd-piiq-com-data-basket-step-1 .tooltiptext.sc-trusd-piiq-com-data-basket-step-1{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-step-1 .tooltiptext.sc-trusd-piiq-com-data-basket-step-1::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-step-1:hover .tooltiptext.sc-trusd-piiq-com-data-basket-step-1{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-step-1,.privacy-tooltip.sc-trusd-piiq-com-data-basket-step-1+.tooltip.sc-trusd-piiq-com-data-basket-step-1>.tooltip-inner.sc-trusd-piiq-com-data-basket-step-1{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-step-1{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-step-1{cursor:help}button.sc-trusd-piiq-com-data-basket-step-1:disabled{cursor:not-allowed;pointer-events:all !important}.sc-trusd-piiq-com-data-basket-step-1-h{display:block}#search-input.sc-trusd-piiq-com-data-basket-step-1{width:100%}#topic-assignments.sc-trusd-piiq-com-data-basket-step-1{width:100%;height:100%}#title-input.sc-trusd-piiq-com-data-basket-step-1{width:100%}.search-input-icon.sc-trusd-piiq-com-data-basket-step-1{background:#fafafa;color:#0a6ed1;cursor:pointer}.search-input-icon.sc-trusd-piiq-com-data-basket-step-1:hover{background:rgba(224,224,224,0.5)}.card-block.sc-trusd-piiq-com-data-basket-step-1{border:1px solid lightgrey;border-radius:2px !important;background-color:#FAFAFA;padding:10px}.trusd-button-select.sc-trusd-piiq-com-data-basket-step-1:hover{cursor:pointer;border:1px solid #007BFF}";

const DataBasketStart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completed = createEvent(this, "completed", 7);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    /**
     * The received processing records
     */
    this.processingRecords = [];
    this.renderedProcessingRecords = this.processingRecords;
    // Filter processing records.
    this.filterSearchProcessingRecords = "";
    this.update = 0;
    this.dataBasket = new EDataBasket();
  }
  itemClickHandler(ev) {
    this.dataBasket.selectedProcessingRecordID = ev.detail.selectedItems[0].id;
    this.update++;
  }
  itemDeleteHandler() {
    this.dataBasket.selectedProcessingRecordID = "";
    this.update++;
  }
  componentWillLoad() {
    this.dataBasket.isNewProcessingRecordEntry = false;
    this.dataBasket.activityLog.addCreated(this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name);
  }
  componentDidLoad() {
    // Check the number of records in the database:
    // let api = new DefaultApi(new Configuration({ basePath: this.HostBasePath }))
    // api.processingrecordentriesGet({})
    //   .then((res) => {
    //     this.processingRecords = res
    //     console.log(res)
    //   }).catch((err) => {
    //     console.log(err)
    //   });
    this.processingRecords = state.dbEProcessingRecordEntry;
    console.log(this.processingRecords[0].id);
  }
  componentWillRender() {
    this.renderedProcessingRecords = this.processingRecords;
    // Filtering:
    if (this.filterSearchProcessingRecords !== "") {
      this.renderedProcessingRecords = this.processingRecords.filter((processingRecord) => {
        let flatObj = flat.flatten(processingRecord);
        for (let key in flatObj) {
          if ((typeof (flatObj[key]) === "string" || flatObj instanceof String) && flatObj[key].toLowerCase().includes(this.filterSearchProcessingRecords.toLowerCase())) {
            return true;
          }
        }
      });
    }
  }
  componentDidRender() {
    // unselect all items and select the correct item:
    if (this.dataBasket.selectedProcessingRecordID !== undefined) {
      this.selectedItem.querySelectorAll("ui5-list[id='select-purpose'] > ui5-li").forEach((el) => {
        el.selected = false;
      });
      let ui5Li = this.selectedItem.querySelector("ui5-li[id='" + this.dataBasket.selectedProcessingRecordID + "']");
      if (ui5Li)
        ui5Li.selected = true;
    }
  }
  render() {
    return (h("div", { class: "container-fluid" }, h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Bitte w\u00E4hlen Sie den Zweck oder die Grundlage der geplanten Datenverarbeitungsaktivit\u00E4t aus:*"), h("div", { class: "row", hidden: true }, h("ui5-radiobutton", { text: "Standard (bereits genehmigte Zwecke)", selected: !this.dataBasket.isNewProcessingRecordEntry, onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { isNewProcessingRecordEntry: false }), name: "GroupPurposeSelection" }), h("ui5-radiobutton", { text: "Neuer Zweck oder Zweck selbst festlegen", selected: this.dataBasket.isNewProcessingRecordEntry, onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { isNewProcessingRecordEntry: true }), name: "GroupPurposeSelection" })), !this.dataBasket.isNewProcessingRecordEntry ?
      h("div", null, this.dataBasket.selectedProcessingRecordID === "" ?
        h("div", { class: "col-12 card-block text-center trusd-button-select", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, h("div", { class: "file text-center align-middle" }, h("p", null), h("span", { class: "text-primary" }, h("i", { class: "fas fa-hand-pointer" }), "\u00A0\u00A0Zweck oder Grundlage ausw\u00E4hlen"), h("p", null)))
        :
          h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-list", { mode: "Delete" }, h("ui5-li", { class: "col-12", selected: true, description: this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID).purposes.map((str) => " " + str.displayName) }, this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID).friendlyName))), h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))))
      :
        h("div", null, h("ui5-messagestrip", { type: "Information", "no-icon": true, "no-close-button": true }, h("p", null, h("b", null, "Hinweis")), "Neue Zwecke m\u00FCssen durch den Datenschutzbeauftragten gepr\u00FCft und genehmigt werden. Sie sollten diese Option daher nur w\u00E4hlen, wenn Ihre geplante Verarbeitungsaktivit\u00E4t noch nicht im Verzeichnis hinterlegt ist.")), h("trusd-com-modal-window", null, h("span", { slot: "modal-title" }, "Verzeichnis von genehmigten Datenverarbeitungsaktivit\u00E4ten"), h("div", { slot: "modal-content" }, h("div", { class: "d-flex justify-content-center" }, h("input", { type: "text", class: "form-control", onInput: ev => { this.filterSearchProcessingRecords = ev.target.value; }, placeholder: language.placeholderSearch })), h("ui5-list", { id: "select-purpose", growing: "Scroll", mode: "SingleSelect" }, this.renderedProcessingRecords.map((processingRecord) => h("ui5-li", { id: processingRecord.id.value, description: processingRecord.purposes.map((str) => " " + str.displayName), info: processingRecord.friendlyName.includes("Erfindung") ? "häufig verwendet" : "", "info-state": "Success" }, processingRecord.friendlyName))), this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID) ?
      h("div", { class: "col-12 mt-3 border shadow bg-light" }, h("div", null, h("div", { class: "row" }, h("div", { class: "col-12" }, h("h5", { class: "lead" }, "\u00DCbersicht der ausgew\u00E4hlten Verarbeitungst\u00E4tigkeit"))), h("div", { class: "row" }, h("div", { class: "col-12 mb-3" }, h("h6", null, "Gestatte Zwecke"), findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).purposes.map(purpose => h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, purpose.displayName), purpose.descriptionText))), h("div", { class: "col-sm-4 col-lg-4 text-truncate" }, h("p", { class: "" }, h("i", { class: "fas fa-user-tag fa-1x", title: "Kategorien m\u00F6glicher betroffener Personen" }), "\u00A0Kat. betroffene Personen"), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID)) {
          return extractDataSubjectCategories(this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, el.friendlyName))), h("div", { class: "col-sm-4 col-lg-4 text-truncate" }, h("p", { class: "" }, h("i", { class: "fas fa-tags fa-1x ", title: "Kategorien der personenbezogenen Daten" }), "\u00A0Kat. personenbezogener Daten"), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID)) {
          return extractPIICategories(this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, el.friendlyName))), h("div", { class: "col-sm-4 col-lg-4 text-truncate" }, h("p", { class: "" }, h("i", { class: "fas fa-gavel fa-1x", title: "Rechtsgrundlage" }), "\u00A0Rechtsgrundlage"), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID)) {
          return extractLegalFoundations(this.processingRecords.find(elRecord => elRecord.id.value === this.dataBasket.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, "DSGVO Art. 6 (1) ", el.type.toLowerCase()))))))
      : ""), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.dataBasket.selectedProcessingRecordID = ""; document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open"); } }, language.btnCancel), "\u00A0", h("button", { type: "button", class: "btn btn-primary", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, language.btnSave))))), h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Bitte geben Sie der geplanten Datenverarbeitungsaktivit\u00E4t einen Namen:*"), h("div", { class: "row" }, h("div", { class: "col" }, h("input", { type: "text", class: "form-control", onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { title: ev.target.value }), placeholder: "z. B.: Abschlussbericht, Forschungsantrag Projekt, Einstellung Frau Freudscheidt, ..." })), this.dataBasket.title !== "" ?
      h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))
      : ""))), h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Bitte beschreiben Sie m\u00F6glichst genau, wof\u00FCr Sie die Daten verarbeiten m\u00F6chten:*"), h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.description, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { description: ev.target.value }), placeholder: "z. B.: Erstellen und Verwalten der Teilnehmerliste f\u00FCr die Veranstaltung am Donnerstag." })), this.dataBasket.description !== "" ?
      h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))
      : ""))), h("div", { class: "row pt-3" }, h("div", { class: "col d-flex flex-row-reverse bd-highlight" }, h("button", { onClick: () => this.completed.emit(this.dataBasket), type: "button", class: "btn btn-primary float-right", disabled: this.dataBasket.title === "" || this.dataBasket.selectedProcessingRecordID === "" || this.dataBasket.description === "", "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, " Daten und Personen ausw\u00E4hlen \u00A0 ", h("i", { class: "fas fa-chevron-right" }))))));
  }
  get selectedItem() { return getElement(this); }
};
DataBasketStart.route = "/vorlagen/datenkorb";
DataBasketStart.style = comDataBasketStep1Css;

export { DataBasketStart as trusd_piiq_com_data_basket_step_1 };
