import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NftDesignOne from './pages/NftDesignOne/NftDesignOne'
import HomePage from './pages/HomePage'
import Aquarium from './pages/Aquarium/Aquarium'
import GymFluencer from './pages/GymFluencer/GymFluencer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/nftdesignone' element={<NftDesignOne />} />
        <Route path='/aquarium' element={<Aquarium />} />
        <Route path='/gymfluencer' element={<GymFluencer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
