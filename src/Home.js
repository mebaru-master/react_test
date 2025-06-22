import React from 'react';

function Home() {
  return (
    <div style={{color:'#fff', padding:'40px'}}>
      <h2>ホーム</h2>
      <p>ようこそ、Netflix風サンプルアプリのホームページです。</p>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/newest/ourStory/fuji/desktop/tv.png" alt="ホーム" style={{maxWidth:'400px', borderRadius:'12px'}} />
      <div style={{marginTop:'32px', background:'rgba(0,0,0,0.5)', padding:'24px', borderRadius:'8px'}}>
        <h3>これは「ホーム」ページです！</h3>
        <p>「ホーム」をクリックするとこのメッセージが表示されます。</p>
      </div>
    </div>
  );
}

export default Home;
