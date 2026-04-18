import{r as e}from"./chunk-0oqf_uz2.js";import{t}from"./jsx-runtime-CEHt124i.js";var n=e(t()),r={title:`FAQ`,description:`Frequently asked questions about the Voltus SDK.`,icon:`HelpCircle`},i=`

This page answers the questions we hear most often from developers. If your question isn't covered here, open an issue on GitHub or reach out through our community Discord.

General [#general]

Common questions about the SDK's capabilities, supported platforms, and licensing.

Platform Support [#platform-support]

The SDK supports Node.js 18 and above, Bun, Deno, and modern edge runtimes like Cloudflare Workers and Vercel Edge Functions. It uses the standard Fetch API under the hood, so it works anywhere modern JavaScript runs without platform-specific adapters or polyfills.

Getting an API Key [#getting-an-api-key]

Sign in to the Voltus dashboard and navigate to Settings, then API Keys. You can create multiple keys with different scopes and labels. Public keys prefixed with \`vlt_pk_\` are safe for client-side use but restricted to read-only operations. Secret keys prefixed with \`vlt_sk_\` have full access and should only be used server-side.

Troubleshooting [#troubleshooting]

Solutions to the most commonly reported issues.

Connection Errors [#connection-errors]

If you're seeing \`ECONNREFUSED\` errors, check that your network allows outbound HTTPS connections to \`api.voltus.dev\` on port 443. Corporate firewalls and VPNs sometimes block unfamiliar domains. Also check the Voltus status page for active incidents affecting API availability.

Timeout Issues [#timeout-issues]

Increase the client's timeout setting if requests are timing out. The default is 30 seconds, but large data exports may need more. If you're hitting rate limits frequently, review the Rate Limiting guide for strategies to reduce API call volume through batch queries, caching, and webhooks.

Migration [#migration]

Information about upgrading between versions and backward compatibility.

Breaking Changes [#breaking-changes]

When we release a new major version, we publish a detailed migration guide with before-and-after code examples. Previous major versions receive security patches for at least 12 months after their successor is released, giving you time to upgrade at your own pace.

Backward Compatibility [#backward-compatibility]

Minor and patch releases are always backward compatible — you can update to them without changing any existing code. We follow semantic versioning strictly, so the version number always tells you whether an update is safe to apply without review.
`,a={contents:[{heading:void 0,content:`This page answers the questions we hear most often from developers. If your question isn't covered here, open an issue on GitHub or reach out through our community Discord.`},{heading:`general`,content:`Common questions about the SDK's capabilities, supported platforms, and licensing.`},{heading:`platform-support`,content:`The SDK supports Node.js 18 and above, Bun, Deno, and modern edge runtimes like Cloudflare Workers and Vercel Edge Functions. It uses the standard Fetch API under the hood, so it works anywhere modern JavaScript runs without platform-specific adapters or polyfills.`},{heading:`getting-an-api-key`,content:"Sign in to the Voltus dashboard and navigate to Settings, then API Keys. You can create multiple keys with different scopes and labels. Public keys prefixed with `vlt_pk_` are safe for client-side use but restricted to read-only operations. Secret keys prefixed with `vlt_sk_` have full access and should only be used server-side."},{heading:`troubleshooting`,content:`Solutions to the most commonly reported issues.`},{heading:`connection-errors`,content:"If you're seeing `ECONNREFUSED` errors, check that your network allows outbound HTTPS connections to `api.voltus.dev` on port 443. Corporate firewalls and VPNs sometimes block unfamiliar domains. Also check the Voltus status page for active incidents affecting API availability."},{heading:`timeout-issues`,content:`Increase the client's timeout setting if requests are timing out. The default is 30 seconds, but large data exports may need more. If you're hitting rate limits frequently, review the Rate Limiting guide for strategies to reduce API call volume through batch queries, caching, and webhooks.`},{heading:`migration`,content:`Information about upgrading between versions and backward compatibility.`},{heading:`breaking-changes`,content:`When we release a new major version, we publish a detailed migration guide with before-and-after code examples. Previous major versions receive security patches for at least 12 months after their successor is released, giving you time to upgrade at your own pace.`},{heading:`backward-compatibility`,content:`Minor and patch releases are always backward compatible — you can update to them without changing any existing code. We follow semantic versioning strictly, so the version number always tells you whether an update is safe to apply without review.`}],headings:[{id:`general`,content:`General`},{id:`platform-support`,content:`Platform Support`},{id:`getting-an-api-key`,content:`Getting an API Key`},{id:`troubleshooting`,content:`Troubleshooting`},{id:`connection-errors`,content:`Connection Errors`},{id:`timeout-issues`,content:`Timeout Issues`},{id:`migration`,content:`Migration`},{id:`breaking-changes`,content:`Breaking Changes`},{id:`backward-compatibility`,content:`Backward Compatibility`}]},o=[{depth:2,url:`#general`,title:(0,n.jsx)(n.Fragment,{children:`General`})},{depth:3,url:`#platform-support`,title:(0,n.jsx)(n.Fragment,{children:`Platform Support`})},{depth:3,url:`#getting-an-api-key`,title:(0,n.jsx)(n.Fragment,{children:`Getting an API Key`})},{depth:2,url:`#troubleshooting`,title:(0,n.jsx)(n.Fragment,{children:`Troubleshooting`})},{depth:3,url:`#connection-errors`,title:(0,n.jsx)(n.Fragment,{children:`Connection Errors`})},{depth:3,url:`#timeout-issues`,title:(0,n.jsx)(n.Fragment,{children:`Timeout Issues`})},{depth:2,url:`#migration`,title:(0,n.jsx)(n.Fragment,{children:`Migration`})},{depth:3,url:`#breaking-changes`,title:(0,n.jsx)(n.Fragment,{children:`Breaking Changes`})},{depth:3,url:`#backward-compatibility`,title:(0,n.jsx)(n.Fragment,{children:`Backward Compatibility`})}];function s(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`This page answers the questions we hear most often from developers. If your question isn't covered here, open an issue on GitHub or reach out through our community Discord.`}),`
`,(0,n.jsx)(t.h2,{id:`general`,children:`General`}),`
`,(0,n.jsx)(t.p,{children:`Common questions about the SDK's capabilities, supported platforms, and licensing.`}),`
`,(0,n.jsx)(t.h3,{id:`platform-support`,children:`Platform Support`}),`
`,(0,n.jsx)(t.p,{children:`The SDK supports Node.js 18 and above, Bun, Deno, and modern edge runtimes like Cloudflare Workers and Vercel Edge Functions. It uses the standard Fetch API under the hood, so it works anywhere modern JavaScript runs without platform-specific adapters or polyfills.`}),`
`,(0,n.jsx)(t.h3,{id:`getting-an-api-key`,children:`Getting an API Key`}),`
`,(0,n.jsxs)(t.p,{children:[`Sign in to the Voltus dashboard and navigate to Settings, then API Keys. You can create multiple keys with different scopes and labels. Public keys prefixed with `,(0,n.jsx)(t.code,{children:`vlt_pk_`}),` are safe for client-side use but restricted to read-only operations. Secret keys prefixed with `,(0,n.jsx)(t.code,{children:`vlt_sk_`}),` have full access and should only be used server-side.`]}),`
`,(0,n.jsx)(t.h2,{id:`troubleshooting`,children:`Troubleshooting`}),`
`,(0,n.jsx)(t.p,{children:`Solutions to the most commonly reported issues.`}),`
`,(0,n.jsx)(t.h3,{id:`connection-errors`,children:`Connection Errors`}),`
`,(0,n.jsxs)(t.p,{children:[`If you're seeing `,(0,n.jsx)(t.code,{children:`ECONNREFUSED`}),` errors, check that your network allows outbound HTTPS connections to `,(0,n.jsx)(t.code,{children:`api.voltus.dev`}),` on port 443. Corporate firewalls and VPNs sometimes block unfamiliar domains. Also check the Voltus status page for active incidents affecting API availability.`]}),`
`,(0,n.jsx)(t.h3,{id:`timeout-issues`,children:`Timeout Issues`}),`
`,(0,n.jsx)(t.p,{children:`Increase the client's timeout setting if requests are timing out. The default is 30 seconds, but large data exports may need more. If you're hitting rate limits frequently, review the Rate Limiting guide for strategies to reduce API call volume through batch queries, caching, and webhooks.`}),`
`,(0,n.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,n.jsx)(t.p,{children:`Information about upgrading between versions and backward compatibility.`}),`
`,(0,n.jsx)(t.h3,{id:`breaking-changes`,children:`Breaking Changes`}),`
`,(0,n.jsx)(t.p,{children:`When we release a new major version, we publish a detailed migration guide with before-and-after code examples. Previous major versions receive security patches for at least 12 months after their successor is released, giving you time to upgrade at your own pace.`}),`
`,(0,n.jsx)(t.h3,{id:`backward-compatibility`,children:`Backward Compatibility`}),`
`,(0,n.jsx)(t.p,{children:`Minor and patch releases are always backward compatible — you can update to them without changing any existing code. We follow semantic versioning strictly, so the version number always tells you whether an update is safe to apply without review.`})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};