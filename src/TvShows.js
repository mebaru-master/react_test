import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Drama() {
  return <div style={{marginTop:'32px', color:'#fff'}}><h4>ドラマページ</h4><p>ドラマのサンプルコンテンツです。</p></div>;
}
function Sports() {
  return <div style={{marginTop:'32px', color:'#fff'}}><h4>スポーツページ</h4><p>スポーツのサンプルコンテンツです。</p></div>;
}
function Variety() {
  return <div style={{marginTop:'32px', color:'#fff'}}><h4>バラエティページ</h4><p>バラエティのサンプルコンテンツです。</p></div>;
}
function Document() {
  return <div style={{marginTop:'32px', color:'#fff'}}><h4>ドキュメントページ</h4><p>ドキュメントのサンプルコンテンツです。</p></div>;
}

function TvShows() {
  return (
    <div style={{color:'#fff', padding:'40px'}}>
      <h2>TV番組</h2>
      <p>Netflix風サンプルアプリのTV番組ページです。</p>
      <img src="https://occ-0-3011-3462.1.nflxso.net/art/6b7b2/6b7b2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg" alt="TV番組" style={{maxWidth:'400px', borderRadius:'12px'}} />
      <div style={{marginTop:'32px', background:'rgba(0,0,0,0.5)', padding:'24px', borderRadius:'8px'}}>
        <h3>これは「TV番組」ページです！</h3>
        <p>「TV番組」をクリックするとこのメッセージが表示されます。</p>
        <nav style={{marginTop:'24px'}}>
          <ul style={{display:'flex', gap:'24px', listStyle:'none', padding:0}}>
            <li><Link to="drama" style={{color:'#fff', textDecoration:'underline'}}>ドラマ</Link></li>
            <li><Link to="sports" style={{color:'#fff', textDecoration:'underline'}}>スポーツ</Link></li>
            <li><Link to="variety" style={{color:'#fff', textDecoration:'underline'}}>バラエティ</Link></li>
            <li><Link to="document" style={{color:'#fff', textDecoration:'underline'}}>ドキュメント</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="drama" element={<Drama />} />
          <Route path="sports" element={<Sports />} />
          <Route path="variety" element={<Variety />} />
          <Route path="document" element={<Document />} />
        </Routes>
      </div>
    </div>
  );
}

export default TvShows;
