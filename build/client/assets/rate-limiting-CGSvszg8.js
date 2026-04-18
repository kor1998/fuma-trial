import{r as e}from"./chunk-0oqf_uz2.js";import{t}from"./jsx-runtime-CEHt124i.js";var n=e(t()),r={title:`Rate Limiting`,description:`Understand and work within the Voltus API rate limits.`,icon:`Zap`},i=`

Rate limiting protects the Voltus platform from abuse and ensures fair access for all users. Understanding how limits work and designing your application to stay within bounds is essential for a reliable integration.

Introduction [#introduction]

Every API key is subject to limits on requests per minute and per day. These limits vary by plan tier and are enforced server-side. The SDK provides tools for monitoring your usage and handling limit errors gracefully.

How Limits Work [#how-limits-work]

Each API response includes headers showing your current limit, remaining requests, and when the limit resets. The SDK exposes these as a \`rateLimit\` property on every response. If you exceed your limit, the API returns a 429 status code with a \`Retry-After\` header.

Plan Tiers [#plan-tiers]

The free tier allows 60 requests per minute and 10,000 per day. The Pro tier allows 300 per minute and 100,000 per day. Enterprise accounts can negotiate custom limits. Start with the free tier and monitor your usage — the dashboard provides analytics showing your request patterns over time.

Automatic Handling [#automatic-handling]

The SDK handles rate limiting automatically by default, so most applications don't need any custom logic.

Built-In Retry [#built-in-retry]

When a request is rate-limited, the SDK pauses and retries after the server-specified delay. This happens transparently — from your application's perspective, the call simply takes longer. The retry behavior respects your configured maximum retry count and backoff strategy.

Custom Handling [#custom-handling]

For time-sensitive operations where waiting isn't acceptable, you can catch \`RateLimitError\` explicitly. The error includes \`retryAfter\` (seconds to wait), \`remaining\` (requests left), and \`limit\` (total allowed). You might return cached data, queue the request for later, or notify the user.

Optimization [#optimization]

The best way to deal with rate limits is to use fewer requests in the first place.

Batch Operations [#batch-operations]

Instead of making one API call per record, use batch filters to fetch multiple records in a single request. This reduces your request count dramatically — fetching 50 records by ID takes one request instead of fifty.

Webhook-Based Architecture [#webhook-based-architecture]

Replace polling patterns with webhook subscriptions. Instead of checking the API every few seconds for changes, let the platform push events to your application in real time. This eliminates an entire category of API calls and gives you faster notifications to boot.

Monitoring [#monitoring]

Keep an eye on your usage to avoid unexpected rate limit encounters.

Dashboard Analytics [#dashboard-analytics]

The Voltus dashboard shows your request volume, rate limit utilization, and historical patterns. Check this periodically to understand your usage trends and anticipate when you might need to upgrade your plan or optimize your request patterns.

Programmatic Monitoring [#programmatic-monitoring]

Use the \`rateLimit\` property on SDK responses to track your remaining quota in real time. If remaining requests drop below a threshold, you can proactively throttle your application rather than waiting to hit the limit. This is especially useful for batch jobs that make many requests in a short period.
`,a={contents:[{heading:void 0,content:`Rate limiting protects the Voltus platform from abuse and ensures fair access for all users. Understanding how limits work and designing your application to stay within bounds is essential for a reliable integration.`},{heading:`introduction`,content:`Every API key is subject to limits on requests per minute and per day. These limits vary by plan tier and are enforced server-side. The SDK provides tools for monitoring your usage and handling limit errors gracefully.`},{heading:`how-limits-work`,content:"Each API response includes headers showing your current limit, remaining requests, and when the limit resets. The SDK exposes these as a `rateLimit` property on every response. If you exceed your limit, the API returns a 429 status code with a `Retry-After` header."},{heading:`plan-tiers`,content:`The free tier allows 60 requests per minute and 10,000 per day. The Pro tier allows 300 per minute and 100,000 per day. Enterprise accounts can negotiate custom limits. Start with the free tier and monitor your usage — the dashboard provides analytics showing your request patterns over time.`},{heading:`automatic-handling`,content:`The SDK handles rate limiting automatically by default, so most applications don't need any custom logic.`},{heading:`built-in-retry`,content:`When a request is rate-limited, the SDK pauses and retries after the server-specified delay. This happens transparently — from your application's perspective, the call simply takes longer. The retry behavior respects your configured maximum retry count and backoff strategy.`},{heading:`custom-handling`,content:"For time-sensitive operations where waiting isn't acceptable, you can catch `RateLimitError` explicitly. The error includes `retryAfter` (seconds to wait), `remaining` (requests left), and `limit` (total allowed). You might return cached data, queue the request for later, or notify the user."},{heading:`optimization`,content:`The best way to deal with rate limits is to use fewer requests in the first place.`},{heading:`batch-operations`,content:`Instead of making one API call per record, use batch filters to fetch multiple records in a single request. This reduces your request count dramatically — fetching 50 records by ID takes one request instead of fifty.`},{heading:`webhook-based-architecture`,content:`Replace polling patterns with webhook subscriptions. Instead of checking the API every few seconds for changes, let the platform push events to your application in real time. This eliminates an entire category of API calls and gives you faster notifications to boot.`},{heading:`monitoring`,content:`Keep an eye on your usage to avoid unexpected rate limit encounters.`},{heading:`dashboard-analytics`,content:`The Voltus dashboard shows your request volume, rate limit utilization, and historical patterns. Check this periodically to understand your usage trends and anticipate when you might need to upgrade your plan or optimize your request patterns.`},{heading:`programmatic-monitoring`,content:"Use the `rateLimit` property on SDK responses to track your remaining quota in real time. If remaining requests drop below a threshold, you can proactively throttle your application rather than waiting to hit the limit. This is especially useful for batch jobs that make many requests in a short period."}],headings:[{id:`introduction`,content:`Introduction`},{id:`how-limits-work`,content:`How Limits Work`},{id:`plan-tiers`,content:`Plan Tiers`},{id:`automatic-handling`,content:`Automatic Handling`},{id:`built-in-retry`,content:`Built-In Retry`},{id:`custom-handling`,content:`Custom Handling`},{id:`optimization`,content:`Optimization`},{id:`batch-operations`,content:`Batch Operations`},{id:`webhook-based-architecture`,content:`Webhook-Based Architecture`},{id:`monitoring`,content:`Monitoring`},{id:`dashboard-analytics`,content:`Dashboard Analytics`},{id:`programmatic-monitoring`,content:`Programmatic Monitoring`}]},o=[{depth:2,url:`#introduction`,title:(0,n.jsx)(n.Fragment,{children:`Introduction`})},{depth:3,url:`#how-limits-work`,title:(0,n.jsx)(n.Fragment,{children:`How Limits Work`})},{depth:3,url:`#plan-tiers`,title:(0,n.jsx)(n.Fragment,{children:`Plan Tiers`})},{depth:2,url:`#automatic-handling`,title:(0,n.jsx)(n.Fragment,{children:`Automatic Handling`})},{depth:3,url:`#built-in-retry`,title:(0,n.jsx)(n.Fragment,{children:`Built-In Retry`})},{depth:3,url:`#custom-handling`,title:(0,n.jsx)(n.Fragment,{children:`Custom Handling`})},{depth:2,url:`#optimization`,title:(0,n.jsx)(n.Fragment,{children:`Optimization`})},{depth:3,url:`#batch-operations`,title:(0,n.jsx)(n.Fragment,{children:`Batch Operations`})},{depth:3,url:`#webhook-based-architecture`,title:(0,n.jsx)(n.Fragment,{children:`Webhook-Based Architecture`})},{depth:2,url:`#monitoring`,title:(0,n.jsx)(n.Fragment,{children:`Monitoring`})},{depth:3,url:`#dashboard-analytics`,title:(0,n.jsx)(n.Fragment,{children:`Dashboard Analytics`})},{depth:3,url:`#programmatic-monitoring`,title:(0,n.jsx)(n.Fragment,{children:`Programmatic Monitoring`})}];function s(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Rate limiting protects the Voltus platform from abuse and ensures fair access for all users. Understanding how limits work and designing your application to stay within bounds is essential for a reliable integration.`}),`
`,(0,n.jsx)(t.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,n.jsx)(t.p,{children:`Every API key is subject to limits on requests per minute and per day. These limits vary by plan tier and are enforced server-side. The SDK provides tools for monitoring your usage and handling limit errors gracefully.`}),`
`,(0,n.jsx)(t.h3,{id:`how-limits-work`,children:`How Limits Work`}),`
`,(0,n.jsxs)(t.p,{children:[`Each API response includes headers showing your current limit, remaining requests, and when the limit resets. The SDK exposes these as a `,(0,n.jsx)(t.code,{children:`rateLimit`}),` property on every response. If you exceed your limit, the API returns a 429 status code with a `,(0,n.jsx)(t.code,{children:`Retry-After`}),` header.`]}),`
`,(0,n.jsx)(t.h3,{id:`plan-tiers`,children:`Plan Tiers`}),`
`,(0,n.jsx)(t.p,{children:`The free tier allows 60 requests per minute and 10,000 per day. The Pro tier allows 300 per minute and 100,000 per day. Enterprise accounts can negotiate custom limits. Start with the free tier and monitor your usage — the dashboard provides analytics showing your request patterns over time.`}),`
`,(0,n.jsx)(t.h2,{id:`automatic-handling`,children:`Automatic Handling`}),`
`,(0,n.jsx)(t.p,{children:`The SDK handles rate limiting automatically by default, so most applications don't need any custom logic.`}),`
`,(0,n.jsx)(t.h3,{id:`built-in-retry`,children:`Built-In Retry`}),`
`,(0,n.jsx)(t.p,{children:`When a request is rate-limited, the SDK pauses and retries after the server-specified delay. This happens transparently — from your application's perspective, the call simply takes longer. The retry behavior respects your configured maximum retry count and backoff strategy.`}),`
`,(0,n.jsx)(t.h3,{id:`custom-handling`,children:`Custom Handling`}),`
`,(0,n.jsxs)(t.p,{children:[`For time-sensitive operations where waiting isn't acceptable, you can catch `,(0,n.jsx)(t.code,{children:`RateLimitError`}),` explicitly. The error includes `,(0,n.jsx)(t.code,{children:`retryAfter`}),` (seconds to wait), `,(0,n.jsx)(t.code,{children:`remaining`}),` (requests left), and `,(0,n.jsx)(t.code,{children:`limit`}),` (total allowed). You might return cached data, queue the request for later, or notify the user.`]}),`
`,(0,n.jsx)(t.h2,{id:`optimization`,children:`Optimization`}),`
`,(0,n.jsx)(t.p,{children:`The best way to deal with rate limits is to use fewer requests in the first place.`}),`
`,(0,n.jsx)(t.h3,{id:`batch-operations`,children:`Batch Operations`}),`
`,(0,n.jsx)(t.p,{children:`Instead of making one API call per record, use batch filters to fetch multiple records in a single request. This reduces your request count dramatically — fetching 50 records by ID takes one request instead of fifty.`}),`
`,(0,n.jsx)(t.h3,{id:`webhook-based-architecture`,children:`Webhook-Based Architecture`}),`
`,(0,n.jsx)(t.p,{children:`Replace polling patterns with webhook subscriptions. Instead of checking the API every few seconds for changes, let the platform push events to your application in real time. This eliminates an entire category of API calls and gives you faster notifications to boot.`}),`
`,(0,n.jsx)(t.h2,{id:`monitoring`,children:`Monitoring`}),`
`,(0,n.jsx)(t.p,{children:`Keep an eye on your usage to avoid unexpected rate limit encounters.`}),`
`,(0,n.jsx)(t.h3,{id:`dashboard-analytics`,children:`Dashboard Analytics`}),`
`,(0,n.jsx)(t.p,{children:`The Voltus dashboard shows your request volume, rate limit utilization, and historical patterns. Check this periodically to understand your usage trends and anticipate when you might need to upgrade your plan or optimize your request patterns.`}),`
`,(0,n.jsx)(t.h3,{id:`programmatic-monitoring`,children:`Programmatic Monitoring`}),`
`,(0,n.jsxs)(t.p,{children:[`Use the `,(0,n.jsx)(t.code,{children:`rateLimit`}),` property on SDK responses to track your remaining quota in real time. If remaining requests drop below a threshold, you can proactively throttle your application rather than waiting to hit the limit. This is especially useful for batch jobs that make many requests in a short period.`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};