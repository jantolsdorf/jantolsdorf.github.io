import { v as v4 } from './index-912d1a21.js';

class VODataSubjectSelect {
  constructor() {
    /**
     * @description A selection can be a group of people or an individual
     */
    this.type = "INDIVIDUAL";
    this.id = v4();
  }
  /**
   *
   * @param dataSubject A EDataSubject object to create from.
   * @param dataSubject.type Is the data subject an internal or external person?
   * @returns An object of VODataSubjectSelect
   */
  static fromDataSubject(dataSubject, dataSubjectType) {
    const dss = new VODataSubjectSelect();
    dss.type = "INDIVIDUAL";
    dss.dataSubject = dataSubject;
    if (dss.dataSubject.id === "") {
      dss.dataSubject.id = "EXT-" + dss.id;
    }
    if (dataSubject.type)
      dss.dataSubject.type = dataSubjectType;
    return dss;
  }
  /**
   *
   * @param dataSubjectCategory A EDataSubjectCategory object to create from.
   * @returns An object of VODataSubjectSelect
   */
  static fromDataSubjectCategory(dataSubjectCategory) {
    const dss = new VODataSubjectSelect();
    dss.type = "GROUP";
    dss.dataSubjectCategory = dataSubjectCategory;
    return dss;
  }
  /**
   *
   * @param ds1 A first VODataSubjectSelect Object
   * @param ds2 A second VODataSubjectSelect Object
   * @returns True if the data subjects or data subject categories match
   */
  static compare(ds1, ds2) {
    if (ds1.type !== ds2.type)
      return false;
    if (ds1.type === "INDIVIDUAL") {
      return ds1.dataSubject.id === ds2.dataSubject.id;
    }
    else if (ds1.type === "GROUP") {
      return ds1.dataSubjectCategory.id === ds2.dataSubjectCategory.id;
    }
  }
}

export { VODataSubjectSelect as V };
