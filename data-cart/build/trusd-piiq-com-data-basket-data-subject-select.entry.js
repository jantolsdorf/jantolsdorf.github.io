import { r as registerInstance, i as createEvent, h } from './index-dee1f973.js';
import './DatePicker-7ba473c2.js';
import './MultiComboBox-28b17a8b.js';
import './Popover-0d784de7.js';
import { l as language } from './de-DE-5564f65b.js';
import { E as EDataSubject, a as EDataSubjectCategory } from './EDataSubject-fd8665cd.js';
import { s as state } from './store-9032fc40.js';
import { V as VODataSubjectSelect } from './VODataSubjectSelect-89e5c619.js';
import './Icons-85d4abff.js';
import './ValueState-a7516d8f.js';
import './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import './Button-7dc82d4c.js';
import './ResponsivePopover-cdfbc391.js';
import './Title-cbf0fa30.js';
import './TitleLevel-a10fe215.js';
import './slim-arrow-right-08785783.js';
import './Input-0ee3a2d0.js';
import './Tokenizer-d8a8b2e5.js';
import './debounce-bf42cc69.js';
import './animate-55fc3ba3.js';
import './StandardListItem-6305d5b8.js';
import './BusyIndicator-60b0b9ee.js';
import './index-912d1a21.js';

const comDataBasketSelectDataAndSubjectsCss = ".tooltips.sc-trusd-piiq-com-data-basket-data-subject-select .tooltiptext.sc-trusd-piiq-com-data-basket-data-subject-select{font-size:small;visibility:hidden;width:auto;background-color:#EEEEEE;color:#000;text-align:center;border-radius:6px;padding:5px 0;position:absolute !important;z-index:1000;bottom:100%;left:50%;margin-left:-60px;opacity:0;transition:opacity 1s}.tooltips.sc-trusd-piiq-com-data-basket-data-subject-select .tooltiptext.sc-trusd-piiq-com-data-basket-data-subject-select::after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltips.sc-trusd-piiq-com-data-basket-data-subject-select:hover .tooltiptext.sc-trusd-piiq-com-data-basket-data-subject-select{visibility:visible;opacity:1;transition:opacity 0s linear 1s;overflow:visible !important}.tooltip-arrow.sc-trusd-piiq-com-data-basket-data-subject-select,.privacy-tooltip.sc-trusd-piiq-com-data-basket-data-subject-select+.tooltip.sc-trusd-piiq-com-data-basket-data-subject-select>.tooltip-inner.sc-trusd-piiq-com-data-basket-data-subject-select{background-color:#0d5c95}.cursor-pointer.sc-trusd-piiq-com-data-basket-data-subject-select{cursor:pointer}.cursor-help.sc-trusd-piiq-com-data-basket-data-subject-select{cursor:help}button.sc-trusd-piiq-com-data-basket-data-subject-select:disabled{cursor:not-allowed;pointer-events:all !important}html.sc-trusd-piiq-com-data-basket-data-subject-select{scroll-behavior:smooth}.sc-trusd-piiq-com-data-basket-data-subject-select-h{display:block}.data-basket-scroll-list-col.sc-trusd-piiq-com-data-basket-data-subject-select{height:400px}.data-basket-scroll-list.sc-trusd-piiq-com-data-basket-data-subject-select{max-height:400px;min-height:400px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}.data-basket-modal-scroll-list.sc-trusd-piiq-com-data-basket-data-subject-select{max-height:300px;min-height:300px;margin-bottom:10px;overflow-y:auto;-webkit-overflow-scrolling:touch}*.sc-trusd-piiq-com-data-basket-data-subject-select{text-align:left}.star.sc-trusd-piiq-com-data-basket-data-subject-select{visibility:hidden;cursor:pointer;font-size:20px;right:0;margin-right:10px;top:5px;left:auto}.star.sc-trusd-piiq-com-data-basket-data-subject-select:before{content:\"\\2606\";position:absolute;visibility:visible}.star.sc-trusd-piiq-com-data-basket-data-subject-select:checked:before{content:\"\\2605\";position:absolute}.calDayContainer.sc-trusd-piiq-com-data-basket-data-subject-select{bottom:100%}.person-table.sc-trusd-piiq-com-data-basket-data-subject-select{overflow-y:auto;height:50vh}.person-table.sc-trusd-piiq-com-data-basket-data-subject-select thead.sc-trusd-piiq-com-data-basket-data-subject-select th.sc-trusd-piiq-com-data-basket-data-subject-select{position:sticky;top:0}table.sc-trusd-piiq-com-data-basket-data-subject-select{border-collapse:collapse;width:100%}th.sc-trusd-piiq-com-data-basket-data-subject-select,td.sc-trusd-piiq-com-data-basket-data-subject-select{padding:8px 16px;border:0px solid #ccc}th.sc-trusd-piiq-com-data-basket-data-subject-select{background-color:white}.person-table.sc-trusd-piiq-com-data-basket-data-subject-select tbody.sc-trusd-piiq-com-data-basket-data-subject-select>tr.sc-trusd-piiq-com-data-basket-data-subject-select,.person-table.sc-trusd-piiq-com-data-basket-data-subject-select tbody.sc-trusd-piiq-com-data-basket-data-subject-select input.sc-trusd-piiq-com-data-basket-data-subject-select,.person-table.sc-trusd-piiq-com-data-basket-data-subject-select th.sc-trusd-piiq-com-data-basket-data-subject-select input.sc-trusd-piiq-com-data-basket-data-subject-select{cursor:pointer}#exTab2.sc-trusd-piiq-com-data-basket-data-subject-select h3.sc-trusd-piiq-com-data-basket-data-subject-select{color:white;background-color:#428bca;padding:5px 15px}.data-subject-select.sc-trusd-piiq-com-data-basket-data-subject-select{z-index:1000 !important}.data-subject-select-modal-tab.sc-trusd-piiq-com-data-basket-data-subject-select{min-height:400px}.trusd-data-basket-selection-pii-data-subjects.sc-trusd-piiq-com-data-basket-data-subject-select{min-height:250px}#overlay.sc-trusd-piiq-com-data-basket-data-subject-select{position:absolute;background-color:rgba(255, 255, 255, 0.75);z-index:9999;cursor:wait;left:0;right:0;top:0;bottom:0;margin-left:-15px;margin-right:-15px;margin-top:-10px;margin-bottom:-10px}";

const PIISelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.trusdPiiqSelectedDataSubjectsChanged = createEvent(this, "trusdPiiqSelectedDataSubjectsChanged", 7);
    this.mode = "ALL";
    this.preselectedDataSubjects = [];
    /**
     * @description Stores the data subjects selected for the processing.
     *              This array will be returned when the selection has finished.
     */
    this.selectedDataSubjects = [];
    /**
   * @description: Array of the person_ids from favored persons
   */
    this.favoriteDataSubjects = [];
    /**
     * @description: Search string entered by the User in the person search.
     * @example Hein
     */
    this.searchStringDataSubjects = "";
    this.filterNameDataSubjects = "A-Z";
    this.filterRoleDataSubjects = [];
    this.filterFacultyDataSubject = [];
    /**
   * @description Sets whether all contacts in a table selected.
   */
    this.isPersonTableSelectAll = false;
    /* FORMS */
    /**
     * @description Holds a temporary selection of data subjects from the modal dialog.
     */
    this.formModalSelectedDataSubjects = [];
    /**
     * @description Holds the temporary form elements for external data subjects.
     */
    this.formNewExternalDataSubject = VODataSubjectSelect.fromDataSubject(new EDataSubject(), "EXTERNAL");
    this.formNewUnknownDataSubject = VODataSubjectSelect.fromDataSubjectCategory(new EDataSubjectCategory(""));
    this.formModalTabPane = "INTERNAL";
  }
  onChangeSelectedDataSubjects() {
    this.trusdPiiqSelectedDataSubjectsChanged.emit(this.selectedDataSubjects);
  }
  getPersonById(id) {
    return this.getInternalDataSubjects().find((p) => { return p.id === id; }).full_name;
  }
  /**
   *
   * @param ds The data subject that should be added to addTo.
   * @param addTo The array to which ds should be added.
   * @returns An array based on addTo that contains ds.
   */
  removeDataSubjectIfExist(ds, removeFrom) {
    if (!ds)
      return removeFrom;
    return [
      ...removeFrom.filter((sds) => { return ds.type === "INDIVIDUAL" && sds.dataSubject.id !== ds.dataSubject.id; }),
      ...removeFrom.filter((sds) => { return ds.type === "GROUP" && sds.dataSubjectCategory.id !== ds.dataSubjectCategory.id; })
    ];
  }
  /**
   *
   * @param ds The data subject that should be added to addTo.
   * @param addTo The array to which ds should be added.
   * @returns An array based on addTo that contains ds.
   */
  addDataSubjectIfNotExist(ds, addTo) {
    if (!ds)
      return addTo;
    if (addTo.find((sds) => { return (ds.type === "INDIVIDUAL" && sds.type === ds.type && sds.dataSubject.id === ds.dataSubject.id); }))
      return addTo;
    if (addTo.find((sds) => { return (ds.type === "GROUP" && sds.type === ds.type && sds.dataSubjectCategory.id === ds.dataSubjectCategory.id); }))
      return addTo;
    return [...addTo, ds];
  }
  /**
   * Adds the person to this.selectedPerson and runs this.appendDataSet(person_id) or removes the person if it was already checked.
   *
   * @param {MouseEvent} e Mouse Event from the checkbox.
   * @param {number} person_id ID of the person to be checked.
   */
  onChangedCheckedDataSubjectModal(ds) {
    if (this.formModalSelectedDataSubjects.find(sds => sds.type === "INDIVIDUAL" && sds.dataSubject.id === ds.id)) {
      // The data subject is no selected / not checked:
      this.formModalSelectedDataSubjects =
        this.removeDataSubjectIfExist(VODataSubjectSelect.fromDataSubject(ds, "INTERNAL"), this.formModalSelectedDataSubjects);
    }
    else {
      // The data subject is checked / selected:
      this.formModalSelectedDataSubjects =
        this.addDataSubjectIfNotExist(VODataSubjectSelect.fromDataSubject(ds, "INTERNAL"), this.formModalSelectedDataSubjects);
    }
  }
  /**
   * Returns true or false if a person is checked or unchecked.
   *
   * @param {number} person_id ID of the person.
   * @return {boolean} true when this.tmpDataSets includes person id
   */
  isPersonChecked(ds) {
    for (let index = 0; index < this.formModalSelectedDataSubjects.length; index++) {
      if (this.formModalSelectedDataSubjects[index].dataSubject.id === ds.id) {
        return true;
      }
    }
    return false;
  }
  // /**
  //  * Adds the all persons of a category to this.selectedPerson and runs this.appendDataSet(person_id) or removes the persons if the category was already checked.
  //  *
  //  * @param {MouseEvent} e Mouse Event from the checkbox.
  //  * @param {string} category_name Name of the category to be checked.
  //  */
  // checkCategory(e, category_name) {
  //     if (e.target.checked) {
  //         this.getDataSubjects().forEach(person => {
  //             if (person.roles.toString().includes(category_name) || person.faculty == category_name || category_name == "Alle") {
  //                 if (!this.isPersonChecked(person)) {
  //                     this.appendDataSet(person)
  //                 }
  //             }
  //         });
  //     } else {
  //         this.getDataSubjects().forEach(person => {
  //             if (this.isPersonChecked(person) && person.roles.toString().includes(category_name) || person.faculty == category_name || category_name == "Alle") {
  //                 this.deleteTmpSelectedPerson(person)
  //             }
  //         });
  //     }
  // }
  // getSelectedPersonTypes() {
  //     if (this.selectedProcessing != "") {
  //         return this.getProcessings().find((p) => { return p.proc_name == this.selectedProcessing }).proc_roles
  //     }
  //     return []
  // }
  /**
   * Returns true or false if a category is checked or unchecked.
   *
   * @param {string} category_name Name of the category.
   * @return {boolean} true when this.selectedPerson includes all persons of this category.
   */
  isCategoryChecked(category_name) {
    let tmp = true;
    this.getInternalDataSubjects().forEach(person => {
      if (person.roles.toString().includes(category_name) || person.faculty == category_name || category_name == "Alle") {
        if (this.isPersonChecked(person) == false) {
          tmp = false;
        }
      }
    });
    return tmp;
  }
  /**
    * @description Adds an external Person to the list of selected data subjects.
    *
    */
  addExternalDataSubject() {
    // Set some properties:
    this.formNewExternalDataSubject.dataSubject.full_name =
      this.formNewExternalDataSubject.dataSubject.first_name + " " + this.formNewExternalDataSubject.dataSubject.last_name;
    // Add to selection:
    this.formModalSelectedDataSubjects =
      this.addDataSubjectIfNotExist(this.formNewExternalDataSubject, this.formModalSelectedDataSubjects);
    this.formNewExternalDataSubject = VODataSubjectSelect.fromDataSubject(new EDataSubject(), "EXTERNAL");
  }
  /**
    * @description Adds an data subject category to the list of selected data subjects.
    *
    */
  addDataSubjectCategory() {
    // Add to selection:
    this.formModalSelectedDataSubjects =
      this.addDataSubjectIfNotExist(this.formNewUnknownDataSubject, this.formModalSelectedDataSubjects);
    this.formNewUnknownDataSubject = VODataSubjectSelect.fromDataSubjectCategory(new EDataSubjectCategory(""));
  }
  /**
   * Adds the person_id of the person to this.favoredPersons.
   *
   * @param {MouseEvent} e Mouse Event from the checkbox.
   * @param {person} person Person object to be favored.
   */
  addFavoritePerson(e, person) {
    if (e.target.checked) {
      if (this.favoriteDataSubjects.includes(person.id)) {
        let tmp = this.favoriteDataSubjects.filter((p) => { return p.person.id != person.id; });
        this.favoriteDataSubjects = tmp;
      }
      else {
        this.favoriteDataSubjects.push(person.id);
      }
    }
    else {
      this.favoriteDataSubjects.push(person.id);
    }
  }
  /**
   * Returns true or false if a person is favored or not.
   *
   * @param {person} person Person object.
   * @return {boolean} true when this.favoredPersons includes person.
   */
  isFavoritePerson(person) {
    return this.favoriteDataSubjects.includes(person.id);
  }
  /**
   *
   * @returns Returns an array of data subjects sorted by name.
   */
  getInternalDataSubjects(filtered) {
    let dataSubjects = state.dbEDataSubjects.filter(ds => ds.type === "INTERNAL");
    if (filtered) {
      // filter faculties:
      if (this.filterFacultyDataSubject && this.filterFacultyDataSubject.length > 0) {
        dataSubjects = dataSubjects.filter((ds) => {
          return this.filterFacultyDataSubject.includes(ds.faculty);
        });
      }
      // filter roles:
      if (this.filterRoleDataSubjects && this.filterRoleDataSubjects.length > 0) {
        dataSubjects = dataSubjects.filter((ds) => {
          let isIncluded = false;
          for (let index = 0; index < ds.roles.length; index++) {
            if (this.filterRoleDataSubjects.includes(ds.roles[index])) {
              isIncluded = true;
            }
          }
          return isIncluded;
        });
      }
      // text search: 
      if (this.searchStringDataSubjects) {
        this.searchStringDataSubjects.split(" ").forEach((searchString) => {
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
  /**
   * Returns an array with all elements from roles and faculty.
   *
   * @return {[string,...]} Array with all categories.
   */
  getPersonCategories() {
    let categories = [];
    this.getInternalDataSubjects().forEach(person => {
      person.roles.forEach(stelle => {
        if (!categories.includes(stelle)) {
          categories.push(stelle);
        }
      });
      if (!categories.includes(person.faculty)) {
        categories.push(person.faculty);
      }
    });
    return categories;
  }
  /**
 * Returns an array with all elements from faculty
 *
 * @return {[string,...]} Array with all faculties.
 */
  getPersonFaculties() {
    let faculties = [];
    this.getInternalDataSubjects().forEach(person => {
      if (!faculties.includes(person.faculty)) {
        faculties.push(person.faculty);
      }
    });
    return faculties.sort((a, b) => {
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    });
  }
  /**
* Returns an array with all elements from faculty
*
* @return {[string,...]} Array with all faculties.
*/
  getPersonRoles() {
    let roles = [];
    this.getInternalDataSubjects().forEach(person => {
      person.roles.forEach(stelle => {
        if (!roles.includes(stelle)) {
          roles.push(stelle);
        }
      });
    });
    return roles;
  }
  /* STENCIL LIFECYCLE METHODS */
  componentWillLoad() {
    this.filterRoleDataSubjects = this.getPersonRoles();
    this.filterFacultyDataSubject = this.getPersonFaculties();
    this.selectedDataSubjects = this.preselectedDataSubjects;
  }
  componentWillRender() {
  }
  render() {
    return (h("div", null, h("div", { class: "container-flex" }, h("div", { class: "row w-100 m-0" }, h("div", { class: "col-12" }, h("h6", { class: "font-weight-light" }, "Betroffene Personen \u00A0\u00A0", this.selectedDataSubjects.length > 0 ?
      h("span", { class: "badge badge-secondary" }, this.selectedDataSubjects.length, " ausgew\u00E4hlt") : ""))), h("div", { class: "row w-100 m-0" }, h("div", { class: "col-12 data-basket-scroll-list-col text-center" }, this.selectedDataSubjects.length > 0 ?
      h("ul", { class: "list-group list-group-flush data-basket-scroll-list" }, this.selectedDataSubjects.map((dataSubjectSelect) => h("li", { class: "list-group-item list-group-item-action pl-0" }, dataSubjectSelect.type === "INDIVIDUAL" ?
        h("div", { class: "row p-0" }, h("div", { class: "col-2 text-center" }, h("i", { class: "fas fa-portrait fa-2x align-middle" })), h("div", { class: "col-6 p-0", title: "Name der betroffenen Person" }, h("span", { class: "align-middle" }, dataSubjectSelect.dataSubject.last_name, ", ", dataSubjectSelect.dataSubject.first_name)), h("div", { class: "col-3 p-0" }, dataSubjectSelect.dataSubject.type === "INTERNAL" ?
          "" :
          h("span", { class: "badge badge-info", title: "Externe Person, die nicht der Organisation angeh\u00F6rt." }, "Extern")), h("div", { class: "col-1 p-0" }, h("button", { type: "button", class: "btn close", title: "Aus Auswahl entfernen", onClick: () => {
            this.selectedDataSubjects =
              this.removeDataSubjectIfExist(dataSubjectSelect, this.selectedDataSubjects);
          } }, h("span", { "aria-hidden": "true" }, "\u00D7"))))
        :
          h("div", { class: "row p-0" }, h("div", { class: "col-2 text-center" }, h("i", { class: "fas fa-users fa-2x align-middle" })), h("div", { class: "col-6 p-0", title: "Name der Gruppe von betroffenen Personen" }, h("span", { class: "align-middle" }, dataSubjectSelect.dataSubjectCategory.friendlyName)), h("div", { class: "col-3  p-0" }, h("span", { class: "badge badge-info", title: "Dies ist eine unbestimmte oder unbekannte Gruppe von betroffenen Personen" }, "Unbestimmte Gruppe")), h("div", { class: "col-1 p-0" }, h("button", { type: "button", class: "btn close", title: "Aus Auswahl entfernen", onClick: () => {
              this.selectedDataSubjects =
                this.removeDataSubjectIfExist(dataSubjectSelect, this.selectedDataSubjects);
            } }, h("span", { "aria-hidden": "true" }, "\u00D7")))))))
      :
        h("div", { class: "d-flex align-items-center justify-content-center w-100 h-100" }, h("button", { class: "btn btn-light border w-50 h-50 text-secondary", onClick: () => {
            this.formModalSelectedDataSubjects = JSON.parse(JSON.stringify(this.selectedDataSubjects));
            this.modalEditDataSubjects.toggleAttribute("open");
          }, title: "Betroffene Personen hinzuf\u00FCgen" }, h("i", { class: "far fa-plus-square fa-3x" }), h("br", null), "Hinzuf\u00FCgen")))), h("div", { class: "row w-100 mt-auto m-0" }, h("div", { class: "col-12" }, h("div", { class: "btn-group d-flex", role: "group" }, h("button", { class: "btn btn-outline-primary btn-sm w-100", onClick: () => {
        this.formModalSelectedDataSubjects = JSON.parse(JSON.stringify(this.selectedDataSubjects));
        this.modalEditDataSubjects.toggleAttribute("open");
      }, title: "Weitere betroffene Personen hinzuf\u00FCgen oder die Auswahl \u00E4ndern." }, "+ Hinzuf\u00FCgen / \u00C4ndern"), h("button", { type: "button", title: "Alle entfernen", class: "btn btn-outline-danger btn-sm w-20", onClick: () => {
        this.searchStringDataSubjects = "";
        this.filterNameDataSubjects = "A-Z";
        this.filterRoleDataSubjects = [];
        this.filterFacultyDataSubject = [];
        this.selectedDataSubjects = [];
      } }, h("i", { class: "fas fa-trash" })))))), h("trusd-com-modal-window", { class: "data-subject-select", ref: (el) => this.modalEditDataSubjects = el }, h("span", { slot: "modal-title" }, "Betroffene Personen zur Auswahl hinzuf\u00FCgen"), h("div", { slot: "modal-content" }, h("ul", { class: "nav nav-tabs" }, h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formModalTabPane === "INTERNAL" ? " active" : ""), onClick: () => this.formModalTabPane = "INTERNAL" }, "Hochschulangeh\u00F6rige")), this.mode === "ALL" ?
      h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formModalTabPane === "EXTERNAL" ? " active" : ""), onClick: () => this.formModalTabPane = "EXTERNAL" }, "Externe Personen")) : "", this.mode === "ALL" ?
      h("li", { class: "nav-item" }, h("a", { href: "#", class: "nav-link" + (this.formModalTabPane === "UNKNOWN" ? " active" : ""), onClick: () => this.formModalTabPane = "UNKNOWN" }, "Unbestimmte oder unbekannte Personen")) : ""), h("div", { class: "tab-content data-subject-select-modal-tab" }, h("div", { class: "tab-pane container" + (this.formModalTabPane === "INTERNAL" ? " active" : ""), id: "data-subject-select-modal-tab-internal" }, h("div", { class: "row" }, h("div", { class: "col-12 pt-3" }, h("p", { class: "lead" }, "Falls Sie die personenbezogenen Daten von einer Person an der Hochschule ben\u00F6tigen, k\u00F6nnen Sie diese hier ausw\u00E4hlen.")), h("div", { class: "col-12" }, h("input", { class: "form-control", id: "person_search", type: "search", placeholder: "Suche", onInput: (ev) => this.searchStringDataSubjects = ev.target.value }))), h("div", { class: "row" }, h("div", { class: "col" }, h("div", { class: "person-table" }, h("table", { class: "table table-hover table-sm" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "align-middle" }, h("input", { type: "checkbox", onClick: (ev) => {
        this.getInternalDataSubjects(true).forEach((ds) => {
          if (ev.target.checked) {
            this.formModalSelectedDataSubjects =
              this.addDataSubjectIfNotExist(VODataSubjectSelect.fromDataSubject(ds, "INTERNAL"), this.formModalSelectedDataSubjects);
          }
          else {
            this.formModalSelectedDataSubjects =
              this.removeDataSubjectIfExist(VODataSubjectSelect.fromDataSubject(ds, "INTERNAL"), this.formModalSelectedDataSubjects);
          }
        });
      } })), h("th", { scope: "col" }), h("th", { scope: "col", class: "align-middle" }, h("div", { class: "d-flex justify-content-between align-items-center" }, h("div", null, "Name"), h("div", null, this.filterNameDataSubjects === "A-Z" ?
      h("button", { type: "button", class: "btn btn-outline-secondary btn-sm dropdown-toggle-split", onClick: () => this.filterNameDataSubjects = "Z-A" }, h("i", { class: "fas fa-sort-alpha-down" })) :
      h("button", { type: "button", class: "btn btn-outline-secondary btn-sm dropdown-toggle-split", onClick: () => this.filterNameDataSubjects = "A-Z" }, h("i", { class: "fas fa-sort-alpha-up" }))))), h("th", { scope: "col" }, h("div", { class: "d-flex justify-content-between align-items-center" }, h("div", null, "Rolle"), h("div", null, h("button", { type: "button", class: "btn btn-outline-secondary btn-sm dropdown-toggle-split", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("small", { title: "Filtern und sortieren" }, h("i", { class: "fas fa-filter" }))), h("div", { class: "dropdown-menu" }, h("div", { class: "container" }, h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "checkbox", checked: this.filterRoleDataSubjects.length == this.getPersonRoles().length, onChange: () => this.filterRoleDataSubjects.length == this.getPersonRoles().length ?
        this.filterRoleDataSubjects = [] :
        this.filterRoleDataSubjects = this.getPersonRoles() }), h("label", { class: "form-check-label", htmlFor: "defaultCheck1", style: { fontWeight: "normal" } }, "Alle")), this.getPersonRoles().map((role) => h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "checkbox", checked: this.filterRoleDataSubjects.includes(role), onChange: () => this.filterRoleDataSubjects.includes(role) ?
        this.filterRoleDataSubjects = this.filterRoleDataSubjects.filter(r => r !== role) :
        this.filterRoleDataSubjects = [...this.filterRoleDataSubjects, role] }), h("label", { class: "form-check-label", htmlFor: "defaultCheck1", style: { fontWeight: "normal" } }, role)))))))), h("th", { scope: "col" }, h("div", { class: "d-flex justify-content-between align-items-center" }, h("div", null, "Fakult\u00E4t / Hochschuleinheit"), h("div", null, h("button", { type: "button", class: "btn btn-outline-secondary btn-sm dropdown-toggle-split", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("small", { title: "Filtern und sortieren" }, h("i", { class: "fas fa-filter" }))), h("div", { class: "dropdown-menu" }, h("div", { class: "container" }, h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "checkbox", checked: this.filterFacultyDataSubject.length == this.getPersonFaculties().length, onChange: () => this.filterFacultyDataSubject.length == this.getPersonFaculties().length ?
        this.filterFacultyDataSubject = [] :
        this.filterFacultyDataSubject = this.getPersonFaculties() }), h("label", { class: "form-check-label", htmlFor: "defaultCheck1", style: { fontWeight: "normal" } }, "Alle")), this.getPersonFaculties().map((faculty) => h("div", { class: "form-check" }, h("input", { class: "form-check-input", type: "checkbox", checked: this.filterFacultyDataSubject.includes(faculty), onChange: () => this.filterFacultyDataSubject.includes(faculty) ?
        this.filterFacultyDataSubject = this.filterFacultyDataSubject.filter(r => r !== faculty) :
        this.filterFacultyDataSubject = [...this.filterFacultyDataSubject, faculty] }), h("label", { class: "form-check-label", htmlFor: "defaultCheck1", style: { fontWeight: "normal" } }, faculty)))))))))), h("tbody", null, this.getInternalDataSubjects(true).map((dataSubject) => h("tr", { class: this.formModalSelectedDataSubjects.find(sds => sds.type === "INDIVIDUAL" && sds.dataSubject.id === dataSubject.id) ? "table-primary" : "", onClick: () => this.onChangedCheckedDataSubjectModal(dataSubject) }, h("td", null, h("div", null, h("input", { type: "checkbox", checked: this.formModalSelectedDataSubjects.find(sds => sds.type === "INDIVIDUAL" && sds.dataSubject.id === dataSubject.id) ? true : false }))), h("td", null, h("i", { class: "fas fa-portrait" })), h("td", null, dataSubject.last_name, ", ", dataSubject.first_name, " ", dataSubject.title && dataSubject.title.trim() !== "" ? "(" + dataSubject.title.trim() + ")" : ""), h("td", null, dataSubject.roles), h("td", null, dataSubject.faculty))))))))), h("div", { class: "tab-pane container" + (this.formModalTabPane === "EXTERNAL" ? " active" : ""), id: "data-subject-select-modal-tab-external" }, h("div", { class: "row" }, h("div", { class: "col-12 pt-3" }, h("p", { class: "lead" }, "Falls Sie die personenbezogenen Daten von einer Person ben\u00F6tigen, die ", h("b", null, "nicht"), " der Hochschule angeh\u00F6rt, k\u00F6nnen Sie diese hier hinzuf\u00FCgen.", h("br", null), "Ihre Anfrage kann sp\u00E4ter an die angegebene E-Mail Adresse versendet werden.")), h("div", { class: "col-12" }, h("div", { class: "card card-body" }, h("div", { class: "form-row pb-2" }, h("div", { class: "col-4" }, h("input", { type: "text", class: "form-control", value: this.formNewExternalDataSubject.dataSubject.first_name, placeholder: "Vorname", "aria-label": "Vorname", onInput: ev => {
        this.formNewExternalDataSubject = Object.assign(Object.assign({}, this.formNewExternalDataSubject), { dataSubject: Object.assign(Object.assign({}, this.formNewExternalDataSubject.dataSubject), { first_name: ev.target.value }) });
      } })), h("div", { class: "col-4" }, h("input", { type: "text", class: "form-control", value: this.formNewExternalDataSubject.dataSubject.last_name, placeholder: "Nachname", "aria-label": "Nachname", onInput: ev => {
        this.formNewExternalDataSubject = Object.assign(Object.assign({}, this.formNewExternalDataSubject), { dataSubject: Object.assign(Object.assign({}, this.formNewExternalDataSubject.dataSubject), { last_name: ev.target.value }) });
      } })), h("div", { class: "col-4" }, h("input", { type: "email", class: "form-control", value: this.formNewExternalDataSubject.dataSubject.email, placeholder: "E-Mail-Adresse", "aria-label": "E-Mail-Adresse", onInput: ev => {
        this.formNewExternalDataSubject = Object.assign(Object.assign({}, this.formNewExternalDataSubject), { dataSubject: Object.assign(Object.assign({}, this.formNewExternalDataSubject.dataSubject), { email: ev.target.value }) });
      } }))), h("button", { type: "button", disabled: this.formNewExternalDataSubject.dataSubject.first_name === "" || this.formNewExternalDataSubject.dataSubject.last_name === "" || this.formNewExternalDataSubject.dataSubject.email === "", onClick: () => this.addExternalDataSubject(), class: "btn btn-sm btn-primary float-right", "aria-expanded": "false", "aria-controls": "collapseExample" }, h("i", { class: "fas fa-angle-double-down" }), " Hinzuf\u00FCgen"))), h("div", { class: "w-100" }, h("ul", { class: "list-group list-group-flush data-basket-modal-scroll-list" }, this.formModalSelectedDataSubjects
      .filter(sds => sds.type === "INDIVIDUAL" && sds.dataSubject.type === "EXTERNAL")
      .map((dataSubjectSelect) => h("li", { class: "list-group-item" }, h("div", { class: "row" }, h("div", { class: "col-6", title: "Name der betroffenen Person" }, h("i", { class: "fas fa-portrait fa2" }), " ", dataSubjectSelect.dataSubject.last_name, ", ", dataSubjectSelect.dataSubject.first_name, " (", dataSubjectSelect.dataSubject.email, ")"), h("div", { class: "col d-flex justify-content-end" }, h("button", { type: "button", class: "btn close", title: "Aus Auswahl entfernen", onClick: () => {
        this.formModalSelectedDataSubjects =
          this.removeDataSubjectIfExist(dataSubjectSelect, this.formModalSelectedDataSubjects);
      } }, h("span", { "aria-hidden": "true" }, "\u00D7")))))))))), h("div", { class: "tab-pane container" + (this.formModalTabPane === "UNKNOWN" ? " active" : ""), id: "data-subject-select-modal-tab-external" }, h("div", { class: "row" }, h("div", { class: "col-12 pt-3" }, h("p", { class: "lead" }, "Falls Ihnen die konkreten betroffenen Personen ", h("b", null, "unbekannt"), " sind, k\u00F6nnen Sie diese hier als Personengruppe beschreiben und hinzuf\u00FCgen.")), h("div", { class: "col-12" }, h("div", { class: "card card-body" }, h("div", { class: "form-row pb-2" }, h("div", { class: "col-12" }, h("input", { type: "text", class: "form-control", value: this.formNewUnknownDataSubject.dataSubjectCategory.friendlyName, placeholder: "z.B.: Bewerber/innen " + ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"][(new Date()).getMonth()] + " " + (new Date()).getFullYear(), "aria-label": "Name der Personengruppe", onInput: ev => {
        this.formNewUnknownDataSubject = Object.assign(Object.assign({}, this.formNewUnknownDataSubject), { dataSubjectCategory: Object.assign(Object.assign({}, this.formNewUnknownDataSubject.dataSubjectCategory), { friendlyName: ev.target.value }) });
      } }))), h("button", { type: "button", disabled: this.formNewUnknownDataSubject.dataSubjectCategory.friendlyName === "", onClick: () => this.addDataSubjectCategory(), class: "btn btn-sm btn-primary float-right", "aria-expanded": "false", "aria-controls": "collapseExample" }, h("i", { class: "fas fa-angle-double-down" }), " Hinzuf\u00FCgen"))), h("div", { class: "w-100" }, h("ul", { class: "list-group list-group-flush data-basket-modal-scroll-list" }, this.formModalSelectedDataSubjects
      .filter(sds => sds.type === "GROUP")
      .map(dataSubjectSelect => h("li", { class: "list-group-item" }, h("div", { class: "row" }, h("div", { class: "col-6", title: "Name der betroffenen Person" }, h("i", { class: "fas fa-users fa-2x" }), " ", dataSubjectSelect.dataSubjectCategory.friendlyName), h("div", { class: "col d-flex justify-content-end" }, h("button", { type: "button", class: "btn close", title: "Aus Auswahl entfernen", onClick: () => {
        this.formModalSelectedDataSubjects =
          this.removeDataSubjectIfExist(dataSubjectSelect, this.formModalSelectedDataSubjects);
      } }, h("span", { "aria-hidden": "true" }, "\u00D7")))))))))))), h("div", { slot: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", onClick: () => {
        // reset temporary selection:
        this.formModalSelectedDataSubjects = JSON.parse(JSON.stringify(this.selectedDataSubjects));
        this.modalEditDataSubjects.toggleAttribute("open");
      } }, language.btnCancel), "\u00A0", h("button", { type: "button", class: "btn btn-primary", onClick: () => {
        // store temporary selection as current selection:
        this.selectedDataSubjects = JSON.parse(JSON.stringify(this.formModalSelectedDataSubjects));
        this.modalEditDataSubjects.toggleAttribute("open");
      } }, language.btnSave)))));
  }
  static get watchers() { return {
    "selectedDataSubjects": ["onChangeSelectedDataSubjects"]
  }; }
};
PIISelect.style = comDataBasketSelectDataAndSubjectsCss;

export { PIISelect as trusd_piiq_com_data_basket_data_subject_select };
