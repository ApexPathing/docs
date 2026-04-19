import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
export const metadata = {
  title: 'Apex Pathing',
  description: 'ADD TAGLINE HERE.',
}

function PageBanner() {
  return (
    <Banner storageKey="some-key">
      Apex Pathing is currently not released! Join the 
      <a href="https://discord.gg/qpP4CXaHDg" target="_blank" rel="noopener noreferrer">Discord</a>
      to help or keep up with development.
    </Banner>
  )
}

function PageNavbar() {
  return (
    <Navbar
      logo={<b>Apex Pathing</b>}
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
 
export default async function RootLayout({ children } :{ children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head/>
      <body>
       <Layout
          banner={PageBanner()}
          navbar={PageNavbar()}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ApexPathing/docs"
          footer={PageFooter()}
          editLink={null}                    
          feedback={{ content: null }}
          copyPageButton={false}        
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}