import './App.css'
import Main from './pages/Main.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
