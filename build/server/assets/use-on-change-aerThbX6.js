import { jsx } from "react/jsx-runtime";
import { createContext, use, useContext, useMemo, useRef, useState } from "react";
import { twMerge as cn } from "tailwind-merge";
import { cva } from "class-variance-authority";
//#region node_modules/fumadocs-core/dist/framework/index.js
var notImplemented = () => {
	throw new Error("You need to wrap your application inside `FrameworkProvider`.");
};
var FrameworkContext = createContext({
	useParams: notImplemented,
	useRouter: notImplemented,
	usePathname: notImplemented
});
function FrameworkProvider({ Link, useRouter, useParams, usePathname, Image, children }) {
	return /* @__PURE__ */ jsx(FrameworkContext, {
		value: useMemo(() => ({
			usePathname,
			useRouter,
			Link,
			Image,
			useParams
		}), [
			Link,
			usePathname,
			useRouter,
			useParams,
			Image
		]),
		children
	});
}
function usePathname() {
	return use(FrameworkContext).usePathname();
}
function useRouter() {
	return use(FrameworkContext).useRouter();
}
function Image(props) {
	const { Image } = use(FrameworkContext);
	if (!Image) {
		const { src, alt, priority, ...rest } = props;
		return /* @__PURE__ */ jsx("img", {
			alt,
			src,
			fetchPriority: priority ? "high" : "auto",
			...rest
		});
	}
	return /* @__PURE__ */ jsx(Image, { ...props });
}
function Link(props) {
	const { Link } = use(FrameworkContext);
	if (!Link) {
		const { href, prefetch: _, ...rest } = props;
		return /* @__PURE__ */ jsx("a", {
			href,
			...rest
		});
	}
	return /* @__PURE__ */ jsx(Link, { ...props });
}
//#endregion
//#region node_modules/fumadocs-ui/dist/contexts/i18n.js
var defaultTranslations = {
	search: "Search",
	searchNoResult: "No results found",
	toc: "On this page",
	tocNoHeadings: "No Headings",
	lastUpdate: "Last updated on",
	chooseLanguage: "Choose a language",
	nextPage: "Next Page",
	previousPage: "Previous Page",
	chooseTheme: "Theme",
	editOnGithub: "Edit on GitHub"
};
var I18nContext = createContext({ text: { ...defaultTranslations } });
function I18nLabel(props) {
	return useI18n().text[props.label];
}
function useI18n() {
	return useContext(I18nContext);
}
function I18nProvider({ locales = [], locale, onLocaleChange, children, translations }) {
	const router = useRouter();
	const pathname = usePathname();
	const onChange = (value) => {
		if (onLocaleChange) return onLocaleChange(value);
		const segments = pathname.split("/").filter((v) => v.length > 0);
		if (segments[0] !== locale) segments.unshift(value);
		else segments[0] = value;
		router.push(`/${segments.join("/")}`);
	};
	const onChangeRef = useRef(onChange);
	onChangeRef.current = onChange;
	return /* @__PURE__ */ jsx(I18nContext, {
		value: useMemo(() => ({
			locale,
			locales,
			text: {
				...defaultTranslations,
				...translations
			},
			onChange: (v) => onChangeRef.current(v)
		}), [
			locale,
			locales,
			translations
		]),
		children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/components/ui/button.js
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
//#region node_modules/fumadocs-core/dist/utils/use-on-change.js
function isDifferent(a, b) {
	if (Array.isArray(a) && Array.isArray(b)) return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]));
	return a !== b;
}
/**
* @param value - state to watch
* @param onChange - when the state changed
* @param isUpdated - a function that determines if the state is updated
*/
function useOnChange(value, onChange, isUpdated = isDifferent) {
	const [prev, setPrev] = useState(value);
	if (isUpdated(prev, value)) {
		onChange(value, prev);
		setPrev(value);
	}
}
//#endregion
export { I18nProvider as a, Image as c, useRouter as d, I18nLabel as i, Link as l, buttonVariants as n, useI18n as o, cn as r, FrameworkProvider as s, useOnChange as t, usePathname as u };
