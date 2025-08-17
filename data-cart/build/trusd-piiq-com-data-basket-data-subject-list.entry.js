import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import { E as EDataBasket } from './EDataBasket-f2b29bfe.js';
import { s as state } from './store-9032fc40.js';
import { h as isProcessingAllowedByPersonalData, i as isProcessingAllowed } from './utils-8ebcd8ca.js';
import './DatePicker-7ba473c2.js';
import './BusyIndicator-60b0b9ee.js';
import { l as language } from './de-DE-5564f65b.js';
import './index-912d1a21.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';
import './index-de766dcc.js';
import './Icons-85d4abff.js';
import './ValueState-a7516d8f.js';
import './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import './Button-7dc82d4c.js';
import './ResponsivePopover-cdfbc391.js';
import './Popover-0d784de7.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './slim-arrow-right-08785783.js';
import './Input-0ee3a2d0.js';

const comDataBasketDataSubjectListCss = ".tooltips.sc-trusd-piiq-com-data-basket-data-subject-list .tooltiptext.sc-trusd-piiq-com-data-basket-data-subject-list{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-data-subject-list .tooltiptext.sc-trusd-piiq-com-data-basket-data-subject-list::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-data-subject-list:hover .tooltiptext.sc-trusd-piiq-com-data-basket-data-subject-list{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-data-subject-list,.privacy-tooltip.sc-trusd-piiq-com-data-basket-data-subject-list+.tooltip.sc-trusd-piiq-com-data-basket-data-subject-list>.tooltip-inner.sc-trusd-piiq-com-data-basket-data-subject-list{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-data-subject-list{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-data-subject-list{cursor:help}button.sc-trusd-piiq-com-data-basket-data-subject-list:disabled{cursor:not-allowed;pointer-events:all !important}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list{display:block;width:100%;text-align:center}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list{display:block;position:relative;width:100%;height:40px;text-align:center}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before,.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{display:block;position:absolute;top:50%;width:50%;height:3px;margin-top:-1px;background-color:#e1e7ec;content:'';z-index:1}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before{left:0}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{right:0}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon.sc-trusd-piiq-com-data-basket-data-subject-list{display:inline-block;position:relative;width:40px;height:40px;border:1px solid #e1e7ec;border-radius:50%;background-color:#f5f5f5;color:#374250;font-size:38px;line-height:81px;z-index:5}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-title.sc-trusd-piiq-com-data-basket-data-subject-list{margin-top:5px;margin-bottom:0;color:#606975;font-size:14px;font-weight:500}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list:first-child .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before{display:none}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list:last-child .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{display:none}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.completed.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before,.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.completed.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{background-color:#0da9ef}.steps.sc-trusd-piiq-com-data-basket-data-subject-list .step.completed.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon.sc-trusd-piiq-com-data-basket-data-subject-list{border-color:#0da9ef;background-color:#0da9ef;color:#fff}@media (max-width: 576px){.flex-sm-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before,.flex-sm-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{display:none}}@media (max-width: 768px){.flex-md-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before,.flex-md-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{display:none}}@media (max-width: 991px){.flex-lg-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before,.flex-lg-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{display:none}}@media (max-width: 1200px){.flex-xl-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::before,.flex-xl-nowrap.sc-trusd-piiq-com-data-basket-data-subject-list .step.sc-trusd-piiq-com-data-basket-data-subject-list .step-icon-wrap.sc-trusd-piiq-com-data-basket-data-subject-list::after{display:none}}.bg-faded.sc-trusd-piiq-com-data-basket-data-subject-list,.bg-secondary.sc-trusd-piiq-com-data-basket-data-subject-list{background-color:#f5f5f5 !important}tr.hide-table-padding.sc-trusd-piiq-com-data-basket-data-subject-list td.sc-trusd-piiq-com-data-basket-data-subject-list{padding:0}.expand-button.sc-trusd-piiq-com-data-basket-data-subject-list{position:relative}.accordion-toggle.sc-trusd-piiq-com-data-basket-data-subject-list .expand-button.sc-trusd-piiq-com-data-basket-data-subject-list:after{position:absolute;left:.75rem;top:50%;transform:translate(0, -50%);content:'-'}.accordion-toggle.collapsed.sc-trusd-piiq-com-data-basket-data-subject-list .expand-button.sc-trusd-piiq-com-data-basket-data-subject-list:after{content:'+'}th.sc-trusd-piiq-com-data-basket-data-subject-list{font-weight:normal}.table.sc-trusd-piiq-com-data-basket-data-subject-list td.sc-trusd-piiq-com-data-basket-data-subject-list{vertical-align:middle}";

const DataBasketDataSubjectList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sendNewMessage = createEvent(this, "sendNewMessage", 7);
    this.dataBasket = new EDataBasket();
    this.hideSendMessage = false;
    this.formRadioBtnDataSource = "DATA_SUBJECT";
    this.formRadioBtnUpdatePII = false;
    this.formWidgetIsProcessingAllowed = "ALLOWED";
    this.formWidgetMissingData = 0;
    this.formWidgetOutdatedData = 0;
  }
  // isProcessingAllowedByPersonalData(ds: VODataSet, pii: VOPIISelect): "ALLOWED" | "NEED_TO_ASK" | "OBJECTED" {
  //     let piiDateStatus: "ALLOWED" | "NEED_TO_ASK" | "OBJECTED" = "ALLOWED"
  //     let legalFoundation = getLegalFoundationsByPersonalDataCategory(
  //         findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID),
  //         { value: ds.person.dataSubject.type === "INTERNAL" ? "data_subject_cat_1" : "data_subject_cat_2" },
  //         pii.dataCategory.id
  //     )
  //     if (!legalFoundation) {
  //         piiDateStatus = "OBJECTED"
  //     } else if (legalFoundation.type === VOLawfulnessTypeEnum.A) {
  //         piiDateStatus = "NEED_TO_ASK"
  //     } else {
  //         piiDateStatus = "ALLOWED"
  //     }
  //     return piiDateStatus
  // }
  renderPIIDetails(ds) {
    let htmlEls = [];
    ds.pii.map(pii => {
      let obj = {
        displayName: pii.dataCategory.friendlyName,
        lastChange: "-",
        dataSource: "-",
        isProcessingAllowed: "ALLOWED",
        legalBasis: null,
        lastChangeDate: "",
        available: "-"
      };
      let tmpPersonalDataItem = state.dbEPersonalData.find(pd => ds.person.type === "INDIVIDUAL" &&
        pd.dataSubjectID === ds.person.dataSubject.id &&
        pd.dataCategoryID === pii.dataCategory.id.value &&
        pd.processingRecordEntryID === this.dataBasket.selectedProcessingRecordID);
      if (tmpPersonalDataItem && tmpPersonalDataItem.elicitedBy === this.dataBasket.requestingDataProcessor.faculty) {
        obj.available = language.tableLabelImmediatelyAvailable;
      }
      else if (tmpPersonalDataItem) {
        obj.available = language.tableLabelAvailable;
      }
      // Processing is allowed if it is allowed by Art. 6 B-F OR Art. 6 A and data are present
      let tmpIsProcessingAllowedByPersonalData = isProcessingAllowedByPersonalData(ds, pii, this.dataBasket);
      obj.isProcessingAllowed = tmpIsProcessingAllowedByPersonalData.status;
      obj.legalBasis = tmpIsProcessingAllowedByPersonalData.legalBasis;
      if (obj.isProcessingAllowed === "NEED_TO_ASK" && tmpPersonalDataItem) {
        obj.isProcessingAllowed = "ALLOWED";
      }
      if (tmpPersonalDataItem) {
        obj.lastChange = EDataBasket.isPIIOudated(tmpPersonalDataItem);
        if (obj.lastChange !== "UNKNOWN") {
          let date = new Date(Date.parse(tmpPersonalDataItem.updated));
          obj.lastChangeDate = date.toLocaleDateString("de");
        }
        obj.dataSource = tmpPersonalDataItem.elicitedBy ? tmpPersonalDataItem.elicitedBy : language.notAvailableShort;
      }
      htmlEls.push(obj);
    });
    return (htmlEls);
  }
  componentWillLoad() {
  }
  componentDidLoad() {
    $("[data-toggle='tooltip']").tooltip();
  }
  render() {
    return (h("div", { class: "table-responsive" }, h("table", { class: "table table-hover" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, "#"), h("th", { scope: "col" }, language.tableLabelNameOfPerson), h("th", { scope: "col" }, h("i", { class: "fas fa-certificate" }), language.tableLabelApproval), h("th", { scope: "col" }, h("i", { class: "fas fa-tasks fa-1x" }), language.tableLabelDataCompleteness), h("th", { scope: "col" }, h("i", { class: "far fa-calendar fa-1x" }), language.tableLabelDataActuality), h("th", { scope: "col" }))), h("tbody", null, this.dataBasket.dataSets.map((dataSet, index) => {
      return [
        h("tr", { class: "cursor-pointer", "data-toggle": "collapse", "data-target": "#collapse" + dataSet.id, "aria-expanded": "true", "aria-controls": "collapse" + dataSet.id }, h("td", { class: "expand-button" }, index + 1), h("td", null, dataSet.person.type === "INDIVIDUAL" ?
          h("div", { class: "text-truncate", title: dataSet.person.dataSubject.last_name + ", " + dataSet.person.dataSubject.first_name + " " + (dataSet.person.dataSubject.title.trim() === "" ? "" : "(" + dataSet.person.dataSubject.title.trim() + ")") }, h("div", { class: "row" }, h("div", { class: "col-12" }, h("i", { class: "fas fa-portrait fa-2x align-middle" }), "\u00A0\u00A0", dataSet.person.dataSubject.last_name + ", " + dataSet.person.dataSubject.first_name + " " + (dataSet.person.dataSubject.title.trim() === "" ? "" : "(" + dataSet.person.dataSubject.title.trim() + ")"))), h("div", { class: "row" }, h("div", { class: "col-12" }, dataSet.person.dataSubject.type === "INTERNAL" ?
            "" :
            h("span", { class: "badge badge-info align-self-end cursor-help", title: language.labelExternalPersonDescripton }, language.labelExternalPerson))))
          :
            h("div", { class: "text-truncate", title: dataSet.person.dataSubjectCategory.friendlyName }, h("div", { class: "row" }, h("div", { class: "col-12" }, h("i", { class: "fas fa-users fa-2x align-middle" }), "\u00A0\u00A0", dataSet.person.dataSubjectCategory.friendlyName)), h("div", { class: "row" }, h("div", { class: "col-12" }, h("span", { class: "badge badge-info align-self-end cursor-help", title: language.labelUnspecifiedGroupDescripton }, language.labelUnspecifiedGroup))))), h("td", null, h("div", { class: "cursor-help", title: isProcessingAllowed(dataSet, this.dataBasket) === "ALLOWED" ? language.labelAllowedToProcess :
            isProcessingAllowed(dataSet, this.dataBasket) === "NEED_TO_ASK" ? language.labelWaitingForConsent :
              language.labelNotAllowedToProcess }, h("div", { class: "row" }, h("div", { class: "col d-flex align-items-center justify-content-center" }, "                                                    ", isProcessingAllowed(dataSet, this.dataBasket) === "ALLOWED" ?
          h("div", { class: "text-center" }, h("i", { class: "fas fa-check-circle fa-2x" }))
          :
            isProcessingAllowed(dataSet, this.dataBasket) === "NEED_TO_ASK" ?
              h("div", { class: "text-center" }, h("i", { class: "fas fa-exclamation-circle fa-2x" }), h("br", null), h("span", { class: "badge badge-warning align-self-end cursor-help" }, language.labelPendingConsent))
              :
                isProcessingAllowed(dataSet, this.dataBasket) === "UNKNOWN" ?
                  h("div", { class: "text-center" }, h("i", { class: "fas fa-question-circle" }), h("br", null), h("span", { class: "badge badge-secondary align-self-end cursor-help" }, language.labelNotDeterminable))
                  :
                    h("div", { class: "text-center" }, h("i", { class: "fas fa-times-circle fa-2x" }), h("br", null), h("span", { class: "badge badge-danger align-self-end cursor-help" }, language.labelRejected)))))), h("td", null, (() => {
          let piiAvailable = EDataBasket.checkPIIAvailable(dataSet, this.dataBasket);
          return (h("div", { class: "cursor-help", title: ((dataSet.pii.length - piiAvailable.count) == 0 && piiAvailable.elicitedBy === this.dataBasket.requestingDataProcessor.faculty) ?
              language.labelDataComplete : (dataSet.pii.length - piiAvailable.count) == 0 ?
              language.labelDataAvailable :
              language.labelMissing + (dataSet.pii.length - piiAvailable.count) + language.labelPersonalData }, h("div", { class: "row" }, h("div", { class: "col d-flex align-items-center justify-content-center" }, ((dataSet.pii.length - piiAvailable.count) == 0 && piiAvailable.elicitedBy === this.dataBasket.requestingDataProcessor.faculty) ?
            h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { ProgressMax: dataSet.pii.length, ProgressCurrent: piiAvailable.count }))
            : (dataSet.pii.length - piiAvailable.count) == 0 ?
              h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { ProgressMax: dataSet.pii.length, ProgressCurrent: 0 }), h("small", { class: "badge badge-success " }, language.labelAvailable))
              :
                h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { ProgressMax: dataSet.pii.length, ProgressCurrent: 0 }))))));
        })()), h("td", { class: "text-center" }, " ", (EDataBasket.checkPIIAvailable(dataSet, this.dataBasket).count > 0 && EDataBasket.checkOutdatedPII(this.dataBasket, dataSet) === "OUTDATED") ?
          h("span", { class: "badge badge-warning align-self-end cursor-help", title: language.labelOlderThan180 }, "\u00E4lter als 180 Tage")
          :
            (EDataBasket.checkPIIAvailable(dataSet, this.dataBasket).count > 0 && EDataBasket.checkOutdatedPII(this.dataBasket, dataSet) === "UNKNOWN") ?
              h("span", { class: "badge badge-warning align-self-end cursor-help", title: language.labelActualityNotDeterminable }, "nicht ermittelbar")
              :
                EDataBasket.checkOutdatedPII(this.dataBasket, dataSet) === "UNKNOWN" ?
                  h("span", { class: "text-muted", title: language.labelActualityNotDeterminable }, h("small", null, h("i", null, language.labelNotAvailable)))
                  :
                    language.labelUpToDate), h("td", null, h("button", { "data-toggle": "tooltip", "data-placement": "top", title: language.labelContact, type: "button", class: "btn btn-link", hidden: this.hideSendMessage, onClick: () => this.sendNewMessage.emit(dataSet.person) }, h("i", { class: "fas fa-envelope" })))),
        h("tr", { class: "hide-table-padding" }, h("td", null), h("td", { colSpan: 5 }, h("div", { id: "collapse" + dataSet.id, class: "collapse in p-3" }, h("h6", null), h("table", { class: "table-details table" }, h("thead", null, h("tr", null, h("th", { scope: "col", title: language.labelCategoriesPersData }, h("i", { class: "fas fa-tag" }), " ", language.labelCategoriesPersDataShort), h("th", { class: "text-center" }, h("i", { class: "fas fa-certificate" }), " ", language.tableLabelApproval), h("th", { class: "text-center" }, h("i", { class: "fas fa-tasks fa-1x" }), " ", language.tableLabelDataCompleteness), h("th", { class: "text-center" }, h("i", { class: "far fa-calendar fa-1x" }), " ", language.tableLabelDataActuality), h("th", { class: "text-center" }, h("i", { class: "fas fa-database fa-1x" }), " ", language.tableLabelStorageLocation))), h("tbody", null, this.renderPIIDetails(dataSet).map(htmlEl => h("tr", null, h("td", null, htmlEl.displayName), htmlEl.isProcessingAllowed === "ALLOWED" ?
          h("td", { class: "text-center" }, h("span", null, h("i", { class: "fas fa-check-circle fa-1x" }), " ", h("trusd-piiq-com-lawfulness-simple-text", { Lawfulness: htmlEl.legalBasis }))) :
          htmlEl.isProcessingAllowed === "NEED_TO_ASK" ?
            h("td", { class: "text-center bg-warning" }, h("span", null, h("i", { class: "fas fa-exclamation-circle fa-1x" }), " ", h("trusd-piiq-com-lawfulness-simple-text", { Lawfulness: htmlEl.legalBasis }))) :
            htmlEl.legalBasis != null ?
              h("td", { class: "text-center bg-danger" }, h("span", null, h("i", { class: "fas fa-times-circle fa-1x" }), " ", h("trusd-piiq-com-lawfulness-simple-text", { Lawfulness: htmlEl.legalBasis }))) :
              h("td", { class: "text-center bg-warning cursor-help", "data-toggle": "tooltip", "data-placement": "right", title: "Die Verarbeitung dieser Daten f\u00FCr diese Person ist aktuell nicht m\u00F6glich. Die Freigabe erfolgt durch die Datenschutzbeauftragte. Die Freigabe wird beim Versenden des Datenkorbs automatisch angefragt." }, h("span", null, h("i", { class: "fas fa-user-shield" }), " ", h("div", null, "Freigabe notwendig"))), h("td", { class: "text-center" }, htmlEl.available), htmlEl.lastChange === "UPTODATE" ?
          h("td", { class: "text-center" }, htmlEl.lastChangeDate) :
          htmlEl.lastChange === "OUTDATED" ?
            h("td", { class: "text-center" }, h("span", { class: "badge badge-warning" }, htmlEl.lastChangeDate)) :
            h("td", { class: "text-center" }, "-"), h("td", { class: "text-center" }, htmlEl.dataSource))))))))
      ];
    })))));
  }
};
DataBasketDataSubjectList.style = comDataBasketDataSubjectListCss;

export { DataBasketDataSubjectList as trusd_piiq_com_data_basket_data_subject_list };
