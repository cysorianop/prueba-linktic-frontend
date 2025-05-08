# Prueba Técnica Frontend - Linktic

Este proyecto es una prueba técnica desarrollada con React + TypeScript que simula un sistema de autenticación y visualización de publicaciones (posts). Se basa en el uso de rutas protegidas, contexto de autenticación, consumo simulado de servicios y un enfoque modular con separación por responsabilidades.

## Objetivo
Desarrollar una interfaz web con React + TypeScript que consuma una API pública y muestre los datos de forma clara, funcional, estética y mantenible, aplicando buenas prácticas de desarrollo frontend.

---

## Instalación y Ejecución

```bash
git clone https://github.com/tu-usuario/prueba-linktic.git
cd prueba-linktic
npm install
npm run dev
```

Para ejecutar pruebas:
```bash
npm run test
```

---

## 📁 Arquitectura del Proyecto

```
src/
├── components/         # Componentes visuales
├── containers/         # Lógica de presentación (Container-Presenter)
├── context/            # Autenticación global (AuthContext)
├── hooks/              # Hooks personalizados para APIs
├── pages/              # Páginas como Login
├── services/           # Llamadas a APIs externas
├── styles/             # Archivos CSS o Bootstrap si aplica
├── tests/              # Pruebas unitarias
├── App.tsx             # Rutas protegidas
└── main.tsx            # Punto de entrada
```

---

## ⚙️ Funcionalidades

- ✅ Login funcional con validación y autenticación simulada
- ✅ Lista de publicaciones en tabla estilizada
- ✅ Detalle de publicación individual
- ✅ Navegación protegida por estado de login
- ✅ Botón de “Cerrar sesión” y “Volver”
- ✅ Estilos responsivos con Bootstrap
- ✅ Separación clara de lógica vs. presentación
- ✅ Pruebas unitarias con más de 60% de cobertura

---

## 🧠 Decisiones Técnicas

- **React + Vite + TypeScript**: stack moderno, rápido y tipado
- **Bootstrap**: estilos rápidos, responsivos y accesibles
- **Context API**: autenticación global sin librerías externas
- **Container-Presenter**: separación de lógica y vista para escalar
- **Git Flow**: ramas `main`, `dev`, `feature/*` con commits semánticos

---

## 🧩 Patrón de Diseño Aplicado

### Container-Presenter
- `PostListContainer.tsx`: maneja lógica de carga y errores
- `PostTable.tsx`: muestra tabla pura con props

✔️ Esto facilita pruebas, reusabilidad y separación de responsabilidades.

---

## 📈 Estrategia de Escalabilidad

- Fácil de extender para incluir `Users`, `Comments`, etc.
- Añadir paginación, filtros o estado global con React Query o Zustand
- Separación de componentes y lógica permite dividir tareas en equipo

---

## 🧑‍💻 Guía para desarrolladores

1. Crea una nueva rama desde `dev`:
   ```bash
   git checkout dev
   git checkout -b feature/nueva-funcionalidad
   ```
2. Implementa la funcionalidad usando arquitectura modular
3. Haz commits descriptivos:
   ```bash
   git commit -m "feat(post): paginación de tabla"
   ```
4. Crea PR a `dev`, luego merge a `main`

---

## 🌐 Accesibilidad y Rendimiento

- Tablas semánticas (`<thead>`, `<tbody>`, `<th>`) con buen contraste
- Responsive por defecto con Bootstrap
- Inputs con `required`, `type`, `placeholder`, roles y estructura clara
- Lazy loading posible en el futuro para mejora de rendimiento

---

## 📂 Git y Versionamiento

- `main`: código listo para producción
- `dev`: integración de features
- `feature/*`: nuevas funcionalidades (ej. `feature/login`)
- Commits semánticos: `feat:`, `fix:`, `test:`, `refactor:`

---

## 📊 Diagrama de Flujo de Componentes

```
App
 ├── / → Login
 ├── /posts → PostListContainer → PostTable + Header
 └── /post/:id → PostDetail
```

---

## 📌 Mejoras Futuras
- Integración real con Firebase/Auth0
- Tests de integración con MSW o Cypress
- Soporte a temas (claro/oscuro)

---

## 📄 Licencia
MIT

---

Desarrollado con 💻 por Cesar Soriano