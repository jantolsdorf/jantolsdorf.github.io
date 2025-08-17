import { r as registerInstance, h, g as getElement } from './index-dee1f973.js';
import './Wizard-1f8d8d07.js';
import './Title-cbf0fa30.js';
import './Assets-3df9fab1.js';
import { l as language } from './de-DE-5564f65b.js';
import { s as state } from './store-9032fc40.js';

const wizardCss = ".sc-trusd-piiq-com-wizard-h{display:block}";

const WizardUI = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description: Pass a prefix that is ignored by the router.
     * @example /ignorethis/
     */
    this.baseUrl = "";
    this.update = 0;
    this.componentDidLoad = false;
  }
  onWizardUpdated() {
    state.wizard = this.wizard;
  }
  getStep(idx) {
    return Array.from(this.ui5WizardElement.children)[idx];
  }
  selectStep() {
    Array.from(this.ui5WizardElement.children).forEach((step) => {
      step.selected = false;
      step.disabled = true;
    });
    const step = this.getStep(this.wizard.step); // where "step" is an instance of ui5-wizard-step
    step.selected = true;
    step.disabled = false;
  }
  componentWillLoad() {
    // load wizard from store if available:
    if (!this.wizard && state.wizard)
      this.wizard = state.wizard;
    // create new wizard if none in the store:
    if (!this.wizard)
      this.wizard = { step: 0 };
  }
  componentDidRender() {
    this.selectStep();
  }
  /**
   *
   * @param step the wizard step {1, 2, 3}
   * @returns The HTML to render.
   */
  getStepRender(step) {
    switch (step) {
      case 1:
        if (this.wizard.step == 0) {
          return (h("trusd-piiq-com-data-basket-step-1", { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, dataBasket: this.wizard.dataBasket, onCompleted: (ev) => this.wizard = Object.assign(Object.assign({}, this.wizard), { dataBasket: ev.detail, step: 1 }) }));
        }
        else {
          return (h("div", null));
        }
      case 2:
        if (this.wizard.step == 1) {
          return (h("trusd-piiq-com-data-basket-step-2", { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, dataBasket: this.wizard.dataBasket, onCompleted: (ev) => this.wizard = Object.assign(Object.assign({}, this.wizard), { dataBasket: ev.detail, step: 2 }), onBack: () => this.wizard = Object.assign(Object.assign({}, this.wizard), { step: 0 }) }));
        }
        else {
          return (h("div", null));
        }
      case 3:
        if (this.wizard.step == 2) {
          return (h("trusd-piiq-com-data-basket-step-3", { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, dataBasket: this.wizard.dataBasket, onCompleted: (ev) => this.wizard = Object.assign(Object.assign({}, this.wizard), { dataBasket: ev.detail, step: 3 }), onBack: () => this.wizard = Object.assign(Object.assign({}, this.wizard), { step: 1 }) }));
        }
        else {
          return (h("div", null));
        }
      case 4:
        if (this.wizard.step == 3) {
          return (h("trusd-piiq-com-data-basket-import-edit", { HostBasePath: this.HostBasePath, baseUrl: this.baseUrl, dataBasket: this.wizard.dataBasket }));
        }
        else {
          return (h("div", null));
        }
      default:
        break;
    }
  }
  render() {
    return (h("div", { class: "container" }, h("ui5-wizard", { id: "wiz", ref: (el) => this.ui5WizardElement = el }, h("ui5-wizard-step", { icon: "product", heading: language.wizardTitleStep1, selected: true }, this.getStepRender(1)), h("ui5-wizard-step", { icon: "multiselect-none", heading: language.wizardTitleStep2, disabled: true }, this.getStepRender(2)), h("ui5-wizard-step", { icon: "multiselect-none", heading: language.wizardTitleStep3, disabled: true }, this.getStepRender(3)), h("ui5-wizard-step", { icon: "approvals", heading: language.wizardTitleStep4, disabled: true }, this.getStepRender(4)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "wizard": ["onWizardUpdated"]
  }; }
};
WizardUI.route = "/vorlagen/datenkorb/new";
WizardUI.style = wizardCss;

export { WizardUI as W };
