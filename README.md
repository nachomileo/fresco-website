# Fresco Web

Nueva plataforma web de **Fresco**, construida con Next.js. El proyecto se encuentra en una etapa inicial: primero se desarrollará la experiencia visual y luego se integrará o migrará el contenido histórico del sitio WordPress existente.

## Estado del proyecto

> En desarrollo activo. La arquitectura de contenido, la integración con WordPress y la infraestructura de producción todavía están por definir.

Actualmente el repositorio contiene una base funcional con:

- Next.js con App Router.
- React y TypeScript.
- Tailwind CSS.
- ESLint con la configuración recomendada para Next.js.
- Optimización de imágenes mediante `sharp`.
- Página inicial mínima para comenzar la implementación visual.

## Stack

| Tecnología | Uso |
| --- | --- |
| [Next.js](https://nextjs.org/) | Framework, renderizado y rutas |
| [React](https://react.dev/) | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y sistema visual |
| [ESLint](https://eslint.org/) | Análisis estático del código |
| [pnpm](https://pnpm.io/) | Gestión de dependencias |

Las versiones exactas están fijadas en `package.json` y `pnpm-lock.yaml`.

## Requisitos

- Node.js 20.9 o posterior.
- pnpm 11 o una versión compatible con el lockfile.
- Git.

Si pnpm no está instalado, puede habilitarse mediante Corepack:

```bash
corepack enable
corepack prepare pnpm@11 --activate
```

## Puesta en marcha

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd fresco-web
   ```

2. Instalar las dependencias:

   ```bash
   pnpm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000).

Los cambios realizados durante el desarrollo se actualizan automáticamente en el navegador.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera y valida el build de producción |
| `pnpm start` | Ejecuta el build de producción |
| `pnpm lint` | Analiza el código con ESLint |

Para comprobar un cambio antes de enviarlo:

```bash
pnpm lint
pnpm build
```

## Estructura del repositorio

```text
fresco-web/
├── public/                 # Recursos estáticos públicos
├── src/
│   └── app/
│       ├── favicon.ico     # Ícono del sitio
│       ├── globals.css     # Estilos globales y configuración de Tailwind
│       ├── layout.tsx      # Layout raíz y metadata base
│       └── page.tsx        # Página de inicio
├── eslint.config.mjs       # Configuración de ESLint
├── next.config.ts          # Configuración de Next.js
├── package.json            # Scripts y dependencias
├── pnpm-lock.yaml          # Versiones reproducibles de dependencias
├── pnpm-workspace.yaml     # Configuración y permisos de build de pnpm
├── postcss.config.mjs      # Integración de Tailwind con PostCSS
└── tsconfig.json           # Configuración de TypeScript
```

La estructura crecerá a medida que se definan las páginas, los componentes compartidos y la capa de contenido.

## Variables de entorno

La aplicación no requiere variables de entorno por el momento.

Cuando se incorpore WordPress u otro servicio, las variables públicas deberán documentarse en `.env.example`. Los secretos se guardarán únicamente en `.env.local` o en el proveedor de despliegue y nunca deberán subirse al repositorio.

Convención de Next.js:

- Variables privadas: disponibles solamente en el servidor.
- Variables con prefijo `NEXT_PUBLIC_`: expuestas al navegador; no deben contener secretos.

## Contenido y migración desde WordPress

El sitio reemplazará o consumirá contenido de una instalación de WordPress existente. Antes de implementar la integración se realizará una auditoría de:

- Entradas, páginas y tipos de contenido personalizados.
- Categorías, etiquetas y otras taxonomías.
- Autores, fechas y estados de publicación.
- Medios, textos alternativos y archivos adjuntos.
- Slugs, enlaces internos, metadata SEO y redirecciones.
- Campos personalizados y dependencias de plugins.

Según el acceso disponible y las necesidades editoriales se elegirá una de estas estrategias:

1. WordPress headless mediante REST API o WPGraphQL.
2. Exportación y migración completa hacia un nuevo origen de datos.
3. Estrategia híbrida durante la transición.

Los scripts de extracción deberán ser repetibles, paginar todos los resultados, preservar identificadores de origen y producir un informe que permita comparar cantidades y detectar contenido faltante.

## Criterios de calidad

Todo desarrollo debe contemplar:

- Diseño adaptable desde móvil hasta escritorio.
- HTML semántico y navegación por teclado.
- Contraste, foco visible y textos alternativos adecuados.
- Optimización de imágenes y carga de fuentes.
- Metadata, URLs canónicas, sitemap y datos estructurados cuando corresponda.
- Preservación de URLs históricas o redirecciones permanentes durante la migración.
- Componentes de servidor por defecto; componentes de cliente solo cuando la interacción lo requiera.
- Ausencia de errores de lint y build antes de integrar cambios.

## Flujo de trabajo

1. Crear una rama breve y descriptiva desde `main`.
2. Implementar un cambio acotado.
3. Ejecutar `pnpm lint` y `pnpm build`.
4. Abrir un pull request explicando el objetivo, las decisiones relevantes y cómo se verificó.
5. Incluir capturas o videos cuando haya cambios visuales.

Se recomienda usar nombres de rama como:

```text
feature/home-hero
fix/mobile-navigation
chore/update-dependencies
```

No deben incluirse credenciales, exportaciones con datos sensibles, archivos `.env.local`, builds locales ni dependencias instaladas.

## Despliegue

El proveedor de producción todavía está por definir. El proyecto puede desplegarse en cualquier plataforma compatible con Next.js y Node.js; antes de publicar deberán configurarse:

- Variables de entorno.
- Dominio y HTTPS.
- Fuente de contenido y permisos de lectura.
- Caché y estrategia de revalidación.
- Analítica y monitoreo, si se aprueban.
- Redirecciones desde el WordPress anterior.
- Backups y procedimiento de reversión.

El comando de build esperado por CI/CD es:

```bash
pnpm install --frozen-lockfile
pnpm build
```

## Seguridad

No publiques vulnerabilidades ni credenciales en un issue público. Comunícalas de forma privada a los responsables del repositorio. El canal formal de reporte se documentará antes de hacer público el proyecto.

## Licencia

Todos los derechos reservados. La licencia definitiva del repositorio está pendiente de definición; el código no debe asumirse como open source mientras no exista un archivo `LICENSE` explícito.
