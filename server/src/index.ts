import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./lib/prisma";

// Importar rutas
import authRoutes from "./routes/authRoutes";

// Cargar variables de entorno
dotenv.config();

// Crear aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      /^http:\/\/127\.0\.0\.1:\d+$/,
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "DevTrack API running",
    timestamp: new Date().toISOString(),
  });
});

// Rutas
app.use("/api/auth", authRoutes);

// Manejo de rutas 404
app.use("*splat", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    statusCode: 404,
  });
});

// Error handler global
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);

    res.status(err.statusCode || 500).json({
      success: false,
      error: err.message || "Internal server error",
      statusCode: err.statusCode || 500,
    });
  },
);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 DevTrack API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("🔄 SIGTERM received, shutting down gracefully");
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("🔄 SIGINT received, shutting down gracefully");
  await prisma.$disconnect();
  process.exit(0);
});
