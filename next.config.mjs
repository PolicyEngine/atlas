const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/policy-library';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
