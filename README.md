# DevTrack - Gestor de Proyectos Fullstack

Una aplicación web moderna para gestión de proyectos con arquitectura fullstack, construida con las mejores prácticas y tecnologías actuales.

## 🏗️ Arquitectura

### Frontend (React + TypeScript)
- **React 18** con TypeScript para tipado robusto
- **Vite** como bundler ultra-rápido
- **Tailwind CSS** para diseño utility-first
- **React Router** para navegación client-side
- **TanStack Query** para manejo de estado del servidor
- **Zustand** para estado global del cliente
- **Axios** para llamadas HTTP

### Backend (Node.js + Express + TypeScript)
- **Node.js** con TypeScript
- **Express.js** como framework web
- **JWT** con refresh tokens para autenticación
- **Prisma ORM** para acceso a base de datos
- **PostgreSQL** como base de datos principal

### Base de Datos
- **PostgreSQL** para datos relacionales
- **Prisma** como ORM con migraciones
- **Docker** para desarrollo local

## 📁 Estructura del Proyecto

```
DevTrack/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/         # Páginas principales
│   │   ├── hooks/         # Custom hooks
│   │   ├── store/         # Zustand stores
│   │   ├── services/      # Llamadas a API
│   │   ├── types/         # Interfaces TypeScript
│   │   └── router/        # Configuración de rutas
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Backend Node.js
│   ├── src/
│   │   ├── controllers/   # Lógica de negocio
│   │   ├── middleware/    # Middleware personalizado
│   │   ├── routes/        # Definición de rutas
│   │   ├── services/      # Lógica de servicios
│   │   └── utils/         # Utilidades
│   ├── prisma/           # Schema y migraciones
│   └── package.json
├── docker-compose.yml       # Configuración Docker
└── README.md
```

## 🚀 Funcionalidades Principales

### Autenticación
- ✅ Registro de usuarios
- ✅ Login con JWT
- ✅ Refresh tokens
- ✅ Protección de rutas

### Gestión de Proyectos
- ✅ Crear y editar proyectos
- ✅ Boards tipo Kanban
- ✅ Columnas personalizables
- ✅ Drag & drop de tareas

### Tareas
- ✅ Crear y editar tareas
- ✅ Asignar usuarios
- ✅ Estados y prioridades
- ✅ Comentarios y archivos

## 🛠️ Tecnologías

### Frontend
- **React 18** - UI library
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - CSS framework
- **React Router** - Routing
- **TanStack Query** - Server state
- **Zustand** - Client state
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **TypeScript** - Tipado estático
- **Prisma** - ORM
- **JWT** - Autenticación
- **PostgreSQL** - Base de datos

### DevOps
- **Docker** - Contenedores
- **Docker Compose** - Orquestación
- **ESLint** - Linting
- **Prettier** - Formateo

## 📋 Esquema de Base de Datos

### User
```typescript
interface User {
  id: string
  email: string
  name: string
  password: string
  createdAt: Date
  updatedAt: Date
}
```

### Project
```typescript
interface Project {
  id: string
  name: string
  description?: string
  ownerId: string
  createdAt: Date
  updatedAt: Date
  users: User[]
}
```

### Column
```typescript
interface Column {
  id: string
  name: string
  position: number
  projectId: string
  createdAt: Date
  updatedAt: Date
}
```

### Task
```typescript
interface Task {
  id: string
  title: string
  description?: string
  position: number
  columnId: string
  assigneeId?: string
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  createdAt: Date
  updatedAt: Date
}
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+
- Docker y Docker Compose
- Git

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd DevTrack
```

### 2. Iniciar base de datos
```bash
docker-compose up -d postgres
```

### 3. Instalar dependencias
```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 4. Configurar variables de entorno
```bash
# Backend
cp .env.example .env
# Editar .env con tus credenciales
```

### 5. Ejecutar migraciones
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

### 6. Iniciar aplicaciones
```bash
# Backend (terminal 1)
cd server
npm run dev

# Frontend (terminal 2)
cd client
npm run dev
```

## 📱 Rutas de la Aplicación

### Frontend
- `/login` - Página de inicio de sesión
- `/register` - Página de registro
- `/dashboard` - Dashboard principal
- `/board/:id` - Board de proyecto específico

### Backend API
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/refresh` - Refresh token
- `GET /api/projects` - Listar proyectos
- `POST /api/projects` - Crear proyecto
- `GET /api/projects/:id` - Obtener proyecto
- `PUT /api/projects/:id` - Actualizar proyecto
- `DELETE /api/projects/:id` - Eliminar proyecto

## 🧪 Testing

### Frontend
```bash
cd client
npm test              # Ejecutar tests
npm run test:coverage  # Ver cobertura
```

### Backend
```bash
cd server
npm test              # Ejecutar tests
npm run test:e2e      # Tests end-to-end
```

## 📦 Deploy

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy carpeta dist/
```

### Backend (Railway/Heroku)
```bash
cd server
npm run build
# Deploy aplicación
```

## 🤝 Contribución

1. Fork del repositorio
2. Crear feature branch (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

**DevTrack** - Construido con ❤️ usando React, Node.js y TypeScript
