import HomePage from './pages/HomePage'
import FavoritePage from './pages/FavoritePage'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="flex bg-slate-50">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </div>
  )
}

export default App
