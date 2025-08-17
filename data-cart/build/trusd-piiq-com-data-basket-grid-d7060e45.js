import { r as registerInstance, h } from './index-dee1f973.js';
import { l as language } from './de-DE-5564f65b.js';
import { s as state } from './store-9032fc40.js';
import { E as EDataBasket, a as EnumState } from './EDataBasket-f2b29bfe.js';
import { f as findProcessingRecordEntryByID } from './utils-8ebcd8ca.js';

const cleanBaseUrl = (url) => {
  url = url.trim();
  return url.charAt(url.length - 1) == "/" ? url.slice(0, url.length - 1) : url;
};
function historyPush(path, query) {
  path = path.startsWith(state.baseURL) ? path : state.baseURL + path;
  window.history.pushState({}, "", (path + (query === "" ? "" : ("?" + query))));
}

const trusdPiiqComDataBasketGridCss = ".tooltips.sc-trusd-piiq-com-data-basket-grid .tooltiptext.sc-trusd-piiq-com-data-basket-grid{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-grid .tooltiptext.sc-trusd-piiq-com-data-basket-grid::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-grid:hover .tooltiptext.sc-trusd-piiq-com-data-basket-grid{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-grid,.privacy-tooltip.sc-trusd-piiq-com-data-basket-grid+.tooltip.sc-trusd-piiq-com-data-basket-grid>.tooltip-inner.sc-trusd-piiq-com-data-basket-grid{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-grid{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-grid{cursor:help}button.sc-trusd-piiq-com-data-basket-grid:disabled{cursor:not-allowed;pointer-events:all !important}.trusd-grid-col-widget.sc-trusd-piiq-com-data-basket-grid{padding:5px;width:100%}.trusd-grid-row-widget.sc-trusd-piiq-com-data-basket-grid{width:100%}.card-header.sc-trusd-piiq-com-data-basket-grid>a.btn.sc-trusd-piiq-com-data-basket-grid{float:right}.toolbar.sc-trusd-piiq-com-data-basket-grid{float:right}";

const ComDataBasketGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    /**
     * @description List of data baskets to display.
     */
    this.DataBaskets = []; //dbs.concat(dbs).concat(dbs)
    /**
     * @description The list of data baskets that is actually rendered (based on filters for example).
     */
    this.renderDataBaskets = this.DataBaskets;
    /**
     * @description The number of columns to display in the grid.
     */
    this.Columns = 4;
    this.columns = [];
    /*** Filtering ***/
    // Filter based on the name.
    this.filterTextSearch = "";
    // Filter based on the state:
    this.filterState = "";
    // Filter based on the status:
    this.filterStatus = "";
  }
  /**
   * @description parses the query string to the filter arguments.
   */
  mapQueryStringToFilter() {
    const params = new URLSearchParams(window.location.search);
    params.has("status") ?
      this.filterStatus = params.get("status") : "";
    params.has("state") ?
      this.filterState = params.get("state") : "";
    params.has("q") ?
      this.filterStatus = params.get("q") : "";
  }
  componentWillLoad() {
    this.mapQueryStringToFilter();
    state.dbEDataBasket.forEach(db => {
      EDataBasket.store(EDataBasket.updateProgress(db));
    });
    this.DataBaskets = state.dbEDataBasket;
    this.renderDataBaskets = this.DataBaskets;
  }
  componentWillRender() {
    // Write a 2-d array for our grid:
    this.columns = [];
    this.renderDataBaskets = this.DataBaskets;
    // Filtering:
    if (this.filterStatus !== "") {
      this.renderDataBaskets = this.renderDataBaskets.filter(({ status }) => status.toLowerCase().includes(this.filterStatus.toLowerCase()));
    }
    if (this.filterTextSearch !== "") {
      this.renderDataBaskets = this.renderDataBaskets.filter(({ title }) => title.toLowerCase().includes(this.filterTextSearch.toLowerCase()));
    }
    if (this.filterState !== "") {
      this.renderDataBaskets = this.renderDataBaskets.filter(({ state }) => state.toLowerCase().includes(this.filterState.toLowerCase()));
    }
    this.renderDataBaskets = this.renderDataBaskets.sort((a, b) => {
      if (a.ID < b.ID)
        return 1;
      if (a.ID > b.ID)
        return -1;
      return 0;
    });
  }
  componentDidLoad() {
    // Setup listener to route updates in order to update the view:
    window.onhashchange = () => {
      this.mapQueryStringToFilter();
    };
  }
  render() {
    return (h("div", null, h("nav", { class: "navbar navbar-light bg-light" }, h("form", { class: "form-inline" }, h("input", { class: "form-control", onInput: (e) => this.filterTextSearch = e.target.value, type: "text", placeholder: language.placeholderSearch + " ..." }), h("select", { class: "form-control", onInput: (ev) => this.filterState = ev.target.value, style: { marginLeft: `30px` } }, h("option", { value: "", selected: this.filterState === "" }, language.toolbarFilterStatusAll), h("option", { value: EnumState.READY, selected: this.filterState === EnumState.READY }, language.toolbarFilterStatusReady), h("option", { value: EnumState.WAITING, selected: this.filterState === EnumState.WAITING }, language.toolbarFilterStatusWaiting)))), h("div", { class: "container-fluid" }, h("div", { class: "row clearfix trusd-grid-row-widget" }, this.renderDataBaskets.map((col) => (h("div", { class: "col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-1 trusd-grid-col-widget" }, h("trusd-piiq-data-basket-widget", { history: this.history, dataBasket: col, ProgressDataBasket: col.progress, Issues: col.numIssues, UnreadMessages: col.numMessagesUnread, LastActivity: (new Date(col.lastActionDate)).toLocaleTimeString() + " " + (new Date(col.lastActionDate)).toLocaleDateString(), TargetURL: cleanBaseUrl(this.baseUrl) + ComDataBasketGrid.route + "/" + col.ID, DataBasketType: findProcessingRecordEntryByID(col.selectedProcessingRecordID).friendlyName }))))))));
  }
};
ComDataBasketGrid.route = "/datenkoerbe";
ComDataBasketGrid.style = trusdPiiqComDataBasketGridCss;

export { ComDataBasketGrid as C, cleanBaseUrl as c };
