/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = {...config.experiments, topLevelAwait: true};
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
},
  // reactStrictMode: true,
//   images: {
//     domains: ['lh3.googleusercontent.com']
// },
// experiments: {
//   topLevelAwait: true
// }
}

module.exports = nextConfig
