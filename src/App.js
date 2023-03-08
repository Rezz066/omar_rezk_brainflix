import './App.scss';
import Nav from './components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadVideoPage from './pages/UploadVideoPage/UploadVideoPage';
import Homepage from './pages/Homepage/Homepage'

export default function App() {

  return (

    <BrowserRouter>
      <Nav />

        <Routes>
          <Route path="upload-video" element={<UploadVideoPage/>}/>
          <Route path="homepage" element={<Homepage/>} />
        </Routes>

    </BrowserRouter>

  );
}


