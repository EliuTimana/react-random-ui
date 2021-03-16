import React from 'react'

import { Button, Checkbox, ExampleComponent } from 'react-random-ui'
import 'react-random-ui/dist/index.css'

const App = () => {

  const handleButtonClick = (saludo: string) => {
    alert(saludo)
  }

  return <>
    <ExampleComponent text="Create React Library Example 😄"/>
    <Button label="test" onPress={handleButtonClick} color={"green"}/>
    <Checkbox/>
  </>
}

export default App
