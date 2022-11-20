/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const repository = 'project--statistic-covid19--nextjs';
const path = require('path');
const nextConfig = {
	trailingSlash: true, // It is possible to configure Next.js to export pages as index.html files and require trailing slashes, /about becomes /about/index.html and is routable via /about/. This was the default behavior prior to Next.js 9.
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			'/': { page: '/dashboard' },
			'/dashboard': { page: '/dashboard' }
			// '/dashboard/': { page: '/dashboard' }
		};
	},
	// webpack: (config) => {
	// 	config.module.rules.push({
	// 		test: /\.s[ac]ss$/i,
	// 		use: ['css-loader', 'sass-loader']
	// 	});

	// 	return config;
	// },
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')] // sass
		// prependData: `@import "styles/_variables.scss;`
	},
	swcMinify: true,
	assetPrefix:
		process.env.NODE_ENV === 'production'
			? `https://dlwlsdn201.github.io/${repository}`
			: 'http://localhost:3000',
	distDir: 'out/_next',
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
