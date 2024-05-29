import express from "express";
import sequelize from "./config/database.js";
import errorHandler from "./middleware/errorHandler.js";

// Importar rutas
import generoRoutes from "./routes/genero.routes.js";
import idiomaRoutes from "./routes/idioma.routes.js"
import tipoTraduccionRoutes from "./routes/tipo_traduccion.routes.js";

// Crear aplicación express
const app = express();
const PORT = process.env.PORT;

// Configurar express para recibir JSON en el body de las peticiones
app.use(express.json());

// Middlewares
app.use(errorHandler);

// Rutas
app.use(generoRoutes);
app.use(idiomaRoutes);
app.use(tipoTraduccionRoutes);

// Iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
  });
});
