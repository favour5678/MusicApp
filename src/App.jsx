import './index.css'
import Home from './pages/Home'
import { SongProvider } from './context/SongContext'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/MusicRoute'

function App() {
  return (
    <SongProvider>
      <RouterProvider router={ Router }/>
   </SongProvider>
  )
}

export default App;