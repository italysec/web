import { motion } from 'framer-motion'
import { Hash, Users, Shield, Mail } from 'lucide-react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

export function RulesPage() {
  const channels = [
    {
      name: 'generale',
      description: 'Discussioni generali su cosa succede nel mondo dell\'IT Security.',
      icon: <Hash className="w-5 h-5" />
    },
    {
      name: 'eventi',
      description: 'Segnalazioni di eventi a cui partecipiamo o che consigliamo di partecipare.',
      icon: <Hash className="w-5 h-5" />
    },
    {
      name: 'lavoro',
      description: 'Segnalazioni di offerte o richieste di lavoro o consulenza.',
      icon: <Hash className="w-5 h-5" />
    },
    {
      name: 'off-topic',
      description: 'Discussioni generli non attinenti all\'IT Security.',
      icon: <Hash className="w-5 h-5" />
    }
  ]

  const guidelines = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Profilo',
      description: 'Slack permette di personalizzare il proprio profilo. Usiamolo per far capire a tutti chi siamo.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Inviti',
      description: 'Tutti i nuovi membri DEVONO essere proposti in #membernomination. Chi vuole può entrare nel canale sia per proporre sia per votare.'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Enjoy!',
      description: 'Divertiti e contribuisci alla community in modo costruttivo.'
    }
  ]

  const handleInviteRequest = () => {
    alert('Per richiedere un invito, contatta un membro della community o invia una mail.')
  }

  return (
    <div className="min-h-screen bg-secondary-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-100 mb-6">
            Regolamento ItalySec
          </h1>
          <p className="text-lg text-secondary-400 max-w-2xl mx-auto">
            ItalySec vuole essere una community (sottoforma di una chat Slack) composta da persone italiane (o italofone), 
            che vivono in Italia o all'estero, che fanno parte dell'industria dell'IT Security.
          </p>
        </motion.div>

        {/* Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-secondary-800 border-secondary-700">
            <h2 className="text-2xl font-semibold text-secondary-100 mb-4">
              Scopo della Community
            </h2>
            <p className="text-secondary-400 leading-relaxed">
              Lo scopo della community è di agevolare lo scambio di informazioni, opinioni ed eventi in un ambiente 
              trusted con persone di background tecnico che hanno la "skin in the game" nell'IT Security.
            </p>
          </Card>
        </motion.div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-secondary-100 mb-6 text-center">
            Canali Principali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full bg-secondary-800 border-secondary-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-secondary-300">
                        {channel.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-100 mb-2">
                        {channel.name}
                      </h3>
                      <p className="text-secondary-400 text-sm">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-secondary-100 mb-6 text-center">
            Linee Guida
          </h2>
          <div className="bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-2xl p-8 border border-secondary-700">
            <p className="text-secondary-300 mb-8 text-center">
              Più che un regolamento in senso stretto, le seguenti sono linee guida che tutti dovremmo rispettare 
              per preservare i principi fondamentali della community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={guideline.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-secondary-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <div className="text-secondary-300">
                      {guideline.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-secondary-100 mb-2">
                    {guideline.title}
                  </h3>
                  <p className="text-secondary-400 text-sm">
                    {guideline.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-secondary-800 border-secondary-700">
            <h3 className="text-xl font-semibold text-secondary-100 mb-4">
              Accesso Riservato
            </h3>
            <p className="text-secondary-400 mb-6">
              La community è riservata ai professionisti del settore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://italysec.slack.com/', '_blank', 'noopener,noreferrer')}
                icon={<Shield className="w-5 h-5" />}
                className="bg-secondary-700 hover:bg-secondary-600 text-secondary-100 border border-secondary-600"
              >
                Accedi (Solo membri)
              </Button>
              <Button
                onClick={handleInviteRequest}
                variant="secondary"
                icon={<Mail className="w-5 h-5" />}
                className="bg-transparent border-secondary-600 text-secondary-300 hover:bg-secondary-700"
              >
                Richiedi Invito
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
} 