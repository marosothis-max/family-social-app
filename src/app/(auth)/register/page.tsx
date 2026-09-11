import { signUp } from '@/lib/actions/auth'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md space-y-8 rounded-lg border bg-white p-8 shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Crear Cuenta</h2>
        <p className="mt-2 text-gray-600">Únete a tu familia</p>
      </div>

      <form action={signUp} className="mt-8 space-y-6">
        <Input
          id="full_name"
          name="full_name"
          type="text"
          label="Nombre Completo"
          required
          placeholder="Juan Pérez"
        />

        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          placeholder="tu@email.com"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Contraseña"
          required
          placeholder="••••••••"
          helperText="Mínimo 6 caracteres"
        />

        <Button type="submit" className="w-full">
          Crear Cuenta
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login" className="text-primary-600 hover:underline font-medium">
          Inicia Sesión
        </Link>
      </p>
    </div>
  )
}
