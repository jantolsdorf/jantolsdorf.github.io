class Activity {
  constructor({ activity_type, activity_date, created_person = "", changed_person = "", changed_description = "", consent_data = "", consent_person = "", consent_state = false, data_name = "", data_author = "", data_person_name = "", message_from = "", message_to = "" }) {
    this.activity_type = activity_type;
    this.activity_date = activity_date;
    this.created_person = created_person;
    this.changed_person = changed_person;
    this.changed_description = changed_description;
    this.consent_data = consent_data;
    this.consent_person = consent_person;
    this.consent_state = consent_state;
    this.data_name = data_name;
    this.data_author = data_author;
    this.data_person_name = data_person_name;
    this.message_from = message_from;
    this.message_to = message_to;
  }
}
var EnumActivityType;
(function (EnumActivityType) {
  EnumActivityType["CREATED"] = "CREATED";
  EnumActivityType["CHANGED"] = "CHANGED";
  EnumActivityType["CONSENT"] = "CONSENT";
  EnumActivityType["DATA"] = "DATA";
  EnumActivityType["MESSAGE"] = "MESSAGE";
})(EnumActivityType || (EnumActivityType = {}));
class VOActivityLog {
  constructor() {
    this.activities = [];
  }
  addCreated(person) {
    this.activities.push(new Activity({
      activity_type: EnumActivityType.CREATED, activity_date: new Date().getTime().toString(),
      created_person: person
    }));
  }
  addChange(person, description) {
    this.activities.push(new Activity({
      activity_type: EnumActivityType.CHANGED, activity_date: new Date().getTime().toString(),
      changed_person: person, changed_description: description
    }));
  }
  addConsent(person, data, state) {
    this.activities.push(new Activity({
      activity_type: EnumActivityType.CONSENT, activity_date: new Date().getTime().toString(),
      consent_person: person, consent_data: data, consent_state: state
    }));
  }
  addData(author, person, data) {
    this.activities.push(new Activity({
      activity_type: EnumActivityType.DATA, activity_date: new Date().getTime().toString(),
      data_author: author, data_name: data, data_person_name: person
    }));
  }
  addMessage(from, to) {
    this.activities.push(new Activity({
      activity_type: EnumActivityType.MESSAGE, activity_date: new Date().getTime().toString(),
      message_from: from, message_to: to
    }));
  }
}

export { EnumActivityType as E, VOActivityLog as V };
