# API REST Node.js + Express + MySQL + JWT

## Instalación

1. Clona el repositorio o copia la carpeta en tu equipo.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura el archivo `.env` con tus datos de MySQL y secretos JWT.
4. Ejecuta el servidor:
   ```bash
   npm run dev
   ```

## Endpoints principales

- POST `/api/auth/register` - Registro de usuario
- POST `/api/auth/login` - Login y obtención de tokens
- POST `/api/auth/refresh` - Renovar token de acceso
- CRUD `/api/products` - Protegido, solo admin puede crear/editar/eliminar

## Roles

- `admin`: acceso total a productos
- `user`: solo lectura

## Notas

- Incluye manejo de errores y middlewares de autenticación/autorización.
- Código comentado y estructurado por responsabilidad.
- Recuerda crear la base de datos en MySQL antes de iniciar el servidor. 