import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/core-concepts/configuration.mdx?collection=docs
var configuration_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Configuration",
	"description": "Customize the Voltus SDK behavior with comprehensive configuration options.",
	"icon": "Settings"
};
var _markdown = "\n\nThe Voltus SDK is designed to work out of the box with sensible defaults, but nearly every aspect of its behavior can be customized. From timeouts and retry policies to custom logging and request middleware, the configuration system gives you full control without adding complexity when you don't need it.\n\nIntroduction [#introduction]\n\nMost applications will only ever set two or three configuration options — the API key and maybe the environment. But the full range of options is there for when you need precise control over the SDK's behavior in production.\n\nDesign Philosophy [#design-philosophy]\n\nWe follow the principle of \"sensible defaults, full overrides.\" Every configuration option has a default that works well for the majority of use cases. You only need to specify options when you want behavior that differs from the default. This keeps simple integrations simple while giving power users the flexibility they need.\n\nWhen to Customize [#when-to-customize]\n\nIf the SDK works well for you with just an API key, don't change anything else. Start customizing when you encounter specific needs — like setting longer timeouts for slow networks, reducing retries for time-sensitive operations, or adding middleware for observability.\n\nClient Options [#client-options]\n\nThe `VoltusClient` constructor accepts a configuration object that controls every aspect of the SDK's behavior. Here's what you can configure and why you might want to.\n\nConnection Settings [#connection-settings]\n\nThe `timeout` option controls how long the SDK waits for a response before giving up. The default is 30 seconds, which works for most operations. If you're exporting large datasets, you might increase this. If you need fast failure for user-facing requests, you might decrease it. The `connectTimeout` option separately controls how long the SDK waits to establish a connection.\n\nRetry Policy [#retry-policy]\n\nBy default, failed requests are retried up to three times with exponential backoff — one second, then two seconds, then four seconds. You can adjust the `retries` count, the `retryDelay` base interval, and the `retryBackoff` strategy. Setting `retries` to zero disables automatic retries entirely, which can be useful for idempotency-sensitive operations.\n\nMiddleware [#middleware]\n\nThe SDK's middleware system lets you hook into the request lifecycle for logging, monitoring, and custom header injection.\n\nRequest Interceptors [#request-interceptors]\n\nRegister middleware using `client.use()` with an object containing `onRequest`, `onResponse`, and `onError` handlers. The `onRequest` handler receives the full request configuration and can modify headers, log the outgoing request, or inject tracing identifiers before the request is sent.\n\nResponse Interceptors [#response-interceptors]\n\nThe `onResponse` handler receives the parsed response including status code, headers, and duration. This is the ideal place to log response times, record metrics, or trigger alerts when latency exceeds a threshold. Middleware runs in the order it's registered, so you can layer multiple concerns without them interfering with each other.\n\nEnvironment Configuration [#environment-configuration]\n\nProduction applications need different settings for different deployment stages. The SDK makes it easy to derive configuration from environment variables.\n\nDevelopment vs Production [#development-vs-production]\n\nYour development environment might use the sandbox API with verbose debug logging, while production uses the live API with minimal logging and tighter timeouts. The SDK's `environment` option switches between API endpoints, and you can combine this with a `logLevel` setting to control verbosity.\n\nConfiguration Factory [#configuration-factory]\n\nWe recommend creating a factory function that reads environment variables and returns a validated configuration object. This function becomes the single place where all environment-specific logic lives, and it can validate that required variables are present before your application starts accepting traffic.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "The Voltus SDK is designed to work out of the box with sensible defaults, but nearly every aspect of its behavior can be customized. From timeouts and retry policies to custom logging and request middleware, the configuration system gives you full control without adding complexity when you don't need it."
		},
		{
			"heading": "introduction",
			"content": "Most applications will only ever set two or three configuration options — the API key and maybe the environment. But the full range of options is there for when you need precise control over the SDK's behavior in production."
		},
		{
			"heading": "design-philosophy",
			"content": "We follow the principle of \"sensible defaults, full overrides.\" Every configuration option has a default that works well for the majority of use cases. You only need to specify options when you want behavior that differs from the default. This keeps simple integrations simple while giving power users the flexibility they need."
		},
		{
			"heading": "when-to-customize",
			"content": "If the SDK works well for you with just an API key, don't change anything else. Start customizing when you encounter specific needs — like setting longer timeouts for slow networks, reducing retries for time-sensitive operations, or adding middleware for observability."
		},
		{
			"heading": "client-options",
			"content": "The `VoltusClient` constructor accepts a configuration object that controls every aspect of the SDK's behavior. Here's what you can configure and why you might want to."
		},
		{
			"heading": "connection-settings",
			"content": "The `timeout` option controls how long the SDK waits for a response before giving up. The default is 30 seconds, which works for most operations. If you're exporting large datasets, you might increase this. If you need fast failure for user-facing requests, you might decrease it. The `connectTimeout` option separately controls how long the SDK waits to establish a connection."
		},
		{
			"heading": "retry-policy",
			"content": "By default, failed requests are retried up to three times with exponential backoff — one second, then two seconds, then four seconds. You can adjust the `retries` count, the `retryDelay` base interval, and the `retryBackoff` strategy. Setting `retries` to zero disables automatic retries entirely, which can be useful for idempotency-sensitive operations."
		},
		{
			"heading": "middleware",
			"content": "The SDK's middleware system lets you hook into the request lifecycle for logging, monitoring, and custom header injection."
		},
		{
			"heading": "request-interceptors",
			"content": "Register middleware using `client.use()` with an object containing `onRequest`, `onResponse`, and `onError` handlers. The `onRequest` handler receives the full request configuration and can modify headers, log the outgoing request, or inject tracing identifiers before the request is sent."
		},
		{
			"heading": "response-interceptors",
			"content": "The `onResponse` handler receives the parsed response including status code, headers, and duration. This is the ideal place to log response times, record metrics, or trigger alerts when latency exceeds a threshold. Middleware runs in the order it's registered, so you can layer multiple concerns without them interfering with each other."
		},
		{
			"heading": "environment-configuration",
			"content": "Production applications need different settings for different deployment stages. The SDK makes it easy to derive configuration from environment variables."
		},
		{
			"heading": "development-vs-production",
			"content": "Your development environment might use the sandbox API with verbose debug logging, while production uses the live API with minimal logging and tighter timeouts. The SDK's `environment` option switches between API endpoints, and you can combine this with a `logLevel` setting to control verbosity."
		},
		{
			"heading": "configuration-factory",
			"content": "We recommend creating a factory function that reads environment variables and returns a validated configuration object. This function becomes the single place where all environment-specific logic lives, and it can validate that required variables are present before your application starts accepting traffic."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "design-philosophy",
			"content": "Design Philosophy"
		},
		{
			"id": "when-to-customize",
			"content": "When to Customize"
		},
		{
			"id": "client-options",
			"content": "Client Options"
		},
		{
			"id": "connection-settings",
			"content": "Connection Settings"
		},
		{
			"id": "retry-policy",
			"content": "Retry Policy"
		},
		{
			"id": "middleware",
			"content": "Middleware"
		},
		{
			"id": "request-interceptors",
			"content": "Request Interceptors"
		},
		{
			"id": "response-interceptors",
			"content": "Response Interceptors"
		},
		{
			"id": "environment-configuration",
			"content": "Environment Configuration"
		},
		{
			"id": "development-vs-production",
			"content": "Development vs Production"
		},
		{
			"id": "configuration-factory",
			"content": "Configuration Factory"
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
		url: "#design-philosophy",
		title: jsx(Fragment, { children: "Design Philosophy" })
	},
	{
		depth: 3,
		url: "#when-to-customize",
		title: jsx(Fragment, { children: "When to Customize" })
	},
	{
		depth: 2,
		url: "#client-options",
		title: jsx(Fragment, { children: "Client Options" })
	},
	{
		depth: 3,
		url: "#connection-settings",
		title: jsx(Fragment, { children: "Connection Settings" })
	},
	{
		depth: 3,
		url: "#retry-policy",
		title: jsx(Fragment, { children: "Retry Policy" })
	},
	{
		depth: 2,
		url: "#middleware",
		title: jsx(Fragment, { children: "Middleware" })
	},
	{
		depth: 3,
		url: "#request-interceptors",
		title: jsx(Fragment, { children: "Request Interceptors" })
	},
	{
		depth: 3,
		url: "#response-interceptors",
		title: jsx(Fragment, { children: "Response Interceptors" })
	},
	{
		depth: 2,
		url: "#environment-configuration",
		title: jsx(Fragment, { children: "Environment Configuration" })
	},
	{
		depth: 3,
		url: "#development-vs-production",
		title: jsx(Fragment, { children: "Development vs Production" })
	},
	{
		depth: 3,
		url: "#configuration-factory",
		title: jsx(Fragment, { children: "Configuration Factory" })
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
		jsx(_components.p, { children: "The Voltus SDK is designed to work out of the box with sensible defaults, but nearly every aspect of its behavior can be customized. From timeouts and retry policies to custom logging and request middleware, the configuration system gives you full control without adding complexity when you don't need it." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "Most applications will only ever set two or three configuration options — the API key and maybe the environment. But the full range of options is there for when you need precise control over the SDK's behavior in production." }),
		"\n",
		jsx(_components.h3, {
			id: "design-philosophy",
			children: "Design Philosophy"
		}),
		"\n",
		jsx(_components.p, { children: "We follow the principle of \"sensible defaults, full overrides.\" Every configuration option has a default that works well for the majority of use cases. You only need to specify options when you want behavior that differs from the default. This keeps simple integrations simple while giving power users the flexibility they need." }),
		"\n",
		jsx(_components.h3, {
			id: "when-to-customize",
			children: "When to Customize"
		}),
		"\n",
		jsx(_components.p, { children: "If the SDK works well for you with just an API key, don't change anything else. Start customizing when you encounter specific needs — like setting longer timeouts for slow networks, reducing retries for time-sensitive operations, or adding middleware for observability." }),
		"\n",
		jsx(_components.h2, {
			id: "client-options",
			children: "Client Options"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "VoltusClient" }),
			" constructor accepts a configuration object that controls every aspect of the SDK's behavior. Here's what you can configure and why you might want to."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "connection-settings",
			children: "Connection Settings"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "timeout" }),
			" option controls how long the SDK waits for a response before giving up. The default is 30 seconds, which works for most operations. If you're exporting large datasets, you might increase this. If you need fast failure for user-facing requests, you might decrease it. The ",
			jsx(_components.code, { children: "connectTimeout" }),
			" option separately controls how long the SDK waits to establish a connection."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "retry-policy",
			children: "Retry Policy"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"By default, failed requests are retried up to three times with exponential backoff — one second, then two seconds, then four seconds. You can adjust the ",
			jsx(_components.code, { children: "retries" }),
			" count, the ",
			jsx(_components.code, { children: "retryDelay" }),
			" base interval, and the ",
			jsx(_components.code, { children: "retryBackoff" }),
			" strategy. Setting ",
			jsx(_components.code, { children: "retries" }),
			" to zero disables automatic retries entirely, which can be useful for idempotency-sensitive operations."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "middleware",
			children: "Middleware"
		}),
		"\n",
		jsx(_components.p, { children: "The SDK's middleware system lets you hook into the request lifecycle for logging, monitoring, and custom header injection." }),
		"\n",
		jsx(_components.h3, {
			id: "request-interceptors",
			children: "Request Interceptors"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Register middleware using ",
			jsx(_components.code, { children: "client.use()" }),
			" with an object containing ",
			jsx(_components.code, { children: "onRequest" }),
			", ",
			jsx(_components.code, { children: "onResponse" }),
			", and ",
			jsx(_components.code, { children: "onError" }),
			" handlers. The ",
			jsx(_components.code, { children: "onRequest" }),
			" handler receives the full request configuration and can modify headers, log the outgoing request, or inject tracing identifiers before the request is sent."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "response-interceptors",
			children: "Response Interceptors"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The ",
			jsx(_components.code, { children: "onResponse" }),
			" handler receives the parsed response including status code, headers, and duration. This is the ideal place to log response times, record metrics, or trigger alerts when latency exceeds a threshold. Middleware runs in the order it's registered, so you can layer multiple concerns without them interfering with each other."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "environment-configuration",
			children: "Environment Configuration"
		}),
		"\n",
		jsx(_components.p, { children: "Production applications need different settings for different deployment stages. The SDK makes it easy to derive configuration from environment variables." }),
		"\n",
		jsx(_components.h3, {
			id: "development-vs-production",
			children: "Development vs Production"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Your development environment might use the sandbox API with verbose debug logging, while production uses the live API with minimal logging and tighter timeouts. The SDK's ",
			jsx(_components.code, { children: "environment" }),
			" option switches between API endpoints, and you can combine this with a ",
			jsx(_components.code, { children: "logLevel" }),
			" setting to control verbosity."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "configuration-factory",
			children: "Configuration Factory"
		}),
		"\n",
		jsx(_components.p, { children: "We recommend creating a factory function that reads environment variables and returns a validated configuration object. This function becomes the single place where all environment-specific logic lives, and it can validate that required variables are present before your application starts accepting traffic." })
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, configuration_exports as r, MDXContent as t };
