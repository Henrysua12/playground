import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage"
import TestPage from './pages/TestPage';
import BasicCrud from './pages/BasicCrud';

function App() {
  return (
    <Router>
      <div>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/basicCrud" element={<BasicCrud />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
