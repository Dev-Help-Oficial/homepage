/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/pages/blog/:slug*', // Define o caminho da URL que deseja associar à página
          destination: '/pages/blog/[slug]', // Define o caminho real da página
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  