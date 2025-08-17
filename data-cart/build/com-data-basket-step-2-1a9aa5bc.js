import { r as registerInstance, i as createEvent, h, g as getElement } from './index-dee1f973.js';
import './DatePicker-7ba473c2.js';
import './MultiComboBox-28b17a8b.js';
import { l as language } from './de-DE-5564f65b.js';
import { s as state, e as e_data_subjects } from './store-9032fc40.js';
import { g as getParentDataCategories } from './utils-8ebcd8ca.js';

const comDataBasketPermissionStep2Css = ".sc-trusd-piiq-com-data-basket-permission-step-2-h{display:block}.personal-data-query-views.sc-trusd-piiq-com-data-basket-permission-step-2{height:300px;margin-bottom:10px;overflow:scroll;-webkit-overflow-scrolling:touch}*.sc-trusd-piiq-com-data-basket-permission-step-2{text-align:left}.star.sc-trusd-piiq-com-data-basket-permission-step-2{visibility:hidden;cursor:pointer;font-size:20px;right:0;margin-right:10px;top:5px;left:auto}.star.sc-trusd-piiq-com-data-basket-permission-step-2:before{content:\"\\2606\";position:absolute;visibility:visible}.star.sc-trusd-piiq-com-data-basket-permission-step-2:checked:before{content:\"\\2605\";position:absolute}.calDayContainer.sc-trusd-piiq-com-data-basket-permission-step-2{bottom:100%}.person-table.sc-trusd-piiq-com-data-basket-permission-step-2{height:200px;overflow:auto}#exTab2.sc-trusd-piiq-com-data-basket-permission-step-2 h3.sc-trusd-piiq-com-data-basket-permission-step-2{color:white;background-color:#428bca;padding:5px 15px}";

const TESTDATA = [
  {
    proc_id: 1,
    proc_name: "Forschungsantrag",
    proc_roles: [
      {
        proc_role_id: 1,
        proc_role_name: "Antragstellender Professor"
      },
      {
        proc_role_id: 2,
        proc_role_name: "Mitarbeitender Professor"
      },
      {
        proc_role_id: 3,
        proc_role_name: "Wissenschaftlicher Mitarbeiter"
      },
      {
        proc_role_id: 4,
        proc_role_name: "Technischer Mitarbeiter"
      },
      {
        proc_role_id: 5,
        proc_role_name: "Wissenschaftliche Hilfskraft"
      }
    ]
  },
  {
    proc_id: 2,
    proc_name: "Forschungsmonitoring",
    proc_roles: [
      {
        proc_role_id: 1,
        proc_role_name: "Verantwortlicher Professor"
      },
      {
        proc_role_id: 2,
        proc_role_name: "Forschende Person"
      },
      {
        proc_role_id: 3,
        proc_role_name: "Verantwortlicher Wissenschaftlicher Mitarbeiter"
      }
    ]
  },
  {
    proc_id: 3,
    proc_name: "Interne Veranstaltung",
    proc_roles: [
      {
        proc_role_id: 1,
        proc_role_name: "Organisator"
      },
      {
        proc_role_id: 2,
        proc_role_name: "Referent"
      },
      {
        proc_role_id: 3,
        proc_role_name: "Teilnemende Person"
      }
    ]
  }
];
const DataPersonSelectPermission = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.completed = createEvent(this, "completed", 7);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.selectedDataCategory = "";
    this.selectedData = [];
    this.searchTerms = [];
    /**
     * @description: Stores the data templates.
     * @example: [{template_name: "Vorlage1", template_data: {...}}]
     */
    this.dataTemplates = [];
    /**
     * @description: Stores unsaved Person - Data Tuples
     */
    this.tmpDataSets = [];
    this.dataSets = [];
    /**
     * @description: Array of the person_ids from favored persons
     */
    this.favoredPersons = [];
    this.editActive = false;
    this.selectedProcessing = "";
    /**
     * @description: The full name of the selectet person category.
     * @example Professor
     */
    this.selectedPersonCategorie = "Alle";
    /**
     * @description: Search string entered by the User in the person search.
     * @example Hein
     */
    this.seachString = "";
    /**
     * @description: saves the value of templateSelect before editing.
     * @example Vorlage1
     */
    this.selectedTemplateBeforeEdit = "";
    /**
     * @description Sets whether all contacts in a table selected.
     */
    this.isPersonTableSelectAll = false;
  }
  getProcessings() {
    return TESTDATA;
  }
  /**
   *
   * @returns An array with different categories of data
   */
  getHigherOrderCategoriesOfCategoriesOfData() {
    let data = getParentDataCategories(state.dbEDataCategory);
    // sort alphabetically:
    data = data.sort(function (a, b) {
      if (a.friendlyName < b.friendlyName)
        return -1;
      if (b.friendlyName > a.friendlyName)
        return 1;
      return 0;
    });
    return data;
  }
  getSelectedData() {
    return this.selectedData;
  }
  addSelectedDataCategory(dataCategory) {
    if (this.selectedData.find(d => d.id.value === dataCategory.id.value))
      return;
    this.selectedData = [...this.selectedData, dataCategory];
  }
  removeSelectedDataCategory(dataCategory) {
    if (!this.selectedData.find(d => d.id.value == dataCategory.id.value))
      return;
    this.selectedData = this.selectedData.filter(d => d.id.value !== dataCategory.id.value);
  }
  /**
   *
   * @returns Returns an array of different persons.
   */
  getPersons() {
    var data = [];
    // add the persons:
    e_data_subjects.forEach((el) => {
      el.person_name = el.first_name + " " + el.last_name;
      el.person_fakultaet = { id: 1, name: "Wirtschaftswissenschaften" }; // TODO: add other faculties
      el.person_stelle = ['Professor'];
      data.push(el);
    });
    // sort alphabetically:
    return data.sort(function (a, b) {
      if (a.person_name < b.person_name)
        return -1;
      if (b.person_name > a.person_name)
        return 1;
      return 0;
    });
  }
  /**
   * Returns an array with all elements form person_stelle and person_fakultaet.name.
   *
   * @return {[string,...]} Array with all categories.
   */
  getPersonCategories() {
    let categories = ['Alle'];
    this.getPersons().forEach(person => {
      person.person_stelle.forEach(stelle => {
        if (!categories.includes(stelle)) {
          categories.push(stelle);
        }
      });
      if (!categories.includes(person.person_fakultaet.name)) {
        categories.push(person.person_fakultaet.name);
      }
    });
    return categories;
  }
  /**
 * Returns an array with all elements form person_fakultaet.name
 *
 * @return {[string,...]} Array with all faculties.
 */
  getPersonFaculties() {
    let faculties = ['Alle'];
    this.getPersons().forEach(person => {
      if (!faculties.includes(person.person_fakultaet.name)) {
        faculties.push(person.person_fakultaet.name);
      }
    });
    return faculties;
  }
  /**
* Returns an array with all elements form person_fakultaet.name
*
* @return {[string,...]} Array with all faculties.
*/
  getPersonRoles() {
    let roles = ['Alle'];
    this.getPersons().forEach(person => {
      person.person_stelle.forEach(stelle => {
        if (!roles.includes(stelle)) {
          roles.push(stelle);
        }
      });
    });
    return roles;
  }
  /**
   *
   * @returns An array containing the individual categories of data linked to a higher order category.
   */
  getCategoriesOfData() {
    // get data categories without parent categories
    var data = state.dbEDataCategory.filter(edc => getParentDataCategories(state.dbEDataCategory)
      .find(pdc => pdc.id.value === edc.id.value) ?
      false : true);
    // sort alphabetically:
    data = data.sort(function (a, b) {
      if (a.friendlyName < b.friendlyName)
        return -1;
      if (b.friendlyName > a.friendlyName)
        return 1;
      return 0;
    });
    return data;
  }
  appendDataSet(person) {
    if (typeof person != "undefined") {
      if (this.tmpDataSets.filter((d) => { return d.person.person_id == person.person_id; }).length == 0) {
        this.tmpDataSets = [...this.tmpDataSets, { person: person, data: this.selectedData, id: Math.random().toString(36).substr(2, 9) }];
      }
      else {
        for (let d of this.tmpDataSets) {
          if (d.person.person_id == person.person_id) {
            d.pii = [...this.selectedData];
          }
        }
        //this.dataSets= [... this.dataSets.find((ds)=>{return ds.person_id == person_id}).data=this.selectedData]
      }
    }
  }
  getPersonById(id) {
    return this.getPersons().find((p) => { return p.person_id == id; }).person_name;
  }
  deleteTmpSelectedPerson(person) {
    let tmp = this.tmpDataSets.filter((ds) => { return ds.person.person_id != person.person_id; });
    this.tmpDataSets = [...tmp];
  }
  deleteSelectedPerson(person) {
    let tmp = this.dataSets.filter((ds) => { return ds.person.person_id != person.person_id; });
    this.dataSets = [...tmp];
  }
  /**
   * Adds the person to this.selectedPerson and runs this.appendDataSet(person_id) or removes the person if it was already checked.
   *
   * @param {MouseEvent} e Mouse Event from the checkbox.
   * @param {number} person_id ID of the person to be checked.
   */
  checkPerson(e, person) {
    if (e.target.checked) {
      this.appendDataSet(person);
    }
    else {
      this.deleteTmpSelectedPerson(person);
    }
  }
  /**
   * Returns true or false if a person is checked or unchecked.
   *
   * @param {number} person_id ID of the person.
   * @return {boolean} true when this.tmpDataSets includes person id
   */
  isPersonChecked(person) {
    let isChecked = false;
    this.tmpDataSets.forEach(ds => {
      if (ds.person.person_id == person.person_id) {
        isChecked = true;
      }
    });
    return isChecked;
  }
  /**
   * Adds the all persons of a category to this.selectedPerson and runs this.appendDataSet(person_id) or removes the persons if the category was already checked.
   *
   * @param {MouseEvent} e Mouse Event from the checkbox.
   * @param {string} category_name Name of the category to be checked.
   */
  checkCategory(e, category_name) {
    if (e.target.checked) {
      this.getPersons().forEach(person => {
        if (person.person_stelle.toString().includes(category_name) || person.person_fakultaet.name == category_name || category_name == "Alle") {
          if (!this.isPersonChecked(person)) {
            this.appendDataSet(person);
          }
        }
      });
    }
    else {
      this.getPersons().forEach(person => {
        if (this.isPersonChecked(person) && person.person_stelle.toString().includes(category_name) || person.person_fakultaet.name == category_name || category_name == "Alle") {
          this.deleteTmpSelectedPerson(person);
        }
      });
    }
  }
  /**
   * Adds the person_id of the person to this.favoredPersons.
   *
   * @param {MouseEvent} e Mouse Event from the checkbox.
   * @param {person} person Person object to be favored.
   */
  favorPerson(e, person) {
    if (e.target.checked) {
      if (this.favoredPersons.includes(person.person_id)) {
        let tmp = this.favoredPersons.filter((p) => { return p.person.person_id != person.person_id; });
        this.favoredPersons = tmp;
      }
      else {
        this.favoredPersons.push(person.person_id);
      }
    }
    else {
      this.favoredPersons.push(person.person_id);
    }
  }
  /**
   * Returns true or false if a category is checked or unchecked.
   *
   * @param {string} category_name Name of the category.
   * @return {boolean} true when this.selectedPerson includes all persons of this category.
   */
  isCategoryChecked(category_name) {
    let tmp = true;
    this.getPersons().forEach(person => {
      if (person.person_stelle.toString().includes(category_name) || person.person_fakultaet.name == category_name || category_name == "Alle") {
        if (this.isPersonChecked(person) == false) {
          tmp = false;
        }
      }
    });
    return tmp;
  }
  /**
   * Returns true or false if a person is favored or not.
   *
   * @param {person} person Person object.
   * @return {boolean} true when this.favoredPersons includes person.
   */
  isPersonFavored(person) {
    return this.favoredPersons.includes(person.person_id);
  }
  activateSet(set) {
    this.selectedDataSet = set;
    this.selectedDataBeforeEdit = this.selectedData;
    this.selectedData = [...set['data']];
  }
  activateEditMode() {
    this.editActive = true;
    this.selectedTemplateBeforeEdit = document.getElementById('templateSelect').value;
    document.getElementById('templateSelect').value = "0";
  }
  deactivateEditMode() {
    this.appendDataSet(this.selectedDataSet.person);
    this.selectedData = this.selectedDataBeforeEdit;
    this.selectedDataBeforeEdit = null;
    this.selectedDataSet = null;
    this.editActive = false;
    document.getElementById('templateSelect').value = this.selectedTemplateBeforeEdit;
  }
  getSelectedPersonTypes() {
    if (this.selectedProcessing != "") {
      return this.getProcessings().find((p) => { return p.proc_name == this.selectedProcessing; }).proc_roles;
    }
    return [];
  }
  /**
    * Adds an external Person to the list of selected Data
    *
    */
  addExternPerson() {
    let vorname = document.getElementById('vorname').value;
    let nachname = document.getElementById('nachname').value;
    let email_adresse = document.getElementById('email-adresse').value;
    let person = {
      person_email_adresse: email_adresse,
      person_name: vorname + " " + nachname,
      person_id: '_' + Math.random().toString(36).substr(2, 9)
    };
    let data_email = {
      data_name: 'E-Mail-Adresse',
    };
    let data = [...this.selectedData, data_email];
    if (this.tmpDataSets.filter((d) => { return d.person.person_name == person.person_name; }).length == 0) {
      this.tmpDataSets = [...this.tmpDataSets, { person: person, data: data, id: Math.random().toString(36).substr(2, 9) }];
    }
    else {
      for (let d of this.tmpDataSets) {
        if (d.person.person_name == person.person_name) {
          d.pii = [...data];
        }
      }
    }
    document.getElementById('vorname').value = '';
    document.getElementById('nachname').value = '';
    document.getElementById('email-adresse').value = '';
  }
  /**
   * merges the temporary data sets with the final data sets
   */
  saveTmpDataSets() {
    let date = document.getElementById('dataDatePicker').value;
    if (date == "") {
      date = "latest";
    }
    if (this.tmpDataSets != null && this.tmpDataSets.length > 0) {
      this.tmpDataSets.forEach(set => {
        set.data.forEach(data => {
          data.data_date = date;
        });
        if (this.dataSets.length == 0) {
          this.dataSets = [...this.dataSets, set];
        }
        else {
          if (this.dataSets.filter((s) => { return s.person.person_name == set.person.person_name; }).length == 0) {
            this.dataSets = [...this.dataSets, set];
          }
          else {
            let tmp = this.dataSets.find((s) => { return s.person.person_name == set.person.person_name; }).data;
            set.data.forEach(data => {
              var isAdd = true;
              tmp.forEach(data_old => {
                if (data.data_name == data_old.data_name) {
                  if (data.data_date == data_old.data_date) {
                    isAdd = false;
                  }
                }
              });
              if (isAdd) {
                tmp = [...tmp, data];
              }
            });
            this.dataSets.find((s) => { return s.person.person_name == set.person.person_name; }).pii = tmp;
          }
        }
      });
      this.tmpDataSets = [];
      this.selectedData = [];
    }
  }
  /**
   * saves this.selectedData as new template
   */
  saveDataTemplate() {
    let name = document.getElementById('dataTemplateName').value;
    let template = {
      template_name: name,
      template_data: [...this.selectedData]
    };
    this.dataTemplates.push(template);
    document.getElementById('dataTemplateName').value = "";
  }
  componentWillRender() {
  }
  render() {
    return (h("div", { class: "container-fluid" }, h("div", { class: "card" }, h("div", { class: "card-body" }, h("div", { class: "row border pt-2" }, h("div", { class: "col border-right" }, h("h5", null, "Schnellauswahl"), h("ul", { class: "list-group personal-data-query-views border-start border-end rounded" }, this.getHigherOrderCategoriesOfCategoriesOfData().map((dataCategory) => h("a", { href: "javascript:void(0);", onClick: () => this.selectedDataCategory = dataCategory.id.value, class: "list-group-item list-group-item-action d-flex justify-content-between align-items-center" }, dataCategory.friendlyName)))), h("div", { class: "col" }, h("h5", null, "Alle"), h("ul", { class: "list-group personal-data-query-views border-start border-end rounded border-0" }, this.getCategoriesOfData().map((dataCategory) => h("li", { class: "list-group-item" }, h("input", { class: "form-check-input pr-1 me-1", type: "checkbox", onClick: (ev) => ev.target.checked ?
        this.addSelectedDataCategory(dataCategory) :
        this.removeSelectedDataCategory(dataCategory), checked: this.selectedData.find((el) => el.id.value === dataCategory.id.value) ? true : false, "aria-label": "..." }), dataCategory.friendlyName)))), h("div", { class: "col shadow p-2 mb-3 bg-white rounded" }, h("h5", { class: "font-weight-light" }, "Auswahl", this.selectedDataSet && this.editActive ? " für " + this.selectedDataSet.person.person_name : ""), h("ul", { class: "list-group list-group-flush personal-data-query-views data-result border-0" }, this.getSelectedData().map((d) => h("li", { class: "list-group-item d-flex justify-content-between align-items-center" }, d.friendlyName, h("button", { type: "button", onClick: () => this.removeSelectedDataCategory(d), class: "btn close", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))))), h("select", { id: "templateSelect", class: "form-control", onChange: (e) => this.selectedData = this.dataTemplates.find((dT) => { return dT.template_name == e.target['value']; }).template_data }, h("option", { selected: true, disabled: true, value: "0" }, "Daten Vorlage w\u00E4hlen"), this.dataTemplates.map((dT) => h("option", { value: dT.template_name }, dT.template_name))), h("div", { class: "card" }, !this.editActive ?
      h("button", { type: "button", class: "btn btn-primary btn-sm", disabled: this.selectedData.length < 1, "data-toggle": "modal", "data-target": '#Modal_NewTemplate' }, "Auswahl als Vorlage speichern") : "", this.editActive ?
      h("button", { class: "btn btn-primary ", onClick: () => this.deactivateEditMode() }, "Speichern") : ""))), h("div", { class: "modal fade", id: 'Modal_NewTemplate', tabindex: "-1", role: "dialog", "aria-labelledby": 'Modal_NewTemplateTitle', "aria-hidden": "true" }, h("div", { class: "modal-dialog modal-dialog-centered", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: 'Modal_NewTemplateTitle' }, "Neue Datenvorlage"), h("button", { type: "button", class: "btn close", "data-dismiss": "modal", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("div", { class: "input-group mb-3" }, h("input", { id: "dataTemplateName", type: "text", class: "form-control", placeholder: "Name", "aria-label": "Name" })), h("button", { onClick: () => this.saveDataTemplate(), class: "btn btn-primary float-right", type: "button", "data-dismiss": "modal" }, "Hinzuf\u00FCgen"))))), h("div", { class: "row border pt-2" }, h("div", { class: "col-12" }, h("h5", null, "1.3 Auswahl betroffener Personen")), h("div", { class: "col-12" }, "Von wem ben\u00F6tigen Sie die ausgew\u00E4hlten personenbezogenen Daten?"), h("div", { class: "row" }, h("div", { class: "col-12" }, h("input", { class: "form-control", id: "person_search", type: "search", placeholder: "Suche", onKeyUp: () => this.seachString = document.getElementById('person_search').value })), h("div", { class: "col-4" }, h("label", null, "Fakult\u00E4t / Hochschuleinheit"), h("ui5-multi-combobox", { "onSelection-change": () => alert("TODO: implement filter") }, this.getPersonFaculties().map((faculty) => h("ui5-mcb-item", { text: faculty, selected: faculty === "Alle" ? true : null }, "Professor")))), h("div", { class: "col-4" }, h("label", null, "Rolle"), h("br", null), h("ui5-multi-combobox", { "onSelection-change": () => alert("TODO: implement filter") }, this.getPersonRoles().map((role) => h("ui5-mcb-item", { text: role, selected: role === "Alle" ? true : null })))), h("div", { class: "col-4" }, h("label", null, "Standort"), h("br", null), h("ui5-multi-combobox", { "onSelection-change": () => alert("TODO: implement filter") }, this.getPersonRoles().map((role) => h("ui5-mcb-item", { text: role, selected: role === "Alle" ? true : null })))))), h("div", { class: "row border pt-2" }, h("div", { class: "col" }, h("div", { class: "person-table" }, h("table", { class: "table table-hover table-sm" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, h("input", { type: "checkbox", disabled: this.editActive || this.selectedData.length == 0, onClick: () => alert("TODO"), "aria-label": "..." })), h("th", { scope: "col" }, "Name"), h("th", { scope: "col" }, "Fakult\u00E4t / Hochschuleinheit"))), h("tbody", null, this.getPersons().filter((c) => { return (c.person_stelle.includes(this.selectedPersonCategorie) || c.person_fakultaet.name == this.selectedPersonCategorie || this.selectedPersonCategorie == "Alle") && (c.person_name.toLowerCase().includes(this.seachString.toLowerCase()) || ((c.person_fakultaet.name).toLowerCase().includes(this.seachString.toLowerCase()) || (c.person_stelle.toString().toLowerCase().includes(this.seachString.toLowerCase())))); }).map((p) => h("tr", null, h("td", null, h("div", null, h("input", { type: "checkbox", disabled: this.editActive || this.selectedData.length == 0, onClick: (e) => this.checkPerson(e, p), checked: this.isPersonChecked(p), "aria-label": "..." }))), h("td", null, p.person_name, " (", p.person_title, ")"), h("td", null, p.person_fakultaet.name)))))))), h("div", null, h("p", null, h("button", { class: "btn btn-primary float-right", type: "button", "data-toggle": "collapse", "data-target": "#collapseExample", "aria-expanded": "false", "aria-controls": "collapseExample" }, h("i", { class: "fas fa-user-plus" }), " Externe Person Hinzuf\u00FCgen")), h("div", { class: "collapse", id: "collapseExample" }, h("div", { class: "card card-body " }, h("div", { class: "input-group mb-3" }, h("input", { id: "vorname", type: "text", class: "form-control", placeholder: "Vorname", "aria-label": "Vorname" })), h("div", { class: "input-group mb-3" }, h("input", { id: "nachname", type: "text", class: "form-control", placeholder: "Nachname", "aria-label": "Nachname" })), h("div", { class: "input-group mb-3" }, h("input", { id: "email-adresse", type: "email", class: "form-control", placeholder: "E-Mail-Adresse", "aria-label": "E-Mail-Adresse" })), h("button", { onClick: () => this.addExternPerson(), class: "btn btn-primary float-right", type: "button", "data-toggle": "collapse", "data-target": "#collapseExample", "aria-expanded": "false", "aria-controls": "collapseExample" }, "Hinzuf\u00FCgen")))), h("div", { class: "row mt-5" }, h("h4", { class: "font-weight-light" }, "Ausgew\u00E4hlte Daten und Personen")), h("div", { class: "row mt-4 d-flex justify-content-between" }, h("h5", { class: "font-weight-light" }, "Tempor\u00E4re Auswahl")), h("div", { class: "row" }, this.tmpDataSets.length > 0 ?
      h("ul", { class: "list-group w-100" }, this.tmpDataSets.map((s) => h("div", null, h("li", { class: "list-group-item list-group-item-action d-flex justify-content-between align-items-center " }, h("div", { class: "col" }, s.person.person_name), h("div", { class: "col" }, h("span", { class: "badge badge-light float-left", "data-toggle": "tooltip", "data-placement": "right", title: s.person.person_name }, "Gew\u00E4hlte Daten: ", s.data.length)), h("div", { class: "col" }, h("div", { class: "d-flex justify-content-end" }, h("button", { type: "button", class: "btn btn-outline-secondary btn-sm", "data-toggle": "modal", "data-target": '#Modal_' + s.id }, "Info"), h("button", { type: "button", onClick: () => { this.activateSet(s); this.activateEditMode(); }, class: "btn btn-outline-secondary btn-sm" }, "Bearbeiten"), h("button", { type: "button", class: "btn btn-outline-secondary btn-sm", "data-toggle": "modal", "data-target": "#exampleModalCenter" }, "Historie"), h("button", { type: "button", onClick: () => this.deleteTmpSelectedPerson(s.person), class: "btn close", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))))), h("div", { class: "modal fade", id: 'Modal_' + s.id, tabindex: "-1", role: "dialog", "aria-labelledby": 'Modal_' + s.id + 'Title', "aria-hidden": "true" }, h("div", { class: "modal-dialog modal-dialog-centered", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: 'Modal_' + s.id + 'Title' }, s.person.person_name), h("button", { type: "button", class: "btn close", "data-dismiss": "modal", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("ul", null, s.data.map((d) => h("li", null, d.data_name))))))))))
      :
        h("p", { class: "text-center font-italic w-100" }, "Bitte Daten ausw\u00E4hlen und einer Person zuordnen")), h("div", { class: "row" }, h("div", { class: "card card-body" }, h("div", { class: "form-inline" }, h("div", { class: "input-group" }, h("label", { htmlFor: "dataDatePicker", class: "col-form-label mr-2 font-weight-light" }, "Version der Daten:"), h("ui5-date-picker", { id: "dataDatePicker", placeholder: "MM JJJJ", "format-pattern": 'MM yyyy' }))), h("button", { class: "btn btn-primary", type: "button", onClick: () => this.saveTmpDataSets() }, "Speichern"))), h("div", { class: "row mt-5" }, h("h5", { class: "font-weight-light" }, "Finale Auswahl")), h("div", { class: "row" }, this.dataSets.length > 0 ?
      h("ul", { class: "list-group w-100" }, this.dataSets.map((s) => h("div", null, h("li", { class: "list-group-item list-group-item-action d-flex justify-content-between align-items-center " }, h("div", { class: "col" }, s.person.person_name), h("div", { class: "col" }, h("span", { class: "badge badge-light float-left", "data-toggle": "tooltip", "data-placement": "right", title: s.person.person_name }, "Gew\u00E4hlte Daten: ", s.data.length)), h("div", { class: "col" }, h("div", { class: "d-flex justify-content-end" }, h("button", { type: "button", class: "btn btn-outline-secondary btn-sm", "data-toggle": "modal", "data-target": '#Modal__' + s.id }, "Info"), h("button", { type: "button", class: "btn btn-outline-secondary btn-sm", "data-toggle": "modal", "data-target": "#exampleModalCenter" }, "Historie"), h("button", { type: "button", onClick: () => this.deleteSelectedPerson(s.person), class: "btn close", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))))), h("div", { class: "modal fade", id: 'Modal__' + s.id, tabindex: "-1", role: "dialog", "aria-labelledby": 'Modal__' + s.id + 'Title', "aria-hidden": "true" }, h("div", { class: "modal-dialog modal-dialog-centered", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: 'Modal__' + s.id + 'Title' }, s.person.person_name), h("button", { type: "button", class: "btn close", "data-dismiss": "modal", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("ul", null, s.data.map((d) => h("li", null, d.data_name, " (", d.data_date != "latest" ? d.data_date : "aktuellste", ")"))))))))))
      :
        h("p", { class: "text-center font-italic w-100" }, "Bitte tempor\u00E4re Auswahl speichern")), h("div", { class: "modal fade", id: "exampleModalCenter", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalCenterTitle", "aria-hidden": "true" }, h("div", { class: "modal-dialog modal-dialog-centered", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: "exampleModalLongTitle" }, "Historie"), h("button", { type: "button", class: "btn close", "data-dismiss": "modal", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("table", { class: "table table-hover" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, "#"), h("th", { scope: "col" }, "Vorgang"), h("th", { scope: "col" }, "Datum"), h("th", { scope: "col" }, "Status"))), h("tbody", null, h("tr", null, h("th", { scope: "row" }, "1"), h("td", null, "Einstellung"), h("td", null, "01.02.2005"), h("td", null, "Abgeschlossen")), h("tr", null, h("th", { scope: "row" }, "2"), h("td", null, "Forschungsantrag"), h("td", null, "20.03.2007"), h("td", null, "Abgeschlossen")), h("tr", null, h("th", { scope: "row" }, "3"), h("td", null, "Vertragsverl\u00E4ngerung"), h("td", null, "03.02.2010"), h("td", null, "Abgeschlossen"))))), h("div", { class: "modal-footer" })))), h("div", { class: "row pt-3" }, h("div", { class: "col d-flex flex-row-reverse bd-highlight" }, h("button", { onClick: () => this.completed.emit({ dataSets: this.dataSets, processing: this.selectedProcessing }), type: "button", class: "btn btn-success float-right", disabled: this.dataSets.length < 1, "data-toggle": "collapse", "data-target": ".multi-collapse", "aria-expanded": "true", "aria-controls": "collapseOne collapseTwo" }, language.btnNext)))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "selectedData": ["getSelectedData"]
  }; }
};
DataPersonSelectPermission.route = "/vorlagen/datenkorb";
DataPersonSelectPermission.style = comDataBasketPermissionStep2Css;

export { DataPersonSelectPermission as D };
