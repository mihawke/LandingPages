import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NftDesignOne from './pages/NftDesignOne/NftDesignOne'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NftDesignOne />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
