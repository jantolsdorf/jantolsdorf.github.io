import { q as registerI18nLoader, t as registerIconLoader } from './Icons-85d4abff.js';

const importMessageBundle = async (localeId) => {
		switch (localeId) {
			case "ar": return (await import('./messagebundle_ar-1b450ca8.js')).default;
		case "bg": return (await import('./messagebundle_bg-e5dcd265.js')).default;
		case "ca": return (await import('./messagebundle_ca-c20d0f6c.js')).default;
		case "cs": return (await import('./messagebundle_cs-d993aef4.js')).default;
		case "cy": return (await import('./messagebundle_cy-d4accb45.js')).default;
		case "da": return (await import('./messagebundle_da-0946c5a4.js')).default;
		case "de": return (await import('./messagebundle_de-eb22bbac.js')).default;
		case "el": return (await import('./messagebundle_el-98cb2acf.js')).default;
		case "en": return (await import('./messagebundle_en-e4df2e86.js')).default;
		case "en_GB": return (await import('./messagebundle_en_GB-04b5bed0.js')).default;
		case "en_US_sappsd": return (await import('./messagebundle_en_US_sappsd-d054f921.js')).default;
		case "en_US_saprigi": return (await import('./messagebundle_en_US_saprigi-b1e3d9a7.js')).default;
		case "en_US_saptrc": return (await import('./messagebundle_en_US_saptrc-ff95127b.js')).default;
		case "es": return (await import('./messagebundle_es-f8cb6cc7.js')).default;
		case "es_MX": return (await import('./messagebundle_es_MX-5b7d48e5.js')).default;
		case "et": return (await import('./messagebundle_et-edbd8965.js')).default;
		case "fi": return (await import('./messagebundle_fi-a4a63b20.js')).default;
		case "fr": return (await import('./messagebundle_fr-9ecdf620.js')).default;
		case "fr_CA": return (await import('./messagebundle_fr_CA-b550be43.js')).default;
		case "hi": return (await import('./messagebundle_hi-949c3a15.js')).default;
		case "hr": return (await import('./messagebundle_hr-85f63a6e.js')).default;
		case "hu": return (await import('./messagebundle_hu-847aec71.js')).default;
		case "in": return (await import('./messagebundle_in-214759f9.js')).default;
		case "it": return (await import('./messagebundle_it-59c3cbc2.js')).default;
		case "iw": return (await import('./messagebundle_iw-efb8e7df.js')).default;
		case "ja": return (await import('./messagebundle_ja-13731cef.js')).default;
		case "kk": return (await import('./messagebundle_kk-dc8ea99a.js')).default;
		case "ko": return (await import('./messagebundle_ko-af714a78.js')).default;
		case "lt": return (await import('./messagebundle_lt-000c9e91.js')).default;
		case "lv": return (await import('./messagebundle_lv-dedf3b80.js')).default;
		case "ms": return (await import('./messagebundle_ms-25189c5a.js')).default;
		case "nl": return (await import('./messagebundle_nl-1fda8e96.js')).default;
		case "no": return (await import('./messagebundle_no-6e4fafc3.js')).default;
		case "pl": return (await import('./messagebundle_pl-3768233f.js')).default;
		case "pt": return (await import('./messagebundle_pt-bf3424ef.js')).default;
		case "pt_PT": return (await import('./messagebundle_pt_PT-1724ddbe.js')).default;
		case "ro": return (await import('./messagebundle_ro-011ed456.js')).default;
		case "ru": return (await import('./messagebundle_ru-e9721c1e.js')).default;
		case "sh": return (await import('./messagebundle_sh-998081d4.js')).default;
		case "sk": return (await import('./messagebundle_sk-c50c4d38.js')).default;
		case "sl": return (await import('./messagebundle_sl-f3a391cc.js')).default;
		case "sv": return (await import('./messagebundle_sv-ff2200b4.js')).default;
		case "th": return (await import('./messagebundle_th-9969ab70.js')).default;
		case "tr": return (await import('./messagebundle_tr-54931056.js')).default;
		case "uk": return (await import('./messagebundle_uk-78a3569a.js')).default;
		case "vi": return (await import('./messagebundle_vi-1265035f.js')).default;
		case "zh_CN": return (await import('./messagebundle_zh_CN-12f8d584.js')).default;
		case "zh_TW": return (await import('./messagebundle_zh_TW-19bd1faa.js')).default;
			default: throw "unknown locale"
		}
	};

	const importAndCheck = async (localeId) => {
		const data = await importMessageBundle(localeId);
		if (typeof data === "string" && data.endsWith(".json")) {
			throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
		}
		return data;
	};

	const localeIds = ["ar",
	"bg",
	"ca",
	"cs",
	"cy",
	"da",
	"de",
	"el",
	"en",
	"en_GB",
	"en_US_sappsd",
	"en_US_saprigi",
	"en_US_saptrc",
	"es",
	"es_MX",
	"et",
	"fi",
	"fr",
	"fr_CA",
	"hi",
	"hr",
	"hu",
	"in",
	"it",
	"iw",
	"ja",
	"kk",
	"ko",
	"lt",
	"lv",
	"ms",
	"nl",
	"no",
	"pl",
	"pt",
	"pt_PT",
	"ro",
	"ru",
	"sh",
	"sk",
	"sl",
	"sv",
	"th",
	"tr",
	"uk",
	"vi",
	"zh_CN",
	"zh_TW",];

	localeIds.forEach(localeId => {
		registerI18nLoader("@ui5/webcomponents-icons", localeId, importAndCheck);
	});

const loadIconsBundle = async () => {
    const iconData = (await import('./SAP-icons-2266557e.js')).default;
    if (typeof iconData === "string" && iconData.endsWith(".json")) {
        throw new Error("[icons] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use `import \"@ui5/webcomponents-icons/dist/Assets-static.js\". Check the \"Assets\" documentation for more information.");
    }
    return iconData;
};

registerIconLoader("SAP-icons", loadIconsBundle);
