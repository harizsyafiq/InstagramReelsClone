import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
  // App Component will run ONCE when it load, and never again
    db.collection('reels').onSnapshot(snapshot =>(
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (

    // BEM naming convention
    <div className="app">

      <div className="app__top">
        {/* image at top - logo */}
        <img className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" />

        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {/*Container of app__videos (scrollable container)*/}
    {reels.map(({channel, avatarSrc, song, url, likes , shares}) => (
      <VideoCard 
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />
    ))}
      </div>
    </div>
  );
}

export default App;
