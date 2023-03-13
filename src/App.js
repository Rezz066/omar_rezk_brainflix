import './App.scss';
import Nav from './components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UploadVideoPage from './pages/UploadVideoPage/UploadVideoPage';
import Homepage from './pages/Homepage/Homepage'
import SuccessPage from './pages/SuccessPage/SuccessPage';

export default function App() {

  return (

    <BrowserRouter>
      <Nav />

        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/video/:videoId" element={<Homepage/>} />
          <Route path="/upload-video" element={<UploadVideoPage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
        </Routes>

    </BrowserRouter>

  );
}


