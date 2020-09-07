import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    let url = 'https://www.bluehost.com/track/ahmedmire';

    if (typeof window !== 'undefined') window.location.replace(url);
  }, []);
  return <div></div>;
};
