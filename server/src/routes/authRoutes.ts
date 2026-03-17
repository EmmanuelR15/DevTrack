import { Router } from 'express'
import { register, login, getMe } from '../controllers/authController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

// Rutas públicas
router.post('/register', register)
router.post('/login', login)

// Rutas protegidas
router.get('/me', authMiddleware, getMe)

export default router
