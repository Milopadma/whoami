import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const TwitterFeed = () => {
  const containerRef = useRef(null);

  const handleScriptLoad = () => {
    const twttr = window.twttr || {};
    twttr.ready = (twttrObj) => {
      twttrObj.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: 'mylodev',
        },
        containerRef.current,
        {
          width: '500px',
          height: '600px',
        }
      );
    };  };

  const ScriptLoader = dynamic(
    () => import('next/script'),
    { ssr: false }
  );

  return (
    <>
      <ScriptLoader
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div ref={containerRef} />
    </>
  );
};

export default TwitterFeed;