import React from 'react';
import Landing from './LandingPage/Landing';
import SlidePuzzle from './slidingpuzzle/SlidePuzzle';
// import Navbar from './navbar/Navbar';
import { Routes ,Route } from 'react-router-dom';
import SudokuSolver from './sudoku/SudokuSolver';
import TicTac from './TicTac/TicTac';
import Ben from './slidingpuzzle/Ben';
import Tomandjerry from './slidingpuzzle/Tomandjerry';
import Doremon from './slidingpuzzle/Doremon';
import MatchCard from './MatchCard/MatchCard';
import DiceGame from './DiceGame/DiceGame';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
<Routes>
<Route path='/' element={<Landing />}/>
<Route path='/sliding-puzzle/doremon' element={<Doremon/>}/>
<Route path='/sliding-puzzle/ben' element={<Ben />}/>
<Route path='/sliding-puzzle/tomandjerry' element={<Tomandjerry />}/>
<Route path='/sliding-puzzle' element={<SlidePuzzle />}/>
<Route path='/sudoku-solver' element={<SudokuSolver />}/>
<Route path='/TicTac' element={<TicTac />}/>
<Route path='/MatchCard' element={<MatchCard />}/>
<Route path='/DiceGame' element={<DiceGame/>}/>
</Routes>
      
    </div>
  );
}

export default App;
