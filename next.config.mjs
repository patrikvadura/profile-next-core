/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/patrik-vadura/**',
      },
    ],
  },
  reactStrictMode: true,
  env: {
    S3_UPLOAD_KEY: process.env.S3_UPLOAD_KEY,
    S3_UPLOAD_SECRET: process.env.S3_UPLOAD_SECRET,
    S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
    S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
    REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY,
  },
}

export default nextConfig
