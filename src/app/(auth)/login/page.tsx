import { signIn } from '@/lib/actions/auth'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  return (
    <div className="w-full max-w-md space-y-8 glass-dark rounded-2xl p-8 shadow-2xl border border-white/10">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          FamilyHub
        </h1>
        <h2 className="text-2xl font-bold text-white">Iniciar Sesión</h2>
        <p className="mt-2 text-gray-300">Bienvenido de vuelta a tu familia</p>
      </div>

      <form action={signIn} className="mt-8 space-y-6">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          placeholder="tu@email.com"
          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Contraseña"
          required
          placeholder="••••••••"
          className="bg-white/10 border-white/20 text-white placeholder-gray-400"
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:scale-[1.02]"
        >
          Iniciar Sesión
        </Button>
      </form>

      <p className="text-center text-sm text-gray-300">
        ¿No tienes cuenta?{' '}
        <Link href="/register" className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors">
          Regístrate
        </Link>
      </p>
    </div>
  )
}
