import './App.css';
import { useState } from 'react';
import { MoreEffect } from './components/MoreEffect';

const App = () => {
  //pakai sebelum return untuk inisialisai
  // const [dark, setDark]= useState(false)

  // return (
  //   <div style={{backgroundColor: dark? 'black' : 'white' }}>
  //     <p style={{color: dark ? 'white': 'black'}}>Color : {dark?'black' : 'white'} </p>
  //     <button onClick={() => setDark(!dark)}>
  //       set Theme {dark ? 'white' : 'black'}
  //     </button>
  //   </div>
  // );

  return(
    <>
      <MoreEffect/>
    </>
  )
}

export default App;