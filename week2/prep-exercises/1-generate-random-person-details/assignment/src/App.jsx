
import './App.css'
import {Person} from './Person';
import { PersonController } from './PersonController';


function App() {
const {firstName,lastName,email} = PersonController();

  return (
    <div className="App">
     <Person firstName={firstName} lastName={lastName} email={email}/>
   </div>   
  )
}

export default App
