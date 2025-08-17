import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import './Wizard-1f8d8d07.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';
import { l as language } from './de-DE-5564f65b.js';
import './Icons-85d4abff.js';
import './i18n-defaults-dca87248.js';
import './debounce-bf42cc69.js';
import './Popover-0d784de7.js';
import './Button-7dc82d4c.js';
import './ResponsivePopover-cdfbc391.js';
import './decline-a03835ab.js';
import './TitleLevel-a10fe215.js';

const pageNewDataBasketPermissionCss = "";

const PageNewDataBasketPermission = class {
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
    return (h("div", { class: "container" }, h("div", { class: "row p-2 mt-3 bg-white rounded border" }, h("div", { class: "col-12" }, h("div", { class: "card text-center justify-content-center shadow-lg card-1 border-0 bg-white px-sm-2" }, h("div", { class: "card-body show " }, h("div", { class: "row" }, h("div", { class: "col" }, h("h5", null, h("b", null, language.pageNewDataBasketTitle)))), h("div", { class: "row justify-content-center" }, h("div", { class: "col" }, h("trusd-piiq-com-data-basket-step-0", { onCompleted: (ev) => this.onCompletedHandler(ev) })))))))));
  }
  get el() { return getElement(this); }
};
PageNewDataBasketPermission.route = "/vorlagen/datenkorb";
PageNewDataBasketPermission.style = pageNewDataBasketPermissionCss;

export { PageNewDataBasketPermission as trusd_piiq_page_new_data_basket_permission };
