import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/guides/rate-limiting.mdx?collection=docs
var rate_limiting_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Rate Limiting",
	"description": "Understand and work within the Voltus API rate limits.",
	"icon": "Zap"
};
var _markdown = "\n\nRate limiting protects the Voltus platform from abuse and ensures fair access for all users. Understanding how limits work and designing your application to stay within bounds is essential for a reliable integration.\n\nIntroduction [#introduction]\n\nEvery API key is subject to limits on requests per minute and per day. These limits vary by plan tier and are enforced server-side. The SDK provides tools for monitoring your usage and handling limit errors gracefully.\n\nHow Limits Work [#how-limits-work]\n\nEach API response includes headers showing your current limit, remaining requests, and when the limit resets. The SDK exposes these as a `rateLimit` property on every response. If you exceed your limit, the API returns a 429 status code with a `Retry-After` header.\n\nPlan Tiers [#plan-tiers]\n\nThe free tier allows 60 requests per minute and 10,000 per day. The Pro tier allows 300 per minute and 100,000 per day. Enterprise accounts can negotiate custom limits. Start with the free tier and monitor your usage — the dashboard provides analytics showing your request patterns over time.\n\nAutomatic Handling [#automatic-handling]\n\nThe SDK handles rate limiting automatically by default, so most applications don't need any custom logic.\n\nBuilt-In Retry [#built-in-retry]\n\nWhen a request is rate-limited, the SDK pauses and retries after the server-specified delay. This happens transparently — from your application's perspective, the call simply takes longer. The retry behavior respects your configured maximum retry count and backoff strategy.\n\nCustom Handling [#custom-handling]\n\nFor time-sensitive operations where waiting isn't acceptable, you can catch `RateLimitError` explicitly. The error includes `retryAfter` (seconds to wait), `remaining` (requests left), and `limit` (total allowed). You might return cached data, queue the request for later, or notify the user.\n\nOptimization [#optimization]\n\nThe best way to deal with rate limits is to use fewer requests in the first place.\n\nBatch Operations [#batch-operations]\n\nInstead of making one API call per record, use batch filters to fetch multiple records in a single request. This reduces your request count dramatically — fetching 50 records by ID takes one request instead of fifty.\n\nWebhook-Based Architecture [#webhook-based-architecture]\n\nReplace polling patterns with webhook subscriptions. Instead of checking the API every few seconds for changes, let the platform push events to your application in real time. This eliminates an entire category of API calls and gives you faster notifications to boot.\n\nMonitoring [#monitoring]\n\nKeep an eye on your usage to avoid unexpected rate limit encounters.\n\nDashboard Analytics [#dashboard-analytics]\n\nThe Voltus dashboard shows your request volume, rate limit utilization, and historical patterns. Check this periodically to understand your usage trends and anticipate when you might need to upgrade your plan or optimize your request patterns.\n\nProgrammatic Monitoring [#programmatic-monitoring]\n\nUse the `rateLimit` property on SDK responses to track your remaining quota in real time. If remaining requests drop below a threshold, you can proactively throttle your application rather than waiting to hit the limit. This is especially useful for batch jobs that make many requests in a short period.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Rate limiting protects the Voltus platform from abuse and ensures fair access for all users. Understanding how limits work and designing your application to stay within bounds is essential for a reliable integration."
		},
		{
			"heading": "introduction",
			"content": "Every API key is subject to limits on requests per minute and per day. These limits vary by plan tier and are enforced server-side. The SDK provides tools for monitoring your usage and handling limit errors gracefully."
		},
		{
			"heading": "how-limits-work",
			"content": "Each API response includes headers showing your current limit, remaining requests, and when the limit resets. The SDK exposes these as a `rateLimit` property on every response. If you exceed your limit, the API returns a 429 status code with a `Retry-After` header."
		},
		{
			"heading": "plan-tiers",
			"content": "The free tier allows 60 requests per minute and 10,000 per day. The Pro tier allows 300 per minute and 100,000 per day. Enterprise accounts can negotiate custom limits. Start with the free tier and monitor your usage — the dashboard provides analytics showing your request patterns over time."
		},
		{
			"heading": "automatic-handling",
			"content": "The SDK handles rate limiting automatically by default, so most applications don't need any custom logic."
		},
		{
			"heading": "built-in-retry",
			"content": "When a request is rate-limited, the SDK pauses and retries after the server-specified delay. This happens transparently — from your application's perspective, the call simply takes longer. The retry behavior respects your configured maximum retry count and backoff strategy."
		},
		{
			"heading": "custom-handling",
			"content": "For time-sensitive operations where waiting isn't acceptable, you can catch `RateLimitError` explicitly. The error includes `retryAfter` (seconds to wait), `remaining` (requests left), and `limit` (total allowed). You might return cached data, queue the request for later, or notify the user."
		},
		{
			"heading": "optimization",
			"content": "The best way to deal with rate limits is to use fewer requests in the first place."
		},
		{
			"heading": "batch-operations",
			"content": "Instead of making one API call per record, use batch filters to fetch multiple records in a single request. This reduces your request count dramatically — fetching 50 records by ID takes one request instead of fifty."
		},
		{
			"heading": "webhook-based-architecture",
			"content": "Replace polling patterns with webhook subscriptions. Instead of checking the API every few seconds for changes, let the platform push events to your application in real time. This eliminates an entire category of API calls and gives you faster notifications to boot."
		},
		{
			"heading": "monitoring",
			"content": "Keep an eye on your usage to avoid unexpected rate limit encounters."
		},
		{
			"heading": "dashboard-analytics",
			"content": "The Voltus dashboard shows your request volume, rate limit utilization, and historical patterns. Check this periodically to understand your usage trends and anticipate when you might need to upgrade your plan or optimize your request patterns."
		},
		{
			"heading": "programmatic-monitoring",
			"content": "Use the `rateLimit` property on SDK responses to track your remaining quota in real time. If remaining requests drop below a threshold, you can proactively throttle your application rather than waiting to hit the limit. This is especially useful for batch jobs that make many requests in a short period."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "how-limits-work",
			"content": "How Limits Work"
		},
		{
			"id": "plan-tiers",
			"content": "Plan Tiers"
		},
		{
			"id": "automatic-handling",
			"content": "Automatic Handling"
		},
		{
			"id": "built-in-retry",
			"content": "Built-In Retry"
		},
		{
			"id": "custom-handling",
			"content": "Custom Handling"
		},
		{
			"id": "optimization",
			"content": "Optimization"
		},
		{
			"id": "batch-operations",
			"content": "Batch Operations"
		},
		{
			"id": "webhook-based-architecture",
			"content": "Webhook-Based Architecture"
		},
		{
			"id": "monitoring",
			"content": "Monitoring"
		},
		{
			"id": "dashboard-analytics",
			"content": "Dashboard Analytics"
		},
		{
			"id": "programmatic-monitoring",
			"content": "Programmatic Monitoring"
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
		url: "#how-limits-work",
		title: jsx(Fragment, { children: "How Limits Work" })
	},
	{
		depth: 3,
		url: "#plan-tiers",
		title: jsx(Fragment, { children: "Plan Tiers" })
	},
	{
		depth: 2,
		url: "#automatic-handling",
		title: jsx(Fragment, { children: "Automatic Handling" })
	},
	{
		depth: 3,
		url: "#built-in-retry",
		title: jsx(Fragment, { children: "Built-In Retry" })
	},
	{
		depth: 3,
		url: "#custom-handling",
		title: jsx(Fragment, { children: "Custom Handling" })
	},
	{
		depth: 2,
		url: "#optimization",
		title: jsx(Fragment, { children: "Optimization" })
	},
	{
		depth: 3,
		url: "#batch-operations",
		title: jsx(Fragment, { children: "Batch Operations" })
	},
	{
		depth: 3,
		url: "#webhook-based-architecture",
		title: jsx(Fragment, { children: "Webhook-Based Architecture" })
	},
	{
		depth: 2,
		url: "#monitoring",
		title: jsx(Fragment, { children: "Monitoring" })
	},
	{
		depth: 3,
		url: "#dashboard-analytics",
		title: jsx(Fragment, { children: "Dashboard Analytics" })
	},
	{
		depth: 3,
		url: "#programmatic-monitoring",
		title: jsx(Fragment, { children: "Programmatic Monitoring" })
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
		jsx(_components.p, { children: "Rate limiting protects the Voltus platform from abuse and ensures fair access for all users. Understanding how limits work and designing your application to stay within bounds is essential for a reliable integration." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "Every API key is subject to limits on requests per minute and per day. These limits vary by plan tier and are enforced server-side. The SDK provides tools for monitoring your usage and handling limit errors gracefully." }),
		"\n",
		jsx(_components.h3, {
			id: "how-limits-work",
			children: "How Limits Work"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Each API response includes headers showing your current limit, remaining requests, and when the limit resets. The SDK exposes these as a ",
			jsx(_components.code, { children: "rateLimit" }),
			" property on every response. If you exceed your limit, the API returns a 429 status code with a ",
			jsx(_components.code, { children: "Retry-After" }),
			" header."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "plan-tiers",
			children: "Plan Tiers"
		}),
		"\n",
		jsx(_components.p, { children: "The free tier allows 60 requests per minute and 10,000 per day. The Pro tier allows 300 per minute and 100,000 per day. Enterprise accounts can negotiate custom limits. Start with the free tier and monitor your usage — the dashboard provides analytics showing your request patterns over time." }),
		"\n",
		jsx(_components.h2, {
			id: "automatic-handling",
			children: "Automatic Handling"
		}),
		"\n",
		jsx(_components.p, { children: "The SDK handles rate limiting automatically by default, so most applications don't need any custom logic." }),
		"\n",
		jsx(_components.h3, {
			id: "built-in-retry",
			children: "Built-In Retry"
		}),
		"\n",
		jsx(_components.p, { children: "When a request is rate-limited, the SDK pauses and retries after the server-specified delay. This happens transparently — from your application's perspective, the call simply takes longer. The retry behavior respects your configured maximum retry count and backoff strategy." }),
		"\n",
		jsx(_components.h3, {
			id: "custom-handling",
			children: "Custom Handling"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"For time-sensitive operations where waiting isn't acceptable, you can catch ",
			jsx(_components.code, { children: "RateLimitError" }),
			" explicitly. The error includes ",
			jsx(_components.code, { children: "retryAfter" }),
			" (seconds to wait), ",
			jsx(_components.code, { children: "remaining" }),
			" (requests left), and ",
			jsx(_components.code, { children: "limit" }),
			" (total allowed). You might return cached data, queue the request for later, or notify the user."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "optimization",
			children: "Optimization"
		}),
		"\n",
		jsx(_components.p, { children: "The best way to deal with rate limits is to use fewer requests in the first place." }),
		"\n",
		jsx(_components.h3, {
			id: "batch-operations",
			children: "Batch Operations"
		}),
		"\n",
		jsx(_components.p, { children: "Instead of making one API call per record, use batch filters to fetch multiple records in a single request. This reduces your request count dramatically — fetching 50 records by ID takes one request instead of fifty." }),
		"\n",
		jsx(_components.h3, {
			id: "webhook-based-architecture",
			children: "Webhook-Based Architecture"
		}),
		"\n",
		jsx(_components.p, { children: "Replace polling patterns with webhook subscriptions. Instead of checking the API every few seconds for changes, let the platform push events to your application in real time. This eliminates an entire category of API calls and gives you faster notifications to boot." }),
		"\n",
		jsx(_components.h2, {
			id: "monitoring",
			children: "Monitoring"
		}),
		"\n",
		jsx(_components.p, { children: "Keep an eye on your usage to avoid unexpected rate limit encounters." }),
		"\n",
		jsx(_components.h3, {
			id: "dashboard-analytics",
			children: "Dashboard Analytics"
		}),
		"\n",
		jsx(_components.p, { children: "The Voltus dashboard shows your request volume, rate limit utilization, and historical patterns. Check this periodically to understand your usage trends and anticipate when you might need to upgrade your plan or optimize your request patterns." }),
		"\n",
		jsx(_components.h3, {
			id: "programmatic-monitoring",
			children: "Programmatic Monitoring"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Use the ",
			jsx(_components.code, { children: "rateLimit" }),
			" property on SDK responses to track your remaining quota in real time. If remaining requests drop below a threshold, you can proactively throttle your application rather than waiting to hit the limit. This is especially useful for batch jobs that make many requests in a short period."
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
export { structuredData as a, rate_limiting_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
