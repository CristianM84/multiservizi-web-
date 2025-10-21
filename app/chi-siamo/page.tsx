import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ChiSiamoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Chi Siamo</h1>
            <p className="text-xl text-green-50">
              Professionisti del verde con anni di esperienza
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Multiservizi Privati e Aziende</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  Siamo un'azienda specializzata in servizi di giardinaggio, manutenzione verde e edilizia da giardino con sede a Marsciano, in provincia di Perugia.
                </p>
                <p className="text-gray-600 mb-4 text-lg">
                  Con anni di esperienza nel settore, abbiamo sviluppato una profonda conoscenza delle tecniche di coltivazione, manutenzione e progettazione di spazi verdi.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  Il nostro team di professionisti è sempre disponibile per offrire soluzioni personalizzate che trasformano i tuoi spazi esterni in ambienti bellissimi e funzionali.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Proprietario:</strong> Milia Cristian</p>
                  <p className="text-gray-700"><strong>Sede:</strong> Marsciano (PG) 06055</p>
                  <p className="text-gray-700"><strong>P.IVA:</strong> 03709160547</p>
                  <p className="text-gray-700"><strong>C.F.:</strong> MLICST84H18B354H</p>
                </div>
              </div>
              <div className="bg-green-100 rounded-lg p-8">
                <div className="aspect-square bg-green-200 rounded-lg flex items-center justify-center text-8xl">
                  🌿
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">I Nostri Valori</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Professionalità',
                  desc: 'Team qualificato e competente in ogni aspetto del nostro lavoro',
                  icon: '👨‍💼'
                },
                {
                  title: 'Qualità',
                  desc: 'Utilizziamo materiali e tecniche di alta qualità per risultati eccellenti',
                  icon: '⭐'
                },
                {
                  title: 'Affidabilità',
                  desc: 'Siamo sempre puntuali e manteniamo gli impegni presi',
                  icon: '✅'
                },
                {
                  title: 'Sostenibilità',
                  desc: 'Rispettiamo l\'ambiente e utilizziamo pratiche eco-friendly',
                  icon: '🌍'
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">I Nostri Servizi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Offriamo 18 servizi specializzati per la cura completa del tuo giardino
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Giardinaggio e Progettazione',
                'Manutenzioni Ordinarie',
                'Abbattimenti Alberi',
                'Impianti di Irrigazione',
                'Installazione Prati',
                'Recinzioni e Palizzate',
                'Casette in Legno',
                'Trattamenti Legnosi',
                'Pavimentazioni da Giardino',
                'Edilizia da Giardino',
                'Ispezione con Drone',
                'Progettazione Aiuole Floreali',
                'Pulizie Boschive',
                'Smaltimento Rifiuti',
                'Prati Sintetici',
                'Aree Giardino Interni',
              ].map((service, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Contattaci per Saperne di Più
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Siamo disponibili per consulenze gratuite e preventivi personalizzati
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

