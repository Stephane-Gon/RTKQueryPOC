import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './components/homePage';
import Album from './features/albuns/album';
import Playlist from './features/playlists/playlist';


function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />}/>
        <Route path="album/:id" element={<Album />}/>
        <Route path="playlist/:id" element={<Playlist />}/>
      </Route>
    </Routes>
  )
}

export default App
