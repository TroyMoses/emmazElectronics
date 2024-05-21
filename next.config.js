/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dawid-food-ordering.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.ftc.edu',
      },
      {
        protocol: 'https',
        hostname: '*.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: '*.verbatim.com.au',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'ug.jumia.is',
      },

    ], // Update this with your remote image domains or patterns
    loader: 'default', // Specify the image loader to use ('default', 'imgix', 'cloudinary', or a custom loader)
    path: '/_next/image', // Specify the path for the optimized images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Specify device sizes for automatic quality selection
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Specify image sizes for automatic quality selection
  },
  
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: 'file-loader',
    });

    return config;
  }
};

module.exports = nextConfig
