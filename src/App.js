import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Main from './pages/Main';
import ContactUs from './pages/ContactUs';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Helmet>
            <title>Great Albion Projec</title>
          </Helmet>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
