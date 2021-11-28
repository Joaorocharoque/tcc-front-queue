import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./home/Home";
import { TabelaSec } from "./home/TabelaSec";
import { TabelaVet } from "./home/TabelaVet";
import { UserQueueHome } from "./home/UserQueueHome";
import { QueueProvider } from "./hooks/useQueue";

function App() {

  return (
    <QueueProvider>
      <Router>
          <Navbar />
            <Routes>
            <Route path="/TabelaVet" element={<TabelaVet />} />
            <Route path="/TabelaSec" element={<TabelaSec />} />
            <Route path="/" element={<Home />} />
            <Route path="/user/queue" element={<UserQueueHome/>} />
          </Routes>
      </Router>
    </QueueProvider>
  );
}
export default App;
