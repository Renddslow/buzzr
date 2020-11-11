import React from 'react';
import Router from './Router';

import Buzzer from './routes/buzzer';
import Presenter from './routes/presenter';

const App = () => {
  return (
    <div>
      <Router>
        {{
          game: Buzzer,
          new: () => <span>👍</span>,
          home: () => <span>🏚</span>,
          game_present: Presenter,
        }}
      </Router>
    </div>
  );
};

export default App;
