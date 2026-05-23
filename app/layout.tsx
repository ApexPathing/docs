import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: 'Apex Pathing',
  description: 'Path your way to the peaks!',
}

function PageBanner() {
  return (
    <Banner storageKey="some-key">
      Apex Pathing is currently not released! Join the
      &nbsp;<a href="https://discord.gg/qpP4CXaHDg" target="_blank" rel="noopener noreferrer">Discord</a>&nbsp;
      to help or keep up with development.
    </Banner>
  )
}

function PageNavbar() {
  return (
    <Navbar
      logo={
        <span className="flex items-center gap-2">
          <img src="/logo_icon.svg" alt="Apex Pathing" className='mr-1 size-7'/>
          <b>Apex Pathing</b>
        </span>
      }
      projectLink="https://github.com/ApexPathing"
      chatLink="https://discord.gg/qpP4CXaHDg"
    />
  )
}

function PageFooter() {
  return (
    <footer key="footer" className='mt-auto border-t py-5 border-divider text-center text-sm text-accent-text'>
      &copy; 2026 Apex Pathing. Apex Pathing is licensed under the&nbsp;
      <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="hover:underline hover:text-brand-primary-hover">GNU General Public License v3.0</a>
      . The Apex Pathing name and logo are trademarks of Apex Pathing.
    </footer>
  )
}
 
export default async function RootLayout({ children } :{ children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <Head color={{ hue: 0, saturation: 100, lightness: 45}} />
      <body>
       <Layout
          banner={PageBanner()}
          navbar={PageNavbar()}
          pageMap={await getPageMap()}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
          docsRepositoryBase="https://github.com/ApexPathing/docs/"
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