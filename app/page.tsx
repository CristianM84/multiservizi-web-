import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Giardinaggio Progettazione',
      description: 'Progettazione e realizzazione di giardini personalizzati secondo le tue esigenze.',
      icon: '🌱'
    },
    {
      id: 2,
      title: 'Manutenzioni Ordinarie',
      description: 'Manutenzione regolare di giardini e aree verdi per mantenerle sempre perfette.',
      icon: '✂️'
    },
    {
      id: 3,
      title: 'Abbattimenti Alberi',
      description: 'Abbattimento sicuro e professionale di alberi con smaltimento rifiuti.',
      icon: '🪵'
    },
    {
      id: 4,
      title: 'Impianti di Irrigazione',
      description: 'Installazione e manutenzione di impianti di irrigazione moderni ed efficienti.',
      icon: '💧'
    },
    {
      id: 5,
      title: 'Installazione Prati',
      description: 'Realizzazione di prati naturali e sintetici di alta qualità.',
      icon: '🌾'
    },
    {
      id: 6,
      title: 'Recinzioni e Palizzate',
      description: 'Installazione di recinzioni e palizzate di contenimento di ogni genere.',
      icon: '🏗️'
    },
  ]

  const testimonials = [
    {
      name: 'Marco Rossi',
      text: 'Servizio professionale e puntuale. Hanno trasformato il mio giardino in un\'oasi di bellezza.',
      rating: 5
    },
    {
      name: 'Lucia Bianchi',
      text: 'Pronto intervento rapido e efficace. Consiglio vivamente Multiservizi Privati.',
      rating: 5
    },
    {
      name: 'Giovanni Verdi',
      text: 'Qualità eccellente e prezzi competitivi. Sono rimasto molto soddisfatto.',
      rating: 5
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Trasforma il Tuo Giardino
                </h1>
                <p className="text-xl mb-8 text-green-50">
                  Servizi professionali di giardinaggio, manutenzione verde e edilizia da giardino in tutta l'Umbria. Pronto intervento H24.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+393464311027"
                    className="btn-primary bg-white text-green-600 hover:bg-gray-100"
                  >
                    Chiama Ora: 346 4311027
                  </a>
                  <Link
                    href="/servizi"
                    className="btn-secondary bg-green-500 text-white hover:bg-green-400"
                  >
                    Scopri i Servizi
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white rounded-lg shadow-2xl p-8">
                  <div className="aspect-square bg-green-100 rounded-lg flex items-center justify-center text-6xl">
                    🌿
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">I Nostri Servizi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                18 servizi specializzati per la cura completa del tuo giardino e delle aree verdi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/servizi"
                    className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
                  >
                    Scopri di più →
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/servizi" className="btn-primary">
                Visualizza Tutti i Servizi
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Perché Scegliere Multiservizi Privati</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Professionali', desc: 'Team esperto e qualificato', icon: '👨‍💼' },
                { title: 'Rapidi', desc: 'Pronto intervento H24', icon: '⚡' },
                { title: 'Affidabili', desc: 'Anni di esperienza', icon: '✅' },
                { title: 'Competitivi', desc: 'Prezzi trasparenti', icon: '💰' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Cosa Dicono i Nostri Clienti</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="service-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-gray-900">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto a Trasformare il Tuo Giardino?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Contattaci oggi per una consulenza gratuita e un preventivo personalizzato
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+393464311027"
                className="btn-primary bg-white text-green-600 hover:bg-gray-100"
              >
                Chiama: 346 4311027
              </a>
              <a
                href="mailto:multiservizi.privati.aziende@gmail.com"
                className="btn-secondary bg-green-500 text-white hover:bg-green-400"
              >
                Invia Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

