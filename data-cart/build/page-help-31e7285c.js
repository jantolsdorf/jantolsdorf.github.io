import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import './Wizard-1f8d8d07.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';

const pageHelpCss = "body.sc-trusd-piiq-page-help{margin:0;font-family:Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-size:.8125rem;font-weight:400;line-height:1.5385;color:#333;text-align:left;background-color:#f5f5f5}.mt-100.sc-trusd-piiq-page-help{margin-top:100px}[class*=bg-].sc-trusd-piiq-page-help:not(.bg-transparent):not(.bg-light):not(.bg-white):not(.btn-outline):not(body){color:#fff}.btn.sc-trusd-piiq-page-help{position:relative}";

const PageHelp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.data = {};
    /**
     * @description Count this up to force re-rendering and update the view.
     */
    this.update = 0;
  }
  /**
   *
   * @param ev event that includes the type of how the user wants to create the new data basket.
   */
  onCompletedHandler(ev) {
    if (ev.detail.type === "FROM_FORM") {
      //this.history.push()
    }
    else if (ev.detail.type === "WIZARD") {
    }
  }
  componentWillRender() {
  }
  render() {
    return (h("div", { class: "container-fluid d-flex justify-content-center mt-100" }, h("div", { class: "row" }, h("div", { class: "col-lg-4" }, h("div", { class: "card" }, h("div", { class: "card-body text-center" }, h("i", { class: "fa fa-book fa-5x mb-3 mt-1 book" }), h("h5", { class: "card-title" }, "Anleitungen"), h("p", { class: "mb-3" }, "Hier finden Sie alles was Sie wissen m\u00FCssen, um Datenk\u00F6rbe anzulegen, Einwilligungen einzuholen und Datenk\u00F6rbe zu verwalten."), " ", h("a", { href: "#", class: "btn btn-outline-primary", "data-abc": "true" }, "Durchsuchen")))), h("div", { class: "col-lg-4" }, h("div", { class: "card" }, h("div", { class: "card-body text-center" }, " ", h("i", { class: "fas fa-headset fa-5x mb-3 mt-1 support" }), h("h5", { class: "card-title" }, "Technische Unterst\u00FCtzung"), h("p", { class: "mb-3" }, "Die Anwendung hat technische Probleme und Sie ben\u00F6tigen Unterst\u00FCtzung bei der Problemsuche?"), " ", h("a", { href: "#", class: "btn btn-outline-primary", "data-abc": "true" }, "Kontaktieren")))), h("div", { class: "col-lg-4" }, h("div", { class: "card" }, h("div", { class: "card-body text-center" }, h("i", { class: "fas fa-comments fa-5x mb-3 mt-1 newspaper" }), h("h5", { class: "card-title" }, "Fachliche Unterst\u00FCtzung"), h("p", { class: "mb-3" }, "Sie ben\u00F6tigen fachlichen Rat bei der Verarbeitung von personenbezogenen Daten?"), " ", h("a", { href: "#", class: "btn btn-outline-primary", "data-abc": "true" }, "Experten finden")))))));
  }
  get el() { return getElement(this); }
};
PageHelp.route = "/help";
PageHelp.style = pageHelpCss;

export { PageHelp as P };
