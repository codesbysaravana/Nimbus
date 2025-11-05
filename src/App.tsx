import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />
      case 'login':
        return <Login />
      case 'forgot-password':
        return <ForgotPass />
      case 'dashboard':
        return <Dashboard />
      default:
        return <LandingPage />
    }
  }

  return (
    <div className="min-h-screen">
      {renderPage()}

      {/* Navigation Bar for Testing */}
      <div className="fixed bottom-6 right-6 flex gap-2 z-50">
        <button
          onClick={() => setCurrentPage('landing')}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            currentPage === 'landing'
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300 hover:border-gray-400'
          }`}
        >
          Landing
        </button>
        <button
          onClick={() => setCurrentPage('login')}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            currentPage === 'login'
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300 hover:border-gray-400'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setCurrentPage('forgot-password')}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            currentPage === 'forgot-password'
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300 hover:border-gray-400'
          }`}
        >
          Forgot Password
        </button>
        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`px-4 py-2 rounded text-sm font-medium transition ${
            currentPage === 'dashboard'
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300 hover:border-gray-400'
          }`}
        >
          Dashboard
        </button>
      </div>
    </div>
  )
}

export default App
