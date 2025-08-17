import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import { E as EDataBasket, b as EnumStatus, a as EnumState } from './EDataBasket-f2b29bfe.js';
import { s as state } from './store-9032fc40.js';
import './MessageStrip-d043c32b.js';
import './Panel-41601129.js';
import { f as findProcessingRecordEntryByID, e as extractLegalFoundations } from './utils-8ebcd8ca.js';
import { V as VODataSubjectSelect } from './VODataSubjectSelect-89e5c619.js';
import { d as dist } from './index-de766dcc.js';
import { l as language } from './de-DE-5564f65b.js';
import { C as ComDataBasketGrid } from './trusd-piiq-com-data-basket-grid-d7060e45.js';

const comPlannedProcessingOverviewCss = ".tooltips.sc-trusd-piiq-com-planned-processing-overview .tooltiptext.sc-trusd-piiq-com-planned-processing-overview{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-planned-processing-overview .tooltiptext.sc-trusd-piiq-com-planned-processing-overview::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-planned-processing-overview:hover .tooltiptext.sc-trusd-piiq-com-planned-processing-overview{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-planned-processing-overview,.privacy-tooltip.sc-trusd-piiq-com-planned-processing-overview+.tooltip.sc-trusd-piiq-com-planned-processing-overview>.tooltip-inner.sc-trusd-piiq-com-planned-processing-overview{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-planned-processing-overview{cursor:pointer}.cursor-help.sc-trusd-piiq-com-planned-processing-overview{cursor:help}button.sc-trusd-piiq-com-planned-processing-overview:disabled{cursor:not-allowed;pointer-events:all !important}.sc-trusd-piiq-com-planned-processing-overview-h{display:block}*.sc-trusd-piiq-com-planned-processing-overview{text-align:left}summary.sc-trusd-piiq-com-planned-processing-overview{outline:none}details[open].sc-trusd-piiq-com-planned-processing-overview summary.sc-trusd-piiq-com-planned-processing-overview~*.sc-trusd-piiq-com-planned-processing-overview{animation:sweep .5s ease-in-out}@keyframes sweep{0%{opacity:0;transform:translateX(-10px)}100%{opacity:1;transform:translateX(0)}}.dataprotection-widget.sc-trusd-piiq-com-planned-processing-overview{background-color:white}.dataprotection-widget.sc-trusd-piiq-com-planned-processing-overview:hover{background-color:#e3f3ff;cursor:pointer}.chatperson.sc-trusd-piiq-com-planned-processing-overview{display:block;border-bottom:1px solid #eee;width:100%;display:flex;align-items:center;white-space:nowrap;overflow:hidden;margin-bottom:15px;padding:4px}.chatperson.sc-trusd-piiq-com-planned-processing-overview:hover{text-decoration:none;border-bottom:1px solid orange}.namechat.sc-trusd-piiq-com-planned-processing-overview{display:inline-block;vertical-align:middle}.chatperson.sc-trusd-piiq-com-planned-processing-overview .chatimg.sc-trusd-piiq-com-planned-processing-overview img.sc-trusd-piiq-com-planned-processing-overview{width:40px;height:40px;background-image:url('http://i.imgur.com/JqEuJ6t.png')}.chatperson.sc-trusd-piiq-com-planned-processing-overview .pname.sc-trusd-piiq-com-planned-processing-overview{font-size:18px;padding-left:5px}.chatperson.sc-trusd-piiq-com-planned-processing-overview .lastmsg.sc-trusd-piiq-com-planned-processing-overview{font-size:12px;padding-left:5px;color:#ccc}body.sc-trusd-piiq-com-planned-processing-overview{height:400px;position:fixed;bottom:0}.col-md-2.sc-trusd-piiq-com-planned-processing-overview,.col-md-10.sc-trusd-piiq-com-planned-processing-overview{padding:0}.panel.sc-trusd-piiq-com-planned-processing-overview{margin-bottom:0px}.chat-window.sc-trusd-piiq-com-planned-processing-overview{bottom:0;position:fixed;float:right;margin-left:10px}.chat-window.sc-trusd-piiq-com-planned-processing-overview>div.sc-trusd-piiq-com-planned-processing-overview>.panel.sc-trusd-piiq-com-planned-processing-overview{border-radius:5px 5px 0 0}.icon_minim.sc-trusd-piiq-com-planned-processing-overview{padding:2px 10px}.msg_container_base.sc-trusd-piiq-com-planned-processing-overview{margin:0;padding:0 10px 10px;max-height:300px;overflow-x:hidden}.top-bar.sc-trusd-piiq-com-planned-processing-overview{padding:10px;position:relative;overflow:hidden}.msg_receive.sc-trusd-piiq-com-planned-processing-overview{padding-left:0;margin-left:0}.msg_sent.sc-trusd-piiq-com-planned-processing-overview{padding-bottom:20px !important;margin-right:0}.messages.sc-trusd-piiq-com-planned-processing-overview{background:white;padding:10px;border-radius:2px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.2);max-width:100%}.messages.sc-trusd-piiq-com-planned-processing-overview>p.sc-trusd-piiq-com-planned-processing-overview{font-size:13px;margin:0 0 0.2rem 0}.messages.sc-trusd-piiq-com-planned-processing-overview>time.sc-trusd-piiq-com-planned-processing-overview{font-size:11px;color:#ccc}.msg_container.sc-trusd-piiq-com-planned-processing-overview{padding:10px;overflow:hidden;display:flex}img.sc-trusd-piiq-com-planned-processing-overview{display:block;width:100%}.base_sent.sc-trusd-piiq-com-planned-processing-overview{justify-content:flex-end;align-items:flex-end}.msg_sent.sc-trusd-piiq-com-planned-processing-overview>time.sc-trusd-piiq-com-planned-processing-overview{float:right}.btn-group.dropup.sc-trusd-piiq-com-planned-processing-overview{position:fixed;left:0px;bottom:0}";

const PlannedProcessingOverview = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.formAddPersonalData = false;
    this.formAddDataSubjects = false;
    this.formWidgetOutdatedData = 0;
    this.modalDownloadPersonalDataShowPassword = false;
    this.formTabPaneState = "PERSONAL_DATA";
    this.formMessageNew = "";
    this.formWidgetForwardingPersonalDataByRecipient = [];
  }
  /* METHODS */
  onSendNewMessageHandler(ds) {
    this.formTabPaneState = "MESSAGES";
    this.formMessagesPaneContactsSelected = ds.detail;
  }
  updateDataBasket() {
    // Update / add conversations:
    this.dataBasket.dataSets.forEach(ds => {
      this.dataBasket = EDataBasket.addToConversations(this.dataBasket, ds.person, "123Neue Anfrage gestartet: " + (() => { let data = ""; ds.pii.forEach(pii => data += (pii.dataCategory.friendlyName + ", ")); return data.substring(0, data.length - 2); })(), { name: this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name, id: "data-processor-1" });
    });
    if (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" && this.dataBasket.requestPersonalMessageToDataSubjects !== "") {
      // add messages only for the newly added data subjects:
      this.htmlElSelectDataAndSubjects.dataSets.forEach(ds => {
        this.dataBasket = EDataBasket.addToConversations(this.dataBasket, ds.person, this.dataBasket.requestPersonalMessageToDataSubjects, { name: this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name, id: "data-processor-1" });
      });
    }
    else if (this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" && this.dataBasket.requestPersonalMessageToPersonOrDepartment !== "") {
      this.dataBasket = EDataBasket.addToConversations(this.dataBasket, VODataSubjectSelect.fromDataSubject(this.dataBasket.dataSourcePersonOrDepartment), this.dataBasket.requestPersonalMessageToPersonOrDepartment, { name: this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name, id: "data-processor-1" });
    }
    this.dataBasket.status = EnumStatus.ACTIVE;
    // STUDY 
    if (this.dataBasket.ID === state.taskAufgabe1DataBasketID &&
      this.htmlElSelectDataAndSubjects.dataSets.find(ds => ds.pii.find(pii => pii.dataCategory.id.value === "dat_cat_17"))) {
      state.taskAddedRequestForPicture = true;
    }
    // set merged data set with newly added personal data and data subjects:
    this.dataBasket.dataSets = EDataBasket.mergeDataSets(this.dataBasket.dataSets, this.htmlElSelectDataAndSubjects.dataSets);
    this.dataBasket = Object.assign({}, EDataBasket.updateProgress(this.dataBasket));
    this.dataBasket = EDataBasket.store(this.dataBasket);
  }
  checkForwardingPersonalDataByRecipient() {
    let table = [];
    let columns = [];
    let rows = [];
    findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID)
      .dataSubjectCategoriesAggregate.map(aggregate1 => {
      aggregate1.dataCategoriesAggregate.map(aggregate2 => {
        let tmp = columns.find(rcpt => rcpt.type === aggregate2.recipientCategory.type);
        if (!tmp) {
          columns.push(aggregate2.recipientCategory);
        }
        let row = rows.find(dc => dc.id.value === aggregate2.dataCategory.id.value);
        if (!row) {
          rows.push(aggregate2.dataCategory);
        }
      });
    });
    // Create and initialize new table array:
    table = new Array(rows.length);
    for (let index = 0; index < table.length; index++) {
      table[index] = { rowName: rows[index].friendlyName, column: new Array(columns.length) };
      for (let index2 = 0; index2 < table[index].column.length; index2++) {
        table[index].column[index2] = undefined;
      }
    }
    findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID)
      .dataSubjectCategoriesAggregate.map(aggregate1 => {
      aggregate1.dataCategoriesAggregate.map(aggregate2 => {
        let column = columns.findIndex(rcpt => rcpt.type === aggregate2.recipientCategory.type);
        let row = rows.findIndex(dc => dc.id.value === aggregate2.dataCategory.id.value);
        table[row].column[column] = aggregate2.lawfulness;
      });
    });
    table.forEach((row) => {
      row.column.forEach((column, indexColumn) => {
        let index = this.formWidgetForwardingPersonalDataByRecipient.findIndex(el => el.rcpt.type === columns[indexColumn].type);
        if (index < 0) {
          this.formWidgetForwardingPersonalDataByRecipient =
            [...this.formWidgetForwardingPersonalDataByRecipient,
              { rcpt: columns[indexColumn], restricted: false }];
          index = this.formWidgetForwardingPersonalDataByRecipient.length - 1;
        }
        if (!column || column.type === dist.VOLawfulnessTypeEnum.A) {
          this.formWidgetForwardingPersonalDataByRecipient[index].restricted = true;
        }
      });
    });
    this.formWidgetForwardingPersonalDataByRecipient = [...this.formWidgetForwardingPersonalDataByRecipient];
  }
  componentWillLoad() {
    if (this.dataBasket === undefined) {
      let tmpID = this.match.params.datenkorbId;
      this.dataBasket = state.dbEDataBasket.find(db => db.ID === tmpID.trim());
    }
    if (this.dataBasket.progressCompletenessPersonalData > 0 || this.dataBasket.progressCompletenessPersonalDataOtherDepartment > 0) {
      this.dataBasket.dataSets.map((s) => {
        if (EDataBasket.checkOutdatedPII(this.dataBasket, s) === "OUTDATED")
          this.formWidgetOutdatedData += 1;
      });
    }
    else {
      this.formWidgetOutdatedData = -1;
    }
    this.checkForwardingPersonalDataByRecipient();
  }
  componentDidRender() {
    $("[data-toggle='tooltip']").tooltip();
    // show modal?
    if (this.dataBasket.status === EnumStatus.ACTIVE && this.dataBasket.state === EnumState.READY) {
      this.dataBasket = EDataBasket.store(Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.IDLE }));
    }
    if (state.taskFirstTimeRuhezustand && this.dataBasket.status === EnumStatus.IDLE) {
      state.taskFirstTimeRuhezustand = false;
      this.modalFirstTimeRuhezustand.toggleAttribute("open");
    }
    if (!state.taskAufgabe1 && this.dataBasket.dataSets[0].person.dataSubject.full_name === "Josefa Hauser") {
      state.taskAufgabe1 = true;
      state.taskAufgabe1DataBasketID = this.dataBasket.ID;
      this.modalTask.toggleAttribute("open");
    }
    if (!state.taskAufgabe2 && this.dataBasket.selectedProcessingRecordID === "uuid-4") {
      state.taskAufgabe2 = true;
      let x = state.dbEDataBasket.find(db => db.ID === state.taskAufgabe1DataBasketID);
      if (!x) {
        alert("Studie kann nicht fortgesetzt werden.");
      }
      EDataBasket.store(Object.assign(Object.assign({}, EDataBasket.addToConversations(x, x.dataSets[0].person, "Hallo Frau Wagner-Müller! Können wir dem Online-Beitrag auch ein Bild von mir hinzufügen? Wenn Sie mir die Anfrage senden, kann ich das Bild sofort zur Verfügung stellen. Viele Grüße, J. Hauser", { name: x.requestingDataProcessor.last_name + ", " + x.requestingDataProcessor.first_name, id: "data-processor-1" })), { numMessagesUnread: 1 }));
      this.modalTask.toggleAttribute("open");
    }
  }
  componentDidLoad() {
  }
  render() {
    return (h("div", { class: "container" }, this.dataBasket.status === EnumStatus.DRAFTING ?
      h("div", { class: "row d-flex justify-content-end" }, h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-outline-danger ", onClick: () => state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID)] }, "Verwerfen")), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-outline-primary", onClick: () => {
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.DRAFTING });
          this.dataBasket = EDataBasket.updateProgress(this.dataBasket);
          state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID), this.dataBasket];
          document.getElementById("toast-data-basket-import-save-draft").show();
        } }, "Als Entwurf Speichern")), h("ui5-toast", { id: "toast-data-basket-import-save-draft" }, h("ui5-messagestrip", { type: "Positive", "no-close-button": true }, h("b", null, "Gespeichert!"))), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-success", onClick: () => {
          this.dataBasket.activityLog.addCreated(this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name);
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.ACTIVE });
          this.dataBasket = EDataBasket.updateProgress(this.dataBasket);
          state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID), this.dataBasket];
          // navigate to active data basket:
          window.location.href = state.baseURL + ComDataBasketGrid.route + "/" + this.dataBasket.ID;
        } }, "Datenkorb aktiv schalten"))) : "", this.dataBasket.status === EnumStatus.DRAFTING ?
      h("div", { class: "row p-2 mt-3" }, h("div", { class: "col-12" }, h("ui5-messagestrip", { type: "Warning", "no-close-button": true }, h("b", null, "In Bearbeitung. "), " Dieser Datenkorb ist noch nicht aktiv und Sie k\u00F6nnen den Inhalt weiterhin anpassen."))) : "", h("div", { class: "row mt-3 rounded" }, h("ul", { class: "nav nav-tabs w-100" }, h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formTabPaneState === "PERSONAL_DATA" ? " active" : ""), onClick: () => this.formTabPaneState = "PERSONAL_DATA" }, "Betroffene Personen und personenbezogene Daten")), h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formTabPaneState === "MESSAGES" ? " active" : ""), onClick: () => {
        this.formTabPaneState = "MESSAGES";
        this.dataBasket = EDataBasket.store(Object.assign(Object.assign({}, this.dataBasket), { numMessagesUnread: 0 }));
      } }, h("i", { class: this.dataBasket.numMessagesUnread > 0 ? "fas fa-envelope" : "fas fa-envelope fa-disabled" }), " Nachrichten ", this.dataBasket.numMessagesUnread > 0 ? h("span", { class: "badge badge-secondary" }, this.dataBasket.numMessagesUnread) : "")), h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formTabPaneState === "LOG" ? " active" : ""), onClick: () => this.formTabPaneState = "LOG" }, h("i", { class: "fas fa-history" }), " Verlauf und Notizen")))), h("div", { class: "row p-2 bg-white border-left border-right border-bottom" }, h("div", { class: "col-12" }, h("div", { class: "tab-content data-subject-select-modal-tab" }, h("div", { class: "tab-pane container" + (this.formTabPaneState === "PERSONAL_DATA" ? " active" : "") }, h("div", { class: "row w-100 pt-3" }, h("div", { class: "col-12", title: "Name des Datenkorbs" }, h("h5", null, this.dataBasket.title))), (!this.formAddPersonalData && !this.formAddDataSubjects) ?
      h("div", null, h("details", { class: "rounded bg-light", open: true }, h("summary", { slot: "header", class: "pl-2 btn-link" }, h("span", { class: "h5 font-weight-light" }, "Details und Datenschutzhinweise"), h("div", { class: "float-right" }, this.dataBasket.status === EnumStatus.DRAFTING ?
        h("span", { class: "badge badge-warning cursor-help", title: "Dies ist ein Entwurf und noch nicht aktiv." }, h("i", { class: "fas fa-pencil-alt" }), " Entwurf")
        : this.dataBasket.status === EnumStatus.ACTIVE ?
          h("span", { class: "badge badge-success cursor-help", title: "Dieser Datenkorb ist aktiv." }, h("i", { class: "fas fa-retweet" }), " aktiv")
          : this.dataBasket.status === EnumStatus.IDLE ?
            h("span", { class: "badge badge-primary cursor-help", title: "Dieser Datenkorb ist im Ruhezustand." }, h("i", { class: "fas fa-spinner" }), " ruhend")
            :
              h("span", { class: "badge badge-secondary cursor-help", title: "Dieser Datenkorb ist abgeschlossen. Sie k\u00F6nne weiterhin auf die Daten zugreifen." }, h("i", { class: "fas fa-archive" }), " Abgeschlossen"), "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", h("span", { class: "cursor-help text-dark", title: "Datum und Uhrzeit der letzten Aktualisierung der Anzeige." }, h("i", { class: "far fa-calendar-check" }), " ", (new Date(this.dataBasket.lastActionDate)).toLocaleTimeString().substring(0, 5) + " " + (new Date(this.dataBasket.lastActionDate)).toLocaleDateString()), "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", h("span", { class: "cursor-help text-dark", title: "Dies ist die eindeutige ID des Datenkorbs. Die ID wird automatisch generiert." }, h("i", { class: "fas fa-fingerprint" }), " ", this.dataBasket.ID.substring(0, 8)), "\u00A0\u00A0\u00A0\u00A0")), h("div", { class: "row pt-3 pb-3" }, h("div", { class: "col-12 p-0 pt-2 d-flex" }, h("div", { class: "row w-100 m-0 justify-content-center" }, h("div", { class: "border flex-column d-flex ml-3 p-1 d-flex rounded cursor-pointer dataprotection-widget", style: { maxWidth: "250px" }, onClick: () => this.modalProcessingRecordEntryViewer.toggleAttribute("open"), "data-toggle": "tooltip", "data-placement": "top", title: "Klicken, um mehr zu erfahren." }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "Verarbeitungst\u00E4tigkeit"), (() => {
        let pre = findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID);
        return (h("div", null, h("p", { class: "font-weight-bold" }, pre.friendlyName), h("h6", { class: "font-weight-light m-0" }, "Genehmigte Zwecke"), h("ul", null, pre.purposes.map(purpose => h("li", { class: "cursor-help", title: purpose.descriptionText }, purpose.displayName)))));
      })())), h("div", { class: "border flex-column d-flex ml-3 p-1 rounded cursor-pointer dataprotection-widget", onClick: () => { this.modalGenehmigungen.toggleAttribute("open"); }, style: { maxWidth: "250px" }, "data-toggle": "tooltip", "data-placement": "top", title: "Klicken, um mehr zu erfahren." }, h("div", { class: "row m-0 p-0 rounded w-100" }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "Rechtsgrundlage")), h("div", { class: "col-12" }, (this.dataBasket.progressCompletenessPermissions + this.dataBasket.progressCompletenessConsentByPersonalData) < 99.9 ?
        h("div", { class: "row p-0" }, h("div", { class: "col-sm-12" }, (this.dataBasket.progressCompletenessPermissionByPersonalData + this.dataBasket.progressCompletenessConsentByPersonalData) > 0 ?
          h("small", { class: "badge badge-warning " }, "Teilweise genehmigt") :
          h("small", { class: "badge badge-danger " }, "Nicht genehmigt"), h("br", null), h("small", { class: "alert alert-secondary m-0 p-0" }, h("b", null, "Einwilligung erforderlich"))), h("div", { class: "col-sm-4 text-center", title: "Genehmigt - Anteil der personenbezogenen Daten" }, h("span", { class: this.dataBasket.progressCompletenessPermissionByPersonalData == 0 ? "text-muted" : "" }, h("i", { class: "fas fa-check-circle fa-1x" }), h("br", null), " ", this.dataBasket.progressCompletenessPermissionByPersonalData, "%")), h("div", { class: "col-sm-4 text-center", title: "Genehmigung ausstehend - Anteil der personenbezogenen Daten" }, h("span", { class: (this.dataBasket.progressCompletenessPermissionByPersonalData + this.dataBasket.progressCompletenessObjectionsByPersonalData) > 99.9 ? "text-muted" : "" }, h("i", { class: "fas fa-exclamation-circle fa-1x" }), h("br", null), " ", 100 - (this.dataBasket.progressCompletenessPermissionByPersonalData + this.dataBasket.progressCompletenessObjectionsByPersonalData), "%")), h("div", { class: "col-sm-4 text-center", title: "Abgelehnt - Anteil der personenbezogenen Daten" }, h("span", { class: this.dataBasket.progressCompletenessObjectionsByPersonalData == 0 ? "text-muted" : "" }, h("i", { class: "fas fa-times-circle fa-1x" }), h("br", null), " ", this.dataBasket.progressCompletenessObjectionsByPersonalData, "%")))
        :
          h("div", { class: "row d-flex justify-content-center" }, h("div", { class: "col-3 p-0 m-0 cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Klicken um mehr zu erfahren.", style: { maxWidth: "50px" } }, h("trusd-com-circle-icon", { BGCOLOR: "#2ecc71" }, h("div", { class: "d-flex align-items-center justify-content-center text-success", slot: "icon" }, h("i", { class: "fas fa-check fa-2x" }))))))))), h("div", { class: "border flex-column d-flex ml-3 p-1 d-flex rounded cursor-pointer dataprotection-widget", onClick: () => this.modalPersonalDataRecipientTable.toggleAttribute("open"), "data-toggle": "tooltip", "data-placement": "top", title: "Klicken, um mehr zu erfahren." }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "Weitergabe"), this.formWidgetForwardingPersonalDataByRecipient.find(el => el.restricted) ?
        h("div", null, h("h6", { class: "font-weight-light m-0" }, "Eingeschr\u00E4nkt m\u00F6glich f\u00FCr"), h("ul", null, this.formWidgetForwardingPersonalDataByRecipient.map(rcpt => rcpt.restricted ?
          h("li", { class: "", "data-toggle": "tooltip", "data-placement": "bottom" }, rcpt.rcpt.type === dist.ERecipientCategoryTypeEnum.EExternalRecipient ? "Externe Empfänger" :
            rcpt.rcpt.type === dist.ERecipientCategoryTypeEnum.EDepartmentRecipient ? "Hochschulintern" :
              rcpt.rcpt.type === dist.ERecipientCategoryTypeEnum.ETeamRecipient ? "Hochschuleinheit" : "Einzelpersonen")
          : ""))) : null, this.formWidgetForwardingPersonalDataByRecipient.find(el => !el.restricted) ?
        h("div", null, h("h6", { class: "font-weight-light m-0" }, "Uneingeschr\u00E4nkt m\u00F6glich f\u00FCr"), h("ul", null, this.formWidgetForwardingPersonalDataByRecipient.map(rcpt => !rcpt.restricted ?
          h("li", { class: "", "data-toggle": "tooltip", "data-placement": "bottom" }, rcpt.rcpt.type === dist.ERecipientCategoryTypeEnum.EExternalRecipient ? "Externe Empfänger" :
            rcpt.rcpt.type === dist.ERecipientCategoryTypeEnum.EDepartmentRecipient ? "Hochschulintern" :
              rcpt.rcpt.type === dist.ERecipientCategoryTypeEnum.ETeamRecipient ? "Hochschuleinheit" : "Einzelpersonen")
          : ""))) : null)), h("div", { class: "flex-column d-flex ml-3" }, h("div", { class: "border row m-0 p-1 rounded w-100 dataprotection-widget", "data-toggle": "tooltip", "data-placement": "top", title: "Klicken um mehr zu erfahren.", onClick: () => {
          this.modalDeletionPeriod.toggleAttribute("open");
        } }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "L\u00F6schfrist")), h("div", { class: "col-12" }, EDataBasket.checkPIIDeletion(this.dataBasket).length > 0 ?
        (new Date(EDataBasket.checkPIIDeletion(this.dataBasket)[0].deletionDateMillis)).toLocaleDateString() :
        h("span", { class: "text-muted" }, "Nicht verf\u00FCgbar"))), h("div", { style: { flexBasis: "100%", height: "0" } }), h("div", { class: "border row ml-0 p-1 rounded w-100 dataprotection-widget", "data-toggle": "tooltip", "data-placement": "top", title: "Klicken um mehr zu erfahren.", onClick: () => { this.modalPersonalDataSensitivity.toggleAttribute("open"); } }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "Sensibilit\u00E4t"), h("div", { class: "alert alert-secondary p-0 m-0", role: "alert" }, EDataBasket.getPIISpecialCategories(this.dataBasket).length > 0 ?
        h("div", { class: "col p-0 m-0 cursor-help text-center", "data-toggle": "tooltip", "data-placement": "bottom", title: "Einige ausgewählte Kategori(en) von Daten gehören zu den besonderen Kategorien von personenbezogenen Daten!" }, h("b", null, h("i", { class: "fas fa-exclamation-triangle" })), h("br", null), h("b", null, "Besondere Sensibilit\u00E4t"))
        :
          h("div", { class: "col p-0 m-0 cursor-help text-center", "data-toggle": "tooltip", "data-placement": "bottom", title: "Keine der personenbezogenen Daten geh\u00F6ren einer Kategorie mit besonderer Sensibilit\u00E4t an." }, "Normale Sensibilit\u00E4t"))))))))), h("div", { class: "row" }, h("div", { class: "col-12 pt-3" }, h("hr", { class: "bg-primary" }))), h("div", { class: "row pt-1" }, h("div", { class: "col-12 p-0 d-flex justify-content-center" }, h("button", { class: "btn btn-light border text-secondary m-1", onClick: () => {
          this.formAddDataSubjects = true;
        }, title: "Zus\u00E4tzliche betroffene Personen hinzuf\u00FCgen" }, h("i", { class: "fas fa-user-plus fa-2x" }), h("br", null), "Betroffene Personen hinzuf\u00FCgen"), h("button", { class: "btn btn-light border text-secondary m-1", onClick: () => {
          this.formAddPersonalData = true;
        }, title: "Weitere Kategorien von personenbezogenen Daten zu dem aktiven Datenkorb hinzuf\u00FCgen." }, h("i", { class: "fas fa-tags fa-2x" }), h("br", null), "Weitere pers. Daten hinzuf\u00FCgen"), h("button", { disabled: !((this.dataBasket.ID === state.taskAufgabe1DataBasketID && state.taskAddedRequestForPicture) || this.dataBasket.ID.startsWith("d003b03f")), class: "btn btn-light border text-secondary m-1", onClick: () => {
          this.modalDownloadPersonalData.toggleAttribute("open");
        }, title: "Die verf\u00FCgbaren personenbezogenen Daten herunterladen." }, h("i", { class: "fas fa-file-excel fa-2x" }), h("br", null), "Pers. Daten exportieren"))), h("div", { class: "row pt-3" }, h("div", { class: "col-12 p-0 shadow border" }, this.dataBasket.status === EnumStatus.ACTIVE ?
        h("div", { class: "text-center m-2 p-2 rounded border bg-light" }, h("span", { class: "h6" }, "Es l\u00E4uft gerade eine Anfrage - Sie m\u00FCssen gerade ", h("u", null, "nicht"), " aktiv werden."), h("div", { class: "progress" }, h("div", { class: "progress-bar", role: "progressbar", "aria-valuenow": "70", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: this.dataBasket.progress + "%" } }, this.dataBasket.progress, "%"))) : null, 
      // We only show progress on personal data collection when the data basket is used to collect the data. Otherwise, this does not make any sense.
      this.dataBasket.requestDataRequestedFrom === "SELF" ? "" :
        h("div", { class: "col-12" }, h("div", { class: "row pt-3 justify-content-center" }, (this.dataBasket.progressCompletenessPersonalData < 100 && this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT") ?
          h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die angefragten Daten sind erst zu " + this.dataBasket.progressCompletenessPersonalData + "% vollständig." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { Type: "percent", ProgressMax: 100, ProgressCurrent: this.dataBasket.progressCompletenessPersonalData }))), h("div", { class: "col-9 text-center" }, h("h6", { class: "font-weight-light m-0" }, "Datenvollst\u00E4ndigkeit:"), h("small", { class: "badge badge-warning " }, "unvollst\u00E4ndig")))))
          : (this.dataBasket.progressCompletenessPersonalData < 100 && this.dataBasket.progressCompletenessPersonalDataOtherDepartment == 100) ?
            h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Alle angefragten Daten stehen in einer anderen Abteilung zur Verfügung und werden Ihnen zur Verfügung gestellt." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { ProgressColor: "#dc3545", Type: "percent", ProgressMax: 100, ProgressCurrent: this.dataBasket.progressCompletenessPersonalData }))), h("div", { class: "col-9 text-center" }, h("h6", { class: "font-weight-light m-0" }, "Datenvollst\u00E4ndigkeit:"), h("small", { class: "badge badge-warning" }, "unvollst\u00E4ndig"), "\u00A0", h("small", { class: "badge badge-success " }, "vorr\u00E4tig")))))
            :
              h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Alle angefragten Daten sind vollständig und stehen Ihnen sofort zur Verfügung." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { style: { width: "50px" } }, h("trusd-com-circle-progress-bar-small", { Type: "percent", ProgressMax: 100, ProgressCurrent: this.dataBasket.progressCompletenessPersonalData }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenvollst\u00E4ndigkeit:"), h("small", { class: "font-weight-light" }, "vollst\u00E4ndig"))))), (this.dataBasket.status === EnumStatus.ACTIVE || this.dataBasket.status === EnumStatus.DRAFTING) && (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER") ?
          h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Sie haben die Daten bei" + (this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ? " den betroffenen Personen angefragt" : " einer Abteilung oder bestimmten Person angefragt") }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "fas fa-user-friends fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Angefragt bei:"), this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ?
            h("small", { class: "font-weight-light" }, "betroffene Personen")
            :
              h("small", { class: "font-weight-light", style: { lineHeight: "90%" } }, this.dataBasket.dataSourcePersonOrDepartment.last_name + ", " + this.dataBasket.dataSourcePersonOrDepartment.first_name))))) : "", this.formWidgetOutdatedData == -1 ?
          h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die Aktualität der Daten konnte nicht ermittelt werden." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "far fa-calendar-times fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenaktualit\u00E4t:"), h("small", { class: "font-weight-light" }, "unbekannt")))))
          :
            this.formWidgetOutdatedData > 0 ?
              h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Bei " + this.formWidgetOutdatedData + " Person(en) sind die verfügbaren personenbezogenen Daten eventuell veraltet." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "far fa-calendar-times fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenaktualit\u00E4t:"), h("small", { class: "badge badge-warning" }, "\u00E4lter als 180 Tage")))))
              :
                h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die personenbezogenen Daten sind aktuell." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "fas fa-calendar-check fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "Datenaktualit\u00E4t:"), h("small", { class: "font-weight-light" }, "aktuell"))))), this.dataBasket.status === EnumStatus.ACTIVE || this.dataBasket.status === EnumStatus.DRAFTING ?
          h("div", { class: "flex-column d-flex ml-3 p-1 border rounded cursor-help" }, h("div", { "data-toggle": "tooltip", "data-placement": "bottom", title: "Die von Ihnen angegebene Frist, bis zu der Sie die Daten benötigen." }, h("div", { class: "row ml-0" }, h("div", { class: "col-3" }, h("div", { class: "d-flex align-items-center justify-content-center text-secondary h-100" }, h("i", { class: "far fa-calendar-alt fa-2x" }))), h("div", { class: "col-9" }, h("h6", { class: "font-weight-light m-0" }, "R\u00FCckmeldefrist:"), h("small", { class: "font-weight-light" }, this.dataBasket.deadline !== "" ? this.dataBasket.deadline : "Keine Frist festgelgt"))))) : null)), this.dataBasket.dataSets.length > 0 ?
        h("details", { class: "p-3" }, h("summary", null, h("span", { class: "h5 font-weight-light" }, "Alle betroffenen Personen in diesem Datenkorb")), h("div", { class: "row p-3 m-0 overflow-auto bg-white", style: { maxHeight: "600px" } }, h("div", { class: "col-12" }, h("trusd-piiq-com-data-basket-data-subject-list", { class: "w-100", dataBasket: this.dataBasket })))) :
        h("div", { class: "row" }, h("div", { class: "col-3" }), h("div", { class: "col-6" }, h("p", { class: "text-center font-italic w-100" }, "Bitte w\u00E4hlen Sie oben die personenbezogenen Daten und die betroffenen Personen aus und f\u00FCgen Sie Ihre Auswahl anschlie\u00DFend dem Datenkorb hinzu.")), h("div", { class: "col-3" })))))
      : (this.formAddDataSubjects || this.formAddPersonalData) ?
        h("div", { class: "col-12 pt-3 m-0" }, h("trusd-piiq-com-data-basket-select-data-and-subjects", { dataBasket: this.dataBasket, ref: (el) => this.htmlElSelectDataAndSubjects = el, onAddedToDataBasket: (ev) => this.htmlElSelectDataAndSubjects = Object.assign(Object.assign({}, this.htmlElSelectDataAndSubjects), { dataSets: ev.detail }), preselectedDataSubjects: (() => {
            let preselection = [];
            if (this.formAddPersonalData) {
              this.dataBasket.dataSets.forEach(element => {
                preselection.push(element.person);
              });
            }
            return preselection;
          })(), preselectedPersonalData: (() => {
            let preselection = [];
            if (this.formAddDataSubjects) {
              this.dataBasket.dataSets.forEach(element => {
                element.pii.forEach(pii => {
                  if (!preselection.find(pii2 => pii2.dataCategory.id.value === pii.dataCategory.id.value)) {
                    preselection.push(pii);
                  }
                });
              });
            }
            return preselection;
          })() }), this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
          h("div", null, this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" ?
            h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Pers\u00F6nliche Nachricht an die ", h("b", null, "ausgew\u00E4hlten betroffenen Personen"), " (optional):"), h("br", null), this.formAddPersonalData ? h("i", { class: "text-muted" }, "Beschreiben Sie z. B. kurz, wieso Sie weitere personenbezogene Daten abfragen.") : "", h("div", { class: "row pt-1" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.requestPersonalMessageToDataSubjects, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestPersonalMessageToDataSubjects: ev.target.value }) })), this.dataBasket.requestPersonalMessageToDataSubjects && this.dataBasket.requestPersonalMessageToDataSubjects !== "" ?
              h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : "")))
            : this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
              h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Pers\u00F6nliche Nachricht an die ", h("b", null, "Kontaktperson oder Abteilung"), " (optional):"), h("br", null), this.formAddPersonalData ? h("small", null, h("i", null, "Beschreiben Sie z. B. kurz, wieso Sie weitere personenbezogene Daten abfragen.")) : "", h("div", { class: "row" }, h("div", { class: "col" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", value: this.dataBasket.requestPersonalMessageToPersonOrDepartment, onInput: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { requestPersonalMessageToPersonOrDepartment: ev.target.value }) })), this.dataBasket.requestPersonalMessageToPersonOrDepartment && this.dataBasket.requestPersonalMessageToPersonOrDepartment !== "" ?
                h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""))) : "") : "", this.dataBasket.requestDataRequestedFrom === "DATA_SUBJECT" || this.dataBasket.requestDataRequestedFrom === "FROM_OTHER" ?
          h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("label", { class: "lead" }, "Bis wann ben\u00F6tigen Sie die pers. Daten und Genehmigungen? (optional)"), h("div", { class: "row" }, h("div", { class: "col" }, h("ui5-date-picker", { placeholder: "MM JJJJ", "format-pattern": 'MM yyyy', value: this.dataBasket.deadline, onChange: (ev) => this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { deadline: ev.target.value }) })), this.dataBasket.deadline && this.dataBasket.deadline !== "" ?
            h("div", { class: "d-flex align-items-center justify-content-center" }, h("span", { class: "fas fa-check-circle text-success" })) : ""))) : "", h("div", { class: "row pt-3" }, h("div", { class: "col" }, h("button", { onClick: () => {
            this.formAddPersonalData = false;
            this.formAddDataSubjects = false;
          }, type: "button", class: "btn btn-outline-secondary" }, language.btnCancel), h("button", { onClick: () => {
            this.updateDataBasket();
            this.formAddPersonalData = false;
            this.formAddDataSubjects = false;
            document.getElementById("toast-data-basket-send-request").show();
          }, disabled: (!this.htmlElSelectDataAndSubjects || this.htmlElSelectDataAndSubjects.dataSets.length == 0), type: "button", class: "btn btn-primary float-right" }, "Anfrage absenden")))) : ""), h("div", { class: "tab-pane container" + (this.formTabPaneState === "MESSAGES" ? " active" : ""), id: "data-subject-select-modal-tab-external" }, h("div", { class: "row pt-3", style: { minHeight: "50vh" } }, h("div", { class: "col-sm-4" }, h("div", { class: "panel panel-primary" }, h("div", { class: "panel-heading top-bar" }, h("div", { class: "col-md-8 col-xs-8" }, h("span", { class: "panel-title" }, "Kontakte"))), h("table", { class: "table table-hover" }, h("tbody", null, this.dataBasket.conversation.map(conversation => h("tr", { class: "cursor-pointer" + ((this.formMessagesPaneContactsSelected && this.formMessagesPaneContactsSelected.dataSubject.id === conversation.dataSubject.dataSubject.id) ? " bg-primary text-white" : ""), onClick: () => {
        this.formMessagesPaneContactsSelected = conversation.dataSubject;
      } }, h("td", null, conversation.dataSubject.dataSubject.last_name + ", " + conversation.dataSubject.dataSubject.first_name))))))), h("div", { class: "col-sm-8" }, h("div", { class: "chatbody" }, h("div", { class: "panel panel-primary" }, this.formMessagesPaneContactsSelected ?
      h("div", null, h("div", { class: "panel-heading top-bar" }, h("div", { class: "col-md-8 col-xs-8" }, h("span", { class: "panel-title" }, "Konversation mit ", this.formMessagesPaneContactsSelected.dataSubject.last_name + ", " + this.formMessagesPaneContactsSelected.dataSubject.first_name))), h("div", { class: "panel-body msg_container_base bg-light" }, this.dataBasket.conversation.find(conversation => conversation.dataSubject.dataSubject.id === this.formMessagesPaneContactsSelected.dataSubject.id).messages.map(message => message.sender.id === this.formMessagesPaneContactsSelected.dataSubject.id ?
        h("div", { class: "row msg_container base_receive" }, h("div", { class: "col-md-10 col-xs-10" }, h("div", { class: "col-12 text-left pl-0" }, h("small", { class: "text-muted" }, "Nachricht von ", this.formMessagesPaneContactsSelected.dataSubject.last_name + ", " + this.formMessagesPaneContactsSelected.dataSubject.first_name)), h("div", { class: "messages msg_receive" }, h("p", null, message.message), h("time", null, message.date))))
        :
          message.message.trim().startsWith("123") ?
            h("div", { class: "row msg_container base_sent" }, h("div", { class: "col-md-10 col-xs-10" }, h("div", { class: "messages msg_sent", style: { background: "transparent", boxShadow: "none" } }, h("p", null, h("i", null, message.message.substring(3)), " ", h("span", { class: "text-muted", style: { fontSize: "11px", float: "right" } }, message.date)))))
            :
              h("div", { class: "row msg_container base_sent" }, h("div", { class: "col-md-10 col-xs-10" }, h("div", { class: "col-12 text-right pr-0" }, h("small", { class: "text-muted" }, "Ihre Nachricht")), h("div", { class: "messages msg_sent" }, h("p", null, message.message), h("time", null, message.date)))))), h("div", { class: "panel-footer" }, h("textarea", { class: "form-control input-sm chat_input", "aria-label": "With textarea", placeholder: "Geben Sie Ihre Nachricht ein...", value: this.formMessageNew, onInput: (ev) => this.formMessageNew = ev.target.value }), h("button", { class: "btn btn-primary btn-sm", id: "btn-chat", disabled: this.formMessageNew === "", onClick: () => {
          this.dataBasket = EDataBasket.store(EDataBasket.addToConversations(this.dataBasket, this.formMessagesPaneContactsSelected, this.formMessageNew, { name: "Sie", id: "data-processor-1" }));
          this.formMessageNew = "";
        } }, "Versenden")))
      : h("i", null, "Bitte w\u00E4hlen Sie einen Kontakt auf der linken Seite aus, um sich Nachrichten anzeigen zu lassen.")))))), h("div", { class: "tab-pane container" + (this.formTabPaneState === "LOG" ? " active" : ""), id: "data-subject-select-modal-tab-external" }, this.formTabPaneState === "LOG" ?
      h("trusd-piiq-com-activity-log", { activities: this.dataBasket.activityLog ? this.dataBasket.activityLog : null })
      : null)))), this.dataBasket.status === EnumStatus.DRAFTING ?
      h("div", { class: "row d-flex justify-content-end" }, h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-outline-danger ", onClick: () => state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID)] }, "Verwerfen")), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-outline-primary", onClick: () => {
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.DRAFTING });
          this.dataBasket = EDataBasket.updateProgress(this.dataBasket);
          state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID), this.dataBasket];
          document.getElementById("toast-data-basket-import-save-draft").show();
        } }, "Als Entwurf Speichern")), h("ui5-toast", { id: "toast-data-basket-import-save-draft" }, h("ui5-messagestrip", { type: "Positive", "no-close-button": true }, h("b", null, "Gespeichert!"))), h("div", { class: "p-2" }, h("button", { type: "button", class: "btn btn-success", onClick: () => {
          this.dataBasket.activityLog.addCreated(this.dataBasket.requestingDataProcessor.last_name + ", " + this.dataBasket.requestingDataProcessor.first_name);
          this.dataBasket = Object.assign(Object.assign({}, this.dataBasket), { status: EnumStatus.ACTIVE });
          this.dataBasket = EDataBasket.updateProgress(this.dataBasket);
          state.dbEDataBasket = [...state.dbEDataBasket.filter(db => db.ID !== this.dataBasket.ID), this.dataBasket];
          // navigate to active data basket:
          window.location.href = state.baseURL + ComDataBasketGrid.route + "/" + this.dataBasket.ID;
        } }, "Datenkorb aktiv schalten"))) : "", h("ui5-toast", { id: "toast-data-basket-send-request" }, h("ui5-messagestrip", { type: "Positive", "no-close-button": true }, h("b", null, "Anfrage versendet!"))), h("trusd-com-modal-window", { ref: (el) => this.modalDownloadPersonalData = el }, h("span", { slot: "modal-title" }, "Personenbezogene Daten exportieren"), h("div", { slot: "modal-content" }, "Sie m\u00FCssen die exportierten personenbezogenen Daten sch\u00FCtzen:", h("ul", null, findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).technicalMeasures.map(tm => h("details", null, h("summary", null, tm.name), tm.description)), findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).organisationalMeasures.map(tm => h("details", null, h("summary", null, tm.name), tm.description))), this.modalDownloadPersonalDataShowPassword ?
      h("div", { class: "row justify-content-center" }, h("div", { class: "col-6" }, h("div", { class: "card text-center" }, h("span", { class: "text-center" }, " Passwort:"), h("p", { class: "lead text-center" }, "schlafsack-flug-platz")))) : null, this.dataBasket.ID.startsWith("d003b03f") ? h("div", null, h("div", { class: "row pt-3" }, h("div", { class: "col-12" }, h("form", { method: "get", action: "/files/datenkorb_d003b03f_alle.xlsx" }, h("button", { class: "btn btn-outline-secondary m-1 w-100", title: "Dieser Export enth\u00E4lt alle personenbezogenen Daten.", onClick: () => this.modalDownloadPersonalDataShowPassword = true }, h("i", { class: "fas fa-file-excel fa-1x" }), " Alle pers. Daten")))), this.formWidgetForwardingPersonalDataByRecipient.find(el => el.rcpt.type === dist.ERecipientCategoryTypeEnum.EDepartmentRecipient) ?
      h("div", { class: "row" }, h("div", { class: "col-12" }, h("form", { method: "get", action: "/files/datenkorb_d003b03f_organisationsweit.xlsx" }, h("button", { class: "btn btn-outline-secondary m-1 w-100", title: "Dieser Export enth\u00E4lt nur personenbezogene Daten, die an Empf\u00E4nger in der Organisation weitergegen werden d\u00FCrfen.", onClick: () => this.modalDownloadPersonalDataShowPassword = true }, h("i", { class: "fas fa-file-excel fa-1x" }), " Pers. Daten optimiert f\u00FCr Empf\u00E4nger in der Organisation"))))
      : null, this.formWidgetForwardingPersonalDataByRecipient.find(el => el.rcpt.type === dist.ERecipientCategoryTypeEnum.EExternalRecipient) ?
      h("div", { class: "row" }, h("div", { class: "col-12" }, h("form", { method: "get", action: "/files/datenkorb_d003b03f_externe_empf\u00E4nger.xlsx" }, h("button", { class: "btn btn-outline-secondary m-1 w-100", title: "Dieser Export enth\u00E4lt nur personenbezogene Daten, die an externe Empf\u00E4nger weitergegeben werden d\u00FCrfen.", onClick: () => this.modalDownloadPersonalDataShowPassword = true }, h("i", { class: "fas fa-file-excel fa-1x" }), " Pers. Daten optimiert f\u00FCr externe Empf\u00E4nger"))))
      : null) : this.dataBasket.ID === state.taskAufgabe1DataBasketID ?
      h("div", null, h("div", { class: "row pt-3" }, h("div", { class: "col-12" }, h("form", { method: "get", action: "/files/datenkorb_e28fada4_alle.xlsx" }, h("button", { class: "btn btn-outline-secondary m-1 w-100", title: "Dieser Export enth\u00E4lt alle personenbezogenen Daten.", onClick: () => this.modalDownloadPersonalDataShowPassword = true }, h("i", { class: "fas fa-file-excel fa-1x" }), " Alle pers. Daten")))), this.formWidgetForwardingPersonalDataByRecipient.find(el => el.rcpt.type === dist.ERecipientCategoryTypeEnum.EDepartmentRecipient) ?
        h("div", { class: "row" }, h("div", { class: "col-12" }, h("form", { method: "get", action: "/files/datenkorb_e28fada4_organisationsweit.xlsx" }, h("button", { class: "btn btn-outline-secondary m-1 w-100", title: "Dieser Export enth\u00E4lt nur personenbezogene Daten, die an Empf\u00E4nger in der Organisation weitergegen werden d\u00FCrfen.", onClick: () => this.modalDownloadPersonalDataShowPassword = true }, h("i", { class: "fas fa-file-excel fa-1x" }), " Pers. Daten optimiert f\u00FCr Empf\u00E4nger in der Organisation"))))
        : null, this.formWidgetForwardingPersonalDataByRecipient.find(el => el.rcpt.type === dist.ERecipientCategoryTypeEnum.EExternalRecipient) ?
        h("div", { class: "row" }, h("div", { class: "col-12" }, h("form", { method: "get", action: "/files/datenkorb_e28fada4_externe_empf\u00E4nger.xlsx" }, h("button", { class: "btn btn-outline-secondary m-1 w-100", title: "Dieser Export enth\u00E4lt nur personenbezogene Daten, die an externe Empf\u00E4nger weitergegeben werden d\u00FCrfen.", onClick: () => this.modalDownloadPersonalDataShowPassword = true }, h("i", { class: "fas fa-file-excel fa-1x" }), " Pers. Daten optimiert f\u00FCr externe Empf\u00E4nger"))))
        : null) : null), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalDownloadPersonalData.toggleAttribute("open"); } }, "Schlie\u00DFen"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalGenehmigungen = el }, h("span", { slot: "modal-title" }, "Rechtsgrundlage"), h("div", { slot: "modal-content" }, h("div", { class: "row" }, h("div", { class: "col-12 ml-3 d-flex" }, h("div", { class: "row p-1 bg-light rounded w-100" }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "Einwilligungen")), h("div", { class: "col-12" }, extractLegalFoundations(findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID)).find(el => el.type === dist.VOLawfulnessTypeEnum.A) ?
      h("b", null, "erforderlich") : "nicht erforderlich")))), h("div", { class: "row pt-3" }, h("div", { class: "col-12" }, h("h5", { class: "font-weight-light" }, "Rechtsgrundlage(n) der Verarbeitung"), (() => {
      let pre = findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID);
      if (pre) {
        return extractLegalFoundations(pre);
      }
      else
        return [];
    })().map((el) => h("trusd-piiq-com-lawfulness-icon", { Lawfulness: el }))))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalGenehmigungen.toggleAttribute("open"); } }, "Schlie\u00DFen"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalPersonalDataRecipientTable = el }, h("span", { slot: "modal-title" }, "Weitergabe / Ver\u00F6ffentlichung"), h("div", { slot: "modal-content" }, h("div", { class: "row p-3" }, h("div", { class: "col-12 p-3 shadow" }, "Sie d\u00FCrfen personenbezogene Daten nur f\u00FCr ", h("span", { class: "cursor-help privacy-tooltip btn-link", "data-toggle": "tooltip", "data-placement": "bottom", title: "Empf\u00E4nger ist jede Person oder Stelle, die Daten erh\u00E4lt bzw. auf die Daten zugreifen kann." }, "Empf\u00E4nger"), " zug\u00E4nglich machen, wenn dies gestattet ist.")), h("ul", { class: "nav nav-tabs", id: "myTab", role: "tablist" }, h("li", { class: "nav-item" }, h("a", { class: "nav-link active", id: "weitergabe-veroeffentlichung-moegliche-empfaenger-tab", "data-toggle": "tab", href: "#weitergabe-veroeffentlichung-moegliche-empfaenger", role: "tab", "aria-controls": "weitergabe-veroeffentlichung-moegliche-empfaenger", "aria-selected": "true" }, "M\u00F6gliche Empf\u00E4nger")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", id: "weitergabe-veroeffentlichung-hilfe-tab", "data-toggle": "tab", href: "#weitergabe-veroeffentlichung-hilfe", role: "tab", "aria-controls": "weitergabe-veroeffentlichung-hilfe", "aria-selected": "false" }, "Hilfe"))), h("div", { class: "tab-content", id: "myTabContent" }, h("div", { class: "tab-pane fade show active", id: "weitergabe-veroeffentlichung-moegliche-empfaenger", role: "tabpanel", "aria-labelledby": "home-tab" }, h("trusd-piiq-com-data-basket-personal-data-recipient-table", { dataBasket: this.dataBasket })), h("div", { class: "tab-pane fade", id: "weitergabe-veroeffentlichung-hilfe", role: "tabpanel", "aria-labelledby": "profile-tab" }, h("div", { class: "row pt-3" }, h("div", { class: "col-12" }, h("details", null, h("summary", null, "Ich muss personenbezogene Daten weitergeben, f\u00FCr die ich keine Genehmigung habe."), h("ui5-messagestrip", { type: "Warning", "no-close-button": true }, "Geben Sie die Daten vorerst ", h("u", null, "nicht"), " weiter."), h("p", null, "Sie d\u00FCrfen personenbezogene Daten prinzipiell nur f\u00FCr Empf\u00E4nger verf\u00FCgbar machen, wenn eine Genehmigung vorliegt. Falls keine Genehmigung vorliegt, d\u00FCrfen Sie die Daten nicht weitergeben. Konktaktieren Sie in einem solchen Fall die Datenschutzbeauftragte.")), h("details", null, h("summary", null, "Was sind \"externe Empf\u00E4nger\"?"), h("p", null, "Externe Empf\u00E4nger sind Personen, Unternehmen und Einrichtungen, die nicht der Hochschule angeh\u00F6ren.")), h("details", null, h("summary", null, "Der Empf\u00E4nger, an den ich die Daten weitergeben m\u00F6chte, ist nicht gelistet."), h("p", null, "Falls Sie weitere Empf\u00E4nger ben\u00F6tigen, kontaktieren Sie die Datenschutzbeauftragte. Die Empf\u00E4nger werden dann der Liste der m\u00F6glichen Empf\u00E4nger hinzugef\u00FCgt."))))))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalPersonalDataRecipientTable.toggleAttribute("open"); } }, "Schlie\u00DFen"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalDeletionPeriod = el }, h("span", { slot: "modal-title" }, "L\u00F6schfrist"), h("div", { slot: "modal-content" }, h("div", { class: "row p-3" }, h("div", { class: "col-12 p-3 shadow" }, "Sie m\u00FCssen die erhobenen personenbezogenen Daten l\u00F6schen, wenn die Verarbeitungst\u00E4tigkeit abgeschlossen ist und alle rechtlichen Aufbewahrungsfristen ausgelaufen sind.")), h("ul", { class: "nav nav-tabs", id: "myTab", role: "tablist" }, h("li", { class: "nav-item" }, h("a", { class: "nav-link active", id: "loeschfristen-moegliche-empfaenger-tab", "data-toggle": "tab", href: "#loeschfristen-moegliche-empfaenger", role: "tab", "aria-controls": "loeschfristen-moegliche-empfaenger", "aria-selected": "true" }, "L\u00F6schfristen")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", id: "loeschfristen-hilfe-tab", "data-toggle": "tab", href: "#loeschfristen-hilfe", role: "tab", "aria-controls": "loeschfristen-hilfe", "aria-selected": "false" }, "Hilfe"))), h("div", { class: "tab-content", id: "myTabContent" }, h("div", { class: "tab-pane fade show active", id: "loeschfristen-moegliche-empfaenger", role: "tabpanel", "aria-labelledby": "home-tab" }, EDataBasket.checkPIIDeletion(this.dataBasket).length > 0 ?
      h("div", null, EDataBasket.checkPIIDeletion(this.dataBasket).map(o => h("details", { class: "pt-3" }, h("summary", null, "L\u00F6schfrist: ", (new Date(o.deletionDateMillis)).toLocaleDateString()), h("p", null, "Sie m\u00FCssen die personenbezogenen Daten der folgenden betroffenen Personen zur angegebenen Frist l\u00F6schen:"), h("ul", null, o.person.map(person => h("li", null, h("i", { class: "fas fa-user-circle" }), " ", person.dataSubject.last_name + ", " + person.dataSubject.first_name)))))) : "Noch nicht verfügbar"), h("div", { class: "tab-pane fade", id: "loeschfristen-hilfe", role: "tabpanel", "aria-labelledby": "profile-tab" }, h("div", { class: "row pt-3" }, h("div", { class: "col-12" }, h("details", null, h("summary", null, "Welche Daten muss ich l\u00F6schen?"), h("p", null, "Sie m\u00FCssen ", h("b", null, "alle"), " personenbezogenen Daten einer betroffenen Person l\u00F6schen, die Sie im Rahmen dieser Verarbeitungst\u00E4tigkeit erhoben haben."), h("ul", null, h("li", null, "Von allen Ger\u00E4ten l\u00F6schen;"), h("li", null, "In allen Cloud- und E-Mail-Speichern l\u00F6schen;"), h("li", null, "Alle Papierunterlagen vernichten;")))))))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalDeletionPeriod.toggleAttribute("open"); } }, "Schlie\u00DFen"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalPersonalDataSensitivity = el }, h("span", { slot: "modal-title" }, "Sensibilit\u00E4t"), h("div", { slot: "modal-content" }, h("ul", { class: "nav nav-tabs", id: "myTab", role: "tablist" }, h("li", { class: "nav-item" }, h("a", { class: "nav-link active", id: "sensibilitaet-tab", "data-toggle": "tab", href: "#sensibilitaet", role: "tab", "aria-controls": "sensibilitaet", "aria-selected": "true" }, "Besondere Kategorien pers. Daten")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", id: "sensibilitaet-hilfe-tab", "data-toggle": "tab", href: "#sensibilitaet-hilfe", role: "tab", "aria-controls": "sensibilitaet-hilfe", "aria-selected": "false" }, "Hilfe"))), h("div", { class: "tab-content", id: "myTabContent" }, h("div", { class: "tab-pane fade show active", id: "sensibilitaet", role: "tabpanel", "aria-labelledby": "home-tab" }, EDataBasket.getPIISpecialCategories(this.dataBasket).length > 0 ?
      h("div", null, h("ui5-messagestrip", { type: "Warning", "no-close-button": true }, h("b", null, "Hinweis!"), h("p", null, "Beachten Sie, dass Sie die hier gelisteten pers. Daten"), h("ul", null, h("li", null, "ausschlie\u00DFlich f\u00FCr den angegebenen Zweck verwenden;      "), h("li", null, "ausschlie\u00DFlich auf Ihren Arbeitsger\u00E4ten der Hochschule speichern und verarbeiten."))), h("p", null, "In diesem Datenkorb werden die folgenden besonderen Kategorien von personenbezogenen Daten verarbeitet:"), h("ul", null, h("li", null, EDataBasket.getPIISpecialCategories(this.dataBasket)[0].dataCategory.friendlyName)))
      :
        h("p", null, "In diesem Datenkorb werden keine besonderen Kategorien von personenbezogenen Daten verarbeitet.")), h("div", { class: "tab-pane fade", id: "sensibilitaet-hilfe", role: "tabpanel", "aria-labelledby": "profile-tab" }, h("div", { class: "row pt-3" }, h("div", { class: "col-12" }, h("details", null, h("summary", null, "Welche Daten geh\u00F6ren zu den besonderen Kategorien personenbezogener Daten?"), h("ul", null, h("li", null, "rassische und ethnische Herkunft (z.B. Hautfarbe)"), h("li", null, "politische Meinungen (z.B. Parteimitgliedschaft)"), h("li", null, "religi\u00F6se oder philosophische \u00DCberzeugungen (z.B. Glaubensrichtung)"), h("li", null, "Gewerkschaftszugeh\u00F6rigkeit (z.B. Mitglied bei Gewerkschaft XY)"), h("li", null, "genetische Daten (z.B. Gensequenz aus Gentest)"), h("li", null, "biometrische Daten (z.B. Fingerabdruck)"), h("li", null, "Gesundheit (z.B. Erkrankungen)"), h("li", null, "Sexualleben oder sexuelle Orientierung (z.B. Homosexualit\u00E4t)")))))))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalPersonalDataSensitivity.toggleAttribute("open"); } }, "Schlie\u00DFen"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalProcessingRecordEntryViewer = el }, h("span", { slot: "modal-title" }, "Verarbeitungst\u00E4tigkeit ", h("b", null, findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).friendlyName)), h("div", { slot: "modal-content" }, h("div", { class: "col-12 pt-3 pb-3" }, h("div", { class: "row" }, h("div", { class: "col-12 shadow" }, h("h5", { class: "font-weight-light" }, "Beschreibung der Verarbeitungst\u00E4tigkeit:"), this.dataBasket.description))), "Die personenbezogenen Daten d\u00FCrfen f\u00FCr die folgenden Zwecke verarbeitet werden:", h("br", null), findProcessingRecordEntryByID(this.dataBasket.selectedProcessingRecordID).purposes.map(purpose => h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, purpose.displayName), purpose.descriptionText))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => { this.modalProcessingRecordEntryViewer.toggleAttribute("open"); } }, "Schlie\u00DFen"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalFirstTimeRuhezustand = el }, h("span", { slot: "modal-title" }, "Hinweis"), h("div", { slot: "modal-content" }, h("ui5-messagestrip", { type: "Information", "no-close-button": true }, h("h5", null, "Dieser Datenkorb befindet sich jetzt im Ruhezustand!"), h("p", null, "Datenk\u00F6rbe im Ruhezustand haben keine laufenen Anfragen. Sie k\u00F6nnen jedoch weitere Personen und personenbezogene Daten hinzuf\u00FCgen."))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-primary", onClick: () => {
        this.modalFirstTimeRuhezustand.toggleAttribute("open");
      } }, "weiter"), "\u00A0")), h("trusd-com-modal-window", { ref: (el) => this.modalTask = el }, h("span", { slot: "modal-title" }, "Hinweis"), h("div", { slot: "modal-content" }, h("ui5-messagestrip", { type: "Positive", "no-close-button": true }, h("h5", null, "Der Datenkorb ist jetzt aktiv!"), h("p", null, "Der Datenkorb bleibt solange aktiv, bis alle angefragten Personen Ihre versendete Anfrage beantwortet haben."))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-primary", onClick: () => {
        this.modalTask.toggleAttribute("open");
      } }, "Weiter"), "\u00A0"))));
  }
  get el() { return getElement(this); }
};
PlannedProcessingOverview.route = "/datenkoerbe/:datenkorbId";
PlannedProcessingOverview.style = comPlannedProcessingOverviewCss;

export { PlannedProcessingOverview as P };
