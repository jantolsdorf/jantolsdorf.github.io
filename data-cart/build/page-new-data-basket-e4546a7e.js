import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import './Wizard-1f8d8d07.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';
import { l as language } from './de-DE-5564f65b.js';
import { W as WizardUI } from './wizard-54e0e64f.js';
import { s as state } from './store-9032fc40.js';
import { D as DataBasketImportEdit } from './com-data-basket-import-edit-2d9dec39.js';

const pageNewDataBasketCss = "";

const PageNewDataBasket = class {
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
      state.importedFromForm = ev.detail.databasket;
      this.history.push(this.baseUrl + DataBasketImportEdit.route, "");
    }
    else if (ev.detail.type === "WIZARD") {
      this.history.push(this.baseUrl + WizardUI.route, "");
    }
  }
  componentWillRender() {
  }
  render() {
    return (h("div", { class: "container" }, h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("div", { class: "text-center justify-content-center bg-white" }, h("div", { class: "row" }, h("div", { class: "col" }, h("h5", null, h("b", null, language.pageNewDataBasketTitle)))), h("div", { class: "row justify-content-center" }, h("div", { class: "col" }, h("trusd-piiq-com-data-basket-step-0", { onCompleted: (ev) => this.onCompletedHandler(ev) }))))))));
  }
  get el() { return getElement(this); }
};
PageNewDataBasket.route = "/vorlagen/datenkorb";
PageNewDataBasket.style = pageNewDataBasketCss;

export { PageNewDataBasket as P };
