import { getCurrentProfile } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default async function DashboardPage() {
  const profile = await getCurrentProfile()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Bienvenido, {profile?.full_name || 'Usuario'}
        </h1>
        <p className="text-gray-300 mt-1 text-lg">
          {profile?.family?.name || 'Tu familia'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-transform">
          <h3 className="text-sm font-medium text-gray-300">
            Publicaciones Recientes
          </h3>
          <p className="text-4xl font-bold text-white mt-2">12</p>
          <p className="text-sm text-gray-400 mt-1">En los últimos 7 días</p>
        </div>

        <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-transform">
          <h3 className="text-sm font-medium text-gray-300">
            Eventos Próximos
          </h3>
          <p className="text-4xl font-bold text-white mt-2">5</p>
          <p className="text-sm text-gray-400 mt-1">Esta semana</p>
        </div>

        <div className="glass-dark rounded-2xl p-6 hover:scale-105 transition-transform">
          <h3 className="text-sm font-medium text-gray-300">
            Tareas Pendientes
          </h3>
          <p className="text-4xl font-bold text-white mt-2">8</p>
          <p className="text-sm text-gray-400 mt-1">Por completar</p>
        </div>
      </div>

      <div className="glass-dark rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Actividad Reciente</h2>
        <p className="text-gray-400 text-center py-8">No hay actividad reciente</p>
      </div>
    </div>
  )
}
