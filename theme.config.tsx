import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>ValliumUI</span>,
	project: {
		link: "https://github.com/vallium-dev/valliumui",
	},
	// chat: {
	// 	link: "https://discord.com",
	// },
	docsRepositoryBase: "https://github.com/vallium-dev/valliumui-doc",
	footer: {
		text: "Documentation page powered by Nextra",
	},
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="ValliumUI Documentation" />
			<meta
				property="og:description"
				content="Documentation for the ValliumUI library"
			/>
			<meta property="og:image" content="<generated>" />
			<meta property="og:image:type" content="<generated>" />
			<meta property="og:image:width" content="<generated>" />
			<meta property="og:image:height" content="<generated>" />
		</>
	),
	useNextSeoProps() {
		return {
			titleTemplate: "%s – ValliumUI",
		};
	},
};

export default config;
