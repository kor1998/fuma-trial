import{r as e}from"./chunk-0oqf_uz2.js";import{t}from"./jsx-runtime-CEHt124i.js";var n=e(t()),r={title:`Webhooks`,description:`Receive real-time notifications when events occur in your Voltus account.`,icon:`Send`},i=`

Webhooks let your application react to events in real time instead of constantly polling the API for changes. When something happens on the platform, Voltus sends an HTTP POST request to your specified URL with the full event details.

Introduction [#introduction]

The push-based webhook model is more efficient, more timely, and more scalable than polling. Instead of checking the API every few seconds for changes, your application simply waits for notifications to arrive.

How Webhooks Work [#how-webhooks-work]

You register a URL and a list of event types you're interested in. When a matching event occurs — like a resource being created or an entry being published — the platform sends a POST request to your URL with a JSON payload containing the event type, timestamp, and full resource data.

When to Use Webhooks [#when-to-use-webhooks]

Use webhooks whenever you need real-time awareness of changes. Common use cases include syncing data to external systems, triggering email notifications, updating search indexes, invalidating caches, and logging activity for audit trails. Webhooks eliminate the need for polling entirely.

Setting Up [#setting-up]

Creating and configuring webhooks is straightforward through both the SDK and the dashboard.

Creating a Webhook [#creating-a-webhook]

Call \`client.webhooks.create()\` with your endpoint URL, the list of event types to subscribe to, and a signing secret for payload verification. The signing secret is optional but strongly recommended for production — it prevents malicious actors from sending fake events to your endpoint.

Available Events [#available-events]

The platform emits events for all major state changes. Resource events include \`resource.created\`, \`resource.updated\`, and \`resource.deleted\`. Entry events include \`entry.created\`, \`entry.updated\`, \`entry.published\`, and \`entry.unpublished\`. Team events include \`user.invited\`. You can subscribe to as many or as few event types as you need.

Processing Events [#processing-events]

When your application receives a webhook, it needs to verify authenticity, parse the payload, and handle the event appropriately.

Signature Verification [#signature-verification]

Every webhook delivery includes an \`x-voltus-signature\` header containing an HMAC signature of the request body. The SDK provides a \`verifyWebhookSignature()\` helper that validates this signature against your signing secret. Always verify before processing — skipping this step opens your application to spoofed events.

Event Routing [#event-routing]

After verification, parse the JSON payload and route it based on the \`type\` field. A clean approach is a switch statement or handler map that calls the appropriate function for each event type. Keep your handler fast — return a 200 status quickly and process heavy work asynchronously.

Reliability [#reliability]

The platform includes built-in retry logic and monitoring to ensure webhook deliveries are reliable.

Retry Policy [#retry-policy]

If your endpoint is unavailable or returns an error, the platform retries with increasing delays — one minute, five minutes, thirty minutes, two hours, and finally twenty-four hours. After five failed attempts, the webhook is marked as failing and you receive an email notification.

Monitoring and Testing [#monitoring-and-testing]

Check delivery logs in the dashboard or use \`client.webhooks.test()\` to trigger a test event and verify connectivity. Common failure causes include expired SSL certificates, firewall rules blocking Voltus IPs, or unhandled exceptions in your handler code. Regular monitoring ensures you catch delivery issues before they impact your integration.
`,a={contents:[{heading:void 0,content:`Webhooks let your application react to events in real time instead of constantly polling the API for changes. When something happens on the platform, Voltus sends an HTTP POST request to your specified URL with the full event details.`},{heading:`introduction`,content:`The push-based webhook model is more efficient, more timely, and more scalable than polling. Instead of checking the API every few seconds for changes, your application simply waits for notifications to arrive.`},{heading:`how-webhooks-work`,content:`You register a URL and a list of event types you're interested in. When a matching event occurs — like a resource being created or an entry being published — the platform sends a POST request to your URL with a JSON payload containing the event type, timestamp, and full resource data.`},{heading:`when-to-use-webhooks`,content:`Use webhooks whenever you need real-time awareness of changes. Common use cases include syncing data to external systems, triggering email notifications, updating search indexes, invalidating caches, and logging activity for audit trails. Webhooks eliminate the need for polling entirely.`},{heading:`setting-up`,content:`Creating and configuring webhooks is straightforward through both the SDK and the dashboard.`},{heading:`creating-a-webhook`,content:"Call `client.webhooks.create()` with your endpoint URL, the list of event types to subscribe to, and a signing secret for payload verification. The signing secret is optional but strongly recommended for production — it prevents malicious actors from sending fake events to your endpoint."},{heading:`available-events`,content:"The platform emits events for all major state changes. Resource events include `resource.created`, `resource.updated`, and `resource.deleted`. Entry events include `entry.created`, `entry.updated`, `entry.published`, and `entry.unpublished`. Team events include `user.invited`. You can subscribe to as many or as few event types as you need."},{heading:`processing-events`,content:`When your application receives a webhook, it needs to verify authenticity, parse the payload, and handle the event appropriately.`},{heading:`signature-verification`,content:"Every webhook delivery includes an `x-voltus-signature` header containing an HMAC signature of the request body. The SDK provides a `verifyWebhookSignature()` helper that validates this signature against your signing secret. Always verify before processing — skipping this step opens your application to spoofed events."},{heading:`event-routing`,content:"After verification, parse the JSON payload and route it based on the `type` field. A clean approach is a switch statement or handler map that calls the appropriate function for each event type. Keep your handler fast — return a 200 status quickly and process heavy work asynchronously."},{heading:`reliability`,content:`The platform includes built-in retry logic and monitoring to ensure webhook deliveries are reliable.`},{heading:`retry-policy`,content:`If your endpoint is unavailable or returns an error, the platform retries with increasing delays — one minute, five minutes, thirty minutes, two hours, and finally twenty-four hours. After five failed attempts, the webhook is marked as failing and you receive an email notification.`},{heading:`monitoring-and-testing`,content:"Check delivery logs in the dashboard or use `client.webhooks.test()` to trigger a test event and verify connectivity. Common failure causes include expired SSL certificates, firewall rules blocking Voltus IPs, or unhandled exceptions in your handler code. Regular monitoring ensures you catch delivery issues before they impact your integration."}],headings:[{id:`introduction`,content:`Introduction`},{id:`how-webhooks-work`,content:`How Webhooks Work`},{id:`when-to-use-webhooks`,content:`When to Use Webhooks`},{id:`setting-up`,content:`Setting Up`},{id:`creating-a-webhook`,content:`Creating a Webhook`},{id:`available-events`,content:`Available Events`},{id:`processing-events`,content:`Processing Events`},{id:`signature-verification`,content:`Signature Verification`},{id:`event-routing`,content:`Event Routing`},{id:`reliability`,content:`Reliability`},{id:`retry-policy`,content:`Retry Policy`},{id:`monitoring-and-testing`,content:`Monitoring and Testing`}]},o=[{depth:2,url:`#introduction`,title:(0,n.jsx)(n.Fragment,{children:`Introduction`})},{depth:3,url:`#how-webhooks-work`,title:(0,n.jsx)(n.Fragment,{children:`How Webhooks Work`})},{depth:3,url:`#when-to-use-webhooks`,title:(0,n.jsx)(n.Fragment,{children:`When to Use Webhooks`})},{depth:2,url:`#setting-up`,title:(0,n.jsx)(n.Fragment,{children:`Setting Up`})},{depth:3,url:`#creating-a-webhook`,title:(0,n.jsx)(n.Fragment,{children:`Creating a Webhook`})},{depth:3,url:`#available-events`,title:(0,n.jsx)(n.Fragment,{children:`Available Events`})},{depth:2,url:`#processing-events`,title:(0,n.jsx)(n.Fragment,{children:`Processing Events`})},{depth:3,url:`#signature-verification`,title:(0,n.jsx)(n.Fragment,{children:`Signature Verification`})},{depth:3,url:`#event-routing`,title:(0,n.jsx)(n.Fragment,{children:`Event Routing`})},{depth:2,url:`#reliability`,title:(0,n.jsx)(n.Fragment,{children:`Reliability`})},{depth:3,url:`#retry-policy`,title:(0,n.jsx)(n.Fragment,{children:`Retry Policy`})},{depth:3,url:`#monitoring-and-testing`,title:(0,n.jsx)(n.Fragment,{children:`Monitoring and Testing`})}];function s(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Webhooks let your application react to events in real time instead of constantly polling the API for changes. When something happens on the platform, Voltus sends an HTTP POST request to your specified URL with the full event details.`}),`
`,(0,n.jsx)(t.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,n.jsx)(t.p,{children:`The push-based webhook model is more efficient, more timely, and more scalable than polling. Instead of checking the API every few seconds for changes, your application simply waits for notifications to arrive.`}),`
`,(0,n.jsx)(t.h3,{id:`how-webhooks-work`,children:`How Webhooks Work`}),`
`,(0,n.jsx)(t.p,{children:`You register a URL and a list of event types you're interested in. When a matching event occurs — like a resource being created or an entry being published — the platform sends a POST request to your URL with a JSON payload containing the event type, timestamp, and full resource data.`}),`
`,(0,n.jsx)(t.h3,{id:`when-to-use-webhooks`,children:`When to Use Webhooks`}),`
`,(0,n.jsx)(t.p,{children:`Use webhooks whenever you need real-time awareness of changes. Common use cases include syncing data to external systems, triggering email notifications, updating search indexes, invalidating caches, and logging activity for audit trails. Webhooks eliminate the need for polling entirely.`}),`
`,(0,n.jsx)(t.h2,{id:`setting-up`,children:`Setting Up`}),`
`,(0,n.jsx)(t.p,{children:`Creating and configuring webhooks is straightforward through both the SDK and the dashboard.`}),`
`,(0,n.jsx)(t.h3,{id:`creating-a-webhook`,children:`Creating a Webhook`}),`
`,(0,n.jsxs)(t.p,{children:[`Call `,(0,n.jsx)(t.code,{children:`client.webhooks.create()`}),` with your endpoint URL, the list of event types to subscribe to, and a signing secret for payload verification. The signing secret is optional but strongly recommended for production — it prevents malicious actors from sending fake events to your endpoint.`]}),`
`,(0,n.jsx)(t.h3,{id:`available-events`,children:`Available Events`}),`
`,(0,n.jsxs)(t.p,{children:[`The platform emits events for all major state changes. Resource events include `,(0,n.jsx)(t.code,{children:`resource.created`}),`, `,(0,n.jsx)(t.code,{children:`resource.updated`}),`, and `,(0,n.jsx)(t.code,{children:`resource.deleted`}),`. Entry events include `,(0,n.jsx)(t.code,{children:`entry.created`}),`, `,(0,n.jsx)(t.code,{children:`entry.updated`}),`, `,(0,n.jsx)(t.code,{children:`entry.published`}),`, and `,(0,n.jsx)(t.code,{children:`entry.unpublished`}),`. Team events include `,(0,n.jsx)(t.code,{children:`user.invited`}),`. You can subscribe to as many or as few event types as you need.`]}),`
`,(0,n.jsx)(t.h2,{id:`processing-events`,children:`Processing Events`}),`
`,(0,n.jsx)(t.p,{children:`When your application receives a webhook, it needs to verify authenticity, parse the payload, and handle the event appropriately.`}),`
`,(0,n.jsx)(t.h3,{id:`signature-verification`,children:`Signature Verification`}),`
`,(0,n.jsxs)(t.p,{children:[`Every webhook delivery includes an `,(0,n.jsx)(t.code,{children:`x-voltus-signature`}),` header containing an HMAC signature of the request body. The SDK provides a `,(0,n.jsx)(t.code,{children:`verifyWebhookSignature()`}),` helper that validates this signature against your signing secret. Always verify before processing — skipping this step opens your application to spoofed events.`]}),`
`,(0,n.jsx)(t.h3,{id:`event-routing`,children:`Event Routing`}),`
`,(0,n.jsxs)(t.p,{children:[`After verification, parse the JSON payload and route it based on the `,(0,n.jsx)(t.code,{children:`type`}),` field. A clean approach is a switch statement or handler map that calls the appropriate function for each event type. Keep your handler fast — return a 200 status quickly and process heavy work asynchronously.`]}),`
`,(0,n.jsx)(t.h2,{id:`reliability`,children:`Reliability`}),`
`,(0,n.jsx)(t.p,{children:`The platform includes built-in retry logic and monitoring to ensure webhook deliveries are reliable.`}),`
`,(0,n.jsx)(t.h3,{id:`retry-policy`,children:`Retry Policy`}),`
`,(0,n.jsx)(t.p,{children:`If your endpoint is unavailable or returns an error, the platform retries with increasing delays — one minute, five minutes, thirty minutes, two hours, and finally twenty-four hours. After five failed attempts, the webhook is marked as failing and you receive an email notification.`}),`
`,(0,n.jsx)(t.h3,{id:`monitoring-and-testing`,children:`Monitoring and Testing`}),`
`,(0,n.jsxs)(t.p,{children:[`Check delivery logs in the dashboard or use `,(0,n.jsx)(t.code,{children:`client.webhooks.test()`}),` to trigger a test event and verify connectivity. Common failure causes include expired SSL certificates, firewall rules blocking Voltus IPs, or unhandled exceptions in your handler code. Regular monitoring ensures you catch delivery issues before they impact your integration.`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};