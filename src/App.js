// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TvShows from './TvShows';
import Movies from './Movies';
import New from './New';
import MyList from './MyList';

function App() {
  return (
    <Router>
      <div className="App netflix-bg">
        <header className="Netflix-header">
          <nav className="Netflix-nav">
            <Link to="/" style={{textDecoration:'none'}}>
              <span className="Netflix-logo">NETFLIX</span>
            </Link>
            <ul className="Netflix-menu">
              <li><Link to="/" style={{color:'#fff', textDecoration:'none'}}>ホーム</Link></li>
              <li><Link to="/tv" style={{color:'#fff', textDecoration:'none'}}>TV番組</Link></li>
              <li><Link to="/movies" style={{color:'#fff', textDecoration:'none'}}>映画</Link></li>
              <li><Link to="/new" style={{color:'#fff', textDecoration:'none'}}>新着</Link></li>
              <li><Link to="/mylist" style={{color:'#fff', textDecoration:'none'}}>マイリスト</Link></li>
            </ul>
          </nav>
          <div className="Netflix-hero">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tv" element={<TvShows />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/new" element={<New />} />
              <Route path="/mylist" element={<MyList />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
