/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

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
