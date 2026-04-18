import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/api-reference/endpoints.mdx?collection=docs
var endpoints_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "REST Endpoints",
	"description": "Complete list of REST API endpoints available through the Voltus SDK.",
	"icon": "Link"
};
var _markdown = "\n\nWhile the SDK abstracts HTTP communication, understanding the underlying REST API can be helpful for debugging, custom integrations, or working in environments where the SDK isn't available.\n\nIntroduction [#introduction]\n\nEvery SDK method maps directly to a REST endpoint. The request and response formats are consistent across the entire API surface, making it easy to predict how any endpoint behaves once you understand the patterns.\n\nBase URL [#base-url]\n\nAll API endpoints are served from `https://api.voltus.dev/v1` for production and `https://sandbox.api.voltus.dev/v1` for sandbox. The version prefix ensures backward compatibility — breaking changes ship under new version prefixes.\n\nRequest Format [#request-format]\n\nEvery request must include an `Authorization` header with your API key as a Bearer token, plus `Content-Type` and `Accept` headers set to `application/json`. The API strictly validates these headers and rejects requests with missing or incorrect values.\n\nResource Endpoints [#resource-endpoints]\n\nResource endpoints follow standard REST conventions with consistent URL patterns and HTTP methods.\n\nRead Operations [#read-operations]\n\n`GET /resources` returns a paginated list of all resources. `GET /resources/:id` returns a single resource by ID or a 404 error if it doesn't exist. Both endpoints support query parameters for filtering by status, tags, and date ranges. The SDK maps these to `client.resources.list()` and `client.resources.get()`.\n\nWrite Operations [#write-operations]\n\n`POST /resources` creates a new resource and returns it with server-generated fields. `PATCH /resources/:id` updates specific fields on an existing resource using merge-patch semantics. `DELETE /resources/:id` permanently removes a resource and returns a 204 status with no body. The SDK maps these to `create()`, `update()`, and `delete()` methods.\n\nResponse Format [#response-format]\n\nAll API responses follow consistent structures that make parsing predictable across every endpoint.\n\nSuccess Responses [#success-responses]\n\nSingle-resource responses wrap the data in a `data` field containing the full resource object. List responses include the `data` array plus a `pagination` object with `total`, `limit`, `offset`, and `hasMore` fields. Create and update operations return the full resource in the `data` field including server-generated values.\n\nError Responses [#error-responses]\n\nError responses include an `error` object with a machine-readable `code`, a human-readable `message`, and a unique `requestId` for support inquiries. Validation errors include an additional `fields` array listing each invalid field with its specific error message.\n\nStatus Codes [#status-codes]\n\nThe API uses standard HTTP status codes consistently across all endpoints.\n\nSuccess Codes [#success-codes]\n\n`200 OK` for successful reads and updates. `201 Created` for successful resource creation. `204 No Content` for successful deletions. These are the only three success codes the API returns.\n\nError Codes [#error-codes]\n\n`400 Bad Request` for malformed requests. `401 Unauthorized` for invalid credentials. `403 Forbidden` for insufficient permissions. `404 Not Found` for missing resources. `422 Unprocessable Entity` for validation failures. `429 Too Many Requests` for rate limiting. `500 Internal Server Error` for server-side issues.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "While the SDK abstracts HTTP communication, understanding the underlying REST API can be helpful for debugging, custom integrations, or working in environments where the SDK isn't available."
		},
		{
			"heading": "introduction",
			"content": "Every SDK method maps directly to a REST endpoint. The request and response formats are consistent across the entire API surface, making it easy to predict how any endpoint behaves once you understand the patterns."
		},
		{
			"heading": "base-url",
			"content": "All API endpoints are served from `https://api.voltus.dev/v1` for production and `https://sandbox.api.voltus.dev/v1` for sandbox. The version prefix ensures backward compatibility — breaking changes ship under new version prefixes."
		},
		{
			"heading": "request-format",
			"content": "Every request must include an `Authorization` header with your API key as a Bearer token, plus `Content-Type` and `Accept` headers set to `application/json`. The API strictly validates these headers and rejects requests with missing or incorrect values."
		},
		{
			"heading": "resource-endpoints",
			"content": "Resource endpoints follow standard REST conventions with consistent URL patterns and HTTP methods."
		},
		{
			"heading": "read-operations",
			"content": "`GET /resources` returns a paginated list of all resources. `GET /resources/:id` returns a single resource by ID or a 404 error if it doesn't exist. Both endpoints support query parameters for filtering by status, tags, and date ranges. The SDK maps these to `client.resources.list()` and `client.resources.get()`."
		},
		{
			"heading": "write-operations",
			"content": "`POST /resources` creates a new resource and returns it with server-generated fields. `PATCH /resources/:id` updates specific fields on an existing resource using merge-patch semantics. `DELETE /resources/:id` permanently removes a resource and returns a 204 status with no body. The SDK maps these to `create()`, `update()`, and `delete()` methods."
		},
		{
			"heading": "response-format",
			"content": "All API responses follow consistent structures that make parsing predictable across every endpoint."
		},
		{
			"heading": "success-responses",
			"content": "Single-resource responses wrap the data in a `data` field containing the full resource object. List responses include the `data` array plus a `pagination` object with `total`, `limit`, `offset`, and `hasMore` fields. Create and update operations return the full resource in the `data` field including server-generated values."
		},
		{
			"heading": "error-responses",
			"content": "Error responses include an `error` object with a machine-readable `code`, a human-readable `message`, and a unique `requestId` for support inquiries. Validation errors include an additional `fields` array listing each invalid field with its specific error message."
		},
		{
			"heading": "status-codes",
			"content": "The API uses standard HTTP status codes consistently across all endpoints."
		},
		{
			"heading": "success-codes",
			"content": "`200 OK` for successful reads and updates. `201 Created` for successful resource creation. `204 No Content` for successful deletions. These are the only three success codes the API returns."
		},
		{
			"heading": "error-codes",
			"content": "`400 Bad Request` for malformed requests. `401 Unauthorized` for invalid credentials. `403 Forbidden` for insufficient permissions. `404 Not Found` for missing resources. `422 Unprocessable Entity` for validation failures. `429 Too Many Requests` for rate limiting. `500 Internal Server Error` for server-side issues."
		}
	],
	"headings": [
		{
			"id": "introduction",
			"content": "Introduction"
		},
		{
			"id": "base-url",
			"content": "Base URL"
		},
		{
			"id": "request-format",
			"content": "Request Format"
		},
		{
			"id": "resource-endpoints",
			"content": "Resource Endpoints"
		},
		{
			"id": "read-operations",
			"content": "Read Operations"
		},
		{
			"id": "write-operations",
			"content": "Write Operations"
		},
		{
			"id": "response-format",
			"content": "Response Format"
		},
		{
			"id": "success-responses",
			"content": "Success Responses"
		},
		{
			"id": "error-responses",
			"content": "Error Responses"
		},
		{
			"id": "status-codes",
			"content": "Status Codes"
		},
		{
			"id": "success-codes",
			"content": "Success Codes"
		},
		{
			"id": "error-codes",
			"content": "Error Codes"
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
		url: "#base-url",
		title: jsx(Fragment, { children: "Base URL" })
	},
	{
		depth: 3,
		url: "#request-format",
		title: jsx(Fragment, { children: "Request Format" })
	},
	{
		depth: 2,
		url: "#resource-endpoints",
		title: jsx(Fragment, { children: "Resource Endpoints" })
	},
	{
		depth: 3,
		url: "#read-operations",
		title: jsx(Fragment, { children: "Read Operations" })
	},
	{
		depth: 3,
		url: "#write-operations",
		title: jsx(Fragment, { children: "Write Operations" })
	},
	{
		depth: 2,
		url: "#response-format",
		title: jsx(Fragment, { children: "Response Format" })
	},
	{
		depth: 3,
		url: "#success-responses",
		title: jsx(Fragment, { children: "Success Responses" })
	},
	{
		depth: 3,
		url: "#error-responses",
		title: jsx(Fragment, { children: "Error Responses" })
	},
	{
		depth: 2,
		url: "#status-codes",
		title: jsx(Fragment, { children: "Status Codes" })
	},
	{
		depth: 3,
		url: "#success-codes",
		title: jsx(Fragment, { children: "Success Codes" })
	},
	{
		depth: 3,
		url: "#error-codes",
		title: jsx(Fragment, { children: "Error Codes" })
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
		jsx(_components.p, { children: "While the SDK abstracts HTTP communication, understanding the underlying REST API can be helpful for debugging, custom integrations, or working in environments where the SDK isn't available." }),
		"\n",
		jsx(_components.h2, {
			id: "introduction",
			children: "Introduction"
		}),
		"\n",
		jsx(_components.p, { children: "Every SDK method maps directly to a REST endpoint. The request and response formats are consistent across the entire API surface, making it easy to predict how any endpoint behaves once you understand the patterns." }),
		"\n",
		jsx(_components.h3, {
			id: "base-url",
			children: "Base URL"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"All API endpoints are served from ",
			jsx(_components.code, { children: "https://api.voltus.dev/v1" }),
			" for production and ",
			jsx(_components.code, { children: "https://sandbox.api.voltus.dev/v1" }),
			" for sandbox. The version prefix ensures backward compatibility — breaking changes ship under new version prefixes."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "request-format",
			children: "Request Format"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Every request must include an ",
			jsx(_components.code, { children: "Authorization" }),
			" header with your API key as a Bearer token, plus ",
			jsx(_components.code, { children: "Content-Type" }),
			" and ",
			jsx(_components.code, { children: "Accept" }),
			" headers set to ",
			jsx(_components.code, { children: "application/json" }),
			". The API strictly validates these headers and rejects requests with missing or incorrect values."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "resource-endpoints",
			children: "Resource Endpoints"
		}),
		"\n",
		jsx(_components.p, { children: "Resource endpoints follow standard REST conventions with consistent URL patterns and HTTP methods." }),
		"\n",
		jsx(_components.h3, {
			id: "read-operations",
			children: "Read Operations"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "GET /resources" }),
			" returns a paginated list of all resources. ",
			jsx(_components.code, { children: "GET /resources/:id" }),
			" returns a single resource by ID or a 404 error if it doesn't exist. Both endpoints support query parameters for filtering by status, tags, and date ranges. The SDK maps these to ",
			jsx(_components.code, { children: "client.resources.list()" }),
			" and ",
			jsx(_components.code, { children: "client.resources.get()" }),
			"."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "write-operations",
			children: "Write Operations"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "POST /resources" }),
			" creates a new resource and returns it with server-generated fields. ",
			jsx(_components.code, { children: "PATCH /resources/:id" }),
			" updates specific fields on an existing resource using merge-patch semantics. ",
			jsx(_components.code, { children: "DELETE /resources/:id" }),
			" permanently removes a resource and returns a 204 status with no body. The SDK maps these to ",
			jsx(_components.code, { children: "create()" }),
			", ",
			jsx(_components.code, { children: "update()" }),
			", and ",
			jsx(_components.code, { children: "delete()" }),
			" methods."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "response-format",
			children: "Response Format"
		}),
		"\n",
		jsx(_components.p, { children: "All API responses follow consistent structures that make parsing predictable across every endpoint." }),
		"\n",
		jsx(_components.h3, {
			id: "success-responses",
			children: "Success Responses"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Single-resource responses wrap the data in a ",
			jsx(_components.code, { children: "data" }),
			" field containing the full resource object. List responses include the ",
			jsx(_components.code, { children: "data" }),
			" array plus a ",
			jsx(_components.code, { children: "pagination" }),
			" object with ",
			jsx(_components.code, { children: "total" }),
			", ",
			jsx(_components.code, { children: "limit" }),
			", ",
			jsx(_components.code, { children: "offset" }),
			", and ",
			jsx(_components.code, { children: "hasMore" }),
			" fields. Create and update operations return the full resource in the ",
			jsx(_components.code, { children: "data" }),
			" field including server-generated values."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "error-responses",
			children: "Error Responses"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Error responses include an ",
			jsx(_components.code, { children: "error" }),
			" object with a machine-readable ",
			jsx(_components.code, { children: "code" }),
			", a human-readable ",
			jsx(_components.code, { children: "message" }),
			", and a unique ",
			jsx(_components.code, { children: "requestId" }),
			" for support inquiries. Validation errors include an additional ",
			jsx(_components.code, { children: "fields" }),
			" array listing each invalid field with its specific error message."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "status-codes",
			children: "Status Codes"
		}),
		"\n",
		jsx(_components.p, { children: "The API uses standard HTTP status codes consistently across all endpoints." }),
		"\n",
		jsx(_components.h3, {
			id: "success-codes",
			children: "Success Codes"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "200 OK" }),
			" for successful reads and updates. ",
			jsx(_components.code, { children: "201 Created" }),
			" for successful resource creation. ",
			jsx(_components.code, { children: "204 No Content" }),
			" for successful deletions. These are the only three success codes the API returns."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "error-codes",
			children: "Error Codes"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "400 Bad Request" }),
			" for malformed requests. ",
			jsx(_components.code, { children: "401 Unauthorized" }),
			" for invalid credentials. ",
			jsx(_components.code, { children: "403 Forbidden" }),
			" for insufficient permissions. ",
			jsx(_components.code, { children: "404 Not Found" }),
			" for missing resources. ",
			jsx(_components.code, { children: "422 Unprocessable Entity" }),
			" for validation failures. ",
			jsx(_components.code, { children: "429 Too Many Requests" }),
			" for rate limiting. ",
			jsx(_components.code, { children: "500 Internal Server Error" }),
			" for server-side issues."
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
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, endpoints_exports as r, MDXContent as t };
