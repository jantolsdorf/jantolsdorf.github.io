import { v as v4 } from './index-912d1a21.js';
import { s as state } from './store-9032fc40.js';
import { c as countIsProcessingAllowedByPersonalData, i as isProcessingAllowed } from './utils-8ebcd8ca.js';
import { V as VODataSubjectSelect } from './VODataSubjectSelect-89e5c619.js';
import { E as EDataSubject } from './EDataSubject-fd8665cd.js';
import { V as VOActivityLog } from './VOActivityLog-8bcd31ab.js';

var EnumPIITransmissionChannel;
(function (EnumPIITransmissionChannel) {
  EnumPIITransmissionChannel["EMAIL"] = "EMAIL";
  EnumPIITransmissionChannel["INHOUSE_MAIL"] = "INHOUSE_EMAIL";
  EnumPIITransmissionChannel["FILE_UPLOAD"] = "FILE_UPLOAD";
  EnumPIITransmissionChannel["FAX"] = "FAX";
})(EnumPIITransmissionChannel || (EnumPIITransmissionChannel = {}));
var EnumStatus;
(function (EnumStatus) {
  EnumStatus["DRAFTING"] = "DRAFTING";
  EnumStatus["ACTIVE"] = "ACTIVE";
  EnumStatus["DONE"] = "DONE";
  EnumStatus["IDLE"] = "IDLE";
})(EnumStatus || (EnumStatus = {}));
var EnumState;
(function (EnumState) {
  EnumState["WAITING"] = "WAITING";
  EnumState["READY"] = "READY";
})(EnumState || (EnumState = {}));
var EnumType;
(function (EnumType) {
  EnumType["TEMPLATE"] = "TEMPLATE";
  EnumType["DATABASKET"] = "DATABASKET";
})(EnumType || (EnumType = {}));
class EDataBasket {
  constructor() {
    this.ID = "";
    this.title = "";
    this.status = EnumStatus.DRAFTING;
    this.state = EnumState.WAITING;
    this.type = EnumType.DATABASKET;
    /**
     * The Person who requests the data and wants to process the data.
     */
    this.requestingDataProcessor = Object.assign(Object.assign({}, (new EDataSubject())), { first_name: "Verena", last_name: "Wagner-Müller", faculty: "R01 Wissenschafts- und Technologietransfer" });
    this.selectedProcessingRecordID = "";
    this.topicAssignments = [];
    this.template = "";
    this.dataSets = [];
    this.deadline = "";
    this.description = "";
    this.processing = "";
    this.transmissionChannel = [];
    this.lastActionDate = "";
    this.numMessagesUnread = 0;
    this.numIssues = 0;
    this.progress = 0;
    this.activityLog = new VOActivityLog();
    /**
     * if true this creates a new processing record entry
     */
    this.isNewProcessingRecordEntry = false;
    /**
    * @description Percentage of complete personal data.
    */
    this.progressCompletenessPersonalData = 0;
    this.progressCompletenessConsentByPersonalData = 0;
    /**
    * @description Percentage of complete personal data.
    */
    this.progressCompletenessPersonalDataOtherDepartment = 0;
    /**
    * @description Percentage of complete permissions (i.e. lawfulness).
    */
    this.progressCompletenessPermissions = 0;
    /**
    * @description Percentage of personal data for which data subjects objected.
    */
    this.progressCompletenessObjectionsByPersonalData = 0;
    /**
     * @description Percentage of personal data for which the processing is allowed.
     */
    this.progressCompletenessPermissionByPersonalData = 0;
    this.conversation = [];
    /**
    * @description States whether the data processor has confirmed that a data basket became ready.
    */
    this.isStatusReadyHasBeenConfirmed = false;
    /*****************************************/
    /******************* REQUEST *************/
    /**
     * @description Stores the number of open requests
     */
    this.requestNumOpenResponses = 0;
    this.requestPersonalMessageToDataSubjects = "";
    this.requestPersonalMessageToPersonOrDepartment = "";
    this.requestDataRequestedFrom = "DATA_SUBJECT";
    this.isAskToUpdateOutdatedPII = false;
    this.ID = v4();
  }
  /**
   *
   * @param db a data basket to update the progress of.
   * @returns A data basket with updated progress.
   */
  static updateProgress(db) {
    let tmpProgressMax = 0;
    db.progressCompletenessPersonalData = 0;
    db.progressCompletenessPermissions = 0;
    db.progressCompletenessObjectionsByPersonalData = 0;
    db.progressCompletenessConsentByPersonalData = 0;
    db.progressCompletenessPermissionByPersonalData = 0;
    db.progressCompletenessPersonalDataOtherDepartment = 0;
    db.dataSets.forEach(ds => {
      tmpProgressMax += ds.pii.length;
      let tmp = EDataBasket.checkPIIAvailable(ds, db);
      if (tmp.elicitedBy === db.requestingDataProcessor.faculty) {
        db.progressCompletenessPersonalData += tmp.count;
      }
      else {
        db.progressCompletenessPersonalDataOtherDepartment += tmp.count;
      }
      let countPermissions = countIsProcessingAllowedByPersonalData(ds, db);
      db.progressCompletenessObjectionsByPersonalData += countPermissions.filter(p => p === "OBJECTED").length;
      db.progressCompletenessConsentByPersonalData += countPermissions.filter(p => p === "ALLOWED").length;
      db.progressCompletenessPermissionByPersonalData += countPermissions.filter(p => p === "ALLOWED").length;
      let status = isProcessingAllowed(ds, db) === "ALLOWED";
      if (status)
        db.progressCompletenessPermissions += 1;
    });
    // Convert into percentages:
    db.progressCompletenessPersonalData = Math.trunc(100 * db.progressCompletenessPersonalData / tmpProgressMax);
    db.progressCompletenessPersonalDataOtherDepartment = Math.trunc(100 * db.progressCompletenessPersonalDataOtherDepartment / tmpProgressMax);
    db.progressCompletenessPermissions = Math.trunc(100 * db.progressCompletenessPermissions / db.dataSets.length);
    db.progressCompletenessObjectionsByPersonalData = Math.trunc(100 * db.progressCompletenessObjectionsByPersonalData / tmpProgressMax);
    db.progressCompletenessConsentByPersonalData = Math.trunc(100 * db.progressCompletenessConsentByPersonalData / tmpProgressMax);
    db.progressCompletenessPermissionByPersonalData = Math.trunc(100 * db.progressCompletenessPermissionByPersonalData / tmpProgressMax);
    db.progress = (db.progressCompletenessPermissions + db.progressCompletenessPersonalData) / 2;
    if (db.progress == 100)
      db.state = EnumState.READY;
    if (db.progress < 100)
      db.state = EnumState.WAITING;
    db.lastActionDate = (new Date()).toString();
    return db;
  }
  static getPIISpecialCategories(dataBasket) {
    let piiSpecialCategories = [];
    {
      dataBasket.dataSets.map(ds => ds.pii.map(pii => {
        if ((pii.dataCategory.specialCategories && pii.dataCategory.specialCategories.length) ||
          (pii.dataCategory.isCriminalRecord && pii.dataCategory.isCriminalRecord == true)) {
          piiSpecialCategories.push(pii);
          return;
        }
      }));
    }
    return piiSpecialCategories;
  }
  /**
   * @description Simple and stupid function that returns if PII are available.
   * @param ds
   * @returns
   */
  static checkPIIAvailable(ds, db) {
    let countPIIAvailable = 0;
    let elicitedBy = "";
    if (ds.person.type === "INDIVIDUAL") {
      ds.pii.forEach(pii => {
        let pd = state.dbEPersonalData.find(pd => pd.dataSubjectID === ds.person.dataSubject.id &&
          pd.dataCategoryID.trim() === pii.dataCategory.id.value.trim() &&
          pd.processingRecordEntryID === db.selectedProcessingRecordID);
        if (pd) {
          countPIIAvailable += 1;
          elicitedBy = pd.elicitedBy;
        }
        else if (pii.dataCategory.id.value.startsWith("ext-")) {
          countPIIAvailable += 1;
          elicitedBy = "R04 Personalservice";
        }
      });
    }
    return { count: countPIIAvailable, elicitedBy: elicitedBy };
  }
  /**
* @description Simple and stupid function that returns PII Deletion Date
* @param ds
* @returns
*/
  static checkPIIDeletion(db) {
    let obj = [];
    let currentDateMillis = 0;
    db.dataSets.forEach(ds => {
      if (ds.person.type === "INDIVIDUAL") {
        ds.pii.forEach(pii => {
          let pd = state.dbEPersonalData.find(pd => pd.dataSubjectID === ds.person.dataSubject.id &&
            pd.dataCategoryID.trim() === pii.dataCategory.id.value.trim() &&
            pd.processingRecordEntryID === db.selectedProcessingRecordID);
          if (pd) {
            currentDateMillis = ((new Date(pd.updated)).getTime() + (86400000 * pd.deletionPeriod));
            let tmp = obj.findIndex(o => o.deletionDateMillis.toString() === currentDateMillis.toString());
            if (tmp > -1) {
              if (!obj[tmp].person.find(p => p.dataSubject.id === ds.person.dataSubject.id)) {
                obj[tmp].person.push(ds.person);
              }
            }
            else {
              obj.push({ deletionDateMillis: currentDateMillis, person: [ds.person] });
            }
          }
          else if (pii.dataCategory.id.value.startsWith("ext-")) {
          }
        });
      }
    });
    return obj.sort((a, b) => {
      if (a.deletionDateMillis < b.deletionDateMillis)
        return -1;
      if (a.deletionDateMillis > b.deletionDateMillis)
        return 1;
      return 0;
    });
  }
  static IsSinglePIIAvailable(pii, person, db) {
    let pd = state.dbEPersonalData.find(pd => pd.dataSubjectID === person.dataSubject.id &&
      pd.dataCategoryID.trim() === pii.dataCategory.id.value.trim() &&
      pd.processingRecordEntryID === db.selectedProcessingRecordID);
    if (pd) {
      return true;
    }
    else if (pii.dataCategory.id.value.startsWith("ext-")) {
      return true;
    }
    return false;
  }
  /**
 *
 * @param ds the data set to be checked for potentially outdated data
 * @returns "OUTDATED", if at least one PII is 181 days old; "UNKNOWN", if the last date is unknown (e.g. null); "UPTODATE" else
 */
  static checkOutdatedPII(dataBasket, ds) {
    let piiDateStatus = "UPTODATE";
    if (ds.person.type === "INDIVIDUAL") {
      ds.pii.forEach(pii => {
        if (piiDateStatus === "OUTDATED" || piiDateStatus === "UNKNOWN")
          return;
        let personalData = state.dbEPersonalData.find(pd => pd.dataSubjectID === ds.person.dataSubject.id &&
          pd.dataCategoryID === pii.dataCategory.id.value &&
          pd.processingRecordEntryID === dataBasket.selectedProcessingRecordID);
        piiDateStatus = this.isPIIOudated(personalData);
      });
    }
    else {
      piiDateStatus = "UNKNOWN";
    }
    return piiDateStatus;
  }
  static isPIIOudated(pd) {
    let piiDateStatus = "UPTODATE";
    if (!pd || !pd.updated) {
      piiDateStatus = "UNKNOWN";
    }
    else if (((new Date()).getTime() - new Date(pd.updated).getTime()) / (1000 * 60 * 60 * 24) > 180) {
      piiDateStatus = "OUTDATED"; // 180 days old
    }
    return piiDateStatus;
  }
  /**
   * @description Adds a new message to the conversation.
   */
  static addToConversations(dataBasket, dataSubject, message, sender) {
    if (!dataBasket.conversation)
      dataBasket.conversation = [];
    let conversation = dataBasket.conversation.find(conversation => conversation.dataSubject.type === "INDIVIDUAL" && conversation.dataSubject.dataSubject.id === dataSubject.dataSubject.id);
    if (!conversation)
      conversation = { dataSubject: dataSubject, messages: [] };
    conversation.messages = [...conversation.messages, { message: message, date: (new Date()).toLocaleTimeString("de") + " | " + (new Date()).toLocaleDateString("de"), sender: sender }];
    dataBasket.conversation = [conversation, ...dataBasket.conversation.filter(conversation => conversation.dataSubject.type === "INDIVIDUAL" && conversation.dataSubject.dataSubject.id !== dataSubject.dataSubject.id)];
    return dataBasket;
  }
  static store(dataBasket) {
    state.dbEDataBasket = [dataBasket, ...state.dbEDataBasket.filter(db => db.ID !== dataBasket.ID)];
    return dataBasket;
  }
  /**
   *
   * @param dataBasket
   * @returns Very easy and stupid function that "recommends" an option to get personal from if the data were elicited by the same faculty / person.
   */
  static getBestSourceForPersonalData(dataBasket) {
    let bestOption = "FROM_OTHER";
    let elicitedBy = "";
    dataBasket.dataSets.forEach(ds => {
      if (ds.person.type === "INDIVIDUAL") {
        ds.pii.forEach(pii => {
          let personalData = state.dbEPersonalData.find(pd => pd.dataSubjectID === ds.person.dataSubject.id &&
            pd.dataCategoryID.trim() === pii.dataCategory.id.value.trim());
          if (personalData) {
            // new or keep if already set
            elicitedBy = elicitedBy === "" ? personalData.elicitedBy : elicitedBy;
            bestOption = bestOption === "FROM_OTHER" ? ((personalData.elicitedBy !== elicitedBy) ? "DATA_SUBJECT" : "FROM_OTHER") : bestOption;
          }
          else {
            bestOption = "DATA_SUBJECT";
          }
        });
      }
      else {
        bestOption = "SELF";
      }
    });
    return { bestOption: bestOption, elictedBy: elicitedBy };
  }
  /**
  * merges the temporary data sets with the final data sets
  */
  static mergeDataSets(ds1, ds2) {
    // Merge
    ds2.forEach(dataSet => {
      if (ds1.length == 0) {
        // Add if empty:
        ds1 = [...ds1, dataSet];
      }
      else if (!ds1.find(tmpDataSet => { return VODataSubjectSelect.compare(tmpDataSet.person, dataSet.person); })) {
        // Add if not exist:
        ds1 = [...ds1, dataSet];
      }
      else {
        let tmp = ds1.find(tmpDataSet => { return VODataSubjectSelect.compare(tmpDataSet.person, dataSet.person); }).pii;
        dataSet.pii.forEach(pii_new => {
          var isAdd = true;
          tmp.forEach(pii_old => {
            if (pii_new.dataCategory.id.value === pii_old.dataCategory.id.value && pii_new.versionDate === pii_old.versionDate) {
              isAdd = false;
            }
          });
          if (isAdd) {
            tmp = [...tmp, pii_new];
          }
        });
        ds1[ds1.findIndex((tmpDataSet) => { return VODataSubjectSelect.compare(tmpDataSet.person, dataSet.person); })].pii = tmp;
      }
    });
    return ds1;
  }
}

export { EDataBasket as E, EnumState as a, EnumStatus as b, EnumPIITransmissionChannel as c };
