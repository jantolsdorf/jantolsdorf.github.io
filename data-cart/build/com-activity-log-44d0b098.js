import { r as registerInstance, h } from './index-dee1f973.js';
import { l as language } from './de-DE-5564f65b.js';
import { V as VOActivityLog, E as EnumActivityType } from './VOActivityLog-8bcd31ab.js';

const comActivityLogCss = "body.sc-trusd-piiq-com-activity-log{background-color:#eee}.mt-70.sc-trusd-piiq-com-activity-log{margin-top:70px}.mb-70.sc-trusd-piiq-com-activity-log{margin-bottom:70px}.card.sc-trusd-piiq-com-activity-log{box-shadow:0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);border-width:0;transition:all .2s}.card.sc-trusd-piiq-com-activity-log{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(26, 54, 126, 0.125);border-radius:.25rem}.card-body.sc-trusd-piiq-com-activity-log{flex:1 1 auto;padding:1.25rem}.scroll-area.sc-trusd-piiq-com-activity-log{overflow-x:hidden;height:400px}.vertical-timeline.sc-trusd-piiq-com-activity-log{width:100%;position:relative;padding:1.5rem 0 1rem}.vertical-timeline.sc-trusd-piiq-com-activity-log::before{content:'';position:absolute;top:0;left:67px;height:100%;width:4px;background:#e9ecef;border-radius:.25rem}.vertical-timeline-element.sc-trusd-piiq-com-activity-log{position:relative;margin:0 0 1rem}.vertical-timeline--animate.sc-trusd-piiq-com-activity-log .vertical-timeline-element-icon.bounce-in.sc-trusd-piiq-com-activity-log{visibility:visible;animation:cd-bounce-1 .8s}.vertical-timeline-element-icon.sc-trusd-piiq-com-activity-log{position:absolute;top:0;left:60px}.vertical-timeline-element-icon.sc-trusd-piiq-com-activity-log .badge-dot-xl.sc-trusd-piiq-com-activity-log{box-shadow:0 0 0 5px #fff}.badge-dot-xl.sc-trusd-piiq-com-activity-log{width:18px;height:18px;position:relative}.badge.sc-trusd-piiq-com-activity-log:empty{display:none}.badge-dot-xl.sc-trusd-piiq-com-activity-log::before{content:'';width:10px;height:10px;border-radius:.25rem;position:absolute;left:50%;top:50%;margin:-5px 0 0 -5px;background:#fff}.vertical-timeline-element-content.sc-trusd-piiq-com-activity-log{position:relative;margin-left:90px;font-size:.8rem}.vertical-timeline-element-content.sc-trusd-piiq-com-activity-log .timeline-title.sc-trusd-piiq-com-activity-log{font-size:.8rem;text-transform:uppercase;margin:0 0 .5rem;padding:2px 0 0;font-weight:bold}.vertical-timeline-element-content.sc-trusd-piiq-com-activity-log .vertical-timeline-element-date.sc-trusd-piiq-com-activity-log{display:block;position:absolute;left:-90px;top:15px;padding-right:10px;text-align:right;color:#adb5bd;font-size:.6619rem;white-space:nowrap}.vertical-timeline-element-content.sc-trusd-piiq-com-activity-log .vertical-timeline-element-time.sc-trusd-piiq-com-activity-log{display:block;position:absolute;left:-90px;top:0;padding-right:10px;text-align:right;color:#adb5bd;font-size:.7619rem;white-space:nowrap}.vertical-timeline-element-content.sc-trusd-piiq-com-activity-log:after{content:\"\";display:table;clear:both}.fa.sc-trusd-piiq-com-activity-log{font-size:1.119rem;padding-left:1px;color:#006cd8;text-shadow:1px 1px 3px rgba(0,0,0,0.2)}";

const ComActivityLog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getActivites() {
    this.activities = new VOActivityLog();
    this.activities.addCreated("Heinz Schaf");
    this.activities.addChange("Abba Bemlott", "Beschreibung geändert");
    this.activities.addChange("Abba Bemlott", "Frist geändert");
    this.activities.addConsent("Kristyn Bettlestone", "Berufliche Kontakte", true);
    this.activities.addConsent("Kristyn Bettlestone", "Fax-Nummer", false);
    this.activities.addConsent("Kerwin Spriggin", "Gehalt", true);
    this.activities.addData("Selle Gabbatiss", "Selle Gabbatiss", "Digitale Unterschrift");
    this.activities.addMessage("Heinz Schaf", "Kristyn Bettlestone");
    this.activities.addMessage("Heinz Schaf", "Kerwin Spriggin");
    this.activities.addMessage("Heinz Schaf", "Selle Gabbatiss");
  }
  orderActivities() {
    //this.getActivites()
    this.activities.activities.sort((x, y) => {
      if (x.activity_date > y.activity_date) {
        return 1;
      }
      if (x.activity_date < y.activity_date) {
        return -1;
      }
      return 0;
    });
    this.activities.activities.reverse();
    return this.activities;
  }
  componentWillRender() {
    console.log(this.activities);
  }
  render() {
    return (h("div", null, h("h5", { class: "card-title" }, "Ereignis\u00FCbersicht"), h("div", { class: "scroll-area" }, h("div", { class: "vertical-timeline vertical-timeline--animate vertical-timeline--one-column" }, this.orderActivities().activities.map((a) => h("div", { class: "vertical-timeline-item vertical-timeline-element" }, h("div", null, " ", h("span", { class: "vertical-timeline-element-icon bounce-in" }, a.activity_type == EnumActivityType.CREATED ? h("i", { class: "fa fa-plus-square " }, " ") : "", a.activity_type == EnumActivityType.CHANGED ? h("i", { class: "fa fa-edit " }, " ") : "", a.activity_type == EnumActivityType.CONSENT && a.consent_state == true ? h("i", { class: "fa fa-thumbs-up " }, " ") : "", a.activity_type == EnumActivityType.CONSENT && a.consent_state == false ? h("i", { class: "fa fa-thumbs-down " }, " ") : "", a.activity_type == EnumActivityType.DATA ? h("i", { class: "fa fa-database" }, " ") : "", a.activity_type == EnumActivityType.MESSAGE ? h("i", { class: "fa fa-envelope" }, " ") : ""), h("div", { class: "vertical-timeline-element-content bounce-in" }, h("p", null, h("b", null, a.activity_type == EnumActivityType.CREATED ? a.created_person + language.activityCreated : "", a.activity_type == EnumActivityType.CHANGED ? language.activityChangedBeforeName + a.changed_person + language.activityChangedBeforeName : "", a.activity_type == EnumActivityType.CONSENT && a.consent_state == true ? a.consent_person + language.activityConsentTrue : "", a.activity_type == EnumActivityType.CONSENT && a.consent_state == false ? a.consent_person + language.activityConsentFalse : "", a.activity_type == EnumActivityType.DATA ? language.activityDataBeforeName + a.data_person_name + language.activityDataAfterName : "", a.activity_type == EnumActivityType.MESSAGE ? language.activityMessageFor + a.message_to : "")), h("p", null, a.activity_type == EnumActivityType.CHANGED ? a.changed_description : "", a.activity_type == EnumActivityType.CONSENT && a.consent_state == true ? a.consent_data + language.activityFrom + a.consent_person + language.activityConsentFalseText : "", a.activity_type == EnumActivityType.CONSENT && a.consent_state == false ? a.consent_data + language.activityFrom + a.consent_person + language.activityConsentFalseText : "", a.activity_type == EnumActivityType.DATA ? a.data_author + language.activityHas + a.data_name + language.activityFrom + a.data_person_name + language.activityAdded : "", a.activity_type == EnumActivityType.MESSAGE ? language.activityMessageFrom + a.message_from + language.activityFor + a.message_to + "." : ""), h("span", { class: "vertical-timeline-element-time" }, (new Date(Number.parseFloat(a.activity_date))).toLocaleTimeString()), h("span", { class: "vertical-timeline-element-date" }, (new Date(Number.parseFloat(a.activity_date))).toLocaleDateString())))))))));
  }
};
ComActivityLog.route = "/datenkoerbe/:datenkorbId/log";
ComActivityLog.style = comActivityLogCss;

export { ComActivityLog as C };
