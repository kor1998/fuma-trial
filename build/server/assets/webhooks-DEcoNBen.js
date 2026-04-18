import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/api-reference/webhooks.mdx?collection=docs
var webhooks_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Webhooks",
	"description": "Receive real-time notifications when events occur in your Voltus account.",
	"icon": "Send"
};
var _markdown = "\n\nWebhooks let your application react to events in real time instead of constantly polling the API for changes. When something happens on the platform, Voltus sends an HTTP POST request to your specified URL with the full event details.\n\nIntroduction [#introduction]\n\nThe push-based webhook model is more efficient, more timely, and more scalable than polling. Instead of checking the API every few seconds for changes, your application simply waits for notifications to arrive.\n\nHow Webhooks Work [#how-webhooks-work]\n\nYou register a URL and a list of event types you're interested in. When a matching event occurs — like a resource being created or an entry being published — the platform sends a POST request to your URL with a JSON payload containing the event type, timestamp, and full resource data.\n\nWhen to Use Webhooks [#when-to-use-webhooks]\n\nUse webhooks whenever you need real-time awareness of changes. Common use cases include syncing data to external systems, triggering email notifications, updating search indexes, invalidating caches, and logging activity for audit trails. Webhooks eliminate the need for polling entirely.\n\nSetting Up [#setting-up]\n\nCreating and configuring webhooks is straightforward through both the SDK and the dashboard.\n\nCreating a Webhook [#creating-a-webhook]\n\nCall `client.webhooks.create()` with your endpoint URL, the list of event types to subscribe to, and a signing secret for payload verification. The signing secret is optional but strongly recommended for production — it prevents malicious actors from sending fake events to your endpoint.\n\nAvailable Events [#available-events]\n\nThe platform emits events for all major state changes. Resource events include `resource.created`, `resource.updated`, and `resource.deleted`. Entry events include `entry.created`, `entry.updated`, `entry.published`, and `entry.unpublished`. Team events include `user.invited`. You can subscribe to as many or as few event types as you need.\n\nProcessing Events [#processing-events]\n\nWhen your application receives a webhook, it needs to verify authenticity, parse the payload, and handle the event appropriately.\n\nSignature Verification [#signature-verification]\n\nEvery webhook delivery includes an `x-voltus-signature` header containing an HMAC signature of the request body. The SDK provides a `verifyWebhookSignature()` helper that validates this signature against your signing secret. Always verify before processing — skipping this step opens your application to spoofed events.\n\nEvent Routing [#event-routing]\n\nAfter verification, parse the JSON payload and route it based on the `type` field. A clean approach is a switch statement or handler map that calls the appropriate function for each event type. Keep your handler fast — return a 200 status quickly and process heavy work asynchronously.\n\nReliability [#reliability]\n\nThe platform includes built-in retry logic and monitoring to ensure webhook deliveries are reliable.\n\nRetry Policy [#retry-policy]\n\nIf your endpoint is unavailable or returns an error, the platform retries with increasing delays — one minute, five minutes, thirty minutes, two hours, and finally twenty-four hours. After five failed attempts, the webhook is marked as failing and you receive an email notification.\n\nMonitoring and Testing [#monitoring-and-testing]\n\nCheck delivery logs in the dashboard or use `client.webhooks.test()` to trigger a test event and verify connectivity. Common failure causes include expired SSL certificates, firewall rules blocking Voltus IPs, or unhandled exceptions in your handler code. Regular monitoring ensures you catch delivery issues before they impact your integration.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Webhooks let your application react to events in real time instead of constantly polling the API for changes. When something happens on the platform, Voltus sends an HTTP POST request to your specified URL with the full event details."
		},
		{
			"heading": "introduction",
			"content": "The push-based webhook model is more efficient, more timely, and more scalable than polling. Instead of checking the API every few seconds for changes, your application simply waits for notifications to arrive."
		},
		{
			"heading": "how-webhooks-work",
			"content": "You register a URL and a list of event types you're interested in. When a matching event occurs — like a resource being created or an entry being published — the platform sends a POST request to your URL with a JSON payload containing the event type, timestamp, and full resource data."
		},
		{
			"heading": "when-to-use-webhooks",
			"content": "Use webhooks whenever you need real-time awareness of changes. Common use cases include syncing data to external systems, triggering email notifications, updating search indexes, invalidating caches, and logging activity for audit trails. Webhooks eliminate the need for polling entirely."
		},
		{
			"heading": "setting-up",
			"content": "Creating and configuring webhooks is straightforward through both the SDK and the dashboard."
		},
		{
			"heading": "creating-a-webhook",
			"content": "Call `client.webhooks.create()` with your endpoint URL, the list of event types to subscribe to, and a signing secret for payload verification. The signing secret is optional but strongly recommended for production — it prevents malicious actors from sending fake events to your endpoint."
		},
		{
			"heading": "available-events",
			"content": "The platform emits events for all major state changes. Resource events include `resource.created`, `resource.updated`, and `resource.deleted`. Entry events include `entry.created`, `entry.updated`, `entry.published`, and `entry.unpublished`. Team events include `user.invited`. You can subscribe to as many or as few event types as you need."
		},
		{
			"heading": "processing-events",
			"content": "When your application receives a webhook, it needs to verify authenticity, parse the payload, and handle the event appropriately."
		},
		{
			"heading": "signature-verification",
			"content": "Every webhook delivery includes an `x-voltus-signature` header containing an HMAC signature of the request body. The SDK provides a `verifyWebhookSignature()` helper that validates this signature against your signing secret. Always verify before processing — skipping this step opens your application to spoofed events."
		},
		{
			"heading": "event-routing",
			"content": "After verification, parse the JSON payload and route it based on the `type` field. A clean approach is a switch statement or handler map that calls the appropriate function for each event type. Keep your handler fast — return a 200 status quickly and process heavy work asynchronously."
		},
		{
			"heading": "reliability",
			"content": "The platform includes built-in retry logic and monitoring to ensure webhook deliveries are reliable."
		},
		{
			"heading": "retry-policy",
			"content": "If your endpoint is unavailable or returns an error, the platform retries with increasing delays — one minute, five minutes, thirty minutes, two hours, and finally twenty-four hours. After five failed attempts, the webhook is marked as failing and you receive an email notification."
		},
		{
			"heading": "monitoring-and-testing",
			"content": "Check delivery logs in the dashboard or use `client.webhooks.test()` to trigger a test event and verify connectivity. Common failure causes include expired SSL certificates, firewall rules blocking Voltus IPs, or unhandled exceptions in your handler code. Regular monitoring ensures you catch delivery issues before they impact your integration."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "how-webhooks-work",
			"content": "How Webhooks Work"
		},
		{
			"id": "when-to-use-webhooks",
			"content": "When to Use Webhooks"
		},
		{
			"id": "setting-up",
			"content": "Setting Up"
		},
		{
			"id": "creating-a-webhook",
			"content": "Creating a Webhook"
		},
		{
			"id": "available-events",
			"content": "Available Events"
		},
		{
			"id": "processing-events",
			"content": "Processing Events"
		},
		{
			"id": "signature-verification",
			"content": "Signature Verification"
		},
		{
			"id": "event-routing",
			"content": "Event Routing"
		},
		{
			"id": "reliability",
			"content": "Reliability"
		},
		{
			"id": "retry-policy",
			"content": "Retry Policy"
		},
		{
			"id": "monitoring-and-testing",
			"content": "Monitoring and Testing"
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
		url: "#how-webhooks-work",
		title: jsx(Fragment, { children: "How Webhooks Work" })
	},
	{
		depth: 3,
		url: "#when-to-use-webhooks",
		title: jsx(Fragment, { children: "When to Use Webhooks" })
	},
	{
		depth: 2,
		url: "#setting-up",
		title: jsx(Fragment, { children: "Setting Up" })
	},
	{
		depth: 3,
		url: "#creating-a-webhook",
		title: jsx(Fragment, { children: "Creating a Webhook" })
	},
	{
		depth: 3,
		url: "#available-events",
		title: jsx(Fragment, { children: "Available Events" })
	},
	{
		depth: 2,
		url: "#processing-events",
		title: jsx(Fragment, { children: "Processing Events" })
	},
	{
		depth: 3,
		url: "#signature-verification",
		title: jsx(Fragment, { children: "Signature Verification" })
	},
	{
		depth: 3,
		url: "#event-routing",
		title: jsx(Fragment, { children: "Event Routing" })
	},
	{
		depth: 2,
		url: "#reliability",
		title: jsx(Fragment, { children: "Reliability" })
	},
	{
		depth: 3,
		url: "#retry-policy",
		title: jsx(Fragment, { children: "Retry Policy" })
	},
	{
		depth: 3,
		url: "#monitoring-and-testing",
		title: jsx(Fragment, { children: "Monitoring and Testing" })
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
		jsx(_components.p, { children: "Webhooks let your application react to events in real time instead of constantly polling the API for changes. When something happens on the platform, Voltus sends an HTTP POST request to your specified URL with the full event details." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "The push-based webhook model is more efficient, more timely, and more scalable than polling. Instead of checking the API every few seconds for changes, your application simply waits for notifications to arrive." }),
		"\n",
		jsx(_components.h3, {
			id: "how-webhooks-work",
			children: "How Webhooks Work"
		}),
		"\n",
		jsx(_components.p, { children: "You register a URL and a list of event types you're interested in. When a matching event occurs — like a resource being created or an entry being published — the platform sends a POST request to your URL with a JSON payload containing the event type, timestamp, and full resource data." }),
		"\n",
		jsx(_components.h3, {
			id: "when-to-use-webhooks",
			children: "When to Use Webhooks"
		}),
		"\n",
		jsx(_components.p, { children: "Use webhooks whenever you need real-time awareness of changes. Common use cases include syncing data to external systems, triggering email notifications, updating search indexes, invalidating caches, and logging activity for audit trails. Webhooks eliminate the need for polling entirely." }),
		"\n",
		jsx(_components.h2, {
			id: "setting-up",
			children: "Setting Up"
		}),
		"\n",
		jsx(_components.p, { children: "Creating and configuring webhooks is straightforward through both the SDK and the dashboard." }),
		"\n",
		jsx(_components.h3, {
			id: "creating-a-webhook",
			children: "Creating a Webhook"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Call ",
			jsx(_components.code, { children: "client.webhooks.create()" }),
			" with your endpoint URL, the list of event types to subscribe to, and a signing secret for payload verification. The signing secret is optional but strongly recommended for production — it prevents malicious actors from sending fake events to your endpoint."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "available-events",
			children: "Available Events"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The platform emits events for all major state changes. Resource events include ",
			jsx(_components.code, { children: "resource.created" }),
			", ",
			jsx(_components.code, { children: "resource.updated" }),
			", and ",
			jsx(_components.code, { children: "resource.deleted" }),
			". Entry events include ",
			jsx(_components.code, { children: "entry.created" }),
			", ",
			jsx(_components.code, { children: "entry.updated" }),
			", ",
			jsx(_components.code, { children: "entry.published" }),
			", and ",
			jsx(_components.code, { children: "entry.unpublished" }),
			". Team events include ",
			jsx(_components.code, { children: "user.invited" }),
			". You can subscribe to as many or as few event types as you need."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "processing-events",
			children: "Processing Events"
		}),
		"\n",
		jsx(_components.p, { children: "When your application receives a webhook, it needs to verify authenticity, parse the payload, and handle the event appropriately." }),
		"\n",
		jsx(_components.h3, {
			id: "signature-verification",
			children: "Signature Verification"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every webhook delivery includes an ",
			jsx(_components.code, { children: "x-voltus-signature" }),
			" header containing an HMAC signature of the request body. The SDK provides a ",
			jsx(_components.code, { children: "verifyWebhookSignature()" }),
			" helper that validates this signature against your signing secret. Always verify before processing — skipping this step opens your application to spoofed events."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "event-routing",
			children: "Event Routing"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"After verification, parse the JSON payload and route it based on the ",
			jsx(_components.code, { children: "type" }),
			" field. A clean approach is a switch statement or handler map that calls the appropriate function for each event type. Keep your handler fast — return a 200 status quickly and process heavy work asynchronously."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "reliability",
			children: "Reliability"
		}),
		"\n",
		jsx(_components.p, { children: "The platform includes built-in retry logic and monitoring to ensure webhook deliveries are reliable." }),
		"\n",
		jsx(_components.h3, {
			id: "retry-policy",
			children: "Retry Policy"
		}),
		"\n",
		jsx(_components.p, { children: "If your endpoint is unavailable or returns an error, the platform retries with increasing delays — one minute, five minutes, thirty minutes, two hours, and finally twenty-four hours. After five failed attempts, the webhook is marked as failing and you receive an email notification." }),
		"\n",
		jsx(_components.h3, {
			id: "monitoring-and-testing",
			children: "Monitoring and Testing"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Check delivery logs in the dashboard or use ",
			jsx(_components.code, { children: "client.webhooks.test()" }),
			" to trigger a test event and verify connectivity. Common failure causes include expired SSL certificates, firewall rules blocking Voltus IPs, or unhandled exceptions in your handler code. Regular monitoring ensures you catch delivery issues before they impact your integration."
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
export { toc as a, structuredData as i, _markdown as n, webhooks_exports as o, frontmatter as r, MDXContent as t };
