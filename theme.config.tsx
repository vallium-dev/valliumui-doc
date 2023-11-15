import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>ValliumUI</span>,
	project: {
		link: "https://github.com/vallium-dev/valliumui",
	},
	chat: {
		link: "https://discord.com",
	},
	docsRepositoryBase: "https://github.com/vallium-dev/valliumui-doc",
	footer: {
		text: "Documentation page powered by Nextra",
	},
};

export default config;
