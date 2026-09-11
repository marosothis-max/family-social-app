'use client'

import { signOut } from '@/lib/actions/auth'
import { Bell, User } from 'lucide-react'

interface HeaderProps {
  userEmail?: string | null
}

export default function Header({ userEmail }: HeaderProps) {
  return (
    <header className="border-b border-white/10 glass-dark backdrop-blur-xl px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Panel Familiar</h1>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-white/10 transition-colors">
            <Bell className="h-5 w-5 text-gray-200" />
          </button>

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-200">{userEmail || 'Usuario'}</span>
          </div>

          <form action={signOut}>
            <button className="text-sm text-gray-200 hover:text-white font-medium px-3 py-1 rounded hover:bg-white/10 transition-colors">
              Salir
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
