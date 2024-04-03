
import { siteConfig } from '@/lib/settings'
import { absoluteUrl } from '@/lib/utils'
import type { Metadata } from 'next'

const AppMetaData: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['68M', 'Holidays'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@Codemevel',
  },
  icons: {
    icon: '/icon.png',
  },
  manifest: absoluteUrl('/site.webmanifest'),
}
export default AppMetaData
