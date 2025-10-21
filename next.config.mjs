// import createMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
// const nextConfig = {
// Configure `pageExtensions`` to include MDX files
// pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
// Optionally, add any other Next.js config below
// experimental: {
//   mdxRs: true,
// },
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["next-blog.oss-cn-beijing.aliyuncs.com"],
    // 或者使用 remotePatterns（推荐方式）：
    remotePatterns: [
      {
        protocol: "http",
        hostname: "next-blog.oss-cn-beijing.aliyuncs.com",
        port: "",
        pathname: "/images/album/**",
      },
    ],
  },
};

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   // options: {
//   //   remarkPlugins: [remarkGfm],
//   //   rehypePlugins: [],
//   // },
// })

// Wrap MDX and Next.js config with each other
export default nextConfig;
