
import React from 'react';
import Card from './Card';
import './Landing.css';
import { Link } from 'react-router-dom';
// import logo from '../slidingpuzzle/assets/logo.jpg'
import puzzleimg from '../gameimages/slidingpuzzle.jpg'
import sudoku from '../gameimages/sudoku.jpg'
import tictac from '../gameimages/Tic_tac.png'
const Landing = () => {
  return (
    <section className="hero">
      <h2 style={{color:"#3281a8",marginBottom:"50px"}} className="hero__title">Multi Game Simulator</h2>
      {/* <p className="hero__subtitle">Play,Enjoy & Earn</p> */}
      <div className="hero__cards">
     <Link to='/sliding-puzzle'>  <Card  path={puzzleimg} title="Sliding Puzzle" content="Slide, Think, Solve - Win the Game" /></Link>
     <Link to='/sudoku-solver'> <Card  path={sudoku} title="Sudoku Solver" content="Sudoku Solver - Test Your Skills" /></Link>  
    <Link to="/TicTac" ><Card  path={tictac} title="Tic Tac Toe" content="Outsmart Opponents, Line Up Three" /></Link>
      </div>
    </section>
  );
};

export default Landing;
