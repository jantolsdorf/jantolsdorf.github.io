import { r as registerInstance, h } from './index-dee1f973.js';
import { D as DataPersonSelect } from './com-data-basket-step-2-70f96375.js';
import { c as EnumPIITransmissionChannel } from './EDataBasket-f2b29bfe.js';
import './de-DE-5564f65b.js';
import './VODataSet-115d76dd.js';
import './index-912d1a21.js';
import './MessageStrip-d043c32b.js';
import './Icons-85d4abff.js';
import './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import './Button-7dc82d4c.js';
import './DatePicker-7ba473c2.js';
import './ValueState-a7516d8f.js';
import './ResponsivePopover-cdfbc391.js';
import './Popover-0d784de7.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './slim-arrow-right-08785783.js';
import './Input-0ee3a2d0.js';
import './MultiComboBox-28b17a8b.js';
import './Tokenizer-d8a8b2e5.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './StandardListItem-6305d5b8.js';
import './BusyIndicator-60b0b9ee.js';
import './store-9032fc40.js';
import './utils-8ebcd8ca.js';
import './index-de766dcc.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';

const processingDetailCss = ".sc-trusd-piiq-com-processing-detail-h{display:block}";

const ProcessingDetail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.data = document.querySelector('trusd-piiq-com-app-root').data;
  }
  getDataSet() {
    this.data.dataSets.forEach(dS => {
      dS.pii.forEach(data => {
        data.data_consent = 'nicht vorhanden',
          data.data_delete_date = '2023-01-01',
          data.data_source = 'Unbekannt';
        data.data_last_change = new Date('August 19, 1975 23:15:30');
      });
    });
    return this.data.dataSets;
  }
  getActuality() {
    var actuality = "latest";
    this.data.dataSets.forEach(dS => {
      dS.pii.forEach(data => {
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
    this.getDataSet().forEach(dS => {
      dS.pii.forEach(data => {
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
    this.data.dataSets.forEach(dS => {
      dS.pii.forEach(data => {
        data;
        count++;
      });
    });
    return count;
  }
  render() {
    if (this.data == undefined) {
      this.history.replace(DataPersonSelect.route);
    }
    else {
      return (h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: " d-flex justify-content-end w-100" }, h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-secondary ", onClick: () => console.log(this.data) }, "L\u00F6schen")), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-primary " }, "Bearbeiten ")), h("div", { class: "p-2" }, h("stencil-route-link", { url: ProcessingDetail.route }, h("button", { type: "button", class: "btn btn-success ", onClick: () => document.querySelector('trusd-piiq-com-app-root').data = this.data }, "Verarbeitung starten")))), h("div", { class: "row w-100" }, h("div", { class: "alert alert-warning w-100", role: "alert" }, h("b", null, "In Bearbeitung. "), " Diese Verarbeitung ist noch nicht aktiv, Sie k\u00F6nnen den Inhalt weiterhin anpassen."))), h("div", { class: "row" }, h("h3", null, "Forschungsantrag")), h("div", { class: "row shadow p-3 mb-5 bg-white rounded" }, h("div", { class: "row w-100" }, h("div", { class: "alert alert-danger w-100", role: "alert" }, h("b", null, "Nicht genehmigt. "), " Sie d\u00FCrfen die personenbezogenen Daten nicht verarbeiten."), h("div", { class: "row w-100" }, h("div", { class: "col border-1 m-1" }, h("h5", { class: "font-weight-light" }, "Verarbeitungst\u00E4tigkeit"), h("p", { class: "font-weight-bold" }, this.data.processing)), h("div", { class: "col border-1 m-1" }, h("h5", { class: "font-weight-light" }, "Einwilligungen"), h("p", { class: "font-weight-bold" }, this.countData(), " Einwilligungen erforderlich"), h("div", { class: "progress" }, h("div", { class: "progress-bar bg-danger", role: "progressbar", style: { width: '1%' }, "aria-valuenow": "50", "aria-valuemin": "0", "aria-valuemax": "100" }))), h("div", { class: "col border-1 m-1" }, h("h5", { class: "font-weight-light" }, "Datenvollst\u00E4ndigkeit"), h("p", { class: "font-weight-bold" }, "Daten nicht vollst\u00E4ndig"), h("div", { class: "progress" }, h("div", { class: "progress-bar bg-danger", role: "progressbar", style: { width: '1%' }, "aria-valuenow": "50", "aria-valuemin": "0", "aria-valuemax": "100" }))), h("div", { class: "col border-1 m-1" }, h("h5", { class: "font-weight-light" }, "L\u00F6schfrist"), h("p", { class: "font-weight-bold" }, this.getDeleteDate()))))), h("div", { class: "row" }, h("h5", { class: "fw-light" }, "Beschreibung der Verarbeitung")), h("div", { class: "row" }, h("p", { class: "lead" }, this.data.description == "" ? "Keine Beschreibung" : this.data.description)), h("div", { class: "row pl-4 pr-4" }, h("div", { class: "col border border-1 rounded m-1" }, h("h5", { class: "font-weight-light" }, "Frist"), h("p", { class: "text-center font-weight-bold align-middle" }, " ", this.data.deadline != "" ? this.data.deadline : "Keine Frist festgelgt")), h("div", { class: "col border border-1 rounded m-1" }, h("h5", { class: "font-weight-light" }, "Aktualit\u00E4t"), h("p", { class: this.getActuality() == "latest" ? "" : "text-danger " + "text-center font-weight-bold" }, " ", this.getActuality()), h("p", null, this.getActuality() == "latest" ? "" : "Einige der aktuell verfügbaren personebezogenen Daten sind vermutlich veraltet")), h("div", { class: "col border border-1 rounded m-1" }, h("h5", { class: "font-weight-light" }, "\u00DCbermittlungswege"), this.data.transmissionChannel.includes(EnumPIITransmissionChannel.EMAIL) ? h("p", { class: "text-center font-weight-bold" }, " E-Mail") : "", this.data.transmissionChannel.includes(EnumPIITransmissionChannel.INHOUSE_MAIL) ? h("p", { class: "text-center font-weight-bold" }, " Hauspost") : '', this.data.transmissionChannel.includes(EnumPIITransmissionChannel.FILE_UPLOAD) ? h("p", { class: "text-center font-weight-bold" }, " Datei-Upload") : '', this.data.transmissionChannel.includes(EnumPIITransmissionChannel.FAX) ? h("p", { class: "text-center font-weight-bold" }, " Fax") : '', this.data.transmissionChannel.length == 0 ? "" : "Keine Übertragung gewählt"), h("div", { class: "col border border-1 rounded m-1" }, h("h5", { class: "font-weight-light" }, "Sensibilit\u00E4tsscore"), h("div", { class: "alert alert-secondary", role: "alert" }, "keine Besonderheiten bekannt"), h("p", null))), h("div", { class: "row w-100 mt-3" }, h("div", { class: "accordion w-100", id: "accordionDataList" }, this.getDataSet().map((dS) => h("div", { class: "card" }, h("h2", { class: "card-header", id: "heading" + dS.id }, h("button", { class: "btn btn-link  d-flex justify-content-between align-items-center w-100", type: "button", "data-toggle": "collapse", "data-target": "#collapse" + dS.id, "aria-expanded": "true", "aria-controls": "collapse" + dS.id }, h("span", { class: "float-start mr-5" }, dS.person.dataSubject.full_name), h("div", { class: "ml-4 col" }, this.getActuality() == "latest" ? "" : h("span", { class: "badge badge-warning m-1" }, "Aktualit\u00E4t"), h("span", { class: "badge badge-danger m-1" }, "Einwilligung"), h("span", { class: "badge badge-danger m-1" }, "Datenvollst\u00E4ndigkeit")))), h("div", { id: "collapse" + dS.id, class: "accordion-collapse collapse", "aria-labelledby": "heading" + dS.id, "data-bs-parent": "#accordionDataList" }, h("div", { class: "card-body" }, h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, "#"), h("th", { scope: "col" }, "Bezeichnung"), h("th", { scope: "col" }, "Letzte \u00C4nderung"), h("th", { scope: "col" }, "Speicherort"), h("th", { scope: "col" }, "L\u00F6schfrist"), h("th", { scope: "col" }, "Einwilligung"))), h("tbody", null, dS.pii.map((data, key) => h("tr", null, h("th", { scope: "row" }, key), h("td", null, data.dataCategory.friendlyName), h("td", null, data.data_last_change), h("td", null, data.data_source), h("td", null, data.data_delete_date), h("td", { class: "text-danger" }, data.data_consent)))))))))))));
    }
  }
};
ProcessingDetail.route = "/prozess-fortschritt";
ProcessingDetail.style = processingDetailCss;

export { ProcessingDetail as trusd_piiq_com_processing_detail };
