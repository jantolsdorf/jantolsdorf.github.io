import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-dee1f973.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-bd0bf1dc.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"trusd-piiq-com-wizard\",[[2,\"trusd-piiq-com-wizard\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"wizard\":[16],\"update\":[32],\"componentDidLoad\":[32]}]]],[\"trusd-piiq-com-planned-processing-overview\",[[2,\"trusd-piiq-com-planned-processing-overview\",{\"history\":[16],\"match\":[8],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"dataBasket\":[16],\"formAddPersonalData\":[32],\"formAddDataSubjects\":[32],\"formWidgetOutdatedData\":[32],\"modalDownloadPersonalDataShowPassword\":[32],\"formTabPaneState\":[32],\"formMessagesPaneContactsSelected\":[32],\"formMessageNew\":[32],\"formWidgetForwardingPersonalDataByRecipient\":[32]},[[0,\"sendNewMessage\",\"onSendNewMessageHandler\"]]]]],[\"trusd-piiq-com-app-root\",[[2,\"trusd-piiq-com-app-root\",{\"history\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"initialUrl\":[1,\"initial-url\"],\"data\":[16],\"isReachableHostBasePath\":[32],\"update\":[32]}]]],[\"trusd-piiq-com-data-basket-permission-step-1\",[[2,\"trusd-piiq-com-data-basket-permission-step-1\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[16],\"processingRecords\":[32],\"filterSearchProcessingRecords\":[32],\"purposeSelection\":[32],\"update\":[32]},[[0,\"selection-change\",\"itemClickHandler\"],[0,\"item-delete\",\"itemDeleteHandler\"]]]]],[\"trusd-piiq-com-processing-detail\",[[2,\"trusd-piiq-com-processing-detail\",{\"history\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[32]}]]],[\"trusd-piiq-page-new-data-basket\",[[2,\"trusd-piiq-page-new-data-basket\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[32],\"update\":[32]}]]],[\"trusd-piiq-page-new-data-basket-permission\",[[2,\"trusd-piiq-page-new-data-basket-permission\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[32],\"update\":[32]}]]],[\"com-notes\",[[2,\"com-notes\",{\"note\":[32],\"edited_by\":[32],\"last_edited\":[32],\"tmpNote\":[32]}]]],[\"context-consumer\",[[0,\"context-consumer\",{\"context\":[16],\"renderer\":[16],\"subscribe\":[16],\"unsubscribe\":[32]}]]],[\"stencil-async-content\",[[0,\"stencil-async-content\",{\"documentLocation\":[1,\"document-location\"],\"content\":[32]}]]],[\"stencil-router-prompt\",[[0,\"stencil-router-prompt\",{\"when\":[4],\"message\":[1],\"history\":[16],\"unblock\":[32]}]]],[\"stencil-router-redirect\",[[0,\"stencil-router-redirect\",{\"history\":[16],\"root\":[1],\"url\":[1]}]]],[\"trusd-com-circle-progress-bar\",[[2,\"trusd-com-circle-progress-bar\",{\"ProgressMax\":[2,\"progress-max\"],\"ProgressCurrent\":[2,\"progress-current\"],\"Label\":[1,\"label\"],\"Type\":[1,\"type\"],\"progressAmount\":[1,\"progress-amount\"],\"ProgressColor\":[1,\"progress-color\"]}]]],[\"trusd-piiq-com-data-basket-permission-step-2\",[[2,\"trusd-piiq-com-data-basket-permission-step-2\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"selectedDataCategory\":[32],\"selectedData\":[32],\"searchTerms\":[32],\"selectedDataBeforeEdit\":[32],\"dataTemplates\":[32],\"tmpDataSets\":[32],\"dataSets\":[32],\"selectedDataSet\":[32],\"favoredPersons\":[32],\"editActive\":[32],\"selectedProcessing\":[32],\"selectedPersonCategorie\":[32],\"seachString\":[32],\"selectedTemplateBeforeEdit\":[32],\"isPersonTableSelectAll\":[32]}]]],[\"trusd-piiq-com-data-basket-permission-step-3\",[[2,\"trusd-piiq-com-data-basket-permission-step-3\",{\"history\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[16]}]]],[\"trusd-piiq-page-404\",[[2,\"trusd-piiq-page-404\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[32],\"update\":[32]}]]],[\"trusd-piiq-page-credits\",[[2,\"trusd-piiq-page-credits\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[32],\"update\":[32]}]]],[\"trusd-piiq-page-help\",[[2,\"trusd-piiq-page-help\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"data\":[32],\"update\":[32]}]]],[\"trusd-tooltip\",[[2,\"trusd-tooltip\",{\"arrow\":[1],\"error\":[4],\"text\":[1]}]]],[\"trusd-com-circle-progress-bar-small\",[[2,\"trusd-com-circle-progress-bar-small\",{\"ProgressMax\":[2,\"progress-max\"],\"ProgressCurrent\":[2,\"progress-current\"],\"Label\":[1,\"label\"],\"Type\":[1,\"type\"],\"progressAmount\":[1,\"progress-amount\"],\"ProgressColor\":[1,\"progress-color\"]}]]],[\"trusd-piiq-com-lawfulness-simple-text\",[[2,\"trusd-piiq-com-lawfulness-simple-text\",{\"Lawfulness\":[16]}]]],[\"trusd-piiq-com-data-basket-step-3\",[[2,\"trusd-piiq-com-data-basket-step-3\",{\"history\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"dataBasket\":[16],\"formReccommendedByDataBasket\":[32],\"formRadioBtnUpdatePII\":[32],\"formWidgetIsProcessingAllowed\":[32],\"formWidgetMissingData\":[32],\"formWidgetOutdatedData\":[32],\"formSearchStringContacts\":[32],\"filterNameDataSubjects\":[32]}]]],[\"trusd-piiq-com-data-basket-step-2\",[[2,\"trusd-piiq-com-data-basket-step-2\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"dataBasket\":[16],\"tmpSelectedPII\":[32],\"tmpSelectedDataSubjects\":[32],\"selectedDataCategory\":[32],\"selectedData\":[32],\"searchTerms\":[32],\"dataTemplates\":[32],\"tmpDataSets\":[32],\"dataSets\":[32],\"selectedProcessing\":[32],\"selectedTemplateBeforeEdit\":[32],\"isCheckingAvailability\":[32]},[[0,\"trusdPiiqSelectedDataChanged\",\"trusdPiiqSelectedDataChangedHandler\"],[0,\"trusdPiiqSelectedDataSubjectsChanged\",\"trusdPiiqSelectedDataSubjectsChangedHandler\"]]]]],[\"trusd-piiq-com-data-basket-import-edit\",[[2,\"trusd-piiq-com-data-basket-import-edit\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"dataBasket\":[16],\"formWidgetOutdatedData\":[32],\"formTabPaneState\":[32],\"formMessageSelectedContact\":[32],\"formMessageNew\":[32]}]]],[\"trusd-piiq-com-data-basket-grid\",[[2,\"trusd-piiq-com-data-basket-grid\",{\"history\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"DataBaskets\":[16],\"Columns\":[2,\"columns\"],\"renderDataBaskets\":[32],\"filterTextSearch\":[32],\"filterState\":[32],\"filterStatus\":[32]}]]],[\"trusd-piiq-com-data-basket-step-1\",[[2,\"trusd-piiq-com-data-basket-step-1\",{\"history\":[16],\"match\":[16],\"HostBasePath\":[1,\"host-base-path\"],\"baseUrl\":[1,\"base-url\"],\"dataBasket\":[16],\"processingRecords\":[32],\"filterSearchProcessingRecords\":[32],\"update\":[32]},[[0,\"selection-change\",\"itemClickHandler\"],[0,\"item-delete\",\"itemDeleteHandler\"]]]]],[\"stencil-route\",[[0,\"stencil-route\",{\"group\":[513],\"componentUpdated\":[16],\"match\":[1040],\"url\":[1],\"component\":[1],\"componentProps\":[16],\"exact\":[4],\"routeRender\":[16],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"routeViewsUpdated\":[16],\"location\":[16],\"history\":[16],\"historyType\":[1,\"history-type\"]}]]],[\"stencil-route-link\",[[4,\"stencil-route-link\",{\"url\":[1],\"urlMatch\":[1,\"url-match\"],\"activeClass\":[1,\"active-class\"],\"exact\":[4],\"strict\":[4],\"custom\":[1],\"anchorClass\":[1,\"anchor-class\"],\"anchorRole\":[1,\"anchor-role\"],\"anchorTitle\":[1,\"anchor-title\"],\"anchorTabIndex\":[1,\"anchor-tab-index\"],\"anchorId\":[1,\"anchor-id\"],\"history\":[16],\"location\":[16],\"root\":[1],\"ariaHaspopup\":[1,\"aria-haspopup\"],\"ariaPosinset\":[1,\"aria-posinset\"],\"ariaSetsize\":[2,\"aria-setsize\"],\"ariaLabel\":[1,\"aria-label\"],\"match\":[32]}]]],[\"stencil-route-switch\",[[4,\"stencil-route-switch\",{\"group\":[513],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"location\":[16],\"routeViewsUpdated\":[16]}]]],[\"stencil-route-title\",[[0,\"stencil-route-title\",{\"titleSuffix\":[1,\"title-suffix\"],\"pageTitle\":[1,\"page-title\"]}]]],[\"stencil-router\",[[4,\"stencil-router\",{\"root\":[1],\"historyType\":[1,\"history-type\"],\"titleSuffix\":[1,\"title-suffix\"],\"scrollTopOffset\":[2,\"scroll-top-offset\"],\"location\":[32],\"history\":[32]}]]],[\"trusd-piiq-com-activity-log\",[[2,\"trusd-piiq-com-activity-log\",{\"activities\":[16]}]]],[\"trusd-piiq-com-data-basket-personal-data-recipient-table\",[[2,\"trusd-piiq-com-data-basket-personal-data-recipient-table\",{\"dataBasket\":[16],\"formFilterNameDataSubjects\":[32],\"table\":[32],\"columns\":[32],\"rows\":[32]}]]],[\"trusd-piiq-com-lawfulness-icon\",[[2,\"trusd-piiq-com-lawfulness-icon\",{\"Lawfulness\":[16]}]]],[\"trusd-piiq-com-data-basket-step-0\",[[2,\"trusd-piiq-com-data-basket-step-0\",{\"data\":[32],\"formUploadStatus\":[32],\"formUploadProgress\":[32]}]]],[\"trusd-piiq-data-basket-widget\",[[2,\"trusd-piiq-data-basket-widget\",{\"history\":[16],\"dataBasket\":[16],\"ProgressDataBasket\":[2,\"progress-data-basket\"],\"Issues\":[2,\"issues\"],\"UnreadMessages\":[2,\"unread-messages\"],\"LastActivity\":[1,\"last-activity\"],\"DataBasketType\":[1,\"data-basket-type\"],\"TargetURL\":[1,\"target-u-r-l\"],\"update\":[32]}]]],[\"trusd-com-modal-window\",[[6,\"trusd-com-modal-window\",{\"open\":[4]}]]],[\"trusd-piiq-com-data-basket-pii-select\",[[2,\"trusd-piiq-com-data-basket-pii-select\",{\"dataCategory\":[16],\"dataBasket\":[16],\"preselectedPersonalData\":[16],\"selectedDataCategory\":[32],\"selectedData\":[32],\"customDataCategories\":[32],\"updateCounter\":[32],\"isFavoriteDataTemplate\":[32],\"dataTemplates\":[32],\"formModalTabPaneState\":[32],\"searchStringPII\":[32],\"formNewPII\":[32]}]]],[\"trusd-piiq-com-data-basket-select-data-and-subjects\",[[2,\"trusd-piiq-com-data-basket-select-data-and-subjects\",{\"dataBasket\":[16],\"dataSets\":[1040],\"selectedProcessing\":[1025,\"selected-processing\"],\"preselectedDataSubjects\":[16],\"preselectedPersonalData\":[16],\"tmpSelectedPII\":[32],\"tmpSelectedDataSubjects\":[32],\"selectedDataCategory\":[32],\"selectedData\":[32],\"searchTerms\":[32],\"dataTemplates\":[32],\"tmpDataSets\":[32],\"selectedTemplateBeforeEdit\":[32],\"isCheckingAvailability\":[32],\"checkPIIAvailability\":[64]},[[0,\"trusdPiiqSelectedDataChanged\",\"trusdPiiqSelectedDataChangedHandler\"],[0,\"trusdPiiqSelectedDataSubjectsChanged\",\"trusdPiiqSelectedDataSubjectsChangedHandler\"]]]]],[\"trusd-com-circle-icon\",[[6,\"trusd-com-circle-icon\",{\"BGCOLOR\":[1,\"b-g-c-o-l-o-r\"]}]]],[\"trusd-piiq-com-data-basket-data-subject-list\",[[2,\"trusd-piiq-com-data-basket-data-subject-list\",{\"dataBasket\":[16],\"hideSendMessage\":[4,\"hide-send-message\"],\"formRadioBtnDataSource\":[32],\"formRadioBtnUpdatePII\":[32],\"formWidgetIsProcessingAllowed\":[32],\"formWidgetMissingData\":[32],\"formWidgetOutdatedData\":[32]}]]],[\"trusd-piiq-com-data-basket-data-subject-select\",[[2,\"trusd-piiq-com-data-basket-data-subject-select\",{\"dataBasket\":[16],\"mode\":[1],\"preselectedDataSubjects\":[16],\"updateCounter\":[32],\"selectedDataSubjects\":[32],\"favoriteDataSubjects\":[32],\"searchStringDataSubjects\":[32],\"filterNameDataSubjects\":[32],\"filterRoleDataSubjects\":[32],\"filterFacultyDataSubject\":[32],\"isPersonTableSelectAll\":[32],\"formModalSelectedDataSubjects\":[32],\"formNewExternalDataSubject\":[32],\"formNewUnknownDataSubject\":[32],\"formModalTabPane\":[32]}]]]]"), options);
});
