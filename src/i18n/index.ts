import { createMemo, createSignal } from 'solid-js';
import * as i18n from '@solid-primitives/i18n';
import en from './en';
import zh from './zh';
import { getCookie } from '../utils';

const languages = {
    aa: 'Afar',
    ab: 'Аҧсуа',
    af: 'Afrikaans',
    ak: 'Akana',
    am: 'አማርኛ',
    an: 'Aragonés',
    ar: 'العربية',
    as: 'অসমীয়া',
    av: 'Авар',
    ay: 'Aymar',
    az: 'Azərbaycanca / آذربايجان',
    ba: 'Башҡорт',
    be: 'Беларуская',
    bg: 'Български',
    bh: 'भोजपुरी',
    bi: 'Bislama',
    bm: 'Bamanankan',
    bn: 'বাংলা',
    bo: 'བོད་ཡིག / Bod skad',
    br: 'Brezhoneg',
    bs: 'Bosanski',
    ca: 'Català',
    ce: 'Нохчийн',
    ch: 'Chamoru',
    co: 'Corsu',
    cr: 'Nehiyaw',
    cs: 'Česky',
    cu: 'словѣньскъ / slověnĭskŭ',
    cv: 'Чăваш',
    cy: 'Cymraeg',
    da: 'Dansk',
    de: 'Deutsch',
    dv: 'ދިވެހިބަސް',
    dz: 'ཇོང་ཁ',
    ee: 'Ɛʋɛ',
    el: 'Ελληνικά',
    en: 'English',
    eo: 'Esperanto',
    es: 'Español',
    et: 'Eesti',
    eu: 'Euskara',
    fa: 'فارسی',
    ff: 'Fulfulde',
    fi: 'Suomi',
    fj: 'Na Vosa Vakaviti',
    fo: 'Føroyskt',
    fr: 'Français',
    fy: 'Frysk',
    ga: 'Gaeilge',
    gd: 'Gàidhlig',
    gl: 'Galego',
    gn: "Avañe'ẽ",
    gu: 'ગુજરાતી',
    gv: 'Gaelg',
    ha: 'هَوُسَ',
    he: 'עברית',
    hi: 'हिन्दी',
    ho: 'Hiri Motu',
    hr: 'Hrvatski',
    ht: 'Krèyol ayisyen',
    hu: 'Magyar',
    hy: 'Հայերեն',
    hz: 'Otsiherero',
    ia: 'Interlingua',
    id: 'Bahasa Indonesia',
    ie: 'Interlingue',
    ig: 'Igbo',
    ii: 'ꆇꉙ / 四川彝语',
    ik: 'Iñupiak',
    io: 'Ido',
    is: 'Íslenska',
    it: 'Italiano',
    iu: 'ᐃᓄᒃᑎᑐᑦ',
    ja: '日本語',
    jv: 'Basa Jawa',
    ka: 'ქართული',
    kg: 'KiKongo',
    ki: 'Gĩkũyũ',
    kj: 'Kuanyama',
    kk: 'Қазақша',
    kl: 'Kalaallisut',
    km: 'ភាសាខ្មែរ',
    kn: 'ಕನ್ನಡ',
    ko: '한국어',
    kr: 'Kanuri',
    ks: 'कश्मीरी / كشميري',
    ku: 'Kurdî / كوردی',
    kv: 'Коми',
    kw: 'Kernewek',
    ky: 'Kırgızca / Кыргызча',
    la: 'Latina',
    lb: 'Lëtzebuergesch',
    lg: 'Luganda',
    li: 'Limburgs',
    ln: 'Lingála',
    lo: 'ລາວ / Pha xa lao',
    lt: 'Lietuvių',
    lu: 'Tshiluba',
    lv: 'Latviešu',
    mg: 'Malagasy',
    mh: 'Kajin Majel / Ebon',
    mi: 'Māori',
    mk: 'Македонски',
    ml: 'മലയാളം',
    mn: 'Монгол',
    mo: 'Moldovenească',
    mr: 'मराठी',
    ms: 'Bahasa Melayu',
    mt: 'bil-Malti',
    my: 'မြန်မာစာ',
    na: 'Dorerin Naoero',
    nb: 'Norsk bokmål',
    nd: 'Sindebele',
    ne: 'नेपाली',
    ng: 'Oshiwambo',
    nl: 'Nederlands',
    nn: 'Norsk nynorsk',
    no: 'Norsk',
    nr: 'isiNdebele',
    nv: 'Diné bizaad',
    ny: '?Chi-Chewa',
    oc: 'Occitan',
    oj: 'ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin',
    om: 'Oromoo',
    or: 'ଓଡ଼ିଆ',
    os: 'Иронау',
    pa: 'ਪੰਜਾਬੀ / पंजाबी / پنجابي',
    pi: 'Pāli / पाऴि',
    pl: 'Polski',
    ps: 'پښتو',
    pt: 'Português',
    qu: 'Runa Simi',
    rm: 'Rumantsch',
    rn: 'Kirundi',
    ro: 'Română',
    ru: 'Русский',
    rw: 'Kinyarwandi',
    sa: 'संस्कृतम्',
    sc: 'Sardu',
    sd: 'सिनधि',
    se: 'Sámegiella',
    sg: 'Sängö',
    sh: 'Srpskohrvatski / Српскохрватски',
    si: 'සිංහල',
    sk: 'Slovenčina',
    sl: 'Slovenščina',
    sm: 'Gagana Samoa',
    sn: 'chiShona',
    so: 'Soomaaliga',
    sq: 'Shqip',
    sr: 'Српски',
    ss: 'SiSwati',
    st: 'Sesotho',
    su: 'Basa Sunda',
    sv: 'Svenska',
    sw: 'Kiswahili',
    ta: 'தமிழ்',
    te: 'తెలుగు',
    tg: 'Тоҷикӣ',
    th: 'ไทย / Phasa Thai',
    ti: 'ትግርኛ',
    tk: 'Туркмен / تركمن',
    tl: 'Tagalog',
    tn: 'Setswana',
    to: 'Lea Faka-Tonga',
    tr: 'Türkçe',
    ts: 'Xitsonga',
    tt: 'Tatarça',
    tw: 'Twi',
    ty: 'Reo Mā`ohi',
    ug: 'Uyƣurqə / ئۇيغۇرچە',
    uk: 'Українська',
    ur: 'اردو',
    uz: 'Ўзбек',
    ve: 'Tshivenḓa',
    vi: 'Tiếng Việt',
    vo: 'Volapük',
    wa: 'Walon',
    wo: 'Wollof',
    xh: 'isiXhosa',
    yi: 'ייִדיש',
    yo: 'Yorùbá',
    za: 'Cuengh / Tôô / 壮语',
    zh: '中文',
    zu: 'isiZulu',
};

const supportedLanguages: { name: string; value: Locale }[] = (<Locale[]>[
    'en',
    'zh',
]).map((lang) => ({ name: languages[lang], value: lang }));

const dictionaries = {
    en,
    zh,
};

export type Locale = keyof typeof dictionaries;
type RawDictionary = typeof en;
type Dictionary = i18n.Flatten<RawDictionary>;

const [locale, setLocale] = createSignal<Locale>('en');

export { setLocale, supportedLanguages };

export const languageName = () =>
    createMemo(() => languages[locale()] ?? 'Unknown');

export const translator = () =>
    createMemo(() => {
        const d = i18n.flatten<Dictionary>(dictionaries[locale()]);
        return i18n.translator(() => d);
    });

export const templateTranslator = () =>
    createMemo(() => {
        const d = i18n.flatten<Dictionary>(dictionaries[locale()]);
        return i18n.translator(() => d, i18n.resolveTemplate);
    });

function getBrowserLanguage() {
    const lang = window.navigator.language;
    if (lang) {
        return lang.toLowerCase().split(/[-_]/)[0];
    }
    return 'en';
}

export function initLanguage() {
    const lang = getCookie('language') ?? getBrowserLanguage();
    if (lang in dictionaries) {
        setLocale(lang as Locale);
    } else {
        setLocale('en');
    }
}
