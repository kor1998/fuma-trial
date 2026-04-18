import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/guides/data-fetching.mdx?collection=docs
var data_fetching_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Data Fetching",
	"description": "Patterns and best practices for fetching data efficiently with the Voltus SDK.",
	"icon": "Database"
};
var _markdown = "\n\nFetching data efficiently is one of the most important aspects of building a reliable integration. This guide covers the patterns that work best across production applications of all sizes.\n\nIntroduction [#introduction]\n\nThe SDK provides a straightforward API for reading data, but how you structure your fetching logic has a significant impact on performance, reliability, and user experience.\n\nThe Basics [#the-basics]\n\nEvery list method returns a paginated response with a `data` array and a `pagination` object. Every get method returns a single resource or throws a `NotFoundError`. These consistent patterns mean you only need to learn the approach once and it applies everywhere.\n\nThinking About Performance [#thinking-about-performance]\n\nThe two biggest factors in fetch performance are the number of requests you make and the amount of data each request returns. Minimizing both through filtering, parallel fetching, and caching is the key to building fast integrations.\n\nFiltered Queries [#filtered-queries]\n\nNarrowing your queries to only the data you need reduces transfer size and processing time.\n\nField Filtering [#field-filtering]\n\nEvery list method accepts a `filter` object that lets you narrow results by field values, date ranges, tags, and status. Filters are applied server-side, so you only transfer the data you actually need rather than fetching everything and filtering locally.\n\nSorting and Ordering [#sorting-and-ordering]\n\nPass a `sort` field name and an `order` direction to control the order of results. You can combine filtering and sorting in a single request, which is useful for building search interfaces, activity feeds, or dashboards that show the most recently updated resources.\n\nParallel Fetching [#parallel-fetching]\n\nWhen you need data from multiple independent sources, fetch them simultaneously rather than sequentially.\n\nUsing Promise.all [#using-promiseall]\n\nWrap your independent API calls in `Promise.all()` to execute them concurrently. Three requests that each take 200 milliseconds will complete in 200 milliseconds total rather than 600 milliseconds when run in parallel. The SDK's connection pooling ensures parallel requests are handled efficiently.\n\nBatch Queries [#batch-queries]\n\nWhen you need multiple records by ID, use a list filter with an `in` operator rather than making individual get calls. This reduces the number of API calls from N to 1 and is especially important when working under rate limits where every saved request counts.\n\nCaching [#caching]\n\nNot every piece of data needs to be fetched fresh on every request. Implementing a cache layer can dramatically reduce API calls and improve responsiveness.\n\nIn-Memory Cache [#in-memory-cache]\n\nA basic in-memory cache with a time-to-live expiration is often sufficient for single-instance applications. Store the response data with an expiration timestamp, and return the cached version for subsequent requests until the TTL expires. The SDK's consistent response format makes it easy to cache any endpoint's results.\n\nExternal Cache [#external-cache]\n\nFor multi-instance deployments, use Redis or a similar external cache that persists across restarts and can be shared between application instances. Choose TTLs based on how frequently each type of data changes — user profiles might be cached for five minutes while resource lists might only last thirty seconds.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Fetching data efficiently is one of the most important aspects of building a reliable integration. This guide covers the patterns that work best across production applications of all sizes."
		},
		{
			"heading": "introduction",
			"content": "The SDK provides a straightforward API for reading data, but how you structure your fetching logic has a significant impact on performance, reliability, and user experience."
		},
		{
			"heading": "the-basics",
			"content": "Every list method returns a paginated response with a `data` array and a `pagination` object. Every get method returns a single resource or throws a `NotFoundError`. These consistent patterns mean you only need to learn the approach once and it applies everywhere."
		},
		{
			"heading": "thinking-about-performance",
			"content": "The two biggest factors in fetch performance are the number of requests you make and the amount of data each request returns. Minimizing both through filtering, parallel fetching, and caching is the key to building fast integrations."
		},
		{
			"heading": "filtered-queries",
			"content": "Narrowing your queries to only the data you need reduces transfer size and processing time."
		},
		{
			"heading": "field-filtering",
			"content": "Every list method accepts a `filter` object that lets you narrow results by field values, date ranges, tags, and status. Filters are applied server-side, so you only transfer the data you actually need rather than fetching everything and filtering locally."
		},
		{
			"heading": "sorting-and-ordering",
			"content": "Pass a `sort` field name and an `order` direction to control the order of results. You can combine filtering and sorting in a single request, which is useful for building search interfaces, activity feeds, or dashboards that show the most recently updated resources."
		},
		{
			"heading": "parallel-fetching",
			"content": "When you need data from multiple independent sources, fetch them simultaneously rather than sequentially."
		},
		{
			"heading": "using-promiseall",
			"content": "Wrap your independent API calls in `Promise.all()` to execute them concurrently. Three requests that each take 200 milliseconds will complete in 200 milliseconds total rather than 600 milliseconds when run in parallel. The SDK's connection pooling ensures parallel requests are handled efficiently."
		},
		{
			"heading": "batch-queries",
			"content": "When you need multiple records by ID, use a list filter with an `in` operator rather than making individual get calls. This reduces the number of API calls from N to 1 and is especially important when working under rate limits where every saved request counts."
		},
		{
			"heading": "caching",
			"content": "Not every piece of data needs to be fetched fresh on every request. Implementing a cache layer can dramatically reduce API calls and improve responsiveness."
		},
		{
			"heading": "in-memory-cache",
			"content": "A basic in-memory cache with a time-to-live expiration is often sufficient for single-instance applications. Store the response data with an expiration timestamp, and return the cached version for subsequent requests until the TTL expires. The SDK's consistent response format makes it easy to cache any endpoint's results."
		},
		{
			"heading": "external-cache",
			"content": "For multi-instance deployments, use Redis or a similar external cache that persists across restarts and can be shared between application instances. Choose TTLs based on how frequently each type of data changes — user profiles might be cached for five minutes while resource lists might only last thirty seconds."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "the-basics",
			"content": "The Basics"
		},
		{
			"id": "thinking-about-performance",
			"content": "Thinking About Performance"
		},
		{
			"id": "filtered-queries",
			"content": "Filtered Queries"
		},
		{
			"id": "field-filtering",
			"content": "Field Filtering"
		},
		{
			"id": "sorting-and-ordering",
			"content": "Sorting and Ordering"
		},
		{
			"id": "parallel-fetching",
			"content": "Parallel Fetching"
		},
		{
			"id": "using-promiseall",
			"content": "Using Promise.all"
		},
		{
			"id": "batch-queries",
			"content": "Batch Queries"
		},
		{
			"id": "caching",
			"content": "Caching"
		},
		{
			"id": "in-memory-cache",
			"content": "In-Memory Cache"
		},
		{
			"id": "external-cache",
			"content": "External Cache"
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
		url: "#the-basics",
		title: jsx(Fragment, { children: "The Basics" })
	},
	{
		depth: 3,
		url: "#thinking-about-performance",
		title: jsx(Fragment, { children: "Thinking About Performance" })
	},
	{
		depth: 2,
		url: "#filtered-queries",
		title: jsx(Fragment, { children: "Filtered Queries" })
	},
	{
		depth: 3,
		url: "#field-filtering",
		title: jsx(Fragment, { children: "Field Filtering" })
	},
	{
		depth: 3,
		url: "#sorting-and-ordering",
		title: jsx(Fragment, { children: "Sorting and Ordering" })
	},
	{
		depth: 2,
		url: "#parallel-fetching",
		title: jsx(Fragment, { children: "Parallel Fetching" })
	},
	{
		depth: 3,
		url: "#using-promiseall",
		title: jsx(Fragment, { children: "Using Promise.all" })
	},
	{
		depth: 3,
		url: "#batch-queries",
		title: jsx(Fragment, { children: "Batch Queries" })
	},
	{
		depth: 2,
		url: "#caching",
		title: jsx(Fragment, { children: "Caching" })
	},
	{
		depth: 3,
		url: "#in-memory-cache",
		title: jsx(Fragment, { children: "In-Memory Cache" })
	},
	{
		depth: 3,
		url: "#external-cache",
		title: jsx(Fragment, { children: "External Cache" })
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
		jsx(_components.p, { children: "Fetching data efficiently is one of the most important aspects of building a reliable integration. This guide covers the patterns that work best across production applications of all sizes." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "The SDK provides a straightforward API for reading data, but how you structure your fetching logic has a significant impact on performance, reliability, and user experience." }),
		"\n",
		jsx(_components.h3, {
			id: "the-basics",
			children: "The Basics"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every list method returns a paginated response with a ",
			jsx(_components.code, { children: "data" }),
			" array and a ",
			jsx(_components.code, { children: "pagination" }),
			" object. Every get method returns a single resource or throws a ",
			jsx(_components.code, { children: "NotFoundError" }),
			". These consistent patterns mean you only need to learn the approach once and it applies everywhere."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "thinking-about-performance",
			children: "Thinking About Performance"
		}),
		"\n",
		jsx(_components.p, { children: "The two biggest factors in fetch performance are the number of requests you make and the amount of data each request returns. Minimizing both through filtering, parallel fetching, and caching is the key to building fast integrations." }),
		"\n",
		jsx(_components.h2, {
			id: "filtered-queries",
			children: "Filtered Queries"
		}),
		"\n",
		jsx(_components.p, { children: "Narrowing your queries to only the data you need reduces transfer size and processing time." }),
		"\n",
		jsx(_components.h3, {
			id: "field-filtering",
			children: "Field Filtering"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every list method accepts a ",
			jsx(_components.code, { children: "filter" }),
			" object that lets you narrow results by field values, date ranges, tags, and status. Filters are applied server-side, so you only transfer the data you actually need rather than fetching everything and filtering locally."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "sorting-and-ordering",
			children: "Sorting and Ordering"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Pass a ",
			jsx(_components.code, { children: "sort" }),
			" field name and an ",
			jsx(_components.code, { children: "order" }),
			" direction to control the order of results. You can combine filtering and sorting in a single request, which is useful for building search interfaces, activity feeds, or dashboards that show the most recently updated resources."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "parallel-fetching",
			children: "Parallel Fetching"
		}),
		"\n",
		jsx(_components.p, { children: "When you need data from multiple independent sources, fetch them simultaneously rather than sequentially." }),
		"\n",
		jsx(_components.h3, {
			id: "using-promiseall",
			children: "Using Promise.all"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Wrap your independent API calls in ",
			jsx(_components.code, { children: "Promise.all()" }),
			" to execute them concurrently. Three requests that each take 200 milliseconds will complete in 200 milliseconds total rather than 600 milliseconds when run in parallel. The SDK's connection pooling ensures parallel requests are handled efficiently."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "batch-queries",
			children: "Batch Queries"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"When you need multiple records by ID, use a list filter with an ",
			jsx(_components.code, { children: "in" }),
			" operator rather than making individual get calls. This reduces the number of API calls from N to 1 and is especially important when working under rate limits where every saved request counts."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "caching",
			children: "Caching"
		}),
		"\n",
		jsx(_components.p, { children: "Not every piece of data needs to be fetched fresh on every request. Implementing a cache layer can dramatically reduce API calls and improve responsiveness." }),
		"\n",
		jsx(_components.h3, {
			id: "in-memory-cache",
			children: "In-Memory Cache"
		}),
		"\n",
		jsx(_components.p, { children: "A basic in-memory cache with a time-to-live expiration is often sufficient for single-instance applications. Store the response data with an expiration timestamp, and return the cached version for subsequent requests until the TTL expires. The SDK's consistent response format makes it easy to cache any endpoint's results." }),
		"\n",
		jsx(_components.h3, {
			id: "external-cache",
			children: "External Cache"
		}),
		"\n",
		jsx(_components.p, { children: "For multi-instance deployments, use Redis or a similar external cache that persists across restarts and can be shared between application instances. Choose TTLs based on how frequently each type of data changes — user profiles might be cached for five minutes while resource lists might only last thirty seconds." })
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, data_fetching_exports as r, MDXContent as t };
