import { r as registerInstance, h } from './index-dee1f973.js';

const trusdComTooltipCss = "span.sc-trusd-tooltip{background:var(--bodyLight, #444);font-size:11px;color:#fff;padding:5px;border-radius:3px;font-weight:600;position:relative;display:inline-block;font-family:-apple-system, BlinkMacSystemFont, Arial, Helvetica, sans-serif}span.sc-trusd-tooltip:before{content:\"\";position:absolute;width:0;height:0}.top.sc-trusd-tooltip:before,.bottom.sc-trusd-tooltip:before{border-left:4px solid transparent;border-right:4px solid transparent;left:50%;transform:translateX(-2px)}.top.sc-trusd-tooltip:before{top:-4px;border-bottom:4px solid var(--bodyLight, #444)}.bottom.sc-trusd-tooltip:before{bottom:-4px;border-top:4px solid var(--bodyLight, #444)}.right.sc-trusd-tooltip:before,.left.sc-trusd-tooltip:before{top:7px;border-top:4px solid transparent;border-bottom:4px solid transparent}.right.sc-trusd-tooltip:before{right:-4px;border-left:4px solid var(--bodyLight, #444)}.left.sc-trusd-tooltip:before{left:-4px;border-right:4px solid var(--bodyLight, #444)}.error.sc-trusd-tooltip{background-color:var(--danger, #f44)}.error.top.sc-trusd-tooltip:before{border-bottom-color:var(--danger, #f44)}.error.right.sc-trusd-tooltip:before{border-left-color:var(--danger, #f44)}.error.bottom.sc-trusd-tooltip:before{border-top-color:var(--danger, #f44)}.error.left.sc-trusd-tooltip:before{border-right-color:var(--danger, #f44)}";

const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Arrow position */
    this.arrow = "left";
    /** Set error state  */
    this.error = false;
    /** Set text */
    this.text = "Component";
  }
  render() {
    return (h("span", { class: `${this.error ? "error" : ""} ${this.arrow ? this.arrow : ""}` }, this.text));
  }
};
Tooltip.style = trusdComTooltipCss;

export { Tooltip as trusd_tooltip };
