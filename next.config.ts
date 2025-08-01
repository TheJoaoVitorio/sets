import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "repository-images.githubusercontent.com"
			}
		]
	}
}

export default nextConfig
