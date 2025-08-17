import { r as registerInstance, i as createEvent, h, g as getElement } from './index-dee1f973.js';
import { f as flat } from './InputSuggestions-a4de662b.js';
import './Input-0ee3a2d0.js';
import './StandardListItem-6305d5b8.js';
import './Button-7dc82d4c.js';
import './MessageStrip-d043c32b.js';
import { l as language } from './de-DE-5564f65b.js';
import { s as state } from './store-9032fc40.js';
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
import './BusyIndicator-60b0b9ee.js';

const comDataBasketPermissionStep1Css = ".tooltips.sc-trusd-piiq-com-data-basket-permission-step-1 .tooltiptext.sc-trusd-piiq-com-data-basket-permission-step-1{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-permission-step-1 .tooltiptext.sc-trusd-piiq-com-data-basket-permission-step-1::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-permission-step-1:hover .tooltiptext.sc-trusd-piiq-com-data-basket-permission-step-1{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-permission-step-1,.privacy-tooltip.sc-trusd-piiq-com-data-basket-permission-step-1+.tooltip.sc-trusd-piiq-com-data-basket-permission-step-1>.tooltip-inner.sc-trusd-piiq-com-data-basket-permission-step-1{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-permission-step-1{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-permission-step-1{cursor:help}button.sc-trusd-piiq-com-data-basket-permission-step-1:disabled{cursor:not-allowed;pointer-events:all !important}.sc-trusd-piiq-com-data-basket-permission-step-1-h{display:block}#select-purpose.sc-trusd-piiq-com-data-basket-permission-step-1{height:300px}#search-input.sc-trusd-piiq-com-data-basket-permission-step-1{width:100%}#topic-assignments.sc-trusd-piiq-com-data-basket-permission-step-1{width:100%;height:100%}#title-input.sc-trusd-piiq-com-data-basket-permission-step-1{width:100%}.search-input-icon.sc-trusd-piiq-com-data-basket-permission-step-1{background:#fafafa;color:#0a6ed1;cursor:pointer}.search-input-icon.sc-trusd-piiq-com-data-basket-permission-step-1:hover{background:rgba(224,224,224,0.5)}.card-block.sc-trusd-piiq-com-data-basket-permission-step-1{border:1px solid lightgrey;border-radius:2px !important;background-color:#FAFAFA;padding:10px}.trusd-button-select.sc-trusd-piiq-com-data-basket-permission-step-1:hover{cursor:pointer;border:1px solid #007BFF}";

const DataBasketStartPermission = class {
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
    this.processingRecords = state.dbEProcessingRecordEntry;
    this.renderedProcessingRecords = this.processingRecords;
    // Filter processing records.
    this.filterSearchProcessingRecords = "";
    this.purposeSelection = "default";
    this.update = 0;
  }
  itemClickHandler(ev) {
    this.data.selectedProcessingRecordID = ev.detail.selectedItems[0].id;
    this.update++;
  }
  itemDeleteHandler() {
    this.data.selectedProcessingRecordID = "";
    this.update++;
  }
  extractDataSubjectCategories(pre) {
    let pres = [];
    pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
      if (pres.filter(el => el.friendlyName === aggregate.dataSubjectCategory.friendlyName).length == 0) {
        pres.push(aggregate.dataSubjectCategory);
      }
    });
    return pres;
  }
  extractPIICategories(pre) {
    let cats = [];
    pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
      aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
        if (cats.filter(el => el.friendlyName === aggregate2.dataCategory.friendlyName).length == 0) {
          cats.push(aggregate2.dataCategory);
        }
      });
    });
    return cats;
  }
  extractRecipientCategories(pre) {
    let rcpts = [];
    pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
      aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
        if (rcpts.filter(el => el.type === aggregate2.recipientCategory.type).length == 0) {
          rcpts.push(aggregate2.recipientCategory);
        }
      });
    });
    return rcpts;
  }
  extractLegalFoundations(pre) {
    let legal = [];
    pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
      aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
        if (legal.filter(el => el.type === aggregate2.lawfulness.type).length == 0) {
          legal.push(aggregate2.lawfulness);
        }
      });
    });
    return legal;
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
    if (this.data.selectedProcessingRecordID !== undefined) {
      this.selectedItem.querySelectorAll("ui5-list[id='select-purpose'] > ui5-li").forEach((el) => {
        el.selected = false;
      });
      this.selectedItem.querySelector("ui5-li[id='" + this.data.selectedProcessingRecordID + "']").selected = true;
    }
  }
  render() {
    return (h("div", { class: "container-fluid" }, h("div", { class: "row shadow p-2 mb-2 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", null, "Bitte w\u00E4hlen Sie den Zweck oder die Grundlage der geplanten Datenverarbeitungsaktivit\u00E4t aus:*"), h("div", { class: "row" }, h("ui5-radiobutton", { text: "Standard (bereits genehmigte Zwecke)", selected: this.purposeSelection === "default", onSelect: () => this.purposeSelection = "default", name: "GroupPurposeSelection" }), h("ui5-radiobutton", { text: "Neuer Zweck oder Zweck selbst festlegen", selected: this.purposeSelection === "new", onSelect: () => this.purposeSelection = "new", name: "GroupPurposeSelection" })), this.purposeSelection === "default" ?
      h("div", null, this.data.selectedProcessingRecordID === "" ?
        h("div", { class: "col-12 card-block text-center trusd-button-select", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, h("div", { class: "file text-center align-middle" }, h("p", null), h("span", { class: "text-primary" }, h("i", { class: "fas fa-hand-pointer" }), "\u00A0\u00A0Zweck oder Grundlage ausw\u00E4hlen"), h("p", null)))
        :
          h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-list", { mode: "Delete" }, h("ui5-li", { class: "col-12", selected: true, description: this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID).purposes.map((str) => " " + str.displayName) }, this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID).friendlyName))), h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })))) :
      h("div", null, h("ui5-messagestrip", { type: "Information", "no-icon": true, "no-close-button": true }, h("p", null, h("b", null, "Hinweis")), "Neue Zwecke m\u00FCssen durch den Datenschutzbeauftragten gepr\u00FCft und genehmigt werden. Sie sollten diese Option daher nur w\u00E4hlen, wenn es absolut notwendig ist."), "are you crazy?"), h("trusd-com-modal-window", null, h("span", { slot: "modal-title" }, "Verzeichnis von Datenverarbeitungsaktivit\u00E4ten"), h("div", { slot: "modal-content" }, h("div", { class: "d-flex justify-content-center" }, h("ui5-input", { onInput: ev => { this.filterSearchProcessingRecords = ev.target.value; }, id: "search-input", placeholder: language.placeholderSearch }, h("ui5-icon", { id: "search-input-icon", slot: "icon", name: "search" }))), h("ui5-list", { id: "select-purpose", growing: "Scroll", mode: "SingleSelect" }, this.renderedProcessingRecords.map((processingRecord) => h("ui5-li", { id: processingRecord.id.value, description: processingRecord.purposes.map((str) => " " + str.displayName), info: processingRecord.friendlyName.includes("Erfindung") ? "häufig verwendet" : "", "info-state": "Success" }, processingRecord.friendlyName))), this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID) ?
      h("div", null, "  ", h("p", null), h("div", { class: "bg-light" }, h("div", { class: "row" }, h("div", { class: "col-12" }, h("h5", null, "\u00DCbersicht der ausgew\u00E4hlten Verarbeitungst\u00E4tigkeit \"", this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID).friendlyName, "\""))), h("div", { class: "row" }, h("div", { class: "col-sm-3 col-lg-3 text-truncate" }, h("p", { class: "text-center" }, h("i", { class: "fas fa-user-tag fa-2x tooltips" }, h("span", { class: "tooltiptext" }, "Kategorien m\u00F6glicher betroffener Personen"))), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID)) {
          return this.extractDataSubjectCategories(this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, el.friendlyName))), h("div", { class: "col-sm-3 col-lg-3 text-truncate" }, h("p", { class: "text-center" }, h("i", { class: "fas fa-table fa-2x tooltips" }, h("span", { class: "tooltiptext" }, "Kategorien der personenbezogenen Daten"))), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID)) {
          return this.extractPIICategories(this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, el.friendlyName))), h("div", { class: "col-sm-3 col-lg-3 text-truncate" }, h("p", { class: "text-center" }, h("i", { class: "fas fa-share-alt fa-2x tooltips" }, h("span", { class: "tooltiptext" }, "Kategorien m\u00F6glicher Empf\u00E4nger"))), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID)) {
          return this.extractRecipientCategories(this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, el.type))), h("div", { class: "col-sm-3 col-lg-3 text-truncate" }, h("p", { class: "text-center" }, h("i", { class: "fas fa-gavel fa-2x tooltips" }, h("span", { class: "tooltiptext" }, "Rechtsgrundlage"))), (() => {
        if (this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID)) {
          return this.extractLegalFoundations(this.processingRecords.find(elRecord => elRecord.id.value === this.data.selectedProcessingRecordID));
        }
        else
          return [];
      })().map((el) => h("li", null, el.type))))))
      : ""), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.data.selectedProcessingRecordID = ""; document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open"); } }, language.btnCancel), "\u00A0", h("button", { type: "button", class: "btn btn-primary", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, language.btnSave))))), h("div", { class: "row shadow p-2 mb-2 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", null, "Bitte geben Sie der geplanten Datenverarbeitungsaktivit\u00E4t einen Namen:*"), h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-input", { onChange: (ev) => { this.data.title = ev.target.value; this.update++; }, id: "title-input", placeholder: "z. B.: Abschlussbericht 2021, Forschungsantrag Projekt" })), this.data.title !== "" ?
      h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))
      : ""))), h("div", { class: "row shadow p-2 mb-2 bg-white rounded border" }, h("div", { class: "col-6" }, h("label", null, "Vorlage"), h("div", { class: "d-flex justify-content-center" }, h("ui5-input", { id: "search-input", placeholder: language.placeholderSearch }, h("ui5-icon", { id: "search-input-icon", slot: "icon", name: "search" }))), h("ui5-list", { id: "select-purpose", growing: "Scroll", mode: "SingleSelect" }, this.processingRecords.map((processingRecord) => h("ui5-li", { icon: "rhombus-milestone", description: processingRecord.purposes.map((str) => " " + str.displayName), info: processingRecord.friendlyName.includes("Erfindung") ? "häufig verwendet" : "", "info-state": "Success" }, processingRecord.friendlyName)))), h("div", { class: "col-6" }, h("div", { class: "row" }), h("div", { class: "row" }, h("div", { class: "col-12" }, h("label", null, "Zuordnen"), h("ui5-multi-input", { onChange: (ev) => { this.data.topicAssignments = [...this.data.topicAssignments, ev.target.value]; this.update++; }, "show-suggestions": true, id: "topic-assignments" }, h("div", { slot: "valueStateMessage" }, "Token is already in the list"), this.data.topicAssignments.map((str) => h("ui5-token", { slot: "tokens", text: str }))))))), h("div", { class: "row pt-3" }, h("div", { class: "col d-flex flex-row-reverse bd-highlight" }, h("button", { onClick: () => this.completed.emit(this.data), type: "button", class: "btn btn-success float-right", disabled: this.data.title === "" || this.data.selectedProcessingRecordID === "", "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, language.btnNext)))));
  }
  get selectedItem() { return getElement(this); }
};
DataBasketStartPermission.route = "/vorlagen/datenkorb";
DataBasketStartPermission.style = comDataBasketPermissionStep1Css;

export { DataBasketStartPermission as trusd_piiq_com_data_basket_permission_step_1 };
