import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/core-concepts/error-handling.mdx?collection=docs
var error_handling_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Error Handling",
	"description": "Gracefully handle errors and edge cases in your Voltus SDK integration.",
	"icon": "AlertCircle"
};
var _markdown = "\n\nEvery API call has the potential to fail. The Voltus SDK is designed to make error handling as predictable and informative as possible, with structured error types that tell you exactly what went wrong and whether it's safe to retry.\n\nIntroduction [#introduction]\n\nInstead of throwing generic JavaScript errors with vague messages, the SDK provides a hierarchy of typed error classes. Each class corresponds to a specific category of failure and carries rich metadata for debugging.\n\nError Philosophy [#error-philosophy]\n\nWe believe errors should be actionable. Every error thrown by the SDK includes a machine-readable code for programmatic handling, a human-readable message for logging, a request ID for support inquiries, and a `retryable` flag that tells you whether retrying is worthwhile.\n\nWhen Errors Occur [#when-errors-occur]\n\nErrors can happen for many reasons — invalid credentials, missing resources, malformed input, rate limiting, network issues, or server-side problems. The SDK categorizes each scenario into a specific error type so you can handle them precisely rather than catching everything with a generic handler.\n\nError Types [#error-types]\n\nThe SDK defines a hierarchy of error classes, all extending from a base `VoltusError` class. This lets you catch all SDK errors broadly or target specific failure types.\n\nClient Errors [#client-errors]\n\n`AuthenticationError` fires when your API key is invalid or expired. `AuthorizationError` fires when your key lacks the required scope for the operation. `NotFoundError` fires when you reference a resource that doesn't exist. `ValidationError` fires when your input data fails server-side validation and includes a `fields` array describing each invalid field.\n\nServer Errors [#server-errors]\n\n`RateLimitError` fires when you've exceeded your API quota and includes a `retryAfter` property indicating how long to wait. `ServerError` fires for unexpected server-side failures and is always safe to retry. The SDK's built-in retry mechanism handles both of these automatically, but you can also catch them explicitly for custom handling.\n\nRecovery Patterns [#recovery-patterns]\n\nThe most robust applications don't just catch errors — they recover from them gracefully using established patterns.\n\nFallback Strategy [#fallback-strategy]\n\nFor non-critical operations, implement a fallback that returns cached data or a default value when an API call fails. This keeps your application functional even during temporary outages. The pattern is simple — wrap your API call in a try-catch and return the fallback value in the catch block.\n\nDead Letter Queue [#dead-letter-queue]\n\nFor operations that must eventually succeed, log failed requests with full context and move on to the next item. A separate process can retry failed operations with longer delays, or flag them for manual review. This ensures one bad record doesn't block the processing of everything behind it.\n\nGlobal Error Handling [#global-error-handling]\n\nFor cross-cutting concerns like monitoring and alerting, the SDK supports a global error handler that fires on every failure.\n\nSetting Up Monitoring [#setting-up-monitoring]\n\nCall `client.onError()` with a callback function that receives the full error object. This is the ideal place to send errors to services like Sentry or Datadog — the handler receives all metadata including the request ID, error code, and endpoint, so you can automatically enrich your error reports.\n\nBuilding Dashboards [#building-dashboards]\n\nWith structured error types flowing into your monitoring system, you can build dashboards that break down failures by type. This shows you at a glance whether you're experiencing authentication issues, hitting rate limits, or dealing with server-side problems — giving you the observability needed to maintain a healthy production integration.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Every API call has the potential to fail. The Voltus SDK is designed to make error handling as predictable and informative as possible, with structured error types that tell you exactly what went wrong and whether it's safe to retry."
		},
		{
			"heading": "introduction",
			"content": "Instead of throwing generic JavaScript errors with vague messages, the SDK provides a hierarchy of typed error classes. Each class corresponds to a specific category of failure and carries rich metadata for debugging."
		},
		{
			"heading": "error-philosophy",
			"content": "We believe errors should be actionable. Every error thrown by the SDK includes a machine-readable code for programmatic handling, a human-readable message for logging, a request ID for support inquiries, and a `retryable` flag that tells you whether retrying is worthwhile."
		},
		{
			"heading": "when-errors-occur",
			"content": "Errors can happen for many reasons — invalid credentials, missing resources, malformed input, rate limiting, network issues, or server-side problems. The SDK categorizes each scenario into a specific error type so you can handle them precisely rather than catching everything with a generic handler."
		},
		{
			"heading": "error-types",
			"content": "The SDK defines a hierarchy of error classes, all extending from a base `VoltusError` class. This lets you catch all SDK errors broadly or target specific failure types."
		},
		{
			"heading": "client-errors",
			"content": "`AuthenticationError` fires when your API key is invalid or expired. `AuthorizationError` fires when your key lacks the required scope for the operation. `NotFoundError` fires when you reference a resource that doesn't exist. `ValidationError` fires when your input data fails server-side validation and includes a `fields` array describing each invalid field."
		},
		{
			"heading": "server-errors",
			"content": "`RateLimitError` fires when you've exceeded your API quota and includes a `retryAfter` property indicating how long to wait. `ServerError` fires for unexpected server-side failures and is always safe to retry. The SDK's built-in retry mechanism handles both of these automatically, but you can also catch them explicitly for custom handling."
		},
		{
			"heading": "recovery-patterns",
			"content": "The most robust applications don't just catch errors — they recover from them gracefully using established patterns."
		},
		{
			"heading": "fallback-strategy",
			"content": "For non-critical operations, implement a fallback that returns cached data or a default value when an API call fails. This keeps your application functional even during temporary outages. The pattern is simple — wrap your API call in a try-catch and return the fallback value in the catch block."
		},
		{
			"heading": "dead-letter-queue",
			"content": "For operations that must eventually succeed, log failed requests with full context and move on to the next item. A separate process can retry failed operations with longer delays, or flag them for manual review. This ensures one bad record doesn't block the processing of everything behind it."
		},
		{
			"heading": "global-error-handling",
			"content": "For cross-cutting concerns like monitoring and alerting, the SDK supports a global error handler that fires on every failure."
		},
		{
			"heading": "setting-up-monitoring",
			"content": "Call `client.onError()` with a callback function that receives the full error object. This is the ideal place to send errors to services like Sentry or Datadog — the handler receives all metadata including the request ID, error code, and endpoint, so you can automatically enrich your error reports."
		},
		{
			"heading": "building-dashboards",
			"content": "With structured error types flowing into your monitoring system, you can build dashboards that break down failures by type. This shows you at a glance whether you're experiencing authentication issues, hitting rate limits, or dealing with server-side problems — giving you the observability needed to maintain a healthy production integration."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "error-philosophy",
			"content": "Error Philosophy"
		},
		{
			"id": "when-errors-occur",
			"content": "When Errors Occur"
		},
		{
			"id": "error-types",
			"content": "Error Types"
		},
		{
			"id": "client-errors",
			"content": "Client Errors"
		},
		{
			"id": "server-errors",
			"content": "Server Errors"
		},
		{
			"id": "recovery-patterns",
			"content": "Recovery Patterns"
		},
		{
			"id": "fallback-strategy",
			"content": "Fallback Strategy"
		},
		{
			"id": "dead-letter-queue",
			"content": "Dead Letter Queue"
		},
		{
			"id": "global-error-handling",
			"content": "Global Error Handling"
		},
		{
			"id": "setting-up-monitoring",
			"content": "Setting Up Monitoring"
		},
		{
			"id": "building-dashboards",
			"content": "Building Dashboards"
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
		url: "#error-philosophy",
		title: jsx(Fragment, { children: "Error Philosophy" })
	},
	{
		depth: 3,
		url: "#when-errors-occur",
		title: jsx(Fragment, { children: "When Errors Occur" })
	},
	{
		depth: 2,
		url: "#error-types",
		title: jsx(Fragment, { children: "Error Types" })
	},
	{
		depth: 3,
		url: "#client-errors",
		title: jsx(Fragment, { children: "Client Errors" })
	},
	{
		depth: 3,
		url: "#server-errors",
		title: jsx(Fragment, { children: "Server Errors" })
	},
	{
		depth: 2,
		url: "#recovery-patterns",
		title: jsx(Fragment, { children: "Recovery Patterns" })
	},
	{
		depth: 3,
		url: "#fallback-strategy",
		title: jsx(Fragment, { children: "Fallback Strategy" })
	},
	{
		depth: 3,
		url: "#dead-letter-queue",
		title: jsx(Fragment, { children: "Dead Letter Queue" })
	},
	{
		depth: 2,
		url: "#global-error-handling",
		title: jsx(Fragment, { children: "Global Error Handling" })
	},
	{
		depth: 3,
		url: "#setting-up-monitoring",
		title: jsx(Fragment, { children: "Setting Up Monitoring" })
	},
	{
		depth: 3,
		url: "#building-dashboards",
		title: jsx(Fragment, { children: "Building Dashboards" })
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
		jsx(_components.p, { children: "Every API call has the potential to fail. The Voltus SDK is designed to make error handling as predictable and informative as possible, with structured error types that tell you exactly what went wrong and whether it's safe to retry." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "Instead of throwing generic JavaScript errors with vague messages, the SDK provides a hierarchy of typed error classes. Each class corresponds to a specific category of failure and carries rich metadata for debugging." }),
		"\n",
		jsx(_components.h3, {
			id: "error-philosophy",
			children: "Error Philosophy"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"We believe errors should be actionable. Every error thrown by the SDK includes a machine-readable code for programmatic handling, a human-readable message for logging, a request ID for support inquiries, and a ",
			jsx(_components.code, { children: "retryable" }),
			" flag that tells you whether retrying is worthwhile."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "when-errors-occur",
			children: "When Errors Occur"
		}),
		"\n",
		jsx(_components.p, { children: "Errors can happen for many reasons — invalid credentials, missing resources, malformed input, rate limiting, network issues, or server-side problems. The SDK categorizes each scenario into a specific error type so you can handle them precisely rather than catching everything with a generic handler." }),
		"\n",
		jsx(_components.h2, {
			id: "error-types",
			children: "Error Types"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The SDK defines a hierarchy of error classes, all extending from a base ",
			jsx(_components.code, { children: "VoltusError" }),
			" class. This lets you catch all SDK errors broadly or target specific failure types."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "client-errors",
			children: "Client Errors"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "AuthenticationError" }),
			" fires when your API key is invalid or expired. ",
			jsx(_components.code, { children: "AuthorizationError" }),
			" fires when your key lacks the required scope for the operation. ",
			jsx(_components.code, { children: "NotFoundError" }),
			" fires when you reference a resource that doesn't exist. ",
			jsx(_components.code, { children: "ValidationError" }),
			" fires when your input data fails server-side validation and includes a ",
			jsx(_components.code, { children: "fields" }),
			" array describing each invalid field."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "server-errors",
			children: "Server Errors"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "RateLimitError" }),
			" fires when you've exceeded your API quota and includes a ",
			jsx(_components.code, { children: "retryAfter" }),
			" property indicating how long to wait. ",
			jsx(_components.code, { children: "ServerError" }),
			" fires for unexpected server-side failures and is always safe to retry. The SDK's built-in retry mechanism handles both of these automatically, but you can also catch them explicitly for custom handling."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "recovery-patterns",
			children: "Recovery Patterns"
		}),
		"\n",
		jsx(_components.p, { children: "The most robust applications don't just catch errors — they recover from them gracefully using established patterns." }),
		"\n",
		jsx(_components.h3, {
			id: "fallback-strategy",
			children: "Fallback Strategy"
		}),
		"\n",
		jsx(_components.p, { children: "For non-critical operations, implement a fallback that returns cached data or a default value when an API call fails. This keeps your application functional even during temporary outages. The pattern is simple — wrap your API call in a try-catch and return the fallback value in the catch block." }),
		"\n",
		jsx(_components.h3, {
			id: "dead-letter-queue",
			children: "Dead Letter Queue"
		}),
		"\n",
		jsx(_components.p, { children: "For operations that must eventually succeed, log failed requests with full context and move on to the next item. A separate process can retry failed operations with longer delays, or flag them for manual review. This ensures one bad record doesn't block the processing of everything behind it." }),
		"\n",
		jsx(_components.h2, {
			id: "global-error-handling",
			children: "Global Error Handling"
		}),
		"\n",
		jsx(_components.p, { children: "For cross-cutting concerns like monitoring and alerting, the SDK supports a global error handler that fires on every failure." }),
		"\n",
		jsx(_components.h3, {
			id: "setting-up-monitoring",
			children: "Setting Up Monitoring"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "client.onError()" }),
			" with a callback function that receives the full error object. This is the ideal place to send errors to services like Sentry or Datadog — the handler receives all metadata including the request ID, error code, and endpoint, so you can automatically enrich your error reports."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "building-dashboards",
			children: "Building Dashboards"
		}),
		"\n",
		jsx(_components.p, { children: "With structured error types flowing into your monitoring system, you can build dashboards that break down failures by type. This shows you at a glance whether you're experiencing authentication issues, hitting rate limits, or dealing with server-side problems — giving you the observability needed to maintain a healthy production integration." })
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, error_handling_exports as r, MDXContent as t };
