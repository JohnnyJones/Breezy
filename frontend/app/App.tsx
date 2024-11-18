import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../components/Example';
import Board from './Board';
import Column from './Column';
import Job from './Job';
import { JobStatus } from './types';

function App() {
   
    return(
        <>
          <h1>MY APP</h1>
          <Board />
          <Example />
        </>
    )
}

export default App;