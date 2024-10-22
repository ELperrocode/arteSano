/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true, // Ignora errores de ESLint durante la construcción
    },
    typescript: {
      ignoreBuildErrors: true, // Ignora errores de TypeScript durante la construcción
    },
  };
  
  export default nextConfig;