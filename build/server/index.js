import { t as __exportAll$1 } from "./assets/chunk-noHr4qNm.js";
import { a as I18nProvider, c as Image, i as I18nLabel, l as Link$2, n as buttonVariants$1, o as useI18n, r as cn$1, s as FrameworkProvider, t as useOnChange, u as usePathname } from "./assets/use-on-change-aerThbX6.js";
import { n as __toESM, t as __commonJSMin } from "./assets/chunk-BoAXSpZd-DkR_giQU.js";
import { r as client_exports } from "./assets/client-CoGNXtIm.js";
import { r as endpoints_exports } from "./assets/endpoints-BwtpZlIL.js";
import { o as webhooks_exports } from "./assets/webhooks-DEcoNBen.js";
import { r as changelog_exports } from "./assets/changelog-DM_y5ms1.js";
import { r as authentication_exports } from "./assets/authentication-Boff-YlY.js";
import { r as configuration_exports } from "./assets/configuration-7MKwkoRk.js";
import { r as error_handling_exports } from "./assets/error-handling-HRDec4rH.js";
import { r as faq_exports } from "./assets/faq-CsEtV7kv.js";
import { i as installation_exports } from "./assets/installation-Be96QziW.js";
import { i as project_structure_exports } from "./assets/project-structure-BdDXmByU.js";
import { i as quickstart_exports } from "./assets/quickstart-CMvU7MtU.js";
import { r as data_fetching_exports } from "./assets/data-fetching-CPRL9nIu.js";
import { i as pagination_exports } from "./assets/pagination-G_hK7ECE.js";
import { i as rate_limiting_exports } from "./assets/rate-limiting-BWtcOlIc.js";
import { r as docs_exports$1 } from "./assets/docs-em6yHaS7.js";
import { n as searchSimple, t as searchAdvanced } from "./assets/advanced-Bv_qi9IC-C8-WiDvr.js";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigate, useParams, useRevalidator } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as JsxRuntime from "react/jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Children, Fragment as Fragment$1, Suspense, createContext, createElement, forwardRef, lazy, use, useCallback, useDeferredValue, useEffect, useEffectEvent, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { DirectionProvider } from "@radix-ui/react-direction";
import { twMerge as cn } from "tailwind-merge";
import { cva } from "class-variance-authority";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Airplay, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, CircleCheck, CircleX, Clipboard, Copy, ExternalLink, ExternalLinkIcon, HomeIcon, Info, Languages, Lightbulb, LinkIcon, Loader2, MessageCircleIcon, Moon, RefreshCw, Search, SearchIcon, Send, SidebarIcon, Sun, Text, TextIcon, TriangleAlert, X, icons } from "lucide-react";
import * as Primitive$3 from "@radix-ui/react-navigation-menu";
import * as Primitive$2 from "@radix-ui/react-collapsible";
import * as Primitive$1 from "@radix-ui/react-scroll-area";
import { Presence } from "@radix-ui/react-presence";
import scrollIntoView from "scroll-into-view-if-needed";
import path from "node:path";
import { server } from "fumadocs-mdx/runtime/server";
import { browser } from "fumadocs-mdx/runtime/browser";
import * as Primitive from "@radix-ui/react-tabs";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, convertToModelMessages, stepCountIs, streamText, tool } from "ai";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { visit } from "unist-util-visit";
import { create, insertMultiple, save } from "@orama/orama";
import { ImageResponse } from "@takumi-rs/image-response";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { z } from "zod";
import { Document } from "flexsearch";
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll$1({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/contexts/search.js
var SearchContext = createContext({
	enabled: false,
	open: false,
	hotKey: [],
	setOpenSearch: () => void 0
});
function useSearchContext() {
	return use(SearchContext);
}
function MetaOrControl() {
	const [key, setKey] = useState("⌘");
	useEffect(() => {
		if (window.navigator.userAgent.includes("Windows")) setKey("Ctrl");
	}, []);
	return key;
}
function SearchProvider({ SearchDialog, children, preload = true, options, hotKey = [{
	key: (e) => e.metaKey || e.ctrlKey,
	display: /* @__PURE__ */ jsx(MetaOrControl, {})
}, {
	key: "k",
	display: "K"
}], links }) {
	const [isOpen, setIsOpen] = useState(preload ? false : void 0);
	const onKeyDown = useEffectEvent((e) => {
		if (hotKey.every((v) => typeof v.key === "string" ? e.key === v.key : v.key(e))) {
			setIsOpen((open) => !open);
			e.preventDefault();
		}
	});
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [hotKey]);
	return /* @__PURE__ */ jsxs(SearchContext, {
		value: useMemo(() => ({
			enabled: true,
			open: isOpen ?? false,
			hotKey,
			setOpenSearch: setIsOpen
		}), [isOpen, hotKey]),
		children: [isOpen !== void 0 && /* @__PURE__ */ jsx(Suspense, {
			fallback: null,
			children: /* @__PURE__ */ jsx(SearchDialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				links,
				...options
			})
		}), children]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/provider/base.js
var DefaultSearchDialog = lazy(() => import("./assets/search-default-CSYNTrC4.js"));
function RootProvider$1({ children, dir = "ltr", theme = {}, search, i18n }) {
	let body = children;
	if (search?.enabled !== false) body = /* @__PURE__ */ jsx(SearchProvider, {
		SearchDialog: DefaultSearchDialog,
		...search,
		children: body
	});
	if (theme?.enabled !== false) body = /* @__PURE__ */ jsx(ThemeProvider, {
		attribute: "class",
		defaultTheme: "system",
		enableSystem: true,
		disableTransitionOnChange: true,
		...theme,
		children: body
	});
	if (i18n) body = /* @__PURE__ */ jsx(I18nProvider, {
		...i18n,
		children: body
	});
	return /* @__PURE__ */ jsx(DirectionProvider, {
		dir,
		children: body
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/framework/react-router.js
var framework = {
	usePathname() {
		return useLocation().pathname;
	},
	useParams() {
		return useParams();
	},
	useRouter() {
		const navigate = useNavigate();
		const revalidator = useRevalidator();
		return useMemo(() => ({
			push(url) {
				navigate(url);
			},
			refresh() {
				revalidator.revalidate();
			}
		}), [navigate, revalidator]);
	},
	Link({ href, prefetch, ...props }) {
		return /* @__PURE__ */ jsx(Link, {
			to: href,
			prefetch: prefetch ? "intent" : "none",
			...props,
			children: props.children
		});
	}
};
function ReactRouterProvider({ children, Link: CustomLink, Image: CustomImage }) {
	return /* @__PURE__ */ jsx(FrameworkProvider, {
		...framework,
		Link: CustomLink ?? framework.Link,
		Image: CustomImage ?? framework.Image,
		children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/provider/react-router.js
function RootProvider({ components, ...props }) {
	return /* @__PURE__ */ jsx(ReactRouterProvider, {
		Link: components?.Link,
		Image: components?.Image,
		children: /* @__PURE__ */ jsx(RootProvider$1, {
			...props,
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/negotiation-BTT1Ep9U.js
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_charset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredCharsets;
	module.exports.preferredCharsets = preferredCharsets;
	/**
	* Module variables.
	* @private
	*/
	var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Charset header.
	* @private
	*/
	function parseAcceptCharset(accept) {
		var accepts = accept.split(",");
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var charset = parseCharset(accepts[i].trim(), i);
			if (charset) accepts[j++] = charset;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a charset from the Accept-Charset header.
	* @private
	*/
	function parseCharset(str, i) {
		var match = simpleCharsetRegExp.exec(str);
		if (!match) return null;
		var charset = match[1];
		var q = 1;
		if (match[2]) {
			var params = match[2].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].trim().split("=");
				if (p[0] === "q") {
					q = parseFloat(p[1]);
					break;
				}
			}
		}
		return {
			charset,
			q,
			i
		};
	}
	/**
	* Get the priority of a charset.
	* @private
	*/
	function getCharsetPriority(charset, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(charset, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the charset.
	* @private
	*/
	function specify(charset, spec, index) {
		var s = 0;
		if (spec.charset.toLowerCase() === charset.toLowerCase()) s |= 1;
		else if (spec.charset !== "*") return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred charsets from an Accept-Charset header.
	* @public
	*/
	function preferredCharsets(accept, provided) {
		var accepts = parseAcceptCharset(accept === void 0 ? "*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
		var priorities = provided.map(function getPriority(type, index) {
			return getCharsetPriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full charset string.
	* @private
	*/
	function getFullCharset(spec) {
		return spec.charset;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_encoding = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredEncodings;
	module.exports.preferredEncodings = preferredEncodings;
	/**
	* Module variables.
	* @private
	*/
	var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Encoding header.
	* @private
	*/
	function parseAcceptEncoding(accept) {
		var accepts = accept.split(",");
		var hasIdentity = false;
		var minQuality = 1;
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var encoding = parseEncoding(accepts[i].trim(), i);
			if (encoding) {
				accepts[j++] = encoding;
				hasIdentity = hasIdentity || specify("identity", encoding);
				minQuality = Math.min(minQuality, encoding.q || 1);
			}
		}
		if (!hasIdentity) accepts[j++] = {
			encoding: "identity",
			q: minQuality,
			i
		};
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse an encoding from the Accept-Encoding header.
	* @private
	*/
	function parseEncoding(str, i) {
		var match = simpleEncodingRegExp.exec(str);
		if (!match) return null;
		var encoding = match[1];
		var q = 1;
		if (match[2]) {
			var params = match[2].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].trim().split("=");
				if (p[0] === "q") {
					q = parseFloat(p[1]);
					break;
				}
			}
		}
		return {
			encoding,
			q,
			i
		};
	}
	/**
	* Get the priority of an encoding.
	* @private
	*/
	function getEncodingPriority(encoding, accepted, index) {
		var priority = {
			encoding,
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(encoding, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the encoding.
	* @private
	*/
	function specify(encoding, spec, index) {
		var s = 0;
		if (spec.encoding.toLowerCase() === encoding.toLowerCase()) s |= 1;
		else if (spec.encoding !== "*") return null;
		return {
			encoding,
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred encodings from an Accept-Encoding header.
	* @public
	*/
	function preferredEncodings(accept, provided, preferred) {
		var accepts = parseAcceptEncoding(accept || "");
		var comparator = preferred ? function comparator(a, b) {
			if (a.q !== b.q) return b.q - a.q;
			var aPreferred = preferred.indexOf(a.encoding);
			var bPreferred = preferred.indexOf(b.encoding);
			if (aPreferred === -1 && bPreferred === -1) return b.s - a.s || a.o - b.o || a.i - b.i;
			if (aPreferred !== -1 && bPreferred !== -1) return aPreferred - bPreferred;
			return aPreferred === -1 ? 1 : -1;
		} : compareSpecs;
		if (!provided) return accepts.filter(isQuality).sort(comparator).map(getFullEncoding);
		var priorities = provided.map(function getPriority(type, index) {
			return getEncodingPriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(comparator).map(function getEncoding(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i;
	}
	/**
	* Get full encoding string.
	* @private
	*/
	function getFullEncoding(spec) {
		return spec.encoding;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_language = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredLanguages;
	module.exports.preferredLanguages = preferredLanguages;
	/**
	* Module variables.
	* @private
	*/
	var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Language header.
	* @private
	*/
	function parseAcceptLanguage(accept) {
		var accepts = accept.split(",");
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var language = parseLanguage(accepts[i].trim(), i);
			if (language) accepts[j++] = language;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a language from the Accept-Language header.
	* @private
	*/
	function parseLanguage(str, i) {
		var match = simpleLanguageRegExp.exec(str);
		if (!match) return null;
		var prefix = match[1];
		var suffix = match[2];
		var full = prefix;
		if (suffix) full += "-" + suffix;
		var q = 1;
		if (match[3]) {
			var params = match[3].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].split("=");
				if (p[0] === "q") q = parseFloat(p[1]);
			}
		}
		return {
			prefix,
			suffix,
			q,
			i,
			full
		};
	}
	/**
	* Get the priority of a language.
	* @private
	*/
	function getLanguagePriority(language, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(language, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the language.
	* @private
	*/
	function specify(language, spec, index) {
		var p = parseLanguage(language);
		if (!p) return null;
		var s = 0;
		if (spec.full.toLowerCase() === p.full.toLowerCase()) s |= 4;
		else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) s |= 2;
		else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) s |= 1;
		else if (spec.full !== "*") return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred languages from an Accept-Language header.
	* @public
	*/
	function preferredLanguages(accept, provided) {
		var accepts = parseAcceptLanguage(accept === void 0 ? "*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
		var priorities = provided.map(function getPriority(type, index) {
			return getLanguagePriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full language string.
	* @private
	*/
	function getFullLanguage(spec) {
		return spec.full;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_mediaType = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredMediaTypes;
	module.exports.preferredMediaTypes = preferredMediaTypes;
	/**
	* Module variables.
	* @private
	*/
	var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept header.
	* @private
	*/
	function parseAccept(accept) {
		var accepts = splitMediaTypes(accept);
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var mediaType = parseMediaType(accepts[i].trim(), i);
			if (mediaType) accepts[j++] = mediaType;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a media type from the Accept header.
	* @private
	*/
	function parseMediaType(str, i) {
		var match = simpleMediaTypeRegExp.exec(str);
		if (!match) return null;
		var params = Object.create(null);
		var q = 1;
		var subtype = match[2];
		var type = match[1];
		if (match[3]) {
			var kvps = splitParameters(match[3]).map(splitKeyValuePair);
			for (var j = 0; j < kvps.length; j++) {
				var pair = kvps[j];
				var key = pair[0].toLowerCase();
				var val = pair[1];
				var value = val && val[0] === "\"" && val[val.length - 1] === "\"" ? val.slice(1, -1) : val;
				if (key === "q") {
					q = parseFloat(value);
					break;
				}
				params[key] = value;
			}
		}
		return {
			type,
			subtype,
			params,
			q,
			i
		};
	}
	/**
	* Get the priority of a media type.
	* @private
	*/
	function getMediaTypePriority(type, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(type, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the media type.
	* @private
	*/
	function specify(type, spec, index) {
		var p = parseMediaType(type);
		var s = 0;
		if (!p) return null;
		if (spec.type.toLowerCase() == p.type.toLowerCase()) s |= 4;
		else if (spec.type != "*") return null;
		if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) s |= 2;
		else if (spec.subtype != "*") return null;
		var keys = Object.keys(spec.params);
		if (keys.length > 0) if (keys.every(function(k) {
			return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
		})) s |= 1;
		else return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred media types from an Accept header.
	* @public
	*/
	function preferredMediaTypes(accept, provided) {
		var accepts = parseAccept(accept === void 0 ? "*/*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
		var priorities = provided.map(function getPriority(type, index) {
			return getMediaTypePriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full type string.
	* @private
	*/
	function getFullType(spec) {
		return spec.type + "/" + spec.subtype;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
	/**
	* Count the number of quotes in a string.
	* @private
	*/
	function quoteCount(string) {
		var count = 0;
		var index = 0;
		while ((index = string.indexOf("\"", index)) !== -1) {
			count++;
			index++;
		}
		return count;
	}
	/**
	* Split a key value pair.
	* @private
	*/
	function splitKeyValuePair(str) {
		var index = str.indexOf("=");
		var key;
		var val;
		if (index === -1) key = str;
		else {
			key = str.slice(0, index);
			val = str.slice(index + 1);
		}
		return [key, val];
	}
	/**
	* Split an Accept header into media types.
	* @private
	*/
	function splitMediaTypes(accept) {
		var accepts = accept.split(",");
		for (var i = 1, j = 0; i < accepts.length; i++) if (quoteCount(accepts[j]) % 2 == 0) accepts[++j] = accepts[i];
		else accepts[j] += "," + accepts[i];
		accepts.length = j + 1;
		return accepts;
	}
	/**
	* Split a string of parameters.
	* @private
	*/
	function splitParameters(str) {
		var parameters = str.split(";");
		for (var i = 1, j = 0; i < parameters.length; i++) if (quoteCount(parameters[j]) % 2 == 0) parameters[++j] = parameters[i];
		else parameters[j] += ";" + parameters[i];
		parameters.length = j + 1;
		for (var i = 0; i < parameters.length; i++) parameters[i] = parameters[i].trim();
		return parameters;
	}
}));
/*!
* negotiator
* Copyright(c) 2012 Federico Romero
* Copyright(c) 2012-2014 Isaac Z. Schlueter
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_negotiator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var preferredCharsets = require_charset();
	var preferredEncodings = require_encoding();
	var preferredLanguages = require_language();
	var preferredMediaTypes = require_mediaType();
	/**
	* Module exports.
	* @public
	*/
	module.exports = Negotiator;
	module.exports.Negotiator = Negotiator;
	/**
	* Create a Negotiator instance from a request.
	* @param {object} request
	* @public
	*/
	function Negotiator(request) {
		if (!(this instanceof Negotiator)) return new Negotiator(request);
		this.request = request;
	}
	Negotiator.prototype.charset = function charset(available) {
		var set = this.charsets(available);
		return set && set[0];
	};
	Negotiator.prototype.charsets = function charsets(available) {
		return preferredCharsets(this.request.headers["accept-charset"], available);
	};
	Negotiator.prototype.encoding = function encoding(available, opts) {
		var set = this.encodings(available, opts);
		return set && set[0];
	};
	Negotiator.prototype.encodings = function encodings(available, options) {
		var opts = options || {};
		return preferredEncodings(this.request.headers["accept-encoding"], available, opts.preferred);
	};
	Negotiator.prototype.language = function language(available) {
		var set = this.languages(available);
		return set && set[0];
	};
	Negotiator.prototype.languages = function languages(available) {
		return preferredLanguages(this.request.headers["accept-language"], available);
	};
	Negotiator.prototype.mediaType = function mediaType(available) {
		var set = this.mediaTypes(available);
		return set && set[0];
	};
	Negotiator.prototype.mediaTypes = function mediaTypes(available) {
		return preferredMediaTypes(this.request.headers.accept, available);
	};
	Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
	Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
	Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
	Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
	Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
	Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
	Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
	Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
}));
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PathError = exports.TokenData = void 0;
	exports.compile = compile;
	exports.match = match;
	const DEFAULT_DELIMITER = "/";
	const NOOP_VALUE = (value) => value;
	const ID_START = /^[$_\p{ID_Start}]$/u;
	const ID_CONTINUE = /^[$\u200c\u200d\p{ID_Continue}]$/u;
	/**
	* Escape a regular expression string.
	*/
	function escape(str) {
		return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
	}
	/**
	* Tokenized path instance.
	*/
	var TokenData = class {
		constructor(tokens, originalPath) {
			this.tokens = tokens;
			this.originalPath = originalPath;
		}
	};
	exports.TokenData = TokenData;
	/**
	* ParseError is thrown when there is an error processing the path.
	*/
	var PathError = class extends TypeError {
		constructor(message, originalPath) {
			let text = message;
			if (originalPath) text += `: ${originalPath}`;
			text += `; visit https://git.new/pathToRegexpError for info`;
			super(text);
			this.originalPath = originalPath;
		}
	};
	exports.PathError = PathError;
	/**
	* Parse a string for the raw tokens.
	*/
	function parse(str, options = {}) {
		const { encodePath = NOOP_VALUE } = options;
		const chars = [...str];
		let index = 0;
		function consumeUntil(end) {
			const output = [];
			let path = "";
			function writePath() {
				if (!path) return;
				output.push({
					type: "text",
					value: encodePath(path)
				});
				path = "";
			}
			while (index < chars.length) {
				const value = chars[index++];
				if (value === end) {
					writePath();
					return output;
				}
				if (value === "\\") {
					if (index === chars.length) throw new PathError(`Unexpected end after \\ at index ${index}`, str);
					path += chars[index++];
					continue;
				}
				if (value === ":" || value === "*") {
					const type = value === ":" ? "param" : "wildcard";
					let name = "";
					if (ID_START.test(chars[index])) do
						name += chars[index++];
					while (ID_CONTINUE.test(chars[index]));
					else if (chars[index] === "\"") {
						let quoteStart = index;
						while (index < chars.length) {
							if (chars[++index] === "\"") {
								index++;
								quoteStart = 0;
								break;
							}
							if (chars[index] === "\\") index++;
							name += chars[index];
						}
						if (quoteStart) throw new PathError(`Unterminated quote at index ${quoteStart}`, str);
					}
					if (!name) throw new PathError(`Missing parameter name at index ${index}`, str);
					writePath();
					output.push({
						type,
						name
					});
					continue;
				}
				if (value === "{") {
					writePath();
					output.push({
						type: "group",
						tokens: consumeUntil("}")
					});
					continue;
				}
				if (value === "}" || value === "(" || value === ")" || value === "[" || value === "]" || value === "+" || value === "?" || value === "!") throw new PathError(`Unexpected ${value} at index ${index - 1}`, str);
				path += value;
			}
			if (end) throw new PathError(`Unexpected end at index ${index}, expected ${end}`, str);
			writePath();
			return output;
		}
		return new TokenData(consumeUntil(""), str);
	}
	/**
	* Compile a string to a template function for the path.
	*/
	function compile(path, options = {}) {
		const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
		const fn = tokensToFunction((typeof path === "object" ? path : parse(path, options)).tokens, delimiter, encode);
		return function path(params = {}) {
			const missing = [];
			const path = fn(params, missing);
			if (missing.length) throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
			return path;
		};
	}
	function tokensToFunction(tokens, delimiter, encode) {
		const encoders = tokens.map((token) => tokenToFunction(token, delimiter, encode));
		return (data, missing) => {
			let result = "";
			for (const encoder of encoders) result += encoder(data, missing);
			return result;
		};
	}
	/**
	* Convert a single token into a path building function.
	*/
	function tokenToFunction(token, delimiter, encode) {
		if (token.type === "text") return () => token.value;
		if (token.type === "group") {
			const fn = tokensToFunction(token.tokens, delimiter, encode);
			return (data, missing) => {
				const len = missing.length;
				const value = fn(data, missing);
				if (missing.length === len) return value;
				missing.length = len;
				return "";
			};
		}
		const encodeValue = encode || NOOP_VALUE;
		if (token.type === "wildcard" && encode !== false) return (data, missing) => {
			const value = data[token.name];
			if (value == null) {
				missing.push(token.name);
				return "";
			}
			if (!Array.isArray(value) || value.length === 0) throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
			let result = "";
			for (let i = 0; i < value.length; i++) {
				if (typeof value[i] !== "string") throw new TypeError(`Expected "${token.name}/${i}" to be a string`);
				if (i > 0) result += delimiter;
				result += encodeValue(value[i]);
			}
			return result;
		};
		return (data, missing) => {
			const value = data[token.name];
			if (value == null) {
				missing.push(token.name);
				return "";
			}
			if (typeof value !== "string") throw new TypeError(`Expected "${token.name}" to be a string`);
			return encodeValue(value);
		};
	}
	/**
	* Transform a path into a match function.
	*/
	function match(path, options = {}) {
		const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
		const { regexp, keys } = pathToRegexp(path, options);
		const decoders = keys.map((key) => {
			if (decode === false) return NOOP_VALUE;
			if (key.type === "param") return decode;
			return (value) => value.split(delimiter).map(decode);
		});
		return function match(input) {
			const m = regexp.exec(input);
			if (!m) return false;
			const path = m[0];
			const params = Object.create(null);
			for (let i = 1; i < m.length; i++) {
				if (m[i] === void 0) continue;
				const key = keys[i - 1];
				const decoder = decoders[i - 1];
				params[key.name] = decoder(m[i]);
			}
			return {
				path,
				params
			};
		};
	}
	/**
	* Transform a path into a regular expression and capture keys.
	*/
	function pathToRegexp(path, options = {}) {
		const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true } = options;
		const keys = [];
		let source = "";
		let combinations = 0;
		function process(path) {
			if (Array.isArray(path)) {
				for (const p of path) process(p);
				return;
			}
			const data = typeof path === "object" ? path : parse(path, options);
			flatten(data.tokens, 0, [], (tokens) => {
				if (combinations >= 256) throw new PathError("Too many path combinations", data.originalPath);
				if (combinations > 0) source += "|";
				source += toRegExpSource(tokens, delimiter, keys, data.originalPath);
				combinations++;
			});
		}
		process(path);
		let pattern = `^(?:${source})`;
		if (trailing) pattern += "(?:" + escape(delimiter) + "$)?";
		pattern += end ? "$" : "(?=" + escape(delimiter) + "|$)";
		return {
			regexp: new RegExp(pattern, sensitive ? "" : "i"),
			keys
		};
	}
	/**
	* Generate a flat list of sequence tokens from the given tokens.
	*/
	function flatten(tokens, index, result, callback) {
		while (index < tokens.length) {
			const token = tokens[index++];
			if (token.type === "group") {
				const len = result.length;
				flatten(token.tokens, 0, result, (seq) => flatten(tokens, index, seq, callback));
				result.length = len;
				continue;
			}
			result.push(token);
		}
		callback(result);
	}
	/**
	* Transform a flat sequence of tokens into a regular expression.
	*/
	function toRegExpSource(tokens, delimiter, keys, originalPath) {
		let result = "";
		let backtrack = "";
		let wildcardBacktrack = "";
		let prevCaptureType = 0;
		let hasSegmentCapture = 0;
		let index = 0;
		function hasInSegment(index, type) {
			while (index < tokens.length) {
				const token = tokens[index++];
				if (token.type === type) return true;
				if (token.type === "text") {
					if (token.value.includes(delimiter)) break;
				}
			}
			return false;
		}
		function peekText(index) {
			let result = "";
			while (index < tokens.length) {
				const token = tokens[index++];
				if (token.type !== "text") break;
				result += token.value;
			}
			return result;
		}
		while (index < tokens.length) {
			const token = tokens[index++];
			if (token.type === "text") {
				result += escape(token.value);
				backtrack += token.value;
				if (prevCaptureType === 2) wildcardBacktrack += token.value;
				if (token.value.includes(delimiter)) hasSegmentCapture = 0;
				continue;
			}
			if (token.type === "param" || token.type === "wildcard") {
				if (prevCaptureType && !backtrack) throw new PathError(`Missing text before "${token.name}" ${token.type}`, originalPath);
				if (token.type === "param") {
					result += hasSegmentCapture & 2 ? `(${negate(delimiter, backtrack)}+)` : hasInSegment(index, "wildcard") ? `(${negate(delimiter, peekText(index))}+)` : hasSegmentCapture & 1 ? `(${negate(delimiter, backtrack)}+|${escape(backtrack)})` : `(${negate(delimiter, "")}+)`;
					hasSegmentCapture |= prevCaptureType = 1;
				} else {
					result += hasSegmentCapture & 2 ? `(${negate(backtrack, "")}+)` : wildcardBacktrack ? `(${negate(wildcardBacktrack, "")}+|${negate(delimiter, "")}+)` : `([^]+)`;
					wildcardBacktrack = "";
					hasSegmentCapture |= prevCaptureType = 2;
				}
				keys.push(token);
				backtrack = "";
				continue;
			}
			throw new TypeError(`Unknown token type: ${token.type}`);
		}
		return result;
	}
	/**
	* Block backtracking on previous text/delimiter.
	*/
	function negate(a, b) {
		if (b.length > a.length) return negate(b, a);
		if (a === b) b = "";
		if (b.length > 1) return `(?:(?!${escape(a)}|${escape(b)})[^])`;
		if (a.length > 1) return `(?:(?!${escape(a)})[^${escape(b)}])`;
		return `[^${escape(a + b)}]`;
	}
}));
var import_negotiator = /* @__PURE__ */ __toESM(require_negotiator(), 1);
var import_dist = require_dist();
function getNegotiator(request) {
	const headers = {};
	request.headers.forEach((value, key) => {
		headers[key] = value;
	});
	return new import_negotiator.default({ headers });
}
/**
* Rewrite incoming path matching the `source` pattern into the `destination` pattern.
*
* See [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) for accepted pattern formats.
*
* @param source - the original pattern of incoming paths
* @param destination - the target pattern to convert into
*/
function rewritePath(source, destination) {
	const matcher = (0, import_dist.match)(source, { decode: false });
	const compiler = (0, import_dist.compile)(destination, { encode: false });
	return { rewrite(pathname) {
		const result = matcher(pathname);
		if (!result) return false;
		return compiler(result.params);
	} };
}
function isMarkdownPreferred(request, options) {
	const { markdownMediaTypes = [
		"text/plain",
		"text/markdown",
		"text/x-markdown"
	] } = options ?? {};
	const mediaTypes = getNegotiator(request).mediaTypes();
	return markdownMediaTypes.some((type) => mediaTypes.includes(type));
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/popover.js
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
	return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(PopoverPrimitive.Content, {
		align,
		sideOffset,
		side: "bottom",
		className: cn$1("z-50 origin-(--radix-popover-content-transform-origin) overflow-y-auto max-h-(--radix-popover-content-available-height) min-w-[240px] max-w-[98vw] rounded-xl border bg-fd-popover/60 backdrop-blur-lg p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in", className),
		...props
	}) });
}
PopoverPrimitive.PopoverClose;
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/shared/slots/language-select.js
function LanguageSelect({ className, variant = "ghost", children, ...rest }) {
	const context = useI18n();
	if (!context.locales) throw new Error("Missing `<I18nProvider />`");
	return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
		"aria-label": context.text.chooseLanguage,
		className: cn$1(buttonVariants$1({ variant }), "gap-1.5 p-1.5 data-[state=open]:bg-fd-accent", className),
		...rest,
		children
	}), /* @__PURE__ */ jsxs(PopoverContent, {
		className: "flex flex-col gap-0.5 p-1",
		children: [/* @__PURE__ */ jsx("p", {
			className: "p-2 text-xs font-medium text-fd-muted-foreground",
			children: context.text.chooseLanguage
		}), context.locales.map((item) => /* @__PURE__ */ jsx("button", {
			type: "button",
			className: cn$1("px-2 py-1.5 text-start text-sm rounded-lg transition-colors", item.locale === context.locale ? "bg-fd-primary/10 text-fd-primary" : "text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"),
			onClick: () => {
				context.onChange?.(item.locale);
			},
			children: item.name
		}, item.locale))]
	})] });
}
function LanguageSelectText(props) {
	const { locales, locale } = useI18n();
	const text = locales?.find((item) => item.locale === locale)?.name;
	return /* @__PURE__ */ jsx("span", {
		...props,
		children: text
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/shared/slots/search-trigger.js
function SearchTrigger({ hideIfDisabled, size = "icon-sm", color = "ghost", ...props }) {
	const { setOpenSearch, enabled } = useSearchContext();
	if (hideIfDisabled && !enabled) return null;
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn$1(buttonVariants$1({
			size,
			color
		}), props.className),
		"data-search": "",
		"aria-label": "Open Search",
		onClick: () => {
			setOpenSearch(true);
		},
		children: /* @__PURE__ */ jsx(Search, {})
	});
}
function FullSearchTrigger({ hideIfDisabled, ...props }) {
	const { enabled, hotKey, setOpenSearch } = useSearchContext();
	const { text } = useI18n();
	if (hideIfDisabled && !enabled) return null;
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		"data-search-full": "",
		...props,
		className: cn$1("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className),
		onClick: () => {
			setOpenSearch(true);
		},
		children: [
			/* @__PURE__ */ jsx(Search, { className: "size-4" }),
			text.search,
			/* @__PURE__ */ jsx("div", {
				className: "ms-auto inline-flex gap-0.5",
				children: hotKey.map((k, i) => /* @__PURE__ */ jsx("kbd", {
					className: "rounded-md border bg-fd-background px-1.5",
					children: k.display
				}, i))
			})
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/shared/slots/theme-switch.js
var itemVariants$1 = cva("size-6.5 p-1.5 text-fd-muted-foreground", { variants: { active: {
	true: "bg-fd-accent text-fd-accent-foreground",
	false: "text-fd-muted-foreground"
} } });
var full = [
	["light", Sun],
	["dark", Moon],
	["system", Airplay]
];
function ThemeSwitch({ className, mode = "light-dark", ...props }) {
	const { setTheme, theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const container = cn$1("inline-flex items-center rounded-full border p-1 overflow-hidden *:rounded-full", className);
	if (mode === "light-dark") {
		const value = mounted ? resolvedTheme : null;
		return /* @__PURE__ */ jsx("button", {
			className: container,
			"aria-label": `Toggle Theme`,
			onClick: () => setTheme(value === "light" ? "dark" : "light"),
			"data-theme-toggle": "",
			children: full.map(([key, Icon]) => {
				if (key === "system") return;
				return /* @__PURE__ */ jsx(Icon, {
					fill: "currentColor",
					className: cn$1(itemVariants$1({ active: value === key }))
				}, key);
			})
		});
	}
	const value = mounted ? theme : null;
	return /* @__PURE__ */ jsx("div", {
		className: container,
		"data-theme-toggle": "",
		...props,
		children: full.map(([key, Icon]) => /* @__PURE__ */ jsx("button", {
			"aria-label": key,
			className: cn$1(itemVariants$1({ active: value === key })),
			onClick: () => setTheme(key),
			children: /* @__PURE__ */ jsx(Icon, {
				className: "size-full",
				fill: "currentColor"
			})
		}, key))
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/urls.js
function normalize(urlOrPath) {
	if (urlOrPath.length > 1 && urlOrPath.endsWith("/")) return urlOrPath.slice(0, -1);
	return urlOrPath;
}
/**
* @returns if `href` is matching the given pathname
*/
function isActive(href, pathname, nested = false) {
	href = normalize(href);
	pathname = normalize(pathname);
	return href === pathname || nested && pathname.startsWith(`${href}/`);
}
//#endregion
//#region node_modules/fumadocs-core/dist/utils-BFW0mEx9.js
/**
* Search the path of a node in the tree matched by the matcher.
*
* @returns The path to the target node (from starting root), or null if the page doesn't exist
*/
function findPath(nodes, matcher, options = {}) {
	const { includeSeparator = true } = options;
	function run(nodes) {
		let separator;
		for (const node of nodes) {
			if (matcher(node)) {
				const items = [];
				if (separator) items.push(separator);
				items.push(node);
				return items;
			}
			if (node.type === "separator" && includeSeparator) {
				separator = node;
				continue;
			}
			if (node.type === "folder") {
				const items = node.index && matcher(node.index) ? [node.index] : run(node.children);
				if (items) {
					items.unshift(node);
					if (separator) items.unshift(separator);
					return items;
				}
			}
		}
	}
	return run(nodes) ?? null;
}
var VisitBreak = Symbol("VisitBreak");
/**
* Perform a depth-first search on page tree visiting every node.
*
* @param root - the root of page tree to visit.
* @param visitor - function to receive nodes, return `skip` to skip the children of current node, `break` to stop the search entirely.
*/
function visit$1(root, visitor) {
	function onNode(node, parent) {
		const result = visitor(node, parent);
		switch (result) {
			case "skip": return node;
			case "break": throw VisitBreak;
			default: if (result) node = result;
		}
		if ("index" in node && node.index) node.index = onNode(node.index, node);
		if ("fallback" in node && node.fallback) node.fallback = onNode(node.fallback, node);
		if ("children" in node) for (let i = 0; i < node.children.length; i++) node.children[i] = onNode(node.children[i], node);
		return node;
	}
	try {
		return onNode(root);
	} catch (e) {
		if (e === VisitBreak) return root;
		throw e;
	}
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/shared/index.js
var defaultTransform = (option, node) => {
	if (!node.icon) return option;
	return {
		...option,
		icon: /* @__PURE__ */ jsx("div", {
			className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary",
			children: node.icon
		})
	};
};
function getLayoutTabs(tree, { transform = defaultTransform } = {}) {
	const results = [];
	function next(node, unlisted) {
		if ("root" in node && node.root) {
			const url = node.index?.url ?? node.children.find((node) => node.type === "page")?.url;
			if (url) {
				const option = {
					title: node.name,
					icon: node.icon,
					description: node.description,
					url,
					unlisted,
					$folder: node
				};
				const mapped = transform ? transform(option, node) : option;
				if (mapped) results.push(mapped);
			}
		}
		for (const child of node.children) if (child.type === "folder") next(child, unlisted);
	}
	next(tree);
	if (tree.fallback) next(tree.fallback, true);
	return results;
}
function isLayoutTabActive(tab, pathname) {
	if (tab.$folder) return findPath(tab.$folder.children, (node) => node.type === "page" && isActive(node.url, pathname)) !== null;
	if (tab.urls) return tab.urls.has(normalize(pathname));
	return isActive(tab.url, pathname, true);
}
/**
* Get link items with shortcuts
*/
function resolveLinkItems({ links = [], githubUrl }) {
	const result = [...links];
	if (githubUrl) result.push({
		type: "icon",
		url: githubUrl,
		text: "Github",
		label: "GitHub",
		icon: /* @__PURE__ */ jsx("svg", {
			role: "img",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
		}),
		external: true
	});
	return result;
}
function useLinkItems({ githubUrl, links }) {
	return useMemo(() => {
		const all = resolveLinkItems({
			links,
			githubUrl
		});
		const navItems = [];
		const menuItems = [];
		for (const item of all) switch (item.on) {
			case "menu":
				menuItems.push(item);
				break;
			case "nav":
				navItems.push(item);
				break;
			default:
				navItems.push(item);
				menuItems.push(item);
		}
		return {
			navItems,
			menuItems,
			all
		};
	}, [links, githubUrl]);
}
function isLinkItemActive(link, pathname) {
	if (link.type === "custom" || !link.url) return false;
	if (link.active === "none") return false;
	return isActive(link.url, pathname, link.active === "nested-url");
}
//#endregion
//#region node_modules/fumadocs-core/dist/link.js
var Link$1 = forwardRef(({ href = "#", external = href.match(/^\w+:/) || href.startsWith("//"), prefetch, children, ...props }, ref) => {
	if (external) return /* @__PURE__ */ jsx("a", {
		ref,
		href,
		rel: "noreferrer noopener",
		target: "_blank",
		...props,
		children
	});
	return /* @__PURE__ */ jsx(Link$2, {
		ref,
		href,
		prefetch,
		...props,
		children
	});
});
Link$1.displayName = "Link";
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/shared/client.js
function LinkItem({ ref, item, ...props }) {
	const active = isLinkItemActive(item, usePathname());
	return /* @__PURE__ */ jsx(Link$1, {
		ref,
		href: item.url,
		external: item.external,
		...props,
		"data-active": active,
		children: props.children
	});
}
function baseSlots({ useProps }) {
	function InlineThemeSwitch(props) {
		const { themeSwitch } = useProps();
		if (themeSwitch.component) return themeSwitch.component;
		return /* @__PURE__ */ jsx(ThemeSwitch, {
			...props,
			...themeSwitch
		});
	}
	function InlineSearchTrigger(props) {
		const { searchToggle } = useProps();
		if (searchToggle.components?.sm) return searchToggle.components.sm;
		return /* @__PURE__ */ jsx(SearchTrigger, {
			...props,
			...searchToggle.sm
		});
	}
	function InlineSearchTriggerFull(props) {
		const { searchToggle } = useProps();
		if (searchToggle.components?.lg) return searchToggle.components.lg;
		return /* @__PURE__ */ jsx(FullSearchTrigger, {
			...props,
			...searchToggle.full
		});
	}
	function InlineNavTitle({ href: defaultUrl = "/", ...props }) {
		const { url = defaultUrl, title } = useProps().nav ?? {};
		if (typeof title === "function") return title({
			href: url,
			...props
		});
		return /* @__PURE__ */ jsx(Link$1, {
			href: url,
			...props,
			children: title
		});
	}
	return { useProvider(options) {
		const { locales = [] } = useI18n();
		const { nav, slots = {}, i18n = locales.length > 1, searchToggle: { enabled: searchToggleEnabled = true, ...searchToggle } = {}, themeSwitch: { enabled: themeSwitchEnabled = true, ...themeSwitch } = {} } = options;
		return {
			baseSlots: {
				navTitle: slots.navTitle ?? InlineNavTitle,
				themeSwitch: themeSwitchEnabled && (slots.themeSwitch ?? InlineThemeSwitch),
				languageSelect: i18n ? slots.languageSelect ?? {
					root: LanguageSelect,
					text: LanguageSelectText
				} : false,
				searchTrigger: searchToggleEnabled && (slots.searchTrigger ?? {
					sm: InlineSearchTrigger,
					full: InlineSearchTriggerFull
				})
			},
			baseProps: {
				nav,
				searchToggle,
				themeSwitch
			}
		};
	} };
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/slots/container.js
function Container$2(props) {
	return /* @__PURE__ */ jsx("main", {
		id: "nd-home-layout",
		...props,
		className: cn$1("flex flex-1 flex-col [--fd-layout-width:1400px]", props.className)
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/use-is-scroll-top.js
function useIsScrollTop({ enabled = true }) {
	const [isTop, setIsTop] = useState();
	useEffect(() => {
		if (!enabled) return;
		const listener = () => {
			setIsTop(window.scrollY < 10);
		};
		listener();
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, [enabled]);
	return isTop;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/navigation-menu.js
var NavigationMenu = Primitive$3.Root;
var NavigationMenuList = Primitive$3.List;
function NavigationMenuItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Primitive$3.NavigationMenuItem, {
		className: cn$1("list-none", className),
		...props,
		children
	});
}
function NavigationMenuTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Primitive$3.Trigger, {
		className: cn$1("data-[state=open]:bg-fd-accent/50", className),
		...props,
		children
	});
}
function NavigationMenuContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(Primitive$3.Content, {
		className: cn$1("absolute inset-x-0 top-0 overflow-auto fd-scroll-container max-h-[80svh] data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft", className),
		...props
	});
}
var NavigationMenuLink = Primitive$3.Link;
function NavigationMenuViewport({ className, ref, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: "flex w-full justify-center",
		children: /* @__PURE__ */ jsx(Primitive$3.Viewport, {
			...props,
			className: cn$1("relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in", className)
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/slots/header.js
var navItemVariants = cva("[&_svg]:size-4", {
	variants: { variant: {
		main: "inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary",
		button: buttonVariants$1({
			color: "secondary",
			className: "gap-1.5"
		}),
		icon: buttonVariants$1({
			color: "ghost",
			size: "icon"
		})
	} },
	defaultVariants: { variant: "main" }
});
function Header$1(props) {
	const { navItems, menuItems, slots, props: { nav } } = useHomeLayout();
	if (nav?.component) return nav.component;
	return /* @__PURE__ */ jsxs(HeaderNavigationMenu, {
		transparentMode: nav?.transparentMode,
		...props,
		children: [
			slots.navTitle && /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }),
			nav?.children,
			/* @__PURE__ */ jsx("ul", {
				className: "flex flex-row items-center gap-2 px-6 max-sm:hidden",
				children: navItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsx(NavigationMenuLinkItem, {
					item,
					className: "text-sm"
				}, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden",
				children: [
					slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.full, {
						hideIfDisabled: true,
						className: "w-full rounded-full ps-2.5 max-w-[240px]"
					}),
					slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, {}),
					slots.languageSelect && /* @__PURE__ */ jsx(slots.languageSelect.root, { children: /* @__PURE__ */ jsx(Languages, { className: "size-5" }) }),
					/* @__PURE__ */ jsx("ul", {
						className: "flex flex-row gap-2 items-center empty:hidden",
						children: navItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsx(NavigationMenuLinkItem, {
							className: cn$1(item.type === "icon" && "-mx-1 first:ms-0 last:me-0"),
							item
						}, i))
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row items-center ms-auto -me-1.5 lg:hidden",
				children: [slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.sm, {
					hideIfDisabled: true,
					className: "p-2"
				}), /* @__PURE__ */ jsx(NavigationMenuItem, {
					asChild: true,
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(NavigationMenuTrigger, {
						"aria-label": "Toggle Menu",
						className: cn$1(buttonVariants$1({
							size: "icon",
							color: "ghost",
							className: "group [&_svg]:size-5.5"
						})),
						onPointerMove: nav?.enableHoverToOpen ? void 0 : (e) => e.preventDefault(),
						children: /* @__PURE__ */ jsx(ChevronDown, { className: "transition-transform duration-300 group-data-[state=open]:rotate-180" })
					}), /* @__PURE__ */ jsxs(NavigationMenuContent, {
						className: "flex flex-col p-4 sm:flex-row sm:items-center sm:justify-end",
						children: [menuItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsx(MobileNavigationMenuLinkItem, {
							item,
							className: "sm:hidden"
						}, i)), /* @__PURE__ */ jsxs("div", {
							className: "-ms-1.5 flex flex-row items-center gap-2 max-sm:mt-2",
							children: [
								menuItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsx(MobileNavigationMenuLinkItem, {
									item,
									className: cn$1(item.type === "icon" && "-mx-1 first:ms-0")
								}, i)),
								/* @__PURE__ */ jsx("div", {
									role: "separator",
									className: "flex-1"
								}),
								slots.languageSelect && /* @__PURE__ */ jsxs(slots.languageSelect.root, { children: [
									/* @__PURE__ */ jsx(Languages, { className: "size-5" }),
									slots.languageSelect.text && /* @__PURE__ */ jsx(slots.languageSelect.text, {}),
									/* @__PURE__ */ jsx(ChevronDown, { className: "size-3 text-fd-muted-foreground" })
								] }),
								slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, {})
							]
						})]
					})] })
				})]
			})
		]
	});
}
function isSecondary(item) {
	if ("secondary" in item && item.secondary != null) return item.secondary;
	return item.type === "icon";
}
function HeaderNavigationMenu({ transparentMode = "none", ...props }) {
	const [value, setValue] = useState("");
	const isTop = useIsScrollTop({ enabled: transparentMode === "top" }) ?? true;
	const isTransparent = transparentMode === "top" ? isTop : transparentMode === "always";
	return /* @__PURE__ */ jsx(NavigationMenu, {
		value,
		onValueChange: setValue,
		asChild: true,
		children: /* @__PURE__ */ jsx("header", {
			id: "nd-nav",
			...props,
			className: cn$1("sticky h-14 top-0 z-40", props.className),
			children: /* @__PURE__ */ jsxs("div", {
				className: cn$1("backdrop-blur-lg border-b transition-colors *:mx-auto *:max-w-(--fd-layout-width)", value.length > 0 && "max-lg:shadow-lg max-lg:rounded-b-2xl", (!isTransparent || value.length > 0) && "bg-fd-background/80"),
				children: [/* @__PURE__ */ jsx(NavigationMenuList, {
					className: "flex h-14 w-full items-center px-4",
					asChild: true,
					children: /* @__PURE__ */ jsx("nav", { children: props.children })
				}), /* @__PURE__ */ jsx(NavigationMenuViewport, {})]
			})
		})
	});
}
function NavigationMenuLinkItem({ item, ...props }) {
	if (item.type === "custom") return item.children;
	if (item.type === "menu") {
		const children = item.items.map((child, j) => {
			if (child.type === "custom") return /* @__PURE__ */ jsx(Fragment$1, { children: child.children }, j);
			const { banner = child.icon ? /* @__PURE__ */ jsx("div", {
				className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4",
				children: child.icon
			}) : null, ...rest } = child.menu ?? {};
			return /* @__PURE__ */ jsx(NavigationMenuLink, {
				asChild: true,
				children: /* @__PURE__ */ jsx(Link$1, {
					href: child.url,
					external: child.external,
					...rest,
					className: cn$1("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground", rest.className),
					children: rest.children ?? /* @__PURE__ */ jsxs(Fragment, { children: [
						banner,
						/* @__PURE__ */ jsx("p", {
							className: "text-base font-medium",
							children: child.text
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-fd-muted-foreground empty:hidden",
							children: child.description
						})
					] })
				})
			}, `${j}-${child.url}`);
		});
		return /* @__PURE__ */ jsxs(NavigationMenuItem, {
			...props,
			children: [/* @__PURE__ */ jsx(NavigationMenuTrigger, {
				className: cn$1(navItemVariants(), "rounded-md"),
				children: item.url ? /* @__PURE__ */ jsx(Link$1, {
					href: item.url,
					external: item.external,
					children: item.text
				}) : item.text
			}), /* @__PURE__ */ jsx(NavigationMenuContent, {
				className: "grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3",
				children
			})]
		});
	}
	return /* @__PURE__ */ jsx(NavigationMenuItem, {
		...props,
		children: /* @__PURE__ */ jsx(NavigationMenuLink, {
			asChild: true,
			children: /* @__PURE__ */ jsx(LinkItem, {
				item,
				"aria-label": item.type === "icon" ? item.label : void 0,
				className: cn$1(navItemVariants({ variant: item.type })),
				children: item.type === "icon" ? item.icon : item.text
			})
		})
	});
}
function MobileNavigationMenuLinkItem({ item, ...props }) {
	if (item.type === "custom") return /* @__PURE__ */ jsx("div", {
		className: cn$1("grid", props.className),
		children: item.children
	});
	if (item.type === "menu") {
		const header = /* @__PURE__ */ jsxs(Fragment, { children: [item.icon, item.text] });
		return /* @__PURE__ */ jsxs("div", {
			className: cn$1("mb-4 flex flex-col", props.className),
			children: [/* @__PURE__ */ jsx("p", {
				className: "mb-1 text-sm text-fd-muted-foreground",
				children: item.url ? /* @__PURE__ */ jsx(NavigationMenuLink, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Link$1, {
						href: item.url,
						external: item.external,
						children: header
					})
				}) : header
			}), item.items.map((child, i) => /* @__PURE__ */ jsx(MobileNavigationMenuLinkItem, { item: child }, i))]
		});
	}
	return /* @__PURE__ */ jsx(NavigationMenuLink, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(LinkItem, {
			item,
			className: cn$1({
				main: "inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",
				icon: buttonVariants$1({
					size: "icon",
					color: "ghost"
				}),
				button: buttonVariants$1({
					color: "secondary",
					className: "gap-1.5 [&_svg]:size-4"
				})
			}[item.type ?? "main"], props.className),
			"aria-label": item.type === "icon" ? item.label : void 0,
			children: [item.icon, item.type === "icon" ? void 0 : item.text]
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/index.js
var LayoutContext$1 = createContext(null);
function useHomeLayout() {
	const context = use(LayoutContext$1);
	if (!context) throw new Error("Please use this component under <HomeLayout /> (`fumadocs-ui/layouts/home`).");
	return context;
}
var { useProvider: useProvider$1 } = baseSlots({ useProps() {
	return useHomeLayout().props;
} });
function HomeLayout(props) {
	const { nav: { enabled: navEnabled = true } = {}, slots: defaultSlots, children, i18n: _i18n, githubUrl: _githubUrl, links: _links, themeSwitch: _themeSwitch, searchToggle: _searchToggle, ...rest } = props;
	const { baseSlots, baseProps } = useProvider$1(props);
	const linkItems = useLinkItems(props);
	const slots = {
		...baseSlots,
		header: defaultSlots?.header ?? Header$1,
		container: defaultSlots?.container ?? Container$2
	};
	return /* @__PURE__ */ jsx(LayoutContext$1, {
		value: {
			props: baseProps,
			slots,
			...linkItems
		},
		children: /* @__PURE__ */ jsxs(slots.container, {
			...rest,
			children: [navEnabled && /* @__PURE__ */ jsx(slots.header, {}), children]
		})
	});
}
//#endregion
//#region app/lib/shared.ts
var appName = "Voltus SDK - DEMO";
var docsRoute = "/docs";
var docsContentRoute = "/llms.mdx/docs";
var gitConfig = {
	user: "voltus",
	repo: "voltus-sdk",
	branch: "main"
};
//#endregion
//#region app/lib/layout.shared.tsx
function baseOptions() {
	return {
		nav: { title: appName },
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/not-found.js
/**
* the default not found page content, please make your own if you want to customise it.
*/
function DefaultNotFound() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col px-8 justify-center flex-1 text-center items-center gap-4",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-6xl font-bold text-fd-muted-foreground",
				children: "404"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-semibold",
				children: "Page Not Found"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-fd-muted-foreground max-w-md",
				children: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
			}),
			/* @__PURE__ */ jsxs(Link$1, {
				href: "/",
				className: cn$1(buttonVariants$1({
					className: "mt-4 gap-1.5",
					variant: "primary"
				})),
				children: [/* @__PURE__ */ jsx(HomeIcon, { className: "size-4" }), "Back to Home"]
			})
		]
	});
}
//#endregion
//#region app/routes/not-found.tsx
var not_found_exports = /* @__PURE__ */ __exportAll$1({
	default: () => not_found_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "Not Found" }];
}
var not_found_default = UNSAFE_withComponentProps(function NotFound() {
	return /* @__PURE__ */ jsx(HomeLayout, {
		...baseOptions(),
		children: /* @__PURE__ */ jsx(DefaultNotFound, {})
	});
});
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll$1({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links,
	middleware: () => middleware
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "flex flex-col min-h-screen",
			children: [
				/* @__PURE__ */ jsx(RootProvider, { children }),
				/* @__PURE__ */ jsx(ScrollRestoration, {}),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		if (error.status === 404) return /* @__PURE__ */ jsx(not_found_default, {});
		message = "Error";
		details = error.statusText;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 w-full max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
var { rewrite: rewriteDocs } = rewritePath(`${docsRoute}{/*path}`, `${docsContentRoute}{/*path}/content.md`);
var { rewrite: rewriteSuffix } = rewritePath(`${docsRoute}{/*path}.mdx`, `${docsContentRoute}{/*path}/content.md`);
var serverMiddleware = async ({ request }, next) => {
	const url = new URL(request.url);
	const suffixPath = rewriteSuffix(url.pathname);
	if (suffixPath) return Response.redirect(new URL(suffixPath, url));
	if (isMarkdownPreferred(request)) {
		const docsPath = rewriteDocs(url.pathname);
		if (docsPath) return Response.redirect(new URL(docsPath, url));
	}
	return next();
};
var middleware = [serverMiddleware];
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll$1({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Voltus SDK - Documentation" }, {
		name: "description",
		content: "Build powerful integrations with the Voltus SDK. Type-safe, battle-tested, and developer-friendly."
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(HomeLayout, {
		...baseOptions(),
		children: /* @__PURE__ */ jsxs("div", {
			className: "p-4 flex flex-col items-center justify-center text-center flex-1 max-w-2xl mx-auto gap-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-sm font-medium text-fd-primary tracking-wide uppercase",
							children: "Developer Documentation"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-4xl font-bold tracking-tight",
							children: "Build with Voltus SDK - DEMO"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-fd-muted-foreground text-lg leading-relaxed",
							children: "A type-safe, intuitive SDK for the Voltus platform. From authentication to webhooks, everything you need to ship your integration fast."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ jsx(Link, {
						className: "text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-6 py-2.5 hover:opacity-90 transition-opacity",
						to: "/docs",
						children: "Get Started"
					}), /* @__PURE__ */ jsx(Link, {
						className: "text-sm border border-fd-border text-fd-foreground rounded-full font-medium px-6 py-2.5 hover:bg-fd-accent transition-colors",
						to: "/docs/api-reference/client",
						children: "API Reference"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "w-full max-w-lg mt-4 rounded-xl border bg-fd-card text-left p-4 shadow-sm",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs text-fd-muted-foreground mb-2 font-mono",
						children: "Quick install"
					}), /* @__PURE__ */ jsx("code", {
						className: "text-sm font-mono text-fd-foreground",
						children: "npm install @voltus/sdk"
					})]
				})
			]
		})
	});
});
//#endregion
//#region node_modules/fumadocs-core/dist/normalize-url-J3kqKlu4.js
/**
* normalize URL into the Fumadocs standard form (`/slug-1/slug-2`).
*
* This includes URLs with trailing slashes.
*/
function normalizeUrl(url) {
	if (url.startsWith("http://") || url.startsWith("https://")) return url;
	if (!url.startsWith("/")) url = "/" + url;
	if (url.length > 1 && url.endsWith("/")) url = url.slice(0, -1);
	return url;
}
//#endregion
//#region node_modules/fumadocs-core/dist/breadcrumb.js
function getBreadcrumbItemsFromPath(tree, path, options) {
	const { includePage = false, includeSeparator = false, includeRoot = false } = options;
	let items = [];
	for (let i = 0; i < path.length; i++) {
		const item = path[i];
		switch (item.type) {
			case "page":
				if (includePage) items.push({
					name: item.name,
					url: item.url
				});
				break;
			case "folder":
				if (item.root) {
					items = [];
					if (includeRoot) items.push({
						name: tree.name,
						url: typeof includeRoot === "object" ? includeRoot.url : item.index?.url
					});
					break;
				}
				if (i === path.length - 1 || item.index !== path[i + 1]) items.push({
					name: item.name,
					url: item.index?.url
				});
				break;
			case "separator":
				if (item.name && includeSeparator) items.push({ name: item.name });
				break;
		}
	}
	return items;
}
/**
* Search the path of a node in the tree by a specified url
*
* - When the page doesn't exist, return null
*
* @returns The path to the target node from root
* @internal Don't use this on your own
*/
function searchPath(nodes, url) {
	const normalizedUrl = normalizeUrl(url);
	return findPath(nodes, (node) => node.type === "page" && node.url === normalizedUrl);
}
//#endregion
//#region node_modules/fumadocs-ui/dist/contexts/tree.js
var TreeContext = createContext(null);
var PathContext = createContext([]);
function TreeContextProvider({ tree: rawTree, children }) {
	const nextIdRef = useRef(0);
	const pathname = usePathname();
	const tree = useMemo(() => rawTree, [rawTree.$id ?? rawTree]);
	const path = useMemo(() => {
		return searchPath(tree.children, pathname) ?? (tree.fallback ? searchPath(tree.fallback.children, pathname) : null) ?? [];
	}, [tree, pathname]);
	const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
	root.$id ??= String(nextIdRef.current++);
	return /* @__PURE__ */ jsx(TreeContext, {
		value: useMemo(() => ({
			root,
			full: tree
		}), [root, tree]),
		children: /* @__PURE__ */ jsx(PathContext, {
			value: path,
			children
		})
	});
}
function useTreePath() {
	return use(PathContext);
}
function useTreeContext() {
	const ctx = use(TreeContext);
	if (!ctx) throw new Error("You must wrap this component under <DocsLayout />");
	return ctx;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/merge-refs.js
function mergeRefs$1(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref) ref.current = value;
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/_virtual/_rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/collapsible.js
var Collapsible = Primitive$2.Root;
var CollapsibleTrigger = Primitive$2.CollapsibleTrigger;
function CollapsibleContent({ children, ...props }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ jsx(Primitive$2.CollapsibleContent, {
		...props,
		className: cn$1("overflow-hidden", mounted && "data-[state=closed]:animate-fd-collapsible-up data-[state=open]:animate-fd-collapsible-down", props.className),
		children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/scroll-area.js
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Primitive$1.Root, {
		type: "scroll",
		className: cn$1("overflow-hidden", className),
		...props,
		children: [
			children,
			/* @__PURE__ */ jsx(Primitive$1.Corner, {}),
			/* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
		]
	});
}
function ScrollViewport({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Primitive$1.Viewport, {
		className: cn$1("size-full rounded-[inherit]", className),
		...props,
		children
	});
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(Primitive$1.Scrollbar, {
		orientation,
		className: cn$1("flex select-none data-[state=hidden]:animate-fd-fade-out", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", className),
		...props,
		children: /* @__PURE__ */ jsx(Primitive$1.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/utils/use-media-query.js
function useMediaQuery(query, disabled = false) {
	const [isMatch, setMatch] = useState(null);
	useEffect(() => {
		if (disabled) return;
		const mediaQueryList = window.matchMedia(query);
		const handleChange = () => {
			setMatch(mediaQueryList.matches);
		};
		handleChange();
		mediaQueryList.addEventListener("change", handleChange);
		return () => {
			mediaQueryList.removeEventListener("change", handleChange);
		};
	}, [disabled, query]);
	return isMatch;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/sidebar/base.js
var base_exports = /* @__PURE__ */ __exportAll({
	SidebarCollapseTrigger: () => SidebarCollapseTrigger$1,
	SidebarContent: () => SidebarContent$1,
	SidebarDrawerContent: () => SidebarDrawerContent,
	SidebarDrawerOverlay: () => SidebarDrawerOverlay,
	SidebarFolder: () => SidebarFolder$1,
	SidebarFolderContent: () => SidebarFolderContent$1,
	SidebarFolderLink: () => SidebarFolderLink$1,
	SidebarFolderTrigger: () => SidebarFolderTrigger$1,
	SidebarItem: () => SidebarItem$1,
	SidebarProvider: () => SidebarProvider$1,
	SidebarSeparator: () => SidebarSeparator$1,
	SidebarTrigger: () => SidebarTrigger$1,
	SidebarViewport: () => SidebarViewport,
	useAutoScroll: () => useAutoScroll,
	useFolder: () => useFolder,
	useFolderDepth: () => useFolderDepth,
	useSidebar: () => useSidebar$1
});
var SidebarContext = createContext(null);
var FolderContext = createContext(null);
function SidebarProvider$1({ defaultOpenLevel = 0, prefetch, children }) {
	const closeOnRedirect = useRef(true);
	const [open, setOpen] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();
	const mode = useMediaQuery("(width < 768px)") ? "drawer" : "full";
	useOnChange(pathname, () => {
		if (closeOnRedirect.current) setOpen(false);
		closeOnRedirect.current = true;
	});
	return /* @__PURE__ */ jsx(SidebarContext, {
		value: useMemo(() => ({
			open,
			setOpen,
			collapsed,
			setCollapsed,
			closeOnRedirect,
			defaultOpenLevel,
			prefetch,
			mode
		}), [
			open,
			collapsed,
			defaultOpenLevel,
			prefetch,
			mode
		]),
		children
	});
}
function useSidebar$1() {
	const ctx = use(SidebarContext);
	if (!ctx) throw new Error("Missing SidebarContext, make sure you have wrapped the component in <DocsLayout /> and the context is available.");
	return ctx;
}
function useFolder() {
	return use(FolderContext);
}
function useFolderDepth() {
	return use(FolderContext)?.depth ?? 0;
}
function SidebarContent$1({ mode: allowedMode = "full", children }) {
	const { collapsed, mode } = useSidebar$1();
	const [hover, setHover] = useState(false);
	const ref = useRef(null);
	const timerRef = useRef(0);
	useOnChange(collapsed, () => {
		if (collapsed) setHover(false);
	});
	if (allowedMode !== true && allowedMode !== mode) return;
	function shouldIgnoreHover(e) {
		const element = ref.current;
		if (!element) return true;
		return !collapsed || e.pointerType === "touch" || element.getAnimations().length > 0;
	}
	return children({
		ref,
		collapsed,
		hovered: hover,
		onPointerEnter(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			setHover(true);
		},
		onPointerLeave(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			timerRef.current = window.setTimeout(() => setHover(false), Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
		}
	});
}
function SidebarViewport({ area, viewport, children }) {
	return /* @__PURE__ */ jsx(ScrollArea, {
		...area,
		className: cn$1("min-h-0 flex-1", area?.className),
		children: /* @__PURE__ */ jsx(ScrollViewport, {
			...viewport,
			className: cn$1("*:flex! *:flex-col! *:gap-0.5! p-4 overscroll-contain mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)]", viewport?.className),
			children
		})
	});
}
function SidebarDrawerOverlay(props) {
	const { open, setOpen, mode } = useSidebar$1();
	if (mode !== "drawer") return;
	return /* @__PURE__ */ jsx(Presence, {
		present: open,
		children: /* @__PURE__ */ jsx("div", {
			"data-state": open ? "open" : "closed",
			onClick: () => setOpen(false),
			...props
		})
	});
}
function SidebarDrawerContent({ className, children, ...props }) {
	const { open, mode } = useSidebar$1();
	const state = open ? "open" : "closed";
	if (mode !== "drawer") return;
	return /* @__PURE__ */ jsx(Presence, {
		present: open,
		children: ({ present }) => /* @__PURE__ */ jsx("aside", {
			id: "nd-sidebar-mobile",
			"data-state": state,
			className: cn$1(!present && "invisible", className),
			...props,
			children
		})
	});
}
function SidebarSeparator$1(props) {
	return /* @__PURE__ */ jsx("p", { ...props });
}
function SidebarItem$1({ icon, active = false, children, ...props }) {
	const ref = useRef(null);
	const { prefetch } = useSidebar$1();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ jsxs(Link$1, {
		ref,
		"data-active": active,
		prefetch,
		...props,
		children: [icon ?? (props.external ? /* @__PURE__ */ jsx(ExternalLink, {}) : null), children]
	});
}
function SidebarFolder$1({ defaultOpen: defaultOpenProp, collapsible = true, active = false, children, ...props }) {
	const { defaultOpenLevel } = useSidebar$1();
	const depth = useFolderDepth() + 1;
	const defaultOpen = collapsible === false || active || (defaultOpenProp ?? defaultOpenLevel >= depth);
	const [open, setOpen] = useState(defaultOpen);
	useOnChange(defaultOpen, (v) => {
		if (v) setOpen(v);
	});
	return /* @__PURE__ */ jsx(Collapsible, {
		open,
		onOpenChange: setOpen,
		disabled: !collapsible,
		...props,
		children: /* @__PURE__ */ jsx(FolderContext, {
			value: useMemo(() => ({
				open,
				setOpen,
				depth,
				collapsible
			}), [
				collapsible,
				depth,
				open
			]),
			children
		})
	});
}
function SidebarFolderTrigger$1({ children, ...props }) {
	const { open, collapsible } = use(FolderContext);
	if (collapsible) return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, {
			"data-icon": true,
			className: cn$1("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
	return /* @__PURE__ */ jsx("div", {
		...props,
		children
	});
}
function SidebarFolderLink$1({ children, active = false, ...props }) {
	const ref = useRef(null);
	const { open, setOpen, collapsible } = use(FolderContext);
	const { prefetch } = useSidebar$1();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ jsxs(Link$1, {
		ref,
		"data-active": active,
		onClick: (e) => {
			if (!collapsible) return;
			if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
				setOpen(!open);
				e.preventDefault();
			} else setOpen(active ? !open : true);
		},
		prefetch,
		...props,
		children: [children, collapsible && /* @__PURE__ */ jsx(ChevronDown, {
			"data-icon": true,
			className: cn$1("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
}
function SidebarFolderContent$1(props) {
	return /* @__PURE__ */ jsx(CollapsibleContent, {
		...props,
		children: props.children
	});
}
function SidebarTrigger$1({ children, ...props }) {
	const { setOpen } = useSidebar$1();
	return /* @__PURE__ */ jsx("button", {
		"aria-label": "Open Sidebar",
		onClick: () => setOpen((prev) => !prev),
		...props,
		children
	});
}
function SidebarCollapseTrigger$1(props) {
	const { collapsed, setCollapsed } = useSidebar$1();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-label": "Collapse Sidebar",
		"data-collapsed": collapsed,
		onClick: () => {
			setCollapsed((prev) => !prev);
		},
		...props,
		children: props.children
	});
}
/**
* scroll to the element if `active` is true
*/
function useAutoScroll(active, ref) {
	const { mode } = useSidebar$1();
	useEffect(() => {
		if (active && ref.current) scrollIntoView(ref.current, {
			boundary: document.getElementById(mode === "drawer" ? "nd-sidebar-mobile" : "nd-sidebar"),
			scrollMode: "if-needed"
		});
	}, [
		active,
		mode,
		ref
	]);
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/sidebar/page-tree.js
var RendererContext = createContext(null);
function createPageTreeRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarSeparator, SidebarItem }) {
	function renderList(nodes) {
		return nodes.map((node, i) => /* @__PURE__ */ jsx(PageTreeNode, { node }, i));
	}
	function PageTreeNode({ node }) {
		const { Separator, Item, Folder, pathname } = use(RendererContext);
		if (node.type === "separator") {
			if (Separator) return /* @__PURE__ */ jsx(Separator, { item: node });
			return /* @__PURE__ */ jsxs(SidebarSeparator, { children: [node.icon, node.name] });
		}
		if (node.type === "folder") {
			const path = useTreePath();
			if (Folder) return /* @__PURE__ */ jsx(Folder, {
				item: node,
				children: renderList(node.children)
			});
			return /* @__PURE__ */ jsxs(SidebarFolder, {
				collapsible: node.collapsible,
				active: path.includes(node),
				defaultOpen: node.defaultOpen,
				children: [node.index ? /* @__PURE__ */ jsxs(SidebarFolderLink, {
					href: node.index.url,
					active: isActive(node.index.url, pathname),
					external: node.index.external,
					children: [node.icon, node.name]
				}) : /* @__PURE__ */ jsxs(SidebarFolderTrigger, { children: [node.icon, node.name] }), /* @__PURE__ */ jsx(SidebarFolderContent, { children: renderList(node.children) })]
			});
		}
		if (Item) return /* @__PURE__ */ jsx(Item, { item: node });
		return /* @__PURE__ */ jsx(SidebarItem, {
			href: node.url,
			external: node.external,
			active: isActive(node.url, pathname),
			icon: node.icon,
			children: node.name
		});
	}
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarPageTree(components) {
		const { Folder, Item, Separator } = components;
		const { root } = useTreeContext();
		const pathname = usePathname();
		return /* @__PURE__ */ jsx(RendererContext, {
			value: useMemo(() => ({
				Folder,
				Item,
				Separator,
				pathname
			}), [
				Folder,
				Item,
				Separator,
				pathname
			]),
			children: /* @__PURE__ */ jsx(Fragment$1, { children: renderList(root.children) }, root.$id)
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/sidebar/link-item.js
function createLinkItemRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarItem }) {
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarLinkItem({ item, ...props }) {
		const active = isLinkItemActive(item, usePathname());
		if (item.type === "custom") return /* @__PURE__ */ jsx("div", {
			...props,
			children: item.children
		});
		if (item.type === "menu") return /* @__PURE__ */ jsxs(SidebarFolder, {
			...props,
			children: [item.url ? /* @__PURE__ */ jsxs(SidebarFolderLink, {
				href: item.url,
				active,
				external: item.external,
				children: [item.icon, item.text]
			}) : /* @__PURE__ */ jsxs(SidebarFolderTrigger, { children: [item.icon, item.text] }), /* @__PURE__ */ jsx(SidebarFolderContent, { children: item.items.map((child, i) => /* @__PURE__ */ jsx(SidebarLinkItem, { item: child }, i)) })]
		});
		return /* @__PURE__ */ jsx(SidebarItem, {
			href: item.url,
			icon: item.icon,
			external: item.external,
			active,
			...props,
			children: item.text
		});
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/slots/sidebar.js
var itemVariants = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0", { variants: {
	variant: {
		link: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors",
		button: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
	},
	highlight: { true: "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5" }
} });
var { useSidebar } = base_exports;
function SidebarProvider(props) {
	return /* @__PURE__ */ jsx(SidebarProvider$1, { ...props });
}
function Sidebar({ footer, banner, collapsible = true, components, ...rest }) {
	const { menuItems, slots, props: { tabs, nav, tabMode } } = useDocsLayout();
	const iconLinks = menuItems.filter((item) => item.type === "icon");
	const viewport = /* @__PURE__ */ jsxs(SidebarViewport, { children: [menuItems.filter((v) => v.type !== "icon").map((item, i, list) => /* @__PURE__ */ jsx(SidebarLinkItem, {
		item,
		className: cn$1(i === list.length - 1 && "mb-4")
	}, i)), /* @__PURE__ */ jsx(SidebarPageTree, { ...components })] });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(SidebarContent, {
		...rest,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 p-4 pb-2",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex",
						children: [
							slots.navTitle && /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex text-[0.9375rem] items-center gap-2.5 font-medium me-auto" }),
							nav?.children,
							collapsible && /* @__PURE__ */ jsx(SidebarCollapseTrigger, {
								className: cn$1(buttonVariants$1({
									color: "ghost",
									size: "icon-sm",
									className: "mb-auto text-fd-muted-foreground"
								})),
								children: /* @__PURE__ */ jsx(SidebarIcon, {})
							})
						]
					}),
					slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.full, { hideIfDisabled: true }),
					tabs.length > 0 && tabMode === "auto" && /* @__PURE__ */ jsx(SidebarTabsDropdown, { tabs }),
					banner
				]
			}),
			viewport,
			(slots.languageSelect || iconLinks.length > 0 || slots.themeSwitch || footer) && /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col p-4 pt-2",
				children: [
					slots.languageSelect && /* @__PURE__ */ jsxs(slots.languageSelect.root, {
						variant: "secondary",
						className: "text-fd-muted-foreground text-start justify-start bg-fd-secondary/50 mb-2",
						children: [
							/* @__PURE__ */ jsx(Languages, { className: "size-4.5" }),
							/* @__PURE__ */ jsx(slots.languageSelect.text, {}),
							/* @__PURE__ */ jsx(ChevronDown, { className: "ms-auto size-3.5" })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex text-fd-muted-foreground items-center border bg-fd-secondary/50 p-0.5 pe-0 rounded-lg empty:hidden",
						children: [iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
							item,
							className: cn$1(buttonVariants$1({
								size: "icon-sm",
								color: "ghost"
							})),
							"aria-label": item.label,
							children: item.icon
						}, i)), slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, { className: "px-1 py-0 border-y-0 border-e-0 rounded-none ms-auto *:rounded-md" })]
					}),
					footer
				]
			})
		]
	}), /* @__PURE__ */ jsxs(SidebarDrawer, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 p-4 pb-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex text-fd-muted-foreground items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-1",
							children: iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
								item,
								className: cn$1(buttonVariants$1({
									size: "icon-sm",
									color: "ghost",
									className: "p-2"
								})),
								"aria-label": item.label,
								children: item.icon
							}, i))
						}),
						slots.languageSelect && /* @__PURE__ */ jsxs(slots.languageSelect.root, { children: [/* @__PURE__ */ jsx(Languages, { className: "size-4.5" }), /* @__PURE__ */ jsx(slots.languageSelect.text, {})] }),
						slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, { className: "p-0" }),
						/* @__PURE__ */ jsx(SidebarTrigger, {
							className: cn$1(buttonVariants$1({
								color: "ghost",
								size: "icon-sm",
								className: "p-2"
							})),
							children: /* @__PURE__ */ jsx(SidebarIcon, {})
						})
					]
				}),
				tabs.length > 0 && /* @__PURE__ */ jsx(SidebarTabsDropdown, { tabs }),
				banner
			]
		}),
		viewport,
		/* @__PURE__ */ jsx("div", {
			className: "flex flex-col border-t p-4 pt-2 empty:hidden",
			children: footer
		})
	] })] });
}
function SidebarFolder(props) {
	return /* @__PURE__ */ jsx(SidebarFolder$1, { ...props });
}
function SidebarCollapseTrigger(props) {
	return /* @__PURE__ */ jsx(SidebarCollapseTrigger$1, { ...props });
}
function SidebarTrigger(props) {
	return /* @__PURE__ */ jsx(SidebarTrigger$1, { ...props });
}
function SidebarContent({ ref: refProp, className, children, ...props }) {
	const ref = useRef(null);
	return /* @__PURE__ */ jsx(SidebarContent$1, { children: ({ collapsed, hovered, ref: asideRef, ...rest }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		"data-sidebar-placeholder": "",
		className: "sticky top-(--fd-docs-row-1) z-20 [grid-area:sidebar] pointer-events-none *:pointer-events-auto h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] md:layout:[--fd-sidebar-width:268px] max-md:hidden",
		children: [collapsed && /* @__PURE__ */ jsx("div", {
			className: "absolute inset-s-0 inset-y-0 w-4",
			...rest
		}), /* @__PURE__ */ jsx("aside", {
			id: "nd-sidebar",
			ref: mergeRefs$1(ref, refProp, asideRef),
			"data-collapsed": collapsed,
			"data-hovered": collapsed && hovered,
			className: cn$1("absolute flex flex-col w-full inset-s-0 inset-y-0 items-end bg-fd-card text-sm border-e duration-250 *:w-(--fd-sidebar-width)", collapsed && ["inset-y-2 rounded-xl transition-transform border w-(--fd-sidebar-width)", hovered ? "shadow-lg translate-x-2 rtl:-translate-x-2" : "-translate-x-(--fd-sidebar-width) rtl:translate-x-full"], ref.current && ref.current.getAttribute("data-collapsed") === "true" !== collapsed && "transition-[width,inset-block,translate,background-color]", className),
			...props,
			...rest,
			children
		})]
	}), /* @__PURE__ */ jsxs("div", {
		"data-sidebar-panel": "",
		className: cn$1("fixed flex top-[calc(--spacing(4)+var(--fd-docs-row-3))] inset-s-4 shadow-lg transition-opacity rounded-xl p-0.5 border bg-fd-muted text-fd-muted-foreground z-10", (!collapsed || hovered) && "pointer-events-none opacity-0"),
		children: [/* @__PURE__ */ jsx(SidebarCollapseTrigger$1, {
			className: cn$1(buttonVariants$1({
				color: "ghost",
				size: "icon-sm",
				className: "rounded-lg"
			})),
			children: /* @__PURE__ */ jsx(SidebarIcon, {})
		}), /* @__PURE__ */ jsx(SearchTrigger, {
			className: "rounded-lg",
			hideIfDisabled: true
		})]
	})] }) });
}
function SidebarDrawer({ children, className, ...props }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SidebarDrawerOverlay, { className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" }), /* @__PURE__ */ jsx(SidebarDrawerContent, {
		className: cn$1("fixed text-[0.9375rem] flex flex-col shadow-lg border-s inset-e-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", className),
		...props,
		children
	})] });
}
function SidebarSeparator({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarSeparator$1, {
		className: cn$1("inline-flex items-center gap-2 mb-1 px-2 mt-6 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0", depth === 0 && "first:mt-0", className),
		style: {
			paddingInlineStart: getItemOffset$1(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarItem({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarItem$1, {
		className: cn$1(itemVariants({
			variant: "link",
			highlight: depth >= 1
		}), className),
		style: {
			paddingInlineStart: getItemOffset$1(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarFolderTrigger({ className, style, ...props }) {
	const { depth, collapsible } = useFolder();
	return /* @__PURE__ */ jsx(SidebarFolderTrigger$1, {
		className: cn$1(itemVariants({ variant: collapsible ? "button" : null }), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset$1(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderLink({ className, style, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarFolderLink$1, {
		className: cn$1(itemVariants({
			variant: "link",
			highlight: depth > 1
		}), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset$1(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(SidebarFolderContent$1, {
		className: cn$1("relative", useFolderDepth() === 1 && "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:inset-s-2.5", className),
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-0.5 pt-0.5",
			children
		})
	});
}
function SidebarTabsDropdown({ tabs, placeholder, ...props }) {
	const [open, setOpen] = useState(false);
	const { closeOnRedirect } = useSidebar();
	const pathname = usePathname();
	const selected = useMemo(() => {
		return tabs.findLast((item) => isLayoutTabActive(item, pathname));
	}, [tabs, pathname]);
	const onClick = () => {
		closeOnRedirect.current = false;
		setOpen(false);
	};
	const item = selected ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "size-9 shrink-0 empty:hidden md:size-5",
		children: selected.icon
	}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "text-sm font-medium",
		children: selected.title
	}), /* @__PURE__ */ jsx("p", {
		className: "text-sm text-fd-muted-foreground empty:hidden md:hidden",
		children: selected.description
	})] })] }) : placeholder;
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [item && /* @__PURE__ */ jsxs(PopoverTrigger, {
			...props,
			className: cn$1("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className),
			children: [item, /* @__PURE__ */ jsx(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })]
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: "flex flex-col gap-1 w-(--radix-popover-trigger-width) p-1 fd-scroll-container",
			children: tabs.map((item) => {
				const isActive = selected && item.url === selected.url;
				if (!isActive && item.unlisted) return;
				return /* @__PURE__ */ jsxs(Link$1, {
					href: item.url,
					onClick,
					...item.props,
					className: cn$1("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item.props?.className),
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "shrink-0 size-9 md:mb-auto md:size-5 empty:hidden",
							children: item.icon
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-medium leading-none",
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[0.8125rem] text-fd-muted-foreground mt-1 empty:hidden",
							children: item.description
						})] }),
						/* @__PURE__ */ jsx(Check, { className: cn$1("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive && "invisible") })
					]
				}, item.url);
			})
		})]
	});
}
function getItemOffset$1(depth) {
	return `calc(${2 + 3 * depth} * var(--spacing))`;
}
var SidebarPageTree = createPageTreeRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem,
	SidebarSeparator
});
var SidebarLinkItem = createLinkItemRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem
});
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/slots/header.js
function Header(props) {
	const { isNavTransparent, slots, props: { nav } } = useDocsLayout();
	if (nav?.component) return nav.component;
	return /* @__PURE__ */ jsxs("header", {
		id: "nd-subnav",
		"data-transparent": isNavTransparent,
		...props,
		className: cn$1("[grid-area:header] sticky top-(--fd-docs-row-1) z-30 flex items-center ps-4 pe-2.5 border-b transition-colors backdrop-blur-sm h-(--fd-header-height) md:hidden max-md:layout:[--fd-header-height:--spacing(14)] data-[transparent=false]:bg-fd-background/80", props.className),
		children: [
			slots.navTitle && /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }),
			/* @__PURE__ */ jsx("div", {
				className: "flex-1",
				children: nav?.children
			}),
			slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.sm, {
				hideIfDisabled: true,
				className: "p-2"
			}),
			slots.sidebar && /* @__PURE__ */ jsx(slots.sidebar.trigger, {
				className: cn$1(buttonVariants$1({
					color: "ghost",
					size: "icon-sm",
					className: "p-2"
				})),
				children: /* @__PURE__ */ jsx(SidebarIcon, {})
			})
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/slots/container.js
function Container$1(props) {
	const { slots } = useDocsLayout();
	const { collapsed } = slots.sidebar.useSidebar();
	const [previousCollapsed, setPreviousCollapsed] = useState(collapsed);
	const isCollapseChanged = previousCollapsed !== collapsed;
	useEffect(() => {
		if (isCollapseChanged) setPreviousCollapsed(collapsed);
	}, [collapsed, isCollapseChanged]);
	return /* @__PURE__ */ jsx("div", {
		id: "nd-docs-layout",
		"data-sidebar-collapsed": collapsed,
		"data-column-changed": isCollapseChanged,
		...props,
		style: {
			gridTemplate: `"sidebar sidebar header toc toc"
"sidebar sidebar toc-popover toc toc"
"sidebar sidebar main toc toc" 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) var(--fd-toc-width) minmax(min-content, 1fr)`,
			"--fd-docs-row-1": "var(--fd-banner-height, 0px)",
			"--fd-docs-row-2": "calc(var(--fd-docs-row-1) + var(--fd-header-height))",
			"--fd-docs-row-3": "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
			"--fd-sidebar-col": collapsed ? "0px" : "var(--fd-sidebar-width)",
			...props.style
		},
		className: cn$1("grid overflow-x-clip min-h-(--fd-docs-height) [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px] data-[column-changed=true]:transition-[grid-template-columns]", props.className),
		children: props.children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/client.js
var { useProvider } = baseSlots({ useProps() {
	return useDocsLayout().props;
} });
var LayoutContext = createContext(null);
function useDocsLayout() {
	const context = use(LayoutContext);
	if (!context) throw new Error("Please use <DocsPage /> (`fumadocs-ui/layouts/docs/page`) under <DocsLayout /> (`fumadocs-ui/layouts/docs`).");
	return context;
}
function LayoutBody(props) {
	const { nav: { enabled: navEnabled = true, transparentMode: navTransparentMode = "none" } = {}, sidebar: { enabled: sidebarEnabled = true, defaultOpenLevel, prefetch, ...sidebarProps } = {}, slots: defaultSlots, tabs, tabMode = "auto", tree, containerProps, children } = props;
	const isTop = useIsScrollTop({ enabled: navTransparentMode === "top" }) ?? true;
	const isNavTransparent = navTransparentMode === "top" ? isTop : navTransparentMode === "always";
	const { baseSlots, baseProps } = useProvider(props);
	const linkItems = useLinkItems(props);
	const slots = {
		...baseSlots,
		header: defaultSlots?.header ?? Header,
		container: defaultSlots?.container ?? Container$1,
		sidebar: defaultSlots?.sidebar ?? {
			provider: SidebarProvider,
			root: Sidebar,
			trigger: SidebarTrigger,
			useSidebar
		}
	};
	return /* @__PURE__ */ jsx(TreeContextProvider, {
		tree,
		children: /* @__PURE__ */ jsx(LayoutContext, {
			value: {
				props: {
					tabMode,
					tabs,
					...baseProps
				},
				isNavTransparent,
				slots,
				...linkItems
			},
			children: /* @__PURE__ */ jsx(slots.sidebar.provider, {
				defaultOpenLevel,
				prefetch,
				children: /* @__PURE__ */ jsxs(slots.container, {
					...containerProps,
					children: [
						navEnabled && /* @__PURE__ */ jsx(slots.header, {}),
						sidebarEnabled && /* @__PURE__ */ jsx(slots.sidebar.root, { ...sidebarProps }),
						tabMode === "top" && tabs.length > 0 && /* @__PURE__ */ jsx(LayoutTabs, {
							tabs,
							className: "z-10 bg-fd-background border-b px-6 pt-3 xl:px-8 max-md:hidden"
						}),
						children
					]
				})
			})
		})
	});
}
function LayoutTabs({ tabs, ...props }) {
	const pathname = usePathname();
	const selected = useMemo(() => {
		return tabs.findLast((option) => isLayoutTabActive(option, pathname));
	}, [tabs, pathname]);
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("flex flex-row items-end gap-6 overflow-auto [grid-area:main]", props.className),
		children: tabs.map((tab, i) => /* @__PURE__ */ jsx(Link$1, {
			href: tab.url,
			className: cn$1("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", tab.unlisted && selected !== tab && "hidden", selected === tab && "border-fd-primary text-fd-primary"),
			children: tab.title
		}, i))
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/index.js
function DocsLayout({ tree, sidebar: { tabs: _tabs, tabMode: _tabMode, ...sidebarProps } = {}, tabs: layoutTabs = _tabs, tabMode = _tabMode, children, ...props }) {
	return /* @__PURE__ */ jsx(LayoutBody, {
		tree,
		tabs: useMemo(() => {
			if (Array.isArray(layoutTabs)) return layoutTabs;
			if (typeof layoutTabs === "object") return getLayoutTabs(tree, layoutTabs);
			if (layoutTabs !== false) return getLayoutTabs(tree);
			return [];
		}, [tree, layoutTabs]),
		tabMode,
		sidebar: sidebarProps,
		...props,
		children
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/toc.js
var toc_exports = /* @__PURE__ */ __exportAll$1({
	AnchorProvider: () => AnchorProvider,
	ScrollProvider: () => ScrollProvider,
	TOCItem: () => TOCItem$2,
	useActiveAnchor: () => useActiveAnchor$1,
	useActiveAnchors: () => useActiveAnchors$1,
	useItems: () => useItems$1
});
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
var ItemsContext = createContext(null);
var ScrollContext = createContext(null);
/** Optional: add auto-scroll to TOC items. */
function ScrollProvider({ containerRef, children }) {
	return /* @__PURE__ */ jsx(ScrollContext, {
		value: containerRef,
		children
	});
}
function AnchorProvider({ toc, single = false, children }) {
	const observer = useMemo(() => new Observer(), []);
	const [items, setItems] = useState(observer.items);
	observer.single = single;
	useEffect(() => {
		observer.setItems(toc);
	}, [observer, toc]);
	useEffect(() => {
		observer.watch({
			rootMargin: "0px",
			threshold: .98
		});
		observer.onChange = () => setItems(observer.items);
		return () => {
			observer.unwatch();
		};
	}, [observer]);
	return /* @__PURE__ */ jsx(ItemsContext, {
		value: items,
		children
	});
}
function TOCItem$2({ ref, onActiveChange = () => null, ...props }) {
	const id = props.href ? getItemId(props.href) : null;
	const items = useItems$1();
	const itemData = id ? items.find((item) => item.id === id) : null;
	const containerRef = use(ScrollContext);
	const isInitialMountRef = useRef(true);
	const anchorRef = useRef(null);
	const [active, setActive] = useState(() => itemData != null && itemData.active);
	if (itemData && itemData.active !== active) {
		setActive(itemData.active);
		onActiveChange(itemData.active);
	}
	const shouldScroll = itemData?.active && items.every((item) => !item.active || item.t <= itemData.t);
	useEffect(() => {
		const anchor = anchorRef.current;
		const container = containerRef?.current;
		if (shouldScroll && container && anchor) scrollIntoView(anchor, {
			behavior: isInitialMountRef.current ? "instant" : "smooth",
			block: "center",
			inline: "center",
			scrollMode: "always",
			boundary: container
		});
		isInitialMountRef.current = false;
	}, [shouldScroll, containerRef]);
	return /* @__PURE__ */ jsx("a", {
		ref: mergeRefs(anchorRef, ref),
		"data-active": active,
		...props
	});
}
/**
* The estimated active heading ID
*/
function useActiveAnchor$1() {
	const items = useItems$1();
	return useMemo(() => {
		let out;
		for (const item of items) {
			if (!item.active) continue;
			if (!out || item.t > out.t) out = item;
		}
		return out?.id;
	}, [items]);
}
/**
* The id of visible anchors
*/
function useActiveAnchors$1() {
	const items = useItems$1();
	return useMemo(() => {
		const out = [];
		for (const item of items) if (item.active) out.push(item.id);
		return out;
	}, [items]);
}
function useItems$1() {
	const ctx = use(ItemsContext);
	if (!ctx) throw new Error(`Component must be used under the <AnchorProvider /> component.`);
	return ctx;
}
function getItemId(url) {
	if (url.startsWith("#")) return url.slice(1);
	return null;
}
var Observer = class {
	constructor() {
		this.items = [];
		this.single = false;
		this.observer = null;
	}
	callback(entries) {
		if (entries.length === 0) return;
		let hasActive = false;
		this.items = this.items.map((item) => {
			const entry = entries.find((entry) => entry.target.id === item.id);
			let active = entry ? entry.isIntersecting : item.active && !item.fallback;
			if (this.single && hasActive) active = false;
			if (item.active !== active) item = {
				...item,
				t: Date.now(),
				active,
				fallback: false
			};
			if (active) hasActive = true;
			return item;
		});
		if (!hasActive && entries[0].rootBounds) {
			const viewTop = entries[0].rootBounds.top;
			let min = Number.MAX_VALUE;
			let fallbackIdx = -1;
			for (let i = 0; i < this.items.length; i++) {
				const element = document.getElementById(this.items[i].id);
				if (!element) continue;
				const d = Math.abs(viewTop - element.getBoundingClientRect().top);
				if (d < min) {
					fallbackIdx = i;
					min = d;
				}
			}
			if (fallbackIdx !== -1) this.items[fallbackIdx] = {
				...this.items[fallbackIdx],
				active: true,
				fallback: true,
				t: Date.now()
			};
		}
		this.onChange?.();
	}
	setItems(newItems) {
		const observer = this.observer;
		if (observer) for (const item of this.items) {
			const element = document.getElementById(item.id);
			if (!element) continue;
			observer.unobserve(element);
		}
		this.items = [];
		for (const item of newItems) {
			const id = getItemId(item.url);
			if (!id) continue;
			this.items.push({
				id,
				active: false,
				fallback: false,
				t: 0,
				original: item
			});
		}
		this.watchItems();
	}
	watch(options) {
		if (this.observer) return;
		this.observer = new IntersectionObserver(this.callback.bind(this), options);
		this.watchItems();
	}
	watchItems() {
		if (!this.observer) return;
		for (const item of this.items) {
			const element = document.getElementById(item.id);
			if (!element) continue;
			this.observer.observe(element);
		}
	}
	unwatch() {
		this.observer?.disconnect();
		this.observer = null;
	}
};
//#endregion
//#region node_modules/fumadocs-ui/dist/components/toc/index.js
var TOCContext = createContext([]);
function useTOCItems() {
	return use(TOCContext);
}
var { useActiveAnchor, useActiveAnchors, useItems } = toc_exports;
function TOCProvider$1({ toc, children, ...props }) {
	return /* @__PURE__ */ jsx(TOCContext, {
		value: toc,
		children: /* @__PURE__ */ jsx(AnchorProvider, {
			toc,
			...props,
			children
		})
	});
}
function TOCScrollArea({ ref, className, ...props }) {
	const viewRef = useRef(null);
	return /* @__PURE__ */ jsx("div", {
		ref: mergeRefs$1(viewRef, ref),
		className: cn$1("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className),
		...props,
		children: /* @__PURE__ */ jsx(ScrollProvider, {
			containerRef: viewRef,
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/toc/default.js
var default_exports = /* @__PURE__ */ __exportAll({
	TOCEmpty: () => TOCEmpty$1,
	TOCItem: () => TOCItem$1,
	TOCItems: () => TOCItems$1
});
function TOCItems$1({ ref, className, ...props }) {
	const containerRef = useRef(null);
	const items = useTOCItems();
	const [computed, setComputed] = useState(null);
	const onCompute = useCallback(() => {
		const container = containerRef.current;
		if (!container) return;
		if (items.length === 0) {
			setComputed(null);
			return;
		}
		const positions = [];
		for (const item of items) {
			const element = container.querySelector(`a[href="${item.url}"]`);
			if (!element) continue;
			const styles = getComputedStyle(element);
			positions.push([element.offsetTop + parseFloat(styles.paddingTop), element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom)]);
		}
		setComputed({ positions });
	}, [items]);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const observer = new ResizeObserver(onCompute);
		observer.observe(container);
		onCompute();
		return () => {
			observer.disconnect();
		};
	}, [onCompute]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [computed && /* @__PURE__ */ jsx(TocThumb, { computed }), /* @__PURE__ */ jsx("div", {
			ref: mergeRefs$1(ref, containerRef),
			className: cn$1("flex flex-col border-s border-fd-foreground/10", className),
			...props
		})]
	});
}
function TocThumb({ computed }) {
	const items = useItems$1();
	const startIdx = items.findIndex((item) => item.active);
	if (startIdx === -1) return;
	const endIdx = items.findLastIndex((item) => item.active);
	const top = `${computed.positions[startIdx][0]}px`;
	const bottom = `${computed.positions[endIdx][1]}px`;
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-y-0 inset-s-0 bg-fd-primary w-px transition-[clip-path]",
		style: { clipPath: `polygon(0 ${top}, 100% ${top}, 100% ${bottom}, 0 ${bottom})` }
	});
}
function TOCEmpty$1() {
	const { text } = useI18n();
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: text.tocNoHeadings
	});
}
function TOCItem$1({ item, ...props }) {
	return /* @__PURE__ */ jsx(TOCItem$2, {
		href: item.url,
		...props,
		className: cn$1("prose py-1.5 text-sm text-fd-muted-foreground scroll-m-4 transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary hover:text-fd-accent-foreground", item.depth <= 2 && "ps-3", item.depth === 3 && "ps-6", item.depth >= 4 && "ps-8", props.className),
		children: item.title
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/toc/clerk.js
var clerk_exports = /* @__PURE__ */ __exportAll({
	TOCEmpty: () => TOCEmpty,
	TOCItem: () => TOCItem,
	TOCItems: () => TOCItems
});
function TOCItems({ ref, className, thumbBox = true, ...props }) {
	const containerRef = useRef(null);
	const items = useTOCItems();
	const [svg, setSvg] = useState(null);
	const onPrint = useCallback(() => {
		const container = containerRef.current;
		if (!container || container.clientHeight === 0) return;
		if (items.length === 0) {
			setSvg(null);
			return;
		}
		let w = 0;
		let h = 0;
		let d = "";
		const positions = [];
		const output = [];
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const element = container.querySelector(`a[href="${item.url}"]`);
			if (!element) continue;
			const styles = getComputedStyle(element);
			const x = getLineOffset(item.depth) + .5;
			const top = element.offsetTop + parseFloat(styles.paddingTop);
			const bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
			w = Math.max(x + 8, w);
			h = Math.max(h, bottom);
			if (i === 0) d += ` M${x} ${top} L${x} ${bottom}`;
			else {
				const [, upperBottom, upperX] = i > 0 ? positions[i - 1] : [
					0,
					0,
					0
				];
				d += ` C ${upperX} ${top - 4} ${x} ${upperBottom + 4} ${x} ${top} L${x} ${bottom}`;
			}
			if (item._step !== void 0) output.push(/* @__PURE__ */ jsx("circle", {
				cx: x,
				cy: (top + bottom) / 2,
				r: "8",
				className: "fill-fd-primary"
			}, `${i}-circle`), /* @__PURE__ */ jsx("text", {
				x,
				y: (top + bottom) / 2,
				textAnchor: "middle",
				alignmentBaseline: "central",
				dominantBaseline: "middle",
				className: "fill-fd-primary-foreground font-medium text-xs leading-none font-mono",
				children: item._step
			}, `${i}-text`));
			positions.push([
				top,
				bottom,
				x
			]);
		}
		output.unshift(/* @__PURE__ */ jsx("path", {
			d,
			className: "stroke-fd-primary",
			strokeWidth: "1",
			fill: "none"
		}, "path"));
		const itemLineLengths = [];
		if (thumbBox) {
			const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path.setAttribute("d", d);
			let l = 0;
			for (const [top, bottom] of positions) {
				while (path.getPointAtLength(l).y < top) l++;
				const topL = l;
				while (path.getPointAtLength(l).y < bottom) l++;
				itemLineLengths.push([topL, l]);
			}
		}
		setSvg({
			content: output,
			width: w,
			height: h,
			d,
			itemLineLengths,
			positions
		});
	}, [items, thumbBox]);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const observer = new ResizeObserver(onPrint);
		observer.observe(container);
		onPrint();
		return () => {
			observer.unobserve(container);
		};
	}, [onPrint]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [svg && /* @__PURE__ */ jsxs("div", {
		className: "absolute top-0 inset-s-0",
		style: {
			width: svg.width,
			height: svg.height
		},
		children: [/* @__PURE__ */ jsx(ThumbTrack, { computed: svg }), thumbBox && /* @__PURE__ */ jsx(ThumbBox, { computed: svg })]
	}), /* @__PURE__ */ jsx("div", {
		ref: mergeRefs$1(containerRef, ref),
		className: cn$1("flex flex-col", className),
		...props
	})] });
}
function TOCEmpty() {
	const { text } = useI18n();
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: text.tocNoHeadings
	});
}
function ThumbTrack({ computed }) {
	const items = useItems$1();
	const startIdx = items.findIndex((item) => item.active);
	if (startIdx === -1) return;
	const endIdx = items.findLastIndex((item) => item.active);
	const top = `${computed.positions[startIdx][0]}px`;
	const bottom = `${computed.positions[endIdx][1]}px`;
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: `0 0 ${computed.width} ${computed.height}`,
		className: "absolute transition-[clip-path]",
		style: {
			width: computed.width,
			height: computed.height,
			clipPath: `polygon(0 ${top}, 100% ${top}, 100% ${bottom}, 0 ${bottom})`
		},
		children: computed.content
	});
}
function ThumbBox({ computed }) {
	const items = useItems$1();
	const previousRef = useRef(null);
	const startIdx = items.findIndex((item) => item.active);
	if (startIdx === -1) return;
	const endIdx = items.findLastIndex((item) => item.active);
	let isUp = false;
	if (previousRef.current) {
		const prev = previousRef.current;
		isUp = prev.startIdx > startIdx || prev.endIdx > endIdx || prev.startIdx === startIdx && prev.endIdx === endIdx && prev.isUp;
	}
	previousRef.current = {
		startIdx,
		endIdx,
		isUp
	};
	return /* @__PURE__ */ jsx("div", {
		className: "absolute size-1 bg-fd-primary rounded-full transition-[offset-distance]",
		style: {
			offsetPath: `path("${computed.d}")`,
			offsetDistance: isUp ? computed.itemLineLengths[startIdx][0] : computed.itemLineLengths[endIdx][1],
			scale: items[isUp ? startIdx : endIdx].original._step !== void 0 ? "0" : "1"
		}
	});
}
var a = 8;
function getItemOffset(depth) {
	if (depth <= 2) return 12 + a;
	if (depth === 3) return 24 + a;
	return 36 + a;
}
function getLineOffset(depth) {
	if (depth <= 2) return a;
	if (depth === 3) return 8 + a;
	return 16 + a;
}
function TOCItem({ item, ...props }) {
	const items = useTOCItems();
	const { lowerOffset, offset, upperOffset } = useMemo(() => {
		const index = items.indexOf(item);
		const offset = getLineOffset(item.depth);
		return {
			offset,
			upperOffset: index > 0 ? getLineOffset(items[index - 1].depth) : offset,
			lowerOffset: index + 1 < items.length ? getLineOffset(items[index + 1].depth) : offset
		};
	}, [items, item]);
	return /* @__PURE__ */ jsxs(TOCItem$2, {
		href: item.url,
		...props,
		className: cn$1("group prose relative py-1.5 text-sm scroll-m-4 text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere first:pt-0 last:pb-0 data-[active=true]:text-fd-primary", props.className),
		style: {
			paddingInlineStart: getItemOffset(item.depth),
			...props.style
		},
		children: [
			offset !== upperOffset && /* @__PURE__ */ jsx("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: `${Math.min(offset, upperOffset)} 0 ${Math.abs(upperOffset - offset)} 12`,
				className: "absolute -top-1.5 -z-1",
				style: {
					width: Math.abs(upperOffset - offset) + 1,
					height: 12,
					insetInlineStart: Math.min(offset, upperOffset)
				},
				children: /* @__PURE__ */ jsx("path", {
					d: `M ${upperOffset} 0 C ${upperOffset} 8 ${offset} 4 ${offset} 12`,
					stroke: "black",
					strokeWidth: "1",
					fill: "none",
					className: "stroke-fd-foreground/10"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: cn$1("absolute inset-y-0 w-px bg-fd-foreground/10 -z-1", offset !== upperOffset && "top-1.5", offset !== lowerOffset && "bottom-1.5"),
				style: { insetInlineStart: offset }
			}),
			item._step !== void 0 && /* @__PURE__ */ jsx("div", {
				className: "absolute flex items-center justify-center -translate-1/2 -z-1 top-[calc(50%-var(--t,0px)+var(--b,0px))] size-4 font-mono font-medium text-xs bg-fd-muted text-fd-muted-foreground rounded-full leading-none group-first:[--t:--spacing(0.75)] group-last:[--b:--spacing(0.75)]",
				style: { insetInlineStart: offset },
				children: item._step
			}),
			item.title
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/toc.js
function TOCProvider(props) {
	return /* @__PURE__ */ jsx(TOCProvider$1, { ...props });
}
function TOC({ container, header, footer, style = "normal", list }) {
	const items = useTOCItems();
	const { TOCItems, TOCEmpty, TOCItem } = style === "clerk" ? clerk_exports : default_exports;
	return /* @__PURE__ */ jsxs("div", {
		id: "nd-toc",
		...container,
		className: cn$1("sticky top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))] flex flex-col [grid-area:toc] w-(--fd-toc-width) pt-12 pe-4 pb-2 max-xl:hidden", container?.className),
		children: [
			header,
			/* @__PURE__ */ jsxs("h3", {
				id: "toc-title",
				className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
				children: [/* @__PURE__ */ jsx(Text, { className: "size-4" }), /* @__PURE__ */ jsx(I18nLabel, { label: "toc" })]
			}),
			/* @__PURE__ */ jsx(TOCScrollArea, { children: /* @__PURE__ */ jsxs(TOCItems, {
				...list,
				children: [items.length === 0 && /* @__PURE__ */ jsx(TOCEmpty, {}), items.map((item) => /* @__PURE__ */ jsx(TOCItem, { item }, item.url))]
			}) }),
			footer
		]
	});
}
var TocPopoverContext = createContext(null);
function TOCPopover({ container, trigger, content, header, footer, style = "normal", list }) {
	const items = useTOCItems();
	const ref = useRef(null);
	const [open, setOpen] = useState(false);
	const { isNavTransparent } = useDocsLayout();
	const { TOCItems, TOCItem, TOCEmpty } = style === "clerk" ? clerk_exports : default_exports;
	const onClickOutside = useEffectEvent((e) => {
		if (!open || !(e.target instanceof HTMLElement)) return;
		if (ref.current && !ref.current.contains(e.target)) setOpen(false);
	});
	const onClickItem = () => {
		setOpen(false);
	};
	useEffect(() => {
		window.addEventListener("click", onClickOutside);
		return () => {
			window.removeEventListener("click", onClickOutside);
		};
	}, []);
	return /* @__PURE__ */ jsx(TocPopoverContext, {
		value: useMemo(() => ({
			open,
			setOpen
		}), [setOpen, open]),
		children: /* @__PURE__ */ jsx(Collapsible, {
			open,
			onOpenChange: setOpen,
			"data-toc-popover": "",
			...container,
			className: cn$1("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", container?.className),
			children: /* @__PURE__ */ jsxs("header", {
				ref,
				className: cn$1("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
				children: [/* @__PURE__ */ jsx(PageTOCPopoverTrigger, { ...trigger }), /* @__PURE__ */ jsxs(PageTOCPopoverContent, {
					...content,
					children: [
						header,
						/* @__PURE__ */ jsx(TOCScrollArea, { children: /* @__PURE__ */ jsxs(TOCItems, {
							...list,
							children: [items.length === 0 && /* @__PURE__ */ jsx(TOCEmpty, {}), items.map((item) => /* @__PURE__ */ jsx(TOCItem, {
								item,
								onClick: onClickItem
							}, item.url))]
						}) }),
						footer
					]
				})]
			})
		})
	});
}
function PageTOCPopoverTrigger({ className, ...props }) {
	const { text } = useI18n();
	const { open } = use(TocPopoverContext);
	const items = useItems();
	const selectedIdx = items.findIndex((item) => item.active);
	const path = useTreePath().at(-1);
	const showItem = selectedIdx !== -1 && !open;
	return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
		className: cn$1("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
		"data-toc-popover-trigger": "",
		...props,
		children: [
			/* @__PURE__ */ jsx(ProgressCircle, {
				value: (selectedIdx + 1) / Math.max(1, items.length),
				max: 1,
				className: cn$1("shrink-0", open && "text-fd-primary")
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
				children: [/* @__PURE__ */ jsx("span", {
					className: cn$1("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
					children: path?.name ?? text.toc
				}), /* @__PURE__ */ jsx("span", {
					className: cn$1("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
					children: items[selectedIdx]?.original.title
				})]
			}),
			/* @__PURE__ */ jsx(ChevronDown, { className: cn$1("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
		]
	});
}
function clamp(input, min, max) {
	if (input < min) return min;
	if (input > max) return max;
	return input;
}
function ProgressCircle({ value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps }) {
	const normalizedValue = clamp(value, min, max);
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const progress = normalizedValue / max * circumference;
	const circleProps = {
		cx: size / 2,
		cy: size / 2,
		r: radius,
		fill: "none",
		strokeWidth
	};
	return /* @__PURE__ */ jsxs("svg", {
		role: "progressbar",
		viewBox: `0 0 ${size} ${size}`,
		"aria-valuenow": normalizedValue,
		"aria-valuemin": min,
		"aria-valuemax": max,
		...restSvgProps,
		children: [/* @__PURE__ */ jsx("circle", {
			...circleProps,
			className: "stroke-current/25"
		}), /* @__PURE__ */ jsx("circle", {
			...circleProps,
			stroke: "currentColor",
			strokeDasharray: circumference,
			strokeDashoffset: circumference - progress,
			strokeLinecap: "round",
			transform: `rotate(-90 ${size / 2} ${size / 2})`,
			className: "transition-all"
		})]
	});
}
function PageTOCPopoverContent(props) {
	return /* @__PURE__ */ jsx(CollapsibleContent, {
		"data-toc-popover-content": "",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-col px-4 max-h-[50vh] md:px-6",
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/use-footer-items.js
var footerCache = /* @__PURE__ */ new WeakMap();
/**
* @returns a list of page tree items (linear), that you can obtain footer items
*/
function useFooterItems() {
	const { root } = useTreeContext();
	const cached = footerCache.get(root);
	if (cached) return cached;
	const list = [];
	function onNode(node) {
		if (node.type === "folder") {
			if (node.index) onNode(node.index);
			for (const child of node.children) onNode(child);
		} else if (node.type === "page" && !node.external) list.push(node);
	}
	for (const child of root.children) onNode(child);
	footerCache.set(root, list);
	return list;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/footer.js
function Footer({ items, children, className, ...props }) {
	const footerList = useFooterItems();
	const pathname = usePathname();
	const { previous, next } = useMemo(() => {
		if (items) return items;
		const idx = footerList.findIndex((item) => isActive(item.url, pathname));
		if (idx === -1) return {};
		return {
			previous: footerList[idx - 1],
			next: footerList[idx + 1]
		};
	}, [
		footerList,
		items,
		pathname
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn$1("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
		...props,
		children: [previous && /* @__PURE__ */ jsx(FooterItem, {
			item: previous,
			index: 0
		}), next && /* @__PURE__ */ jsx(FooterItem, {
			item: next,
			index: 1
		})]
	}), children] });
}
function FooterItem({ item, index }) {
	const { text } = useI18n();
	const Icon = index === 0 ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ jsxs(Link$1, {
		href: item.url,
		className: cn$1("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn$1("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"),
			children: [/* @__PURE__ */ jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ jsx("p", { children: item.name })]
		}), /* @__PURE__ */ jsx("p", {
			className: "text-fd-muted-foreground truncate",
			children: item.description ?? (index === 0 ? text.previousPage : text.nextPage)
		})]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/breadcrumb.js
function Breadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
	const path = useTreePath();
	const { root } = useTreeContext();
	const items = useMemo(() => {
		return getBreadcrumbItemsFromPath(root, path, {
			includePage,
			includeSeparator,
			includeRoot
		});
	}, [
		includePage,
		includeRoot,
		includeSeparator,
		path,
		root
	]);
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
		children: items.map((item, i) => {
			const className = cn$1("truncate", i === items.length - 1 && "text-fd-primary font-medium");
			return /* @__PURE__ */ jsxs(Fragment$1, { children: [i !== 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ jsx(Link$1, {
				href: item.url,
				className: cn$1(className, "transition-opacity hover:opacity-80"),
				children: item.name
			}) : /* @__PURE__ */ jsx("span", {
				className,
				children: item.name
			})] }, i);
		})
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/slots/container.js
function Container(props) {
	const { props: { full } } = useDocsPage();
	return /* @__PURE__ */ jsx("article", {
		id: "nd-page",
		"data-full": full,
		...props,
		className: cn$1("flex flex-col w-full max-w-[900px] mx-auto [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14", full ? "max-w-[1168px]" : "xl:layout:[--fd-toc-width:268px]", props.className),
		children: props.children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/utils/use-copy-button.js
function useCopyButton(onCopy) {
	const [checked, setChecked] = useState(false);
	const callbackRef = useRef(onCopy);
	const timeoutRef = useRef(null);
	callbackRef.current = onCopy;
	const onClick = useCallback(() => {
		if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		Promise.resolve(callbackRef.current()).then(() => {
			setChecked(true);
			timeoutRef.current = window.setTimeout(() => {
				setChecked(false);
			}, 1500);
		});
	}, []);
	useEffect(() => {
		return () => {
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		};
	}, []);
	return [checked, onClick];
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/shared/page-actions.js
var cache$1 = /* @__PURE__ */ new Map();
/**
* see https://fumadocs.dev/docs/integrations/llms#page-actions to customise.
*/
function MarkdownCopyButton({ markdownUrl, ...props }) {
	const [isLoading, setLoading] = useState(false);
	const [checked, onClick] = useCopyButton(async () => {
		const cached = cache$1.get(markdownUrl);
		if (cached) return navigator.clipboard.writeText(await cached);
		setLoading(true);
		try {
			const promise = fetch(markdownUrl).then((res) => res.text());
			cache$1.set(markdownUrl, promise);
			await navigator.clipboard.write([new ClipboardItem({ "text/plain": promise })]);
		} finally {
			setLoading(false);
		}
	});
	return /* @__PURE__ */ jsxs("button", {
		disabled: isLoading,
		onClick,
		...props,
		className: cn$1(buttonVariants$1({
			color: "secondary",
			size: "sm",
			className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground"
		}), props.className),
		children: [checked ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Copy, {}), props.children ?? "Copy Markdown"]
	});
}
/**
* see https://fumadocs.dev/docs/integrations/llms#page-actions to customise.
*/
function ViewOptionsPopover({ markdownUrl, githubUrl, ...props }) {
	const pathname = usePathname();
	const items = useMemo(() => {
		const q = `Read ${typeof window === "undefined" ? pathname : new URL(pathname, window.location.origin)}, I want to ask questions about it.`;
		return [
			githubUrl && {
				title: "Open in GitHub",
				href: githubUrl,
				icon: /* @__PURE__ */ jsxs("svg", {
					fill: "currentColor",
					role: "img",
					viewBox: "0 0 24 24",
					children: [/* @__PURE__ */ jsx("title", { children: "GitHub" }), /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })]
				})
			},
			markdownUrl && {
				title: "View as Markdown",
				href: markdownUrl,
				icon: /* @__PURE__ */ jsx(TextIcon, {})
			},
			{
				title: "Open in Scira AI",
				href: `https://scira.ai/?${new URLSearchParams({ q })}`,
				icon: /* @__PURE__ */ jsxs("svg", {
					width: "910",
					height: "934",
					viewBox: "0 0 910 934",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [
						/* @__PURE__ */ jsx("title", { children: "Scira AI" }),
						/* @__PURE__ */ jsx("path", {
							d: "M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334C523.25 120.059 535.34 143.463 553.213 161.336C571.086 179.209 594.49 191.3 623.216 197.775C594.49 204.251 571.086 216.341 553.213 234.214C535.34 252.087 523.25 275.491 516.774 304.217Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M857.5 508.116C763.259 497.644 710.903 445.288 700.432 351.047C689.961 445.288 637.605 497.644 543.364 508.116C637.605 518.587 689.961 570.943 700.432 665.184C710.903 570.943 763.259 518.587 857.5 508.116Z",
							stroke: "currentColor",
							strokeWidth: "20",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M700.432 615.957C691.848 589.05 678.575 566.357 660.383 548.165C642.191 529.973 619.499 516.7 592.593 508.116C619.499 499.533 642.191 486.258 660.383 468.066C678.575 449.874 691.848 427.181 700.432 400.274C709.015 427.181 722.289 449.874 740.481 468.066C758.673 486.258 781.365 499.533 808.271 508.116C781.365 516.7 758.673 529.973 740.481 548.165C722.289 566.357 709.015 589.05 700.432 615.957Z",
							stroke: "currentColor",
							strokeWidth: "20",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M889.949 121.237C831.049 114.692 798.326 81.9698 791.782 23.0692C785.237 81.9698 752.515 114.692 693.614 121.237C752.515 127.781 785.237 160.504 791.782 219.404C798.326 160.504 831.049 127.781 889.949 121.237Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M791.782 196.795C786.697 176.937 777.869 160.567 765.16 147.858C752.452 135.15 736.082 126.322 716.226 121.237C736.082 116.152 752.452 107.324 765.16 94.6152C777.869 81.9065 786.697 65.5368 791.782 45.6797C796.867 65.5367 805.695 81.9066 818.403 94.6152C831.112 107.324 847.481 116.152 867.338 121.237C847.481 126.322 831.112 135.15 818.403 147.858C805.694 160.567 796.867 176.937 791.782 196.795Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M760.632 764.337C720.719 814.616 669.835 855.1 611.872 882.692C553.91 910.285 490.404 924.255 426.213 923.533C362.022 922.812 298.846 907.419 241.518 878.531C184.19 849.643 134.228 808.026 95.4548 756.863C56.6815 705.7 30.1238 646.346 17.8129 583.343C5.50207 520.339 7.76433 455.354 24.4266 393.359C41.089 331.364 71.7099 274.001 113.947 225.658C156.184 177.315 208.919 139.273 268.117 114.442",
							stroke: "currentColor",
							strokeWidth: "30",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				})
			},
			{
				title: "Open in ChatGPT",
				href: `https://chatgpt.com/?${new URLSearchParams({
					hints: "search",
					q
				})}`,
				icon: /* @__PURE__ */ jsxs("svg", {
					role: "img",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("title", { children: "OpenAI" }), /* @__PURE__ */ jsx("path", { d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" })]
				})
			},
			{
				title: "Open in Claude",
				href: `https://claude.ai/new?${new URLSearchParams({ q })}`,
				icon: /* @__PURE__ */ jsxs("svg", {
					fill: "currentColor",
					role: "img",
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("title", { children: "Anthropic" }), /* @__PURE__ */ jsx("path", { d: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" })]
				})
			},
			{
				title: "Open in Cursor",
				icon: /* @__PURE__ */ jsxs("svg", {
					fill: "currentColor",
					role: "img",
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("title", { children: "Cursor" }), /* @__PURE__ */ jsx("path", { d: "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" })]
				}),
				href: `https://cursor.com/link/prompt?${new URLSearchParams({ text: q })}`
			}
		].filter((v) => !!v);
	}, [
		githubUrl,
		markdownUrl,
		pathname
	]);
	return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsxs(PopoverTrigger, {
		...props,
		className: cn$1(buttonVariants$1({
			color: "secondary",
			size: "sm"
		}), "gap-2 data-[state=open]:bg-fd-accent data-[state=open]:text-fd-accent-foreground", props.className),
		children: [props.children ?? "Open", /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5 text-fd-muted-foreground" })]
	}), /* @__PURE__ */ jsx(PopoverContent, {
		className: "flex flex-col",
		children: items.map((item) => /* @__PURE__ */ jsxs("a", {
			href: item.href,
			rel: "noreferrer noopener",
			target: "_blank",
			className: "text-sm p-2 rounded-lg inline-flex items-center gap-2 hover:text-fd-accent-foreground hover:bg-fd-accent [&_svg]:size-4",
			children: [
				item.icon,
				item.title,
				/* @__PURE__ */ jsx(ExternalLinkIcon, { className: "text-fd-muted-foreground size-3.5 ms-auto" })
			]
		}, item.href))
	})] });
}
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/docs/page/index.js
var PageContext = createContext(null);
function useDocsPage() {
	const context = use(PageContext);
	if (!context) throw new Error("Please use page components under <DocsPage /> (`fumadocs-ui/layouts/docs/page`).");
	return context;
}
function DocsPage({ tableOfContent: { enabled: tocEnabled, single, ...tocProps } = {}, tableOfContentPopover: { enabled: tocPopoverEnabled, ...tocPopoverProps } = {}, breadcrumb: { enabled: breadcrumbEnabled = true, ...breadcrumb } = {}, footer: { enabled: footerEnabled = true, ...footer } = {}, full = false, toc = [], slots: defaultSlots = {}, children, ...containerProps }) {
	tocEnabled ??= Boolean(!full && (toc.length > 0 || tocProps.footer || tocProps.header));
	tocPopoverEnabled ??= Boolean(toc.length > 0 || tocPopoverProps.header || tocPopoverProps.footer);
	const slots = {
		breadcrumb: defaultSlots.breadcrumb ?? Breadcrumb,
		footer: defaultSlots.footer ?? Footer,
		toc: defaultSlots.toc ?? {
			provider: TOCProvider,
			main: TOC,
			popover: TOCPopover
		},
		container: defaultSlots.container ?? Container
	};
	return /* @__PURE__ */ jsx(PageContext, {
		value: {
			props: { full },
			slots
		},
		children: /* @__PURE__ */ jsxs(slots.toc.provider, {
			single,
			toc: tocEnabled || tocPopoverEnabled ? toc : [],
			children: [
				tocPopoverEnabled && (tocPopoverProps.component ?? /* @__PURE__ */ jsx(slots.toc.popover, { ...tocPopoverProps })),
				/* @__PURE__ */ jsxs(slots.container, {
					...containerProps,
					children: [
						breadcrumbEnabled && (breadcrumb.component ?? /* @__PURE__ */ jsx(slots.breadcrumb, { ...breadcrumb })),
						children,
						footerEnabled && (footer.component ?? /* @__PURE__ */ jsx(slots.footer, { ...footer }))
					]
				}),
				tocEnabled && (tocProps.component ?? /* @__PURE__ */ jsx(slots.toc.main, { ...tocProps }))
			]
		})
	});
}
/**
* Add typography styles
*/
function DocsBody({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("prose flex-1", className),
		children
	});
}
function DocsDescription({ children, className, ...props }) {
	if (children === void 0) return null;
	return /* @__PURE__ */ jsx("p", {
		...props,
		className: cn$1("mb-8 text-lg text-fd-muted-foreground", className),
		children
	});
}
function DocsTitle({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("h1", {
		...props,
		className: cn$1("text-[1.75em] font-semibold", className),
		children
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/path-ClKaiDuq.js
function basename$1(path, ext) {
	const idx = path.lastIndexOf("/");
	return path.substring(idx === -1 ? 0 : idx + 1, ext ? path.length - ext.length : path.length);
}
function extname(path) {
	const dotIdx = path.lastIndexOf(".");
	if (dotIdx !== -1) return path.substring(dotIdx);
	return "";
}
function dirname(path) {
	return path.split("/").slice(0, -1).join("/");
}
/**
* Split path into segments, trailing/leading slashes are removed
*/
function splitPath(path) {
	return path.split("/").filter((p) => p.length > 0);
}
/**
* Resolve paths, slashes within the path will be ignored
* @param paths - Paths to join
* @example
* ```
* ['a','b'] // 'a/b'
* ['/a'] // 'a'
* ['a', '/b'] // 'a/b'
* ['a', '../b/c'] // 'b/c'
* ```
*/
function joinPath(...paths) {
	const out = [];
	const parsed = paths.flatMap(splitPath);
	for (const seg of parsed) switch (seg) {
		case "..":
			out.pop();
			break;
		case ".": break;
		default: out.push(seg);
	}
	return out.join("/");
}
function slash(path) {
	if (path.startsWith("\\\\?\\")) return path;
	return path.replaceAll("\\", "/");
}
//#endregion
//#region node_modules/fumadocs-core/dist/source/plugins/slugs.js
/**
* Generate slugs for pages if missing
*/
function slugsPlugin(slugFn) {
	function isIndex(file) {
		return basename$1(file, extname(file)) === "index";
	}
	return {
		name: "fumadocs:slugs",
		transformStorage({ storage }) {
			const indexFiles = [];
			const taken = /* @__PURE__ */ new Set();
			for (const path of storage.getFiles()) {
				const file = storage.read(path);
				if (!file || file.format !== "page" || file.slugs) continue;
				const customSlugs = slugFn?.(file);
				if (customSlugs === void 0 && isIndex(path)) {
					indexFiles.push(path);
					continue;
				}
				file.slugs = customSlugs ?? getSlugs(path);
				const key = file.slugs.join("/");
				if (taken.has(key)) throw new Error(`Duplicated slugs: ${key}`);
				taken.add(key);
			}
			for (const path of indexFiles) {
				const file = storage.read(path);
				if (file?.format !== "page") continue;
				file.slugs = getSlugs(path);
				if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
			}
		}
	};
}
var GroupRegex = /^\(.+\)$/;
/**
* Convert file path into slugs, also encode non-ASCII characters, so they can work in pathname
*/
function getSlugs(file) {
	const dir = dirname(file);
	const name = basename$1(file, extname(file));
	const slugs = [];
	for (const seg of dir.split("/")) if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
	if (GroupRegex.test(name)) throw new Error(`Cannot use folder group in file names: ${file}`);
	if (name !== "index") slugs.push(encodeURI(name));
	return slugs;
}
//#endregion
//#region node_modules/fumadocs-core/dist/icon-DXrdIp2K.js
function iconPlugin(resolveIcon) {
	function replaceIcon(node) {
		if (node.icon === void 0 || typeof node.icon === "string") node.icon = resolveIcon(node.icon);
		return node;
	}
	return {
		name: "fumadocs:icon",
		transformPageTree: {
			file: replaceIcon,
			folder: replaceIcon,
			separator: replaceIcon
		}
	};
}
//#endregion
//#region node_modules/fumadocs-core/dist/source/index.js
/**
* In memory file system.
*/
var FileSystem = class {
	constructor(inherit) {
		this.files = /* @__PURE__ */ new Map();
		this.folders = /* @__PURE__ */ new Map();
		if (inherit) {
			for (const [k, v] of inherit.folders) this.folders.set(k, v);
			for (const [k, v] of inherit.files) this.files.set(k, v);
		} else this.folders.set("", []);
	}
	read(path) {
		return this.files.get(path);
	}
	/**
	* get the direct children of folder (in virtual file path)
	*/
	readDir(path) {
		return this.folders.get(path);
	}
	write(path, file) {
		if (!this.files.has(path)) {
			const dir = dirname(path);
			this.makeDir(dir);
			this.readDir(dir)?.push(path);
		}
		this.files.set(path, file);
	}
	/**
	* Delete files at specified path.
	*
	* @param path - the target path.
	* @param [recursive=false] - if set to `true`, it will also delete directories.
	*/
	delete(path, recursive = false) {
		if (this.files.delete(path)) return true;
		if (recursive) {
			const folder = this.folders.get(path);
			if (!folder) return false;
			this.folders.delete(path);
			for (const child of folder) this.delete(child);
			return true;
		}
		return false;
	}
	getFiles() {
		return Array.from(this.files.keys());
	}
	makeDir(path) {
		const cur = [];
		for (const seg of splitPath(path)) {
			cur.push(seg);
			const curPath = cur.join("/");
			if (this.folders.has(curPath)) continue;
			this.folders.set(curPath, []);
			this.folders.get(dirname(curPath)).push(curPath);
		}
	}
};
function isLocaleValid(locale) {
	return locale.length > 0 && !/\d+/.test(locale);
}
var parsers = {
	dir(path) {
		const [locale, ...segs] = path.split("/");
		if (locale && segs.length > 0 && isLocaleValid(locale)) return [segs.join("/"), locale];
		return [path];
	},
	dot(path) {
		const dir = dirname(path);
		const parts = basename$1(path).split(".");
		if (parts.length < 3) return [path];
		const [locale] = parts.splice(parts.length - 2, 1);
		if (!isLocaleValid(locale)) return [path];
		return [joinPath(dir, parts.join(".")), locale];
	},
	none(path) {
		return [path];
	}
};
var EmptyLang = Symbol();
/**
* convert input files into virtual file system.
*
* in the storage, locale codes are removed from file paths, hence the same file will have same file paths in every storage.
*/
function createContentStorageBuilder(loaderConfig) {
	const { source, plugins, i18n } = loaderConfig;
	const parser = i18n ? parsers[i18n.parser ?? "dot"] : parsers.none;
	const normalized = /* @__PURE__ */ new Map();
	for (const inputFile of source.files) {
		let file;
		if (inputFile.type === "page") file = {
			format: "page",
			path: normalizePath(inputFile.path),
			slugs: inputFile.slugs,
			data: inputFile.data,
			absolutePath: inputFile.absolutePath
		};
		else file = {
			format: "meta",
			path: normalizePath(inputFile.path),
			absolutePath: inputFile.absolutePath,
			data: inputFile.data
		};
		const [pathWithoutLocale, locale = i18n ? i18n.defaultLanguage : EmptyLang] = parser(file.path);
		let list = normalized.get(locale);
		if (!list) {
			list = [];
			normalized.set(locale, list);
		}
		list.push({
			pathWithoutLocale,
			file
		});
	}
	function makeStorage(locale, inherit) {
		const storage = new FileSystem(inherit);
		for (const { pathWithoutLocale, file } of normalized.get(locale) ?? []) storage.write(pathWithoutLocale, file);
		const context = { storage };
		for (const plugin of plugins) plugin.transformStorage?.(context);
		return storage;
	}
	return {
		i18n() {
			const storages = {};
			if (!i18n) return storages;
			const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
			function scan(lang) {
				if (storages[lang]) return storages[lang];
				return storages[lang] = makeStorage(lang, fallbackLang && fallbackLang !== lang ? scan(fallbackLang) : void 0);
			}
			for (const lang of i18n.languages) scan(lang);
			return storages;
		},
		single() {
			return makeStorage(EmptyLang);
		}
	};
}
/**
* @param path - Relative path
* @returns Normalized path, with no trailing/leading slashes
* @throws Throws error if path starts with `./` or `../`
*/
function normalizePath(path) {
	const segments = splitPath(slash(path));
	if (segments[0] === "." || segments[0] === "..") throw new Error("It must not start with './' or '../'");
	return segments.join("/");
}
function transformerFallback() {
	const addedFiles = /* @__PURE__ */ new Set();
	function shouldIgnore(context) {
		return context.custom?._fallback === true;
	}
	return {
		root(root) {
			if (shouldIgnore(this)) return root;
			const isolatedStorage = new FileSystem();
			if (addedFiles.size === this.storage.files.size) return root;
			for (const file of this.storage.getFiles()) {
				if (addedFiles.has(file)) continue;
				isolatedStorage.write(file, this.storage.read(file));
			}
			root.fallback = new PageTreeBuilder(isolatedStorage, {
				idPrefix: this.idPrefix ? `fallback:${this.idPrefix}` : "fallback",
				url: this.getUrl,
				noRef: this.noRef,
				transformers: this.transformers,
				generateFallback: false,
				context: {
					...this.custom,
					_fallback: true
				}
			}).root();
			addedFiles.clear();
			return root;
		},
		file(node, file) {
			if (shouldIgnore(this)) return node;
			if (file) addedFiles.add(file);
			return node;
		},
		folder(node, _dir, metaPath) {
			if (shouldIgnore(this)) return node;
			if (metaPath) addedFiles.add(metaPath);
			return node;
		}
	};
}
var group = /^\((?<name>.+)\)$/;
var link = /^(?<external>external:)?(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
var separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
var rest = "...";
var restReversed = "z...a";
var extractPrefix = "...";
var excludePrefix = "!";
var PageTreeBuilder = class {
	constructor(input, options) {
		this.flattenPathToFullPath = /* @__PURE__ */ new Map();
		this.transformers = [];
		this.pathToNode = /* @__PURE__ */ new Map();
		this.unfinished = /* @__PURE__ */ new WeakSet();
		this.ownerMap = /* @__PURE__ */ new Map();
		this._nextId = 0;
		const { transformers, url, context, generateFallback = true, idPrefix = "", noRef = false } = options;
		if (transformers) this.transformers.push(...transformers);
		if (generateFallback) this.transformers.push(transformerFallback());
		this.ctx = {
			builder: this,
			idPrefix,
			getUrl: url,
			storage: void 0,
			noRef,
			transformers: this.transformers,
			custom: context
		};
		if (Array.isArray(input)) {
			const [locale, storages] = input;
			this.ctx.storage = this.storage = storages[locale];
			this.ctx.locale = locale;
			this.ctx.storages = storages;
		} else this.ctx.storage = this.storage = input;
		for (const file of this.storage.getFiles()) {
			const content = this.storage.read(file);
			const flattenPath = file.substring(0, file.length - extname(file).length);
			this.flattenPathToFullPath.set(flattenPath + "." + content.format, file);
		}
	}
	resolveFlattenPath(name, format) {
		return this.flattenPathToFullPath.get(name + "." + format) ?? name;
	}
	/**
	* try to register as the owner of `node`.
	*
	* when a node is referenced by multiple folders, this determines which folder they should belong to.
	*
	* @returns whether the owner owns the node.
	*/
	own(ownerPath, node, priority) {
		if (this.unfinished.has(node)) return false;
		const existing = this.ownerMap.get(node);
		if (!existing) {
			this.ownerMap.set(node, {
				owner: ownerPath,
				priority
			});
			return true;
		}
		if (existing.owner === ownerPath) {
			existing.priority = Math.max(existing.priority, priority);
			return true;
		}
		if (existing.priority >= priority) return false;
		const folder = this.pathToNode.get(existing.owner);
		if (folder && folder.type === "folder") if (folder.index === node) delete folder.index;
		else {
			const idx = folder.children.indexOf(node);
			if (idx !== -1) folder.children.splice(idx, 1);
		}
		existing.owner = ownerPath;
		existing.priority = priority;
		return true;
	}
	transferOwner(ownerPath, node) {
		const existing = this.ownerMap.get(node);
		if (existing) existing.owner = ownerPath;
	}
	generateId(localId = `_${this._nextId++}`) {
		let id = localId;
		if (this.ctx.locale) id = `${this.ctx.locale}:${id}`;
		if (this.ctx.idPrefix) id = `${this.ctx.idPrefix}:${id}`;
		return id;
	}
	buildPaths(paths, filter, reversed = false) {
		const items = [];
		const folders = [];
		const sortedPaths = paths.sort((a, b) => reversed ? b.localeCompare(a) : a.localeCompare(b));
		for (const path of sortedPaths) {
			if (filter && !filter(path)) continue;
			const fileNode = this.file(path);
			if (fileNode) {
				if (basename$1(path, extname(path)) === "index") items.unshift(fileNode);
				else items.push(fileNode);
				continue;
			}
			const dirNode = this.folder(path);
			if (dirNode) folders.push(dirNode);
		}
		items.push(...folders);
		return items;
	}
	resolveFolderItem(folderPath, item, outputArray, excludedPaths) {
		if (item === rest || item === restReversed) {
			outputArray.push(item);
			return;
		}
		let match = separator.exec(item);
		if (match?.groups) {
			let node = {
				$id: this.generateId(),
				type: "separator",
				icon: match.groups.icon,
				name: match.groups.name
			};
			for (const transformer of this.transformers) {
				if (!transformer.separator) continue;
				node = transformer.separator.call(this.ctx, node);
			}
			outputArray.push(node);
			return;
		}
		match = link.exec(item);
		if (match?.groups) {
			const { icon, url, name, external } = match.groups;
			let node = {
				$id: this.generateId(),
				type: "page",
				icon,
				name,
				url
			};
			if (external) node.external = true;
			for (const transformer of this.transformers) {
				if (!transformer.file) continue;
				node = transformer.file.call(this.ctx, node);
			}
			outputArray.push(node);
			return;
		}
		if (item.startsWith(excludePrefix)) {
			const path = joinPath(folderPath, item.slice(1));
			excludedPaths.add(path);
			excludedPaths.add(this.resolveFlattenPath(path, "page"));
			return;
		}
		if (item.startsWith(extractPrefix)) {
			const path = joinPath(folderPath, item.slice(3));
			const node = this.folder(path);
			if (!node) return;
			const children = node.index ? [node.index, ...node.children] : node.children;
			if (this.own(folderPath, node, 2)) {
				for (const child of children) {
					this.transferOwner(folderPath, child);
					outputArray.push(child);
				}
				excludedPaths.add(path);
			} else for (const child of children) if (this.own(folderPath, child, 2)) outputArray.push(child);
			return;
		}
		let path = joinPath(folderPath, item);
		let node = this.folder(path);
		if (!node) {
			path = this.resolveFlattenPath(path, "page");
			node = this.file(path);
		}
		if (!node || !this.own(folderPath, node, 2)) return;
		outputArray.push(node);
		excludedPaths.add(path);
	}
	folder(folderPath) {
		const cached = this.pathToNode.get(folderPath);
		if (cached) return cached;
		const files = this.storage.readDir(folderPath);
		if (!files) return;
		const isGlobalRoot = folderPath === "";
		const metaPath = this.resolveFlattenPath(joinPath(folderPath, "meta"), "meta");
		const indexPath = this.resolveFlattenPath(joinPath(folderPath, "index"), "page");
		let meta = this.storage.read(metaPath);
		if (meta && meta.format !== "meta") meta = void 0;
		const metadata = meta?.data ?? {};
		let node = {
			type: "folder",
			name: null,
			root: metadata.root,
			defaultOpen: metadata.defaultOpen,
			description: metadata.description,
			collapsible: metadata.collapsible,
			children: [],
			$id: this.generateId(folderPath),
			$ref: !this.ctx.noRef && meta ? metaPath : void 0
		};
		this.pathToNode.set(folderPath, node);
		this.unfinished.add(node);
		if (!(metadata.root ?? isGlobalRoot)) {
			const file = this.file(indexPath);
			if (file && this.own(folderPath, file, 0)) node.index = file;
		}
		if (metadata.pages) {
			const outputArray = [];
			const excludedPaths = /* @__PURE__ */ new Set();
			for (const item of metadata.pages) this.resolveFolderItem(folderPath, item, outputArray, excludedPaths);
			if (excludedPaths.has(indexPath)) delete node.index;
			else if (node.index) excludedPaths.add(indexPath);
			for (const item of outputArray) {
				if (item !== rest && item !== restReversed) {
					node.children.push(item);
					continue;
				}
				const resolvedItem = this.buildPaths(files, (file) => !excludedPaths.has(file), item === restReversed);
				for (const child of resolvedItem) if (this.own(folderPath, child, 0)) node.children.push(child);
			}
		} else for (const item of this.buildPaths(files, node.index ? (file) => file !== indexPath : void 0)) if (this.own(folderPath, item, 0)) node.children.push(item);
		node.icon = metadata.icon ?? node.index?.icon;
		node.name = metadata.title ?? node.index?.name;
		this.unfinished.delete(node);
		if (!node.name) {
			const folderName = basename$1(folderPath);
			node.name = pathToName(group.exec(folderName)?.[1] ?? folderName);
		}
		for (const transformer of this.transformers) {
			if (!transformer.folder) continue;
			node = transformer.folder.call(this.ctx, node, folderPath, meta ? metaPath : void 0);
		}
		this.pathToNode.set(folderPath, node);
		return node;
	}
	file(path) {
		const cached = this.pathToNode.get(path);
		if (cached) return cached;
		const page = this.storage.read(path);
		if (!page || page.format !== "page") return;
		const { title, description, icon } = page.data;
		let item = {
			$id: this.generateId(path),
			type: "page",
			name: title ?? pathToName(basename$1(path, extname(path))),
			description,
			icon,
			url: this.ctx.getUrl(page.slugs, this.ctx.locale),
			$ref: !this.ctx.noRef ? path : void 0
		};
		for (const transformer of this.transformers) {
			if (!transformer.file) continue;
			item = transformer.file.call(this.ctx, item, path);
		}
		this.pathToNode.set(path, item);
		return item;
	}
	root(id = "root", path = "") {
		const folder = this.folder(path);
		let root = {
			type: "root",
			$ref: folder?.$ref,
			$id: this.generateId(id),
			name: folder?.name || "Docs",
			description: folder?.description,
			children: folder ? folder.children : []
		};
		for (const transformer of this.transformers) {
			if (!transformer.root) continue;
			root = transformer.root.call(this.ctx, root);
		}
		return root;
	}
};
/**
* Get item name from file name
*
* @param name - file name
*/
function pathToName(name) {
	const result = [];
	for (const c of name) if (result.length === 0) result.push(c.toLocaleUpperCase());
	else if (c === "-") result.push(" ");
	else result.push(c);
	return result.join("");
}
function llms(loader, config = {}) {
	const { TAB = "  ", renderName = (node, ctx) => {
		if (node.type === "page") {
			const page = loader.getNodePage(node, ctx.lang);
			if (page?.data.title) return page.data.title;
		} else if (node.type !== "separator") {
			const meta = loader.getNodeMeta(node, ctx.lang);
			if (meta?.data.title) return meta.data.title;
		}
		return typeof node.name === "string" ? node.name : "";
	}, renderDescription = (node, ctx) => {
		if (node.type === "page") {
			const page = loader.getNodePage(node, ctx.lang);
			if (page?.data.description) return page.data.description;
		} else {
			const meta = loader.getNodeMeta(node, ctx.lang);
			if (meta?.data.description) return meta.data.description;
		}
		return typeof node.description === "string" ? node.description : "";
	} } = config;
	function formatListItem(name, description, indent) {
		const prefix = TAB.repeat(indent);
		description = description.trim();
		if (description.length > 0) return `${prefix}- ${name}: ${description}`;
		return `${prefix}- ${name}`;
	}
	function formatNode(node, indent, ctx) {
		switch (node.type) {
			case "page": return formatListItem(formatMarkdownLink(renderName(node, ctx), node.url), renderDescription(node, ctx), indent);
			case "folder": {
				const out = [];
				out.push(formatListItem(renderName(node, ctx), renderDescription(node, ctx), indent));
				if (node.index) out.push(formatNode(node.index, indent + 1, ctx));
				for (const child of node.children) out.push(formatNode(child, indent + 1, ctx));
				return out.join("\n");
			}
			case "separator": return "\n" + formatListItem(`**${renderName(node, ctx) || "Separator"}**`, "", indent);
		}
	}
	function index(lang) {
		if (loader._i18n && lang === void 0) {
			const { languages } = loader._i18n;
			return languages.map(index).join("\n\n");
		}
		const pageTree = loader.getPageTree(lang);
		const out = [];
		const ctx = { lang };
		out.push(`# ${renderName(pageTree, ctx)}`, "");
		const description = renderDescription(pageTree, ctx);
		if (description) out.push(`> ${description}`, "");
		for (const child of pageTree.children) out.push(formatNode(child, 0, ctx));
		return out.join("\n");
	}
	return {
		index,
		indexNode(node, lang) {
			return formatNode(node, 0, { lang });
		}
	};
}
function formatMarkdownLink(title, url) {
	return `[${title.replace(/([[\]])/g, "\\$1")}](${url.replace(/([()])/g, "\\$1")})`;
}
function createPageIndexer({ url }) {
	const pages = /* @__PURE__ */ new Map();
	const pathToMeta = /* @__PURE__ */ new Map();
	const pathToPage = /* @__PURE__ */ new Map();
	return {
		scan(storage, lang) {
			for (const filePath of storage.getFiles()) {
				const item = storage.read(filePath);
				const prefix = lang ? `${lang}.` : ".";
				const path = prefix + filePath;
				if (item.format === "meta") {
					pathToMeta.set(path, {
						path: item.path,
						absolutePath: item.absolutePath,
						data: item.data
					});
					continue;
				}
				const page = {
					absolutePath: item.absolutePath,
					path: item.path,
					url: url(item.slugs, lang),
					slugs: item.slugs,
					data: item.data,
					locale: lang
				};
				pathToPage.set(path, page);
				pages.set(prefix + page.slugs.join("/"), page);
			}
		},
		getPage(path, lang = "") {
			return pathToPage.get(`${lang}.${path}`);
		},
		getMeta(path, lang = "") {
			return pathToMeta.get(`${lang}.${path}`);
		},
		getPageBySlugs(slugs, lang = "") {
			let page = pages.get(`${lang}.${slugs.join("/")}`);
			if (page) return page;
			page = pages.get(`${lang}.${slugs.map(decodeURI).join("/")}`);
			if (page) return page;
		},
		getPages(lang) {
			const out = [];
			for (const [key, value] of pages.entries()) if (lang === void 0 || key.startsWith(`${lang}.`)) out.push(value);
			return out;
		}
	};
}
function createGetUrl(baseUrl, i18n) {
	const baseSlugs = baseUrl.split("/");
	return (slugs, locale) => {
		const hideLocale = i18n?.hideLocale ?? "never";
		let urlLocale;
		if (hideLocale === "never") urlLocale = locale;
		else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) urlLocale = locale;
		const paths = [...baseSlugs, ...slugs];
		if (urlLocale) paths.unshift(urlLocale);
		return `/${paths.filter((v) => v.length > 0).join("/")}`;
	};
}
function loader$6(...args) {
	const loaderConfig = args.length === 2 ? resolveConfig(args[0], args[1]) : resolveConfig(args[0].source, args[0]);
	const { i18n } = loaderConfig;
	const storage = i18n ? createContentStorageBuilder(loaderConfig).i18n() : createContentStorageBuilder(loaderConfig).single();
	const indexer = createPageIndexer(loaderConfig);
	if (storage instanceof FileSystem) indexer.scan(storage);
	else for (const locale in storage) indexer.scan(storage[locale], locale);
	let pageTrees;
	function getPageTrees() {
		if (pageTrees) return pageTrees;
		const { plugins, url, pageTree: pageTreeConfig } = loaderConfig;
		const transformers = [];
		if (pageTreeConfig?.transformers) transformers.push(...pageTreeConfig.transformers);
		for (const plugin of plugins) if (plugin.transformPageTree) transformers.push(plugin.transformPageTree);
		const options = {
			url,
			...pageTreeConfig,
			transformers
		};
		if (storage instanceof FileSystem) return pageTrees = new PageTreeBuilder(storage, options).root();
		else {
			const out = {};
			for (const locale in storage) out[locale] = new PageTreeBuilder([locale, storage], options).root();
			return pageTrees = out;
		}
	}
	return {
		_i18n: i18n,
		get pageTree() {
			return getPageTrees();
		},
		set pageTree(v) {
			pageTrees = v;
		},
		getPageByHref(href, { dir = "", language = i18n?.defaultLanguage } = {}) {
			const [value, hash] = href.split("#", 2);
			let target;
			if (value.startsWith("./") || value.startsWith("../")) {
				const path = joinPath(dir, value);
				target = indexer.getPage(path, language);
			} else target = this.getPages(language).find((item) => item.url === value);
			if (target) return {
				page: target,
				hash
			};
		},
		resolveHref(href, parent) {
			if (href.startsWith("./") || href.startsWith("../")) {
				const target = this.getPageByHref(href, {
					dir: path.dirname(parent.path),
					language: parent.locale
				});
				if (target) return target.hash ? `${target.page.url}#${target.hash}` : target.page.url;
			}
			return href;
		},
		getPages(language) {
			return indexer.getPages(language);
		},
		getLanguages() {
			const list = [];
			if (!i18n) return list;
			for (const language of i18n.languages) list.push({
				language,
				pages: this.getPages(language)
			});
			return list;
		},
		getPage(slugs = [], language = i18n?.defaultLanguage) {
			return indexer.getPageBySlugs(slugs, language);
		},
		getNodeMeta(node, language = i18n?.defaultLanguage) {
			const ref = node.$ref;
			if (!ref) return;
			return indexer.getMeta(ref, language);
		},
		getNodePage(node, language = i18n?.defaultLanguage) {
			const ref = node.$ref;
			if (!ref) return;
			return indexer.getPage(ref, language);
		},
		getPageTree(locale) {
			if (i18n) {
				const trees = getPageTrees();
				if (locale && trees[locale]) return trees[locale];
				return trees[i18n.defaultLanguage];
			}
			return getPageTrees();
		},
		generateParams(slug, lang) {
			if (i18n) return this.getLanguages().flatMap((entry) => entry.pages.map((page) => ({
				[slug ?? "slug"]: page.slugs,
				[lang ?? "lang"]: entry.language
			})));
			return this.getPages().map((page) => ({ [slug ?? "slug"]: page.slugs }));
		},
		async serializePageTree(tree) {
			const { renderToString } = await import("react-dom/server.edge");
			return {
				$fumadocs_loader: "page-tree",
				data: visit$1(tree, (node) => {
					node = { ...node };
					if ("icon" in node && node.icon) node.icon = renderToString(node.icon);
					if (node.name) node.name = renderToString(node.name);
					if ("children" in node) node.children = [...node.children];
					return node;
				})
			};
		}
	};
}
function resolveConfig(source, { slugs, icon, plugins = [], baseUrl, url, ...base }) {
	let config = {
		...base,
		url: url ? (...args) => normalizeUrl(url(...args)) : createGetUrl(baseUrl, base.i18n),
		source,
		plugins: buildPlugins([
			icon && iconPlugin(icon),
			...typeof plugins === "function" ? plugins({ typedPlugin: (plugin) => plugin }) : plugins,
			slugsPlugin(slugs)
		])
	};
	for (const plugin of config.plugins) {
		const result = plugin.config?.(config);
		if (result) config = result;
	}
	return config;
}
var priorityMap = {
	pre: 1,
	default: 0,
	post: -1
};
function buildPlugins(plugins, sort = true) {
	const flatten = [];
	for (const plugin of plugins) if (Array.isArray(plugin)) flatten.push(...buildPlugins(plugin, false));
	else if (plugin) flatten.push(plugin);
	if (sort) return flatten.sort((a, b) => priorityMap[b.enforce ?? "default"] - priorityMap[a.enforce ?? "default"]);
	return flatten;
}
var docs = await server({ "doc": { "passthroughs": ["extractedReferences"] } }).docs("docs", "content/docs", /* @__PURE__ */ Object.assign({
	"./api-reference/meta.json": {
		title: "API Reference",
		pages: [
			"client",
			"endpoints",
			"webhooks"
		]
	},
	"./core-concepts/meta.json": {
		title: "Core Concepts",
		pages: [
			"authentication",
			"configuration",
			"error-handling"
		]
	},
	"./getting-started/meta.json": {
		title: "Getting Started",
		pages: [
			"installation",
			"quickstart",
			"project-structure"
		]
	},
	"./guides/meta.json": {
		title: "Guides",
		pages: [
			"data-fetching",
			"pagination",
			"rate-limiting"
		]
	},
	"./meta.json": { pages: [
		"index",
		"---Getting Started---",
		"getting-started/installation",
		"getting-started/quickstart",
		"getting-started/project-structure",
		"---Core Concepts---",
		"core-concepts/authentication",
		"core-concepts/configuration",
		"core-concepts/error-handling",
		"---API Reference---",
		"api-reference/client",
		"api-reference/endpoints",
		"api-reference/webhooks",
		"---Guides---",
		"guides/data-fetching",
		"guides/pagination",
		"guides/rate-limiting",
		"---Resources---",
		"changelog",
		"faq"
	] }
}), /* @__PURE__ */ Object.assign({
	"./api-reference/client.mdx": client_exports,
	"./api-reference/endpoints.mdx": endpoints_exports,
	"./api-reference/webhooks.mdx": webhooks_exports,
	"./changelog.mdx": changelog_exports,
	"./core-concepts/authentication.mdx": authentication_exports,
	"./core-concepts/configuration.mdx": configuration_exports,
	"./core-concepts/error-handling.mdx": error_handling_exports,
	"./faq.mdx": faq_exports,
	"./getting-started/installation.mdx": installation_exports,
	"./getting-started/project-structure.mdx": project_structure_exports,
	"./getting-started/quickstart.mdx": quickstart_exports,
	"./guides/data-fetching.mdx": data_fetching_exports,
	"./guides/pagination.mdx": pagination_exports,
	"./guides/rate-limiting.mdx": rate_limiting_exports,
	"./index.mdx": docs_exports$1
}));
//#endregion
//#region app/components/icon.tsx
function IconContainer({ icon: Icon, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		children: Icon ? /* @__PURE__ */ jsx(Icon, { className: "size-4" }) : null
	});
}
//#endregion
//#region app/lib/source.ts
var source = loader$6({
	source: docs.toFumadocsSource(),
	baseUrl: docsRoute,
	icon(icon) {
		if (icon && icon in icons) return createElement(IconContainer, { icon: icons[icon] });
	}
});
function getPageMarkdownUrl(page) {
	const segments = [...page.slugs, "content.md"];
	return {
		segments,
		url: `${docsContentRoute}/${segments.join("/")}`
	};
}
async function getLLMText(page) {
	const processed = await page.data.getText("processed");
	return `# ${page.data.title} (${page.url})

${processed}`;
}
//#endregion
//#region .source/browser.ts
var browserCollections = { docs: browser().doc("docs", /* @__PURE__ */ Object.assign({
	"./api-reference/client.mdx": () => import("./assets/client-DNVCPcn4.js"),
	"./api-reference/endpoints.mdx": () => import("./assets/endpoints-5NaXu3lQ.js"),
	"./api-reference/webhooks.mdx": () => import("./assets/webhooks-DerPK9iN.js"),
	"./changelog.mdx": () => import("./assets/changelog-D1EloT0X.js"),
	"./core-concepts/authentication.mdx": () => import("./assets/authentication-CRkOBqq7.js"),
	"./core-concepts/configuration.mdx": () => import("./assets/configuration-C0Ehe7b6.js"),
	"./core-concepts/error-handling.mdx": () => import("./assets/error-handling-FWsRKqZ8.js"),
	"./faq.mdx": () => import("./assets/faq-DF6UQNZk.js"),
	"./getting-started/installation.mdx": () => import("./assets/installation-Ds3HfF4j.js"),
	"./getting-started/project-structure.mdx": () => import("./assets/project-structure-CPH1IgCs.js"),
	"./getting-started/quickstart.mdx": () => import("./assets/quickstart-ZdX48stK.js"),
	"./guides/data-fetching.mdx": () => import("./assets/data-fetching-kICV2iex.js"),
	"./guides/pagination.mdx": () => import("./assets/pagination-Bda5GrsR.js"),
	"./guides/rate-limiting.mdx": () => import("./assets/rate-limiting-BSWEDV0u.js"),
	"./index.mdx": () => import("./assets/docs-Cgnit4Yw.js")
})) };
//#endregion
//#region node_modules/fumadocs-core/dist/source/client/index.js
function deserializePageTree(serialized) {
	const root = serialized.data;
	visit$1(root, (item) => {
		if ("icon" in item && typeof item.icon === "string") item.icon = /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: item.icon } });
		if (typeof item.name === "string") item.name = /* @__PURE__ */ jsx("span", {
			className: "fd-page-tree-item-name",
			dangerouslySetInnerHTML: { __html: item.name }
		});
	});
	return root;
}
/**
* Deserialize loader data that is serialized by the server-side Fumadocs `loader()`, supported:
* - Page Tree
*
* other unrelated properties are kept in the output.
*/
function useFumadocsLoader(serialized) {
	return useMemo(() => {
		const out = {};
		for (const k in serialized) {
			const v = serialized[k];
			if (isSerializedPageTree(v)) out[k] = deserializePageTree(v);
			else out[k] = v;
		}
		return out;
	}, [serialized]);
}
function isSerializedPageTree(v) {
	return typeof v === "object" && v !== null && "$fumadocs_loader" in v && v.$fumadocs_loader === "page-tree";
}
//#endregion
//#region app/lib/og.ts
function getPageImagePath(slugs) {
	return `/og/docs/${[...slugs, "image.webp"].join("/")}`;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/card.js
function Cards(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("grid grid-cols-2 gap-3 @container", props.className),
		children: props.children
	});
}
function Card({ icon, title, description, ...props }) {
	return /* @__PURE__ */ jsxs(props.href ? Link$1 : "div", {
		...props,
		"data-card": true,
		className: cn$1("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className),
		children: [
			icon ? /* @__PURE__ */ jsx("div", {
				className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",
				children: icon
			}) : null,
			/* @__PURE__ */ jsx("h3", {
				className: "not-prose mb-1 text-sm font-medium",
				children: title
			}),
			description ? /* @__PURE__ */ jsx("p", {
				className: "my-0! text-sm text-fd-muted-foreground",
				children: description
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden",
				children: props.children
			})
		]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/callout.js
var iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
function Callout({ children, title, ...props }) {
	return /* @__PURE__ */ jsxs(CalloutContainer, {
		...props,
		children: [title && /* @__PURE__ */ jsx(CalloutTitle, { children: title }), /* @__PURE__ */ jsx(CalloutDescription, { children })]
	});
}
function resolveAlias(type) {
	if (type === "warn") return "warning";
	if (type === "tip") return "info";
	return type;
}
function CalloutContainer({ type: inputType = "info", icon, children, className, style, ...props }) {
	const type = resolveAlias(inputType);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className),
		style: {
			"--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
			...style
		},
		...props,
		children: [
			/* @__PURE__ */ jsx("div", {
				role: "none",
				className: "w-0.5 bg-(--callout-color)/50 rounded-sm"
			}),
			icon ?? {
				info: /* @__PURE__ */ jsx(Info, { className: iconClass }),
				warning: /* @__PURE__ */ jsx(TriangleAlert, { className: iconClass }),
				error: /* @__PURE__ */ jsx(CircleX, { className: iconClass }),
				success: /* @__PURE__ */ jsx(CircleCheck, { className: iconClass }),
				idea: /* @__PURE__ */ jsx(Lightbulb, { className: "size-5 -me-0.5 fill-(--callout-color) text-(--callout-color)" })
			}[type],
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-2 min-w-0 flex-1",
				children
			})
		]
	});
}
function CalloutTitle({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		className: cn$1("font-medium my-0!", className),
		...props,
		children
	});
}
function CalloutDescription({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn$1("text-fd-muted-foreground prose-no-margin empty:hidden", className),
		...props,
		children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/heading.js
function Heading({ as, className, ...props }) {
	const As = as ?? "h1";
	if (!props.id) return /* @__PURE__ */ jsx(As, {
		className,
		...props
	});
	return /* @__PURE__ */ jsxs(As, {
		className: cn$1("flex scroll-m-28 flex-row items-center gap-2", className),
		...props,
		children: [/* @__PURE__ */ jsx("a", {
			"data-card": "",
			href: `#${props.id}`,
			className: "peer",
			children: props.children
		}), /* @__PURE__ */ jsx(LinkIcon, {
			"aria-hidden": true,
			className: "size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
		})]
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/tabs.js
var listeners = /* @__PURE__ */ new Map();
var TabsContext$1 = createContext(null);
function useTabContext() {
	const ctx = use(TabsContext$1);
	if (!ctx) throw new Error("You must wrap your component in <Tabs>");
	return ctx;
}
var TabsList = Primitive.TabsList;
var TabsTrigger = Primitive.TabsTrigger;
function Tabs({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
	const tabsRef = useRef(null);
	const valueToIdMap = useMemo(() => /* @__PURE__ */ new Map(), []);
	const [value, setValue] = _value === void 0 ? useState(defaultValue) : [_value, useEffectEvent((v) => _onValueChange?.(v))];
	useLayoutEffect(() => {
		if (!groupId) return;
		let previous = sessionStorage.getItem(groupId);
		if (persist) previous ??= localStorage.getItem(groupId);
		if (previous) setValue(previous);
		const groupListeners = listeners.get(groupId) ?? /* @__PURE__ */ new Set();
		groupListeners.add(setValue);
		listeners.set(groupId, groupListeners);
		return () => {
			groupListeners.delete(setValue);
		};
	}, [
		groupId,
		persist,
		setValue
	]);
	useLayoutEffect(() => {
		const hash = window.location.hash.slice(1);
		if (!hash) return;
		for (const [value, id] of valueToIdMap.entries()) if (id === hash) {
			setValue(value);
			tabsRef.current?.scrollIntoView();
			break;
		}
	}, [setValue, valueToIdMap]);
	return /* @__PURE__ */ jsx(Primitive.Tabs, {
		ref: mergeRefs$1(ref, tabsRef),
		value,
		onValueChange: (v) => {
			if (updateAnchor) {
				const id = valueToIdMap.get(v);
				if (id) window.history.replaceState(null, "", `#${id}`);
			}
			if (groupId) {
				const groupListeners = listeners.get(groupId);
				if (groupListeners) for (const listener of groupListeners) listener(v);
				sessionStorage.setItem(groupId, v);
				if (persist) localStorage.setItem(groupId, v);
			} else setValue(v);
		},
		...props,
		children: /* @__PURE__ */ jsx(TabsContext$1, {
			value: useMemo(() => ({ valueToIdMap }), [valueToIdMap]),
			children: props.children
		})
	});
}
function TabsContent({ value, ...props }) {
	const { valueToIdMap } = useTabContext();
	if (props.id) valueToIdMap.set(value, props.id);
	return /* @__PURE__ */ jsx(Primitive.TabsContent, {
		value,
		...props,
		children: props.children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/codeblock.js
var TabsContext = createContext(null);
function Pre$1(props) {
	return /* @__PURE__ */ jsx("pre", {
		...props,
		className: cn$1("min-w-full w-max *:flex *:flex-col", props.className),
		children: props.children
	});
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props) => /* @__PURE__ */ jsx("div", {
	...props,
	className: cn$1("empty:hidden", props.className)
}), ...props }) {
	const inTab = use(TabsContext) !== null;
	const areaRef = useRef(null);
	return /* @__PURE__ */ jsxs("figure", {
		ref,
		dir: "ltr",
		...props,
		tabIndex: -1,
		className: cn$1(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
		children: [title ? /* @__PURE__ */ jsxs("div", {
			className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
			children: [
				typeof icon === "string" ? /* @__PURE__ */ jsx("div", {
					className: "[&_svg]:size-3.5",
					dangerouslySetInnerHTML: { __html: icon }
				}) : icon,
				/* @__PURE__ */ jsx("figcaption", {
					className: "flex-1 truncate",
					children: title
				}),
				Actions({
					className: "-me-2",
					children: allowCopy && /* @__PURE__ */ jsx(CopyButton, { containerRef: areaRef })
				})
			]
		}) : Actions({
			className: "absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
			children: allowCopy && /* @__PURE__ */ jsx(CopyButton, { containerRef: areaRef })
		}), /* @__PURE__ */ jsx("div", {
			ref: areaRef,
			...viewportProps,
			role: "region",
			tabIndex: 0,
			className: cn$1("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
			style: {
				"--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
				counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
				...viewportProps.style
			},
			children
		})]
	});
}
function CopyButton({ className, containerRef, ...props }) {
	const [checked, onClick] = useCopyButton(() => {
		const pre = containerRef.current?.getElementsByTagName("pre").item(0);
		if (!pre) return;
		const clone = pre.cloneNode(true);
		clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
			node.replaceWith("\n");
		});
		navigator.clipboard.writeText(clone.textContent ?? "");
	});
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"data-checked": checked || void 0,
		className: cn$1(buttonVariants$1({
			className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
			size: "icon-xs"
		}), className),
		"aria-label": checked ? "Copied Text" : "Copy Text",
		onClick,
		...props,
		children: checked ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Clipboard, {})
	});
}
function CodeBlockTabs({ ref, ...props }) {
	const containerRef = useRef(null);
	const nested = use(TabsContext) !== null;
	return /* @__PURE__ */ jsx(Tabs, {
		ref: mergeRefs$1(containerRef, ref),
		...props,
		className: cn$1("bg-fd-card rounded-xl border", !nested && "my-4", props.className),
		children: /* @__PURE__ */ jsx(TabsContext, {
			value: useMemo(() => ({
				containerRef,
				nested
			}), [nested]),
			children: props.children
		})
	});
}
function CodeBlockTabsList(props) {
	return /* @__PURE__ */ jsx(TabsList, {
		...props,
		className: cn$1("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", props.className),
		children: props.children
	});
}
function CodeBlockTabsTrigger({ children, ...props }) {
	return /* @__PURE__ */ jsxs(TabsTrigger, {
		...props,
		className: cn$1("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5", props.className),
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary" }), children]
	});
}
function CodeBlockTab(props) {
	return /* @__PURE__ */ jsx(TabsContent, { ...props });
}
//#endregion
//#region node_modules/fumadocs-ui/dist/mdx.js
function Image$1(props) {
	return /* @__PURE__ */ jsx(Image, {
		sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px",
		...props,
		className: cn$1("rounded-lg", props.className)
	});
}
function Table(props) {
	return /* @__PURE__ */ jsx("div", {
		className: "relative overflow-auto prose-no-margin my-6",
		children: /* @__PURE__ */ jsx("table", { ...props })
	});
}
var defaultMdxComponents = {
	CodeBlockTab,
	CodeBlockTabs,
	CodeBlockTabsList,
	CodeBlockTabsTrigger,
	pre: (props) => /* @__PURE__ */ jsx(CodeBlock, {
		...props,
		children: /* @__PURE__ */ jsx(Pre$1, { children: props.children })
	}),
	Card,
	Cards,
	a: Link$1,
	img: Image$1,
	h1: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h1",
		...props
	}),
	h2: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h2",
		...props
	}),
	h3: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h3",
		...props
	}),
	h4: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h4",
		...props
	}),
	h5: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h5",
		...props
	}),
	h6: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h6",
		...props
	}),
	table: Table,
	Callout,
	CalloutContainer,
	CalloutTitle,
	CalloutDescription
};
//#endregion
//#region app/components/mdx.tsx
function getMDXComponents(components) {
	return {
		...defaultMdxComponents,
		...components
	};
}
var useMDXComponents = getMDXComponents;
//#endregion
//#region app/components/ui/button.tsx
var variants = {
	primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80 disabled:bg-fd-secondary disabled:text-fd-secondary-foreground",
	outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
	ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
	secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
var buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring", { variants: {
	variant: variants,
	color: variants,
	size: {
		sm: "gap-1 px-2 py-1.5 text-xs",
		icon: "p-1.5 [&_svg]:size-5",
		"icon-sm": "p-1.5 [&_svg]:size-4.5",
		"icon-xs": "p-1 [&_svg]:size-4"
	}
} });
//#endregion
//#region node_modules/fumadocs-core/dist/utils-BqbZbgRr.js
async function loadMissingTheme(highlighter, themes) {
	const { isSpecialTheme } = await import("shiki/core");
	const missingThemes = themes.filter((theme) => {
		if (isSpecialTheme(theme)) return false;
		try {
			highlighter.getTheme(theme);
			return false;
		} catch {
			return true;
		}
	});
	if (missingThemes.length > 0) await highlighter.loadTheme(...missingThemes);
}
function getRequiredThemes(options) {
	if ("theme" in options) return [options.theme];
	else return Object.values(options.themes).filter((v) => v !== void 0);
}
//#endregion
//#region node_modules/fumadocs-core/dist/highlight/shiki/index.js
function createShikiFactory(config) {
	let instance;
	return {
		init(options) {
			return instance = config.init(options);
		},
		getOrInit() {
			return instance ?? this.init();
		}
	};
}
async function highlightHast(highlighter, code, options) {
	const { fallbackLanguage = "text", ...resolved } = options;
	const { isSpecialLang } = await import("shiki/core");
	if (!isSpecialLang(resolved.lang) && !(resolved.lang in highlighter.getBundledLanguages()) && !highlighter.getLoadedLanguages().includes(resolved.lang)) resolved.lang = fallbackLanguage;
	await Promise.all([loadMissingTheme(highlighter, getRequiredThemes(resolved)), highlighter.loadLanguage(resolved.lang)]);
	return highlighter.codeToHast(code, resolved);
}
//#endregion
//#region node_modules/fumadocs-core/dist/highlight/shiki/react.js
/**
* get highlighted results (uncached), use `useEffect` instead of React 19 APIs.
*/
function useShikiDynamic(highlighter, code, options, deps) {
	const [node, setNode] = useState(options.defaultValue);
	const lastTask = useRef(null);
	useEffect(() => {
		async function task() {
			return toJsxRuntime(await highlightHast(typeof highlighter === "function" ? await highlighter() : highlighter, code, options), {
				...JsxRuntime,
				components: options.components
			});
		}
		const promise = task();
		lastTask.current = promise;
		promise.then((res) => {
			if (lastTask.current === promise) setNode(res);
		});
		return () => {
			lastTask.current = null;
		};
	}, deps);
	return node;
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/dynamic-codeblock.core.js
var PropsContext = createContext(void 0);
function DefaultPre(props) {
	const extraProps = use(PropsContext);
	return /* @__PURE__ */ jsx(CodeBlock, {
		...props,
		...extraProps,
		className: cn$1("my-0", props.className, extraProps?.className),
		children: /* @__PURE__ */ jsx(Pre$1, { children: props.children })
	});
}
function DynamicCodeBlock$1({ lang, code, codeblock, options, wrapInSuspense = true, highlighter }) {
	const id = useId();
	const shikiOptions = {
		lang,
		defaultColor: false,
		...options,
		components: {
			pre: DefaultPre,
			...options.components
		}
	};
	let node = useShikiDynamic(highlighter, code, shikiOptions, [
		id,
		lang,
		code
	]);
	if (wrapInSuspense) node ??= /* @__PURE__ */ jsx(Placeholder, {
		code,
		components: shikiOptions.components
	});
	return /* @__PURE__ */ jsx(PropsContext, {
		value: codeblock,
		children: node
	});
}
function Placeholder({ code, components = {} }) {
	const { pre: Pre = "pre", code: Code = "code" } = components;
	return /* @__PURE__ */ jsx(Pre, { children: /* @__PURE__ */ jsx(Code, { children: code.split("\n").map((line, i) => /* @__PURE__ */ jsx("span", {
		className: "line",
		children: line
	}, i)) }) });
}
//#endregion
//#region node_modules/fumadocs-core/dist/highlight/shiki/full.js
var defaultShikiFactory = createShikiFactory({ async init(options) {
	const { createHighlighter, createJavaScriptRegexEngine } = await import("shiki");
	return createHighlighter({
		langs: [],
		themes: [],
		langAlias: options?.langAlias,
		engine: createJavaScriptRegexEngine()
	});
} });
createShikiFactory({ async init(options) {
	const { createHighlighter, createOnigurumaEngine } = await import("shiki");
	return createHighlighter({
		langs: [],
		themes: [],
		langAlias: options?.langAlias,
		engine: createOnigurumaEngine(import("shiki/wasm"))
	});
} });
//#endregion
//#region node_modules/fumadocs-ui/dist/components/dynamic-codeblock.js
function DynamicCodeBlock(props) {
	return /* @__PURE__ */ jsx(DynamicCodeBlock$1, {
		highlighter: () => defaultShikiFactory.getOrInit(),
		options: { themes: {
			light: "github-light",
			dark: "github-dark"
		} },
		...props
	});
}
//#endregion
//#region app/components/markdown.tsx
function rehypeWrapWords() {
	return (tree) => {
		visit(tree, ["text", "element"], (node, index, parent) => {
			if (node.type === "element" && node.tagName === "pre") return "skip";
			if (node.type !== "text" || !parent || index === void 0) return;
			const newNodes = node.value.split(/(?=\s)/).flatMap((word) => {
				if (word.length === 0) return [];
				return {
					type: "element",
					tagName: "span",
					properties: { class: "animate-fd-fade-in" },
					children: [{
						type: "text",
						value: word
					}]
				};
			});
			Object.assign(node, {
				type: "element",
				tagName: "span",
				properties: {},
				children: newNodes
			});
			return "skip";
		});
	};
}
function createProcessor() {
	const processor = remark().use(remarkGfm).use(remarkRehype).use(rehypeWrapWords);
	return { async process(content) {
		const nodes = processor.parse({ value: content });
		return toJsxRuntime(await processor.run(nodes), {
			development: false,
			jsx,
			jsxs,
			Fragment,
			components: {
				...defaultMdxComponents,
				pre: Pre,
				img: void 0
			}
		});
	} };
}
function Pre(props) {
	const codeProps = Children.only(props.children).props;
	const content = codeProps.children;
	if (typeof content !== "string") return null;
	let lang = codeProps.className?.split(" ").find((v) => v.startsWith("language-"))?.slice(9) ?? "text";
	if (lang === "mdx") lang = "md";
	return /* @__PURE__ */ jsx(DynamicCodeBlock, {
		lang,
		code: content.trimEnd()
	});
}
var processor = createProcessor();
function Markdown({ text }) {
	const deferredText = useDeferredValue(text);
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx("p", {
			className: "invisible",
			children: text
		}),
		children: /* @__PURE__ */ jsx(Renderer, { text: deferredText })
	});
}
var cache = /* @__PURE__ */ new Map();
function Renderer({ text }) {
	const result = cache.get(text) ?? processor.process(text);
	cache.set(text, result);
	return use(result);
}
//#endregion
//#region app/components/ai/search.tsx
var Context = createContext(null);
function AISearchPanelHeader({ className, ...props }) {
	const { setOpen } = useAISearchContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("sticky top-0 flex items-start gap-2 border rounded-xl bg-fd-secondary text-fd-secondary-foreground shadow-sm", className),
		...props,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-3 py-2 flex-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-sm font-medium mb-2",
				children: "AI Chat"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xs text-fd-muted-foreground",
				children: "AI can be inaccurate, please verify the answers."
			})]
		}), /* @__PURE__ */ jsx("button", {
			"aria-label": "Close",
			tabIndex: -1,
			className: cn(buttonVariants({
				size: "icon-sm",
				color: "ghost",
				className: "text-fd-muted-foreground rounded-full"
			})),
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ jsx(X, {})
		})]
	});
}
function AISearchInputActions() {
	const { messages, status, setMessages, regenerate } = useChatContext();
	const isLoading = status === "streaming";
	if (messages.length === 0) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [!isLoading && messages.at(-1)?.role === "assistant" && /* @__PURE__ */ jsxs("button", {
		type: "button",
		className: cn(buttonVariants({
			color: "secondary",
			size: "sm",
			className: "rounded-full gap-1.5"
		})),
		onClick: () => regenerate(),
		children: [/* @__PURE__ */ jsx(RefreshCw, { className: "size-4" }), "Retry"]
	}), /* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn(buttonVariants({
			color: "secondary",
			size: "sm",
			className: "rounded-full"
		})),
		onClick: () => setMessages([]),
		children: "Clear Chat"
	})] });
}
var StorageKeyInput = "__ai_search_input";
function AISearchInput(props) {
	const { status, sendMessage, stop } = useChatContext();
	const [input, setInput] = useState(() => localStorage.getItem(StorageKeyInput) ?? "");
	const isLoading = status === "streaming" || status === "submitted";
	const onStart = (e) => {
		e?.preventDefault();
		const message = input.trim();
		if (message.length === 0) return;
		sendMessage({
			role: "user",
			parts: [{
				type: "data-client",
				data: { location: location.href }
			}, {
				type: "text",
				text: message
			}]
		});
		setInput("");
		localStorage.removeItem(StorageKeyInput);
	};
	useEffect(() => {
		if (isLoading) document.getElementById("nd-ai-input")?.focus();
	}, [isLoading]);
	return /* @__PURE__ */ jsxs("form", {
		...props,
		className: cn("flex items-start pe-2", props.className),
		onSubmit: onStart,
		children: [/* @__PURE__ */ jsx(Input, {
			value: input,
			placeholder: isLoading ? "AI is answering..." : "Ask a question",
			autoFocus: true,
			className: "p-3",
			disabled: status === "streaming" || status === "submitted",
			onChange: (e) => {
				setInput(e.target.value);
				localStorage.setItem(StorageKeyInput, e.target.value);
			},
			onKeyDown: (event) => {
				if (!event.shiftKey && event.key === "Enter") onStart(event);
			}
		}), isLoading ? /* @__PURE__ */ jsxs("button", {
			type: "button",
			className: cn(buttonVariants({
				color: "secondary",
				className: "transition-all rounded-full mt-2 gap-2"
			})),
			onClick: stop,
			children: [/* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin text-fd-muted-foreground" }), "Abort Answer"]
		}, "bn") : /* @__PURE__ */ jsx("button", {
			type: "submit",
			className: cn(buttonVariants({
				color: "primary",
				className: "transition-all rounded-full mt-2"
			})),
			disabled: input.length === 0,
			children: /* @__PURE__ */ jsx(Send, { className: "size-4" })
		}, "bn")]
	});
}
function List(props) {
	const containerRef = useRef(null);
	useEffect(() => {
		if (!containerRef.current) return;
		function callback() {
			const container = containerRef.current;
			if (!container) return;
			container.scrollTo({
				top: container.scrollHeight,
				behavior: "instant"
			});
		}
		const observer = new ResizeObserver(callback);
		callback();
		const element = containerRef.current?.firstElementChild;
		if (element) observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		...props,
		className: cn("fd-scroll-container overflow-y-auto min-w-0 flex flex-col", props.className),
		children: props.children
	});
}
function Input(props) {
	const ref = useRef(null);
	const shared = cn("col-start-1 row-start-1", props.className);
	return /* @__PURE__ */ jsxs("div", {
		className: "grid flex-1",
		children: [/* @__PURE__ */ jsx("textarea", {
			id: "nd-ai-input",
			...props,
			className: cn("resize-none bg-transparent placeholder:text-fd-muted-foreground focus-visible:outline-none", shared)
		}), /* @__PURE__ */ jsx("div", {
			ref,
			className: cn(shared, "break-all invisible"),
			children: `${props.value?.toString() ?? ""}\n`
		})]
	});
}
var roleName = {
	user: "you",
	assistant: "fumadocs"
};
function Message({ message, ...props }) {
	let markdown = "";
	const searchCalls = [];
	for (const part of message.parts ?? []) {
		if (part.type === "text") {
			markdown += part.text;
			continue;
		}
		if (part.type.startsWith("tool-")) {
			const toolName = part.type.slice(5);
			const p = part;
			if (toolName !== "search" || !p.toolCallId) continue;
			searchCalls.push(p);
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		onClick: (e) => e.stopPropagation(),
		...props,
		children: [
			/* @__PURE__ */ jsx("p", {
				className: cn("mb-1 text-sm font-medium text-fd-muted-foreground", message.role === "assistant" && "text-fd-primary"),
				children: roleName[message.role] ?? "unknown"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "prose text-sm",
				children: /* @__PURE__ */ jsx(Markdown, { text: markdown })
			}),
			searchCalls.map((call) => {
				return /* @__PURE__ */ jsxs("div", {
					className: "flex flex-row gap-2 items-center mt-3 rounded-lg border bg-fd-secondary text-fd-muted-foreground text-xs p-2",
					children: [/* @__PURE__ */ jsx(SearchIcon, { className: "size-4" }), call.state === "output-error" || call.state === "output-denied" ? /* @__PURE__ */ jsx("p", {
						className: "text-fd-error",
						children: call.errorText ?? "Failed to search"
					}) : /* @__PURE__ */ jsx("p", { children: !call.output ? "Searching…" : `${call.output.length} search results` })]
				}, call.toolCallId);
			})
		]
	});
}
function AISearch({ children }) {
	const [open, setOpen] = useState(false);
	const chat = useChat({
		id: "search",
		transport: new DefaultChatTransport({ api: "/api/chat" })
	});
	return /* @__PURE__ */ jsx(Context, {
		value: useMemo(() => ({
			chat,
			open,
			setOpen
		}), [chat, open]),
		children
	});
}
function AISearchTrigger({ position = "default", className, ...props }) {
	const { open, setOpen } = useAISearchContext();
	return /* @__PURE__ */ jsx("button", {
		"data-state": open ? "open" : "closed",
		className: cn(position === "float" && ["fixed bottom-4 gap-3 w-24 inset-e-[calc(--spacing(4)+var(--removed-body-scroll-bar-size,0px))] shadow-lg z-20 transition-[translate,opacity]", open && "translate-y-10 opacity-0"], className),
		onClick: () => setOpen(!open),
		...props,
		children: props.children
	});
}
function AISearchPanel() {
	const { open, setOpen } = useAISearchContext();
	useHotKey();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("style", { children: `
        @keyframes ask-ai-open {
          from {
            translate: 100% 0;
          }
          to {
            translate: 0 0;
          }
        }
        @keyframes ask-ai-close {
          from {
            width: var(--ai-chat-width);
          }
          to {
            width: 0px;
          }
        }` }),
		/* @__PURE__ */ jsx(Presence, {
			present: open,
			children: /* @__PURE__ */ jsx("div", {
				"data-state": open ? "open" : "closed",
				className: "fixed inset-0 z-30 backdrop-blur-xs bg-fd-overlay data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out lg:hidden",
				onClick: () => setOpen(false)
			})
		}),
		/* @__PURE__ */ jsx(Presence, {
			present: open,
			children: /* @__PURE__ */ jsx("div", {
				className: cn("overflow-hidden z-30 bg-fd-card text-fd-card-foreground [--ai-chat-width:400px] 2xl:[--ai-chat-width:460px]", "max-lg:fixed max-lg:inset-x-2 max-lg:inset-y-4 max-lg:border max-lg:rounded-2xl max-lg:shadow-xl", "lg:sticky lg:top-0 lg:h-dvh lg:border-s lg:ms-auto lg:in-[#nd-docs-layout]:[grid-area:toc] lg:in-[#nd-notebook-layout]:row-span-full lg:in-[#nd-notebook-layout]:col-start-5", open ? "animate-fd-dialog-in lg:animate-[ask-ai-open_200ms]" : "animate-fd-dialog-out lg:animate-[ask-ai-close_200ms]"),
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col size-full p-2 lg:p-3 lg:w-(--ai-chat-width)",
					children: [
						/* @__PURE__ */ jsx(AISearchPanelHeader, {}),
						/* @__PURE__ */ jsx(AISearchPanelList, { className: "flex-1" }),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border bg-fd-secondary text-fd-secondary-foreground shadow-sm has-focus-visible:shadow-md",
							children: [/* @__PURE__ */ jsx(AISearchInput, {}), /* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-1.5 p-1 empty:hidden",
								children: /* @__PURE__ */ jsx(AISearchInputActions, {})
							})]
						})
					]
				})
			})
		})
	] });
}
function AISearchPanelList({ className, style, ...props }) {
	const chat = useChatContext();
	const messages = chat.messages.filter((msg) => msg.role !== "system");
	return /* @__PURE__ */ jsx(List, {
		className: cn("py-4 overscroll-contain", className),
		style: {
			maskImage: "linear-gradient(to bottom, transparent, white 1rem, white calc(100% - 1rem), transparent 100%)",
			...style
		},
		...props,
		children: messages.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "text-sm text-fd-muted-foreground/80 size-full flex flex-col items-center justify-center text-center gap-2",
			children: [/* @__PURE__ */ jsx(MessageCircleIcon, {
				fill: "currentColor",
				stroke: "none"
			}), /* @__PURE__ */ jsx("p", {
				onClick: (e) => e.stopPropagation(),
				children: "Start a new chat below."
			})]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col px-3 gap-4",
			children: [chat.error && /* @__PURE__ */ jsxs("div", {
				className: "p-2 bg-fd-secondary text-fd-secondary-foreground border rounded-lg",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-fd-muted-foreground mb-1",
					children: ["Request Failed: ", chat.error.name]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm",
					children: chat.error.message
				})]
			}), messages.map((item) => /* @__PURE__ */ jsx(Message, { message: item }, item.id))]
		})
	});
}
function useHotKey() {
	const { open, setOpen } = useAISearchContext();
	const onKeyPress = useEffectEvent((e) => {
		if (e.key === "Escape" && open) {
			setOpen(false);
			e.preventDefault();
		}
		if (e.key === "/" && (e.metaKey || e.ctrlKey) && !open) {
			setOpen(true);
			e.preventDefault();
		}
	});
	useEffect(() => {
		window.addEventListener("keydown", onKeyPress);
		return () => window.removeEventListener("keydown", onKeyPress);
	}, []);
}
function useAISearchContext() {
	return use(Context);
}
function useChatContext() {
	return use(Context).chat;
}
//#endregion
//#region app/routes/docs.tsx
var docs_exports = /* @__PURE__ */ __exportAll$1({
	default: () => docs_default,
	loader: () => loader$5
});
async function loader$5({ params }) {
	const slugs = params["*"].split("/").filter((v) => v.length > 0);
	const page = source.getPage(slugs);
	if (!page) throw new Response("Not found", { status: 404 });
	return {
		path: page.path,
		markdownUrl: getPageMarkdownUrl(page).url,
		pageTree: await source.serializePageTree(source.getPageTree()),
		imagePath: getPageImagePath(slugs)
	};
}
var clientLoader = browserCollections.docs.createClientLoader({ component({ toc, frontmatter, default: Mdx }, { markdownUrl, path, imagePath }) {
	return /* @__PURE__ */ jsxs(DocsPage, {
		toc,
		tableOfContent: { style: "clerk" },
		children: [
			/* @__PURE__ */ jsx("title", { children: frontmatter.title }),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: frontmatter.description
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image",
				content: imagePath
			}),
			/* @__PURE__ */ jsx(DocsTitle, { children: frontmatter.title }),
			/* @__PURE__ */ jsx(DocsDescription, { children: frontmatter.description }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row gap-2 items-center border-b -mt-4 pb-6",
				children: [/* @__PURE__ */ jsx(MarkdownCopyButton, { markdownUrl }), /* @__PURE__ */ jsx(ViewOptionsPopover, {
					markdownUrl,
					githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${path}`
				})]
			}),
			/* @__PURE__ */ jsx(DocsBody, { children: /* @__PURE__ */ jsx(Mdx, { components: useMDXComponents() }) })
		]
	});
} });
var docs_default = UNSAFE_withComponentProps(function Page({ loaderData }) {
	const { path, pageTree, imagePath, markdownUrl } = useFumadocsLoader(loaderData);
	return /* @__PURE__ */ jsxs(DocsLayout, {
		...baseOptions(),
		tree: pageTree,
		children: [/* @__PURE__ */ jsxs(AISearch, { children: [/* @__PURE__ */ jsx(AISearchPanel, {}), /* @__PURE__ */ jsxs(AISearchTrigger, {
			position: "float",
			className: cn(buttonVariants$1({
				variant: "secondary",
				className: "text-fd-muted-foreground rounded-2xl"
			})),
			children: [/* @__PURE__ */ jsx(MessageCircleIcon, { className: "size-4.5" }), "Ask AI"]
		})] }), clientLoader.useContent(path, {
			markdownUrl,
			path,
			imagePath
		})]
	});
});
//#endregion
//#region node_modules/fumadocs-core/dist/endpoint-BWgZs3LL.js
function createEndpoint(server, options = {}) {
	const { search } = server;
	const { readOptions = defaultReadOptions } = options;
	return {
		...server,
		async staticGET() {
			return Response.json(await server.export());
		},
		async GET(request) {
			const url = new URL(request.url);
			const query = url.searchParams.get("query");
			if (!query) return Response.json([]);
			return Response.json(await search(query, readOptions(url, request)));
		}
	};
}
function defaultReadOptions(url) {
	const params = url.searchParams;
	const limit = params.has("limit") ? Number(params.get("limit")) : void 0;
	return {
		tag: params.get("tag")?.split(","),
		locale: params.get("locale"),
		limit: Number.isInteger(limit) ? limit : void 0
	};
}
//#endregion
//#region node_modules/fumadocs-core/dist/build-doc-DKBeOVIN.js
async function buildIndexDefault(page) {
	let structuredData;
	if ("structuredData" in page.data) structuredData = typeof page.data.structuredData === "function" ? await page.data.structuredData() : page.data.structuredData;
	else if ("load" in page.data && typeof page.data.load === "function") structuredData = (await page.data.load()).structuredData;
	if (!structuredData) throw new Error("Cannot find structured data from page, please define the page to index function.");
	return {
		title: page.data.title ?? basename$1(page.path, extname(page.path)),
		description: page.data.description,
		url: page.url,
		id: page.url,
		structuredData
	};
}
function isBreadcrumbItem(item) {
	return typeof item === "string" && item.length > 0;
}
function buildBreadcrumbs(source, page) {
	const pageTree = source.getPageTree(page.locale);
	const path = findPath(pageTree.children, (node) => node.type === "page" && node.url === page.url);
	if (path) {
		const breadcrumbs = [];
		path.pop();
		if (isBreadcrumbItem(pageTree.name)) breadcrumbs.push(pageTree.name);
		for (const segment of path) {
			if (!isBreadcrumbItem(segment.name)) continue;
			breadcrumbs.push(segment.name);
		}
		return breadcrumbs;
	}
}
function buildDocuments(indexes) {
	const docs = [];
	for (const page of indexes) {
		const pageTag = page.tag ?? [];
		const tags = Array.isArray(pageTag) ? pageTag : [pageTag];
		const data = page.structuredData;
		let id = 0;
		docs.push({
			id: page.id,
			page_id: page.id,
			type: "page",
			content: page.title,
			breadcrumbs: page.breadcrumbs,
			tags,
			url: page.url
		});
		const nextId = () => `${page.id}-${id++}`;
		if (page.description) docs.push({
			id: nextId(),
			page_id: page.id,
			tags,
			type: "text",
			url: page.url,
			content: page.description
		});
		for (const heading of data.headings) docs.push({
			id: nextId(),
			page_id: page.id,
			type: "heading",
			tags,
			url: `${page.url}#${heading.id}`,
			content: heading.content
		});
		for (const content of data.contents) docs.push({
			id: nextId(),
			page_id: page.id,
			tags,
			type: "text",
			url: content.heading ? `${page.url}#${content.heading}` : page.url,
			content: content.content
		});
	}
	return docs;
}
//#endregion
//#region node_modules/fumadocs-core/dist/search/server.js
var STEMMERS = {
	arabic: "ar",
	armenian: "am",
	bulgarian: "bg",
	czech: "cz",
	danish: "dk",
	dutch: "nl",
	english: "en",
	finnish: "fi",
	french: "fr",
	german: "de",
	greek: "gr",
	hungarian: "hu",
	indian: "in",
	indonesian: "id",
	irish: "ie",
	italian: "it",
	lithuanian: "lt",
	nepali: "np",
	norwegian: "no",
	portuguese: "pt",
	romanian: "ro",
	russian: "ru",
	serbian: "rs",
	slovenian: "ru",
	spanish: "es",
	swedish: "se",
	tamil: "ta",
	turkish: "tr",
	ukrainian: "uk",
	vietnamese: "vi",
	sanskrit: "sk"
};
var simpleSchema = {
	url: "string",
	title: "string",
	breadcrumbs: "string[]",
	description: "string",
	content: "string",
	keywords: "string"
};
var advancedSchema = {
	content: "string",
	page_id: "string",
	type: "string",
	breadcrumbs: "string[]",
	tags: "enum[]",
	url: "string",
	embeddings: "vector[512]"
};
async function createDB({ indexes, tokenizer, search: _, ...rest }) {
	const items = typeof indexes === "function" ? await indexes() : indexes;
	const db = create({
		schema: advancedSchema,
		...rest,
		components: {
			...rest.components,
			tokenizer: tokenizer ?? rest.components?.tokenizer
		}
	});
	await insertMultiple(db, buildDocuments(items));
	return db;
}
async function createDBSimple({ indexes, tokenizer, ...rest }) {
	const items = typeof indexes === "function" ? await indexes() : indexes;
	const db = create({
		schema: simpleSchema,
		...rest,
		components: {
			...rest.components,
			tokenizer: tokenizer ?? rest.components?.tokenizer
		}
	});
	await insertMultiple(db, items.map((page) => ({
		title: page.title,
		description: page.description,
		breadcrumbs: page.breadcrumbs,
		url: page.url,
		content: page.content,
		keywords: page.keywords
	})));
	return db;
}
function initSimpleSearch(options) {
	const doc = createDBSimple(options);
	return {
		async export() {
			return {
				type: "simple",
				...save(await doc)
			};
		},
		async search(query, searchOptions = {}) {
			const db = await doc;
			const { limit } = searchOptions;
			return searchSimple(db, query, {
				limit,
				...options.search
			});
		}
	};
}
function initAdvancedSearch(options) {
	const get = createDB(options);
	return {
		async export() {
			return {
				type: "advanced",
				...save(await get)
			};
		},
		async search(query, searchOptions = {}) {
			const db = await get;
			const { limit, tag, mode } = searchOptions;
			return searchAdvanced(db, query, tag, {
				...options.search,
				limit,
				mode: mode === "vector" ? "vector" : "fulltext"
			}).catch((err) => {
				if (mode === "vector") throw new Error("failed to search, make sure you have installed `@orama/plugin-embeddings` according to their docs.", { cause: err });
				throw err;
			});
		}
	};
}
function getTokenizer(locale) {
	return { language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale };
}
function createI18nSearchAPI(...[type, options]) {
	async function initSearchServers() {
		const map = /* @__PURE__ */ new Map();
		if (options.i18n.languages.length === 0) return map;
		const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
		for (const locale of options.i18n.languages) {
			const localeIndexes = indexes.filter((index) => index.locale === locale);
			const mapped = options.localeMap?.[locale] ?? getTokenizer(locale);
			if (type === "simple") map.set(locale, typeof mapped === "object" ? initSimpleSearch({
				...options,
				...mapped,
				indexes: localeIndexes
			}) : initSimpleSearch({
				...options,
				language: mapped,
				indexes: localeIndexes
			}));
			else map.set(locale, typeof mapped === "object" ? initAdvancedSearch({
				...options,
				indexes: localeIndexes,
				...mapped
			}) : initAdvancedSearch({
				...options,
				language: mapped,
				indexes: localeIndexes
			}));
		}
		return map;
	}
	const get = initSearchServers();
	return toAPI({
		async export() {
			const map = await get;
			const entries = Array.from(map.entries()).map(async ([k, v]) => [k, await v.export()]);
			return {
				type: "i18n",
				data: Object.fromEntries(await Promise.all(entries))
			};
		},
		async search(query, searchOptions) {
			const map = await get;
			const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
			const handler = map.get(locale);
			if (handler) return handler.search(query, searchOptions);
			return [];
		}
	});
}
function createFromSource(source, options = {}) {
	const { buildIndex = buildIndexDefault } = options;
	if (source._i18n) return createI18nSearchAPI("advanced", {
		...options,
		i18n: source._i18n,
		async indexes() {
			const indexes = source.getLanguages().flatMap((entry) => {
				return entry.pages.map(async (page) => {
					const index = await buildIndex(page);
					return {
						...index,
						breadcrumbs: index.breadcrumbs ?? buildBreadcrumbs(source, page),
						locale: entry.language
					};
				});
			});
			return Promise.all(indexes);
		}
	});
	return toAPI(initAdvancedSearch({
		...options,
		async indexes() {
			const indexes = source.getPages().map(async (page) => {
				const index = await buildIndex(page);
				if (index.breadcrumbs) return index;
				return {
					...index,
					breadcrumbs: buildBreadcrumbs(source, page)
				};
			});
			return Promise.all(indexes);
		}
	}));
}
function toAPI(server) {
	return createEndpoint(server, { readOptions(url) {
		return {
			...defaultReadOptions(url),
			mode: url.searchParams.get("mode") === "vector" ? "vector" : "full"
		};
	} });
}
//#endregion
//#region app/routes/search.ts
var search_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$4 });
var server$1 = createFromSource(source, { language: "english" });
async function loader$4({ request }) {
	return server$1.GET(request);
}
//#endregion
//#region node_modules/fumadocs-ui/dist/og/takumi.js
function generate({ primaryColor = "rgba(255,150,255,0.3)", primaryTextColor = "rgb(255,150,255)", ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "100%",
			color: "white",
			padding: "4rem",
			backgroundColor: "#0c0c0c",
			backgroundImage: `linear-gradient(to top right, ${primaryColor}, transparent)`
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "16px",
					marginBottom: "12px",
					color: primaryTextColor
				},
				children: [props.icon, /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "56px",
						fontWeight: 600,
						margin: 0
					},
					children: props.site
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontWeight: 800,
					fontSize: "82px",
					margin: 0
				},
				children: props.title
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontSize: "52px",
					color: "rgba(240,240,240,0.8)",
					margin: 0
				},
				children: props.description
			})
		]
	});
}
//#endregion
//#region app/routes/og.docs.tsx
var og_docs_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$3 });
function loader$3({ params }) {
	const slugs = params["*"].split("/").filter((v) => v.length > 0).slice(0, -1);
	const page = source.getPage(slugs);
	if (!page) throw new Response(void 0, { status: 404 });
	return new ImageResponse(/* @__PURE__ */ jsx(generate, {
		title: page.data.title,
		description: page.data.description,
		site: appName
	}), {
		width: 1200,
		height: 630,
		format: "webp"
	});
}
//#endregion
//#region app/llms/index.ts
var llms_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$2 });
function loader$2() {
	return new Response(llms(source).index());
}
//#endregion
//#region app/llms/full.ts
var full_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$1 });
async function loader$1() {
	const scan = source.getPages().map(getLLMText);
	const scanned = await Promise.all(scan);
	return new Response(scanned.join("\n\n"));
}
//#endregion
//#region app/routes/api/chat.ts
var chat_exports = /* @__PURE__ */ __exportAll$1({ action: () => action });
var searchServer = createSearchServer();
async function createSearchServer() {
	const search = new Document({ document: {
		id: "url",
		index: [
			"title",
			"description",
			"content"
		],
		store: true
	} });
	const docs = await chunkedAll(source.getPages().map(async (page) => {
		if (!("getText" in page.data)) return null;
		return {
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			content: await page.data.getText("processed")
		};
	}));
	for (const doc of docs) if (doc) search.add(doc);
	return search;
}
async function chunkedAll(promises) {
	const SIZE = 50;
	const out = [];
	for (let i = 0; i < promises.length; i += SIZE) out.push(...await Promise.all(promises.slice(i, i + SIZE)));
	return out;
}
var openrouter = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });
/** System prompt, you can update it to provide more specific information */
var systemPrompt = [
	"You are an AI assistant for a documentation site.",
	"Use the `search` tool to retrieve relevant docs context before answering when needed.",
	"The `search` tool returns raw JSON results from documentation. Use those results to ground your answer and cite sources as markdown links using the document `url` field when available.",
	"If you cannot find the answer in search results, say you do not know and suggest a better search query."
].join("\n");
async function action(args) {
	const reqJson = await args.request.json();
	return streamText({
		model: openrouter.chat(process.env.OPENROUTER_MODEL ?? "anthropic/claude-3.5-sonnet"),
		stopWhen: stepCountIs(5),
		tools: { search: searchTool },
		messages: [{
			role: "system",
			content: systemPrompt
		}, ...await convertToModelMessages(reqJson.messages ?? [], { convertDataPart(part) {
			if (part.type === "data-client") return {
				type: "text",
				text: `[Client Context: ${JSON.stringify(part.data)}]`
			};
		} })],
		toolChoice: "auto"
	}).toUIMessageStreamResponse();
}
var searchTool = tool({
	description: "Search the docs content and return raw JSON results.",
	inputSchema: z.object({
		query: z.string(),
		limit: z.number().int().min(1).max(100).default(10)
	}),
	async execute({ query, limit }) {
		return await (await searchServer).searchAsync(query, {
			limit,
			merge: true,
			enrich: true
		});
	}
});
//#endregion
//#region app/llms/mdx.ts
var mdx_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader });
async function loader({ params }) {
	const slugs = params["*"].split("/").filter((v) => v.length > 0);
	slugs.pop();
	const page = source.getPage(slugs);
	if (!page) return new Response("not found", { status: 404 });
	return new Response(await getLLMText(page), { headers: { "Content-Type": "text/markdown" } });
}
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-BOs3nnv5.js",
		"imports": [
			"/assets/chunk-0oqf_uz2.js",
			"/assets/react-dom-CZ6l4fHb.js",
			"/assets/chunk-OE4NN4TA-Ds2r0y7r.js",
			"/assets/jsx-runtime-CEHt124i.js",
			"/assets/preload-helper-CsoeaaUJ.js"
		],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-Bj4fd5tN.js",
			"imports": [
				"/assets/chunk-0oqf_uz2.js",
				"/assets/react-dom-CZ6l4fHb.js",
				"/assets/chunk-OE4NN4TA-Ds2r0y7r.js",
				"/assets/jsx-runtime-CEHt124i.js",
				"/assets/preload-helper-CsoeaaUJ.js",
				"/assets/layout.shared-Csui7Iol.js",
				"/assets/not-found-qaHNfPm6.js",
				"/assets/search-DrtYd0fP.js",
				"/assets/home-CQF_KCfq.js"
			],
			"css": ["/assets/root-CFN3ZMVS.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-D9tcPgg9.js",
			"imports": [
				"/assets/chunk-0oqf_uz2.js",
				"/assets/layout.shared-Csui7Iol.js",
				"/assets/home-CQF_KCfq.js",
				"/assets/chunk-OE4NN4TA-Ds2r0y7r.js",
				"/assets/jsx-runtime-CEHt124i.js",
				"/assets/search-DrtYd0fP.js",
				"/assets/react-dom-CZ6l4fHb.js",
				"/assets/preload-helper-CsoeaaUJ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs": {
			"id": "routes/docs",
			"parentId": "root",
			"path": "docs/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs-DnWtJ-JK.js",
			"imports": [
				"/assets/chunk-0oqf_uz2.js",
				"/assets/preload-helper-CsoeaaUJ.js",
				"/assets/layout.shared-Csui7Iol.js",
				"/assets/search-DrtYd0fP.js",
				"/assets/lib-EscvZMbX.js",
				"/assets/remark-BE1Fa08F.js",
				"/assets/ccount-DGTG5r07.js",
				"/assets/react-dom-CZ6l4fHb.js",
				"/assets/chunk-OE4NN4TA-Ds2r0y7r.js",
				"/assets/jsx-runtime-CEHt124i.js",
				"/assets/space-separated-tokens-DWDIDpwR.js",
				"/assets/zwitch-Cd9udWPz.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/search": {
			"id": "routes/search",
			"parentId": "root",
			"path": "api/search",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/search-CdVchr7F.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/og.docs": {
			"id": "routes/og.docs",
			"parentId": "root",
			"path": "og/docs/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/og.docs-Cxkvj_x5.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"llms/index": {
			"id": "llms/index",
			"parentId": "root",
			"path": "llms.txt",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/index-BeCyRfH9.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"llms/full": {
			"id": "llms/full",
			"parentId": "root",
			"path": "llms-full.txt",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/full-B337hFS4.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/api/chat": {
			"id": "routes/api/chat",
			"parentId": "root",
			"path": "api/chat",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": true,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/chat-BJ4XF5Ie.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"llms/mdx": {
			"id": "llms/mdx",
			"parentId": "root",
			"path": "llms.mdx/docs/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/mdx-Cht8J32b.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/not-found": {
			"id": "routes/not-found",
			"parentId": "root",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/not-found-Dnx2XvDY.js",
			"imports": [
				"/assets/not-found-qaHNfPm6.js",
				"/assets/chunk-0oqf_uz2.js",
				"/assets/layout.shared-Csui7Iol.js",
				"/assets/search-DrtYd0fP.js",
				"/assets/home-CQF_KCfq.js",
				"/assets/chunk-OE4NN4TA-Ds2r0y7r.js",
				"/assets/jsx-runtime-CEHt124i.js",
				"/assets/react-dom-CZ6l4fHb.js",
				"/assets/preload-helper-CsoeaaUJ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-214e5db9.js",
	"version": "214e5db9",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"unstable_passThroughRequests": false,
	"unstable_subResourceIntegrity": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": true,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [
	"/",
	"/llms.txt",
	"/llms-full.txt",
	"/api/chat",
	"/docs/changelog",
	"/og/docs/changelog/image.webp",
	"/docs/faq",
	"/og/docs/faq/image.webp",
	"/docs",
	"/og/docs/image.webp",
	"/docs/guides/data-fetching",
	"/og/docs/guides/data-fetching/image.webp",
	"/docs/guides/pagination",
	"/og/docs/guides/pagination/image.webp",
	"/docs/guides/rate-limiting",
	"/og/docs/guides/rate-limiting/image.webp",
	"/docs/getting-started/installation",
	"/og/docs/getting-started/installation/image.webp",
	"/docs/getting-started/project-structure",
	"/og/docs/getting-started/project-structure/image.webp",
	"/docs/getting-started/quickstart",
	"/og/docs/getting-started/quickstart/image.webp",
	"/docs/core-concepts/authentication",
	"/og/docs/core-concepts/authentication/image.webp",
	"/docs/core-concepts/configuration",
	"/og/docs/core-concepts/configuration/image.webp",
	"/docs/core-concepts/error-handling",
	"/og/docs/core-concepts/error-handling/image.webp",
	"/docs/api-reference/client",
	"/og/docs/api-reference/client/image.webp",
	"/docs/api-reference/endpoints",
	"/og/docs/api-reference/endpoints/image.webp",
	"/docs/api-reference/webhooks",
	"/og/docs/api-reference/webhooks/image.webp"
];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/docs": {
		id: "routes/docs",
		parentId: "root",
		path: "docs/*",
		index: void 0,
		caseSensitive: void 0,
		module: docs_exports
	},
	"routes/search": {
		id: "routes/search",
		parentId: "root",
		path: "api/search",
		index: void 0,
		caseSensitive: void 0,
		module: search_exports
	},
	"routes/og.docs": {
		id: "routes/og.docs",
		parentId: "root",
		path: "og/docs/*",
		index: void 0,
		caseSensitive: void 0,
		module: og_docs_exports
	},
	"llms/index": {
		id: "llms/index",
		parentId: "root",
		path: "llms.txt",
		index: void 0,
		caseSensitive: void 0,
		module: llms_exports
	},
	"llms/full": {
		id: "llms/full",
		parentId: "root",
		path: "llms-full.txt",
		index: void 0,
		caseSensitive: void 0,
		module: full_exports
	},
	"routes/api/chat": {
		id: "routes/api/chat",
		parentId: "root",
		path: "api/chat",
		index: void 0,
		caseSensitive: void 0,
		module: chat_exports
	},
	"llms/mdx": {
		id: "llms/mdx",
		parentId: "root",
		path: "llms.mdx/docs/*",
		index: void 0,
		caseSensitive: void 0,
		module: mdx_exports
	},
	"routes/not-found": {
		id: "routes/not-found",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: not_found_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
