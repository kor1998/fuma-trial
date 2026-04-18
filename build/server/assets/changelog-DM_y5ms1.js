import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/changelog.mdx?collection=docs
var changelog_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Changelog",
	"description": "What's new and improved in every release of the Voltus SDK.",
	"icon": "History"
};
var _markdown = "\n\nWe ship updates to the SDK regularly, with a focus on developer experience, performance, and reliability. Below is a summary of the most recent releases.\n\nLatest Release [#latest-release]\n\nThe most recent version includes significant new features and performance improvements that benefit all users.\n\nVersion 1.4 — April 2026 [#version-14--april-2026]\n\nThis release introduces the Analytics API for programmatic access to usage metrics, cursor-based pagination on the entries endpoint for real-time feeds, and the new middleware system via `client.use()` for custom logging and monitoring. Bundle size was reduced by 18 percent through improved tree-shaking, and TypeScript type inference for filter queries is now significantly more accurate.\n\nVersion 1.3 — March 2026 [#version-13--march-2026]\n\nOAuth 2.0 support landed with full authorization code flow, automatic token refresh, and token revocation. The `webhooks.test()` method was added for debugging webhook endpoints during development. Two bugs were fixed — retry logic now respects the `Retry-After` header correctly, and a race condition in concurrent paginated requests was resolved.\n\nPrevious Releases [#previous-releases]\n\nEarlier versions established the core SDK functionality and infrastructure.\n\nVersion 1.2 — February 2026 [#version-12--february-2026]\n\nThis release brought webhook signature verification, structured validation errors via `ValidationError.fields`, and the new metadata field on resources. The `node-fetch` dependency was removed in favor of native Fetch, making the SDK truly zero-dependency for the first time.\n\nVersion 1.1 — January 2026 [#version-11--january-2026]\n\nBatch operations, custom logger support, and proxy configuration were added. Fixed timeout not being applied to retry requests and URL encoding issues for resource names with special characters.\n\nInitial Release [#initial-release]\n\nThe foundation that started it all.\n\nVersion 1.0 — December 2025 [#version-10--december-2025]\n\nThe first stable release of the Voltus SDK. Included full CRUD operations for Resources and Entries, API key authentication, automatic retries with exponential backoff, rate limit handling, and comprehensive TypeScript type definitions. This release established the patterns and conventions that all subsequent versions build upon.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "We ship updates to the SDK regularly, with a focus on developer experience, performance, and reliability. Below is a summary of the most recent releases."
		},
		{
			"heading": "latest-release",
			"content": "The most recent version includes significant new features and performance improvements that benefit all users."
		},
		{
			"heading": "version-14--april-2026",
			"content": "This release introduces the Analytics API for programmatic access to usage metrics, cursor-based pagination on the entries endpoint for real-time feeds, and the new middleware system via `client.use()` for custom logging and monitoring. Bundle size was reduced by 18 percent through improved tree-shaking, and TypeScript type inference for filter queries is now significantly more accurate."
		},
		{
			"heading": "version-13--march-2026",
			"content": "OAuth 2.0 support landed with full authorization code flow, automatic token refresh, and token revocation. The `webhooks.test()` method was added for debugging webhook endpoints during development. Two bugs were fixed — retry logic now respects the `Retry-After` header correctly, and a race condition in concurrent paginated requests was resolved."
		},
		{
			"heading": "previous-releases",
			"content": "Earlier versions established the core SDK functionality and infrastructure."
		},
		{
			"heading": "version-12--february-2026",
			"content": "This release brought webhook signature verification, structured validation errors via `ValidationError.fields`, and the new metadata field on resources. The `node-fetch` dependency was removed in favor of native Fetch, making the SDK truly zero-dependency for the first time."
		},
		{
			"heading": "version-11--january-2026",
			"content": "Batch operations, custom logger support, and proxy configuration were added. Fixed timeout not being applied to retry requests and URL encoding issues for resource names with special characters."
		},
		{
			"heading": "initial-release",
			"content": "The foundation that started it all."
		},
		{
			"heading": "version-10--december-2025",
			"content": "The first stable release of the Voltus SDK. Included full CRUD operations for Resources and Entries, API key authentication, automatic retries with exponential backoff, rate limit handling, and comprehensive TypeScript type definitions. This release established the patterns and conventions that all subsequent versions build upon."
		}
	],
	"headings": [
		{
			"id": "latest-release",
			"content": "Latest Release"
		},
		{
			"id": "version-14--april-2026",
			"content": "Version 1.4 — April 2026"
		},
		{
			"id": "version-13--march-2026",
			"content": "Version 1.3 — March 2026"
		},
		{
			"id": "previous-releases",
			"content": "Previous Releases"
		},
		{
			"id": "version-12--february-2026",
			"content": "Version 1.2 — February 2026"
		},
		{
			"id": "version-11--january-2026",
			"content": "Version 1.1 — January 2026"
		},
		{
			"id": "initial-release",
			"content": "Initial Release"
		},
		{
			"id": "version-10--december-2025",
			"content": "Version 1.0 — December 2025"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#latest-release",
		title: jsx(Fragment, { children: "Latest Release" })
	},
	{
		depth: 3,
		url: "#version-14--april-2026",
		title: jsx(Fragment, { children: "Version 1.4 — April 2026" })
	},
	{
		depth: 3,
		url: "#version-13--march-2026",
		title: jsx(Fragment, { children: "Version 1.3 — March 2026" })
	},
	{
		depth: 2,
		url: "#previous-releases",
		title: jsx(Fragment, { children: "Previous Releases" })
	},
	{
		depth: 3,
		url: "#version-12--february-2026",
		title: jsx(Fragment, { children: "Version 1.2 — February 2026" })
	},
	{
		depth: 3,
		url: "#version-11--january-2026",
		title: jsx(Fragment, { children: "Version 1.1 — January 2026" })
	},
	{
		depth: 2,
		url: "#initial-release",
		title: jsx(Fragment, { children: "Initial Release" })
	},
	{
		depth: 3,
		url: "#version-10--december-2025",
		title: jsx(Fragment, { children: "Version 1.0 — December 2025" })
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
		jsx(_components.p, { children: "We ship updates to the SDK regularly, with a focus on developer experience, performance, and reliability. Below is a summary of the most recent releases." }),
		"\n",
		jsx(_components.h2, {
			id: "latest-release",
			children: "Latest Release"
		}),
		"\n",
		jsx(_components.p, { children: "The most recent version includes significant new features and performance improvements that benefit all users." }),
		"\n",
		jsx(_components.h3, {
			id: "version-14--april-2026",
			children: "Version 1.4 — April 2026"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"This release introduces the Analytics API for programmatic access to usage metrics, cursor-based pagination on the entries endpoint for real-time feeds, and the new middleware system via ",
			jsx(_components.code, { children: "client.use()" }),
			" for custom logging and monitoring. Bundle size was reduced by 18 percent through improved tree-shaking, and TypeScript type inference for filter queries is now significantly more accurate."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "version-13--march-2026",
			children: "Version 1.3 — March 2026"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"OAuth 2.0 support landed with full authorization code flow, automatic token refresh, and token revocation. The ",
			jsx(_components.code, { children: "webhooks.test()" }),
			" method was added for debugging webhook endpoints during development. Two bugs were fixed — retry logic now respects the ",
			jsx(_components.code, { children: "Retry-After" }),
			" header correctly, and a race condition in concurrent paginated requests was resolved."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "previous-releases",
			children: "Previous Releases"
		}),
		"\n",
		jsx(_components.p, { children: "Earlier versions established the core SDK functionality and infrastructure." }),
		"\n",
		jsx(_components.h3, {
			id: "version-12--february-2026",
			children: "Version 1.2 — February 2026"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"This release brought webhook signature verification, structured validation errors via ",
			jsx(_components.code, { children: "ValidationError.fields" }),
			", and the new metadata field on resources. The ",
			jsx(_components.code, { children: "node-fetch" }),
			" dependency was removed in favor of native Fetch, making the SDK truly zero-dependency for the first time."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "version-11--january-2026",
			children: "Version 1.1 — January 2026"
		}),
		"\n",
		jsx(_components.p, { children: "Batch operations, custom logger support, and proxy configuration were added. Fixed timeout not being applied to retry requests and URL encoding issues for resource names with special characters." }),
		"\n",
		jsx(_components.h2, {
			id: "initial-release",
			children: "Initial Release"
		}),
		"\n",
		jsx(_components.p, { children: "The foundation that started it all." }),
		"\n",
		jsx(_components.h3, {
			id: "version-10--december-2025",
			children: "Version 1.0 — December 2025"
		}),
		"\n",
		jsx(_components.p, { children: "The first stable release of the Voltus SDK. Included full CRUD operations for Resources and Entries, API key authentication, automatic retries with exponential backoff, rate limit handling, and comprehensive TypeScript type definitions. This release established the patterns and conventions that all subsequent versions build upon." })
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, changelog_exports as r, MDXContent as t };
