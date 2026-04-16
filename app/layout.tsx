import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import Image from 'next/image'

 
export const metadata = {
  title: 'Apex Pathing',
  description: 'The ultimate motion profiling and pathing library for FTC teams. Achieve smooth, reliable, and high-speed autonomous movement.',
}

function PageBanner() {
  return (
    <Banner storageKey="some-key">Welcome to ApexPathing! 🎉</Banner>
  )
}

function PageNavbar() {
  return (
    <Navbar
      logo={<b>ApexPathing</b>}
    />
  )
}

function PageFooter() {
  return (
      <footer className={`mt-auto border-t border-fd-border border-accent-text text-accent-text py-5 px-6 text-center text-sm text-muted-foreground`}>
        &copy; 2026 Apex Pathing. Apex Pathing is licensed under the <a href="https://example.com/" className="text-fd-foreground hover:underline">FIGURE OUT LICENSE STUFF</a>. The Apex Pathing name and logo are trademarks of Apex Pathing.
      </footer>
  )
}
 
export default async function RootLayout({ 
  children 
} :{
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
       <Layout
          banner={PageBanner()}
          navbar={PageNavbar()}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ApexPathing/main.git"
          footer={PageFooter()}
          editLink={null}                    // ← add this
          feedback={{ content: null }}       // ← add this
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}