import{r as e}from"./chunk-0oqf_uz2.js";import{t}from"./jsx-runtime-CEHt124i.js";var n=e(t()),r={title:`Data Fetching`,description:`Patterns and best practices for fetching data efficiently with the Voltus SDK.`,icon:`Database`},i=`

Fetching data efficiently is one of the most important aspects of building a reliable integration. This guide covers the patterns that work best across production applications of all sizes.

Introduction [#introduction]

The SDK provides a straightforward API for reading data, but how you structure your fetching logic has a significant impact on performance, reliability, and user experience.

The Basics [#the-basics]

Every list method returns a paginated response with a \`data\` array and a \`pagination\` object. Every get method returns a single resource or throws a \`NotFoundError\`. These consistent patterns mean you only need to learn the approach once and it applies everywhere.

Thinking About Performance [#thinking-about-performance]

The two biggest factors in fetch performance are the number of requests you make and the amount of data each request returns. Minimizing both through filtering, parallel fetching, and caching is the key to building fast integrations.

Filtered Queries [#filtered-queries]

Narrowing your queries to only the data you need reduces transfer size and processing time.

Field Filtering [#field-filtering]

Every list method accepts a \`filter\` object that lets you narrow results by field values, date ranges, tags, and status. Filters are applied server-side, so you only transfer the data you actually need rather than fetching everything and filtering locally.

Sorting and Ordering [#sorting-and-ordering]

Pass a \`sort\` field name and an \`order\` direction to control the order of results. You can combine filtering and sorting in a single request, which is useful for building search interfaces, activity feeds, or dashboards that show the most recently updated resources.

Parallel Fetching [#parallel-fetching]

When you need data from multiple independent sources, fetch them simultaneously rather than sequentially.

Using Promise.all [#using-promiseall]

Wrap your independent API calls in \`Promise.all()\` to execute them concurrently. Three requests that each take 200 milliseconds will complete in 200 milliseconds total rather than 600 milliseconds when run in parallel. The SDK's connection pooling ensures parallel requests are handled efficiently.

Batch Queries [#batch-queries]

When you need multiple records by ID, use a list filter with an \`in\` operator rather than making individual get calls. This reduces the number of API calls from N to 1 and is especially important when working under rate limits where every saved request counts.

Caching [#caching]

Not every piece of data needs to be fetched fresh on every request. Implementing a cache layer can dramatically reduce API calls and improve responsiveness.

In-Memory Cache [#in-memory-cache]

A basic in-memory cache with a time-to-live expiration is often sufficient for single-instance applications. Store the response data with an expiration timestamp, and return the cached version for subsequent requests until the TTL expires. The SDK's consistent response format makes it easy to cache any endpoint's results.

External Cache [#external-cache]

For multi-instance deployments, use Redis or a similar external cache that persists across restarts and can be shared between application instances. Choose TTLs based on how frequently each type of data changes — user profiles might be cached for five minutes while resource lists might only last thirty seconds.
`,a={contents:[{heading:void 0,content:`Fetching data efficiently is one of the most important aspects of building a reliable integration. This guide covers the patterns that work best across production applications of all sizes.`},{heading:`introduction`,content:`The SDK provides a straightforward API for reading data, but how you structure your fetching logic has a significant impact on performance, reliability, and user experience.`},{heading:`the-basics`,content:"Every list method returns a paginated response with a `data` array and a `pagination` object. Every get method returns a single resource or throws a `NotFoundError`. These consistent patterns mean you only need to learn the approach once and it applies everywhere."},{heading:`thinking-about-performance`,content:`The two biggest factors in fetch performance are the number of requests you make and the amount of data each request returns. Minimizing both through filtering, parallel fetching, and caching is the key to building fast integrations.`},{heading:`filtered-queries`,content:`Narrowing your queries to only the data you need reduces transfer size and processing time.`},{heading:`field-filtering`,content:"Every list method accepts a `filter` object that lets you narrow results by field values, date ranges, tags, and status. Filters are applied server-side, so you only transfer the data you actually need rather than fetching everything and filtering locally."},{heading:`sorting-and-ordering`,content:"Pass a `sort` field name and an `order` direction to control the order of results. You can combine filtering and sorting in a single request, which is useful for building search interfaces, activity feeds, or dashboards that show the most recently updated resources."},{heading:`parallel-fetching`,content:`When you need data from multiple independent sources, fetch them simultaneously rather than sequentially.`},{heading:`using-promiseall`,content:"Wrap your independent API calls in `Promise.all()` to execute them concurrently. Three requests that each take 200 milliseconds will complete in 200 milliseconds total rather than 600 milliseconds when run in parallel. The SDK's connection pooling ensures parallel requests are handled efficiently."},{heading:`batch-queries`,content:"When you need multiple records by ID, use a list filter with an `in` operator rather than making individual get calls. This reduces the number of API calls from N to 1 and is especially important when working under rate limits where every saved request counts."},{heading:`caching`,content:`Not every piece of data needs to be fetched fresh on every request. Implementing a cache layer can dramatically reduce API calls and improve responsiveness.`},{heading:`in-memory-cache`,content:`A basic in-memory cache with a time-to-live expiration is often sufficient for single-instance applications. Store the response data with an expiration timestamp, and return the cached version for subsequent requests until the TTL expires. The SDK's consistent response format makes it easy to cache any endpoint's results.`},{heading:`external-cache`,content:`For multi-instance deployments, use Redis or a similar external cache that persists across restarts and can be shared between application instances. Choose TTLs based on how frequently each type of data changes — user profiles might be cached for five minutes while resource lists might only last thirty seconds.`}],headings:[{id:`introduction`,content:`Introduction`},{id:`the-basics`,content:`The Basics`},{id:`thinking-about-performance`,content:`Thinking About Performance`},{id:`filtered-queries`,content:`Filtered Queries`},{id:`field-filtering`,content:`Field Filtering`},{id:`sorting-and-ordering`,content:`Sorting and Ordering`},{id:`parallel-fetching`,content:`Parallel Fetching`},{id:`using-promiseall`,content:`Using Promise.all`},{id:`batch-queries`,content:`Batch Queries`},{id:`caching`,content:`Caching`},{id:`in-memory-cache`,content:`In-Memory Cache`},{id:`external-cache`,content:`External Cache`}]},o=[{depth:2,url:`#introduction`,title:(0,n.jsx)(n.Fragment,{children:`Introduction`})},{depth:3,url:`#the-basics`,title:(0,n.jsx)(n.Fragment,{children:`The Basics`})},{depth:3,url:`#thinking-about-performance`,title:(0,n.jsx)(n.Fragment,{children:`Thinking About Performance`})},{depth:2,url:`#filtered-queries`,title:(0,n.jsx)(n.Fragment,{children:`Filtered Queries`})},{depth:3,url:`#field-filtering`,title:(0,n.jsx)(n.Fragment,{children:`Field Filtering`})},{depth:3,url:`#sorting-and-ordering`,title:(0,n.jsx)(n.Fragment,{children:`Sorting and Ordering`})},{depth:2,url:`#parallel-fetching`,title:(0,n.jsx)(n.Fragment,{children:`Parallel Fetching`})},{depth:3,url:`#using-promiseall`,title:(0,n.jsx)(n.Fragment,{children:`Using Promise.all`})},{depth:3,url:`#batch-queries`,title:(0,n.jsx)(n.Fragment,{children:`Batch Queries`})},{depth:2,url:`#caching`,title:(0,n.jsx)(n.Fragment,{children:`Caching`})},{depth:3,url:`#in-memory-cache`,title:(0,n.jsx)(n.Fragment,{children:`In-Memory Cache`})},{depth:3,url:`#external-cache`,title:(0,n.jsx)(n.Fragment,{children:`External Cache`})}];function s(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Fetching data efficiently is one of the most important aspects of building a reliable integration. This guide covers the patterns that work best across production applications of all sizes.`}),`
`,(0,n.jsx)(t.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,n.jsx)(t.p,{children:`The SDK provides a straightforward API for reading data, but how you structure your fetching logic has a significant impact on performance, reliability, and user experience.`}),`
`,(0,n.jsx)(t.h3,{id:`the-basics`,children:`The Basics`}),`
`,(0,n.jsxs)(t.p,{children:[`Every list method returns a paginated response with a `,(0,n.jsx)(t.code,{children:`data`}),` array and a `,(0,n.jsx)(t.code,{children:`pagination`}),` object. Every get method returns a single resource or throws a `,(0,n.jsx)(t.code,{children:`NotFoundError`}),`. These consistent patterns mean you only need to learn the approach once and it applies everywhere.`]}),`
`,(0,n.jsx)(t.h3,{id:`thinking-about-performance`,children:`Thinking About Performance`}),`
`,(0,n.jsx)(t.p,{children:`The two biggest factors in fetch performance are the number of requests you make and the amount of data each request returns. Minimizing both through filtering, parallel fetching, and caching is the key to building fast integrations.`}),`
`,(0,n.jsx)(t.h2,{id:`filtered-queries`,children:`Filtered Queries`}),`
`,(0,n.jsx)(t.p,{children:`Narrowing your queries to only the data you need reduces transfer size and processing time.`}),`
`,(0,n.jsx)(t.h3,{id:`field-filtering`,children:`Field Filtering`}),`
`,(0,n.jsxs)(t.p,{children:[`Every list method accepts a `,(0,n.jsx)(t.code,{children:`filter`}),` object that lets you narrow results by field values, date ranges, tags, and status. Filters are applied server-side, so you only transfer the data you actually need rather than fetching everything and filtering locally.`]}),`
`,(0,n.jsx)(t.h3,{id:`sorting-and-ordering`,children:`Sorting and Ordering`}),`
`,(0,n.jsxs)(t.p,{children:[`Pass a `,(0,n.jsx)(t.code,{children:`sort`}),` field name and an `,(0,n.jsx)(t.code,{children:`order`}),` direction to control the order of results. You can combine filtering and sorting in a single request, which is useful for building search interfaces, activity feeds, or dashboards that show the most recently updated resources.`]}),`
`,(0,n.jsx)(t.h2,{id:`parallel-fetching`,children:`Parallel Fetching`}),`
`,(0,n.jsx)(t.p,{children:`When you need data from multiple independent sources, fetch them simultaneously rather than sequentially.`}),`
`,(0,n.jsx)(t.h3,{id:`using-promiseall`,children:`Using Promise.all`}),`
`,(0,n.jsxs)(t.p,{children:[`Wrap your independent API calls in `,(0,n.jsx)(t.code,{children:`Promise.all()`}),` to execute them concurrently. Three requests that each take 200 milliseconds will complete in 200 milliseconds total rather than 600 milliseconds when run in parallel. The SDK's connection pooling ensures parallel requests are handled efficiently.`]}),`
`,(0,n.jsx)(t.h3,{id:`batch-queries`,children:`Batch Queries`}),`
`,(0,n.jsxs)(t.p,{children:[`When you need multiple records by ID, use a list filter with an `,(0,n.jsx)(t.code,{children:`in`}),` operator rather than making individual get calls. This reduces the number of API calls from N to 1 and is especially important when working under rate limits where every saved request counts.`]}),`
`,(0,n.jsx)(t.h2,{id:`caching`,children:`Caching`}),`
`,(0,n.jsx)(t.p,{children:`Not every piece of data needs to be fetched fresh on every request. Implementing a cache layer can dramatically reduce API calls and improve responsiveness.`}),`
`,(0,n.jsx)(t.h3,{id:`in-memory-cache`,children:`In-Memory Cache`}),`
`,(0,n.jsx)(t.p,{children:`A basic in-memory cache with a time-to-live expiration is often sufficient for single-instance applications. Store the response data with an expiration timestamp, and return the cached version for subsequent requests until the TTL expires. The SDK's consistent response format makes it easy to cache any endpoint's results.`}),`
`,(0,n.jsx)(t.h3,{id:`external-cache`,children:`External Cache`}),`
`,(0,n.jsx)(t.p,{children:`For multi-instance deployments, use Redis or a similar external cache that persists across restarts and can be shared between application instances. Choose TTLs based on how frequently each type of data changes — user profiles might be cached for five minutes while resource lists might only last thirty seconds.`})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};