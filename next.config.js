/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = {...config.experiments, topLevelAwait: true};
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  // experimental: {
  //   topLevelAwait: true,
    
  // }
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     // this will override the experiments
//     config.experiments = {...config.experiments, topLevelAwait: true};
//     // this will just update topLevelAwait property of config.experiments
//     // config.experiments.topLevelAwait = true
//     return config;
// },
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         port: '',
//       },
//     ],
//   },
// experimential: {
//   topLevelAwait: true
// }
// }

// module.exports = nextConfig
