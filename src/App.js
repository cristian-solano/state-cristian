
import './App.css';
import { useState } from 'react'
import Button from './Componenets/Button'

function App() {

  const [ count, setCount ] = useState(0)

  const minLimit = () => {
    if (count > 0){
      setCount(count - 1)
    } 
    return count
  }
  
  const maxLimit = () => {
    if (count < 20){
      setCount(count + 1)
    }
    return count
  }

  



  return (
    <div className="App">
      <header className="App-header">
       {count}
       <Button name="aumentar" func={maxLimit}/>
       <Button name="disminuir"func={minLimit}/>

      </header>
    </div>
  );
}

export default App;
