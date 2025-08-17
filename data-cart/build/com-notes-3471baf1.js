import { r as registerInstance, h } from './index-dee1f973.js';

const comNotesCss = ".sc-com-notes-h{display:block}";

const ComNotes = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.edited_by = this.getNote().edited_by;
    this.last_edited = this.getNote().last_edited;
    this.tmpNote = "";
  }
  getNote() {
    this.note = {
      "note": "Das ist eine Notiz um die Funktion zu testen",
      "last_edited": "2021-06-10 10:59",
      "edited_by": "Herrmann Schaf",
      "isEditable": true
    };
    return this.note;
  }
  safeNote(note) {
    this.note.note = note;
    this.note.edited_by = this.getPersonName();
    this.note.last_edited = this.getFormatedDate();
    this.last_edited = this.note.last_edited;
    this.edited_by = this.note.edited_by;
    console.log(this.note.edited_by + ": " + note);
  }
  getPersonName() {
    this.person_name = "Max Mustermann";
    return this.person_name;
  }
  getFormatedDate() {
    var date = new Date(Date.now());
    return date.toISOString().substring(0, 10) + " " + date.toLocaleTimeString().substring(0, 5);
  }
  render() {
    return (h("div", { class: "container-flex" }, h("div", { class: "card" }, h("div", { class: "card-body" }, h("h5", { class: "card-title" }, "Notizen"), h("p", { class: "card-text" }, h("textarea", { id: "note", class: "form-control", rows: 10, "aria-label": "With textarea", value: this.getNote().note, onInput: (ev) => this.tmpNote = ev.target.value }), "Zuletzt editiert: ", this.last_edited, " von ", this.edited_by, h("button", { onClick: () => this.safeNote(this.tmpNote), type: "button", class: "btn btn-success float-right", disabled: this.tmpNote == "" }, "Speichern"))))));
  }
};
ComNotes.route = "/datenkoerbe/:datenkorbId/notes";
ComNotes.style = comNotesCss;

export { ComNotes as C };
