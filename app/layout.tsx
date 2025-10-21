import type { Metadata } from 'next'
import './styles/globals.css'

export const metadata: Metadata = {
  title: 'Multiservizi Privati e Aziende | Giardinaggio e Manutenzione Verde',
  description: 'Servizi professionali di giardinaggio, manutenzione verde, abbattimento alberi, impianti irrigazione e molto altro in Umbria. Pronto intervento H24.',
  keywords: 'giardinaggio, manutenzione giardini, abbattimento alberi, impianti irrigazione, recinzioni, Marsciano, Umbria',
  authors: [{ name: 'Multiservizi Privati e Aziende' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}

