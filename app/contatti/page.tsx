'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Contattaci</h1>
            <p className="text-xl text-green-50">
              Siamo disponibili per consulenze e preventivi gratuiti
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Inviaci un Messaggio</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✓ Grazie! Abbiamo ricevuto il tuo messaggio. Ti contatteremo presto.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="tua@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="+39 3XX XXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio di Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="giardinaggio">Giardinaggio Progettazione</option>
                      <option value="manutenzioni">Manutenzioni Ordinarie</option>
                      <option value="abbattimenti">Abbattimenti Alberi</option>
                      <option value="irrigazione">Impianti di Irrigazione</option>
                      <option value="prati">Installazione Prati</option>
                      <option value="recinzioni">Recinzioni e Palizzate</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Descrivi le tue esigenze..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Invia Messaggio
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Informazioni di Contatto</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">📍</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Indirizzo</h3>
                        <p className="text-gray-600">
                          Marsciano (PG) 06055<br />
                          Umbria, Italia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">📞</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Telefono</h3>
                        <p className="text-gray-600">
                          <a href="tel:+393464311027" className="text-green-600 hover:text-green-700 font-semibold">
                            346 4311027
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Pronto intervento H24</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">✉️</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:multiservizi.privati.aziende@gmail.com" className="text-green-600 hover:text-green-700 font-semibold">
                            multiservizi.privati.aziende@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">🏢</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Dati Aziendali</h3>
                        <p className="text-gray-600">
                          P.IVA: 03709160547<br />
                          C.F.: MLICST84H18B354H
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-green-50 rounded-lg border-2 border-green-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Disponibilità</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Orario Lavorativo:</strong> Lunedì - Sabato</p>
                    <p><strong>Pronto Intervento:</strong> H24 su richiesta</p>
                    <p className="text-sm text-gray-600 mt-4">
                      Contattaci in qualsiasi momento per emergenze e richieste urgenti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Domande Frequenti</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Quanto tempo impiegate per un preventivo?',
                  a: 'Generalmente entro 24-48 ore dalla richiesta. Per progetti complessi potremmo avere bisogno di un sopralluogo.'
                },
                {
                  q: 'Offrite garanzia sui vostri lavori?',
                  a: 'Sì, tutti i nostri lavori sono garantiti. I dettagli variano a seconda del tipo di servizio.'
                },
                {
                  q: 'Siete assicurati?',
                  a: 'Sì, siamo completamente assicurati per tutti i nostri servizi, garantendo la massima protezione ai nostri clienti.'
                },
                {
                  q: 'Operate in tutta l\'Umbria?',
                  a: 'Sì, operiamo in tutta la regione Umbria. Contattaci per verificare la disponibilità nella tua zona.'
                },
                {
                  q: 'Quali sono i vostri metodi di pagamento?',
                  a: 'Accettiamo contanti, bonifico bancario e altre forme di pagamento. Discutiamo i dettagli al momento del preventivo.'
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Non Aspettare, Contattaci Oggi!
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Chiama subito per una consulenza gratuita e scopri come possiamo trasformare il tuo giardino
            </p>
            <a
              href="tel:+393464311027"
              className="btn-primary bg-white text-green-600 hover:bg-gray-100 inline-block"
            >
              Chiama: 346 4311027
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

