import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import { D as DataPersonSelect } from './com-data-basket-step-2-70f96375.js';
import { l as language } from './de-DE-5564f65b.js';
import { E as EDataBasket, c as EnumPIITransmissionChannel } from './EDataBasket-f2b29bfe.js';
import { s as state } from './store-9032fc40.js';
import { d as getLegalFoundationsByPersonalDataCategory, f as findProcessingRecordEntryByID } from './utils-8ebcd8ca.js';
import { d as dist } from './index-de766dcc.js';
import './DatePicker-7ba473c2.js';
import './BusyIndicator-60b0b9ee.js';
import { V as VODataSubjectSelect } from './VODataSubjectSelect-89e5c619.js';
import './VODataSet-115d76dd.js';
import './index-912d1a21.js';
import './MessageStrip-d043c32b.js';
import './Icons-85d4abff.js';
import './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import './Button-7dc82d4c.js';
import './MultiComboBox-28b17a8b.js';
import './Popover-0d784de7.js';
import './ValueState-a7516d8f.js';
import './Tokenizer-d8a8b2e5.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './ResponsivePopover-cdfbc391.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './StandardListItem-6305d5b8.js';
import './Input-0ee3a2d0.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';
import './slim-arrow-right-08785783.js';

const comDataBasketStep3Css = ".tooltips.sc-trusd-piiq-com-data-basket-step-3 .tooltiptext.sc-trusd-piiq-com-data-basket-step-3{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-step-3 .tooltiptext.sc-trusd-piiq-com-data-basket-step-3::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-step-3:hover .tooltiptext.sc-trusd-piiq-com-data-basket-step-3{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-step-3,.privacy-tooltip.sc-trusd-piiq-com-data-basket-step-3+.tooltip.sc-trusd-piiq-com-data-basket-step-3>.tooltip-inner.sc-trusd-piiq-com-data-basket-step-3{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-step-3{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-step-3{cursor:help}button.sc-trusd-piiq-com-data-basket-step-3:disabled{cursor:not-allowed;pointer-events:all !important}.sc-trusd-piiq-com-data-basket-step-3-h{display:block}*.sc-trusd-piiq-com-data-basket-step-3{text-align:left}.card-block.sc-trusd-piiq-com-data-basket-step-3{border:1px solid lightgrey;border-radius:2px !important;background-color:#FAFAFA;padding:10px}.trusd-button-select.sc-trusd-piiq-com-data-basket-step-3:hover{cursor:pointer;border:1px solid #007BFF}";

const EditDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completed = createEvent(this, "completed", 7);
    this.back = createEvent(this, "back", 7);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.dataBasket = new EDataBasket();
    this.formRadioBtnUpdatePII = false;
    this.formWidgetIsProcessingAllowed = "ALLOWED";
    this.formWidgetMissingData = 0;
    this.formWidgetOutdatedData = 0;
    this.formSearchStringContacts = "";
    this.filterNameDataSubjects = "A-Z";
    this.mappingTransmissionChannelInput = [
      { key: EnumPIITransmissionChannel.EMAIL, value: "E-Mail" },
      { key: EnumPIITransmissionChannel.INHOUSE_MAIL, value: "Hauspost" },
      { key: EnumPIITransmissionChannel.FILE_UPLOAD, value: "Datei Upload" },
      { key: EnumPIITransmissionChannel.FAX, value: "Fax" }
    ];
  }
  handleOnChangeTransmissionChannel(ev) {
    if (ev.target.checked && this.dataBasket.transmissionChannel.indexOf(ev.target.value) === -1) {
      this.dataBasket.transmissionChannel.push(ev.target.value);
    }
    else if (!ev.target.checked && this.dataBasket.transmissionChannel.indexOf(ev.target.value) >= 0) {
      this.dataBasket.transmissionChannel.splice(this.dataBasket.transmissionChannel.indexOf(ev.target.value), 1);
    }
  }
  isProcessingAllowed(ds) {
    let piiDateStatus = "ALLOWED";
    if (ds.person.type === "INDIVIDUAL") {
      ds.pii.forEach(pii => {
        if (piiDateStatus === "NEED_TO_ASK" || piiDateStatus === "OBJECTED")
          return;
        let legalFoundation = getLegalFoundationsByPersonalDataCategory(findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID), { value: ds.person.dataSubject.type === "INTERNAL" ? "data_subject_cat_1" : "data_subject_cat_2" }, pii.dataCategory.id);
        if (legalFoundation && legalFoundation.type === dist.VOLawfulnessTypeEnum.A) {
          piiDateStatus = "NEED_TO_ASK";
          return;
        }
        else {
          piiDateStatus = "ALLOWED";
          return;
        }
      });
    }
    else {
      piiDateStatus = "UNKNOWN";
    }
    return piiDateStatus;
  }
  // isProcessingAllowedByPersonalData(ds: VODataSet, pii: VOPIISelect): "ALLOWED" | "NEED_TO_ASK" | "OBJECTED" {
  //   let piiDateStatus: "ALLOWED" | "NEED_TO_ASK" | "OBJECTED" = "ALLOWED"
  //   let legalFoundation = getLegalFoundationsByPersonalDataCategory(
  //     findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID),
  //     { value: ds.person.dataSubject.type === "INTERNAL" ? "data_subject_cat_1" : "data_subject_cat_2" },
  //     pii.dataCategory.id
  //   )
  //   if (legalFoundation && legalFoundation.type === VOLawfulnessTypeEnum.A) {
  //     piiDateStatus = "NEED_TO_ASK"
  //   } else {
  //     piiDateStatus = "ALLOWED"
  //   }
  //   return piiDateStatus
  // }
  startProcessing() {
    this.dataBasket.dataSets.forEach(ds => {
      this.dataBasket = EDataBasket.addToConversations(this.dataBasket, ds.person, "123Neue Anfrage gestartet: " + (() => { let data = ""; ds.pii.forEach(pii => data += (pii.dataCategory.friendlyName + ", ")); return data.substring(0, data.length - 2); })(), { name: this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name, id: "data-processor-1" });
    });
    if (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" && this.dataBasket.requestPersonalMessageToDataSubjects !== "") {
      this.dataBasket.dataSets.forEach(ds => {
        this.dataBasket = EDataBasket.addToConversations(this.dataBasket, ds.person, this.dataBasket.requestPersonalMessageToDataSubjects, { name: this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name, id: "data-processor-1" });
      });
    }
    else if (this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" && this.dataBasket.requestPersonalMessageToPersonOrDepartment !== "") {
      this.dataBasket = EDataBasket.addToConversations(this.dataBasket, VODataSubjectSelect.fromDataSubject(this.dataBasket.dataSourcePersonOrDepartment), this.dataBasket.requestPersonalMessageToPersonOrDepartment, { name: this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name, id: "data-processor-1" });
    }
    this.completed.emit(this.dataBasket);
  }
  /**
     *
     * @returns Returns an array of data subjects sorted by name.
     */
  getInternalDataSubjects(filtered) {
    let dataSubjects = state.dbEDataSubjects.filter(ds => ds.type === "INTERNAL");
    if (filtered) {
      // text search: 
      if (this.formSearchStringContacts) {
        this.formSearchStringContacts.split(" ").forEach((searchString) => {
          dataSubjects = dataSubjects.filter((ds) => {
            return (ds.full_name.toLowerCase().includes(searchString.toLowerCase()) ||
              ds.faculty.toLowerCase().includes(searchString.toLowerCase()) ||
              ds.job.toString().toLowerCase().includes(searchString.toLowerCase()) ||
              ds.title.toString().toLowerCase().includes(searchString.toLowerCase()));
          });
        });
      }
      // sort alphabetically:
      if (this.filterNameDataSubjects === "A-Z") {
        dataSubjects = dataSubjects.sort(function (a, b) {
          if (a.last_name + " " + a.first_name < b.last_name + " " + b.first_name)
            return -1;
          if (a.last_name + " " + a.first_name > b.last_name + " " + b.first_name)
            return 1;
          return 0;
        });
      }
      else if (this.filterNameDataSubjects === "Z-A") {
        dataSubjects = dataSubjects.sort(function (a, b) {
          if (a.last_name + " " + a.first_name > b.last_name + " " + b.first_name)
            return -1;
          if (a.last_name + " " + a.first_name < b.last_name + " " + b.first_name)
            return 1;
          return 0;
        });
      }
    }
    return dataSubjects;
  }
  componentWillRender() {
  }
  componentWillLoad() {
    // add default if no transmission channels set yet.
    if (!this.dataBasket.transmissionChannel || this.dataBasket.transmissionChannel.length == 0) {
      this.dataBasket.transmissionChannel = [
        EnumPIITransmissionChannel.FILE_UPLOAD,
        EnumPIITransmissionChannel.EMAIL
      ];
    }
    this.formReccommendedByDataBasket = EDataBasket.getBestSourceForPersonalData(this.dataBasket);
    this.dataBasket.dataSets.map((s) => {
      let tmp = EDataBasket.checkPIIAvailable(s, this.dataBasket);
      if (tmp.count < s.pii.length)
        this.formWidgetMissingData += 1;
    });
    this.dataBasket.dataSets.map((s) => {
      if (EDataBasket.checkOutdatedPII(this.dataBasket, s) === "OUTDATED")
        this.formWidgetOutdatedData += 1;
    });
    for (let index = 0; index < this.dataBasket.dataSets.length; index++) {
      const element = this.isProcessingAllowed(this.dataBasket.dataSets[index]);
      if (element === "UNKNOWN" || element === "OBJECTED" || element === "NEED_TO_ASK") {
        this.formWidgetIsProcessingAllowed = element;
        return;
      }
    }
    // update the data basket
    this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestDataRequestedFrom: ((this.formWidgetMissingData > 0 || this.formWidgetOutdatedData > 0) && this.dataBasket.requestingDataProcessor.faculty !== this.formReccommendedByDataBasket.elictedBy) ? this.formReccommendedByDataBasket.bestOption : "DATA_SUBJECT", dataSourcePersonOrDepartment: ((this.formWidgetMissingData > 0 || this.formWidgetOutdatedData > 0) && this.dataBasket.requestingDataProcessor.faculty !== this.formReccommendedByDataBasket.elictedBy) ? state.dbEDataSubjects.find(el => el.faculty === this.formReccommendedByDataBasket.elictedBy) : null });
  }
  componentDidLoad() {
    $("[data-toggle='tooltip']").tooltip();
  }
  render() {
    if (this.dataBasket == undefined) {
      this.history.replace(DataPersonSelect.route);
    }
    else {
      return (h("div", { class: "container" }, h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Verf\u00FCgbarkeit")), h("div", { class: "col-lg-3 col-xs-10 ml-3 p-1 bg-light rounded cursor-help" }, 
      // Data are incomplete:
      this.formWidgetMissingData > 0 ?
        h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Für " + this.formWidgetMissingData + " Person(en) liegen die angefragten personenbezogenen Daten nicht vor und müssen abgefragt werden." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#dc3545" }, h("div", { class: "d-flex align-items-center justify-content-center text-danger", slot: "icon" }, h("span", null, this.formWidgetMissingData)))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Unvollst\u00E4ndig"))))
        :
          // Data reside in other department:
          this.formReccommendedByDataBasket.elictedBy !== this.dataBasket.requestingDataProcessor.faculty ?
            h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Alle angefragten Daten stehen in einer anderen Abteilung zur Verfügung und werden Ihnen zur Verfügung gestellt." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#2ecc71" }, h("div", { class: "d-flex align-items-center justify-content-center text-success", slot: "icon" }, h("i", { class: "fas fa-check fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Vorr\u00E4tig auf Anfrage"))))
            :
              // All data available:
              h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Alle angefragten Daten sind vollständig und stehen Ihnen sofort zur Verfügung." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#2ecc71" }, h("div", { class: "d-flex align-items-center justify-content-center text-success", slot: "icon" }, h("i", { class: "fas fa-check fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Vollst\u00E4ndig"))))), h("div", { class: "col-lg-3 col-xs-10 ml-3 p-1 bg-light rounded cursor-help" }, this.formWidgetIsProcessingAllowed === "ALLOWED" ?
        h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Sie d\u00FCrfen die ausgew\u00E4hlten personenbezogenen Daten verarbeiten." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3 tooltips" }, h("trusd-com-circle-icon", { BGCOLOR: "#2ecc71" }, h("div", { class: "d-flex align-items-center justify-content-center text-success", slot: "icon" }, h("i", { class: "fas fa-check fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Genehmigt"))))
        : this.formWidgetIsProcessingAllowed === "NEED_TO_ASK" ?
          h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Einige betroffene Personen m\u00FCssen in die Verarbeitung einwilligen, bevor Sie die personenbezogenen Daten verarbeiten d\u00FCrfen." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#ffd43b" }, h("div", { class: "d-flex align-items-center justify-content-center text-warning", slot: "icon" }, h("i", { class: "fas fa-exclamation fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Fehlende Genehmigung"))))
          :
            this.formWidgetIsProcessingAllowed === "UNKNOWN" ?
              h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Es konnte nicht ermittelt werden, ob eine Genehmigung vorliegt oder nicht." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#000" }, h("div", { class: "d-flex align-items-center justify-content-center", slot: "icon" }, h("i", { class: "fas fa-question fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Unbekannt"))))
              :
                h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die Verarbeitung der Daten wurden von einigen betroffenen Personen abgelehnt." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#dc3545" }, h("div", { class: "d-flex align-items-center justify-content-center text-danger", slot: "icon" }, h("i", { class: "fas fa-times fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Abgelehnt"))))), this.formWidgetOutdatedData > 0 ?
        h("div", { class: "col-lg-3 col-xs-10 ml-3 p-1 bg-light rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Bei " + this.formWidgetOutdatedData + " Person(en) sind die verfügbaren personenbezogenen eventuell veraltet." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("trusd-com-circle-icon", { BGCOLOR: "#ffd43b" }, h("div", { class: "d-flex align-items-center justify-content-center text-warning", slot: "icon" }, h("i", { class: "fas fa-calendar-times fa-1x" })))), h("div", { class: "col-9 text-center" }, h("div", { class: "d-flex align-items-center justify-content-center h-100" }, "Veraltete Daten")))))
        :
          "", h("div", { class: "col-12 pt-3" }, h("details", null, h("summary", { class: "pl-2 btn-outline-primary border rounded" }, "Details anzeigen (", this.dataBasket.dataSets.length, " betroffene Person(en))"), this.dataBasket.dataSets.length > 0 ?
        h("div", { class: "row p-3 m-0 bg-light overflow-auto", style: { maxHeight: "70vh" } }, h("trusd-piiq-com-data-basket-data-subject-list", { hideSendMessage: true, class: "w-100", dataBasket: this.dataBasket })) :
        h("div", { class: "row" }, h("div", { class: "col-3" }), h("div", { class: "col-6" }, h("p", { class: "text-center font-italic w-100" }, "Bitte w\u00E4hlen Sie oben die personenbezogenen Daten und die betroffenen Personen aus und f\u00FCgen Sie Ihre Auswahl anschlie\u00DFend dem Datenkorb hinzu.")), h("div", { class: "col-3" }))))), this.formWidgetOutdatedData > 0 ?
        h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Sollen die betroffenen Personen nach einer Aktualisierung der Daten gefragt werden?*"), h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-radiobutton", { text: "Ja, betroffene Personen nach Aktualisierung fragen.", selected: this.dataBasket.isAskToUpdateOutdatedPII, onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { isAskToUpdateOutdatedPII: true,
            // if we want an update, we must set piiSource too, because only data subjects can update their information :)
            requestDataRequestedFrom: "DATA_SUBJECT" }), name: "GroupRadioBtnUpdatePII" }), h("ui5-radiobutton", { text: "Nein, keine Aktualisierung der Daten anfragen.", selected: !this.dataBasket.isAskToUpdateOutdatedPII, onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { isAskToUpdateOutdatedPII: false }), name: "GroupRadioBtnUpdatePII" })), this.dataBasket.isAskToUpdateOutdatedPII || !this.dataBasket.isAskToUpdateOutdatedPII ?
          h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""))) : "", this.formWidgetMissingData > 0 || this.formReccommendedByDataBasket.elictedBy !== this.dataBasket.requestingDataProcessor.faculty ?
        h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Wie sollen die" + (this.formWidgetMissingData > 0 ? " nicht verfügbaren" : "") + " Daten eingeholt werden?*"), this.formReccommendedByDataBasket.bestOption === this.dataBasket.requestDataRequestedFrom ?
          h("p", null, h("small", null, h("i", null, "Aktuell ist die vom Datenkorb automatisch ermittelte Option ausgew\u00E4hlt."))) : "", h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-radiobutton", { text: "Direkt bei den betroffenen Personen anfragen.", selected: this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT", onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestDataRequestedFrom: "DATA_SUBJECT" }), name: "GroupPurposeSelection" }), h("ui5-radiobutton", { text: "Von einer bestimmten Person / Abteilung anfragen.", selected: this.dataBasket.requestDataRequestedFrom === "FROM_OTHER", onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestDataRequestedFrom: "FROM_OTHER" }), name: "GroupPurposeSelection", disabled: this.dataBasket.isAskToUpdateOutdatedPII }), h("ui5-radiobutton", { text: "Ich frage die Daten anderweitig selbst an.", selected: this.dataBasket.requestDataRequestedFrom === "SELF", onSelect: () => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestDataRequestedFrom: "SELF" }), name: "GroupPurposeSelection", disabled: this.dataBasket.isAskToUpdateOutdatedPII })), this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "SELF" ?
          h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""), ((this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" || this.dataBasket.requestDataRequestedFrom === "SELF") &&
          this.formWidgetIsProcessingAllowed === "NEED_TO_ASK") ?
          h("div", { class: "col-12 pb-3" }, h("ui5-messagestrip", { type: "Information", onClose: (ev) => ev.target.hidden = true }, h("p", null, h("b", null, "Hinweis!")), h("p", null, "Dies ersetzt ", h("u", null, "nicht"), " die Notwendigkeit Einwilligungen einzuholen."), h("p", null, "Einwilligungen werden f\u00FCr Hochschulangeh\u00F6rige und externe Personen \u00FCber die hinterlegte E-Mail Adresse automatisch angefragt."), "Falls die Einwilligungen nicht automatisch eingeholt werden k\u00F6nnen, m\u00FCssen Sie diese selbst einholen. Fragen Sie hierzu z. B. den Datenschutzbeauftragten.")) : null, this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
          h("div", null, h("div", null, !this.dataBasket.dataSourcePersonOrDepartment ?
            h("div", { class: "col-12 card-block text-center trusd-button-select cursor-pointer", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, h("div", { class: "file text-center align-middle" }, h("p", null), h("span", { class: "text-primary" }, h("i", { class: "far fa-address-book" }), "\u00A0\u00A0Person oder Abteilung aus Adressbuch ausw\u00E4hlen"), h("p", null)))
            :
              h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-list", null, h("ui5-li", { class: "col-12", selected: true, description: this.dataBasket.dataSourcePersonOrDepartment ? this.dataBasket.dataSourcePersonOrDepartment.faculty : "", onClick: () => document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open") }, this.dataBasket.dataSourcePersonOrDepartment ? this.dataBasket.dataSourcePersonOrDepartment.last_name + ", " + this.dataBasket.dataSourcePersonOrDepartment.first_name : ""))), h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" }))))) : "")) : "", (this.formWidgetMissingData > 0 || this.formRadioBtnUpdatePII || this.formReccommendedByDataBasket.elictedBy !== this.dataBasket.requestingDataProcessor.faculty) && (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER") ?
        h("div", null, this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ?
          h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Pers\u00F6nliche Nachricht an die ", h("b", null, "betroffenen Personen"), " (optional):"), h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.requestPersonalMessageToDataSubjects, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestPersonalMessageToDataSubjects: ev.target.value }) })), this.dataBasket.requestPersonalMessageToDataSubjects && this.dataBasket.requestPersonalMessageToDataSubjects !== "" ?
            h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : "")))
          : this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
            h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Pers\u00F6nliche Nachricht an die ausgew\u00E4hlte ", h("b", null, "Kontaktperson oder Abteilung"), " (optional):"), h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.requestPersonalMessageToPersonOrDepartment, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestPersonalMessageToPersonOrDepartment: ev.target.value }) })), this.dataBasket.requestPersonalMessageToPersonOrDepartment && this.dataBasket.requestPersonalMessageToPersonOrDepartment !== "" ?
              h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""))) : "") : "", (this.formWidgetMissingData > 0 || this.formRadioBtnUpdatePII || this.formReccommendedByDataBasket.elictedBy !== this.dataBasket.requestingDataProcessor.faculty) && (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER") ?
        h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Bis wann ben\u00F6tigen Sie die pers. Daten und Genehmigungen? (optional)"), h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-date-picker", { id: "deadline", placeholder: "TT.MM.JJJJ", "format-pattern": 'dd.MM.yyyy', value: this.dataBasket.deadline, onChange: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { deadline: ev.target.value }) })), this.dataBasket.deadline && this.dataBasket.deadline !== "" ?
          h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""))) : "", h("trusd-com-modal-window", null, h("span", { slot: "modal-title" }, "Hochschulangeh\u00F6rige Personen"), h("div", { slot: "modal-content" }, h("div", { class: "d-flex justify-content-center" }, h("input", { type: "text", class: "form-control", onInput: ev => { this.formSearchStringContacts = ev.target.value; }, placeholder: language.placeholderSearch })), h("ui5-list", { id: "select-purpose", growing: "Scroll", mode: "SingleSelect", style: { height: "300px" } }, this.getInternalDataSubjects(true).map(contact => h("ui5-li", { id: contact.id, description: contact.faculty, "info-state": "Success", onClick: (ev) => {
          // find and set the contact:
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { dataSourcePersonOrDepartment: state.dbEDataSubjects.find(ds => ds.id === ev.target.id) });
          // close the dialogue
          document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open");
        } }, contact.last_name + ", " + contact.first_name)))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => {
          this.formSearchStringContacts = "";
          document.getElementsByTagName("trusd-com-modal-window").item(0).toggleAttribute("open");
        } }, language.btnCancel), "\u00A0")), h("div", { class: "row pt-3" }, h("div", { class: "col" }, h("button", { onClick: () => this.back.emit(), type: "button", class: "btn btn-secondary float-left", "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, h("i", { class: "fas fa-chevron-left" }), " \u00A0 ", language.btnBack), h("button", { onClick: () => this.startProcessing(), type: "button", class: "btn btn-primary float-right", "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, language.btnNext, " \u00A0 ", h("i", { class: "fas fa-chevron-right" }))))));
    }
  }
};
EditDetails.route = "/details-bearbeiten";
EditDetails.style = comDataBasketStep3Css;

export { EditDetails as trusd_piiq_com_data_basket_step_3 };
