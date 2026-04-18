import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/index.mdx?collection=docs
var docs_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Voltus SDK Documentation",
	"description": "Build powerful integrations with the Voltus SDK.",
	"icon": "Home"
};
var _markdown = "\n\nWelcome to the **Voltus SDK** — a modern, developer-friendly toolkit designed to help you integrate with the Voltus platform effortlessly. Whether you're building internal tools, customer-facing dashboards, or automating workflows, this SDK gives you everything you need to move fast without sacrificing reliability.\n\nIntroduction [#introduction]\n\nWe built this SDK because we believe developer experience matters. Every method is fully typed, every error is structured, and every edge case has been thought through. You shouldn't have to dig through raw HTTP responses or guess at payload shapes — the SDK handles all of that for you, so you can focus on building what actually matters to your users.\n\nWhat is Voltus? [#what-is-voltus]\n\nVoltus is a platform for managing resources, content entries, and integrations through a unified API. Whether you're building a headless CMS, a data pipeline, or an internal admin dashboard, the Voltus API provides the building blocks you need. The SDK wraps this API in a clean, type-safe interface that feels native to JavaScript and TypeScript.\n\nWho is this for? [#who-is-this-for]\n\nThis documentation is written for developers who want to integrate the Voltus API into their applications. You should be comfortable with JavaScript or TypeScript and familiar with concepts like async/await, environment variables, and REST APIs. No prior experience with Voltus is required — we'll walk you through everything from installation to production deployment.\n\nGetting Started [#getting-started]\n\nThe fastest way to get up and running is to install the SDK, create a client with your API key, and make your first API call. The entire process takes less than five minutes, and by the end you'll have live data flowing from the Voltus platform into your application.\n\nQuick Install [#quick-install]\n\nOpen your terminal and run `npm install @voltus/sdk` to add the package to your project. The SDK has zero runtime dependencies, so it won't bloat your bundle or introduce supply chain concerns. Once installed, import the `VoltusClient` class and you're ready to go.\n\nYour First API Call [#your-first-api-call]\n\nCreate a new client instance with your API key, then call `client.resources.list()` to fetch your first page of data. The response includes a `data` array with your resources and a `pagination` object with metadata about the total count and available pages. That's it — you've just made your first successful API call.\n\nExplore the Docs [#explore-the-docs]\n\nThis documentation is organized into four main sections, each designed to take you deeper into the SDK's capabilities. Start from the beginning if you're new, or jump directly to the section that matches your current needs.\n\nSections Overview [#sections-overview]\n\n**Getting Started** covers installation, your first API call, and project structure best practices. **Core Concepts** dives into authentication, configuration, and error handling patterns. **API Reference** provides detailed method signatures, parameters, and return types for every part of the SDK. And **Guides** offers practical patterns for pagination, caching, and rate limit management.\n\nNeed Help? [#need-help]\n\nIf you run into issues, check the FAQ page for answers to common questions. For bugs or feature requests, open an issue on our GitHub repository. Our team actively monitors issues and typically responds within 24 hours. You can also reach out through the community Discord for real-time help from other developers.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Welcome to the **Voltus SDK** — a modern, developer-friendly toolkit designed to help you integrate with the Voltus platform effortlessly. Whether you're building internal tools, customer-facing dashboards, or automating workflows, this SDK gives you everything you need to move fast without sacrificing reliability."
		},
		{
			"heading": "introduction",
			"content": "We built this SDK because we believe developer experience matters. Every method is fully typed, every error is structured, and every edge case has been thought through. You shouldn't have to dig through raw HTTP responses or guess at payload shapes — the SDK handles all of that for you, so you can focus on building what actually matters to your users."
		},
		{
			"heading": "what-is-voltus",
			"content": "Voltus is a platform for managing resources, content entries, and integrations through a unified API. Whether you're building a headless CMS, a data pipeline, or an internal admin dashboard, the Voltus API provides the building blocks you need. The SDK wraps this API in a clean, type-safe interface that feels native to JavaScript and TypeScript."
		},
		{
			"heading": "who-is-this-for",
			"content": "This documentation is written for developers who want to integrate the Voltus API into their applications. You should be comfortable with JavaScript or TypeScript and familiar with concepts like async/await, environment variables, and REST APIs. No prior experience with Voltus is required — we'll walk you through everything from installation to production deployment."
		},
		{
			"heading": "getting-started",
			"content": "The fastest way to get up and running is to install the SDK, create a client with your API key, and make your first API call. The entire process takes less than five minutes, and by the end you'll have live data flowing from the Voltus platform into your application."
		},
		{
			"heading": "quick-install",
			"content": "Open your terminal and run `npm install @voltus/sdk` to add the package to your project. The SDK has zero runtime dependencies, so it won't bloat your bundle or introduce supply chain concerns. Once installed, import the `VoltusClient` class and you're ready to go."
		},
		{
			"heading": "your-first-api-call",
			"content": "Create a new client instance with your API key, then call `client.resources.list()` to fetch your first page of data. The response includes a `data` array with your resources and a `pagination` object with metadata about the total count and available pages. That's it — you've just made your first successful API call."
		},
		{
			"heading": "explore-the-docs",
			"content": "This documentation is organized into four main sections, each designed to take you deeper into the SDK's capabilities. Start from the beginning if you're new, or jump directly to the section that matches your current needs."
		},
		{
			"heading": "sections-overview",
			"content": "**Getting Started** covers installation, your first API call, and project structure best practices. **Core Concepts** dives into authentication, configuration, and error handling patterns. **API Reference** provides detailed method signatures, parameters, and return types for every part of the SDK. And **Guides** offers practical patterns for pagination, caching, and rate limit management."
		},
		{
			"heading": "need-help",
			"content": "If you run into issues, check the FAQ page for answers to common questions. For bugs or feature requests, open an issue on our GitHub repository. Our team actively monitors issues and typically responds within 24 hours. You can also reach out through the community Discord for real-time help from other developers."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "what-is-voltus",
			"content": "What is Voltus?"
		},
		{
			"id": "who-is-this-for",
			"content": "Who is this for?"
		},
		{
			"id": "getting-started",
			"content": "Getting Started"
		},
		{
			"id": "quick-install",
			"content": "Quick Install"
		},
		{
			"id": "your-first-api-call",
			"content": "Your First API Call"
		},
		{
			"id": "explore-the-docs",
			"content": "Explore the Docs"
		},
		{
			"id": "sections-overview",
			"content": "Sections Overview"
		},
		{
			"id": "need-help",
			"content": "Need Help?"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#introduction",
		title: jsx(Fragment, { children: "Introduction" })
	},
	{
		depth: 3,
		url: "#what-is-voltus",
		title: jsx(Fragment, { children: "What is Voltus?" })
	},
	{
		depth: 3,
		url: "#who-is-this-for",
		title: jsx(Fragment, { children: "Who is this for?" })
	},
	{
		depth: 2,
		url: "#getting-started",
		title: jsx(Fragment, { children: "Getting Started" })
	},
	{
		depth: 3,
		url: "#quick-install",
		title: jsx(Fragment, { children: "Quick Install" })
	},
	{
		depth: 3,
		url: "#your-first-api-call",
		title: jsx(Fragment, { children: "Your First API Call" })
	},
	{
		depth: 2,
		url: "#explore-the-docs",
		title: jsx(Fragment, { children: "Explore the Docs" })
	},
	{
		depth: 3,
		url: "#sections-overview",
		title: jsx(Fragment, { children: "Sections Overview" })
	},
	{
		depth: 3,
		url: "#need-help",
		title: jsx(Fragment, { children: "Need Help?" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		strong: "strong",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"Welcome to the ",
			jsx(_components.strong, { children: "Voltus SDK" }),
			" — a modern, developer-friendly toolkit designed to help you integrate with the Voltus platform effortlessly. Whether you're building internal tools, customer-facing dashboards, or automating workflows, this SDK gives you everything you need to move fast without sacrificing reliability."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "We built this SDK because we believe developer experience matters. Every method is fully typed, every error is structured, and every edge case has been thought through. You shouldn't have to dig through raw HTTP responses or guess at payload shapes — the SDK handles all of that for you, so you can focus on building what actually matters to your users." }),
		"\n",
		jsx(_components.h3, {
			id: "what-is-voltus",
			children: "What is Voltus?"
		}),
		"\n",
		jsx(_components.p, { children: "Voltus is a platform for managing resources, content entries, and integrations through a unified API. Whether you're building a headless CMS, a data pipeline, or an internal admin dashboard, the Voltus API provides the building blocks you need. The SDK wraps this API in a clean, type-safe interface that feels native to JavaScript and TypeScript." }),
		"\n",
		jsx(_components.h3, {
			id: "who-is-this-for",
			children: "Who is this for?"
		}),
		"\n",
		jsx(_components.p, { children: "This documentation is written for developers who want to integrate the Voltus API into their applications. You should be comfortable with JavaScript or TypeScript and familiar with concepts like async/await, environment variables, and REST APIs. No prior experience with Voltus is required — we'll walk you through everything from installation to production deployment." }),
		"\n",
		jsx(_components.h2, {
			id: "getting-started",
			children: "Getting Started"
		}),
		"\n",
		jsx(_components.p, { children: "The fastest way to get up and running is to install the SDK, create a client with your API key, and make your first API call. The entire process takes less than five minutes, and by the end you'll have live data flowing from the Voltus platform into your application." }),
		"\n",
		jsx(_components.h3, {
			id: "quick-install",
			children: "Quick Install"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Open your terminal and run ",
			jsx(_components.code, { children: "npm install @voltus/sdk" }),
			" to add the package to your project. The SDK has zero runtime dependencies, so it won't bloat your bundle or introduce supply chain concerns. Once installed, import the ",
			jsx(_components.code, { children: "VoltusClient" }),
			" class and you're ready to go."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "your-first-api-call",
			children: "Your First API Call"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create a new client instance with your API key, then call ",
			jsx(_components.code, { children: "client.resources.list()" }),
			" to fetch your first page of data. The response includes a ",
			jsx(_components.code, { children: "data" }),
			" array with your resources and a ",
			jsx(_components.code, { children: "pagination" }),
			" object with metadata about the total count and available pages. That's it — you've just made your first successful API call."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "explore-the-docs",
			children: "Explore the Docs"
		}),
		"\n",
		jsx(_components.p, { children: "This documentation is organized into four main sections, each designed to take you deeper into the SDK's capabilities. Start from the beginning if you're new, or jump directly to the section that matches your current needs." }),
		"\n",
		jsx(_components.h3, {
			id: "sections-overview",
			children: "Sections Overview"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.strong, { children: "Getting Started" }),
			" covers installation, your first API call, and project structure best practices. ",
			jsx(_components.strong, { children: "Core Concepts" }),
			" dives into authentication, configuration, and error handling patterns. ",
			jsx(_components.strong, { children: "API Reference" }),
			" provides detailed method signatures, parameters, and return types for every part of the SDK. And ",
			jsx(_components.strong, { children: "Guides" }),
			" offers practical patterns for pagination, caching, and rate limit management."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "need-help",
			children: "Need Help?"
		}),
		"\n",
		jsx(_components.p, { children: "If you run into issues, check the FAQ page for answers to common questions. For bugs or feature requests, open an issue on our GitHub repository. Our team actively monitors issues and typically responds within 24 hours. You can also reach out through the community Discord for real-time help from other developers." })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: jsx(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, docs_exports as r, MDXContent as t };
