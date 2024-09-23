'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Check, AlertTriangle, Zap, Palette, Layout } from 'lucide-react'

const praticas = [
  {
    titulo: "Consistência e Padrões",
    descricao: "Manter uma interface consistente e seguir padrões estabelecidos ajuda os usuários a se familiarizarem rapidamente com o sistema.",
    exemplo: "O Gmail usa ícones e layouts consistentes em todas as suas visualizações, facilitando a navegação.",
    beneficio: "Reduz a curva de aprendizado e aumenta a eficiência do usuário.",
    icone: <Layout className="w-8 h-8 text-indigo-600" />
  },
  {
    titulo: "Feedback Claro",
    descricao: "Fornecer feedback imediato e claro para as ações do usuário ajuda a orientá-lo e confirmar suas interações.",
    exemplo: "O WhatsApp usa tiques azuis para confirmar a leitura de mensagens, oferecendo feedback visual claro.",
    beneficio: "Aumenta a confiança do usuário e reduz erros e frustrações.",
    icone: <Check className="w-8 h-8 text-green-600" />
  },
  {
    titulo: "Prevenção de Erros",
    descricao: "Projetar interfaces que previnem erros antes que eles ocorram é mais eficaz do que boas mensagens de erro.",
    exemplo: "O Airbnb usa calendários interativos para seleção de datas, evitando erros de formato.",
    beneficio: "Minimiza frustrações e aumenta a satisfação do usuário.",
    icone: <AlertTriangle className="w-8 h-8 text-yellow-600" />
  },
  {
    titulo: "Flexibilidade e Eficiência",
    descricao: "Oferecer atalhos e personalizações para usuários experientes, mantendo a interface simples para iniciantes.",
    exemplo: "O Spotify permite criar playlists personalizadas e oferece recomendações automáticas.",
    beneficio: "Atende às necessidades de diferentes níveis de usuários, melhorando a experiência geral.",
    icone: <Zap className="w-8 h-8 text-purple-600" />
  },
  {
    titulo: "Estética e Design Minimalista",
    descricao: "Manter a interface limpa e focada, removendo elementos desnecessários que possam distrair o usuário.",
    exemplo: "O Google mantém sua página inicial minimalista, focando na função principal de busca.",
    beneficio: "Melhora a compreensão e a velocidade de uso, reduzindo a carga cognitiva.",
    icone: <Palette className="w-8 h-8 text-pink-600" />
  }
]

export default function BoasPraticasUsabilidade() {
  const [praticaAtual, setPraticaAtual] = useState(0)
  const [direction, setDirection] = useState(0)

  const proximaPratica = () => {
    setDirection(1)
    setPraticaAtual((prev) => (prev + 1) % praticas.length)
  }

  const praticaAnterior = () => {
    setDirection(-1)
    setPraticaAtual((prev) => (prev - 1 + praticas.length) % praticas.length)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        proximaPratica()
      } else if (event.key === 'ArrowLeft') {
        praticaAnterior()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
          Boas Práticas de Usabilidade
        </h1>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={praticaAtual}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              {praticas[praticaAtual].icone}
              <h2 className="text-3xl font-semibold text-indigo-700">
                {praticas[praticaAtual].titulo}
              </h2>
            </div>
            <p className="text-lg text-gray-700">{praticas[praticaAtual].descricao}</p>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-inner">
              <h3 className="font-semibold text-xl text-indigo-800 mb-2">Exemplo Real:</h3>
              <p className="text-gray-700">{praticas[praticaAtual].exemplo}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-inner">
              <h3 className="font-semibold text-xl text-purple-800 mb-2">Benefício:</h3>
              <p className="text-gray-700">{praticas[praticaAtual].beneficio}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={praticaAnterior}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <ChevronLeft className="mr-2" />
            Anterior
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={proximaPratica}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Próxima
            <ChevronRight className="ml-2" />
          </motion.button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Use as setas do teclado para navegar
        </p>
      </motion.div>
    </div>
  )
}