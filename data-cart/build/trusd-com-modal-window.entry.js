import { r as registerInstance, h } from './index-dee1f973.js';

const comModalWindowCss = ".overlay.sc-trusd-com-modal-window{opacity:0;visibility:hidden !important;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.42);display:flex;align-items:center;justify-content:center}.is-visible.sc-trusd-com-modal-window{opacity:1;visibility:visible !important;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;z-index:1000}.is-transparent.sc-trusd-com-modal-window{opacity:0}.modal-window.sc-trusd-com-modal-window{background:white;border-radius:2px;display:flex;align-items:center;justify-content:center;padding:10px}.modal-window__content.sc-trusd-com-modal-window{width:100%;height:100%}button.close.sc-trusd-com-modal-window{font-size:xx-large}.modal.sc-trusd-com-modal-window .modal-dialog.sc-trusd-com-modal-window{max-width:890px}";

const ModalWindow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
  }
  onOpenToggled() {
    this.toggleModal.click();
  }
  componentWillLoad() {
    this.id = (Math.floor(Math.random() * 1000000000)).toString();
  }
  render() {
    return (h("div", null, h("button", { ref: (el) => this.toggleModal = el, "data-toggle": "modal", "data-target": "#modal-" + this.id, hidden: true }), h("div", { class: "modal fade", id: "modal-" + this.id, tabindex: "-1", role: "dialog", "aria-labelledby": "modal-label-" + this.id, "aria-hidden": "true" }, h("div", { class: "modal-dialog", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: "modal-label-" + this.id }, h("slot", { name: "modal-title" })), h("button", { type: "button", class: "close", "data-dismiss": "modal", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("slot", { name: "modal-content" })), h("div", { class: "modal-footer" }, h("slot", { name: "modal-footer" })))))));
  }
  static get watchers() { return {
    "open": ["onOpenToggled"]
  }; }
};
ModalWindow.style = comModalWindowCss;

export { ModalWindow as trusd_com_modal_window };
