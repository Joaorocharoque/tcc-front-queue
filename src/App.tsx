import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { TabelaSec } from "./pages/TabelaSec";
import { TabelaVet } from "./pages/TabelaVet";


function App() {

  return (
     <Router>
      <Navbar />
      <Routes>
      <Route path="/TabelaVet" element={<TabelaVet />} />
      <Route path="/TabelaSec" element={<TabelaSec />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
