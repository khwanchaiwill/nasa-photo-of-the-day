import React, {useState, useEffect} from "react";
import "./App.css";
import PlanHeader from './plan/plan'
import axios from 'axios'
import {API_KEY, DATE} from './constant/constant'
// import { isCompositeComponent } from "react-dom/test-utils";


  
function App() {
  
  const [nasa, setNasa] = useState([])
  const [cerrentNaSa, setCurrentNasa] = useState(null)

  const openCurrentNasa = id => {
    setCurrentNasa(id)
  }
  const closeCerrentNasa = () =>{
      setCurrentNasa(null)
  }
  useEffect(() =>{
    console.log('side effect')
    return ()=>{
      console.log('🥇 Clean up after the Effect')
    }
  }, [])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`)
    .then(res =>{
     setNasa(res.data)
     console.log('This is what I get 😱' )
    })

    .catch(err =>{

    })
  },[])

  return (
    <div className="App">
      <div className="planDiv">
        {<PlanHeader/>}        
      
      </div>     
    </div>
  )
}

export default App;
