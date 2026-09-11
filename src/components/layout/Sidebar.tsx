'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Calendar, CheckSquare, StickyNote, Image, GraduationCap, Heart, Gift } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Muro Social', href: '/feed', icon: Users },
  { name: 'Álbumes', href: '/albums', icon: Image },
  { name: 'Calendario', href: '/calendar', icon: Calendar },
  { name: 'Tareas', href: '/tasks', icon: CheckSquare },
  { name: 'Notas', href: '/notes', icon: StickyNote },
  { name: 'Educación', href: '/education', icon: GraduationCap },
  { name: 'Bienestar', href: '/wellness', icon: Heart },
  { name: 'Regalos', href: '/gifts', icon: Gift },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 border-r glass-dark backdrop-blur-xl">
      <div className="p-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          FamilyHub
        </h2>
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'text-gray-200 hover:bg-white/10'
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
