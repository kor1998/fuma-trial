import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/faq.mdx?collection=docs
var faq_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "FAQ",
	"description": "Frequently asked questions about the Voltus SDK.",
	"icon": "HelpCircle"
};
var _markdown = "\n\nThis page answers the questions we hear most often from developers. If your question isn't covered here, open an issue on GitHub or reach out through our community Discord.\n\nGeneral [#general]\n\nCommon questions about the SDK's capabilities, supported platforms, and licensing.\n\nPlatform Support [#platform-support]\n\nThe SDK supports Node.js 18 and above, Bun, Deno, and modern edge runtimes like Cloudflare Workers and Vercel Edge Functions. It uses the standard Fetch API under the hood, so it works anywhere modern JavaScript runs without platform-specific adapters or polyfills.\n\nGetting an API Key [#getting-an-api-key]\n\nSign in to the Voltus dashboard and navigate to Settings, then API Keys. You can create multiple keys with different scopes and labels. Public keys prefixed with `vlt_pk_` are safe for client-side use but restricted to read-only operations. Secret keys prefixed with `vlt_sk_` have full access and should only be used server-side.\n\nTroubleshooting [#troubleshooting]\n\nSolutions to the most commonly reported issues.\n\nConnection Errors [#connection-errors]\n\nIf you're seeing `ECONNREFUSED` errors, check that your network allows outbound HTTPS connections to `api.voltus.dev` on port 443. Corporate firewalls and VPNs sometimes block unfamiliar domains. Also check the Voltus status page for active incidents affecting API availability.\n\nTimeout Issues [#timeout-issues]\n\nIncrease the client's timeout setting if requests are timing out. The default is 30 seconds, but large data exports may need more. If you're hitting rate limits frequently, review the Rate Limiting guide for strategies to reduce API call volume through batch queries, caching, and webhooks.\n\nMigration [#migration]\n\nInformation about upgrading between versions and backward compatibility.\n\nBreaking Changes [#breaking-changes]\n\nWhen we release a new major version, we publish a detailed migration guide with before-and-after code examples. Previous major versions receive security patches for at least 12 months after their successor is released, giving you time to upgrade at your own pace.\n\nBackward Compatibility [#backward-compatibility]\n\nMinor and patch releases are always backward compatible — you can update to them without changing any existing code. We follow semantic versioning strictly, so the version number always tells you whether an update is safe to apply without review.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "This page answers the questions we hear most often from developers. If your question isn't covered here, open an issue on GitHub or reach out through our community Discord."
		},
		{
			"heading": "general",
			"content": "Common questions about the SDK's capabilities, supported platforms, and licensing."
		},
		{
			"heading": "platform-support",
			"content": "The SDK supports Node.js 18 and above, Bun, Deno, and modern edge runtimes like Cloudflare Workers and Vercel Edge Functions. It uses the standard Fetch API under the hood, so it works anywhere modern JavaScript runs without platform-specific adapters or polyfills."
		},
		{
			"heading": "getting-an-api-key",
			"content": "Sign in to the Voltus dashboard and navigate to Settings, then API Keys. You can create multiple keys with different scopes and labels. Public keys prefixed with `vlt_pk_` are safe for client-side use but restricted to read-only operations. Secret keys prefixed with `vlt_sk_` have full access and should only be used server-side."
		},
		{
			"heading": "troubleshooting",
			"content": "Solutions to the most commonly reported issues."
		},
		{
			"heading": "connection-errors",
			"content": "If you're seeing `ECONNREFUSED` errors, check that your network allows outbound HTTPS connections to `api.voltus.dev` on port 443. Corporate firewalls and VPNs sometimes block unfamiliar domains. Also check the Voltus status page for active incidents affecting API availability."
		},
		{
			"heading": "timeout-issues",
			"content": "Increase the client's timeout setting if requests are timing out. The default is 30 seconds, but large data exports may need more. If you're hitting rate limits frequently, review the Rate Limiting guide for strategies to reduce API call volume through batch queries, caching, and webhooks."
		},
		{
			"heading": "migration",
			"content": "Information about upgrading between versions and backward compatibility."
		},
		{
			"heading": "breaking-changes",
			"content": "When we release a new major version, we publish a detailed migration guide with before-and-after code examples. Previous major versions receive security patches for at least 12 months after their successor is released, giving you time to upgrade at your own pace."
		},
		{
			"heading": "backward-compatibility",
			"content": "Minor and patch releases are always backward compatible — you can update to them without changing any existing code. We follow semantic versioning strictly, so the version number always tells you whether an update is safe to apply without review."
		}
	],
	"headings": [
		{
			"id": "general",
			"content": "General"
		},
		{
			"id": "platform-support",
			"content": "Platform Support"
		},
		{
			"id": "getting-an-api-key",
			"content": "Getting an API Key"
		},
		{
			"id": "troubleshooting",
			"content": "Troubleshooting"
		},
		{
			"id": "connection-errors",
			"content": "Connection Errors"
		},
		{
			"id": "timeout-issues",
			"content": "Timeout Issues"
		},
		{
			"id": "migration",
			"content": "Migration"
		},
		{
			"id": "breaking-changes",
			"content": "Breaking Changes"
		},
		{
			"id": "backward-compatibility",
			"content": "Backward Compatibility"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#general",
		title: jsx(Fragment, { children: "General" })
	},
	{
		depth: 3,
		url: "#platform-support",
		title: jsx(Fragment, { children: "Platform Support" })
	},
	{
		depth: 3,
		url: "#getting-an-api-key",
		title: jsx(Fragment, { children: "Getting an API Key" })
	},
	{
		depth: 2,
		url: "#troubleshooting",
		title: jsx(Fragment, { children: "Troubleshooting" })
	},
	{
		depth: 3,
		url: "#connection-errors",
		title: jsx(Fragment, { children: "Connection Errors" })
	},
	{
		depth: 3,
		url: "#timeout-issues",
		title: jsx(Fragment, { children: "Timeout Issues" })
	},
	{
		depth: 2,
		url: "#migration",
		title: jsx(Fragment, { children: "Migration" })
	},
	{
		depth: 3,
		url: "#breaking-changes",
		title: jsx(Fragment, { children: "Breaking Changes" })
	},
	{
		depth: 3,
		url: "#backward-compatibility",
		title: jsx(Fragment, { children: "Backward Compatibility" })
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
		jsx(_components.p, { children: "This page answers the questions we hear most often from developers. If your question isn't covered here, open an issue on GitHub or reach out through our community Discord." }),
		"\n",
		jsx(_components.h2, {
			id: "general",
			children: "General"
		}),
		"\n",
		jsx(_components.p, { children: "Common questions about the SDK's capabilities, supported platforms, and licensing." }),
		"\n",
		jsx(_components.h3, {
			id: "platform-support",
			children: "Platform Support"
		}),
		"\n",
		jsx(_components.p, { children: "The SDK supports Node.js 18 and above, Bun, Deno, and modern edge runtimes like Cloudflare Workers and Vercel Edge Functions. It uses the standard Fetch API under the hood, so it works anywhere modern JavaScript runs without platform-specific adapters or polyfills." }),
		"\n",
		jsx(_components.h3, {
			id: "getting-an-api-key",
			children: "Getting an API Key"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Sign in to the Voltus dashboard and navigate to Settings, then API Keys. You can create multiple keys with different scopes and labels. Public keys prefixed with ",
			jsx(_components.code, { children: "vlt_pk_" }),
			" are safe for client-side use but restricted to read-only operations. Secret keys prefixed with ",
			jsx(_components.code, { children: "vlt_sk_" }),
			" have full access and should only be used server-side."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "troubleshooting",
			children: "Troubleshooting"
		}),
		"\n",
		jsx(_components.p, { children: "Solutions to the most commonly reported issues." }),
		"\n",
		jsx(_components.h3, {
			id: "connection-errors",
			children: "Connection Errors"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"If you're seeing ",
			jsx(_components.code, { children: "ECONNREFUSED" }),
			" errors, check that your network allows outbound HTTPS connections to ",
			jsx(_components.code, { children: "api.voltus.dev" }),
			" on port 443. Corporate firewalls and VPNs sometimes block unfamiliar domains. Also check the Voltus status page for active incidents affecting API availability."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "timeout-issues",
			children: "Timeout Issues"
		}),
		"\n",
		jsx(_components.p, { children: "Increase the client's timeout setting if requests are timing out. The default is 30 seconds, but large data exports may need more. If you're hitting rate limits frequently, review the Rate Limiting guide for strategies to reduce API call volume through batch queries, caching, and webhooks." }),
		"\n",
		jsx(_components.h2, {
			id: "migration",
			children: "Migration"
		}),
		"\n",
		jsx(_components.p, { children: "Information about upgrading between versions and backward compatibility." }),
		"\n",
		jsx(_components.h3, {
			id: "breaking-changes",
			children: "Breaking Changes"
		}),
		"\n",
		jsx(_components.p, { children: "When we release a new major version, we publish a detailed migration guide with before-and-after code examples. Previous major versions receive security patches for at least 12 months after their successor is released, giving you time to upgrade at your own pace." }),
		"\n",
		jsx(_components.h3, {
			id: "backward-compatibility",
			children: "Backward Compatibility"
		}),
		"\n",
		jsx(_components.p, { children: "Minor and patch releases are always backward compatible — you can update to them without changing any existing code. We follow semantic versioning strictly, so the version number always tells you whether an update is safe to apply without review." })
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, faq_exports as r, MDXContent as t };
