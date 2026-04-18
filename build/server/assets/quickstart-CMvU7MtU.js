import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/getting-started/quickstart.mdx?collection=docs
var quickstart_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Quick Start",
	"description": "Make your first API call with the Voltus SDK in under 5 minutes.",
	"icon": "Zap"
};
var _markdown = "\n\nThis guide will take you from zero to your first successful API call in just a few minutes. By the end, you'll have a working client, fetched live data from the Voltus platform, and created your first resource. No prior experience with the SDK is required.\n\nIntroduction [#introduction]\n\nThe Voltus SDK is designed to feel natural to JavaScript and TypeScript developers. If you've ever used a library like Stripe's SDK or the AWS SDK, the patterns will be immediately familiar. You create a client, call methods on it, and get back typed responses. Every method is async, every error is structured, and every response follows a consistent shape.\n\nHow It Works [#how-it-works]\n\nUnder the hood, the SDK wraps the Voltus REST API in a clean, type-safe interface. When you call `client.resources.list()`, the SDK constructs an HTTP request, sends it to the API, parses the response, and returns a fully typed JavaScript object. It also handles authentication headers, retry logic, rate limiting, and error parsing automatically.\n\nWhat You'll Build [#what-youll-build]\n\nBy the end of this tutorial, you'll have a working script that connects to the Voltus API, retrieves a list of resources, creates a new resource, updates it, and then cleans up by deleting it. These four operations — list, create, update, delete — form the foundation of every integration.\n\nStep 1 — Initialize the Client [#step-1--initialize-the-client]\n\nThe first thing every application needs is a configured client instance. This is the single object through which all your API interactions will flow.\n\nCreate the Client Module [#create-the-client-module]\n\nCreate a new file called `client.ts` in your project. Import the `VoltusClient` class from the SDK and create a new instance, passing your API key from the environment variable. Export this instance so other files can import and use it without creating their own clients.\n\nConfiguration Options [#configuration-options]\n\nThe client accepts several optional settings beyond the API key. You can set the `environment` to `sandbox` for testing, adjust the `timeout` for slow networks, or change the `retries` count for flaky connections. For now, the defaults are perfectly fine — you can always adjust them later as your needs evolve.\n\nStep 2 — Fetch Resources [#step-2--fetch-resources]\n\nWith the client ready, you can start reading data from the platform. List operations are the most common starting point for any integration.\n\nMaking the Request [#making-the-request]\n\nCall `client.resources.list()` to fetch the first page of resources. The response object contains two properties — `data`, which is an array of resource objects, and `pagination`, which tells you the total count, current page size, and whether more pages are available. Each resource in the array has an `id`, `name`, `description`, `status`, `tags`, and timestamp fields.\n\nUnderstanding the Response [#understanding-the-response]\n\nThe pagination object follows a consistent pattern across every list endpoint in the SDK. The `total` field tells you how many records exist in total, `limit` is how many were returned in this page, `offset` is where this page started, and `hasMore` indicates whether there are additional pages to fetch. This consistent structure means you only need to learn the pattern once.\n\nStep 3 — Create a Resource [#step-3--create-a-resource]\n\nReading data is useful, but most integrations also need to write data back to the platform. Creating a resource demonstrates the SDK's mutation capabilities.\n\nBuilding the Payload [#building-the-payload]\n\nCall `client.resources.create()` with an object containing the fields for your new resource. The only required field is `name` — everything else is optional. You can include a `description`, an array of `tags` for organization, and a `metadata` object for storing arbitrary key-value pairs that are specific to your application.\n\nHandling the Response [#handling-the-response]\n\nThe create method returns the newly created resource with all of its server-generated fields populated — including the unique `id`, the `status` which defaults to `draft`, and the `createdAt` and `updatedAt` timestamps. You can use the returned `id` immediately for subsequent operations like updates or deletions.\n\nStep 4 — Update and Delete [#step-4--update-and-delete]\n\nThe final operations complete the CRUD lifecycle. Updating lets you modify existing resources, and deleting removes them permanently.\n\nUpdating Fields [#updating-fields]\n\nCall `client.resources.update()` with the resource ID and an object containing only the fields you want to change. You don't need to send the entire resource — the SDK uses PATCH semantics, so only the specified fields are modified and everything else remains unchanged. The method returns the full updated resource so you can verify the changes.\n\nDeleting a Resource [#deleting-a-resource]\n\nCall `client.resources.delete()` with just the resource ID. The method returns void on success and throws a `NotFoundError` if the resource doesn't exist. Deletion is permanent and cannot be undone, so make sure you're targeting the correct resource before calling this method in production code.\n\nNext Steps [#next-steps]\n\nNow that you've completed the basic CRUD operations, you have a solid foundation for building any integration with the Voltus platform.\n\nRecommended Reading [#recommended-reading]\n\nHead to the Authentication guide to learn about API key scopes, OAuth flows, and token management. Then check out the Error Handling page to understand how to gracefully handle failures in production. Finally, the Guides section covers real-world patterns like pagination, caching, and rate limit management that will help you scale your integration.\n\nJoin the Community [#join-the-community]\n\nIf you have questions or want to share what you're building, join our community Discord where other developers discuss patterns, share code snippets, and help each other troubleshoot issues. We also love to see what people build with the SDK, so feel free to tag us on Twitter with your projects.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "This guide will take you from zero to your first successful API call in just a few minutes. By the end, you'll have a working client, fetched live data from the Voltus platform, and created your first resource. No prior experience with the SDK is required."
		},
		{
			"heading": "introduction",
			"content": "The Voltus SDK is designed to feel natural to JavaScript and TypeScript developers. If you've ever used a library like Stripe's SDK or the AWS SDK, the patterns will be immediately familiar. You create a client, call methods on it, and get back typed responses. Every method is async, every error is structured, and every response follows a consistent shape."
		},
		{
			"heading": "how-it-works",
			"content": "Under the hood, the SDK wraps the Voltus REST API in a clean, type-safe interface. When you call `client.resources.list()`, the SDK constructs an HTTP request, sends it to the API, parses the response, and returns a fully typed JavaScript object. It also handles authentication headers, retry logic, rate limiting, and error parsing automatically."
		},
		{
			"heading": "what-youll-build",
			"content": "By the end of this tutorial, you'll have a working script that connects to the Voltus API, retrieves a list of resources, creates a new resource, updates it, and then cleans up by deleting it. These four operations — list, create, update, delete — form the foundation of every integration."
		},
		{
			"heading": "step-1--initialize-the-client",
			"content": "The first thing every application needs is a configured client instance. This is the single object through which all your API interactions will flow."
		},
		{
			"heading": "create-the-client-module",
			"content": "Create a new file called `client.ts` in your project. Import the `VoltusClient` class from the SDK and create a new instance, passing your API key from the environment variable. Export this instance so other files can import and use it without creating their own clients."
		},
		{
			"heading": "configuration-options",
			"content": "The client accepts several optional settings beyond the API key. You can set the `environment` to `sandbox` for testing, adjust the `timeout` for slow networks, or change the `retries` count for flaky connections. For now, the defaults are perfectly fine — you can always adjust them later as your needs evolve."
		},
		{
			"heading": "step-2--fetch-resources",
			"content": "With the client ready, you can start reading data from the platform. List operations are the most common starting point for any integration."
		},
		{
			"heading": "making-the-request",
			"content": "Call `client.resources.list()` to fetch the first page of resources. The response object contains two properties — `data`, which is an array of resource objects, and `pagination`, which tells you the total count, current page size, and whether more pages are available. Each resource in the array has an `id`, `name`, `description`, `status`, `tags`, and timestamp fields."
		},
		{
			"heading": "understanding-the-response",
			"content": "The pagination object follows a consistent pattern across every list endpoint in the SDK. The `total` field tells you how many records exist in total, `limit` is how many were returned in this page, `offset` is where this page started, and `hasMore` indicates whether there are additional pages to fetch. This consistent structure means you only need to learn the pattern once."
		},
		{
			"heading": "step-3--create-a-resource",
			"content": "Reading data is useful, but most integrations also need to write data back to the platform. Creating a resource demonstrates the SDK's mutation capabilities."
		},
		{
			"heading": "building-the-payload",
			"content": "Call `client.resources.create()` with an object containing the fields for your new resource. The only required field is `name` — everything else is optional. You can include a `description`, an array of `tags` for organization, and a `metadata` object for storing arbitrary key-value pairs that are specific to your application."
		},
		{
			"heading": "handling-the-response",
			"content": "The create method returns the newly created resource with all of its server-generated fields populated — including the unique `id`, the `status` which defaults to `draft`, and the `createdAt` and `updatedAt` timestamps. You can use the returned `id` immediately for subsequent operations like updates or deletions."
		},
		{
			"heading": "step-4--update-and-delete",
			"content": "The final operations complete the CRUD lifecycle. Updating lets you modify existing resources, and deleting removes them permanently."
		},
		{
			"heading": "updating-fields",
			"content": "Call `client.resources.update()` with the resource ID and an object containing only the fields you want to change. You don't need to send the entire resource — the SDK uses PATCH semantics, so only the specified fields are modified and everything else remains unchanged. The method returns the full updated resource so you can verify the changes."
		},
		{
			"heading": "deleting-a-resource",
			"content": "Call `client.resources.delete()` with just the resource ID. The method returns void on success and throws a `NotFoundError` if the resource doesn't exist. Deletion is permanent and cannot be undone, so make sure you're targeting the correct resource before calling this method in production code."
		},
		{
			"heading": "next-steps",
			"content": "Now that you've completed the basic CRUD operations, you have a solid foundation for building any integration with the Voltus platform."
		},
		{
			"heading": "recommended-reading",
			"content": "Head to the Authentication guide to learn about API key scopes, OAuth flows, and token management. Then check out the Error Handling page to understand how to gracefully handle failures in production. Finally, the Guides section covers real-world patterns like pagination, caching, and rate limit management that will help you scale your integration."
		},
		{
			"heading": "join-the-community",
			"content": "If you have questions or want to share what you're building, join our community Discord where other developers discuss patterns, share code snippets, and help each other troubleshoot issues. We also love to see what people build with the SDK, so feel free to tag us on Twitter with your projects."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "how-it-works",
			"content": "How It Works"
		},
		{
			"id": "what-youll-build",
			"content": "What You'll Build"
		},
		{
			"id": "step-1--initialize-the-client",
			"content": "Step 1 — Initialize the Client"
		},
		{
			"id": "create-the-client-module",
			"content": "Create the Client Module"
		},
		{
			"id": "configuration-options",
			"content": "Configuration Options"
		},
		{
			"id": "step-2--fetch-resources",
			"content": "Step 2 — Fetch Resources"
		},
		{
			"id": "making-the-request",
			"content": "Making the Request"
		},
		{
			"id": "understanding-the-response",
			"content": "Understanding the Response"
		},
		{
			"id": "step-3--create-a-resource",
			"content": "Step 3 — Create a Resource"
		},
		{
			"id": "building-the-payload",
			"content": "Building the Payload"
		},
		{
			"id": "handling-the-response",
			"content": "Handling the Response"
		},
		{
			"id": "step-4--update-and-delete",
			"content": "Step 4 — Update and Delete"
		},
		{
			"id": "updating-fields",
			"content": "Updating Fields"
		},
		{
			"id": "deleting-a-resource",
			"content": "Deleting a Resource"
		},
		{
			"id": "next-steps",
			"content": "Next Steps"
		},
		{
			"id": "recommended-reading",
			"content": "Recommended Reading"
		},
		{
			"id": "join-the-community",
			"content": "Join the Community"
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
		url: "#how-it-works",
		title: jsx(Fragment, { children: "How It Works" })
	},
	{
		depth: 3,
		url: "#what-youll-build",
		title: jsx(Fragment, { children: "What You'll Build" })
	},
	{
		depth: 2,
		url: "#step-1--initialize-the-client",
		title: jsx(Fragment, { children: "Step 1 — Initialize the Client" })
	},
	{
		depth: 3,
		url: "#create-the-client-module",
		title: jsx(Fragment, { children: "Create the Client Module" })
	},
	{
		depth: 3,
		url: "#configuration-options",
		title: jsx(Fragment, { children: "Configuration Options" })
	},
	{
		depth: 2,
		url: "#step-2--fetch-resources",
		title: jsx(Fragment, { children: "Step 2 — Fetch Resources" })
	},
	{
		depth: 3,
		url: "#making-the-request",
		title: jsx(Fragment, { children: "Making the Request" })
	},
	{
		depth: 3,
		url: "#understanding-the-response",
		title: jsx(Fragment, { children: "Understanding the Response" })
	},
	{
		depth: 2,
		url: "#step-3--create-a-resource",
		title: jsx(Fragment, { children: "Step 3 — Create a Resource" })
	},
	{
		depth: 3,
		url: "#building-the-payload",
		title: jsx(Fragment, { children: "Building the Payload" })
	},
	{
		depth: 3,
		url: "#handling-the-response",
		title: jsx(Fragment, { children: "Handling the Response" })
	},
	{
		depth: 2,
		url: "#step-4--update-and-delete",
		title: jsx(Fragment, { children: "Step 4 — Update and Delete" })
	},
	{
		depth: 3,
		url: "#updating-fields",
		title: jsx(Fragment, { children: "Updating Fields" })
	},
	{
		depth: 3,
		url: "#deleting-a-resource",
		title: jsx(Fragment, { children: "Deleting a Resource" })
	},
	{
		depth: 2,
		url: "#next-steps",
		title: jsx(Fragment, { children: "Next Steps" })
	},
	{
		depth: 3,
		url: "#recommended-reading",
		title: jsx(Fragment, { children: "Recommended Reading" })
	},
	{
		depth: 3,
		url: "#join-the-community",
		title: jsx(Fragment, { children: "Join the Community" })
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
		jsx(_components.p, { children: "This guide will take you from zero to your first successful API call in just a few minutes. By the end, you'll have a working client, fetched live data from the Voltus platform, and created your first resource. No prior experience with the SDK is required." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "The Voltus SDK is designed to feel natural to JavaScript and TypeScript developers. If you've ever used a library like Stripe's SDK or the AWS SDK, the patterns will be immediately familiar. You create a client, call methods on it, and get back typed responses. Every method is async, every error is structured, and every response follows a consistent shape." }),
		"\n",
		jsx(_components.h3, {
			id: "how-it-works",
			children: "How It Works"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Under the hood, the SDK wraps the Voltus REST API in a clean, type-safe interface. When you call ",
			jsx(_components.code, { children: "client.resources.list()" }),
			", the SDK constructs an HTTP request, sends it to the API, parses the response, and returns a fully typed JavaScript object. It also handles authentication headers, retry logic, rate limiting, and error parsing automatically."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "what-youll-build",
			children: "What You'll Build"
		}),
		"\n",
		jsx(_components.p, { children: "By the end of this tutorial, you'll have a working script that connects to the Voltus API, retrieves a list of resources, creates a new resource, updates it, and then cleans up by deleting it. These four operations — list, create, update, delete — form the foundation of every integration." }),
		"\n",
		jsx(_components.h2, {
			id: "step-1--initialize-the-client",
			children: "Step 1 — Initialize the Client"
		}),
		"\n",
		jsx(_components.p, { children: "The first thing every application needs is a configured client instance. This is the single object through which all your API interactions will flow." }),
		"\n",
		jsx(_components.h3, {
			id: "create-the-client-module",
			children: "Create the Client Module"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create a new file called ",
			jsx(_components.code, { children: "client.ts" }),
			" in your project. Import the ",
			jsx(_components.code, { children: "VoltusClient" }),
			" class from the SDK and create a new instance, passing your API key from the environment variable. Export this instance so other files can import and use it without creating their own clients."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "configuration-options",
			children: "Configuration Options"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The client accepts several optional settings beyond the API key. You can set the ",
			jsx(_components.code, { children: "environment" }),
			" to ",
			jsx(_components.code, { children: "sandbox" }),
			" for testing, adjust the ",
			jsx(_components.code, { children: "timeout" }),
			" for slow networks, or change the ",
			jsx(_components.code, { children: "retries" }),
			" count for flaky connections. For now, the defaults are perfectly fine — you can always adjust them later as your needs evolve."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "step-2--fetch-resources",
			children: "Step 2 — Fetch Resources"
		}),
		"\n",
		jsx(_components.p, { children: "With the client ready, you can start reading data from the platform. List operations are the most common starting point for any integration." }),
		"\n",
		jsx(_components.h3, {
			id: "making-the-request",
			children: "Making the Request"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "client.resources.list()" }),
			" to fetch the first page of resources. The response object contains two properties — ",
			jsx(_components.code, { children: "data" }),
			", which is an array of resource objects, and ",
			jsx(_components.code, { children: "pagination" }),
			", which tells you the total count, current page size, and whether more pages are available. Each resource in the array has an ",
			jsx(_components.code, { children: "id" }),
			", ",
			jsx(_components.code, { children: "name" }),
			", ",
			jsx(_components.code, { children: "description" }),
			", ",
			jsx(_components.code, { children: "status" }),
			", ",
			jsx(_components.code, { children: "tags" }),
			", and timestamp fields."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "understanding-the-response",
			children: "Understanding the Response"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The pagination object follows a consistent pattern across every list endpoint in the SDK. The ",
			jsx(_components.code, { children: "total" }),
			" field tells you how many records exist in total, ",
			jsx(_components.code, { children: "limit" }),
			" is how many were returned in this page, ",
			jsx(_components.code, { children: "offset" }),
			" is where this page started, and ",
			jsx(_components.code, { children: "hasMore" }),
			" indicates whether there are additional pages to fetch. This consistent structure means you only need to learn the pattern once."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "step-3--create-a-resource",
			children: "Step 3 — Create a Resource"
		}),
		"\n",
		jsx(_components.p, { children: "Reading data is useful, but most integrations also need to write data back to the platform. Creating a resource demonstrates the SDK's mutation capabilities." }),
		"\n",
		jsx(_components.h3, {
			id: "building-the-payload",
			children: "Building the Payload"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "client.resources.create()" }),
			" with an object containing the fields for your new resource. The only required field is ",
			jsx(_components.code, { children: "name" }),
			" — everything else is optional. You can include a ",
			jsx(_components.code, { children: "description" }),
			", an array of ",
			jsx(_components.code, { children: "tags" }),
			" for organization, and a ",
			jsx(_components.code, { children: "metadata" }),
			" object for storing arbitrary key-value pairs that are specific to your application."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "handling-the-response",
			children: "Handling the Response"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The create method returns the newly created resource with all of its server-generated fields populated — including the unique ",
			jsx(_components.code, { children: "id" }),
			", the ",
			jsx(_components.code, { children: "status" }),
			" which defaults to ",
			jsx(_components.code, { children: "draft" }),
			", and the ",
			jsx(_components.code, { children: "createdAt" }),
			" and ",
			jsx(_components.code, { children: "updatedAt" }),
			" timestamps. You can use the returned ",
			jsx(_components.code, { children: "id" }),
			" immediately for subsequent operations like updates or deletions."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "step-4--update-and-delete",
			children: "Step 4 — Update and Delete"
		}),
		"\n",
		jsx(_components.p, { children: "The final operations complete the CRUD lifecycle. Updating lets you modify existing resources, and deleting removes them permanently." }),
		"\n",
		jsx(_components.h3, {
			id: "updating-fields",
			children: "Updating Fields"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "client.resources.update()" }),
			" with the resource ID and an object containing only the fields you want to change. You don't need to send the entire resource — the SDK uses PATCH semantics, so only the specified fields are modified and everything else remains unchanged. The method returns the full updated resource so you can verify the changes."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "deleting-a-resource",
			children: "Deleting a Resource"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "client.resources.delete()" }),
			" with just the resource ID. The method returns void on success and throws a ",
			jsx(_components.code, { children: "NotFoundError" }),
			" if the resource doesn't exist. Deletion is permanent and cannot be undone, so make sure you're targeting the correct resource before calling this method in production code."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		jsx(_components.p, { children: "Now that you've completed the basic CRUD operations, you have a solid foundation for building any integration with the Voltus platform." }),
		"\n",
		jsx(_components.h3, {
			id: "recommended-reading",
			children: "Recommended Reading"
		}),
		"\n",
		jsx(_components.p, { children: "Head to the Authentication guide to learn about API key scopes, OAuth flows, and token management. Then check out the Error Handling page to understand how to gracefully handle failures in production. Finally, the Guides section covers real-world patterns like pagination, caching, and rate limit management that will help you scale your integration." }),
		"\n",
		jsx(_components.h3, {
			id: "join-the-community",
			children: "Join the Community"
		}),
		"\n",
		jsx(_components.p, { children: "If you have questions or want to share what you're building, join our community Discord where other developers discuss patterns, share code snippets, and help each other troubleshoot issues. We also love to see what people build with the SDK, so feel free to tag us on Twitter with your projects." })
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
export { structuredData as a, quickstart_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
