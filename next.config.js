/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const repository = 'project--statistic-covid19--nextjs/';
const debug = process.env.NODE_ENV !== 'production';
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const nextConfig = {
	plugins: [new StaticSiteGeneratorPlugin({ crawl: true })],
	reactStrictMode: true,
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
	}
};

module.exports = nextConfig;
