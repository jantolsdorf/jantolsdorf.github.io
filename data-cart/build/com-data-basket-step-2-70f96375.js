import { r as registerInstance, i as createEvent, h, g as getElement } from './index-dee1f973.js';
import { l as language } from './de-DE-5564f65b.js';
import { E as EDataBasket } from './EDataBasket-f2b29bfe.js';
import { V as VODataSet } from './VODataSet-115d76dd.js';
import './MessageStrip-d043c32b.js';
import './DatePicker-7ba473c2.js';
import './MultiComboBox-28b17a8b.js';
import './Popover-0d784de7.js';

const comDataBasketStep2Css = ".tooltips.sc-trusd-piiq-com-data-basket-step-2 .tooltiptext.sc-trusd-piiq-com-data-basket-step-2{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-step-2 .tooltiptext.sc-trusd-piiq-com-data-basket-step-2::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-step-2:hover .tooltiptext.sc-trusd-piiq-com-data-basket-step-2{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-step-2,.privacy-tooltip.sc-trusd-piiq-com-data-basket-step-2+.tooltip.sc-trusd-piiq-com-data-basket-step-2>.tooltip-inner.sc-trusd-piiq-com-data-basket-step-2{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-step-2{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-step-2{cursor:help}button.sc-trusd-piiq-com-data-basket-step-2:disabled{cursor:not-allowed;pointer-events:all !important}.sc-trusd-piiq-com-data-basket-step-2-h{display:block}.data-basket-scroll-list-col.sc-trusd-piiq-com-data-basket-step-2{height:400px}.data-basket-scroll-list.sc-trusd-piiq-com-data-basket-step-2{max-height:400px;min-height:400px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}.data-basket-modal-scroll-list.sc-trusd-piiq-com-data-basket-step-2{max-height:300px;min-height:300px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}*.sc-trusd-piiq-com-data-basket-step-2{text-align:left}.star.sc-trusd-piiq-com-data-basket-step-2{visibility:hidden;cursor:pointer;font-size:20px;right:0;margin-right:10px;top:5px;left:auto}.star.sc-trusd-piiq-com-data-basket-step-2:before{content:\"\\2606\";position:absolute;visibility:visible}.star.sc-trusd-piiq-com-data-basket-step-2:checked:before{content:\"\\2605\";position:absolute}.calDayContainer.sc-trusd-piiq-com-data-basket-step-2{bottom:100%}.person-table.sc-trusd-piiq-com-data-basket-step-2{overflow-y:auto;height:50vh}.person-table.sc-trusd-piiq-com-data-basket-step-2 thead.sc-trusd-piiq-com-data-basket-step-2 th.sc-trusd-piiq-com-data-basket-step-2{position:sticky;top:0}table.sc-trusd-piiq-com-data-basket-step-2{border-collapse:collapse;width:100%}th.sc-trusd-piiq-com-data-basket-step-2,td.sc-trusd-piiq-com-data-basket-step-2{padding:8px 16px;border:0px solid #ccc}th.sc-trusd-piiq-com-data-basket-step-2{background-color:white}.person-table.sc-trusd-piiq-com-data-basket-step-2 tbody.sc-trusd-piiq-com-data-basket-step-2>tr.sc-trusd-piiq-com-data-basket-step-2,.person-table.sc-trusd-piiq-com-data-basket-step-2 tbody.sc-trusd-piiq-com-data-basket-step-2 input.sc-trusd-piiq-com-data-basket-step-2,.person-table.sc-trusd-piiq-com-data-basket-step-2 th.sc-trusd-piiq-com-data-basket-step-2 input.sc-trusd-piiq-com-data-basket-step-2{cursor:pointer}#exTab2.sc-trusd-piiq-com-data-basket-step-2 h3.sc-trusd-piiq-com-data-basket-step-2{color:white;background-color:#428bca;padding:5px 15px}.data-subject-select.sc-trusd-piiq-com-data-basket-step-2{z-index:1000 !important}.data-subject-select-modal-tab.sc-trusd-piiq-com-data-basket-step-2{min-height:400px}.trusd-data-basket-selection-pii-data-subjects.sc-trusd-piiq-com-data-basket-step-2{min-height:250px}#overlay.sc-trusd-piiq-com-data-basket-step-2{position:absolute;background-color:rgba(255, 255, 255, 0.75);z-index:9999;cursor:wait;left:0;right:0;top:0;bottom:0;margin-left:-15px;margin-right:-15px;margin-top:-10px;margin-bottom:-10px}";

const DataPersonSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completed = createEvent(this, "completed", 7);
    this.back = createEvent(this, "back", 7);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.tmpSelectedPII = [];
    this.tmpSelectedDataSubjects = [];
    this.selectedDataCategory = "";
    this.selectedData = [];
    this.searchTerms = [];
    /**
     * @description: Stores the data templates.
     * @example: [{template_name: "Vorlage1", template_data: {...}}]
     */
    this.dataTemplates = [];
    /**
     * @description: Stores unsaved Person - Data Tuples
     */
    this.tmpDataSets = [];
    this.dataSets = [];
    this.selectedProcessing = "";
    /**
     * @description: saves the value of templateSelect before editing.
     * @example Vorlage1
     */
    this.selectedTemplateBeforeEdit = "";
    this.isCheckingAvailability = false;
  }
  trusdPiiqSelectedDataChangedHandler(ev) {
    this.tmpSelectedPII = ev.detail;
  }
  trusdPiiqSelectedDataSubjectsChangedHandler(ev) {
    this.tmpSelectedDataSubjects = ev.detail;
  }
  onSelectedDataChange() {
  }
  onDataTemplatesChange() {
  }
  /* HTML ELEMENTS */
  /* METHODS */
  fakePIIAvailability() {
    return true;
  }
  async checkPIIAvailability() {
    this.isCheckingAvailability = true;
    let res = await new Promise(function (resolve) {
      setTimeout(resolve, 2000, "Done");
    });
    return res;
  }
  /**
   *
   * @param ds The dataset to remove from current datasets.
   */
  removeDataSet(ds) {
    this.dataSets = this.dataSets.filter(tmpDS => tmpDS.id !== ds.id);
  }
  /**
   * merges the temporary data sets with the final data sets
   */
  saveTmpDataSets() {
    if (this.tmpDataSets) {
      // Make all data subjects and PII to tmpDataSets:
      this.tmpSelectedDataSubjects.forEach(dataSubject => {
        this.tmpDataSets.push(new VODataSet(dataSubject, this.tmpSelectedPII));
      });
      // Merge
      this.dataSets = EDataBasket.mergeDataSets(this.dataSets, this.tmpDataSets);
      this.tmpDataSets = [];
      this.selectedData = [];
    }
  }
  render() {
    return (h("div", { class: "container-fluid" }, h("div", { class: "card" }, h("div", { class: "card-body" }, h("trusd-piiq-com-data-basket-select-data-and-subjects", { dataBasket: this.dataBasket, ref: (el) => this.htmlElSelectDataAndSubjects = el, onAddedToDataBasket: (ev) => this.dataSets = ev.detail }), h("div", { class: "row pt-3" }, h("div", { class: "col" }, h("button", { onClick: () => this.back.emit(), type: "button", class: "btn btn-secondary float-left", "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, h("i", { class: "fas fa-chevron-left" }), " \u00A0 ", language.btnBack), h("button", { onClick: () => this.htmlElSelectDataAndSubjects.checkPIIAvailability()
        .then(() => this.completed.emit((() => {
        this.dataBasket.dataSets = this.htmlElSelectDataAndSubjects.dataSets;
        this.dataBasket.processing = this.htmlElSelectDataAndSubjects.selectedProcessing;
        location.href = "#";
        return this.dataBasket;
      })())), type: "button", class: "btn btn-primary float-right", disabled: this.dataSets.length < 1, "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, "Verf\u00FCgbarkeit pr\u00FCfen \u00A0 ", h("i", { class: "fas fa-chevron-right" }))))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "selectedData": ["onSelectedDataChange"],
    "dataTemplates": ["onDataTemplatesChange"]
  }; }
};
DataPersonSelect.route = "/vorlagen/datenkorb";
DataPersonSelect.style = comDataBasketStep2Css;

export { DataPersonSelect as D };
