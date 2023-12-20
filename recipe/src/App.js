import './App.css';
import Typography from '@mui/material/Typography';
import SubmitButtun from './components/SubmitButton/SubmitButton';
import Joke from './components/Joke/Joke';
import { useState } from 'react';
import JokeProvider from './contexts/jokeContext.js'


// 'https://api.chucknorris.io/jokes/random'
// 'https://catfact.ninja/fact'


function App() {

  

  // const [joke, setJoke] = useState('')

  return (
    <JokeProvider>
      <Typography >
        THIS IS MY WEBSITTE
      </Typography>
      {/* <SubmitButtun setJoke={setJoke}/>
      <Joke joke={joke}/> */}
      <SubmitButtun/>
      <Joke/>
    </JokeProvider>
  );
}

export default App;
