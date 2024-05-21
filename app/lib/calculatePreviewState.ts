import { calculateTotals } from '@/app/lib/pricing'

export const calculatePreviewState = (visibility: any) => {
  return calculateTotals({
    hero: visibility.showHero,
    about: visibility.showAbout,
    services: visibility.showServices,
    reference: visibility.showReference,
    portfolio: visibility.showPortfolio,
    contact: visibility.showContact,
    analytics: visibility.showAnalytics,
    analyticsCode: !visibility.showAnalytics && visibility.showAnalyticsCode,
    analyticsSetup: !visibility.showAnalytics && visibility.showAnalyticsSetup,
    cookie: visibility.showCookie,
    dnsTransfer: visibility.showDnsTransfer,
    dnsSelf: visibility.showDnsSelf,
    dnsHelp: visibility.showDnsHelp,
  })
}
