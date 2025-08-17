import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import './DatePicker-7ba473c2.js';
import { l as language } from './de-DE-5564f65b.js';
import { c as EnumPIITransmissionChannel } from './EDataBasket-f2b29bfe.js';
import { D as DataPersonSelectPermission } from './com-data-basket-step-2-1a9aa5bc.js';
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
import './index-912d1a21.js';
import './store-9032fc40.js';
import './utils-8ebcd8ca.js';
import './index-de766dcc.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';
import './MultiComboBox-28b17a8b.js';
import './Tokenizer-d8a8b2e5.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './StandardListItem-6305d5b8.js';
import './BusyIndicator-60b0b9ee.js';

const comDataBasketPermissionStep3Css = ".sc-trusd-piiq-com-data-basket-permission-step-3-h{display:block}*.sc-trusd-piiq-com-data-basket-permission-step-3{text-align:left}";

const EditDetailsPermission = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completed = createEvent(this, "completed", 7);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.mappingTransmissionChannelInput = [
      { key: EnumPIITransmissionChannel.EMAIL, value: "E-Mail" },
      { key: EnumPIITransmissionChannel.INHOUSE_MAIL, value: "Hauspost" },
      { key: EnumPIITransmissionChannel.FILE_UPLOAD, value: "Datei Upload" },
      { key: EnumPIITransmissionChannel.FAX, value: "Fax" }
    ];
  }
  handleOnChangeTransmissionChannel(ev) {
    if (ev.target.checked && this.data.transmissionChannel.indexOf(ev.target.value) === -1) {
      this.data.transmissionChannel.push(ev.target.value);
    }
    else if (!ev.target.checked && this.data.transmissionChannel.indexOf(ev.target.value) >= 0) {
      this.data.transmissionChannel.splice(this.data.transmissionChannel.indexOf(ev.target.value), 1);
    }
  }
  startProcessing() {
    document.querySelector('trusd-piiq-com-app-root').data = this.data;
    this.completed.emit(this.data);
  }
  componentWillLoad() {
    // add default if no transmission channels set yet.
    if (!this.data.transmissionChannel || this.data.transmissionChannel.length == 0) {
      this.data.transmissionChannel = [
        EnumPIITransmissionChannel.FILE_UPLOAD,
        EnumPIITransmissionChannel.EMAIL
      ];
    }
  }
  render() {
    if (this.data == undefined) {
      this.history.replace(DataPersonSelectPermission.route);
    }
    else {
      return (h("div", { class: "container" }, h("div", { class: "card p-4 shadow bg-light" }, h("div", { class: "row border-bottom" }, h("h3", null, "Details zur Verarbeitung")), h("div", { class: "row border-bottom" }, h("div", { class: "col p-3 mb-5 " }, h("div", { class: "row" }, h("h5", null, "1. Beschreibung der Verarbeitung")), h("div", { class: "row" }, h("textarea", { id: "description", class: "form-control", "aria-label": "With textarea", onInput: (ev) => this.data.description = ev.target.value })))), h("div", { class: "row justify-content-center" }, h("div", { class: "col border-right p-3 mb-5" }, h("h5", null, "2. Frist zur bearbeitung von Anfragen"), h("ui5-date-picker", { id: "deadline", placeholder: "MM JJJJ", "format-pattern": 'MM yyyy', onChange: (ev) => this.data.deadline = ev.target.value })), h("div", { class: "col p-3 mb-5" }, h("h5", null, "3. \u00DCbermittlungsweg der Daten"), this.mappingTransmissionChannelInput.map((trChIn) => h("div", { class: "form-check" }, h("input", { id: "trans-over-" + trChIn.key, class: "form-check-input", type: "checkbox", value: trChIn.key, checked: this.data.transmissionChannel.includes(trChIn.key), onChange: (ev) => this.handleOnChangeTransmissionChannel(ev) }), h("label", { class: "form-check-label", htmlFor: "trans-over-" + trChIn.key }, trChIn.value))))), h("div", { class: "row" }, h("div", { class: "col d-flex flex-row-reverse bd-highlight" }, h("button", { onClick: () => this.startProcessing(), type: "button", class: "btn btn-success float-right", "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, language.btnNext))))));
    }
  }
};
EditDetailsPermission.route = "/details-bearbeiten";
EditDetailsPermission.style = comDataBasketPermissionStep3Css;

export { EditDetailsPermission as trusd_piiq_com_data_basket_permission_step_3 };
