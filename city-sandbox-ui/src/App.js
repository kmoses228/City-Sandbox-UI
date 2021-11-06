import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import paths from './constants/paths';
import Editor from './routes/Editor';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={paths.editor} element={<Editor />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
