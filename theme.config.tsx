import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
	logo: <span>ValliumUI</span>,
	project: {
		link: "https://github.com/vallium-dev/valliumui",
	},
	// chat: {
	// 	link: "https://discord.com",
	// },
	docsRepositoryBase: "https://github.com/vallium-dev/valliumui-doc/tree/main",
	footer: {
		text: "Documentation page powered by Nextra",
	},
	head: function useHead() {
		const { title } = useConfig();
		const { route } = useRouter();
		const cardImage =
			route === "/" || !title
				? "https://ui.vallium.dev/opengraph-image.png"
				: `https://ui.vallium.dev/api/og?title=${title}`;
		return (
			<>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="ValliumUI Documentation" />
				<meta
					property="og:description"
					content="Documentation for the ValliumUI library"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={cardImage} />
				<meta name="twitter:site:domain" content="ui.vallium.dev" />
				<meta name="twitter:url" content="https://ui.vallium.dev" />
				<meta property="og:image" content={cardImage} />
			</>
		);
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – ValliumUI",
		};
	},
};

export default config;
