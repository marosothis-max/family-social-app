# 📝 Instrucciones de Configuración - FamilyHub

## ✅ Lo que ya está hecho:

1. ✅ Proyecto Next.js creado
2. ✅ Dependencias instaladas
3. ✅ Estructura de carpetas creada
4. ✅ Configuración de Supabase
5. ✅ Componentes UI base
6. ✅ Sistema de autenticación
7. ✅ Dashboard y layout principal

## 🎯 Pasos para completar la configuración:

### Paso 1: Configurar las Credenciales de Supabase

1. **Abre el archivo** `.env.local` ubicado en la raíz del proyecto

2. **Ve a tu dashboard de Supabase**:
   - [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Click en tu proyecto

3. **Obtén tus credenciales**:
   - Ve a **Settings** → **API**
   - Copia los siguientes valores:

```env
# Project URL (ejemplo: https://abcdefgh.supabase.co)
NEXT_PUBLIC_SUPABASE_URL=PEGA_AQUI_TU_PROJECT_URL

# Anon/Public Key
NEXT_PUBLIC_SUPABASE_ANON_KEY=PEGA_AQUI_TU_ANON_KEY

# Service Role Key (haz click en el ojo 👁️ para revelarla)
SUPABASE_SERVICE_ROLE_KEY=PEGA_AQUI_TU_SERVICE_ROLE_KEY
```

4. **Guarda el archivo** `.env.local`

### Paso 2: Ejecutar el Proyecto

1. **Abre una terminal** en la carpeta del proyecto:
   ```bash
   cd "D:\Proyectos\varias webs\family-social-app"
   ```

2. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abre tu navegador** en:
   ```
   http://localhost:3000
   ```

### Paso 3: Crear tu Primera Cuenta

1. Click en **"Comenzar Ahora"** o **"Regístrate"**
2. Completa el formulario con:
   - Nombre completo
   - Email
   - Contraseña (mínimo 6 caracteres)
3. Click en **"Crear Cuenta"**

🎉 ¡Listo! Serás redirigido al dashboard.

## 📁 Archivos Importantes

```
family-social-app/
├── .env.local              ⚠️ CONFIGURA AQUÍ TUS CREDENCIALES
├── src/
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts   # Cliente para browser
│   │   │   └── server.ts   # Cliente para servidor
│   │   └── actions/
│   │       └── auth.ts     # Acciones de autenticación
│   ├── components/
│   │   ├── ui/            # Button, Input, Card
│   │   └── layout/        # Header, Sidebar
│   └── app/
│       ├── (auth)/        # Login, Register
│       ├── (dashboard)/   # Dashboard
│       └── page.tsx       # Landing page
```

## 🚀 Comandos Útiles

```bash
# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar producción localmente
npm start

# Linting
npm run lint
```

## 🔍 Verificar que Todo Funciona

### 1. Página Principal
- ✅ Debe cargar la landing page con "Bienvenido a FamilyHub"
- ✅ Botones "Comenzar Ahora" e "Iniciar Sesión" deben funcionar

### 2. Registro
- ✅ Formulario debe validar campos
- ✅ Al registrarse debe redirigir al dashboard
- ✅ Debe crear el usuario en Supabase

### 3. Login
- ✅ Debe validar email y contraseña
- ✅ Al iniciar sesión debe redirigir al dashboard
- ✅ Email debe mostrarse en el header

### 4. Dashboard
- ✅ Debe mostrar el sidebar con navegación
- ✅ Debe mostrar tarjetas con estadísticas
- ✅ Botón "Salir" debe cerrar sesión

## ⚠️ Solución de Problemas

### Error: "Missing environment variables"
**Solución**: Configura correctamente el archivo `.env.local` con tus credenciales de Supabase.

### Error: "Failed to connect to Supabase"
**Solución**: 
1. Verifica que la URL y las keys en `.env.local` sean correctas
2. Reinicia el servidor (`Ctrl + C` y luego `npm run dev`)

### Error: "User already exists"
**Solución**: El email ya está registrado. Usa otro email o inicia sesión.

### La página no se ve bien / No hay estilos
**Solución**:
```bash
# Limpia la caché
npm run build
# O borra la carpeta .next y reinicia
rm -rf .next
npm run dev
```

## 📊 Verificar en Supabase

1. **Ve a Table Editor** en Supabase
2. Deberías ver la tabla **`profiles`**
3. Al registrarte, debe aparecer un nuevo registro ahí

## 🎯 Siguiente Fase

Una vez que el proyecto funcione:

1. **Configurar Storage** para fotos
2. **Implementar módulo de Feed Social**
3. **Crear módulo de Calendario**
4. **Agregar módulo de Tareas**
5. **Implementar Álbumes de Fotos**

---

## 📞 ¿Necesitas Ayuda?

Si encuentras algún problema:
1. Verifica que seguiste todos los pasos
2. Revisa los logs en la terminal
3. Consulta la sección de "Solución de Problemas"

**¡Éxito con tu proyecto!** 🎉
