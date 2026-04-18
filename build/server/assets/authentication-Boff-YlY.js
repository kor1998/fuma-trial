import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/core-concepts/authentication.mdx?collection=docs
var authentication_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Authentication",
	"description": "Learn how to authenticate with the Voltus API using API keys and OAuth tokens.",
	"icon": "Lock"
};
var _markdown = "\n\nAuthentication is the foundation of every interaction with the Voltus platform. Before your application can read or write any data, it needs to prove its identity. The SDK makes this seamless — you pass your credentials once during client initialization, and every subsequent request is automatically authenticated.\n\nIntroduction [#introduction]\n\nThe Voltus API supports two authentication methods — API keys for server-side applications and OAuth 2.0 for user-facing integrations. Both methods are fully supported by the SDK, and you can switch between them without changing any of your data-fetching code.\n\nChoosing a Method [#choosing-a-method]\n\nIf your application runs on a server and acts with its own identity, use an API key. If your application acts on behalf of individual users who need to grant permission, use OAuth 2.0. Most integrations start with API keys because they're simpler to set up, and migrate to OAuth later if user-level authentication becomes necessary.\n\nSecurity Principles [#security-principles]\n\nRegardless of which method you use, never expose credentials in client-side code, version control, or logs. Treat your API key like a password — store it in environment variables, rotate it periodically, and revoke it immediately if it's ever compromised.\n\nAPI Keys [#api-keys]\n\nAPI keys are the simplest and most common way to authenticate with the Voltus API. You generate a key in the dashboard, pass it to the SDK, and you're ready to make requests.\n\nKey Types [#key-types]\n\nVoltus issues three types of API keys. Secret keys start with `vlt_sk_` and grant full read-write access — use these only on the server. Public keys start with `vlt_pk_` and are restricted to read-only operations — these are safe for client-side code. Test keys start with `vlt_test_` and only work against the sandbox environment — use these during development.\n\nUsing Keys in the SDK [#using-keys-in-the-sdk]\n\nPass your API key to the `VoltusClient` constructor and the SDK handles everything else. It attaches the key as a Bearer token in the Authorization header of every request, validates the key format at initialization time, and throws a clear error if the key is malformed or missing.\n\nOAuth 2.0 [#oauth-20]\n\nFor applications that act on behalf of users, the SDK supports the full OAuth 2.0 authorization code flow with automatic token management.\n\nThe Authorization Flow [#the-authorization-flow]\n\nFirst, generate an authorization URL using `client.auth.getAuthorizationUrl()` with the scopes your application needs. Redirect the user to this URL — they'll see a consent screen showing what permissions your app is requesting. After they approve, Voltus redirects back to your callback URL with an authorization code that you exchange for access tokens.\n\nToken Lifecycle [#token-lifecycle]\n\nOnce authenticated, the SDK manages token expiration and refresh automatically. When an access token is about to expire, the SDK uses the refresh token to obtain a new one before your next API call. You can subscribe to token refresh events with `client.auth.onTokenRefresh()` if you need to persist new tokens to your database.\n\nScopes [#scopes]\n\nEvery credential is associated with a set of scopes that define what it can access. Understanding scopes helps you follow the principle of least privilege.\n\nAvailable Scopes [#available-scopes]\n\nScopes follow a `resource:action` pattern — `resources:read` lets you list and get resources, `resources:write` lets you create, update, and delete them. Other scopes include `webhooks:manage`, `users:read`, and `analytics:read`. Always request the minimum set your application actually needs.\n\nHandling Permission Errors [#handling-permission-errors]\n\nIf your application attempts an operation outside its granted scopes, the SDK throws an `AuthorizationError` with a message explaining which scope is missing. This makes debugging straightforward — you'll know exactly what to add to your API key or OAuth request to resolve the issue.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Authentication is the foundation of every interaction with the Voltus platform. Before your application can read or write any data, it needs to prove its identity. The SDK makes this seamless — you pass your credentials once during client initialization, and every subsequent request is automatically authenticated."
		},
		{
			"heading": "introduction",
			"content": "The Voltus API supports two authentication methods — API keys for server-side applications and OAuth 2.0 for user-facing integrations. Both methods are fully supported by the SDK, and you can switch between them without changing any of your data-fetching code."
		},
		{
			"heading": "choosing-a-method",
			"content": "If your application runs on a server and acts with its own identity, use an API key. If your application acts on behalf of individual users who need to grant permission, use OAuth 2.0. Most integrations start with API keys because they're simpler to set up, and migrate to OAuth later if user-level authentication becomes necessary."
		},
		{
			"heading": "security-principles",
			"content": "Regardless of which method you use, never expose credentials in client-side code, version control, or logs. Treat your API key like a password — store it in environment variables, rotate it periodically, and revoke it immediately if it's ever compromised."
		},
		{
			"heading": "api-keys",
			"content": "API keys are the simplest and most common way to authenticate with the Voltus API. You generate a key in the dashboard, pass it to the SDK, and you're ready to make requests."
		},
		{
			"heading": "key-types",
			"content": "Voltus issues three types of API keys. Secret keys start with `vlt_sk_` and grant full read-write access — use these only on the server. Public keys start with `vlt_pk_` and are restricted to read-only operations — these are safe for client-side code. Test keys start with `vlt_test_` and only work against the sandbox environment — use these during development."
		},
		{
			"heading": "using-keys-in-the-sdk",
			"content": "Pass your API key to the `VoltusClient` constructor and the SDK handles everything else. It attaches the key as a Bearer token in the Authorization header of every request, validates the key format at initialization time, and throws a clear error if the key is malformed or missing."
		},
		{
			"heading": "oauth-20",
			"content": "For applications that act on behalf of users, the SDK supports the full OAuth 2.0 authorization code flow with automatic token management."
		},
		{
			"heading": "the-authorization-flow",
			"content": "First, generate an authorization URL using `client.auth.getAuthorizationUrl()` with the scopes your application needs. Redirect the user to this URL — they'll see a consent screen showing what permissions your app is requesting. After they approve, Voltus redirects back to your callback URL with an authorization code that you exchange for access tokens."
		},
		{
			"heading": "token-lifecycle",
			"content": "Once authenticated, the SDK manages token expiration and refresh automatically. When an access token is about to expire, the SDK uses the refresh token to obtain a new one before your next API call. You can subscribe to token refresh events with `client.auth.onTokenRefresh()` if you need to persist new tokens to your database."
		},
		{
			"heading": "scopes",
			"content": "Every credential is associated with a set of scopes that define what it can access. Understanding scopes helps you follow the principle of least privilege."
		},
		{
			"heading": "available-scopes",
			"content": "Scopes follow a `resource:action` pattern — `resources:read` lets you list and get resources, `resources:write` lets you create, update, and delete them. Other scopes include `webhooks:manage`, `users:read`, and `analytics:read`. Always request the minimum set your application actually needs."
		},
		{
			"heading": "handling-permission-errors",
			"content": "If your application attempts an operation outside its granted scopes, the SDK throws an `AuthorizationError` with a message explaining which scope is missing. This makes debugging straightforward — you'll know exactly what to add to your API key or OAuth request to resolve the issue."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "choosing-a-method",
			"content": "Choosing a Method"
		},
		{
			"id": "security-principles",
			"content": "Security Principles"
		},
		{
			"id": "api-keys",
			"content": "API Keys"
		},
		{
			"id": "key-types",
			"content": "Key Types"
		},
		{
			"id": "using-keys-in-the-sdk",
			"content": "Using Keys in the SDK"
		},
		{
			"id": "oauth-20",
			"content": "OAuth 2.0"
		},
		{
			"id": "the-authorization-flow",
			"content": "The Authorization Flow"
		},
		{
			"id": "token-lifecycle",
			"content": "Token Lifecycle"
		},
		{
			"id": "scopes",
			"content": "Scopes"
		},
		{
			"id": "available-scopes",
			"content": "Available Scopes"
		},
		{
			"id": "handling-permission-errors",
			"content": "Handling Permission Errors"
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
		url: "#choosing-a-method",
		title: jsx(Fragment, { children: "Choosing a Method" })
	},
	{
		depth: 3,
		url: "#security-principles",
		title: jsx(Fragment, { children: "Security Principles" })
	},
	{
		depth: 2,
		url: "#api-keys",
		title: jsx(Fragment, { children: "API Keys" })
	},
	{
		depth: 3,
		url: "#key-types",
		title: jsx(Fragment, { children: "Key Types" })
	},
	{
		depth: 3,
		url: "#using-keys-in-the-sdk",
		title: jsx(Fragment, { children: "Using Keys in the SDK" })
	},
	{
		depth: 2,
		url: "#oauth-20",
		title: jsx(Fragment, { children: "OAuth 2.0" })
	},
	{
		depth: 3,
		url: "#the-authorization-flow",
		title: jsx(Fragment, { children: "The Authorization Flow" })
	},
	{
		depth: 3,
		url: "#token-lifecycle",
		title: jsx(Fragment, { children: "Token Lifecycle" })
	},
	{
		depth: 2,
		url: "#scopes",
		title: jsx(Fragment, { children: "Scopes" })
	},
	{
		depth: 3,
		url: "#available-scopes",
		title: jsx(Fragment, { children: "Available Scopes" })
	},
	{
		depth: 3,
		url: "#handling-permission-errors",
		title: jsx(Fragment, { children: "Handling Permission Errors" })
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
		jsx(_components.p, { children: "Authentication is the foundation of every interaction with the Voltus platform. Before your application can read or write any data, it needs to prove its identity. The SDK makes this seamless — you pass your credentials once during client initialization, and every subsequent request is automatically authenticated." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "The Voltus API supports two authentication methods — API keys for server-side applications and OAuth 2.0 for user-facing integrations. Both methods are fully supported by the SDK, and you can switch between them without changing any of your data-fetching code." }),
		"\n",
		jsx(_components.h3, {
			id: "choosing-a-method",
			children: "Choosing a Method"
		}),
		"\n",
		jsx(_components.p, { children: "If your application runs on a server and acts with its own identity, use an API key. If your application acts on behalf of individual users who need to grant permission, use OAuth 2.0. Most integrations start with API keys because they're simpler to set up, and migrate to OAuth later if user-level authentication becomes necessary." }),
		"\n",
		jsx(_components.h3, {
			id: "security-principles",
			children: "Security Principles"
		}),
		"\n",
		jsx(_components.p, { children: "Regardless of which method you use, never expose credentials in client-side code, version control, or logs. Treat your API key like a password — store it in environment variables, rotate it periodically, and revoke it immediately if it's ever compromised." }),
		"\n",
		jsx(_components.h2, {
			id: "api-keys",
			children: "API Keys"
		}),
		"\n",
		jsx(_components.p, { children: "API keys are the simplest and most common way to authenticate with the Voltus API. You generate a key in the dashboard, pass it to the SDK, and you're ready to make requests." }),
		"\n",
		jsx(_components.h3, {
			id: "key-types",
			children: "Key Types"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Voltus issues three types of API keys. Secret keys start with ",
			jsx(_components.code, { children: "vlt_sk_" }),
			" and grant full read-write access — use these only on the server. Public keys start with ",
			jsx(_components.code, { children: "vlt_pk_" }),
			" and are restricted to read-only operations — these are safe for client-side code. Test keys start with ",
			jsx(_components.code, { children: "vlt_test_" }),
			" and only work against the sandbox environment — use these during development."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "using-keys-in-the-sdk",
			children: "Using Keys in the SDK"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Pass your API key to the ",
			jsx(_components.code, { children: "VoltusClient" }),
			" constructor and the SDK handles everything else. It attaches the key as a Bearer token in the Authorization header of every request, validates the key format at initialization time, and throws a clear error if the key is malformed or missing."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "oauth-20",
			children: "OAuth 2.0"
		}),
		"\n",
		jsx(_components.p, { children: "For applications that act on behalf of users, the SDK supports the full OAuth 2.0 authorization code flow with automatic token management." }),
		"\n",
		jsx(_components.h3, {
			id: "the-authorization-flow",
			children: "The Authorization Flow"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"First, generate an authorization URL using ",
			jsx(_components.code, { children: "client.auth.getAuthorizationUrl()" }),
			" with the scopes your application needs. Redirect the user to this URL — they'll see a consent screen showing what permissions your app is requesting. After they approve, Voltus redirects back to your callback URL with an authorization code that you exchange for access tokens."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "token-lifecycle",
			children: "Token Lifecycle"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Once authenticated, the SDK manages token expiration and refresh automatically. When an access token is about to expire, the SDK uses the refresh token to obtain a new one before your next API call. You can subscribe to token refresh events with ",
			jsx(_components.code, { children: "client.auth.onTokenRefresh()" }),
			" if you need to persist new tokens to your database."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "scopes",
			children: "Scopes"
		}),
		"\n",
		jsx(_components.p, { children: "Every credential is associated with a set of scopes that define what it can access. Understanding scopes helps you follow the principle of least privilege." }),
		"\n",
		jsx(_components.h3, {
			id: "available-scopes",
			children: "Available Scopes"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Scopes follow a ",
			jsx(_components.code, { children: "resource:action" }),
			" pattern — ",
			jsx(_components.code, { children: "resources:read" }),
			" lets you list and get resources, ",
			jsx(_components.code, { children: "resources:write" }),
			" lets you create, update, and delete them. Other scopes include ",
			jsx(_components.code, { children: "webhooks:manage" }),
			", ",
			jsx(_components.code, { children: "users:read" }),
			", and ",
			jsx(_components.code, { children: "analytics:read" }),
			". Always request the minimum set your application actually needs."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "handling-permission-errors",
			children: "Handling Permission Errors"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"If your application attempts an operation outside its granted scopes, the SDK throws an ",
			jsx(_components.code, { children: "AuthorizationError" }),
			" with a message explaining which scope is missing. This makes debugging straightforward — you'll know exactly what to add to your API key or OAuth request to resolve the issue."
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, authentication_exports as r, MDXContent as t };
