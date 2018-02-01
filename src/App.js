//imports the React module
import React from 'react';

//imports the components
import Board from './components/Board/Board';

//react component that puts the main game together
const App = () => (
    <div className="container-fluid">
      <Board />
    </div>
)

export default App;