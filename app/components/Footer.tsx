import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Multiservizi Privati</h3>
            <p className="text-gray-400 mb-4">
              Servizi professionali di giardinaggio e manutenzione verde in Umbria.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Marsciano (PG) 06055</p>
              <p>📞 <a href="tel:+393464311027" className="text-green-400 hover:text-green-300">3464311027</a></p>
              <p>✉️ <a href="mailto:multiservizi.privati.aziende@gmail.com" className="text-green-400 hover:text-green-300">multiservizi.privati.aziende@gmail.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Link Utili</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="/servizi" className="hover:text-green-400 transition-colors">Servizi</Link></li>
              <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/chi-siamo" className="hover:text-green-400 transition-colors">Chi Siamo</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Servizi Principali</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/servizi#giardinaggio" className="hover:text-green-400 transition-colors">Giardinaggio Progettazione</a></li>
              <li><a href="/servizi#manutenzioni" className="hover:text-green-400 transition-colors">Manutenzioni Ordinarie</a></li>
              <li><a href="/servizi#abbattimenti" className="hover:text-green-400 transition-colors">Abbattimenti Alberi</a></li>
              <li><a href="/servizi#irrigazione" className="hover:text-green-400 transition-colors">Impianti Irrigazione</a></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contattaci</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Pronto intervento H24 per emergenze e richieste urgenti.
            </p>
            <a
              href="tel:+393464311027"
              className="btn-primary block text-center"
            >
              Chiama Subito
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>
              <p>P.IVA: 03709160547</p>
              <p>C.F.: MLICST84H18B354H</p>
            </div>
            <div className="text-center">
              <p>&copy; {currentYear} Multiservizi Privati e Aziende di Milia Cristian. Tutti i diritti riservati.</p>
            </div>
            <div className="text-right space-y-1">
              <p><Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></p>
              <p><Link href="/termini" className="hover:text-green-400 transition-colors">Termini e Condizioni</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

