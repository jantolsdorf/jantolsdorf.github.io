import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import { V as VODataSubjectSelect } from './VODataSubjectSelect-89e5c619.js';
import { V as VODataSet } from './VODataSet-115d76dd.js';
import './MessageStrip-d043c32b.js';
import './DatePicker-7ba473c2.js';
import './MultiComboBox-28b17a8b.js';
import './Popover-0d784de7.js';
import { s as state } from './store-9032fc40.js';
import './index-912d1a21.js';
import './Icons-85d4abff.js';
import './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import './Button-7dc82d4c.js';
import './ValueState-a7516d8f.js';
import './ResponsivePopover-cdfbc391.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './slim-arrow-right-08785783.js';
import './Input-0ee3a2d0.js';
import './Tokenizer-d8a8b2e5.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './StandardListItem-6305d5b8.js';
import './BusyIndicator-60b0b9ee.js';

const comDataBasketSelectDataAndSubjectsCss = ".tooltips.sc-trusd-piiq-com-data-basket-select-data-and-subjects .tooltiptext.sc-trusd-piiq-com-data-basket-select-data-and-subjects{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-select-data-and-subjects .tooltiptext.sc-trusd-piiq-com-data-basket-select-data-and-subjects::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-select-data-and-subjects:hover .tooltiptext.sc-trusd-piiq-com-data-basket-select-data-and-subjects{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-select-data-and-subjects,.privacy-tooltip.sc-trusd-piiq-com-data-basket-select-data-and-subjects+.tooltip.sc-trusd-piiq-com-data-basket-select-data-and-subjects>.tooltip-inner.sc-trusd-piiq-com-data-basket-select-data-and-subjects{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-select-data-and-subjects{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-select-data-and-subjects{cursor:help}button.sc-trusd-piiq-com-data-basket-select-data-and-subjects:disabled{cursor:not-allowed;pointer-events:all !important}html.sc-trusd-piiq-com-data-basket-select-data-and-subjects{scroll-behavior:smooth}.sc-trusd-piiq-com-data-basket-select-data-and-subjects-h{display:block}.data-basket-scroll-list-col.sc-trusd-piiq-com-data-basket-select-data-and-subjects{height:400px}.data-basket-scroll-list.sc-trusd-piiq-com-data-basket-select-data-and-subjects{max-height:400px;min-height:400px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}.data-basket-modal-scroll-list.sc-trusd-piiq-com-data-basket-select-data-and-subjects{max-height:300px;min-height:300px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}*.sc-trusd-piiq-com-data-basket-select-data-and-subjects{text-align:left}.star.sc-trusd-piiq-com-data-basket-select-data-and-subjects{visibility:hidden;cursor:pointer;font-size:20px;right:0;margin-right:10px;top:5px;left:auto}.star.sc-trusd-piiq-com-data-basket-select-data-and-subjects:before{content:\"\\2606\";position:absolute;visibility:visible}.star.sc-trusd-piiq-com-data-basket-select-data-and-subjects:checked:before{content:\"\\2605\";position:absolute}.calDayContainer.sc-trusd-piiq-com-data-basket-select-data-and-subjects{bottom:100%}.person-table.sc-trusd-piiq-com-data-basket-select-data-and-subjects{overflow-y:auto;height:50vh}.person-table.sc-trusd-piiq-com-data-basket-select-data-and-subjects thead.sc-trusd-piiq-com-data-basket-select-data-and-subjects th.sc-trusd-piiq-com-data-basket-select-data-and-subjects{position:sticky;top:0}table.sc-trusd-piiq-com-data-basket-select-data-and-subjects{border-collapse:collapse;width:100%}th.sc-trusd-piiq-com-data-basket-select-data-and-subjects,td.sc-trusd-piiq-com-data-basket-select-data-and-subjects{padding:8px 16px;border:0px solid #ccc}th.sc-trusd-piiq-com-data-basket-select-data-and-subjects{background-color:white}.person-table.sc-trusd-piiq-com-data-basket-select-data-and-subjects tbody.sc-trusd-piiq-com-data-basket-select-data-and-subjects>tr.sc-trusd-piiq-com-data-basket-select-data-and-subjects,.person-table.sc-trusd-piiq-com-data-basket-select-data-and-subjects tbody.sc-trusd-piiq-com-data-basket-select-data-and-subjects input.sc-trusd-piiq-com-data-basket-select-data-and-subjects,.person-table.sc-trusd-piiq-com-data-basket-select-data-and-subjects th.sc-trusd-piiq-com-data-basket-select-data-and-subjects input.sc-trusd-piiq-com-data-basket-select-data-and-subjects{cursor:pointer}#exTab2.sc-trusd-piiq-com-data-basket-select-data-and-subjects h3.sc-trusd-piiq-com-data-basket-select-data-and-subjects{color:white;background-color:#428bca;padding:5px 15px}.data-subject-select.sc-trusd-piiq-com-data-basket-select-data-and-subjects{z-index:1000 !important}.data-subject-select-modal-tab.sc-trusd-piiq-com-data-basket-select-data-and-subjects{min-height:400px}.trusd-data-basket-selection-pii-data-subjects.sc-trusd-piiq-com-data-basket-select-data-and-subjects{min-height:250px}#overlay.sc-trusd-piiq-com-data-basket-select-data-and-subjects{position:absolute;background-color:rgba(255, 255, 255, 0.75);z-index:9999;cursor:wait;left:0;right:0;top:0;bottom:0;margin-left:-15px;margin-right:-15px;margin-top:-10px;margin-bottom:-10px}";

const ComSelectDataAndSubjects = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addedToDataBasket = createEvent(this, "addedToDataBasket", 7);
    this.dataSets = [];
    this.selectedProcessing = "";
    this.preselectedDataSubjects = [];
    this.preselectedPersonalData = [];
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
      this.tmpDataSets.forEach(dataSet => {
        if (this.dataSets.length == 0) {
          // Add if empty:
          this.dataSets = [...this.dataSets, dataSet];
        }
        else if (!this.dataSets.find(tmpDataSet => { return VODataSubjectSelect.compare(tmpDataSet.person, dataSet.person); })) {
          // Add if not exist:
          this.dataSets = [...this.dataSets, dataSet];
        }
        else {
          let tmp = this.dataSets.find(tmpDataSet => { return VODataSubjectSelect.compare(tmpDataSet.person, dataSet.person); }).pii;
          dataSet.pii.forEach(pii_new => {
            var isAdd = true;
            tmp.forEach(pii_old => {
              if (pii_new.dataCategory.id === pii_old.dataCategory.id && pii_new.versionDate === pii_old.versionDate) {
                isAdd = false;
              }
            });
            if (isAdd) {
              tmp = [...tmp, pii_new];
            }
          });
          this.dataSets.find((tmpDataSet) => { return VODataSubjectSelect.compare(tmpDataSet.person, dataSet.person); }).pii = tmp;
        }
      });
      this.tmpDataSets = [];
      this.selectedData = [];
    }
    // Fire event for updated data basket selection:
    this.addedToDataBasket.emit(this.dataSets);
  }
  componentWillLoad() {
    this.tmpSelectedDataSubjects = this.preselectedDataSubjects;
    this.tmpSelectedPII = this.preselectedPersonalData;
  }
  render() {
    return (h("div", null, !state.taskAufgabe1 ?
      h("ui5-messagestrip", { type: "Information", onClose: (ev) => ev.target.hidden = true }, h("p", null, h("b", null, "Tipp")), "W\u00E4hlen Sie die ben\u00F6tigten personenbezogenen Daten aus, sowie die betroffenen Personen, von denen Sie die Daten ben\u00F6tigen. F\u00FCgen Sie Ihre Auswahl anschlie\u00DFend dem Datenkorb hinzu.") :
      !state.taskAufgabe2 ?
        h("ui5-messagestrip", { type: "Information", onClose: (ev) => ev.target.hidden = true }, h("p", null, h("b", null, "Tipp")), "Sie k\u00F6nnen dem Datenkorb nachdem Sie auf \"Zum Datenkorb hinzuf\u00FCgen\" geklickt haben eine neue / weitere Auswahl an Personen und Daten hinzuf\u00FCgen.")
        :
          "", h("div", { class: "row pt-3" }, h("div", { class: "col-6" }, h("div", { class: "col-12 shadow bg-white rounded p-1 h-100" }, h("trusd-piiq-com-data-basket-pii-select", { preselectedPersonalData: this.tmpSelectedPII, dataBasket: this.dataBasket }))), h("div", { class: "col-6" }, h("div", { class: "col-12 shadow bg-white rounded p-1 h-100" }, h("trusd-piiq-com-data-basket-data-subject-select", { preselectedDataSubjects: this.tmpSelectedDataSubjects, dataBasket: this.dataBasket })))), h("div", { id: "btnAddToDataBasket", class: "row pt-3" }, h("a", { id: "navigateTobtnAddToDataBasket", href: "#btnAddToDataBasket", hidden: true }), h("div", { class: "col-4 p-0" }, h("hr", { class: "bg-primary" })), h("div", { class: "col-4 text-center p-0" }, (this.tmpSelectedPII.length == 0 || this.tmpSelectedDataSubjects.length == 0) ?
      h("button", { class: "btn btn-outline-primary btn-sm w-100", type: "button", disabled: true }, h("i", { class: "fas fa-angle-double-down" }), " Zum Datenkorb hinzuf\u00FCgen ", h("i", { class: "fas fa-angle-double-down" }))
      :
        h("button", { class: "btn btn-primary btn-sm w-100", type: "button", onClick: () => {
            this.saveTmpDataSets();
            document.getElementById("navigateTobtnAddToDataBasket").click();
          } }, h("i", { class: "fas fa-angle-double-down" }), " Zum Datenkorb hinzuf\u00FCgen ", h("i", { class: "fas fa-angle-double-down" }))), h("div", { class: "col-4 p-0" }, h("hr", { class: "bg-primary" }))), h("div", { class: "row pt-3 " }, h("div", { class: "col-12" }, h("div", { class: "col-12 shadow bg-white rounded p-1 h-100 trusd-data-basket-selection-pii-data-subjects" }, h("div", { class: "row p-3" }, h("div", { class: "col-12" }, h("h6", { class: "font-weight-light" }, "Betroffene Personen und personenbezogene Daten im Datenkorb"))), this.isCheckingAvailability ?
      h("div", { id: "overlay", class: "d-flex align-items-center justify-content-center" }, h("div", { class: "container-flex" }, h("div", { class: "row" }, h("div", { class: "col-12 text-center" }, h("ui5-busyindicator", { active: true, size: "Large" }))), h("div", { class: "row" }, h("div", { class: "col-12 text-center" }, h("span", { class: "lead" }, "Pr\u00FCfe Verf\u00FCgbarkeit"), h("br", null), h("small", null, "Sie werden gleich weitergeleitet."))))) : "", this.dataSets.length > 0 ?
      h("div", { class: "row p-3 m-0 border overflow-auto", style: { maxHeight: "400px" } }, this.dataSets.map((s) => h("div", { class: "col-xs-8 col-md-5 col-lg-4 p-1" }, h("div", { class: "card w-100" }, h("div", { class: "card-body list-group-item-action pt-2 pb-2" }, h("div", { class: "row" }, h("div", { class: "col-11" }, h("div", { class: "row" }, s.person.type === "INDIVIDUAL" ?
        h("div", { class: "col-10 p-0 text-truncate", title: s.person.dataSubject.last_name + ", " + s.person.dataSubject.first_name + " " + (s.person.dataSubject.title.trim() === "" ? "" : "(" + s.person.dataSubject.title.trim() + ")") }, h("i", { class: "fas fa-portrait fa-2x align-middle" }), "\u00A0\u00A0", s.person.dataSubject.last_name + ", " + s.person.dataSubject.first_name + " " + (s.person.dataSubject.title.trim() === "" ? "" : "(" + s.person.dataSubject.title.trim() + ")"))
        :
          h("div", { class: "col-10 p-0 text-truncate", title: s.person.dataSubjectCategory.friendlyName }, h("i", { class: "fas fa-users fa-2x align-middle" }), "\u00A0\u00A0", s.person.dataSubjectCategory.friendlyName)), h("div", { class: "row " }, h("div", { class: "col-12 d-flex p-0" }, h("span", { class: "badge badge-secondary align-self-end", title: "Anzahl ausgew\u00E4hlter personenbezogener Daten" }, s.pii.length, " pers. Daten"), "\u00A0\u00A0\u00A0", s.person.type === "GROUP" ?
        h("span", { class: "badge badge-info align-self-end", title: "Dies ist eine unbestimmte oder unbekannte Gruppe von betroffenen Personen" }, "Unbestimmte Gruppe")
        :
          s.person.dataSubject.type === "INTERNAL" ?
            "" :
            h("span", null, h("span", { class: "badge badge-info align-self-end", title: "Externe Person, die nicht der Organisation angeh\u00F6rt." }, "Extern"), "\u00A0\u00A0\u00A0")))), h("div", { class: "col-1 d-flex align-items-center justify-content-end p-0" }, h("button", { type: "button", title: "Aus dem Datenkorb entfernen.", onClick: () => this.removeDataSet(s), class: "btn close", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, " ", h("i", { class: "fas fa-trash fa-xs" })))))))))) :
      h("div", { class: "row" }, h("div", { class: "col-3" }), h("div", { class: "col-6" }, h("p", { class: "text-center font-italic w-100" }, "Bitte w\u00E4hlen Sie oben die personenbezogenen Daten und die betroffenen Personen aus und f\u00FCgen Sie Ihre Auswahl anschlie\u00DFend dem Datenkorb hinzu.")), h("div", { class: "col-3" })))))));
  }
  static get watchers() { return {
    "selectedData": ["onSelectedDataChange"],
    "dataTemplates": ["onDataTemplatesChange"]
  }; }
};
ComSelectDataAndSubjects.style = comDataBasketSelectDataAndSubjectsCss;

export { ComSelectDataAndSubjects as trusd_piiq_com_data_basket_select_data_and_subjects };
