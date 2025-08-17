import { r as registerInstance, h } from './index-dee1f973.js';
import { d as dist } from './index-de766dcc.js';
import './Panel-41601129.js';
import './Icons-85d4abff.js';
import './animate-55fc3ba3.js';
import './i18n-defaults-dca87248.js';
import './slim-arrow-right-08785783.js';
import './Button-7dc82d4c.js';
import './TitleLevel-a10fe215.js';

const comLawfulnessIconCss = "";

const ComLawfulnessIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
  }
  componentDidRender() {
  }
  render() {
    return (h("div", null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.A ?
      h("div", { "data-toggle": "tooltip", "data-placement": "right", title: "(DSGVO Art. 6 (1) a)" }, "Einwilligung")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.B ?
      h("div", { "data-toggle": "tooltip", "data-placement": "right", title: "(DSGVO Art. 6 (1) b)" }, "Erf\u00FCllung eines Vertrags")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.C ?
      h("div", { "data-toggle": "tooltip", "data-placement": "right", title: "(DSGVO Art. 6 (1) c)" }, "Rechtliche Verpflichtung")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.D ?
      h("div", { "data-toggle": "tooltip", "data-placement": "right", title: "(DSGVO Art. 6 (1) d)" }, "Lebenswichtige Interessen")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.E ?
      h("div", { "data-toggle": "tooltip", "data-placement": "right", title: "(DSGVO Art. 6 (1) e)" }, "H\u00F6here Gewalt")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.F ?
      h("div", { "data-toggle": "tooltip", "data-placement": "right", title: "(DSGVO Art. 6 (1) f)" }, "Berechtigte Interessen")
      : null));
  }
};
ComLawfulnessIcon.style = comLawfulnessIconCss;

export { ComLawfulnessIcon as trusd_piiq_com_lawfulness_simple_text };
