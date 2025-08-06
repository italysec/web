import { motion } from 'framer-motion'
import { Lock, Mail, Terminal } from 'lucide-react'
import { Button } from '@/components/Button'

export function HomePage() {
  const handleSlackAccess = () => {
    window.open('https://italysec.slack.com/', '_blank', 'noopener,noreferrer')
  }

  const handleInviteRequest = () => {
    alert('Per richiedere un invito, contatta un membro della community o invia una mail.')
  }

  return (
    <div className="min-h-screen bg-secondary-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-secondary-700/50 rounded-xl mx-auto flex items-center justify-center border border-secondary-600/30 mb-6">
            <img src="/isec.png" alt="ItalySec" className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-secondary-100 mb-2">
            ItalySec
          </h1>
          <p className="text-secondary-400 text-sm">
            Community privata di professionisti dell'IT Security
          </p>
        </motion.div>

        {/* Access Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <Button
            onClick={handleSlackAccess}
            icon={<Lock className="w-5 h-5" />}
            className="w-full bg-secondary-700 hover:bg-secondary-600 text-secondary-100 border border-secondary-600"
          >
            Accedi (Solo membri)
          </Button>
          <Button
            onClick={handleInviteRequest}
            variant="secondary"
            icon={<Mail className="w-5 h-5" />}
            className="w-full bg-transparent border-secondary-600 text-secondary-300 hover:bg-secondary-700"
          >
            Richiedi Invito
          </Button>
        </motion.div>

        {/* Easter Egg Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 text-secondary-500 text-xs opacity-60 hover:opacity-100 transition-opacity duration-200">
            <Terminal className="w-3 h-3" />
            <span>// hint: check console</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 