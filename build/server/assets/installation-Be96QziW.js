import { t as __exportAll } from "./chunk-noHr4qNm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/getting-started/installation.mdx?collection=docs
var installation_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "Installation",
	"description": "Install the Voltus SDK in your project using your preferred package manager.",
	"icon": "Download"
};
var _markdown = "\n\nGetting the Voltus SDK into your project takes less than a minute. The package is published to npm and works with all major JavaScript package managers. Before you begin, make sure you have Node.js version 18 or higher installed on your machine.\n\nPrerequisites [#prerequisites]\n\nBefore installing the SDK, you'll need a few things in place. These are standard requirements for any modern JavaScript project, and chances are you already have most of them ready to go.\n\nSystem Requirements [#system-requirements]\n\nYou need Node.js version 18.0 or higher installed on your machine. The SDK relies on built-in features like the native Fetch API that were introduced in Node 18. If you're unsure which version you have, run `node --version` in your terminal to check. We also support Bun and Deno as alternative runtimes if you prefer those over Node.\n\nGetting an API Key [#getting-an-api-key]\n\nSign in to the Voltus dashboard and navigate to Settings, then API Keys. Click the create button to generate a new key. You'll receive a string starting with `vlt_sk_` for production use or `vlt_test_` for sandbox environments. Copy this key and keep it somewhere safe — you'll need it in the next step.\n\nAutomatic Installation [#automatic-installation]\n\nThe simplest way to get started is through your package manager. The SDK is published as `@voltus/sdk` on the npm registry and works with npm, yarn, pnpm, and bun out of the box.\n\nUsing npm or yarn [#using-npm-or-yarn]\n\nRun `npm install @voltus/sdk` or `yarn add @voltus/sdk` in your project directory. The package will be added to your `dependencies` in `package.json` and downloaded to `node_modules`. The SDK has zero external runtime dependencies, so you won't see any additional packages being pulled in.\n\nUsing pnpm or bun [#using-pnpm-or-bun]\n\nIf you prefer pnpm or bun, the commands are `pnpm add @voltus/sdk` and `bun add @voltus/sdk` respectively. Both package managers handle the installation identically — the SDK doesn't require any special configuration or peer dependencies regardless of which package manager you use.\n\nEnvironment Setup [#environment-setup]\n\nWe strongly recommend storing your API key in environment variables rather than hardcoding it in your source code. This keeps your credentials safe and makes it easy to use different keys for different environments.\n\nCreating a .env File [#creating-a-env-file]\n\nCreate a file called `.env` in the root of your project and add your API key as `VOLTUS_API_KEY=vlt_sk_your_secret_key_here`. Most frameworks like Next.js, Remix, and Express automatically load `.env` files at startup, so your key will be available as `process.env.VOLTUS_API_KEY` throughout your application.\n\nSecurity Best Practices [#security-best-practices]\n\nNever commit your `.env` file to version control. Add it to your `.gitignore` immediately after creating it. For team environments, create a `.env.example` file that lists all the required variables without their actual values — this serves as documentation for other developers who clone the project and need to set up their own credentials.\n\nVerify Installation [#verify-installation]\n\nAfter installing the package and setting up your environment, run a quick test to make sure everything is working correctly before moving on.\n\nQuick Test [#quick-test]\n\nCreate a simple test file that imports the `VoltusClient` class and instantiates it with your API key. If the import resolves and the client initializes without errors, your installation is complete. You can also log `client.version` to confirm the exact SDK version that was installed.\n\nTroubleshooting [#troubleshooting]\n\nIf the import fails, make sure the package name is spelled correctly — it's `@voltus/sdk` with the `@voltus` scope prefix. If you get a runtime error about missing APIs, check that your Node.js version is 18 or higher. And if the client throws an authentication error, double-check that your API key is correct and hasn't been revoked in the dashboard.\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "Getting the Voltus SDK into your project takes less than a minute. The package is published to npm and works with all major JavaScript package managers. Before you begin, make sure you have Node.js version 18 or higher installed on your machine."
		},
		{
			"heading": "prerequisites",
			"content": "Before installing the SDK, you'll need a few things in place. These are standard requirements for any modern JavaScript project, and chances are you already have most of them ready to go."
		},
		{
			"heading": "system-requirements",
			"content": "You need Node.js version 18.0 or higher installed on your machine. The SDK relies on built-in features like the native Fetch API that were introduced in Node 18. If you're unsure which version you have, run `node --version` in your terminal to check. We also support Bun and Deno as alternative runtimes if you prefer those over Node."
		},
		{
			"heading": "getting-an-api-key",
			"content": "Sign in to the Voltus dashboard and navigate to Settings, then API Keys. Click the create button to generate a new key. You'll receive a string starting with `vlt_sk_` for production use or `vlt_test_` for sandbox environments. Copy this key and keep it somewhere safe — you'll need it in the next step."
		},
		{
			"heading": "automatic-installation",
			"content": "The simplest way to get started is through your package manager. The SDK is published as `@voltus/sdk` on the npm registry and works with npm, yarn, pnpm, and bun out of the box."
		},
		{
			"heading": "using-npm-or-yarn",
			"content": "Run `npm install @voltus/sdk` or `yarn add @voltus/sdk` in your project directory. The package will be added to your `dependencies` in `package.json` and downloaded to `node_modules`. The SDK has zero external runtime dependencies, so you won't see any additional packages being pulled in."
		},
		{
			"heading": "using-pnpm-or-bun",
			"content": "If you prefer pnpm or bun, the commands are `pnpm add @voltus/sdk` and `bun add @voltus/sdk` respectively. Both package managers handle the installation identically — the SDK doesn't require any special configuration or peer dependencies regardless of which package manager you use."
		},
		{
			"heading": "environment-setup",
			"content": "We strongly recommend storing your API key in environment variables rather than hardcoding it in your source code. This keeps your credentials safe and makes it easy to use different keys for different environments."
		},
		{
			"heading": "creating-a-env-file",
			"content": "Create a file called `.env` in the root of your project and add your API key as `VOLTUS_API_KEY=vlt_sk_your_secret_key_here`. Most frameworks like Next.js, Remix, and Express automatically load `.env` files at startup, so your key will be available as `process.env.VOLTUS_API_KEY` throughout your application."
		},
		{
			"heading": "security-best-practices",
			"content": "Never commit your `.env` file to version control. Add it to your `.gitignore` immediately after creating it. For team environments, create a `.env.example` file that lists all the required variables without their actual values — this serves as documentation for other developers who clone the project and need to set up their own credentials."
		},
		{
			"heading": "verify-installation",
			"content": "After installing the package and setting up your environment, run a quick test to make sure everything is working correctly before moving on."
		},
		{
			"heading": "quick-test",
			"content": "Create a simple test file that imports the `VoltusClient` class and instantiates it with your API key. If the import resolves and the client initializes without errors, your installation is complete. You can also log `client.version` to confirm the exact SDK version that was installed."
		},
		{
			"heading": "troubleshooting",
			"content": "If the import fails, make sure the package name is spelled correctly — it's `@voltus/sdk` with the `@voltus` scope prefix. If you get a runtime error about missing APIs, check that your Node.js version is 18 or higher. And if the client throws an authentication error, double-check that your API key is correct and hasn't been revoked in the dashboard."
		}
	],
	"headings": [
		{
			"id": "prerequisites",
			"content": "Prerequisites"
		},
		{
			"id": "system-requirements",
			"content": "System Requirements"
		},
		{
			"id": "getting-an-api-key",
			"content": "Getting an API Key"
		},
		{
			"id": "automatic-installation",
			"content": "Automatic Installation"
		},
		{
			"id": "using-npm-or-yarn",
			"content": "Using npm or yarn"
		},
		{
			"id": "using-pnpm-or-bun",
			"content": "Using pnpm or bun"
		},
		{
			"id": "environment-setup",
			"content": "Environment Setup"
		},
		{
			"id": "creating-a-env-file",
			"content": "Creating a .env File"
		},
		{
			"id": "security-best-practices",
			"content": "Security Best Practices"
		},
		{
			"id": "verify-installation",
			"content": "Verify Installation"
		},
		{
			"id": "quick-test",
			"content": "Quick Test"
		},
		{
			"id": "troubleshooting",
			"content": "Troubleshooting"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#prerequisites",
		title: jsx(Fragment, { children: "Prerequisites" })
	},
	{
		depth: 3,
		url: "#system-requirements",
		title: jsx(Fragment, { children: "System Requirements" })
	},
	{
		depth: 3,
		url: "#getting-an-api-key",
		title: jsx(Fragment, { children: "Getting an API Key" })
	},
	{
		depth: 2,
		url: "#automatic-installation",
		title: jsx(Fragment, { children: "Automatic Installation" })
	},
	{
		depth: 3,
		url: "#using-npm-or-yarn",
		title: jsx(Fragment, { children: "Using npm or yarn" })
	},
	{
		depth: 3,
		url: "#using-pnpm-or-bun",
		title: jsx(Fragment, { children: "Using pnpm or bun" })
	},
	{
		depth: 2,
		url: "#environment-setup",
		title: jsx(Fragment, { children: "Environment Setup" })
	},
	{
		depth: 3,
		url: "#creating-a-env-file",
		title: jsx(Fragment, { children: "Creating a .env File" })
	},
	{
		depth: 3,
		url: "#security-best-practices",
		title: jsx(Fragment, { children: "Security Best Practices" })
	},
	{
		depth: 2,
		url: "#verify-installation",
		title: jsx(Fragment, { children: "Verify Installation" })
	},
	{
		depth: 3,
		url: "#quick-test",
		title: jsx(Fragment, { children: "Quick Test" })
	},
	{
		depth: 3,
		url: "#troubleshooting",
		title: jsx(Fragment, { children: "Troubleshooting" })
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
		jsx(_components.p, { children: "Getting the Voltus SDK into your project takes less than a minute. The package is published to npm and works with all major JavaScript package managers. Before you begin, make sure you have Node.js version 18 or higher installed on your machine." }),
		"\n",
		jsx(_components.h2, {
			id: "prerequisites",
			children: "Prerequisites"
		}),
		"\n",
		jsx(_components.p, { children: "Before installing the SDK, you'll need a few things in place. These are standard requirements for any modern JavaScript project, and chances are you already have most of them ready to go." }),
		"\n",
		jsx(_components.h3, {
			id: "system-requirements",
			children: "System Requirements"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"You need Node.js version 18.0 or higher installed on your machine. The SDK relies on built-in features like the native Fetch API that were introduced in Node 18. If you're unsure which version you have, run ",
			jsx(_components.code, { children: "node --version" }),
			" in your terminal to check. We also support Bun and Deno as alternative runtimes if you prefer those over Node."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "getting-an-api-key",
			children: "Getting an API Key"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Sign in to the Voltus dashboard and navigate to Settings, then API Keys. Click the create button to generate a new key. You'll receive a string starting with ",
			jsx(_components.code, { children: "vlt_sk_" }),
			" for production use or ",
			jsx(_components.code, { children: "vlt_test_" }),
			" for sandbox environments. Copy this key and keep it somewhere safe — you'll need it in the next step."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "automatic-installation",
			children: "Automatic Installation"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"The simplest way to get started is through your package manager. The SDK is published as ",
			jsx(_components.code, { children: "@voltus/sdk" }),
			" on the npm registry and works with npm, yarn, pnpm, and bun out of the box."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "using-npm-or-yarn",
			children: "Using npm or yarn"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Run ",
			jsx(_components.code, { children: "npm install @voltus/sdk" }),
			" or ",
			jsx(_components.code, { children: "yarn add @voltus/sdk" }),
			" in your project directory. The package will be added to your ",
			jsx(_components.code, { children: "dependencies" }),
			" in ",
			jsx(_components.code, { children: "package.json" }),
			" and downloaded to ",
			jsx(_components.code, { children: "node_modules" }),
			". The SDK has zero external runtime dependencies, so you won't see any additional packages being pulled in."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "using-pnpm-or-bun",
			children: "Using pnpm or bun"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"If you prefer pnpm or bun, the commands are ",
			jsx(_components.code, { children: "pnpm add @voltus/sdk" }),
			" and ",
			jsx(_components.code, { children: "bun add @voltus/sdk" }),
			" respectively. Both package managers handle the installation identically — the SDK doesn't require any special configuration or peer dependencies regardless of which package manager you use."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "environment-setup",
			children: "Environment Setup"
		}),
		"\n",
		jsx(_components.p, { children: "We strongly recommend storing your API key in environment variables rather than hardcoding it in your source code. This keeps your credentials safe and makes it easy to use different keys for different environments." }),
		"\n",
		jsx(_components.h3, {
			id: "creating-a-env-file",
			children: "Creating a .env File"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create a file called ",
			jsx(_components.code, { children: ".env" }),
			" in the root of your project and add your API key as ",
			jsx(_components.code, { children: "VOLTUS_API_KEY=vlt_sk_your_secret_key_here" }),
			". Most frameworks like Next.js, Remix, and Express automatically load ",
			jsx(_components.code, { children: ".env" }),
			" files at startup, so your key will be available as ",
			jsx(_components.code, { children: "process.env.VOLTUS_API_KEY" }),
			" throughout your application."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "security-best-practices",
			children: "Security Best Practices"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Never commit your ",
			jsx(_components.code, { children: ".env" }),
			" file to version control. Add it to your ",
			jsx(_components.code, { children: ".gitignore" }),
			" immediately after creating it. For team environments, create a ",
			jsx(_components.code, { children: ".env.example" }),
			" file that lists all the required variables without their actual values — this serves as documentation for other developers who clone the project and need to set up their own credentials."
		] }),
		"\n",
		jsx(_components.h2, {
			id: "verify-installation",
			children: "Verify Installation"
		}),
		"\n",
		jsx(_components.p, { children: "After installing the package and setting up your environment, run a quick test to make sure everything is working correctly before moving on." }),
		"\n",
		jsx(_components.h3, {
			id: "quick-test",
			children: "Quick Test"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"Create a simple test file that imports the ",
			jsx(_components.code, { children: "VoltusClient" }),
			" class and instantiates it with your API key. If the import resolves and the client initializes without errors, your installation is complete. You can also log ",
			jsx(_components.code, { children: "client.version" }),
			" to confirm the exact SDK version that was installed."
		] }),
		"\n",
		jsx(_components.h3, {
			id: "troubleshooting",
			children: "Troubleshooting"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"If the import fails, make sure the package name is spelled correctly — it's ",
			jsx(_components.code, { children: "@voltus/sdk" }),
			" with the ",
			jsx(_components.code, { children: "@voltus" }),
			" scope prefix. If you get a runtime error about missing APIs, check that your Node.js version is 18 or higher. And if the client throws an authentication error, double-check that your API key is correct and hasn't been revoked in the dashboard."
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
export { structuredData as a, installation_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
