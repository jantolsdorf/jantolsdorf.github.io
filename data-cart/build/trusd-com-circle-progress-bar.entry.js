import { r as registerInstance, h } from './index-dee1f973.js';

const trusdComCircleProgressBarCss = ".circle.sc-trusd-com-circle-progress-bar{position:relative;display:block;background-color:transparent;color:#222;text-align:center;border-radius:50%}.circle.sc-trusd-com-circle-progress-bar:after{display:block;padding-bottom:100%;width:100%;height:0;border-radius:50%;content:\"\"}.circle__inner.sc-trusd-com-circle-progress-bar{position:absolute;background-color:white;border-radius:50%;top:5%;bottom:0;left:5%;width:90%;height:90%}.circle__wrapper.sc-trusd-com-circle-progress-bar{display:table;width:100%;height:100%}.circle__content.sc-trusd-com-circle-progress-bar{display:table-cell;padding:.5em;vertical-align:middle}.label.sc-trusd-com-circle-progress-bar{text-align:center}";

var progressBarTypeEnum;
(function (progressBarTypeEnum) {
  progressBarTypeEnum["percent"] = "percent";
  progressBarTypeEnum["fraction"] = "fraction";
})(progressBarTypeEnum || (progressBarTypeEnum = {}));
const ComCircleProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.Type = "fraction";
    this.progressAmount = "50";
    /**
     * @description The color of the progress bar as HTML color code.
     */
    this.ProgressColor = "#2ecc71";
  }
  componentWillRender() {
  }
  componentDidRender() {
  }
  render() {
    return (h("div", null, h("div", { class: "row" }, h("div", { class: "col " }), h("div", { class: "col-6" }, h("div", { class: "circle", style: { background: `conic-gradient(${this.ProgressColor} ${100 * this.ProgressCurrent / this.ProgressMax}%, 0, #ecf0f1 ${100 - (100 * this.ProgressCurrent / this.ProgressMax)}%)` } }, h("div", { class: "circle__inner" }, h("div", { class: "circle__wrapper" }, h("div", { class: "circle__content" }, h("small", null, this.Type == progressBarTypeEnum.fraction ?
      `${this.ProgressCurrent} / ${this.ProgressMax}` : null, this.Type == progressBarTypeEnum.percent ?
      `${(100 * this.ProgressCurrent / this.ProgressMax)}%` : null)))))), h("div", { class: "col" })), h("div", { class: "row" }, h("div", { class: "col label" }, h("small", null, " ", this.Label, " ")))));
  }
};
ComCircleProgressBar.style = trusdComCircleProgressBarCss;

export { ComCircleProgressBar as trusd_com_circle_progress_bar };
