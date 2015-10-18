System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "lib/main.js",
      "npm:react@0.13.3",
      "lib/bootstrap.js",
      "npm:react-fastclick@1.0.3",
      "npm:director@1.2.8",
      "lib/events.js",
      "npm:react@0.13.3/react",
      "npm:lodash@3.10.1",
      "npm:react-fastclick@1.0.3/index",
      "npm:director@1.2.8/build/director",
      "npm:events@1.0.2",
      "npm:react@0.13.3/lib/React",
      "npm:react@0.13.3/lib/EventListener",
      "npm:events@1.0.2/events",
      "npm:lodash@3.10.1/index",
      "npm:react@0.13.3/lib/ReactChildren",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.13.3/lib/ReactComponent",
      "npm:react@0.13.3/lib/ReactCurrentOwner",
      "npm:react@0.13.3/lib/ReactElement",
      "npm:react@0.13.3/lib/ReactElementValidator",
      "npm:react@0.13.3/lib/EventPluginUtils",
      "npm:react@0.13.3/lib/ReactClass",
      "npm:react@0.13.3/lib/ReactContext",
      "npm:react@0.13.3/lib/ReactInstanceHandles",
      "npm:react@0.13.3/lib/ReactMount",
      "npm:react@0.13.3/lib/ReactPerf",
      "npm:react@0.13.3/lib/ReactDOMTextComponent",
      "npm:react@0.13.3/lib/ReactReconciler",
      "npm:react@0.13.3/lib/ReactDefaultInjection",
      "npm:react@0.13.3/lib/ReactDOM",
      "npm:react@0.13.3/lib/findDOMNode",
      "npm:react@0.13.3/lib/ReactPropTypes",
      "npm:react@0.13.3/lib/ReactServerRendering",
      "npm:react@0.13.3/lib/onlyChild",
      "npm:react@0.13.3/lib/ExecutionEnvironment",
      "npm:react@0.13.3/lib/Object.assign",
      "npm:react@0.13.3/lib/emptyFunction",
      "npm:react@0.13.3/lib/ReactFragment",
      "npm:react@0.13.3/lib/PooledClass",
      "npm:react@0.13.3/lib/warning",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.13.3/lib/invariant",
      "npm:react@0.13.3/lib/ReactUpdateQueue",
      "npm:react@0.13.3/lib/ReactPropTypeLocations",
      "npm:react@0.13.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.3/lib/ReactNativeComponent",
      "npm:react@0.13.3/lib/getIteratorFn",
      "npm:react@0.13.3/lib/EventConstants",
      "npm:react@0.13.3/lib/ReactInstanceMap",
      "npm:react@0.13.3/lib/ReactLifeCycle",
      "npm:react@0.13.3/lib/traverseAllChildren",
      "npm:react@0.13.3/lib/emptyObject",
      "npm:react@0.13.3/lib/ReactRootIndex",
      "npm:react@0.13.3/lib/DOMProperty",
      "npm:react@0.13.3/lib/ReactEmptyComponent",
      "npm:react@0.13.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.3/lib/ReactMarkupChecksum",
      "npm:react@0.13.3/lib/ReactUpdates",
      "npm:react@0.13.3/lib/containsNode",
      "npm:react@0.13.3/lib/getReactRootElementInContainer",
      "npm:react@0.13.3/lib/instantiateReactComponent",
      "npm:react@0.13.3/lib/ReactErrorUtils",
      "npm:react@0.13.3/lib/setInnerHTML",
      "npm:react@0.13.3/lib/shouldUpdateReactComponent",
      "npm:react@0.13.3/lib/keyMirror",
      "npm:react@0.13.3/lib/keyOf",
      "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.3/lib/ReactRef",
      "npm:react@0.13.3/lib/DOMPropertyOperations",
      "npm:react@0.13.3/lib/ReactDOMComponent",
      "npm:react@0.13.3/lib/escapeTextContentForBrowser",
      "npm:react@0.13.3/lib/BeforeInputEventPlugin",
      "npm:react@0.13.3/lib/ClientReactRootIndex",
      "npm:react@0.13.3/lib/ChangeEventPlugin",
      "npm:react@0.13.3/lib/DefaultEventPluginOrder",
      "npm:react@0.13.3/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.3/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.3/lib/ReactDOMButton",
      "npm:react@0.13.3/lib/ReactDOMForm",
      "npm:react@0.13.3/lib/ReactDOMImg",
      "npm:react@0.13.3/lib/ReactDOMIDOperations",
      "npm:react@0.13.3/lib/ReactDOMOption",
      "npm:react@0.13.3/lib/ReactDOMIframe",
      "npm:react@0.13.3/lib/ReactDOMInput",
      "npm:react@0.13.3/lib/ReactDOMSelect",
      "npm:react@0.13.3/lib/ReactInjection",
      "npm:react@0.13.3/lib/ReactEventListener",
      "npm:react@0.13.3/lib/ReactDOMTextarea",
      "npm:react@0.13.3/lib/ReactReconcileTransaction",
      "npm:react@0.13.3/lib/SelectEventPlugin",
      "npm:react@0.13.3/lib/ServerReactRootIndex",
      "npm:react@0.13.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.3/lib/SimpleEventPlugin",
      "npm:react@0.13.3/lib/createFullPageComponent",
      "npm:react@0.13.3/lib/mapObject",
      "npm:react@0.13.3/lib/ReactDefaultPerf",
      "npm:react@0.13.3/lib/isNode",
      "npm:react@0.13.3/lib/ReactServerRenderingTransaction",
      "npm:process@0.11.2",
      "npm:react@0.13.3/lib/EventPluginHub",
      "npm:react@0.13.3/lib/EventPluginRegistry",
      "npm:react@0.13.3/lib/ReactEventEmitterMixin",
      "npm:react@0.13.3/lib/ViewportMetrics",
      "npm:react@0.13.3/lib/isEventSupported",
      "npm:react@0.13.3/lib/adler32",
      "npm:react@0.13.3/lib/CallbackQueue",
      "npm:react@0.13.3/lib/Transaction",
      "npm:react@0.13.3/lib/isTextNode",
      "npm:react@0.13.3/lib/ReactCompositeComponent",
      "npm:react@0.13.3/lib/ReactOwner",
      "npm:react@0.13.3/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.3/lib/EventPropagators",
      "npm:react@0.13.3/lib/CSSPropertyOperations",
      "npm:react@0.13.3/lib/ReactMultiChild",
      "npm:react@0.13.3/lib/SyntheticCompositionEvent",
      "npm:react@0.13.3/lib/SyntheticInputEvent",
      "npm:react@0.13.3/lib/FallbackCompositionState",
      "npm:react@0.13.3/lib/SyntheticEvent",
      "npm:react@0.13.3/lib/SyntheticMouseEvent",
      "npm:react@0.13.3/lib/AutoFocusMixin",
      "npm:react@0.13.3/lib/isTextInputElement",
      "npm:react@0.13.3/lib/ReactComponentEnvironment",
      "npm:react@0.13.3/lib/LocalEventTrapMixin",
      "npm:react@0.13.3/lib/DOMChildrenOperations",
      "npm:react@0.13.3/lib/getEventTarget",
      "npm:react@0.13.3/lib/getUnboundedScrollPosition",
      "npm:react@0.13.3/lib/LinkedValueUtils",
      "npm:react@0.13.3/lib/ReactInputSelection",
      "npm:react@0.13.3/lib/shallowEqual",
      "npm:react@0.13.3/lib/ReactPutListenerQueue",
      "npm:react@0.13.3/lib/getActiveElement",
      "npm:react@0.13.3/lib/SyntheticClipboardEvent",
      "npm:react@0.13.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.3/lib/SyntheticFocusEvent",
      "npm:react@0.13.3/lib/SyntheticDragEvent",
      "npm:react@0.13.3/lib/SyntheticWheelEvent",
      "npm:react@0.13.3/lib/SyntheticTouchEvent",
      "npm:react@0.13.3/lib/SyntheticUIEvent",
      "npm:react@0.13.3/lib/getEventCharCode",
      "npm:react@0.13.3/lib/performanceNow",
      "npm:react@0.13.3/lib/ReactDefaultPerfAnalysis",
      "npm:process@0.11.2/browser",
      "npm:react@0.13.3/lib/accumulateInto",
      "npm:react@0.13.3/lib/forEachAccumulated",
      "npm:react@0.13.3/lib/hyphenateStyleName",
      "npm:react@0.13.3/lib/camelizeStyleName",
      "npm:react@0.13.3/lib/dangerousStyleValue",
      "npm:react@0.13.3/lib/CSSProperty",
      "npm:react@0.13.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.3/lib/ReactChildReconciler",
      "npm:react@0.13.3/lib/getTextContentAccessor",
      "npm:react@0.13.3/lib/memoizeStringOnly",
      "npm:react@0.13.3/lib/getEventModifierState",
      "npm:react@0.13.3/lib/setTextContent",
      "npm:react@0.13.3/lib/focusNode",
      "npm:react@0.13.3/lib/Danger",
      "npm:react@0.13.3/lib/ReactDOMSelection",
      "npm:react@0.13.3/lib/performance",
      "npm:react@0.13.3/lib/getEventKey",
      "npm:react@0.13.3/lib/camelize",
      "npm:react@0.13.3/lib/hyphenate",
      "npm:react@0.13.3/lib/flattenChildren",
      "npm:react@0.13.3/lib/createNodesFromMarkup",
      "npm:react@0.13.3/lib/getMarkupWrap",
      "npm:react@0.13.3/lib/getNodeForCharacterOffset",
      "npm:react@0.13.3/lib/createArrayFromMixed",
      "npm:react@0.13.3/lib/toArray",
      "lib/home.jsx!npm:jspm-loader-jsx@0.0.7",
      "lib/collage.jsx!npm:jspm-loader-jsx@0.0.7",
      "lib/lightBox.jsx!npm:jspm-loader-jsx@0.0.7",
      "lib/infiniteScroll.jsx!npm:jspm-loader-jsx@0.0.7",
      "lib/fixedButton.jsx!npm:jspm-loader-jsx@0.0.7",
      "npm:masonry-layout@3.3.2",
      "lib/fontAwesome.jsx!npm:jspm-loader-jsx@0.0.7",
      "lib/image.jsx!npm:jspm-loader-jsx@0.0.7",
      "npm:font-awesome@4.4.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.18",
      "npm:lazyloadjs@3.2.1",
      "npm:picturefill@2.3.1",
      "npm:masonry-layout@3.3.2/masonry",
      "npm:babel-runtime@5.8.20/core-js/object/assign",
      "npm:lazyloadjs@3.2.1/lazyload",
      "npm:get-size@1.2.2",
      "npm:outlayer@1.4.2",
      "npm:picturefill@2.3.1/dist/picturefill",
      "npm:fizzy-ui-utils@1.0.1",
      "npm:core-js@1.1.4/library/fn/object/assign",
      "npm:in-viewport@3.4.0",
      "npm:get-size@1.2.2/get-size",
      "npm:fizzy-ui-utils@1.0.1/utils",
      "npm:outlayer@1.4.2/outlayer",
      "npm:core-js@1.1.4/library/modules/es6.object.assign",
      "npm:core-js@1.1.4/library/modules/$.core",
      "npm:desandro-matches-selector@1.0.3",
      "npm:in-viewport@3.4.0/in-viewport",
      "npm:doc-ready@1.0.3",
      "npm:desandro-get-style-property@1.0.4",
      "npm:eventie@1.0.6",
      "npm:wolfy87-eventemitter@4.2.11",
      "npm:outlayer@1.4.2/item",
      "npm:core-js@1.1.4/library/modules/$.def",
      "npm:core-js@1.1.4/library/modules/$.assign",
      "npm:desandro-get-style-property@1.0.4/get-style-property",
      "npm:desandro-matches-selector@1.0.3/matches-selector",
      "npm:doc-ready@1.0.3/doc-ready",
      "npm:eventie@1.0.6/eventie",
      "npm:core-js@1.1.4/library/modules/$.global",
      "npm:core-js@1.1.4/library/modules/$.to-object",
      "npm:core-js@1.1.4/library/modules/$.iobject",
      "npm:wolfy87-eventemitter@4.2.11/EventEmitter",
      "npm:core-js@1.1.4/library/modules/$.fails",
      "npm:core-js@1.1.4/library/modules/$.enum-keys",
      "npm:core-js@1.1.4/library/modules/$.cof",
      "npm:core-js@1.1.4/library/modules/$.defined",
      "npm:core-js@1.1.4/library/modules/$"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.24",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "clean-css": "npm:clean-css@3.4.6",
    "core-js": "npm:core-js@1.1.4",
    "css": "github:systemjs/plugin-css@0.1.18",
    "director": "npm:director@1.2.8",
    "events": "npm:events@1.0.2",
    "font-awesome": "npm:font-awesome@4.4.0",
    "jsx": "npm:jspm-loader-jsx@0.0.7",
    "lazyload": "npm:lazyloadjs@3.2.1",
    "lodash": "npm:lodash@3.10.1",
    "masonry-layout": "npm:masonry-layout@3.3.2",
    "picturefill": "npm:picturefill@2.3.1",
    "react": "npm:react@0.13.3",
    "react-fastclick": "npm:react-fastclick@1.0.3",
    "react-image": "npm:react-image@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.8.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:camel-case@1.1.2": {
      "sentence-case": "npm:sentence-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.2"
    },
    "npm:clean-css@3.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commoner@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "iconv-lite": "npm:iconv-lite@0.4.11",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.10.32",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:director@1.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:doc-ready@1.0.3": {
      "eventie": "npm:eventie@1.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima-fb@8001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fizzy-ui-utils@1.0.1": {
      "desandro-matches-selector": "npm:desandro-matches-selector@1.0.3",
      "doc-ready": "npm:doc-ready@1.0.3"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.18"
    },
    "npm:get-size@1.2.2": {
      "desandro-get-style-property": "npm:desandro-get-style-property@1.0.4"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jspm-loader-jsx@0.0.7": {
      "pascal-case": "npm:pascal-case@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.3",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.5"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:jstransform@8.2.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@8001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lazyloadjs@3.2.1": {
      "in-viewport": "npm:in-viewport@3.4.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lru-cache@2.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:masonry-layout@3.3.2": {
      "fizzy-ui-utils": "npm:fizzy-ui-utils@1.0.1",
      "get-size": "npm:get-size@1.2.2",
      "outlayer": "npm:outlayer@1.4.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:outlayer@1.4.2": {
      "desandro-get-style-property": "npm:desandro-get-style-property@1.0.4",
      "desandro-matches-selector": "npm:desandro-matches-selector@1.0.3",
      "doc-ready": "npm:doc-ready@1.0.3",
      "eventie": "npm:eventie@1.0.6",
      "fizzy-ui-utils": "npm:fizzy-ui-utils@1.0.1",
      "get-size": "npm:get-size@1.2.2",
      "wolfy87-eventemitter": "npm:wolfy87-eventemitter@4.2.11"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pascal-case@1.1.1": {
      "camel-case": "npm:camel-case@1.1.2",
      "upper-case-first": "npm:upper-case-first@1.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:picturefill@2.3.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-fastclick@1.0.3": {
      "react": "npm:react@0.13.3"
    },
    "npm:react-image@0.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "react": "npm:react@0.12.2",
      "reactify": "npm:reactify@0.17.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:react-tools@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.3",
      "jstransform": "npm:jstransform@8.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reactify@0.17.1": {
      "jstransform": "npm:jstransform@8.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react-tools": "npm:react-tools@0.12.2",
      "through": "npm:through@2.3.8"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.32": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.11",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sentence-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.2"
    },
    "npm:sha.js@2.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:upper-case-first@1.1.1": {
      "upper-case": "npm:upper-case@1.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:wolfy87-eventemitter@4.2.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    }
  }
});
