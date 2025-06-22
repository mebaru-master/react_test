import React from 'react';

function Movies() {
  return (
    <div style={{color:'#fff', padding:'40px'}}>
      <h2>映画</h2>
      <p>Netflix風サンプルアプリの映画ページです。</p>
      <img src="https://occ-0-3011-3462.1.nflxso.net/art/8b7b2/8b7b2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg" alt="映画" style={{maxWidth:'400px', borderRadius:'12px'}} />
      <div style={{marginTop:'32px', background:'rgba(0,0,0,0.5)', padding:'24px', borderRadius:'8px'}}>
        <h3>これは「映画」ページです！</h3>
        <p>「映画」をクリックするとこのメッセージが表示されます。</p>
      </div>
    </div>
  );
}

export default Movies;
