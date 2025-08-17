import { r as registerInstance, h } from './index-dee1f973.js';
import { d as dist } from './index-de766dcc.js';
import { E as EDataBasket } from './EDataBasket-f2b29bfe.js';
import { f as findProcessingRecordEntryByID } from './utils-8ebcd8ca.js';
import './index-912d1a21.js';
import './store-9032fc40.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';

const comDataBasketPersonalDataRecipientTableCss = ".tooltips.sc-trusd-piiq-com-data-basket-personal-data-recipient-table .tooltiptext.sc-trusd-piiq-com-data-basket-personal-data-recipient-table{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-personal-data-recipient-table .tooltiptext.sc-trusd-piiq-com-data-basket-personal-data-recipient-table::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-personal-data-recipient-table:hover .tooltiptext.sc-trusd-piiq-com-data-basket-personal-data-recipient-table{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-personal-data-recipient-table,.privacy-tooltip.sc-trusd-piiq-com-data-basket-personal-data-recipient-table+.tooltip.sc-trusd-piiq-com-data-basket-personal-data-recipient-table>.tooltip-inner.sc-trusd-piiq-com-data-basket-personal-data-recipient-table{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-personal-data-recipient-table{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-personal-data-recipient-table{cursor:help}button.sc-trusd-piiq-com-data-basket-personal-data-recipient-table:disabled{cursor:not-allowed;pointer-events:all !important}";

const DataBasketPersonalDataRecipientTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dataBasket = new EDataBasket();
    /* FORM */
    this.formFilterNameDataSubjects = "A-Z";
    this.table = [];
    this.columns = [];
    this.rows = [];
  }
  componentWillLoad() {
    findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID)
      .dataSubjectCategoriesAggregate.map(aggregate1 => {
      aggregate1.dataCategoriesAggregate.map(aggregate2 => {
        let tmp = this.columns.find(rcpt => rcpt.type === aggregate2.recipientCategory.type);
        if (!tmp) {
          this.columns.push(aggregate2.recipientCategory);
        }
        let row = this.rows.find(dc => dc.id.value === aggregate2.dataCategory.id.value);
        if (!row) {
          this.rows.push(aggregate2.dataCategory);
        }
      });
    });
    // Create and initialize new table array:
    this.table = new Array(this.rows.length);
    for (let index = 0; index < this.table.length; index++) {
      this.table[index] = { rowName: this.rows[index].friendlyName, column: new Array(this.columns.length) };
      for (let index2 = 0; index2 < this.table[index].column.length; index2++) {
        this.table[index].column[index2] = undefined;
      }
    }
    findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID)
      .dataSubjectCategoriesAggregate.map(aggregate1 => {
      aggregate1.dataCategoriesAggregate.map(aggregate2 => {
        let column = this.columns.findIndex(rcpt => rcpt.type === aggregate2.recipientCategory.type);
        let row = this.rows.findIndex(dc => dc.id.value === aggregate2.dataCategory.id.value);
        this.table[row].column[column] = aggregate2.lawfulness;
      });
    });
  }
  componentWillRender() {
    if (this.formFilterNameDataSubjects === "A-Z") {
      this.table.sort((a, b) => {
        if (a.rowName < b.rowName)
          return -1;
        if (a.rowName > b.rowName)
          return 1;
        return 0;
      });
    }
    else {
      this.table.sort((a, b) => {
        if (a.rowName > b.rowName)
          return -1;
        if (a.rowName < b.rowName)
          return 1;
        return 0;
      });
    }
  }
  componentDidLoad() {
    $("[data-toggle='tooltip']").tooltip();
  }
  render() {
    return (h("div", { class: "overflow-auto", style: { maxHeight: "70vh" } }, h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", { scope: "col", title: "Kategorien der personenbezogene Daten" }, h("i", { class: "fas fa-tag" }), " ", h("small", null, "Kategorien pers. Daten"), "\u00A0\u00A0", this.formFilterNameDataSubjects === "A-Z" ?
      h("button", { type: "button", class: "btn btn-outline-secondary btn-sm dropdown-toggle-split", onClick: () => this.formFilterNameDataSubjects = "Z-A" }, h("i", { class: "fas fa-sort-alpha-down" })) :
      h("button", { type: "button", class: "btn btn-outline-secondary btn-sm dropdown-toggle-split", onClick: () => this.formFilterNameDataSubjects = "A-Z" }, h("i", { class: "fas fa-sort-alpha-up" }))), this.columns.map(column => column.type === dist.ERecipientCategoryTypeEnum.ETeamRecipient ?
      h("th", { class: "text-center", scope: "col" }, h("i", { class: "fas fa-users" }), " ", h("small", null, " Hochschuleinheit")) :
      column.type === dist.ERecipientCategoryTypeEnum.EDepartmentRecipient ?
        h("th", { class: "text-center", scope: "col" }, h("i", { class: "far fa-building" }), " ", h("small", null, "Innerhalb der Hochschule")) :
        h("th", { class: "text-center", scope: "col" }, h("i", { class: "fas fa-globe" }), " ", h("small", null, "Externe Empf\u00E4nger"))))), h("tbody", null, this.table.map((row) => h("tr", null, h("td", null, row.rowName), row.column.map(column => !column ? h("td", { class: "border bg-white" }, h("small", null, "Weitergabe ", h("u", null, "nicht"), " gestattet")) :
      column.type === dist.VOLawfulnessTypeEnum.A ? h("td", { class: "border table-primary" }, h("small", null, "gestattet ", h("b", null, "mit Einwilligung"))) :
        h("td", { class: "border bg-primary text-white" }, h("small", null, h("b", null, "gestattet"))))))))));
  }
};
DataBasketPersonalDataRecipientTable.style = comDataBasketPersonalDataRecipientTableCss;

export { DataBasketPersonalDataRecipientTable as trusd_piiq_com_data_basket_personal_data_recipient_table };
