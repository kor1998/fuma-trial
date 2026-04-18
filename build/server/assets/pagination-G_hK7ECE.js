import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/guides/pagination.mdx?collection=docs
var pagination_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Pagination",
	"description": "Navigate through large datasets with offset-based and cursor-based pagination.",
	"icon": "List"
};
var _markdown = "\n\nAny non-trivial application will eventually need to work with datasets too large to return in a single API response. The SDK provides both low-level controls for manual pagination and high-level patterns for common use cases.\n\nIntroduction [#introduction]\n\nThe Voltus API uses pagination to break large result sets into manageable pages. Understanding the available pagination methods helps you choose the right approach for each use case.\n\nWhy Pagination Matters [#why-pagination-matters]\n\nWithout pagination, a single API call could return millions of records, consuming excessive bandwidth, memory, and processing time on both the client and server. Pagination keeps individual requests fast and predictable, regardless of how much data exists in your account.\n\nChoosing a Method [#choosing-a-method]\n\nThe API supports two pagination methods — offset-based and cursor-based. Offset pagination is simpler and supports random page access. Cursor pagination is more reliable for frequently changing data. Most applications use offset pagination by default and switch to cursors for specific real-time use cases.\n\nOffset Pagination [#offset-pagination]\n\nThe default pagination method uses `limit` and `offset` parameters to control which slice of data you receive.\n\nHow It Works [#how-it-works]\n\nSet `limit` to the number of records per page and `offset` to the starting position. The response includes a `pagination` object with `total`, `limit`, `offset`, and `hasMore` fields. To get the next page, increment offset by the limit value and make another request.\n\nConsiderations [#considerations]\n\nThe main thing to keep in mind is that underlying data can change between page requests. If a new record is inserted while you're iterating, you might see duplicates. For most applications this is acceptable, but if you need guaranteed consistency, cursor-based pagination is a better choice.\n\nCursor Pagination [#cursor-pagination]\n\nFor real-time or frequently changing data, cursor-based pagination provides consistency guarantees that offset pagination cannot.\n\nHow It Works [#how-it-works-1]\n\nMake your first request without a cursor. Each response includes a `nextCursor` string that encodes your exact position in the result set. Pass this cursor to the next request to continue where you left off. When `nextCursor` is null, you've reached the end.\n\nWhen to Use Cursors [#when-to-use-cursors]\n\nCursor pagination is ideal for processing event feeds, syncing data between systems, and building infinite-scroll interfaces. The trade-off is that you can only move forward through results — random page access and jumping to a specific page number aren't supported.\n\nFetching All Records [#fetching-all-records]\n\nSometimes you need every record in a collection regardless of how many pages it spans.\n\nThe Loop Pattern [#the-loop-pattern]\n\nCreate a loop that fetches one page at a time, appends results to an array, and increments the offset until `hasMore` is false. This is straightforward but loads the entire dataset into memory, which can be problematic for very large collections.\n\nThe Generator Pattern [#the-generator-pattern]\n\nFor large datasets, use an async generator that yields one page at a time. The calling code can process and discard each page before fetching the next, keeping memory usage constant regardless of total dataset size. This approach is ideal for data exports, migrations, and ETL pipelines.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Any non-trivial application will eventually need to work with datasets too large to return in a single API response. The SDK provides both low-level controls for manual pagination and high-level patterns for common use cases."
		},
		{
			"heading": "introduction",
			"content": "The Voltus API uses pagination to break large result sets into manageable pages. Understanding the available pagination methods helps you choose the right approach for each use case."
		},
		{
			"heading": "why-pagination-matters",
			"content": "Without pagination, a single API call could return millions of records, consuming excessive bandwidth, memory, and processing time on both the client and server. Pagination keeps individual requests fast and predictable, regardless of how much data exists in your account."
		},
		{
			"heading": "choosing-a-method",
			"content": "The API supports two pagination methods — offset-based and cursor-based. Offset pagination is simpler and supports random page access. Cursor pagination is more reliable for frequently changing data. Most applications use offset pagination by default and switch to cursors for specific real-time use cases."
		},
		{
			"heading": "offset-pagination",
			"content": "The default pagination method uses `limit` and `offset` parameters to control which slice of data you receive."
		},
		{
			"heading": "how-it-works",
			"content": "Set `limit` to the number of records per page and `offset` to the starting position. The response includes a `pagination` object with `total`, `limit`, `offset`, and `hasMore` fields. To get the next page, increment offset by the limit value and make another request."
		},
		{
			"heading": "considerations",
			"content": "The main thing to keep in mind is that underlying data can change between page requests. If a new record is inserted while you're iterating, you might see duplicates. For most applications this is acceptable, but if you need guaranteed consistency, cursor-based pagination is a better choice."
		},
		{
			"heading": "cursor-pagination",
			"content": "For real-time or frequently changing data, cursor-based pagination provides consistency guarantees that offset pagination cannot."
		},
		{
			"heading": "how-it-works-1",
			"content": "Make your first request without a cursor. Each response includes a `nextCursor` string that encodes your exact position in the result set. Pass this cursor to the next request to continue where you left off. When `nextCursor` is null, you've reached the end."
		},
		{
			"heading": "when-to-use-cursors",
			"content": "Cursor pagination is ideal for processing event feeds, syncing data between systems, and building infinite-scroll interfaces. The trade-off is that you can only move forward through results — random page access and jumping to a specific page number aren't supported."
		},
		{
			"heading": "fetching-all-records",
			"content": "Sometimes you need every record in a collection regardless of how many pages it spans."
		},
		{
			"heading": "the-loop-pattern",
			"content": "Create a loop that fetches one page at a time, appends results to an array, and increments the offset until `hasMore` is false. This is straightforward but loads the entire dataset into memory, which can be problematic for very large collections."
		},
		{
			"heading": "the-generator-pattern",
			"content": "For large datasets, use an async generator that yields one page at a time. The calling code can process and discard each page before fetching the next, keeping memory usage constant regardless of total dataset size. This approach is ideal for data exports, migrations, and ETL pipelines."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "why-pagination-matters",
			"content": "Why Pagination Matters"
		},
		{
			"id": "choosing-a-method",
			"content": "Choosing a Method"
		},
		{
			"id": "offset-pagination",
			"content": "Offset Pagination"
		},
		{
			"id": "how-it-works",
			"content": "How It Works"
		},
		{
			"id": "considerations",
			"content": "Considerations"
		},
		{
			"id": "cursor-pagination",
			"content": "Cursor Pagination"
		},
		{
			"id": "how-it-works-1",
			"content": "How It Works"
		},
		{
			"id": "when-to-use-cursors",
			"content": "When to Use Cursors"
		},
		{
			"id": "fetching-all-records",
			"content": "Fetching All Records"
		},
		{
			"id": "the-loop-pattern",
			"content": "The Loop Pattern"
		},
		{
			"id": "the-generator-pattern",
			"content": "The Generator Pattern"
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
		url: "#why-pagination-matters",
		title: jsx(Fragment, { children: "Why Pagination Matters" })
	},
	{
		depth: 3,
		url: "#choosing-a-method",
		title: jsx(Fragment, { children: "Choosing a Method" })
	},
	{
		depth: 2,
		url: "#offset-pagination",
		title: jsx(Fragment, { children: "Offset Pagination" })
	},
	{
		depth: 3,
		url: "#how-it-works",
		title: jsx(Fragment, { children: "How It Works" })
	},
	{
		depth: 3,
		url: "#considerations",
		title: jsx(Fragment, { children: "Considerations" })
	},
	{
		depth: 2,
		url: "#cursor-pagination",
		title: jsx(Fragment, { children: "Cursor Pagination" })
	},
	{
		depth: 3,
		url: "#how-it-works-1",
		title: jsx(Fragment, { children: "How It Works" })
	},
	{
		depth: 3,
		url: "#when-to-use-cursors",
		title: jsx(Fragment, { children: "When to Use Cursors" })
	},
	{
		depth: 2,
		url: "#fetching-all-records",
		title: jsx(Fragment, { children: "Fetching All Records" })
	},
	{
		depth: 3,
		url: "#the-loop-pattern",
		title: jsx(Fragment, { children: "The Loop Pattern" })
	},
	{
		depth: 3,
		url: "#the-generator-pattern",
		title: jsx(Fragment, { children: "The Generator Pattern" })
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
		jsx(_components.p, { children: "Any non-trivial application will eventually need to work with datasets too large to return in a single API response. The SDK provides both low-level controls for manual pagination and high-level patterns for common use cases." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "The Voltus API uses pagination to break large result sets into manageable pages. Understanding the available pagination methods helps you choose the right approach for each use case." }),
		"\n",
		jsx(_components.h3, {
			id: "why-pagination-matters",
			children: "Why Pagination Matters"
		}),
		"\n",
		jsx(_components.p, { children: "Without pagination, a single API call could return millions of records, consuming excessive bandwidth, memory, and processing time on both the client and server. Pagination keeps individual requests fast and predictable, regardless of how much data exists in your account." }),
		"\n",
		jsx(_components.h3, {
			id: "choosing-a-method",
			children: "Choosing a Method"
		}),
		"\n",
		jsx(_components.p, { children: "The API supports two pagination methods — offset-based and cursor-based. Offset pagination is simpler and supports random page access. Cursor pagination is more reliable for frequently changing data. Most applications use offset pagination by default and switch to cursors for specific real-time use cases." }),
		"\n",
		jsx(_components.h2, {
			id: "offset-pagination",
			children: "Offset Pagination"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The default pagination method uses ",
			jsx(_components.code, { children: "limit" }),
			" and ",
			jsx(_components.code, { children: "offset" }),
			" parameters to control which slice of data you receive."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "how-it-works",
			children: "How It Works"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Set ",
			jsx(_components.code, { children: "limit" }),
			" to the number of records per page and ",
			jsx(_components.code, { children: "offset" }),
			" to the starting position. The response includes a ",
			jsx(_components.code, { children: "pagination" }),
			" object with ",
			jsx(_components.code, { children: "total" }),
			", ",
			jsx(_components.code, { children: "limit" }),
			", ",
			jsx(_components.code, { children: "offset" }),
			", and ",
			jsx(_components.code, { children: "hasMore" }),
			" fields. To get the next page, increment offset by the limit value and make another request."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "considerations",
			children: "Considerations"
		}),
		"\n",
		jsx(_components.p, { children: "The main thing to keep in mind is that underlying data can change between page requests. If a new record is inserted while you're iterating, you might see duplicates. For most applications this is acceptable, but if you need guaranteed consistency, cursor-based pagination is a better choice." }),
		"\n",
		jsx(_components.h2, {
			id: "cursor-pagination",
			children: "Cursor Pagination"
		}),
		"\n",
		jsx(_components.p, { children: "For real-time or frequently changing data, cursor-based pagination provides consistency guarantees that offset pagination cannot." }),
		"\n",
		jsx(_components.h3, {
			id: "how-it-works-1",
			children: "How It Works"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Make your first request without a cursor. Each response includes a ",
			jsx(_components.code, { children: "nextCursor" }),
			" string that encodes your exact position in the result set. Pass this cursor to the next request to continue where you left off. When ",
			jsx(_components.code, { children: "nextCursor" }),
			" is null, you've reached the end."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "when-to-use-cursors",
			children: "When to Use Cursors"
		}),
		"\n",
		jsx(_components.p, { children: "Cursor pagination is ideal for processing event feeds, syncing data between systems, and building infinite-scroll interfaces. The trade-off is that you can only move forward through results — random page access and jumping to a specific page number aren't supported." }),
		"\n",
		jsx(_components.h2, {
			id: "fetching-all-records",
			children: "Fetching All Records"
		}),
		"\n",
		jsx(_components.p, { children: "Sometimes you need every record in a collection regardless of how many pages it spans." }),
		"\n",
		jsx(_components.h3, {
			id: "the-loop-pattern",
			children: "The Loop Pattern"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create a loop that fetches one page at a time, appends results to an array, and increments the offset until ",
			jsx(_components.code, { children: "hasMore" }),
			" is false. This is straightforward but loads the entire dataset into memory, which can be problematic for very large collections."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "the-generator-pattern",
			children: "The Generator Pattern"
		}),
		"\n",
		jsx(_components.p, { children: "For large datasets, use an async generator that yields one page at a time. The calling code can process and discard each page before fetching the next, keeping memory usage constant regardless of total dataset size. This approach is ideal for data exports, migrations, and ETL pipelines." })
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
export { structuredData as a, pagination_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
