import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FamilyHub - Red Social Familiar',
  description: 'Conecta con tu familia de manera privada y segura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="animated-bg"></div>
        {children}
      </body>
    </html>
  )
}
