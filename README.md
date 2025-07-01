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

## Configuración del archivo .env

Crea un archivo llamado `.env` en la raíz del proyecto y agrega las siguientes variables con tus propios valores:

```env
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=nombre_de_tu_base_de_datos

JWT_SECRET=un_secreto_muy_seguro
JWT_REFRESH_SECRET=otro_secreto_muy_seguro

PORT=3000
```

> ⚠️ **Importante:** No subas el archivo `.env` a tu repositorio, ya que contiene información sensible.

## Instrucciones para crear la base de datos MySQL

Antes de iniciar el servidor, asegúrate de crear la base de datos y el usuario en MySQL. Puedes usar el siguiente ejemplo:

```sql
CREATE DATABASE nombre_de_tu_base_de_datos;
CREATE USER 'tu_usuario_mysql'@'localhost' IDENTIFIED BY 'tu_contraseña_mysql';
GRANT ALL PRIVILEGES ON nombre_de_tu_base_de_datos.* TO 'tu_usuario_mysql'@'localhost';
FLUSH PRIVILEGES;
```

Asegúrate de reemplazar los valores por los que usas en tu archivo `.env`.

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