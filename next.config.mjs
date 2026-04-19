import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/apex-pathing-docs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/apex-pathing-docs/' : '',
}

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig)