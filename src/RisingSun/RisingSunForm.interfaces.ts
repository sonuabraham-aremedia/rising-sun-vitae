import { SailthruRequestType, RisingSunThemeType } from "./RisingSunForm.types";
import { SAILTHRU_LIST_NAME } from "./RisingSunForm.constants";

export interface RisingSunFormProps {
  ctaText: string;
  successfulCtaText: string;
  primaryText: string;
  secondaryText: string;
  primarySuccessMessage: string;
  secondarySuccessMessage: string;
  termsAndConditions: string;
  theme: RisingSunThemeType;
}

export interface ISailthruParams {
  email?: string;
  lists?: {
    [SAILTHRU_LIST_NAME]: boolean;
  };
  onError: (error: Error) => void;
  onSuccess: (response: Response) => void;
}

export interface ISailthruClient {
  Sailthru?: {
    debug: () => void;
    getCookie: () => void;
    init: (id: { customerId: string }) => void;
    integration: (
      request: SailthruRequestType,
      params: ISailthruParams
    ) => void;
    overlay: () => void;
    personalize: () => void;
    track: () => void;
  };
}

export interface IWindowWithSailthru
  extends ISailthruClient,
    EventTarget,
    AnimationFrameProvider,
    GlobalEventHandlers,
    WindowEventHandlers,
    WindowLocalStorage,
    WindowOrWorkerGlobalScope,
    WindowSessionStorage {
  /** @deprecated This is a legacy alias of `navigator`. */
  readonly clientInformation: Navigator;
  /** Returns true if the window has been closed, false otherwise. */
  readonly closed: boolean;
  /** Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element. */
  readonly customElements: CustomElementRegistry;
  readonly devicePixelRatio: number;
  readonly document: Document;
  /** @deprecated */
  readonly event: Event | undefined;
  /** @deprecated */
  readonly external: External;
  readonly frameElement: Element | null;
  readonly frames: WindowProxy;
  readonly history: History;
  readonly innerHeight: number;
  readonly innerWidth: number;
  readonly length: number;
  get location(): Location;
  set location(href: string | Location);
  /** Returns true if the location bar is visible; otherwise, returns false. */
  readonly locationbar: BarProp;
  /** Returns true if the menu bar is visible; otherwise, returns false. */
  readonly menubar: BarProp;
  name: string;
  readonly navigator: Navigator;
  /** Available only in secure contexts. */
  ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
  /** Available only in secure contexts. */
  ondeviceorientation:
    | ((this: Window, ev: DeviceOrientationEvent) => any)
    | null;
  /** @deprecated */
  onorientationchange: ((this: Window, ev: Event) => any) | null;
  opener: any;
  /** @deprecated */
  readonly orientation: number;
  readonly outerHeight: number;
  readonly outerWidth: number;
  /** @deprecated This is a legacy alias of `scrollX`. */
  readonly pageXOffset: number;
  /** @deprecated This is a legacy alias of `scrollY`. */
  readonly pageYOffset: number;
  /**
   * Refers to either the parent WindowProxy, or itself.
   *
   * It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent.
   */
  readonly parent: WindowProxy;
  /** Returns true if the personal bar is visible; otherwise, returns false. */
  readonly personalbar: BarProp;
  readonly screen: Screen;
  readonly screenLeft: number;
  readonly screenTop: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly scrollX: number;
  readonly scrollY: number;
  /** Returns true if the scrollbars are visible; otherwise, returns false. */
  readonly scrollbars: BarProp;
  readonly self: Window & typeof globalThis;
  readonly speechSynthesis: SpeechSynthesis;
  /** @deprecated */
  status: string;
  /** Returns true if the status bar is visible; otherwise, returns false. */
  readonly statusbar: BarProp;
  /** Returns true if the toolbar is visible; otherwise, returns false. */
  readonly toolbar: BarProp;
  readonly top: WindowProxy | null;
  readonly visualViewport: VisualViewport | null;
  readonly window: Window & typeof globalThis;
  alert(message?: any): void;
  blur(): void;
  cancelIdleCallback(handle: number): void;
  /** @deprecated */
  captureEvents(): void;
  /** Closes the window. */
  close(): void;
  confirm(message?: string): boolean;
  /** Moves the focus to the window's browsing context, if any. */
  focus(): void;
  getComputedStyle(
    elt: Element,
    pseudoElt?: string | null
  ): CSSStyleDeclaration;
  getSelection(): Selection | null;
  matchMedia(query: string): MediaQueryList;
  moveBy(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  open(
    url?: string | URL,
    target?: string,
    features?: string
  ): WindowProxy | null;
  /**
   * Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.
   *
   * Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.
   *
   * A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
   *
   * If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".
   *
   * Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.
   */
  postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Transferable[]
  ): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;
  print(): void;
  prompt(message?: string, _default?: string): string | null;
  /** @deprecated */
  releaseEvents(): void;
  requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ): number;
  resizeBy(x: number, y: number): void;
  resizeTo(width: number, height: number): void;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  /** Cancels the document load. */
  stop(): void;
  addEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
  [index: number]: Window;
}
