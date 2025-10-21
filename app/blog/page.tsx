import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Come Prendersi Cura del Proprio Giardino in Primavera',
      excerpt: 'La primavera è il momento perfetto per rinnovare il tuo giardino. Scopri i nostri consigli per una manutenzione efficace.',
      date: '15 Marzo 2024',
      author: 'Milia Cristian',
      category: 'Manutenzione',
      image: '🌱'
    },
    {
      id: 2,
      title: 'Impianti di Irrigazione: Come Scegliere il Migliore',
      excerpt: 'Una guida completa per scegliere l\'impianto di irrigazione più adatto alle tue esigenze e al tuo budget.',
      date: '10 Marzo 2024',
      author: 'Milia Cristian',
      category: 'Irrigazione',
      image: '💧'
    },
    {
      id: 3,
      title: 'Prati Sintetici vs Prati Naturali: Quale Scegliere?',
      excerpt: 'Confronto dettagliato tra prati sintetici e naturali: vantaggi, svantaggi e come scegliere quello giusto per te.',
      date: '5 Marzo 2024',
      author: 'Milia Cristian',
      category: 'Prati',
      image: '🌾'
    },
    {
      id: 4,
      title: 'Guida alla Potatura: Quando e Come Potare le Piante',
      excerpt: 'La potatura è essenziale per la salute delle piante. Scopri quando e come potare correttamente le tue piante.',
      date: '28 Febbraio 2024',
      author: 'Milia Cristian',
      category: 'Manutenzione',
      image: '✂️'
    },
    {
      id: 5,
      title: 'Progettazione Giardini: I Nostri Consigli Professionali',
      excerpt: 'Scopri come progettare un giardino bellissimo e funzionale seguendo i nostri consigli professionali.',
      date: '20 Febbraio 2024',
      author: 'Milia Cristian',
      category: 'Progettazione',
      image: '🎨'
    },
    {
      id: 6,
      title: 'Abbattimento Alberi: Quando è Necessario e Come Farlo in Sicurezza',
      excerpt: 'Guida completa all\'abbattimento sicuro degli alberi: quando è necessario e quali precauzioni prendere.',
      date: '15 Febbraio 2024',
      author: 'Milia Cristian',
      category: 'Abbattimenti',
      image: '🪵'
    },
    {
      id: 7,
      title: 'Pavimentazioni da Giardino: Materiali e Scelte',
      excerpt: 'Scopri i diversi materiali disponibili per le pavimentazioni da giardino e come scegliere quello più adatto.',
      date: '10 Febbraio 2024',
      author: 'Milia Cristian',
      category: 'Pavimentazioni',
      image: '🪨'
    },
    {
      id: 8,
      title: 'Recinzioni da Giardino: Protezione e Estetica',
      excerpt: 'Come scegliere la recinzione giusta per il tuo giardino considerando protezione, estetica e durabilità.',
      date: '5 Febbraio 2024',
      author: 'Milia Cristian',
      category: 'Recinzioni',
      image: '🚪'
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-green-50">
              Consigli e guide per la cura del tuo giardino
            </p>
          </div>
        </section>

        {/* Blog Articles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 h-48 flex items-center justify-center text-7xl">
                    {article.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">di {article.author}</span>
                      <a href="#" className="text-green-600 font-semibold hover:text-green-700">
                        Leggi Articolo →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-white py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rimani Aggiornato
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Iscriviti alla nostra newsletter per ricevere consigli e guide direttamente nella tua inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Hai Domande sul Tuo Giardino?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Contattaci per una consulenza gratuita con i nostri esperti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+393464311027"
                className="btn-primary bg-white text-green-600 hover:bg-gray-100"
              >
                Chiama: 346 4311027
              </a>
              <Link
                href="/contatti"
                className="btn-secondary bg-green-500 text-white hover:bg-green-400"
              >
                Invia Messaggio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

