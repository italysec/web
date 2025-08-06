import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-secondary-900">
      {/* Header */}
      <header className="bg-secondary-800 border-b border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-secondary-700 flex items-center justify-center">
                <img src="/isec.png" alt="ItalySec" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold text-secondary-100">ItalySec</span>
            </Link>

            {/* Mobile menu button - only show on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-secondary-300 hover:text-primary-400 hover:bg-secondary-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation - simplified */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="text-secondary-400 text-sm px-3 py-2">
                  Community privata di professionisti dell'IT Security
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-800 border-t border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-secondary-700 rounded-lg flex items-center justify-center">
                <img src="/isec.png" alt="ItalySec" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-lg font-bold text-secondary-100">ItalySec</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary-700">
            <p className="text-secondary-500 text-sm text-center">
              © 2016-2025 ItalySec. Community privata di professionisti dell'IT Security.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 