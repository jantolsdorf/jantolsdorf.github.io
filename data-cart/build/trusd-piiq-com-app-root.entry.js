import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import { A as ActiveRouter } from './active-router-29f67e2f.js';
import './match-path-760e1797.js';
import { l as language } from './de-DE-5564f65b.js';
import { c as cleanBaseUrl } from './trusd-piiq-com-data-basket-grid-d7060e45.js';
import { s as state } from './store-9032fc40.js';
import { C as ComActivityLog } from './com-activity-log-44d0b098.js';
import { D as DataBasketImportEdit } from './com-data-basket-import-edit-2d9dec39.js';
import { C as ComNotes } from './com-notes-3471baf1.js';
import { P as PlannedProcessingOverview } from './com-planned-processing-overview-8efcb260.js';
import { P as PageCredits } from './page-credits-e1cba365.js';
import { P as PageHelp } from './page-help-31e7285c.js';
import { P as PageNewDataBasket } from './page-new-data-basket-e4546a7e.js';
import { W as WizardUI } from './wizard-54e0e64f.js';
import './location-utils-fea12957.js';
import './EDataBasket-f2b29bfe.js';
import './index-912d1a21.js';
import './utils-8ebcd8ca.js';
import './index-de766dcc.js';
import './VODataSubjectSelect-89e5c619.js';
import './EDataSubject-fd8665cd.js';
import './VOActivityLog-8bcd31ab.js';
import './StandardListItem-6305d5b8.js';
import './Icons-85d4abff.js';
import './Popover-0d784de7.js';
import './i18n-defaults-dca87248.js';
import './debounce-bf42cc69.js';
import './BusyIndicator-60b0b9ee.js';
import './ValueState-a7516d8f.js';
import './decline-a03835ab.js';
import './Button-7dc82d4c.js';
import './MessageStrip-d043c32b.js';
import './Panel-41601129.js';
import './animate-55fc3ba3.js';
import './slim-arrow-right-08785783.js';
import './TitleLevel-a10fe215.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';
import './Wizard-1f8d8d07.js';
import './ResponsivePopover-cdfbc391.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

const appRootCss = ".sc-trusd-piiq-com-app-root-h{display:block;background-color:#eee}.with-sidebar.sc-trusd-piiq-com-app-root>*.sc-trusd-piiq-com-app-root{display:flex;flex-wrap:wrap;margin-left:-0.5rem;margin-top:-0.5rem;align-items:stretch}.with-sidebar.sc-trusd-piiq-com-app-root>*.sc-trusd-piiq-com-app-root>*.sc-trusd-piiq-com-app-root{margin:0.5rem}.sidebar.sc-trusd-piiq-com-app-root{flex-basis:20rem;flex-grow:1;min-height:100vh}.not-sidebar.sc-trusd-piiq-com-app-root{flex-basis:0;flex-grow:999;min-width:calc(50% - 1rem)}";

const ComAppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
         * @description: Pass a prefix that is ignored by the router.
         * @example /ignorethis/
         */
    this.baseUrl = "";
    /**
   * @description: Optional url to render (due to router problems when embedded in vue js for example).
   * @example /processingrecordentries/
   */
    this.initialUrl = "";
    this.isReachableHostBasePath = true;
    this.update = 0;
    /**
     * @description Defines the sidebar navigation menu items.
     */
    this.navigationMenu = [
      {
        title: language.labelMenuOverview,
        menuItems: [
          {
            name: language.labelMenuNewDataBasket,
            targetLocation: cleanBaseUrl(this.baseUrl) + PageNewDataBasket.route,
            queryParams: [],
            isActive: false,
            subNav: [],
            faIconString: "fa fa-plus",
          },
          {
            name: language.labelMenuOverview,
            targetLocation: cleanBaseUrl(this.baseUrl) + "/",
            queryParams: [],
            isActive: false,
            faIconString: "fa fa-th",
            makeCollapse: false,
            subNav: [
              {
                name: language.labelMenuOverviewSubActive,
                targetLocation: cleanBaseUrl(this.baseUrl) + "/",
                queryParams: ["status=active"],
                isActive: false,
                faIconString: "fas fa-retweet",
              },
              {
                name: language.labelMenuOverviewSubIdle,
                targetLocation: cleanBaseUrl(this.baseUrl) + "/",
                queryParams: ["status=idle"],
                isActive: false,
                faIconString: "fas fa-spinner",
              },
              {
                name: language.labelMenuOverviewSubDraft,
                targetLocation: cleanBaseUrl(this.baseUrl) + "/",
                queryParams: ["status=drafting"],
                isActive: false,
                faIconString: "fas fa-pencil-alt",
              },
              {
                name: language.labelMenuOverviewSubOld,
                targetLocation: cleanBaseUrl(this.baseUrl) + "/",
                queryParams: ["status=done"],
                isActive: false,
                faIconString: "fas fa-archive",
              }
            ]
          }
        ]
      },
      {
        title: language.options,
        menuItems: [
          // {
          //   name: language.labelMenuSettings,
          //   targetLocation: "#",
          //   queryParams: [],
          //   isActive: false,
          //   subNav: [],
          //   faIconString: "fa fa-calendar",
          // },
          {
            name: language.labelMenuHelp,
            targetLocation: cleanBaseUrl(this.baseUrl) + PageHelp.route,
            queryParams: [],
            isActive: false,
            subNav: [],
            faIconString: "fa fa-question"
          },
          {
            name: language.labelMenuCredits,
            targetLocation: cleanBaseUrl(this.baseUrl) + PageCredits.route,
            queryParams: [],
            isActive: false,
            subNav: [],
            faIconString: "fa fa-heart"
          }
        ]
      }
    ];
    /**
     * @description Holds the sidebar navigation.
     */
    this.navigation = [];
    /**
     * @description Holds the current window location.
     */
    this.windowLocationPathname = "";
    this.windowLocationSearch = "";
  }
  /**
   * @description Sets the the isActive property in the navigation array for the sidebar nav.
   * @returns void
   */
  setNavigationActive() {
    let isActive = false;
    this.navigation = JSON.parse(JSON.stringify(this.navigationMenu));
    for (let indexSection = 0; indexSection < this.navigation.length; indexSection++) {
      let section = this.navigation[indexSection];
      for (let indexMenuItem = 0; indexMenuItem < section.menuItems.length; indexMenuItem++) {
        let menuItem = section.menuItems[indexMenuItem];
        if (menuItem.targetLocation === this.windowLocationPathname) {
          for (let indexSubMenuItem = 0; indexSubMenuItem < menuItem.subNav.length; indexSubMenuItem++) {
            let subMenuItem = menuItem.subNav[indexSubMenuItem];
            subMenuItem.queryParams.forEach((q) => {
              isActive = true;
              if (!window.location.search.includes(q)) {
                isActive = false;
                return;
              }
            });
            if (isActive) {
              this.navigation[indexSection].menuItems[indexMenuItem].subNav[indexSubMenuItem].isActive = true;
              indexSubMenuItem = menuItem.subNav.length;
            }
          }
          if (!isActive) {
            this.navigation[indexSection].menuItems[indexMenuItem].isActive = true;
            indexSection = this.navigation.length;
            break;
          }
        }
      }
    }
    this.update++;
  }
  /**
   *
   * @param path the path to go to
   * @param query the query parameters to set
   */
  updateLocation(path, query) {
    window.history.pushState({}, "", (path + (query === "" ? "" : ("?" + query))));
    this.windowLocationPathname = path;
    this.windowLocationSearch = query;
    this.setNavigationActive();
  }
  componentWillRender() {
  }
  componentWillLoad() {
    this.windowLocationPathname = window.location.pathname;
    this.windowLocationSearch = window.location.search;
    this.setNavigationActive();
    state.baseURL = this.baseUrl;
  }
  componentDidRender() {
  }
  render() {
    return (h("div", { class: "container-flex" }, h("header", null), h("main", null, h("div", { class: "with-sidebar" }, h("div", null, h("div", { id: "sidebar", class: "sidebar bg-light" }, h("div", { id: "sidebar-container", class: "sidebar-expanded d-none d-md-block" }, h("ul", { class: "list-group" }, this.navigation.map((section) => h("div", null, h("li", { class: "list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed" }, h("small", null, section.title)), section.menuItems.map((menuitem, index) => h("div", null, h("a", { href: (menuitem.subNav.length > 0 && menuitem.makeCollapse) ? "#submenu" + index : "", "data-toggle": (menuitem.subNav.length > 0 && menuitem.makeCollapse) ? "collapse" : "", "aria-expanded": "true", class: "list-group-item list-group-item-action flex-column align-items-start" + (menuitem.isActive ? " active" : ""), onClick: () => this.updateLocation(menuitem.targetLocation, menuitem.queryParams.join("&")) }, h("div", { class: "d-flex w-100 justify-content-start align-items-center" }, h("span", { class: menuitem.faIconString + " fa-fw mr-3" }), h("span", { class: "menu-collapsed" }, menuitem.name), h("span", { class: "submenu-icon ml-auto" }))), h("div", { id: "submenu" + index, class: "sidebar-submenu" }, menuitem.subNav.map((submenuitem) => h("a", { href: "#", onClick: () => this.updateLocation(submenuitem.targetLocation, submenuitem.queryParams.join("&")), class: "list-group-item list-group-item-action" + (submenuitem.isActive ? " active" : "") }, "\u2003", h("span", { class: submenuitem.faIconString + " fa-fw mr-3" }), h("span", { class: "menu-collapsed" }, submenuitem.name))))))))))), h("div", { id: "main", class: "not-sidebar" }, !this.isReachableHostBasePath ?
      h("div", { class: "row" }, h("div", { class: "col-12" }, h("div", { class: "alert alert-danger", role: "alert" }, h("b", null, language.error, ":"), " ", language.errorServiceUnavailable)), h("div", { class: "col-12" }, h("div", { class: "d-flex justify-content-center" }, h("div", { class: "card" }, h("div", { class: "card-body center" }, h("i", { class: "fas fa-exclamation-triangle fa-10x" }))))))
      :
        h("div", null, h("stencil-route-title", { title: language.home }), h("stencil-router", { root: this.baseUrl.charAt(this.baseUrl.length - 1) == "/" ? this.baseUrl :
            this.baseUrl + "/" }, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: ["", "/"], component: "trusd-piiq-com-data-basket-grid", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: PlannedProcessingOverview.route, component: "trusd-piiq-com-planned-processing-overview", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: PageNewDataBasket.route, component: "trusd-piiq-page-new-data-basket", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: PageHelp.route, component: "trusd-piiq-page-help", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: PageCredits.route, component: "trusd-piiq-page-credits", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: WizardUI.route, component: "trusd-piiq-com-wizard", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: DataBasketImportEdit.route, component: "trusd-piiq-com-data-basket-import-edit", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, history: this.history } }), h("stencil-route", { url: ComActivityLog.route, component: "trusd-piiq-com-activity-log", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl } }), h("stencil-route", { url: ComNotes.route, component: "com-notes", exact: true, componentProps: { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl } }), h("stencil-route", { component: "trusd-piiq-page-404" }), h("stencil-route", { url: "/widgets", exact: true, routeRender: (props) => {
            props.HostBasePath = this.HostBasePath;
            props.baseUrl = this.baseUrl;
            switch (props.history.location.query.type) {
              case "most-recent":
                return h("trusd-piiq-com-data-basket-grid", Object.assign({}, props));
              default:
                return (h("div", { class: "row" }, h("div", { class: "card" }, h("trusd-piiq-com-data-basket-grid", null))));
            }
          } }))))))))));
  }
  get el() { return getElement(this); }
};
injectHistory(ComAppRoot);
ComAppRoot.style = appRootCss;

export { ComAppRoot as trusd_piiq_com_app_root };
