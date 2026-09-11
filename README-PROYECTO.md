# FamilyHub - Red Social Familiar

Red social privada multitenant para familias, construida con Next.js, TypeScript, Tailwind CSS y Supabase.

## 🚀 Características

- ✅ Autenticación segura con Supabase Auth
- ✅ Sistema multitenant (aislamiento por familias)
- ✅ Roles jerárquicos (Super Admin, Admin Familia, Miembro)
- ✅ Dashboard interactivo
- ✅ Diseño responsive
- ✅ Componentes UI reutilizables

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Cuenta de Supabase (gratis)
- npm o yarn

## 🔧 Configuración

### 1. Configurar Variables de Entorno

Abre el archivo `.env.local` y reemplaza los valores con tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Cómo obtener tus credenciales:**
1. Ve a tu proyecto en [supabase.com](https://supabase.com)
2. Click en **Settings** → **API**
3. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon/Public Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar el Proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
family-social-app/
├── src/
│   ├── app/                    # Rutas de Next.js (App Router)
│   │   ├── (auth)/            # Rutas de autenticación
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/       # Rutas protegidas
│   │   │   └── dashboard/
│   │   └── api/               # API Routes
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base UI
│   │   ├── layout/           # Header, Sidebar
│   │   └── shared/           # Componentes compartidos
│   ├── lib/                   # Lógica de negocio
│   │   ├── supabase/         # Configuración de Supabase
│   │   ├── actions/          # Server Actions
│   │   ├── queries/          # Consultas a la BD
│   │   └── utils/            # Utilidades
│   └── types/                # Tipos TypeScript
├── .env.local                # Variables de entorno (NO commitear)
└── tailwind.config.ts        # Configuración de Tailwind
```

## 🎨 Tecnologías Utilizadas

- **Next.js 14+** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Supabase** - Backend (BD, Auth, Storage)
- **Lucide React** - Iconos
- **Zod** - Validación de esquemas
- **React Hook Form** - Manejo de formularios

## 📝 Próximos Pasos

1. **Configurar las credenciales** en `.env.local`
2. **Crear tu primera cuenta** en `/register`
3. **Explorar el dashboard** en `/dashboard`

## 🔐 Seguridad

- ✅ Row Level Security (RLS) habilitado en Supabase
- ✅ Middleware de autenticación
- ✅ Variables de entorno protegidas
- ✅ Validación de datos con Zod

## 📚 Documentación Adicional

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🐛 Solución de Problemas

### Error: "Invalid API Key"
- Verifica que las credenciales en `.env.local` sean correctas
- Asegúrate de haber reiniciado el servidor después de cambiar `.env.local`

### Error: "Cannot connect to Supabase"
- Verifica que el proyecto de Supabase esté activo
- Revisa la URL del proyecto

### Error de compilación
```bash
# Limpia la caché y reinstala
rm -rf .next node_modules
npm install
npm run dev
```

## 📞 Soporte

Para reportar issues o solicitar features:
- Crea un issue en el repositorio
- Contacta al equipo de desarrollo

---

Desarrollado con ❤️ usando Next.js y Supabase
