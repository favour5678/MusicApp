import './index.css'
import Home from './pages/Home'
import { SongProvider } from './context/SongContext'

function App() {
  return (
    <SongProvider>
      <Home />
   </SongProvider>
  )
}

export default App
