import React from 'react';

function MyList() {
  return (
    <div style={{color:'#fff', padding:'40px'}}>
      <h2>マイリスト</h2>
      <p>Netflix風サンプルアプリのマイリストページです。</p>
      <img src="https://occ-0-3011-3462.1.nflxso.net/art/ab7b2/ab7b2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg" alt="マイリスト" style={{maxWidth:'400px', borderRadius:'12px'}} />
      <div style={{marginTop:'32px', background:'rgba(0,0,0,0.5)', padding:'24px', borderRadius:'8px'}}>
        <h3>これは「マイリスト」ページです！</h3>
        <p>「マイリスト」をクリックするとこのメッセージが表示されます。</p>
      </div>
    </div>
  );
}

export default MyList;
