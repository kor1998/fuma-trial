import{r as e}from"./chunk-0oqf_uz2.js";import{t}from"./jsx-runtime-CEHt124i.js";var n=e(t()),r={title:`Pagination`,description:`Navigate through large datasets with offset-based and cursor-based pagination.`,icon:`List`},i=`

Any non-trivial application will eventually need to work with datasets too large to return in a single API response. The SDK provides both low-level controls for manual pagination and high-level patterns for common use cases.

Introduction [#introduction]

The Voltus API uses pagination to break large result sets into manageable pages. Understanding the available pagination methods helps you choose the right approach for each use case.

Why Pagination Matters [#why-pagination-matters]

Without pagination, a single API call could return millions of records, consuming excessive bandwidth, memory, and processing time on both the client and server. Pagination keeps individual requests fast and predictable, regardless of how much data exists in your account.

Choosing a Method [#choosing-a-method]

The API supports two pagination methods — offset-based and cursor-based. Offset pagination is simpler and supports random page access. Cursor pagination is more reliable for frequently changing data. Most applications use offset pagination by default and switch to cursors for specific real-time use cases.

Offset Pagination [#offset-pagination]

The default pagination method uses \`limit\` and \`offset\` parameters to control which slice of data you receive.

How It Works [#how-it-works]

Set \`limit\` to the number of records per page and \`offset\` to the starting position. The response includes a \`pagination\` object with \`total\`, \`limit\`, \`offset\`, and \`hasMore\` fields. To get the next page, increment offset by the limit value and make another request.

Considerations [#considerations]

The main thing to keep in mind is that underlying data can change between page requests. If a new record is inserted while you're iterating, you might see duplicates. For most applications this is acceptable, but if you need guaranteed consistency, cursor-based pagination is a better choice.

Cursor Pagination [#cursor-pagination]

For real-time or frequently changing data, cursor-based pagination provides consistency guarantees that offset pagination cannot.

How It Works [#how-it-works-1]

Make your first request without a cursor. Each response includes a \`nextCursor\` string that encodes your exact position in the result set. Pass this cursor to the next request to continue where you left off. When \`nextCursor\` is null, you've reached the end.

When to Use Cursors [#when-to-use-cursors]

Cursor pagination is ideal for processing event feeds, syncing data between systems, and building infinite-scroll interfaces. The trade-off is that you can only move forward through results — random page access and jumping to a specific page number aren't supported.

Fetching All Records [#fetching-all-records]

Sometimes you need every record in a collection regardless of how many pages it spans.

The Loop Pattern [#the-loop-pattern]

Create a loop that fetches one page at a time, appends results to an array, and increments the offset until \`hasMore\` is false. This is straightforward but loads the entire dataset into memory, which can be problematic for very large collections.

The Generator Pattern [#the-generator-pattern]

For large datasets, use an async generator that yields one page at a time. The calling code can process and discard each page before fetching the next, keeping memory usage constant regardless of total dataset size. This approach is ideal for data exports, migrations, and ETL pipelines.
`,a={contents:[{heading:void 0,content:`Any non-trivial application will eventually need to work with datasets too large to return in a single API response. The SDK provides both low-level controls for manual pagination and high-level patterns for common use cases.`},{heading:`introduction`,content:`The Voltus API uses pagination to break large result sets into manageable pages. Understanding the available pagination methods helps you choose the right approach for each use case.`},{heading:`why-pagination-matters`,content:`Without pagination, a single API call could return millions of records, consuming excessive bandwidth, memory, and processing time on both the client and server. Pagination keeps individual requests fast and predictable, regardless of how much data exists in your account.`},{heading:`choosing-a-method`,content:`The API supports two pagination methods — offset-based and cursor-based. Offset pagination is simpler and supports random page access. Cursor pagination is more reliable for frequently changing data. Most applications use offset pagination by default and switch to cursors for specific real-time use cases.`},{heading:`offset-pagination`,content:"The default pagination method uses `limit` and `offset` parameters to control which slice of data you receive."},{heading:`how-it-works`,content:"Set `limit` to the number of records per page and `offset` to the starting position. The response includes a `pagination` object with `total`, `limit`, `offset`, and `hasMore` fields. To get the next page, increment offset by the limit value and make another request."},{heading:`considerations`,content:`The main thing to keep in mind is that underlying data can change between page requests. If a new record is inserted while you're iterating, you might see duplicates. For most applications this is acceptable, but if you need guaranteed consistency, cursor-based pagination is a better choice.`},{heading:`cursor-pagination`,content:`For real-time or frequently changing data, cursor-based pagination provides consistency guarantees that offset pagination cannot.`},{heading:`how-it-works-1`,content:"Make your first request without a cursor. Each response includes a `nextCursor` string that encodes your exact position in the result set. Pass this cursor to the next request to continue where you left off. When `nextCursor` is null, you've reached the end."},{heading:`when-to-use-cursors`,content:`Cursor pagination is ideal for processing event feeds, syncing data between systems, and building infinite-scroll interfaces. The trade-off is that you can only move forward through results — random page access and jumping to a specific page number aren't supported.`},{heading:`fetching-all-records`,content:`Sometimes you need every record in a collection regardless of how many pages it spans.`},{heading:`the-loop-pattern`,content:"Create a loop that fetches one page at a time, appends results to an array, and increments the offset until `hasMore` is false. This is straightforward but loads the entire dataset into memory, which can be problematic for very large collections."},{heading:`the-generator-pattern`,content:`For large datasets, use an async generator that yields one page at a time. The calling code can process and discard each page before fetching the next, keeping memory usage constant regardless of total dataset size. This approach is ideal for data exports, migrations, and ETL pipelines.`}],headings:[{id:`introduction`,content:`Introduction`},{id:`why-pagination-matters`,content:`Why Pagination Matters`},{id:`choosing-a-method`,content:`Choosing a Method`},{id:`offset-pagination`,content:`Offset Pagination`},{id:`how-it-works`,content:`How It Works`},{id:`considerations`,content:`Considerations`},{id:`cursor-pagination`,content:`Cursor Pagination`},{id:`how-it-works-1`,content:`How It Works`},{id:`when-to-use-cursors`,content:`When to Use Cursors`},{id:`fetching-all-records`,content:`Fetching All Records`},{id:`the-loop-pattern`,content:`The Loop Pattern`},{id:`the-generator-pattern`,content:`The Generator Pattern`}]},o=[{depth:2,url:`#introduction`,title:(0,n.jsx)(n.Fragment,{children:`Introduction`})},{depth:3,url:`#why-pagination-matters`,title:(0,n.jsx)(n.Fragment,{children:`Why Pagination Matters`})},{depth:3,url:`#choosing-a-method`,title:(0,n.jsx)(n.Fragment,{children:`Choosing a Method`})},{depth:2,url:`#offset-pagination`,title:(0,n.jsx)(n.Fragment,{children:`Offset Pagination`})},{depth:3,url:`#how-it-works`,title:(0,n.jsx)(n.Fragment,{children:`How It Works`})},{depth:3,url:`#considerations`,title:(0,n.jsx)(n.Fragment,{children:`Considerations`})},{depth:2,url:`#cursor-pagination`,title:(0,n.jsx)(n.Fragment,{children:`Cursor Pagination`})},{depth:3,url:`#how-it-works-1`,title:(0,n.jsx)(n.Fragment,{children:`How It Works`})},{depth:3,url:`#when-to-use-cursors`,title:(0,n.jsx)(n.Fragment,{children:`When to Use Cursors`})},{depth:2,url:`#fetching-all-records`,title:(0,n.jsx)(n.Fragment,{children:`Fetching All Records`})},{depth:3,url:`#the-loop-pattern`,title:(0,n.jsx)(n.Fragment,{children:`The Loop Pattern`})},{depth:3,url:`#the-generator-pattern`,title:(0,n.jsx)(n.Fragment,{children:`The Generator Pattern`})}];function s(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Any non-trivial application will eventually need to work with datasets too large to return in a single API response. The SDK provides both low-level controls for manual pagination and high-level patterns for common use cases.`}),`
`,(0,n.jsx)(t.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,n.jsx)(t.p,{children:`The Voltus API uses pagination to break large result sets into manageable pages. Understanding the available pagination methods helps you choose the right approach for each use case.`}),`
`,(0,n.jsx)(t.h3,{id:`why-pagination-matters`,children:`Why Pagination Matters`}),`
`,(0,n.jsx)(t.p,{children:`Without pagination, a single API call could return millions of records, consuming excessive bandwidth, memory, and processing time on both the client and server. Pagination keeps individual requests fast and predictable, regardless of how much data exists in your account.`}),`
`,(0,n.jsx)(t.h3,{id:`choosing-a-method`,children:`Choosing a Method`}),`
`,(0,n.jsx)(t.p,{children:`The API supports two pagination methods — offset-based and cursor-based. Offset pagination is simpler and supports random page access. Cursor pagination is more reliable for frequently changing data. Most applications use offset pagination by default and switch to cursors for specific real-time use cases.`}),`
`,(0,n.jsx)(t.h2,{id:`offset-pagination`,children:`Offset Pagination`}),`
`,(0,n.jsxs)(t.p,{children:[`The default pagination method uses `,(0,n.jsx)(t.code,{children:`limit`}),` and `,(0,n.jsx)(t.code,{children:`offset`}),` parameters to control which slice of data you receive.`]}),`
`,(0,n.jsx)(t.h3,{id:`how-it-works`,children:`How It Works`}),`
`,(0,n.jsxs)(t.p,{children:[`Set `,(0,n.jsx)(t.code,{children:`limit`}),` to the number of records per page and `,(0,n.jsx)(t.code,{children:`offset`}),` to the starting position. The response includes a `,(0,n.jsx)(t.code,{children:`pagination`}),` object with `,(0,n.jsx)(t.code,{children:`total`}),`, `,(0,n.jsx)(t.code,{children:`limit`}),`, `,(0,n.jsx)(t.code,{children:`offset`}),`, and `,(0,n.jsx)(t.code,{children:`hasMore`}),` fields. To get the next page, increment offset by the limit value and make another request.`]}),`
`,(0,n.jsx)(t.h3,{id:`considerations`,children:`Considerations`}),`
`,(0,n.jsx)(t.p,{children:`The main thing to keep in mind is that underlying data can change between page requests. If a new record is inserted while you're iterating, you might see duplicates. For most applications this is acceptable, but if you need guaranteed consistency, cursor-based pagination is a better choice.`}),`
`,(0,n.jsx)(t.h2,{id:`cursor-pagination`,children:`Cursor Pagination`}),`
`,(0,n.jsx)(t.p,{children:`For real-time or frequently changing data, cursor-based pagination provides consistency guarantees that offset pagination cannot.`}),`
`,(0,n.jsx)(t.h3,{id:`how-it-works-1`,children:`How It Works`}),`
`,(0,n.jsxs)(t.p,{children:[`Make your first request without a cursor. Each response includes a `,(0,n.jsx)(t.code,{children:`nextCursor`}),` string that encodes your exact position in the result set. Pass this cursor to the next request to continue where you left off. When `,(0,n.jsx)(t.code,{children:`nextCursor`}),` is null, you've reached the end.`]}),`
`,(0,n.jsx)(t.h3,{id:`when-to-use-cursors`,children:`When to Use Cursors`}),`
`,(0,n.jsx)(t.p,{children:`Cursor pagination is ideal for processing event feeds, syncing data between systems, and building infinite-scroll interfaces. The trade-off is that you can only move forward through results — random page access and jumping to a specific page number aren't supported.`}),`
`,(0,n.jsx)(t.h2,{id:`fetching-all-records`,children:`Fetching All Records`}),`
`,(0,n.jsx)(t.p,{children:`Sometimes you need every record in a collection regardless of how many pages it spans.`}),`
`,(0,n.jsx)(t.h3,{id:`the-loop-pattern`,children:`The Loop Pattern`}),`
`,(0,n.jsxs)(t.p,{children:[`Create a loop that fetches one page at a time, appends results to an array, and increments the offset until `,(0,n.jsx)(t.code,{children:`hasMore`}),` is false. This is straightforward but loads the entire dataset into memory, which can be problematic for very large collections.`]}),`
`,(0,n.jsx)(t.h3,{id:`the-generator-pattern`,children:`The Generator Pattern`}),`
`,(0,n.jsx)(t.p,{children:`For large datasets, use an async generator that yields one page at a time. The calling code can process and discard each page before fetching the next, keeping memory usage constant regardless of total dataset size. This approach is ideal for data exports, migrations, and ETL pipelines.`})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};