declare namespace gigya {
  // region injected data
  let apiKey: string;
  let build: {
    number: number;
    version: string;
  };
  let configHostnameOverride: string;
  let dataCenter: string;
  let defaultApiDomain: string;
  let env: string;
  let gmidVersion: string;
  let gaeDomain: string;
  let partnerSettings: {
    authMode: string;
    baseDomain?: string;
    baseDomains: string[];
    captchaProvider: string;
    cname?: string;
    customAPIDomainPrefix?: string;
    funCaptcha: {
      siteKey: string;
    };
    globalConf?: string;
    gmidTicketExpiration?: number;
    invisibleRecaptcha: {
      siteKey: string;
    };
    plugins: {
      apiDomain: string;
    };
    recaptchaV2: {
      siteKey: string;
    };
    recaptchaV3: {
      siteKey: string;
    };
    recaptchaEnterprise: {
      siteKey: string;
    };
    siteGroupGlobalConf?: string;
    ssoKey?: string;
    ssoLogoutUrl?: string;
    ssoSegment?: string;
  };
  // endregion

  // region properties
  let abTesting: {
    disabledPaths?: Array<string>;
    enabledPaths?: Array<string>;
    service?: string;
    serviceParams?: Object;
  };
  let accounts: {
    auth: import('src/core/Gigya.Js/app/Authentication/AuthApis').IAuthApis & {
      [key: string]: any;
      fido: {
        initRegisterCredentials: (params) => void;
        registerCredentials: (params) => void;
        getAssertionOptions: (params) => void;
        verifyAssertion: (params) => void;
        register: (params) => void;
        login: (params) => void;
        getCredentials: () => void;
        removeCredential: (params) => void;
      };
    };
    [key: string]: any;
  };
  let oauth: any;
  let callback: any;
  let comments: any;
  let defaultEventMaps: any;
  let errorReport: {
    enabled: boolean;
    probability: number;
  };
  let gcs: any;
  let sso: any;
  let global: any;
  let globalAccount: {
    dataCenter: string;
  };
  let gm: any;
  let gmidTicketExpiration;
  let gscounters: any;
  let isGigya: boolean;
  let isReady: boolean;
  let XhrRequest: any;
  let localInfo: {
    androidVersion: number;
    backCompat: boolean;
    baseDomain: string;
    currentBrowser: string;
    initTime: Date;
    iosVersion: number;
    isAndroid: boolean;
    isAndroidBrowser: boolean;
    isBrowserSupportsFilesAPI: boolean;
    isChrome: boolean;
    isEdgeLegacy: boolean;
    isEdge: boolean;
    isFF: boolean;
    isFacebookBrowser: boolean;
    isGoogleBot: boolean;
    isIE: boolean;
    isIE10: boolean;
    isIE11: boolean;
    isIE6: boolean;
    isIE7: boolean;
    isIE8: boolean;
    isIE9: boolean;
    isIOS: boolean;
    isIOSChrome: boolean;
    isIOSWebView: boolean;
    isMAC: boolean;
    isMobile: boolean;
    isMobileApp: boolean;
    isNativeMobileApp: boolean;
    isOnLine: boolean;
    isOpera: boolean;
    isSafari: boolean;
    isSafari534: boolean;
    isTouch: boolean;
    isWeChat: boolean;
    isWin: boolean;
    isWindowsPhone: boolean;
    messagingMethod: number;
    pageDomain: string;
    protocol: string;
    quirksMode: boolean;
    supportsFlash: boolean;
    supportsLocalStorage: boolean;
    supportsPostMessage: boolean;
    supportsSessionStorage: boolean;
    userAgent: string;
    version: number;
  };
  let pluginTypes: {
    comments: any;
  };
  let pluginUtils: any;
  let providersConfig: {
    facebook?: {
      appID: string;
      version: string;
    };
    googlePlus?: {
      scopes: string;
      clientId: string;
    };
  };
  let samlConfig: gigya._.saml.ISamlConfig;
  let setAccountResidency: (da: string) => void;
  let socialize: any;
  let thisScript: {
    APIKey: string;
    baseDomain: string;
    globalConf: Object & {
      toggles?: Object;
      APIKey?: string;
      defaultRegScreenSet?: string;
      defaultMobileRegScreenSet?: string;
    };
    lang: Lang;
    protocol: string;
    scriptElement: HTMLScriptElement;
    URLParams: Object;
  };
  // endregion

  // region constants
  const i18n: Object;
  const logger: ILogger;

  // endregion

  // region enums
  enum LogLevel {
    disabled = 0,
    debug = 1,
    info = 2,
    warn = 3,
    error = 4,
  }

  const enum ClientMuteLevel {
    none = 0,
    normal = 1,
    all = 2,
  }

  const enum LogTheme {
    // noinspection JSUnusedGlobalSymbols
    none = 0,
    dark = 1,
    light = 2,
  }

  const enum GSErrors {
    // noinspection JSUnusedGlobalSymbols
    OK = 0,
    Data_Pending = 100001,
    NETWORK_ERROR = 500026,
    DATA_PENDING = 100001,
    OPERATION_CANCELED = 200001,
    PERMISSION_GRANTED = 200002,
    PERMISSION_NOT_GRANTED = 200003,
    REDIRECT = 200004,
    NEW_USER = 200005,
    OPERATION_DONE = 200006,
    UPDATE_USER = 200007,
    OK_WITH_ERRORS = 200008,
    ACCOUNTS_LINKED = 200009,
    OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS = 200010,
    ACCOUNT_PENDING_REGISTRATION = 206001,
    ACCOUNT_PENDING_VERIFICATION = 206002,
    ACCOUNT_MISSING_LOGINID = 206003,
    IDENTITY_ALREADY_ASSIGNED = 206004,
    AFTER_EMAIL_VERIFICATION = 206005,
    PENDING_CODE_VERIFICATION = 206006,
    CLIENT_LOG = 300001,
    INVALID_DATA_CENTER = 301001,
    INVALID_REQUEST_FORMAT = 400001,
    MISSING_REQUIRED_PARAMETER = 400002,
    UNIQUE_IDENTIFIER_EXISTS = 400003,
    INVALID_PARAMETER_FORMAT = 400004,
    INVALID_PARAMETER_VALUE = 400006,
    DUPLICATE_VALUE = 400007,
    INVALID_AUTHENTICATION_HEADER = 400008,
    VALIDATION_ERROR = 400009,
    INVALID_REDIRECT_URI = 400011,
    INVALID_RESPONSE_TYPE = 400012,
    UNSUPPORTED_GRANT_TYPE = 400013,
    INVALID_GRANT = 400014,
    CODE_EXPIRED = 400015,
    SCHEMA_VALIDATION_FAILED = 400020,
    CAPTCHA_VERIFICATION_FAILED = 400021,
    UNIQUE_INDEX_VALIDATION_ERROR = 400022,
    INVALID_TYPE_VALIDATION_ERROR = 400023,
    DYNAMIC_FIELDS_VALIDATION_ERROR = 400024,
    WRITE_ACCESS_VALIDATION_ERROR = 400025,
    INVALID_FORMAT_VALIDATION_ERROR = 400026,
    REQUIRED_VALUE_VALIDATION_ERROR = 400027,
    EMAIL_NOT_VERIFIED = 400028,
    SCHEMA_CONFLICT_ERROR = 400029,
    OPERATION_NOT_ALLOWED = 400030,
    SECURITY_VERIFICATION_FAILED = 400050,
    INVALID_APIKEY_PARAMETER = 400093,
    NOT_SUPPORTED = 400096,
    UNSUPPORTED_USER_AGENT = 400097,
    NO_PROVIDERS = 400100,
    POPUP_BLOCKED = 400101,
    INVALID_EVENT_HANDLER = 400102,
    INVALID_CONTAINERID = 400103,
    NOT_CONNECTED = 400106,
    INVALID_SITE_DOMAIN = 400120,
    PROVIDER_CONFIGURATION_ERROR = 400122,
    LIMIT_REACHED = 400124,
    FREQUENCY_LIMIT_REACHED = 400125,
    INVALID_ACTION = 400126,
    INSUFFICIENT_POINTS_TO_REDEEM = 400127,
    SIGNATURE_TIMESTAMP_EXPIRED = 400128,
    INVALID_POLICY_CONFIGURATION = 401000,
    SUSPECTED_SPAM = 401010,
    LOGIN_FAILED_CAPTCHA_REQUIRED = 401020,
    LOGIN_FAILED_WRONG_CAPTCHA = 401021,
    OLD_PASSWORD_USED = 401030,
    FORBIDDEN = 403000,
    INVALID_SESSION_TOKEN = 403001,
    REQUEST_HAS_EXPIRED = 403002,
    INVALID_REQUEST_SIGNATURE = 403003,
    DUPLICATE_NONCE = 403004,
    UNAUTHORIZED_USER = 403005,
    SENSITIVE_DATA_SENT_OVER_HTTP = 403006,
    PERMISSION_DENIED = 403007,
    INVALID_OPENID_URL = 403008,
    PROVIDER_SESSION_EXPIRED = 403009,
    INVALID_SECRET = 403010,
    SESSION_HAS_EXPIRED = 403011,
    NO_VALID_SESSION = 403012,
    UNVERIFIED_USER = 403013,
    MISSING_REQUEST_REFERRER = 403015,
    UNEXPECTED_PROVIDER_USER = 403017,
    PERMISSION_NOT_REQUESTED = 403022,
    NO_USER_PERMISSION = 403023,
    PROVIDER_LIMIT_REACHED = 403024,
    INVALID_TOKEN = 403025,
    UNAUTHORIZED_ACCESS_ERROR = 403026,
    DIFFERENT_USER_FOR_REAUTH = 403027,
    SESSION_EXPIRED_RETRY = 403030,
    APPROVED_BY_MODERATOR = 403031,
    TOKEN_HAS_RENEWED = 403032,
    NO_USER_COOKIE = 403035,
    UNAUTHORIZED_PARTNER = 403036,
    POST_DENIED = 403037,
    NO_LOGIN_TICKET = 403040,
    ACCOUNT_DISABLED = 403041,
    INVALID_LOGINID = 403042,
    LOGIN_IDENTIFIER_EXISTS = 403043,
    UNDERAGE_USER = 403044,
    INVALID_SITE_CONFIGURATION_ERROR = 403045,
    LOGINID_DOES_NOT_EXIST = 403047,
    API_RATE_LIMIT_EXCEEDED = 403048,
    PENDING_PASSWORD_CHANGE = 403100,
    ACCOUNT_PENDING_TFA_VERIFICATION = 403101,
    ACCOUNT_PENDING_TFA_REGISTRATION = 403102,
    ACCOUNT_PENDING_RECENT_LOGIN = 403110,
    ACCOUNT_TEMPORARILY_LOCKED_OUT = 403120,
    REDUNDANT_OPERATION = 403200,
    INVALID_APPLICATION_ID = 403201,
    NOT_FOUND = 404000,
    FRIEND_NOT_FOUND = 404001,
    CATEGORY_NOT_FOUND = 404002,
    UID_NOT_FOUND = 404003,
    RESOURCE_NOT_FOUND = 404004,
    INVALID_API_METHOD = 405001,
    IDENTITY_EXISTS = 409001,
    GONE = 410000,
    REQUEST_ENTITY_TOO_LARGE = 413001,
    COMMENT_TEXT_TOO_LARGE = 413002,
    OBJECT_TOO_LARGE = 413003,
    PROFILE_PHOTO_TOO_LARGE = 413004,
    REQUEST_URI_TOO_LONG = 414000,
    MISSING_USER_PHOTO = 409010,
    COUNTER_NOT_REGISTERED = 409011,
    INVALID_GMID_TICKET = 409012,
    SAML_MAPPED_ATTRIBUTE_NOT_FOUND = 409013,
    SAML_CERTIFICATE_NOT_FOUND = 409014,
    SAML_MESSAGE_NOT_FOUND = 409015,
    GENERAL_SERVER_ERROR = 500001,
    SERVER_LOGIN_ERROR = 500002,
    DEFAULT_APPLICATION_CONFIGURATION_ERROR = 500003,
    SESSION_MIGRATION_ERROR = 500014,
    PROVIDER_ERROR = 500023,
    DATABASE_ERROR = 500028,
    USERNAME_REQUIRED = 500029,
    NO_PROVIDER_APPLICATION = 500031,
    LOAD_FAILED = 500032,
    INVALID_ENVIRONMENT_CONFIG = 500033,
    ERROR_DURING_BACKEND_OPERATION = 500034,
    TIMEOUT = 504001,
    CLIENTTIMEOUT = 504002,
    INVALID_URL = 404004,
    MEDIA_ITEMS_NOT_SUPPORTED = 401001,
    MISSING_ERROR_CODE = 599999,
    THIS_AUTHENTICATION_METHOD_IS_CURRENTLY_DISABLED = 403300,
    FORCE_LINK_LOGIN_IDENTIFIER_EXISTS = 409003,
  }

  // endregion

  // region interfaces
  interface GigGlobal {
    addEventListener?: any;
    console: Console;
    Proxy?: any;
    top?: any;
  }

  interface IDisposable {
    dispose: () => void;
    onDisposedEvent?: () => _.EventWrapper<() => void>;
  }

  interface IElementActualSize {
    height: number;
    width: number;
  }

  interface IElementSize {
    height?: string;
    minHeight?: string;
    minWidth?: string;
    width?: string;
  }

  interface IGroupCloser {
    end(): void;

    endWhen(doneWhen: Promise<any> | (() => void | Promise<any>)): void;
  }

  interface ILogger {
    configKey: string;
    isEnabled: boolean;

    debug(message: string, details?: { [key: string]: any }): void;

    disable(): void;

    enable(
      logLevel?: LogLevel,
      clientMuteLevel?: ClientMuteLevel,
      logTheme?: LogTheme
    ): void;

    error(
      message: string,
      details?: {
        [key: string]: any;
      }
    ): void;

    getConfig(): ILoggerConfig;

    group(groupTitle: string, collapsed?: boolean): IGroupCloser;

    groupEnd(groupTitle: string): void;

    info(message: string, details?: { [key: string]: any }): void;

    report(
      message: string,
      details?: { [key: string]: any },
      includeStack?: boolean,
      forceReport?: boolean
    ): void;

    warn(message: string, details?: { [key: string]: any }): void;
  }

  interface ILoggerConfig {
    clientMuteLevel: ClientMuteLevel;
    logLevel: LogLevel;
    logTheme: LogTheme;
  }

  interface IViewportSize extends IElementActualSize {
    orientation: number;
  }

  interface Lang {
    countryCode: string;
    full: string;
    langCode: string;
    originalLang: string;
  }

  interface IEventData {
    workflowDefinitionId: string;
    eventName: string;
    data?: any;
  }
  // endregion

  // region types
  type ILogFunc = (
    message: string,
    details?: {
      [key: string]: any;
    }
  ) => void;
  // endregion

  // region functions
  function loggerJsonp(endpoint: string, params: string): void;

  function setSSOToken(params: { redirectURL: string }): Promise<void>;

  function bootstrap(): void;

  function getUrlParam(param: string);

  function getLoginToken();

  function updateConfiguration(config: Object);

  function hasSession(): Promise<boolean>;

  function flow(flowID: string): Flow;
  // endregion

  // region classes
  abstract class BaseLogger implements ILogger {
    readonly configKey: string;

    protected constructor(_global: GigGlobal);

    abstract report(
      message: string,
      details?: {
        [key: string]: any;
      }
    ): any;

    getConfig(): ILoggerConfig;

    readonly isEnabled: boolean;
    private readonly logLevel;

    private log(severity);

    readonly debug: ILogFunc;
    readonly info: ILogFunc;
    readonly warn: ILogFunc;
    readonly error: ILogFunc;

    group(groupTitle: string, collapsed?: boolean): IGroupCloser;

    groupEnd(groupTitle: string): void;

    enable(
      logLevel?: LogLevel,
      clientMuteLevel?: ClientMuteLevel,
      logTheme?: LogTheme
    ): void;

    disable(): void;
  }

  class IFrameLogger extends BaseLogger {
    constructor(_global?: GigGlobal);

    report(
      message: string,
      details: {
        [key: string]: any;
      }
    ): void;
  }

  class ParentLogger extends BaseLogger {
    private _random;

    constructor(
      _global?: GigGlobal,
      _errorReportConfig?: {
        enabled: boolean;
        probability: number;
      },
      _canaryConfig?: {
        isActive: boolean;
      },
      _random?: () => number,
      _jsonp?: typeof loggerJsonp
    );

    report(
      message: string,
      details: {
        [key: string]: any;
      }
    ): void;
  }

  class Flow {
    public execute(): void;
    public error(handler: (error: any) => Promise<void> | void): Flow;
    public on(eventName: string, handler: (eventData: IEventData) => void);
  }
  // endregion

  // region namespaces
  namespace _ {
    // region properties
    let apiAdapter: apiAdapters.IApiAdapter;
    let arApiList: (ServerApi | UiApi | api.VersionSelector)[];
    let autoLoginInProgress: boolean;
    let config: IWebSdkConfig;
    let getApiDomain: (namespace?: string) => string;
    let history: any;
    let isTrustedDomain: boolean;
    let logoutBehaviour: {
      alwaysSendLogoutToServer: boolean;
      logoutBeforeServerResponse: boolean;
    };
    let logoutMethods: {
      'accounts.logout': number;
      'socialize.deleteAccount': number;
      'socialize.logout': number;
      'socialize.unlinkAccounts': number;
    };
    let passkeyService: {
      register: Function;
      waitForService: Function;
      authenticate: Function;
      isSupported: Function;
      removePasskey: Function;
      on: Function;
      remove: Function;
    };
    let Poller: any;
    // endregion

    // region constants
    const BaseObject: any;
    const bookmarkSize: {
      digg: {
        h: number;
        w: number;
      };
      facebook: {
        h: number;
        w: number;
      };
      googlebookmarks: {
        h: number;
        w: number;
      };
      googleplus: {
        h: number;
        w: number;
      };
      linkedin: {
        h: number;
        w: number;
      };
      messenger: {
        h: number;
        w: number;
      };
      mixi: {
        h: number;
        w: number;
      };
      twitter: {
        h: number;
        w: number;
      };
      yahoobookmarks: {
        h: number;
        w: number;
      };
    };
    const CDN_HOSTS: {
      http: string[];
      https: string[];
    };
    // endregion

    // region classes
    abstract class BaseApi {
      methodName: string;
      settings: ApiSettings;

      constructor(methodName: string, settings: ApiSettings);

      abstract run(params: Object, explicitParams: Object): void;
    }

    class EventWrapper<T extends Function> {
      private _handlers;

      constructor(_handlers?: Array<T>);

      add(handler: T): void;

      remove(handler: T): void;
    }

    class ServerApi extends BaseApi {
      schema: string;

      settings: ServerApiSettings;

      constructor(
        apiMethod: string,
        schema: string,
        requiresSession?: boolean,
        settings?: ServerApiSettings,
        adapterSettings?: apiAdapters.ApiAdapterSettings,
        altSessionParams?: string
      );

      run(params: Object, explicitParams?: Object): void;
    }

    class ServerApiRequest {
      api: ServerApi;
      params: Object;

      private callback;

      constructor(api: ServerApi, params: Object);

      start(): void;

      private sendRequest(validSession);

      private beforeRequest(validSession, callback);
    }

    class UiApi extends BaseApi implements IUiApiInfo {
      methodName: string;
      jsName: string;
      settings: UiApiSettings;
      private injectionInfo;

      namespace: string;
      className: string;

      constructor(
        methodName: string,
        jsName: string,
        defaultParams?: Object,
        defaultPopupParams?: Object,
        requiredParams?: string,
        settings?: UiApiSettings
      );

      static getApiName(
        jsName: string,
        methodName: string,
        settings?: UiApiSettings
      ): string;

      static versionSelector(
        methodName: string,
        namespace: string,
        defaultVersion: string,
        versions: IPluginVersionInfo[],
        versionField?: string
      ): api.VersionSelector;

      static createApi(
        methodName: string,
        namespace: string,
        className: string,
        jsName: string,
        settings?: UiApiSettings,
        instanceMethods?: string[]
      ): UiApi;

      preprocessRequest(params: Object, callback: () => void): void;

      run(params: Object, explicitParams: Object): void;
    }

    class Uri {
      constructor(url: string, isAbsolute?: boolean);

      readonly domain: string;
      readonly path: string;
      readonly search: string;
      readonly hash: string;
      readonly href: string;

      toString(): string;

      isBaseOf(url: string): boolean;

      isIn(base: Uri): boolean;

      isForSubDomains(): boolean;

      isSubDomainOf(base: Uri): boolean;

      static parse(url: string, isAbsolute?: boolean): Uri;
      public addToSearch(params: Object): this;
    }

    class WindowProvider {
      static navigator(): Navigator;
      static document(): Document;
      static screen(): Screen;
    }
    // endregion

    // region functions
    function addUserInfoToEvent(
      response: Object,
      targetObject: Object,
      addLoginProperties?: boolean,
      useBasePhotoURL?: string
    ): Object;

    function apiDomainFactory(
      apiDomain?: string,
      defaultApiDomain?: string
    ): (namespace?: string) => string;

    function convertIdentitiesArrayToObject(o: any): void;

    function getBaseDomain(
      baseDomains?: string[],
      currentDomain?: string,
      defaultDomains?: string[]
    ): string;

    function getCdnResource(path?: string): string;

    function getGigyaDomain(
      namespace?: string,
      dataCenter?: string,
      defaultDomain?: string
    ): string;

    function getImgCdnResource(): string;

    function resolveApiDomain(
      customApiDomainPrefix?: string,
      baseDomain?: string,
      dataCenter?: string,
      defaultApiDomain?: string
    ): string;

    function sendEmailNative(params: Object): void;

    function getSdkConfig(
      domain?: string,
      retries?: number
    ): Promise<IWebSdkConfig>;
    // endregion

    // region interfaces
    type ToggleValue = 'on' | 'off' | 'logOnly';

    interface IWebSdkConfig {
      flags: { [key: string]: boolean };
      plugins: IWebSdkConfigPlugin;
      api?: IApiServiceConfig;
      sso?: ISsoConfig;
      hostedPagesDomain?: string;
      toggles?: {
        linkAccountV2?: ToggleValue;
        httpStatusCodes?: ToggleValue;
      };
      consent: {
        hasLicense: boolean;
        isMigrated?: boolean;
      };
    }
    interface IWebSdkConfigPlugin {
      connectWithoutLoginBehavior?: string;
      defaultRegScreenSet?: string;
      defaultMobileRegScreenSet?: string;
      sessionExpiration?: number;
      rememberSessionExpiration?: number;
      apiDomain?: string;
    }

    interface IApiServiceConfig {
      baseDomains: string[];
      ssoKey?: string;
      customAPIDomainPrefix?: string;
      gmidTicketExpiration: number;
    }

    interface ISsoConfig {
      validDomains: string[];
      logoutURLs: { [apiKey: string]: string };
      canaryCookiesNames?: ICanaryCookies;
    }

    interface ICanaryCookies {
      isCanary: string;
      version: string;
    }

    interface ApiSettings {
      defaultParams?: Object;
      forcePost?: boolean;
      disableCache?: boolean;
      preprocessor?: (params: Object, callback: () => void) => void;
      postprocessor?: (params: Object, response: Object) => void;
    }

    interface IBaseObjectParam {
      onError?: (e) => void;
    }

    interface IInjectionInfo {
      name: string;
      namespace: string;
      methodName: string;
      jsName: string;
      instanceMethods?: any;
      publicMethods?: {
        [publicMethodName: string]: IPublicMethod;
      };
    }

    interface IPlugin extends IDisposable {
      containerID: string;
      start: () => void;
      params: IBaseObjectParam;
    }

    interface IPublicMethod {
      instanceMethod: string;
      argNames: string[];
    }

    interface IPluginVersionInfo {
      versionName: string;
      method: string | Function;
      isSupported?: (params: { directCall: boolean }) => boolean;
      additionalParams?: {
        [field: string]: any;
      };
    }

    interface IUiApiInfo {
      namespace: string;
      methodName: string;
    }

    interface ServerApiSettings extends ApiSettings {
      oauth?: boolean;
    }

    interface UiApiSettings extends ApiSettings {
      useBasePlugin?: boolean;
      apiName?: string;
      waitForAPIQueue?: boolean;
      useNewModal?: boolean;
      requireSession?: boolean;
      allowPopup?: boolean;
      defaultParams?: Object;
      defaultPopupParams?: Object;
      requiredParams?: string;
      dontLoadPluginsCore?: boolean;
      ignoreContainerId?: boolean;
    }

    // endregion

    // region enums
    enum DeviceTypes {
      _undefined = 0,
      desktop = 1,
      mobile = 2,
      auto = 3,
    }

    enum MessagingMethod {
      // noinspection JSUnusedGlobalSymbols
      LocalStorageListener = 0,
      PostMessage = 1,
    }

    // endregion

    // region namespaces
    namespace api {
      class VersionSelector {
        methodName: string;

        private _defaultVersionIndex;

        constructor(
          methodName: string,
          _versions: IPluginVersionInfo[],
          defaultVersionName: string
        );

        callVersion(
          versionName: string,
          params?: Object,
          args?: Array<any>
        ): void;

        private findSupportedVersion(startIndex);

        private findVersionIndexOrDefault(versionName);

        private invokeVersionMethod(version, params?, args?);
      }
    }
    namespace apiAdapters {
      let web: any;

      interface IApiAdapter {
        init(callback: () => void, retries: number): Promise<void>;

        getStorage(): gigya.utils.localStorage.AbstractLocalStorageAdapter;

        isSessionValid(
          params: Object,
          callback: (isValid: boolean) => void
        ): void;

        sendRequest(
          methodName: string,
          params: Object,
          callback?: (response: Object) => void,
          settings?: ApiAdapterSettings
        ): void;

        sendOauthRequest(
          methodName: string,
          params: Object,
          callback?: (response: Object) => void,
          settings?: ApiAdapterSettings
        ): void;

        getTokenParam(APIKey: string, paramName: string): string;

        onPluginEvent(event: any): void;

        setGltexpFromSSO(apiKey?: string): Promise<boolean>;

        registerForNamespaceEvents(namespace: string): void;

        onSDKEvent(eventObject: Object): void;

        name: string;

        clearSession(params: Object, callback?: (res?: any) => void): void;

        onJSLog(logType: string, logInfo: string): void;

        getGmidTicket(): Promise<string | undefined>;

        syncSsoLogin(ssoLoginParams: Object): void;

        getPreferredLoginMethod(): string;

        setPreferredLoginMethod(value: string): void;
      }

      interface ApiAdapterSettings {
        forceHttps?: boolean; // required for old mobile sdks
        forcePost?: boolean;
        forceGigyaDomain?: boolean;
        disableCache?: boolean;
        requiresSession?: () => boolean;
        clearSession?: boolean;
        clearSessionCondition?: (params: any) => boolean;
        cacheTimeout?: number;
        jsSdkRequestId?: string;
        preprocessor?: (params, callback: () => void) => void;
        oauthMode?: OAuthMode;
      }

      enum OAuthMode {
        Social,
        Sso,
      }
    }
    namespace bootstrap {
      let parseScriptRetries: number;

      function init(): void;

      function parseScriptElement(callback: () => void): void;
    }
    namespace plugins {
      let LoadDimmer: any;
      let cssFlags: any;
      let resources: any;
      let utils: any;
      let BasePlugin: any;
      let instances: {
        [containerID: string]: IPlugin;
      };
      let ScreenSet: any;

      function removePluginInstance(
        params: Object,
        injectionInfo: IInjectionInfo
      ): void;
    }
    namespace providers {
      let arProviders: Provider[];

      class Provider {
        ID: number;
        displayName: string;
        width: number;
        height: number;

        name: string;
        arDefaultCapabilities: string[];

        constructor(
          ID: number,
          displayName: string,
          width: number,
          height: number,
          defaultCapabilities: string,
          explicitOnly?: boolean,
          aliases?: string
        );

        toString(): string;
      }

      function getProviderByName(
        provider: any,
        providersEnum?: Provider[]
      ): Provider;

      function hideProvidersByName(
        providers: Provider[],
        providersToHide?: string,
        providersEnum?: Provider[]
      ): Provider[];

      function getProvidersForRequiredCapabilities(
        providers: any,
        capabilities: any
      ): any[];

      function getAllProviders(): Provider[];

      function getProvidersByName(
        providers: string,
        providersEnum?: Provider[]
      ): any[];
    }
    namespace saml {
      interface ISamlConfig {
        errorPageURL?: string;
        proxyPageURL: string;
      }
    }
    namespace UI {
      function attachPlugin(
        pluginClass: any,
        namespace: any,
        pluginName: any,
        publicMethodName: any
      ): void;
    }
    // endregion
  }
  namespace boot {
    let ensureJsSdkLoaded: any;
  }
  namespace canary {
    let isActive: boolean;
    let isLoaded: boolean;
    const config: CanaryConfig;

    interface CanaryConfig {
      probability: number;
      version: string;
      cookiesNames: {
        isCanary: string;
        version: string;
      };
    }
  }
  namespace events {
    namespace global {
      interface IEventObject {}

      interface IEventHandlerInfo {
        handler: (e: IEventObject) => void;
        type?: string;
        context?: Object;
        params?: Object;
        fullEventName?: string;
      }

      let _activeNamespaces: {};

      function add(
        eventName: string,
        eventHandler: (e: IEventObject) => void,
        type?: string,
        context?: any,
        namespace?: string,
        params?: any
      ): IEventHandlerInfo;

      function remove(fullEventName: any, registeredHandler: any): void;

      function dispatch(eventObj: any, params?: any): number;

      function dispatchWhenHandlerAdded(
        eventObj: Object,
        params?: Object,
        preProcess?: (eventObj: Object, callback: Function) => void
      ): void;

      function dispatchWhenHandlersAdded(
        eventNames: Array<string>,
        eventObj: Object,
        params?: Object,
        preProcess?: (eventObj: Object, callback: Function) => void
      ): void;

      function getEventsForOperation(operation: any): string;
    }

    function addMap(map: any): void;

    function dispatchErrorFromResponse(
      widgetParams: any,
      response: any,
      additionalProperties?: any
    ): void;

    function dispatchInvalidParamError(widgetParams: any, paramName: any): void;

    function dispatchForWidget(e: any, widgetParams: any): any;
  }
  namespace external {
    namespace facebook {
      let initializedTime: Date;
      let isLoggedIn: boolean;
      let isConnected: boolean;

      function load(noAppID: any): void;

      function runWhenLoaded(callback: any): void;

      function getParams(): {};
    }
    namespace googlePlus {
      function load(): void;
    }
    namespace opengraph {}
  }
  namespace fidm {
    namespace saml {
      interface IInitSSOParams {
        spName: string;
        redirectURL: string;
      }

      export interface ICancelSSOParams {
        statusCode: string;
        cancelCode: number;
      }

      interface IContinueSSOParams {}

      interface ILogoutSSOParams {}

      function initSSO(params: IInitSSOParams): void;
      function continueSSO(params: IContinueSSOParams, proxy?: boolean): void;
      function cancelSSO(params: ICancelSSOParams, proxy?: boolean): void;
      function logoutSSO(params: ILogoutSSOParams, proxy?: boolean): void;
    }
    namespace oidc {
      interface ISSOContext {
        apiKey?: string;
      }

      interface IGetContextParams {
        opKey: string;
        sso_token: string;
      }

      interface IContinueParams {
        opKey: string;
        context: string;
        login_token: string;
        [key: string]: any;
      }

      namespace op {
        function getContext(params: IGetContextParams): Promise<ISSOContext>;
        function redirectToContinue(params: IContinueParams): void;
        function deviceContinue(): void;
      }
    }
  }
  namespace log {
    let _log: any[];

    function enable(): void;

    function disable(): void;

    function _isEnabled(): boolean;

    function addLog(title: string, obj: any, writeToConsole?: boolean): void;

    function debug(): void;

    function show(): void;
  }
  namespace legacyReports {
    interface Report {
      name: string;
      time: string;
      source?: string;
      sourceData?: Object;
      reportData?: Object;
      cid?: string;
    }

    let queue: Report[];

    function trackAddressBarShares(): void;

    function report(
      event: any,
      APIKey: any,
      cid: any,
      source: any,
      sourceData: any,
      params?: {},
      ignoreQueue?: boolean
    ): void;

    function init(): void;
  }
  namespace services {
    let proxy: any;
    namespace accountService {
      let verifyLogin: any;
    }
    namespace siteData {
      function getScreenVariant(screenSetId: string, screenId: string): string;
      function setScreenVariant(
        screenSetId: string,
        screenId: string,
        variantId: string
      ): void;
    }
  }
  namespace utils {
    const tabbable: Tabbable;

    class Tabbable {
      protected static self: Tabbable;

      protected static selector: string;

      /**
       * Do not use - access via `gigya.utils.tabbable`.
       */
      protected constructor();

      /**
       * Do not use - access via `gigya.utils.tabbable`.
       */
      static getInstance(): Tabbable;

      /**
       * When bound, the user will have their tab focused locked into the container while their focus is on an element in the container.
       *
       * - Hitting tab while focused on the last tabbable element will set focus to the first tabbable element.
       * - Hitting shift+tab while focused on the first element will set focus to the last tabbable element.
       */
      bindTabLooping(container: HTMLElement, filterSelector?: string): void;

      /**
       * Restore natural tabbing behavior.
       */
      unbindTabLooping(container: HTMLElement): void;

      /**
       * Get sorted list of tabbable elements.
       */
      getSortedTabbableElements(
        container: Element,
        filterSelector?: string
      ): Array<HTMLElement>;

      /**
       * Create and track listener function.
       */
      protected createListener(
        container: HTMLElement,
        filterSelector?: string
      ): EventListener;

      /**
       * Filter out elements that aren't tabbable.
       */
      protected isTabbable(
        element: HTMLElement,
        filterSelector?: string
      ): boolean;

      /**
       * Get next tabbable element, looping if necessary. Returns undefined if the current element isn't in the list of tabbable elements.
       */
      protected getNextTabbableElement(
        container: HTMLElement,
        currentElement: HTMLElement,
        filterSelector?: string
      ): HTMLElement | undefined;

      /**
       * Get previous tabbable element, looping if necessary. Returns undefined if the current element isn't in the list of tabbable elements.
       */
      protected getPreviousTabbableElement(
        container: HTMLElement,
        currentElement: HTMLElement,
        filterSelector?: string
      ): HTMLElement | undefined;

      /**
       * Sort algorithm that takes into account the tab index and natural sort order for each element.
       *
       * NOTE:
       * Not all browsers implement stable sorting. Specifically Chrome's sort is NOT stable.
       * A sorting algorithm is "stable" when two objects with equal keys appear in the same order after being sorted.
       */
      protected sort(a: HTMLElement, b: HTMLElement): number;

      /**
       * Elements with a tab index of 0 should appear after all elements with a tab index.
       */
      protected getTabIndex(el: HTMLElement): number;

      /**
       * Find event listener function by container element.
       */
      protected getListenerByContainer(
        container: HTMLElement
      ): EventListenerOrEventListenerObject | undefined;
    }

    function getParamValue(str: string, key: string, del?: string): string;

    function getReqParamValue(str: string, key: string): string;

    function getGigyaScriptElement(): HTMLScriptElement;

    namespace stringUtils {
      function trim(s: string): string;

      function format(s: string, ...rest: string[]): string;

      function capitalize(s: string): string;

      function endsWith(s: string, suffix: string): boolean;

      function escapeRegExp(str: string): string;

      function replaceAll(str: string, find: string, replace: string): string;

      function mergeCommaSeparatedValues(str1: string, str2: string): string;
    }
    namespace cookie {
      function getDefaultDomain(
        pageDomain?: string,
        baseDomain?: string
      ): string;

      function get(name: string): string;

      function set(
        name: string,
        value: string,
        expires_in?: any,
        cookieDomain?: string,
        dontUseRootPath?: boolean,
        sameSite?: 'None' | 'Strict' | 'Lax'
      ): void;

      function remove(name: string, domain?: string, doc?: Document): void;

      function getInfiniteExpirationTimeInSeconds(): number;

      function canSaveCookie(cookieDomain?: string): boolean;
    }
    namespace array {
      interface IMap<T> {
        [key: string]: T;
      }

      interface IEnumerable<T> {
        length: number;

        [i: number]: T;
      }

      function indexOf(ar: any[], o: any): number;

      function clone(ar: any[]): any[];

      function intersect(array: any[], ...args: any[]): any[];

      function forEach<T>(
        arr: IEnumerable<T>,
        action: (element: T, index?: number, arr?: IEnumerable<T>) => void
      ): void;

      function some<T>(
        arr: IEnumerable<T>,
        condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean
      ): boolean;

      function every<T>(
        arr: IEnumerable<T>,
        condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean
      ): boolean;

      function map<S, T>(
        arr: IEnumerable<S>,
        action: (element: S, index?: number, arr?: IEnumerable<S>) => T
      ): T[];

      function first<T>(
        arr: IEnumerable<T>,
        condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean
      ): T;

      function getUniqueValues<T>(arr: T[]): T[];

      function removeByValue(ar: any[], value: Object): void;

      function forEachProp<T>(
        obj: IMap<T>,
        action: (prop: T, name: string, obj: IMap<T>) => void
      ): any;
      function forEachProp<T extends Object>(
        obj: T,
        action: (prop: any, name: string, obj: T) => void
      ): any;

      function removeByProperty(
        ar: any[],
        property: string,
        value: string
      ): void;

      function getArrayFromString(
        str: string,
        delimiter: string,
        lowerCase?: boolean
      ): string[];

      function firstIndex<T>(
        arr: IEnumerable<T>,
        condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean
      ): number;

      function includes<T>(arr: T[], value: T): boolean;

      function containsOnly(array1: any[], array2: any[]): boolean;
    }
    namespace date {
      function now(): number;
    }
    namespace delegate {
      function create(scope: any, method: Function): (...args: any[]) => any;
    }
    namespace templates {
      function fill(template: Function, oPlaceholders: any): string;
      function fill(template: string, oPlaceholders: any): string;
    }
    namespace viewport {
      function getScroll(): {
        top: number;
        left: number;
      };

      function getOrientation(): number;

      function getInnerSize(): {
        w: number;
        h: number;
      };

      function getOuterSize(): {
        w: number;
        h: number;
      };

      function getMiddleCenter(): {
        top: number;
        left: number;
      };

      function isRectHorizontallyVisible(rect: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      }): boolean;

      function isRectFullyVisible(rect: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      }): boolean;

      function scrollIntoView(element: HTMLElement): void;
    }
    namespace JSON {
      function serialize(
        obj: any,
        includeFunctions?: boolean,
        prettyPrint?: boolean,
        l?: number,
        maxLevel?: number
      ): string;

      /**
       * De-serialize JavaScript, typically used for site-provided (external) JavaScript objects (not true JSON).
       *
       * Objects may include unquoted keys, functions, and variable references.
       *
       * Will never throw an exception.
       */
      function deserialize<T>(json: string, defaultValue?: T, scope?: any): T;

      /**
       * De-serialize JSON inside of a try/catch block. Return default value on failure.
       */
      function parse<T>(json: string, defaultValue?: T): T;
    }
    namespace DOM {
      let _popupContainers: any[];
      let _pseudoContainers: any[];
      let enableSafeCopy: any;

      function getNextZIndex(): number;

      function getGigyaScriptElement(fileNames: string[]): HTMLScriptElement;

      function dispatch(el: HTMLElement, eventName: string): void;

      function addButtonSubmitListener(
        el: HTMLElement,
        handler: Function,
        event?: 'click' | 'touchend',
        debugName?: string
      ): void;

      function addEventListener(
        el: any,
        eventName: string,
        handler: Function
      ): void;

      function addActivationHandler(
        element: HTMLElement,
        handler: Function
      ): void;

      function removeEventListener(
        el: any,
        eventName: string,
        handler: Function
      ): void;

      function disableDefaultEventHandling(event: any): void;

      function addDialogBackListener(handler: (e: Event) => void): void;

      function prependToBody(el: HTMLElement, document?: Document): void;

      function appendToBody(el: HTMLElement, document?: Document): void;

      function removeElement(el: HTMLElement): void;

      function isChildOf(child: Node, parent: Node): boolean;

      function isVisible(el: HTMLElement): boolean;

      function getCenteredDivID(name: string): string;

      function createElementWithAttributes(
        domElemName: string,
        domElemAttrs?: {
          [key: string]: string;
        }
      ): HTMLElement;

      function createTopLevelDiv(id?: string): HTMLDivElement;

      function hideByID(id: string): void;

      function showByID(id: string): void;

      function getHTMLSize(
        html: string,
        container: HTMLElement
      ): {
        w: number;
        h: number;
      };

      function getElementsByClass(
        parentElement: HTMLElement,
        className: string,
        includeParent?: boolean
      ): HTMLElement[];

      function getElementsByAttribute(
        parentElement: HTMLElement,
        tagName: string,
        attributeName: string,
        attributeValue: string
      ): HTMLElement[];

      function getElementPosition(el: HTMLElement): {
        left: number;
        top: number;
        right: number;
        bottom: number;
      };

      function addClassToElement(el: HTMLElement, className: string): void;

      function removeClassFromElement(
        el: HTMLElement,
        className: string,
        substring?: boolean
      ): void;

      function isElementClass(el: HTMLElement, className: string): boolean;

      function cancelEvent(event: any): void;

      function createElement(type: string, name: string): Node;

      function setSize(
        container: HTMLElement,
        w: any,
        h: any,
        center?: boolean
      ): void;

      function attributeEncode(value: string): string;

      function manipulateAttributes(
        elements: Element[],
        matcher: RegExp,
        replacePredicate: (match: string) => void,
        criteria?: (attr?: Attr) => boolean
      ): void;

      function isHTMLBooleanAttribute(attrName: string): boolean;

      function isBelongToGigyaFieldset(el: Element): boolean;

      function createElementFromTemplate(template: string): ChildNode;
    }
    namespace functions {
      function invokeOnPageLoad(func: Function, completeOnly?: boolean): void;

      function createAlias(publicName: string, fnc: Function): void;

      function debounce(fn: () => void, delayMilliseconds: number): () => void;

      function addSrcToIFrameIfNeeded(
        iframe: HTMLIFrameElement,
        src?: string
      ): void;
    }
    namespace recaptcha {
      function load(params: Object): Promise<void>;
      function getInstance(params: Object): ReCaptcha;
      function forceReset(): void;

      interface ReCaptcha {
        execute(siteKey?: string): Promise<string>;
        ready(callback);
        render(container, parameters);
        reset(optWidgetId);
        enterprise: ReCaptcha;
      }
    }
    namespace win {
      let _openedWindows: {};

      interface WindowOptions {
        menubar?: number;
        toolbar?: number;
        resizable?: number;
        scrollbars?: number;
        location?: number;
        width?: string | number;
        height?: string | number;
        left?: string | number;
        top?: string | number;
      }

      function _calcPixels(
        value: string | number,
        max?: number,
        def?: string | number,
        positionAdjustment?: any
      ): number;

      function open(
        url: string,
        windowName?: string,
        windowOptions?: WindowOptions
      ): boolean;

      function close(windowName: string): void;
    }
    namespace validation {
      function isExplicitTrue(val: any): boolean;

      function isExplicitFalse(val: any): boolean;

      function isLaterThanNow(expirationTime: number): boolean;
    }
    namespace object {
      let cloneParamsForPlugin: any;

      function removeUndefined(o: Object): Object;

      function getPropertyBySerializedName(
        o: Object,
        name: string,
        createMissingObjects: boolean
      ): any;

      function setPropertyBySerializedName(
        o: Object,
        name: string,
        value: any
      ): void;

      function add(oTarget: Object, o: Object, dontOverride?: boolean): void;

      function clone(
        obj: any,
        deepCopy?: boolean,
        ignoreFunctions?: boolean,
        maxLevel?: number,
        level?: number,
        ignoreContext?: boolean
      ): any;

      function merge<R = Object>(args: Object[], isDeepMerge?: boolean): R;

      function unflatten(data: { [key: string]: string | boolean }): Object;

      function flatten(
        data: any,
        withBracket?: boolean
      ): { [key: string]: string | boolean };

      function extractProperties(src: any, dest?: any, schema?: String): Object;

      function extractProperty(src: any, paramName: string): any;

      function parseToObject(str: string): any;

      function expressionHelper(context: any): { getField: (path: any) => any };

      function getMurmurHash(key: string, seed?: number): number;

      function getHash(o: any): string;

      function removePropertiesPrefix(obj: Object, prefix: string | RegExp);

      function addPrefixToProperties(obj: Object, prefix: string);

      function normalizeObjectKeysToLowerCase(obj: Object);

      function decodeObjectKeys(obj: Object): Object;
    }
    namespace sanitize {
      function sanitizeHTML(html: string): string;

      function sanitizeAttribute(attributeValue: string): string;
    }
    namespace mouse {
      function getPosition(): {
        x: number;
        y: number;
      };
    }
    namespace URL {
      interface IGetGigParamsFromUrlConfig {
        url: string;
        paramPrefix?: string;
        removePrefix?: boolean;
        keysToLower?: boolean;
      }

      interface IGetContextParamsFromUrlConfig {
        url: string;
        unacceptableParams?: RegExp;
        paramPrefix?: string;
      }

      function URLEncode(value: string): string;

      function getParamsFromURL(url: string, keysToLower?: boolean): Object;

      function getGigParamsFromURL(config: IGetGigParamsFromUrlConfig): Object;

      function getParamValueFromURL(
        param: string,
        url: string,
        defaultValue: string
      ): string;

      function addParamsToURL(url: string, oParams: Object): string;

      function getContextParamsFromUrl<T = { [key: string]: string }>(
        config: IGetContextParamsFromUrlConfig
      ): Partial<T> | T;
    }
    namespace keyValue {
      function serialize(oKeyValue: Object, delimiter?: string): string;

      function deserialize(
        urlEncodedString: string,
        delimiter?: string,
        keysToLower?: boolean,
        useUnescape?: boolean
      ): any;
    }
    namespace script {
      function load(
        src: string,
        fnOnError?: () => void,
        fnOnLoad?: () => void,
        loadOnce?: boolean,
        removeAfter?: number | boolean,
        treatTogether?: string[]
      ): void;

      enum ResourceTypes {
        script = 0,
        image = 1,
        iframe = 2,
      }

      function triggerResource(
        url: string,
        callback?: () => void,
        resourceType?: ResourceTypes,
        removeAfter?: number | boolean
      ): void;

      function loadService(
        serviceName: string,
        fnOnError?: () => void,
        fnOnLoad?: () => void
      ): void;
    }
    namespace localStorage {
      /**
       * Base class for all local storage adapters.
       */
      abstract class AbstractLocalStorageAdapter {
        static getName(): string;

        abstract getItem(key: string): string;
        abstract getItem(key: string, callback: () => string): void;

        abstract setItem(key: string, value: string, expiresIn?: number): void;
        abstract setItem(
          key: string,
          value: string,
          expiresIn: number,
          domain?: string
        ): void;
        abstract setItem(
          key: string,
          value: string,
          expiresIn: number,
          domain?: string,
          additionalParams?: object
        ): void;

        abstract removeItem(key: string): any;
        abstract removeItem(key: string, callback: () => void): any;
      }

      /**
       * Cookie-based local storage.
       */
      class CookieStorageAdapter extends AbstractLocalStorageAdapter {
        static isAvailable(): boolean;

        static getName(): string;

        getItem(key: string): string;

        setItem(key: string, value: string, expiresIn?: number): void;

        removeItem(key: string): void;
      }

      /**
       * All adapters in order of priority.
       */
      const adapters: Array<any>;
      /**
       * Hold instance of adapter so that only one instance is created.
       */
      const instances: {
        [key: string]: AbstractLocalStorageAdapter;
      };

      function initializeAdapter(
        adapter: {
          name?: string;
          getName: () => string;
        } & (new () => AbstractLocalStorageAdapter)
      ): AbstractLocalStorageAdapter;

      /**
       * Test each adapter and find compatible adapter.
       */
      function waitForService(): AbstractLocalStorageAdapter;
      function waitForService(
        callback: (storage: AbstractLocalStorageAdapter) => void
      ): AbstractLocalStorageAdapter;

      function getItem(key: string): string;

      function setItem(key: string, value: string, expiresIn?: number): void;

      function removeItem(key: string): void;

      function setObject(key: string, o: Object): void;

      function getObject(key: string, defaultValue?: any): Object;
    }
    namespace xd {
      let _flashListenerID: string;

      function addMessageListener(
        messageName: string,
        params: any,
        isPopup: boolean,
        callback: (oEvent: Object, context: any) => void,
        messagingMethod?: _.MessagingMethod
      ): void;

      function removeMessageListener(messageName: string): void;
    }
    namespace queue {
      function _servicesStatus(): {};

      function isActive(service: string): boolean;

      function release(id: string, service: string): void;

      function hold(id: string, service: string): void;

      function queueForExecution(
        service: string,
        func: Function,
        args?: any[]
      ): void;
    }
    namespace sessionCache {
      function set(key: string, response: Object): void;

      function get(key: string, cacheTimeout: number): any;

      function remove(key: string): void;
    }

    namespace localCache {
      function set(key: string, response: Object): void;

      function get(key: string, cacheTimeout: number): any;

      function remove(key: string): void;
    }
    namespace browser {}
    namespace HTTP {
      function redirect(
        url: string,
        arParams: any[],
        method?: string,
        target?: string,
        workDocument?: Document
      ): void;
    }
    namespace keyboard {
      const enum Keys {
        escape = 27,
        backspace = 8,
        enter = 13,
      }

      interface IHotKey {
        key: Keys;
        elementContext?: HTMLElement;
      }

      interface IHotKeyEvent {
        unsubscribe(): void;
      }

      function onHotKeyClicked(
        hotKeyData: IHotKey,
        handler: () => void
      ): IHotKeyEvent;
    }
    namespace gltexp {
      function isValid(gltexp: string): boolean;

      function getMillis(gltExp: string | undefined): number;
    }

    namespace toggles {
      function has(key: string): boolean;

      function get<T = any>(key: string): T;

      function isOn(key: string): boolean;
    }
  }
  // endregion
}

// region globals
declare let __gigyaConf: any;
declare let onGigyaServiceReady: Function;
declare let gapi: any;
declare let FB: any;
// endregion
