import { d as useRouter, i as I18nLabel, n as buttonVariants, o as useI18n, r as cn, t as useOnChange } from "./use-on-change-aerThbX6.js";
import * as JsxRuntime from "react/jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Fragment as Fragment$1, createContext, use, useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { ChevronRight, Hash, SearchIcon } from "lucide-react";
import scrollIntoView from "scroll-into-view-if-needed";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { visit } from "unist-util-visit";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@radix-ui/react-dialog";
import { VFile } from "vfile";
import rehypeRaw from "rehype-raw";
//#region node_modules/fumadocs-core/dist/content/md.js
function createMarkdownRenderer({ rehypePlugins = [], remarkPlugins = [], remarkRehypeOptions } = {}) {
	const processor = remark().use(remarkPlugins).use(remarkRehype, remarkRehypeOptions).use(rehypePlugins);
	const cache = {};
	const promises = {};
	function render(tree, file, props) {
		return toJsxRuntime(tree, {
			development: false,
			filePath: file.path,
			components: props.components,
			...JsxRuntime
		});
	}
	function parse(file, _props) {
		return processor.parse(file);
	}
	return {
		Markdown(props) {
			const { async = false, children } = props;
			const file = new VFile(children);
			const key = String(file.value);
			if (async) {
				promises[key] ??= processor.run(parse(file, props), file);
				return render(use(promises[key]), file, props);
			}
			cache[key] ??= processor.runSync(parse(file, props), file);
			return render(cache[key], file, props);
		},
		async MarkdownServer(props) {
			const file = new VFile(props.children);
			return render(await processor.run(parse(file, props), file), file, props);
		}
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/dialog/search.js
var RootContext = createContext(null);
var ListContext = createContext(null);
var TagsListContext = createContext(null);
var PreContext = createContext(false);
var mdRenderer = createMarkdownRenderer({
	remarkRehypeOptions: { allowDangerousHtml: true },
	rehypePlugins: [rehypeRaw, rehypeCustomElements]
});
var mdComponents = {
	mark(props) {
		return /* @__PURE__ */ jsx("span", {
			...props,
			className: "text-fd-primary underline"
		});
	},
	a: "span",
	p(props) {
		return /* @__PURE__ */ jsx("p", {
			...props,
			className: "min-w-0"
		});
	},
	strong(props) {
		return /* @__PURE__ */ jsx("strong", {
			...props,
			className: "text-fd-accent-foreground font-medium"
		});
	},
	code(props) {
		if (use(PreContext)) return /* @__PURE__ */ jsx("code", {
			...props,
			className: "mask-[linear-gradient(to_bottom,white,white_30px,transparent_80px)]"
		});
		return /* @__PURE__ */ jsx("code", {
			...props,
			className: "border rounded-md px-px bg-fd-secondary text-fd-secondary-foreground"
		});
	},
	custom({ _tagName = "fragment", children, ...rest }) {
		return /* @__PURE__ */ jsxs("span", {
			className: "inline-flex max-w-full items-center border p-0.5 rounded-md bg-fd-card text-fd-card-foreground divide-x divide-fd-border",
			children: [
				/* @__PURE__ */ jsx("code", {
					className: "rounded-sm px-0.5 me-1 bg-fd-primary font-medium text-xs text-fd-primary-foreground border-none",
					children: _tagName
				}),
				Object.entries(rest).map(([k, v]) => {
					if (typeof v !== "string") return;
					return /* @__PURE__ */ jsxs("code", {
						className: "truncate text-xs text-fd-muted-foreground px-1",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-fd-card-foreground",
							children: [k, ": "]
						}), v]
					}, k);
				}),
				children && /* @__PURE__ */ jsx("span", {
					className: "ps-1",
					children
				})
			]
		});
	},
	pre(props) {
		return /* @__PURE__ */ jsx("pre", {
			...props,
			className: cn("flex flex-col border rounded-md my-0.5 p-2 bg-fd-secondary text-fd-secondary-foreground max-h-20 overflow-hidden", props.className),
			children: /* @__PURE__ */ jsx(PreContext, {
				value: true,
				children: props.children
			})
		});
	}
};
function rehypeCustomElements() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "element" && document.createElement(node.tagName) instanceof HTMLUnknownElement) {
				node.properties._tagName = node.tagName;
				node.tagName = "custom";
			}
		});
	};
}
function SearchDialog({ open, onOpenChange, search, onSearchChange, isLoading = false, onSelect: onSelectProp, children }) {
	const router = useRouter();
	const onOpenChangeCallback = useRef(onOpenChange);
	onOpenChangeCallback.current = onOpenChange;
	const onSearchChangeCallback = useRef(onSearchChange);
	onSearchChangeCallback.current = onSearchChange;
	const onSelect = (item) => {
		if (item.type === "action") item.onSelect();
		else if (item.external) window.open(item.url, "_blank")?.focus();
		else router.push(item.url);
		onOpenChange(false);
		onSelectProp?.(item);
	};
	const onSelectCallback = useRef(onSelect);
	onSelectCallback.current = onSelect;
	return /* @__PURE__ */ jsx(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsx(RootContext, {
			value: useMemo(() => ({
				open,
				search,
				isLoading,
				onOpenChange: (v) => onOpenChangeCallback.current(v),
				onSearchChange: (v) => onSearchChangeCallback.current(v),
				onSelect: (v) => onSelectCallback.current(v)
			}), [
				isLoading,
				open,
				search
			]),
			children
		})
	});
}
function SearchDialogHeader(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("flex flex-row items-center gap-2 p-3", props.className)
	});
}
function SearchDialogInput(props) {
	const { text } = useI18n();
	const { search, onSearchChange } = useSearch();
	return /* @__PURE__ */ jsx("input", {
		...props,
		value: search,
		onChange: (e) => onSearchChange(e.target.value),
		placeholder: text.search,
		className: "w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none"
	});
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
	const { onOpenChange } = useSearch();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: () => onOpenChange(false),
		className: cn(buttonVariants({
			color: "outline",
			size: "sm",
			className: "font-mono text-fd-muted-foreground"
		}), className),
		...props,
		children
	});
}
function SearchDialogFooter(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("bg-fd-secondary/50 p-3 empty:hidden", props.className)
	});
}
function SearchDialogOverlay(props) {
	return /* @__PURE__ */ jsx(DialogOverlay, {
		...props,
		className: cn("fixed inset-0 z-50 backdrop-blur-xs bg-fd-overlay data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out", props.className)
	});
}
function SearchDialogContent({ children, ...props }) {
	const { text } = useI18n();
	return /* @__PURE__ */ jsxs(DialogContent, {
		"aria-describedby": void 0,
		...props,
		className: cn("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-xl border bg-fd-popover text-fd-popover-foreground shadow-2xl shadow-black/50 overflow-hidden data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", props.className),
		children: [/* @__PURE__ */ jsx(DialogTitle, {
			className: "hidden",
			children: text.search
		}), children]
	});
}
function SearchDialogList({ items = null, Empty = () => /* @__PURE__ */ jsx("div", {
	className: "py-12 text-center text-sm text-fd-muted-foreground",
	children: /* @__PURE__ */ jsx(I18nLabel, { label: "searchNoResult" })
}), Item = (props) => /* @__PURE__ */ jsx(SearchDialogListItem, { ...props }), ...props }) {
	const ref = useRef(null);
	const { onSelect } = useSearch();
	const [active, setActive] = useState(() => items && items.length > 0 ? items[0].id : null);
	const onKey = useEffectEvent((e) => {
		if (!items || e.isComposing) return;
		if (e.key === "ArrowDown" || e.key == "ArrowUp") {
			let idx = items.findIndex((item) => item.id === active);
			if (idx === -1) idx = 0;
			else if (e.key === "ArrowDown") idx++;
			else idx--;
			setActive(items.at(idx % items.length)?.id ?? null);
			e.preventDefault();
		}
		if (e.key === "Enter") {
			const selected = items.find((item) => item.id === active);
			if (selected) onSelect(selected);
			e.preventDefault();
		}
	});
	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new ResizeObserver(() => {
			const viewport = element.firstElementChild;
			element.style.setProperty("--fd-animated-height", `${viewport.clientHeight}px`);
		});
		const viewport = element.firstElementChild;
		if (viewport) observer.observe(viewport);
		window.addEventListener("keydown", onKey);
		return () => {
			observer.disconnect();
			window.removeEventListener("keydown", onKey);
		};
	}, []);
	useOnChange(items, () => {
		if (items && items.length > 0) setActive(items[0].id);
	});
	return /* @__PURE__ */ jsx("div", {
		...props,
		ref,
		"data-empty": items === null,
		className: cn("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className),
		children: /* @__PURE__ */ jsx("div", {
			className: cn("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"),
			children: /* @__PURE__ */ jsxs(ListContext, {
				value: useMemo(() => ({
					active,
					setActive
				}), [active]),
				children: [items?.length === 0 && Empty(), items?.map((item) => /* @__PURE__ */ jsx(Fragment$1, { children: Item({
					item,
					onClick: () => onSelect(item)
				}) }, item.id))]
			})
		})
	});
}
function SearchDialogListItem({ item, className, children, renderMarkdown = (s) => /* @__PURE__ */ jsx(mdRenderer.Markdown, {
	components: mdComponents,
	children: s
}), renderHighlights: _, ...props }) {
	const { active: activeId, setActive } = useSearchList();
	const active = item.id === activeId;
	if (item.type === "action") children ??= item.node;
	else children ??= /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "inline-flex items-center text-fd-muted-foreground text-xs empty:hidden",
			children: item.breadcrumbs?.map((item, i) => /* @__PURE__ */ jsxs(Fragment$1, { children: [i > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "size-4 rtl:rotate-180" }), item] }, i))
		}),
		item.type !== "page" && /* @__PURE__ */ jsx("div", {
			role: "none",
			className: "absolute start-3 inset-y-0 w-px bg-fd-border"
		}),
		item.type === "heading" && /* @__PURE__ */ jsx(Hash, { className: "absolute start-6 top-2.5 size-4 text-fd-muted-foreground" }),
		/* @__PURE__ */ jsx("div", {
			className: cn("min-w-0", item.type === "text" && "ps-4", item.type === "heading" && "ps-8", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80"),
			children: typeof item.content === "string" ? renderMarkdown(item.content) : item.content
		})
	] });
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		ref: useCallback((element) => {
			if (active && element) scrollIntoView(element, {
				scrollMode: "if-needed",
				block: "nearest",
				boundary: element.parentElement
			});
		}, [active]),
		"aria-selected": active,
		className: cn("relative select-none shrink-0 px-2.5 py-2 text-start text-sm overflow-hidden rounded-lg", active && "bg-fd-accent text-fd-accent-foreground", className),
		onPointerMove: () => setActive(item.id),
		...props,
		children
	});
}
function SearchDialogIcon(props) {
	const { isLoading } = useSearch();
	return /* @__PURE__ */ jsx(SearchIcon, {
		...props,
		className: cn("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className)
	});
}
var itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", { variants: { active: { true: "bg-fd-accent text-fd-accent-foreground" } } });
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
	const onTagChangeCallback = useRef(onTagChange);
	onTagChangeCallback.current = onTagChange;
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("flex items-center gap-1 flex-wrap", props.className),
		children: /* @__PURE__ */ jsx(TagsListContext, {
			value: useMemo(() => ({
				value: tag,
				onValueChange: (v) => onTagChangeCallback.current(v),
				allowClear
			}), [allowClear, tag]),
			children: props.children
		})
	});
}
function TagsListItem({ value, className, ...props }) {
	const { onValueChange, value: selectedValue, allowClear } = useTagsList();
	const selected = value === selectedValue;
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"data-active": selected,
		className: cn(itemVariants({
			active: selected,
			className
		})),
		onClick: () => onValueChange(selected && allowClear ? void 0 : value),
		tabIndex: -1,
		...props,
		children: props.children
	});
}
function useSearch() {
	const ctx = use(RootContext);
	if (!ctx) throw new Error("Missing <SearchDialog />");
	return ctx;
}
function useTagsList() {
	const ctx = use(TagsListContext);
	if (!ctx) throw new Error("Missing <TagsList />");
	return ctx;
}
function useSearchList() {
	const ctx = use(ListContext);
	if (!ctx) throw new Error("Missing <SearchDialogList />");
	return ctx;
}
//#endregion
//#region node_modules/fumadocs-core/dist/search/client.js
function useDebounce(value, delayMs = 1e3) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		if (delayMs === 0) return;
		const handler = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delayMs);
		return () => clearTimeout(handler);
	}, [delayMs, value]);
	if (delayMs === 0) return value;
	return debouncedValue;
}
var promiseMap = {};
/**
* Provide a hook to query different official search clients.
*
* Note: it will re-query when its parameters changed, make sure to define `deps` array if you encounter rendering issues.
*/
function useDocsSearch(clientOptions, deps) {
	const { delayMs = 100, allowEmpty = false, ...clientRest } = clientOptions;
	const [search, setSearch] = useState("");
	const [results, setResults] = useState("empty");
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const debouncedValue = useDebounce(search, delayMs);
	const onStart = useRef(void 0);
	let client;
	if ("type" in clientRest) switch (clientRest.type) {
		case "fetch": {
			const { fetchClient } = use(promiseMap[clientRest.type] ??= import("./fetch-CacjNWCK.js"));
			client = fetchClient(clientRest);
			break;
		}
		case "algolia": {
			const { algoliaClient } = use(promiseMap[clientRest.type] ??= import("./algolia-D9bEyXv3.js"));
			client = algoliaClient(clientRest);
			break;
		}
		case "orama-cloud": {
			const { oramaCloudClient } = use(promiseMap[clientRest.type] ??= import("./orama-cloud-CpcaI30Y.js"));
			client = oramaCloudClient(clientRest);
			break;
		}
		case "orama-cloud-legacy": {
			const { oramaCloudLegacyClient } = use(promiseMap[clientRest.type] ??= import("./orama-cloud-legacy-C1fZ3wWc.js"));
			client = oramaCloudLegacyClient(clientRest);
			break;
		}
		case "mixedbread": {
			const { mixedbreadClient } = use(promiseMap[clientRest.type] ??= import("./mixedbread-6U-tCXlc.js"));
			client = mixedbreadClient(clientRest);
			break;
		}
		case "static": {
			const { oramaStaticClient } = use(promiseMap[clientRest.type] ??= import("./orama-static-DYCqjsgU.js"));
			client = oramaStaticClient(clientRest);
			break;
		}
		default: throw new Error("unknown search client");
	}
	else client = clientRest.client;
	useOnChange([deps ?? client.deps, debouncedValue], () => {
		if (onStart.current) {
			onStart.current();
			onStart.current = void 0;
		}
		setIsLoading(true);
		let interrupt = false;
		onStart.current = () => {
			interrupt = true;
		};
		async function run() {
			if (debouncedValue.length === 0 && !allowEmpty) return "empty";
			return client.search(debouncedValue);
		}
		run().then((res) => {
			if (interrupt) return;
			setError(void 0);
			setResults(res);
		}).catch((err) => {
			setError(err);
		}).finally(() => {
			setIsLoading(false);
		});
	});
	return {
		search,
		setSearch,
		query: {
			isLoading,
			data: results,
			error
		}
	};
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/dialog/search-default.js
function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = "fetch", allowClear = false, links = [], footer, ...props }) {
	const { locale } = useI18n();
	const [tag, setTag] = useState(defaultTag);
	const { search, setSearch, query } = useDocsSearch(type === "fetch" ? {
		type: "fetch",
		api,
		locale,
		tag,
		delayMs
	} : {
		type: "static",
		from: api,
		locale,
		tag,
		delayMs
	});
	const defaultItems = useMemo(() => {
		if (links.length === 0) return null;
		return links.map(([name, link]) => ({
			type: "page",
			id: name,
			content: name,
			url: link
		}));
	}, [links]);
	useOnChange(defaultTag, (v) => {
		setTag(v);
	});
	return /* @__PURE__ */ jsxs(SearchDialog, {
		search,
		onSearchChange: setSearch,
		isLoading: query.isLoading,
		...props,
		children: [
			/* @__PURE__ */ jsx(SearchDialogOverlay, {}),
			/* @__PURE__ */ jsxs(SearchDialogContent, { children: [/* @__PURE__ */ jsxs(SearchDialogHeader, { children: [
				/* @__PURE__ */ jsx(SearchDialogIcon, {}),
				/* @__PURE__ */ jsx(SearchDialogInput, {}),
				/* @__PURE__ */ jsx(SearchDialogClose, {})
			] }), /* @__PURE__ */ jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }),
			/* @__PURE__ */ jsxs(SearchDialogFooter, { children: [tags.length > 0 && /* @__PURE__ */ jsx(TagsList, {
				tag,
				onTagChange: setTag,
				allowClear,
				children: tags.map((tag) => /* @__PURE__ */ jsx(TagsListItem, {
					value: tag.value,
					children: tag.name
				}, tag.value))
			}), footer] })
		]
	});
}
//#endregion
export { DefaultSearchDialog as default };
