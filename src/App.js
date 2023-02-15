import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const myState = useSelector(state => state.updateProps)
  const[miliSec, setMiliSec] = useState(0)
  const[sec, setSec] = useState(0)

  const timer = () => {
    if(myState.play){
      setTimeout(() => {
        setMiliSec(miliSec+1);

        if(miliSec === 99){
          setSec(sec+1);
          setMiliSec(0);
        }
      },1);
    }
  }

  return (
    <>
      <div className='timer'>
          {sec<10 ? "0"+sec : sec} : {miliSec<10 ? "0"+miliSec : miliSec}
      </div>
      {timer()}
      {/* {console.log("BAR BAR HO RAHA HAI??")} */}
      <Header/>
        {/* <h1> HELLO FOR FIRST TIME </h1> */}
      <Home/>
    </>
  );
}

export default App
