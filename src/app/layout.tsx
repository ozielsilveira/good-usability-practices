import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boas Práticas de Usabilidade',
  description: 'Aprenda sobre as melhores práticas de usabilidade em sistemas interativos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-indigo-800 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Usabilidade em Sistemas</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2023 Boas Práticas de Usabilidade. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}