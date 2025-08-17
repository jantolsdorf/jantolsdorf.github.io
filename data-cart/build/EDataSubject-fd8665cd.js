import { v as v4 } from './index-912d1a21.js';

class EDataSubject {
  constructor() {
    this.id = "";
    /**
     * @description Does the data subject belong to the organization or not?
     */
    this.type = "INTERNAL";
    this.first_name = "";
    this.last_name = "";
    this.full_name = "";
    this.email = "";
    /** The following are set if type === "INTERNAL **/
    this.faculty = "";
    this.job = "";
    this.title = "";
    this.roles = [];
    this.id = v4();
  }
  static fromJSON(json) {
    let tmpDs = JSON.parse(json);
    console.log(tmpDs);
    let ds = tmpDs;
    ds.id = tmpDs.id;
    return ds;
  }
}
class EDataSubjectCategory {
  constructor(friendlyName) {
    this.id = "";
    this.friendlyName = "";
    this.id = v4();
    this.friendlyName = friendlyName;
  }
}

export { EDataSubject as E, EDataSubjectCategory as a };
