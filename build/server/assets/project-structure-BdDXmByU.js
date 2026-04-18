import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/getting-started/project-structure.mdx?collection=docs
var project_structure_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Project Structure",
	"description": "Recommended project structure for organizing your Voltus SDK integration.",
	"icon": "Folder"
};
var _markdown = "\n\nAs your integration grows beyond a single file, having a clear and consistent project structure becomes essential. The patterns described here represent what we've seen work well across hundreds of production integrations.\n\nIntroduction [#introduction]\n\nThere's no single \"correct\" way to organize your code when using the Voltus SDK. The patterns here are recommendations based on real-world experience, not requirements. That said, following a consistent structure will make your codebase easier to navigate, test, and maintain — especially as your team grows and more people touch the integration code.\n\nWhen Structure Matters [#when-structure-matters]\n\nFor a quick prototype or script, you can put everything in a single file and it'll work perfectly fine. But once your integration touches multiple resources, handles webhooks, manages caching, or runs in production with monitoring, having separate modules for each concern prevents your code from becoming tangled and hard to reason about.\n\nThe Recommended Layout [#the-recommended-layout]\n\nWe suggest creating a dedicated directory for your Voltus integration — something like `src/voltus/` or `lib/voltus/`. Inside this directory, you'll have separate files for the client instance, each resource type's service layer, webhook handlers, and custom type definitions. This keeps all integration-related code in one place while maintaining clean separation between concerns.\n\nClient Module [#client-module]\n\nThe most important architectural decision is where your client instance lives. A centralized client module ensures every part of your application uses the same configuration and connection pool.\n\nSingle Source of Truth [#single-source-of-truth]\n\nCreate a file called `client.ts` that initializes the `VoltusClient` with your configuration and exports it. Every other module that needs to interact with the Voltus API imports the client from this one file. This means changes to your configuration — like updating the timeout or adding middleware — only need to happen in one place.\n\nAvoiding Common Mistakes [#avoiding-common-mistakes]\n\nThe most common mistake we see is creating new client instances inline wherever they're needed. While this technically works, you end up with duplicated configuration scattered across your codebase, multiple connection pools competing for resources, and no central place to add cross-cutting concerns like logging or error handling. A single shared client instance solves all of these problems.\n\nService Layer [#service-layer]\n\nWrapping your SDK calls in service functions creates a clean separation between your API integration and the rest of your application logic.\n\nWhy Use Services [#why-use-services]\n\nInstead of calling `client.resources.list()` directly in your route handlers or React components, create functions like `getAllResources()` or `findResourceByName()` that encapsulate the business logic. Your route handler calls the service function, which handles pagination, caching, error recovery, and data transformation internally. The handler just gets back the data it needs.\n\nOrganizing Services [#organizing-services]\n\nCreate one service file per resource type — `resources.ts`, `entries.ts`, `webhooks.ts`. Each file imports the shared client and exports functions that your application code can call. This makes it easy to find the code responsible for any given operation, and it lets you add resource-specific logic like validation or caching without cluttering other parts of the codebase.\n\nConfiguration [#configuration]\n\nKeep your environment-specific settings organized and validated in a single configuration module.\n\nEnvironment Variables [#environment-variables]\n\nStore API keys, base URLs, and feature flags in environment variables and load them through a dedicated config file. This file should validate that all required variables are present at startup, so you get a clear error message immediately rather than a confusing failure deep in your application when a missing key causes an API call to fail.\n\nMulti-Environment Setup [#multi-environment-setup]\n\nFor teams working across development, staging, and production environments, create separate `.env` files for each stage. Most frameworks support this natively with files like `.env.local` and `.env.production`. The SDK's `environment` option makes it easy to switch between the production and sandbox APIs based on your deployment target.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "As your integration grows beyond a single file, having a clear and consistent project structure becomes essential. The patterns described here represent what we've seen work well across hundreds of production integrations."
		},
		{
			"heading": "introduction",
			"content": "There's no single \"correct\" way to organize your code when using the Voltus SDK. The patterns here are recommendations based on real-world experience, not requirements. That said, following a consistent structure will make your codebase easier to navigate, test, and maintain — especially as your team grows and more people touch the integration code."
		},
		{
			"heading": "when-structure-matters",
			"content": "For a quick prototype or script, you can put everything in a single file and it'll work perfectly fine. But once your integration touches multiple resources, handles webhooks, manages caching, or runs in production with monitoring, having separate modules for each concern prevents your code from becoming tangled and hard to reason about."
		},
		{
			"heading": "the-recommended-layout",
			"content": "We suggest creating a dedicated directory for your Voltus integration — something like `src/voltus/` or `lib/voltus/`. Inside this directory, you'll have separate files for the client instance, each resource type's service layer, webhook handlers, and custom type definitions. This keeps all integration-related code in one place while maintaining clean separation between concerns."
		},
		{
			"heading": "client-module",
			"content": "The most important architectural decision is where your client instance lives. A centralized client module ensures every part of your application uses the same configuration and connection pool."
		},
		{
			"heading": "single-source-of-truth",
			"content": "Create a file called `client.ts` that initializes the `VoltusClient` with your configuration and exports it. Every other module that needs to interact with the Voltus API imports the client from this one file. This means changes to your configuration — like updating the timeout or adding middleware — only need to happen in one place."
		},
		{
			"heading": "avoiding-common-mistakes",
			"content": "The most common mistake we see is creating new client instances inline wherever they're needed. While this technically works, you end up with duplicated configuration scattered across your codebase, multiple connection pools competing for resources, and no central place to add cross-cutting concerns like logging or error handling. A single shared client instance solves all of these problems."
		},
		{
			"heading": "service-layer",
			"content": "Wrapping your SDK calls in service functions creates a clean separation between your API integration and the rest of your application logic."
		},
		{
			"heading": "why-use-services",
			"content": "Instead of calling `client.resources.list()` directly in your route handlers or React components, create functions like `getAllResources()` or `findResourceByName()` that encapsulate the business logic. Your route handler calls the service function, which handles pagination, caching, error recovery, and data transformation internally. The handler just gets back the data it needs."
		},
		{
			"heading": "organizing-services",
			"content": "Create one service file per resource type — `resources.ts`, `entries.ts`, `webhooks.ts`. Each file imports the shared client and exports functions that your application code can call. This makes it easy to find the code responsible for any given operation, and it lets you add resource-specific logic like validation or caching without cluttering other parts of the codebase."
		},
		{
			"heading": "configuration",
			"content": "Keep your environment-specific settings organized and validated in a single configuration module."
		},
		{
			"heading": "environment-variables",
			"content": "Store API keys, base URLs, and feature flags in environment variables and load them through a dedicated config file. This file should validate that all required variables are present at startup, so you get a clear error message immediately rather than a confusing failure deep in your application when a missing key causes an API call to fail."
		},
		{
			"heading": "multi-environment-setup",
			"content": "For teams working across development, staging, and production environments, create separate `.env` files for each stage. Most frameworks support this natively with files like `.env.local` and `.env.production`. The SDK's `environment` option makes it easy to switch between the production and sandbox APIs based on your deployment target."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "when-structure-matters",
			"content": "When Structure Matters"
		},
		{
			"id": "the-recommended-layout",
			"content": "The Recommended Layout"
		},
		{
			"id": "client-module",
			"content": "Client Module"
		},
		{
			"id": "single-source-of-truth",
			"content": "Single Source of Truth"
		},
		{
			"id": "avoiding-common-mistakes",
			"content": "Avoiding Common Mistakes"
		},
		{
			"id": "service-layer",
			"content": "Service Layer"
		},
		{
			"id": "why-use-services",
			"content": "Why Use Services"
		},
		{
			"id": "organizing-services",
			"content": "Organizing Services"
		},
		{
			"id": "configuration",
			"content": "Configuration"
		},
		{
			"id": "environment-variables",
			"content": "Environment Variables"
		},
		{
			"id": "multi-environment-setup",
			"content": "Multi-Environment Setup"
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
		url: "#when-structure-matters",
		title: jsx(Fragment, { children: "When Structure Matters" })
	},
	{
		depth: 3,
		url: "#the-recommended-layout",
		title: jsx(Fragment, { children: "The Recommended Layout" })
	},
	{
		depth: 2,
		url: "#client-module",
		title: jsx(Fragment, { children: "Client Module" })
	},
	{
		depth: 3,
		url: "#single-source-of-truth",
		title: jsx(Fragment, { children: "Single Source of Truth" })
	},
	{
		depth: 3,
		url: "#avoiding-common-mistakes",
		title: jsx(Fragment, { children: "Avoiding Common Mistakes" })
	},
	{
		depth: 2,
		url: "#service-layer",
		title: jsx(Fragment, { children: "Service Layer" })
	},
	{
		depth: 3,
		url: "#why-use-services",
		title: jsx(Fragment, { children: "Why Use Services" })
	},
	{
		depth: 3,
		url: "#organizing-services",
		title: jsx(Fragment, { children: "Organizing Services" })
	},
	{
		depth: 2,
		url: "#configuration",
		title: jsx(Fragment, { children: "Configuration" })
	},
	{
		depth: 3,
		url: "#environment-variables",
		title: jsx(Fragment, { children: "Environment Variables" })
	},
	{
		depth: 3,
		url: "#multi-environment-setup",
		title: jsx(Fragment, { children: "Multi-Environment Setup" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		h3: "h3",
		p: "p",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsx(_components.p, { children: "As your integration grows beyond a single file, having a clear and consistent project structure becomes essential. The patterns described here represent what we've seen work well across hundreds of production integrations." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "There's no single \"correct\" way to organize your code when using the Voltus SDK. The patterns here are recommendations based on real-world experience, not requirements. That said, following a consistent structure will make your codebase easier to navigate, test, and maintain — especially as your team grows and more people touch the integration code." }),
		"\n",
		jsx(_components.h3, {
			id: "when-structure-matters",
			children: "When Structure Matters"
		}),
		"\n",
		jsx(_components.p, { children: "For a quick prototype or script, you can put everything in a single file and it'll work perfectly fine. But once your integration touches multiple resources, handles webhooks, manages caching, or runs in production with monitoring, having separate modules for each concern prevents your code from becoming tangled and hard to reason about." }),
		"\n",
		jsx(_components.h3, {
			id: "the-recommended-layout",
			children: "The Recommended Layout"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"We suggest creating a dedicated directory for your Voltus integration — something like ",
			jsx(_components.code, { children: "src/voltus/" }),
			" or ",
			jsx(_components.code, { children: "lib/voltus/" }),
			". Inside this directory, you'll have separate files for the client instance, each resource type's service layer, webhook handlers, and custom type definitions. This keeps all integration-related code in one place while maintaining clean separation between concerns."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "client-module",
			children: "Client Module"
		}),
		"\n",
		jsx(_components.p, { children: "The most important architectural decision is where your client instance lives. A centralized client module ensures every part of your application uses the same configuration and connection pool." }),
		"\n",
		jsx(_components.h3, {
			id: "single-source-of-truth",
			children: "Single Source of Truth"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create a file called ",
			jsx(_components.code, { children: "client.ts" }),
			" that initializes the ",
			jsx(_components.code, { children: "VoltusClient" }),
			" with your configuration and exports it. Every other module that needs to interact with the Voltus API imports the client from this one file. This means changes to your configuration — like updating the timeout or adding middleware — only need to happen in one place."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "avoiding-common-mistakes",
			children: "Avoiding Common Mistakes"
		}),
		"\n",
		jsx(_components.p, { children: "The most common mistake we see is creating new client instances inline wherever they're needed. While this technically works, you end up with duplicated configuration scattered across your codebase, multiple connection pools competing for resources, and no central place to add cross-cutting concerns like logging or error handling. A single shared client instance solves all of these problems." }),
		"\n",
		jsx(_components.h2, {
			id: "service-layer",
			children: "Service Layer"
		}),
		"\n",
		jsx(_components.p, { children: "Wrapping your SDK calls in service functions creates a clean separation between your API integration and the rest of your application logic." }),
		"\n",
		jsx(_components.h3, {
			id: "why-use-services",
			children: "Why Use Services"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Instead of calling ",
			jsx(_components.code, { children: "client.resources.list()" }),
			" directly in your route handlers or React components, create functions like ",
			jsx(_components.code, { children: "getAllResources()" }),
			" or ",
			jsx(_components.code, { children: "findResourceByName()" }),
			" that encapsulate the business logic. Your route handler calls the service function, which handles pagination, caching, error recovery, and data transformation internally. The handler just gets back the data it needs."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "organizing-services",
			children: "Organizing Services"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create one service file per resource type — ",
			jsx(_components.code, { children: "resources.ts" }),
			", ",
			jsx(_components.code, { children: "entries.ts" }),
			", ",
			jsx(_components.code, { children: "webhooks.ts" }),
			". Each file imports the shared client and exports functions that your application code can call. This makes it easy to find the code responsible for any given operation, and it lets you add resource-specific logic like validation or caching without cluttering other parts of the codebase."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "configuration",
			children: "Configuration"
		}),
		"\n",
		jsx(_components.p, { children: "Keep your environment-specific settings organized and validated in a single configuration module." }),
		"\n",
		jsx(_components.h3, {
			id: "environment-variables",
			children: "Environment Variables"
		}),
		"\n",
		jsx(_components.p, { children: "Store API keys, base URLs, and feature flags in environment variables and load them through a dedicated config file. This file should validate that all required variables are present at startup, so you get a clear error message immediately rather than a confusing failure deep in your application when a missing key causes an API call to fail." }),
		"\n",
		jsx(_components.h3, {
			id: "multi-environment-setup",
			children: "Multi-Environment Setup"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"For teams working across development, staging, and production environments, create separate ",
			jsx(_components.code, { children: ".env" }),
			" files for each stage. Most frameworks support this natively with files like ",
			jsx(_components.code, { children: ".env.local" }),
			" and ",
			jsx(_components.code, { children: ".env.production" }),
			". The SDK's ",
			jsx(_components.code, { children: "environment" }),
			" option makes it easy to switch between the production and sandbox APIs based on your deployment target."
		] })
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
export { structuredData as a, project_structure_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
