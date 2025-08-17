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
      h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, h("span", { class: 'fas fa-vote-yea fa-1x' }), " Einwilligung (DSGVO Art. 6 (1) a)"), "\"Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten f\u00FCr einen oder mehrere bestimmte Zwecke gegeben;\"")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.B ?
      h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, h("span", { class: 'fas fa-file-contract fa-1x' }), " Erf\u00FCllung eines Vertrags (DSGVO Art. 6 (1) b)"), "\"die Verarbeitung ist f\u00FCr die Erf\u00FCllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchf\u00FChrung vorvertraglicher Ma\u00DFnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen;\"")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.C ?
      h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, h("span", { class: 'fas fa-gavel fa-1x' }), " rechtliche Verpflichtung (DSGVO Art. 6 (1) c)"), "\"die Verarbeitung ist zur Erf\u00FCllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt;\" [Art. 6 1 c) DSGVO]")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.D ?
      h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, h("span", { class: 'fas fa-life-ring fa-1x' }), " lebenswichtige Interessen (DSGVO Art. 6 (1) d)"), "\"die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen nat\u00FCrlichen Person zu sch\u00FCtzen;\" [Art. 6 1 d) DSGVO]")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.E ?
      h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, h("span", { class: 'fas fa-fist-raised fa-1x' }), " h\u00F6here Gewalt (DSGVO Art. 6 (1) e)"), "\"die Verarbeitung ist f\u00FCr die Wahrnehmung einer Aufgabe erforderlich, die im \u00F6ffentlichen Interesse liegt oder in Aus\u00FCbung \u00F6ffentlicher Gewalt erfolgt, die dem Verantwortlichen \u00FCbertragen wurde;\" [Art. 6 1 e) DSGVO]")
      : null, this.Lawfulness.type == dist.VOLawfulnessTypeEnum.F ?
      h("ui5-panel", { collapsed: true }, h("div", { slot: "header" }, h("span", { class: 'fas fa-balance-scale-right fa-1x' }), " berechtigten Interessen (DSGVO Art. 6 (1) f)"), "\"die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, \u00FCberwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt.\" [Art. 6 1 f) DSGVO]")
      : null));
  }
};
ComLawfulnessIcon.style = comLawfulnessIconCss;

export { ComLawfulnessIcon as trusd_piiq_com_lawfulness_icon };
