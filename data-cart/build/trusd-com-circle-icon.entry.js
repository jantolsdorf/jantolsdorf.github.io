import { r as registerInstance, h } from './index-dee1f973.js';

const trusdComCircleIconCss = ".circle.sc-trusd-com-circle-icon{position:relative;display:block;background-color:transparent;color:#222;text-align:center;border-radius:50%}.circle.sc-trusd-com-circle-icon:after{display:block;padding-bottom:100%;width:100%;height:0;border-radius:50%;content:\"\"}.circle__inner.sc-trusd-com-circle-icon{position:absolute;background-color:white;border-radius:50%;top:5%;bottom:0;left:5%;width:90%;height:90%}.circle__wrapper.sc-trusd-com-circle-icon{display:table;width:100%;height:100%}.circle__content.sc-trusd-com-circle-icon{display:table-cell;vertical-align:middle}.label.sc-trusd-com-circle-icon{text-align:center}";

const ComCircleIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @description The color of the progress bar as HTML color code.
     */
    this.BGCOLOR = "#2ecc71";
  }
  componentWillRender() {
  }
  componentDidRender() {
  }
  render() {
    return (h("div", null, h("div", { class: "circle", style: { background: this.BGCOLOR } }, h("div", { class: "circle__inner" }, h("div", { class: "circle__wrapper" }, h("div", { class: "circle__content" }, h("slot", { name: "icon" })))))));
  }
};
ComCircleIcon.style = trusdComCircleIconCss;

export { ComCircleIcon as trusd_com_circle_icon };
