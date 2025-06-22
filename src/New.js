import React from 'react';

function New() {
  return (
    <div style={{color:'#fff', padding:'40px'}}>
      <h2>新着</h2>
      <p>Netflix風サンプルアプリの新着ページです。</p>
      <img src="https://occ-0-3011-3462.1.nflxso.net/art/9b7b2/9b7b2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg" alt="新着" style={{maxWidth:'400px', borderRadius:'12px'}} />
      <div style={{marginTop:'32px', background:'rgba(0,0,0,0.5)', padding:'24px', borderRadius:'8px'}}>
        <h3>これは「新着」ページです！</h3>
        <p>「新着」をクリックするとこのメッセージが表示されます。</p>
      </div>
    </div>
  );
}

export default New;
