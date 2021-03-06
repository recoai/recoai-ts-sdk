// To parse this data:
//
//   import { Convert, AddToCart, AddToList, APISettings, BuilderFn1, BuilderFn2, BuilderVariable, CategoryPageView, ChangeItemStockState, CheckoutStart, DetailProductView, HomePageView, ImageInteraction, RemoveItem, UpsertItem, ListView, OfflineRecommendationsRemove, OfflineRecommendationsUpsert, OtherInteraction, PageVisit, PlacementRemove, PlacementStatisticsJSONReady, PlacementUpsert, PurchaseComplete, RankingModelTrainRequest, RateProduct, RecoRequest, RecoShow, RemoveFromCart, RemoveFromList, SearchItems, CartPageView, SmartSearchRequest, SmartSearchShow, SortItems, UnknownEvent } from "./file";
//
//   const addToCart = Convert.toAddToCart(json);
//   const addToList = Convert.toAddToList(json);
//   const aPISettings = Convert.toAPISettings(json);
//   const builderFn1 = Convert.toBuilderFn1(json);
//   const builderFn2 = Convert.toBuilderFn2(json);
//   const builderVariable = Convert.toBuilderVariable(json);
//   const categoryPageView = Convert.toCategoryPageView(json);
//   const changeItemStockState = Convert.toChangeItemStockState(json);
//   const checkoutStart = Convert.toCheckoutStart(json);
//   const common = Convert.toCommon(json);
//   const detailProductView = Convert.toDetailProductView(json);
//   const homePageView = Convert.toHomePageView(json);
//   const imageInteraction = Convert.toImageInteraction(json);
//   const removeItem = Convert.toRemoveItem(json);
//   const upsertItem = Convert.toUpsertItem(json);
//   const listView = Convert.toListView(json);
//   const offlineRecommendationsRemove = Convert.toOfflineRecommendationsRemove(json);
//   const offlineRecommendationsUpsert = Convert.toOfflineRecommendationsUpsert(json);
//   const otherInteraction = Convert.toOtherInteraction(json);
//   const pageVisit = Convert.toPageVisit(json);
//   const placementRemove = Convert.toPlacementRemove(json);
//   const placementStatisticsJSONReady = Convert.toPlacementStatisticsJSONReady(json);
//   const placementUpsert = Convert.toPlacementUpsert(json);
//   const purchaseComplete = Convert.toPurchaseComplete(json);
//   const rankingModelTrainRequest = Convert.toRankingModelTrainRequest(json);
//   const rateProduct = Convert.toRateProduct(json);
//   const recoRequest = Convert.toRecoRequest(json);
//   const recoShow = Convert.toRecoShow(json);
//   const removeFromCart = Convert.toRemoveFromCart(json);
//   const removeFromList = Convert.toRemoveFromList(json);
//   const searchItems = Convert.toSearchItems(json);
//   const cartPageView = Convert.toCartPageView(json);
//   const smartSearchRequest = Convert.toSmartSearchRequest(json);
//   const smartSearchShow = Convert.toSmartSearchShow(json);
//   const sortItems = Convert.toSortItems(json);
//   const unknownEvent = Convert.toUnknownEvent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface AddToCart {
    cart_id?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    user_info:     UserInfo;
}

export interface EventDetail {
    event_attributes?: { [key: string]: string } | null;
    experiment_ids?:   number | null;
    rec_id?:           null | string;
    url:               string;
}

export enum EventType {
    AddToCart = "AddToCart",
    AddToList = "AddToList",
    CartPageView = "CartPageView",
    CategoryPageView = "CategoryPageView",
    ChangeItemStockState = "ChangeItemStockState",
    CheckoutStart = "CheckoutStart",
    DetailProductView = "DetailProductView",
    HomePageView = "HomePageView",
    ImageInteraction = "ImageInteraction",
    ItemRemove = "ItemRemove",
    ItemUpsert = "ItemUpsert",
    ListView = "ListView",
    OfflineRecommendationsRemove = "OfflineRecommendationsRemove",
    OfflineRecommendationsUpsert = "OfflineRecommendationsUpsert",
    OtherInteraction = "OtherInteraction",
    PageVisit = "PageVisit",
    PlacementRemove = "PlacementRemove",
    PlacementUpsert = "PlacementUpsert",
    PurchaseComplete = "PurchaseComplete",
    RankingModelTrainRequest = "RankingModelTrainRequest",
    RateProduct = "RateProduct",
    RecoRequest = "RecoRequest",
    RecoShow = "RecoShow",
    RemoveFromCart = "RemoveFromCart",
    RemoveFromList = "RemoveFromList",
    SearchItems = "SearchItems",
    SmartSearchRequest = "SmartSearchRequest",
    SmartSearchShow = "SmartSearchShow",
    SortItems = "SortItems",
    UnknownEvent = "UnknownEvent",
}

export interface ItemDetails {
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

export interface UserInfo {
    additional_info?: null | UserAdditionalInfo;
    privacy_setting?: PrivacySetting | null;
    session_id?:      null | string;
    user_id?:         null | string;
    visitor_id:       string;
}

export interface UserAdditionalInfo {
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

export enum PrivacySetting {
    NonPersonalized = "NonPersonalized",
    Personalized = "Personalized",
}

export interface AddToList {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    list_id:       string;
    user_info:     UserInfo;
}

export interface APISettings {
    url_api: string;
}

export enum BuilderFn1 {
    ArgMax = "ArgMax",
    ArgMin = "ArgMin",
    Invert = "Invert",
}

export enum BuilderFn2 {
    Expand = "Expand",
    Intersect = "Intersect",
    Less = "Less",
    LessEq = "LessEq",
    Lookup = "Lookup",
    More = "More",
    MoreEq = "MoreEq",
    Remove = "Remove",
    Union = "Union",
}

export enum BuilderVariable {
    ItemCurrent = "ItemCurrent",
    ItemsAlsoAddedToCartInSession = "ItemsAlsoAddedToCartInSession",
    ItemsAlsoBoughtInSession = "ItemsAlsoBoughtInSession",
    ItemsAlsoSeenInSession = "ItemsAlsoSeenInSession",
    ItemsInCart = "ItemsInCart",
    ItemsRecommendedSessionCounter = "ItemsRecommendedSessionCounter",
    ItemsSeenInSession = "ItemsSeenInSession",
    ItemsVisitedCounter = "ItemsVisitedCounter",
}

export interface CategoryPageView {
    event_detail?:    null | EventDetail;
    event_time?:      number | null;
    event_type:       EventType;
    items:            ItemDetails[];
    on_screen:        boolean;
    page_categories?: string[] | null;
    user_info:        UserInfo;
}

export interface ChangeItemStockState {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item_id:       string;
    stock_state:   StockState;
    user_info:     UserInfo;
}

export enum StockState {
    BackOrder = "BackOrder",
    InStock = "InStock",
    OutOfStock = "OutOfStock",
    PreOrder = "PreOrder",
}

export interface CheckoutStart {
    cart_id?:             null | string;
    event_detail?:        null | EventDetail;
    event_time?:          number | null;
    event_type:           EventType;
    items:                ItemDetails[];
    purchase_transaction: PurchaseTransaction;
    user_info:            UserInfo;
}

export interface PurchaseTransaction {
    costs?:        null | Costs;
    currency_code: Currency;
    id?:           null | string;
    revenue:       number;
    taxes?:        null | Taxes;
}

export interface Costs {
    cost?:          number | null;
    manufacturing?: number | null;
}

export interface Taxes {
    local?: number | null;
    state?: number | null;
}

export interface DetailProductView {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    rec_id?:       null | string;
    user_info:     UserInfo;
}

export interface HomePageView {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    user_info:     UserInfo;
}

export interface ImageInteraction {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    user_info:     UserInfo;
}

export interface RemoveItem {
    event_detail?: null | EventDetail;
    event_time:    number;
    event_type:    EventType;
    item_id:       string;
    user_info:     UserInfo;
}

export interface UpsertItem {
    event_detail?:   null | EventDetail;
    event_time:      number;
    event_type:      EventType;
    product_details: ProductDetails;
    user_info:       UserInfo;
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
    id:                      string;
    images?:                 Image[] | null;
    item_group_id?:          null | string;
    language_code?:          null | string;
    numeric_attributes?:     { [key: string]: number } | null;
    price:                   ExactPrice;
    product_code?:           null | string;
    stock_state:             StockState;
    tags?:                   string[] | null;
    title:                   string;
}

export interface Image {
    height: string;
    uri:    string;
    width:  string;
}

export interface ExactPrice {
    display_price:  number;
    original_price: number;
}

export interface ListView {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    list_id:       string;
    user_info:     UserInfo;
}

export interface OfflineRecommendationsRemove {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    name:          OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    user_info:     UserInfo;
}

export interface OfflineRecommendationsTypeClass {
    OtherSimilarity: string;
}

export enum OfflineRecommendationsTypeEnum {
    ImageSimilarity = "ImageSimilarity",
    TextSimilarity = "TextSimilarity",
}

export interface OfflineRecommendationsUpsert {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    matrix:        { [key: string]: { [key: string]: number } };
    name:          OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    user_info:     UserInfo;
}

export interface OtherInteraction {
    event_detail?:    null | EventDetail;
    event_time?:      number | null;
    event_type:       EventType;
    interaction_name: string;
    item:             ItemDetails;
    user_info:        UserInfo;
}

export interface PageVisit {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    user_info:     UserInfo;
}

export interface PlacementRemove {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    name:          string;
    user_info:     UserInfo;
}

/**
 * Json safe version of PlacementStatistics, unfortunately serde_with doesn't work because
 * of conflicts with JsonSchema
 */
export interface PlacementStatisticsJSONReady {
    loading_times_microseconds: { [key: string]: LIFOVecForUint128 };
    placements_statistics:      { [key: string]: Array<Array<GenericStrategyEnum | SuccessTries>> };
}

export interface LIFOVecForUint128 {
    base:     number[];
    capacity: number;
}

export enum GenericStrategyEnum {
    AlsoAddedToCart = "AlsoAddedToCart",
    AlsoPurchased = "AlsoPurchased",
    AlsoSeen = "AlsoSeen",
    BestsellerCategory = "BestsellerCategory",
    BestsellerGlobal = "BestsellerGlobal",
    ContentMatching = "ContentMatching",
    MostPurchases = "MostPurchases",
    MostViews = "MostViews",
    SearchMatching = "SearchMatching",
    SeenInSession = "SeenInSession",
    SeenInSessionCoccurAddedToCart = "SeenInSessionCoccurAddedToCart",
    SeenInSessionCoccurSeen = "SeenInSessionCoccurSeen",
    SimilarAttributes = "SimilarAttributes",
    Unknown = "Unknown",
}

export interface SuccessTries {
    SimilarOffline?:  OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    StrategyBuilder?: string;
    n_impressions?:   number;
    n_success?:       number;
}

export interface PlacementUpsert {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    name:          string;
    ranking:       RankingStrategy;
    strategies:    WeightedGenericCandidateRec[];
    url_params?:   { [key: string]: string } | null;
    user_info:     UserInfo;
}

export enum RankingStrategy {
    DirichletSampling = "DirichletSampling",
    RankingModel = "RankingModel",
    ThompsonSampling = "ThompsonSampling",
    WeightedSample = "WeightedSample",
}

export interface WeightedGenericCandidateRec {
    strategy: GenericStrategyClass | GenericStrategyEnum;
    weight:   number[] | number;
}

export interface GenericStrategyClass {
    SimilarOffline?:  OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    StrategyBuilder?: string;
}

export interface PurchaseComplete {
    cart_id?:             null | string;
    event_detail?:        null | EventDetail;
    event_time?:          number | null;
    event_type:           EventType;
    items:                ItemDetails[];
    purchase_transaction: PurchaseTransaction;
    user_info:            UserInfo;
}

export interface RankingModelTrainRequest {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    model:         RankingModel;
    user_info:     UserInfo;
}

export interface RankingModel {
    XGBoost: XGBoostParams;
}

export interface XGBoostParams {
    boost_rounds:            number;
    booster_type:            XGBoostBoosterType;
    dart_one_drop?:          boolean | null;
    dart_rate_drop?:         number | null;
    dart_skip_drop?:         number | null;
    objective:               XGBoostObjective;
    tree_alpha?:             number | null;
    tree_colsample_bylevel?: number | null;
    tree_colsample_bytree?:  number | null;
    tree_eta?:               number | null;
    tree_gamma?:             number | null;
    tree_lambda?:            number | null;
    tree_max_bin?:           number | null;
    tree_max_depth?:         number | null;
    tree_min_child_weight?:  number | null;
    tree_subsample?:         number | null;
}

/**
 * We want to flatten all (or most) of the XGBoost parameters
 */
export enum XGBoostBoosterType {
    Dart = "Dart",
    Linear = "Linear",
    Tree = "Tree",
}

export enum XGBoostObjective {
    BinaryLogistic = "BinaryLogistic",
    BinaryLogisticRaw = "BinaryLogisticRaw",
    RankPairwise = "RankPairwise",
    RegLinear = "RegLinear",
    RegLogistic = "RegLogistic",
}

export interface RateProduct {
    comment?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    rating?:       number | null;
    user_info:     UserInfo;
}

export interface RecoRequest {
    additional_uri_params?: { [key: string]: string } | null;
    event_detail?:          null | EventDetail;
    event_time?:            number | null;
    event_type:             EventType;
    location:               LocationClass | LocationEnum;
    n_items:                number;
    placement_name?:        null | string;
    user_info:              UserInfo;
}

export interface LocationClass {
    ProductPage?:  string;
    AddToCart?:    string;
    CategoryPage?: string[];
    SearchPage?:   SearchInfo;
    CheckoutPage?: string[];
    OtherPage?:    PageInfo;
    UnknownPage?:  PageInfo;
}

export interface PageInfo {
    content?: null | string;
    url?:     null | string;
}

export interface SearchInfo {
    query?: null | string;
}

export enum LocationEnum {
    Error404 = "Error404",
    HomePage = "HomePage",
}

export interface RecoShow {
    additional_uri_params?: { [key: string]: string } | null;
    event_detail?:          null | EventDetail;
    event_time?:            number | null;
    event_type:             EventType;
    experiment_id?:         null | string;
    items:                  ProductDetailsRecoShow[];
    location:               LocationClass | LocationEnum;
    placement_name?:        null | string;
    user_info:              UserInfo;
}

export interface ProductDetailsRecoShow {
    canonical_product_uri?:             null | string;
    canonical_product_uri_with_params?: null | string;
    categories?:                        Array<string[]> | null;
    currency_code:                      Currency;
    id:                                 string;
    images?:                            Image[] | null;
    price:                              ExactPrice;
    product_code:                       string;
    rec_id:                             string;
    score?:                             number | null;
    strategies_used?:                   Array<Array<StrategiesUsedClass | number | GenericStrategyEnum>> | null;
    strategy_selected:                  GenericStrategyClass | GenericStrategyEnum;
    title:                              string;
    url_params?:                        null | string;
}

export interface StrategiesUsedClass {
    SimilarOffline?:  OfflineRecommendationsTypeClass | OfflineRecommendationsTypeEnum;
    StrategyBuilder?: string;
}

export interface RemoveFromCart {
    cart_id?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    item:          ItemDetails;
    user_info:     UserInfo;
}

export interface RemoveFromList {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    list_id?:      null | string;
    user_info:     UserInfo;
}

export interface SearchItems {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    query:         string;
    user_info:     UserInfo;
}

export interface CartPageView {
    cart_id?:      null | string;
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ItemDetails[];
    user_info:     UserInfo;
}

export interface SmartSearchRequest {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    filter:        { [key: string]: string };
    n_items:       number;
    page:          number;
    query:         string;
    search_order:  SearchOrder;
    user_info:     UserInfo;
}

export enum SearchOrder {
    Newest = "Newest",
    Oldest = "Oldest",
    Personalized = "Personalized",
    PopularityAsc = "PopularityAsc",
    PopularityDesc = "PopularityDesc",
    PriceAsc = "PriceAsc",
    PriceDesc = "PriceDesc",
    RatingAsc = "RatingAsc",
    RatingDesc = "RatingDesc",
    RelevanceAsc = "RelevanceAsc",
    RelevanceDesc = "RelevanceDesc",
}

export interface SmartSearchShow {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    items:         ProductDetailsRecoShow[];
    user_info:     UserInfo;
}

export interface SortItems {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    sort_order?:   SortOrder | null;
    user_info:     UserInfo;
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

export interface UnknownEvent {
    event_detail?: null | EventDetail;
    event_time?:   number | null;
    event_type:    EventType;
    user_info:     UserInfo;
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

    public static toEventDetail(json: any): EventDetail {
        return cast(json, r("EventDetail"));
    }

    public static eventDetailToJson(value: EventDetail): any {
        return uncast(value, r("EventDetail"));
    }

    public static toItemDetails(json: any): ItemDetails {
        return cast(json, r("ItemDetails"));
    }

    public static itemDetailsToJson(value: ItemDetails): any {
        return uncast(value, r("ItemDetails"));
    }

    public static toUserInfo(json: any): UserInfo {
        return cast(json, r("UserInfo"));
    }

    public static userInfoToJson(value: UserInfo): any {
        return uncast(value, r("UserInfo"));
    }

    public static toUserAdditionalInfo(json: any): UserAdditionalInfo {
        return cast(json, r("UserAdditionalInfo"));
    }

    public static userAdditionalInfoToJson(value: UserAdditionalInfo): any {
        return uncast(value, r("UserAdditionalInfo"));
    }

    public static toAddToList(json: any): AddToList {
        return cast(json, r("AddToList"));
    }

    public static addToListToJson(value: AddToList): any {
        return uncast(value, r("AddToList"));
    }

    public static toAPISettings(json: any): APISettings {
        return cast(json, r("APISettings"));
    }

    public static aPISettingsToJson(value: APISettings): any {
        return uncast(value, r("APISettings"));
    }

    public static toCategoryPageView(json: any): CategoryPageView {
        return cast(json, r("CategoryPageView"));
    }

    public static categoryPageViewToJson(value: CategoryPageView): any {
        return uncast(value, r("CategoryPageView"));
    }

    public static toChangeItemStockState(json: any): ChangeItemStockState {
        return cast(json, r("ChangeItemStockState"));
    }

    public static changeItemStockStateToJson(value: ChangeItemStockState): any {
        return uncast(value, r("ChangeItemStockState"));
    }

    public static toCheckoutStart(json: any): CheckoutStart {
        return cast(json, r("CheckoutStart"));
    }

    public static checkoutStartToJson(value: CheckoutStart): any {
        return uncast(value, r("CheckoutStart"));
    }

    public static toPurchaseTransaction(json: any): PurchaseTransaction {
        return cast(json, r("PurchaseTransaction"));
    }

    public static purchaseTransactionToJson(value: PurchaseTransaction): any {
        return uncast(value, r("PurchaseTransaction"));
    }

    public static toCosts(json: any): Costs {
        return cast(json, r("Costs"));
    }

    public static costsToJson(value: Costs): any {
        return uncast(value, r("Costs"));
    }

    public static toTaxes(json: any): Taxes {
        return cast(json, r("Taxes"));
    }

    public static taxesToJson(value: Taxes): any {
        return uncast(value, r("Taxes"));
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

    public static toRemoveItem(json: any): RemoveItem {
        return cast(json, r("RemoveItem"));
    }

    public static removeItemToJson(value: RemoveItem): any {
        return uncast(value, r("RemoveItem"));
    }

    public static toUpsertItem(json: any): UpsertItem {
        return cast(json, r("UpsertItem"));
    }

    public static upsertItemToJson(value: UpsertItem): any {
        return uncast(value, r("UpsertItem"));
    }

    public static toProductDetails(json: any): ProductDetails {
        return cast(json, r("ProductDetails"));
    }

    public static productDetailsToJson(value: ProductDetails): any {
        return uncast(value, r("ProductDetails"));
    }

    public static toImage(json: any): Image {
        return cast(json, r("Image"));
    }

    public static imageToJson(value: Image): any {
        return uncast(value, r("Image"));
    }

    public static toExactPrice(json: any): ExactPrice {
        return cast(json, r("ExactPrice"));
    }

    public static exactPriceToJson(value: ExactPrice): any {
        return uncast(value, r("ExactPrice"));
    }

    public static toListView(json: any): ListView {
        return cast(json, r("ListView"));
    }

    public static listViewToJson(value: ListView): any {
        return uncast(value, r("ListView"));
    }

    public static toOfflineRecommendationsRemove(json: any): OfflineRecommendationsRemove {
        return cast(json, r("OfflineRecommendationsRemove"));
    }

    public static offlineRecommendationsRemoveToJson(value: OfflineRecommendationsRemove): any {
        return uncast(value, r("OfflineRecommendationsRemove"));
    }

    public static toOfflineRecommendationsTypeClass(json: any): OfflineRecommendationsTypeClass {
        return cast(json, r("OfflineRecommendationsTypeClass"));
    }

    public static offlineRecommendationsTypeClassToJson(value: OfflineRecommendationsTypeClass): any {
        return uncast(value, r("OfflineRecommendationsTypeClass"));
    }

    public static toOfflineRecommendationsUpsert(json: any): OfflineRecommendationsUpsert {
        return cast(json, r("OfflineRecommendationsUpsert"));
    }

    public static offlineRecommendationsUpsertToJson(value: OfflineRecommendationsUpsert): any {
        return uncast(value, r("OfflineRecommendationsUpsert"));
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

    public static toPlacementRemove(json: any): PlacementRemove {
        return cast(json, r("PlacementRemove"));
    }

    public static placementRemoveToJson(value: PlacementRemove): any {
        return uncast(value, r("PlacementRemove"));
    }

    public static toPlacementStatisticsJSONReady(json: any): PlacementStatisticsJSONReady {
        return cast(json, r("PlacementStatisticsJSONReady"));
    }

    public static placementStatisticsJSONReadyToJson(value: PlacementStatisticsJSONReady): any {
        return uncast(value, r("PlacementStatisticsJSONReady"));
    }

    public static toLIFOVecForUint128(json: any): LIFOVecForUint128 {
        return cast(json, r("LIFOVecForUint128"));
    }

    public static lIFOVecForUint128ToJson(value: LIFOVecForUint128): any {
        return uncast(value, r("LIFOVecForUint128"));
    }

    public static toSuccessTries(json: any): SuccessTries {
        return cast(json, r("SuccessTries"));
    }

    public static successTriesToJson(value: SuccessTries): any {
        return uncast(value, r("SuccessTries"));
    }

    public static toPlacementUpsert(json: any): PlacementUpsert {
        return cast(json, r("PlacementUpsert"));
    }

    public static placementUpsertToJson(value: PlacementUpsert): any {
        return uncast(value, r("PlacementUpsert"));
    }

    public static toWeightedGenericCandidateRec(json: any): WeightedGenericCandidateRec {
        return cast(json, r("WeightedGenericCandidateRec"));
    }

    public static weightedGenericCandidateRecToJson(value: WeightedGenericCandidateRec): any {
        return uncast(value, r("WeightedGenericCandidateRec"));
    }

    public static toGenericStrategyClass(json: any): GenericStrategyClass {
        return cast(json, r("GenericStrategyClass"));
    }

    public static genericStrategyClassToJson(value: GenericStrategyClass): any {
        return uncast(value, r("GenericStrategyClass"));
    }

    public static toPurchaseComplete(json: any): PurchaseComplete {
        return cast(json, r("PurchaseComplete"));
    }

    public static purchaseCompleteToJson(value: PurchaseComplete): any {
        return uncast(value, r("PurchaseComplete"));
    }

    public static toRankingModelTrainRequest(json: any): RankingModelTrainRequest {
        return cast(json, r("RankingModelTrainRequest"));
    }

    public static rankingModelTrainRequestToJson(value: RankingModelTrainRequest): any {
        return uncast(value, r("RankingModelTrainRequest"));
    }

    public static toRankingModel(json: any): RankingModel {
        return cast(json, r("RankingModel"));
    }

    public static rankingModelToJson(value: RankingModel): any {
        return uncast(value, r("RankingModel"));
    }

    public static toXGBoostParams(json: any): XGBoostParams {
        return cast(json, r("XGBoostParams"));
    }

    public static xGBoostParamsToJson(value: XGBoostParams): any {
        return uncast(value, r("XGBoostParams"));
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

    public static toLocationClass(json: any): LocationClass {
        return cast(json, r("LocationClass"));
    }

    public static locationClassToJson(value: LocationClass): any {
        return uncast(value, r("LocationClass"));
    }

    public static toPageInfo(json: any): PageInfo {
        return cast(json, r("PageInfo"));
    }

    public static pageInfoToJson(value: PageInfo): any {
        return uncast(value, r("PageInfo"));
    }

    public static toSearchInfo(json: any): SearchInfo {
        return cast(json, r("SearchInfo"));
    }

    public static searchInfoToJson(value: SearchInfo): any {
        return uncast(value, r("SearchInfo"));
    }

    public static toRecoShow(json: any): RecoShow {
        return cast(json, r("RecoShow"));
    }

    public static recoShowToJson(value: RecoShow): any {
        return uncast(value, r("RecoShow"));
    }

    public static toProductDetailsRecoShow(json: any): ProductDetailsRecoShow {
        return cast(json, r("ProductDetailsRecoShow"));
    }

    public static productDetailsRecoShowToJson(value: ProductDetailsRecoShow): any {
        return uncast(value, r("ProductDetailsRecoShow"));
    }

    public static toStrategiesUsedClass(json: any): StrategiesUsedClass {
        return cast(json, r("StrategiesUsedClass"));
    }

    public static strategiesUsedClassToJson(value: StrategiesUsedClass): any {
        return uncast(value, r("StrategiesUsedClass"));
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

    public static toSearchItems(json: any): SearchItems {
        return cast(json, r("SearchItems"));
    }

    public static searchItemsToJson(value: SearchItems): any {
        return uncast(value, r("SearchItems"));
    }

    public static toCartPageView(json: any): CartPageView {
        return cast(json, r("CartPageView"));
    }

    public static cartPageViewToJson(value: CartPageView): any {
        return uncast(value, r("CartPageView"));
    }

    public static toSmartSearchRequest(json: any): SmartSearchRequest {
        return cast(json, r("SmartSearchRequest"));
    }

    public static smartSearchRequestToJson(value: SmartSearchRequest): any {
        return uncast(value, r("SmartSearchRequest"));
    }

    public static toSmartSearchShow(json: any): SmartSearchShow {
        return cast(json, r("SmartSearchShow"));
    }

    public static smartSearchShowToJson(value: SmartSearchShow): any {
        return uncast(value, r("SmartSearchShow"));
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
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "EventDetail": o([
        { json: "event_attributes", js: "event_attributes", typ: u(undefined, u(m(""), null)) },
        { json: "experiment_ids", js: "experiment_ids", typ: u(undefined, u(0, null)) },
        { json: "rec_id", js: "rec_id", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: "" },
    ], "any"),
    "ItemDetails": o([
        { json: "currency_code", js: "currency_code", typ: u(undefined, u(r("Currency"), null)) },
        { json: "display_price", js: "display_price", typ: u(undefined, u(3.14, null)) },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "original_price", js: "original_price", typ: u(undefined, u(3.14, null)) },
        { json: "quantity", js: "quantity", typ: u(undefined, u(0, null)) },
    ], "any"),
    "UserInfo": o([
        { json: "additional_info", js: "additional_info", typ: u(undefined, u(null, r("UserAdditionalInfo"))) },
        { json: "privacy_setting", js: "privacy_setting", typ: u(undefined, u(r("PrivacySetting"), null)) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_id", js: "user_id", typ: u(undefined, u(null, "")) },
        { json: "visitor_id", js: "visitor_id", typ: "" },
    ], "any"),
    "UserAdditionalInfo": o([
        { json: "birth_year", js: "birth_year", typ: u(undefined, u(0, null)) },
        { json: "gender", js: "gender", typ: u(undefined, u(r("Gender"), null)) },
        { json: "ip", js: "ip", typ: u(undefined, u(null, "")) },
        { json: "location", js: "location", typ: u(undefined, u(null, "")) },
        { json: "session_id", js: "session_id", typ: u(undefined, u(null, "")) },
        { json: "user_agent", js: "user_agent", typ: u(undefined, u(null, "")) },
    ], "any"),
    "AddToList": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "list_id", js: "list_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "APISettings": o([
        { json: "url_api", js: "url_api", typ: "" },
    ], "any"),
    "CategoryPageView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "on_screen", js: "on_screen", typ: true },
        { json: "page_categories", js: "page_categories", typ: u(undefined, u(a(""), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ChangeItemStockState": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "stock_state", js: "stock_state", typ: r("StockState") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "CheckoutStart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "purchase_transaction", js: "purchase_transaction", typ: r("PurchaseTransaction") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PurchaseTransaction": o([
        { json: "costs", js: "costs", typ: u(undefined, u(null, r("Costs"))) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "id", js: "id", typ: u(undefined, u(null, "")) },
        { json: "revenue", js: "revenue", typ: 3.14 },
        { json: "taxes", js: "taxes", typ: u(undefined, u(null, r("Taxes"))) },
    ], "any"),
    "Costs": o([
        { json: "cost", js: "cost", typ: u(undefined, u(3.14, null)) },
        { json: "manufacturing", js: "manufacturing", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "Taxes": o([
        { json: "local", js: "local", typ: u(undefined, u(3.14, null)) },
        { json: "state", js: "state", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "DetailProductView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "rec_id", js: "rec_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "HomePageView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ImageInteraction": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RemoveItem": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item_id", js: "item_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "UpsertItem": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: 0 },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "product_details", js: "product_details", typ: r("ProductDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
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
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: u(undefined, u(a(r("Image")), null)) },
        { json: "item_group_id", js: "item_group_id", typ: u(undefined, u(null, "")) },
        { json: "language_code", js: "language_code", typ: u(undefined, u(null, "")) },
        { json: "numeric_attributes", js: "numeric_attributes", typ: u(undefined, u(m(3.14), null)) },
        { json: "price", js: "price", typ: r("ExactPrice") },
        { json: "product_code", js: "product_code", typ: u(undefined, u(null, "")) },
        { json: "stock_state", js: "stock_state", typ: r("StockState") },
        { json: "tags", js: "tags", typ: u(undefined, u(a(""), null)) },
        { json: "title", js: "title", typ: "" },
    ], "any"),
    "Image": o([
        { json: "height", js: "height", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "width", js: "width", typ: "" },
    ], "any"),
    "ExactPrice": o([
        { json: "display_price", js: "display_price", typ: 3.14 },
        { json: "original_price", js: "original_price", typ: 3.14 },
    ], "any"),
    "ListView": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "list_id", js: "list_id", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "OfflineRecommendationsRemove": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "name", js: "name", typ: u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "OfflineRecommendationsTypeClass": o([
        { json: "OtherSimilarity", js: "OtherSimilarity", typ: "" },
    ], false),
    "OfflineRecommendationsUpsert": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "matrix", js: "matrix", typ: m(m(0)) },
        { json: "name", js: "name", typ: u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "OtherInteraction": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "interaction_name", js: "interaction_name", typ: "" },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PageVisit": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PlacementRemove": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "name", js: "name", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "PlacementStatisticsJSONReady": o([
        { json: "loading_times_microseconds", js: "loading_times_microseconds", typ: m(r("LIFOVecForUint128")) },
        { json: "placements_statistics", js: "placements_statistics", typ: m(a(a(u(r("GenericStrategyEnum"), r("SuccessTries"))))) },
    ], "any"),
    "LIFOVecForUint128": o([
        { json: "base", js: "base", typ: a(0) },
        { json: "capacity", js: "capacity", typ: 0 },
    ], "any"),
    "SuccessTries": o([
        { json: "SimilarOffline", js: "SimilarOffline", typ: u(undefined, u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum"))) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
        { json: "n_impressions", js: "n_impressions", typ: u(undefined, 0) },
        { json: "n_success", js: "n_success", typ: u(undefined, 0) },
    ], "any"),
    "PlacementUpsert": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "name", js: "name", typ: "" },
        { json: "ranking", js: "ranking", typ: r("RankingStrategy") },
        { json: "strategies", js: "strategies", typ: a(r("WeightedGenericCandidateRec")) },
        { json: "url_params", js: "url_params", typ: u(undefined, u(m(""), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "WeightedGenericCandidateRec": o([
        { json: "strategy", js: "strategy", typ: u(r("GenericStrategyClass"), r("GenericStrategyEnum")) },
        { json: "weight", js: "weight", typ: u(a(3.14), 3.14) },
    ], "any"),
    "GenericStrategyClass": o([
        { json: "SimilarOffline", js: "SimilarOffline", typ: u(undefined, u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum"))) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
    ], false),
    "PurchaseComplete": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "purchase_transaction", js: "purchase_transaction", typ: r("PurchaseTransaction") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RankingModelTrainRequest": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "model", js: "model", typ: r("RankingModel") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RankingModel": o([
        { json: "XGBoost", js: "XGBoost", typ: r("XGBoostParams") },
    ], false),
    "XGBoostParams": o([
        { json: "boost_rounds", js: "boost_rounds", typ: 0 },
        { json: "booster_type", js: "booster_type", typ: r("XGBoostBoosterType") },
        { json: "dart_one_drop", js: "dart_one_drop", typ: u(undefined, u(true, null)) },
        { json: "dart_rate_drop", js: "dart_rate_drop", typ: u(undefined, u(3.14, null)) },
        { json: "dart_skip_drop", js: "dart_skip_drop", typ: u(undefined, u(3.14, null)) },
        { json: "objective", js: "objective", typ: r("XGBoostObjective") },
        { json: "tree_alpha", js: "tree_alpha", typ: u(undefined, u(0, null)) },
        { json: "tree_colsample_bylevel", js: "tree_colsample_bylevel", typ: u(undefined, u(3.14, null)) },
        { json: "tree_colsample_bytree", js: "tree_colsample_bytree", typ: u(undefined, u(3.14, null)) },
        { json: "tree_eta", js: "tree_eta", typ: u(undefined, u(3.14, null)) },
        { json: "tree_gamma", js: "tree_gamma", typ: u(undefined, u(0, null)) },
        { json: "tree_lambda", js: "tree_lambda", typ: u(undefined, u(0, null)) },
        { json: "tree_max_bin", js: "tree_max_bin", typ: u(undefined, u(0, null)) },
        { json: "tree_max_depth", js: "tree_max_depth", typ: u(undefined, u(0, null)) },
        { json: "tree_min_child_weight", js: "tree_min_child_weight", typ: u(undefined, u(0, null)) },
        { json: "tree_subsample", js: "tree_subsample", typ: u(undefined, u(3.14, null)) },
    ], "any"),
    "RateProduct": o([
        { json: "comment", js: "comment", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "rating", js: "rating", typ: u(undefined, u(3.14, null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RecoRequest": o([
        { json: "additional_uri_params", js: "additional_uri_params", typ: u(undefined, u(m(""), null)) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "location", js: "location", typ: u(r("LocationClass"), r("LocationEnum")) },
        { json: "n_items", js: "n_items", typ: 0 },
        { json: "placement_name", js: "placement_name", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "LocationClass": o([
        { json: "ProductPage", js: "ProductPage", typ: u(undefined, "") },
        { json: "AddToCart", js: "AddToCart", typ: u(undefined, "") },
        { json: "CategoryPage", js: "CategoryPage", typ: u(undefined, a("")) },
        { json: "SearchPage", js: "SearchPage", typ: u(undefined, r("SearchInfo")) },
        { json: "CheckoutPage", js: "CheckoutPage", typ: u(undefined, a("")) },
        { json: "OtherPage", js: "OtherPage", typ: u(undefined, r("PageInfo")) },
        { json: "UnknownPage", js: "UnknownPage", typ: u(undefined, r("PageInfo")) },
    ], false),
    "PageInfo": o([
        { json: "content", js: "content", typ: u(undefined, u(null, "")) },
        { json: "url", js: "url", typ: u(undefined, u(null, "")) },
    ], "any"),
    "SearchInfo": o([
        { json: "query", js: "query", typ: u(undefined, u(null, "")) },
    ], "any"),
    "RecoShow": o([
        { json: "additional_uri_params", js: "additional_uri_params", typ: u(undefined, u(m(""), null)) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "experiment_id", js: "experiment_id", typ: u(undefined, u(null, "")) },
        { json: "items", js: "items", typ: a(r("ProductDetailsRecoShow")) },
        { json: "location", js: "location", typ: u(r("LocationClass"), r("LocationEnum")) },
        { json: "placement_name", js: "placement_name", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "ProductDetailsRecoShow": o([
        { json: "canonical_product_uri", js: "canonical_product_uri", typ: u(undefined, u(null, "")) },
        { json: "canonical_product_uri_with_params", js: "canonical_product_uri_with_params", typ: u(undefined, u(null, "")) },
        { json: "categories", js: "categories", typ: u(undefined, u(a(a("")), null)) },
        { json: "currency_code", js: "currency_code", typ: r("Currency") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: u(undefined, u(a(r("Image")), null)) },
        { json: "price", js: "price", typ: r("ExactPrice") },
        { json: "product_code", js: "product_code", typ: "" },
        { json: "rec_id", js: "rec_id", typ: "" },
        { json: "score", js: "score", typ: u(undefined, u(3.14, null)) },
        { json: "strategies_used", js: "strategies_used", typ: u(undefined, u(a(a(u(r("StrategiesUsedClass"), 3.14, r("GenericStrategyEnum")))), null)) },
        { json: "strategy_selected", js: "strategy_selected", typ: u(r("GenericStrategyClass"), r("GenericStrategyEnum")) },
        { json: "title", js: "title", typ: "" },
        { json: "url_params", js: "url_params", typ: u(undefined, u(null, "")) },
    ], "any"),
    "StrategiesUsedClass": o([
        { json: "SimilarOffline", js: "SimilarOffline", typ: u(undefined, u(r("OfflineRecommendationsTypeClass"), r("OfflineRecommendationsTypeEnum"))) },
        { json: "StrategyBuilder", js: "StrategyBuilder", typ: u(undefined, "") },
    ], false),
    "RemoveFromCart": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "item", js: "item", typ: r("ItemDetails") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "RemoveFromList": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "list_id", js: "list_id", typ: u(undefined, u(null, "")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SearchItems": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "query", js: "query", typ: "" },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "CartPageView": o([
        { json: "cart_id", js: "cart_id", typ: u(undefined, u(null, "")) },
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ItemDetails")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SmartSearchRequest": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "filter", js: "filter", typ: m("") },
        { json: "n_items", js: "n_items", typ: 0 },
        { json: "page", js: "page", typ: 0 },
        { json: "query", js: "query", typ: "" },
        { json: "search_order", js: "search_order", typ: r("SearchOrder") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SmartSearchShow": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "items", js: "items", typ: a(r("ProductDetailsRecoShow")) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "SortItems": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "sort_order", js: "sort_order", typ: u(undefined, u(r("SortOrder"), null)) },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "UnknownEvent": o([
        { json: "event_detail", js: "event_detail", typ: u(undefined, u(null, r("EventDetail"))) },
        { json: "event_time", js: "event_time", typ: u(undefined, u(0, null)) },
        { json: "event_type", js: "event_type", typ: r("EventType") },
        { json: "user_info", js: "user_info", typ: r("UserInfo") },
    ], "any"),
    "EventType": [
        "AddToCart",
        "AddToList",
        "CartPageView",
        "CategoryPageView",
        "ChangeItemStockState",
        "CheckoutStart",
        "DetailProductView",
        "HomePageView",
        "ImageInteraction",
        "ItemRemove",
        "ItemUpsert",
        "ListView",
        "OfflineRecommendationsRemove",
        "OfflineRecommendationsUpsert",
        "OtherInteraction",
        "PageVisit",
        "PlacementRemove",
        "PlacementUpsert",
        "PurchaseComplete",
        "RankingModelTrainRequest",
        "RateProduct",
        "RecoRequest",
        "RecoShow",
        "RemoveFromCart",
        "RemoveFromList",
        "SearchItems",
        "SmartSearchRequest",
        "SmartSearchShow",
        "SortItems",
        "UnknownEvent",
    ],
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
    "PrivacySetting": [
        "NonPersonalized",
        "Personalized",
    ],
    "BuilderFn1": [
        "ArgMax",
        "ArgMin",
        "Invert",
    ],
    "BuilderFn2": [
        "Expand",
        "Intersect",
        "Less",
        "LessEq",
        "Lookup",
        "More",
        "MoreEq",
        "Remove",
        "Union",
    ],
    "BuilderVariable": [
        "ItemCurrent",
        "ItemsAlsoAddedToCartInSession",
        "ItemsAlsoBoughtInSession",
        "ItemsAlsoSeenInSession",
        "ItemsInCart",
        "ItemsRecommendedSessionCounter",
        "ItemsSeenInSession",
        "ItemsVisitedCounter",
    ],
    "StockState": [
        "BackOrder",
        "InStock",
        "OutOfStock",
        "PreOrder",
    ],
    "OfflineRecommendationsTypeEnum": [
        "ImageSimilarity",
        "TextSimilarity",
    ],
    "GenericStrategyEnum": [
        "AlsoAddedToCart",
        "AlsoPurchased",
        "AlsoSeen",
        "BestsellerCategory",
        "BestsellerGlobal",
        "ContentMatching",
        "MostPurchases",
        "MostViews",
        "SearchMatching",
        "SeenInSession",
        "SeenInSessionCoccurAddedToCart",
        "SeenInSessionCoccurSeen",
        "SimilarAttributes",
        "Unknown",
    ],
    "RankingStrategy": [
        "DirichletSampling",
        "RankingModel",
        "ThompsonSampling",
        "WeightedSample",
    ],
    "XGBoostBoosterType": [
        "Dart",
        "Linear",
        "Tree",
    ],
    "XGBoostObjective": [
        "BinaryLogistic",
        "BinaryLogisticRaw",
        "RankPairwise",
        "RegLinear",
        "RegLogistic",
    ],
    "LocationEnum": [
        "Error404",
        "HomePage",
    ],
    "SearchOrder": [
        "Newest",
        "Oldest",
        "Personalized",
        "PopularityAsc",
        "PopularityDesc",
        "PriceAsc",
        "PriceDesc",
        "RatingAsc",
        "RatingDesc",
        "RelevanceAsc",
        "RelevanceDesc",
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
};
