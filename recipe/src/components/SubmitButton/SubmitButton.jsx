import { Button } from "@mui/material"
import axios from 'axios';
import { useContext, useState } from "react";
import { SetJokeContext } from "../../contexts/jokeContext";

// const SubmitButtun = ({setJoke}) => {
  const SubmitButtun = () => {

  const setJoke = useContext(SetJokeContext)

  const [disabled, setDisabled] = useState(false)

  const url = 'https://api.chucknorris.io/jokes/random'

  const getJoke = async() => {
    setDisabled(true)
    try{
      const response = await axios.get(url)
      console.log(response)
      console.log(response.data.value)
      setJoke(response.data.value)
    }
    catch(error){
      console.log(error)
      setJoke('ERROR')
    }
    finally{
      setDisabled(false)
    }
  }


  return(
    <Button
      disabled={disabled}
      onClick={getJoke}
    >
      GIVE ME A JOKE
    </Button>
  )
}

export default SubmitButtun
