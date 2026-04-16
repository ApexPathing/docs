import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
const nextConfig = {
  output: 'export',
  basePath: '/apex-pathing-docs',
  images: { unoptimized: true },
  assetPrefix: "./",
}

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig)