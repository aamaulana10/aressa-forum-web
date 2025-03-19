import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ThreadPage from './pages/thread'

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path="/*" element={<ThreadPage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App
