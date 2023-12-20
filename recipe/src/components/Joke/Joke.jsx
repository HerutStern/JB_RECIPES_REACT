import { Typography } from "@mui/material"
import { useContext } from "react"
import { JokeContext } from "../../contexts/jokeContext"

// const Joke = ({joke}) => {
  const Joke = () => {

  const joke = useContext(JokeContext)

  return (
    <Typography>
      this is the joke - {joke}
    </Typography>
  )
}

export default Joke
