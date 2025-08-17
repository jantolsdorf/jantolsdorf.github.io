import { D as DataType, C as getCalendarType$1, G as getLocale, H as getLanguage, J as getDesigntimePropertyAsArray$1, S as SUPPORTED_LOCALES, K as DEFAULT_LOCALE, k as getFeature, L as attachLanguageChange, g as registerIcon, U as UI5Element, l as litRender, f as fetchI18nBundle, I as Integer, s as scopedHtml, i as ifDefined, h as classMap, b as setTags, c as setSuffix, r as registerThemePropertiesLoader, d as defaultThemeBase, e as defaultTheme, M as getFormatSettings, a as styleMap, u as repeat, o as renderFinished } from './Icons-85d4abff.js';
import { V as ValueState } from './ValueState-a7516d8f.js';
import { g as getI18nBundle, $ as CALENDAR_HEADER_PREVIOUS_BUTTON, a0 as CALENDAR_HEADER_NEXT_BUTTON, c as isSpace, d as isEnter, a1 as DAY_PICKER_NON_WORKING_DAY, a2 as DAY_PICKER_TODAY, a3 as DAY_PICKER_WEEK_NUMBER_TEXT, a4 as isEnterShift, a5 as isSpaceShift, k as isLeft, h as isRight, j as isUp, f as isDown, a6 as isPageUp, a7 as isPageDown, a8 as isPageUpShift, a9 as isPageDownShift, aa as isPageUpShiftCtrl, ab as isPageDownShiftCtrl, q as isHome, r as isEnd, ac as isHomeCtrl, ad as isEndCtrl, ae as isF4, af as isF4Shift, p as isPhone, x as isShow, I as INPUT_SUGGESTIONS_TITLE, i as isIE, a as getEffectiveAriaLabelText, ag as DATEPICKER_OPEN_ICON_TITLE, ah as DATEPICKER_DATE_DESCRIPTION } from './i18n-defaults-dca87248.js';
import './decline-a03835ab.js';
import { I as Icon, B as Button } from './Button-7dc82d4c.js';
import { R as ResponsivePopover } from './ResponsivePopover-cdfbc391.js';
import './slim-arrow-right-08785783.js';
import { R as ResponsivePopoverCommonCss, a as InputType, I as Input } from './Input-0ee3a2d0.js';

/**
 * Different calendar types.
 */
const CalendarTypes = {
	Gregorian: "Gregorian",
	Islamic: "Islamic",
	Japanese: "Japanese",
	Buddhist: "Buddhist",
	Persian: "Persian",
};

class CalendarType$1 extends DataType {
	static isValid(value) {
		return !!CalendarTypes[value];
	}
}

CalendarType$1.generateTypeAccessors(CalendarTypes);

let calendarType;

const getCalendarType = () => {
	if (calendarType === undefined) {
		calendarType = getCalendarType$1();
	}

	if (CalendarType$1.isValid(calendarType)) {
		return calendarType;
	}

	return CalendarType$1.Gregorian;
};

const emptyFn = () => {};

/**
 * OpenUI5 FormatSettings shim
 */
const FormatSettings = {
	getFormatLocale: getLocale,
	getLegacyDateFormat: emptyFn,
	getLegacyDateCalendarCustomizing: emptyFn,
	getCustomLocaleData: emptyFn,
};

/**
 * OpenUI5 Configuration Shim
 */
const Configuration = {
	getLanguage,
	getCalendarType,
	getSupportedLanguages: () => getDesigntimePropertyAsArray$1("$core-i18n-locales:,ar,bg,ca,cs,da,de,el,en,es,et,fi,fr,hi,hr,hu,it,iw,ja,ko,lt,lv,nl,no,pl,pt,ro,ru,sh,sk,sl,sv,th,tr,uk,vi,zh_CN,zh_TW$"),
	getOriginInfo: emptyFn,
	getFormatSettings: () => FormatSettings,
};

/**
 * OpenUI5 Core shim
 */
const Core = {
	getConfiguration: () => Configuration,
	getLibraryResourceBundle: emptyFn(),
	getFormatSettings: () => FormatSettings,
};

var BaseObject$1;
var Interface = function (oObject, aMethods, _bReturnFacade) {
  if (!oObject) {
    return oObject;
  }
  BaseObject$1 = BaseObject$1 || sap.ui.requireSync("sap/ui/base/Object");
  function fCreateDelegator(oObject, sMethodName) {
    return function () {
      var tmp = oObject[sMethodName].apply(oObject, arguments);
      if (_bReturnFacade) {
        return this;
      } else {
        return tmp instanceof BaseObject$1 ? tmp.getInterface() : tmp;
      }
    };
  }
  if (!aMethods) {
    return {};
  }
  var sMethodName;
  for (var i = 0, ml = aMethods.length; i < ml; i++) {
    sMethodName = aMethods[i];
    if (!oObject[sMethodName] || typeof oObject[sMethodName] === "function") {
      this[sMethodName] = fCreateDelegator(oObject, sMethodName);
    }
  }
};

var ObjectPath = {};
var defaultRootContext = window;
function getObjectPathArray(vObjectPath) {
  return Array.isArray(vObjectPath) ? vObjectPath.slice() : vObjectPath.split(".");
}
ObjectPath.create = function (vObjectPath, oRootContext) {
  var oObject = oRootContext || defaultRootContext;
  var aNames = getObjectPathArray(vObjectPath);
  for (var i = 0; i < aNames.length; i++) {
    var sName = aNames[i];
    if (oObject[sName] === null || oObject[sName] !== undefined && (typeof oObject[sName] !== "object" && typeof oObject[sName] !== "function")) {
      throw new Error("Could not set object-path for '" + aNames.join(".") + "', path segment '" + sName + "' already exists.");
    }
    oObject[sName] = oObject[sName] || ({});
    oObject = oObject[sName];
  }
  return oObject;
};
ObjectPath.get = function (vObjectPath, oRootContext) {
  var oObject = oRootContext || defaultRootContext;
  var aNames = getObjectPathArray(vObjectPath);
  var sPropertyName = aNames.pop();
  for (var i = 0; i < aNames.length && oObject; i++) {
    oObject = oObject[aNames[i]];
  }
  return oObject ? oObject[sPropertyName] : undefined;
};
ObjectPath.set = function (vObjectPath, vValue, oRootContext) {
  oRootContext = oRootContext || defaultRootContext;
  var aNames = getObjectPathArray(vObjectPath);
  var sPropertyName = aNames.pop();
  var oObject = ObjectPath.create(aNames, oRootContext);
  oObject[sPropertyName] = vValue;
};

var fnNow = !(typeof window != "undefined" && window.performance && performance.now && performance.timing) ? Date.now : (function () {
  var iNavigationStart = performance.timing.navigationStart;
  return function perfnow() {
    return iNavigationStart + performance.now();
  };
})();

var Log = {};
Log.Level = {
    NONE: -1,
    FATAL: 0,
    ERROR: 1,
    WARNING: 2,
    INFO: 3,
    DEBUG: 4,
    TRACE: 5,
    ALL: 5 + 1
};
var sDefaultComponent, aLog = [], mMaxLevel = { '': Log.Level.ERROR }, iLogEntriesLimit = 3000, oListener = null, bLogSupportInfo = false;
function pad0(i, w) {
    return ('000' + String(i)).slice(-w);
}
function level(sComponent) {
    return !sComponent || isNaN(mMaxLevel[sComponent]) ? mMaxLevel[''] : mMaxLevel[sComponent];
}
function discardLogEntries() {
    var iLogLength = aLog.length;
    if (iLogLength) {
        var iEntriesToKeep = Math.min(iLogLength, Math.floor(iLogEntriesLimit * 0.7));
        if (oListener) {
            oListener.onDiscardLogEntries(aLog.slice(0, iLogLength - iEntriesToKeep));
        }
        if (iEntriesToKeep) {
            aLog = aLog.slice(-iEntriesToKeep, iLogLength);
        } else {
            aLog = [];
        }
    }
}
function getLogEntryListenerInstance() {
    if (!oListener) {
        oListener = {
            listeners: [],
            onLogEntry: function (oLogEntry) {
                for (var i = 0; i < oListener.listeners.length; i++) {
                    if (oListener.listeners[i].onLogEntry) {
                        oListener.listeners[i].onLogEntry(oLogEntry);
                    }
                }
            },
            onDiscardLogEntries: function (aDiscardedLogEntries) {
                for (var i = 0; i < oListener.listeners.length; i++) {
                    if (oListener.listeners[i].onDiscardLogEntries) {
                        oListener.listeners[i].onDiscardLogEntries(aDiscardedLogEntries);
                    }
                }
            },
            attach: function (oLog, oLstnr) {
                if (oLstnr) {
                    oListener.listeners.push(oLstnr);
                    if (oLstnr.onAttachToLog) {
                        oLstnr.onAttachToLog(oLog);
                    }
                }
            },
            detach: function (oLog, oLstnr) {
                for (var i = 0; i < oListener.listeners.length; i++) {
                    if (oListener.listeners[i] === oLstnr) {
                        if (oLstnr.onDetachFromLog) {
                            oLstnr.onDetachFromLog(oLog);
                        }
                        oListener.listeners.splice(i, 1);
                        return;
                    }
                }
            }
        };
    }
    return oListener;
}
Log.fatal = function (sMessage, sDetails, sComponent, fnSupportInfo) {
    log(Log.Level.FATAL, sMessage, sDetails, sComponent, fnSupportInfo);
};
Log.error = function (sMessage, sDetails, sComponent, fnSupportInfo) {
    log(Log.Level.ERROR, sMessage, sDetails, sComponent, fnSupportInfo);
};
Log.warning = function (sMessage, sDetails, sComponent, fnSupportInfo) {
    log(Log.Level.WARNING, sMessage, sDetails, sComponent, fnSupportInfo);
};
Log.info = function (sMessage, sDetails, sComponent, fnSupportInfo) {
    log(Log.Level.INFO, sMessage, sDetails, sComponent, fnSupportInfo);
};
Log.debug = function (sMessage, sDetails, sComponent, fnSupportInfo) {
    log(Log.Level.DEBUG, sMessage, sDetails, sComponent, fnSupportInfo);
};
Log.trace = function (sMessage, sDetails, sComponent, fnSupportInfo) {
    log(Log.Level.TRACE, sMessage, sDetails, sComponent, fnSupportInfo);
};
Log.setLevel = function (iLogLevel, sComponent, _bDefault) {
    sComponent = sComponent || sDefaultComponent || '';
    if (!_bDefault || mMaxLevel[sComponent] == null) {
        mMaxLevel[sComponent] = iLogLevel;
        var sLogLevel;
        Object.keys(Log.Level).forEach(function (sLevel) {
            if (Log.Level[sLevel] === iLogLevel) {
                sLogLevel = sLevel;
            }
        });
        log(Log.Level.INFO, 'Changing log level ' + (sComponent ? 'for \'' + sComponent + '\' ' : '') + 'to ' + sLogLevel, '', 'sap.base.log');
    }
};
Log.getLevel = function (sComponent) {
    return level(sComponent || sDefaultComponent);
};
Log.isLoggable = function (iLevel, sComponent) {
    return (iLevel == null ? Log.Level.DEBUG : iLevel) <= level(sComponent || sDefaultComponent);
};
Log.logSupportInfo = function (bEnabled) {
    bLogSupportInfo = bEnabled;
};
function log(iLevel, sMessage, sDetails, sComponent, fnSupportInfo) {
    if (!fnSupportInfo && !sComponent && typeof sDetails === 'function') {
        fnSupportInfo = sDetails;
        sDetails = '';
    }
    if (!fnSupportInfo && typeof sComponent === 'function') {
        fnSupportInfo = sComponent;
        sComponent = '';
    }
    sComponent = sComponent || sDefaultComponent;
    if (iLevel <= level(sComponent)) {
        var fNow = fnNow(), oNow = new Date(fNow), iMicroSeconds = Math.floor((fNow - Math.floor(fNow)) * 1000), oLogEntry = {
                time: pad0(oNow.getHours(), 2) + ':' + pad0(oNow.getMinutes(), 2) + ':' + pad0(oNow.getSeconds(), 2) + '.' + pad0(oNow.getMilliseconds(), 3) + pad0(iMicroSeconds, 3),
                date: pad0(oNow.getFullYear(), 4) + '-' + pad0(oNow.getMonth() + 1, 2) + '-' + pad0(oNow.getDate(), 2),
                timestamp: fNow,
                level: iLevel,
                message: String(sMessage || ''),
                details: String(sDetails || ''),
                component: String(sComponent || '')
            };
        if (bLogSupportInfo && typeof fnSupportInfo === 'function') {
            oLogEntry.supportInfo = fnSupportInfo();
        }
        if (iLogEntriesLimit) {
            if (aLog.length >= iLogEntriesLimit) {
                discardLogEntries();
            }
            aLog.push(oLogEntry);
        }
        if (oListener) {
            oListener.onLogEntry(oLogEntry);
        }
        if (console) {
            var isDetailsError = sDetails instanceof Error, logText = oLogEntry.date + ' ' + oLogEntry.time + ' ' + oLogEntry.message + ' - ' + oLogEntry.details + ' ' + oLogEntry.component;
            switch (iLevel) {
            case Log.Level.FATAL:
            case Log.Level.ERROR:
                isDetailsError ? console.error(logText, '\n', sDetails) : console.error(logText);
                break;
            case Log.Level.WARNING:
                isDetailsError ? console.warn(logText, '\n', sDetails) : console.warn(logText);
                break;
            case Log.Level.INFO:
                if (console.info) {
                    isDetailsError ? console.info(logText, '\n', sDetails) : console.info(logText);
                } else {
                    isDetailsError ? console.log(logText, '\n', sDetails) : console.log(logText);
                }
                break;
            case Log.Level.DEBUG:
                if (console.debug) {
                    isDetailsError ? console.debug(logText, '\n', sDetails) : console.debug(logText);
                } else {
                    isDetailsError ? console.log(logText, '\n', sDetails) : console.log(logText);
                }
                break;
            case Log.Level.TRACE:
                if (console.trace) {
                    isDetailsError ? console.trace(logText, '\n', sDetails) : console.trace(logText);
                } else {
                    isDetailsError ? console.log(logText, '\n', sDetails) : console.log(logText);
                }
                break;
            }
            if (console.info && oLogEntry.supportInfo) {
                console.info(oLogEntry.supportInfo);
            }
        }
        return oLogEntry;
    }
}
Log.getLogEntries = function () {
    return aLog.slice();
};
Log.getLogEntriesLimit = function () {
    return iLogEntriesLimit;
};
Log.setLogEntriesLimit = function (iLimit) {
    if (iLimit < 0) {
        throw new Error('The log entries limit needs to be greater than or equal to 0!');
    }
    iLogEntriesLimit = iLimit;
    if (aLog.length >= iLogEntriesLimit) {
        discardLogEntries();
    }
};
Log.addLogListener = function (oListener) {
    getLogEntryListenerInstance().attach(this, oListener);
};
Log.removeLogListener = function (oListener) {
    getLogEntryListenerInstance().detach(this, oListener);
};
function Logger(sComponent) {
    this.fatal = function (msg, detail, comp, support) {
        Log.fatal(msg, detail, comp || sComponent, support);
        return this;
    };
    this.error = function (msg, detail, comp, support) {
        Log.error(msg, detail, comp || sComponent, support);
        return this;
    };
    this.warning = function (msg, detail, comp, support) {
        Log.warning(msg, detail, comp || sComponent, support);
        return this;
    };
    this.info = function (msg, detail, comp, support) {
        Log.info(msg, detail, comp || sComponent, support);
        return this;
    };
    this.debug = function (msg, detail, comp, support) {
        Log.debug(msg, detail, comp || sComponent, support);
        return this;
    };
    this.trace = function (msg, detail, comp, support) {
        Log.trace(msg, detail, comp || sComponent, support);
        return this;
    };
    this.setLevel = function (level, comp) {
        Log.setLevel(level, comp || sComponent);
        return this;
    };
    this.getLevel = function (comp) {
        return Log.getLevel(comp || sComponent);
    };
    this.isLoggable = function (level, comp) {
        return Log.isLoggable(level, comp || sComponent);
    };
}
Log.getLogger = function (sComponent, iDefaultLogLevel) {
    if (!isNaN(iDefaultLogLevel) && mMaxLevel[sComponent] == null) {
        mMaxLevel[sComponent] = iDefaultLogLevel;
    }
    return new Logger(sComponent);
};

var fnAssert = function (bResult, vMessage) {
    if (!bResult) {
        var sMessage = typeof vMessage === 'function' ? vMessage() : vMessage;
        if (console && console.assert) {
            console.assert(bResult, sMessage);
        } else {
            Log.debug('[Assertions] ' + sMessage);
        }
    }
};

var fnUniqueSort = function (aArray) {
    fnAssert(Array.isArray(aArray), 'uniqueSort: input parameter must be an Array');
    var iLength = aArray.length;
    if (iLength > 1) {
        aArray.sort();
        var j = 0;
        for (var i = 1; i < iLength; i++) {
            if (aArray.indexOf(aArray[i]) === i) {
                aArray[++j] = aArray[i];
            }
        }
        if (++j < iLength) {
            aArray.splice(j, iLength - j);
        }
    }
    return aArray;
};

var Metadata = function (sClassName, oClassInfo) {
    fnAssert(typeof sClassName === 'string' && sClassName, 'Metadata: sClassName must be a non-empty string');
    fnAssert(typeof oClassInfo === 'object', 'Metadata: oClassInfo must be empty or an object');
    if (!oClassInfo || typeof oClassInfo.metadata !== 'object') {
        oClassInfo = {
            metadata: oClassInfo || {},
            constructor: ObjectPath.get(sClassName)
        };
        oClassInfo.metadata.__version = 1;
    }
    oClassInfo.metadata.__version = oClassInfo.metadata.__version || 2;
    if (typeof oClassInfo.constructor !== 'function') {
        throw Error('constructor for class ' + sClassName + ' must have been declared before creating metadata for it');
    }
    this._sClassName = sClassName;
    this._oClass = oClassInfo.constructor;
    this.extend(oClassInfo);
};
Metadata.prototype.extend = function (oClassInfo) {
    this.applySettings(oClassInfo);
    this.afterApplySettings();
};
Metadata.prototype.applySettings = function (oClassInfo) {
    var that = this, oStaticInfo = oClassInfo.metadata, oPrototype;
    if (oStaticInfo.baseType) {
        var oParentClass = ObjectPath.get(oStaticInfo.baseType);
        if (typeof oParentClass !== 'function') {
            Log.fatal('base class \'' + oStaticInfo.baseType + '\' does not exist');
        }
        if (oParentClass.getMetadata) {
            this._oParent = oParentClass.getMetadata();
            fnAssert(oParentClass === oParentClass.getMetadata().getClass(), 'Metadata: oParentClass must match the class in the parent metadata');
        } else {
            this._oParent = new Metadata(oStaticInfo.baseType, {});
        }
    } else {
        this._oParent = undefined;
    }
    this._bAbstract = !!oStaticInfo['abstract'];
    this._bFinal = !!oStaticInfo['final'];
    this._sStereotype = oStaticInfo.stereotype || (this._oParent ? this._oParent._sStereotype : 'object');
    this._bDeprecated = !!oStaticInfo['deprecated'];
    this._aInterfaces = oStaticInfo.interfaces || [];
    this._aPublicMethods = oStaticInfo.publicMethods || [];
    this._bInterfacesUnique = false;
    oPrototype = this._oClass.prototype;
    for (var n in oClassInfo) {
        if (n !== 'metadata' && n !== 'constructor') {
            oPrototype[n] = oClassInfo[n];
            if (!n.match(/^_|^on|^init$|^exit$/)) {
                that._aPublicMethods.push(n);
            }
        }
    }
};
Metadata.prototype.afterApplySettings = function () {
    if (this._oParent) {
        this._aAllPublicMethods = this._oParent._aAllPublicMethods.concat(this._aPublicMethods);
        this._bInterfacesUnique = false;
    } else {
        this._aAllPublicMethods = this._aPublicMethods;
    }
};
Metadata.prototype.getStereotype = function () {
    return this._sStereotype;
};
Metadata.prototype.getName = function () {
    return this._sClassName;
};
Metadata.prototype.getClass = function () {
    return this._oClass;
};
Metadata.prototype.getParent = function () {
    return this._oParent;
};
Metadata.prototype._dedupInterfaces = function () {
    if (!this._bInterfacesUnique) {
        fnUniqueSort(this._aInterfaces);
        fnUniqueSort(this._aPublicMethods);
        fnUniqueSort(this._aAllPublicMethods);
        this._bInterfacesUnique = true;
    }
};
Metadata.prototype.getPublicMethods = function () {
    this._dedupInterfaces();
    return this._aPublicMethods;
};
Metadata.prototype.getAllPublicMethods = function () {
    this._dedupInterfaces();
    return this._aAllPublicMethods;
};
Metadata.prototype.getInterfaces = function () {
    this._dedupInterfaces();
    return this._aInterfaces;
};
Metadata.prototype.isInstanceOf = function (sInterface) {
    if (this._oParent) {
        if (this._oParent.isInstanceOf(sInterface)) {
            return true;
        }
    }
    var a = this._aInterfaces;
    for (var i = 0, l = a.length; i < l; i++) {
        if (a[i] === sInterface) {
            return true;
        }
    }
    return false;
};
Object.defineProperty(Metadata.prototype, '_mImplementedTypes', {
    get: function () {
        if (this === Metadata.prototype) {
            throw new Error('sap.ui.base.Metadata: The \'_mImplementedTypes\' property must not be accessed on the prototype');
        }
        var result = Object.create(this._oParent ? this._oParent._mImplementedTypes : null);
        result[this._sClassName] = true;
        var aInterfaces = this._aInterfaces, i = aInterfaces.length;
        while (i-- > 0) {
            if (!result[aInterfaces[i]]) {
                result[aInterfaces[i]] = true;
            }
        }
        Object.defineProperty(this, '_mImplementedTypes', {
            value: Object.freeze(result),
            writable: false,
            configurable: false
        });
        return result;
    },
    configurable: true
});
Metadata.prototype.isA = function (vTypeName) {
    var mTypes = this._mImplementedTypes;
    if (Array.isArray(vTypeName)) {
        for (var i = 0; i < vTypeName.length; i++) {
            if (vTypeName[i] in mTypes) {
                return true;
            }
        }
        return false;
    }
    return vTypeName in mTypes;
};
Metadata.prototype.isAbstract = function () {
    return this._bAbstract;
};
Metadata.prototype.isFinal = function () {
    return this._bFinal;
};
Metadata.prototype.isDeprecated = function () {
    return this._bDeprecated;
};
Metadata.prototype.addPublicMethods = function (sMethod) {
    var aNames = sMethod instanceof Array ? sMethod : arguments;
    Array.prototype.push.apply(this._aPublicMethods, aNames);
    Array.prototype.push.apply(this._aAllPublicMethods, aNames);
    this._bInterfacesUnique = false;
};
Metadata.createClass = function (fnBaseClass, sClassName, oClassInfo, FNMetaImpl) {
    if (typeof fnBaseClass === 'string') {
        FNMetaImpl = oClassInfo;
        oClassInfo = sClassName;
        sClassName = fnBaseClass;
        fnBaseClass = null;
    }
    fnAssert(!fnBaseClass || typeof fnBaseClass === 'function');
    fnAssert(typeof sClassName === 'string' && !!sClassName);
    fnAssert(!oClassInfo || typeof oClassInfo === 'object');
    fnAssert(!FNMetaImpl || typeof FNMetaImpl === 'function');
    FNMetaImpl = FNMetaImpl || Metadata;
    if (typeof FNMetaImpl.preprocessClassInfo === 'function') {
        oClassInfo = FNMetaImpl.preprocessClassInfo(oClassInfo);
    }
    oClassInfo = oClassInfo || {};
    oClassInfo.metadata = oClassInfo.metadata || {};
    if (!oClassInfo.hasOwnProperty('constructor')) {
        oClassInfo.constructor = undefined;
    }
    var fnClass = oClassInfo.constructor;
    fnAssert(!fnClass || typeof fnClass === 'function');
    if (fnBaseClass) {
        if (!fnClass) {
            if (oClassInfo.metadata.deprecated) {
                fnClass = function () {
                    Log.warning('Usage of deprecated class: ' + sClassName);
                    fnBaseClass.apply(this, arguments);
                };
            } else {
                fnClass = function () {
                    fnBaseClass.apply(this, arguments);
                };
            }
        }
        fnClass.prototype = Object.create(fnBaseClass.prototype);
        fnClass.prototype.constructor = fnClass;
        oClassInfo.metadata.baseType = fnBaseClass.getMetadata().getName();
    } else {
        fnClass = fnClass || function () {
        };
        delete oClassInfo.metadata.baseType;
    }
    oClassInfo.constructor = fnClass;
    ObjectPath.set(sClassName, fnClass);
    var oMetadata = new FNMetaImpl(sClassName, oClassInfo);
    fnClass.getMetadata = fnClass.prototype.getMetadata = function () {
        return oMetadata;
    };
    if (!fnClass.getMetadata().isFinal()) {
        fnClass.extend = function (sSCName, oSCClassInfo, fnSCMetaImpl) {
            return Metadata.createClass(fnClass, sSCName, oSCClassInfo, fnSCMetaImpl || FNMetaImpl);
        };
    }
    return fnClass;
};

var BaseObject = Metadata.createClass('sap.ui.base.Object', {
    constructor: function () {
        if (!(this instanceof BaseObject)) {
            throw Error('Cannot instantiate object: "new" is missing!');
        }
    }
});
BaseObject.prototype.destroy = function () {
};
BaseObject.prototype.getInterface = function () {
    var oInterface = new Interface(this, this.getMetadata().getAllPublicMethods());
    this.getInterface = function () {
        return oInterface;
    };
    return oInterface;
};
BaseObject.defineClass = function (sClassName, oStaticInfo, FNMetaImpl) {
    var oMetadata = new (FNMetaImpl || Metadata)(sClassName, oStaticInfo);
    var fnClass = oMetadata.getClass();
    fnClass.getMetadata = fnClass.prototype.getMetadata = function () {
        return oMetadata;
    };
    if (!oMetadata.isFinal()) {
        fnClass.extend = function (sSCName, oSCClassInfo, fnSCMetaImpl) {
            return Metadata.createClass(fnClass, sSCName, oSCClassInfo, fnSCMetaImpl || FNMetaImpl);
        };
    }
    Log.debug('defined class \'' + sClassName + '\'' + (oMetadata.getParent() ? ' as subclass of ' + oMetadata.getParent().getName() : ''));
    return oMetadata;
};
BaseObject.prototype.isA = function (vTypeName) {
    return this.getMetadata().isA(vTypeName);
};
BaseObject.isA = function (oObject, vTypeName) {
    return oObject instanceof BaseObject && oObject.isA(vTypeName);
};

var class2type = {};
var hasOwn = class2type.hasOwnProperty;
var toString = class2type.toString;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call(Object);
var fnIsPlainObject = function (obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  proto = Object.getPrototypeOf(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
};

var oToken = Object.create(null);
var fnMerge = function () {
    var src, copyIsArray, copy, name, options, clone, target = arguments[2] || {}, i = 3, length = arguments.length, deep = arguments[0] || false, skipToken = arguments[1] ? undefined : oToken;
    if (typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (name === '__proto__' || target === copy) {
                    continue;
                }
                if (deep && copy && (fnIsPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && fnIsPlainObject(src) ? src : {};
                    }
                    target[name] = fnMerge(deep, arguments[1], clone, copy);
                } else if (copy !== skipToken) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};

var fnExtend = function () {
    var args = [
        false,
        true
    ];
    args.push.apply(args, arguments);
    return fnMerge.apply(null, args);
};

var CalendarType = {
  Gregorian: "Gregorian",
  Islamic: "Islamic",
  Japanese: "Japanese",
  Persian: "Persian",
  Buddhist: "Buddhist"
};

var rLocale = /^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
var Locale = BaseObject.extend('sap.ui.core.Locale', {
    constructor: function (sLocaleId) {
        BaseObject.apply(this);
        var aResult = rLocale.exec(sLocaleId.replace(/_/g, '-'));
        if (aResult === null) {
            throw new TypeError('The given language \'' + sLocaleId + '\' does not adhere to BCP-47.');
        }
        this.sLocaleId = sLocaleId;
        this.sLanguage = aResult[1] || null;
        this.sScript = aResult[2] || null;
        this.sRegion = aResult[3] || null;
        this.sVariant = aResult[4] && aResult[4].slice(1) || null;
        this.sExtension = aResult[5] && aResult[5].slice(1) || null;
        this.sPrivateUse = aResult[6] || null;
        if (this.sLanguage) {
            this.sLanguage = this.sLanguage.toLowerCase();
        }
        if (this.sScript) {
            this.sScript = this.sScript.toLowerCase().replace(/^[a-z]/, function ($) {
                return $.toUpperCase();
            });
        }
        if (this.sRegion) {
            this.sRegion = this.sRegion.toUpperCase();
        }
    },
    getLanguage: function () {
        return this.sLanguage;
    },
    getScript: function () {
        return this.sScript;
    },
    getRegion: function () {
        return this.sRegion;
    },
    getVariant: function () {
        return this.sVariant;
    },
    getVariantSubtags: function () {
        return this.sVariant ? this.sVariant.split('-') : [];
    },
    getExtension: function () {
        return this.sExtension;
    },
    getExtensionSubtags: function () {
        return this.sExtension ? this.sExtension.slice(2).split('-') : [];
    },
    getPrivateUse: function () {
        return this.sPrivateUse;
    },
    getPrivateUseSubtags: function () {
        return this.sPrivateUse ? this.sPrivateUse.slice(2).split('-') : [];
    },
    hasPrivateUseSubtag: function (sSubtag) {
        fnAssert(sSubtag && sSubtag.match(/^[0-9A-Z]{1,8}$/i), 'subtag must be a valid BCP47 private use tag');
        return this.getPrivateUseSubtags().indexOf(sSubtag) >= 0;
    },
    toString: function () {
        return join(this.sLanguage, this.sScript, this.sRegion, this.sVariant, this.sExtension, this.sPrivateUse);
    },
    toLanguageTag: function () {
        var sLanguage = this.getModernLanguage();
        var sScript = this.sScript;
        if (sLanguage === 'sr' && sScript === 'Latn') {
            sLanguage = 'sh';
            sScript = null;
        }
        return join(sLanguage, sScript, this.sRegion, this.sVariant, this.sExtension, this.sPrivateUse);
    },
    getModernLanguage: function () {
        return M_ISO639_OLD_TO_NEW$2[this.sLanguage] || this.sLanguage;
    },
    getSAPLogonLanguage: function () {
        var sLanguage = this.sLanguage || '';
        if (sLanguage.indexOf('-') >= 0) {
            sLanguage = sLanguage.slice(0, sLanguage.indexOf('-'));
        }
        sLanguage = M_ISO639_OLD_TO_NEW$2[sLanguage] || sLanguage;
        if (sLanguage === 'zh' && !this.sScript && this.sRegion === 'TW') {
            return 'ZF';
        }
        return M_LOCALE_TO_ABAP_LANGUAGE[join(sLanguage, this.sScript)] || M_LOCALE_TO_ABAP_LANGUAGE[join(sLanguage, this.sRegion)] || M_LOCALE_TO_ABAP_LANGUAGE[getPseudoLanguageTag(this.sPrivateUse)] || sLanguage.toUpperCase();
    }
});
function getPseudoLanguageTag(sPrivateUse) {
    if (sPrivateUse) {
        var m = /-(saptrc|sappsd|saprigi)(?:-|$)/i.exec(sPrivateUse);
        return m && 'en-US-x-' + m[1].toLowerCase();
    }
}
var M_ISO639_OLD_TO_NEW$2 = {
    'iw': 'he',
    'ji': 'yi'
};
var M_ABAP_LANGUAGE_TO_LOCALE = {
    'ZH': 'zh-Hans',
    'ZF': 'zh-Hant',
    'SH': 'sr-Latn',
    '6N': 'en-GB',
    '1X': 'es-MX',
    '1Q': 'en-US-x-saptrc',
    '2Q': 'en-US-x-sappsd',
    '3Q': 'en-US-x-saprigi'
};
var M_LOCALE_TO_ABAP_LANGUAGE = inverse(M_ABAP_LANGUAGE_TO_LOCALE);
function getDesigntimePropertyAsArray(sValue) {
    var m = /\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(sValue);
    return m && m[2] ? m[2].split(/,/) : null;
}
var A_RTL_LOCALES = getDesigntimePropertyAsArray('$cldr-rtl-locales:ar,fa,he$') || [];
Locale._cldrLocales = getDesigntimePropertyAsArray('$cldr-locales:ar,ar_EG,ar_SA,bg,ca,cy,cs,da,de,de_AT,de_CH,el,el_CY,en,en_AU,en_GB,en_HK,en_IE,en_IN,en_NZ,en_PG,en_SG,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_MX,es_PE,es_UY,es_VE,et,fa,fi,fr,fr_BE,fr_CA,fr_CH,fr_LU,he,hi,hr,hu,id,it,it_CH,ja,kk,ko,lt,lv,ms,nb,nl,nl_BE,pl,pt,pt_PT,ro,ru,ru_UA,sk,sl,sr,sr_Latn,sv,th,tr,uk,vi,zh_CN,zh_HK,zh_SG,zh_TW$');
Locale._coreI18nLocales = getDesigntimePropertyAsArray('$core-i18n-locales:,ar,bg,ca,cs,da,de,el,en,en_GB,es,es_MX,et,fi,fr,hi,hr,hu,it,iw,ja,kk,ko,lt,lv,ms,nl,no,pl,pt,ro,ru,sh,sk,sl,sv,th,tr,uk,vi,zh_CN,zh_TW$');
Locale._impliesRTL = function (vLanguage) {
    var oLocale = vLanguage instanceof Locale ? vLanguage : new Locale(vLanguage);
    var sLanguage = oLocale.getLanguage() || '';
    sLanguage = sLanguage && M_ISO639_OLD_TO_NEW$2[sLanguage] || sLanguage;
    var sRegion = oLocale.getRegion() || '';
    if (sRegion && A_RTL_LOCALES.indexOf(sLanguage + '_' + sRegion) >= 0) {
        return true;
    }
    return A_RTL_LOCALES.indexOf(sLanguage) >= 0;
};
Locale.fromSAPLogonLanguage = function (sSAPLogonLanguage) {
    if (sSAPLogonLanguage && typeof sSAPLogonLanguage === 'string') {
        sSAPLogonLanguage = M_ABAP_LANGUAGE_TO_LOCALE[sSAPLogonLanguage.toUpperCase()] || sSAPLogonLanguage;
        try {
            return new Locale(sSAPLogonLanguage);
        } catch (e) {
        }
    }
};
function join() {
    return Array.prototype.filter.call(arguments, Boolean).join('-');
}
function inverse(obj) {
    return Object.keys(obj).reduce(function (inv, key) {
        inv[obj[key]] = key;
        return inv;
    }, {});
}

const localeDataMap = new Map();
const loaders = new Map();
const cldrPromises = new Map();
const reportedErrors = new Set();
let warningShown = false;

const M_ISO639_OLD_TO_NEW$1 = {
	"iw": "he",
	"ji": "yi",
	"in": "id",
	"sh": "sr",
};

const _showAssetsWarningOnce = localeId => {
	if (!warningShown) {
		console.warn(`[LocaleData] Supported locale "${localeId}" not configured, import the "Assets.js" module from the webcomponents package you are using.`); /* eslint-disable-line */
		warningShown = true;
	}
};

const calcLocale = (language, region, script) => {
	// normalize language and handle special cases
	language = (language && M_ISO639_OLD_TO_NEW$1[language]) || language;
	// Special case 1: in an SAP context, the inclusive language code "no" always means Norwegian Bokmal ("nb")
	if (language === "no") {
		language = "nb";
	}
	// Special case 2: for Chinese, derive a default region from the script (this behavior is inherited from Java)
	if (language === "zh" && !region) {
		if (script === "Hans") {
			region = "CN";
		} else if (script === "Hant") {
			region = "TW";
		}
	}

	// try language + region
	let localeId = `${language}_${region}`;
	if (SUPPORTED_LOCALES.includes(localeId)) {
		if (loaders.has(localeId)) {
			// supported and has loader
			return localeId;
		}

		// supported, no loader - fallback to default and warn
		_showAssetsWarningOnce(localeId);
		return DEFAULT_LOCALE;
	}

	// not supported, try language only
	localeId = language;
	if (SUPPORTED_LOCALES.includes(localeId)) {
		if (loaders.has(localeId)) {
			// supported and has loader
			return localeId;
		}

		// supported, no loader - fallback to default and warn
		_showAssetsWarningOnce(localeId);
		return DEFAULT_LOCALE;
	}

	// not supported - fallback to default locale
	return DEFAULT_LOCALE;
};

// internal set data
const setLocaleData = (localeId, content) => {
	localeDataMap.set(localeId, content);
};

// external getSync
const getLocaleData = localeId => {
	// if there is no loader, the default fallback was fetched and a warning was given - use default locale instead
	if (!loaders.has(localeId)) {
		localeId = DEFAULT_LOCALE;
	}

	const content = localeDataMap.get(localeId);
	if (!content) {
		throw new Error(`CLDR data for locale ${localeId} is not loaded!`);
	}

	return content;
};

// load bundle over the network once
const _loadCldrOnce = localeId => {
	const loadCldr = loaders.get(localeId);

	if (!cldrPromises.get(localeId)) {
		cldrPromises.set(localeId, loadCldr(localeId));
	}

	return cldrPromises.get(localeId);
};

// external getAsync
const fetchCldr = async (language, region, script) => {
	const localeId = calcLocale(language, region, script);

	// reuse OpenUI5 CLDR if present
	const OpenUI5Support = getFeature("OpenUI5Support");
	if (OpenUI5Support) {
		const cldrContent = OpenUI5Support.getLocaleDataObject();
		if (cldrContent) {
			// only if openui5 actually returned valid content
			setLocaleData(localeId, cldrContent);
			return;
		}
	}

	// fetch it
	try {
		const cldrContent = await _loadCldrOnce(localeId);
		setLocaleData(localeId, cldrContent);
	} catch (e) {
		if (!reportedErrors.has(e.message)) {
			reportedErrors.add(e.message);
			console.error(e.message); /* eslint-disable-line */
		}
	}
};

const registerLocaleDataLoader = (localeId, loader) => {
	loaders.set(localeId, loader);
};

// register default loader for "en" from ui5 CDN (dev workflow without assets)
registerLocaleDataLoader("en", async runtimeLocaleId => {
	return (await fetch(`https://ui5.sap.com/1.60.2/resources/sap/ui/core/cldr/en.json`)).json();
});

// When the language changes dynamically (the user calls setLanguage),
// re-fetch the required CDRD data.
attachLanguageChange(() => {
	const locale = getLocale();
	return fetchCldr(locale.getLanguage(), locale.getRegion(), locale.getScript());
});

const loadResource = moduleName => {
	const moduleFormat = moduleName.match(/sap\/ui\/core\/cldr\/(\w+)\.json/);
	if (!moduleFormat) {
		throw new Error(`Unknown module "${moduleName}"`);
	}

	const localeId = moduleFormat[1];
	return getLocaleData(localeId);
};

const LoaderExtensions = {
	loadResource,
};

var LocaleData = BaseObject.extend('sap.ui.core.LocaleData', {
    constructor: function (oLocale) {
        this.oLocale = oLocale;
        BaseObject.apply(this);
        this.mData = getData(oLocale);
    },
    _get: function () {
        return this._getDeep(this.mData, arguments);
    },
    _getMerged: function () {
        return this._get.apply(this, arguments);
    },
    _getDeep: function (oObject, aPropertyNames) {
        var oResult = oObject;
        for (var i = 0; i < aPropertyNames.length; i++) {
            oResult = oResult[aPropertyNames[i]];
            if (oResult === undefined) {
                break;
            }
        }
        return oResult;
    },
    getOrientation: function () {
        return this._get('orientation');
    },
    getCurrentLanguageName: function () {
        var oLanguages = this.getLanguages();
        var sCurrentLanguage;
        var sLanguage = this.oLocale.getModernLanguage();
        var sScript = this.oLocale.getScript();
        if (sLanguage === 'sr' && sScript === 'Latn') {
            sLanguage = 'sh';
            sScript = null;
        }
        if (this.oLocale.getRegion()) {
            sCurrentLanguage = oLanguages[sLanguage + '_' + this.oLocale.getRegion()];
        }
        if (!sCurrentLanguage && sScript) {
            sCurrentLanguage = oLanguages[sLanguage + '_' + sScript];
        }
        if (!sCurrentLanguage) {
            sCurrentLanguage = oLanguages[sLanguage];
        }
        return sCurrentLanguage;
    },
    getLanguages: function () {
        return this._get('languages');
    },
    getScripts: function () {
        return this._get('scripts');
    },
    getTerritories: function () {
        return this._get('territories');
    },
    getMonths: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide', 'sWidth must be narrow, abbreviated or wide');
        return this._get(getCLDRCalendarName(sCalendarType), 'months', 'format', sWidth);
    },
    getMonthsStandAlone: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide', 'sWidth must be narrow, abbreviated or wide');
        return this._get(getCLDRCalendarName(sCalendarType), 'months', 'stand-alone', sWidth);
    },
    getDays: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide' || sWidth == 'short', 'sWidth must be narrow, abbreviate, wide or short');
        return this._get(getCLDRCalendarName(sCalendarType), 'days', 'format', sWidth);
    },
    getDaysStandAlone: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide' || sWidth == 'short', 'sWidth must be narrow, abbreviated, wide or short');
        return this._get(getCLDRCalendarName(sCalendarType), 'days', 'stand-alone', sWidth);
    },
    getQuarters: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide', 'sWidth must be narrow, abbreviated or wide');
        return this._get(getCLDRCalendarName(sCalendarType), 'quarters', 'format', sWidth);
    },
    getQuartersStandAlone: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide', 'sWidth must be narrow, abbreviated or wide');
        return this._get(getCLDRCalendarName(sCalendarType), 'quarters', 'stand-alone', sWidth);
    },
    getDayPeriods: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide', 'sWidth must be narrow, abbreviated or wide');
        return this._get(getCLDRCalendarName(sCalendarType), 'dayPeriods', 'format', sWidth);
    },
    getDayPeriodsStandAlone: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'narrow' || sWidth == 'abbreviated' || sWidth == 'wide', 'sWidth must be narrow, abbreviated or wide');
        return this._get(getCLDRCalendarName(sCalendarType), 'dayPeriods', 'stand-alone', sWidth);
    },
    getDatePattern: function (sStyle, sCalendarType) {
        fnAssert(sStyle == 'short' || sStyle == 'medium' || sStyle == 'long' || sStyle == 'full', 'sStyle must be short, medium, long or full');
        return this._get(getCLDRCalendarName(sCalendarType), 'dateFormats', sStyle);
    },
    getTimePattern: function (sStyle, sCalendarType) {
        fnAssert(sStyle == 'short' || sStyle == 'medium' || sStyle == 'long' || sStyle == 'full', 'sStyle must be short, medium, long or full');
        return this._get(getCLDRCalendarName(sCalendarType), 'timeFormats', sStyle);
    },
    getDateTimePattern: function (sStyle, sCalendarType) {
        fnAssert(sStyle == 'short' || sStyle == 'medium' || sStyle == 'long' || sStyle == 'full', 'sStyle must be short, medium, long or full');
        return this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', sStyle);
    },
    getCombinedDateTimePattern: function (sDateStyle, sTimeStyle, sCalendarType) {
        fnAssert(sDateStyle == 'short' || sDateStyle == 'medium' || sDateStyle == 'long' || sDateStyle == 'full', 'sStyle must be short, medium, long or full');
        fnAssert(sTimeStyle == 'short' || sTimeStyle == 'medium' || sTimeStyle == 'long' || sTimeStyle == 'full', 'sStyle must be short, medium, long or full');
        var sDateTimePattern = this.getDateTimePattern(sDateStyle, sCalendarType), sDatePattern = this.getDatePattern(sDateStyle, sCalendarType), sTimePattern = this.getTimePattern(sTimeStyle, sCalendarType);
        return sDateTimePattern.replace('{0}', sTimePattern).replace('{1}', sDatePattern);
    },
    getCustomDateTimePattern: function (sSkeleton, sCalendarType) {
        var oAvailableFormats = this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', 'availableFormats');
        return this._getFormatPattern(sSkeleton, oAvailableFormats, sCalendarType);
    },
    getIntervalPattern: function (sId, sCalendarType) {
        var oIntervalFormats = this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', 'intervalFormats'), aIdParts, sIntervalId, sDifference, oInterval, sPattern;
        if (sId) {
            aIdParts = sId.split('-');
            sIntervalId = aIdParts[0];
            sDifference = aIdParts[1];
            oInterval = oIntervalFormats[sIntervalId];
            if (oInterval) {
                sPattern = oInterval[sDifference];
                if (sPattern) {
                    return sPattern;
                }
            }
        }
        return oIntervalFormats.intervalFormatFallback;
    },
    getCombinedIntervalPattern: function (sPattern, sCalendarType) {
        var oIntervalFormats = this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', 'intervalFormats'), sFallbackPattern = oIntervalFormats.intervalFormatFallback;
        return sFallbackPattern.replace(/\{(0|1)\}/g, sPattern);
    },
    getCustomIntervalPattern: function (sSkeleton, vGreatestDiff, sCalendarType) {
        var oAvailableFormats = this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', 'intervalFormats');
        return this._getFormatPattern(sSkeleton, oAvailableFormats, sCalendarType, vGreatestDiff);
    },
    _getFormatPattern: function (sSkeleton, oAvailableFormats, sCalendarType, vDiff) {
        var vPattern, aPatterns, oIntervalFormats;
        if (!vDiff) {
            vPattern = oAvailableFormats[sSkeleton];
        } else if (typeof vDiff === 'string') {
            if (vDiff == 'j' || vDiff == 'J') {
                vDiff = this.getPreferredHourSymbol();
            }
            oIntervalFormats = oAvailableFormats[sSkeleton];
            vPattern = oIntervalFormats && oIntervalFormats[vDiff];
        }
        if (vPattern) {
            if (typeof vPattern === 'object') {
                aPatterns = Object.keys(vPattern).map(function (sKey) {
                    return vPattern[sKey];
                });
            } else {
                return vPattern;
            }
        }
        if (!aPatterns) {
            aPatterns = this._createFormatPattern(sSkeleton, oAvailableFormats, sCalendarType, vDiff);
        }
        if (aPatterns && aPatterns.length === 1) {
            return aPatterns[0];
        }
        return aPatterns;
    },
    _createFormatPattern: function (sSkeleton, oAvailableFormats, sCalendarType, vDiff) {
        var aTokens = this._parseSkeletonFormat(sSkeleton), aPatterns, oBestMatch = this._findBestMatch(aTokens, sSkeleton, oAvailableFormats), oToken, oAvailableDateTimeFormats, oSymbol, oGroup, sPattern, sSinglePattern, sDiffSymbol, sDiffGroup, rMixedSkeleton = /^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/, bSingleDate, i;
        if (vDiff) {
            if (typeof vDiff === 'string') {
                sDiffGroup = mCLDRSymbols[vDiff] ? mCLDRSymbols[vDiff].group : '';
                if (sDiffGroup) {
                    bSingleDate = mCLDRSymbolGroups[sDiffGroup].index > aTokens[aTokens.length - 1].index;
                }
                sDiffSymbol = vDiff;
            } else {
                bSingleDate = true;
                if (aTokens[0].symbol === 'y' && oBestMatch && oBestMatch.pattern.G) {
                    oSymbol = mCLDRSymbols['G'];
                    oGroup = mCLDRSymbolGroups[oSymbol.group];
                    aTokens.splice(0, 0, {
                        symbol: 'G',
                        group: oSymbol.group,
                        match: oSymbol.match,
                        index: oGroup.index,
                        field: oGroup.field,
                        length: 1
                    });
                }
                for (i = aTokens.length - 1; i >= 0; i--) {
                    oToken = aTokens[i];
                    if (vDiff[oToken.group]) {
                        bSingleDate = false;
                        break;
                    }
                }
                for (i = 0; i < aTokens.length; i++) {
                    oToken = aTokens[i];
                    if (vDiff[oToken.group]) {
                        sDiffSymbol = oToken.symbol;
                        break;
                    }
                }
                if ((sDiffSymbol == 'h' || sDiffSymbol == 'K') && vDiff.DayPeriod) {
                    sDiffSymbol = 'a';
                }
            }
            if (bSingleDate) {
                return [this.getCustomDateTimePattern(sSkeleton, sCalendarType)];
            }
            if (oBestMatch && oBestMatch.missingTokens.length === 0) {
                sPattern = oBestMatch.pattern[sDiffSymbol];
                if (sPattern && oBestMatch.distance > 0) {
                    sPattern = this._expandFields(sPattern, oBestMatch.patternTokens, aTokens);
                }
            }
            if (!sPattern) {
                oAvailableDateTimeFormats = this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', 'availableFormats');
                if (rMixedSkeleton.test(sSkeleton) && 'ahHkKjJms'.indexOf(sDiffSymbol) >= 0) {
                    sPattern = this._getMixedFormatPattern(sSkeleton, oAvailableDateTimeFormats, sCalendarType, vDiff);
                } else {
                    sSinglePattern = this._getFormatPattern(sSkeleton, oAvailableDateTimeFormats, sCalendarType);
                    sPattern = this.getCombinedIntervalPattern(sSinglePattern, sCalendarType);
                }
            }
            aPatterns = [sPattern];
        } else if (!oBestMatch) {
            sPattern = sSkeleton;
            aPatterns = [sPattern];
        } else {
            if (typeof oBestMatch.pattern === 'string') {
                aPatterns = [oBestMatch.pattern];
            } else if (typeof oBestMatch.pattern === 'object') {
                aPatterns = [];
                for (var sKey in oBestMatch.pattern) {
                    sPattern = oBestMatch.pattern[sKey];
                    aPatterns.push(sPattern);
                }
            }
            if (oBestMatch.distance > 0) {
                if (oBestMatch.missingTokens.length > 0) {
                    if (rMixedSkeleton.test(sSkeleton)) {
                        aPatterns = [this._getMixedFormatPattern(sSkeleton, oAvailableFormats, sCalendarType)];
                    } else {
                        aPatterns = this._expandFields(aPatterns, oBestMatch.patternTokens, aTokens);
                        aPatterns = this._appendItems(aPatterns, oBestMatch.missingTokens, sCalendarType);
                    }
                } else {
                    aPatterns = this._expandFields(aPatterns, oBestMatch.patternTokens, aTokens);
                }
            }
        }
        if (sSkeleton.indexOf('J') >= 0) {
            aPatterns.forEach(function (sPattern, iIndex) {
                aPatterns[iIndex] = sPattern.replace(/ ?[abB](?=([^']*'[^']*')*[^']*)$/g, '');
            });
        }
        return aPatterns;
    },
    _parseSkeletonFormat: function (sSkeleton) {
        var aTokens = [], oToken = { index: -1 }, sSymbol, oSymbol, oGroup;
        for (var i = 0; i < sSkeleton.length; i++) {
            sSymbol = sSkeleton.charAt(i);
            if (sSymbol == 'j' || sSymbol == 'J') {
                sSymbol = this.getPreferredHourSymbol();
            }
            if (sSymbol == oToken.symbol) {
                oToken.length++;
                continue;
            }
            oSymbol = mCLDRSymbols[sSymbol];
            oGroup = mCLDRSymbolGroups[oSymbol.group];
            if (oSymbol.group == 'Other' || oGroup.diffOnly) {
                throw new Error('Symbol \'' + sSymbol + '\' is not allowed in skeleton format \'' + sSkeleton + '\'');
            }
            if (oGroup.index <= oToken.index) {
                throw new Error('Symbol \'' + sSymbol + '\' at wrong position or duplicate in skeleton format \'' + sSkeleton + '\'');
            }
            oToken = {
                symbol: sSymbol,
                group: oSymbol.group,
                match: oSymbol.match,
                index: oGroup.index,
                field: oGroup.field,
                length: 1
            };
            aTokens.push(oToken);
        }
        return aTokens;
    },
    _findBestMatch: function (aTokens, sSkeleton, oAvailableFormats) {
        var aTestTokens, aMissingTokens, oToken, oTestToken, iTest, iDistance, bMatch, iFirstDiffPos, oTokenSymbol, oTestTokenSymbol, oBestMatch = {
                distance: 10000,
                firstDiffPos: -1
            };
        for (var sTestSkeleton in oAvailableFormats) {
            if (sTestSkeleton === 'intervalFormatFallback' || sTestSkeleton.indexOf('B') > -1) {
                continue;
            }
            aTestTokens = this._parseSkeletonFormat(sTestSkeleton);
            iDistance = 0;
            aMissingTokens = [];
            bMatch = true;
            if (aTokens.length < aTestTokens.length) {
                continue;
            }
            iTest = 0;
            iFirstDiffPos = aTokens.length;
            for (var i = 0; i < aTokens.length; i++) {
                oToken = aTokens[i];
                oTestToken = aTestTokens[iTest];
                if (iFirstDiffPos === aTokens.length) {
                    iFirstDiffPos = i;
                }
                if (oTestToken) {
                    oTokenSymbol = mCLDRSymbols[oToken.symbol];
                    oTestTokenSymbol = mCLDRSymbols[oTestToken.symbol];
                    if (oToken.symbol === oTestToken.symbol) {
                        if (oToken.length === oTestToken.length) {
                            if (iFirstDiffPos === i) {
                                iFirstDiffPos = aTokens.length;
                            }
                        } else {
                            if (oToken.length < oTokenSymbol.numericCeiling ? oTestToken.length < oTestTokenSymbol.numericCeiling : oTestToken.length >= oTestTokenSymbol.numericCeiling) {
                                iDistance += Math.abs(oToken.length - oTestToken.length);
                            } else {
                                iDistance += 5;
                            }
                        }
                        iTest++;
                        continue;
                    } else {
                        if (oToken.match == oTestToken.match) {
                            iDistance += Math.abs(oToken.length - oTestToken.length) + 10;
                            iTest++;
                            continue;
                        }
                    }
                }
                aMissingTokens.push(oToken);
                iDistance += 50 - i;
            }
            if (iTest < aTestTokens.length) {
                bMatch = false;
            }
            if (bMatch && (iDistance < oBestMatch.distance || iDistance === oBestMatch.distance && iFirstDiffPos > oBestMatch.firstDiffPos)) {
                oBestMatch.distance = iDistance;
                oBestMatch.firstDiffPos = iFirstDiffPos;
                oBestMatch.missingTokens = aMissingTokens;
                oBestMatch.pattern = oAvailableFormats[sTestSkeleton];
                oBestMatch.patternTokens = aTestTokens;
            }
        }
        if (oBestMatch.pattern) {
            return oBestMatch;
        }
    },
    _expandFields: function (vPattern, aPatternTokens, aTokens) {
        var bSinglePattern = typeof vPattern === 'string';
        var aPatterns;
        if (bSinglePattern) {
            aPatterns = [vPattern];
        } else {
            aPatterns = vPattern;
        }
        var aResult = aPatterns.map(function (sPattern) {
            var mGroups = {}, mPatternGroups = {}, sResultPatterm = '', bQuoted = false, i = 0, iSkeletonLength, iPatternLength, iBestLength, iNewLength, oSkeletonToken, oBestToken, oSymbol, sChar;
            aTokens.forEach(function (oToken) {
                mGroups[oToken.group] = oToken;
            });
            aPatternTokens.forEach(function (oToken) {
                mPatternGroups[oToken.group] = oToken;
            });
            while (i < sPattern.length) {
                sChar = sPattern.charAt(i);
                if (bQuoted) {
                    sResultPatterm += sChar;
                    if (sChar == '\'') {
                        bQuoted = false;
                    }
                } else {
                    oSymbol = mCLDRSymbols[sChar];
                    if (oSymbol && mGroups[oSymbol.group] && mPatternGroups[oSymbol.group]) {
                        oSkeletonToken = mGroups[oSymbol.group];
                        oBestToken = mPatternGroups[oSymbol.group];
                        iSkeletonLength = oSkeletonToken.length;
                        iBestLength = oBestToken.length;
                        iPatternLength = 1;
                        while (sPattern.charAt(i + 1) == sChar) {
                            i++;
                            iPatternLength++;
                        }
                        if (iSkeletonLength === iBestLength || (iSkeletonLength < oSymbol.numericCeiling ? iPatternLength >= oSymbol.numericCeiling : iPatternLength < oSymbol.numericCeiling)) {
                            iNewLength = iPatternLength;
                        } else {
                            iNewLength = Math.max(iPatternLength, iSkeletonLength);
                        }
                        for (var j = 0; j < iNewLength; j++) {
                            sResultPatterm += sChar;
                        }
                    } else {
                        sResultPatterm += sChar;
                        if (sChar == '\'') {
                            bQuoted = true;
                        }
                    }
                }
                i++;
            }
            return sResultPatterm;
        });
        return bSinglePattern ? aResult[0] : aResult;
    },
    _appendItems: function (aPatterns, aMissingTokens, sCalendarType) {
        var oAppendItems = this._get(getCLDRCalendarName(sCalendarType), 'dateTimeFormats', 'appendItems');
        aPatterns.forEach(function (sPattern, iIndex) {
            var sDisplayName, sAppendPattern, sAppendField;
            aMissingTokens.forEach(function (oToken) {
                sAppendPattern = oAppendItems[oToken.group];
                sDisplayName = '\'' + this.getDisplayName(oToken.field) + '\'';
                sAppendField = '';
                for (var i = 0; i < oToken.length; i++) {
                    sAppendField += oToken.symbol;
                }
                aPatterns[iIndex] = sAppendPattern.replace(/\{0\}/, sPattern).replace(/\{1\}/, sAppendField).replace(/\{2\}/, sDisplayName);
            }.bind(this));
        }.bind(this));
        return aPatterns;
    },
    _getMixedFormatPattern: function (sSkeleton, oAvailableFormats, sCalendarType, vDiff) {
        var rMixedSkeleton = /^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/, rWideMonth = /MMMM|LLLL/, rAbbrevMonth = /MMM|LLL/, rWeekDay = /E|e|c/, oResult, sDateSkeleton, sTimeSkeleton, sStyle, sDatePattern, sTimePattern, sDateTimePattern, sResultPattern;
        oResult = rMixedSkeleton.exec(sSkeleton);
        sDateSkeleton = oResult[1];
        sTimeSkeleton = oResult[2];
        sDatePattern = this._getFormatPattern(sDateSkeleton, oAvailableFormats, sCalendarType);
        if (vDiff) {
            sTimePattern = this.getCustomIntervalPattern(sTimeSkeleton, vDiff, sCalendarType);
        } else {
            sTimePattern = this._getFormatPattern(sTimeSkeleton, oAvailableFormats, sCalendarType);
        }
        if (rWideMonth.test(sDateSkeleton)) {
            sStyle = rWeekDay.test(sDateSkeleton) ? 'full' : 'long';
        } else if (rAbbrevMonth.test(sDateSkeleton)) {
            sStyle = 'medium';
        } else {
            sStyle = 'short';
        }
        sDateTimePattern = this.getDateTimePattern(sStyle, sCalendarType);
        sResultPattern = sDateTimePattern.replace(/\{1\}/, sDatePattern).replace(/\{0\}/, sTimePattern);
        return sResultPattern;
    },
    getNumberSymbol: function (sType) {
        fnAssert(sType == 'decimal' || sType == 'group' || sType == 'plusSign' || sType == 'minusSign' || sType == 'percentSign', 'sType must be decimal, group, plusSign, minusSign or percentSign');
        return this._get('symbols-latn-' + sType);
    },
    getLenientNumberSymbols: function (sType) {
        fnAssert(sType == 'plusSign' || sType == 'minusSign', 'sType must be plusSign or minusSign');
        return this._get('lenient-scope-number')[sType];
    },
    getDecimalPattern: function () {
        return this._get('decimalFormat').standard;
    },
    getCurrencyPattern: function (sContext) {
        return this._get('currencyFormat')[sContext] || this._get('currencyFormat').standard;
    },
    getCurrencySpacing: function (sPosition) {
        return this._get('currencyFormat', 'currencySpacing', sPosition === 'after' ? 'afterCurrency' : 'beforeCurrency');
    },
    getPercentPattern: function () {
        return this._get('percentFormat').standard;
    },
    getMiscPattern: function (sName) {
        fnAssert(sName == 'approximately' || sName == 'atLeast' || sName == 'atMost' || sName == 'range', 'sName must be approximately, atLeast, atMost or range');
        return this._get('miscPattern')[sName];
    },
    getMinimalDaysInFirstWeek: function () {
        return this._get('weekData-minDays');
    },
    getFirstDayOfWeek: function () {
        return this._get('weekData-firstDay');
    },
    getWeekendStart: function () {
        return this._get('weekData-weekendStart');
    },
    getWeekendEnd: function () {
        return this._get('weekData-weekendEnd');
    },
    getCustomCurrencyCodes: function () {
        var mCustomCurrencies = this._get('currency') || {}, mCustomCurrencyCodes = {};
        Object.keys(mCustomCurrencies).forEach(function (sCurrencyKey) {
            mCustomCurrencyCodes[sCurrencyKey] = sCurrencyKey;
        });
        return mCustomCurrencyCodes;
    },
    getCurrencyDigits: function (sCurrency) {
        var mCustomCurrencies = this._get('currency');
        if (mCustomCurrencies) {
            if (mCustomCurrencies[sCurrency] && mCustomCurrencies[sCurrency].hasOwnProperty('digits')) {
                return mCustomCurrencies[sCurrency].digits;
            } else if (mCustomCurrencies['DEFAULT'] && mCustomCurrencies['DEFAULT'].hasOwnProperty('digits')) {
                return mCustomCurrencies['DEFAULT'].digits;
            }
        }
        var iDigits = this._get('currencyDigits', sCurrency);
        if (iDigits == null) {
            iDigits = this._get('currencyDigits', 'DEFAULT');
            if (iDigits == null) {
                iDigits = 2;
            }
        }
        return iDigits;
    },
    getCurrencySymbol: function (sCurrency) {
        var oCurrencySymbols = this.getCurrencySymbols();
        return oCurrencySymbols && oCurrencySymbols[sCurrency] || sCurrency;
    },
    getCurrencyCodeBySymbol: function (sCurrencySymbol) {
        var oCurrencySymbols = this._get('currencySymbols'), sCurrencyCode;
        for (sCurrencyCode in oCurrencySymbols) {
            if (oCurrencySymbols[sCurrencyCode] === sCurrencySymbol) {
                return sCurrencyCode;
            }
        }
        return sCurrencySymbol;
    },
    getCurrencySymbols: function () {
        var mCustomCurrencies = this._get('currency'), mCustomCurrencySymbols = {}, sIsoCode;
        for (var sCurrencyKey in mCustomCurrencies) {
            sIsoCode = mCustomCurrencies[sCurrencyKey].isoCode;
            if (mCustomCurrencies[sCurrencyKey].symbol) {
                mCustomCurrencySymbols[sCurrencyKey] = mCustomCurrencies[sCurrencyKey].symbol;
            } else if (sIsoCode) {
                mCustomCurrencySymbols[sCurrencyKey] = this._get('currencySymbols')[sIsoCode];
            }
        }
        return Object.assign({}, this._get('currencySymbols'), mCustomCurrencySymbols);
    },
    getUnitDisplayName: function (sUnit) {
        var mUnitFormat = this.getUnitFormat(sUnit);
        return mUnitFormat && mUnitFormat['displayName'] || '';
    },
    getRelativePatterns: function (aScales, sStyle) {
        if (sStyle === undefined) {
            sStyle = 'wide';
        }
        fnAssert(sStyle === 'wide' || sStyle === 'short' || sStyle === 'narrow', 'sStyle is only allowed to be set with \'wide\', \'short\' or \'narrow\'');
        var aPatterns = [], aPluralCategories = this.getPluralCategories(), oScale, oTimeEntry, iValue, iSign;
        if (!aScales) {
            aScales = [
                'year',
                'month',
                'week',
                'day',
                'hour',
                'minute',
                'second'
            ];
        }
        aScales.forEach(function (sScale) {
            oScale = this._get('dateFields', sScale + '-' + sStyle);
            for (var sEntry in oScale) {
                if (sEntry.indexOf('relative-type-') === 0) {
                    iValue = parseInt(sEntry.substr(14));
                    aPatterns.push({
                        scale: sScale,
                        value: iValue,
                        pattern: oScale[sEntry]
                    });
                } else if (sEntry.indexOf('relativeTime-type-') == 0) {
                    oTimeEntry = oScale[sEntry];
                    iSign = sEntry.substr(18) === 'past' ? -1 : 1;
                    aPluralCategories.forEach(function (sKey) {
                        aPatterns.push({
                            scale: sScale,
                            sign: iSign,
                            pattern: oTimeEntry['relativeTimePattern-count-' + sKey]
                        });
                    });
                }
            }
        }.bind(this));
        return aPatterns;
    },
    getRelativePattern: function (sScale, iDiff, bFuture, sStyle) {
        var sPattern, oTypes, sKey, sPluralCategory;
        if (typeof bFuture === 'string') {
            sStyle = bFuture;
            bFuture = undefined;
        }
        if (bFuture === undefined) {
            bFuture = iDiff > 0;
        }
        if (sStyle === undefined) {
            sStyle = 'wide';
        }
        fnAssert(sStyle === 'wide' || sStyle === 'short' || sStyle === 'narrow', 'sStyle is only allowed to be set with \'wide\', \'short\' or \'narrow\'');
        sKey = sScale + '-' + sStyle;
        if (iDiff === 0 || iDiff === -2 || iDiff === 2) {
            sPattern = this._get('dateFields', sKey, 'relative-type-' + iDiff);
        }
        if (!sPattern) {
            oTypes = this._get('dateFields', sKey, 'relativeTime-type-' + (bFuture ? 'future' : 'past'));
            sPluralCategory = this.getPluralCategory(Math.abs(iDiff).toString());
            sPattern = oTypes['relativeTimePattern-count-' + sPluralCategory];
        }
        return sPattern;
    },
    getRelativeSecond: function (iDiff, sStyle) {
        return this.getRelativePattern('second', iDiff, sStyle);
    },
    getRelativeMinute: function (iDiff, sStyle) {
        if (iDiff == 0) {
            return null;
        }
        return this.getRelativePattern('minute', iDiff, sStyle);
    },
    getRelativeHour: function (iDiff, sStyle) {
        if (iDiff == 0) {
            return null;
        }
        return this.getRelativePattern('hour', iDiff, sStyle);
    },
    getRelativeDay: function (iDiff, sStyle) {
        return this.getRelativePattern('day', iDiff, sStyle);
    },
    getRelativeWeek: function (iDiff, sStyle) {
        return this.getRelativePattern('week', iDiff, sStyle);
    },
    getRelativeMonth: function (iDiff, sStyle) {
        return this.getRelativePattern('month', iDiff, sStyle);
    },
    getDisplayName: function (sType, sStyle) {
        fnAssert(sType == 'second' || sType == 'minute' || sType == 'hour' || sType == 'zone' || sType == 'day' || sType == 'weekday' || sType == 'week' || sType == 'month' || sType == 'quarter' || sType == 'year' || sType == 'era', 'sType must be second, minute, hour, zone, day, weekday, week, month, quarter, year, era');
        if (sStyle === undefined) {
            sStyle = 'wide';
        }
        fnAssert(sStyle === 'wide' || sStyle === 'short' || sStyle === 'narrow', 'sStyle is only allowed to be set with \'wide\', \'short\' or \'narrow\'');
        var aSingleFormFields = [
                'era',
                'weekday',
                'zone'
            ], sKey = aSingleFormFields.indexOf(sType) === -1 ? sType + '-' + sStyle : sType;
        return this._get('dateFields', sKey, 'displayName');
    },
    getRelativeYear: function (iDiff, sStyle) {
        return this.getRelativePattern('year', iDiff, sStyle);
    },
    getDecimalFormat: function (sStyle, sNumber, sPlural) {
        var sFormat;
        var oFormats;
        switch (sStyle) {
        case 'long':
            oFormats = this._get('decimalFormat-long');
            break;
        default:
            oFormats = this._get('decimalFormat-short');
            break;
        }
        if (oFormats) {
            var sName = sNumber + '-' + sPlural;
            sFormat = oFormats[sName];
            if (!sFormat) {
                sName = sNumber + '-other';
                sFormat = oFormats[sName];
            }
        }
        return sFormat;
    },
    getCurrencyFormat: function (sStyle, sNumber, sPlural) {
        var sFormat;
        var oFormats = this._get('currencyFormat-' + sStyle);
        if (!oFormats) {
            if (sStyle === 'sap-short') {
                throw new Error('Failed to get CLDR data for property "currencyFormat-sap-short"');
            }
            oFormats = this._get('currencyFormat-short');
        }
        if (oFormats) {
            var sName = sNumber + '-' + sPlural;
            sFormat = oFormats[sName];
            if (!sFormat) {
                sName = sNumber + '-other';
                sFormat = oFormats[sName];
            }
        }
        return sFormat;
    },
    getListFormat: function (sType, sStyle) {
        var oFormats = this._get('listPattern-' + (sType || 'standard') + '-' + (sStyle || 'wide'));
        if (oFormats) {
            return oFormats;
        }
        return {};
    },
    getResolvedUnitFormat: function (sUnit) {
        sUnit = this.getUnitFromMapping(sUnit) || sUnit;
        return this.getUnitFormat(sUnit);
    },
    getUnitFormat: function (sUnit) {
        return this._get('units', 'short', sUnit);
    },
    getUnitFormats: function () {
        return this._getMerged('units', 'short');
    },
    getUnitFromMapping: function (sMapping) {
        return this._get('unitMappings', sMapping);
    },
    getEras: function (sWidth, sCalendarType) {
        fnAssert(sWidth == 'wide' || sWidth == 'abbreviated' || sWidth == 'narrow', 'sWidth must be wide, abbreviate or narrow');
        var oEras = this._get(getCLDRCalendarName(sCalendarType), 'era-' + sWidth), aEras = [];
        for (var i in oEras) {
            aEras[parseInt(i)] = oEras[i];
        }
        return aEras;
    },
    getEraDates: function (sCalendarType) {
        var oEraDates = this._get('eras-' + sCalendarType.toLowerCase()), aEraDates = [];
        for (var i in oEraDates) {
            aEraDates[parseInt(i)] = oEraDates[i];
        }
        return aEraDates;
    },
    getCalendarWeek: function (sStyle, iWeekNumber) {
        fnAssert(sStyle == 'wide' || sStyle == 'narrow', 'sStyle must be wide or narrow');
        var oMessageBundle = Core.getLibraryResourceBundle('sap.ui.core', this.oLocale.toString()), sKey = 'date.week.calendarweek.' + sStyle;
        return oMessageBundle.getText(sKey, iWeekNumber);
    },
    getPreferredCalendarType: function () {
        var sCalendarPreference = this._get('calendarPreference'), aCalendars = sCalendarPreference ? sCalendarPreference.split(' ') : [], sCalendarName, sType, i;
        for (i = 0; i < aCalendars.length; i++) {
            sCalendarName = aCalendars[i].split('-')[0];
            for (sType in CalendarType) {
                if (sCalendarName === sType.toLowerCase()) {
                    return sType;
                }
            }
        }
        return CalendarType.Gregorian;
    },
    getPreferredHourSymbol: function () {
        return this._get('timeData', '_preferred');
    },
    getPluralCategories: function () {
        var oPlurals = this._get('plurals'), aCategories = Object.keys(oPlurals);
        aCategories.push('other');
        return aCategories;
    },
    getPluralCategory: function (sNumber) {
        var oPlurals = this._get('plurals');
        if (typeof sNumber === 'number') {
            sNumber = sNumber.toString();
        }
        if (!this._pluralTest) {
            this._pluralTest = {};
        }
        for (var sCategory in oPlurals) {
            var fnTest = this._pluralTest[sCategory];
            if (!fnTest) {
                fnTest = this._parsePluralRule(oPlurals[sCategory]);
                this._pluralTest[sCategory] = fnTest;
            }
            if (fnTest(sNumber)) {
                return sCategory;
            }
        }
        return 'other';
    },
    _parsePluralRule: function (sRule) {
        var OP_OR = 'or', OP_AND = 'and', OP_MOD = '%', OP_EQ = '=', OP_NEQ = '!=', OPD_N = 'n', OPD_I = 'i', OPD_F = 'f', OPD_T = 't', OPD_V = 'v', OPD_W = 'w', RANGE = '..', SEP = ',';
        var i = 0, aTokens;
        aTokens = sRule.split(' ');
        function accept(sToken) {
            if (aTokens[i] === sToken) {
                i++;
                return true;
            }
            return false;
        }
        function consume() {
            var sToken = aTokens[i];
            i++;
            return sToken;
        }
        function or_condition() {
            var fnAnd, fnOr;
            fnAnd = and_condition();
            if (accept(OP_OR)) {
                fnOr = or_condition();
                return function (o) {
                    return fnAnd(o) || fnOr(o);
                };
            }
            return fnAnd;
        }
        function and_condition() {
            var fnRelation, fnAnd;
            fnRelation = relation();
            if (accept(OP_AND)) {
                fnAnd = and_condition();
                return function (o) {
                    return fnRelation(o) && fnAnd(o);
                };
            }
            return fnRelation;
        }
        function relation() {
            var fnExpr, fnRangeList, bEq;
            fnExpr = expr();
            if (accept(OP_EQ)) {
                bEq = true;
            } else if (accept(OP_NEQ)) {
                bEq = false;
            } else {
                throw new Error('Expected \'=\' or \'!=\'');
            }
            fnRangeList = range_list();
            if (bEq) {
                return function (o) {
                    return fnRangeList(o).indexOf(fnExpr(o)) >= 0;
                };
            } else {
                return function (o) {
                    return fnRangeList(o).indexOf(fnExpr(o)) === -1;
                };
            }
        }
        function expr() {
            var fnOperand;
            fnOperand = operand();
            if (accept(OP_MOD)) {
                var iDivisor = parseInt(consume());
                return function (o) {
                    return fnOperand(o) % iDivisor;
                };
            }
            return fnOperand;
        }
        function operand() {
            if (accept(OPD_N)) {
                return function (o) {
                    return o.n;
                };
            } else if (accept(OPD_I)) {
                return function (o) {
                    return o.i;
                };
            } else if (accept(OPD_F)) {
                return function (o) {
                    return o.f;
                };
            } else if (accept(OPD_T)) {
                return function (o) {
                    return o.t;
                };
            } else if (accept(OPD_V)) {
                return function (o) {
                    return o.v;
                };
            } else if (accept(OPD_W)) {
                return function (o) {
                    return o.w;
                };
            } else {
                throw new Error('Unknown operand: ' + consume());
            }
        }
        function range_list() {
            var aValues = [], sRangeList = consume(), aParts = sRangeList.split(SEP), aRange, iFrom, iTo;
            aParts.forEach(function (sPart) {
                aRange = sPart.split(RANGE);
                if (aRange.length === 1) {
                    aValues.push(parseInt(sPart));
                } else {
                    iFrom = parseInt(aRange[0]);
                    iTo = parseInt(aRange[1]);
                    for (var i = iFrom; i <= iTo; i++) {
                        aValues.push(i);
                    }
                }
            });
            return function (o) {
                return aValues;
            };
        }
        var fnOr = or_condition();
        if (i != aTokens.length) {
            throw new Error('Not completely parsed');
        }
        return function (sValue) {
            var iDotPos = sValue.indexOf('.'), sDecimal, sFraction, sFractionNoZeros, o;
            if (iDotPos === -1) {
                sDecimal = sValue;
                sFraction = '';
                sFractionNoZeros = '';
            } else {
                sDecimal = sValue.substr(0, iDotPos);
                sFraction = sValue.substr(iDotPos + 1);
                sFractionNoZeros = sFraction.replace(/0+$/, '');
            }
            o = {
                n: parseFloat(sValue),
                i: parseInt(sDecimal),
                v: sFraction.length,
                w: sFractionNoZeros.length,
                f: parseInt(sFraction),
                t: parseInt(sFractionNoZeros)
            };
            return fnOr(o);
        };
    }
});
var mCLDRSymbolGroups = {
    'Era': {
        field: 'era',
        index: 0
    },
    'Year': {
        field: 'year',
        index: 1
    },
    'Quarter': {
        field: 'quarter',
        index: 2
    },
    'Month': {
        field: 'month',
        index: 3
    },
    'Week': {
        field: 'week',
        index: 4
    },
    'Day-Of-Week': {
        field: 'weekday',
        index: 5
    },
    'Day': {
        field: 'day',
        index: 6
    },
    'DayPeriod': {
        field: 'hour',
        index: 7,
        diffOnly: true
    },
    'Hour': {
        field: 'hour',
        index: 8
    },
    'Minute': {
        field: 'minute',
        index: 9
    },
    'Second': {
        field: 'second',
        index: 10
    },
    'Timezone': {
        field: 'zone',
        index: 11
    }
};
var mCLDRSymbols = {
    'G': {
        group: 'Era',
        match: 'Era',
        numericCeiling: 1
    },
    'y': {
        group: 'Year',
        match: 'Year',
        numericCeiling: 100
    },
    'Y': {
        group: 'Year',
        match: 'Year',
        numericCeiling: 100
    },
    'Q': {
        group: 'Quarter',
        match: 'Quarter',
        numericCeiling: 3
    },
    'q': {
        group: 'Quarter',
        match: 'Quarter',
        numericCeiling: 3
    },
    'M': {
        group: 'Month',
        match: 'Month',
        numericCeiling: 3
    },
    'L': {
        group: 'Month',
        match: 'Month',
        numericCeiling: 3
    },
    'w': {
        group: 'Week',
        match: 'Week',
        numericCeiling: 100
    },
    'W': {
        group: 'Week',
        match: 'Week',
        numericCeiling: 100
    },
    'd': {
        group: 'Day',
        match: 'Day',
        numericCeiling: 100
    },
    'D': {
        group: 'Day',
        match: 'Day',
        numericCeiling: 100
    },
    'E': {
        group: 'Day-Of-Week',
        match: 'Day-Of-Week',
        numericCeiling: 1
    },
    'e': {
        group: 'Day-Of-Week',
        match: 'Day-Of-Week',
        numericCeiling: 3
    },
    'c': {
        group: 'Day-Of-Week',
        match: 'Day-Of-Week',
        numericCeiling: 2
    },
    'h': {
        group: 'Hour',
        match: 'Hour12',
        numericCeiling: 100
    },
    'H': {
        group: 'Hour',
        match: 'Hour24',
        numericCeiling: 100
    },
    'k': {
        group: 'Hour',
        match: 'Hour24',
        numericCeiling: 100
    },
    'K': {
        group: 'Hour',
        match: 'Hour12',
        numericCeiling: 100
    },
    'm': {
        group: 'Minute',
        match: 'Minute',
        numericCeiling: 100
    },
    's': {
        group: 'Second',
        match: 'Second',
        numericCeiling: 100
    },
    'z': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'Z': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'O': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'v': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'V': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'X': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'x': {
        group: 'Timezone',
        match: 'Timezone',
        numericCeiling: 1
    },
    'S': {
        group: 'Other',
        numericCeiling: 100
    },
    'u': {
        group: 'Other',
        numericCeiling: 100
    },
    'U': {
        group: 'Other',
        numericCeiling: 1
    },
    'r': {
        group: 'Other',
        numericCeiling: 100
    },
    'F': {
        group: 'Other',
        numericCeiling: 100
    },
    'g': {
        group: 'Other',
        numericCeiling: 100
    },
    'a': {
        group: 'DayPeriod',
        numericCeiling: 1
    },
    'b': {
        group: 'Other',
        numericCeiling: 1
    },
    'B': {
        group: 'Other',
        numericCeiling: 1
    },
    'A': {
        group: 'Other',
        numericCeiling: 100
    }
};
var M_DEFAULT_DATA = {
    'orientation': 'left-to-right',
    'languages': {},
    'scripts': {},
    'territories': {},
    'ca-gregorian': {
        'dateFormats': {
            'full': 'EEEE, MMMM d, y',
            'long': 'MMMM d, y',
            'medium': 'MMM d, y',
            'short': 'M/d/yy'
        },
        'timeFormats': {
            'full': 'h:mm:ss a zzzz',
            'long': 'h:mm:ss a z',
            'medium': 'h:mm:ss a',
            'short': 'h:mm a'
        },
        'dateTimeFormats': {
            'full': '{1} \'at\' {0}',
            'long': '{1} \'at\' {0}',
            'medium': '{1}, {0}',
            'short': '{1}, {0}',
            'availableFormats': {
                'd': 'd',
                'E': 'ccc',
                'Ed': 'd E',
                'Ehm': 'E h:mm a',
                'EHm': 'E HH:mm',
                'Ehms': 'E h:mm:ss a',
                'EHms': 'E HH:mm:ss',
                'Gy': 'y G',
                'GyMMM': 'MMM y G',
                'GyMMMd': 'MMM d, y G',
                'GyMMMEd': 'E, MMM d, y G',
                'h': 'h a',
                'H': 'HH',
                'hm': 'h:mm a',
                'Hm': 'HH:mm',
                'hms': 'h:mm:ss a',
                'Hms': 'HH:mm:ss',
                'hmsv': 'h:mm:ss a v',
                'Hmsv': 'HH:mm:ss v',
                'hmv': 'h:mm a v',
                'Hmv': 'HH:mm v',
                'M': 'L',
                'Md': 'M/d',
                'MEd': 'E, M/d',
                'MMM': 'LLL',
                'MMMd': 'MMM d',
                'MMMEd': 'E, MMM d',
                'MMMMd': 'MMMM d',
                'ms': 'mm:ss',
                'y': 'y',
                'yM': 'M/y',
                'yMd': 'M/d/y',
                'yMEd': 'E, M/d/y',
                'yMMM': 'MMM y',
                'yMMMd': 'MMM d, y',
                'yMMMEd': 'E, MMM d, y',
                'yMMMM': 'MMMM y',
                'yQQQ': 'QQQ y',
                'yQQQQ': 'QQQQ y'
            },
            'appendItems': {
                'Day': '{0} ({2}: {1})',
                'Day-Of-Week': '{0} {1}',
                'Era': '{0} {1}',
                'Hour': '{0} ({2}: {1})',
                'Minute': '{0} ({2}: {1})',
                'Month': '{0} ({2}: {1})',
                'Quarter': '{0} ({2}: {1})',
                'Second': '{0} ({2}: {1})',
                'Timezone': '{0} {1}',
                'Week': '{0} ({2}: {1})',
                'Year': '{0} {1}'
            },
            'intervalFormats': {
                'intervalFormatFallback': '{0} \u2013 {1}',
                'd': { 'd': 'd \u2013 d' },
                'h': {
                    'a': 'h a \u2013 h a',
                    'h': 'h \u2013 h a'
                },
                'H': { 'H': 'HH \u2013 HH' },
                'hm': {
                    'a': 'h:mm a \u2013 h:mm a',
                    'h': 'h:mm \u2013 h:mm a',
                    'm': 'h:mm \u2013 h:mm a'
                },
                'Hm': {
                    'H': 'HH:mm \u2013 HH:mm',
                    'm': 'HH:mm \u2013 HH:mm'
                },
                'hmv': {
                    'a': 'h:mm a \u2013 h:mm a v',
                    'h': 'h:mm \u2013 h:mm a v',
                    'm': 'h:mm \u2013 h:mm a v'
                },
                'Hmv': {
                    'H': 'HH:mm \u2013 HH:mm v',
                    'm': 'HH:mm \u2013 HH:mm v'
                },
                'hv': {
                    'a': 'h a \u2013 h a v',
                    'h': 'h \u2013 h a v'
                },
                'Hv': { 'H': 'HH \u2013 HH v' },
                'M': { 'M': 'M \u2013 M' },
                'Md': {
                    'd': 'M/d \u2013 M/d',
                    'M': 'M/d \u2013 M/d'
                },
                'MEd': {
                    'd': 'E, M/d \u2013 E, M/d',
                    'M': 'E, M/d \u2013 E, M/d'
                },
                'MMM': { 'M': 'MMM \u2013 MMM' },
                'MMMd': {
                    'd': 'MMM d \u2013 d',
                    'M': 'MMM d \u2013 MMM d'
                },
                'MMMEd': {
                    'd': 'E, MMM d \u2013 E, MMM d',
                    'M': 'E, MMM d \u2013 E, MMM d'
                },
                'y': { 'y': 'y \u2013 y' },
                'yM': {
                    'M': 'M/y \u2013 M/y',
                    'y': 'M/y \u2013 M/y'
                },
                'yMd': {
                    'd': 'M/d/y \u2013 M/d/y',
                    'M': 'M/d/y \u2013 M/d/y',
                    'y': 'M/d/y \u2013 M/d/y'
                },
                'yMEd': {
                    'd': 'E, M/d/y \u2013 E, M/d/y',
                    'M': 'E, M/d/y \u2013 E, M/d/y',
                    'y': 'E, M/d/y \u2013 E, M/d/y'
                },
                'yMMM': {
                    'M': 'MMM \u2013 MMM y',
                    'y': 'MMM y \u2013 MMM y'
                },
                'yMMMd': {
                    'd': 'MMM d \u2013 d, y',
                    'M': 'MMM d \u2013 MMM d, y',
                    'y': 'MMM d, y \u2013 MMM d, y'
                },
                'yMMMEd': {
                    'd': 'E, MMM d \u2013 E, MMM d, y',
                    'M': 'E, MMM d \u2013 E, MMM d, y',
                    'y': 'E, MMM d, y \u2013 E, MMM d, y'
                },
                'yMMMM': {
                    'M': 'MMMM \u2013 MMMM y',
                    'y': 'MMMM y \u2013 MMMM y'
                }
            }
        },
        'months': {
            'format': {
                'abbreviated': [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                'narrow': [
                    'J',
                    'F',
                    'M',
                    'A',
                    'M',
                    'J',
                    'J',
                    'A',
                    'S',
                    'O',
                    'N',
                    'D'
                ],
                'wide': [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ]
            },
            'stand-alone': {
                'abbreviated': [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                'narrow': [
                    'J',
                    'F',
                    'M',
                    'A',
                    'M',
                    'J',
                    'J',
                    'A',
                    'S',
                    'O',
                    'N',
                    'D'
                ],
                'wide': [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ]
            }
        },
        'days': {
            'format': {
                'abbreviated': [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ],
                'narrow': [
                    'S',
                    'M',
                    'T',
                    'W',
                    'T',
                    'F',
                    'S'
                ],
                'short': [
                    'Su',
                    'Mo',
                    'Tu',
                    'We',
                    'Th',
                    'Fr',
                    'Sa'
                ],
                'wide': [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ]
            },
            'stand-alone': {
                'abbreviated': [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ],
                'narrow': [
                    'S',
                    'M',
                    'T',
                    'W',
                    'T',
                    'F',
                    'S'
                ],
                'short': [
                    'Su',
                    'Mo',
                    'Tu',
                    'We',
                    'Th',
                    'Fr',
                    'Sa'
                ],
                'wide': [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ]
            }
        },
        'quarters': {
            'format': {
                'abbreviated': [
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4'
                ],
                'narrow': [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                'wide': [
                    '1st quarter',
                    '2nd quarter',
                    '3rd quarter',
                    '4th quarter'
                ]
            },
            'stand-alone': {
                'abbreviated': [
                    'Q1',
                    'Q2',
                    'Q3',
                    'Q4'
                ],
                'narrow': [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                'wide': [
                    '1st quarter',
                    '2nd quarter',
                    '3rd quarter',
                    '4th quarter'
                ]
            }
        },
        'dayPeriods': {
            'format': {
                'abbreviated': [
                    'AM',
                    'PM'
                ],
                'narrow': [
                    'a',
                    'p'
                ],
                'wide': [
                    'AM',
                    'PM'
                ]
            },
            'stand-alone': {
                'abbreviated': [
                    'AM',
                    'PM'
                ],
                'narrow': [
                    'AM',
                    'PM'
                ],
                'wide': [
                    'AM',
                    'PM'
                ]
            }
        },
        'era-wide': {
            '0': 'Before Christ',
            '1': 'Anno Domini'
        },
        'era-abbreviated': {
            '0': 'BC',
            '1': 'AD'
        },
        'era-narrow': {
            '0': 'B',
            '1': 'A'
        }
    },
    'eras-gregorian': {
        '0': { '_end': '0-12-31' },
        '1': { '_start': '1-01-01' }
    },
    'dateFields': {
        'era': { 'displayName': 'era' },
        'year-wide': {
            'displayName': 'year',
            'relative-type--1': 'last year',
            'relative-type-0': 'this year',
            'relative-type-1': 'next year',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} year',
                'relativeTimePattern-count-other': 'in {0} years'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} year ago',
                'relativeTimePattern-count-other': '{0} years ago'
            }
        },
        'year-short': {
            'displayName': 'yr.',
            'relative-type--1': 'last yr.',
            'relative-type-0': 'this yr.',
            'relative-type-1': 'next yr.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} yr.',
                'relativeTimePattern-count-other': 'in {0} yr.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} yr. ago',
                'relativeTimePattern-count-other': '{0} yr. ago'
            }
        },
        'year-narrow': {
            'displayName': 'yr.',
            'relative-type--1': 'last yr.',
            'relative-type-0': 'this yr.',
            'relative-type-1': 'next yr.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} yr.',
                'relativeTimePattern-count-other': 'in {0} yr.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} yr. ago',
                'relativeTimePattern-count-other': '{0} yr. ago'
            }
        },
        'quarter-wide': {
            'displayName': 'quarter',
            'relative-type--1': 'last quarter',
            'relative-type-0': 'this quarter',
            'relative-type-1': 'next quarter',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} quarter',
                'relativeTimePattern-count-other': 'in {0} quarters'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} quarter ago',
                'relativeTimePattern-count-other': '{0} quarters ago'
            }
        },
        'quarter-short': {
            'displayName': 'qtr.',
            'relative-type--1': 'last qtr.',
            'relative-type-0': 'this qtr.',
            'relative-type-1': 'next qtr.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} qtr.',
                'relativeTimePattern-count-other': 'in {0} qtrs.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} qtr. ago',
                'relativeTimePattern-count-other': '{0} qtrs. ago'
            }
        },
        'quarter-narrow': {
            'displayName': 'qtr.',
            'relative-type--1': 'last qtr.',
            'relative-type-0': 'this qtr.',
            'relative-type-1': 'next qtr.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} qtr.',
                'relativeTimePattern-count-other': 'in {0} qtrs.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} qtr. ago',
                'relativeTimePattern-count-other': '{0} qtrs. ago'
            }
        },
        'month-wide': {
            'displayName': 'month',
            'relative-type--1': 'last month',
            'relative-type-0': 'this month',
            'relative-type-1': 'next month',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} month',
                'relativeTimePattern-count-other': 'in {0} months'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} month ago',
                'relativeTimePattern-count-other': '{0} months ago'
            }
        },
        'month-short': {
            'displayName': 'mo.',
            'relative-type--1': 'last mo.',
            'relative-type-0': 'this mo.',
            'relative-type-1': 'next mo.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} mo.',
                'relativeTimePattern-count-other': 'in {0} mo.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} mo. ago',
                'relativeTimePattern-count-other': '{0} mo. ago'
            }
        },
        'month-narrow': {
            'displayName': 'mo.',
            'relative-type--1': 'last mo.',
            'relative-type-0': 'this mo.',
            'relative-type-1': 'next mo.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} mo.',
                'relativeTimePattern-count-other': 'in {0} mo.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} mo. ago',
                'relativeTimePattern-count-other': '{0} mo. ago'
            }
        },
        'week-wide': {
            'displayName': 'week',
            'relative-type--1': 'last week',
            'relative-type-0': 'this week',
            'relative-type-1': 'next week',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} week',
                'relativeTimePattern-count-other': 'in {0} weeks'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} week ago',
                'relativeTimePattern-count-other': '{0} weeks ago'
            },
            'relativePeriod': 'the week of {0}'
        },
        'week-short': {
            'displayName': 'wk.',
            'relative-type--1': 'last wk.',
            'relative-type-0': 'this wk.',
            'relative-type-1': 'next wk.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} wk.',
                'relativeTimePattern-count-other': 'in {0} wk.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} wk. ago',
                'relativeTimePattern-count-other': '{0} wk. ago'
            },
            'relativePeriod': 'the week of {0}'
        },
        'week-narrow': {
            'displayName': 'wk.',
            'relative-type--1': 'last wk.',
            'relative-type-0': 'this wk.',
            'relative-type-1': 'next wk.',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} wk.',
                'relativeTimePattern-count-other': 'in {0} wk.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} wk. ago',
                'relativeTimePattern-count-other': '{0} wk. ago'
            },
            'relativePeriod': 'the week of {0}'
        },
        'day-wide': {
            'displayName': 'day',
            'relative-type--1': 'yesterday',
            'relative-type-0': 'today',
            'relative-type-1': 'tomorrow',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} day',
                'relativeTimePattern-count-other': 'in {0} days'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} day ago',
                'relativeTimePattern-count-other': '{0} days ago'
            }
        },
        'day-short': {
            'displayName': 'day',
            'relative-type--1': 'yesterday',
            'relative-type-0': 'today',
            'relative-type-1': 'tomorrow',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} day',
                'relativeTimePattern-count-other': 'in {0} days'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} day ago',
                'relativeTimePattern-count-other': '{0} days ago'
            }
        },
        'day-narrow': {
            'displayName': 'day',
            'relative-type--1': 'yesterday',
            'relative-type-0': 'today',
            'relative-type-1': 'tomorrow',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} day',
                'relativeTimePattern-count-other': 'in {0} days'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} day ago',
                'relativeTimePattern-count-other': '{0} days ago'
            }
        },
        'weekday': { 'displayName': 'day of the week' },
        'hour-wide': {
            'displayName': 'hour',
            'relative-type-0': 'this hour',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} hour',
                'relativeTimePattern-count-other': 'in {0} hours'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} hour ago',
                'relativeTimePattern-count-other': '{0} hours ago'
            }
        },
        'hour-short': {
            'displayName': 'hr.',
            'relative-type-0': 'this hour',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} hr.',
                'relativeTimePattern-count-other': 'in {0} hr.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} hr. ago',
                'relativeTimePattern-count-other': '{0} hr. ago'
            }
        },
        'hour-narrow': {
            'displayName': 'hr.',
            'relative-type-0': 'this hour',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} hr.',
                'relativeTimePattern-count-other': 'in {0} hr.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} hr. ago',
                'relativeTimePattern-count-other': '{0} hr. ago'
            }
        },
        'minute-wide': {
            'displayName': 'minute',
            'relative-type-0': 'this minute',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} minute',
                'relativeTimePattern-count-other': 'in {0} minutes'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} minute ago',
                'relativeTimePattern-count-other': '{0} minutes ago'
            }
        },
        'minute-short': {
            'displayName': 'min.',
            'relative-type-0': 'this minute',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} min.',
                'relativeTimePattern-count-other': 'in {0} min.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} min. ago',
                'relativeTimePattern-count-other': '{0} min. ago'
            }
        },
        'minute-narrow': {
            'displayName': 'min.',
            'relative-type-0': 'this minute',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} min.',
                'relativeTimePattern-count-other': 'in {0} min.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} min. ago',
                'relativeTimePattern-count-other': '{0} min. ago'
            }
        },
        'second-wide': {
            'displayName': 'second',
            'relative-type-0': 'now',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} second',
                'relativeTimePattern-count-other': 'in {0} seconds'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} second ago',
                'relativeTimePattern-count-other': '{0} seconds ago'
            }
        },
        'second-short': {
            'displayName': 'sec.',
            'relative-type-0': 'now',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} sec.',
                'relativeTimePattern-count-other': 'in {0} sec.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} sec. ago',
                'relativeTimePattern-count-other': '{0} sec. ago'
            }
        },
        'second-narrow': {
            'displayName': 'sec.',
            'relative-type-0': 'now',
            'relativeTime-type-future': {
                'relativeTimePattern-count-one': 'in {0} sec.',
                'relativeTimePattern-count-other': 'in {0} sec.'
            },
            'relativeTime-type-past': {
                'relativeTimePattern-count-one': '{0} sec. ago',
                'relativeTimePattern-count-other': '{0} sec. ago'
            }
        },
        'zone': { 'displayName': 'time zone' }
    },
    'decimalFormat': { 'standard': '#,##0.###' },
    'currencyFormat': {
        'standard': '\xA4#,##0.00',
        'currencySpacing': {
            'beforeCurrency': {
                'currencyMatch': '[:^S:]',
                'surroundingMatch': '[:digit:]',
                'insertBetween': '\xA0'
            },
            'afterCurrency': {
                'currencyMatch': '[:^S:]',
                'surroundingMatch': '[:digit:]',
                'insertBetween': '\xA0'
            }
        }
    },
    'percentFormat': { 'standard': '#,##0%' },
    'miscPattern': {
        'approximately': '~{0}',
        'atLeast': '{0}+',
        'atMost': '\u2264{0}',
        'range': '{0}\u2013{1}'
    },
    'symbols-latn-decimal': '.',
    'symbols-latn-group': ',',
    'symbols-latn-plusSign': '+',
    'symbols-latn-minusSign': '-',
    'symbols-latn-percentSign': '%',
    'weekData-minDays': 4,
    'weekData-firstDay': 1,
    'weekData-weekendStart': 6,
    'weekData-weekendEnd': 0,
    'timeData': {
        _allowed: 'H h',
        _preferred: 'H'
    },
    'lenient-scope-number': {
        'minusSign': '-\u2010\u2012\u2013\u207B\u208B\u2212\u2796\uFE63',
        'commaSign': ',\u060C\u066B\u3001\uFE10\uFE11\uFE50\uFE51\uFF0C',
        'plusSign': '+\u207A\u208A\u2795\uFB29\uFE62'
    },
    'plurals': {},
    'units': {
        'short': {
            'per': { 'compoundUnitPattern': '{0}/{1}' },
            'acceleration-g-force': {
                'displayName': 'g-force',
                'unitPattern-count-one': '{0} G',
                'unitPattern-count-other': '{0} G'
            },
            'acceleration-meter-per-second-squared': {
                'displayName': 'meters/sec\xB2',
                'unitPattern-count-one': '{0} m/s\xB2',
                'unitPattern-count-other': '{0} m/s\xB2'
            },
            'angle-revolution': {
                'displayName': 'rev',
                'unitPattern-count-one': '{0} rev',
                'unitPattern-count-other': '{0} rev'
            },
            'angle-radian': {
                'displayName': 'radians',
                'unitPattern-count-one': '{0} rad',
                'unitPattern-count-other': '{0} rad'
            },
            'angle-degree': {
                'displayName': 'degrees',
                'unitPattern-count-one': '{0} deg',
                'unitPattern-count-other': '{0} deg'
            },
            'angle-arc-minute': {
                'displayName': 'arcmins',
                'unitPattern-count-one': '{0} arcmin',
                'unitPattern-count-other': '{0} arcmins'
            },
            'angle-arc-second': {
                'displayName': 'arcsecs',
                'unitPattern-count-one': '{0} arcsec',
                'unitPattern-count-other': '{0} arcsecs'
            },
            'area-square-kilometer': {
                'displayName': 'km\xB2',
                'unitPattern-count-one': '{0} km\xB2',
                'unitPattern-count-other': '{0} km\xB2',
                'perUnitPattern': '{0}/km\xB2'
            },
            'area-hectare': {
                'displayName': 'hectares',
                'unitPattern-count-one': '{0} ha',
                'unitPattern-count-other': '{0} ha'
            },
            'area-square-meter': {
                'displayName': 'meters\xB2',
                'unitPattern-count-one': '{0} m\xB2',
                'unitPattern-count-other': '{0} m\xB2',
                'perUnitPattern': '{0}/m\xB2'
            },
            'area-square-centimeter': {
                'displayName': 'cm\xB2',
                'unitPattern-count-one': '{0} cm\xB2',
                'unitPattern-count-other': '{0} cm\xB2',
                'perUnitPattern': '{0}/cm\xB2'
            },
            'area-square-mile': {
                'displayName': 'sq miles',
                'unitPattern-count-one': '{0} sq mi',
                'unitPattern-count-other': '{0} sq mi',
                'perUnitPattern': '{0}/mi\xB2'
            },
            'area-acre': {
                'displayName': 'acres',
                'unitPattern-count-one': '{0} ac',
                'unitPattern-count-other': '{0} ac'
            },
            'area-square-yard': {
                'displayName': 'yards\xB2',
                'unitPattern-count-one': '{0} yd\xB2',
                'unitPattern-count-other': '{0} yd\xB2'
            },
            'area-square-foot': {
                'displayName': 'sq feet',
                'unitPattern-count-one': '{0} sq ft',
                'unitPattern-count-other': '{0} sq ft'
            },
            'area-square-inch': {
                'displayName': 'inches\xB2',
                'unitPattern-count-one': '{0} in\xB2',
                'unitPattern-count-other': '{0} in\xB2',
                'perUnitPattern': '{0}/in\xB2'
            },
            'concentr-karat': {
                'displayName': 'karats',
                'unitPattern-count-one': '{0} kt',
                'unitPattern-count-other': '{0} kt'
            },
            'concentr-milligram-per-deciliter': {
                'displayName': 'mg/dL',
                'unitPattern-count-one': '{0} mg/dL',
                'unitPattern-count-other': '{0} mg/dL'
            },
            'concentr-millimole-per-liter': {
                'displayName': 'millimol/liter',
                'unitPattern-count-one': '{0} mmol/L',
                'unitPattern-count-other': '{0} mmol/L'
            },
            'concentr-part-per-million': {
                'displayName': 'parts/million',
                'unitPattern-count-one': '{0} ppm',
                'unitPattern-count-other': '{0} ppm'
            },
            'consumption-liter-per-kilometer': {
                'displayName': 'liters/km',
                'unitPattern-count-one': '{0} L/km',
                'unitPattern-count-other': '{0} L/km'
            },
            'consumption-liter-per-100kilometers': {
                'displayName': 'L/100 km',
                'unitPattern-count-one': '{0} L/100 km',
                'unitPattern-count-other': '{0} L/100 km'
            },
            'consumption-mile-per-gallon': {
                'displayName': 'miles/gal',
                'unitPattern-count-one': '{0} mpg',
                'unitPattern-count-other': '{0} mpg'
            },
            'consumption-mile-per-gallon-imperial': {
                'displayName': 'miles/gal Imp.',
                'unitPattern-count-one': '{0} mpg Imp.',
                'unitPattern-count-other': '{0} mpg Imp.'
            },
            'digital-terabyte': {
                'displayName': 'TByte',
                'unitPattern-count-one': '{0} TB',
                'unitPattern-count-other': '{0} TB'
            },
            'digital-terabit': {
                'displayName': 'Tbit',
                'unitPattern-count-one': '{0} Tb',
                'unitPattern-count-other': '{0} Tb'
            },
            'digital-gigabyte': {
                'displayName': 'GByte',
                'unitPattern-count-one': '{0} GB',
                'unitPattern-count-other': '{0} GB'
            },
            'digital-gigabit': {
                'displayName': 'Gbit',
                'unitPattern-count-one': '{0} Gb',
                'unitPattern-count-other': '{0} Gb'
            },
            'digital-megabyte': {
                'displayName': 'MByte',
                'unitPattern-count-one': '{0} MB',
                'unitPattern-count-other': '{0} MB'
            },
            'digital-megabit': {
                'displayName': 'Mbit',
                'unitPattern-count-one': '{0} Mb',
                'unitPattern-count-other': '{0} Mb'
            },
            'digital-kilobyte': {
                'displayName': 'kByte',
                'unitPattern-count-one': '{0} kB',
                'unitPattern-count-other': '{0} kB'
            },
            'digital-kilobit': {
                'displayName': 'kbit',
                'unitPattern-count-one': '{0} kb',
                'unitPattern-count-other': '{0} kb'
            },
            'digital-byte': {
                'displayName': 'byte',
                'unitPattern-count-one': '{0} byte',
                'unitPattern-count-other': '{0} byte'
            },
            'digital-bit': {
                'displayName': 'bit',
                'unitPattern-count-one': '{0} bit',
                'unitPattern-count-other': '{0} bit'
            },
            'duration-century': {
                'displayName': 'c',
                'unitPattern-count-one': '{0} c',
                'unitPattern-count-other': '{0} c'
            },
            'duration-year': {
                'displayName': 'years',
                'unitPattern-count-one': '{0} yr',
                'unitPattern-count-other': '{0} yrs',
                'perUnitPattern': '{0}/y'
            },
            'duration-month': {
                'displayName': 'months',
                'unitPattern-count-one': '{0} mth',
                'unitPattern-count-other': '{0} mths',
                'perUnitPattern': '{0}/m'
            },
            'duration-week': {
                'displayName': 'weeks',
                'unitPattern-count-one': '{0} wk',
                'unitPattern-count-other': '{0} wks',
                'perUnitPattern': '{0}/w'
            },
            'duration-day': {
                'displayName': 'days',
                'unitPattern-count-one': '{0} day',
                'unitPattern-count-other': '{0} days',
                'perUnitPattern': '{0}/d'
            },
            'duration-hour': {
                'displayName': 'hours',
                'unitPattern-count-one': '{0} hr',
                'unitPattern-count-other': '{0} hr',
                'perUnitPattern': '{0}/h'
            },
            'duration-minute': {
                'displayName': 'mins',
                'unitPattern-count-one': '{0} min',
                'unitPattern-count-other': '{0} min',
                'perUnitPattern': '{0}/min'
            },
            'duration-second': {
                'displayName': 'secs',
                'unitPattern-count-one': '{0} sec',
                'unitPattern-count-other': '{0} sec',
                'perUnitPattern': '{0}/s'
            },
            'duration-millisecond': {
                'displayName': 'millisecs',
                'unitPattern-count-one': '{0} ms',
                'unitPattern-count-other': '{0} ms'
            },
            'duration-microsecond': {
                'displayName': 'μsecs',
                'unitPattern-count-one': '{0} μs',
                'unitPattern-count-other': '{0} μs'
            },
            'duration-nanosecond': {
                'displayName': 'nanosecs',
                'unitPattern-count-one': '{0} ns',
                'unitPattern-count-other': '{0} ns'
            },
            'electric-ampere': {
                'displayName': 'amps',
                'unitPattern-count-one': '{0} A',
                'unitPattern-count-other': '{0} A'
            },
            'electric-milliampere': {
                'displayName': 'milliamps',
                'unitPattern-count-one': '{0} mA',
                'unitPattern-count-other': '{0} mA'
            },
            'electric-ohm': {
                'displayName': 'ohms',
                'unitPattern-count-one': '{0} Ω',
                'unitPattern-count-other': '{0} Ω'
            },
            'electric-volt': {
                'displayName': 'volts',
                'unitPattern-count-one': '{0} V',
                'unitPattern-count-other': '{0} V'
            },
            'energy-kilocalorie': {
                'displayName': 'kcal',
                'unitPattern-count-one': '{0} kcal',
                'unitPattern-count-other': '{0} kcal'
            },
            'energy-calorie': {
                'displayName': 'cal',
                'unitPattern-count-one': '{0} cal',
                'unitPattern-count-other': '{0} cal'
            },
            'energy-foodcalorie': {
                'displayName': 'Cal',
                'unitPattern-count-one': '{0} Cal',
                'unitPattern-count-other': '{0} Cal'
            },
            'energy-kilojoule': {
                'displayName': 'kilojoule',
                'unitPattern-count-one': '{0} kJ',
                'unitPattern-count-other': '{0} kJ'
            },
            'energy-joule': {
                'displayName': 'joules',
                'unitPattern-count-one': '{0} J',
                'unitPattern-count-other': '{0} J'
            },
            'energy-kilowatt-hour': {
                'displayName': 'kW-hour',
                'unitPattern-count-one': '{0} kWh',
                'unitPattern-count-other': '{0} kWh'
            },
            'frequency-gigahertz': {
                'displayName': 'GHz',
                'unitPattern-count-one': '{0} GHz',
                'unitPattern-count-other': '{0} GHz'
            },
            'frequency-megahertz': {
                'displayName': 'MHz',
                'unitPattern-count-one': '{0} MHz',
                'unitPattern-count-other': '{0} MHz'
            },
            'frequency-kilohertz': {
                'displayName': 'kHz',
                'unitPattern-count-one': '{0} kHz',
                'unitPattern-count-other': '{0} kHz'
            },
            'frequency-hertz': {
                'displayName': 'Hz',
                'unitPattern-count-one': '{0} Hz',
                'unitPattern-count-other': '{0} Hz'
            },
            'length-kilometer': {
                'displayName': 'km',
                'unitPattern-count-one': '{0} km',
                'unitPattern-count-other': '{0} km',
                'perUnitPattern': '{0}/km'
            },
            'length-meter': {
                'displayName': 'm',
                'unitPattern-count-one': '{0} m',
                'unitPattern-count-other': '{0} m',
                'perUnitPattern': '{0}/m'
            },
            'length-decimeter': {
                'displayName': 'dm',
                'unitPattern-count-one': '{0} dm',
                'unitPattern-count-other': '{0} dm'
            },
            'length-centimeter': {
                'displayName': 'cm',
                'unitPattern-count-one': '{0} cm',
                'unitPattern-count-other': '{0} cm',
                'perUnitPattern': '{0}/cm'
            },
            'length-millimeter': {
                'displayName': 'mm',
                'unitPattern-count-one': '{0} mm',
                'unitPattern-count-other': '{0} mm'
            },
            'length-micrometer': {
                'displayName': 'µmeters',
                'unitPattern-count-one': '{0} µm',
                'unitPattern-count-other': '{0} µm'
            },
            'length-nanometer': {
                'displayName': 'nm',
                'unitPattern-count-one': '{0} nm',
                'unitPattern-count-other': '{0} nm'
            },
            'length-picometer': {
                'displayName': 'pm',
                'unitPattern-count-one': '{0} pm',
                'unitPattern-count-other': '{0} pm'
            },
            'length-mile': {
                'displayName': 'miles',
                'unitPattern-count-one': '{0} mi',
                'unitPattern-count-other': '{0} mi'
            },
            'length-yard': {
                'displayName': 'yards',
                'unitPattern-count-one': '{0} yd',
                'unitPattern-count-other': '{0} yd'
            },
            'length-foot': {
                'displayName': 'feet',
                'unitPattern-count-one': '{0} ft',
                'unitPattern-count-other': '{0} ft',
                'perUnitPattern': '{0}/ft'
            },
            'length-inch': {
                'displayName': 'inches',
                'unitPattern-count-one': '{0} in',
                'unitPattern-count-other': '{0} in',
                'perUnitPattern': '{0}/in'
            },
            'length-parsec': {
                'displayName': 'parsecs',
                'unitPattern-count-one': '{0} pc',
                'unitPattern-count-other': '{0} pc'
            },
            'length-light-year': {
                'displayName': 'light yrs',
                'unitPattern-count-one': '{0} ly',
                'unitPattern-count-other': '{0} ly'
            },
            'length-astronomical-unit': {
                'displayName': 'au',
                'unitPattern-count-one': '{0} au',
                'unitPattern-count-other': '{0} au'
            },
            'length-furlong': {
                'displayName': 'furlongs',
                'unitPattern-count-one': '{0} fur',
                'unitPattern-count-other': '{0} fur'
            },
            'length-fathom': {
                'displayName': 'fathoms',
                'unitPattern-count-one': '{0} ftm',
                'unitPattern-count-other': '{0} ftm'
            },
            'length-nautical-mile': {
                'displayName': 'nmi',
                'unitPattern-count-one': '{0} nmi',
                'unitPattern-count-other': '{0} nmi'
            },
            'length-mile-scandinavian': {
                'displayName': 'smi',
                'unitPattern-count-one': '{0} smi',
                'unitPattern-count-other': '{0} smi'
            },
            'length-point': {
                'displayName': 'points',
                'unitPattern-count-one': '{0} pt',
                'unitPattern-count-other': '{0} pt'
            },
            'light-lux': {
                'displayName': 'lux',
                'unitPattern-count-one': '{0} lx',
                'unitPattern-count-other': '{0} lx'
            },
            'mass-metric-ton': {
                'displayName': 't',
                'unitPattern-count-one': '{0} t',
                'unitPattern-count-other': '{0} t'
            },
            'mass-kilogram': {
                'displayName': 'kg',
                'unitPattern-count-one': '{0} kg',
                'unitPattern-count-other': '{0} kg',
                'perUnitPattern': '{0}/kg'
            },
            'mass-gram': {
                'displayName': 'grams',
                'unitPattern-count-one': '{0} g',
                'unitPattern-count-other': '{0} g',
                'perUnitPattern': '{0}/g'
            },
            'mass-milligram': {
                'displayName': 'mg',
                'unitPattern-count-one': '{0} mg',
                'unitPattern-count-other': '{0} mg'
            },
            'mass-microgram': {
                'displayName': 'µg',
                'unitPattern-count-one': '{0} µg',
                'unitPattern-count-other': '{0} µg'
            },
            'mass-ton': {
                'displayName': 'tons',
                'unitPattern-count-one': '{0} tn',
                'unitPattern-count-other': '{0} tn'
            },
            'mass-stone': {
                'displayName': 'stones',
                'unitPattern-count-one': '{0} st',
                'unitPattern-count-other': '{0} st'
            },
            'mass-pound': {
                'displayName': 'pounds',
                'unitPattern-count-one': '{0} lb',
                'unitPattern-count-other': '{0} lb',
                'perUnitPattern': '{0}/lb'
            },
            'mass-ounce': {
                'displayName': 'oz',
                'unitPattern-count-one': '{0} oz',
                'unitPattern-count-other': '{0} oz',
                'perUnitPattern': '{0}/oz'
            },
            'mass-ounce-troy': {
                'displayName': 'oz troy',
                'unitPattern-count-one': '{0} oz t',
                'unitPattern-count-other': '{0} oz t'
            },
            'mass-carat': {
                'displayName': 'carats',
                'unitPattern-count-one': '{0} CD',
                'unitPattern-count-other': '{0} CD'
            },
            'power-gigawatt': {
                'displayName': 'GW',
                'unitPattern-count-one': '{0} GW',
                'unitPattern-count-other': '{0} GW'
            },
            'power-megawatt': {
                'displayName': 'MW',
                'unitPattern-count-one': '{0} MW',
                'unitPattern-count-other': '{0} MW'
            },
            'power-kilowatt': {
                'displayName': 'kW',
                'unitPattern-count-one': '{0} kW',
                'unitPattern-count-other': '{0} kW'
            },
            'power-watt': {
                'displayName': 'watts',
                'unitPattern-count-one': '{0} W',
                'unitPattern-count-other': '{0} W'
            },
            'power-milliwatt': {
                'displayName': 'mW',
                'unitPattern-count-one': '{0} mW',
                'unitPattern-count-other': '{0} mW'
            },
            'power-horsepower': {
                'displayName': 'hp',
                'unitPattern-count-one': '{0} hp',
                'unitPattern-count-other': '{0} hp'
            },
            'pressure-hectopascal': {
                'displayName': 'hPa',
                'unitPattern-count-one': '{0} hPa',
                'unitPattern-count-other': '{0} hPa'
            },
            'pressure-millimeter-of-mercury': {
                'displayName': 'mmHg',
                'unitPattern-count-one': '{0} mmHg',
                'unitPattern-count-other': '{0} mmHg'
            },
            'pressure-pound-per-square-inch': {
                'displayName': 'psi',
                'unitPattern-count-one': '{0} psi',
                'unitPattern-count-other': '{0} psi'
            },
            'pressure-inch-hg': {
                'displayName': 'inHg',
                'unitPattern-count-one': '{0} inHg',
                'unitPattern-count-other': '{0} inHg'
            },
            'pressure-millibar': {
                'displayName': 'mbar',
                'unitPattern-count-one': '{0} mbar',
                'unitPattern-count-other': '{0} mbar'
            },
            'speed-kilometer-per-hour': {
                'displayName': 'km/hour',
                'unitPattern-count-one': '{0} kph',
                'unitPattern-count-other': '{0} kph'
            },
            'speed-meter-per-second': {
                'displayName': 'meters/sec',
                'unitPattern-count-one': '{0} m/s',
                'unitPattern-count-other': '{0} m/s'
            },
            'speed-mile-per-hour': {
                'displayName': 'miles/hour',
                'unitPattern-count-one': '{0} mph',
                'unitPattern-count-other': '{0} mph'
            },
            'speed-knot': {
                'displayName': 'kn',
                'unitPattern-count-one': '{0} kn',
                'unitPattern-count-other': '{0} kn'
            },
            'temperature-generic': {
                'displayName': '\xB0',
                'unitPattern-count-other': '{0}\xB0'
            },
            'temperature-celsius': {
                'displayName': 'deg. C',
                'unitPattern-count-one': '{0}\xB0C',
                'unitPattern-count-other': '{0}\xB0C'
            },
            'temperature-fahrenheit': {
                'displayName': 'deg. F',
                'unitPattern-count-one': '{0}\xB0F',
                'unitPattern-count-other': '{0}\xB0F'
            },
            'temperature-kelvin': {
                'displayName': 'K',
                'unitPattern-count-one': '{0} K',
                'unitPattern-count-other': '{0} K'
            },
            'volume-cubic-kilometer': {
                'displayName': 'km\xB3',
                'unitPattern-count-one': '{0} km\xB3',
                'unitPattern-count-other': '{0} km\xB3'
            },
            'volume-cubic-meter': {
                'displayName': 'm\xB3',
                'unitPattern-count-one': '{0} m\xB3',
                'unitPattern-count-other': '{0} m\xB3',
                'perUnitPattern': '{0}/m\xB3'
            },
            'volume-cubic-centimeter': {
                'displayName': 'cm\xB3',
                'unitPattern-count-one': '{0} cm\xB3',
                'unitPattern-count-other': '{0} cm\xB3',
                'perUnitPattern': '{0}/cm\xB3'
            },
            'volume-cubic-mile': {
                'displayName': 'mi\xB3',
                'unitPattern-count-one': '{0} mi\xB3',
                'unitPattern-count-other': '{0} mi\xB3'
            },
            'volume-cubic-yard': {
                'displayName': 'yards\xB3',
                'unitPattern-count-one': '{0} yd\xB3',
                'unitPattern-count-other': '{0} yd\xB3'
            },
            'volume-cubic-foot': {
                'displayName': 'feet\xB3',
                'unitPattern-count-one': '{0} ft\xB3',
                'unitPattern-count-other': '{0} ft\xB3'
            },
            'volume-cubic-inch': {
                'displayName': 'inches\xB3',
                'unitPattern-count-one': '{0} in\xB3',
                'unitPattern-count-other': '{0} in\xB3'
            },
            'volume-megaliter': {
                'displayName': 'ML',
                'unitPattern-count-one': '{0} ML',
                'unitPattern-count-other': '{0} ML'
            },
            'volume-hectoliter': {
                'displayName': 'hL',
                'unitPattern-count-one': '{0} hL',
                'unitPattern-count-other': '{0} hL'
            },
            'volume-liter': {
                'displayName': 'liters',
                'unitPattern-count-one': '{0} L',
                'unitPattern-count-other': '{0} L',
                'perUnitPattern': '{0}/L'
            },
            'volume-deciliter': {
                'displayName': 'dL',
                'unitPattern-count-one': '{0} dL',
                'unitPattern-count-other': '{0} dL'
            },
            'volume-centiliter': {
                'displayName': 'cL',
                'unitPattern-count-one': '{0} cL',
                'unitPattern-count-other': '{0} cL'
            },
            'volume-milliliter': {
                'displayName': 'mL',
                'unitPattern-count-one': '{0} mL',
                'unitPattern-count-other': '{0} mL'
            },
            'volume-pint-metric': {
                'displayName': 'mpt',
                'unitPattern-count-one': '{0} mpt',
                'unitPattern-count-other': '{0} mpt'
            },
            'volume-cup-metric': {
                'displayName': 'mcup',
                'unitPattern-count-one': '{0} mc',
                'unitPattern-count-other': '{0} mc'
            },
            'volume-acre-foot': {
                'displayName': 'acre ft',
                'unitPattern-count-one': '{0} ac ft',
                'unitPattern-count-other': '{0} ac ft'
            },
            'volume-bushel': {
                'displayName': 'bushels',
                'unitPattern-count-one': '{0} bu',
                'unitPattern-count-other': '{0} bu'
            },
            'volume-gallon': {
                'displayName': 'gal',
                'unitPattern-count-one': '{0} gal',
                'unitPattern-count-other': '{0} gal',
                'perUnitPattern': '{0}/gal US'
            },
            'volume-gallon-imperial': {
                'displayName': 'Imp. gal',
                'unitPattern-count-one': '{0} gal Imp.',
                'unitPattern-count-other': '{0} gal Imp.',
                'perUnitPattern': '{0}/gal Imp.'
            },
            'volume-quart': {
                'displayName': 'qts',
                'unitPattern-count-one': '{0} qt',
                'unitPattern-count-other': '{0} qt'
            },
            'volume-pint': {
                'displayName': 'pints',
                'unitPattern-count-one': '{0} pt',
                'unitPattern-count-other': '{0} pt'
            },
            'volume-cup': {
                'displayName': 'cups',
                'unitPattern-count-one': '{0} c',
                'unitPattern-count-other': '{0} c'
            },
            'volume-fluid-ounce': {
                'displayName': 'fl oz',
                'unitPattern-count-one': '{0} fl oz',
                'unitPattern-count-other': '{0} fl oz'
            },
            'volume-tablespoon': {
                'displayName': 'tbsp',
                'unitPattern-count-one': '{0} tbsp',
                'unitPattern-count-other': '{0} tbsp'
            },
            'volume-teaspoon': {
                'displayName': 'tsp',
                'unitPattern-count-one': '{0} tsp',
                'unitPattern-count-other': '{0} tsp'
            },
            'coordinateUnit': {
                'east': '{0} E',
                'north': '{0} N',
                'south': '{0} S',
                'west': '{0} W'
            }
        }
    }
};
var M_ISO639_OLD_TO_NEW = {
    'iw': 'he',
    'ji': 'yi'
};
var M_SUPPORTED_LOCALES = function () {
    var LOCALES = Locale._cldrLocales, result = {}, i;
    if (LOCALES) {
        for (i = 0; i < LOCALES.length; i++) {
            result[LOCALES[i]] = true;
        }
    }
    return result;
}();
var mLocaleDatas = {};
function getCLDRCalendarName(sCalendarType) {
    if (!sCalendarType) {
        sCalendarType = Core.getConfiguration().getCalendarType();
    }
    return 'ca-' + sCalendarType.toLowerCase();
}
function getData(oLocale) {
    var sLanguage = oLocale.getLanguage() || '', sScript = oLocale.getScript() || '', sRegion = oLocale.getRegion() || '', mData;
    function merge(obj, fallbackObj) {
        var name, value, fallbackValue;
        if (!fallbackObj) {
            return;
        }
        for (name in fallbackObj) {
            if (fallbackObj.hasOwnProperty(name)) {
                value = obj[name];
                fallbackValue = fallbackObj[name];
                if (value === undefined) {
                    obj[name] = fallbackValue;
                } else if (value === null) {
                    delete obj[name];
                } else if (typeof value === 'object' && typeof fallbackValue === 'object') {
                    merge(value, fallbackValue);
                }
            }
        }
    }
    function getOrLoad(sId) {
        if (!mLocaleDatas[sId] && (!M_SUPPORTED_LOCALES || M_SUPPORTED_LOCALES[sId] === true)) {
            var data = mLocaleDatas[sId] = LoaderExtensions.loadResource('sap/ui/core/cldr/' + sId + '.json', {
                dataType: 'json',
                failOnError: false
            });
            if (data && data.__fallbackLocale) {
                merge(data, getOrLoad(data.__fallbackLocale));
                delete data.__fallbackLocale;
            }
        }
        return mLocaleDatas[sId];
    }
    sLanguage = sLanguage && M_ISO639_OLD_TO_NEW[sLanguage] || sLanguage;
    if (sLanguage === 'no') {
        sLanguage = 'nb';
    }
    if (sLanguage === 'zh' && !sRegion) {
        if (sScript === 'Hans') {
            sRegion = 'CN';
        } else if (sScript === 'Hant') {
            sRegion = 'TW';
        }
    }
    if (sLanguage === 'sh' || sLanguage === 'sr' && sScript === 'Latn') {
        sLanguage = 'sr_Latn';
    }
    var sId = sLanguage + '_' + sRegion;
    if (sLanguage && sRegion) {
        mData = getOrLoad(sId);
    }
    if (!mData && sLanguage) {
        mData = getOrLoad(sLanguage);
    }
    mLocaleDatas[sId] = mData || M_DEFAULT_DATA;
    return mLocaleDatas[sId];
}
var CustomLocaleData = LocaleData.extend('sap.ui.core.CustomLocaleData', {
    constructor: function (oLocale) {
        LocaleData.apply(this, arguments);
        this.mCustomData = Core.getConfiguration().getFormatSettings().getCustomLocaleData();
    },
    _get: function () {
        var aArguments = Array.prototype.slice.call(arguments), sCalendar, sKey;
        if (aArguments[0].indexOf('ca-') == 0) {
            sCalendar = aArguments[0];
            if (sCalendar == getCLDRCalendarName()) {
                aArguments = aArguments.slice(1);
            }
        }
        sKey = aArguments.join('-');
        var vValue = this.mCustomData[sKey];
        if (vValue == null) {
            vValue = this._getDeep(this.mCustomData, arguments);
            if (vValue == null) {
                vValue = this._getDeep(this.mData, arguments);
            }
        }
        return vValue;
    },
    _getMerged: function () {
        var mData = this._getDeep(this.mData, arguments);
        var mCustomData = this._getDeep(this.mCustomData, arguments);
        return fnExtend({}, mData, mCustomData);
    }
});
LocaleData.getInstance = function (oLocale) {
    return oLocale.hasPrivateUseSubtag('sapufmt') ? new CustomLocaleData(oLocale) : new LocaleData(oLocale);
};

var mRegistry = new Map();
var _Calendars = {
  get: function (sCalendarType) {
    if (!mRegistry.has(sCalendarType)) {
      throw new Error("Required calendar type: " + sCalendarType + " not loaded.");
    }
    return mRegistry.get(sCalendarType);
  },
  set: function (sCalendarType, CalendarClass) {
    mRegistry.set(sCalendarType, CalendarClass);
  }
};

var UniversalDate = BaseObject.extend('sap.ui.core.date.UniversalDate', {
    constructor: function () {
        var clDate = UniversalDate.getClass();
        return this.createDate(clDate, arguments);
    }
});
UniversalDate.UTC = function () {
    var clDate = UniversalDate.getClass();
    return clDate.UTC.apply(clDate, arguments);
};
UniversalDate.now = function () {
    return Date.now();
};
UniversalDate.prototype.createDate = function (clDate, aArgs) {
    switch (aArgs.length) {
    case 0:
        return new clDate();
    case 1:
        return new clDate(aArgs[0] instanceof Date ? aArgs[0].getTime() : aArgs[0]);
    case 2:
        return new clDate(aArgs[0], aArgs[1]);
    case 3:
        return new clDate(aArgs[0], aArgs[1], aArgs[2]);
    case 4:
        return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3]);
    case 5:
        return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3], aArgs[4]);
    case 6:
        return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3], aArgs[4], aArgs[5]);
    case 7:
        return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3], aArgs[4], aArgs[5], aArgs[6]);
    }
};
UniversalDate.getInstance = function (oDate, sCalendarType) {
    var clDate, oInstance;
    if (oDate instanceof UniversalDate) {
        oDate = oDate.getJSDate();
    } else if (!oDate) {
        oDate = new Date();
    }
    if (!sCalendarType) {
        sCalendarType = Core.getConfiguration().getCalendarType();
    }
    clDate = UniversalDate.getClass(sCalendarType);
    oInstance = Object.create(clDate.prototype);
    oInstance.oDate = oDate;
    oInstance.sCalendarType = sCalendarType;
    return oInstance;
};
UniversalDate.getClass = function (sCalendarType) {
    if (!sCalendarType) {
        sCalendarType = Core.getConfiguration().getCalendarType();
    }
    return _Calendars.get(sCalendarType);
};
[
    'getDate',
    'getMonth',
    'getFullYear',
    'getYear',
    'getDay',
    'getHours',
    'getMinutes',
    'getSeconds',
    'getMilliseconds',
    'getUTCDate',
    'getUTCMonth',
    'getUTCFullYear',
    'getUTCDay',
    'getUTCHours',
    'getUTCMinutes',
    'getUTCSeconds',
    'getUTCMilliseconds',
    'getTime',
    'valueOf',
    'getTimezoneOffset',
    'toString',
    'toDateString',
    'setDate',
    'setFullYear',
    'setYear',
    'setMonth',
    'setHours',
    'setMinutes',
    'setSeconds',
    'setMilliseconds',
    'setUTCDate',
    'setUTCFullYear',
    'setUTCMonth',
    'setUTCHours',
    'setUTCMinutes',
    'setUTCSeconds',
    'setUTCMilliseconds'
].forEach(function (sName) {
    UniversalDate.prototype[sName] = function () {
        return this.oDate[sName].apply(this.oDate, arguments);
    };
});
UniversalDate.prototype.getJSDate = function () {
    return this.oDate;
};
UniversalDate.prototype.getCalendarType = function () {
    return this.sCalendarType;
};
UniversalDate.prototype.getEra = function () {
    return UniversalDate.getEraByDate(this.sCalendarType, this.oDate.getFullYear(), this.oDate.getMonth(), this.oDate.getDate());
};
UniversalDate.prototype.setEra = function (iEra) {
};
UniversalDate.prototype.getUTCEra = function () {
    return UniversalDate.getEraByDate(this.sCalendarType, this.oDate.getUTCFullYear(), this.oDate.getUTCMonth(), this.oDate.getUTCDate());
};
UniversalDate.prototype.setUTCEra = function (iEra) {
};
UniversalDate.prototype.getWeek = function () {
    return UniversalDate.getWeekByDate(this.sCalendarType, this.getFullYear(), this.getMonth(), this.getDate());
};
UniversalDate.prototype.setWeek = function (oWeek) {
    var oDate = UniversalDate.getFirstDateOfWeek(this.sCalendarType, oWeek.year || this.getFullYear(), oWeek.week);
    this.setFullYear(oDate.year, oDate.month, oDate.day);
};
UniversalDate.prototype.getUTCWeek = function () {
    return UniversalDate.getWeekByDate(this.sCalendarType, this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate());
};
UniversalDate.prototype.setUTCWeek = function (oWeek) {
    var oDate = UniversalDate.getFirstDateOfWeek(this.sCalendarType, oWeek.year || this.getFullYear(), oWeek.week);
    this.setUTCFullYear(oDate.year, oDate.month, oDate.day);
};
UniversalDate.prototype.getQuarter = function () {
    return Math.floor(this.getMonth() / 3);
};
UniversalDate.prototype.getUTCQuarter = function () {
    return Math.floor(this.getUTCMonth() / 3);
};
UniversalDate.prototype.getDayPeriod = function () {
    if (this.getHours() < 12) {
        return 0;
    } else {
        return 1;
    }
};
UniversalDate.prototype.getUTCDayPeriod = function () {
    if (this.getUTCHours() < 12) {
        return 0;
    } else {
        return 1;
    }
};
UniversalDate.prototype.getTimezoneShort = function () {
    if (this.oDate.getTimezoneShort) {
        return this.oDate.getTimezoneShort();
    }
};
UniversalDate.prototype.getTimezoneLong = function () {
    if (this.oDate.getTimezoneLong) {
        return this.oDate.getTimezoneLong();
    }
};
var iMillisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
UniversalDate.getWeekByDate = function (sCalendarType, iYear, iMonth, iDay) {
    var oLocale = Core.getConfiguration().getFormatSettings().getFormatLocale(), clDate = this.getClass(sCalendarType), oFirstDay = getFirstDayOfFirstWeek(clDate, iYear), oDate = new clDate(clDate.UTC(iYear, iMonth, iDay)), iWeek, iLastYear, iNextYear, oLastFirstDay, oNextFirstDay;
    if (oLocale.getRegion() === 'US') {
        iWeek = calculateWeeks(oFirstDay, oDate);
    } else {
        iLastYear = iYear - 1;
        iNextYear = iYear + 1;
        oLastFirstDay = getFirstDayOfFirstWeek(clDate, iLastYear);
        oNextFirstDay = getFirstDayOfFirstWeek(clDate, iNextYear);
        if (oDate >= oNextFirstDay) {
            iYear = iNextYear;
            iWeek = 0;
        } else if (oDate < oFirstDay) {
            iYear = iLastYear;
            iWeek = calculateWeeks(oLastFirstDay, oDate);
        } else {
            iWeek = calculateWeeks(oFirstDay, oDate);
        }
    }
    return {
        year: iYear,
        week: iWeek
    };
};
UniversalDate.getFirstDateOfWeek = function (sCalendarType, iYear, iWeek) {
    var oLocale = Core.getConfiguration().getFormatSettings().getFormatLocale(), clDate = this.getClass(sCalendarType), oFirstDay = getFirstDayOfFirstWeek(clDate, iYear), oDate = new clDate(oFirstDay.valueOf() + iWeek * iMillisecondsInWeek);
    if (oLocale.getRegion() === 'US' && iWeek === 0 && oFirstDay.getUTCFullYear() < iYear) {
        return {
            year: iYear,
            month: 0,
            day: 1
        };
    }
    return {
        year: oDate.getUTCFullYear(),
        month: oDate.getUTCMonth(),
        day: oDate.getUTCDate()
    };
};
function getFirstDayOfFirstWeek(clDate, iYear) {
    var oLocale = Core.getConfiguration().getFormatSettings().getFormatLocale(), oLocaleData = LocaleData.getInstance(oLocale), iMinDays = oLocaleData.getMinimalDaysInFirstWeek(), iFirstDayOfWeek = oLocaleData.getFirstDayOfWeek(), oFirstDay = new clDate(clDate.UTC(iYear, 0, 1)), iDayCount = 7;
    while (oFirstDay.getUTCDay() !== iFirstDayOfWeek) {
        oFirstDay.setUTCDate(oFirstDay.getUTCDate() - 1);
        iDayCount--;
    }
    if (iDayCount < iMinDays) {
        oFirstDay.setUTCDate(oFirstDay.getUTCDate() + 7);
    }
    return oFirstDay;
}
function calculateWeeks(oFromDate, oToDate) {
    return Math.floor((oToDate.valueOf() - oFromDate.valueOf()) / iMillisecondsInWeek);
}
var mEras = {};
UniversalDate.getEraByDate = function (sCalendarType, iYear, iMonth, iDay) {
    var aEras = getEras(sCalendarType), iTimestamp = new Date(0).setUTCFullYear(iYear, iMonth, iDay), oEra;
    for (var i = aEras.length - 1; i >= 0; i--) {
        oEra = aEras[i];
        if (!oEra) {
            continue;
        }
        if (oEra._start && iTimestamp >= oEra._startInfo.timestamp) {
            return i;
        }
        if (oEra._end && iTimestamp < oEra._endInfo.timestamp) {
            return i;
        }
    }
};
UniversalDate.getCurrentEra = function (sCalendarType) {
    var oNow = new Date();
    return this.getEraByDate(sCalendarType, oNow.getFullYear(), oNow.getMonth(), oNow.getDate());
};
UniversalDate.getEraStartDate = function (sCalendarType, iEra) {
    var aEras = getEras(sCalendarType), oEra = aEras[iEra] || aEras[0];
    if (oEra._start) {
        return oEra._startInfo;
    }
};
function getEras(sCalendarType) {
    var oLocale = Core.getConfiguration().getFormatSettings().getFormatLocale(), oLocaleData = LocaleData.getInstance(oLocale), aEras = mEras[sCalendarType];
    if (!aEras) {
        var aEras = oLocaleData.getEraDates(sCalendarType);
        if (!aEras[0]) {
            aEras[0] = { _start: '1-1-1' };
        }
        for (var i = 0; i < aEras.length; i++) {
            var oEra = aEras[i];
            if (!oEra) {
                continue;
            }
            if (oEra._start) {
                oEra._startInfo = parseDateString(oEra._start);
            }
            if (oEra._end) {
                oEra._endInfo = parseDateString(oEra._end);
            }
        }
        mEras[sCalendarType] = aEras;
    }
    return aEras;
}
function parseDateString(sDateString) {
    var aParts = sDateString.split('-'), iYear, iMonth, iDay;
    if (aParts[0] == '') {
        iYear = -parseInt(aParts[1]);
        iMonth = parseInt(aParts[2]) - 1;
        iDay = parseInt(aParts[3]);
    } else {
        iYear = parseInt(aParts[0]);
        iMonth = parseInt(aParts[1]) - 1;
        iDay = parseInt(aParts[2]);
    }
    return {
        timestamp: new Date(0).setUTCFullYear(iYear, iMonth, iDay),
        year: iYear,
        month: iMonth,
        day: iDay
    };
}

class CalendarDate$1 {
	constructor() {
		let aArgs = arguments, // eslint-disable-line
			oJSDate,
			oNow,
			sCalendarType;

		switch (aArgs.length) {
		case 0: // defaults to the current date
			oNow = new Date();
			return this.constructor(oNow.getFullYear(), oNow.getMonth(), oNow.getDate());

		case 1: // CalendarDate
		case 2: // CalendarDate, sCalendarType
			if (!(aArgs[0] instanceof CalendarDate$1)) {
				throw new Error("Invalid arguments: the first argument must be of type sap.ui.unified.calendar.CalendarDate.");
			}
			sCalendarType = aArgs[1] ? aArgs[1] : aArgs[0]._oUDate.sCalendarType;
			// Use source.valueOf() (returns the same point of time regardless calendar type) instead of
			// source's getters to avoid non-gregorian Year, Month and Date may be used to construct a Gregorian date
			oJSDate = new Date(aArgs[0].valueOf());

			// Make this date really local. Now getters are safe.
			oJSDate.setFullYear(oJSDate.getUTCFullYear(), oJSDate.getUTCMonth(), oJSDate.getUTCDate());
			oJSDate.setHours(oJSDate.getUTCHours(), oJSDate.getUTCMinutes(), oJSDate.getUTCSeconds(), oJSDate.getUTCMilliseconds());

			this._oUDate = createUniversalUTCDate(oJSDate, sCalendarType);
			break;

		case 3: // year, month, date
		case 4: // year, month, date, sCalendarType
			checkNumericLike(aArgs[0], `Invalid year: ${aArgs[0]}`);
			checkNumericLike(aArgs[1], `Invalid month: ${aArgs[1]}`);
			checkNumericLike(aArgs[2], `Invalid date: ${aArgs[2]}`);

			oJSDate = new Date(0, 0, 1);
			oJSDate.setFullYear(aArgs[0], aArgs[1], aArgs[2]); // 2 digits year is not supported. If so, it is considered as full year as well.

			if (aArgs[3]) {
				sCalendarType = aArgs[3];
			}
			this._oUDate = createUniversalUTCDate(oJSDate, sCalendarType);
			break;

		default:
			throw new Error(`${"Invalid arguments. Accepted arguments are: 1) oCalendarDate, (optional)calendarType"
				+ "or 2) year, month, date, (optional) calendarType"}${aArgs}`);
		}
	}

	getYear() {
		return this._oUDate.getUTCFullYear();
	}

	setYear(year) {
		checkNumericLike(year, `Invalid year: ${year}`);
		this._oUDate.setUTCFullYear(year);
		return this;
	}

	getMonth() {
		return this._oUDate.getUTCMonth();
	}

	/**
	 * Sets the given month as ordinal month of the year.
	 * @param {int} month An integer between 0 and 11, representing the months January through December( or their
	 * equivalent month names for the given calendar).
	 * If the specified value is is outside of the expected range, this method attempts to update the date information
	 * accordingly. For example, if 12 is given as a month, the year will be incremented by 1, and 1 will be used for month.
	 * @param {int} [date] An integer between 1 and 31, representing the day of the month, but other values are allowed.
	 * 0 will result in the previous month's last day.
	 * -1 will result in the day before the previous month's last day.
	 * 32 will result in:
	 * - first day of the next month if the current month has 31 days.
	 * - second day of the next month if the current month has 30 days.
	 * Other value will result in adding or subtracting days according to the given value.
	 * @returns {sap.ui.unified.calendar.CalendarDate} <code>this</code> for method chaining.
	 */
	setMonth(month, date) {
		checkNumericLike(month, `Invalid month: ${month}`);
		if (date || date === 0) {
			checkNumericLike(date, `Invalid date: ${date}`);
			this._oUDate.setUTCMonth(month, date);
		} else {
			this._oUDate.setUTCMonth(month);
		}
		return this;
	}

	getDate() {
		return this._oUDate.getUTCDate();
	}

	setDate(date) {
		checkNumericLike(date, `Invalid date: ${date}`);
		this._oUDate.setUTCDate(date);
		return this;
	}

	getDay() {
		return this._oUDate.getUTCDay();
	}

	getCalendarType() {
		return this._oUDate.sCalendarType;
	}

	isBefore(oCalendarDate) {
		checkCalendarDate(oCalendarDate);
		return this.valueOf() < oCalendarDate.valueOf();
	}

	isAfter(oCalendarDate) {
		checkCalendarDate(oCalendarDate);
		return this.valueOf() > oCalendarDate.valueOf();
	}

	isSameOrBefore(oCalendarDate) {
		checkCalendarDate(oCalendarDate);
		return this.valueOf() <= oCalendarDate.valueOf();
	}

	isSameOrAfter(oCalendarDate) {
		checkCalendarDate(oCalendarDate);
		return this.valueOf() >= oCalendarDate.valueOf();
	}

	isSame(oCalendarDate) {
		checkCalendarDate(oCalendarDate);
		return this.valueOf() === oCalendarDate.valueOf();
	}

	toLocalJSDate() {
		// Use this._oUDate.getTime()(returns the same point of time regardless calendar type)  instead of
		// this._oUDate's getters to avoid non-gregorian Year, Month and Date to be used to construct a Gregorian date
		const oLocalDate = new Date(this._oUDate.getTime());

		// Make this date really local. Now getters are safe.
		oLocalDate.setFullYear(oLocalDate.getUTCFullYear(), oLocalDate.getUTCMonth(), oLocalDate.getUTCDate());
		oLocalDate.setHours(0, 0, 0, 0);

		return oLocalDate;
	}

	toUTCJSDate() {
		// Use this._oUDate.getTime()(returns the same point of time regardless calendar type)  instead of
		// this._oUDate's getters to avoid non-gregorian Year, Month and Date to be used to construct a Gregorian date
		const oUTCDate = new Date(this._oUDate.getTime());
		oUTCDate.setUTCHours(0, 0, 0, 0);

		return oUTCDate;
	}

	toString() {
		return `${this._oUDate.sCalendarType}: ${this.getYear()}/${this.getMonth() + 1}/${this.getDate()}`;
	}

	valueOf() {
		return this._oUDate.getTime();
	}

	static fromLocalJSDate(oJSDate, sCalendarType) {
		// Cross frame check for a date should be performed here otherwise setDateValue would fail in OPA tests
		// because Date object in the test is different than the Date object in the application (due to the iframe).
		// We can use jQuery.type or this method:
		function isValidDate(date) {
			return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date); // eslint-disable-line
		}
		if (!isValidDate(oJSDate)) {
			throw new Error(`Date parameter must be a JavaScript Date object: [${oJSDate}].`);
		}
		return new CalendarDate$1(oJSDate.getFullYear(), oJSDate.getMonth(), oJSDate.getDate(), sCalendarType);
	}

	static fromTimestamp(iTimestamp, sCalendarType) {
		const oCalDate = new CalendarDate$1(0, 0, 1);
		oCalDate._oUDate = UniversalDate.getInstance(new Date(iTimestamp), sCalendarType);
		return oCalDate;
	}
}

function createUniversalUTCDate(oDate, sCalendarType) {
	if (sCalendarType) {
		return UniversalDate.getInstance(createUTCDate(oDate), sCalendarType);
	}
	return new UniversalDate(createUTCDate(oDate).getTime());
}

/**
 * Creates a JavaScript UTC Date corresponding to the given JavaScript Date.
 * @param {Date} oDate JavaScript date object. Time related information is cut.
 * @returns {Date} JavaScript date created from the date object, but this time considered as UTC date information.
 */
function createUTCDate(oDate) {
	const oUTCDate = new Date(Date.UTC(0, 0, 1));

	oUTCDate.setUTCFullYear(oDate.getFullYear(), oDate.getMonth(), oDate.getDate());

	return oUTCDate;
}

function checkCalendarDate(oCalendarDate) {
	if (!(oCalendarDate instanceof CalendarDate$1)) {
		throw new Error(`Invalid calendar date: [${oCalendarDate}]. Expected: sap.ui.unified.calendar.CalendarDate`);
	}
}

/**
 * Verifies the given value is numeric like, i.e. 3, "3" and throws an error if it is not.
 * @param {any} value The value of any type to check. If null or undefined, this method throws an error.
 * @param {string} message The message to be used if an error is to be thrown
 * @throws will throw an error if the value is null or undefined or is not like a number
 */
function checkNumericLike(value, message) {
	if (value === undefined || value === Infinity || isNaN(value)) { // eslint-disable-line
		throw message;
	}
}

/**
 * Adds or subtracts a given amount of days/months/years from a date.
 * If minDate or maxDate are given, the result will be enforced within these limits
 *
 * @param date CalendarDate instance
 * @param amount how many days/months/years to add (can be a negative number)
 * @param unit what to modify: "day", "month" or "year"
 * @param minDate minimum date to enforce
 * @param maxDate maximum date to enforce
 */
const modifyDateBy = (date, amount, unit, minDate = null, maxDate = null) => {
	const newDate = new CalendarDate$1(date);
	if (unit === "day") {
		newDate.setDate(date.getDate() + amount);
	} else if (unit === "month") {
		newDate.setMonth(date.getMonth() + amount);
		const stillSameMonth = amount === -1 && newDate.getMonth() === date.getMonth(); // f.e. PageUp remained in the same month
		const monthSkipped = amount === 1 && newDate.getMonth() - date.getMonth() > 1; // f.e. PageDown skipped a whole month
		if (stillSameMonth || monthSkipped) { // Select the last day of the month in any of these 2 scenarios
			newDate.setDate(0);
		}
	} else {
		newDate.setYear(date.getYear() + amount);
		if (newDate.getMonth() !== date.getMonth()) { // f.e. 29th Feb to next/prev year
			newDate.setDate(0); // Select the last day of the month
		}
	}

	if (minDate && newDate.valueOf() < minDate.valueOf()) {
		return new CalendarDate$1(minDate);
	}

	if (maxDate && newDate.valueOf() > maxDate.valueOf()) {
		return new CalendarDate$1(maxDate);
	}

	return newDate;
};

/**
 * Returns a timestamp with only the year, month and day (with zero hours, minutes and seconds) and without 000 for milliseconds
 * @param millisecondsUTC
 * @returns {number}
 */
const getRoundedTimestamp = millisecondsUTC => {
	if (!millisecondsUTC) {
		millisecondsUTC = new Date().getTime();
	}
	const rounded = millisecondsUTC - (millisecondsUTC % (24 * 60 * 60 * 1000));
	return rounded / 1000;
};

/**
 * Returns a UTC timestamp representing today
 * @public
 */
const getTodayUTCTimestamp = primaryCalendarType => CalendarDate$1.fromLocalJSDate(new Date(), primaryCalendarType).valueOf() / 1000;

const name$1 = "appointment-2";
const pathData$1 = "M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z";
const ltr$1 = false;
const collection$1 = "SAP-icons";
const packageName$1 = "@ui5/webcomponents-icons";

registerIcon(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

const appointment2 = { pathData: pathData$1 };

var fnEqual = function (a, b, maxDepth, contains, depth) {
    if (typeof maxDepth == 'boolean') {
        contains = maxDepth;
        maxDepth = undefined;
    }
    if (!depth) {
        depth = 0;
    }
    if (!maxDepth) {
        maxDepth = 10;
    }
    if (depth > maxDepth) {
        Log.warning('deepEqual comparison exceeded maximum recursion depth of ' + maxDepth + '. Treating values as unequal');
        return false;
    }
    if (a === b) {
        return true;
    }
    var bIsReallyNaN = typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    if (bIsReallyNaN) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (!contains && a.length !== b.length) {
            return false;
        }
        if (a.length > b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!fnEqual(a[i], b[i], maxDepth, contains, depth + 1)) {
                return false;
            }
        }
        return true;
    }
    if (typeof a == 'object' && typeof b == 'object') {
        if (!a || !b) {
            return false;
        }
        if (a.constructor !== b.constructor) {
            return false;
        }
        if (!contains && Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        if (a instanceof Node) {
            return a.isEqualNode(b);
        }
        if (a instanceof Date) {
            return a.valueOf() === b.valueOf();
        }
        for (var i in a) {
            if (!fnEqual(a[i], b[i], maxDepth, contains, depth + 1)) {
                return false;
            }
        }
        return true;
    }
    return false;
};

var rMessageFormat = /('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g;
var fnFormatMessage = function (sPattern, aValues) {
    fnAssert(typeof sPattern === 'string' || sPattern instanceof String, 'pattern must be string');
    if (arguments.length > 2 || aValues != null && !Array.isArray(aValues)) {
        aValues = Array.prototype.slice.call(arguments, 1);
    }
    aValues = aValues || [];
    return sPattern.replace(rMessageFormat, function ($0, $1, $2, $3, offset) {
        if ($1) {
            return '\'';
        } else if ($2) {
            return $2.replace(/''/g, '\'');
        } else if ($3) {
            return String(aValues[parseInt($3)]);
        }
        throw new Error('formatMessage: pattern syntax error at pos. ' + offset);
    });
};

var DateFormat = function () {
    throw new Error();
};
var mCldrDatePattern = {};
DateFormat.oDateInfo = {
    oDefaultFormatOptions: {
        style: 'medium',
        relativeScale: 'day',
        relativeStyle: 'wide'
    },
    aFallbackFormatOptions: [
        { style: 'short' },
        { style: 'medium' },
        { pattern: 'yyyy-MM-dd' },
        {
            pattern: 'yyyyMMdd',
            strictParsing: true
        }
    ],
    bShortFallbackFormatOptions: true,
    bPatternFallbackWithoutDelimiter: true,
    getPattern: function (oLocaleData, sStyle, sCalendarType) {
        return oLocaleData.getDatePattern(sStyle, sCalendarType);
    },
    oRequiredParts: {
        'text': true,
        'year': true,
        'weekYear': true,
        'month': true,
        'day': true
    },
    aRelativeScales: [
        'year',
        'month',
        'week',
        'day'
    ],
    aRelativeParseScales: [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second'
    ],
    aIntervalCompareFields: [
        'Era',
        'FullYear',
        'Quarter',
        'Month',
        'Week',
        'Date'
    ]
};
DateFormat.oDateTimeInfo = {
    oDefaultFormatOptions: {
        style: 'medium',
        relativeScale: 'auto',
        relativeStyle: 'wide'
    },
    aFallbackFormatOptions: [
        { style: 'short' },
        { style: 'medium' },
        { pattern: 'yyyy-MM-dd\'T\'HH:mm:ss' },
        { pattern: 'yyyyMMdd HHmmss' }
    ],
    getPattern: function (oLocaleData, sStyle, sCalendarType) {
        var iSlashIndex = sStyle.indexOf('/');
        if (iSlashIndex > 0) {
            return oLocaleData.getCombinedDateTimePattern(sStyle.substr(0, iSlashIndex), sStyle.substr(iSlashIndex + 1), sCalendarType);
        } else {
            return oLocaleData.getCombinedDateTimePattern(sStyle, sStyle, sCalendarType);
        }
    },
    oRequiredParts: {
        'text': true,
        'year': true,
        'weekYear': true,
        'month': true,
        'day': true,
        'hour0_23': true,
        'hour1_24': true,
        'hour0_11': true,
        'hour1_12': true
    },
    aRelativeScales: [
        'year',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second'
    ],
    aRelativeParseScales: [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second'
    ],
    aIntervalCompareFields: [
        'Era',
        'FullYear',
        'Quarter',
        'Month',
        'Week',
        'Date',
        'DayPeriod',
        'Hours',
        'Minutes',
        'Seconds'
    ]
};
DateFormat.oTimeInfo = {
    oDefaultFormatOptions: {
        style: 'medium',
        relativeScale: 'auto',
        relativeStyle: 'wide'
    },
    aFallbackFormatOptions: [
        { style: 'short' },
        { style: 'medium' },
        { pattern: 'HH:mm:ss' },
        { pattern: 'HHmmss' }
    ],
    getPattern: function (oLocaleData, sStyle, sCalendarType) {
        return oLocaleData.getTimePattern(sStyle, sCalendarType);
    },
    oRequiredParts: {
        'text': true,
        'hour0_23': true,
        'hour1_24': true,
        'hour0_11': true,
        'hour1_12': true
    },
    aRelativeScales: [
        'hour',
        'minute',
        'second'
    ],
    aRelativeParseScales: [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second'
    ],
    aIntervalCompareFields: [
        'DayPeriod',
        'Hours',
        'Minutes',
        'Seconds'
    ]
};
DateFormat.getInstance = function (oFormatOptions, oLocale) {
    return this.getDateInstance(oFormatOptions, oLocale);
};
DateFormat.getDateInstance = function (oFormatOptions, oLocale) {
    return this.createInstance(oFormatOptions, oLocale, this.oDateInfo);
};
DateFormat.getDateTimeInstance = function (oFormatOptions, oLocale) {
    return this.createInstance(oFormatOptions, oLocale, this.oDateTimeInfo);
};
DateFormat.getTimeInstance = function (oFormatOptions, oLocale) {
    return this.createInstance(oFormatOptions, oLocale, this.oTimeInfo);
};
function createIntervalPatternWithNormalConnector(oFormat) {
    var sPattern = oFormat.oLocaleData.getIntervalPattern('', oFormat.oFormatOptions.calendarType);
    sPattern = sPattern.replace(/[^\{\}01 ]/, '-');
    return sPattern.replace(/\{(0|1)\}/g, oFormat.oFormatOptions.pattern);
}
DateFormat.createInstance = function (oFormatOptions, oLocale, oInfo) {
    var oFormat = Object.create(this.prototype);
    if (oFormatOptions instanceof Locale) {
        oLocale = oFormatOptions;
        oFormatOptions = undefined;
    }
    if (!oLocale) {
        oLocale = Core.getConfiguration().getFormatSettings().getFormatLocale();
    }
    oFormat.oLocale = oLocale;
    oFormat.oLocaleData = LocaleData.getInstance(oLocale);
    oFormat.oFormatOptions = fnExtend({}, oInfo.oDefaultFormatOptions, oFormatOptions);
    if (!oFormat.oFormatOptions.calendarType) {
        oFormat.oFormatOptions.calendarType = Core.getConfiguration().getCalendarType();
    }
    if (!oFormat.oFormatOptions.pattern) {
        if (oFormat.oFormatOptions.format) {
            oFormat.oFormatOptions.pattern = oFormat.oLocaleData.getCustomDateTimePattern(oFormat.oFormatOptions.format, oFormat.oFormatOptions.calendarType);
        } else {
            oFormat.oFormatOptions.pattern = oInfo.getPattern(oFormat.oLocaleData, oFormat.oFormatOptions.style, oFormat.oFormatOptions.calendarType);
        }
    }
    if (oFormat.oFormatOptions.interval) {
        if (oFormat.oFormatOptions.format) {
            oFormat.intervalPatterns = oFormat.oLocaleData.getCustomIntervalPattern(oFormat.oFormatOptions.format, null, oFormat.oFormatOptions.calendarType);
            if (typeof oFormat.intervalPatterns === 'string') {
                oFormat.intervalPatterns = [oFormat.intervalPatterns];
            }
            oFormat.intervalPatterns.push(oFormat.oLocaleData.getCustomDateTimePattern(oFormat.oFormatOptions.format, oFormat.oFormatOptions.calendarType));
        } else {
            oFormat.intervalPatterns = [
                oFormat.oLocaleData.getCombinedIntervalPattern(oFormat.oFormatOptions.pattern, oFormat.oFormatOptions.calendarType),
                oFormat.oFormatOptions.pattern
            ];
        }
        var sCommonConnectorPattern = createIntervalPatternWithNormalConnector(oFormat);
        oFormat.intervalPatterns.push(sCommonConnectorPattern);
    }
    if (!oFormat.oFormatOptions.fallback) {
        if (!oInfo.oFallbackFormats) {
            oInfo.oFallbackFormats = {};
        }
        var sLocale = oLocale.toString(), sCalendarType = oFormat.oFormatOptions.calendarType, sKey = sLocale + '-' + sCalendarType, sPattern, aFallbackFormatOptions;
        if (oFormat.oFormatOptions.pattern && oInfo.bPatternFallbackWithoutDelimiter) {
            sKey = sKey + '-' + oFormat.oFormatOptions.pattern;
        }
        if (oFormat.oFormatOptions.interval) {
            sKey = sKey + '-' + 'interval';
        }
        var oFallbackFormats = oInfo.oFallbackFormats[sKey] ? Object.assign({}, oInfo.oFallbackFormats[sKey]) : undefined;
        if (!oFallbackFormats) {
            aFallbackFormatOptions = oInfo.aFallbackFormatOptions;
            if (oInfo.bShortFallbackFormatOptions) {
                sPattern = oInfo.getPattern(oFormat.oLocaleData, 'short');
                aFallbackFormatOptions = aFallbackFormatOptions.concat(DateFormat._createFallbackOptionsWithoutDelimiter(sPattern));
            }
            if (oFormat.oFormatOptions.pattern && oInfo.bPatternFallbackWithoutDelimiter) {
                aFallbackFormatOptions = DateFormat._createFallbackOptionsWithoutDelimiter(oFormat.oFormatOptions.pattern).concat(aFallbackFormatOptions);
            }
            oFallbackFormats = DateFormat._createFallbackFormat(aFallbackFormatOptions, sCalendarType, oLocale, oInfo, oFormat.oFormatOptions.interval);
        }
        oFormat.aFallbackFormats = oFallbackFormats;
    }
    oFormat.oRequiredParts = oInfo.oRequiredParts;
    oFormat.aRelativeScales = oInfo.aRelativeScales;
    oFormat.aRelativeParseScales = oInfo.aRelativeParseScales;
    oFormat.aIntervalCompareFields = oInfo.aIntervalCompareFields;
    oFormat.init();
    return oFormat;
};
DateFormat.prototype.init = function () {
    var sCalendarType = this.oFormatOptions.calendarType;
    this.aMonthsAbbrev = this.oLocaleData.getMonths('abbreviated', sCalendarType);
    this.aMonthsWide = this.oLocaleData.getMonths('wide', sCalendarType);
    this.aMonthsNarrow = this.oLocaleData.getMonths('narrow', sCalendarType);
    this.aMonthsAbbrevSt = this.oLocaleData.getMonthsStandAlone('abbreviated', sCalendarType);
    this.aMonthsWideSt = this.oLocaleData.getMonthsStandAlone('wide', sCalendarType);
    this.aMonthsNarrowSt = this.oLocaleData.getMonthsStandAlone('narrow', sCalendarType);
    this.aDaysAbbrev = this.oLocaleData.getDays('abbreviated', sCalendarType);
    this.aDaysWide = this.oLocaleData.getDays('wide', sCalendarType);
    this.aDaysNarrow = this.oLocaleData.getDays('narrow', sCalendarType);
    this.aDaysShort = this.oLocaleData.getDays('short', sCalendarType);
    this.aDaysAbbrevSt = this.oLocaleData.getDaysStandAlone('abbreviated', sCalendarType);
    this.aDaysWideSt = this.oLocaleData.getDaysStandAlone('wide', sCalendarType);
    this.aDaysNarrowSt = this.oLocaleData.getDaysStandAlone('narrow', sCalendarType);
    this.aDaysShortSt = this.oLocaleData.getDaysStandAlone('short', sCalendarType);
    this.aQuartersAbbrev = this.oLocaleData.getQuarters('abbreviated', sCalendarType);
    this.aQuartersWide = this.oLocaleData.getQuarters('wide', sCalendarType);
    this.aQuartersNarrow = this.oLocaleData.getQuarters('narrow', sCalendarType);
    this.aQuartersAbbrevSt = this.oLocaleData.getQuartersStandAlone('abbreviated', sCalendarType);
    this.aQuartersWideSt = this.oLocaleData.getQuartersStandAlone('wide', sCalendarType);
    this.aQuartersNarrowSt = this.oLocaleData.getQuartersStandAlone('narrow', sCalendarType);
    this.aErasNarrow = this.oLocaleData.getEras('narrow', sCalendarType);
    this.aErasAbbrev = this.oLocaleData.getEras('abbreviated', sCalendarType);
    this.aErasWide = this.oLocaleData.getEras('wide', sCalendarType);
    this.aDayPeriods = this.oLocaleData.getDayPeriods('abbreviated', sCalendarType);
    this.aFormatArray = this.parseCldrDatePattern(this.oFormatOptions.pattern);
    this.sAllowedCharacters = this.getAllowedCharacters(this.aFormatArray);
};
DateFormat._createFallbackFormat = function (aFallbackFormatOptions, sCalendarType, oLocale, oInfo, bInterval) {
    return aFallbackFormatOptions.map(function (oOptions) {
        var oFormatOptions = Object.assign({}, oOptions);
        if (bInterval) {
            oFormatOptions.interval = true;
        }
        oFormatOptions.calendarType = sCalendarType;
        oFormatOptions.fallback = true;
        var oFallbackFormat = DateFormat.createInstance(oFormatOptions, oLocale, oInfo);
        oFallbackFormat.bIsFallback = true;
        return oFallbackFormat;
    });
};
DateFormat._createFallbackOptionsWithoutDelimiter = function (sBasePattern) {
    var rNonDateFields = /[^dMyGU]/g, oDayReplace = {
            regex: /d+/g,
            replace: 'dd'
        }, oMonthReplace = {
            regex: /M+/g,
            replace: 'MM'
        }, oYearReplace = {
            regex: /[yU]+/g,
            replace: [
                'yyyy',
                'yy'
            ]
        };
    sBasePattern = sBasePattern.replace(rNonDateFields, '');
    sBasePattern = sBasePattern.replace(oDayReplace.regex, oDayReplace.replace);
    sBasePattern = sBasePattern.replace(oMonthReplace.regex, oMonthReplace.replace);
    return oYearReplace.replace.map(function (sReplace) {
        return {
            pattern: sBasePattern.replace(oYearReplace.regex, sReplace),
            strictParsing: true
        };
    });
};
var oParseHelper = {
    isNumber: function (iCharCode) {
        return iCharCode >= 48 && iCharCode <= 57;
    },
    findNumbers: function (sValue, iMaxLength) {
        var iLength = 0;
        while (iLength < iMaxLength && this.isNumber(sValue.charCodeAt(iLength))) {
            iLength++;
        }
        if (typeof sValue !== 'string') {
            sValue = sValue.toString();
        }
        return sValue.substr(0, iLength);
    },
    findEntry: function (sValue, aList) {
        var iFoundIndex = -1, iMatchedLength = 0;
        for (var j = 0; j < aList.length; j++) {
            if (aList[j] && aList[j].length > iMatchedLength && sValue.indexOf(aList[j]) === 0) {
                iFoundIndex = j;
                iMatchedLength = aList[j].length;
            }
        }
        return {
            index: iFoundIndex,
            value: iFoundIndex === -1 ? null : aList[iFoundIndex]
        };
    },
    parseTZ: function (sValue, bColonSeparated) {
        var iLength = 0;
        var iTZFactor = sValue.charAt(0) == '+' ? -1 : 1;
        var sPart;
        iLength++;
        sPart = this.findNumbers(sValue.substr(iLength), 2);
        var iTZDiffHour = parseInt(sPart);
        iLength += 2;
        if (bColonSeparated) {
            iLength++;
        }
        sPart = this.findNumbers(sValue.substr(iLength), 2);
        var iTZDiff = 0;
        if (sPart) {
            iLength += 2;
            iTZDiff = parseInt(sPart);
        }
        return {
            length: iLength,
            tzDiff: (iTZDiff + 60 * iTZDiffHour) * iTZFactor
        };
    },
    checkValid: function (sType, bPartInvalid, oFormat) {
        if (sType in oFormat.oRequiredParts && bPartInvalid) {
            return false;
        }
    }
};
DateFormat.prototype.oSymbols = {
    '': {
        name: 'text',
        format: function (oField, oDate, bUTC, oFormat) {
            return oField.value;
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var sChar;
            var bValid = true;
            var iValueIndex = 0;
            var iPatternIndex = 0;
            var sDelimiter = '-~\u2010\u2011\u2012\u2013\u2014\uFE58\uFE63\uFF0D\uFF5E';
            for (; iPatternIndex < oPart.value.length; iPatternIndex++) {
                sChar = oPart.value.charAt(iPatternIndex);
                if (sChar === ' ') {
                    while (sValue.charAt(iValueIndex) === ' ') {
                        iValueIndex++;
                    }
                } else if (sDelimiter.includes(sChar)) {
                    if (!sDelimiter.includes(sValue.charAt(iValueIndex))) {
                        bValid = false;
                    }
                    iValueIndex++;
                } else {
                    if (sValue.charAt(iValueIndex) !== sChar) {
                        bValid = false;
                    }
                    iValueIndex++;
                }
                if (!bValid) {
                    break;
                }
            }
            if (bValid) {
                return { length: iValueIndex };
            } else {
                var bPartInvalid = false;
                if (oConfig.index < oConfig.formatArray.length - 1) {
                    bPartInvalid = oConfig.formatArray[oConfig.index + 1].type in oFormat.oRequiredParts;
                }
                return { valid: oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat) };
            }
        }
    },
    'G': {
        name: 'era',
        format: function (oField, oDate, bUTC, oFormat) {
            var iEra = bUTC ? oDate.getUTCEra() : oDate.getEra();
            if (oField.digits <= 3) {
                return oFormat.aErasAbbrev[iEra];
            } else if (oField.digits === 4) {
                return oFormat.aErasWide[iEra];
            } else {
                return oFormat.aErasNarrow[iEra];
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var aErasVariants = [
                oFormat.aErasWide,
                oFormat.aErasAbbrev,
                oFormat.aErasNarrow
            ];
            for (var i = 0; i < aErasVariants.length; i++) {
                var aVariants = aErasVariants[i];
                var oFound = oParseHelper.findEntry(sValue, aVariants);
                if (oFound.index !== -1) {
                    return {
                        era: oFound.index,
                        length: oFound.value.length
                    };
                }
            }
            return {
                era: oFormat.aErasWide.length - 1,
                valid: oParseHelper.checkValid(oPart.type, true, oFormat)
            };
        }
    },
    'y': {
        name: 'year',
        format: function (oField, oDate, bUTC, oFormat) {
            var iYear = bUTC ? oDate.getUTCFullYear() : oDate.getFullYear();
            var sYear = String(iYear);
            var sCalendarType = oFormat.oFormatOptions.calendarType;
            if (oField.digits == 2 && sYear.length > 2) {
                sYear = sYear.substr(sYear.length - 2);
            }
            if (sCalendarType != CalendarType.Japanese && oField.digits == 1 && iYear < 100) {
                sYear = sYear.padStart(4, '0');
            }
            return sYear.padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var sCalendarType = oFormat.oFormatOptions.calendarType;
            var sPart;
            if (oPart.digits == 1) {
                sPart = oParseHelper.findNumbers(sValue, 4);
            } else if (oPart.digits == 2) {
                sPart = oParseHelper.findNumbers(sValue, 2);
            } else {
                sPart = oParseHelper.findNumbers(sValue, oPart.digits);
            }
            var iYear = parseInt(sPart);
            if (sCalendarType != CalendarType.Japanese && sPart.length <= 2) {
                var oCurrentDate = UniversalDate.getInstance(new Date(), sCalendarType), iCurrentYear = oCurrentDate.getFullYear(), iCurrentCentury = Math.floor(iCurrentYear / 100), iYearDiff = iCurrentCentury * 100 + iYear - iCurrentYear;
                if (iYearDiff < -70) {
                    iYear += (iCurrentCentury + 1) * 100;
                } else if (iYearDiff < 30) {
                    iYear += iCurrentCentury * 100;
                } else {
                    iYear += (iCurrentCentury - 1) * 100;
                }
            }
            return {
                length: sPart.length,
                valid: oParseHelper.checkValid(oPart.type, sPart === '', oFormat),
                year: iYear
            };
        }
    },
    'Y': {
        name: 'weekYear',
        format: function (oField, oDate, bUTC, oFormat) {
            var oWeek = bUTC ? oDate.getUTCWeek() : oDate.getWeek();
            var iWeekYear = oWeek.year;
            var sWeekYear = String(iWeekYear);
            var sCalendarType = oFormat.oFormatOptions.calendarType;
            if (oField.digits == 2 && sWeekYear.length > 2) {
                sWeekYear = sWeekYear.substr(sWeekYear.length - 2);
            }
            if (sCalendarType != CalendarType.Japanese && oField.digits == 1 && iWeekYear < 100) {
                sWeekYear = sWeekYear.padStart(4, '0');
            }
            return sWeekYear.padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var sCalendarType = oFormat.oFormatOptions.calendarType;
            var sPart;
            if (oPart.digits == 1) {
                sPart = oParseHelper.findNumbers(sValue, 4);
            } else if (oPart.digits == 2) {
                sPart = oParseHelper.findNumbers(sValue, 2);
            } else {
                sPart = oParseHelper.findNumbers(sValue, oPart.digits);
            }
            var iYear = parseInt(sPart);
            var iWeekYear;
            if (sCalendarType != CalendarType.Japanese && sPart.length <= 2) {
                var oCurrentDate = UniversalDate.getInstance(new Date(), sCalendarType), iCurrentYear = oCurrentDate.getFullYear(), iCurrentCentury = Math.floor(iCurrentYear / 100), iYearDiff = iCurrentCentury * 100 + iWeekYear - iCurrentYear;
                if (iYearDiff < -70) {
                    iWeekYear += (iCurrentCentury + 1) * 100;
                } else if (iYearDiff < 30) {
                    iWeekYear += iCurrentCentury * 100;
                } else {
                    iWeekYear += (iCurrentCentury - 1) * 100;
                }
            }
            return {
                length: sPart.length,
                valid: oParseHelper.checkValid(oPart.type, sPart === '', oFormat),
                year: iYear,
                weekYear: iWeekYear
            };
        }
    },
    'M': {
        name: 'month',
        format: function (oField, oDate, bUTC, oFormat) {
            var iMonth = bUTC ? oDate.getUTCMonth() : oDate.getMonth();
            if (oField.digits == 3) {
                return oFormat.aMonthsAbbrev[iMonth];
            } else if (oField.digits == 4) {
                return oFormat.aMonthsWide[iMonth];
            } else if (oField.digits > 4) {
                return oFormat.aMonthsNarrow[iMonth];
            } else {
                return String(iMonth + 1).padStart(oField.digits, '0');
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var aMonthsVariants = [
                oFormat.aMonthsWide,
                oFormat.aMonthsWideSt,
                oFormat.aMonthsAbbrev,
                oFormat.aMonthsAbbrevSt,
                oFormat.aMonthsNarrow,
                oFormat.aMonthsNarrowSt
            ];
            var bValid;
            var iMonth;
            var sPart;
            if (oPart.digits < 3) {
                sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
                bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
                iMonth = parseInt(sPart) - 1;
                if (oConfig.strict && (iMonth > 11 || iMonth < 0)) {
                    bValid = false;
                }
            } else {
                for (var i = 0; i < aMonthsVariants.length; i++) {
                    var aVariants = aMonthsVariants[i];
                    var oFound = oParseHelper.findEntry(sValue, aVariants);
                    if (oFound.index !== -1) {
                        return {
                            month: oFound.index,
                            length: oFound.value.length
                        };
                    }
                }
                bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
            }
            return {
                month: iMonth,
                length: sPart ? sPart.length : 0,
                valid: bValid
            };
        }
    },
    'L': {
        name: 'monthStandalone',
        format: function (oField, oDate, bUTC, oFormat) {
            var iMonth = bUTC ? oDate.getUTCMonth() : oDate.getMonth();
            if (oField.digits == 3) {
                return oFormat.aMonthsAbbrevSt[iMonth];
            } else if (oField.digits == 4) {
                return oFormat.aMonthsWideSt[iMonth];
            } else if (oField.digits > 4) {
                return oFormat.aMonthsNarrowSt[iMonth];
            } else {
                return String(iMonth + 1).padStart(oField.digits, '0');
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var aMonthsVariants = [
                oFormat.aMonthsWide,
                oFormat.aMonthsWideSt,
                oFormat.aMonthsAbbrev,
                oFormat.aMonthsAbbrevSt,
                oFormat.aMonthsNarrow,
                oFormat.aMonthsNarrowSt
            ];
            var bValid;
            var iMonth;
            var sPart;
            if (oPart.digits < 3) {
                sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
                bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
                iMonth = parseInt(sPart) - 1;
                if (oConfig.strict && (iMonth > 11 || iMonth < 0)) {
                    bValid = false;
                }
            } else {
                for (var i = 0; i < aMonthsVariants.length; i++) {
                    var aVariants = aMonthsVariants[i];
                    var oFound = oParseHelper.findEntry(sValue, aVariants);
                    if (oFound.index !== -1) {
                        return {
                            month: oFound.index,
                            length: oFound.value.length
                        };
                    }
                }
                bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
            }
            return {
                month: iMonth,
                length: sPart ? sPart.length : 0,
                valid: bValid
            };
        }
    },
    'w': {
        name: 'weekInYear',
        format: function (oField, oDate, bUTC, oFormat) {
            var oWeek = bUTC ? oDate.getUTCWeek() : oDate.getWeek();
            var iWeek = oWeek.week;
            var sWeek = String(iWeek + 1);
            if (oField.digits < 3) {
                sWeek = sWeek.padStart(oField.digits, '0');
            } else {
                sWeek = oFormat.oLocaleData.getCalendarWeek(oField.digits === 3 ? 'narrow' : 'wide', sWeek.padStart(2, '0'));
            }
            return sWeek;
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var sPart;
            var iWeek;
            var iLength = 0;
            if (oPart.digits < 3) {
                sPart = oParseHelper.findNumbers(sValue, 2);
                iLength = sPart.length;
                iWeek = parseInt(sPart) - 1;
                bValid = oParseHelper.checkValid(oPart.type, !sPart, oFormat);
            } else {
                sPart = oFormat.oLocaleData.getCalendarWeek(oPart.digits === 3 ? 'narrow' : 'wide');
                sPart = sPart.replace('{0}', '[0-9]+');
                var rWeekNumber = new RegExp(sPart), oResult = rWeekNumber.exec(sValue);
                if (oResult) {
                    iLength = oResult[0].length;
                    iWeek = parseInt(oResult[0]) - 1;
                } else {
                    bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
                }
            }
            return {
                length: iLength,
                valid: bValid,
                week: iWeek
            };
        }
    },
    'W': {
        name: 'weekInMonth',
        format: function (oField, oDate, bUTC, oFormat) {
            return '';
        },
        parse: function () {
            return {};
        }
    },
    'D': {
        name: 'dayInYear',
        format: function (oField, oDate, bUTC, oFormat) {
        },
        parse: function () {
            return {};
        }
    },
    'd': {
        name: 'day',
        format: function (oField, oDate, bUTC, oFormat) {
            var iDate = bUTC ? oDate.getUTCDate() : oDate.getDate();
            return String(iDate).padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            var iDay = parseInt(sPart);
            if (oConfig.strict && (iDay > 31 || iDay < 1)) {
                bValid = false;
            }
            return {
                day: iDay,
                length: sPart.length,
                valid: bValid
            };
        }
    },
    'Q': {
        name: 'quarter',
        format: function (oField, oDate, bUTC, oFormat) {
            var iQuarter = bUTC ? oDate.getUTCQuarter() : oDate.getQuarter();
            if (oField.digits == 3) {
                return oFormat.aQuartersAbbrev[iQuarter];
            } else if (oField.digits == 4) {
                return oFormat.aQuartersWide[iQuarter];
            } else if (oField.digits > 4) {
                return oFormat.aQuartersNarrow[iQuarter];
            } else {
                return String(iQuarter + 1).padStart(oField.digits, '0');
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var iQuarter;
            var sPart;
            var aQuartersVariants = [
                oFormat.aQuartersWide,
                oFormat.aQuartersWideSt,
                oFormat.aQuartersAbbrev,
                oFormat.aQuartersAbbrevSt,
                oFormat.aQuartersNarrow,
                oFormat.aQuartersNarrowSt
            ];
            if (oPart.digits < 3) {
                sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
                bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
                iQuarter = parseInt(sPart) - 1;
                if (oConfig.strict && iQuarter > 3) {
                    bValid = false;
                }
            } else {
                for (var i = 0; i < aQuartersVariants.length; i++) {
                    var aVariants = aQuartersVariants[i];
                    var oFound = oParseHelper.findEntry(sValue, aVariants);
                    if (oFound.index !== -1) {
                        return {
                            quarter: oFound.index,
                            length: oFound.value.length
                        };
                    }
                }
                bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
            }
            return {
                length: sPart ? sPart.length : 0,
                quarter: iQuarter,
                valid: bValid
            };
        }
    },
    'q': {
        name: 'quarterStandalone',
        format: function (oField, oDate, bUTC, oFormat) {
            var iQuarter = bUTC ? oDate.getUTCQuarter() : oDate.getQuarter();
            if (oField.digits == 3) {
                return oFormat.aQuartersAbbrevSt[iQuarter];
            } else if (oField.digits == 4) {
                return oFormat.aQuartersWideSt[iQuarter];
            } else if (oField.digits > 4) {
                return oFormat.aQuartersNarrowSt[iQuarter];
            } else {
                return String(iQuarter + 1).padStart(oField.digits, '0');
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var iQuarter;
            var sPart;
            var aQuartersVariants = [
                oFormat.aQuartersWide,
                oFormat.aQuartersWideSt,
                oFormat.aQuartersAbbrev,
                oFormat.aQuartersAbbrevSt,
                oFormat.aQuartersNarrow,
                oFormat.aQuartersNarrowSt
            ];
            if (oPart.digits < 3) {
                sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
                bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
                iQuarter = parseInt(sPart) - 1;
                if (oConfig.strict && iQuarter > 3) {
                    bValid = false;
                }
            } else {
                for (var i = 0; i < aQuartersVariants.length; i++) {
                    var aVariants = aQuartersVariants[i];
                    var oFound = oParseHelper.findEntry(sValue, aVariants);
                    if (oFound.index !== -1) {
                        return {
                            quarter: oFound.index,
                            length: oFound.value.length
                        };
                    }
                }
                bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
            }
            return {
                length: sPart ? sPart.length : 0,
                quarter: iQuarter,
                valid: bValid
            };
        }
    },
    'F': {
        name: 'dayOfWeekInMonth',
        format: function (oField, oDate, bUTC, oFormat) {
            return '';
        },
        parse: function () {
            return {};
        }
    },
    'E': {
        name: 'dayNameInWeek',
        format: function (oField, oDate, bUTC, oFormat) {
            var iDay = bUTC ? oDate.getUTCDay() : oDate.getDay();
            if (oField.digits < 4) {
                return oFormat.aDaysAbbrev[iDay];
            } else if (oField.digits == 4) {
                return oFormat.aDaysWide[iDay];
            } else if (oField.digits == 5) {
                return oFormat.aDaysNarrow[iDay];
            } else {
                return oFormat.aDaysShort[iDay];
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var aDaysVariants = [
                oFormat.aDaysWide,
                oFormat.aDaysWideSt,
                oFormat.aDaysAbbrev,
                oFormat.aDaysAbbrevSt,
                oFormat.aDaysShort,
                oFormat.aDaysShortSt,
                oFormat.aDaysNarrow,
                oFormat.aDaysNarrowSt
            ];
            for (var i = 0; i < aDaysVariants.length; i++) {
                var aVariants = aDaysVariants[i];
                var oFound = oParseHelper.findEntry(sValue, aVariants);
                if (oFound.index !== -1) {
                    return {
                        dayOfWeek: oFound.index,
                        length: oFound.value.length
                    };
                }
            }
        }
    },
    'c': {
        name: 'dayNameInWeekStandalone',
        format: function (oField, oDate, bUTC, oFormat) {
            var iDay = bUTC ? oDate.getUTCDay() : oDate.getDay();
            if (oField.digits < 4) {
                return oFormat.aDaysAbbrevSt[iDay];
            } else if (oField.digits == 4) {
                return oFormat.aDaysWideSt[iDay];
            } else if (oField.digits == 5) {
                return oFormat.aDaysNarrowSt[iDay];
            } else {
                return oFormat.aDaysShortSt[iDay];
            }
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var aDaysVariants = [
                oFormat.aDaysWide,
                oFormat.aDaysWideSt,
                oFormat.aDaysAbbrev,
                oFormat.aDaysAbbrevSt,
                oFormat.aDaysShort,
                oFormat.aDaysShortSt,
                oFormat.aDaysNarrow,
                oFormat.aDaysNarrowSt
            ];
            for (var i = 0; i < aDaysVariants.length; i++) {
                var aVariants = aDaysVariants[i];
                var oFound = oParseHelper.findEntry(sValue, aVariants);
                if (oFound.index !== -1) {
                    return {
                        day: oFound.index,
                        length: oFound.value.length
                    };
                }
            }
        }
    },
    'u': {
        name: 'dayNumberOfWeek',
        format: function (oField, oDate, bUTC, oFormat) {
            var iDay = bUTC ? oDate.getUTCDay() : oDate.getDay();
            return oFormat._adaptDayOfWeek(iDay);
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var sPart = oParseHelper.findNumbers(sValue, oPart.digits);
            return {
                dayNumberOfWeek: parseInt(sPart),
                length: sPart.length
            };
        }
    },
    'a': {
        name: 'amPmMarker',
        format: function (oField, oDate, bUTC, oFormat) {
            var iDayPeriod = bUTC ? oDate.getUTCDayPeriod() : oDate.getDayPeriod();
            return oFormat.aDayPeriods[iDayPeriod];
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bPM;
            var iLength;
            var sAM = oFormat.aDayPeriods[0], sPM = oFormat.aDayPeriods[1];
            var rAMPM = /[aApP](?:\.)?[mM](?:\.)?/;
            var aMatch = sValue.match(rAMPM);
            var bVariant = aMatch && aMatch.index === 0;
            if (bVariant) {
                sValue = aMatch[0].replace(/\./g, '').toLowerCase() + sValue.substring(aMatch[0].length);
                sAM = sAM.replace(/\./g, '').toLowerCase();
                sPM = sPM.replace(/\./g, '').toLowerCase();
            }
            if (sValue.indexOf(sAM) === 0) {
                bPM = false;
                iLength = bVariant ? aMatch[0].length : sAM.length;
            } else if (sValue.indexOf(sPM) === 0) {
                bPM = true;
                iLength = bVariant ? aMatch[0].length : sPM.length;
            }
            return {
                pm: bPM,
                length: iLength
            };
        }
    },
    'H': {
        name: 'hour0_23',
        format: function (oField, oDate, bUTC, oFormat) {
            var iHours = bUTC ? oDate.getUTCHours() : oDate.getHours();
            return String(iHours).padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var iHours = parseInt(sPart);
            bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            if (oConfig.strict && iHours > 23) {
                bValid = false;
            }
            return {
                hour: iHours,
                length: sPart.length,
                valid: bValid
            };
        }
    },
    'k': {
        name: 'hour1_24',
        format: function (oField, oDate, bUTC, oFormat) {
            var iHours = bUTC ? oDate.getUTCHours() : oDate.getHours();
            var sHours = iHours === 0 ? '24' : String(iHours);
            return sHours.padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var iHours = parseInt(sPart);
            bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            if (iHours == 24) {
                iHours = 0;
            }
            if (oConfig.strict && iHours > 23) {
                bValid = false;
            }
            return {
                hour: iHours,
                length: sPart.length,
                valid: bValid
            };
        }
    },
    'K': {
        name: 'hour0_11',
        format: function (oField, oDate, bUTC, oFormat) {
            var iHours = bUTC ? oDate.getUTCHours() : oDate.getHours();
            var sHours = String(iHours > 11 ? iHours - 12 : iHours);
            return sHours.padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var iHours = parseInt(sPart);
            bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            if (oConfig.strict && iHours > 11) {
                bValid = false;
            }
            return {
                hour: iHours,
                length: sPart.length,
                valid: bValid
            };
        }
    },
    'h': {
        name: 'hour1_12',
        format: function (oField, oDate, bUTC, oFormat) {
            var iHours = bUTC ? oDate.getUTCHours() : oDate.getHours();
            var sHours;
            if (iHours > 12) {
                sHours = String(iHours - 12);
            } else if (iHours == 0) {
                sHours = '12';
            } else {
                sHours = String(iHours);
            }
            return sHours.padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bPM = oConfig.dateValue.pm;
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var iHours = parseInt(sPart);
            var bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            if (iHours == 12) {
                iHours = 0;
                bPM = bPM === undefined ? true : bPM;
            }
            if (oConfig.strict && iHours > 11) {
                bValid = false;
            }
            return {
                hour: iHours,
                length: sPart.length,
                pm: bPM,
                valid: bValid
            };
        }
    },
    'm': {
        name: 'minute',
        format: function (oField, oDate, bUTC, oFormat) {
            var iMinutes = bUTC ? oDate.getUTCMinutes() : oDate.getMinutes();
            return String(iMinutes).padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var iMinutes = parseInt(sPart);
            bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            if (oConfig.strict && iMinutes > 59) {
                bValid = false;
            }
            return {
                length: sPart.length,
                minute: iMinutes,
                valid: bValid
            };
        }
    },
    's': {
        name: 'second',
        format: function (oField, oDate, bUTC, oFormat) {
            var iSeconds = bUTC ? oDate.getUTCSeconds() : oDate.getSeconds();
            return String(iSeconds).padStart(oField.digits, '0');
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var bValid;
            var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
            var iSeconds = parseInt(sPart);
            bValid = oParseHelper.checkValid(oPart.type, sPart === '', oFormat);
            if (oConfig.strict && iSeconds > 59) {
                bValid = false;
            }
            return {
                length: sPart.length,
                second: iSeconds,
                valid: bValid
            };
        }
    },
    'S': {
        name: 'fractionalsecond',
        format: function (oField, oDate, bUTC, oFormat) {
            var iMilliseconds = bUTC ? oDate.getUTCMilliseconds() : oDate.getMilliseconds();
            var sMilliseconds = String(iMilliseconds);
            var sFractionalseconds = sMilliseconds.padStart(3, '0');
            sFractionalseconds = sFractionalseconds.substr(0, oField.digits);
            sFractionalseconds = sFractionalseconds.padEnd(oField.digits, '0');
            return sFractionalseconds;
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var sPart = oParseHelper.findNumbers(sValue, oPart.digits);
            var iLength = sPart.length;
            sPart = sPart.substr(0, 3);
            sPart = sPart.padEnd(3, '0');
            var iMilliseconds = parseInt(sPart);
            return {
                length: iLength,
                millisecond: iMilliseconds
            };
        }
    },
    'z': {
        name: 'timezoneGeneral',
        format: function (oField, oDate, bUTC, oFormat) {
            if (oField.digits > 3 && oDate.getTimezoneLong && oDate.getTimezoneLong()) {
                return oDate.getTimezoneLong();
            } else if (oDate.getTimezoneShort && oDate.getTimezoneShort()) {
                return oDate.getTimezoneShort();
            }
            var sTimeZone = 'GMT';
            var iTZOffset = Math.abs(oDate.getTimezoneOffset());
            var bPositiveOffset = oDate.getTimezoneOffset() > 0;
            var iHourOffset = Math.floor(iTZOffset / 60);
            var iMinuteOffset = iTZOffset % 60;
            if (!bUTC && iTZOffset != 0) {
                sTimeZone += bPositiveOffset ? '-' : '+';
                sTimeZone += String(iHourOffset).padStart(2, '0');
                sTimeZone += ':';
                sTimeZone += String(iMinuteOffset).padStart(2, '0');
            } else {
                sTimeZone += 'Z';
            }
            return sTimeZone;
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            var iLength = 0;
            var iTZDiff;
            var oTZ = sValue.substring(0, 3);
            if (oTZ === 'GMT' || oTZ === 'UTC') {
                iLength = 3;
            } else if (sValue.substring(0, 2) === 'UT') {
                iLength = 2;
            } else if (sValue.charAt(0) === 'Z') {
                iLength = 1;
                iTZDiff = 0;
            } else {
                return { error: 'cannot be parsed correcly by sap.ui.core.format.DateFormat: The given timezone is not supported!' };
            }
            if (sValue.charAt(0) !== 'Z') {
                var oParsedTZ = oParseHelper.parseTZ(sValue.substr(iLength), true);
                iLength += oParsedTZ.length;
                iTZDiff = oParsedTZ.tzDiff;
            }
            return {
                length: iLength,
                tzDiff: iTZDiff
            };
        }
    },
    'Z': {
        name: 'timezoneRFC822',
        format: function (oField, oDate, bUTC, oFormat) {
            var iTZOffset = Math.abs(oDate.getTimezoneOffset());
            var bPositiveOffset = oDate.getTimezoneOffset() > 0;
            var iHourOffset = Math.floor(iTZOffset / 60);
            var iMinuteOffset = iTZOffset % 60;
            var sTimeZone = '';
            if (!bUTC) {
                sTimeZone += bPositiveOffset ? '-' : '+';
                sTimeZone += String(iHourOffset).padStart(2, '0');
                sTimeZone += String(iMinuteOffset).padStart(2, '0');
            }
            return sTimeZone;
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            return oParseHelper.parseTZ(sValue, false);
        }
    },
    'X': {
        name: 'timezoneISO8601',
        format: function (oField, oDate, bUTC, oFormat) {
            var iTZOffset = Math.abs(oDate.getTimezoneOffset());
            var bPositiveOffset = oDate.getTimezoneOffset() > 0;
            var iHourOffset = Math.floor(iTZOffset / 60);
            var iMinuteOffset = iTZOffset % 60;
            var sTimeZone = '';
            if (!bUTC && iTZOffset != 0) {
                sTimeZone += bPositiveOffset ? '-' : '+';
                sTimeZone += String(iHourOffset).padStart(2, '0');
                if (oField.digits > 1 || iMinuteOffset > 0) {
                    if (oField.digits === 3 || oField.digits === 5) {
                        sTimeZone += ':';
                    }
                    sTimeZone += String(iMinuteOffset).padStart(2, '0');
                }
            } else {
                sTimeZone += 'Z';
            }
            return sTimeZone;
        },
        parse: function (sValue, oPart, oFormat, oConfig) {
            if (sValue.charAt(0) === 'Z') {
                return {
                    length: 1,
                    tzDiff: 0
                };
            } else {
                return oParseHelper.parseTZ(sValue, oPart.digits === 3 || oPart.digits === 5);
            }
        }
    }
};
DateFormat.prototype._format = function (oJSDate, bUTC) {
    if (this.oFormatOptions.relative) {
        var sRes = this.formatRelative(oJSDate, bUTC, this.oFormatOptions.relativeRange);
        if (sRes) {
            return sRes;
        }
    }
    var sCalendarType = this.oFormatOptions.calendarType;
    var oDate = UniversalDate.getInstance(oJSDate, sCalendarType);
    var aBuffer = [], oPart, sResult, sSymbol;
    for (var i = 0; i < this.aFormatArray.length; i++) {
        oPart = this.aFormatArray[i];
        sSymbol = oPart.symbol || '';
        aBuffer.push(this.oSymbols[sSymbol].format(oPart, oDate, bUTC, this));
    }
    sResult = aBuffer.join('');
    if (Core.getConfiguration().getOriginInfo()) {
        sResult = new String(sResult);
        sResult.originInfo = {
            source: 'Common Locale Data Repository',
            locale: this.oLocale.toString(),
            style: this.oFormatOptions.style,
            pattern: this.oFormatOptions.pattern
        };
    }
    return sResult;
};
DateFormat.prototype.format = function (vJSDate, bUTC) {
    var sCalendarType = this.oFormatOptions.calendarType, sResult;
    if (bUTC === undefined) {
        bUTC = this.oFormatOptions.UTC;
    }
    if (Array.isArray(vJSDate)) {
        if (!this.oFormatOptions.interval) {
            Log.error('Non-interval DateFormat can\'t format more than one date instance.');
            return '';
        }
        if (vJSDate.length !== 2) {
            Log.error('Interval DateFormat can only format with 2 date instances but ' + vJSDate.length + ' is given.');
            return '';
        }
        if (this.oFormatOptions.singleIntervalValue) {
            if (vJSDate[0] === null) {
                Log.error('First date instance which is passed to the interval DateFormat shouldn\'t be null.');
                return '';
            }
            if (vJSDate[1] === null) {
                sResult = this._format(vJSDate[0], bUTC);
            }
        }
        if (sResult === undefined) {
            var bValid = vJSDate.every(function (oJSDate) {
                return oJSDate && !isNaN(oJSDate.getTime());
            });
            if (!bValid) {
                Log.error('At least one date instance which is passed to the interval DateFormat isn\'t valid.');
                return '';
            }
            sResult = this._formatInterval(vJSDate, bUTC);
        }
    } else {
        if (!vJSDate || isNaN(vJSDate.getTime())) {
            Log.error('The given date instance isn\'t valid.');
            return '';
        }
        if (this.oFormatOptions.interval) {
            Log.error('Interval DateFormat expects an array with two dates for the first argument but only one date is given.');
            return '';
        }
        sResult = this._format(vJSDate, bUTC);
    }
    if (sCalendarType == CalendarType.Japanese && this.oLocale.getLanguage() === 'ja') {
        sResult = sResult.replace(/(^|[^\d])1年/g, '$1元年');
    }
    return sResult;
};
DateFormat.prototype._formatInterval = function (aJSDates, bUTC) {
    var sCalendarType = this.oFormatOptions.calendarType;
    var oFromDate = UniversalDate.getInstance(aJSDates[0], sCalendarType);
    var oToDate = UniversalDate.getInstance(aJSDates[1], sCalendarType);
    var oDate;
    var oPart;
    var sSymbol;
    var aBuffer = [];
    var sPattern;
    var aFormatArray = [];
    var oDiffField = this._getGreatestDiffField([
        oFromDate,
        oToDate
    ], bUTC);
    if (!oDiffField) {
        return this._format(aJSDates[0], bUTC);
    }
    if (this.oFormatOptions.format) {
        sPattern = this.oLocaleData.getCustomIntervalPattern(this.oFormatOptions.format, oDiffField, sCalendarType);
    } else {
        sPattern = this.oLocaleData.getCombinedIntervalPattern(this.oFormatOptions.pattern, sCalendarType);
    }
    aFormatArray = this.parseCldrDatePattern(sPattern);
    oDate = oFromDate;
    for (var i = 0; i < aFormatArray.length; i++) {
        oPart = aFormatArray[i];
        sSymbol = oPart.symbol || '';
        if (oPart.repeat) {
            oDate = oToDate;
        }
        aBuffer.push(this.oSymbols[sSymbol].format(oPart, oDate, bUTC, this));
    }
    return aBuffer.join('');
};
var mFieldToGroup = {
    Era: 'Era',
    FullYear: 'Year',
    Quarter: 'Quarter',
    Month: 'Month',
    Week: 'Week',
    Date: 'Day',
    DayPeriod: 'DayPeriod',
    Hours: 'Hour',
    Minutes: 'Minute',
    Seconds: 'Second'
};
DateFormat.prototype._getGreatestDiffField = function (aDates, bUTC) {
    var bDiffFound = false, mDiff = {};
    this.aIntervalCompareFields.forEach(function (sField) {
        var sGetterPrefix = 'get' + (bUTC ? 'UTC' : ''), sMethodName = sGetterPrefix + sField, sFieldGroup = mFieldToGroup[sField], vFromValue = aDates[0][sMethodName].apply(aDates[0]), vToValue = aDates[1][sMethodName].apply(aDates[1]);
        if (!fnEqual(vFromValue, vToValue)) {
            bDiffFound = true;
            mDiff[sFieldGroup] = true;
        }
    });
    if (bDiffFound) {
        return mDiff;
    }
    return null;
};
DateFormat.prototype._parse = function (sValue, aFormatArray, bUTC, bStrict) {
    var iIndex = 0, oPart, sSubValue, oResult;
    var oDateValue = { valid: true };
    var oParseConf = {
        formatArray: aFormatArray,
        dateValue: oDateValue,
        strict: bStrict
    };
    for (var i = 0; i < aFormatArray.length; i++) {
        sSubValue = sValue.substr(iIndex);
        oPart = aFormatArray[i];
        oParseConf.index = i;
        oResult = this.oSymbols[oPart.symbol || ''].parse(sSubValue, oPart, this, oParseConf) || {};
        oDateValue = fnExtend(oDateValue, oResult);
        if (oResult.valid === false) {
            break;
        }
        iIndex += oResult.length || 0;
    }
    oDateValue.index = iIndex;
    if (oDateValue.pm) {
        oDateValue.hour += 12;
    }
    if (oDateValue.dayNumberOfWeek === undefined && oDateValue.dayOfWeek !== undefined) {
        oDateValue.dayNumberOfWeek = this._adaptDayOfWeek(oDateValue.dayOfWeek);
    }
    if (oDateValue.quarter !== undefined && oDateValue.month === undefined && oDateValue.day === undefined) {
        oDateValue.month = 3 * oDateValue.quarter;
        oDateValue.day = 1;
    }
    return oDateValue;
};
DateFormat.prototype._parseInterval = function (sValue, sCalendarType, bUTC, bStrict) {
    var aDateValues, iRepeat, oDateValue;
    this.intervalPatterns.some(function (sPattern) {
        var aFormatArray = this.parseCldrDatePattern(sPattern);
        iRepeat = undefined;
        for (var i = 0; i < aFormatArray.length; i++) {
            if (aFormatArray[i].repeat) {
                iRepeat = i;
                break;
            }
        }
        if (iRepeat === undefined) {
            oDateValue = this._parse(sValue, aFormatArray, bUTC, bStrict);
            if (oDateValue.index === 0 || oDateValue.index < sValue.length) {
                oDateValue.valid = false;
            }
            if (oDateValue.valid === false) {
                return;
            }
            aDateValues = [
                oDateValue,
                oDateValue
            ];
            return true;
        } else {
            aDateValues = [];
            oDateValue = this._parse(sValue, aFormatArray.slice(0, iRepeat), bUTC, bStrict);
            if (oDateValue.valid === false) {
                return;
            }
            aDateValues.push(oDateValue);
            var iLength = oDateValue.index;
            oDateValue = this._parse(sValue.substring(iLength), aFormatArray.slice(iRepeat), bUTC, bStrict);
            if (oDateValue.index === 0 || oDateValue.index + iLength < sValue.length) {
                oDateValue.valid = false;
            }
            if (oDateValue.valid === false) {
                return;
            }
            aDateValues.push(oDateValue);
            return true;
        }
    }.bind(this));
    return aDateValues;
};
var fnCreateDate = function (oDateValue, sCalendarType, bUTC, bStrict) {
    var oDate, iYear = typeof oDateValue.year === 'number' ? oDateValue.year : 1970;
    if (oDateValue.valid) {
        if (bUTC || oDateValue.tzDiff !== undefined) {
            oDate = UniversalDate.getInstance(new Date(0), sCalendarType);
            oDate.setUTCEra(oDateValue.era || UniversalDate.getCurrentEra(sCalendarType));
            oDate.setUTCFullYear(iYear);
            oDate.setUTCMonth(oDateValue.month || 0);
            oDate.setUTCDate(oDateValue.day || 1);
            oDate.setUTCHours(oDateValue.hour || 0);
            oDate.setUTCMinutes(oDateValue.minute || 0);
            oDate.setUTCSeconds(oDateValue.second || 0);
            oDate.setUTCMilliseconds(oDateValue.millisecond || 0);
            if (bStrict && (oDateValue.day || 1) !== oDate.getUTCDate()) {
                oDateValue.valid = false;
                oDate = undefined;
            } else {
                if (oDateValue.tzDiff) {
                    oDate.setUTCMinutes((oDateValue.minute || 0) + oDateValue.tzDiff);
                }
                if (oDateValue.week !== undefined && (oDateValue.month === undefined || oDateValue.day === undefined)) {
                    oDate.setUTCWeek({
                        year: oDateValue.weekYear || oDateValue.year,
                        week: oDateValue.week
                    });
                    if (oDateValue.dayNumberOfWeek !== undefined) {
                        oDate.setUTCDate(oDate.getUTCDate() + oDateValue.dayNumberOfWeek - 1);
                    }
                }
            }
        } else {
            oDate = UniversalDate.getInstance(new Date(1970, 0, 1, 0, 0, 0), sCalendarType);
            oDate.setEra(oDateValue.era || UniversalDate.getCurrentEra(sCalendarType));
            oDate.setFullYear(iYear);
            oDate.setMonth(oDateValue.month || 0);
            oDate.setDate(oDateValue.day || 1);
            oDate.setHours(oDateValue.hour || 0);
            oDate.setMinutes(oDateValue.minute || 0);
            oDate.setSeconds(oDateValue.second || 0);
            oDate.setMilliseconds(oDateValue.millisecond || 0);
            if (bStrict && (oDateValue.day || 1) !== oDate.getDate()) {
                oDateValue.valid = false;
                oDate = undefined;
            } else if (oDateValue.week !== undefined && (oDateValue.month === undefined || oDateValue.day === undefined)) {
                oDate.setWeek({
                    year: oDateValue.weekYear || oDateValue.year,
                    week: oDateValue.week
                });
                if (oDateValue.dayNumberOfWeek !== undefined) {
                    oDate.setDate(oDate.getDate() + oDateValue.dayNumberOfWeek - 1);
                }
            }
        }
        if (oDateValue.valid) {
            oDate = oDate.getJSDate();
            return oDate;
        }
    }
    return null;
};
function mergeWithoutOverwrite(object1, object2) {
    if (object1 === object2) {
        return object1;
    }
    var oMergedObject = {};
    Object.keys(object1).forEach(function (sKey) {
        oMergedObject[sKey] = object1[sKey];
    });
    Object.keys(object2).forEach(function (sKey) {
        if (!oMergedObject.hasOwnProperty(sKey)) {
            oMergedObject[sKey] = object2[sKey];
        }
    });
    return oMergedObject;
}
function isValidDateRange(oStartDate, oEndDate) {
    if (oStartDate.getTime() > oEndDate.getTime()) {
        return false;
    }
    return true;
}
DateFormat.prototype.parse = function (sValue, bUTC, bStrict) {
    sValue = sValue == null ? '' : String(sValue).trim();
    var oDateValue;
    var sCalendarType = this.oFormatOptions.calendarType;
    if (bUTC === undefined) {
        bUTC = this.oFormatOptions.UTC;
    }
    if (bStrict === undefined) {
        bStrict = this.oFormatOptions.strictParsing;
    }
    if (sCalendarType == CalendarType.Japanese && this.oLocale.getLanguage() === 'ja') {
        sValue = sValue.replace(/元年/g, '1年');
    }
    if (!this.oFormatOptions.interval) {
        var oJSDate = this.parseRelative(sValue, bUTC);
        if (oJSDate) {
            return oJSDate;
        }
        oDateValue = this._parse(sValue, this.aFormatArray, bUTC, bStrict);
        if (oDateValue.index === 0 || oDateValue.index < sValue.length) {
            oDateValue.valid = false;
        }
        oJSDate = fnCreateDate(oDateValue, sCalendarType, bUTC, bStrict);
        if (oJSDate) {
            return oJSDate;
        }
    } else {
        var aDateValues = this._parseInterval(sValue, sCalendarType, bUTC, bStrict);
        var oJSDate1, oJSDate2;
        if (aDateValues && aDateValues.length == 2) {
            var oDateValue1 = mergeWithoutOverwrite(aDateValues[0], aDateValues[1]);
            var oDateValue2 = mergeWithoutOverwrite(aDateValues[1], aDateValues[0]);
            oJSDate1 = fnCreateDate(oDateValue1, sCalendarType, bUTC, bStrict);
            oJSDate2 = fnCreateDate(oDateValue2, sCalendarType, bUTC, bStrict);
            if (oJSDate1 && oJSDate2) {
                if (this.oFormatOptions.singleIntervalValue && oJSDate1.getTime() === oJSDate2.getTime()) {
                    return [
                        oJSDate1,
                        null
                    ];
                }
                var bValid = isValidDateRange(oJSDate1, oJSDate2);
                if (bStrict && !bValid) {
                    Log.error('StrictParsing: Invalid date range. The given end date is before the start date.');
                    return [
                        null,
                        null
                    ];
                }
                return [
                    oJSDate1,
                    oJSDate2
                ];
            }
        }
    }
    if (!this.bIsFallback) {
        var vDate;
        this.aFallbackFormats.every(function (oFallbackFormat) {
            vDate = oFallbackFormat.parse(sValue, bUTC, bStrict);
            if (Array.isArray(vDate)) {
                return !(vDate[0] && vDate[1]);
            } else {
                return !vDate;
            }
        });
        return vDate;
    }
    if (!this.oFormatOptions.interval) {
        return null;
    } else {
        return [
            null,
            null
        ];
    }
};
DateFormat.prototype.parseCldrDatePattern = function (sPattern) {
    if (mCldrDatePattern[sPattern]) {
        return mCldrDatePattern[sPattern];
    }
    var aFormatArray = [], i, bQuoted = false, oCurrentObject = null, sState = '', sNewState = '', mAppeared = {}, bIntervalStartFound = false;
    for (i = 0; i < sPattern.length; i++) {
        var sCurChar = sPattern.charAt(i), sNextChar, sPrevChar, sPrevPrevChar;
        if (bQuoted) {
            if (sCurChar == '\'') {
                sPrevChar = sPattern.charAt(i - 1);
                sPrevPrevChar = sPattern.charAt(i - 2);
                sNextChar = sPattern.charAt(i + 1);
                if (sPrevChar == '\'' && sPrevPrevChar != '\'') {
                    bQuoted = false;
                } else if (sNextChar == '\'') {
                    i += 1;
                } else {
                    bQuoted = false;
                    continue;
                }
            }
            if (sState == 'text') {
                oCurrentObject.value += sCurChar;
            } else {
                oCurrentObject = {
                    type: 'text',
                    value: sCurChar
                };
                aFormatArray.push(oCurrentObject);
                sState = 'text';
            }
        } else {
            if (sCurChar == '\'') {
                bQuoted = true;
            } else if (this.oSymbols[sCurChar]) {
                sNewState = this.oSymbols[sCurChar].name;
                if (sState == sNewState) {
                    oCurrentObject.digits++;
                } else {
                    oCurrentObject = {
                        type: sNewState,
                        symbol: sCurChar,
                        digits: 1
                    };
                    aFormatArray.push(oCurrentObject);
                    sState = sNewState;
                    if (!bIntervalStartFound) {
                        if (mAppeared[sNewState]) {
                            oCurrentObject.repeat = true;
                            bIntervalStartFound = true;
                        } else {
                            mAppeared[sNewState] = true;
                        }
                    }
                }
            } else {
                if (sState == 'text') {
                    oCurrentObject.value += sCurChar;
                } else {
                    oCurrentObject = {
                        type: 'text',
                        value: sCurChar
                    };
                    aFormatArray.push(oCurrentObject);
                    sState = 'text';
                }
            }
        }
    }
    mCldrDatePattern[sPattern] = aFormatArray;
    return aFormatArray;
};
DateFormat.prototype.parseRelative = function (sValue, bUTC) {
    var aPatterns, oEntry, rPattern, oResult, iValue;
    if (!sValue) {
        return null;
    }
    aPatterns = this.oLocaleData.getRelativePatterns(this.aRelativeParseScales, this.oFormatOptions.relativeStyle);
    for (var i = 0; i < aPatterns.length; i++) {
        oEntry = aPatterns[i];
        rPattern = new RegExp('^\\s*' + oEntry.pattern.replace(/\{0\}/, '(\\d+)') + '\\s*$', 'i');
        oResult = rPattern.exec(sValue);
        if (oResult) {
            if (oEntry.value !== undefined) {
                return computeRelativeDate(oEntry.value, oEntry.scale);
            } else {
                iValue = parseInt(oResult[1]);
                return computeRelativeDate(iValue * oEntry.sign, oEntry.scale);
            }
        }
    }
    function computeRelativeDate(iDiff, sScale) {
        var iToday, oToday = new Date(), oJSDate;
        if (bUTC) {
            iToday = oToday.getTime();
        } else {
            iToday = Date.UTC(oToday.getFullYear(), oToday.getMonth(), oToday.getDate(), oToday.getHours(), oToday.getMinutes(), oToday.getSeconds(), oToday.getMilliseconds());
        }
        oJSDate = new Date(iToday);
        switch (sScale) {
        case 'second':
            oJSDate.setUTCSeconds(oJSDate.getUTCSeconds() + iDiff);
            break;
        case 'minute':
            oJSDate.setUTCMinutes(oJSDate.getUTCMinutes() + iDiff);
            break;
        case 'hour':
            oJSDate.setUTCHours(oJSDate.getUTCHours() + iDiff);
            break;
        case 'day':
            oJSDate.setUTCDate(oJSDate.getUTCDate() + iDiff);
            break;
        case 'week':
            oJSDate.setUTCDate(oJSDate.getUTCDate() + iDiff * 7);
            break;
        case 'month':
            oJSDate.setUTCMonth(oJSDate.getUTCMonth() + iDiff);
            break;
        case 'quarter':
            oJSDate.setUTCMonth(oJSDate.getUTCMonth() + iDiff * 3);
            break;
        case 'year':
            oJSDate.setUTCFullYear(oJSDate.getUTCFullYear() + iDiff);
            break;
        }
        if (bUTC) {
            return oJSDate;
        } else {
            return new Date(oJSDate.getUTCFullYear(), oJSDate.getUTCMonth(), oJSDate.getUTCDate(), oJSDate.getUTCHours(), oJSDate.getUTCMinutes(), oJSDate.getUTCSeconds(), oJSDate.getUTCMilliseconds());
        }
    }
};
DateFormat.prototype.formatRelative = function (oJSDate, bUTC, aRange) {
    var oToday = new Date(), oDateUTC, sScale = this.oFormatOptions.relativeScale || 'day', iDiff, sPattern, iDiffSeconds;
    iDiffSeconds = (oJSDate.getTime() - oToday.getTime()) / 1000;
    if (this.oFormatOptions.relativeScale == 'auto') {
        sScale = this._getScale(iDiffSeconds, this.aRelativeScales);
    }
    if (!aRange) {
        aRange = this._mRanges[sScale];
    }
    if (sScale == 'year' || sScale == 'month' || sScale == 'day') {
        oToday = new Date(Date.UTC(oToday.getFullYear(), oToday.getMonth(), oToday.getDate()));
        oDateUTC = new Date(0);
        if (bUTC) {
            oDateUTC.setUTCFullYear(oJSDate.getUTCFullYear(), oJSDate.getUTCMonth(), oJSDate.getUTCDate());
        } else {
            oDateUTC.setUTCFullYear(oJSDate.getFullYear(), oJSDate.getMonth(), oJSDate.getDate());
        }
        oJSDate = oDateUTC;
    }
    iDiff = this._getDifference(sScale, [
        oToday,
        oJSDate
    ]);
    if (this.oFormatOptions.relativeScale != 'auto' && (iDiff < aRange[0] || iDiff > aRange[1])) {
        return null;
    }
    sPattern = this.oLocaleData.getRelativePattern(sScale, iDiff, iDiffSeconds > 0, this.oFormatOptions.relativeStyle);
    return fnFormatMessage(sPattern, [Math.abs(iDiff)]);
};
DateFormat.prototype._mRanges = {
    second: [
        -60,
        60
    ],
    minute: [
        -60,
        60
    ],
    hour: [
        -24,
        24
    ],
    day: [
        -6,
        6
    ],
    week: [
        -4,
        4
    ],
    month: [
        -12,
        12
    ],
    year: [
        -10,
        10
    ]
};
DateFormat.prototype._mScales = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2592000,
    quarter: 7776000,
    year: 31536000
};
DateFormat.prototype._getScale = function (iDiffSeconds, aScales) {
    var sScale, sTestScale;
    iDiffSeconds = Math.abs(iDiffSeconds);
    for (var i = 0; i < aScales.length; i++) {
        sTestScale = aScales[i];
        if (iDiffSeconds >= this._mScales[sTestScale]) {
            sScale = sTestScale;
            break;
        }
    }
    if (!sScale) {
        sScale = aScales[aScales.length - 1];
    }
    return sScale;
};
function cutDateFields(oDate, iStartIndex) {
    var aFields = [
            'FullYear',
            'Month',
            'Date',
            'Hours',
            'Minutes',
            'Seconds',
            'Milliseconds'
        ], sMethodName;
    var oDateCopy = new Date(oDate.getTime());
    for (var i = iStartIndex; i < aFields.length; i++) {
        sMethodName = 'set' + aFields[iStartIndex];
        oDateCopy[sMethodName].apply(oDateCopy, [0]);
    }
    return oDateCopy;
}
var mRelativeDiffs = {
    year: function (oFromDate, oToDate) {
        return oToDate.getFullYear() - oFromDate.getFullYear();
    },
    month: function (oFromDate, oToDate) {
        return oToDate.getMonth() - oFromDate.getMonth() + this.year(oFromDate, oToDate) * 12;
    },
    week: function (oFromDate, oToDate, oFormat) {
        var iFromDay = oFormat._adaptDayOfWeek(oFromDate.getDay());
        var iToDay = oFormat._adaptDayOfWeek(oToDate.getDay());
        oFromDate = cutDateFields(oFromDate, 3);
        oToDate = cutDateFields(oToDate, 3);
        return (oToDate.getTime() - oFromDate.getTime() - (iToDay - iFromDay) * oFormat._mScales.day * 1000) / (oFormat._mScales.week * 1000);
    },
    day: function (oFromDate, oToDate, oFormat) {
        oFromDate = cutDateFields(oFromDate, 3);
        oToDate = cutDateFields(oToDate, 3);
        return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.day * 1000);
    },
    hour: function (oFromDate, oToDate, oFormat) {
        oFromDate = cutDateFields(oFromDate, 4);
        oToDate = cutDateFields(oToDate, 4);
        return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.hour * 1000);
    },
    minute: function (oFromDate, oToDate, oFormat) {
        oFromDate = cutDateFields(oFromDate, 5);
        oToDate = cutDateFields(oToDate, 5);
        return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.minute * 1000);
    },
    second: function (oFromDate, oToDate, oFormat) {
        oFromDate = cutDateFields(oFromDate, 6);
        oToDate = cutDateFields(oToDate, 6);
        return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.second * 1000);
    }
};
DateFormat.prototype._adaptDayOfWeek = function (iDayOfWeek) {
    var iFirstDayOfWeek = LocaleData.getInstance(Core.getConfiguration().getFormatSettings().getFormatLocale()).getFirstDayOfWeek();
    var iDayNumberOfWeek = iDayOfWeek - (iFirstDayOfWeek - 1);
    if (iDayNumberOfWeek <= 0) {
        iDayNumberOfWeek += 7;
    }
    return iDayNumberOfWeek;
};
DateFormat.prototype._getDifference = function (sScale, aDates) {
    var oFromDate = aDates[0];
    var oToDate = aDates[1];
    return Math.round(mRelativeDiffs[sScale](oFromDate, oToDate, this));
};
DateFormat.prototype.getAllowedCharacters = function (aFormatArray) {
    if (this.oFormatOptions.relative) {
        return '';
    }
    var sAllowedCharacters = '';
    var bNumbers = false;
    var bAll = false;
    var oPart;
    for (var i = 0; i < aFormatArray.length; i++) {
        oPart = aFormatArray[i];
        switch (oPart.type) {
        case 'text':
            if (sAllowedCharacters.indexOf(oPart.value) < 0) {
                sAllowedCharacters += oPart.value;
            }
            break;
        case 'day':
        case 'year':
        case 'weekYear':
        case 'dayNumberOfWeek':
        case 'weekInYear':
        case 'hour0_23':
        case 'hour1_24':
        case 'hour0_11':
        case 'hour1_12':
        case 'minute':
        case 'second':
        case 'fractionalsecond':
            if (!bNumbers) {
                sAllowedCharacters += '0123456789';
                bNumbers = true;
            }
            break;
        case 'month':
        case 'monthStandalone':
            if (oPart.digits < 3) {
                if (!bNumbers) {
                    sAllowedCharacters += '0123456789';
                    bNumbers = true;
                }
            } else {
                bAll = true;
            }
            break;
        default:
            bAll = true;
            break;
        }
    }
    if (bAll) {
        sAllowedCharacters = '';
    }
    return sAllowedCharacters;
};

const cache$1 = new Map();

const getCachedLocaleDataInstance = locale => {
	if (!cache$1.has(locale)) {
		cache$1.set(locale, LocaleData.getInstance(locale));
	}

	return cache$1.get(locale);
};

const cache = new Map();

const getMinCalendarDate = primaryCalendarType => {
	const key = `min ${primaryCalendarType}`;

	if (!cache.has(key)) {
		const minDate = new CalendarDate$1(1, 0, 1, primaryCalendarType);
		minDate.setYear(1);
		minDate.setMonth(0);
		minDate.setDate(1);
		cache.set(key, minDate);
	}

	return cache.get(key);
};

const getMaxCalendarDate = primaryCalendarType => {
	const key = `max ${primaryCalendarType}`;

	if (!cache.has(key)) {
		const maxDate = new CalendarDate$1(1, 0, 1, primaryCalendarType);
		maxDate.setYear(9999);
		maxDate.setMonth(11);
		const tempDate = new CalendarDate$1(maxDate, primaryCalendarType);
		tempDate.setDate(1);
		tempDate.setMonth(tempDate.getMonth() + 1, 0);
		maxDate.setDate(tempDate.getDate());// 31st for Gregorian Calendar
		cache.set(key, maxDate);
	}

	return cache.get(key);
};

/**
 * @public
 */
const metadata$8 = {
	languageAware: true,
	properties: /** @lends  sap.ui.webcomponents.main.DateComponentBase.prototype */ {
		/**
		 * Sets a calendar type used for display.
		 * If not set, the calendar type of the global configuration is used.
		 * @type {CalendarType}
		 * @public
		 */
		primaryCalendarType: {
			type: CalendarType$1,
		},

		/**
		 * Determines the мinimum date available for selection.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @since 1.0.0-rc.6
		 * @public
		 */
		minDate: {
			type: String,
		},

		/**
		 * Determines the maximum date available for selection.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @since 1.0.0-rc.6
		 * @public
		 */
		maxDate: {
			type: String,
		},

		/**
		 * Determines the format, displayed in the input field.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		formatPattern: {
			type: String,
		},
	},
};

/**
 * @class
 *
 * Abstract class that provides common functionality for date-related components (day picker, month picker, year picker, calendar, date picker, date range picker, date time picker)
 * This includes:
 *  - "languageAware: true" metadata setting, CLDR fetch and i18n initialization
 *  - common properties (primaryCalendar, minDate, maxDate and formatPattern) declaration and methods that operate on them
 *  - additional common methods
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.DateComponentBase
 * @extends sap.ui.webcomponents.base.UI5Element
 * @public
 */
class DateComponentBase extends UI5Element {
	static get metadata() {
		return metadata$8;
	}

	static get render() {
		return litRender;
	}

	constructor() {
		super();
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	get _primaryCalendarType() {
		const localeData = getCachedLocaleDataInstance(getLocale());
		return this.primaryCalendarType || getCalendarType() || localeData.getPreferredCalendarType();
	}

	get _minDate() {
		return this.minDate && this.getFormat().parse(this.minDate) ? this._getCalendarDateFromString(this.minDate) : getMinCalendarDate(this._primaryCalendarType);
	}

	get _maxDate() {
		return this.maxDate && this.getFormat().parse(this.maxDate) ? this._getCalendarDateFromString(this.maxDate) : getMaxCalendarDate(this._primaryCalendarType);
	}

	get _formatPattern() {
		return this.formatPattern || "medium"; // get from config
	}

	get _isPattern() {
		return this._formatPattern !== "medium" && this._formatPattern !== "short" && this._formatPattern !== "long";
	}

	_getCalendarDateFromString(value) {
		const jsDate = this.getFormat().parse(value);
		if (jsDate) {
			return CalendarDate$1.fromLocalJSDate(jsDate, this._primaryCalendarType);
		}
	}

	_getTimeStampFromString(value) {
		const calDate = this._getCalendarDateFromString(value);
		if (calDate) {
			return calDate.toUTCJSDate().valueOf();
		}
	}

	_getStringFromTimestamp(timestamp) {
		const localDate = new Date(timestamp);
		return this.getFormat().format(localDate, true);
	}

	getFormat() {
		let dateFormat;
		if (this._isPattern) {
			dateFormat = DateFormat.getInstance({
				pattern: this._formatPattern,
				calendarType: this._primaryCalendarType,
			});
		} else {
			dateFormat = DateFormat.getInstance({
				style: this._formatPattern,
				calendarType: this._primaryCalendarType,
			});
		}
		return dateFormat;
	}

	static async onDefine() {
		await Promise.all([
			fetchCldr(getLocale().getLanguage(), getLocale().getRegion(), getLocale().getScript()),
			fetchI18nBundle("@ui5/webcomponents"),
		]);
	}
}

/**
* @public
*/
const metadata$7 = {
	tag: "ui5-date",
	properties: /** @lends  sap.ui.webcomponents.main.CalendarDate.prototype */ {

		/**
		 * The date formatted according to the <code>formatPattern</code> property of the <code>ui5-calendar</code> that hosts the <code>ui5-date</code>
		 *
		 * @type {string}
		 * @public
		 */
		value: {
			type: String,
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-date</code> component defines a calendar date to be used inside <code>ui5-calendar</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.CalendarDate
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-date
 * @implements sap.ui.webcomponents.main.ICalendarDate
 * @public
 */
class CalendarDate extends UI5Element {
	static get metadata() {
		return metadata$7;
	}
}

CalendarDate.define();

/**
 * @public
 */
const metadata$6 = {
	properties: /** @lends  sap.ui.webcomponents.main.CalendarPart.prototype */ {
		/**
		 * The timestamp of the currently focused date. Set this property to move the component's focus to a certain date.
		 * <b>Node:</b> Timestamp is 10-digit Integer representing the seconds (not milliseconds) since the Unix Epoch.
		 * @type {Integer}
		 * @protected
		 */
		timestamp: {
			type: Integer,
		},
	},
};

/**
 * @class
 *
 * Abstract base class for Calendar, DayPicker, MonthPicker and YearPicker that adds support for:
 *  - common properties (timestamp, selectedDates): declarations and methods that operate on them
 *  - other common code
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.CalendarPart
 * @extends DateComponentBase
 * @public
 */
class CalendarPart extends DateComponentBase {
	static get metadata() {
		return metadata$6;
	}

	get _minTimestamp() {
		return this._minDate.valueOf() / 1000;
	}

	get _maxTimestamp() {
		return this._maxDate.valueOf() / 1000;
	}

	/**
	 * Returns the effective timestamp to be used by the respective calendar part
	 * @protected
	 */
	get _timestamp() {
		let timestamp = this.timestamp !== undefined ? this.timestamp : getTodayUTCTimestamp(this._primaryCalendarType);
		if (timestamp < this._minTimestamp || timestamp > this._maxTimestamp) {
			timestamp = this._minTimestamp;
		}
		return timestamp;
	}

	get _localDate() {
		return new Date(this._timestamp * 1000);
	}

	/**
	 * Returns a CalendarDate instance, representing the _timestamp getter - this date is central to all components' rendering logic
	 * @protected
	 */
	get _calendarDate() {
		return CalendarDate$1.fromTimestamp(this._localDate.getTime(), this._primaryCalendarType);
	}

	/**
	 * Change a timestamp and enforce limits
	 *
	 * @param timestamp
	 * @protected
	 */
	_safelySetTimestamp(timestamp) {
		const min = this._minDate.valueOf() / 1000;
		const max = this._maxDate.valueOf() / 1000;

		if (timestamp < min) {
			timestamp = min;
		}
		if (timestamp > max) {
			timestamp = max;
		}

		this.timestamp = timestamp;
	}

	/**
	 * Modify a timestamp by a certain amount of days/months/years and enforce limits
	 * @param amount
	 * @param unit
	 * @protected
	 */
	_safelyModifyTimestampBy(amount, unit) {
		const newDate = modifyDateBy(this._calendarDate, amount, unit);
		this._safelySetTimestamp(newDate.valueOf() / 1000);
	}

	_getTimestampFromDom(domNode) {
		const oMonthDomRef = domNode.getAttribute("data-sap-timestamp");
		return parseInt(oMonthDomRef);
	}
}

const name = "slim-arrow-left";
const pathData = "M351.5 421q12 12 0 23-5 5-11 5t-11-5l-166-165q-9-10-9-23t9-23l165-164q5-5 11.5-5t11.5 5 5 11-5 11l-159 159q-6 6 0 12z";
const ltr = false;
const collection = "SAP-icons";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

const slimArrowLeft = { pathData };

const block0$6 = (context) => { return scopedHtml`<div class="ui5-calheader-root" dir="${ifDefined(context.effectiveDir)}"><div data-ui5-cal-header-btn-prev class="${classMap(context.classes.prevButton)}" @mousedown=${context.onPrevButtonClick} title="${ifDefined(context._prevButtonText)}"><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-left"></ui5-icon></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${context.isMonthButtonHidden}" tabindex="0" @click=${context.onMonthButtonClick} @keydown=${context.onMonthButtonKeyDown}>${ifDefined(context._monthButtonText)}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" tabindex="0" @click=${context.onYearButtonClick} @keydown=${context.onYearButtonKeyDown}>${ifDefined(context._yearButtonText)}</div></div><div data-ui5-cal-header-btn-next class="${classMap(context.classes.nextButton)}" @mousedown=${context.onNextButtonClick} title=${ifDefined(context._nextButtonText)}><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-right"></ui5-icon></div></div>`; };


const main$6 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$6(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles$2 = ":host{display:block;width:100%;height:100%}.ui5-calheader-root{display:flex;height:100%;padding:var(--_ui5_calendar_header_padding);box-sizing:border-box}.ui5-calheader-arrowbtn{display:flex;justify-content:center;align-items:center;width:var(--_ui5_calendar_header_arrow_button_width);background-color:var(--sapButton_Lite_Background);color:var(--sapButton_TextColor);cursor:pointer;overflow:hidden;white-space:nowrap;padding:0;font-size:var(--sapFontSize)}.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:active,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:focus,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:hover{pointer-events:none;opacity:.4;outline:none;background-color:var(--sapButton_Lite_Background);color:var(--sapButton_TextColor)}[hidden].ui5-calheader-arrowbtn.ui5-calheader-middlebtn{display:none}.ui5-calheader-arrowbtn:focus{outline:none}.ui5-calheader-arrowbtn:hover{background-color:var(--sapButton_Hover_Background);color:var(--sapButton_Hover_TextColor)}.ui5-calheader-arrowbtn:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-calheader-arrowbtn,.ui5-calheader-middlebtn{border:var(--_ui5_calendar_header_arrow_button_border);border-radius:var(--_ui5_calendar_header_arrow_button_border_radius);display:flex}.ui5-calheader-arrowicon{color:currentColor;pointer-events:none}.ui5-calheader-midcontainer{display:flex;justify-content:space-around;flex:1 1 auto;padding:0 .5rem}.ui5-calheader-midcontainer .ui5-calheader-middlebtn:first-child{margin-right:.5rem}.ui5-calheader-middlebtn{font-family:\"72override\",var(--sapFontFamily);width:var(--_ui5_calendar_header_middle_button_width);flex:var(--_ui5_calendar_header_middle_button_flex);position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui5-calheader-middlebtn:focus{border:var(--_ui5_calendar_header_middle_button_focus_border);border-radius:var(--_ui5_calendar_header_middle_button_focus_border_radius)}.ui5-calheader-middlebtn:focus:after{content:\"\";display:var(--_ui5_calendar_header_middle_button_focus_after_display);width:var(--_ui5_calendar_header_middle_button_focus_after_width);height:var(--_ui5_calendar_header_middle_button_focus_after_height);border:1px dotted var(--sapContent_FocusColor);position:absolute;top:var(--_ui5_calendar_header_middle_button_focus_after_top_offset);left:var(--_ui5_calendar_header_middle_button_focus_after_left_offset)}.ui5-calheader-middlebtn:focus:active:after{border-color:var(--sapContent_ContrastFocusColor)}[dir=rtl] .ui5-calheader-root-midcontainer .ui5-calheader-middlebtn:first-child{margin-left:.5rem;margin-right:0}";

const metadata$5 = {
	tag: "ui5-calendar-header",
	languageAware: true,
	properties: {
		/**
		 * Already normalized by Calendar
		 * @type {Integer}
		 * @public
		 */
		timestamp: {
			type: Integer,
		},

		/**
		 * Already normalized by Calendar
		 * @type {CalendarType}
		 * @public
		 */
		primaryCalendarType: {
			type: CalendarType$1,
		},

		isNextButtonDisabled: {
			type: Boolean,
		},

		isPrevButtonDisabled: {
			type: Boolean,
		},

		isMonthButtonHidden: {
			type: Boolean,
		},
	},
	events: {
		"previous-press": {},
		"next-press": {},
		"show-month-press": {},
		"show-year-press": {},
	},
};

class CalendarHeader extends UI5Element {
	static get metadata() {
		return metadata$5;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return main$6;
	}

	static get styles() {
		return styles$2;
	}

	static get dependencies() {
		return [Icon];
	}

	static async onDefine() {
		await fetchI18nBundle("@ui5/webcomponents");
	}

	constructor() {
		super();
		this.i18nBundle = getI18nBundle("@ui5/webcomponents");
	}

	onBeforeRendering() {
		const localeData = getCachedLocaleDataInstance(getLocale());
		const yearFormat = DateFormat.getDateInstance({ format: "y", calendarType: this.primaryCalendarType });
		const localDate = new Date(this.timestamp * 1000);
		const calendarDate = CalendarDate$1.fromTimestamp(localDate.getTime(), this.primaryCalendarType);

		this._monthButtonText = localeData.getMonths("wide", this.primaryCalendarType)[calendarDate.getMonth()];
		this._yearButtonText = yearFormat.format(localDate, true);
		this._prevButtonText = this.i18nBundle.getText(CALENDAR_HEADER_PREVIOUS_BUTTON);
		this._nextButtonText = this.i18nBundle.getText(CALENDAR_HEADER_NEXT_BUTTON);
	}

	onPrevButtonClick(event) {
		this.fireEvent("previous-press", event);
	}

	onNextButtonClick(event) {
		this.fireEvent("next-press", event);
	}

	onMonthButtonClick(event) {
		this.fireEvent("show-month-press", event);
	}

	onMonthButtonKeyDown(event) {
		if (isSpace(event) || isEnter(event)) {
			event.preventDefault();
			this.fireEvent("show-month-press", event);
		}
	}

	onYearButtonClick(event) {
		this.fireEvent("show-year-press", event);
	}

	onYearButtonKeyDown(event) {
		if (isSpace(event) || isEnter(event)) {
			event.preventDefault();
			this.fireEvent("show-year-press", event);
		}
	}

	get classes() {
		return {
			prevButton: {
				"ui5-calheader-arrowbtn": true,
				"ui5-calheader-arrowbtn-disabled": this._isPrevButtonDisabled,
			},
			nextButton: {
				"ui5-calheader-arrowbtn": true,
				"ui5-calheader-arrowbtn-disabled": this._isNextButtonDisabled,
			},
		};
	}
}

CalendarHeader.define();

let formatSettings;

const getFirstDayOfWeek = () => {
	if (formatSettings === undefined) {
		formatSettings = getFormatSettings();
	}

	return formatSettings.firstDayOfWeek;
};

const calculateWeekNumber = (confFirstDayOfWeek, oDate, iYear, oLocale, oLocaleData) => {
	let iWeekNum = 0;
	let iWeekDay = 0;
	const iFirstDayOfWeek = Number.isInteger(confFirstDayOfWeek) ? confFirstDayOfWeek : oLocaleData.getFirstDayOfWeek();

	// search Locale for containing "en-US", since sometimes
	// when any user settings have been defined, subtag "sapufmt" is added to the locale name
	// this is described inside sap.ui.core.Configuration file
	if (oLocale && (oLocale.getLanguage() === "en" && oLocale.getRegion() === "US")) {
		/*
			* in US the week starts with Sunday
			* The first week of the year starts with January 1st. But Dec. 31 is still in the last year
			* So the week beginning in December and ending in January has 2 week numbers
			*/
		const oJanFirst = new UniversalDate(oDate.getTime());
		oJanFirst.setUTCFullYear(iYear, 0, 1);
		iWeekDay = oJanFirst.getUTCDay();

		// get the date for the same weekday like jan 1.
		const oCheckDate = new UniversalDate(oDate.getTime());
		oCheckDate.setUTCDate(oCheckDate.getUTCDate() - oCheckDate.getUTCDay() + iWeekDay);

		iWeekNum = Math.round((oCheckDate.getTime() - oJanFirst.getTime()) / 86400000 / 7) + 1;
	} else {
		// normally the first week of the year is the one where the first Thursday of the year is
		// find Thursday of this week
		// if the checked day is before the 1. day of the week use a day of the previous week to check
		const oThursday = new UniversalDate(oDate.getTime());
		oThursday.setUTCDate(oThursday.getUTCDate() - iFirstDayOfWeek);
		iWeekDay = oThursday.getUTCDay();
		oThursday.setUTCDate(oThursday.getUTCDate() - iWeekDay + 4);

		const oFirstDayOfYear = new UniversalDate(oThursday.getTime());
		oFirstDayOfYear.setUTCMonth(0, 1);
		iWeekDay = oFirstDayOfYear.getUTCDay();
		let iAddDays = 0;
		if (iWeekDay > 4) {
			iAddDays = 7; // first day of year is after Thursday, so first Thursday is in the next week
		}
		const oFirstThursday = new UniversalDate(oFirstDayOfYear.getTime());
		oFirstThursday.setUTCDate(1 - iWeekDay + 4 + iAddDays);

		iWeekNum = Math.round((oThursday.getTime() - oFirstThursday.getTime()) / 86400000 / 7) + 1;
	}

	return iWeekNum;
};

/**
 * @lends sap.ui.webcomponents.main.types.CalendarSelectionMode.prototype
 * @public
 */
const CalendarSelectionModes = {
	/**
	 * Only one date can be selected at a time
	 * @public
	 * @type {Single}
	 */
	Single: "Single",

	/**
	 * Several dates can be selected
	 * @public
	 * @type {Multiple}
	 */
	Multiple: "Multiple",

	/**
	 * A range defined by a start date and an end date can be selected
	 * @public
	 * @type {Range}
	 */
	Range: "Range",
};

/**
 * @class
 * Different date selection modes for <code>ui5-calendar</code>.
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.types.CalendarSelectionMode
 * @public
 * @enum {string}
 */
class CalendarSelectionMode extends DataType {
	static isValid(value) {
		return !!CalendarSelectionModes[value];
	}
}

CalendarSelectionMode.generateTypeAccessors(CalendarSelectionModes);

const block0$5 = (context) => { return scopedHtml`<div class="ui5-dp-root" style="${styleMap(context.styles.wrapper)}" @keydown=${context._onkeydown} @keyup=${context._onkeyup} @click=${context._onclick} @mouseover=${context._onmouseover} @focusin=${context._onfocusin}><div id="${ifDefined(context._id)}-content" class="ui5-dp-content" role="grid" aria-roledescription="Calendar"><div role="row" class="ui5-dp-days-names-container">${ repeat(context._dayNames, (item, index) => item._id || index, (item, index) => block1$4(item, index, context)) }</div>${ repeat(context._weeks, (item, index) => item._id || index, (item, index) => block2$4(item, index, context)) }</div></div>`; };
const block1$4 = (item, index, context) => { return scopedHtml`<div role="columnheader" aria-label="${ifDefined(item.name)}" class="${ifDefined(item.classes)}">${ifDefined(item.ultraShortName)}</div>`; };
const block2$4 = (item, index, context) => { return scopedHtml`${ item.length ? block3$1(item, index, context) : block8(item, index, context) }`; };
const block3$1 = (item, index, context) => { return scopedHtml`<div style="display: flex;" role="row">${ repeat(item, (item, index) => item._id || index, (item, index) => block4(item, index, context)) }</div>`; };
const block4 = (item, index, context) => { return scopedHtml`${ item.timestamp ? block5(item, index, context) : block6(item, index, context) }`; };
const block5 = (item, index, context) => { return scopedHtml`<div tabindex="${ifDefined(item._tabIndex)}" ?data-sap-focus-ref="${item.focusRef}" data-sap-timestamp="${ifDefined(item.timestamp)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}" aria-label="${ifDefined(item.ariaLabel)}" aria-disabled="${ifDefined(item.ariaDisabled)}" class="${ifDefined(item.classes)}"><span class="ui5-dp-daytext" data-sap-timestamp="${ifDefined(item.timestamp)}">${ifDefined(item.iDay)}</span></div>`; };
const block6 = (item, index, context) => { return scopedHtml`${ !item.isHidden ? block7(item, index, context) : undefined }`; };
const block7 = (item, index, context) => { return scopedHtml`<div class="ui5-dp-weekname-container" role="rowheader" aria-label="Calendar Week ${ifDefined(item.weekNum)}"><span class="ui5-dp-weekname">${ifDefined(item.weekNum)}</span></div>`; };
const block8 = (item, index, context) => { return scopedHtml`<div class="sapWCEmptyWeek"></div>`; };


const main$5 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$5(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const dayPickerCSS = ":host(:not([hidden])){display:block}:host{height:100%;width:100%}:host([_hide-week-numbers]) .ui5-dp-content{flex-basis:100%}.ui5-dp-dayname,.ui5-dp-item,.ui5-dp-weekname{width:var(--_ui5_day_picker_item_width);height:var(--_ui5_day_picker_item_height);margin-top:var(--_ui5_daypicker_item_margin);margin-right:var(--_ui5_daypicker_item_margin);font-family:\"72override\",var(--sapFontFamily);border-radius:var(--_ui5_daypicker_item_border_radius)}.ui5-dp-weekname{color:var(--_ui5_daypicker_weekname_color)}.ui5-dp-content{display:flex;flex-basis:87.5%;flex-direction:column;font-family:\"72override\",var(--sapFontFamily)}.ui5-dp-days-names-container{display:flex;height:var(--_ui5_daypicker_daynames_container_height)}.ui5-dp-weeknumber-container{padding-top:var(--_ui5_daypicker_weeknumbers_container_padding_top);flex-basis:12.5%}.ui5-dp-dayname,.ui5-dp-item,.ui5-dp-weekname,.ui5-dp-weekname-container{display:flex;flex-grow:1;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);outline:none;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui5-dp-item{position:relative;color:var(--sapTextColor);background:var(--sapLegend_WorkingBackground);font-size:var(--sapFontSize);border:var(--_ui5_daypicker_item_border)}.ui5-dp-item:hover{background:var(--sapList_Hover_Background)}.ui5-dp-daytext{display:flex;width:100%;height:100%;justify-content:center;align-items:center;box-sizing:border-box}.ui5-dp-dayname{color:var(--_ui5_daypicker_dayname_color);height:100%}.ui5-dp-item.ui5-dp-item--weeekend{background:var(--sapLegend_NonWorkingBackground)}.ui5-dp-item.ui5-dp-item--disabled{pointer-events:none;opacity:.5}.ui5-dp-item.ui5-dp-item--weeekend:hover{background:var(--sapList_Hover_Background)}.ui5-dp-item.ui5-dp-item--othermonth{color:var(--_ui5_daypicker_item_othermonth_color);background:var(--_ui5_daypicker_item_othermonth_background_color);border-color:transparent}.ui5-dp-item.ui5-dp-item--othermonth:hover,.ui5-dp-item.ui5-dp-item--weeekend.ui5-dp-item--othermonth:hover{color:var(--_ui5_daypicker_item_othermonth_hover_color);background:var(--sapList_Hover_Background)}.ui5-dp-item:focus:after{content:\"\";width:calc(100% - .25rem);height:calc(100% - .25rem);border:var(--_ui5_daypicker_item_outline_width) dotted var(--sapContent_FocusColor);position:absolute;top:var(--_ui5_daypicker_item_outline_offset);left:var(--_ui5_daypicker_item_outline_offset)}.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext{background:var(--sapContent_Selected_Background);color:var(--sapContent_Selected_TextColor)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-daytext{border:1px solid var(--_ui5_daypicker_item_selected_border_color);border-radius:var(--_ui5_daypicker_item_now_inner_border_radius)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:focus:after{width:var(--_ui5_daypicker_item_now_selected_focus_after_width);height:var(--_ui5_daypicker_item_now_selected_focus_after_height);border-color:var(--sapContent_FocusColor);top:0;left:0}.ui5-dp-item.ui5-dp-item--selected:hover{background:var(--_ui5_daypicker_item_selected_hover_background_color);color:var(--sapContent_ContrastTextColor)}.ui5-dp-item.ui5-dp-item--selected:focus:after{border-color:var(--sapContent_ContrastFocusColor)}.ui5-dp-items-container{outline:none}.ui5-dp-item.ui5-dp-item--selected-between .ui5-dp-daytext,.ui5-dp-item[hovered] .ui5-dp-daytext{background-color:var(--sapList_SelectionBackgroundColor);color:var(--sapTextColor)}.ui5-dp-item.ui5-dp-item--selected-between,.ui5-dp-item[hovered]{border:1px solid var(--sapContent_Selected_Background);border-radius:5%}.ui5-dp-item.ui5-dp-item--now{border:.125rem solid var(--sapLegend_CurrentDateTime)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--selected-between:focus:after{border-color:var(--sapContent_FocusColor)}.ui5-dp-items-container>:first-child{justify-content:flex-end}.ui5-dp-emptyweek{height:var(--_ui5_day_picker_empty_height)}";

/**
 * @public
 */
const metadata$4 = {
	tag: "ui5-daypicker",
	properties: /** @lends  sap.ui.webcomponents.main.DayPicker.prototype */ {
		/**
		 * An array of UTC timestamps representing the selected date or dates depending on the capabilities of the picker component.
		 * @type {Array}
		 * @public
		 */
		selectedDates: {
			type: Integer,
			multiple: true,
			compareValues: true,
		},

		/**
		 * Defines the type of selection used in the day picker component.
		 * Accepted property values are:<br>
		 * <ul>
		 * <li><code>CalendarSelectionMode.Single</code> - enables a single date selection.(default value)</li>
		 * <li><code>CalendarSelectionMode.Range</code> - enables selection of a date range.</li>
		 * <li><code>CalendarSelectionMode.Multiple</code> - enables selection of multiple dates.</li>
		 * </ul>
		 * @type {CalendarSelectionMode}
		 * @defaultvalue "Single"
		 * @public
		 */
		selectionMode: {
			type: CalendarSelectionMode,
			defaultValue: CalendarSelectionMode.Single,
		},

		/**
		 * Defines the visibility of the week numbers column.
		 * <br><br>
		 *
		 * <b>Note:<b> For calendars other than Gregorian,
		 * the week numbers are not displayed regardless of what is set.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.8
		 */
		hideWeekNumbers: {
			type: Boolean,
		},

		/**
		 * @type {Object}
		 * @private
		 */
		_weeks: {
			type: Object,
			multiple: true,
		},

		_dayNames: {
			type: Object,
			multiple: true,
		},

		/**
		 * When set, the component will skip all work in onBeforeRendering and will not automatically set the focus on itself
		 * @type {boolean}
		 * @private
		 */
		_hidden: {
			type: Boolean,
			noAttribute: true,
		},

		/**
		 * When selectionMode="Range" and the first day in the range is selected, this is the currently hovered (when using mouse) or focused (when using keyboard) day by the user
		 * @private
		 */
		_secondTimestamp: {
			type: String,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.DayPicker.prototype */ {
		/**
		 * Fired when the selected date(s) change
		 * @public
		 * @event
		 */
		change: {},
		/**
		 * Fired when the timestamp changes (user navigates with the keyboard) or clicks with the mouse
		 * @public
		 * @event
		 */
		navigate: {},
	},
};

const isBetween = (x, num1, num2) => x > Math.min(num1, num2) && x < Math.max(num1, num2);

const DAYS_IN_WEEK = 7;

/**
 * @class
 *
 * Represents one month view inside a calendar.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.DayPicker
 * @extends CalendarPart
 * @tagname ui5-daypicker
 * @public
 */
class DayPicker extends CalendarPart {
	static get metadata() {
		return metadata$4;
	}

	static get template() {
		return main$5;
	}

	static get styles() {
		return dayPickerCSS;
	}

	onBeforeRendering() {
		const localeData = getCachedLocaleDataInstance(getLocale());
		this._buildWeeks(localeData);
		this._buildDayNames(localeData);
	}

	/**
	 * Builds the _weeks object that represents the month
	 * @param localeData
	 * @private
	 */
	_buildWeeks(localeData) {
		if (this._hidden) {
			return; // Optimization to not do any work unless the current picker
		}

		this._weeks = [];

		const firstDayOfWeek = this._getFirstDayOfWeek();
		const monthsNames = localeData.getMonths("wide", this._primaryCalendarType);
		const nonWorkingDayLabel = this.i18nBundle.getText(DAY_PICKER_NON_WORKING_DAY);
		const todayLabel = this.i18nBundle.getText(DAY_PICKER_TODAY);
		const tempDate = this._getFirstDay(); // date that will be changed by 1 day 42 times
		const todayDate = CalendarDate$1.fromLocalJSDate(new Date(), this._primaryCalendarType); // current day date - calculate once
		const calendarDate = this._calendarDate; // store the _calendarDate value as this getter is expensive and degrades IE11 perf
		const minDate = this._minDate; // store the _minDate (expensive getter)
		const maxDate = this._maxDate; // store the _maxDate (expensive getter)

		let week = [];
		for (let i = 0; i < DAYS_IN_WEEK * 6; i++) { // always show 6 weeks total, 42 days to avoid jumping
			const timestamp = tempDate.valueOf() / 1000; // no need to round because CalendarDate does it

			let dayOfTheWeek = tempDate.getDay() - firstDayOfWeek;
			if (dayOfTheWeek < 0) {
				dayOfTheWeek += DAYS_IN_WEEK;
			}

			const isFocused = tempDate.getMonth() === calendarDate.getMonth() && tempDate.getDate() === calendarDate.getDate();
			const isSelected = this._isDaySelected(timestamp);
			const isSelectedBetween = this._isDayInsideSelectionRange(timestamp);
			const isOtherMonth = tempDate.getMonth() !== calendarDate.getMonth();
			const isWeekend = this._isWeekend(tempDate);
			const isDisabled = tempDate.valueOf() < minDate.valueOf() || tempDate.valueOf() > maxDate.valueOf();
			const isToday = tempDate.isSame(todayDate);
			const isFirstDayOfWeek = tempDate.getDay() === firstDayOfWeek;

			const nonWorkingAriaLabel = isWeekend ? `${nonWorkingDayLabel} ` : "";
			const todayAriaLabel = isToday ? `${todayLabel} ` : "";

			const day = {
				timestamp: timestamp.toString(),
				focusRef: isFocused,
				_tabIndex: isFocused ? "0" : "-1",
				selected: isSelected,
				iDay: tempDate.getDate(),
				classes: `ui5-dp-item ui5-dp-wday${dayOfTheWeek}`,
				ariaLabel: `${todayAriaLabel}${nonWorkingAriaLabel}${monthsNames[tempDate.getMonth()]} ${tempDate.getDate()}, ${tempDate.getYear()}`,
				ariaSelected: isSelected ? "true" : "false",
				ariaDisabled: isOtherMonth ? "true" : undefined,
				disabled: isDisabled,
			};

			if (isFirstDayOfWeek) {
				day.classes += " ui5-dp-firstday";
			}

			if (isSelected) {
				day.classes += " ui5-dp-item--selected";
			}

			if (isSelectedBetween) {
				day.classes += " ui5-dp-item--selected-between";
			}

			if (isToday) {
				day.classes += " ui5-dp-item--now";
			}

			if (isOtherMonth) {
				day.classes += " ui5-dp-item--othermonth";
			}

			if (isWeekend) {
				day.classes += " ui5-dp-item--weeekend";
			}
			if (isDisabled) {
				day.classes += " ui5-dp-item--disabled";
			}

			week.push(day);

			if (dayOfTheWeek === DAYS_IN_WEEK - 1) { // 0-indexed so 6 is the last day of the week
				week.unshift({
					weekNum: calculateWeekNumber(getFirstDayOfWeek(), tempDate.toUTCJSDate(), tempDate.getYear(), getLocale(), localeData),
					isHidden: this.shouldHideWeekNumbers,
				});
			}

			if (week.length === DAYS_IN_WEEK + 1) { // 7 entries for each day + 1 for the week numbers
				this._weeks.push(week);
				week = [];
			}

			tempDate.setDate(tempDate.getDate() + 1);
		}
	}

	/**
	 * Builds the dayNames object (header of the month)
	 * @param localeData
	 * @private
	 */
	_buildDayNames(localeData) {
		if (this._hidden) {
			return; // Optimization to not do any work unless the current picker
		}

		let dayOfTheWeek;

		const aDayNamesWide = localeData.getDays("wide", this._primaryCalendarType);
		const aDayNamesAbbreviated = localeData.getDays("abbreviated", this._primaryCalendarType);
		let dayName;

		this._dayNames = [];
		this._dayNames.push({
			classes: "ui5-dp-dayname",
			name: this.i18nBundle.getText(DAY_PICKER_WEEK_NUMBER_TEXT),
		});
		for (let i = 0; i < DAYS_IN_WEEK; i++) {
			dayOfTheWeek = i + this._getFirstDayOfWeek();
			if (dayOfTheWeek > DAYS_IN_WEEK - 1) { // 0-indexed so index of 6 is the maximum allowed
				dayOfTheWeek -= DAYS_IN_WEEK;
			}
			dayName = {
				name: aDayNamesWide[dayOfTheWeek],
				ultraShortName: aDayNamesAbbreviated[dayOfTheWeek],
				classes: "ui5-dp-dayname",
			};

			this._dayNames.push(dayName);
		}

		this._dayNames[1].classes += " ui5-dp-firstday";
	}

	onAfterRendering() {
		if (this._autoFocus && !this._hidden) {
			this.focus();
		}
	}

	_onfocusin() {
		this._autoFocus = true;
	}

	/**
	 * Tells if the day is selected (dark blue)
	 * @param timestamp
	 * @returns {boolean}
	 * @private
	 */
	_isDaySelected(timestamp) {
		if (this.selectionMode === CalendarSelectionMode.Single) {
			return timestamp === this.selectedDates[0];
		}

		// Multiple, Range
		return this.selectedDates.includes(timestamp);
	}

	/**
	 * Tells if the day is inside a selection range (light blue)
	 * @param timestamp
	 * @returns {*}
	 * @private
	 */
	_isDayInsideSelectionRange(timestamp) {
		// No selection at all (or not in range selection mode)
		if (this.selectionMode !== CalendarSelectionMode.Range || !this.selectedDates.length) {
			return false;
		}

		// Only one date selected - the user is hovering with the mouse or navigating with the keyboard to select the second one
		if (this.selectedDates.length === 1 && this._secondTimestamp) {
			return isBetween(timestamp, this.selectedDates[0], this._secondTimestamp);
		}

		// Two dates selected - stable range
		return isBetween(timestamp, this.selectedDates[0], this.selectedDates[1]);
	}

	/**
	 * Selects/deselects a day
	 * @param event
	 * @param isShift true if the user did Click+Shift or Enter+Shift (but not Space+Shift)
	 * @private
	 */
	_selectDate(event, isShift) {
		const target = event.target;

		if (!this._isDayPressed(target)) {
			return;
		}

		const timestamp = this._getTimestampFromDom(target);

		this._safelySetTimestamp(timestamp);
		this._updateSecondTimestamp();

		if (this.selectionMode === CalendarSelectionMode.Single) {
			this.selectedDates = [timestamp];
		} else if (this.selectionMode === CalendarSelectionMode.Multiple) {
			if (this.selectedDates.length > 0 && isShift) {
				this._multipleSelection(timestamp);
			} else {
				this._toggleTimestampInSelection(timestamp);
			}
		} else {
			this.selectedDates = (this.selectedDates.length === 1) ? [...this.selectedDates, timestamp]	: [timestamp];
		}

		this.fireEvent("change", {
			timestamp: this.timestamp,
			dates: this.selectedDates,
		});
	}

	/**
	 * Selects/deselects the whole row (week)
	 * @param event
	 * @private
	 */
	_selectWeek(event) {
		this._weeks.forEach(week => {
			const dayInThisWeek = week.findIndex(item => {
				const date = CalendarDate$1.fromTimestamp(parseInt(item.timestamp) * 1000);
				return date.getMonth() === this._calendarDate.getMonth() && date.getDate() === this._calendarDate.getDate();
			}) !== -1;
			if (dayInThisWeek) { // The current day is in this week
				const notAllDaysOfThisWeekSelected = week.some(item => item.timestamp && !this.selectedDates.includes(parseInt(item.timestamp)));
				if (notAllDaysOfThisWeekSelected) { // even if one day is not selected, select the whole week
					week.filter(item => item.timestamp).forEach(item => {
						this._addTimestampToSelection(parseInt(item.timestamp));
					});
				} else { // only if all days of this week are selected, deselect them
					week.filter(item => item.timestamp).forEach(item => {
						this._removeTimestampFromSelection(parseInt(item.timestamp));
					});
				}
			}
		});

		this.fireEvent("change", {
			timestamp: this.timestamp,
			dates: this.selectedDates,
		});
	}

	_toggleTimestampInSelection(timestamp) {
		if (this.selectedDates.includes(timestamp)) {
			this._removeTimestampFromSelection(timestamp);
		} else {
			this._addTimestampToSelection(timestamp);
		}
	}

	_addTimestampToSelection(timestamp) {
		if (!this.selectedDates.includes(timestamp)) {
			this.selectedDates = [...this.selectedDates, timestamp];
		}
	}

	_removeTimestampFromSelection(timestamp) {
		this.selectedDates = this.selectedDates.filter(value => value !== timestamp);
	}

	/**
	 * When at least one day is selected and the user pressed shift
	 * @param timestamp
	 * @private
	 */
	_multipleSelection(timestamp) {
		const min = Math.min(...this.selectedDates);
		const max = Math.max(...this.selectedDates);
		let start;
		let end;
		let toggle = false;

		if (timestamp < min) {
			start = timestamp;
			end = min;
		} else if (timestamp >= min && timestamp <= max) { // inside the current range - toggle all between the selected and focused
			const distanceToMin = Math.abs(timestamp - min);
			const distanceToMax = Math.abs(timestamp - max);

			if (distanceToMin < distanceToMax) {
				start = timestamp;
				end = max;
			} else {
				start = min;
				end = timestamp;
			}
			toggle = true;
		} else {
			start = max;
			end = timestamp;
		}

		const startDate = CalendarDate$1.fromTimestamp(start * 1000);
		const endDate = CalendarDate$1.fromTimestamp(end * 1000);

		while (startDate.valueOf() <= endDate.valueOf()) {
			this[toggle ? "_toggleTimestampInSelection" : "_addTimestampToSelection"](startDate.valueOf() / 1000);
			startDate.setDate(startDate.getDate() + 1);
		}
	}

	/**
	 * Set the hovered day as the _secondTimestamp
	 * @param event
	 * @private
	 */
	_onmouseover(event) {
		const hoveredItem = event.target.closest(".ui5-dp-item");
		if (hoveredItem && this.selectionMode === CalendarSelectionMode.Range && this.selectedDates.length === 1) {
			this._secondTimestamp = this._getTimestampFromDom(hoveredItem);
		}
	}

	_onkeydown(event) {
		let preventDefault = true;

		if (isEnter(event) || isEnterShift(event)) {
			this._selectDate(event, isEnterShift(event));
		} else if (isSpace(event) || isSpaceShift(event)) {
			event.preventDefault();
		} else if (isLeft(event)) {
			this._modifyTimestampBy(-1, "day");
		} else if (isRight(event)) {
			this._modifyTimestampBy(1, "day");
		} else if (isUp(event)) {
			this._modifyTimestampBy(-7, "day");
		} else if (isDown(event)) {
			this._modifyTimestampBy(7, "day");
		} else if (isPageUp(event)) {
			this._modifyTimestampBy(-1, "month");
		} else if (isPageDown(event)) {
			this._modifyTimestampBy(1, "month");
		} else if (isPageUpShift(event)) {
			this._modifyTimestampBy(-1, "year");
		} else if (isPageDownShift(event)) {
			this._modifyTimestampBy(1, "year");
		} else if (isPageUpShiftCtrl(event)) {
			this._modifyTimestampBy(-10, "year");
		} else if (isPageDownShiftCtrl(event)) {
			this._modifyTimestampBy(10, "year");
		} else if (isHome(event) || isEnd(event)) {
			this._onHomeOrEnd(isHome(event));
		} else if (isHomeCtrl(event)) {
			const tempDate = new CalendarDate$1(this._calendarDate, this._primaryCalendarType);
			tempDate.setDate(1); // Set the first day of the month
			this._setTimestamp(tempDate.valueOf() / 1000);
		} else if (isEndCtrl(event)) {
			const tempDate = new CalendarDate$1(this._calendarDate, this._primaryCalendarType);
			tempDate.setMonth(tempDate.getMonth() + 1);
			tempDate.setDate(0); // Set the last day of the month (0th day of next month)
			this._setTimestamp(tempDate.valueOf() / 1000);
		} else {
			preventDefault = false;
		}

		if (preventDefault) {
			event.preventDefault();
		}
	}

	_onkeyup(event) {
		// Even if Space+Shift was pressed, ignore the shift unless in Multiple selection
		if (isSpace(event) || (isSpaceShift(event) && this.selectionMode !== CalendarSelectionMode.Multiple)) {
			this._selectDate(event, false);
		} else if (isSpaceShift(event)) {
			this._selectWeek(event);
		}
	}

	/**
	 * Click is the same as Enter: Click+Shift has the same effect as Enter+Shift
	 * @param event
	 * @private
	 */
	_onclick(event) {
		this._selectDate(event, event.shiftKey);
	}

	/**
	 * One Home or End, move the focus to the first or last item in the row
	 * @param homePressed
	 * @private
	 */
	_onHomeOrEnd(homePressed) {
		this._weeks.forEach(week => {
			const dayInThisWeek = week.findIndex(item => {
				const date = CalendarDate$1.fromTimestamp(parseInt(item.timestamp) * 1000);
				return date.getMonth() === this._calendarDate.getMonth() && date.getDate() === this._calendarDate.getDate();
			}) !== -1;
			if (dayInThisWeek) { // The current day is in this week
				const index = homePressed ? 1 : 7; // select the first (if Home) or last (if End) day of the week
				this._setTimestamp(parseInt(week[index].timestamp));
			}
		});
	}

	/**
	 * Called from Calendar.js
	 * @protected
	 */
	_hasPreviousPage() {
		return !(this._calendarDate.getMonth() === this._minDate.getMonth() && this._calendarDate.getYear() === this._minDate.getYear());
	}

	/**
	 * Called from Calendar.js
	 * @protected
	 */
	_hasNextPage() {
		return !(this._calendarDate.getMonth() === this._maxDate.getMonth() && this._calendarDate.getYear() === this._maxDate.getYear());
	}

	/**
	 * Called from Calendar.js
	 * Same as PageUp
	 * @protected
	 */
	_showPreviousPage() {
		this._modifyTimestampBy(-1, "month");
	}

	/**
	 * Called from Calendar.js
	 * Same as PageDown
	 * @protected
	 */
	_showNextPage() {
		this._modifyTimestampBy(1, "month");
	}

	/**
	 * Modifies the timestamp by a certain amount of days/months/years
	 * @param amount
	 * @param unit
	 * @private
	 */
	_modifyTimestampBy(amount, unit) {
		// Modify the current timestamp
		this._safelyModifyTimestampBy(amount, unit);
		this._updateSecondTimestamp();

		// Notify the calendar to update its timestamp
		this.fireEvent("navigate", { timestamp: this.timestamp });
	}

	/**
	 * Sets the timestamp to an absolute value
	 * @param value
	 * @private
	 */
	_setTimestamp(value) {
		this._safelySetTimestamp(value);
		this._updateSecondTimestamp();
		this.fireEvent("navigate", { timestamp: this.timestamp });
	}

	/**
	 * During range selection, when the user is navigating with the keyboard, the currently focused day is considered the "second day"
	 * @private
	 */
	_updateSecondTimestamp() {
		if (this.selectionMode === CalendarSelectionMode.Range && this.selectedDates.length === 1) {
			this._secondTimestamp = this.timestamp;
		}
	}

	get shouldHideWeekNumbers() {
		if (this._primaryCalendarType !== CalendarType$1.Gregorian) {
			return true;
		}

		return this.hideWeekNumbers;
	}

	_isWeekend(oDate) {
		const localeData = getCachedLocaleDataInstance(getLocale());

		const iWeekDay = oDate.getDay(),
			iWeekendStart = localeData.getWeekendStart(),
			iWeekendEnd = localeData.getWeekendEnd();

		return (iWeekDay >= iWeekendStart && iWeekDay <= iWeekendEnd)
			|| (iWeekendEnd < iWeekendStart && (iWeekDay >= iWeekendStart || iWeekDay <= iWeekendEnd));
	}

	_isDayPressed(target) {
		const targetParent = target.parentNode;
		return (target.className.indexOf("ui5-dp-item") > -1) || (targetParent && targetParent.classList && targetParent.classList.contains("ui5-dp-item"));
	}

	_getFirstDay() {
		let daysFromPreviousMonth;

		const firstDayOfWeek = this._getFirstDayOfWeek();

		// determine weekday of first day in month
		const firstDay = new CalendarDate$1(this._calendarDate, this._primaryCalendarType);
		firstDay.setDate(1);
		daysFromPreviousMonth = firstDay.getDay() - firstDayOfWeek;
		if (daysFromPreviousMonth < 0) {
			daysFromPreviousMonth = 7 + daysFromPreviousMonth;
		}

		if (daysFromPreviousMonth > 0) {
			firstDay.setDate(1 - daysFromPreviousMonth);
		}

		return firstDay;
	}

	_getFirstDayOfWeek() {
		const localeData = getCachedLocaleDataInstance(getLocale());
		const confFirstDayOfWeek = getFirstDayOfWeek();
		return Number.isInteger(confFirstDayOfWeek) ? confFirstDayOfWeek : localeData.getFirstDayOfWeek();
	}

	get styles() {
		return {
			wrapper: {
				display: this._hidden ? "none" : "flex",
			},
			main: {
				width: "100%",
			},
		};
	}
}

DayPicker.define();

const block0$4 = (context) => { return scopedHtml`<div class="ui5-mp-root" role="grid" aria-readonly="false" aria-multiselectable="false" @keydown=${context._onkeydown} @keyup=${context._onkeyup} @click=${context._selectMonth} @focusin=${context._onfocusin}>${ repeat(context._months, (item, index) => item._id || index, (item, index) => block1$3(item, index, context)) }</div>`; };
const block1$3 = (item, index, context) => { return scopedHtml`<div class="ui5-mp-quarter">${ repeat(item, (item, index) => item._id || index, (item, index) => block2$3(item, index, context)) }</div>`; };
const block2$3 = (item, index, context) => { return scopedHtml`<div data-sap-timestamp=${ifDefined(item.timestamp)} tabindex=${ifDefined(item._tabIndex)} ?data-sap-focus-ref="${item.focusRef}" class="${ifDefined(item.classes)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}">${ifDefined(item.name)}</div>`; };


const main$4 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$4(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles$1 = ":host(:not([hidden])){display:block}:host{width:100%;height:100%}.ui5-mp-root{padding:2rem 0 1rem 0;display:flex;flex-direction:column;font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);justify-content:center;align-items:center}.ui5-mp-item{display:flex;width:calc(33.333% - .125rem);height:var(--_ui5_month_picker_item_height);color:var(--sapTextColor);background-color:var(--sapLegend_WorkingBackground);align-items:center;justify-content:center;margin:var(--_ui5_monthpicker_item_margin);box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;outline:none;position:relative;border:var(--_ui5_monthpicker_item_border);border-radius:var(--_ui5_monthpicker_item_border_radius)}.ui5-mp-item:hover{background-color:var(--sapList_Hover_Background)}.ui5-mp-item.ui5-mp-item--selected{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.ui5-mp-item.ui5-mp-item--disabled{pointer-events:none;opacity:.5}.ui5-mp-item.ui5-mp-item--selected:focus{background-color:var(--sapContent_Selected_Background)}.ui5-mp-item.ui5-mp-item--selected:focus:after{border-color:var(--sapContent_ContrastFocusColor)}.ui5-mp-item.ui5-mp-item--selected:hover{background-color:var(--sapContent_Selected_Background)}.ui5-mp-item:focus:after{content:\"\";position:absolute;width:var(--_ui5_monthpicker_item_focus_after_width);height:var(--_ui5_monthpicker_item_focus_after_height);border:var(--_ui5_monthpicker_item_focus_after_border);top:var(--_ui5_monthpicker_item_focus_after_offset);left:var(--_ui5_monthpicker_item_focus_after_offset)}.ui5-mp-quarter{display:flex;justify-content:center;align-items:center;width:100%}";

/**
 * @public
 */
const metadata$3 = {
	tag: "ui5-monthpicker",
	properties: /** @lends  sap.ui.webcomponents.main.MonthPicker.prototype */ {
		/**
		 * An array of UTC timestamps representing the selected date or dates depending on the capabilities of the picker component.
		 * @type {Array}
		 * @public
		 */
		selectedDates: {
			type: Integer,
			multiple: true,
			compareValues: true,
		},

		_months: {
			type: Object,
			multiple: true,
		},

		_hidden: {
			type: Boolean,
			noAttribute: true,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.MonthPicker.prototype */ {
		/**
		 * Fired when the user selects a month (space/enter/click).
		 * @public
		 * @event
		 */
		change: {},
		/**
		 * Fired when the timestamp changes - the user navigates with the keyboard or clicks with the mouse.
		 * @since 1.0.0-rc.9
		 * @public
		 * @event
		 */
		navigate: {},
	},
};

const PAGE_SIZE$1 = 12; // Total months on a single page
const ROW_SIZE$1 = 3; // Months per row (4 rows of 3 months each)

/**
 * Month picker component.
 *
 * @class
 *
 * Displays months which can be selected.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.MonthPicker
 * @extends CalendarPart
 * @tagname ui5-monthpicker
 * @public
 */
class MonthPicker extends CalendarPart {
	static get metadata() {
		return metadata$3;
	}

	static get template() {
		return main$4;
	}

	static get styles() {
		return styles$1;
	}

	onBeforeRendering() {
		this._buildMonths();
	}

	_buildMonths() {
		if (this._hidden) {
			return;
		}

		const localeData = getCachedLocaleDataInstance(getLocale());
		const monthsNames = localeData.getMonths("wide", this._primaryCalendarType);

		const months = [];
		const calendarDate = this._calendarDate; // store the value of the expensive getter
		const minDate = this._minDate; // store the value of the expensive getter
		const maxDate = this._maxDate; // store the value of the expensive getter
		const tempDate = new CalendarDate$1(calendarDate, this._primaryCalendarType);
		let timestamp;

		/* eslint-disable no-loop-func */
		for (let i = 0; i < 12; i++) {
			tempDate.setMonth(i);
			timestamp = tempDate.valueOf() / 1000;

			const isSelected = this.selectedDates.some(itemTimestamp => {
				const date = CalendarDate$1.fromTimestamp(itemTimestamp * 1000, this._primaryCalendarType);
				return date.getYear() === tempDate.getYear() && date.getMonth() === tempDate.getMonth();
			});
			const isFocused = tempDate.getMonth() === calendarDate.getMonth();
			const isDisabled = this._isOutOfSelectableRange(tempDate, minDate, maxDate);

			const month = {
				timestamp: timestamp.toString(),
				focusRef: isFocused,
				_tabIndex: isFocused ? "0" : "-1",
				selected: isSelected,
				ariaSelected: isSelected ? "true" : "false",
				name: monthsNames[i],
				disabled: isDisabled,
				classes: "ui5-mp-item",
			};

			if (isSelected) {
				month.classes += " ui5-mp-item--selected";
			}

			if (isDisabled) {
				month.classes += " ui5-mp-item--disabled";
			}

			const quarterIndex = parseInt(i / ROW_SIZE$1);

			if (months[quarterIndex]) {
				months[quarterIndex].push(month);
			} else {
				months[quarterIndex] = [month];
			}
		}

		this._months = months;
	}

	onAfterRendering() {
		if (!this._hidden) {
			this.focus();
		}
	}

	_onkeydown(event) {
		let preventDefault = true;

		if (isEnter(event)) {
			this._selectMonth(event);
		} else if (isSpace(event)) {
			event.preventDefault();
		} else if (isLeft(event)) {
			this._modifyTimestampBy(-1);
		} else if (isRight(event)) {
			this._modifyTimestampBy(1);
		} else if (isUp(event)) {
			this._modifyTimestampBy(-ROW_SIZE$1);
		} else if (isDown(event)) {
			this._modifyTimestampBy(ROW_SIZE$1);
		} else if (isPageUp(event)) {
			this._modifyTimestampBy(-PAGE_SIZE$1);
		} else if (isPageDown(event)) {
			this._modifyTimestampBy(PAGE_SIZE$1);
		} else if (isHome(event) || isEnd(event)) {
			this._onHomeOrEnd(isHome(event));
		} else if (isHomeCtrl(event)) {
			this._setTimestamp(parseInt(this._months[0][0].timestamp)); // first month of first row
		} else if (isEndCtrl(event)) {
			this._setTimestamp(parseInt(this._months[PAGE_SIZE$1 / ROW_SIZE$1 - 1][ROW_SIZE$1 - 1].timestamp)); // last month of last row
		} else {
			preventDefault = false;
		}

		if (preventDefault) {
			event.preventDefault();
		}
	}

	_onHomeOrEnd(homePressed) {
		this._months.forEach(row => {
			const indexInRow = row.findIndex(item => CalendarDate$1.fromTimestamp(parseInt(item.timestamp) * 1000).getMonth() === this._calendarDate.getMonth());
			if (indexInRow !== -1) { // The current month is on this row
				const index = homePressed ? 0 : ROW_SIZE$1 - 1; // select the first (if Home) or last (if End) month on the row
				this._setTimestamp(parseInt(row[index].timestamp));
			}
		});
	}

	/**
	 * Sets the timestamp to an absolute value
	 * @param value
	 * @private
	 */
	_setTimestamp(value) {
		this._safelySetTimestamp(value);
		this.fireEvent("navigate", { timestamp: this.timestamp });
	}

	/**
	 * Modifies timestamp by a given amount of months and, if necessary, loads the prev/next page
	 * @param amount
	 * @private
	 */
	_modifyTimestampBy(amount) {
		// Modify the current timestamp
		this._safelyModifyTimestampBy(amount, "month");

		// Notify the calendar to update its timestamp
		this.fireEvent("navigate", { timestamp: this.timestamp });
	}

	_onkeyup(event) {
		if (isSpace(event)) {
			this._selectMonth(event);
		}
	}

	/**
	 * User clicked with the mouser or pressed Enter/Space
	 * @param event
	 * @private
	 */
	_selectMonth(event) {
		event.preventDefault();
		if (event.target.className.indexOf("ui5-mp-item") > -1) {
			const timestamp = this._getTimestampFromDom(event.target);
			this._safelySetTimestamp(timestamp);
			this.fireEvent("change", { timestamp: this.timestamp });
		}
	}

	/**
	 * Called from Calendar.js
	 * @protected
	 */
	_hasPreviousPage() {
		return this._calendarDate.getYear() !== this._minDate.getYear();
	}

	/**
	 * Called from Calendar.js
	 * @protected
	 */
	_hasNextPage() {
		return this._calendarDate.getYear() !== this._maxDate.getYear();
	}

	/**
	 * Called by Calendar.js
	 * User pressed the "<" button in the calendar header (same as PageUp)
	 * @protected
	 */
	_showPreviousPage() {
		this._modifyTimestampBy(-PAGE_SIZE$1);
	}

	/**
	 * Called by Calendar.js
	 * User pressed the ">" button in the calendar header (same as PageDown)
	 * @protected
	 */
	_showNextPage() {
		this._modifyTimestampBy(PAGE_SIZE$1);
	}

	_isOutOfSelectableRange(date, minDate, maxDate) {
		const month = date.getMonth();
		const year = date.getYear();
		const minYear = minDate.getYear();
		const minMonth = minDate.getMonth();
		const maxYear = maxDate.getYear();
		const maxMonth = maxDate.getMonth();

		return year < minYear || (year === minYear && month < minMonth) || year > maxYear || (year === maxYear && month > maxMonth);
	}
}

MonthPicker.define();

const block0$3 = (context) => { return scopedHtml`<div class="ui5-yp-root" role="grid" aria-readonly="false" aria-multiselectable="false" @keydown=${context._onkeydown} @keyup=${context._onkeyup} @click=${context._selectYear} @focusin=${context._onfocusin}>${ repeat(context._years, (item, index) => item._id || index, (item, index) => block1$2(item, index, context)) }</div>`; };
const block1$2 = (item, index, context) => { return scopedHtml`<div class="ui5-yp-interval-container">${ repeat(item, (item, index) => item._id || index, (item, index) => block2$2(item, index, context)) }</div>`; };
const block2$2 = (item, index, context) => { return scopedHtml`<div data-sap-timestamp="${ifDefined(item.timestamp)}" tabindex="${ifDefined(item._tabIndex)}" ?data-sap-focus-ref="${item.focusRef}" class="${ifDefined(item.classes)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}">${ifDefined(item.year)}</div>`; };


const main$3 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$3(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const styles = ":host(:not([hidden])){display:block}:host{width:100%;height:100%}.ui5-yp-root{padding:2rem 0 1rem 0;display:flex;flex-direction:column;font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);justify-content:center;align-items:center}.ui5-yp-interval-container{display:flex;justify-content:center;align-items:center;width:100%}.ui5-yp-item{display:flex;margin:var(--_ui5_yearpicker_item_margin);width:calc(25% - .125rem);height:var(--_ui5_year_picker_item_height);color:var(--sapTextColor);background-color:var(--sapLegend_WorkingBackground);align-items:center;justify-content:center;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;outline:none;position:relative;border:var(--_ui5_yearpicker_item_border);border-radius:var(--_ui5_yearpicker_item_border_radius)}.ui5-yp-item:hover{background-color:var(--sapList_Hover_Background)}.ui5-yp-item.ui5-yp-item--selected{background-color:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}.ui5-yp-item.ui5-yp-item--disabled{pointer-events:none;opacity:.5}.ui5-yp-item.ui5-yp-item--selected:focus{background-color:var(--_ui5_yearpicker_item_selected_focus)}.ui5-yp-item.ui5-yp-item--selected:focus:after{border-color:var(--sapContent_ContrastFocusColor)}.ui5-yp-item.ui5-yp-item--selected:hover{background-color:var(--_ui5_yearpicker_item_selected_focus)}.ui5-yp-item:focus:after{content:\"\";position:absolute;width:var(--_ui5_yearpicker_item_focus_after_width);height:var(--_ui5_yearpicker_item_focus_after_height);border:var(--_ui5_yearpicker_item_focus_after_border);top:var(--_ui5_yearpicker_item_focus_after_offset);left:var(--_ui5_yearpicker_item_focus_after_offset)}";

/**
 * @public
 */
const metadata$2 = {
	tag: "ui5-yearpicker",
	properties: /** @lends  sap.ui.webcomponents.main.YearPicker.prototype */ {
		/**
		 * An array of UTC timestamps representing the selected date or dates depending on the capabilities of the picker component.
		 * @type {Array}
		 * @public
		 */
		selectedDates: {
			type: Integer,
			multiple: true,
			compareValues: true,
		},

		_years: {
			type: Object,
			multiple: true,
		},

		_hidden: {
			type: Boolean,
			noAttribute: true,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.YearPicker.prototype */ {
		/**
		 * Fired when the user selects a year (space/enter/click).
		 * @public
		 * @event
		 */
		change: {},
		/**
		 * Fired when the timestamp changes - the user navigates with the keyboard or clicks with the mouse.
		 * @since 1.0.0-rc.9
		 * @public
		 * @event
		 */
		navigate: {},
	},
};

const PAGE_SIZE = 20; // Total years on a single page
const ROW_SIZE = 4; // Years per row (5 rows of 4 years each)

/**
 * @class
 *
 * Displays years which can be selected.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.YearPicker
 * @extends CalendarPart
 * @tagname ui5-yearpicker
 * @public
 */
class YearPicker extends CalendarPart {
	static get metadata() {
		return metadata$2;
	}

	static get styles() {
		return styles;
	}

	static get template() {
		return main$3;
	}

	onBeforeRendering() {
		this._buildYears();
	}

	_buildYears() {
		if (this._hidden) {
			return;
		}

		const oYearFormat = DateFormat.getDateInstance({ format: "y", calendarType: this._primaryCalendarType }, getLocale());

		this._calculateFirstYear();

		const calendarDate = this._calendarDate; // store the value of the expensive getter
		const minDate = this._minDate; // store the value of the expensive getter
		const maxDate = this._maxDate; // store the value of the expensive getter
		const tempDate = new CalendarDate$1(calendarDate, this._primaryCalendarType);
		tempDate.setYear(this._firstYear);

		const intervals = [];
		let timestamp;

		/* eslint-disable no-loop-func */
		for (let i = 0; i < PAGE_SIZE; i++) {
			timestamp = tempDate.valueOf() / 1000;

			const isSelected = this.selectedDates.some(itemTimestamp => {
				const date = CalendarDate$1.fromTimestamp(itemTimestamp * 1000, this._primaryCalendarType);
				return date.getYear() === tempDate.getYear();
			});
			const isFocused = tempDate.getYear() === calendarDate.getYear();
			const isDisabled = tempDate.getYear() < minDate.getYear() || tempDate.getYear() > maxDate.getYear();

			const year = {
				timestamp: timestamp.toString(),
				_tabIndex: isFocused ? "0" : "-1",
				focusRef: isFocused,
				selected: isSelected,
				ariaSelected: isSelected ? "true" : "false",
				year: oYearFormat.format(tempDate.toLocalJSDate()),
				disabled: isDisabled,
				classes: "ui5-yp-item",
			};

			if (isSelected) {
				year.classes += " ui5-yp-item--selected";
			}

			if (isDisabled) {
				year.classes += " ui5-yp-item--disabled";
			}

			const intervalIndex = parseInt(i / ROW_SIZE);

			if (intervals[intervalIndex]) {
				intervals[intervalIndex].push(year);
			} else {
				intervals[intervalIndex] = [year];
			}

			tempDate.setYear(tempDate.getYear() + 1);
		}

		this._years = intervals;
	}

	_calculateFirstYear() {
		const absoluteMaxYear = getMaxCalendarDate(this._primaryCalendarType).getYear(); // 9999
		const currentYear = this._calendarDate.getYear();

		// 1. If first load - center the current year (set first year to be current year minus half page size)
		if (!this._firstYear) {
			this._firstYear = currentYear - PAGE_SIZE / 2;
		}

		// 2. If out of range - change by a page (20) - do not center in order to keep the same position as the last page
		if (currentYear < this._firstYear) {
			this._firstYear -= PAGE_SIZE;
		} else if (currentYear >= this._firstYear + PAGE_SIZE) {
			this._firstYear += PAGE_SIZE;
		}

		// 3. If the date was changed by more than 20 years - reset _firstYear completely
		if (Math.abs(this._firstYear - currentYear) >= PAGE_SIZE) {
			this._firstYear = currentYear - PAGE_SIZE / 2;
		}

		// Keep it in the range between the min and max year
		this._firstYear = Math.max(this._firstYear, this._minDate.getYear());
		this._firstYear = Math.min(this._firstYear, this._maxDate.getYear());

		// If first year is > 9980, make it 9980 to not show any years beyond 9999
		if (this._firstYear > absoluteMaxYear - PAGE_SIZE + 1) {
			this._firstYear = absoluteMaxYear - PAGE_SIZE + 1;
		}
	}

	onAfterRendering() {
		if (!this._hidden) {
			this.focus();
		}
	}

	_onkeydown(event) {
		let preventDefault = true;

		if (isEnter(event)) {
			this._selectYear(event);
		} else if (isSpace(event)) {
			event.preventDefault();
		} else if (isLeft(event)) {
			this._modifyTimestampBy(-1);
		} else if (isRight(event)) {
			this._modifyTimestampBy(1);
		} else if (isUp(event)) {
			this._modifyTimestampBy(-ROW_SIZE);
		} else if (isDown(event)) {
			this._modifyTimestampBy(ROW_SIZE);
		} else if (isPageUp(event)) {
			this._modifyTimestampBy(-PAGE_SIZE);
		} else if (isPageDown(event)) {
			this._modifyTimestampBy(PAGE_SIZE);
		} else if (isHome(event) || isEnd(event)) {
			this._onHomeOrEnd(isHome(event));
		} else if (isHomeCtrl(event)) {
			this._setTimestamp(parseInt(this._years[0][0].timestamp)); // first year of first row
		} else if (isEndCtrl(event)) {
			this._setTimestamp(parseInt(this._years[PAGE_SIZE / ROW_SIZE - 1][ROW_SIZE - 1].timestamp)); // last year of last row
		} else {
			preventDefault = false;
		}

		if (preventDefault) {
			event.preventDefault();
		}
	}

	_onHomeOrEnd(homePressed) {
		this._years.forEach(row => {
			const indexInRow = row.findIndex(item => CalendarDate$1.fromTimestamp(parseInt(item.timestamp) * 1000).getYear() === this._calendarDate.getYear());
			if (indexInRow !== -1) { // The current year is on this row
				const index = homePressed ? 0 : ROW_SIZE - 1; // select the first (if Home) or last (if End) year on the row
				this._setTimestamp(parseInt(row[index].timestamp));
			}
		});
	}

	/**
	 * Sets the timestamp to an absolute value
	 * @param value
	 * @private
	 */
	_setTimestamp(value) {
		this._safelySetTimestamp(value);
		this.fireEvent("navigate", { timestamp: this.timestamp });
	}

	/**
	 * Modifies timestamp by a given amount of years and, if necessary, loads the prev/next page
	 * @param amount
	 * @private
	 */
	_modifyTimestampBy(amount) {
		// Modify the current timestamp
		this._safelyModifyTimestampBy(amount, "year");

		// Notify the calendar to update its timestamp
		this.fireEvent("navigate", { timestamp: this.timestamp });
	}

	_onkeyup(event) {
		if (isSpace(event)) {
			this._selectYear(event);
		}
	}

	/**
	 * User clicked with the mouser or pressed Enter/Space
	 * @param event
	 * @private
	 */
	_selectYear(event) {
		event.preventDefault();
		if (event.target.className.indexOf("ui5-yp-item") > -1) {
			const timestamp = this._getTimestampFromDom(event.target);
			this._safelySetTimestamp(timestamp);
			this.fireEvent("change", { timestamp: this.timestamp });
		}
	}

	/**
	 * Called from Calendar.js
	 * @protected
	 */
	_hasPreviousPage() {
		return this._firstYear > this._minDate.getYear();
	}

	/**
	 * Called from Calendar.js
	 * @protected
	 */
	_hasNextPage() {
		return this._firstYear + PAGE_SIZE - 1 < this._maxDate.getYear();
	}

	/**
	 * Called by Calendar.js
	 * User pressed the "<" button in the calendar header (same as PageUp)
	 * @protected
	 */
	_showPreviousPage() {
		this._modifyTimestampBy(-PAGE_SIZE);
	}

	/**
	 * Called by Calendar.js
	 * User pressed the ">" button in the calendar header (same as PageDown)
	 * @protected
	 */
	_showNextPage() {
		this._modifyTimestampBy(PAGE_SIZE);
	}
}

YearPicker.define();

var Gregorian = UniversalDate.extend('sap.ui.core.date.Gregorian', {
    constructor: function () {
        this.oDate = this.createDate(Date, arguments);
        this.sCalendarType = CalendarType.Gregorian;
    }
});
Gregorian.UTC = function () {
    return Date.UTC.apply(Date, arguments);
};
Gregorian.now = function () {
    return Date.now();
};
_Calendars.set(CalendarType.Gregorian, Gregorian);

const block0$2 = (context) => { return scopedHtml`<div class="ui5-cal-root" @keydown=${context._onkeydown}><div id="${ifDefined(context._id)}-content" class="ui5-cal-content"><ui5-daypicker id="${ifDefined(context._id)}-daypicker" ?hidden="${context._isDayPickerHidden}" format-pattern="${ifDefined(context._formatPattern)}" .selectedDates="${ifDefined(context._selectedDatesTimestamps)}" ._hidden="${ifDefined(context._isDayPickerHidden)}" .primaryCalendarType="${ifDefined(context._primaryCalendarType)}" .selectionMode="${ifDefined(context.selectionMode)}" .minDate="${ifDefined(context.minDate)}" .maxDate="${ifDefined(context.maxDate)}" timestamp="${ifDefined(context._timestamp)}" ?hide-week-numbers="${context.hideWeekNumbers}" @ui5-change="${ifDefined(context.onSelectedDatesChange)}" @ui5-navigate="${ifDefined(context.onNavigate)}"></ui5-daypicker><ui5-monthpicker id="${ifDefined(context._id)}-MP" ?hidden="${context._isMonthPickerHidden}" format-pattern="${ifDefined(context._formatPattern)}" .selectedDates="${ifDefined(context._selectedDatesTimestamps)}" ._hidden="${ifDefined(context._isMonthPickerHidden)}" .primaryCalendarType="${ifDefined(context._primaryCalendarType)}" .minDate="${ifDefined(context.minDate)}" .maxDate="${ifDefined(context.maxDate)}" timestamp="${ifDefined(context._timestamp)}" @ui5-change="${ifDefined(context.onSelectedMonthChange)}" @ui5-navigate="${ifDefined(context.onNavigate)}"></ui5-monthpicker><ui5-yearpicker id="${ifDefined(context._id)}-YP" ?hidden="${context._isYearPickerHidden}" format-pattern="${ifDefined(context._formatPattern)}" .selectedDates="${ifDefined(context._selectedDatesTimestamps)}" ._hidden="${ifDefined(context._isYearPickerHidden)}" .primaryCalendarType="${ifDefined(context._primaryCalendarType)}" .minDate="${ifDefined(context.minDate)}" .maxDate="${ifDefined(context.maxDate)}" timestamp="${ifDefined(context._timestamp)}" @ui5-change="${ifDefined(context.onSelectedYearChange)}" @ui5-navigate="${ifDefined(context.onNavigate)}"></ui5-yearpicker></div><!-- Positioned above the content due to flex-direction:column-reverse, but physically here for tab order to work --><ui5-calendar-header id="${ifDefined(context._id)}-head" .primaryCalendarType="${ifDefined(context._primaryCalendarType)}" timestamp="${ifDefined(context._timestamp)}" .isPrevButtonDisabled="${ifDefined(context._previousButtonDisabled)}" .isNextButtonDisabled="${ifDefined(context._nextButtonDisabled)}" .isMonthButtonHidden="${ifDefined(context._isHeaderMonthButtonHidden)}" @ui5-previous-press="${ifDefined(context.onHeaderPreviousPress)}" @ui5-next-press="${ifDefined(context.onHeaderNextPress)}" @ui5-show-month-press="${ifDefined(context.onHeaderShowMonthPress)}" @ui5-show-year-press="${ifDefined(context.onHeaderShowYearPress)}"></ui5-calendar-header></div>`; };


const main$2 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$2(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const calendarCSS = ":host(:not([hidden])){display:inline-block}.ui5-cal-root{background:var(--sapList_Background);box-sizing:border-box;height:var(--_ui5_calendar_height);width:var(--_ui5_calendar_width);padding:var(--_ui5_calendar_padding);display:flex;flex-direction:column-reverse;justify-content:flex-end}.ui5-cal-root [ui5-calendar-header]{height:var(--_ui5_calendar_header_height)}";

/**
 * @public
 */
const metadata$1 = {
	tag: "ui5-calendar",
	properties: /** @lends  sap.ui.webcomponents.main.Calendar.prototype */ {
		/**
		 * Defines the type of selection used in the calendar component.
		 * Accepted property values are:<br>
		 * <ul>
		 * <li><code>CalendarSelectionMode.Single</code> - enables a single date selection.(default value)</li>
		 * <li><code>CalendarSelectionMode.Range</code> - enables selection of a date range.</li>
		 * <li><code>CalendarSelectionMode.Multiple</code> - enables selection of multiple dates.</li>
		 * </ul>
		 * @type {CalendarSelectionMode}
		 * @defaultvalue "Single"
		 * @public
		 */
		selectionMode: {
			type: CalendarSelectionMode,
			defaultValue: CalendarSelectionMode.Single,
		},

		/**
		 * Defines the visibility of the week numbers column.
		 * <br><br>
		 *
		 * <b>Note:<b> For calendars other than Gregorian,
		 * the week numbers are not displayed regardless of what is set.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		hideWeekNumbers: {
			type: Boolean,
		},

		/**
		 * Which picker is currently visible to the user: day/month/year
		 */
		_currentPicker: {
			type: String,
			defaultValue: "day",
		},

		_previousButtonDisabled: {
			type: Boolean,
		},

		_nextButtonDisabled: {
			type: Boolean,
		},
	},
	managedSlots: true,
	slots: /** @lends  sap.ui.webcomponents.main.Calendar.prototype */ {
		/**
		 * Defines the selected date or dates (depending on the <code>selectionMode</code> property) for this calendar as instances of <code>ui5-date</code>
		 *
		 * @type {sap.ui.webcomponents.main.ICalendarDate[]}
		 * @slot dates
		 * @public
		 */
		"default": {
			propertyName: "dates",
			type: HTMLElement,
			invalidateOnChildChange: true,
		},
	},
	events: /** @lends  sap.ui.webcomponents.main.Calendar.prototype */ {
		/**
		 * Fired when the selected dates change.
		 * <b>Note:</b> If you call <code>preventDefault()</code> for this event, <code>ui5-calendar</code> will not
		 * create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.
		 *
		 * @event sap.ui.webcomponents.main.Calendar#selected-dates-change
		 * @allowPreventDefault
		 * @param {Array} values The selected dates
		 * @param {Array} dates The selected dates as UTC timestamps
		 * @public
		 */
		"selected-dates-change": {
			detail: {
				dates: { type: Array },
				values: { type: Array },
			},
		},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-calendar</code> component allows users to select one or more dates.
 * <br><br>
 * Currently selected dates are represented with instances of <code>ui5-date</code> as
 * children of the <code>ui5-calendar</code>. The value property of each <code>ui5-date</code> must be a
 * date string, correctly formatted according to the <code>ui5-calendar</code>'s <code>formatPattern</code> property.
 * Whenever the user changes the date selection, <code>ui5-calendar</code> will automatically create/remove instances
 * of <code>ui5-date</code> in itself, unless you prevent this behavior by calling <code>preventDefault()</code> for the
 * <code>selected-dates-change</code> event. This is useful if you want to control the selected dates externally.
 * <br><br>
 *
 * <h3>Usage</h3>
 *
 * The user can navigate to a particular date by:
 * <br>
 * <ul>
 * <li>Pressing over a month inside the months view</li>
 * <li>Pressing over an year inside the years view</li>
 * </ul>
 * <br>
 * The user can confirm a date selection by pressing over a date inside the days view.
 * <br><br>
 *
 * <h3>Keyboard Handling</h3>
 * The <code>ui5-calendar</code> provides advanced keyboard handling.
 * When a picker is showed and focused the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 * <br>
 * - Day picker: <br>
 * <ul>
 * <li>[F4] - Shows month picker</li>
 * <li>[SHIFT] + [F4] - Shows year picker</li>
 * <li>[PAGEUP] - Navigate to the previous month</li>
 * <li>[PAGEDOWN] - Navigate to the next month</li>
 * <li>[SHIFT] + [PAGEUP] - Navigate to the previous year</li>
 * <li>[SHIFT] + [PAGEDOWN] - Navigate to the next year</li>
 * <li>[CTRL] + [SHIFT] + [PAGEUP] - Navigate ten years backwards</li>
 * <li>[CTRL] + [SHIFT] + [PAGEDOWN] - Navigate ten years forwards</li>
 * <li>[HOME] - Navigate to the first day of the week
 * <li>[END] - Navigate to the last day of the week
 * <li>[CTRL] + [HOME] - Navigate to the first day of the month
 * <li>[CTRL] + [END] - Navigate to the last day of the month
 * </ul>
 * <br>
 * - Month picker: <br>
 * <ul>
 * <li>[PAGEUP] - Navigate to the previous month</li>
 * <li>[PAGEDOWN] - Navigate to the next month</li>
 * <li>[HOME] - Navigate to the first month of the current row
 * <li>[END] - Navigate to the last month of the current row
 * <li>[CTRL] + [HOME] - Navigate to the first month of the current year
 * <li>[CTRL] + [END] - Navigate to the last month of the year
 * </ul>
 * <br>
 * - Year picker: <br>
 * <ul>
 * <li>[PAGEUP] - Navigate to the previous year range</li>
 * <li>[PAGEDOWN] - Navigate the next year range</li>
 * <li>[HOME] - Navigate to the first year of the current row
 * <li>[END] - Navigate to the last year of the current row
 * <li>[CTRL] + [HOME] - Navigate to the first year of the current year range
 * <li>[CTRL] + [END] - Navigate to the last year of the current year range
 * </ul>
 * <br>
 *
* <h3>Calendar types</h3>
 * The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
 * By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
 * you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules:
 * <br><br>
 *
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code>
 * <br><br>
 *
 * Or, you can use the global configuration and set the <code>calendarType</code> key:
 * <br>
 * <pre><code>&lt;script data-id="sap-ui-config" type="application/json"&gt;
 * {
 *	"calendarType": "Japanese"
 * }
 * &lt;/script&gt;
 *
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Calendar";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Calendar
 * @extends CalendarPart
 * @tagname ui5-calendar
 * @appenddocs CalendarDate
 * @public
 * @since 1.0.0-rc.11
 */
class Calendar extends CalendarPart {
	static get metadata() {
		return metadata$1;
	}

	static get template() {
		return main$2;
	}

	static get styles() {
		return calendarCSS;
	}

	/**
	 * @private
	 */
	get _selectedDatesTimestamps() {
		return this.dates.map(date => {
			const value = date.value;
			return value && !!this.getFormat().parse(value) ? this._getTimeStampFromString(value) / 1000 : undefined;
		}).filter(date => !!date);
	}

	/**
	 * @private
	 */
	_setSelectedDates(selectedDates) {
		const selectedValues = selectedDates.map(timestamp => this.getFormat().format(new Date(timestamp * 1000), true)); // Format as UTC
		const valuesInDOM = [...this.dates].map(dateElement => dateElement.value);

		// Remove all elements for dates that are no longer selected
		this.dates.filter(dateElement => !selectedValues.includes(dateElement.value)).forEach(dateElement => {
			this.removeChild(dateElement);
		});

		// Create tags for the selected dates that don't already exist in DOM
		selectedValues.filter(value => !valuesInDOM.includes(value)).forEach(value => {
			const dateElement = document.createElement("ui5-date");
			dateElement.value = value;
			this.appendChild(dateElement);
		});
	}

	async onAfterRendering() {
		await renderFinished(); // Await for the current picker to render and then ask if it has previous/next pages
		this._previousButtonDisabled = !this._currentPickerDOM._hasPreviousPage();
		this._nextButtonDisabled = !this._currentPickerDOM._hasNextPage();
	}

	/**
	 * The user clicked the "month" button in the header
	 */
	onHeaderShowMonthPress() {
		this._currentPicker = "month";
	}

	/**
	 * The user clicked the "year" button in the header
	 */
	onHeaderShowYearPress() {
		this._currentPicker = "year";
	}

	get _currentPickerDOM() {
		return this.shadowRoot.querySelector(`[ui5-${this._currentPicker}picker]`);
	}

	/**
	 * The year clicked the "Previous" button in the header
	 */
	onHeaderPreviousPress() {
		this._currentPickerDOM._showPreviousPage();
	}

	/**
	 * The year clicked the "Next" button in the header
	 */
	onHeaderNextPress() {
		this._currentPickerDOM._showNextPage();
	}

	/**
	 * The month button is only hidden when the month picker is shown
	 * @returns {boolean}
	 * @private
	 */
	get _isHeaderMonthButtonHidden() {
		return this._currentPicker === "month";
	}

	get _isDayPickerHidden() {
		return this._currentPicker !== "day";
	}

	get _isMonthPickerHidden() {
		return this._currentPicker !== "month";
	}

	get _isYearPickerHidden() {
		return this._currentPicker !== "year";
	}

	onSelectedDatesChange(event) {
		const timestamp = event.detail.timestamp;
		const selectedDates = event.detail.dates;
		const datesValues = selectedDates.map(ts => {
			const calendarDate = CalendarDate$1.fromTimestamp(ts * 1000, this._primaryCalendarType);
			return this.getFormat().format(calendarDate.toUTCJSDate(), true);
		});

		this.timestamp = timestamp;
		const defaultPrevented = !this.fireEvent("selected-dates-change", { timestamp, dates: [...selectedDates], values: datesValues }, true);
		if (!defaultPrevented) {
			this._setSelectedDates(selectedDates);
		}
	}

	onSelectedMonthChange(event) {
		this.timestamp = event.detail.timestamp;
		this._currentPicker = "day";
	}

	onSelectedYearChange(event) {
		this.timestamp = event.detail.timestamp;
		this._currentPicker = "day";
	}

	onNavigate(event) {
		this.timestamp = event.detail.timestamp;
	}

	_onkeydown(event) {
		if (isF4(event) && this._currentPicker === "day") {
			this._currentPicker = "month";
		}

		if (isF4Shift(event) && this._currentPicker === "day") {
			this._currentPicker = "year";
		}
	}

	/**
	 * Returns an array of UTC timestamps, representing the selected dates.
	 * @protected
	 * @deprecated
	 */
	get selectedDates() {
		return this._selectedDatesTimestamps;
	}

	/**
	 * Creates instances of <code>ui5-date</code> inside this <code>ui5-calendar</code> with values, equal to the provided UTC timestamps
	 * @protected
	 * @deprecated
	 * @param selectedDates Array of UTC timestamps
	 */
	set selectedDates(selectedDates) {
		this._setSelectedDates(selectedDates);
	}

	static get dependencies() {
		return [
			CalendarDate,
			CalendarHeader,
			DayPicker,
			MonthPicker,
			YearPicker,
		];
	}
}

Calendar.define();

const block0$1 = (context) => { return scopedHtml`<div class="ui5-date-picker-root" style="${styleMap(context.styles.main)}"><!-- INPUT --><ui5-input id="${ifDefined(context._id)}-inner" class="ui5-date-picker-input" placeholder="${ifDefined(context._placeholder)}" type="${ifDefined(context.type)}" value="${ifDefined(context.value)}" ?disabled="${context.disabled}" ?required="${context.required}" ?readonly="${context.readonly}" value-state="${ifDefined(context.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(context.accInfo)}" @ui5-change="${ifDefined(context._onInputChange)}" @ui5-input="${ifDefined(context._onInputInput)}" @ui5-submit="${ifDefined(context._onInputSubmit)}" @keydown="${context._onkeydown}">${ context.valueStateMessage.length ? block1$1(context) : undefined }${ !context.readonly ? block2$1(context) : undefined }</ui5-input><slot name="formSupport"></slot></div>`; };
const block1$1 = (context) => { return scopedHtml`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`; };
const block2$1 = (context) => { return scopedHtml`<ui5-icon slot="icon" name="${ifDefined(context.openIconName)}" tabindex="-1" accessible-name="${ifDefined(context.openIconTitle)}" show-tooltip @click="${context.togglePicker}" input-icon ?pressed="${context._isPickerOpen}" dir="${ifDefined(context.effectiveDir)}"></ui5-icon>`; };


const main$1 = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0$1(context);
};

const block0 = (context) => { return scopedHtml`<ui5-responsive-popover id="${ifDefined(context._id)}-responsive-popover" allow-target-overlap stay-open-on-scroll placement-type="Bottom" horizontal-align="Left" ?disable-scrolling="${context._isIE}" no-arrow with-padding no-stretch ?_hide-header=${ifDefined(context._shouldHideHeader)} @keydown="${context._onkeydown}" @ui5-after-close="${ifDefined(context.onResponsivePopoverAfterClose)}">${ context.showHeader ? block1(context) : undefined }<ui5-calendar id="${ifDefined(context._id)}-calendar" primary-calendar-type="${ifDefined(context._primaryCalendarType)}" format-pattern="${ifDefined(context._formatPattern)}" timestamp="${ifDefined(context._calendarTimestamp)}" .selectionMode="${ifDefined(context._calendarSelectionMode)}" .minDate="${ifDefined(context.minDate)}" .maxDate="${ifDefined(context.maxDate)}" @ui5-selected-dates-change="${ifDefined(context.onSelectedDatesChange)}" ?hide-week-numbers="${context.hideWeekNumbers}" ._currentPicker="${ifDefined(context._calendarCurrentPicker)}">${ repeat(context._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block2(item, index, context)) }</ui5-calendar>${ context.showFooter ? block3(context) : undefined }</ui5-responsive-popover> `; };
const block1 = (context) => { return scopedHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(context._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${context.closePicker}"></ui5-button></div></div>`; };
const block2 = (item, index, context) => { return scopedHtml`<ui5-date value="${ifDefined(item)}"></ui5-date>`; };
const block3 = (context) => { return scopedHtml``; };


const main = (context, tags, suffix) => {
	setTags(tags);
	setSuffix(suffix);
	return block0(context);
};

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const datePickerCss = ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0}[input-icon]{color:var(--sapContent_IconColor);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-left:1px solid transparent;min-width:1rem;min-height:1rem}[input-icon][pressed]{background:var(--sapButton_Selected_Background);color:var(--sapButton_Active_TextColor)}[input-icon]:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}[input-icon]:not([pressed]):not(:active):hover{background:var(--sapButton_Lite_Hover_Background)}[input-icon]:hover{border-left:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]:hover{border-left:none;border-right:var(--_ui5_select_hover_icon_left_border)}[input-icon][dir=rtl]{border-left:none;border-right:1px solid transparent}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}";

registerThemePropertiesLoader("@ui5/webcomponents-theme-base", "sap_fiori_3", () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => defaultTheme);
const datePickerPopoverCss = "[ui5-calendar]{width:100%}";

/**
 * @public
 */
const metadata = {
	tag: "ui5-date-picker",
	altTag: "ui5-datepicker",
	managedSlots: true,
	properties: /** @lends  sap.ui.webcomponents.main.DatePicker.prototype */ {
		/**
		 * Defines a formatted date value.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		value: {
			type: String,
		},

		/**
		 * Defines the value state of the <code>ui5-date-picker</code>.
		 * <br><br>
		 * Available options are:
		 * <ul>
		 * <li><code>None</code></li>
		 * <li><code>Error</code></li>
		 * <li><code>Warning</code></li>
		 * <li><code>Success</code></li>
		 * <li><code>Information</code></li>
		 * </ul>
		 *
		 * @type {ValueState}
		 * @defaultvalue "None"
		 * @public
		 */
		valueState: {
			type: ValueState,
			defaultValue: ValueState.None,
		},

		/**
		 * Defines whether the <code>ui5-date-picker</code> is required.
		 *
		 * @since 1.0.0-rc.9
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		required: {
			type: Boolean,
		},

		/**
		 * Determines whether the <code>ui5-date-picker</code> is displayed as disabled.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		disabled: {
			type: Boolean,
		},

		/**
		 * Determines whether the <code>ui5-date-picker</code> is displayed as read-only.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 */
		readonly: {
			type: Boolean,
		},

		/**
		 * Defines a short hint, intended to aid the user with data entry when the
		 * <code>ui5-date-picker</code> has no value.
		 *
		 * <br><br>
		 * <b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
		 * Passing an empty string as the value of this property will make the <code>ui5-date-picker</code> appear empty - without placeholder or format pattern.
		 *
		 * @type {string}
		 * @defaultvalue undefined
		 * @public
		 */
		placeholder: {
			type: String,
			defaultValue: undefined,
		},

		/**
		 * Determines the name with which the <code>ui5-date-picker</code> will be submitted in an HTML form.
		 *
		 * <br><br>
		 * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
		 * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
		 *
		 * <br><br>
		 * <b>Note:</b> When set, a native <code>input</code> HTML element
		 * will be created inside the <code>ui5-date-picker</code> so that it can be submitted as
		 * part of an HTML form. Do not use this property unless you need to submit a form.
		 *
		 * @type {string}
		 * @defaultvalue ""
		 * @public
		 */
		name: {
			type: String,
		},

		/**
		 * Defines the visibility of the week numbers column.
		 * <br><br>
		 *
		 * <b>Note:<b> For calendars other than Gregorian,
		 * the week numbers are not displayed regardless of what is set.
		 *
		 * @type {boolean}
		 * @defaultvalue false
		 * @public
		 * @since 1.0.0-rc.8
		 */
		hideWeekNumbers: {
			type: Boolean,
		},

		/**
		 * Defines the aria-label attribute for the <code>ui5-date-picker</code>.
		 *
		 * @type {String}
		 * @since 1.0.0-rc.9
		 * @private
		 * @defaultvalue ""
		 */
		ariaLabel: {
			type: String,
		},

		/**
		 * Receives id(or many ids) of the elements that label the <code>ui5-date-picker</code>.
		 *
		 * @type {String}
		 * @defaultvalue ""
		 * @private
		 * @since 1.0.0-rc.9
		 */
		ariaLabelledby: {
			type: String,
			defaultValue: "",
		},

		_isPickerOpen: {
			type: Boolean,
			noAttribute: true,
		},

		_respPopoverConfig: {
			type: Object,
		},

		_calendarCurrentPicker: {
			type: String,
			defaultValue: "day",
		},
	},

	slots: /** @lends  sap.ui.webcomponents.main.DatePicker.prototype */ {
		/**
		 * Defines the value state message that will be displayed as pop up under the <code>ui5-date-picker</code>.
		 * <br><br>
		 *
		 * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
		 * <br>
		 * <b>Note:</b> The <code>valueStateMessage</code> would be displayed,
		 * when the <code>ui5-date-picker</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
		 * @type {HTMLElement}
		 * @since 1.0.0-rc.7
		 * @slot
		 * @public
		 */
		valueStateMessage: {
			type: HTMLElement,
		},

		/**
		 * The slot is used to render native <code>input</code> HTML element within Light DOM to enable form submit,
		 * when <code>name</code> property is set.
		 * @type {HTMLElement[]}
		 * @slot
		 * @private
		 */
		formSupport: {
			type: HTMLElement,
		},
	},

	events: /** @lends  sap.ui.webcomponents.main.DatePicker.prototype */ {

		/**
		 * Fired when the input operation has finished by pressing Enter or on focusout.
		 *
		 * @event
		 * @public
		*/
		change: {},

		/**
		 * Fired when the value of the <code>ui5-date-picker</code> is changed at each key stroke.
		 *
		 * @event
		 * @public
		*/
		input: {},
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-date-picker</code> component provides an input field with assigned calendar which opens on user action.
 * The <code>ui5-date-picker</code> allows users to select a localized date using touch,
 * mouse, or keyboard input. It consists of two parts: the date input field and the
 * date picker.
 *
 * <h3>Usage</h3>
 *
 * The user can enter a date by:
 * <ul>
 * <li>Using the calendar that opens in a popup</li>
 * <li>Typing it in directly in the input field</li>
 * </ul>
 * <br><br>
 * When the user makes an entry and chooses the enter key, the calendar shows the corresponding date.
 * When the user directly triggers the calendar display, the actual date is displayed.
 *
 * <h3>Formatting</h3>
 *
 * If a date is entered by typing it into
 * the input field, it must fit to the used date format.
 * <br><br>
 * Supported format options are pattern-based on Unicode LDML Date Format notation.
 * For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>.
 * <br><br>
 * For example, if the <code>format-pattern</code> is "yyyy-MM-dd",
 * a valid value string is "2015-07-30" and the same is displayed in the input.
 *
 * <h3>Keyboard Handling</h3>
 * The <code>ui5-date-picker</code> provides advanced keyboard handling.
 * If the <code>ui5-date-picker</code> is focused,
 * you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys.
 * Once the drop-down is opened, you can use the <code>UP</code>, <code>DOWN</code>, <code>LEFT</code>, <code>RIGHT</code> arrow keys
 * to navigate through the dates and select one by pressing the <code>Space</code> or <code>Enter</code> keys. Moreover you can
 * use TAB to reach the buttons for changing month and year.
 * <br>
 *
 * If the <code>ui5-date-picker</code> is focused and the picker dialog is not opened the user can
 * increment or decrement the corresponding field of the JS date object referenced by <code>dateValue</code> propery
 * by using the following shortcuts:
 * <br>
 * <ul>
 * <li>[PAGEDOWN] - Decrements the corresponding day of the month by one</li>
 * <li>[SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one</li>
 * <li>[SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one</li>
 * <li>[PAGEUP] - Increments the corresponding day of the month by one</li>
 * <li>[SHIFT] + [PAGEUP] - Increments the corresponding month by one</li>
 * <li>[SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one</li>
 * </ul>
 *
 * <h3>Calendar types</h3>
 * The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
 * By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
 * you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules:
 * <br><br>
 *
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code>
 * <br><br>
 *
 * Or, you can use the global configuration and set the <code>calendarType</code> key:
 * <br>
 * <pre><code>&lt;script data-id="sap-ui-config" type="application/json"&gt;
 * {
 *	"calendarType": "Japanese"
 * }
 * &lt;/script&gt;
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/DatePicker";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.DatePicker
 * @extends DateComponentBase
 * @tagname ui5-date-picker
 * @public
 */
class DatePicker extends DateComponentBase {
	static get metadata() {
		return metadata;
	}

	static get template() {
		return main$1;
	}

	static get staticAreaTemplate() {
		return main;
	}

	static get styles() {
		return datePickerCss;
	}

	static get staticAreaStyles() {
		return [ResponsivePopoverCommonCss, datePickerPopoverCss];
	}

	/**
	 * @protected
	 */
	onResponsivePopoverAfterClose() {
		this._isPickerOpen = false;
		if (isPhone()) {
			this.blur(); // close device's keyboard and prevent further typing
		} else if (this._focusInputAfterClose) {
			this._getInput().focus();
			this._focusInputAfterClose = false;
		}
	}

	onBeforeRendering() {
		["minDate", "maxDate"].forEach(prop => {
			if (this[prop] && !this.isValid(this[prop])) {
				console.warn(`Invalid value for property "${prop}": ${this[prop]} is not compatible with the configured format pattern: "${this._displayFormat}"`); // eslint-disable-line
			}
		});

		const FormSupport = getFeature("FormSupport");
		if (FormSupport) {
			FormSupport.syncNativeHiddenInput(this);
		} else if (this.name) {
			console.warn(`In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`); // eslint-disable-line
		}
	}

	/**
	 * Override in derivatives to change calendar selection mode
	 * @returns {string}
	 * @protected
	 */
	get _calendarSelectionMode() {
		return "Single";
	}

	/**
	 * Used to provide a timestamp to the Calendar (to focus it to a relevant date when open) based on the component's state
	 * Override in derivatives to provide the calendar a timestamp based on their properties
	 * By default focus the calendar on the selected date if set, or the current day otherwise
	 * @protected
	 */
	get _calendarTimestamp() {
		if (this.value && this._checkValueValidity(this.value)) {
			const millisecondsUTC = this.dateValueUTC.getTime();
			return getRoundedTimestamp(millisecondsUTC);
		}

		return getTodayUTCTimestamp(this._primaryCalendarType);
	}

	/**
	 * Used to provide selectedDates to the calendar based on the component's state
	 * Override in derivatives to provide different rules for setting the calendar's selected dates
	 * @protected
	 */
	get _calendarSelectedDates() {
		if (this.value && this._checkValueValidity(this.value)) {
			return [this.value];
		}

		return [];
	}

	_onkeydown(event) {
		if (isShow(event)) {
			event.preventDefault(); // Prevent scroll on Alt/Option + Arrow Up/Down
			if (this.isOpen()) {
				if (!isF4(event)) {
					this._toggleAndFocusInput();
				}
			} else {
				this._toggleAndFocusInput();
			}
		}

		if (this.isOpen()) {
			return;
		}

		if (isPageUpShiftCtrl(event)) {
			event.preventDefault();
			this._modifyDateValue(1, "year");
		} else if (isPageUpShift(event)) {
			event.preventDefault();
			this._modifyDateValue(1, "month");
		} else if (isPageUp(event)) {
			event.preventDefault();
			this._modifyDateValue(1, "day");
		} else if (isPageDownShiftCtrl(event)) {
			event.preventDefault();
			this._modifyDateValue(-1, "year");
		} else if (isPageDownShift(event)) {
			event.preventDefault();
			this._modifyDateValue(-1, "month");
		} else if (isPageDown(event)) {
			event.preventDefault();
			this._modifyDateValue(-1, "day");
		}
	}

	/**
	 *
	 * @param amount
	 * @param unit
	 * @protected
	 */
	_modifyDateValue(amount, unit) {
		if (!this.dateValue) {
			return;
		}

		const modifiedDate = modifyDateBy(CalendarDate$1.fromLocalJSDate(this.dateValue), amount, unit, this._minDate, this._maxDate);
		const newValue = this.formatValue(modifiedDate.toUTCJSDate());
		this._updateValueAndFireEvents(newValue, true, ["change", "value-changed"]);
	}

	_updateValueAndFireEvents(value, normalizeValue, events) {
		const valid = this._checkValueValidity(value);
		if (valid && normalizeValue) {
			value = this.normalizeValue(value); // transform valid values (in any format) to the correct format
		}

		this.value = value;
		this._updateValueState(); // Change the value state to Error/None, but only if needed
		events.forEach(event => {
			this.fireEvent(event, { value, valid });
		});
	}

	_updateValueState() {
		const isValid = this._checkValueValidity(this.value);
		if (!isValid) { // If not valid - always set Error regardless of the current value state
			this.valueState = ValueState.Error;
		} else if (isValid && this.valueState === ValueState.Error) { // However if valid, change only Error (but not the others) to None
			this.valueState = ValueState.None;
		}
	}

	_toggleAndFocusInput() {
		this.togglePicker();
		this._getInput().focus();
	}

	_getInput() {
		return this.shadowRoot.querySelector("[ui5-input]");
	}

	/**
	 * The ui5-input "submit" event handler - fire change event when the user presses enter
	 * @protected
	 */
	_onInputSubmit(event) {}

	/**
	 * The ui5-input "change" event handler - fire change event when the user focuses out of the input
	 * @protected
	 */
	_onInputChange(event) {
		this._updateValueAndFireEvents(event.target.value, true, ["change", "value-changed"]);
	}

	/**
	 * The ui5-input "input" event handler - fire input even when the user types
	 * @protected
	 */
	async _onInputInput(event) {
		this._updateValueAndFireEvents(event.target.value, false, ["input"]);
	}

	/**
	 * @protected
	 */
	_checkValueValidity(value) {
		if (value === "") {
			return true;
		}
		return this.isValid(value) && this.isInValidRange(value);
	}

	_click(event) {
		if (isPhone()) {
			this.responsivePopover.open(this);
			event.preventDefault(); // prevent immediate selection of any item
		}
	}

	/**
	 * Checks if a value is valid against the current date format of the DatePicker.
	 * @param {string} value A value to be tested against the current date format
	 * @public
	 */
	isValid(value = "") {
		if (value === "") {
			return true;
		}

		return !!this.getFormat().parse(value);
	}

	/**
	 * Checks if a date is between the minimum and maximum date.
	 * @param {string} value
	 * @returns {boolean}
	 * @public
	 */
	isInValidRange(value = "") {
		if (value === "") {
			return true;
		}

		const calendarDate = this._getCalendarDateFromString(value);
		return calendarDate.valueOf() >= this._minDate.valueOf() && calendarDate.valueOf() <= this._maxDate.valueOf();
	}

	/**
	 * The parser understands many formats, but we need one format
	 * @protected
	 */
	normalizeValue(value) {
		if (value === "") {
			return value;
		}

		return this.getFormat().format(this.getFormat().parse(value, true), true); // it is important to both parse and format the date as UTC
	}

	get _displayFormat() {
		return this.getFormat().oFormatOptions.pattern;
	}

	/**
	 * @protected
	 */
	get _placeholder() {
		return this.placeholder !== undefined ? this.placeholder : this._displayFormat;
	}

	get _headerTitleText() {
		return this.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
	}

	get phone() {
		return isPhone();
	}

	get showHeader() {
		return this.phone;
	}

	get showFooter() {
		return this.phone;
	}

	get _isIE() {
		return isIE();
	}

	get accInfo() {
		return {
			"ariaRoledescription": this.dateAriaDescription,
			"ariaHasPopup": "true",
			"ariaAutoComplete": "none",
			"role": "combobox",
			"ariaOwns": `${this._id}-responsive-popover`,
			"ariaExpanded": this.isOpen(),
			"ariaRequired": this.required,
			"ariaLabel": getEffectiveAriaLabelText(this),
		};
	}

	get openIconTitle() {
		return this.i18nBundle.getText(DATEPICKER_OPEN_ICON_TITLE);
	}

	get openIconName() {
		return "appointment-2";
	}

	get dateAriaDescription() {
		return this.i18nBundle.getText(DATEPICKER_DATE_DESCRIPTION);
	}

	/**
	 * Defines whether the dialog on mobile should have header
	 * @private
	 */
	get _shouldHideHeader() {
		return false;
	}

	async _respPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem.querySelector("[ui5-responsive-popover]");
	}

	_canOpenPicker() {
		return !this.disabled && !this.readonly;
	}

	/**
	 * The user selected a new date in the calendar
	 * @param event
	 * @protected
	 */
	onSelectedDatesChange(event) {
		event.preventDefault();
		const newValue = event.detail.values && event.detail.values[0];
		this._updateValueAndFireEvents(newValue, true, ["change", "value-changed"]);

		this._focusInputAfterClose = true;
		this.closePicker();
	}

	/**
	 * Formats a Java Script date object into a string representing a locale date
	 * according to the <code>formatPattern</code> property of the DatePicker instance
	 * @param {object} oDate A Java Script date object to be formatted as string
	 * @returns {string} The date as string
	 * @public
	 */
	formatValue(oDate) {
		return this.getFormat().format(oDate);
	}

	/**
	 * Closes the picker.
	 * @public
	 */
	closePicker() {
		this.responsivePopover.close();
	}

	/**
	 * Opens the picker.
	 * @public
	 * @async
	 * @returns {Promise} Resolves when the picker is open
	 */
	async openPicker() {
		this._isPickerOpen = true;
		this._calendarCurrentPicker = "day";
		this.responsivePopover = await this._respPopover();

		this.responsivePopover.open(this);
	}

	togglePicker() {
		if (this.isOpen()) {
			this.closePicker();
		} else if (this._canOpenPicker()) {
			this.openPicker();
		}
	}

	/**
	 * Checks if the picker is open.
	 * @returns {boolean} true if the picker is open, false otherwise
	 * @public
	 */
	isOpen() {
		return !!this._isPickerOpen;
	}

	/**
	 * Currently selected date represented as a Local JavaScript Date instance.
	 *
	 * @readonly
	 * @type { Date }
	 * @public
	 */
	get dateValue() {
		return this.getFormat().parse(this.value);
	}

	get dateValueUTC() {
		return this.getFormat().parse(this.value, true);
	}

	get styles() {
		return {
			main: {
				width: "100%",
			},
		};
	}

	get type() {
		return InputType.Text;
	}

	static get dependencies() {
		return [
			Icon,
			ResponsivePopover,
			Calendar,
			CalendarDate,
			Input,
			Button,
		];
	}
}

DatePicker.define();

export { registerLocaleDataLoader as r };
