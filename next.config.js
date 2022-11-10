/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const repository = 'project--statistic-covid19--nextjs';
const debug = process.env.NODE_ENV !== 'production';
const path = require('path');
const glob = require('glob');
const nextConfig = {
	trailingSlash: true, // It is possible to configure Next.js to export pages as index.html files and require trailing slashes, /about becomes /about/index.html and is routable via /about/. This was the default behavior prior to Next.js 9.
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/dashboard' },
			'/dashboard': { page: '/dashboard' },
			'/dashboard/': { page: '/dashboard' }
		};
	},
	// withLess: () =>
	// 	withLess({
	// 		lessLoaderOptions: {
	// 			javascriptEnabled: true
	// 		}
	// 	}),
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')] // sass
		// prependData: `@import "styles/_variables.scss;`
	},
	swcMinify: true,
	assetPrefix:
		process.env.NODE_ENV === 'production'
			? `https://dlwlsdn201.github.io/${repository}`
			: '',
	trailingSlash: true,
	async rewrites() {
		return [
			{
				source: process.env.SOURCE_PATH,
				destination: `${process.env.DESTINATION_URL}?serviceKey=${API_KEY}`
			}
		];
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/dashboard/',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
