import { r as registerInstance, h } from './index-dee1f973.js';
import { l as language } from './de-DE-5564f65b.js';
import { b as EnumStatus, a as EnumState } from './EDataBasket-f2b29bfe.js';
import './index-912d1a21.js';
import './store-9032fc40.js';
import './utils-8ebcd8ca.js';
import './index-de766dcc.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';

const trusdPiiQueryViewWidgetCss = ".tooltips.sc-trusd-piiq-data-basket-widget .tooltiptext.sc-trusd-piiq-data-basket-widget{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-data-basket-widget .tooltiptext.sc-trusd-piiq-data-basket-widget::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-data-basket-widget:hover .tooltiptext.sc-trusd-piiq-data-basket-widget{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-data-basket-widget,.privacy-tooltip.sc-trusd-piiq-data-basket-widget+.tooltip.sc-trusd-piiq-data-basket-widget>.tooltip-inner.sc-trusd-piiq-data-basket-widget{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-data-basket-widget{cursor:pointer}.cursor-help.sc-trusd-piiq-data-basket-widget{cursor:help}button.sc-trusd-piiq-data-basket-widget:disabled{cursor:not-allowed;pointer-events:all !important}body.sc-trusd-piiq-data-basket-widget{background-color:#f4f7f6;margin-top:20px}.databasket-widget.sc-trusd-piiq-data-basket-widget small.sc-trusd-piiq-data-basket-widget{display:block}.databasket-widget.sc-trusd-piiq-data-basket-widget{text-align:center;background-size:cover;background-position:top;padding:5px !important;border-top:1px solid #f7f7f7;padding:15px 10px;display:table;width:100%;height:100%;box-shadow:0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);transition:.3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)}.databasket-widget.sc-trusd-piiq-data-basket-widget:hover{transform:scale(1.05);box-shadow:0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);cursor:pointer}.databasket-widget.sc-trusd-piiq-data-basket-widget a.sc-trusd-piiq-data-basket-widget{color:inherit;text-decoration:inherit}.databasket-widget.sc-trusd-piiq-data-basket-widget i.sc-trusd-piiq-data-basket-widget{color:#777}.databasket-widget.sc-trusd-piiq-data-basket-widget small.sc-trusd-piiq-data-basket-widget .date.sc-trusd-piiq-data-basket-widget{float:right}.date.sc-trusd-piiq-data-basket-widget{padding-top:10px;text-align:center;width:100%}.notes.sc-trusd-piiq-data-basket-widget{font-size:x-large;display:flex;width:100%;justify-content:center}.circle.sc-trusd-piiq-data-basket-widget{position:relative;display:block;background-color:transparent;color:#222;text-align:center;border-radius:50%}.circle.sc-trusd-piiq-data-basket-widget:after{display:block;padding-bottom:100%;width:100%;height:0;border-radius:50%;content:\"\"}.circle__inner.sc-trusd-piiq-data-basket-widget{position:absolute;background-color:white;border-radius:50%;top:5%;bottom:0;left:5%;width:90%;height:90%}.circle__wrapper.sc-trusd-piiq-data-basket-widget{display:table;width:100%;height:100%}.circle__content.sc-trusd-piiq-data-basket-widget{display:table-cell;padding:.5em;vertical-align:middle}.circle__inner.READY.sc-trusd-piiq-data-basket-widget{background-color:#2ecc71;font-size:x-large;color:white;box-shadow:0 0 0 0 #2ecc71;-webkit-animation:pulse 5s infinite cubic-bezier(0.66, 0, 0, 1);-moz-animation:pulse 5s infinite cubic-bezier(0.66, 0, 0, 1);-ms-animation:pulse 5s infinite cubic-bezier(0.66, 0, 0, 1);animation:pulse 5s infinite cubic-bezier(0.66, 0, 0, 1)}.circle__inner.READY.sc-trusd-piiq-data-basket-widget:hover{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}@-webkit-keyframes pulse{to{box-shadow:0 0 0 20px rgba(232, 76, 61, 0)}}@-moz-keyframes pulse{to{box-shadow:0 0 0 20px rgba(232, 76, 61, 0)}}@-ms-keyframes pulse{to{box-shadow:0 0 0 20px rgba(232, 76, 61, 0)}}@keyframes pulse{to{box-shadow:0 0 0 20px rgba(232, 76, 61, 0)}}.crop-text-2.sc-trusd-piiq-data-basket-widget{-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.fa-disabled.sc-trusd-piiq-data-basket-widget{opacity:0.3}";

const ComDataBasketWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description The progress of the data basket based on some percentage value. The value is used to display the circle.
     */
    this.ProgressDataBasket = 45;
    this.progressDataBasket = 0;
    /**
     * @description The number of issues in the current data basket.
     */
    this.Issues = 0;
    /**
     * @description The number of unread messages if any.
     */
    this.UnreadMessages = 0;
    /**
     * @description Date of last action.
     */
    this.LastActivity = "";
    /**
   * @description Type of data basket.
   */
    this.DataBasketType = "";
    /**
     * @description The URL of the data basket.
     */
    this.TargetURL = "#";
    /**
     * @description used to rerender the view (count up to rerender)
     */
    this.update = 0;
  }
  componentDidRender() {
    // Add loading effect for the circle:
    if (this.progressDataBasket < this.ProgressDataBasket) {
      this.progressDataBasket++;
      setTimeout(() => { this.update++; }, 1);
    }
  }
  render() {
    return (h("div", { class: "card databasket-widget", onClick: () => {
        if (this.history) {
          this.history.push(this.TargetURL);
        }
        else {
          window.location.href = this.TargetURL;
        }
      } }, h("div", { class: "row" }, h("div", { class: "col-12" }, h("small", { class: "text-muted" }, this.DataBasketType))), h("h6", { style: { height: "2em", lineHeight: "1em" }, class: "crop-text-2 m-0 p-0", title: this.dataBasket.title }, this.dataBasket.title), h("div", { class: "card-body" }, this.dataBasket.status === EnumStatus.IDLE ?
      h("div", { class: "row" }, h("div", { class: "col-12 rounded bg-primary text-white" }, "Ruhend"), h("div", { class: "col-6" }, h("table", { class: "notes" }, h("tr", null, h("td", { title: "Anzahl betroffene Personen" }, h("span", { style: { verticalAlign: `middle` }, class: "fas fa-user-friends fa-disabled" })), h("td", null, "\u00A0", h("span", { style: { verticalAlign: `middle` } }, this.dataBasket.dataSets.length))))), h("div", { class: "col-6" }, h("table", { class: "notes" }, h("tr", null, h("td", { title: "Kategorien von personenbezogenen Daten" }, h("span", { style: { verticalAlign: `middle` }, class: "fas fa-tags fa-disabled" })), h("td", null, "\u00A0", h("span", { style: { verticalAlign: `middle` } }, this.dataBasket.dataSets[0].pii.length))))))
      :
        h("div", { class: "row" }, h("div", { class: "col" }, h("div", { class: "circle", style: {
            background: `conic-gradient(${(this.dataBasket.status === EnumStatus.ACTIVE || this.dataBasket.status === EnumStatus.DONE) ? `#2ecc71` : `#248dfd`} ${this.progressDataBasket}%, 0, #ecf0f1 ${100 - this.progressDataBasket}%)`,
            animation: `loading-1 1.8s linear forwards`
          } }, h("div", { class: "circle__inner " + this.dataBasket.state }, h("div", { class: "circle__wrapper" }, h("div", { class: "circle__content" }, h("small", null, this.dataBasket.state === EnumState.WAITING ?
          h("div", { class: "icon" }, h("span", { class: "fas fa-hourglass-start" }), " \u00A0\u00A0", language.statusWaitingDataBasketWidget)
          : null, this.dataBasket.state === EnumState.READY ?
          h("div", { class: "icon" }, language.statusReadyDataBasketWidget)
          : null, this.dataBasket.status === EnumStatus.DRAFTING ?
          h("div", { class: "icon" }, h("i", { class: "fas fa-pencil-ruler" }), " \u00A0\u00A0", language.statusDraftingDataBasketWidget)
          : null))))))), h("div", { class: "row" }, h("div", { class: "col-6" }, h("table", { class: "notes" }, h("tr", null, h("td", { title: language.tooltipNewMessageDataBasketWidget }, h("span", { style: { verticalAlign: `middle` }, class: this.UnreadMessages > 0 ? "fas fa-envelope" : "fas fa-envelope fa-disabled" })), h("td", null, "\u00A0", h("span", { style: { verticalAlign: `middle` } }, this.UnreadMessages))))), h("div", { class: "col-6" }, h("table", { class: "notes" }, h("tr", null, h("td", { title: language.tooltipIssuesDataBasketWidget }, h("span", { style: { verticalAlign: `middle` }, class: this.Issues > 0 ? "fas fa-exclamation-circle" : "fas fa-exclamation-circle fa-disabled" })), h("td", null, "\u00A0", h("span", { style: { verticalAlign: `middle` } }, this.Issues)))))), h("div", { class: "row" }, h("div", { class: "col p-0 date" }, h("small", { title: language.tooltipDateDataBasketWidget }, h("i", { class: "fas fa-calendar" }), " ", language.dateDataBasketWidget, ": ", this.LastActivity))))));
  }
};
ComDataBasketWidget.style = trusdPiiQueryViewWidgetCss;

export { ComDataBasketWidget as trusd_piiq_data_basket_widget };
