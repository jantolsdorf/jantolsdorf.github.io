import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import './Wizard-1f8d8d07.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';
import './Icons-85d4abff.js';
import './i18n-defaults-dca87248.js';
import './debounce-bf42cc69.js';
import './Popover-0d784de7.js';
import './Button-7dc82d4c.js';
import './ResponsivePopover-cdfbc391.js';
import './decline-a03835ab.js';
import './TitleLevel-a10fe215.js';

const page404Css = "";

const Page404 = class {
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
    return (h("div", { class: "container-fluid text-center" }, h("div", { class: "px-5 py-5" }, h("h1", { class: "not-found" }, "404"), h("h3", null, "We couldn't seem to find the page you are looking for!"), h("div", { class: "text-center mt-4 mb-5" }, " ", h("button", { class: "btn btn-success send px-3" }, h("i", { class: "fa fa-long-arrow-left mr-1" }), " Return to main page"), " "))));
  }
  get el() { return getElement(this); }
};
Page404.style = page404Css;

export { Page404 as trusd_piiq_page_404 };
