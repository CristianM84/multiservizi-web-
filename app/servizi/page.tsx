import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Giardinaggio Progettazione',
      description: 'Progettazione e realizzazione di giardini personalizzati secondo le tue esigenze e lo stile desiderato.',
      details: 'Creiamo giardini unici e funzionali, dalle piante alla pavimentazione, gestendo ogni aspetto del progetto.',
      icon: '🌱'
    },
    {
      id: 2,
      title: 'Manutenzioni Ordinarie',
      description: 'Servizi di manutenzione regolare per mantenere il tuo giardino sempre in perfette condizioni.',
      details: 'Potatura, diserbo, pulizia e cura periodica delle aree verdi per una bellezza duratura.',
      icon: '✂️'
    },
    {
      id: 3,
      title: 'Abbattimenti Alberi',
      description: 'Abbattimento sicuro e professionale di alberi con smaltimento rifiuti e ripristino area.',
      details: 'Utilizziamo attrezzature professionali e seguiamo rigide norme di sicurezza.',
      icon: '🪵'
    },
    {
      id: 4,
      title: 'Impianti di Irrigazione',
      description: 'Installazione e manutenzione di impianti di irrigazione automatici e efficienti.',
      details: 'Sistemi moderni che garantiscono il corretto apporto idrico alle piante.',
      icon: '💧'
    },
    {
      id: 5,
      title: 'Installazione Prati',
      description: 'Realizzazione di prati naturali e sintetici di alta qualità e lunga durata.',
      details: 'Prati verdeggianti e resistenti, perfetti per giardini residenziali e aree pubbliche.',
      icon: '🌾'
    },
    {
      id: 6,
      title: 'Palizzate di Contenimento',
      description: 'Installazione di palizzate e strutture di contenimento in legno e altri materiali.',
      details: 'Soluzioni robuste e estetiche per delimitare e proteggere le aree verdi.',
      icon: '🏗️'
    },
    {
      id: 7,
      title: 'Recinzioni di Ogni Genere',
      description: 'Installazione di recinzioni in legno, metallo, PVC e altri materiali.',
      details: 'Recinzioni personalizzate per ogni esigenza di privacy e sicurezza.',
      icon: '🚪'
    },
    {
      id: 8,
      title: 'Casette in Legno da Giardino',
      description: 'Realizzazione e installazione di casette in legno per giardino.',
      details: 'Strutture robuste e affascinanti per ampliare lo spazio esterno.',
      icon: '🏠'
    },
    {
      id: 9,
      title: 'Trattamenti Legnosi',
      description: 'Trattamenti protettivi e decorativi per legno esterno.',
      details: 'Protezione da intemperie, muffe e parassiti per una durata maggiore.',
      icon: '🎨'
    },
    {
      id: 10,
      title: 'Pavimentazioni da Giardino',
      description: 'Realizzazione di pavimentazioni in pietra, cemento e materiali naturali.',
      details: 'Superfici resistenti e belle che trasformano l\'aspetto del giardino.',
      icon: '🪨'
    },
    {
      id: 11,
      title: 'Edilizia da Giardino',
      description: 'Costruzione di strutture esterne come pergolati, gazebo e verande.',
      details: 'Realizzazioni personalizzate che aggiungono valore e funzionalità.',
      icon: '🏗️'
    },
    {
      id: 12,
      title: 'Ispezione Gronde e Tetti con Drone',
      description: 'Ispezione professionale di gronde, tetti e piante utilizzando tecnologia drone.',
      details: 'Controlli dettagliati e sicuri senza rischi per l\'operatore.',
      icon: '🚁'
    },
    {
      id: 13,
      title: 'Progettazione Aiuole Floreali',
      description: 'Progettazione e realizzazione di aiuole floreali colorate e attraenti.',
      details: 'Composizioni floreali che aggiungono bellezza e colore al giardino.',
      icon: '🌸'
    },
    {
      id: 14,
      title: 'Pulizie Boschive',
      description: 'Pulizia e manutenzione di aree boschive e zone naturali.',
      details: 'Rimozione di rami secchi, potatura e ripristino della vegetazione.',
      icon: '🌲'
    },
    {
      id: 15,
      title: 'Smaltimento Rifiuti del Verde',
      description: 'Raccolta e smaltimento professionale di rifiuti vegetali.',
      details: 'Servizio completo di smaltimento secondo le normative ambientali.',
      icon: '♻️'
    },
    {
      id: 16,
      title: 'Smaltimento Rifiuti Plastici e Ferrosi',
      description: 'Smaltimento di rifiuti plastici e ferrosi in conformità alle normative.',
      details: 'Gestione responsabile e sostenibile dei rifiuti.',
      icon: '🔧'
    },
    {
      id: 17,
      title: 'Installazione Prati Sintetici',
      description: 'Installazione di prati sintetici di alta qualità e lunga durata.',
      details: 'Prati artificiali che mantengono l\'aspetto naturale senza manutenzione.',
      icon: '🟢'
    },
    {
      id: 18,
      title: 'Progettazione Aree Giardino Interni',
      description: 'Progettazione di aree verdi all\'interno di edifici e spazi coperti.',
      details: 'Soluzioni innovative per portare la natura dentro casa o in ufficio.',
      icon: '🌿'
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">I Nostri Servizi</h1>
            <p className="text-xl text-green-50">
              18 servizi specializzati per la cura completa del tuo giardino e delle aree verdi
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="service-card group">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {service.details}
                  </p>
                  <a
                    href="tel:+393464311027"
                    className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
                  >
                    Richiedi Preventivo →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Come Lavoriamo</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Consulenza', desc: 'Ascoltiamo le tue esigenze e analizziamo lo spazio' },
                { step: '2', title: 'Progettazione', desc: 'Creiamo un progetto personalizzato' },
                { step: '3', title: 'Preventivo', desc: 'Ti presentiamo un preventivo trasparente' },
                { step: '4', title: 'Realizzazione', desc: 'Eseguiamo il lavoro con professionalità' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Hai Bisogno di Uno dei Nostri Servizi?
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

