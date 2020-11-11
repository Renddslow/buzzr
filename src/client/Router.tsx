import React, { useEffect, useState } from 'react';

const Router = (props) => {
  const getCurrentRoute = () => {
    const path = window.location.pathname;

    if (path.includes('game')) {
      const regexpr = /\/game\/([a-zA-Z]*)/;
      const [, gameId] = regexpr.exec(path) || [];
      return path.includes('present')
        ? { route: 'game_present', param: gameId }
        : { route: 'game', param: gameId };
    }

    if (path === '/new') {
      return { route: 'new' };
    }

    return { route: 'home' };
  };

  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute());

  const handleRouting = () => setCurrentRoute(getCurrentRoute());

  useEffect(() => {
    window.addEventListener('pushstate', handleRouting);

    return () => window.removeEventListener('popstate', handleRouting);
  }, []);

  return props.children[currentRoute.route](currentRoute);
};

export default Router;
