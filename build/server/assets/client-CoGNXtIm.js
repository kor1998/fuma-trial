import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/api-reference/client.mdx?collection=docs
var client_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Client Reference",
	"description": "Complete API reference for the VoltusClient class and its methods.",
	"icon": "Code"
};
var _markdown = "\n\nThe `VoltusClient` class is the central object in the SDK and the starting point for every operation. This reference covers its constructor, properties, and all available resource APIs.\n\nIntroduction [#introduction]\n\nEvery interaction with the Voltus platform flows through a single client instance. Understanding how to create and configure this instance is the foundation for everything else in the SDK.\n\nCreating a Client [#creating-a-client]\n\nImport `VoltusClient` from `@voltus/sdk` and instantiate it with your configuration. The only required parameter is `apiKey`. The client validates your configuration at creation time, so any issues — like a missing key or invalid environment name — surface immediately.\n\nClient Lifecycle [#client-lifecycle]\n\nThe client manages an internal HTTP adapter with connection pooling and keep-alive. Create one instance and reuse it across your application. Multiple instances work but waste resources — each maintains its own connection pool, authentication state, and middleware chain.\n\nConstructor Options [#constructor-options]\n\nThe constructor accepts a single configuration object with several optional fields that control the client's behavior.\n\nRequired Options [#required-options]\n\nThe `apiKey` field is the only required parameter. It accepts any valid Voltus API key — secret keys starting with `vlt_sk_`, public keys with `vlt_pk_`, or test keys with `vlt_test_`. The client validates the key format during initialization and throws an error if it's malformed.\n\nOptional Settings [#optional-settings]\n\nThe `environment` field accepts `production` or `sandbox` and defaults to `production`. The `timeout` field sets the request timeout in milliseconds with a default of 30,000. The `retries` field controls the maximum retry attempts with a default of 3. The `baseUrl` field lets you point to a custom API endpoint for self-hosted deployments.\n\nResource APIs [#resource-apis]\n\nThe client exposes several resource-specific APIs as properties. Each follows the same consistent interface for CRUD operations.\n\nResources and Entries [#resources-and-entries]\n\n`client.resources` provides methods for managing resources — `list()`, `get()`, `create()`, `update()`, and `delete()`. `client.entries` follows the same pattern with an additional `publish()` method. Both return fully typed response objects with consistent pagination for list operations.\n\nUsers and Webhooks [#users-and-webhooks]\n\n`client.users` provides `me()` for the current user profile and `listApiKeys()` for key management. `client.webhooks` provides the full CRUD suite plus a `test()` method for sending test events to your endpoint. `client.analytics` gives access to usage metrics and request logs.\n\nType Definitions [#type-definitions]\n\nThe SDK exports all types so you can reference them in your own code for full type safety.\n\nResource Types [#resource-types]\n\nThe most commonly used types are `Resource`, `Entry`, `User`, and `Webhook`. Each includes an `id` string with a type-specific prefix, string fields for `name` and `description`, a `status` enum, and `Date` objects for `createdAt` and `updatedAt`. All date fields are returned as native JavaScript Date objects rather than ISO strings.\n\nUtility Types [#utility-types]\n\n`PaginatedResponse<T>` wraps list results with a `data` array and `pagination` metadata. `ClientOptions` defines the constructor configuration shape. All of these types are designed to be imported and used directly in your application's type signatures for end-to-end type safety.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The `VoltusClient` class is the central object in the SDK and the starting point for every operation. This reference covers its constructor, properties, and all available resource APIs."
		},
		{
			"heading": "introduction",
			"content": "Every interaction with the Voltus platform flows through a single client instance. Understanding how to create and configure this instance is the foundation for everything else in the SDK."
		},
		{
			"heading": "creating-a-client",
			"content": "Import `VoltusClient` from `@voltus/sdk` and instantiate it with your configuration. The only required parameter is `apiKey`. The client validates your configuration at creation time, so any issues — like a missing key or invalid environment name — surface immediately."
		},
		{
			"heading": "client-lifecycle",
			"content": "The client manages an internal HTTP adapter with connection pooling and keep-alive. Create one instance and reuse it across your application. Multiple instances work but waste resources — each maintains its own connection pool, authentication state, and middleware chain."
		},
		{
			"heading": "constructor-options",
			"content": "The constructor accepts a single configuration object with several optional fields that control the client's behavior."
		},
		{
			"heading": "required-options",
			"content": "The `apiKey` field is the only required parameter. It accepts any valid Voltus API key — secret keys starting with `vlt_sk_`, public keys with `vlt_pk_`, or test keys with `vlt_test_`. The client validates the key format during initialization and throws an error if it's malformed."
		},
		{
			"heading": "optional-settings",
			"content": "The `environment` field accepts `production` or `sandbox` and defaults to `production`. The `timeout` field sets the request timeout in milliseconds with a default of 30,000. The `retries` field controls the maximum retry attempts with a default of 3. The `baseUrl` field lets you point to a custom API endpoint for self-hosted deployments."
		},
		{
			"heading": "resource-apis",
			"content": "The client exposes several resource-specific APIs as properties. Each follows the same consistent interface for CRUD operations."
		},
		{
			"heading": "resources-and-entries",
			"content": "`client.resources` provides methods for managing resources — `list()`, `get()`, `create()`, `update()`, and `delete()`. `client.entries` follows the same pattern with an additional `publish()` method. Both return fully typed response objects with consistent pagination for list operations."
		},
		{
			"heading": "users-and-webhooks",
			"content": "`client.users` provides `me()` for the current user profile and `listApiKeys()` for key management. `client.webhooks` provides the full CRUD suite plus a `test()` method for sending test events to your endpoint. `client.analytics` gives access to usage metrics and request logs."
		},
		{
			"heading": "type-definitions",
			"content": "The SDK exports all types so you can reference them in your own code for full type safety."
		},
		{
			"heading": "resource-types",
			"content": "The most commonly used types are `Resource`, `Entry`, `User`, and `Webhook`. Each includes an `id` string with a type-specific prefix, string fields for `name` and `description`, a `status` enum, and `Date` objects for `createdAt` and `updatedAt`. All date fields are returned as native JavaScript Date objects rather than ISO strings."
		},
		{
			"heading": "utility-types",
			"content": "`PaginatedResponse<T>` wraps list results with a `data` array and `pagination` metadata. `ClientOptions` defines the constructor configuration shape. All of these types are designed to be imported and used directly in your application's type signatures for end-to-end type safety."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "creating-a-client",
			"content": "Creating a Client"
		},
		{
			"id": "client-lifecycle",
			"content": "Client Lifecycle"
		},
		{
			"id": "constructor-options",
			"content": "Constructor Options"
		},
		{
			"id": "required-options",
			"content": "Required Options"
		},
		{
			"id": "optional-settings",
			"content": "Optional Settings"
		},
		{
			"id": "resource-apis",
			"content": "Resource APIs"
		},
		{
			"id": "resources-and-entries",
			"content": "Resources and Entries"
		},
		{
			"id": "users-and-webhooks",
			"content": "Users and Webhooks"
		},
		{
			"id": "type-definitions",
			"content": "Type Definitions"
		},
		{
			"id": "resource-types",
			"content": "Resource Types"
		},
		{
			"id": "utility-types",
			"content": "Utility Types"
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
		url: "#creating-a-client",
		title: jsx(Fragment, { children: "Creating a Client" })
	},
	{
		depth: 3,
		url: "#client-lifecycle",
		title: jsx(Fragment, { children: "Client Lifecycle" })
	},
	{
		depth: 2,
		url: "#constructor-options",
		title: jsx(Fragment, { children: "Constructor Options" })
	},
	{
		depth: 3,
		url: "#required-options",
		title: jsx(Fragment, { children: "Required Options" })
	},
	{
		depth: 3,
		url: "#optional-settings",
		title: jsx(Fragment, { children: "Optional Settings" })
	},
	{
		depth: 2,
		url: "#resource-apis",
		title: jsx(Fragment, { children: "Resource APIs" })
	},
	{
		depth: 3,
		url: "#resources-and-entries",
		title: jsx(Fragment, { children: "Resources and Entries" })
	},
	{
		depth: 3,
		url: "#users-and-webhooks",
		title: jsx(Fragment, { children: "Users and Webhooks" })
	},
	{
		depth: 2,
		url: "#type-definitions",
		title: jsx(Fragment, { children: "Type Definitions" })
	},
	{
		depth: 3,
		url: "#resource-types",
		title: jsx(Fragment, { children: "Resource Types" })
	},
	{
		depth: 3,
		url: "#utility-types",
		title: jsx(Fragment, { children: "Utility Types" })
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
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "VoltusClient" }),
			" class is the central object in the SDK and the starting point for every operation. This reference covers its constructor, properties, and all available resource APIs."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "Every interaction with the Voltus platform flows through a single client instance. Understanding how to create and configure this instance is the foundation for everything else in the SDK." }),
		"\n",
		jsx(_components.h3, {
			id: "creating-a-client",
			children: "Creating a Client"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Import ",
			jsx(_components.code, { children: "VoltusClient" }),
			" from ",
			jsx(_components.code, { children: "@voltus/sdk" }),
			" and instantiate it with your configuration. The only required parameter is ",
			jsx(_components.code, { children: "apiKey" }),
			". The client validates your configuration at creation time, so any issues — like a missing key or invalid environment name — surface immediately."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "client-lifecycle",
			children: "Client Lifecycle"
		}),
		"\n",
		jsx(_components.p, { children: "The client manages an internal HTTP adapter with connection pooling and keep-alive. Create one instance and reuse it across your application. Multiple instances work but waste resources — each maintains its own connection pool, authentication state, and middleware chain." }),
		"\n",
		jsx(_components.h2, {
			id: "constructor-options",
			children: "Constructor Options"
		}),
		"\n",
		jsx(_components.p, { children: "The constructor accepts a single configuration object with several optional fields that control the client's behavior." }),
		"\n",
		jsx(_components.h3, {
			id: "required-options",
			children: "Required Options"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "apiKey" }),
			" field is the only required parameter. It accepts any valid Voltus API key — secret keys starting with ",
			jsx(_components.code, { children: "vlt_sk_" }),
			", public keys with ",
			jsx(_components.code, { children: "vlt_pk_" }),
			", or test keys with ",
			jsx(_components.code, { children: "vlt_test_" }),
			". The client validates the key format during initialization and throws an error if it's malformed."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "optional-settings",
			children: "Optional Settings"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "environment" }),
			" field accepts ",
			jsx(_components.code, { children: "production" }),
			" or ",
			jsx(_components.code, { children: "sandbox" }),
			" and defaults to ",
			jsx(_components.code, { children: "production" }),
			". The ",
			jsx(_components.code, { children: "timeout" }),
			" field sets the request timeout in milliseconds with a default of 30,000. The ",
			jsx(_components.code, { children: "retries" }),
			" field controls the maximum retry attempts with a default of 3. The ",
			jsx(_components.code, { children: "baseUrl" }),
			" field lets you point to a custom API endpoint for self-hosted deployments."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "resource-apis",
			children: "Resource APIs"
		}),
		"\n",
		jsx(_components.p, { children: "The client exposes several resource-specific APIs as properties. Each follows the same consistent interface for CRUD operations." }),
		"\n",
		jsx(_components.h3, {
			id: "resources-and-entries",
			children: "Resources and Entries"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "client.resources" }),
			" provides methods for managing resources — ",
			jsx(_components.code, { children: "list()" }),
			", ",
			jsx(_components.code, { children: "get()" }),
			", ",
			jsx(_components.code, { children: "create()" }),
			", ",
			jsx(_components.code, { children: "update()" }),
			", and ",
			jsx(_components.code, { children: "delete()" }),
			". ",
			jsx(_components.code, { children: "client.entries" }),
			" follows the same pattern with an additional ",
			jsx(_components.code, { children: "publish()" }),
			" method. Both return fully typed response objects with consistent pagination for list operations."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "users-and-webhooks",
			children: "Users and Webhooks"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "client.users" }),
			" provides ",
			jsx(_components.code, { children: "me()" }),
			" for the current user profile and ",
			jsx(_components.code, { children: "listApiKeys()" }),
			" for key management. ",
			jsx(_components.code, { children: "client.webhooks" }),
			" provides the full CRUD suite plus a ",
			jsx(_components.code, { children: "test()" }),
			" method for sending test events to your endpoint. ",
			jsx(_components.code, { children: "client.analytics" }),
			" gives access to usage metrics and request logs."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "type-definitions",
			children: "Type Definitions"
		}),
		"\n",
		jsx(_components.p, { children: "The SDK exports all types so you can reference them in your own code for full type safety." }),
		"\n",
		jsx(_components.h3, {
			id: "resource-types",
			children: "Resource Types"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The most commonly used types are ",
			jsx(_components.code, { children: "Resource" }),
			", ",
			jsx(_components.code, { children: "Entry" }),
			", ",
			jsx(_components.code, { children: "User" }),
			", and ",
			jsx(_components.code, { children: "Webhook" }),
			". Each includes an ",
			jsx(_components.code, { children: "id" }),
			" string with a type-specific prefix, string fields for ",
			jsx(_components.code, { children: "name" }),
			" and ",
			jsx(_components.code, { children: "description" }),
			", a ",
			jsx(_components.code, { children: "status" }),
			" enum, and ",
			jsx(_components.code, { children: "Date" }),
			" objects for ",
			jsx(_components.code, { children: "createdAt" }),
			" and ",
			jsx(_components.code, { children: "updatedAt" }),
			". All date fields are returned as native JavaScript Date objects rather than ISO strings."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "utility-types",
			children: "Utility Types"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "PaginatedResponse<T>" }),
			" wraps list results with a ",
			jsx(_components.code, { children: "data" }),
			" array and ",
			jsx(_components.code, { children: "pagination" }),
			" metadata. ",
			jsx(_components.code, { children: "ClientOptions" }),
			" defines the constructor configuration shape. All of these types are designed to be imported and used directly in your application's type signatures for end-to-end type safety."
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, client_exports as r, MDXContent as t };
