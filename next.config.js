/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const repository = 'project--statistic-covid19--nextjs/';
const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	assetPrefix: `/${repository}`,
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
