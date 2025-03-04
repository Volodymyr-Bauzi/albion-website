import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Main from './pages/Main';
import ContactUs from './pages/ContactUs';

import './base.scss';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Pogo</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
