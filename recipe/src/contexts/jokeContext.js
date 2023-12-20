import { createContext, useState } from "react";

export const JokeContext = createContext(null)
export const SetJokeContext = createContext(null)

const JokeProvider = ({children}) => {
  const [joke, setJoke] = useState('??')


  return(
    <JokeContext.Provider value={joke}>
      <SetJokeContext.Provider value={setJoke}>
        {children}
      </SetJokeContext.Provider>
    </JokeContext.Provider>
  )}

  export default JokeProvider