import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'How-to Series by Kresna',
			social: {
				github: 'https://github.com/kresnasatya/how-to.kresna.me',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/'
				},
				{
					label: 'Programming',
					autogenerate: { directory: 'programming' }
				},
				{
					label: 'Frameworks',
					autogenerate: { directory: 'frameworks' },
				}
			],
		}),
	],
});
