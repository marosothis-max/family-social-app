// Cliente de Supabase para uso en Server Components y Server Actions
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // La función `set` es llamada desde un Server Component.
            // Esto puede ser ignorado si tienes middleware que actualiza las cookies.
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // La función `remove` es llamada desde un Server Component.
            // Esto puede ser ignorado si tienes middleware que actualiza las cookies.
          }
        },
      },
    }
  )
}

// Función auxiliar para obtener el usuario actual en Server Components
export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  return user
}

// Función auxiliar para obtener el perfil del usuario actual
export async function getCurrentProfile() {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select(
      `
      *,
      family:families(*),
      role:roles(*)
    `
    )
    .eq('id', user.id)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return profile
}

// Verificar si el usuario es admin de familia
export async function isFamilyAdmin() {
  const profile = await getCurrentProfile()
  if (!profile || !profile.role) return false
  return profile.role.hierarchy_level <= 2
}

// Verificar si el usuario es super admin
export async function isSuperAdmin() {
  const profile = await getCurrentProfile()
  if (!profile || !profile.role) return false
  return profile.role.hierarchy_level === 1
}
