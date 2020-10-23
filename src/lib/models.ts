// To parse this data:
//
//   import { Convert, AddToCart, AddToList, CategoryPageView, CheckoutStart, DetailProductView, HomePageView, ImageInteraction, ListView, OtherInteraction, PageVisit, PurchaseComplete, RateProduct, RecoRequest, RecoShow, RemoveFromCart, RemoveFromList, RemoveItem, CartPageView, SortItems, UnknownEvent, UpsertItem } from "./file";
//
//   const addToCart = Convert.toAddToCart(json);
//   const addToList = Convert.toAddToList(json);
//   const categoryPageView = Convert.toCategoryPageView(json);
//   const checkoutStart = Convert.toCheckoutStart(json);
//   const detailProductView = Convert.toDetailProductView(json);
//   const homePageView = Convert.toHomePageView(json);
//   const imageInteraction = Convert.toImageInteraction(json);
//   const listView = Convert.toListView(json);
//   const otherInteraction = Convert.toOtherInteraction(json);
//   const pageVisit = Convert.toPageVisit(json);
//   const purchaseComplete = Convert.toPurchaseComplete(json);
//   const rateProduct = Convert.toRateProduct(json);
//   const recoRequest = Convert.toRecoRequest(json);
//   const recoShow = Convert.toRecoShow(json);
//   const removeFromCart = Convert.toRemoveFromCart(json);
//   const removeFromList = Convert.toRemoveFromList(json);
//   const removeItem = Convert.toRemoveItem(json);
//   const cartPageView = Convert.toCartPageView(json);
//   const sortItems = Convert.toSortItems(json);
//   const unknownEvent = Convert.toUnknownEvent(json);
//   const upsertItem = Convert.toUpsertItem(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface AddToCart {
    cart_id?:      null | string;
    event_detail?: null | AddToCartEventDetail;
    event_time:    number;
    event_type:    string;
    items:         AddToCartItem[];
    rec_id?:       null | string;
    user_info:     AddToCartUserInfo;
}

export interface AddToCartEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface AddToCartItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export enum Currency {
    AMD = "AMD",
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    BAM = "BAM",
    BSD = "BSD",
    Bbd = "BBD",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Bov = "BOV",
    Brl = "BRL",
    Btn = "BTN",
    Bwp = "BWP",
    Byn = "BYN",
    Bzd = "BZD",
    CAD = "CAD",
    CRC = "CRC",
    Cdf = "CDF",
    Che = "CHE",
    Chf = "CHF",
    Chw = "CHW",
    Clf = "CLF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Cou = "COU",
    Cuc = "CUC",
    Cup = "CUP",
    Cve = "CVE",
    Czk = "CZK",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    EGP = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Gbp = "GBP",
    Gel = "GEL",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kmf = "KMF",
    Kpw = "KPW",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Lkr = "LKR",
    Lrd = "LRD",
    Lsl = "LSL",
    Lyd = "LYD",
    Mad = "MAD",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mru = "MRU",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Mxv = "MXV",
    Myr = "MYR",
    Mzn = "MZN",
    NIO = "NIO",
    Nad = "NAD",
    Ngn = "NGN",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    OMR = "OMR",
    PHP = "PHP",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Pkr = "PKR",
    Pln = "PLN",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    SSP = "SSP",
    SVC = "SVC",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sll = "SLL",
    Sos = "SOS",
    Srd = "SRD",
    Stn = "STN",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Unk = "UNK",
    Usd = "USD",
    Usn = "USN",
    Uyi = "UYI",
    Uyu = "UYU",
    Uzs = "UZS",
    Vef = "VEF",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xcd = "XCD",
    Xdr = "XDR",
    Xof = "XOF",
    Xpf = "XPF",
    Xsu = "XSU",
    Xua = "XUA",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW",
    Zwl = "ZWL",
}

export interface AddToCartUserInfo {
    additional_info?: null | PurpleUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface PurpleUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Other = "Other",
}

export interface AddToList {
    event_detail?: null | AddToListEventDetail;
    event_time:    number;
    event_type:    string;
    items:         AddToListItem[];
    list_id:       string;
    user_info:     AddToListUserInfo;
}

export interface AddToListEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface AddToListItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface AddToListUserInfo {
    additional_info?: null | FluffyUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface FluffyUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface CategoryPageView {
    event_detail?:    null | CategoryPageViewEventDetail;
    event_time:       number;
    event_type:       string;
    items:            CategoryPageViewItem[];
    on_screen:        boolean;
    page_categories?: string[] | null;
    user_info:        CategoryPageViewUserInfo;
}

export interface CategoryPageViewEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface CategoryPageViewItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface CategoryPageViewUserInfo {
    additional_info?: null | TentacledUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface TentacledUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface CheckoutStart {
    cart_id?:             null | string;
    event_detail?:        null | CheckoutStartEventDetail;
    event_time:           number;
    event_type:           string;
    items:                CheckoutStartItem[];
    purchase_transaction: CheckoutStartPurchaseTransaction;
    user_info:            CheckoutStartUserInfo;
}

export interface CheckoutStartEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface CheckoutStartItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface CheckoutStartPurchaseTransaction {
    costs?:        null | PurpleCosts;
    currency_code: Currency;
    id?:           null | string;
    revenue:       number;
    taxes?:        null | PurpleTaxes;
}

export interface PurpleCosts {
    cost?:          number | null;
    manufacturing?: number | null;
}

export interface PurpleTaxes {
    local?: number | null;
    state?: number | null;
}

export interface CheckoutStartUserInfo {
    additional_info?: null | StickyUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface StickyUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface DetailProductView {
    event_detail?: null | DetailProductViewEventDetail;
    event_time:    number;
    event_type:    string;
    item:          DetailProductViewItem;
    rec_id?:       null | string;
    user_info:     DetailProductViewUserInfo;
}

export interface DetailProductViewEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface DetailProductViewItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface DetailProductViewUserInfo {
    additional_info?: null | IndigoUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface IndigoUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface HomePageView {
    event_detail?: null | HomePageViewEventDetail;
    event_time:    number;
    event_type:    string;
    user_info:     HomePageViewUserInfo;
}

export interface HomePageViewEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface HomePageViewUserInfo {
    additional_info?: null | IndecentUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface IndecentUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface ImageInteraction {
    event_detail?: null | ImageInteractionEventDetail;
    event_time:    number;
    event_type:    string;
    item:          ImageInteractionItem;
    user_info:     ImageInteractionUserInfo;
}

export interface ImageInteractionEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface ImageInteractionItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface ImageInteractionUserInfo {
    additional_info?: null | HilariousUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface HilariousUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface ListView {
    event_detail?: null | ListViewEventDetail;
    event_time:    number;
    event_type:    string;
    items:         ListViewItem[];
    list_id:       string;
    user_info:     ListViewUserInfo;
}

export interface ListViewEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface ListViewItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface ListViewUserInfo {
    additional_info?: null | AmbitiousUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface AmbitiousUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface OtherInteraction {
    event_detail?:    null | OtherInteractionEventDetail;
    event_time:       number;
    event_type:       string;
    interaction_name: string;
    item:             OtherInteractionItem;
    user_info:        OtherInteractionUserInfo;
}

export interface OtherInteractionEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface OtherInteractionItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface OtherInteractionUserInfo {
    additional_info?: null | CunningUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface CunningUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface PageVisit {
    event_detail?: null | PageVisitEventDetail;
    event_time:    number;
    event_type:    string;
    user_info:     PageVisitUserInfo;
}

export interface PageVisitEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface PageVisitUserInfo {
    additional_info?: null | MagentaUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface MagentaUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface PurchaseComplete {
    cart_id?:             null | string;
    event_detail?:        null | PurchaseCompleteEventDetail;
    event_time:           number;
    event_type:           string;
    items:                PurchaseCompleteItem[];
    purchase_transaction: PurchaseCompletePurchaseTransaction;
    user_info:            PurchaseCompleteUserInfo;
}

export interface PurchaseCompleteEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface PurchaseCompleteItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface PurchaseCompletePurchaseTransaction {
    costs?:        null | FluffyCosts;
    currency_code: Currency;
    id?:           null | string;
    revenue:       number;
    taxes?:        null | FluffyTaxes;
}

export interface FluffyCosts {
    cost?:          number | null;
    manufacturing?: number | null;
}

export interface FluffyTaxes {
    local?: number | null;
    state?: number | null;
}

export interface PurchaseCompleteUserInfo {
    additional_info?: null | FriskyUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface FriskyUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface RateProduct {
    comment?:      null | string;
    event_detail?: null | RateProductEventDetail;
    event_time:    number;
    event_type:    string;
    item:          RateProductItem;
    rating?:       number | null;
    user_info:     RateProductUserInfo;
}

export interface RateProductEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface RateProductItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface RateProductUserInfo {
    additional_info?: null | MischievousUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface MischievousUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface RecoRequest {
    content?:        null | string;
    event_detail?:   null | RecoRequestEventDetail;
    event_time:      number;
    event_type:      string;
    location:        LocationEnum | PurpleLocation;
    num_items:       number;
    placement_name?: null | string;
    user_info:       RecoRequestUserInfo;
}

export interface RecoRequestEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export enum LocationEnum {
    CheckoutPage = "CheckoutPage",
    Error404 = "Error404",
    HomePage = "HomePage",
}

export interface PurpleLocation {
    ProductPage?:  string;
    AddToCart?:    string;
    CategoryPage?: string;
    SearchPage?:   PurpleSearchInfo;
    OtherPage?:    PurplePageInfo;
    UnknownPage?:  PurplePageInfo;
}

export interface PurplePageInfo {
    content?: null | string;
    url?:     null | string;
}

export interface PurpleSearchInfo {
    query?: null | string;
}

export interface RecoRequestUserInfo {
    additional_info?: null | BraggadociousUserAdditionalInfo;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface BraggadociousUserAdditionalInfo {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface RecoShow {
    event_detail?:   null | RecoShowEventDetail;
    event_time:      number;
    event_type:      string;
    experiment_id?:  null | string;
    items:           ProductDetailsRecoShow[];
    location:        LocationEnum | FluffyLocation;
    placement_name?: null | string;
    rec_id:          string;
    user_info:       RecoShowUserInfo;
}

export interface RecoShowEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface ProductDetailsRecoShow {
    canonical_product_uri?: null | string;
    currency_code:          Currency;
    exact_price:            ItemExactPrice;
    id:                     string;
    images?:                ItemImage[] | null;
    title:                  string;
}

export interface ItemExactPrice {
    display_price:  number;
    original_price: number;
}

export interface ItemImage {
    height: string;
    uri:    string;
    width:  string;
}

export interface FluffyLocation {
    ProductPage?:  string;
    AddToCart?:    string;
    CategoryPage?: string;
    SearchPage?:   FluffySearchInfo;
    OtherPage?:    FluffyPageInfo;
    UnknownPage?:  FluffyPageInfo;
}

export interface FluffyPageInfo {
    content?: null | string;
    url?:     null | string;
}

export interface FluffySearchInfo {
    query?: null | string;
}

export interface RecoShowUserInfo {
    additional_info?: null | UserAdditionalInfo1;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo1 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface RemoveFromCart {
    cart_id?:      null | string;
    event_detail?: null | RemoveFromCartEventDetail;
    event_time:    number;
    event_type:    string;
    items:         RemoveFromCartItem[];
    user_info:     RemoveFromCartUserInfo;
}

export interface RemoveFromCartEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface RemoveFromCartItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface RemoveFromCartUserInfo {
    additional_info?: null | UserAdditionalInfo2;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo2 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface RemoveFromList {
    event_detail?: null | RemoveFromListEventDetail;
    event_time:    number;
    event_type:    string;
    items:         RemoveFromListItem[];
    list_id?:      null | string;
    user_info:     RemoveFromListUserInfo;
}

export interface RemoveFromListEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface RemoveFromListItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface RemoveFromListUserInfo {
    additional_info?: null | UserAdditionalInfo3;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo3 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface RemoveItem {
    event_detail?: null | RemoveItemEventDetail;
    event_time:    number;
    event_type:    string;
    item_id:       string;
    user_info:     RemoveItemUserInfo;
}

export interface RemoveItemEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface RemoveItemUserInfo {
    additional_info?: null | UserAdditionalInfo4;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo4 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface CartPageView {
    cart_id?:      null | string;
    event_detail?: null | CartPageViewEventDetail;
    event_time:    number;
    event_type:    string;
    items:         CartPageViewItem[];
    user_info:     CartPageViewUserInfo;
}

export interface CartPageViewEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface CartPageViewItem {
    currency_code?:  Currency | null;
    display_price?:  number | null;
    item_id:         string;
    original_price?: number | null;
    quantity?:       number | null;
}

export interface CartPageViewUserInfo {
    additional_info?: null | UserAdditionalInfo5;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo5 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface SortItems {
    event_detail?: null | SortItemsEventDetail;
    event_time:    number;
    event_type:    string;
    sort_order?:   SortOrder | null;
    user_info:     SortItemsUserInfo;
}

export interface SortItemsEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export enum SortOrder {
    NameAsc = "NameAsc",
    NameDesc = "NameDesc",
    PopularityAsc = "PopularityAsc",
    PopularityDesc = "PopularityDesc",
    PriceAsc = "PriceAsc",
    PriceDesc = "PriceDesc",
    RatingAsc = "RatingAsc",
    RatingDesc = "RatingDesc",
}

export interface SortItemsUserInfo {
    additional_info?: null | UserAdditionalInfo6;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo6 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface UnknownEvent {
    event_detail?: null | UnknownEventEventDetail;
    event_time:    number;
    event_type:    string;
    user_info:     UnknownEventUserInfo;
}

export interface UnknownEventEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface UnknownEventUserInfo {
    additional_info?: null | UserAdditionalInfo7;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo7 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

export interface UpsertItem {
    event_detail?:   null | UpsertItemEventDetail;
    event_time:      number;
    event_type:      string;
    product_details: ProductDetails;
    user_info:       UpsertItemUserInfo;
}

export interface UpsertItemEventDetail {
    event_attributes?:     { [key: string]: string } | null;
    experiment_ids?:       number | null;
    recommendation_token?: null | string;
    url:                   string;
}

export interface ProductDetails {
    attributes?:             { [key: string]: string } | null;
    available_quantity?:     number | null;
    canonical_product_uri?:  null | string;
    categorical_attributes?: { [key: string]: string } | null;
    categories?:             Array<string[]> | null;
    costs?:                  { [key: string]: number } | null;
    currency_code:           Currency;
    description?:            null | string;
    exact_price:             ProductDetailsExactPrice;
    id:                      string;
    images?:                 ProductDetailsImage[] | null;
    item_group_id?:          null | string;
    language_code?:          null | string;
    numeric_attributes?:     { [key: string]: number } | null;
    stock_state:             StockState;
    tags?:                   string[] | null;
    title:                   string;
}

export interface ProductDetailsExactPrice {
    display_price:  number;
    original_price: number;
}

export interface ProductDetailsImage {
    height: string;
    uri:    string;
    width:  string;
}

export enum StockState {
    BackOrder = "BackOrder",
    InStock = "InStock",
    OutOfStock = "OutOfStock",
    PreOrder = "PreOrder",
}

export interface UpsertItemUserInfo {
    additional_info?: null | UserAdditionalInfo8;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo8 {
    birth_year?: number | null;
    gender?:     Gender | null;
    ip?:         null | string;
    location?:   null | string;
    session_id?: null | string;
    user_agent?: null | string;
}

// Converts JSON types to/from your types
// and asserts the results at runtime
export class Convert {
    public static toAddToCart(json: any): AddToCart {
        return cast(json, r("AddToCart"));
    }

    public static addToCartToJson(value: AddToCart): any {
        return uncast(value, r("AddToCart"));
    }

    public static toAddToList(json: any): AddToList {
        return cast(json, r("AddToList"));
    }

    public static addToListToJson(value: AddToList): any {
        return uncast(value, r("AddToList"));
    }

    public static toCategoryPageView(json: any): CategoryPageView {
        return cast(json, r("CategoryPageView"));
    }

    public static categoryPageViewToJson(value: CategoryPageView): any {
        return uncast(value, r("CategoryPageView"));
    }

    public static toCheckoutStart(json: any): CheckoutStart {
        return cast(json, r("CheckoutStart"));
    }

    public static checkoutStartToJson(value: CheckoutStart): any {
        return uncast(value, r("CheckoutStart"));
    }

    public static toDetailProductView(json: any): DetailProductView {
        return cast(json, r("DetailProductView"));
    }

    public static detailProductViewToJson(value: DetailProductView): any {
        return uncast(value, r("DetailProductView"));
    }

    public static toHomePageView(json: any): HomePageView {
        return cast(json, r("HomePageView"));
    }

    public static homePageViewToJson(value: HomePageView): any {
        return uncast(value, r("HomePageView"));
    }

    public static toImageInteraction(json: any): ImageInteraction {
        return cast(json, r("ImageInteraction"));
    }

    public static imageInteractionToJson(value: ImageInteraction): any {
        return uncast(value, r("ImageInteraction"));
    }

    public static toListView(json: any): ListView {
        return cast(json, r("ListView"));
    }

    public static listViewToJson(value: ListView): any {
        return uncast(value, r("ListView"));
    }

    public static toOtherInteraction(json: any): OtherInteraction {
        return cast(json, r("OtherInteraction"));
    }

    public static otherInteractionToJson(value: OtherInteraction): any {
        return uncast(value, r("OtherInteraction"));
    }

    public static toPageVisit(json: any): PageVisit {
        return cast(json, r("PageVisit"));
    }

    public static pageVisitToJson(value: PageVisit): any {
        return uncast(value, r("PageVisit"));
    }

    public static toPurchaseComplete(json: any): PurchaseComplete {
        return cast(json, r("PurchaseComplete"));
    }

    public static purchaseCompleteToJson(value: PurchaseComplete): any {
        return uncast(value, r("PurchaseComplete"));
    }

    public static toRateProduct(json: any): RateProduct {
        return cast(json, r("RateProduct"));
    }

    public static rateProductToJson(value: RateProduct): any {
        return uncast(value, r("RateProduct"));
    }

    public static toRecoRequest(json: any): RecoRequest {
        return cast(json, r("RecoRequest"));
    }

    public static recoRequestToJson(value: RecoRequest): any {
        return uncast(value, r("RecoRequest"));
    }

    public static toRecoShow(json: any): RecoShow {
        return cast(json, r("RecoShow"));
    }

    public static recoShowToJson(value: RecoShow): any {
        return uncast(value, r("RecoShow"));
    }

    public static toRemoveFromCart(json: any): RemoveFromCart {
        return cast(json, r("RemoveFromCart"));
    }

    public static removeFromCartToJson(value: RemoveFromCart): any {
        return uncast(value, r("RemoveFromCart"));
    }

    public static toRemoveFromList(json: any): RemoveFromList {
        return cast(json, r("RemoveFromList"));
    }

    public static removeFromListToJson(value: RemoveFromList): any {
        return uncast(value, r("RemoveFromList"));
    }

    public static toRemoveItem(json: any): RemoveItem {
        return cast(json, r("RemoveItem"));
    }

    public static removeItemToJson(value: RemoveItem): any {
        return uncast(value, r("RemoveItem"));
    }

    public static toCartPageView(json: any): CartPageView {
        return cast(json, r("CartPageView"));
    }

    public static cartPageViewToJson(value: CartPageView): any {
        return uncast(value, r("CartPageView"));
    }

    public static toSortItems(json: any): SortItems {
        return cast(json, r("SortItems"));
    }

    public static sortItemsToJson(value: SortItems): any {
        return uncast(value, r("SortItems"));
    }

    public static toUnknownEvent(json: any): UnknownEvent {
        return cast(json, r("UnknownEvent"));
    }

    public static unknownEventToJson(value: UnknownEvent): any {
        return uncast(value, r("UnknownEvent"));
    }

    public static toUpsertItem(json: any): UpsertItem {
        return cast(json, r("UpsertItem"));
    }

    public static upsertItemToJson(value: UpsertItem): any {
        return uncast(value, r("UpsertItem"));
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "AddToCart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("AddToCartEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("AddToCartItem")) },
        { json: "rec_id", js: "rec_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("AddToCartUserInfo") },
    ], "any"),
    "AddToCartEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "AddToCartItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "AddToCartUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("PurpleUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "PurpleUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "AddToList": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("AddToListEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("AddToListItem")) },
        { json: "list_id", js: "list_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("AddToListUserInfo") },
    ], "any"),
    "AddToListEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "AddToListItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "AddToListUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("FluffyUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "FluffyUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "CategoryPageView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("CategoryPageViewEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("CategoryPageViewItem")) },
        { json: "on_screen", js: "on_screen", typ: true },
        { json: "page_categories", js: "page_categories", typ: u(undefined, u(a(""), null)) },
        { json: "user_info", js: "user_info", typ: r("CategoryPageViewUserInfo") },
    ], "any"),
    "CategoryPageViewEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "CategoryPageViewItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "CategoryPageViewUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("TentacledUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "TentacledUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "CheckoutStart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("CheckoutStartEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("CheckoutStartItem")) },
        { json: "purchase_transaction", js: "purchase_transaction", typ: r("CheckoutStartPurchaseTransaction") },
        { json: "user_info", js: "user_info", typ: r("CheckoutStartUserInfo") },
    ], "any"),
    "CheckoutStartEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "CheckoutStartItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "CheckoutStartPurchaseTransaction": o([
        { json: "costs", js: "costs", typ: u(undefined, u(null, r("PurpleCosts"))) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "revenue", js: "revenue", typ: 3.14 },
        { json: "taxes", js: "taxes", typ: u(undefined, u(null, r("PurpleTaxes"))) },
    ], "any"),
    "PurpleCosts": o([
        { json: "cost", js: "cost", typ: u(undefined, u(3.14, null)) },
        { json: "manufacturing", js: "manufacturing", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "PurpleTaxes": o([
        { json: "local", js: "local", typ: u(undefined, u(3.14, null)) },
        { json: "state", js: "state", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "CheckoutStartUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("StickyUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "StickyUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "DetailProductView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("DetailProductViewEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "item", js: "item", typ: r("DetailProductViewItem") },
        { json: "rec_id", js: "rec_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("DetailProductViewUserInfo") },
    ], "any"),
    "DetailProductViewEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "DetailProductViewItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "DetailProductViewUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("IndigoUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "IndigoUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "HomePageView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("HomePageViewEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "user_info", js: "user_info", typ: r("HomePageViewUserInfo") },
    ], "any"),
    "HomePageViewEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "HomePageViewUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("IndecentUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "IndecentUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "ImageInteraction": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("ImageInteractionEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "item", js: "item", typ: r("ImageInteractionItem") },
        { json: "user_info", js: "user_info", typ: r("ImageInteractionUserInfo") },
    ], "any"),
    "ImageInteractionEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "ImageInteractionItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "ImageInteractionUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("HilariousUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "HilariousUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "ListView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("ListViewEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("ListViewItem")) },
        { json: "list_id", js: "list_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("ListViewUserInfo") },
    ], "any"),
    "ListViewEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "ListViewItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "ListViewUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("AmbitiousUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "AmbitiousUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "OtherInteraction": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("OtherInteractionEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "interaction_name", js: "interaction_name", typ: "" },
        { json: "item", js: "item", typ: r("OtherInteractionItem") },
        { json: "user_info", js: "user_info", typ: r("OtherInteractionUserInfo") },
    ], "any"),
    "OtherInteractionEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "OtherInteractionItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "OtherInteractionUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("CunningUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "CunningUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "PageVisit": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("PageVisitEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "user_info", js: "user_info", typ: r("PageVisitUserInfo") },
    ], "any"),
    "PageVisitEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "PageVisitUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("MagentaUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "MagentaUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "PurchaseComplete": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("PurchaseCompleteEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("PurchaseCompleteItem")) },
        { json: "purchase_transaction", js: "purchase_transaction", typ: r("PurchaseCompletePurchaseTransaction") },
        { json: "user_info", js: "user_info", typ: r("PurchaseCompleteUserInfo") },
    ], "any"),
    "PurchaseCompleteEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "PurchaseCompleteItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "PurchaseCompletePurchaseTransaction": o([
        { json: "costs", js: "costs", typ: u(undefined, u(null, r("FluffyCosts"))) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "revenue", js: "revenue", typ: 3.14 },
        { json: "taxes", js: "taxes", typ: u(undefined, u(null, r("FluffyTaxes"))) },
    ], "any"),
    "FluffyCosts": o([
        { json: "cost", js: "cost", typ: u(undefined, u(3.14, null)) },
        { json: "manufacturing", js: "manufacturing", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "FluffyTaxes": o([
        { json: "local", js: "local", typ: u(undefined, u(3.14, null)) },
        { json: "state", js: "state", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "PurchaseCompleteUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("FriskyUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "FriskyUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RateProduct": o([
        { json: "comment", js: "comment", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("RateProductEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "item", js: "item", typ: r("RateProductItem") },
        { json: "rating", js: "rating", typ: u(undefined, u(3.14, null)) },
        { json: "user_info", js: "user_info", typ: r("RateProductUserInfo") },
    ], "any"),
    "RateProductEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "RateProductItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "RateProductUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("MischievousUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "MischievousUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RecoRequest": o([
        { json: "content", js: "content", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("RecoRequestEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "location", js: "location", typ: u(r("LocationEnum"), r("PurpleLocation")) },
        { json: "num_items", js: "num_items", typ: 0 },
        { json: "placement_name", js: "placement_name", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("RecoRequestUserInfo") },
    ], "any"),
    "RecoRequestEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "PurpleLocation": o([
        { json: "ProductPage", js: "ProductPage", typ: u(undefined, "") },
        { json: "AddToCart", js: "AddToCart", typ: u(undefined, "") },
        { json: "CategoryPage", js: "CategoryPage", typ: u(undefined, "") },
        { json: "SearchPage", js: "SearchPage", typ: u(undefined, r("PurpleSearchInfo")) },
        { json: "OtherPage", js: "OtherPage", typ: u(undefined, r("PurplePageInfo")) },
        { json: "UnknownPage", js: "UnknownPage", typ: u(undefined, r("PurplePageInfo")) },
    ], "any"),
    "PurplePageInfo": o([
        { json: "content", js: "content", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
    ], "any"),
    "PurpleSearchInfo": o([
        { json: "query", js: "query", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RecoRequestUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("BraggadociousUserAdditionalInfo"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "BraggadociousUserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RecoShow": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("RecoShowEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "experiment_id", js: "experiment_id", typ: u(undefined, u(null, "")) },
        { json: "items", js: "items", typ: a(r("ProductDetailsRecoShow")) },
        { json: "location", js: "location", typ: u(r("LocationEnum"), r("FluffyLocation")) },
        { json: "placement_name", js: "placement_name", typ: u(undefined, u(null, "")) },
        { json: "rec_id", js: "rec_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("RecoShowUserInfo") },
    ], "any"),
    "RecoShowEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "ProductDetailsRecoShow": o([
        { json: "canonical_product_uri", js: "canonical_product_uri", typ: u(undefined, u(null, "")) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "exact_price", js: "exact_price", typ: r("ItemExactPrice") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: u(undefined, u(a(r("ItemImage")), null)) },
        { json: "title", js: "title", typ: "" },
    ], "any"),
    "ItemExactPrice": o([
        { json: "display_price", js: "display_price", typ: 3.14 },
        { json: "original_price", js: "original_price", typ: 3.14 },
    ], "any"),
    "ItemImage": o([
        { json: "height", js: "height", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "width", js: "width", typ: "" },
    ], "any"),
    "FluffyLocation": o([
        { json: "ProductPage", js: "ProductPage", typ: u(undefined, "") },
        { json: "AddToCart", js: "AddToCart", typ: u(undefined, "") },
        { json: "CategoryPage", js: "CategoryPage", typ: u(undefined, "") },
        { json: "SearchPage", js: "SearchPage", typ: u(undefined, r("FluffySearchInfo")) },
        { json: "OtherPage", js: "OtherPage", typ: u(undefined, r("FluffyPageInfo")) },
        { json: "UnknownPage", js: "UnknownPage", typ: u(undefined, r("FluffyPageInfo")) },
    ], "any"),
    "FluffyPageInfo": o([
        { json: "content", js: "content", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
    ], "any"),
    "FluffySearchInfo": o([
        { json: "query", js: "query", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RecoShowUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo1"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo1": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RemoveFromCart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("RemoveFromCartEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("RemoveFromCartItem")) },
        { json: "user_info", js: "user_info", typ: r("RemoveFromCartUserInfo") },
    ], "any"),
    "RemoveFromCartEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "RemoveFromCartItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "RemoveFromCartUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo2"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo2": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RemoveFromList": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("RemoveFromListEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("RemoveFromListItem")) },
        { json: "list_id", js: "list_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("RemoveFromListUserInfo") },
    ], "any"),
    "RemoveFromListEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "RemoveFromListItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "RemoveFromListUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo3"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo3": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RemoveItem": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("RemoveItemEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("RemoveItemUserInfo") },
    ], "any"),
    "RemoveItemEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "RemoveItemUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo4"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo4": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "CartPageView": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("CartPageViewEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "items", js: "items", typ: a(r("CartPageViewItem")) },
        { json: "user_info", js: "user_info", typ: r("CartPageViewUserInfo") },
    ], "any"),
    "CartPageViewEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "CartPageViewItem": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "CartPageViewUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo5"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo5": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "SortItems": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("SortItemsEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "sort_order", js: "sort_order", typ: u(undefined, u(r("SortOrder"), null)) },
        { json: "user_info", js: "user_info", typ: r("SortItemsUserInfo") },
    ], "any"),
    "SortItemsEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "SortItemsUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo6"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo6": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "UnknownEvent": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("UnknownEventEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UnknownEventUserInfo") },
    ], "any"),
    "UnknownEventEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "UnknownEventUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo7"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo7": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "UpsertItem": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("UpsertItemEventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: "" },
        { json: "product_details", js: "product_details", typ: r("ProductDetails") },
        { json: "user_info", js: "user_info", typ: r("UpsertItemUserInfo") },
    ], "any"),
    "UpsertItemEventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "recommendation_token", js: "recommendation_token", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "ProductDetails": o([
        { json: "attributes", js: "attributes", typ: u(undefined, u(m(""), null)) },
        { json: "available_quantity", js: "available_quantity", typ: u(undefined, u(0, null)) },
        { json: "canonical_product_uri", js: "canonical_product_uri", typ: u(undefined, u(null, "")) },
        { json: "categorical_attributes", js: "categorical_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "categories", js: "categories", typ: u(undefined, u(a(a("")), null)) },
        { json: "costs", js: "costs", typ: u(undefined, u(m(3.14), null)) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "description", js: "description", typ: u(undefined, u(null, "")) },
        { json: "exact_price", js: "exact_price", typ: r("ProductDetailsExactPrice") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: u(undefined, u(a(r("ProductDetailsImage")), null)) },
        { json: "item_group_id", js: "item_group_id", typ: u(undefined, u(null, "")) },
        { json: "language_code", js: "language_code", typ: u(undefined, u(null, "")) },
        { json: "numeric_attributes", js: "numeric_attributes", typ: u(undefined, u(m(3.14), null)) },
        { json: "stock_state", js: "stock_state", typ: r("StockState") },
        { json: "tags", js: "tags", typ: u(undefined, u(a(""), null)) },
        { json: "title", js: "title", typ: "" },
    ], "any"),
    "ProductDetailsExactPrice": o([
        { json: "display_price", js: "display_price", typ: 3.14 },
        { json: "original_price", js: "original_price", typ: 3.14 },
    ], "any"),
    "ProductDetailsImage": o([
        { json: "height", js: "height", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "width", js: "width", typ: "" },
    ], "any"),
    "UpsertItemUserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo8"))) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo8": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "Currency": [
        "AMD",
        "AED",
        "AFN",
        "ALL",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BSD",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BOV",
        "BRL",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CRC",
        "CDF",
        "CHE",
        "CHF",
        "CHW",
        "CLF",
        "CLP",
        "CNY",
        "COP",
        "COU",
        "CUC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MXV",
        "MYR",
        "MZN",
        "NIO",
        "NAD",
        "NGN",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PHP",
        "PAB",
        "PEN",
        "PGK",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SSP",
        "SVC",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "UNK",
        "USD",
        "USN",
        "UYI",
        "UYU",
        "UZS",
        "VEF",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "XSU",
        "XUA",
        "YER",
        "ZAR",
        "ZMW",
        "ZWL",
    ],
    "Gender": [
        "Female",
        "Male",
        "Other",
    ],
    "LocationEnum": [
        "CheckoutPage",
        "Error404",
        "HomePage",
    ],
    "SortOrder": [
        "NameAsc",
        "NameDesc",
        "PopularityAsc",
        "PopularityDesc",
        "PriceAsc",
        "PriceDesc",
        "RatingAsc",
        "RatingDesc",
    ],
    "StockState": [
        "BackOrder",
        "InStock",
        "OutOfStock",
        "PreOrder",
    ],
};
