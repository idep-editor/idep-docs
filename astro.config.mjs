// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Idep Docs',
			description: 'Documentation for Idep — the Rust-native AI-powered IDE.',
			social: [
				{ icon: 'github', href: 'https://github.com/idep-editor/idep', label: 'GitHub' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'First Run', slug: 'getting-started/first-run' },
					],
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'Overview', slug: 'configuration/overview' },
						{ label: 'Backends', slug: 'configuration/backends' },
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'Overview', slug: 'contributing/overview' },
					],
				},
			],
		}),
	],
});
