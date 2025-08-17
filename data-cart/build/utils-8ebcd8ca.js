import { d as dist } from './index-de766dcc.js';
import { s as state } from './store-9032fc40.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
/**
 *
 * @param processingRecord
 * @returns An array of EDataCategory that includes all categories of data in a processing record entry (no duplicates)
 */
function getUniqueSetOfCategoriesOfDataFromProcessingRecord(processingRecord) {
  let dataCategories = [];
  processingRecord.dataSubjectCategoriesAggregate.forEach((dsca) => {
    dsca.dataCategoriesAggregate.forEach((dca) => {
      if (dataCategories.find(dc => dc.id.value === dca.dataCategory.id.value))
        return;
      dataCategories.push(dca.dataCategory);
    });
  });
  return dataCategories;
}
function findProcessingRecordEntryByID(value) {
  let record;
  state.dbEProcessingRecordEntry.forEach((dcel) => {
    if (dcel.id.value === value) {
      record = dcel;
    }
  });
  return record;
}
function getParentDataCategories(dataCategories) {
  let dcs = [];
  // iterate over all data categories and typeOfs:
  dataCategories.forEach((dcel) => {
    if (dcel.typeOf && dcel.typeOf.length > 0) {
      dcel.typeOf.forEach((tel) => {
        // is the parent already in dcs?
        if (dcs.find(p => p.id.value === tel.value && p.id.type === tel.type)) {
          return;
        }
        // get the parent data category:
        let parent = state.dbEDataCategory.find(p => p.id.value === tel.value && p.id.type === tel.type);
        if (!parent) {
          return;
        }
        dcs.push(parent);
      });
    }
  });
  return dcs;
}
function extractDataSubjectCategories(pre) {
  let pres = [];
  pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
    if (pres.filter(el => el.friendlyName === aggregate.dataSubjectCategory.friendlyName).length == 0) {
      pres.push(aggregate.dataSubjectCategory);
    }
  });
  return pres;
}
function extractPIICategories(pre) {
  let cats = [];
  pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
    aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
      if (cats.filter(el => el.friendlyName === aggregate2.dataCategory.friendlyName).length == 0) {
        cats.push(aggregate2.dataCategory);
      }
    });
  });
  return cats;
}
function extractRecipientCategories(pre) {
  let rcpts = [];
  pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
    aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
      if (rcpts.filter(el => el.type === aggregate2.recipientCategory.type).length == 0) {
        rcpts.push(aggregate2.recipientCategory);
      }
    });
  });
  return rcpts;
}
function extractLegalFoundations(pre) {
  let legal = [];
  pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
    aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
      if (legal.filter(el => el.type === aggregate2.lawfulness.type).length == 0) {
        legal.push(aggregate2.lawfulness);
      }
    });
  });
  return legal;
}
function getLegalFoundationsByPersonalDataCategory(pre, dataSubjectID, dataCategoryID) {
  let legal;
  pre.dataSubjectCategoriesAggregate.forEach((aggregate) => {
    if (aggregate.dataSubjectCategory.id.value === dataSubjectID.value) {
      aggregate.dataCategoriesAggregate.forEach((aggregate2) => {
        if (aggregate2.dataCategory.id.value === dataCategoryID.value) {
          legal = aggregate2.lawfulness;
          return;
        }
      });
    }
  });
  return legal;
}
function countIsProcessingAllowedByPersonalData(ds, db) {
  let piiDateStatus = [];
  if (ds.person.type === "INDIVIDUAL") {
    ds.pii.forEach(pii => {
      let legalFoundation = getLegalFoundationsByPersonalDataCategory(findProcessingRecordEntryByID(db.selectedProcessingRecordID), { value: ds.person.dataSubject.type === "INTERNAL" ? "data_subject_cat_1" : "data_subject_cat_2" }, pii.dataCategory.id);
      if (legalFoundation && legalFoundation.type === dist.VOLawfulnessTypeEnum.A && !state.dbEPersonalData.find(pd => pd.dataCategoryID === pii.dataCategory.id.value && pd.dataSubjectID === ds.person.dataSubject.id && pd.processingRecordEntryID === db.selectedProcessingRecordID)) {
        piiDateStatus.push("NEED_TO_ASK");
      }
      else {
        piiDateStatus.push("ALLOWED");
        return;
      }
    });
  }
  else {
    piiDateStatus = ["UNKNOWN"];
  }
  return piiDateStatus;
}
function isProcessingAllowed(ds, db) {
  let piiDateStatus = "ALLOWED";
  if (ds.person.type === "INDIVIDUAL") {
    ds.pii.forEach(pii => {
      if (piiDateStatus === "NEED_TO_ASK" || piiDateStatus === "OBJECTED")
        return piiDateStatus;
      let legalFoundation = getLegalFoundationsByPersonalDataCategory(findProcessingRecordEntryByID(db.selectedProcessingRecordID), { value: ds.person.dataSubject.type === "INTERNAL" ? "data_subject_cat_1" : "data_subject_cat_2" }, pii.dataCategory.id);
      if (legalFoundation && legalFoundation.type === dist.VOLawfulnessTypeEnum.A && !state.dbEPersonalData.find(pd => pd.dataCategoryID === pii.dataCategory.id.value && pd.dataSubjectID === ds.person.dataSubject.id && pd.processingRecordEntryID === db.selectedProcessingRecordID)) {
        piiDateStatus = "NEED_TO_ASK";
      }
      else {
        piiDateStatus = "ALLOWED";
      }
    });
  }
  else {
    piiDateStatus = "UNKNOWN";
  }
  return piiDateStatus;
}
function getPersonalDataRecipientTable(db) {
  let table = [];
  let processingRecordEntry = findProcessingRecordEntryByID(db.selectedProcessingRecordID);
  processingRecordEntry.dataSubjectCategoriesAggregate.forEach(aggregate1 => {
    aggregate1.dataCategoriesAggregate.forEach(aggregate2 => {
      table.push({ categoryOfData: aggregate2.dataCategory, categoryOfRecipient: aggregate2.recipientCategory });
    });
  });
}
function isProcessingAllowedByPersonalData(ds, pii, dataBasket) {
  let piiDateStatus = "ALLOWED";
  let legalFoundation = getLegalFoundationsByPersonalDataCategory(findProcessingRecordEntryByID(dataBasket.selectedProcessingRecordID), { value: ds.person.dataSubject.type === "INTERNAL" ? "data_subject_cat_1" : "data_subject_cat_2" }, pii.dataCategory.id);
  console.log(legalFoundation);
  // study requires us to have this cat set available:
  if (pii.dataCategory.id.value.startsWith("dat_cat_71")) {
    piiDateStatus = "ALLOWED";
  }
  else if (!legalFoundation) {
    piiDateStatus = "OBJECTED";
  }
  else if (legalFoundation.type === dist.VOLawfulnessTypeEnum.A) {
    piiDateStatus = "NEED_TO_ASK";
  }
  else {
    piiDateStatus = "ALLOWED";
  }
  return { status: piiDateStatus, legalBasis: legalFoundation };
}

export { extractDataSubjectCategories as a, extractPIICategories as b, countIsProcessingAllowedByPersonalData as c, getLegalFoundationsByPersonalDataCategory as d, extractLegalFoundations as e, findProcessingRecordEntryByID as f, getParentDataCategories as g, isProcessingAllowedByPersonalData as h, isProcessingAllowed as i, getUniqueSetOfCategoriesOfDataFromProcessingRecord as j };
