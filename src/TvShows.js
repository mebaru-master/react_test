import React from 'react';

function TvShows() {
  return (
    <div style={{color:'#fff', padding:'40px'}}>
      <h2>TV番組</h2>
      <p>Netflix風サンプルアプリのTV番組ページです。</p>
      <img src="https://occ-0-3011-3462.1.nflxso.net/art/6b7b2/6b7b2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg" alt="TV番組" style={{maxWidth:'400px', borderRadius:'12px'}} />
      <div style={{marginTop:'32px', background:'rgba(0,0,0,0.5)', padding:'24px', borderRadius:'8px'}}>
        <h3>これは「TV番組」ページです！</h3>
        <p>「TV番組」をクリックするとこのメッセージが表示されます。</p>
      </div>
    </div>
  );
}

export default TvShows;
