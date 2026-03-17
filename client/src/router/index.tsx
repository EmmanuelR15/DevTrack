import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { DashboardPage } from '../pages/DashboardPage'
import { BoardPage } from '../pages/BoardPage'
import { ProtectedRoute } from '../components/ProtectedRoute'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/board/:id" 
        element={
          <ProtectedRoute>
            <BoardPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}
